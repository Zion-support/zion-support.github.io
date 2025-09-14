"use client";
import React, { useState } from 'react';

const RevolutionaryNewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitted(true);
    setIsLoading(false);
    setEmail('');
    
    // Reset after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section className="py-20 bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-black rounded-full px-6 py-2 mb-6 font-bold">
          <span className="text-sm">🚀 STAY AHEAD OF THE CURVE</span>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Join the AI Revolution
        </h2>
        
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Get exclusive access to the latest AI breakthroughs, quantum computing insights, 
          and revolutionary technologies that will shape the future.
        </p>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="flex-1 px-6 py-4 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50"
              />
              <button
                type="submit"
                disabled={isLoading}
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-lg font-bold hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Joining...
                  </span>
                ) : (
                  'Join Revolution'
                )}
              </button>
            </div>
          </form>
        ) : (
          <div className="max-w-md mx-auto">
            <div className="bg-green-500 text-white px-6 py-4 rounded-lg font-semibold">
              ✅ Welcome to the AI Revolution! Check your email for exclusive content.
            </div>
          </div>
        )}

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="text-white">
            <div className="text-2xl font-bold text-yellow-400 mb-2">10,000+</div>
            <div className="text-gray-300">Revolutionary Subscribers</div>
          </div>
          <div className="text-white">
            <div className="text-2xl font-bold text-yellow-400 mb-2">Weekly</div>
            <div className="text-gray-300">Exclusive AI Insights</div>
          </div>
          <div className="text-white">
            <div className="text-2xl font-bold text-yellow-400 mb-2">Early Access</div>
            <div className="text-gray-300">To New Technologies</div>
          </div>
        </div>

        <div className="mt-8 text-gray-400 text-sm">
          <p>🔒 Your email is safe with us. No spam, just revolutionary content.</p>
          <p className="mt-2">Unsubscribe anytime with one click.</p>
        </div>
      </div>
    </section>
  );
};

export default RevolutionaryNewsletterSignup;