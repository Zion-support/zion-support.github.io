'use client';

import React, { useState } from 'react';
import { AlertCircle, Mail, Send, CheckCircle } from 'lucide-react';

interface NewsletterSignupProps {
  variant?: 'inline' | 'modal';
  onClose?: () => void;
}

const NewsletterSignup: React.FC<NewsletterSignupProps> = ({ variant = 'inline', onClose }) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setStatus('error');
      setMessage('Please enter your email address');
      return;
    }

    setStatus('loading');
    setMessage('');

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setStatus('success');
      setMessage('Thank you for subscribing!');
      setEmail('');
      
      if (onClose) {
        setTimeout(() => {
          onClose();
        }, 2000);
      }
    } catch (_error) {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    }
  };

  if (variant === 'modal') {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Subscribe to Newsletter</h3>
            {onClose && (
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700"
              >
                ×
              </button>
            )}
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your email"
                required
              />
            </div>
            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
            >
              {status === 'loading' ? (
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  Subscribe
                </>
              )}
            </button>
            {message && (
              <div className={`flex items-center text-sm ${
                status === 'success' ? 'text-green-600' : 'text-red-600'
              }`}>
                {status === 'success' ? (
                  <CheckCircle className="w-4 h-4 mr-2" />
                ) : (
                  <AlertCircle className="w-4 h-4 mr-2" />
                )}
                {message}
              </div>
            )}
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 rounded-lg p-6">
      <div className="flex items-center mb-4">
        <Mail className="w-6 h-6 text-blue-600 mr-2" />
        <h3 className="text-lg font-semibold">Stay Updated</h3>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your email"
            required
          />
        </div>
        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
        >
          {status === 'loading' ? (
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
          ) : (
            <>
              <Send className="w-4 h-4 mr-2" />
              Subscribe
            </>
          )}
        </button>
        {message && (
          <div className={`flex items-center text-sm ${
            status === 'success' ? 'text-green-600' : 'text-red-600'
          }`}>
            {status === 'success' ? (
              <CheckCircle className="w-4 h-4 mr-2" />
            ) : (
              <AlertCircle className="w-4 h-4 mr-2" />
            )}
            {message}
          </div>
        )}
      </form>
    </div>
  );
};

export default NewsletterSignup;