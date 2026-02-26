'use client';

import React, { useState } from 'react';

interface NewsletterSignupProps {
  className?: string;
  onSubscribe?: (email: string) => void;
}

const NewsletterSignup: React.FC<NewsletterSignupProps> = ({ 
  className = '', 
  onSubscribe 
}) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

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
    } catch {
      setMessage('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`newsletter-signup ${className}`}>
      <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
      <p className="text-gray-600 mb-4">
        Get the latest updates and news delivered to your inbox.
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="sr-only">
            Email address
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
        >
          {isSubmitting ? 'Subscribing...' : 'Subscribe'}
        </button>
      </form>
      
      {message && (
        <p className={`mt-2 text-sm ${message.includes('Thank you') ? 'text-green-600' : 'text-red-600'}`}>
          {message}
        </p>
      )}
    </div>
  );
};

NewsletterSignup.displayName = 'NewsletterSignup';

export default NewsletterSignup;