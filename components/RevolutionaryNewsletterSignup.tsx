"use client";
import React{ useState } from 'react';

export default function RevolutionaryNewsletterSignup() {
  const [emailsetEmail] = useState('');
  const [isSubscribedsetIsSubscribed] = useState(false);
  const [isLoadingsetIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve2000));
    
    setIsSubscribed(true);
    setIsLoading(false);
    setEmail('');
  };

  if (isSubscribed) {
    return (
      <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-xl p-8 text-center">
        <div className="text-6xl mb-4">🎉</div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Welcome to the Revolution!</h3>
        <p className="text-gray-600 mb-6">
          You're now part of the AI revolution. Get ready for exclusive breakthrough content
          early access to revolutionary featuresand insider success stories.
        </p>
        <div className="bg-white p-4 rounded-lg border border-green-200">
          <h4 className="font-semibold text-gray-900 mb-2">What's Next?</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Weekly breakthrough updates</li>
            <li>• Exclusive ROI success stories</li>
            <li>• Early access to new features</li>
            <li>• Revolutionary implementation guides</li>
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 rounded-xl p-8 text-white">
      <div className="max-w-2xl mx-auto text-center">
        <div className="text-6xl mb-6">🚀</div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Join the AI Revolution
        </h2>
        <p className="text-xl text-gray-200 mb-8">
          Get exclusive access to revolutionary AI breakthroughsuccess stories
          and implementation guides that deliver massive ROI.
        </p>

        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8">
          <h3 className="text-xl font-semibold mb-4">What You'll Get:</h3>
          <div className="grid md:grid-cols-2 gap-4 text-left">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-gray-200">Exclusive breakthrough content</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-gray-200">Real ROI success stories</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-gray-200">Early access to new features</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-gray-200">Implementation guides</span>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="flex-1 px-6 py-4 rounded-lg text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-purple-500 focus:outline-none"
            />
            <button
              type="submit"
              disabled={isLoading}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Joining...</span>
                </div>
              ) : (
                'Join Revolution'
              )}
            </button>
          </div>
          
          <p className="text-sm text-gray-300">
            Join 10,000+ companies already experiencing the AI revolution. 
            No spamjust revolutionary content.
          </p>
        </form>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-yellow-400">10,000+</div>
            <div className="text-sm text-gray-300">Companies</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-green-400">15,000%</div>
            <div className="text-sm text-gray-300">Max ROI</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-blue-400">99.9%</div>
            <div className="text-sm text-gray-300">Accuracy</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-purple-400">24/7</div>
            <div className="text-sm text-gray-300">Autonomous</div>
          </div>
        </div>
      </div>
    </div>
  );
}