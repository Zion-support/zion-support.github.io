'use client';
import { useState } from 'react';

export const useForm = (initialValues = {}) => {
  const [values, setValues] = useState(initialValues);

  const handleChange = (name: string, value: any) => {
    setValues(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return { values, handleChange };
};
