'use client';
import React, { useState } from 'react';

const ContentNewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <div className="bg-gradient-to-r from-cyan-500/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-8 mb-16">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Stay Updated</h2>
        <p className="text-gray-300 mb-6">
          Get the latest insights on AI and IT solutions delivered to your inbox.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
            required
          />
          <button
            type="submit"
            className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContentNewsletterSignup;