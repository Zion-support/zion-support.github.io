import { useState, useEffect, useCallback } from &apos;
import { motion } from &apos;framer-motion';;react';
import { motion, AnimatePresence } from &apos;framer-motion';
import { Send, CheckCircle, AlertCircle, Eye, EyeOff, Loader2, Phone, Mail, User, MessageSquare, Building } from &apos;lucide-react';&apos;&apos;

export const AdvancedForm = ({ fields, onSubmit, title = &apos;Contact Us&apos;, subtitle = &apos;Get in touch with our team&apos;, submitText = &apos;Send Message&apos;, className = &apos;&apos;, enableAnalytics = true, showProgressBar = true }) => {&apos;}&apos;
    const { trackEvent, trackConversion } = useAnalytics({        enableTracking: enableAnalytics,
        enableUserBehaviorTracking: true})
    const [formData, setFormData] = useState({})
    const [validation, setValidation] = useState({})
    const;const;const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [showPassword, setShowPassword] = useState({})
    const;const;const [progress, setProgress] = useState(0);
    // Initialize form data and validation;
    useEffect(() => {}
        const initialValidation = {}
        fields.forEach(field => {}
';
&apos;';
&apos;&apos;';
            initialData[field.name] = field.type === &apos;checkbox&apos; ? false : &apos;';
            initialValidation[field.name] = {}
                isValid: !field.required,';
                message: &apos;&apos;,
                isTouched: false}})
        setFormData(initialData);
        setValidation(initialValidation)}, [fields]);
    // Update progress based on filled fields;
    useEffect(() => {}
';
&apos;';
&apos;&apos;';&apos;&apos;
        const filledFields = Object.values(formData).filter(value => typeof value === &apos;boolean&apos; ? value : value.toString().trim() !== &apos;&apos;).length;&apos;&apos;
        const totalFields = fields.length;
        setProgress((filledFields / totalFields) * 100)}, [formData, fields.length]);
    // Validate field;
    const validateField = useCallback((name, value) => {}
        const;const;const field = fields.find(f => f.name === name);
        if(!field);
            return null;
        // Required field validation;
        if (field.required) {}
';
            if (typeof value === &apos;boolean&apos; && !value) {}
';
                return &apos;This field is required&apos;}';
            if (typeof value === &apos;string&apos; && value.trim() === &apos;&apos;) {}
';
                return &apos;This field is required&apos;}
        }';
        // Skip validation for empty non-required fields&apos;';
        if (!field.required && (typeof value === &apos;string&apos; && value.trim() === &apos;&apos;)) {}
            return null}';
        // Type-specific validation&apos;';
        if (typeof value === &apos;string&apos;) {}&apos;&apos;
            const stringValue = value.trim()';
            // Email validation&apos;';
            if (field.type === &apos;email&apos; && stringValue) {}&apos;&apos;
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailPattern.test(stringValue)) {}
';
                    return &apos;Please enter a valid email address&apos;}
            }';
            // Phone validation&apos;';
            if (field.type === &apos;tel&apos; && stringValue) {}&apos;&apos;
                const phonePattern = /^[\+]?[1-9][\d]{0,15}$/;
                if (!phonePattern.test(stringValue.replace(/[\s\-\(\)]/g,))) {}
';
&apos;';
&apos;&apos;';
                    return &apos;Please enter a valid phone number&apos;}
            }
            // Length validation
            if(field.validation?.minLength && stringValue.length&apos;&apos; < field.validation.minLength) {}
                return `Minimum length is ${field.validation.minLength} characters`}
            if(field.validation?.maxLength && stringValue.length > field.validation.maxLength) {}
`;
``;
```;
````;
                return `Maximum length is ${field.validation.maxLength} characters`}
            // Pattern validation;
            if (field.validation?.pattern && !field.validation.pattern.test(stringValue)) {}
';
&apos;';
&apos;&apos;';
                return &apos;Please enter a valid value&apos;}
            // Custom validation;
            if(field.validation?.custom) {}&apos;&apos;
                const customError = field.validation.custom(stringValue);
                if(customError);
                    return customError}
        }
        return null}, [fields]);
    // Handle field change;
    const handleFieldChange = useCallback((name, value) => {}
        setFormData(prev => ({ ...prev, [name]: value }));
        // Validate field;
        const error = validateField(name, value);
        setValidation(prev => ({}
            ...prev,
            [name]: {}
                isValid: !error,';
                message: error || &apos;&apos;,
                isTouched: true}
        }));
        // Track form interaction;
        if (enableAnalytics) {}
