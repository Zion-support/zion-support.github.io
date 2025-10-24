import React, { useState } from 'react';

export const useForm = (initialValues = {}) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues(prev => ({
      ...prev,
      [name]: value
    }));
  };

<<<<<<< HEAD
  const handleSubmit = (onSubmit: (_values: unknown) => void) => (e: React.FormEvent) => {
=======
  const handleSubmit = (onSubmit: (_values: any) => void) => (e: React.FormEvent) => {
>>>>>>> cursor/fix-errors-and-merge-to-main-d028
    e.preventDefault();
    onSubmit(values);
  };

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
    setValues,
    setErrors
  };
};