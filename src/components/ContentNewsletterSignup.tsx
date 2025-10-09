import React, { useState } from 'react';
import { Mail, CheckCircle } from 'lucide-react';

interface ContentNewsletterSignupProps {
  className?: string;
}

const ContentNewsletterSignup: React.FC<ContentNewsletterSignupProps> = ({ className = '' }) => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      setIsLoading(false);
      setEmail('');
      
      // Reset after 3 seconds
      setTimeout(() => {
        setIsSubscribed(false);
      }, 3000);
    }, 1000);
  };

  if (isSubscribed) {
    return (
      <div className={`py-16 bg-gradient-to-r from-green-600 to-green-700 ${className}`}>
        <div className="container mx-auto px-4 text-center">
          <CheckCircle className="w-16 h-16 text-white mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-white mb-4">
            Thank You for Subscribing!
          </h2>
          <p className="text-xl text-green-100">
            You'll receive our latest AI and IT insights directly in your inbox.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={`py-16 bg-gradient-to-r from-gray-900 to-gray-800 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stay Updated with AI & IT Trends
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get exclusive insights, case studies, and the latest technology updates delivered to your inbox.
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="w-full pl-10 pr-4 py-3 bg-white rounded-lg text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                  />
                </div>
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Subscribing...' : 'Subscribe'}
              </button>
            </div>
          </form>

          <p className="text-sm text-gray-400 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-cyan-400 mb-2">Weekly</div>
              <div className="text-gray-300">AI & IT Insights</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-400 mb-2">Exclusive</div>
              <div className="text-gray-300">Case Studies & Reports</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-400 mb-2">Free</div>
              <div className="text-gray-300">No Cost, Maximum Value</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentNewsletterSignup;