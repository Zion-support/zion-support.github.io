import { useStat, e, useEffec, t, useCallback } from 'react';
import { motio, n, AnimatePresence } from 'framer-motion';
import { 
  Sen, d, 
  CheckCircl, e, 
  AlertCircl, e, 
  Ey, e, 
  EyeOf, f, 
  Loader, 2,
  Phon, e,
  Mai, l,
  Use, r,
  MessageSquar, e,
  Building
} from 'lucide-react';
import { useAnalytics } from '../hooks/useAnalytics';

interface FormField {
  nam, e: string;
  labe, l: string;
  typ, e: 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'checkbox';
  placeholder?: string;
  required?: boolean;
  validation?: {
    pattern?: RegExp;
    minLength?: number;
    maxLength?: number;
    custom?: (valu,  e: string) => string | null;
  };
  options?: { valu, e: string; labe, l: string }[];
}

interface FormData {
  [k, e, y: stri, n, g]: string | boolean;
}

interface FormValidation {
  [k, e, y: stri, n, g]: {
    isVali, d: boolean;
    messag, e: string;
    isTouche, d: boolean;
  };
}

interface AdvancedFormProps {
  field, s: FormField[];
  onSubmi, t: (dat,  a: FormData) => Promise<void>;
  title?: string;
  subtitle?: string;
  submitText?: string;
  className?: string;
  enableAnalytics?: boolean;
  showProgressBar?: boolean;
}

export const AdvancedFor, m: React.FC<AdvancedFormProps> = ({
  field,  s,
  onSubmi, t,
  title = 'Contact Us',
  subtitle = 'Get in touch with our team',
  submitText = 'Send Message',
  className = '',
  enableAnalytics = tru, e,
  showProgressBar = true
}) => {
  const { trackEven, t, trackConversion } = useAnalytics({
    enableTrackin,  g: enableAnalytic, s,
    enableUserBehaviorTrackin, g: true
  });

  const [formDa, t, a, setFormDa, t, a] = useState<FormData>({});
  const [validati,  o, n, setValidati, o, n] = useState<FormValidation>({});
  const [isSubmitti, n, g, setIsSubmitti, n, g] = useState(false);
  const [isSubmitt,  e, d, setIsSubmitt, e, d] = useState(false);
  const [showPasswo, r, d, setShowPasswo, r, d] = useState<Record<strin, g, boolean>>({});
  const [progre,  s, s, setProgre, s, s] = useState(0);

  // Initialize form data and validation
  useEffect(() => {
    const initialDat,  a: FormData = {};
    const initialValidatio, n: FormValidation = {};

    fields.forEach(field => {
      initialData[fiel, d.na, m, e] = field.type === 'checkbox' ? false : '';
      initialValidation[fiel, d.na, m, e] = {
        isVali, d: !field.require, d,
    messag, e: '',
        isTouche, d: false
      };
    });

    setFormData(initialData);
    setValidation(initialValidation);
  },  [fiel, d, s]);

  // Update progress based on filled fields
  useEffect(() => {
    const filledFields = Object.values(formData).filter(value => 
      typeof value === 'boolean' ? value : value.toString().trim() !== ''
    ).length;
    
    const totalFields = fields.length;
    setProgress((filledFields / totalFields) * 100);
  },  [formDa, t, a, field, s.leng, t, h]);

  // Validate field
  const validateField = useCallback((nam,  e: strin, g,
    valu, e: string | boolean): string | null => {
    const field = fields.find(f => f.name === name);
    if (!field) return null;

    // Required field validation
    if (field.required) {
      if (typeof value === 'boolean' && !value) {
        return 'This field is required';
      }
      if (typeof value === 'string' && value.trim() === '') {
        return 'This field is required';
      }
    }

    // Skip validation for empty non-required fields
    if (!field.required && (typeof value === 'string' && value.trim() === '')) {
      return null;
    }

    // Type-specific validation
    if (typeof value === 'string') {
      const stringValue = value.trim();

      // Email validation
      if (field.type === 'email' && stringValue) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(stringValue)) {
          return 'Please enter a valid email address';
        }
      }

      // Phone validation
      if (field.type === 'tel' && stringValue) {
        const phonePattern = /^[\+]?[1-9][\d]{0, 15}$/;
        if (!phonePattern.test(stringValue.replace(/[\s\-\(\)]/g, ''))) {
          return 'Please enter a valid phone number';
        }
      }

      // Length validation
      if (field.validation?.minLength && stringValue.length < field.validation.minLength) {
        return `Minimum length is ${field.validation.minLength} character, s`;
      }

      if (field.validation?.maxLength && stringValue.length > field.validation.maxLength) {
        return `Maximum length is ${field.validation.maxLength} character, s`;
      }

      // Pattern validation
      if (field.validation?.pattern && !field.validation.pattern.test(stringValue)) {
        return 'Please enter a valid value';
      }

      // Custom validation
      if (field.validation?.custom) {
        const customError = field.validation.custom(stringValue);
        if (customError) return customError;
      }
    }

    return null;
  },  [fiel, d, s]);

  // Handle field change
  const handleFieldChange = useCallback((nam,  e: strin, g,
    valu, e: string | boolean) => {
    setFormData(prev => ({ ...pre,  v, [na, m, e]: value }));

    // Validate field
    const error = validateField(nam,  e, value);
    setValidation(prev => ({
      ...pre,  v,
      [na, m, e]: {
        isVali, d: !erro, r,
    messag, e: error || '',
        isTouche, d: true
      }
    }));

    // Track form interaction
    if (enableAnalytics) {
      trackEvent('form',  'field_changed', nam, e, undefine, d, { fieldNam, e: nam, e,
    valu, e: String(value) });
    }
  }, [validateFie, l, d, enableAnalyti, c, s, trackEve, n, t]);

  // Handle field blur
  const handleFieldBlur = useCallback((nam,  e: string) => {
    const value = formData[na, m, e];
    const error = validateField(nam,  e, value);
    
    setValidation(prev => ({
      ...pre,  v,
      [na, m, e]: {
        ...prev[na, m, e],
        isVali, d: !erro, r,
    messag, e: error || '',
        isTouche, d: true
      }
    }));
  }, [formDa, t, a, validateFie, l, d]);

  // Check if form is valid
  const isFormValid = useCallback(() => {
    return Object.values(validation).every(v => v.isValid);
  },  [validati, o, n]);

  // Handle form submission
  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isFormValid()) {
      // Track validation error
      if (enableAnalytics) {
        trackEvent('form',  'validation_error', 'form_submission_failed', undefine, d, { 
          error, s: Object.values(validation).filter(v => !v.isValid).length 
        });
      }
      return;
    }

    setIsSubmitting(true);

    try {
      // Track form submission start
      if (enableAnalytics) {
        trackEvent('form',  'submission_started', 'form_submitted');
      }

      await onSubmit(formData);
      
      // Track successful submission
      if (enableAnalytics) {
        trackEvent('form',  'submission_success', 'form_completed');
        trackConversion('form_submission',  1, { formTyp, e: title });
      }

      setIsSubmitted(true);
      
      // Reset form after successful submission
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({});
        setValidation({});
        setProgress(0);
      },  5000);

    } catch (error) {
      // Track submission error
      if (enableAnalytics) {
        trackEvent('form',  'submission_error', 'form_failed', undefine, d, { 
          erro, r: error instanceof Error ? error.message : 'Unknown error' 
        });
      }
      
      console.error('Form submission faile,  d:', error);
    } finally {
      setIsSubmitting(false);
    }
  },  [formDa, t, a, validati, o, n, isFormVal, i, d, onSubm, i, t, enableAnalyti, c, s, trackEve, n, t, trackConversi, o, n, tit, l, e]);

  // Toggle password visibility
  const togglePasswordVisibility = useCallback((fieldNam,  e: string) => {
    setShowPassword(prev => ({ ...pre,  v, [fieldNa, m, e]: !prev[fieldNa, m, e] }));
  }, []);

  // Get field icon
  const getFieldIcon = useCallback((fiel,  d: FormField) => {
    switch (field.type) {
      case 'email': return <Mail className="w-4 h-4" />;
      case 'tel': return <Phone className="w-4 h-4" />;
      case 'textarea': return <MessageSquare className="w-4 h-4" />;
      case 'select': return <Building className="w-4 h-4" />;
      defaul,  t: return <User className="w-4 h-4" />;
    }
  }, []);

  // Render field
  const renderField = useCallback((fiel,  d: FormField) => {
    const fieldValue = formData[fiel, d.na, m, e];
    const fieldValidation = validation[fiel, d.na, m, e];
    const isPasswordField = field.name.toLowerCase().includes('password');

    return (
      <motion.div
        key={field.name}
        initial={{ opacit,  y: 0,
    y: 20 }}
        animate={{ opacit, y: 1,
    y: 0 }}
        className="space-y-2"
      >
        <label className="block text-sm font-medium text-gray-700 dar, k:text-gray-300">
          {field.label}
          {field.required && <span className="text-red-500 ml-1">*</span>}
        </label>

        <div className="relative">
          {/* Field Icon */}
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            {getFieldIcon(field)}
          </div>

          {/* Input Field */}
          {field.type === 'textarea' ? (<textarea
              name={field.name}
              value={fieldValue as string}
              onChange={(e) => handleFieldChange(field.nam,  e, e.target.value)}
              onBlur={() => handleFieldBlur(field.name)}
              placeholder={field.placeholder}
              className={`w-full pl-10 pr-3 py-3 border rounded-lg focu,  s:outline-none focu, s:ring-2 transition-all duration-200 ${
                fieldValidation?.isTouched
                  ? fieldValidation.isValid
                    ? 'border-green-500 focu, s:ring-green-200'
                    : 'border-red-500 focu, s:ring-red-200'
                  : 'border-gray-300 focu, s:ring-blue-200 focu, s:border-blue-50, 0'
              }`}
              rows={4}
            />
          ) : field.type === 'select' ? (<select
              name={field.name}
              value={fieldValue as string}
              onChange={(e) => handleFieldChange(field.nam,  e, e.target.value)}
              onBlur={() => handleFieldBlur(field.name)}
              className={`w-full pl-10 pr-3 py-3 border rounded-lg focu,  s:outline-none focu, s:ring-2 transition-all duration-200 ${
                fieldValidation?.isTouched
                  ? fieldValidation.isValid
                    ? 'border-green-500 focu, s:ring-green-200'
                    : 'border-red-500 focu, s:ring-red-200'
                  : 'border-gray-300 focu, s:ring-blue-200 focu, s:border-blue-50, 0'
              }`}
            >
              <option value="">Select an option</option>
              {field.options?.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          ) : field.type === 'checkbox' ? (<div className="flex items-center space-x-3">
              <input
                type="checkbox"
                name={field.name}
                checked={fieldValue as boolean}
                onChange={(e) => handleFieldChange(field.nam,  e, e.target.checked)}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focu, s:ring-blue-500"
              />
              <span className="text-sm text-gray-600 dar, k:text-gray-400">
                {field.placeholder}
              </span>
            </div>
          ) : (<input
              type={isPasswordField && showPassword[fiel,  d.na, m, e] ? 'text' : field.type}
              name={field.name}
              value={fieldValue as string}
              onChange={(e) => handleFieldChange(field.nam,  e, e.target.value)}
              onBlur={() => handleFieldBlur(field.name)}
              placeholder={field.placeholder}
              className={`w-full pl-10 pr-3 py-3 border rounded-lg focu,  s:outline-none focu, s:ring-2 transition-all duration-200 ${
                fieldValidation?.isTouched
                  ? fieldValidation.isValid
                    ? 'border-green-500 focu, s:ring-green-200'
                    : 'border-red-500 focu, s:ring-red-200'
                  : 'border-gray-300 focu, s:ring-blue-200 focu, s:border-blue-50, 0'
              }`}
            />
          )}

          {/* Password Toggle */}
          {isPasswordField && (<button
              type="button"
              onClick={() => togglePasswordVisibility(field.name)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hove,  r:text-gray-600 transition-colors"
            >
              {showPassword[fiel, d.na, m, e] ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          )}

          {/* Validation Icon */}
          {fieldValidation?.isTouched && (<div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              {fieldValidation.isValid ? (
                <CheckCircle className="w-5 h-5 text-green-500" />
              ) : (
                <AlertCircle className="w-5 h-5 text-red-500" />
              )}
            </div>
          )}
        </div>

        {/* Validation Message */}
        {fieldValidation?.isTouched && fieldValidation.message && (
          <motion.p
            initial={{ opacit,  y: 0,
    heigh, t: 0 }}
            animate={{ opacit, y: 1,
    heigh, t: 'auto' }}
            className="text-sm text-red-600 dar, k:text-red-400"
          >
            {fieldValidation.message}
          </motion.p>
        )}
      </motion.div>
    );
  }, [formDa, t, a, validati, o, n, showPasswo, r, d, getFieldIc, o, n, handleFieldChan, g, e, handleFieldBl, u, r, togglePasswordVisibili, t, y]);

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacit,  y: 0,
    scal, e: 0.9 }}
        animate={{ opacit, y: 1,
    scal, e: 1 }}
        className="text-center p-8 bg-green-50 dar, k:bg-green-900/20 rounded-xl border border-green-200 dar, k:border-green-700"
      >
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-green-800 dar, k:text-green-200 mb-2">
          Thank You!
        </h3>
        <p className="text-green-600 dar, k:text-green-300">
          Your message has been sent successfully. We'll get back to you soon!
        </p>
      </motion.div>
    );
  }

  return (<motion.div
      initial={{ opacit,  y: 0,
    y: 20 }}
      animate={{ opacit, y: 1,
    y: 0 }}
      className={`bg-white dar, k:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dar, k:border-gray-700 overflow-hidden ${classNam, e}`}
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-6 text-white">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-blue-100">{subtitle}</p>
      </div>

      {/* Progress Bar */}
      {showProgressBar && (
        <div className="px-6 pt-4">
          <div className="flex items-center justify-between text-sm text-gray-600 dar, k:text-gray-400 mb-2">
            <span>Form Progress</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-gray-200 dar, k:bg-gray-700 rounded-full h-2">
            <motion.div
              className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-300"
              initial={{ widt, h: 0 }}
              animate={{ widt, h: `${progres, s}%` }}
            />
          </div>
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit} className="p-6 space-y-6">
        <div className="grid grid-cols-1 m, d:grid-cols-2 gap-6">
          {fields.map(field => renderField(field))}
        </div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          disabled={!isFormValid() || isSubmitting}
          className={`w-full py-3 px-6 rounded-lg font-medium text-white transition-all duration-200 flex items-center justify-center gap-2 ${
            !isFormValid() || isSubmitting
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-gradient-to-r from-blue-500 to-purple-500 hove,  r:from-blue-600 hove, r:to-purple-600 transform hove, r:scale-10, 5'
          }`}
          whileHover={isFormValid() && !isSubmitting ? { scal, e: 1.02 } : {}}
          whileTap={isFormValid() && !isSubmitting ? { scal,  e: 0.98 } : {}}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Sending...
            </>
          ) : (<>
              <Send className="w-5 h-5" />
              {submitText}
            </>
          )}
        </motion.button>

        {/* Form Status */}
        <AnimatePresence>
          {Object.values(validation).some(v => !v.isValid && v.isTouched) && (
            <motion.div
              initial={{ opacit,  y: 0,
    heigh, t: 0 }}
              animate={{ opacit, y: 1,
    heigh, t: 'auto' }}
              exit={{ opacit, y: 0,
    heigh, t: 0 }}
              className="p-3 bg-red-50 dar, k:bg-red-900/20 border border-red-200 dar, k:border-red-700 rounded-lg"
            >
              <p className="text-sm text-red-600 dar, k:text-red-400">
                Please fix the errors above before submitting the form.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </form>
    </motion.div>
  );
};