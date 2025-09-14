"use client";
import React{ useState } from 'react';
import Link from 'next/link';

interface ContentPreview {
  title: string;
  description: string;
  href: string;
  badge: string;
  badgeColor: string;
  icon: string;
  roi?: string;
}

const contentPreviews: ContentPreview[] = [
  {
    title: "AI 2025 Ultimate Breakthrough Revolution",
    description: "Revolutionary AI breakthrough delivering 5,000% ROI with autonomous operations and quantum-enhanced intelligence.",
    href: "/ai-2025-ultimate-breakthrough-revolution",
    badge: "BREAKTHROUGH",
    badgeColor: "from-red-500 to-pink-500",
    icon: "🚀",
    roi: "5,000% ROI"
  },
  {
    title: "Quantum Computing Solutions 2026",
    description: "Revolutionary quantum computing solutions with error-corrected quantum computers and quantum supremacy.",
    href: "/quantum-computing-solutions-2026",
    badge: "REVOLUTIONARY",
    badgeColor: "from-cyan-500 to-blue-500",
    icon: "⚛️",
    roi: "15,000% ROI"
  },
  {
    title: "AI 2026-2030 Future Predictions",
    description: "Revolutionary predictions for AI development from 2026 to 2030 with breakthrough insights.",
    href: "/ai-2026-2030-future-predictions-breakthrough",
    badge: "FUTURE",
    badgeColor: "from-purple-500 to-pink-500",
    icon: "🔮",
    roi: "25,000% ROI"
  }
];

export default function NewsletterSignupWithPreviews() {
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
  };

  if (isSubscribed) {
    return (
      <div className="bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="text-6xl mb-6">🎉</div>
          <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
            Welcome to the Revolution!
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            You're now subscribed to our revolutionary AI insights newsletter. Get ready for breakthrough content delivered directly to your inbox.
          </p>
          <div className="bg-gradient-to-r from-green-800/50 to-emerald-800/50 p-6 rounded-xl border border-green-500/30">
            <h3 className="text-2xl font-bold mb-4 text-green-400">What's Next?</h3>
            <div className="space-y-3 text-left">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Exclusive AI breakthrough content</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Early access to new technologies</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>ROI optimization strategies</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Revolutionary case studies</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Newsletter Signup */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Join the AI Revolution
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get exclusive access to revolutionary AI contentbreakthrough technologiesand success stories delivered directly to your inbox.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  placeholder="Enter your email address"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-black mr-2"></div>
                    Subscribing...
                  </div>
                ) : (
                  'Subscribe to Revolution'
                )}
              </button>

              <p className="text-sm text-gray-400">
                By subscribingyou agree to receive revolutionary AI content and breakthrough insights. 
                Unsubscribe anytime with one click.
              </p>
            </form>

            {/* Benefits */}
            <div className="mt-8 space-y-4">
              <h3 className="text-xl font-bold text-cyan-400">What You'll Get:</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">Exclusive AI breakthrough content</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">Early access to new technologies</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">ROI optimization strategies</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">Revolutionary case studies</span>
                </div>
              </div>
            </div>
          </div>

          {/* Content Previews */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
              Featured Revolutionary Content
            </h3>
            <div className="space-y-6">
              {contentPreviews.map((contentindex) => (
                <Link key={index} href={content.href} className="group block">
                  <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 p-6 rounded-xl border border-gray-600/30 hover:border-cyan-500/60 transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-cyan-500/20">
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-3xl">{content.icon}</div>
                      <div className="flex flex-col items-end space-y-1">
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${content.badgeColor} text-white`}>
                          {content.badge}
                        </span>
                        {content.roi && (
                          <span className="text-yellow-400 text-sm font-bold">
                            {content.roi}
                          </span>
                        )}
                      </div>
                    </div>
                    <h4 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors duration-300">
                      {content.title}
                    </h4>
                    <p className="text-gray-300 mb-4 line-clamp-2">
                      {content.description}
                    </p>
                    <div className="text-cyan-400 group-hover:text-white transition-colors duration-300">
                      Read More →
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/content-showcase"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-400 hover:to-pink-400 transition-all duration-300 transform hover:scale-105"
              >
                Explore All Content
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}