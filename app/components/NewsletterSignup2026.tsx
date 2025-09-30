import React from 'react';

export default function NewsletterSignup2026() {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="mb-8">
          <h2 className="text-4xl font-bold mb-4">
            Stay Ahead with AI & Tech Insights
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Get weekly updates on AI trends, tech innovations, and exclusive service offers. Join 10,000+ professionals who trust our insights.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto mb-6">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
          />
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Subscribe
          </button>
        </div>
        
        <p className="text-sm text-blue-200">
          Join 10,000+ professionals. Unsubscribe anytime. No spam, just valuable insights.
        </p>
        
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="text-2xl font-bold">10K+</div>
            <div className="text-sm text-blue-200">Subscribers</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="text-2xl font-bold">Weekly</div>
            <div className="text-sm text-blue-200">Updates</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="text-2xl font-bold">Expert</div>
            <div className="text-sm text-blue-200">Insights</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="text-2xl font-bold">Free</div>
            <div className="text-sm text-blue-200">Forever</div>
          </div>
        </div>
      </div>
    </section>
  );
}