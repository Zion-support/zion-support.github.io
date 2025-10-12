import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Mail, ArrowRight } from 'lucide-react';

export default function ContentNewsletterSignup() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    setIsSubscribed(true);
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
            <h2 className="text-3xl font-bold text-white mb-4">
              Stay Updated with Our Latest Solutions
            </h2>
            <p className="text-blue-100 mb-8">
              Get exclusive insights, industry updates, and early access to our newest AI and IT innovations.
            </p>
            
            {isSubscribed ? (
              <div className="bg-green-500 text-white p-4 rounded-lg">
                <p className="flex items-center justify-center">
                  <Mail className="w-5 h-5 mr-2" />
                  Thank you for subscribing! Check your email for confirmation.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white/50 focus:outline-none"
                  required
                />
                <button
                  type="submit"
                  className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
                >
                  Subscribe
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}