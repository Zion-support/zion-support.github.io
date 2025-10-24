'use client';

import { useState, useCallback } from 'react';

interface FormState<T /> {
  data: T;
  isSubmitting: boolean;
  submitStatus: "idle" | "success" | "error";
  errors: Partial<Record<keyof T, string />>;
}

interface UseFormOptions<T /> {
  initialData: T;
  onSubmit: (data: T) => Promise<void />
  validate?: (data: T) => Partial<Record<keyof T, string />>;
}

export function useForm<T>({
  initialData,
  onSubmit,
  validate,
}: UseFormOptions<T>) {
  const [state, setState] = useState<FormState<T>>({
    data: initialData,
    isSubmitting: false,
    submitStatus: "idle",
    errors: {},
  });

  const handleChange = useCallback((field: keyof T, value: any) => {
    setState(prev => ({
      ...prev,
      data: {
        ...prev.data,
        [field]: value,
      },
      errors: {
        ...prev.errors,
        [field]: undefined,
      },
    }));
  }, []);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (state.isSubmitting) return;

    setState(prev => ({ ...prev, isSubmitting: true, submitStatus: 'idle' }));

    try {
      if (validate) {
        const errors = validate(state.data);
        if (Object.keys(errors).length > 0) {
          setState(prev => ({
            ...prev,
            errors,
            isSubmitting: false,
            submitStatus: 'error',
          }));
          return;
        }
      }

      await onSubmit(state.data);
      setState(prev => ({
        ...prev,
        isSubmitting: false,
        submitStatus: 'success',
      }));
    } catch (error) {
      console.error('Form submission error:', error);
      setState(prev => ({
        ...prev,
        isSubmitting: false,
        submitStatus: 'error',
      }));
    }
  }, [state.data, state.isSubmitting, onSubmit, validate]);

  const reset = useCallback(() => {
    setState({
      data: initialData,
      isSubmitting: false,
      submitStatus: "idle",
      errors: {},
    });
  }, [initialData]);

  return {
    ...state,
    handleChange,
    handleSubmit,
    reset,
  };
}