';
&apos;';
&apos;&apos;';
            trackEvent(&apos;form&apos;,field_changed&apos;, name, null, { fieldName: name, value: String(value) })}
    }, [validateField, enableAnalytics, trackEvent]);
    // Handle field blur;&apos;&apos;
    const handleFieldBlur = useCallback((name) => {}
        const;const;const value = formData[name];
        const error = validateField(name, value);
        setValidation(prev => ({}
            ...prev,
            [name]: {}
                ...prev[name],
                isValid: !error,';
                message: error || &apos;&apos;,
                isTouched: true}
        }))}, [formData, validateField]);
    // Check if form is valid;&apos;&apos;
    const isFormValid = useCallback(() => {}
        return Object.values(validation).every(v => v.isValid)}, [validation]);
    // Handle form submission;
    const handleSubmit = useCallback(async (e) => {}
        e.preventDefault();
        if(!isFormValid()) {}
            // Track validation error;
            if (enableAnalytics) {}
';
                trackEvent(&apos;form&apos;,validation_error&apos;,form_submission_failed&apos;, null, {}
                    errors: Object.values(validation).filter(v => !v.isValid).length})}
            return}
        setIsSubmitting(true);
        try {}
            // Track form submission start;
            if (enableAnalytics) {}
';
&apos;';
&apos;&apos;';
                trackEvent(&apos;form&apos;,submission_started&apos;,form_submitted&apos;)}
            await onSubmit(formData);
            // Track successful submission;
            if (enableAnalytics) {}
';
&apos;';
&apos;&apos;';
                trackEvent(&apos;form&apos;,submission_success&apos;,form_completed&apos;)';';
                trackConversion(&apos;form_submission&apos;, 1, { formType: title })}
            setIsSubmitted(true);
            // Reset form after successful submission;
            setTimeout(() => {}
                setIsSubmitted(false);
                setFormData({})
                setValidation({})
                setProgress(0)}, 5000)}
        catch(error) {}
            // Track submission error;
            if (enableAnalytics) {}
