import React, { useState } from 'react';

interface NewsletterSignupProps {
  className?: string;
  onSubscribe?: (email: string) => void;
}

const NewsletterSignup: React.FC<NewsletterSignupProps> = ({
  className = '',
  onSubscribe
}) => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsSubscribed(true);
      onSubscribe?.(email);
      setEmail('');
    } catch (error) {
      console.error('Subscription failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubscribed) {
    return (
      <div className={`text-center ${className}`}>
        <div className="text-green-400 text-lg font-semibold mb-2">
          ✓ Successfully subscribed!
        </div>
        <p className="text-gray-300">
          Thank you for joining our newsletter.
        </p>
      </div>
    );
  }

  return (
    <div className={`max-w-md mx-auto ${className}`}>
      <h3 className="text-2xl font-bold text-white mb-4 text-center">
        Stay Updated
      </h3>
      <p className="text-gray-300 text-center mb-6">
        Get the latest news and updates from Zion Tech Group.
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
          />
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? 'Subscribing...' : 'Subscribe'}
        </button>
      </form>
    </div>
  );
};

export default NewsletterSignup;