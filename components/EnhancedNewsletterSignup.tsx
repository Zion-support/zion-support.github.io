import React, { useState } from 'react';
import Link from 'next/link';

interface NewsletterSignupProps {
  showContentPreview?: boolean;
  variant?: 'default' | 'compact' | 'inline';
}

export default function EnhancedNewsletterSignup({ 
  showContentPreview = true,
  variant = 'default'
}: NewsletterSignupProps) {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate subscription
    setIsSubscribed(true);
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  const upcomingContent = [
    {
      title: "AI-Powered Healthcare Revolution",
      description: "How AI is transforming medical diagnosis and treatment",
      type: "Article",
      date: "Next Week"
    },
    {
      title: "Quantum Computing Business Applications",
      description: "Real-world quantum solutions for enterprise challenges",
      type: "Case Study",
      date: "Coming Soon"
    },
    {
      title: "AI Ethics & Governance Framework",
      description: "Best practices for responsible AI implementation",
      type: "Guide",
      date: "This Month"
    }
  ];

  if (variant === 'compact') {
    return (
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Stay Updated</h3>
            <p className="text-sm text-gray-600">Get AI insights delivered weekly</p>
          </div>
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              className="px-3 py-2 rounded-md text-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors"
            >
              {isSubscribed ? '✓' : 'Subscribe'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  if (variant === 'inline') {
    return (
      <div className="flex items-center space-x-4">
        <span className="text-sm text-gray-600">Get weekly AI insights:</span>
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
            className="px-3 py-2 rounded-md text-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors"
          >
            {isSubscribed ? '✓' : 'Subscribe'}
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Stay Ahead with AI Insights
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join 10,000+ AI professionals getting weekly updates on trends, 
            implementation guides, and exclusive content delivered to their inbox.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Newsletter Signup */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                  required
                />
              </div>
              <button
                type="submit"
                className={`w-full px-6 py-3 rounded-lg font-semibold transition-colors ${
                  isSubscribed 
                    ? 'bg-green-600 text-white' 
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                {isSubscribed ? '✓ Subscribed Successfully!' : 'Subscribe to Newsletter'}
              </button>
            </form>
            
            <div className="mt-4 text-sm text-gray-500">
              <p>✓ No spam, ever</p>
              <p>✓ Unsubscribe anytime</p>
              <p>✓ Weekly AI insights</p>
            </div>
          </div>

          {/* Content Preview */}
          {showContentPreview && (
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                What's Coming Next
              </h3>
              <div className="space-y-3">
                {upcomingContent.map((content, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg border border-gray-200">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="text-sm font-semibold text-gray-900 mb-1">
                          {content.title}
                        </h4>
                        <p className="text-xs text-gray-600 mb-2">
                          {content.description}
                        </p>
                        <div className="flex items-center space-x-2">
                          <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                            {content.type}
                          </span>
                          <span className="text-xs text-gray-500">
                            {content.date}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-4">
                <Link 
                  href="/content-showcase" 
                  className="text-sm text-blue-600 hover:text-blue-800 font-medium"
                >
                  View All Content →
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* Social Proof */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500 mb-4">
            Trusted by professionals at leading companies
          </p>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            <div className="text-sm font-semibold text-gray-400">Microsoft</div>
            <div className="text-sm font-semibold text-gray-400">Google</div>
            <div className="text-sm font-semibold text-gray-400">Amazon</div>
            <div className="text-sm font-semibold text-gray-400">Tesla</div>
            <div className="text-sm font-semibold text-gray-400">OpenAI</div>
          </div>
        </div>
      </div>
    </div>
  );
}