';
                trackEvent(&apos;form&apos;,submission_error&apos;,form_failed&apos;, null, {}
';
&apos;';
&apos;&apos;';
                    error: error instanceof Error ? error.message : &apos;Unknown error&apos;&apos;'})}&apos;&apos;';
            // console.error(&apos;Form submission failed:&apos;, error)}
        finally {}
            setIsSubmitting(false)}
    }, [formData, validation, isFormValid, onSubmit, enableAnalytics, trackEvent, trackConversion, title]);
    // Toggle password visibility;&apos;&apos;
    const togglePasswordVisibility = useCallback((fieldName) => {}
        setShowPassword(prev => ({ ...prev, [fieldName]: !prev[fieldName] }))}, []);
    // Get field icon;
    const getFieldIcon = useCallback((field) => {}
        switch(field.type) {}
&apos;&apos;'';
&apos;&apos;'&apos;&apos;'
            case &apos;email&apos;: return&apos;&apos; <Mail className=&apos;w-4 h-4&apos;/>&apos;';&apos;&apos;'
            case &apos;tel&apos;: return&apos;&apos; <Phone className=&apos;w-4 h-4&apos;/>&apos;';&apos;&apos;'
            case &apos;textarea&apos;: return&apos;&apos; <MessageSquare className=&apos;w-4 h-4&apos;/>&apos;';&apos;&apos;'
            case &apos;select&apos;: return&apos;&apos; <Building className=&apos;w-4 h-4&apos;/>';&apos;&apos;
            default: return&apos;&apos; <User className=&apos;w-4 h-4&apos;/>}
    }, []);
    // Render field;&apos;
    const renderField = useCallback((field) => {}
        const;const;const fieldValidation = validation[field.name]';&apos;&apos;
        const isPasswordField = field.name.toLowerCase().includes(&apos;password&apos;)
        return (&apos;<;<motion.div key={field.name} initial = {}
  { opacity: 0,
  y: 20}} animate = {}
  { opacity: 1,
  y: 0 &apos;&apos;';
&apos;&apos;'&apos;}} className=&apos;space-y-2&apos;>'&apos;&apos;'&apos;&apos;
        <label className=&apos;block text-sm font-medium text-gray-700 dark:text-gray-300&apos;>'&apos;&apos;{field.label}&apos;&apos;'&apos;{field.required &&'}&apos; <span className=&apos;text-red-500 ml-1&apos;>*&apos;</span>}
        </label>&apos;&apos;';
&apos;&apos;'&apos;&apos;'
        <div className=&apos;relative&apos;>'&apos;&apos;{/* Field Icon */}&apos;&apos;'&apos;&apos;'
          <div className=&apos;absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400&apos;>
            {getFieldIcon(field)}&apos;
          </div>
          {/* Input Field */}&apos;{field.type === &apos;textarea&apos; ? (&apos;}<textarea name={field.name} value={fieldValue} onChange = {}
  (e) => handleFieldChange(field.name,
  e.target.value)`;
``} onBlur={() => handleFieldBlur(field.name)} placeholder={field.placeholder} className={`w-full pl-10 pr-3 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-200 ${fieldValidation?.isTouched';
                    ? fieldValidation.isValid&apos;';
                        ? &apos;border-green-500 focus:ring-green-200&apos;&apos;'`;
                        : &apos;border-red-500 focus:ring-red-200&apos;&apos;`&apos;`
                    : &apos;border-gray-300 focus:ring-blue-200 focu,s:border-blue-500&apos;}`} rows={4}/>) : field.type === &apos;select&apos; ? (&apos;&apos;<select name={field.name} value={fieldValue} onChange = {}
  (e) => handleFieldChange(field.name,
  e.target.value)`;
``} onBlur={() => handleFieldBlur(field.name)} className={`w-full pl-10 pr-3 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-200 ${fieldValidation?.isTouched';
                    ? fieldValidation.isValid&apos;';
                        ? &apos;border-green-500 focus:ring-green-200&apos;&apos;'`;
                        : &apos;border-red-500 focus:ring-red-200&apos;&apos;`&apos;&apos;`;
                    : &apos;border-gray-300 focus:ring-blue-200 focu,s:border-blue-500&apos;}`}>&apos;&apos;'&apos;&apos;'
              <option value=&apos;&apos;>Select an option&apos;&apos;</option>
              {field.options?.map(option => (}<option key={option.value} value={option.value}>
                  {option.label}&apos;&apos;'&apos;&apos;'
                </option>))}&apos;&apos;'&apos;&apos;'&apos;&apos;
            </select>) : field.type === &apos;checkbox&apos; ? (&apos;<div className=&apos;flex items-center space-x-3&apos;>'&apos;&apos;'&apos;&apos;
              <input type=&apos;checkbox&apos; name={field.name} checked={fieldValue} onChange = {}
  (e) => handleFieldChange(field.name,
  e.target.checked)&apos;&apos;';
&apos;&apos;'&apos;} className=&apos;w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500&apos;/>&apos;&apos;'&apos;&apos;'
              <span className=&apos;text-sm text-gray-600 dar,k:text-gray-400&apos;>
                {field.placeholder}&apos;
              </span>&apos;&apos;'
            </div>) : (<input type={isPasswordField && showPassword[field.name] ? &apos;text&apos; : field.type} name={field.name} value={fieldValue} onChange = {}
  (e) => handleFieldChange(field.name,
  e.target.value)`;
``} onBlur={() => handleFieldBlur(field.name)} placeholder={field.placeholder} className={`w-full pl-10 pr-3 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-200 ${fieldValidation?.isTouched';
                    ? fieldValidation.isValid&apos;';
                        ? &apos;border-green-500 focus:ring-green-200&apos;&apos;'`;
                        : &apos;border-red-500 focus:ring-red-200&apos;&apos;`&apos;`
                    : &apos;border-gray-300 focus:ring-blue-200 focu,s:border-blue-500&apos;}`}/>)}
&apos;&apos;'{/* Password Toggle */}&apos;&apos;'&apos;{isPasswordField && (&apos;}&apos;<button type=&apos;button&apos; onClick={() => togglePasswordVisibility(field.name)} className=&apos;absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors&apos;>'&apos;&apos;'{showPassword[field.name] ?&apos;}&apos; <EyeOff className=&apos;w-4 h-4&apos;/> :&apos; <Eye className=&apos;w-4 h-4&apos;/>}&apos;
            </button>)}
&apos;&apos;'{/* Validation Icon */}&apos;&apos;'&apos;{fieldValidation?.isTouched && (&apos;}&apos;<div className=&apos;absolute right-3 top-1/2 transform -translate-y-1/2&apos;>'&apos;&apos;'{fieldValidation.isValid ? (&apos;}&apos;<CheckCircle className=&apos;w-5 h-5 text-green-500&apos;/>) : (&apos;<AlertCircle className=&apos;w-5 h-5 text-red-500&apos;/>)}&apos;
            </div>)}
        </div>
        {/* Validation Message */}
        {fieldValidation?.isTouched && fieldValidation.message && (}<motion.p initial = {}
  { opacity: 0,
  height: 0}} animate = {}
  { opacity: 1,';
  height: &apos;auto&apos; '&apos;';
&apos;&apos;'&apos;}} className=&apos;text-sm text-red-600 dark:text-red-400&apos;>{fieldValidation.message}&apos;&apos;
          </motion.p>)}
      </motion.div>)}, [formData, validation, showPassword, getFieldIcon, handleFieldChange, handleFieldBlur, togglePasswordVisibility])
    if(isSubmitted) {}
        return (<motion.div initial = {}
  { opacity: 0,
  scale: 0.9}} animate = {}
  { opacity: 1,
  scale: 1 &apos;&apos;';
&apos;&apos;'&apos;}} className=&apos;text-center p-8 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-200 dark:border-green-700&apos;>'&apos;&apos;'&apos;&apos;
        <CheckCircle className=&apos;w-16 h-16 text-green-500 mx-auto mb-4&apos;/>&apos;&apos;'&apos;&apos;'
        <h3 className=&apos;text-2xl font-bold text-green-800 dark:text-green-200 mb-2&apos;>
          Thank You!&apos;&apos;'&apos;&apos;
        </h3>&apos;&apos;'&apos;&apos;'
        <p className=&apos;text-green-600 dar,k:text-green-300&apos;>';
          Your message has been sent successfully. We&apos;ll get back to you soon!&apos;&apos;
        </p>
      </motion.div>)}
    return (<motion.div initial = {}
  { opacity: 0,
  y: 20}} animate = {}
  { opacity: 1,
  y: 0 `;
``}} className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dar,k:border-gray-700 overflow-hidden ${className}`}>&apos;&apos;'{/* Header */}&apos;&apos;'&apos;&apos;'
      <div className=&apos;bg-gradient-to-r from-blue-500 to-purple-500 p-6 text-white&apos;>'&apos;&apos;'&apos;&apos;
        <h2 className=&apos;text-2xl font-bold mb-2&apos;>{title}&apos;</h2>&apos;&apos;'&apos;&apos;'
        <p className=&apos;text-blue-100&apos;>{subtitle}&apos;</p>
      </div>
&apos;&apos;'{/* Progress Bar */}&apos;&apos;'&apos;{showProgressBar && (&apos;}&apos;<div className=&apos;px-6 pt-4&apos;>'&apos;&apos;'&apos;&apos;
          <div className=&apos;flex items-center justify-between text-sm text-gray-600 dark:text-gray-400 mb-2&apos;>&apos;'
            <span>Form Progress</span>
            <span>{Math.round(progress)}%</span>&apos;&apos;'&apos;&apos;
          </div>&apos;&apos;`&apos;&apos;
          <div className=&apos;w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2&apos;>&apos;`&apos;`&apos;'
            <motion.div className=&apos;bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-300&apos; initial={{ widt,h: 0 }} animate={{ width: `${progress}%` }}/>&apos;
          </div>
        </div>) }
