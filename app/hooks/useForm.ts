import { useState, useEffect, useCallback } from 'react';

export interface FormState<T = any> {
  data: T;
  errors: Record<string, string>;
  isSubmitting: boolean;
  submitStatus: 'idle' | 'success' | 'error';
}

export interface UseFormOptions<T = any> {
  initialData?: T;
  validate?: (data: T) => Record<string, string>;
  onSubmit?: (data: T) => Promise<void> | void;
}

export const useForm = <T = any>(options: UseFormOptions<T> = {}) => {
  const { initialData = {} as T, validate, onSubmit } = options;
  
  const [formState, setFormState] = useState<FormState<T>>({
    data: initialData,
    errors: {},
    isSubmitting: false,
    submitStatus: 'idle'
  });

  const handleChange = useCallback((field: keyof T, value: any) => {
    setFormState(prev => ({
      ...prev,
      data: { ...prev.data, [field]: value },
      errors: { ...prev.errors, [field as string]: '' }
    }));
  }, []);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    const validationErrors = validate ? validate(formState.data) : {};
    if (Object.keys(validationErrors).length > 0) {
      setFormState(prev => ({
        ...prev,
        errors: validationErrors
      }));
      return;
    }

    setFormState(prev => ({
      ...prev,
      isSubmitting: true,
      submitStatus: 'idle',
      errors: {}
    }));

    try {
      if (onSubmit) {
        await onSubmit(formState.data);
      }
      setFormState(prev => ({
        ...prev,
        isSubmitting: false,
        submitStatus: 'success'
      }));
    } catch (error) {
      setFormState(prev => ({
        ...prev,
        isSubmitting: false,
        submitStatus: 'error',
        errors: { general: 'An error occurred while submitting the form' }
      }));
    }
  }, [formState.data, validate, onSubmit]);

  const reset = useCallback(() => {
    setFormState({
      data: initialData,
      errors: {},
      isSubmitting: false,
      submitStatus: 'idle'
    });
  }, [initialData]);

  return {
    formState,
    handleChange,
    handleSubmit,
    reset
  };
};