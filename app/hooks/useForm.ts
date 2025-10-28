import React, { useState, useCallback } from 'react';

export interface FormState<T = Record<string, unknown>> {
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

  const [formState, setFormState] = useState<FormState<T>>({
    data: initialData,
    isSubmitting: false,
    submitStatus: 'idle',
    errors: {},
  });

  const updateField = useCallback((field: keyof T, value: unknown) => {
    setFormState(prev => ({
      ...prev,
      data: {
        ...prev.data,
        [field]: value,
      },
      errors: {
        ...prev.errors,
        [field as string]: '', // Clear error when field is updated
      },
    }));
  }, []);

  const validateForm = useCallback((): boolean => {
    if (!validate) return true;

    const errors = validate(formState.data);
    setFormState(prev => ({
      ...prev,
      errors,
    }));

    return Object.keys(errors).length === 0;
  }, [validate, formState.data]);

  const handleSubmit = useCallback(async (e?: React.FormEvent) => {
    if (e) {
      e.preventDefault();
    }

    if (!validateForm()) {
      return;
    }

    if (!onSubmit) return;

    setFormState(prev => ({
      ...prev,
      isSubmitting: true,
      submitStatus: 'idle',
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
      }));
    }
  }, [formState.data, validateForm, onSubmit]);

  const resetForm = useCallback(() => {
    setFormState({
      data: initialData,
      isSubmitting: false,
      submitStatus: 'idle',
      errors: {},
    });
  }, [initialData]);

  return {
    formState,
    updateField,
    handleSubmit,
    resetForm,
    validateForm,
  };
};