import React, { useState } from 'react';
import { Mail, CheckCircle } from 'lucide-react';

export default function ContentNewsletterSignup() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubscribed(true);
    setIsLoading(false);
    setEmail('');
  };

  if (isSubscribed) {
    return (
      <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-8 rounded-lg text-center">
        <CheckCircle className="w-12 h-12 mx-auto mb-4" />
        <h3 className="text-2xl font-bold mb-2">Thank you for subscribing!</h3>
        <p className="text-green-100">
          You'll receive our latest updates and exclusive content.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg">
      <div className="max-w-md mx-auto text-center">
        <Mail className="w-12 h-12 mx-auto mb-4" />
        <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
        <p className="text-blue-100 mb-6">
          Get the latest news and updates from Zion Tech Group.
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
              required
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Subscribing...' : 'Subscribe Now'}
          </button>
        </form>
        
        <p className="text-xs text-blue-200 mt-4">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </div>
  );
}

