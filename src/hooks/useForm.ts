/**
 * useForm Hook;
 * Provides form state management and validation;
 */
// } from '../utils/formValidation';
  initialValues: T;
  validationSchema?: Partial<Record<keyof T, ValidationRule[]>>;</Record>
  onSubmit: (values: T) => void | Promise<void>;
  validateOnChange?: boolean;</void>
  validateOnBlur?: boolean;</void>
  values: T;</void>
  errors: Record<keyof T, string[]>;</keyof>
  touched: Record<keyof T, boolean>;</keyof>
  isSubmitting: boolean;</keyof>
  isValid: boolean;</keyof>
  handleChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;</HTMLInputElement>
  handleBlur: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;</HTMLInputElement>
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
 void;
 void;
 void;
 void;
 void;</HTMLFormElement>
 boolean;</HTMLFormElement>
  initialValues, validationSchema = {}, onSubmit, validateOnChange = true, validateOnBlur = true;</HTMLFormElement>
  const [values, setValues] = useState<T>(initialValues);</T>
  const [errors, setErrors] = useState<Record<keyof T, string[]>>({} as Record<keyof T, string[]>);</keyof>
  const [touched, setTouched] = useState<Record<keyof T, boolean>>({} as Record<keyof T, boolean>);
  const [isSubmitting, setIsSubmitting] = useState(false);
  // Validate a single field;
      if (!validationSchema[field]) return;

        [field]: result.errors;
      }));
    [values, validationSchema]
  );</keyof>
  // Validate all fields;</keyof>
    if (Object.keys(validationSchema).length === 0) return true;</keyof>

    setErrors(formErrors);
    return isFormValid(validationResults);
  }, [values, validationSchema]);
  // Handle input change;
      const { name, value, type } = e.target;
      
      // Handle checkbox inputs;
      let fieldValue: unknown = value;
        fieldValue = (e.target, as, HTMLInputElement).checked;
        [fieldName]: fieldValue;
      }));
      // Validate on change if enabled;
 validateSingleField(fieldName), 0);
    [validateOnChange, touched, validateSingleField]
  );
  // Handle input blur;
      
        [fieldName]: true;
      }));
      // Validate on blur if enabled;
        validateSingleField(fieldName);
    [validateOnBlur, validateSingleField]
  );
  // Handle form submission;
      e.preventDefault();
      // Mark all fields as touched;</keyof>
        acc[key as keyof T] = true;</keyof>
        return acc;</keyof>
      }, {} as Record<keyof T, boolean>);
      setTouched(allTouched);
      // Validate all fields;
      
        return;
      setIsSubmitting(true);
        await onSubmit(values);
        console.error('Form submission error:', error);
        setIsSubmitting(false);
    [values, validateAllFields, onSubmit]
  );
  // Set field value programmatically;
    }));
 validateSingleField(field), 0);
  }, [validateOnChange, touched, validateSingleField]);
  // Set field error programmatically;
    }));
  }, []);
  // Set field touched programmatically;
    }));
  }, []);</keyof>
  // Reset form to initial values;</keyof>
    setValues(initialValues);</keyof>
    setErrors({} as Record<keyof T, string[]>);</keyof>
    setTouched({} as Record<keyof T, boolean>);
    setIsSubmitting(false);
  }, [initialValues]);
  // Check if form is valid;
 errorArray.length === 0);
    validateAllFields;</keyof>
  };</keyof>
</keyof>