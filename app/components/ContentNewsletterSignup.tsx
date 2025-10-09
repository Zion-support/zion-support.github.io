import React, { useState } from 'react';

const ContentNewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    setIsSubscribed(true);
    setEmail('');
  };

  return (
    <>
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="cyber-card hologram-card p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
            Stay Updated with AI Innovation
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get the latest insights on AI, technology trends, and business transformation delivered to your inbox.
          </p>
          
          {!isSubscribed ? (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 rounded-lg bg-slate-800/50 border border-cyan-500/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                  required
                />
                <button
                  type="submit"
                  className="cyber-button px-8 py-3"
                >
                  Subscribe
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-2xl font-bold text-green-400 mb-2">Thank You!</h3>
              <p className="text-gray-300">You've successfully subscribed to our newsletter.</p>
            </div>
          )}
          
          <p className="text-sm text-gray-400 mt-6">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
    </>
  );
};

export default ContentNewsletterSignup;