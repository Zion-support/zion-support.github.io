import React, { useState } from 'react';

export default function AI2026NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubscribed(true);
    setIsLoading(false);
    setEmail('');
  };

  if (isSubscribed) {
    return (
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-6xl mb-4">🎉</div>
          <h2 className="text-3xl font-bold mb-4">Welcome to the AI 2026 Revolution!</h2>
          <p className="text-xl opacity-90 mb-6">
            You're now part of an exclusive community of forward-thinking leaders transforming 
            their businesses with breakthrough AI technologies.
          </p>
          <div className="bg-white bg-opacity-20 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">What happens next?</h3>
            <ul className="text-left space-y-2 text-sm">
              <li>• You'll receive our weekly AI 2026 breakthrough insights</li>
              <li>• Get early access to new case studies and implementation guides</li>
              <li>• Join exclusive webinars with AI industry experts</li>
              <li>• Access to our private community of AI transformation leaders</li>
            </ul>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            🚀 Stay Ahead of the AI 2026 Revolution
          </h2>
          <p className="text-xl opacity-90 mb-6">
            Get exclusive access to breakthrough AI insights, implementation guides, 
            and success stories delivered directly to your inbox.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">What You'll Get:</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-green-400 mr-3 mt-1">✓</span>
                <span>Weekly AI 2026 breakthrough insights and predictions</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-3 mt-1">✓</span>
                <span>Exclusive case studies with real ROI data</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-3 mt-1">✓</span>
                <span>Implementation guides and best practices</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-3 mt-1">✓</span>
                <span>Early access to new tools and resources</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-3 mt-1">✓</span>
                <span>Invitations to exclusive webinars and events</span>
              </li>
            </ul>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-sm p-8 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Join 10,000+ AI Leaders</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-white text-indigo-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Subscribing...' : 'Get AI 2026 Insights'}
              </button>
            </form>
            
            <div className="mt-4 text-sm opacity-75">
              <p>🔒 We respect your privacy. Unsubscribe anytime.</p>
              <p>📧 No spam, just valuable AI insights.</p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white bg-opacity-10 p-4 rounded-lg">
              <div className="text-2xl font-bold mb-1">10,000+</div>
              <div className="text-sm opacity-90">Subscribers</div>
            </div>
            <div className="bg-white bg-opacity-10 p-4 rounded-lg">
              <div className="text-2xl font-bold mb-1">95%</div>
              <div className="text-sm opacity-90">Open Rate</div>
            </div>
            <div className="bg-white bg-opacity-10 p-4 rounded-lg">
              <div className="text-2xl font-bold mb-1">4.9/5</div>
              <div className="text-sm opacity-90">Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}