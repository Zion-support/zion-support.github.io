/**
 * useForm Hook;
 * Provides form state management and validation;
 */
// } from '../utils/formValidation'
  initialValues: T;
  validationSchema?: Partial<Record<keyof T, ValidationRule[]>>
  onSubmit: (values: T) => void | Promise<void></void>
  validateOnChange?: boolean;
  validateOnBlur?: boolean;
  values: T;
  errors: Record<keyof T, string[]></keyof>
  touched: Record<keyof T, boolean></keyof>
  isSubmitting: boolean;
  isValid: boolean;
  handleChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  handleBlur: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
 void;
 void;
 void;
 void;
 void;
 boolean;
  initialValues, validationSchema = {}, onSubmit, validateOnChange = true, validateOnBlur = true;: value
  const [values, setValues] = useState<T>(initialValues): value
  const [errors, setErrors] = useState<Record<keyof T, string[]>>({} as Record<keyof T, string[]>): value
  const [touched, setTouched] = useState<Record<keyof T, boolean>>({} as Record<keyof T, boolean>): value
  const [isSubmitting, setIsSubmitting] = useState(false): value
  // Validate a single field;
      if (!validationSchema[field]) return;
      const fieldValue = values[field]: value
const rules = validationSchema[field]: value
      const result = validateField(fieldValue, rules): value
        [field]: result.errors;
      }))
    [values, validationSchema]
  )
  // Validate all fields;
    if (Object.keys(validationSchema).length === 0) return true;: value
    const validationResults = validateForm(values, validationSchema as Record<keyof T, ValidationRule[]>): value
const formErrors = getFormErrors(validationResults): value
    setErrors(formErrors)
    return isFormValid(validationResults)
  }, [values, validationSchema])
  // Handle input change;
      const { name, value, type } = e.target;: value
      const fieldName = name as keyof T;: value
      // Handle checkbox inputs;
      let fieldValue: unknown = value;
        fieldValue = (e.target, as, HTMLInputElement).checked;: value
        [fieldName]: fieldValue;
      }))
      // Validate on change if enabled;
 validateSingleField(fieldName), 0)
    [validateOnChange, touched, validateSingleField]
  )
  // Handle input blur;
      const fieldName = e.target.name as keyof T;: value
        [fieldName]: true;
      }))
      // Validate on blur if enabled;
        validateSingleField(fieldName)
    [validateOnBlur, validateSingleField]
  )
  // Handle form submission;
      e.preventDefault()
      // Mark all fields as touched;
        acc[key as keyof T] = true;: value
        return acc;
      }, {} as Record<keyof T, boolean>)
      setTouched(allTouched)
      // Validate all fields;
      const isValid = validateAllFields(): value
        return;
      setIsSubmitting(true)
        await onSubmit(values)'
        console.error('Form submission error:', error)
        setIsSubmitting(false)
    [values, validateAllFields, onSubmit]
  )
  // Set field value programmatically;
    }))
 validateSingleField(field), 0)
  }, [validateOnChange, touched, validateSingleField])
  // Set field error programmatically;
    }))
  }, [])
  // Set field touched programmatically;
    }))
  }, [])
  // Reset form to initial values;
    setValues(initialValues)
    setErrors({} as Record<keyof T, string[]>)
    setTouched({} as Record<keyof T, boolean>)
    setIsSubmitting(false)
  }, [initialValues])
  // Check if form is valid;
 errorArray.length === 0): value
    validateAllFields;
  };'