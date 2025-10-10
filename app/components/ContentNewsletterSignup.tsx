'use client';
import React, { useState } from 'react';
import { Mail, CheckCircle, ArrowRight } from 'lucide-react';

interface ContentNewsletterSignupProps {
  title?: string;
  description?: string;
  placeholder?: string;
  buttonText?: string;
  successMessage?: string;
  onSubscribe?: (email: string) => void;
  className?: string;
}

const ContentNewsletterSignup: React.FC<ContentNewsletterSignupProps> = ({
  title = "Stay Updated",
  description = "Get the latest news and updates delivered to your inbox.",
  placeholder = "Enter your email address",
  buttonText = "Subscribe",
  successMessage = "Thank you for subscribing!",
  onSubscribe,
  className = ""
}) => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) return;

    setIsLoading(true);
    
    try {
      if (onSubscribe) {
        await onSubscribe(email);
      }
      
      setIsSubscribed(true);
      setEmail('');
    } catch (error) {
      console.error('Subscription error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubscribed) {
    return (
      <div className={`bg-green-50 border border-green-200 rounded-lg p-6 text-center ${className}`}>
        <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
        <h3 className="text-lg font-semibold text-green-800 mb-2">Success!</h3>
        <p className="text-green-600">{successMessage}</p>
      </div>
    );
  }

  return (
    <div className={`bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-2xl p-8 ${className}`}>
      <div className="max-w-2xl mx-auto text-center">
        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <Mail className="w-8 h-8 text-white" />
        </div>
        
        <h2 className="text-3xl font-bold mb-4">
          {title}
        </h2>
        
        <p className="text-xl text-purple-100 mb-8">
          {description}
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={placeholder}
            required
            className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
          />
          <button
            type="submit"
            disabled={isLoading}
            className="bg-white text-purple-600 hover:bg-purple-50 font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
          >
            {isLoading ? (
              <div className="w-5 h-5 border-2 border-purple-600 border-t-transparent rounded-full animate-spin" />
            ) : (
              <>
                {buttonText}
                <ArrowRight className="w-5 h-5 ml-2" />
              </>
            )}
          </button>
        </form>

        <p className="text-sm text-purple-200 mt-4">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </div>
  );
};

export default ContentNewsletterSignup;