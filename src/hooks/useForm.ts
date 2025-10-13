import { useState, useCallback, ChangeEvent, FormEvent } from "react";

interface FormData {
  [key: string]: any;
}

interface FormErrors {
  [key: string]: string;
}

interface UseFormOptions {
  initialValues?: FormData;
  validate?: (values: FormData) => FormErrors;
  onSubmit?: (values: FormData) => void | Promise<void>;
}

interface UseFormReturn {
  values: FormData;
  errors: FormErrors;
  isSubmitting: boolean;
  isValid: boolean;
  handleChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => void;
  handleSubmit: (e: FormEvent) => Promise<void>;
  setValue: (name: string, value: any) => void;
  setError: (name: string, error: string) => void;
  clearError: (name: string) => void;
  reset: () => void;
}

export const useForm = (options: UseFormOptions = {}): UseFormReturn => {
  const { initialValues = {}, validate, onSubmit } = options;

  const [values, setValues] = useState<FormData>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = useCallback(() => {
    if (!validate) return true;

    const newErrors = validate(values);
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [values, validate]);

  const isValid = Object.keys(errors).length === 0;

  const handleChange = useCallback(
    (
      e: ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) => {
      const { name, value, type } = e.target;

      let processedValue = value;
      if (type === "number") {
        processedValue = value === "" ? "" : Number(value);
      } else if (type === "checkbox") {
        processedValue = (e.target as HTMLInputElement).checked;
      }

      setValues((prev) => ({
        ...prev,
        [name]: processedValue,
      }));

      // Clear error when user starts typing
      if (errors[name]) {
        setErrors((prev) => ({
          ...prev,
          [name]: "",
        }));
      }
    },
    [errors],
  );

  const handleSubmit = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();

      if (!validateForm()) return;

      setIsSubmitting(true);

      try {
        if (onSubmit) {
          await onSubmit(values);
        }
      } catch (error) {
        console.error("Form submission error:", error);
      } finally {
        setIsSubmitting(false);
      }
    },
    [values, validateForm, onSubmit],
  );

  const setValue = useCallback((name: string, value: any) => {
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  const setError = useCallback((name: string, error: string) => {
    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  }, []);

  const clearError = useCallback((name: string) => {
    setErrors((prev) => {
      const newErrors = { ...prev };
      delete newErrors[name];
      return newErrors;
    });
  }, []);

  const reset = useCallback(() => {
    setValues(initialValues);
    setErrors({});
    setIsSubmitting(false);
  }, [initialValues]);

  return {
    values,
    errors,
    isSubmitting,
    isValid,
    handleChange,
    handleSubmit,
    setValue,
    setError,
    clearError,
    reset,
  };
};
