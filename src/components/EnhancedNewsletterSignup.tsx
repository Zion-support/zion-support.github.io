import React, { useState } from 'react';

interface Props {
  title?: string;
  subtitle?: string;
  showContentPreview?: boolean;
  className?: string;
}

export default function EnhancedNewsletterSignup({ className = '' }: Props): React.JSX.Element {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    setIsSubscribed(true);
    setEmail('');
  };

  if (isSubscribed) {
    return (
      <div className={`bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded ${className}`}>
        Thank you for subscribing to our newsletter!
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`bg-gray-100 p-6 rounded-lg ${className}`}>
      <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
      <p className="text-gray-600 mb-4">Get the latest insights on AI and technology trends.</p>
      <div className="flex gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          Subscribe
        </button>
      </div>
    </form>
  );
}