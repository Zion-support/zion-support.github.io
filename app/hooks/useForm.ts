import React, { useState, useCallback } from 'react';

export interface FormState<T = Record<string, unknown>> {

cursor/fix-errors-and-merge-to-main-7271
  data: T;
  isSubmitting: boolean;
  submitStatus: 'idle' | 'success' | 'error';
  errors: Record<string, string>;
}

export interface UseFormOptions<T = Record<string, unknown>> {
  initialData?: T;
  validate?: (_data: T) => Record<string, string>;
  onSubmit?: (_data: T) => Promise<void> | void;
}

export const useForm = <T = Record<string, unknown>>(options: UseFormOptions<T> = {}) => {
  const { initialData = {} as T, validate, onSubmit } = options;
cursor/fix-errors-and-merge-to-main-7271
  const [formState, setFormState] = useState<FormState<T>>({
    data: initialData,
    isSubmitting: false,
    submitStatus: 'idle',
    errors: {},
  });const handleInputChange = useCallback((field: keyof T, value: unknown) => {
cursor/fix-errors-and-merge-to-main-7271
    setFormState(prev => ({
      ...prev,
      data: { ...prev.data, [field]: value },
      errors: { ...prev.errors, [field]: '' },
    }));
  }, []);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    const validationErrors = validate ? validate(formState.data) : {}
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
      if (onSubmit) {
        await onSubmit(formState.data);setFormState(prev => ({
          ...prev,
          submitStatus: 'success',
          data: initialData, // Reset form
        }));
      }
} catch (_error) {
cursor/fix-errors-and-merge-to-main-7271
      setFormState(prev => ({
        ...prev,
        isSubmitting: false,
      }));
    }
  }, [formState.data, onSubmit, validate, initialData]);

  const resetForm = useCallback(() => {
    setFormState({
      data: initialData,
      isSubmitting: false,
      submitStatus: 'idle',
      errors: {},
    });
  }, [initialData]);

  return {
    ...formState,
    handleInputChange,
    handleSubmit,
    resetForm,
  }
}