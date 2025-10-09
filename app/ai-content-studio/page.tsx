'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const AIContentStudioPage: React.FC = () => {
  return (
    <>
      <SEOOptimizer
        title="AI Content Studio - Zion Tech Group"
        description="Complete content creation suite with AI writing, image generation, video editing, and social media automation. Starting at $299/month."
        keywords={['AI content creation', 'content studio', 'AI writing', 'image generation', 'video editing', 'social media automation']}
        canonicalUrl="https://ziontechgroup.com/ai-content-studio"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 holographic-text cyber-text glitch" data-text="AI Content Studio">
              AI Content Studio
            </h1>
            <p className="text-xl md:text-2xl text-pink-400 mb-8 font-medium cyber-glow neon-text">
              Complete Content Creation Suite
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
              Create stunning content at scale with AI-powered writing, image generation, video editing, and social media automation. 
              Produce 10x more content in half the time with our intelligent content creation platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="tel:+13024640950" className="cyber-button w-full sm:w-auto text-center">
                📞 Call: (302) 464-0950
              </a>
              <a href="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300">
                Start Free Trial
              </a>
            </div>
          </section>

          {/* Features Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Content Creation Tools</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="cyber-card hologram-card p-6">
                <div className="text-4xl mb-4">✍️</div>
                <h3 className="text-xl font-bold text-white mb-4">AI Writing Assistant</h3>
                <p className="text-gray-300">Generate blog posts, articles, social media content, and marketing copy with advanced AI writing models.</p>
              </div>
              <div className="cyber-card hologram-card p-6">
                <div className="text-4xl mb-4">🎨</div>
                <h3 className="text-xl font-bold text-white mb-4">AI Image Generation</h3>
                <p className="text-gray-300">Create stunning visuals, graphics, and artwork with AI-powered image generation and editing tools.</p>
              </div>
              <div className="cyber-card hologram-card p-6">
                <div className="text-4xl mb-4">🎬</div>
                <h3 className="text-xl font-bold text-white mb-4">Video Creation</h3>
                <p className="text-gray-300">Produce professional videos with AI-powered editing, voiceovers, and automated video generation.</p>
              </div>
              <div className="cyber-card hologram-card p-6">
                <div className="text-4xl mb-4">📱</div>
                <h3 className="text-xl font-bold text-white mb-4">Social Media Automation</h3>
                <p className="text-gray-300">Schedule and publish content across all platforms with intelligent posting optimization.</p>
              </div>
              <div className="cyber-card hologram-card p-6">
                <div className="text-4xl mb-4">🔍</div>
                <h3 className="text-xl font-bold text-white mb-4">SEO Optimization</h3>
                <p className="text-gray-300">Optimize content for search engines with AI-powered keyword research and content analysis.</p>
              </div>
              <div className="cyber-card hologram-card p-6">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-xl font-bold text-white mb-4">Analytics & Insights</h3>
                <p className="text-gray-300">Track content performance and get AI-powered recommendations for improvement.</p>
              </div>
            </div>
          </section>

          {/* Content Types Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Content Types We Support</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="cyber-card hologram-card p-6 text-center">
                <div className="text-3xl mb-4">📝</div>
                <h3 className="text-lg font-bold text-white mb-2">Blog Posts</h3>
                <p className="text-gray-300 text-sm">Long-form articles and blog content</p>
              </div>
              <div className="cyber-card hologram-card p-6 text-center">
                <div className="text-3xl mb-4">📧</div>
                <h3 className="text-lg font-bold text-white mb-2">Email Marketing</h3>
                <p className="text-gray-300 text-sm">Newsletters and email campaigns</p>
              </div>
              <div className="cyber-card hologram-card p-6 text-center">
                <div className="text-3xl mb-4">📱</div>
                <h3 className="text-lg font-bold text-white mb-2">Social Media</h3>
                <p className="text-gray-300 text-sm">Posts for all social platforms</p>
              </div>
              <div className="cyber-card hologram-card p-6 text-center">
                <div className="text-3xl mb-4">📄</div>
                <h3 className="text-lg font-bold text-white mb-2">Web Content</h3>
                <p className="text-gray-300 text-sm">Website pages and landing pages</p>
              </div>
              <div className="cyber-card hologram-card p-6 text-center">
                <div className="text-3xl mb-4">📊</div>
                <h3 className="text-lg font-bold text-white mb-2">Reports</h3>
                <p className="text-gray-300 text-sm">Business reports and presentations</p>
              </div>
              <div className="cyber-card hologram-card p-6 text-center">
                <div className="text-3xl mb-4">🎯</div>
                <h3 className="text-lg font-bold text-white mb-2">Ad Copy</h3>
                <p className="text-gray-300 text-sm">Advertising and marketing copy</p>
              </div>
              <div className="cyber-card hologram-card p-6 text-center">
                <div className="text-3xl mb-4">📚</div>
                <h3 className="text-lg font-bold text-white mb-2">Documentation</h3>
                <p className="text-gray-300 text-sm">Technical and user documentation</p>
              </div>
              <div className="cyber-card hologram-card p-6 text-center">
                <div className="text-3xl mb-4">🎥</div>
                <h3 className="text-lg font-bold text-white mb-2">Video Scripts</h3>
                <p className="text-gray-300 text-sm">Video content and scripts</p>
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Pricing Plans</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="cyber-card hologram-card p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Creator</h3>
                <div className="text-4xl font-bold text-pink-400 mb-6">$299<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-3 text-gray-300 mb-8">
                  <li>✓ 1,000 AI-generated articles/month</li>
                  <li>✓ 500 AI-generated images/month</li>
                  <li>✓ 10 video generations/month</li>
                  <li>✓ 5 social media accounts</li>
                  <li>✓ Basic SEO optimization</li>
                  <li>✓ Email support</li>
                </ul>
                <a href="/contact" className="w-full cyber-button text-center block">Get Started</a>
              </div>
              <div className="cyber-card hologram-card p-8 border-2 border-pink-400">
                <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
                <div className="text-4xl font-bold text-pink-400 mb-6">$599<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-3 text-gray-300 mb-8">
                  <li>✓ 5,000 AI-generated articles/month</li>
                  <li>✓ 2,500 AI-generated images/month</li>
                  <li>✓ 50 video generations/month</li>
                  <li>✓ 15 social media accounts</li>
                  <li>✓ Advanced SEO optimization</li>
                  <li>✓ Priority support</li>
                  <li>✓ Custom AI models</li>
                </ul>
                <a href="/contact" className="w-full cyber-button text-center block">Most Popular</a>
              </div>
              <div className="cyber-card hologram-card p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
                <div className="text-4xl font-bold text-pink-400 mb-6">$1,299<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-3 text-gray-300 mb-8">
                  <li>✓ Unlimited content generation</li>
                  <li>✓ Unlimited images and videos</li>
                  <li>✓ Unlimited social accounts</li>
                  <li>✓ White-label options</li>
                  <li>✓ API access</li>
                  <li>✓ Dedicated support</li>
                  <li>✓ Custom integrations</li>
                </ul>
                <a href="/contact" className="w-full cyber-button text-center block">Contact Sales</a>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Why Choose AI Content Studio?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="cyber-card hologram-card p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Proven Results</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="text-3xl">⚡</div>
                    <div>
                      <p className="text-2xl font-bold text-pink-400">10x</p>
                      <p className="text-gray-300">Faster content creation</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-3xl">💰</div>
                    <div>
                      <p className="text-2xl font-bold text-pink-400">80%</p>
                      <p className="text-gray-300">Cost reduction</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-3xl">📈</div>
                    <div>
                      <p className="text-2xl font-bold text-pink-400">300%</p>
                      <p className="text-gray-300">Increase in engagement</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cyber-card hologram-card p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Customer Success Stories</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-pink-400 pl-4">
                    <p className="text-gray-300 italic">"We went from creating 10 blog posts per month to 100+ with the same team. The AI quality is incredible."</p>
                    <p className="text-pink-400 font-semibold mt-2">- Jennifer Martinez, Content Director</p>
                  </div>
                  <div className="border-l-4 border-pink-400 pl-4">
                    <p className="text-gray-300 italic">"The social media automation saved us 15 hours per week. Our engagement rates tripled."</p>
                    <p className="text-pink-400 font-semibold mt-2">- David Kim, Marketing Manager</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4 neon-text">Ready to Scale Your Content Creation?</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of content creators and marketers using our AI Content Studio to produce high-quality content at scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="tel:+13024640950" className="cyber-button w-full sm:w-auto text-center">
                📞 Call: (302) 464-0950
              </a>
              <a href="mailto:kleber@ziontechgroup.com" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300">
                Email Us
              </a>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default AIContentStudioPage;