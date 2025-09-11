import React, { useState } from 'react';

interface NewsletterSignupProps {
  variant?: 'default' | 'compact' | 'banner';
  className?: string;
}

export default function NewsletterSignup({ variant = 'default', className = '' }: NewsletterSignupProps) {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubscribed(true);
    setIsSubmitting(false);
    setEmail('');
  };

  if (isSubscribed) {
    return (
      <div className={`bg-green-50 border border-green-200 rounded-lg p-6 text-center ${className}`}>
        <div className="text-4xl mb-4">✅</div>
        <h3 className="text-lg font-semibold text-green-900 mb-2">Successfully Subscribed!</h3>
        <p className="text-green-800">Thank you for subscribing. You'll receive our latest AI insights and resources.</p>
      </div>
    );
  }

  if (variant === 'banner') {
    return (
      <div className={`bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white ${className}`}>
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Ahead with AI Insights</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Get weekly updates on the latest AI trends, implementation guides, and exclusive resources. 
            Join 10,000+ professionals already subscribed.
          </p>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                required
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors disabled:opacity-50"
              >
                {isSubmitting ? 'Subscribing...' : 'Subscribe'}
              </button>
            </div>
          </form>
          <p className="text-sm opacity-75 mt-4">No spam, unsubscribe anytime.</p>
        </div>
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <div className={`bg-gray-50 rounded-lg p-6 ${className}`}>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Get AI Insights Weekly</h3>
        <p className="text-gray-600 text-sm mb-4">Stay updated with the latest AI trends and implementation guides.</p>
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email"
            className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors disabled:opacity-50"
          >
            {isSubmitting ? '...' : 'Subscribe'}
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className={`bg-white border border-gray-200 rounded-xl p-8 ${className}`}>
      <div className="text-center mb-6">
        <div className="text-4xl mb-4">📧</div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Stay Updated with AI Insights</h3>
        <p className="text-gray-600">
          Get weekly updates on the latest AI trends, implementation guides, and exclusive resources. 
          Join 10,000+ professionals already subscribed.
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50"
        >
          {isSubmitting ? 'Subscribing...' : 'Subscribe to Newsletter'}
        </button>
      </form>
      
      <p className="text-sm text-gray-500 text-center mt-4">No spam, unsubscribe anytime.</p>
    </div>
  );
}