'use client';
import React, { useState } from 'react';

interface NewsletterSignupProps {
  onSubscribe?: (email: string) => void;
  className?: string;
}

const NewsletterSignup: React.FC<NewsletterSignupProps> = ({ onSubscribe, className = '' }) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (onSubscribe) {
        onSubscribe(email);
      }
      
      setMessage('Thank you for subscribing!');
      setEmail('');
    } catch (error) {
      setMessage('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`newsletter-signup ${className}`}>
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Stay Updated
        </h3>
        <p className="text-gray-600 mb-6">
          Get the latest news and updates delivered to your inbox.
        </p>
      )}
    </div>
  );
};

export default NewsletterSignup;