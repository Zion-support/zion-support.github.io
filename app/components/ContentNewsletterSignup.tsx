import React, { useState } from 'react';

const ContentNewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Simulate subscription
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <div className="bg-gradient-to-r from-cyan-600 to-blue-700 py-16 rounded-2xl cyber-card">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Stay Updated with AI Innovations
        </h2>
        <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
          Get the latest insights, case studies, and AI breakthroughs delivered to your inbox
        </p>
        
        {!isSubscribed ? (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-300"
                required
              />
              <button
                type="submit"
                className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </div>
            <p className="text-cyan-100 text-sm mt-4">
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </form>
        ) : (
          <div className="max-w-md mx-auto">
            <div className="bg-green-500 text-white px-6 py-4 rounded-lg">
              <div className="flex items-center justify-center">
                <span className="text-2xl mr-2">✅</span>
                <span className="font-semibold">Successfully subscribed!</span>
              </div>
              <p className="text-sm mt-2">
                Thank you for joining our newsletter. You'll receive our latest updates soon.
              </p>
            </div>
          </div>
        )}
        
        <div className="mt-8 text-cyan-100 text-sm">
          <p>Join 10,000+ professionals who trust our insights</p>
        </div>
      </div>
    </div>
  );
};

export default ContentNewsletterSignup;