import React, { useState } from 'react';
import { Mail, CheckCircle } from 'lucide-react';

const EnhancedNewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle subscription logic here
    setIsSubscribed(true);
    setTimeout(() => {
      setEmail('');
      setIsSubscribed(false);
    }, 3000);
  };

  return (
    <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">
            Stay Updated with Latest AI Insights
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Join 50,000+ professionals receiving weekly updates on AI innovations, 
            new services, and industry breakthroughs.
          </p>
          
          {isSubscribed ? (
            <div className="bg-green-500 text-white rounded-lg p-6 flex items-center justify-center gap-3">
              <CheckCircle className="w-6 h-6" />
              <span className="font-semibold text-lg">Successfully subscribed! Check your email.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <div className="flex-1 relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full pl-12 pr-4 py-4 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>
              <button
                type="submit"
                className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-bold hover:bg-yellow-300 transition-colors whitespace-nowrap"
              >
                Subscribe Now
              </button>
            </form>
          )}
          
          <p className="text-sm text-indigo-200 mt-4">
            We respect your privacy. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EnhancedNewsletterSignup;