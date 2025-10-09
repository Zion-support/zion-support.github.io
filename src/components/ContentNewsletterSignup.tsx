import React, { useState } from 'react';
import { Mail, Send } from 'lucide-react';

const ContentNewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription here
    console.log('Newsletter subscription:', email);
    setIsSubscribed(true);
    setEmail('');
    // Reset after 3 seconds
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
          <p className="text-gray-100 mb-8 max-w-2xl mx-auto">
            Get the latest insights, tips, and updates about AI and technology trends. 
            Join our newsletter and never miss an update.
          </p>
          
          {isSubscribed ? (
            <div className="text-center">
              <div className="text-green-400 text-lg font-semibold mb-2">
                ✓ Successfully Subscribed!
              </div>
              <p className="text-gray-100">
                Thank you for subscribing. You'll receive our latest updates soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full pl-10 pr-4 py-3 bg-white rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-300"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="bg-slate-800 text-white px-6 py-3 rounded-lg hover:bg-slate-700 transition-colors flex items-center justify-center space-x-2 font-semibold"
                >
                  <Send className="h-5 w-5" />
                  <span>Subscribe</span>
                </button>
              </div>
              <p className="text-gray-200 text-sm mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContentNewsletterSignup;