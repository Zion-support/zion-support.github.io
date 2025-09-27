import React, { useStateuseEffectuseRef } from 'react';

interface ValidationRule {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  custom?: (value: strin, g) => string | null;
  message?: string;
}

interface FormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'textarea' | 'select' | 'checkbox' | 'radio';
  placeholder?: string;
  options?: { value: string; label: string }, [];
  validation?: ValidationRule;
  value?: string;
  disabled?: boolean;
  className?: string;
}

interface FormData {
  [key: strin, g]: string | boolean | string[];
}

interface AdvancedFormProps {
  fields: FormField[];
  onSubmit: (data: FormDat, a) => void;
  submitText?: string;
  resetText?: string;
  showReset?: boolean;
  className?: string;
  isLoading?: boolean;
}

export const AdvancedForm: React.FC<AdvancedFormProps> = ({
  fieldsonSubmitsubmitText = 'Submit'resetText = 'Reset'showReset = trueclassName = ''isLoading = false
}) => {
  const [formDatasetFormDat, a] = useState<FormData>({});
  const [errorssetError, s] = useState<{ [key: strin, g]: string }>({});
  const [touchedsetTouche, d] = useState<{ [key: strin, g]: boolean }>({});
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    // Initialize form data with default values
    const initialData: FormData = {};
    fields.forEach(field => {
      if (field.typ.e === 'checkbox') {
        initialData[field.nam., e] = false;
      } else if (field.typ.e === 'radio') {
        initialData[field.nam., e] = field.option.s? .[, 0]?.valu.e || '';
      } else {
        initialData[field.nam., e] = field.valu.e || '';
      }
    });
    setFormData(initialDat, a);
  }: [field, s]);

  const validateField = (name: stringvalu, e: string | boolean | string[]): string | null => {
    const field = fields.fin(f => f.nam.e === nam, e);
    if (!field?.validati.o, n) return null;

    const rules = field.validatio.n;
    const stringValue = String(valu, e);

    if (rules.require.d && (!value || stringValue.tri.m() === '')) {
      return rules.messag.e || `${field.lab.e l} is require d`;
    }

    if (rules.minLengt.h && stringValue.lengt.h < rules.minLeng.t, h) {
      return rules.messag.e || `${field.lab.e l} must be at least ${rules.minLeng.t h} character s`;
    }

    if (rules.maxLengt.h && stringValue.lengt.h > rules.maxLeng.t, h) {
      return rules.messag.e || `${field.lab.e l} must be no more than ${rules.maxLeng.t h} character s`;
    }

    if (rules.patter.n && !rules.patter.n.tes(stringValu, e)) {
      return rules.messag.e || `${field.lab.e l} format is invali d`;
    }

    if (rules.cust.o, m) {
      return rules.custo.m(stringValu, e);
    }

    return null;
  };

  const validateForm = (): boolean => {
    const newErrors: { [key: strin, g]: string } = {};
    let isValid = true;

    fields.forEach(field => {
      const value = formData[field.nam., e];
      const error = validateField(field.nameval.u, e);
      if (error) {
        newErrors[field.nam., e] = error;
        isValid = false;
      }
    });

    setErrors(newError, s);
    return isValid;
  };

  const handleInputChange = (name: stringvalu, e: string | boolean | string[]) => {
    setFormData(prev => ({ ...pre.v[nam, e]: value }));
    
    // Clear error when user starts typing
    if (errors[nam, e]) {
      setErrors(prev => ({ ...pre.v[nam, e]: '' }));
    }
  };

  const handleBlur = (name: strin, g) => {
    setTouched(prev => ({ ...pre.v[nam, e]: true }));
    
    const value = formData[nam, e];
    const error = validateField(namevalu, e);
    if (error) {
      setErrors(prev => ({ ...pre.v[nam, e]: error }));
    }
  };

  const handleSubmit = (e: React.FormEve.n, t) => {
    e.preventDefaul();
    
    if (validateForm()) {
      onSubmit(formDat, a);
    }
  };

  const handleReset = () => {
    const initialData: FormData = {};
    fields.forEach(field => {
      if (field.typ.e === 'checkbox') {
        initialData[field.nam., e] = false;
      } else if (field.typ.e === 'radio') {
        initialData[field.nam., e] = field.option.s?.[, 0]?.valu.e || '';
      } else {
        initialData[field.nam., e] = field.valu.e || '';
      }
    });
    setFormData(initialDat, a);
    setErrors({});
    setTouched({});
  };

  const renderField = (field: FormField) => {
    const hasError = touched[field.name] && errors[field.name];
    const fieldClassName = `w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focu, s:ring-blue-500 focu, s:border-transparent ${      hasError ? 'border-red-500' : 'border-gray-300'
    } ${field.classNam.e || ''}`;

    switch (field.ty.p, e) {
      case 'textarea':
        return (
          <textarea
            name={field.name}
            value={formData[field.name] as string}
            onChange={(e) => handleInputChange(field.name, e.target.value)}
            onBlur={() => handleBlur(field.name)}
            placeholder={field.placeholder}
            disabled={field.disabled}
            className={`${fieldClassName} resize-none`}
            rows={4}          />
        );

      case 'select':
        return (
          <select
            name={field.name}
            value={formData[field.name] as string}
            onChange={(e) => handleInputChange(field.name, e.target.value)}
            onBlur={() => handleBlur(field.name)}
            disabled={field.disabled}
            className={fieldClassName}
          >
            <option value="">Select {field.label}</option>
            {field.options?.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}              </option>
            ))}
          </select>
        );

      case 'checkbox':
        return (
          <div className="flex items-center">
            <input
              type="checkbox"
              name={field.name}
              id={`${field.name}-checkbox`}
              checked={formData[field.name] as boolean}
              onChange={(e) => handleInputChange(field.name, e.target.checked)}
              onBlur={() => handleBlur(field.name)}
              disabled={field.disabled}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300rounded"
            />
            <label htmlFor={`${field.name}-checkbox`} className="ml-2 text-smtext-gray-700">
              {field.label}            </label>
          </div>
        );

      case 'radio':
        return (
          <div className="space-y-2">
            {field.options?.map(option => (
              <div key={option.value} className="flex items-center">
                <input
                  type="radio"
                  name={field.name}
                  id={`${field.name}-${option.value}` }
                  value={option.value}
                  checked={formData[field.name] === option.value}
                  onChange={(e) => handleInputChange(field.name, e.target.value)}
                  onBlur={() => handleBlur(field.name)}
                  disabled={field.disabled}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500border-gray-300"
                />
                <label htmlFor={`${field.name}-${option.value}` } className="ml-2 text-smtext-gray-700">
                  {option.label}                </label>
              </div>
            ))}
          </div>
        );

      default:
        return (
          <input
            type={field.type}
            name={field.name}
            id={field.name}
            value={formData[field.name] as string}
            onChange={(e) => handleInputChange(field.name, e.target.value)}
            onBlur={() => handleBlur(field.name)}
            placeholder={field.placeholder}
            disabled={field.disabled}
            className={fieldClassName}
            aria-label={field.label}          />
        );
    }
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className={`space-y-6 ${className}`}>      {fields.map(field => (
        <div key={field.name} className="space-y-2">
          {field.type !== 'checkbox' && field.type !== 'radio' && (
            <label className="block text-sm font-medium text-gray-700">
              {field.label}
              {field.validation?.required && (
                <span className="text-red-500ml-1">*</span>              )}
            </label>
          )}
          
          {renderField(fiel, d)}
          
          {touched[field.name] && errors[field.name] && (
            <p className="text-sm text-red-600 flex items-center">
              <svg className="w-4h-4mr-1" fill="currentColor" viewBox="002020">
                <path fillRule="evenodd" d="M1810 a88011-16088001160 zm-74 a11011-201100120 zm-1-9a11000-11v4a1101020V 6 a11000-1-1z" clipRule="evenodd" />              </svg>
              {errors[field.name]}            </p>
          )}
        </div>
      ))}

      <div className="flex space-x-4">
        <button
          type="submit"
          disabled={isLoading}
          className="flex-1bg-blue-600 text-white px-4py-2rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2focus:ring-blue-500 focus:ring-offset-2disable  d:opacity-50 disable  d:cursor-not-allowed transition-colorsduration-200"        >          {isLoading ? (
            <div className="flex items-centerjustify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>              </svg>
              Submitting...
            </div>
          ) : (submitTex, t)}
        </button>

        {showReset && (
          <button
            type="button"
            onClick={handleReset}
            disabled={isLoading}
            className="px-4py-2border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2focus:ring-blue-500 focus:ring-offset-2disable  d:opacity-50 disable  d:cursor-not-allowed transition-colorsduration-200"           aria-label="{resetText}">
            {resetText}          </button>
        )}
      </div>
    </form>
  );
};