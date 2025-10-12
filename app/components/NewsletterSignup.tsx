import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Mail, ArrowRight, CheckCircle } from 'lucide-react';

const NewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubscribed(true);
    setIsLoading(false);
    setEmail('');
  };

  return (
    <>
      <Helmet>
        <title>Newsletter Signup - Zion Tech Group</title>
        <meta name="description" content="Subscribe to our newsletter for the latest AI and IT solutions updates." />
      </Helmet>
      
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8">
              <Mail className="w-16 h-16 text-white mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-white mb-4">
                Stay Updated with Our Latest Solutions
              </h2>
              <p className="text-blue-100 text-lg">
                Get exclusive insights, industry updates, and early access to our newest AI and IT innovations.
              </p>
            </div>
            
            {isSubscribed ? (
              <div className="bg-green-500 text-white p-6 rounded-lg">
                <CheckCircle className="w-8 h-8 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Thank you for subscribing!</h3>
                <p>Check your email for confirmation and start receiving our updates.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 rounded-lg border-0 focus:ring-2 focus:ring-white/50 focus:outline-none text-gray-900"
                  required
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center disabled:opacity-50"
                >
                  {isLoading ? (
                    <div className="w-5 h-5 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      Subscribe
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </>
                  )}
                </button>
              </form>
            )}
            
            <p className="text-blue-100 text-sm mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsletterSignup;