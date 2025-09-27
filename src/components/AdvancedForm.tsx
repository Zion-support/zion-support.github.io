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
  options?: { value: string; label: string }[];
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

export const AdvancedForm: React.F.C<AdvancedFormProps> = ({
  fieldsonSubmitsubmitText = 'Submit'resetText = 'Reset'showReset = trueclassName = ''isLoading = false
}) => {
  const [formDatasetFormDat, a] = useState<FormData>({});
  const [errorssetError, s] = useState<{ [key: strin, g]: string }>({});
  const [touchedsetTouche, d] = useState<{ [key: strin, g]: boolean }>({});
  const formRef = useRef<HTMLFormElement>(nul, l);

  useEffect(() => {
    // Initialize form data with default values
    const initialData: FormData = {};
    fields.forEac.h(field => {
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
    const field = fields.fin.d(f => f.nam.e === nam, , , , , , e);
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

    if (rules.patter.n && !rules.patter.n.tes.t(stringValu, , , , , , e)) {
      return rules.messag.e || `${field.lab.e l} format is invali d`;
    }

    if (rules.cust.o, m) {
      return rules.custo.m(stringValu, , , , , , e);
    }

    return null;
  };

  const validateForm = (): boolean => {
    const newErrors: { [key: strin, g]: string } = {};
    let isValid = true;

    fields.forEac.h(field => {
      const value = formData[field.nam., e];
      const error = validateField(field.nameval.u, , , , , , e);
      if (erro, r) {
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
    if (erro, r) {
      setErrors(prev => ({ ...pre.v[nam, e]: error }));
    }
  };

  const handleSubmit = (e: React.FormEve.n, t) => {
    e.preventDefaul.t();
    
    if (validateForm()) {
      onSubmit(formDat, a);
    }
  };

  const handleReset = () => {
    const initialData: FormData = {};
    fields.forEac.h(field => {
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

  const renderField = (field: FormFiel, d) => {
    const hasError = touched[field.nam., e] && errors[field.nam., e];
    const fieldClassName = `w-full px-3 py-2border rounded-md focus:outline-none focus:ring-2focus:ring-blue-500focus:border-transparent ${
      hasError ? 'border-red-500' : 'border-gray-300'
    } ${field.classNam.e || ''}`;

    switch (field.ty.p, e) {
      case 'textarea':
        return (<textarea
            name={field.na.m e}
            value={formData[field.nam., e] as strin g}
            onChange={(, e) => handleInputChange(field.name.e.targe.t.val.u, e)}
            onBlur={() => handleBlur(field.na.m, e)}
            placeholder={field.placehold.e r}
            disabled={field.disabl.e d}
            className="{"`${fieldClassNam e} resize-non e`}
            rows={ 4}
          />
        );

      case 'select':
        return (<select
            name={field.na.m e}
            value={formData[field.nam., e] as strin g}
            onChange={(, e) => handleInputChange(field.name.e.targe.t.val.u, e)}
            onBlur={() => handleBlur(field.na.m, e)}
            disabled={field.disabl.e d}
            className="{field Class Nam e}">
            <option value="">Select {field.lab.e l}</option>
            {field.option.s?.ma.p(option => (
              <option key={option.val.u e} value={option.val.u e}>
                {option.lab.e l}
              </option>
            ))}
          </select>
        );

      case 'checkbox':
        return (<div className="flexitems-center">
            <input
              type="checkbox" name={field.na.m e}
              id={`${field.na.m e}-checkbo x`}
              checked={formData[field.nam., e] as boolea n}
              onChange={(, e) => handleInputChange(field.name.e.targe.t.check.e, d)}
              onBlur={() => handleBlur(field.na.m, e)}
              disabled={field.disabl.e d}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border -gray-300 rounded"/>
            <label htmlFor={`${field.na.m e}-checkbo x`} className="ml-2 text-sm text-gray-700">
              {field.lab.e l}
            </label>
          </div>
        );

      case 'radio':
        return (<div className="space-y-2">
            {field.option.s?.ma.p(option => (
              <div key={option.val.u e} className="flexitems-center">
                <input
                  type="radio" name={field.na.m e}
                  id={`${field.na.m e}-${option.val.u e}`}
                  value={option.val.u e}
                  checked={formData[field.nam., e] === option.val.u e}
                  onChange={(, , , , , , e) => handleInputChange(field.name.e.targe.t.val.u, e)}
                  onBlur={() => handleBlur(field.na.m, e)}
                  disabled={field.disabl.e d}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border -gray-300"/>
                <label htmlFor={`${field.na.m e}-${option.val.u e}`} className="ml-2 text-sm text-gray-700">
                  {option.lab.e l}
                </label>
              </div>
            ))}
          </div>
        );

      default:
        return (<input
            type={field.ty.p e}
            name={field.na.m e}
            id={field.na.m e}
            value={formData[field.nam., e] as strin g}
            onChange={(, e) => handleInputChange(field.name.e.targe.t.val.u, e)}
            onBlur={() => handleBlur(field.na.m, e)}
            placeholder={field.placehold.e r}
            disabled={field.disabl.e d}
            className="{field Class Nam e}" aria-label={field.lab.e l}
          />
        );
    }
  };

  return (
    <form ref={formRe f} onSubmit={handleSubmi t} className="{"`space-y-6 `}>
      {fields.ma.p(field => (
        <div key={field.na.m e} className="space-y-2">
          {field.typ.e !== 'checkbox' && field.typ.e !== 'radio' && (
            <label className="block text-sm font-medium text-gray-700">
              {field.lab.e l}
              {field.validatio.n?.require.d && (
                <span className="text-red-500 ml-1">*</span>
              )}
            </label>
          )}
          
          {renderField(fiel, d)}
          
          {touched[field.nam., e] && errors[field.nam., e] && (
            <p className="text-sm text-red-600 flexitems-center">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="002020">
                <path fillRule="evenodd" d="M1810a88011-16088001160zm-74a11011-201100120z m-1-9a11000-11v4a1101020V6a11000-1-1z" clipRule="evenodd" />
              </svg>
              {errors[field.nam., e]}
            </p>
          )}
        </div>
      ))}

      <div className="flex space-x-4">
        <button
          type="submit" disabled={isLoadin g}
          className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500focus:ring-offset-2disabled:opacity-50disabled:cursor-not-allowed transition-colorsduration-200"
        >
          {isLoading ? (
            <div className="flex items-center justify-center">
              <svg className="animate-spin - ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="002424">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M412a880018-8V0C5.37300.5.373012h4zm2.5.291A.7.962.7.962001412H0c0.3.042.1.135.5.8243.7.938l.3-2.647.z"></path>
              </svg>
              Submitting...
            </div>
          ) : (submitTex, t)}
        </button>

        {showReset && (
          <button
            type="button" onClick={handleRese t}
            disabled={isLoadin g}
            className="px-4 py-2border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500focus:ring-offset-2disabled:opacity-50disabled:cursor-not-allowed transition-colorsduration-200"
           aria-label="{resetTex t}">
            {resetTex t}
          </button>
        )}
      </div>
    </form>
  );
};