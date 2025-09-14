import React, { useState } from 'react';

const RevolutionaryNewsletterSignup2025 = () => {
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
      <section className="py-20 bg-gradient-to-r from-green-500 to-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-6xl mb-6">🎉</div>
          <h2 className="text-4xl font-bold mb-4">Welcome to the Revolution!</h2>
          <p className="text-xl mb-8">
            You're now part of our exclusive community. Check your email for a special welcome gift!
          </p>
          <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">What's Next?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="flex items-start gap-3">
                <div className="text-2xl">📧</div>
                <div>
                  <div className="font-bold">Weekly Insights</div>
                  <div className="text-sm opacity-90">Latest AI trends and breakthroughs</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-2xl">🎁</div>
                <div>
                  <div className="font-bold">Exclusive Content</div>
                  <div className="text-sm opacity-90">Case studies and implementation guides</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-2xl">🚀</div>
                <div>
                  <div className="font-bold">Early Access</div>
                  <div className="text-sm opacity-90">Be first to try new features</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-purple-500 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-blue-500 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-indigo-500 rounded-full opacity-25 animate-ping"></div>
        <div className="absolute bottom-20 right-1/3 w-16 h-16 bg-pink-500 rounded-full opacity-20 animate-pulse"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-2 rounded-full text-sm font-bold mb-6 animate-pulse">
            📧 REVOLUTIONARY NEWSLETTER
          </div>

          {/* Main Headline */}
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Join the AI Revolution
            <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Get Exclusive Insights
            </span>
          </h2>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed opacity-90">
            Stay ahead of the curve with our exclusive newsletter featuring the latest AI breakthroughs, 
            case studies, and implementation strategies that are transforming businesses worldwide.
          </p>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold mb-2">Weekly AI Insights</h3>
              <p className="text-sm opacity-90">Latest trends, breakthroughs, and predictions from industry experts</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold mb-2">Exclusive Case Studies</h3>
              <p className="text-sm opacity-90">Real success stories and ROI data from our client implementations</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
              <div className="text-4xl mb-4">🎁</div>
              <h3 className="text-xl font-bold mb-2">Special Offers</h3>
              <p className="text-sm opacity-90">Early access to new features, discounts, and exclusive content</p>
            </div>
          </div>

          {/* Newsletter Signup Form */}
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 rounded-lg text-gray-900 text-lg placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-yellow-400 focus:ring-opacity-50"
                  required
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isLoading ? (
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                      Subscribing...
                    </div>
                  ) : (
                    'Subscribe Now'
                  )}
                </button>
              </div>
              
              <p className="text-sm opacity-75">
                Join 10,000+ business leaders who trust our insights. 
                No spam, unsubscribe anytime.
              </p>
            </form>
          </div>

          {/* Social Proof */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 opacity-80">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">10,000+</div>
              <div className="text-sm">Subscribers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">98%</div>
              <div className="text-sm">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">Weekly</div>
              <div className="text-sm">Fresh Content</div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-sm">Fortune 500 Companies</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span className="text-sm">Industry Leaders</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
              <span className="text-sm">Proven Results</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 text-6xl opacity-10 animate-float">📧</div>
      <div className="absolute top-1/3 right-10 text-5xl opacity-10 animate-float-delayed">🚀</div>
      <div className="absolute bottom-1/4 left-1/4 text-4xl opacity-10 animate-float-slow">💡</div>
      <div className="absolute bottom-1/3 right-1/4 text-5xl opacity-10 animate-float">⚡</div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default RevolutionaryNewsletterSignup2025;