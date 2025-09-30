import React, { useState } from 'react';

interface NewsletterSignupProps {
  variant?: 'default' | 'compact' | 'hero';
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
    
    // Reset after 3 seconds
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  if (isSubscribed) {
    return (
      <div className={`text-center ${className}`}>
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg">
          <p className="font-semibold">Thank you for subscribing!</p>
          <p className="text-sm">You'll receive our latest AI insights and updates.</p>
        </div>
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <div className={`bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-6 ${className}`}>
        <h3 className="text-lg font-semibold text-white mb-2">Stay Updated</h3>
        <p className="text-blue-100 text-sm mb-4">Get AI insights delivered to your inbox.</p>
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="flex-1 px-3 py-2 rounded text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-white/50"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-white text-blue-600 px-4 py-2 rounded text-sm font-semibold hover:bg-gray-100 transition-colors disabled:opacity-50"
          >
            {isSubmitting ? '...' : 'Subscribe'}
          </button>
        </form>
      </div>
    );
  }

  if (variant === 'hero') {
    return (
      <div className={`text-center ${className}`}>
        <h2 className="text-3xl font-bold text-white mb-4">
          Stay Ahead with AI Insights
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Get the latest AI trends, breakthrough technologies, and expert insights delivered to your inbox weekly.
        </p>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto flex gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            required
            className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/50"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors disabled:opacity-50"
          >
            {isSubmitting ? 'Subscribing...' : 'Subscribe'}
          </button>
        </form>
        <p className="text-blue-200 text-sm mt-4">
          Join 10,000+ professionals who trust our insights. Unsubscribe anytime.
        </p>
      </div>
    );
  }

  return (
    <div className={`bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 ${className}`}>
      <div className="text-center">
        <h2 className="text-2xl font-bold text-white mb-4">
          Get AI Insights Weekly
        </h2>
        <p className="text-blue-100 mb-6 max-w-xl mx-auto">
          Stay updated with the latest AI breakthroughs, industry trends, and expert analysis from our team of specialists.
        </p>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto flex gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/50"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors disabled:opacity-50"
          >
            {isSubmitting ? '...' : 'Subscribe'}
          </button>
        </form>
        <p className="text-blue-200 text-sm mt-4">
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </div>
  );
}