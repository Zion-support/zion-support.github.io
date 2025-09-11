import React, { useState } from 'react';

export default function NewsletterSignup() {
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
      <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-8 rounded-xl text-center">
        <div className="text-4xl mb-4">🎉</div>
        <h3 className="text-2xl font-bold mb-2">Welcome to the Community!</h3>
        <p className="text-lg opacity-90 mb-4">
          Thank you for subscribing! Check your email for exclusive content and updates.
        </p>
        <div className="bg-white/20 rounded-lg p-4">
          <h4 className="font-semibold mb-2">What's Next?</h4>
          <ul className="text-sm space-y-1 opacity-90">
            <li>• Weekly AI insights and trends</li>
            <li>• Exclusive case studies and resources</li>
            <li>• Early access to new tools and calculators</li>
            <li>• Invitation to our private community</li>
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white p-8 rounded-xl">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold mb-4">🚀 Stay Ahead of the AI Curve</h2>
        <p className="text-lg opacity-90 max-w-2xl mx-auto">
          Get exclusive access to the latest AI trends, case studies, and implementation guides. 
          Join 10,000+ business leaders transforming their operations with AI.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="flex flex-col sm:flex-row gap-3 mb-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-white focus:outline-none"
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
        <p className="text-sm opacity-75 text-center">
          No spam. Unsubscribe anytime. We respect your privacy.
        </p>
      </form>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        <div className="bg-white/10 rounded-lg p-4">
          <div className="text-2xl mb-2">📊</div>
          <h3 className="font-semibold mb-1">Weekly Insights</h3>
          <p className="text-sm opacity-80">Latest AI trends and market analysis</p>
        </div>
        <div className="bg-white/10 rounded-lg p-4">
          <div className="text-2xl mb-2">📚</div>
          <h3 className="font-semibold mb-1">Exclusive Resources</h3>
          <p className="text-sm opacity-80">Templates, checklists, and guides</p>
        </div>
        <div className="bg-white/10 rounded-lg p-4">
          <div className="text-2xl mb-2">🎯</div>
          <h3 className="font-semibold mb-1">Early Access</h3>
          <p className="text-sm opacity-80">New tools and calculators first</p>
        </div>
      </div>

      <div className="mt-6 text-center">
        <p className="text-sm opacity-75">
          Join industry leaders from Microsoft, Google, Amazon, and 500+ other companies
        </p>
      </div>
    </div>
  );
}