/**
 * useForm Hook
 * Provides form state management and validation
 */

import React from 'react';
import { useState, useCallback, ChangeEvent } from 'react';
import {
  ValidationRule,
  validateField,
  validateForm,
  isFormValid,
  getFormErrors,
  ValidationResult,
} from '../utils/formValidation';

export interface UseFormConfig<T extends Record<string, unknown>> {
  initialValues: T;
  validationSchema?: Partial<Record<keyof T, ValidationRule[]>>;
  onSubmit: (values: T) => void | Promise<void>;
  validateOnChange?: boolean;
  validateOnBlur?: boolean;
}

export interface UseFormReturn<T extends Record<string, unknown>> {
  values: T;
  errors: Record<keyof T, string[]>;
  touched: Record<keyof T, boolean>;
  isSubmitting: boolean;
  isValid: boolean;
  handleChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => void;
  handleBlur: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  setFieldValue: (field: keyof T, value: T[keyof T]) => void;
  setFieldError: (field: keyof T, errors: string[]) => void;
  setFieldTouched: (field: keyof T, touched: boolean) => void;
  resetForm: () => void;
  validateField: (field: keyof T) => void;
  validateAllFields: () => boolean;
}

export function useForm<T extends Record<string, unknown>>({
  initialValues,
  validationSchema = {},
  onSubmit,
  validateOnChange = true,
  validateOnBlur = true,
}: UseFormConfig<T>): UseFormReturn<T> {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<Record<keyof T, string[]>>({} as Record<keyof T, string[]>);
  const [touched, setTouched] = useState<Record<keyof T, boolean>>({} as Record<keyof T, boolean>);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Validate a single field
  const validateSingleField = useCallback(
    (field: keyof T): void => {
      if (!validationSchema[field]) return;

      const fieldValue = values[field];
      const rules = validationSchema[field];
      const result = validateField(fieldValue, rules);

      setErrors(prev => ({
        ...prev,
        [field]: result.errors,
      }));
    },
    [values, validationSchema]
  );

  // Validate all fields
  const validateAllFields = useCallback((): boolean => {
    if (Object.keys(validationSchema).length === 0) return true;

    const validationResults = validateForm(
      values,
      validationSchema as Record<keyof T, ValidationRule[]>
    );
    const formErrors = getFormErrors(validationResults);

    setErrors(formErrors);

    return isFormValid(validationResults);
  }, [values, validationSchema]);

  // Handle input change
  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const { name, value, type } = e.target;
      const fieldName = name as keyof T;

      // Handle checkbox inputs
      let fieldValue: unknown = value;
      if (type === 'checkbox' && 'checked' in e.target) {
        fieldValue = (e.target as HTMLInputElement).checked;
      }

      setValues(prev => ({
        ...prev,
        [fieldName]: fieldValue,
      }));

      // Validate on change if enabled
      if (validateOnChange && touched[fieldName]) {
        setTimeout(() => validateSingleField(fieldName), 0);
      }
    },
    [validateOnChange, touched, validateSingleField]
  );

  // Handle input blur
  const handleBlur = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const fieldName = e.target.name as keyof T;

      setTouched(prev => ({
        ...prev,
        [fieldName]: true,
      }));

      // Validate on blur if enabled
      if (validateOnBlur) {
        validateSingleField(fieldName);
      }
    },
    [validateOnBlur, validateSingleField]
  );

  // Handle form submission
  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      // Mark all fields as touched
      const allTouched = Object.keys(values).reduce(
        (acc, key) => {
          acc[key as keyof T] = true;
          return acc;
        },
        {} as Record<keyof T, boolean>
      );
      setTouched(allTouched);

      // Validate all fields
      const isValid = validateAllFields();

      if (!isValid) {
        return;
      }

      setIsSubmitting(true);

      try {
        await onSubmit(values);
      } catch (error) {
        console.error('Form submission error:', error);
      } finally {
        setIsSubmitting(false);
      }
    },
    [values, validateAllFields, onSubmit]
  );

  // Set field value programmatically
  const setFieldValue = useCallback(
    (field: keyof T, value: T[keyof T]) => {
      setValues(prev => ({
        ...prev,
        [field]: value,
      }));

      if (validateOnChange && touched[field]) {
        setTimeout(() => validateSingleField(field), 0);
      }
    },
    [validateOnChange, touched, validateSingleField]
  );

  // Set field error programmatically
  const setFieldError = useCallback((field: keyof T, fieldErrors: string[]) => {
    setErrors(prev => ({
      ...prev,
      [field]: fieldErrors,
    }));
  }, []);

  // Set field touched programmatically
  const setFieldTouched = useCallback((field: keyof T, isTouched: boolean) => {
    setTouched(prev => ({
      ...prev,
      [field]: isTouched,
    }));
  }, []);

  // Reset form to initial values
  const resetForm = useCallback(() => {
    setValues(initialValues);
    setErrors({} as Record<keyof T, string[]>);
    setTouched({} as Record<keyof T, boolean>);
    setIsSubmitting(false);
  }, [initialValues]);

  // Check if form is valid
  const isValid =
    Object.keys(errors).length === 0 ||
    Object.values(errors).every(errorArray => errorArray.length === 0);

  return {
    values,
    errors,
    touched,
    isSubmitting,
    isValid,
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue,
    setFieldError,
    setFieldTouched,
    resetForm,
    validateField: validateSingleField,
    validateAllFields,
  };
}
