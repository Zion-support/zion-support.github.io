import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function ZionaicontentmoderatorPage() {
  return (
    <>
      <Helmet>
        <title>Zion AI Content Moderator Pro - Advanced Content Moderation Platform</title>
        <meta name="description" content="Advanced AI-powered content moderation platform with 99.9% accuracy. Automate content filtering, detect inappropriate content, and maintain platform safety with our intelligent moderation tools." />
        <meta name="keywords" content="AI content moderation, automated moderation, content filtering, platform safety, inappropriate content detection, AI moderation tools" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-8">
              <div className="text-8xl mb-8">🛡️</div>
              <h1 className="text-5xl md:text-6xl font-bold">
                Zion AI Content <span className="gradient-text">Moderator Pro</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Advanced AI-powered content moderation platform with 99.9% accuracy. 
                Automatically detect and filter inappropriate content across text, images, and videos to maintain platform safety.
              </p>
              
              {/* Key Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-12">
                <div className="glass-effect rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">99.9%</div>
                  <div className="text-gray-300">Accuracy Rate</div>
                </div>
                <div className="glass-effect rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">100+</div>
                  <div className="text-gray-300">Languages Supported</div>
                </div>
                <div className="glass-effect rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">24/7</div>
                  <div className="text-gray-300">Real-time Processing</div>
                </div>
              </div>

              {/* Contact CTA */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
                <a
                  href="tel:+13024640950"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl font-semibold text-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 hover:scale-105"
                >
                  📞 Call +1 302 464 0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-xl font-semibold text-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 hover:scale-105"
                >
                  ✉️ Get Free Demo
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
                Powerful Content Moderation Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive AI-powered tools to keep your platform safe and compliant
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="glass-effect rounded-2xl p-8">
                <div className="text-4xl mb-4">🖼️</div>
                <h3 className="text-2xl font-bold text-white mb-4">Image Content Detection</h3>
                <p className="text-gray-300 mb-4">
                  Advanced computer vision algorithms to detect inappropriate images, violence, nudity, and other harmful content.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• NSFW content detection</li>
                  <li>• Violence and gore detection</li>
                  <li>• Hate symbols identification</li>
                  <li>• Spam and scam image detection</li>
                </ul>
              </div>

              <div className="glass-effect rounded-2xl p-8">
                <div className="text-4xl mb-4">📝</div>
                <h3 className="text-2xl font-bold text-white mb-4">Text Moderation</h3>
                <p className="text-gray-300 mb-4">
                  Natural language processing to identify toxic language, hate speech, spam, and inappropriate text content.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Hate speech detection</li>
                  <li>• Profanity filtering</li>
                  <li>• Spam and phishing detection</li>
                  <li>• Sentiment analysis</li>
                </ul>
              </div>

              <div className="glass-effect rounded-2xl p-8">
                <div className="text-4xl mb-4">🎥</div>
                <h3 className="text-2xl font-bold text-white mb-4">Video Analysis</h3>
                <p className="text-gray-300 mb-4">
                  Real-time video content analysis to detect inappropriate scenes, violence, and harmful content in video streams.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Real-time video scanning</li>
                  <li>• Scene-by-scene analysis</li>
                  <li>• Audio content monitoring</li>
                  <li>• Live stream moderation</li>
                </ul>
              </div>

              <div className="glass-effect rounded-2xl p-8">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-2xl font-bold text-white mb-4">Real-time Processing</h3>
                <p className="text-gray-300 mb-4">
                  Lightning-fast content analysis with sub-second response times for immediate moderation decisions.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Sub-second response times</li>
                  <li>• High-volume processing</li>
                  <li>• Auto-scaling infrastructure</li>
                  <li>• 99.9% uptime guarantee</li>
                </ul>
              </div>

              <div className="glass-effect rounded-2xl p-8">
                <div className="text-4xl mb-4">🌍</div>
                <h3 className="text-2xl font-bold text-white mb-4">Multi-language Support</h3>
                <p className="text-gray-300 mb-4">
                  Support for over 100 languages with cultural context understanding for accurate moderation across global platforms.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• 100+ language support</li>
                  <li>• Cultural context awareness</li>
                  <li>• Regional compliance</li>
                  <li>• Custom language models</li>
                </ul>
              </div>

              <div className="glass-effect rounded-2xl p-8">
                <div className="text-4xl mb-4">🔧</div>
                <h3 className="text-2xl font-bold text-white mb-4">Custom Rules Engine</h3>
                <p className="text-gray-300 mb-4">
                  Create custom moderation rules and policies tailored to your platform's specific needs and community guidelines.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Custom rule creation</li>
                  <li>• Policy management</li>
                  <li>• A/B testing for rules</li>
                  <li>• Rule performance analytics</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your content volume and moderation needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="glass-effect rounded-2xl p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
                  <div className="text-4xl font-bold text-cyan-400 mb-2">$39</div>
                  <div className="text-gray-400">/month</div>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-gray-300">
                    <span className="w-5 h-5 bg-green-500 rounded-full mr-3 flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </span>
                    Up to 10,000 content pieces/month
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="w-5 h-5 bg-green-500 rounded-full mr-3 flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </span>
                    Text & Image moderation
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="w-5 h-5 bg-green-500 rounded-full mr-3 flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </span>
                    Basic API access
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="w-5 h-5 bg-green-500 rounded-full mr-3 flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </span>
                    Email support
                  </li>
                </ul>
                <a
                  href="mailto:kleber@ziontechgroup.com?subject=Starter Plan - AI Content Moderator"
                  className="block w-full text-center px-6 py-3 border border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
                >
                  Get Started
                </a>
              </div>

              <div className="glass-effect rounded-2xl p-8 border-2 border-cyan-500 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
                  <div className="text-4xl font-bold text-cyan-400 mb-2">$99</div>
                  <div className="text-gray-400">/month</div>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-gray-300">
                    <span className="w-5 h-5 bg-green-500 rounded-full mr-3 flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </span>
                    Up to 100,000 content pieces/month
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="w-5 h-5 bg-green-500 rounded-full mr-3 flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </span>
                    Text, Image & Video moderation
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="w-5 h-5 bg-green-500 rounded-full mr-3 flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </span>
                    Advanced API access
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="w-5 h-5 bg-green-500 rounded-full mr-3 flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </span>
                    Custom rules engine
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="w-5 h-5 bg-green-500 rounded-full mr-3 flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </span>
                    Priority support
                  </li>
                </ul>
                <a
                  href="mailto:kleber@ziontechgroup.com?subject=Professional Plan - AI Content Moderator"
                  className="block w-full text-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                >
                  Get Started
                </a>
              </div>

              <div className="glass-effect rounded-2xl p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
                  <div className="text-4xl font-bold text-cyan-400 mb-2">$299</div>
                  <div className="text-gray-400">/month</div>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-gray-300">
                    <span className="w-5 h-5 bg-green-500 rounded-full mr-3 flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </span>
                    Unlimited content pieces
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="w-5 h-5 bg-green-500 rounded-full mr-3 flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </span>
                    All content types + Live streams
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="w-5 h-5 bg-green-500 rounded-full mr-3 flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </span>
                    Custom AI model training
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="w-5 h-5 bg-green-500 rounded-full mr-3 flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </span>
                    Dedicated account manager
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="w-5 h-5 bg-green-500 rounded-full mr-3 flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </span>
                    24/7 phone support
                  </li>
                </ul>
                <a
                  href="mailto:kleber@ziontechgroup.com?subject=Enterprise Plan - AI Content Moderator"
                  className="block w-full text-center px-6 py-3 border border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
                >
                  Contact Sales
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-3xl p-12 border border-cyan-500/20">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
                Ready to Secure Your Platform?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join thousands of platforms that trust our AI content moderation to keep their communities safe. 
                Get started with a free trial today.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a
                  href="tel:+13024640950"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl font-semibold text-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 hover:scale-105"
                >
                  📞 Call +1 302 464 0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-xl font-semibold text-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 hover:scale-105"
                >
                  ✉️ Start Free Trial
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
