'use client';

import React, { useState } from 'react';
import { CheckCircle, ArrowRight, Mail } from 'lucide-react';

interface ContentNewsletterSignupProps {
  title?: string;
  description?: string;
  placeholder?: string;
  buttonText?: string;
  benefits?: string[];
  onSubscribe?: (email: string) => void;
  className?: string;
}

const ContentNewsletterSignup: React.FC<ContentNewsletterSignupProps> = ({
  title = "Stay Updated",
  description = "Get the latest insights, tips, and updates delivered directly to your inbox.",
  placeholder = "Enter your email address",
  buttonText = "Subscribe",
  benefits = [
    "Weekly tech insights",
    "Exclusive content",
    "Early access to new features",
    "No spam, unsubscribe anytime"
  ],
  onSubscribe,
  className = ''
}) => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || isLoading) return;

    setIsLoading(true);
    
    try {
      if (onSubscribe) {
        await onSubscribe(email);
      } else {
        // Default behavior - just simulate success
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
      setIsSubscribed(true);
      setEmail('');
    } catch (error) {
      console.error('Subscription failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubscribed) {
    return (
      <div className={`py-16 px-4 ${className}`}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl p-8">
            <CheckCircle className="w-16 h-16 text-white mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">Successfully Subscribed!</h3>
            <p className="text-green-100">Thank you for subscribing to our newsletter. You'll receive our latest updates soon.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`py-16 px-4 ${className}`}>
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl p-8 md:p-12">
          <div className="text-center mb-8">
            <Mail className="w-16 h-16 text-white mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h2>
            <p className="text-xl text-cyan-100">{description}</p>
          </div>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-8">
            <div className="flex flex-col sm:flex-row gap-4">
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
                disabled={isLoading || !email}
                className="bg-white text-cyan-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-cyan-600 border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    {buttonText}
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </form>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center text-cyan-100">
                <CheckCircle className="w-5 h-5 text-white mr-3 flex-shrink-0" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentNewsletterSignup;