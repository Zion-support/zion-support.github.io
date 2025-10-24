<<<<<<< HEAD
import { useState, useCallback } from "react";
=======
'use client';

import { useState, useCallback } from 'react';
>>>>>>> origin/main

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

<<<<<<< HEAD
export function useForm<T extends Record<string, any />>({
  initialData,
  onSubmit,
  validate,
}: UseFormOptions<T />) {
  const [formState, setFormState] = useState<FormState<T />>({
=======
export function useForm<T>({
  initialData,
  onSubmit,
  validate,
}: UseFormOptions<T>) {
  const [state, setState] = useState<FormState<T>>({
>>>>>>> origin/main
    data: initialData,
    isSubmitting: false,
    submitStatus: "idle",
    errors: {},
  });

<<<<<<< HEAD
  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement />) => {
    const { name, value } = e.target;
    setFormState(prev => ({
=======
  const handleChange = useCallback((field: keyof T, value: any) => {
    setState(prev => ({
>>>>>>> origin/main
      ...prev,
      data: {
        ...prev.data,
        [field]: value,
      },
      errors: {
        ...prev.errors,
<<<<<<< HEAD
        [name]: "", // Clear error when user starts typing
=======
        [field]: undefined,
>>>>>>> origin/main
      },
    }));
  }, []);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (state.isSubmitting) return;

<<<<<<< HEAD
    setFormState(prev => ({
      ...prev,
      isSubmitting: true,
      submitStatus: "idle",
      errors: {},
    }));

    try {
      await onSubmit(formState.data);
      setFormState(prev => ({
        ...prev,
        submitStatus: "success",
        data: initialData, // Reset form
      }));
    } catch (error) {
      // Log error in development, send to error service in production
      if (process.env.NODE_ENV === "development") {
        console.error("Form submission error:", error);
      }
      // In production, you would send this to your error monitoring service
      // Example: sendToErrorService(error, "FormSubmission");
      
      setFormState(prev => ({
        ...prev,
        submitStatus: "error",
      }));
    } finally {
      setFormState(prev => ({
=======
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
>>>>>>> origin/main
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
