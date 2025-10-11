'use client';
import React, { useState } from 'react';
import { CheckCircle, Mail, Send } from 'lucide-react';

interface ContentNewsletterSignupProps {
  title?: string;
  description?: string;
  placeholder?: string;
  buttonText?: string;
  className?: string;
}

const ContentNewsletterSignup: React.FC<ContentNewsletterSignupProps> = ({
  title = 'Stay Updated',
  description = 'Get the latest news and updates from Zion Tech Group',
  placeholder = 'Enter your email address',
  buttonText = 'Subscribe',
  className = ''
}) => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      setIsLoading(false);
      setEmail('');
    }, 1000);
  };

  if (isSubscribed) {
    return (
      <div className={`bg-gradient-to-r from-green-500 to-blue-600 rounded-lg p-8 text-center ${className}`}>
        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
        <p className="text-white/90 mb-4">
          You've successfully subscribed to our newsletter. Check your email for confirmation.
        </p>
        <button
          onClick={() => setIsSubscribed(false)}
          className="text-white/80 hover:text-white underline"
        >
          Subscribe another email
        </button>
      </div>
    );
  }

  return (
    <div className={`bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-8 text-center ${className}`}>
      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
        <Mail className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
      <p className="text-white/90 mb-6">{description}</p>
      
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={placeholder}
            className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white/50 focus:outline-none"
            required
          />
          <button
            type="submit"
            disabled={isLoading}
            className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
          >
            {isLoading ? (
              <div className="w-5 h-5 border-2 border-purple-600 border-t-transparent rounded-full animate-spin" />
            ) : (
              <>
                {buttonText}
                <Send className="w-4 h-4 ml-2" />
              </>
            )}
          </button>
        </div>
      </form>
      
      <p className="text-white/70 text-sm mt-4">
        We respect your privacy. Unsubscribe at any time.
      </p>
    </div>
  );
};

export default ContentNewsletterSignup;
