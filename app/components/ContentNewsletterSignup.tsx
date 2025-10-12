import React, { useState } from 'react';
import { Mail } from 'lucide-react';

export default function ContentNewsletterSignup() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate newsletter signup
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubscribed(true);
    setIsSubmitting(false);
  };

  if (isSubscribed) {
    return (
      <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded text-center">
        <div className="flex items-center justify-center">
          <Mail className="w-5 h-5 mr-2" />
          Thank you for subscribing to our newsletter!
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-800 p-8 rounded-lg">
      <h3 className="text-2xl font-bold text-white mb-4">Stay Updated</h3>
      <p className="text-gray-300 mb-6">
        Subscribe to our newsletter for the latest updates on AI technology and industry insights.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className="flex-1 px-4 py-2 rounded-lg border border-gray-600 bg-slate-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Subscribing...' : 'Subscribe'}
        </button>
      </form>
    </div>
  );
}