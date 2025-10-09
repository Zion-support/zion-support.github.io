'use client';

import React, { useState } from 'react';
import { Mail, ArrowRight } from 'lucide-react';

const ContentNewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitted(true);
    setIsSubmitting(false);
    setEmail('');
    
    // Reset after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  if (isSubmitted) {
    return (
      <section className="mb-16" aria-labelledby="newsletter-heading">
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-8 rounded-xl text-center">
          <div className="text-4xl mb-4">✅</div>
          <h2 className="text-2xl font-bold mb-2">Thank You!</h2>
          <p className="text-green-100">You've been successfully subscribed to our newsletter.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="mb-16" aria-labelledby="newsletter-heading">
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-8 rounded-xl">
        <div className="max-w-2xl mx-auto text-center">
          <h2 id="newsletter-heading" className="text-2xl sm:text-3xl font-bold mb-4">
            Stay Updated with AI Innovation
          </h2>
          <p className="text-purple-100 mb-6">
            Get the latest insights on AI technology, industry trends, and exclusive offers delivered to your inbox.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <div className="flex-1 relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full pl-10 pr-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-300"
                required
                aria-label="Email address"
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {isSubmitting ? (
                <div className="w-5 h-5 border-2 border-purple-600 border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <>
                  Subscribe
                  <ArrowRight className="w-4 h-4 ml-2" />
                </>
              )}
            </button>
          </form>
          
          <p className="text-xs text-purple-200 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>

        </div>
      </div>
    </section>
  );
};

export default ContentNewsletterSignup;