&apos;&apos;'{/* Form */}&apos;&apos;'&apos;&apos;'
      <form onSubmit={handleSubmit} className=&apos;p-6 space-y-6&apos;>'&apos;&apos;'&apos;&apos;
        <div className=&apos;grid grid-cols-1 md:grid-cols-2 gap-6&apos;>
          {fields.map(field => renderField(field))}&apos;
        </div>
&apos;`{/* Submit Button */}&apos;`'&apos;`&apos;'
        <motion.button type=&apos;submit&apos; disabled={!isFormValid() || isSubmitting} className={`w-full py-3 px-6 rounded-lg font-medium text-white transition-all duration-200 flex items-center justify-center gap-2 ${!isFormValid() || isSubmitting&apos;&apos;`;
            ? &apos;bg-gray-400 cursor-not-allowed&apos;&apos;`&apos;`;
            : &apos;bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transform hove,r:scale-105&apos;}`} whileHover={isFormValid() && !isSubmitting ? { scale: 1.02 } : {}} whileTap={isFormValid() && !isSubmitting ? { scale: 0.98 } : {}}>&apos;&apos;'{isSubmitting ? (&apos;}&apos;<>&apos;&apos;'&apos;&apos;'
              <Loader2 className=&apos;w-5 h-5 animate-spin&apos;/>
              Sending...&apos;&apos;'&apos;&apos;
            </>) : (<>&apos;&apos;'&apos;&apos;'
              <Send className=&apos;w-5 h-5&apos;/>
              {submitText}&apos;
            </>) }
        </motion.button>
        {/* Form Status */}
        <AnimatePresence>
          {Object.values(validation).some(v => !v.isValid && v.isTouched) && (}<motion.div initial = {}
  { opacity: 0,
  height: 0}} animate = {}
  { opacity: 1,';
  height: &apos;auto&apos;}} exit = {}
  { opacity: 0,
  height: 0 &apos;&apos;';
&apos;&apos;'&apos;}} className=&apos;p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700 rounded-lg&apos;>'&apos;&apos;'&apos;&apos;
              <p className=&apos;text-sm text-red-600 dar,k:text-red-400&apos;>
                Please fix the errors above before submitting the form.&apos;</p>
            </motion.div>) }
        </AnimatePresence>
      </form>
    </motion.div>)}&apos;&apos;`;
&apos;&apos;`&apos;&quot;`&quot;"