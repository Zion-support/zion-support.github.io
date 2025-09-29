import React, { useState } from 'react';

export default function NewsletterSignup2026() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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
      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-8 rounded-2xl text-center">
        <div className="w-16 h-16 mx-auto mb-4 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
          <span className="text-2xl">✅</span>
        </div>
        <h3 className="text-2xl font-bold mb-2">Welcome to the AI Innovation Newsletter!</h3>
        <p className="text-green-100 mb-4">
          You're now subscribed to receive the latest AI insights, case studies, and exclusive content.
        </p>
        <div className="bg-white bg-opacity-10 p-4 rounded-lg">
          <p className="text-sm">
            <strong>What you'll get:</strong> Weekly AI innovation updates, exclusive case studies, 
            early access to new content, and invitations to webinars and events.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8 rounded-2xl">
      <div className="text-center mb-6">
        <div className="w-16 h-16 mx-auto mb-4 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
          <span className="text-2xl">📧</span>
        </div>
        <h3 className="text-3xl font-bold mb-2">Stay Ahead with AI Innovation</h3>
        <p className="text-xl opacity-90">
          Get exclusive access to the latest AI insights, case studies, and transformation guides.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
            required
          />
          <button
            type="submit"
            disabled={isLoading}
            className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Subscribing...' : 'Subscribe Free'}
          </button>
        </div>
      </form>

      <div className="grid md:grid-cols-3 gap-4 text-center text-sm">
        <div className="bg-white bg-opacity-10 p-4 rounded-lg">
          <div className="font-bold mb-1">📊 Weekly Insights</div>
          <div className="opacity-80">Latest AI trends and innovations</div>
        </div>
        <div className="bg-white bg-opacity-10 p-4 rounded-lg">
          <div className="font-bold mb-1">🏆 Case Studies</div>
          <div className="opacity-80">Exclusive success stories</div>
        </div>
        <div className="bg-white bg-opacity-10 p-4 rounded-lg">
          <div className="font-bold mb-1">🎯 Early Access</div>
          <div className="opacity-80">New content before anyone else</div>
        </div>
      </div>

      <div className="text-center mt-6 text-sm opacity-80">
        <p>Join 15,000+ AI leaders and innovators. No spam, unsubscribe anytime.</p>
      </div>
    </div>
  );
}