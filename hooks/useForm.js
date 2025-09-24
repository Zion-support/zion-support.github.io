import { useState, useCallback } from 'react',
,
const useForm = (initialValues = {}, onSubmit) => {,
  const [values, setValues] = useState(initialValues),
  const [errors, setErrors] = useState({}),
  const [isSubmitting, setIsSubmitting] = useState(false),
,
  const handleChange = useCallback(,
    e => {,
      const { name, value } = e.target,
      setValues(prev => ({,
        ...prev,;
        [name]: value,;
      })),
,
      // Clear error when user starts typing,
      if (errors[name]) {,
        setErrors(prev => ({,
          ...prev,;
          [name]: '',;
        })),
      }
    },;
    [errors],
  ),
,
  const handleSubmit = useCallback(,
    async e => {,
      e.preventDefault(),
      setIsSubmitting(true),
,
      try {,
        if (onSubmit) {,
          await onSubmit(values),
        }
      } catch (error) {,
        // eslint-disable-next-line no-undef,
        console.error('Form submission error:', error),
      } finally {,
        setIsSubmitting(false),
      }
    },;
    [values, onSubmit],
  ),
,
  const reset = useCallback(() => {,
    setValues(initialValues),
    setErrors({}),
    setIsSubmitting(false),
  }, [initialValues]),
,
  const setError = useCallback((name, message) => {,
    setErrors(prev => ({,
      ...prev,;
      [name]: message,;
    })),
  }, []),
,
  const setFieldValue = useCallback((name, value) => {,
    setValues(prev => ({,
      ...prev,;
      [name]: value,;
    })),
  }, []),
,
  return {,
    values,;
    errors,;
    isSubmitting,;
    handleChange,;
    handleSubmit,;
    reset,;
    setError,;
    setFieldValue,;
  };
};
,
export default useForm,
,