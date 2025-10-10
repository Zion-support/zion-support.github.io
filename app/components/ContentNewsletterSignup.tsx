'use client';
import React, { useState } from 'react';
import { Mail, CheckCircle, AlertCircle, Send } from 'lucide-react';

interface NewsletterSignupProps {
  title?: string;
  description?: string;
  placeholder?: string;
  buttonText?: string;
  successMessage?: string;
  errorMessage?: string;
  backgroundColor?: string;
  textColor?: string;
  buttonColor?: string;
  showIcon?: boolean;
  showDescription?: boolean;
  showSuccessMessage?: boolean;
  showErrorMessage?: boolean;
}

const ContentNewsletterSignup: React.FC<NewsletterSignupProps> = ({
  title = 'Stay Updated',
  description = 'Get the latest news and updates delivered to your inbox.',
  placeholder = 'Enter your email address',
  buttonText = 'Subscribe',
  successMessage = 'Thank you for subscribing!',
  errorMessage = 'Something went wrong. Please try again.',
  backgroundColor = 'bg-slate-800',
  textColor = 'text-white',
  buttonColor = 'bg-cyan-500 hover:bg-cyan-600',
  showIcon = true,
  showDescription = true,
  showSuccessMessage = true,
  showErrorMessage = true
}) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Simulate success/error
      if (email.includes('@')) {
        setIsSubscribed(true);
        setEmail('');
      } else {
        setError('Please enter a valid email address');
      }
    } catch (err) {
      setError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubscribed) {
    return (
      <div className={`${backgroundColor} ${textColor} py-16 px-4`}>
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold mb-4">{successMessage}</h3>
          <p className="text-lg">You'll receive our latest updates soon.</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`${backgroundColor} ${textColor} py-16 px-4`}>
      <div className="max-w-2xl mx-auto text-center">
        {showIcon && (
          <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <Mail className="w-8 h-8 text-white" />
          </div>
        )}
        
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        
        {showDescription && (
          <p className="text-lg mb-8">{description}</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={placeholder}
              required
              className="flex-1 px-4 py-3 bg-white text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className={`px-8 py-3 ${buttonColor} text-white font-bold rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center`}
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                  Subscribing...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5 mr-2" />
                  {buttonText}
                </>
              )}
            </button>
          </div>

          {error && showErrorMessage && (
            <div className="flex items-center justify-center text-red-400">
              <AlertCircle className="w-5 h-5 mr-2" />
              {error}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContentNewsletterSignup;
