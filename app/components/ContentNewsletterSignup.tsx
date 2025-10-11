'use client';
import React, {useState}from 'react';
import {Mail, CheckCircle, AlertCircle}}from 'lucide-react';

const ContentNewsletterSignup: React.FC = () => {,
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => ;
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    setIsLoading(true);

    try;
      // Simulate API call;
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsSubscribed(true);
      setEmail('');}catch (error) {console.error('Newsletter signup error:', error);}finally {setIsSubmitting(false);}
      setIsLoading(false);}}

  if (isSubscribed) {
