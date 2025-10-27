import { useState, useCallback } from 'react';

export interface FormState<T> {
  data: T;
  errors: Record<string, string>;
  isSubmitting: boolean;
  submitStatus: 'idle' | 'success' | 'error';
}

export interface UseFormOptions<T> {
  initialData: T;
  validate?: (data: T) => Record<string, string>;
  onSubmit: (data: T) => Promise<void>;
}

export function useForm<T>({ initialData, validate, onSubmit }: UseFormOptions<T>) {
  const [formState, setFormState] = useState<FormState<T>>({
    data: initialData,
    errors: {},
    isSubmitting: false,
    submitStatus: 'idle',
  });

  const handleChange = useCallback((field: keyof T, value: any) => {
    setFormState(prev => ({
      ...prev,
      data: { ...prev.data, [field]: value },
      errors: { ...prev.errors, [field as string]: '' },
    }));
  }, []);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    const validationErrors = validate ? validate(formState.data) : {};
    if (Object.keys(validationErrors).length > 0) {
      setFormState(prev => ({
        ...prev,
        errors: validationErrors,
      }));
      return;
    }

    setFormState(prev => ({
      ...prev,
      isSubmitting: true,
      submitStatus: 'idle',
      errors: {},
    }));

    try {
      await onSubmit(formState.data);
      setFormState(prev => ({
        ...prev,
        isSubmitting: false,
        submitStatus: 'success',
      }));
    } catch (error) {
      setFormState(prev => ({
        ...prev,
        isSubmitting: false,
        submitStatus: 'error',
        errors: { general: 'An error occurred while submitting the form' },
      }));
    }
  }, [formState.data, validate, onSubmit]);

  const reset = useCallback(() => {
    setFormState({
      data: initialData,
      errors: {},
      isSubmitting: false,
      submitStatus: 'idle',
    });
  }, [initialData]);

  return {
    formState,
    handleChange,
    handleSubmit,
    reset,
  };
}