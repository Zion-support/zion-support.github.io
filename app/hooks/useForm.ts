
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

export const useForm = <T = Record<string, unknown>>(options: UseFormOptions<T> = { /* empty */ }) => {
  const { initialData = { /* empty */ } as T, validate, onSubmit } = options;

  const [formState, setFormState] = useState<FormState<T>>({
    data: initialData,
    isSubmitting: false,
    submitStatus: 'idle',
    errors: { /* empty */ },});

  const setFieldValue = useCallback((field: keyof T, value: T[keyof T]) => {
    setFormState(prev => ({
      ...prev,
      data: { ...prev.data, [field]: value },
      errors: { ...prev.errors, [field as string]: '' }
    }));
  }, []);

  const setFieldError = useCallback((field: keyof T, error: string) => {
    setFormState(prev => ({
      ...prev,
      errors: { ...prev.errors, [field as string]: error }
    }));
  }, []);
  const validateForm = useCallback(() => {
    if (!validate) return true;
    
    const errors = validate(formState.data);
    setFormState(prev => ({ ...prev, errors }));
    
    return Object.keys(errors).length === 0;
  }, [validate, formState.data]);

  const handleSubmit = useCallback(async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    
    if (!validateForm()) return;
    
    setFormState(prev => ({ ...prev, isSubmitting: true, submitStatus: 'idle' }));
    
    try {
      if (onSubmit) {
        await onSubmit(formState.data);
      }
      setFormState(prev => ({ ...prev, isSubmitting: false, submitStatus: 'success' }));
    } catch (error) {
      setFormState(prev => ({ 
        ...prev, 
        isSubmitting: false, 
        submitStatus: 'error',
        errors: { ...prev.errors, submit: 'An error occurred while submitting the form' }
      }));
    }
  }, [validateForm, onSubmit, formState.data]);

  const resetForm = useCallback(() => {
    setFormState({
      data: initialData,
      isSubmitting: false,
      submitStatus: 'idle',
      errors: { /* empty */ },
    });
  }, [initialData]);

  const clearErrors = useCallback(() => {
    setFormState(prev => ({ ...prev, errors: {} }));
  }, []);

  return {
    formState,
    setFieldValue,
    setFieldError,
    validateForm,
    handleSubmit,
    resetForm,
    clearErrors
  };
};