import React, { useState } from 'react';

export default function NewsletterSignup2025() {
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
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <div className="text-6xl mb-6">🎉</div>
          <h2 className="text-4xl font-black mb-6">
            Welcome to the Revolution!
          </h2>
          <p className="text-xl text-green-100 mb-8">
            You're now part of our exclusive community. Get ready for breakthrough AI insights, 
            revolutionary case studies, and exclusive access to our latest content.
          </p>
          <div className="bg-white/20 p-6 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">What's Next?</h3>
            <ul className="text-left space-y-2 text-green-100">
              <li>✓ Weekly breakthrough AI insights</li>
              <li>✓ Exclusive case studies and ROI reports</li>
              <li>✓ Early access to new content and tools</li>
              <li>✓ Invitation to private webinars and events</li>
              <li>✓ Direct access to our AI implementation experts</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-600 to-purple-600 text-white text-sm font-bold rounded-full mb-6">
              🔥 EXCLUSIVE ACCESS
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Join the AI Revolution
            </h2>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Get exclusive access to breakthrough AI insights, revolutionary case studies, 
              and implementation strategies that deliver <span className="text-yellow-400 font-bold">5000%+ ROI</span>.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <span className="text-green-400 mr-3">✓</span>
                <span className="text-gray-200">Weekly breakthrough AI insights</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-400 mr-3">✓</span>
                <span className="text-gray-200">Exclusive case studies and ROI reports</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-400 mr-3">✓</span>
                <span className="text-gray-200">Early access to new content and tools</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-400 mr-3">✓</span>
                <span className="text-gray-200">Private webinars and expert consultations</span>
              </div>
            </div>
          </div>

          {/* Signup Form */}
          <div className="bg-gradient-to-br from-white/10 to-white/5 p-8 rounded-2xl border border-white/20 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Get Started Today
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                  placeholder="Enter your email address"
                />
              </div>
              
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed text-white px-8 py-4 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Joining Revolution...
                  </div>
                ) : (
                  'Join the Revolution'
                )}
              </button>
            </form>
            
            <p className="text-sm text-gray-300 text-center mt-4">
              No spam, ever. Unsubscribe anytime. We respect your privacy.
            </p>
          </div>
        </div>

        {/* Social Proof */}
        <div className="mt-16 text-center">
          <p className="text-gray-300 mb-8">Join 10,000+ industry leaders already transforming with our insights</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            <div className="text-center">
              <div className="text-2xl font-bold text-cyan-400">500+</div>
              <div className="text-sm text-gray-400">Companies</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400">$2.5B</div>
              <div className="text-sm text-gray-400">Revenue Generated</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-pink-400">99.7%</div>
              <div className="text-sm text-gray-400">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-400">5000%</div>
              <div className="text-sm text-gray-400">Average ROI</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}