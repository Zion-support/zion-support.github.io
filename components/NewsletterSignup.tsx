import React, { useState } from 'react';

interface NewsletterSignupProps {
  className?: string;
  variant?: 'default' | 'compact' | 'inline';
}

export default function NewsletterSignup({ 
  className = '', 
  variant = 'default' 
}: NewsletterSignupProps) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, name }),
      });

      const data = await response.json();

      if (data.success) {
        setIsSuccess(true);
        setMessage(data.message);
        setEmail('');
        setName('');
      } else {
        setMessage(data.message);
      }
    } catch (error) {
      setMessage('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  if (isSuccess) {
    return (
      <div className={`bg-green-50 border border-green-200 rounded-lg p-6 text-center ${className}`}>
        <div className="text-green-600 text-4xl mb-2">✓</div>
        <h3 className="text-lg font-semibold text-green-800 mb-2">Thank you for subscribing!</h3>
        <p className="text-green-700">You'll receive our latest updates and insights.</p>
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <div className={`bg-gray-50 rounded-lg p-4 ${className}`}>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            disabled={isLoading}
            className="bg-blue-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-blue-700 disabled:opacity-50"
          >
            {isLoading ? 'Subscribing...' : 'Subscribe'}
          </button>
        </form>
        {message && (
          <p className={`mt-2 text-sm ${message.includes('Success') ? 'text-green-600' : 'text-red-600'}`}>
            {message}
          </p>
        )}
      </div>
    );
  }

  if (variant === 'inline') {
    return (
      <div className={className}>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name (optional)"
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email"
            required
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            disabled={isLoading}
            className="bg-blue-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-blue-700 disabled:opacity-50"
          >
            {isLoading ? 'Subscribing...' : 'Subscribe'}
          </button>
        </form>
        {message && (
          <p className={`mt-2 text-sm ${message.includes('Success') ? 'text-green-600' : 'text-red-600'}`}>
            {message}
          </p>
        )}
      </div>
    );
  }

  return (
    <div className={`bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg p-8 text-white ${className}`}>
      <div className="text-center">
        <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
        <p className="text-blue-100 mb-6">
          Get the latest insights on technology, AI, and digital transformation delivered to your inbox.
        </p>
        
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-3 mb-4">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name (optional)"
              className="flex-1 px-4 py-2 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 px-4 py-2 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-white text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 disabled:opacity-50"
          >
            {isLoading ? 'Subscribing...' : 'Subscribe to Newsletter'}
          </button>
        </form>
        
        {message && (
          <p className={`mt-4 text-sm ${message.includes('Success') ? 'text-green-200' : 'text-red-200'}`}>
            {message}
          </p>
        )}
        
        <p className="text-xs text-blue-200 mt-4">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </div>
  );
}