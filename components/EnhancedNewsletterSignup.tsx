import React, { useState } from 'react';

interface NewsletterSignupProps {
  variant?: 'default' | 'compact' | 'inline';
  className?: string;
}

export default function EnhancedNewsletterSignup({ 
  variant = 'default', 
  className = '' 
}: NewsletterSignupProps) {
  const [email, setEmail] = useState('');
  const [interests, setInterests] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const interestOptions = [
    { id: 'ai-trends', label: 'AI Trends & Insights', icon: '🤖' },
    { id: 'case-studies', label: 'Success Stories', icon: '📊' },
    { id: 'cost-optimization', label: 'Cost Optimization', icon: '💰' },
    { id: 'implementation', label: 'Implementation Guides', icon: '📖' },
    { id: 'tools', label: 'AI Tools & Calculators', icon: '🛠️' },
    { id: 'industry-updates', label: 'Industry Updates', icon: '📰' }
  ];

  const handleInterestToggle = (interestId: string) => {
    setInterests(prev => 
      prev.includes(interestId) 
        ? prev.filter(id => id !== interestId)
        : [...prev, interestId]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!email) {
      setError('Please enter your email address');
      return;
    }

    if (!email.includes('@')) {
      setError('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setEmail('');
      setInterests([]);
    }, 2000);
  };

  if (variant === 'compact') {
    return (
      <div className={`bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-6 ${className}`}>
        <div className="text-center">
          <h3 className="text-xl font-bold mb-3">Stay Updated</h3>
          <p className="text-sm opacity-90 mb-4">
            Get the latest AI insights delivered to your inbox
          </p>
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-3 py-2 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              disabled={isSubmitting}
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors disabled:opacity-50"
            >
              {isSubmitting ? '...' : 'Subscribe'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  if (variant === 'inline') {
    return (
      <div className={`${className}`}>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email for AI insights"
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={isSubmitting}
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50"
          >
            {isSubmitting ? 'Subscribing...' : 'Subscribe'}
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className={`bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20 ${className}`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Newsletter Signup */}
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-bold mb-6">
              Stay Ahead with AI & Tech Insights
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get weekly updates on AI trends, tech innovations, and exclusive service offers. 
              Join 10,000+ professionals who trust our insights.
            </p>

            {isSubmitted ? (
              <div className="bg-green-500/20 border border-green-300 rounded-lg p-6">
                <div className="text-center">
                  <div className="text-4xl mb-4">🎉</div>
                  <h3 className="text-xl font-bold mb-2">Welcome to the AI Insider!</h3>
                  <p className="opacity-90">
                    You'll receive our next AI insights newsletter soon. Check your inbox!
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                    disabled={isSubmitting}
                  />
                  {error && (
                    <p className="text-red-300 text-sm mt-2">{error}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-3 opacity-90">
                    What interests you most? (Select all that apply)
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {interestOptions.map(option => (
                      <label
                        key={option.id}
                        className={`flex items-center gap-2 p-3 rounded-lg cursor-pointer transition-colors ${
                          interests.includes(option.id)
                            ? 'bg-white/20 border border-white/30'
                            : 'bg-white/10 hover:bg-white/15'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={interests.includes(option.id)}
                          onChange={() => handleInterestToggle(option.id)}
                          className="sr-only"
                        />
                        <span className="text-lg">{option.icon}</span>
                        <span className="text-sm font-medium">{option.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors disabled:opacity-50"
                >
                  {isSubmitting ? 'Subscribing...' : 'Subscribe to AI Insights'}
                </button>

                <p className="text-sm opacity-75">
                  Join 10,000+ professionals. Unsubscribe anytime. No spam, ever.
                </p>
              </form>
            )}
          </div>

          {/* Content Highlights */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-6">Latest Content Highlights</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="text-2xl">💰</div>
                <div>
                  <h4 className="font-semibold mb-1">AI Cost Calculator 2026</h4>
                  <p className="text-sm opacity-90">Save up to 70% on AI expenses</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-2xl">📖</div>
                <div>
                  <h4 className="font-semibold mb-1">AI Implementation Playbook</h4>
                  <p className="text-sm opacity-90">Complete enterprise guide with 300% ROI</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-2xl">📊</div>
                <div>
                  <h4 className="font-semibold mb-1">Supply Chain Success Story</h4>
                  <p className="text-sm opacity-90">85% efficiency gain & $5M savings</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-2xl">🤖</div>
                <div>
                  <h4 className="font-semibold mb-1">AI Trends 2026</h4>
                  <p className="text-sm opacity-90">What's next in enterprise AI</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 pt-4 border-t border-white/20">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold">10,000+</div>
                  <div className="text-sm opacity-90">Subscribers</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">Weekly</div>
                  <div className="text-sm opacity-90">Updates</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}