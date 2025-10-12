import React, { useState } from 'react';
import { ArrowRight, Mail } from 'lucide-react';

const NewsletterSignup: React.FC = () => {
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
      <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg p-6 text-center">
        <div className="flex items-center justify-center mb-2">
          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3">
            <Mail className="w-4 h-4 text-white" />
          </div>
          <h3 className="text-xl font-bold text-white">Thank you for subscribing!</h3>
        </div>
        <p className="text-green-100">
          You'll receive our latest updates and insights on AI and IT solutions.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-6">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-white mb-2">Stay Updated</h3>
        <p className="text-purple-100">
          Get the latest insights on AI technology and IT solutions delivered to your inbox.
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
        <div className="flex-1">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="w-full px-4 py-3 rounded-lg border-0 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
            required
          />
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <div className="w-5 h-5 border-2 border-purple-600 border-t-transparent rounded-full animate-spin" />
          ) : (
            <>
              Subscribe
              <ArrowRight className="w-4 h-4 ml-2" />
            </>
          )}
        </button>
      </form>
      
      <p className="text-purple-100 text-sm text-center mt-4">
        No spam, unsubscribe at any time.
      </p>
    </div>
  );
};

export default NewsletterSignup;