"use client";
import React, { useState } from 'react';

const ContentRevolutionNewsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubscribed(true);
    setIsLoading(false);
    setEmail('');
  };

  if (isSubscribed) {
    return (
      <section className="py-20 bg-gradient-to-r from-green-500 to-blue-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-6xl mb-6">🎉</div>
          <h2 className="text-4xl font-bold mb-4">Welcome to the Revolution!</h2>
          <p className="text-xl mb-8 opacity-90">
            You're now part of the AI 2025 Ultimate Content Revolution. 
            Check your email for exclusive access to our latest breakthroughs.
          </p>
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">What's Next?</h3>
            <ul className="text-left space-y-2">
              <li>✅ Exclusive access to new AI content tools</li>
              <li>✅ Weekly case studies with 2,500%+ ROI results</li>
              <li>✅ Early access to beta features</li>
              <li>✅ Free consultation with our AI experts</li>
            </ul>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-500/20 via-blue-500/20 to-indigo-500/20"></div>
      
      {/* Animated Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
      <div className="absolute top-32 right-20 w-16 h-16 bg-white/10 rounded-full animate-bounce"></div>
      <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-pulse"></div>
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          {/* Badge */}
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-bold">🚀 JOIN THE REVOLUTION</span>
          </div>
          
          {/* Main Headline */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Get Exclusive Access to the
            <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              AI 2025 Ultimate Content Revolution
            </span>
          </h2>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed opacity-90">
            Join thousands of businesses already transforming their content strategy with 
            our revolutionary AI technology. Get exclusive access to:
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-lg font-bold mb-2">Exclusive Case Studies</h3>
            <p className="text-sm opacity-90">Real 5,000% ROI success stories</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
            <div className="text-4xl mb-4">🛠️</div>
            <h3 className="text-lg font-bold mb-2">Beta Access</h3>
            <p className="text-sm opacity-90">Try new features before anyone else</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
            <div className="text-4xl mb-4">💡</div>
            <h3 className="text-lg font-bold mb-2">Expert Insights</h3>
            <p className="text-sm opacity-90">Weekly tips from AI specialists</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-lg font-bold mb-2">Free Consultation</h3>
            <p className="text-sm opacity-90">Personalized strategy session</p>
          </div>
        </div>

        {/* Newsletter Form */}
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-lg text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                required
              />
              <button
                type="submit"
                disabled={isLoading || !email}
                className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:from-yellow-400 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                    Joining...
                  </div>
                ) : (
                  'Join the Revolution'
                )}
              </button>
            </div>
            
            <p className="text-sm text-center opacity-75">
              No spam, ever. Unsubscribe anytime. We respect your privacy.
            </p>
          </form>
        </div>

        {/* Social Proof */}
        <div className="mt-16 text-center">
          <p className="text-sm opacity-75 mb-6">Join 50,000+ businesses already transforming with AI</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-2xl font-bold">Microsoft</div>
            <div className="text-2xl font-bold">Google</div>
            <div className="text-2xl font-bold">Amazon</div>
            <div className="text-2xl font-bold">IBM</div>
            <div className="text-2xl font-bold">Oracle</div>
            <div className="text-2xl font-bold">Salesforce</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentRevolutionNewsletter;