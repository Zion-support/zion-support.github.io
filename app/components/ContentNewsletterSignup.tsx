import React from 'react';

const ContentNewsletterSignup: React.FC = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-4 neon-text">
          Stay Updated
        </h2>
        <p className="text-gray-300 mb-8">
          Get the latest updates on AI innovations, IT solutions, and emerging technologies.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-cyan-500/30 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
          />
          <button className="cyber-button px-6 py-3">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContentNewsletterSignup;
