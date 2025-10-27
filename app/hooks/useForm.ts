import { useState, useCallback } from 'react';

export interface UseFormOptions<T> {
  initialData: T;
  onSubmit: (data: T) => Promise<void>;
  validate?: (data: T) => Record<string, string>;
}

export interface FormState<T> {
  data: T;
  isSubmitting: boolean;
  submitStatus: 'idle' | 'success' | 'error';
  errors: Record<string, string>;
}

export const useForm = <T extends Record<string, any>>({
  initialData,
  onSubmit,
  validate,
}: UseFormOptions<T>) => {
  const [formState, setFormState] = useState<FormState<T>>({
    data: initialData,
    isSubmitting: false,
    submitStatus: 'idle',
    errors: {},
  });

  const handleInputChange = useCallback((field: keyof T, value: any) => {
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