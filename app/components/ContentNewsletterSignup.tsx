import React, { useState } from 'react';
import { Mail, Send } from 'lucide-react';

const ContentNewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup logic here
    setIsSubscribed(true);
    setEmail('');
  };

  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Stay Updated with Our Latest Solutions
        </h2>
        <p className="text-gray-300 mb-8">
          Get exclusive insights, updates, and early access to new AI and IT solutions.
        </p>
        
        {!isSubscribed ? (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <div className="flex-1 relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
                required
              />
            </div>
            <button
              type="submit"
              className="cyber-button inline-flex items-center justify-center px-6 py-3"
            >
              <Send className="w-4 h-4 mr-2" />
              Subscribe
            </button>
          </form>
        ) : (
          <div className="bg-green-800/20 border border-green-500 rounded-lg p-6 max-w-md mx-auto">
            <p className="text-green-400 font-medium">
              Thank you for subscribing! You'll receive our latest updates soon.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ContentNewsletterSignup;
