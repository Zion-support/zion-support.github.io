import React, { useState } from 'react';
import Link from 'next/link';

interface NewsletterSignupProps {
  variant?: 'default' | 'compact' | 'expanded';
  className?: string;
}

export default function EnhancedNewsletterSignup({ 
  variant = 'default',
  className = ''
}: NewsletterSignupProps) {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      setIsLoading(false);
      setEmail('');
    }, 1000);
  };

  const contentHighlights = [
    {
      icon: '🧠',
      title: 'AI Neural Architecture Optimization 2026',
      description: '95% performance improvement with automated design',
      href: '/blog/ai-neural-architecture-optimization-2026'
    },
    {
      icon: '🔒',
      title: 'AI Federated Learning 2026',
      description: '99% privacy protection with collaborative AI',
      href: '/blog/ai-federated-learning-2026'
    },
    {
      icon: '🏥',
      title: 'Federated Learning Success Case Study',
      description: '$15M ROI with Fortune 500 healthcare company',
      href: '/case-studies/ai-federated-learning-success-2026'
    },
    {
      icon: '🏭',
      title: 'AI Autonomous Enterprise 2026',
      description: 'Complete self-managing business operations',
      href: '/blog/ai-autonomous-enterprise-2026'
    },
    {
      icon: '☁️',
      title: 'AI Autonomous Cloud Ops 2026',
      description: 'Self-healing infrastructure with 99.9% uptime',
      href: '/blog/ai-autonomous-cloud-ops-2026'
    },
    {
      icon: '💰',
      title: 'AI FinTech Transformation 2026',
      description: '95% automation and $5M+ annual savings',
      href: '/blog/ai-fintech-transformation-2026'
    }
  ];

  if (variant === 'compact') {
    return (
      <section className={`bg-gradient-to-r from-blue-600 to-teal-600 text-white py-8 ${className}`}>
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Stay Updated with Latest AI Insights</h2>
            <p className="text-lg opacity-90 mb-6">
              Get weekly updates on AI trends, tech innovations, and exclusive content
            </p>
            {!isSubscribed ? (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                  required
                />
                <button 
                  type="submit"
                  disabled={isLoading}
                  className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors disabled:opacity-50"
                >
                  {isLoading ? 'Subscribing...' : 'Subscribe'}
                </button>
              </form>
            ) : (
              <div className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold">
                ✅ Successfully subscribed! Check your email for confirmation.
              </div>
            )}
          </div>
        </div>
      </section>
    );
  }

  if (variant === 'expanded') {
    return (
      <section className={`bg-gradient-to-r from-blue-600 to-teal-600 text-white py-16 ${className}`}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Stay Ahead with AI & Tech Insights
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Get weekly updates on AI trends, tech innovations, and exclusive service offers. 
                Join 10,000+ professionals who trust our insights.
              </p>
              {!isSubscribed ? (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                    required
                  />
                  <button 
                    type="submit"
                    disabled={isLoading}
                    className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors disabled:opacity-50"
                  >
                    {isLoading ? 'Subscribing...' : 'Subscribe'}
                  </button>
                </form>
              ) : (
                <div className="bg-green-500 text-white px-8 py-3 rounded-lg font-semibold max-w-md">
                  ✅ Successfully subscribed! Check your email for confirmation.
                </div>
              )}
              <p className="text-sm mt-4 opacity-75">
                Join 10,000+ professionals. Unsubscribe anytime.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-2xl font-bold mb-6">Latest Content Highlights</h3>
              <div className="space-y-4">
                {contentHighlights.slice(0, 4).map((item, index) => (
                  <Link key={index} href={item.href} className="group">
                    <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/10 transition-colors">
                      <div className="text-2xl">{item.icon}</div>
                      <div>
                        <h4 className="font-semibold mb-1 group-hover:text-yellow-200 transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-sm opacity-90">{item.description}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t border-white/20">
                <Link
                  href="/blog"
                  className="inline-block bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg font-semibold transition-colors"
                >
                  View All Content →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Default variant
  return (
    <section className={`bg-gradient-to-r from-blue-600 to-teal-600 text-white py-12 ${className}`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stay Ahead with AI & Tech Insights
          </h2>
          <p className="text-xl mb-6 opacity-90 max-w-3xl mx-auto">
            Get weekly updates on AI trends, tech innovations, and exclusive service offers. 
            Join 10,000+ professionals who trust our insights.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            {!isSubscribed ? (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start max-w-md mx-auto md:mx-0">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                  required
                />
                <button 
                  type="submit"
                  disabled={isLoading}
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors disabled:opacity-50"
                >
                  {isLoading ? 'Subscribing...' : 'Subscribe'}
                </button>
              </form>
            ) : (
              <div className="bg-green-500 text-white px-8 py-3 rounded-lg font-semibold max-w-md mx-auto md:mx-0">
                ✅ Successfully subscribed! Check your email for confirmation.
              </div>
            )}
            <p className="text-sm mt-4 opacity-75">
              Join 10,000+ professionals. Unsubscribe anytime.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-2xl font-bold mb-6">Latest Content Highlights</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contentHighlights.slice(0, 4).map((item, index) => (
                <Link key={index} href={item.href} className="group">
                  <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/10 transition-colors">
                    <div className="text-xl">{item.icon}</div>
                    <div>
                      <h4 className="font-semibold text-sm mb-1 group-hover:text-yellow-200 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-xs opacity-90">{item.description}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-6 pt-4 border-t border-white/20 text-center">
              <Link
                href="/blog"
                className="inline-block bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg font-semibold transition-colors"
              >
                View All Content →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}