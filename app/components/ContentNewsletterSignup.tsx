import React, { useState } from 'react';

const ContentNewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
    setIsSubscribed(true);
    setEmail('');
  };

  if (isSubscribed) {
    return (
      <section className="mb-16" aria-labelledby="newsletter-heading">
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-center">
          <h2 id="newsletter-heading" className="text-2xl font-bold text-white mb-4">
            Thank You for Subscribing!
          </h2>
          <p className="text-green-100">
            You'll receive our latest insights and updates soon.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="mb-16" aria-labelledby="newsletter-heading">
      <div className="bg-gradient-to-r from-slate-800 to-purple-900 rounded-2xl p-8 text-center">
        <h2 id="newsletter-heading" className="text-2xl sm:text-3xl font-bold text-white mb-4 neon-text">
          Stay Updated with Latest AI Insights
        </h2>
        <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
          Get exclusive access to our latest research, case studies, and industry insights delivered directly to your inbox.
        </p>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all"
            >
              Subscribe
            </button>
          </div>
          <p className="text-gray-400 text-sm mt-3">
            No spam, unsubscribe at any time.
          </p>
        </form>
      </div>
    </section>
  );
};

export default ContentNewsletterSignup;