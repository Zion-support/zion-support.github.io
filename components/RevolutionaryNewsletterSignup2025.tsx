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
      <section className="py-16 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-6xl mb-6">🎉</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Welcome to the Revolution!
          </h2>
          <p className="text-xl mb-8 opacity-90">
            You're now part of the most exclusive AI transformation community. 
            Get ready for breakthrough insights delivered directly to your inbox.
          </p>
          <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-6 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">What's Next?</h3>
            <ul className="text-left space-y-2">
              <li className="flex items-center">
                <span className="text-green-400 mr-3">✓</span>
                Exclusive AI breakthrough reports
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-3">✓</span>
                Early access to new solutions
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-3">✓</span>
                Invitation to private webinars
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-3">✓</span>
                Direct access to our AI experts
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-black rounded-full px-6 py-2 mb-6 font-bold text-sm">
              🚀 REVOLUTIONARY NEWSLETTER 2025
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Join the AI Revolution
            </h2>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Get exclusive access to breakthrough AI insights, case studies, and revolutionary 
              technologies that are transforming businesses worldwide. Join 50,000+ executives 
              who are already ahead of the curve.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <span className="text-2xl mr-4">🎯</span>
                <span>Exclusive Fortune 500 success stories</span>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-4">⚡</span>
                <span>Early access to breakthrough technologies</span>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-4">🔮</span>
                <span>Future predictions and trend analysis</span>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-4">💎</span>
                <span>Private webinars with AI experts</span>
              </div>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
              <h3 className="text-xl font-bold mb-4">What Our Subscribers Say:</h3>
              <blockquote className="italic text-gray-300">
                "This newsletter has been a game-changer for our AI strategy. The insights helped us 
                achieve 15,000% ROI in just 6 months!"
              </blockquote>
              <cite className="text-sm text-gray-400 mt-2 block">
                — Sarah Chen, CTO, Fortune 500 Company
              </cite>
            </div>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 border border-white border-opacity-20">
            <h3 className="text-2xl font-bold mb-6 text-center">Get Started Today</h3>
            
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
                  placeholder="Enter your business email"
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-yellow-400 focus:outline-none text-gray-900"
                  required
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-semibold mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  placeholder="Your company name"
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-yellow-400 focus:outline-none text-gray-900"
                />
              </div>

              <div>
                <label htmlFor="role" className="block text-sm font-semibold mb-2">
                  Your Role
                </label>
                <select
                  id="role"
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-yellow-400 focus:outline-none text-gray-900"
                >
                  <option value="">Select your role</option>
                  <option value="ceo">CEO</option>
                  <option value="cto">CTO</option>
                  <option value="cfo">CFO</option>
                  <option value="vp">VP</option>
                  <option value="director">Director</option>
                  <option value="manager">Manager</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-4 rounded-lg font-bold text-lg hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <span className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-black mr-2"></div>
                    Joining Revolution...
                  </span>
                ) : (
                  'Join the AI Revolution →'
                )}
              </button>
            </form>

            <p className="text-sm text-gray-300 mt-4 text-center">
              No spam, ever. Unsubscribe anytime. We respect your privacy.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-6 text-sm text-gray-300">
            <span className="flex items-center">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
              50,000+ Subscribers
            </span>
            <span className="flex items-center">
              <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
              Fortune 500 Trusted
            </span>
            <span className="flex items-center">
              <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
              Weekly Insights
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RevolutionaryNewsletterSignup2025;