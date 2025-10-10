'use client';
import React, { useState } from 'react';
import { Mail, CheckCircle, AlertCircle } from 'lucide-react';

const ContentNewsletterSignup: React.FC = () => {const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsSubscribed(true);
      setEmail('')} catch (error) {console.error('Newsletter signup error:', error)} finally {setIsSubmitting(false);
      setIsLoading(false)}
  }

  if (isSubscribed) {
    return (
      <div className="bg-gradient-to-r from-green-500 to-blue-600 rounded-lg p-8 text-center">
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
    <div className="bg-slate-800/50 rounded-lg p-8">
      <div className="text-center mb-6">
        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <Mail className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Stay Updated</h3>
        <p className="text-gray-300">
          Get the latest insights on AI, IT, and technology trends delivered to your inbox.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            required
            className="flex-1 px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button>isLoading ? (
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : (
              'Subscribe'
            )</button>
        </div>
        
        <p className="text-xs text-gray-400 text-center mt-3">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </form>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
        <div className="text-sm">
          <div className="text-2xl font-bold text-blue-400">10K+</div>
          <div className="text-gray-400">Subscribers</div>
        </div>
        <div className="text-sm">
          <div className="text-2xl font-bold text-purple-400">Weekly</div>
          <div className="text-gray-400">Updates</div>
        </div>
        <div className="text-sm">
          <div className="text-2xl font-bold text-green-400">Free</div>
          <div className="text-gray-400">Forever</div>
        </div>
      </div>
    </div>
  );
}

export default ContentNewsletterSignup;