import React, { useState, useCallback } from 'react';

export interface FormState<T = Record<string, unknown>> {
  data: T;
  isSubmitting: boolean;
  submitStatus: 'idle' | 'success' | 'error';
  errors: Record<string, string>;
}

export interface UseFormOptions<T = Record<string, unknown>> {
  initialData?: T;
  validate?: (data: T) => Record<string, string>;
  onSubmit?: (data: T) => Promise<void> | void;
}

export const useForm = <T = Record<string, unknown>>(options: UseFormOptions<T> = {}) => {
  const { initialData = {} as T, validate, onSubmit } = options;

  const [formState, setFormState] = useState<FormState<T>>({
    data: initialData,
    isSubmitting: false,
    submitStatus: 'idle',
    errors: {},
  });

  // Update form data
  const updateData = useCallback((newData: Partial<T>) => {
    setFormState(prev => ({
      ...prev,
      data: { ...prev.data, ...newData },
      errors: {}, // Clear errors when data changes
    }));
  }, []);

  // Set field value
  const setValue = useCallback((field: keyof T, value: T[keyof T]) => {
    updateData({ [field]: value } as Partial<T>);
  }, [updateData]);

  // Set error for a field
  const setError = useCallback((field: string, message: string) => {
    setFormState(prev => ({
      ...prev,
      errors: { ...prev.errors, [field]: message },
    }));
  }, []);

  // Clear all errors
  const clearErrors = useCallback(() => {
    setFormState(prev => ({
      ...prev,
      errors: {},
    }));
  }, []);

  // Validate form
  const validateForm = useCallback(() => {
    if (!validate) return true;
    
    const errors = validate(formState.data);
    setFormState(prev => ({ ...prev, errors }));
    return Object.keys(errors).length === 0;
  }, [validate, formState.data]);

  // Submit form
  const submit = useCallback(async () => {
    if (!onSubmit) return;

    // Validate form first
    if (!validateForm()) {
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
        errors: {
          ...prev.errors,
          submit: error instanceof Error ? error.message : 'An error occurred',
        },
      }));
    }
  }, [onSubmit, formState.data, validateForm]);

  // Reset form
  const reset = useCallback(() => {
    setFormState({
      data: initialData,
      isSubmitting: false,
      submitStatus: 'idle',
      errors: {},
    });
  }, [initialData]);

  return {
    ...formState,
    updateData,
    setValue,
    setError,
    clearErrors,
    validateForm,
    submit,
    reset,
  };
};