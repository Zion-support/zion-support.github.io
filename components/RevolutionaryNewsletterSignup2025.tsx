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
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl shadow-2xl p-12">
            <div className="text-6xl mb-6">🎉</div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Welcome to the Revolution!
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              You're now part of the AI 2025 Ultimate Content Revolution. 
              Check your email for exclusive insights and breakthrough strategies.
            </p>
            <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                What's Next?
              </h3>
              <ul className="text-gray-700 space-y-2">
                <li>✓ Weekly breakthrough insights delivered to your inbox</li>
                <li>✓ Exclusive access to new case studies and success stories</li>
                <li>✓ Early access to new AI tools and features</li>
                <li>✓ Invitation to our private community of industry leaders</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      {/* Animated Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-purple-500 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute top-32 right-20 w-16 h-16 bg-blue-500 rounded-full opacity-30 animate-bounce"></div>
      <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-indigo-500 rounded-full opacity-25 animate-ping"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-2 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 JOIN THE REVOLUTION
          </div>
          
          {/* Main Headline */}
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Get Exclusive Access to
            <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              AI 2025 Breakthroughs
            </span>
          </h2>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
            Join 50,000+ industry leaders getting exclusive insights, case studies, 
            and breakthrough strategies delivered weekly.
          </p>
          
          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
              <div className="text-3xl mb-4">📊</div>
              <h3 className="text-lg font-semibold mb-2">Exclusive Case Studies</h3>
              <p className="text-sm opacity-90">Real success stories with 50,000% ROI results</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
              <div className="text-3xl mb-4">🔮</div>
              <h3 className="text-lg font-semibold mb-2">Future Predictions</h3>
              <p className="text-sm opacity-90">AI trends and breakthrough technologies</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
              <div className="text-3xl mb-4">🛠️</div>
              <h3 className="text-lg font-semibold mb-2">Early Access</h3>
              <p className="text-sm opacity-90">New tools and features before public release</p>
            </div>
          </div>
          
          {/* Newsletter Form */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20 max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full px-6 py-4 rounded-lg text-gray-900 text-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  required
                />
              </div>
              
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-black mr-2"></div>
                    Joining Revolution...
                  </div>
                ) : (
                  'Join the AI 2025 Revolution'
                )}
              </button>
            </form>
            
            {/* Trust Indicators */}
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm opacity-80">
              <div className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                <span>50,000+ subscribers</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                <span>Weekly insights</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                <span>No spam, ever</span>
              </div>
            </div>
          </div>
          
          {/* Social Proof */}
          <div className="mt-12">
            <p className="text-sm opacity-80 mb-4">Trusted by industry leaders at:</p>
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
              <div className="text-2xl font-bold">Fortune 500</div>
              <div className="text-2xl font-bold">Startups</div>
              <div className="text-2xl font-bold">Enterprises</div>
              <div className="text-2xl font-bold">Agencies</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-20 text-white" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="currentColor"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="currentColor"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="currentColor"></path>
        </svg>
      </div>
    </section>
  );
};

export default RevolutionaryNewsletterSignup2025;