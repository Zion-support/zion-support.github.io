import React from 'react';
import { Helmet } from 'react-helmet-async';

const ZionAISocialMediaManagerPage: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Zion AI Social Media Manager",
    "description": "Automate social media management with AI-powered content creation, posting, and engagement. Increase social media engagement by 300%.",
    "url": "https://ziontechgroup.com/zion-ai-social-media-manager",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "59",
      "priceCurrency": "USD",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": "59",
        "priceCurrency": "USD",
        "unitText": "month"
      }
    },
    "provider": {
      "@type": "Organization",
      "name": "Zion Tech Group",
      "url": "https://ziontechgroup.com",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-302-464-0950",
        "contactType": "customer service",
        "email": "kleber@ziontechgroup.com"
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>Zion AI Social Media Manager - Automated Social Media Management Platform</title>
        <meta name="description" content="Automate social media management with AI-powered content creation, posting, and engagement. Increase social media engagement by 300%." />
        <meta name="keywords" content="AI social media manager, social media automation, content creation, social media scheduling, engagement automation, social media analytics" />
        <meta property="og:title" content="Zion AI Social Media Manager - Automated Social Media Management Platform" />
        <meta property="og:description" content="Automate social media management with AI-powered content creation, posting, and engagement. Increase engagement by 300%." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/zion-ai-social-media-manager" />
        <meta property="og:image" content="https://ziontechgroup.com/og-social-media-manager.jpg" />
        <link rel="canonical" href="https://ziontechgroup.com/zion-ai-social-media-manager" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-cyan-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-48 h-48 bg-purple-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-pink-500 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="text-8xl mb-6">📱</div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 gradient-text">
              Zion AI Social Media Manager
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Automate social media management with AI-powered content creation, posting, and engagement. 
              Increase social media engagement by 300% and save 15+ hours per week.
            </p>
            
            {/* Pricing Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full border border-cyan-500/30 mb-8">
              <span className="text-cyan-400 font-semibold">Starting at $59/month</span>
              <span className="ml-2 text-gray-400">• Market Price: $100-400/month</span>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="/contact?service=ai-social-media-manager" className="btn-futuristic">
                Start Free Trial
              </a>
              <a href="#demo" className="px-8 py-3 border-2 border-cyan-500 text-cyan-400 rounded-full font-semibold text-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 hover:scale-105">
                Watch Demo
              </a>
            </div>
          </div>

          {/* Features Section */}
          <div className="py-16">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
                Powerful Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="card-futuristic p-8">
                  <div className="text-4xl mb-4">🎨</div>
                  <h3 className="text-xl font-semibold text-white mb-4">AI Content Creation</h3>
                  <p className="text-gray-300">
                    Generate engaging posts, captions, and hashtags using advanced AI that understands your brand voice.
                  </p>
                </div>
                <div className="card-futuristic p-8">
                  <div className="text-4xl mb-4">📅</div>
                  <h3 className="text-xl font-semibold text-white mb-4">Multi-Platform Posting</h3>
                  <p className="text-gray-300">
                    Schedule and post content across Facebook, Instagram, Twitter, LinkedIn, and TikTok simultaneously.
                  </p>
                </div>
                <div className="card-futuristic p-8">
                  <div className="text-4xl mb-4">#️⃣</div>
                  <h3 className="text-xl font-semibold text-white mb-4">Hashtag Optimization</h3>
                  <p className="text-gray-300">
                    AI-powered hashtag research and optimization to maximize reach and engagement.
                  </p>
                </div>
                <div className="card-futuristic p-8">
                  <div className="text-4xl mb-4">🤖</div>
                  <h3 className="text-xl font-semibold text-white mb-4">Engagement Automation</h3>
                  <p className="text-gray-300">
                    Automatically like, comment, and respond to posts to increase engagement and build community.
                  </p>
                </div>
                <div className="card-futuristic p-8">
                  <div className="text-4xl mb-4">📊</div>
                  <h3 className="text-xl font-semibold text-white mb-4">Performance Analytics</h3>
                  <p className="text-gray-300">
                    Detailed analytics and insights on post performance, engagement rates, and audience growth.
                  </p>
                </div>
                <div className="card-futuristic p-8">
                  <div className="text-4xl mb-4">🔍</div>
                  <h3 className="text-xl font-semibold text-white mb-4">Competitor Analysis</h3>
                  <p className="text-gray-300">
                    Monitor competitor activity and identify trending topics and hashtags in your industry.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="py-16">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
                Why Choose Our AI Social Media Manager?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="space-y-8">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                        <span className="text-2xl">📈</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">Increase Engagement by 300%</h3>
                        <p className="text-gray-300">AI-optimized content and posting times dramatically boost your social media engagement.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                        <span className="text-2xl">⏰</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">Save 15+ Hours Per Week</h3>
                        <p className="text-gray-300">Automate content creation, scheduling, and engagement to focus on strategy and growth.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                        <span className="text-2xl">👁️</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">Improve Brand Visibility</h3>
                        <p className="text-gray-300">Consistent posting and optimized content increase your brand's visibility and reach.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                        <span className="text-2xl">🎯</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">Generate More Leads</h3>
                        <p className="text-gray-300">AI-driven content strategy and engagement tactics convert followers into customers.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="card-futuristic p-8">
                    <div className="text-center">
                      <div className="text-6xl mb-4">📱</div>
                      <h3 className="text-2xl font-bold text-white mb-4">Live Demo</h3>
                      <p className="text-gray-300 mb-6">Try our AI social media manager with a free 14-day trial. No credit card required.</p>
                      <a href="/contact?service=ai-social-media-manager" className="btn-futuristic">
                        Start Free Trial
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Supported Platforms Section */}
          <div className="py-16">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
                Supported Platforms
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
                <div className="card-futuristic p-6 text-center">
                  <div className="text-4xl mb-4">📘</div>
                  <h3 className="text-lg font-semibold text-white">Facebook</h3>
                </div>
                <div className="card-futuristic p-6 text-center">
                  <div className="text-4xl mb-4">📷</div>
                  <h3 className="text-lg font-semibold text-white">Instagram</h3>
                </div>
                <div className="card-futuristic p-6 text-center">
                  <div className="text-4xl mb-4">🐦</div>
                  <h3 className="text-lg font-semibold text-white">Twitter</h3>
                </div>
                <div className="card-futuristic p-6 text-center">
                  <div className="text-4xl mb-4">💼</div>
                  <h3 className="text-lg font-semibold text-white">LinkedIn</h3>
                </div>
                <div className="card-futuristic p-6 text-center">
                  <div className="text-4xl mb-4">🎵</div>
                  <h3 className="text-lg font-semibold text-white">TikTok</h3>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing Section */}
          <div className="py-16">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
                Simple, Transparent Pricing
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="card-futuristic p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Basic</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold gradient-text">$59</span>
                    <span className="text-gray-400">/month</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                      Up to 3 social accounts
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                      30 posts per month
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                      Basic analytics
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                      Email support
                    </li>
                  </ul>
                  <a href="/contact?service=ai-social-media-manager&plan=basic" className="block w-full px-6 py-3 border border-cyan-500 text-cyan-400 rounded-lg font-medium text-center hover:bg-cyan-500 hover:text-white transition-all duration-300">
                    Get Started
                  </a>
                </div>
                <div className="card-futuristic p-8 relative">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Pro</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold gradient-text">$129</span>
                    <span className="text-gray-400">/month</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                      Up to 10 social accounts
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                      Unlimited posts
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                      Advanced analytics
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                      Priority support
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                      Competitor analysis
                    </li>
                  </ul>
                  <a href="/contact?service=ai-social-media-manager&plan=pro" className="block w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-medium text-center hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                    Get Started
                  </a>
                </div>
                <div className="card-futuristic p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold gradient-text">$299</span>
                    <span className="text-gray-400">/month</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                      Unlimited social accounts
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                      Unlimited posts
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                      Custom analytics
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                      24/7 phone support
                    </li>
                    <li className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                      White-label solution
                    </li>
                  </ul>
                  <a href="/contact?service=ai-social-media-manager&plan=enterprise" className="block w-full px-6 py-3 border border-cyan-500 text-cyan-400 rounded-lg font-medium text-center hover:bg-cyan-500 hover:text-white transition-all duration-300">
                    Contact Sales
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-3xl p-12 border border-cyan-500/20">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
                  Ready to Transform Your Social Media?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Join thousands of businesses using our AI social media manager to increase engagement and grow their audience.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <a href="/contact?service=ai-social-media-manager" className="btn-futuristic">
                    Start Free Trial
                  </a>
                  <a href="tel:+13024640950" className="px-8 py-3 border-2 border-cyan-500 text-cyan-400 rounded-full font-semibold text-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 hover:scale-105">
                    Call: +1 302 464 0950
                  </a>
                </div>
                <div className="mt-8 text-sm text-gray-400">
                  <p>📧 Email: <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">kleber@ziontechgroup.com</a></p>
                  <p>🏢 Address: 364 E Main St STE 1008, Middletown DE 19709</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ZionAISocialMediaManagerPage;