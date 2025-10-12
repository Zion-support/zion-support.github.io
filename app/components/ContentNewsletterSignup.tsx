import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

interface ContentNewsletterSignupProps {
  className?: string;
}

export default function ContentNewsletterSignup({ className = '' }: ContentNewsletterSignupProps) {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription logic here
    setIsSubscribed(true);
    setEmail('');
  };

  return (
    <div className={`bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl p-8 text-white ${className}`}>
      <div className="text-center">
        <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
        <p className="text-cyan-100 mb-6">
          Get the latest news and updates delivered to your inbox
        </p>
        
        {!isSubscribed ? (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              required
            />
            <button
              type="submit"
              className="bg-white text-cyan-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center"
            >
              Subscribe
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </form>
        ) : (
          <div className="text-center">
            <p className="text-lg font-semibold mb-2">Thank you for subscribing!</p>
            <p className="text-cyan-100">You'll receive our latest updates soon.</p>
          </div>
        )}
      </div>
    </div>
  );
}
