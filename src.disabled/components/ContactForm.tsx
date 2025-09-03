
    const { name, value } = e.target;
    setFormData (prev => ({;
      ...prev,;
      [name]: value,}) ) };

  const [isSubmitting, setIsSubmitting] = useState(false)

  const [submitStatus, setSubmitStatus] = useState<'idle;
  ' | 'success;
  ' | 'error;
  '>('idle
  ')
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {'
import React { useState } from 'react';

    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: '',
    budget: '',
    timeline: '' })
  const [isSubmitting, setIsSubmitting] = useState (false) '
  const [submitStatus, setSubmitStatus] = useState<';idle' | 'success' | 'error'> ('idle') 
  const handleInputChange = useCallback((
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev, [name]: value}));
:src.disabled/components/ContactForm.tsx'



