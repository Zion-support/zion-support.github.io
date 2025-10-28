import React, { useState, useCallback } from 'react';

<<<<<<< HEAD
export interface UseFormOptions<T> {
  initialData: T;
  onSubmit: (_data: T) => Promise<void>;
  validate?: (_data: T) => Record<string, string>;
}

export interface FormState<T> {
=======
export interface FormState<T = Record<string, unknown>> {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-f8bc
  data: T;
  isSubmitting: boolean;
  submitStatus: 'idle' | 'success' | 'error';
  errors: Record<string, string>;
}

<<<<<<< HEAD
export const useForm = <T extends Record<string, unknown>>({
  initialData,
  onSubmit,
  validate,
}: UseFormOptions<T>) => {
=======
export interface UseFormOptions<T = Record<string, unknown>> {
  initialData?: T;
  validate?: (_data: T) => Record<string, string>;
  onSubmit?: (_data: T) => Promise<void> | void;
}

export const useForm = <T = Record<string, unknown>>(options: UseFormOptions<T> = {}) => {
  const { initialData = {} as T, validate, onSubmit } = options;
  
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-f8bc
  const [formState, setFormState] = useState<FormState<T>>({
    data: initialData,
    isSubmitting: false,
    submitStatus: 'idle',
    errors: {},
  });

<<<<<<< HEAD
  const handleInputChange = useCallback((field: keyof T, value: unknown) => {
=======
  const handleChange = useCallback((field: keyof T, value: unknown) => {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-f8bc
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
      await onSubmit(formState.data);
      setFormState(prev => ({
        ...prev,
        submitStatus: 'success',
        data: initialData, // Reset form
      }));
<<<<<<< HEAD
    } catch (error) {
      // Log error in development, send to error service in production
      if (process.env.NODE_ENV === 'development') {
        console.error('Form submission error: ', error);
      }
      // In production, you would send this to your error monitoring service
      // Example: sendToErrorService(error, 'FormSubmission');
      
      setFormState(prev => ({
        ...prev,
        submitStatus: 'error',
      }));
    } finally {
=======
    } catch (_error) {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-f8bc
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