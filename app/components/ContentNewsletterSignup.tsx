import React, { useState } from 'react';
import { Mail, ArrowRight } from 'lucide-react';

export default function ContentNewsletterSignup() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setEmail('');
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-8 text-center">
        <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <Mail className="w-8 h-8 text-green-400" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
        <p className="text-gray-300">You've been successfully subscribed to our newsletter.</p>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-8">
      <div className="text-center mb-8">
        <div className="inline-flex items-center bg-cyan-500/10 border border-cyan-500/20 rounded-full px-6 py-2 mb-4">
          <Mail className="w-5 h-5 text-cyan-400 mr-2" />
          <span className="text-cyan-400 font-medium">Stay Updated</span>
        </div>
        
        <h2 className="text-3xl font-bold text-white mb-4">
          Get the Latest Updates
        </h2>
        <p className="text-gray-300 text-lg">
          Subscribe to our newsletter for the latest AI and technology insights, 
          product updates, and exclusive content.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            required
            className="flex-1 px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                Subscribing...
              </>
            ) : (
              <>
                Subscribe
                <ArrowRight className="w-5 h-5 ml-2" />
              </>
            )}
          </button>
        </div>
        
        <p className="text-gray-400 text-sm mt-4 text-center">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </form>
    </div>
  );
}