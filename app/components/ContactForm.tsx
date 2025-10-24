'use client';
import React, { useState, useCallback } from 'react';
interface FormData {
  name: string
  email: string
  message: string}
interface FormErrors {
  name?: string
  email?: string
  message?: string}
const ContactForm: React.FC = () => {;
const
;  });
const [isSubmitting, setIsSubmitting] = useState(false);
const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
const [errors, setErrors] = useState<FormErrors>({});
const validateForm = useCallback((data: FormData): FormErrors => {;
const
;    return newErrors}, []);
const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {;
const
;  }, [errors]);
const
;    e.preventDefault();
const
;export default ContactForm";'