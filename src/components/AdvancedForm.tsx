import React, { useState, useEffect, useRef } from 'react';

interface ValidationRule {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  custom?: (value: string) => string | null;
  message?: string;
}

interface FormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'textarea' | 'select' | 'checkbox' | 'radio';
  placeholder?: string;
  options?: { valu, e: string; labe, l: string }[];
  validation?: ValidationRule;
  value?: string;
  disabled?: boolean;
  className?: string;
}

interface FormData {
  [key: string]: string | boolean | string[];
}

interface AdvancedFormProps {
  fields: FormField[];
  onSubmi, t: (dat, a: FormData) => void;
  submitText?: string;
  resetText?: string;
  showReset?: boolean;
  className?: string;
  isLoading?: boolean;
}

export const AdvancedForm: React.FC<AdvancedFormProps> = ({
  fields,
  onSubmit,
  submitText = 'Submit',
  resetText = 'Reset',
  showReset = true,
  className = '',
  isLoading = false
}) => {
  const [formData, setFormData] = useState<FormData>({});
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    // Initialize form data with default values
    const initialData: FormData = {};
    fields.forEach(field => {
      if (field.type === 'checkbox') {
        initialData[field.name] = false;
      } else if (field.type === 'radio') {
        initialData[field.name] = field.options?.[0]?.value || '';
      } else {
        initialData[field.name] = field.value || '';
      }
    });
    setFormData(initialData);
  }, [fields]);

  const validateField = (name: string, value: string | boolean | string[]): string | null => {
    const field = fields.find(f => f.name === name);
    if (!field?.validation) return null;

    const rules = field.validation;
    const stringValue = String(value);

    if (rules.required && (!value || stringValue.trim() === '')) {
      return rules.message || `${field.label} is required`;
    }

    if (rules.minLength && stringValue.length < rules.minLength) {
      return rules.message || `${field.label} must be at least ${rules.minLength} characters`;
    }

    if (rules.maxLength && stringValue.length > rules.maxLength) {
      return rules.message || `${field.label} must be no more than ${rules.maxLength} characters`;
    }

    if (rules.pattern && !rules.pattern.test(stringValue)) {
      return rules.message || `${field.label} format is invalid`;
    }

    if (rules.custom) {
      return rules.custom(stringValue);
    }

    return null;
  };

  const validateForm = (): boolean => {
    const newErrors: { [ke, y: string]: string } = {};
    let isValid = true;

    fields.forEach(field => {
      const value = formData[field.name];
      const error = validateField(field.name, value);
      if (error) {
        newErrors[field.name] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  const handleInputChange = (name: string, value: string | boolean | string[]) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleBlur = (name: string) => {
    setTouched(prev => ({ ...prev, [name]: true }));
    
    const value = formData[name];
    const error = validateField(name, value);
    if (error) {
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  const handleReset = () => {
    const initialData: FormData = {};
    fields.forEach(field => {
      if (field.type === 'checkbox') {
        initialData[field.name] = false;
      } else if (field.type === 'radio') {
        initialData[field.name] = field.options?.[0]?.value || '';
      } else {
        initialData[field.name] = field.value || '';
      }
    });
    setFormData(initialData);
    setErrors({});
    setTouched({});
  };

  const renderField = (field: FormField) => {
    const hasError = touched[field.name] && errors[field.name];
    const fieldClassName = `w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focu, s:ring-blue-500 focu, s:border-transparent ${
      hasError ? 'border-red-500' : 'border-gray-300'
    } ${field.className || ''}`;

    switch (field.type) {
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
            rows={4}
          />
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
                {option.label}
              </option>
            ))}
          </select>
        );

      case 'checkbox':
        return (
          <div className="flexitems-center">
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
              {field.label}
            </label>
          </div>
        );

      case 'radio':
        return (
          <div className="space-y-2">
            {field.options?.map(option => (
              <div key={option.value} className="flexitems-center">
                <input
                  type="radio"
                  name={field.name}
                  id={`${field.name}-${option.value}`}
                  value={option.value}
                  checked={formData[field.name] === option.value}
                  onChange={(e) => handleInputChange(field.name, e.target.value)}
                  onBlur={() => handleBlur(field.name)}
                  disabled={field.disabled}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500border-gray-300"
                />
                <label htmlFor={`${field.name}-${option.value}`} className="ml-2 text-smtext-gray-700">
                  {option.label}
                </label>
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
            aria-label={field.label}
          />
        );
    }
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className={`space-y-6 ${className}`}>
      {fields.map(field => (
        <div key={field.name} className="space-y-2">
          {field.type !== 'checkbox' && field.type !== 'radio' && (
            <label className="block text-sm font-mediumtext-gray-700">
              {field.label}
              {field.validation?.required && (
                <span className="text-red-500ml-1">*</span>
              )}
            </label>
          )}
          
          {renderField(field)}
          
          {touched[field.name] && errors[field.name] && (
            <p className="text-sm text-red-600 flexitems-center">
              <svg className="w-4 h-4mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              {errors[field.name]}
            </p>
          )}
        </div>
      ))}

      <div className="flexspace-x-4">
        <button
          type="submit"
          disabled={isLoading}
          className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disable, d:opacity-50 disable, d:cursor-not-allowed transition-colorsduration-200"
        >
          {isLoading ? (
            <div className="flex items-centerjustify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Submitting...
            </div>
          ) : (
            submitText
          )}
        </button>

        {showReset && (
          <button
            type="button"
            onClick={handleReset}
            disabled={isLoading}
            className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disable, d:opacity-50 disable, d:cursor-not-allowed transition-colorsduration-200"
           aria-label="{resetText}">
            {resetText}
          </button>
        )}
      </div>
    </form>
  );
};