import { useState } from 'react';

export const useForm = () => {
  const [formData, setFormData] = useState({});
  
  return {
    formData,
    setFormData
  };
};