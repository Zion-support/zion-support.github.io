import React, { useState } from 'react';
import { Mail, Send, CheckCircle } from 'lucide-react';

const ContentNewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate subscription
    setIsSubscribed(true);
    setEmail('');
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="cyber-card text-center p-12 max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-6">Stay Updated</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get the latest insights on AI and IT trends, exclusive content, and special offers delivered to your inbox.
          </p>
          
          {isSubscribed ? (
            <div className="flex items-center justify-center text-green-400">
              <CheckCircle className="w-6 h-6 mr-2" />
              <span className="text-lg">Thank you for subscribing!</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400"
              />
              <button
                type="submit"
                className="cyber-button inline-flex items-center justify-center px-6 py-3"
              >
                <Send className="w-5 h-5 mr-2" />
                Subscribe
              </button>
            </form>
          )}
          
          <p className="text-sm text-gray-400 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContentNewsletterSignup;
