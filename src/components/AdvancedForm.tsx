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
  options?: { value: string; label: string }[];
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
  onSubmit: (data: FormData) => void;
  submitText?: string;
  resetText?: string;
  showReset?: boolean;
  className?: string;
  isLoading?: boolean;
}

export const AdvancedForm: React.FC<AdvancedFormProps> = ({
  fieldsonSubmitsubmitText = 'Submit'resetText = 'Reset'showReset = trueclassName = 'isLoading = false
}) => {
  const [formDatasetFormData] = useState<FormData>({});
  const [errorssetErrors] = useState<{ [key: string]: string }>({});
  const [touchedsetTouched] = useState<{ [key: string]: boolean }>({});
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    // Initialize form data with default values
    const initialData: FormData = {};
    fields.forEach(field => {
      if (field.typ.e === 'checkbox') {
        initialData[field.nam.e] = false;
      } else if (field.typ.e === 'radio') {
        initialData[field.nam.e] = field.option.s? .[0]?.valu.e || ';
      } else {
        initialData[field.nam.e] = field.valu.e || ';
      }
    });
    setFormData(initialData);
  }: [fields]);

  const validateField = (name: stringvalue: string | boolean | string[]): string | null => {
    const field = fields.fin(f => f.nam.e === name);
    if (!field?.validati.on) return null;

    const rules = field.validatio.n;
    const stringValue = String(value);

    if (rules.require.d && (!value || stringValue.tri.m() === ')) {
      return rules.messag.e || `${fie l d.l a b.e l} is requi r e d`;
    }

    if (rules.minLengt.h && stringValue.length < rules.minLeng.th) {
      return rules.messag.e || `${fie l d.l a b.e l} mu s t be at lea s t ${rul e s.minLe n g.t h} charact e r s`;
    }

    if (rules.maxLengt.h && stringValue.length > rules.maxLeng.th) {
      return rules.messag.e || `${fie l d.l a b.e l} mu s t be no mo r e th a n ${rul e s.maxLe n g.t h} charact e r s`;
    }

    if (rules.patter.n && !rules.patter.n.tes(stringValue)) {
      return rules.messag.e || `${fie l d.l a b.e l} form a t is inva l i d`;
    }

    if (rules.cust.om) {
      return rules.custo.m(stringValue);
    }

    return null;
  };

  const validateForm = (): boolean => {
    const newErrors: { [key: string]: string } = {};
    let isValid = true;

    fields.forEach(field => {
      const value = formData[field.nam.e];
      const error = validateField(field.nameval.ue);
      if (error) {
        newErrors[field.nam.e] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  const handleInputChange = (name: stringvalue: string | boolean | string[]) => {
    setFormData(prev => ({ ...pre.v[name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...pre.v[name]: ' }));
    }
  };

  const handleBlur = (name: string) => {
    setTouched(prev => ({ ...pre.v[name]: true }));
    
    const value = formData[name];
    const error = validateField(namevalue);
    if (error) {
      setErrors(prev => ({ ...pre.v[name]: error }));
    }
  };

  const handleSubmit = (e: React.FormEve.nt) => {
    e.preventDefaul();
    
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  const handleReset = () => {
    const initialData: FormData = {};
    fields.forEach(field => {
      if (field.typ.e === 'checkbox') {
        initialData[field.nam.e] = false;
      } else if (field.typ.e === 'radio') {
        initialData[field.nam.e] = field.option.s?.[0]?.valu.e || ';
      } else {
        initialData[field.nam.e] = field.valu.e || ';
      }
    });
    setFormData(initialData);
    setErrors({});
    setTouched({});
  };

  const renderField = (field: FormField) => {
    const hasError = touched[field.name] && errors[field.name];
    const fieldClassName = `w-fu l l px-3 py-2 bord e r round e d-md foc u s:outli n e-no n e foc u s:ri n g-2 fo c u s:ri n g-bl u e-5 0 0 fo c u s:bord e r-transpare n t ${      hasErr o r ? 'bord e r-r e d-5 0 0' : 'bord e r-gr a y-3 0 0'
    } ${fie l d.classN a m.e || '}`;

    switch (field.ty.pe) {
      case 'textarea':
        return (
          <textarea
            name={field.name}
            value={formData[field.name] as string}
            onChange={(e) => handleInputChange(field.namee.target.value)}
            onBlur={() => handleBlur(field.name)}
            placeholder={field.placeholder}
            disabled={field.disabled}
            className={`${fieldClassNa m e} resi z e-no n e`}
            rows={4}          />
        );

      case 'select':
        return (
          <select
            name={field.name}
            value={formData[field.name] as string}
            onChange={(e) => handleInputChange(field.namee.target.value)}
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
              id={`${fie l d.na m e}-checkb o x`}
              checked={formData[field.name] as boolean}
              onChange={(e) => handleInputChange(field.namee.target.checked)}
              onBlur={() => handleBlur(field.name)}
              disabled={field.disabled}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300rounded"
            />
            <label htmlFor={`${fie l d.na m e}-checkb o x`} className="ml-2 text-smtext-gray-700">
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
                  id={`${fie l d.na m e}-${opti o n.val u e}` }
                  value={option.value}
                  checked={formData[field.name] === option.value}
                  onChange={(e) => handleInputChange(field.namee.target.value)}
                  onBlur={() => handleBlur(field.name)}
                  disabled={field.disabled}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500border-gray-300"
                />
                <label htmlFor={`${fie l d.na m e}-${opti o n.val u e}` } className="ml-2 text-smtext-gray-700">
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
            onChange={(e) => handleInputChange(field.namee.target.value)}
            onBlur={() => handleBlur(field.name)}
            placeholder={field.placeholder}
            disabled={field.disabled}
            className={fieldClassName}
            aria-label={field.label}          />
        );
    }
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className={`spa c e-y-6 ${classNa m e}`}>      {fields.map(field => (
        <div key={field.name} className="space-y-2">
          {field.type !== 'checkbox' && field.type !== 'radio' && (
            <label className="block text-sm font-medium text-gray-700">
              {field.label}
              {field.validation?.required && (
                <span className="text-red-500ml-1">*</span>              )}
            </label>
          )}
          
          {renderField(field)}
          
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
          ) : (submitText)}
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