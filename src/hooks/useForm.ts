'use client';
/**
 * useForm Hook;
 * Provides form state management and validation;
 */
// import { logger } from '../utils/logger';
import {
  ValidationRule,
  validateField,
  validateForm,
  isFormValid,
  getFormErrors,
  // ValidationResult as _ValidationResult;
} from '../utils/formValidation';
export interface UseFormConfig<T extends Record<string, unknown>> {
  initialValues: T;
  validationSchema?: Partial<Record<keyof T, ValidationRule[]>>;
  onSubmit: (values: T) => void | Promise<void>;
  validateOnChange?: boolean;
  validateOnBlur?: boolean;
}
export interface UseFormReturn<T extends Record<string, unknown>> {
  values: T;
  errors: Record<keyof T, string[]>;
  touched: Record<keyof T, boolean>;
  isSubmitting: boolean;
  isValid: boolean;
  handleChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  handleBlur: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  setFieldValue: (field: keyof T, value: T[keyof T]) => void;
  setFieldError: (field: keyof T, errors: string[]) => void;
  setFieldTouched: (field: keyof T, touched: boolean) => void;
  resetForm: () => void;
  validateField: (field: keyof T) => void;
  validateAllFields: () => boolean;
}
export function useForm<T extends Record<string, unknown>>({
  initialValues, validationSchema = {}, onSubmit: _onSubmit, validateOnChange = true, validateOnBlur = true;
}: UseFormConfig<T>): UseFormReturn<T> {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<Record<keyof T, string[]>>({} as Record<keyof T, string[]>);
  const [touched, setTouched] = useState<Record<keyof T, boolean>>({} as Record<keyof T, boolean>);
  const [isSubmitting, setIsSubmitting] = useState(false);
  // Validate a single field;
                          setErrors(prev => ({
        ...prev,
        [field]: result.errors;
      }));
    },
    [values, validationSchema]
  );
  // Validate all fields;
              setErrors(formErrors);
    return isFormValid(validationResults);
  }, [values, validationSchema]);
  // Handle input change;
              // Handle checkbox inputs;
      let fieldValue: unknown = value;
      if (type === 'checkbox' && 'checked' in e.target) {
        fieldValue = (e.target as HTMLInputElement).checked;
      }
      setValues(prev => ({
        ...prev,
        [fieldName]: fieldValue;
      }));
      // Validate on change if enabled;
      if (validateOnChange && touched[fieldName]) {
        setTimeout(() => validateSingleField(fieldName), 0);
      }
    },
    [validateOnChange, touched, validateSingleField]
  );
  // Handle input blur;
        setTouched(prev => ({
        ...prev,
        [fieldName]: true;
      }));
      // Validate on blur if enabled;
      if (validateOnBlur) {
        validateSingleField(fieldName);
      }
    },
    [validateOnBlur, validateSingleField]
  );
  // Handle form submission;
        // Mark all fields as touched;
              return acc;
      }, {} as Record<keyof T, boolean>);
      setTouched(allTouched);
      // Validate all fields;
            if (!isValid) {
        return;
      }
      setIsSubmitting(true);
      try {
        await onSubmit(values);
      } catch (error) {
      } finally {
        setIsSubmitting(false);
      }
    },
    [values, validateAllFields]
  );
  // Set field value programmatically;
      if (validateOnChange && touched[field]) {
      setTimeout(() => validateSingleField(field), 0);
    }
  }, [validateOnChange, touched, validateSingleField]);
  // Set field error programmatically;
    }, []);
  // Set field touched programmatically;
    }, []);
  // Reset form to initial values;
      setErrors({} as Record<keyof T, string[]>);
    setTouched({} as Record<keyof T, boolean>);
    setIsSubmitting(false);
  }, [initialValues]);
  // Check if form is valid;
    return {
    values,
    errors,
    touched,
    isSubmitting,
    isValid,
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue,
    setFieldError,
    setFieldTouched,
    resetForm,
    validateField: validateSingleField,
    validateAllFields;
  }
}