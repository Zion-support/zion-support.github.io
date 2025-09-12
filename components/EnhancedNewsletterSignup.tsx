import React, { useState } from 'react';

export default function EnhancedNewsletterSignup() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubscribed(true);
    setIsLoading(false);
    setEmail('');
  };

  if (isSubscribed) {
    return (
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 text-center border border-green-200">
        <div className="text-6xl mb-4">🎉</div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Welcome to the AI Revolution!</h3>
        <p className="text-lg text-gray-600 mb-6">
          You're now part of our exclusive community of AI leaders and innovators. 
          Check your email for a special welcome gift!
        </p>
        <div className="bg-white rounded-lg p-4 border border-green-200">
          <h4 className="font-semibold text-gray-900 mb-2">🎁 Your Welcome Gift:</h4>
          <p className="text-sm text-gray-600">
            Free access to our AI Implementation Toolkit (valued at $297) - 
            includes templates, checklists, and ROI calculators.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full -translate-y-16 translate-x-16"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-5 rounded-full translate-y-12 -translate-x-12"></div>
      
      <div className="relative">
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-4 py-2 mb-4 backdrop-blur-sm">
            <span className="text-sm font-medium">📧 EXCLUSIVE CONTENT</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stay Ahead of the AI Revolution
          </h2>
          
          <p className="text-xl opacity-90 mb-6 max-w-2xl mx-auto">
            Get weekly insights, exclusive content, and early access to our latest 
            AI strategies. Join 50,000+ AI professionals already transforming their businesses.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full px-6 py-4 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 text-lg"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors text-lg disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
              >
                {isLoading ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Subscribing...
                  </span>
                ) : (
                  'Get Free Updates'
                )}
              </button>
            </div>
            
            <p className="text-sm opacity-75 text-center">
              No spam. Unsubscribe anytime. Read our{' '}
              <a href="/privacy" className="underline hover:no-underline">privacy policy</a>.
            </p>
          </form>
        </div>

        {/* Benefits */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl mb-2">📚</div>
            <h3 className="font-semibold mb-1">Weekly Insights</h3>
            <p className="text-sm opacity-90">Latest AI trends and strategies</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">🎁</div>
            <h3 className="font-semibold mb-1">Exclusive Content</h3>
            <p className="text-sm opacity-90">Early access to new resources</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">💡</div>
            <h3 className="font-semibold mb-1">Expert Tips</h3>
            <p className="text-sm opacity-90">Implementation best practices</p>
          </div>
        </div>

        {/* Social Proof */}
        <div className="mt-8 text-center">
          <p className="text-sm opacity-75 mb-4">Trusted by industry leaders</p>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            <div className="text-2xl font-bold">Fortune 500</div>
            <div className="text-2xl font-bold">Startups</div>
            <div className="text-2xl font-bold">Consultants</div>
            <div className="text-2xl font-bold">Enterprises</div>
          </div>
        </div>
      </div>
    </div>
  );
}