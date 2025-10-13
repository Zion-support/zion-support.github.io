import React, { useState } from 'react';
import { Mail, ArrowRight } from 'lucide-react';

const NewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription logic here
    setIsSubscribed(true);
    setEmail('');
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-purple-600/20 to-cyan-500/20 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Stay Updated with <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Latest Tech</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get the latest insights on AI, cybersecurity, and technology trends delivered to your inbox.
          </p>
          
          {isSubscribed ? (
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Thank you for subscribing!</h3>
              <p className="text-gray-300">You'll receive our latest updates soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <div className="flex-1 relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-gradient-to-r from-purple-600 to-cyan-500 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center"
              >
                Subscribe
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;