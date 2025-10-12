import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const ContentNewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    setIsLoading(false);
    setIsSubscribed(true);
    setEmail('');

    // Reset after 3 seconds
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  if (isSubscribed) {
    return (
      <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-8 rounded-lg text-center">
        <div className="text-2xl font-bold mb-2">Thank you for subscribing!</div>
        <p>You'll receive our latest updates and insights.</p>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white p-8 rounded-lg">
      <div className="text-center">
        <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
        <p className="mb-6 text-blue-100">
          Get the latest insights on AI, technology trends, and industry updates.
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <div className="flex-1">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="w-full px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-white focus:outline-none"
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 disabled:opacity-50 flex items-center justify-center"
          >
            {isLoading ? (
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600"></div>
            ) : (
              <>
                Subscribe
                <ArrowRight className="w-4 h-4 ml-2" />
              </>
            )}
          </button>
        </form>
        
        <p className="text-sm text-blue-200 mt-4">
          No spam, unsubscribe at any time.
        </p>
      </div>
    </div>
  );
};

export default ContentNewsletterSignup;