
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

export const _useForm = <T = Record<string, unknown>>(_options: UseFormOptions<T> = { /* empty */ }) => {
  const { initialData = { /* empty */ } as T, validate, onSubmit } = options;

  const [formState, setFormState] = useState<FormState<T>>({
    data: initialData,
    isSubmitting: false,
    submitStatus: 'idle',
    errors: { /* empty */ },});

  const _setFieldValue = useCallback(_(field: keyof T, _value: T[keyof T]) => {
    setFormState(prev => ({
      ...prev,
      data: { ...prev.data, [field]: value },
      errors: { ...prev.errors, [field as string]: '' }
    }));
  }, []);

  const _setFieldError = useCallback(_(field: keyof T, _error: string) => {
    setFormState(prev => ({
      ...prev,
      errors: { ...prev.errors, [field as string]: error }
    }));
  }, []);

  const _validateForm = useCallback_(() => {
    if (!validate) return true;
    
    const _errors = validate(formState.data);
    setFormState(prev => ({ ...prev, errors }));
    
    return Object.keys(errors).length === 0;
  }, [validate, formState.data]);

  const _handleSubmit = useCallback(_async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    
    if (!validateForm()) return;
    
    setFormState(prev => ({ ...prev, isSubmitting: true, submitStatus: 'idle' }));
    
    try {
      if (onSubmit) {
        await onSubmit(formState.data);
      }
      setFormState(prev => ({ ...prev, isSubmitting: false, submitStatus: 'success' }));
    } catch (_error) {
      setFormState(prev => ({ 
        ...prev, 
        isSubmitting: false, 
        submitStatus: 'error',
        errors: { ...prev.errors, submit: 'An error occurred while submitting the form' }
      }));
    }
  }, [validateForm, onSubmit, formState.data]);

  const _resetForm = useCallback_(() => {
    setFormState({
      data: initialData,
      isSubmitting: false,
      submitStatus: 'idle',
      errors: { /* empty */ },
    });
  }, [initialData]);

  const _clearErrors = useCallback_(() => {
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