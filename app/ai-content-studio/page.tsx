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
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 holographic-text cyber-text glitch">
              AI Content Studio
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow neon-text">
              Complete Content Creation Suite
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
              Create stunning content at scale with our AI-powered studio. From blog posts and social media 
              to videos and graphics - everything you need to dominate content marketing.
            </p>
          </section>

          {/* Features Grid */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
              Powerful Content Tools
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="cyber-card p-6 energy-pulse">
                <div className="text-4xl mb-4">✍️</div>
                <h3 className="text-xl font-bold text-white mb-4">AI Writing Assistant</h3>
                <p className="text-gray-300 mb-4">
                  Generate high-quality content for blogs, social media, emails, and more with advanced AI writing models.
                </p>
                <ul className="text-sm text-gray-400 space-y-2">
                  <li>• Blog post generation</li>
                  <li>• Social media captions</li>
                  <li>• Email marketing copy</li>
                  <li>• Product descriptions</li>
                  <li>• SEO-optimized content</li>
                </ul>
              </div>

              <div className="cyber-card p-6 energy-pulse">
                <div className="text-4xl mb-4">🎨</div>
                <h3 className="text-xl font-bold text-white mb-4">AI Image Generation</h3>
                <p className="text-gray-300 mb-4">
                  Create stunning visuals, graphics, and artwork using cutting-edge AI image generation technology.
                </p>
                <ul className="text-sm text-gray-400 space-y-2">
                  <li>• Custom artwork creation</li>
                  <li>• Logo design</li>
                  <li>• Social media graphics</li>
                  <li>• Product mockups</li>
                  <li>• Infographic generation</li>
                </ul>
              </div>

              <div className="cyber-card p-6 energy-pulse">
                <div className="text-4xl mb-4">🎬</div>
                <h3 className="text-xl font-bold text-white mb-4">Video Editing Suite</h3>
                <p className="text-gray-300 mb-4">
                  Professional video editing with AI-powered features for automatic editing, transitions, and effects.
                </p>
                <ul className="text-sm text-gray-400 space-y-2">
                  <li>• Auto video editing</li>
                  <li>• Smart transitions</li>
                  <li>• Background removal</li>
                  <li>• Voice-over generation</li>
                  <li>• Subtitle automation</li>
                </ul>
              </div>

              <div className="cyber-card p-6 energy-pulse">
                <div className="text-4xl mb-4">📱</div>
                <h3 className="text-xl font-bold text-white mb-4">Social Media Automation</h3>
                <p className="text-gray-300 mb-4">
                  Automate your social media presence with AI-generated posts, optimal timing, and engagement tracking.
                </p>
                <ul className="text-sm text-gray-400 space-y-2">
                  <li>• Multi-platform posting</li>
                  <li>• Optimal timing analysis</li>
                  <li>• Hashtag optimization</li>
                  <li>• Engagement tracking</li>
                  <li>• Trend analysis</li>
                </ul>
              </div>

              <div className="cyber-card p-6 energy-pulse">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-xl font-bold text-white mb-4">Content Analytics</h3>
                <p className="text-gray-300 mb-4">
                  Track performance across all platforms with detailed analytics and AI-powered insights.
                </p>
                <ul className="text-sm text-gray-400 space-y-2">
                  <li>• Performance tracking</li>
                  <li>• Engagement analysis</li>
                  <li>• ROI measurement</li>
                  <li>• Competitor analysis</li>
                  <li>• Trend predictions</li>
                </ul>
              </div>

              <div className="cyber-card p-6 energy-pulse">
                <div className="text-4xl mb-4">🔄</div>
                <h3 className="text-xl font-bold text-white mb-4">Content Workflow</h3>
                <p className="text-gray-300 mb-4">
                  Streamline your content creation process with automated workflows and team collaboration tools.
                </p>
                <ul className="text-sm text-gray-400 space-y-2">
                  <li>• Automated workflows</li>
                  <li>• Team collaboration</li>
                  <li>• Approval processes</li>
                  <li>• Content calendar</li>
                  <li>• Brand consistency</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
              Pricing Plans
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="cyber-card p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Creator</h3>
                <div className="text-4xl font-bold text-pink-400 mb-6">$299<span className="text-lg">/month</span></div>
                <ul className="text-gray-300 space-y-3 mb-8">
                  <li>• 1,000 AI-generated images/month</li>
                  <li>• 50 hours video editing</li>
                  <li>• 500 social media posts</li>
                  <li>• Basic analytics</li>
                  <li>• Email support</li>
                </ul>
                <a href="/contact" className="cyber-button w-full text-center">
                  Get Started
                </a>
              </div>

              <div className="cyber-card p-8 text-center border-2 border-pink-400">
                <div className="text-sm text-pink-400 mb-2 font-bold">MOST POPULAR</div>
                <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
                <div className="text-4xl font-bold text-pink-400 mb-6">$599<span className="text-lg">/month</span></div>
                <ul className="text-gray-300 space-y-3 mb-8">
                  <li>• 5,000 AI-generated images/month</li>
                  <li>• 200 hours video editing</li>
                  <li>• 2,000 social media posts</li>
                  <li>• Advanced analytics</li>
                  <li>• Priority support</li>
                  <li>• Team collaboration</li>
                </ul>
                <a href="/contact" className="cyber-button w-full text-center">
                  Get Started
                </a>
              </div>

              <div className="cyber-card p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
                <div className="text-4xl font-bold text-pink-400 mb-6">$1,299<span className="text-lg">/month</span></div>
                <ul className="text-gray-300 space-y-3 mb-8">
                  <li>• Unlimited AI-generated images</li>
                  <li>• Unlimited video editing</li>
                  <li>• Unlimited social media posts</li>
                  <li>• Custom analytics dashboard</li>
                  <li>• 24/7 dedicated support</li>
                  <li>• White-label solution</li>
                </ul>
                <a href="/contact" className="cyber-button w-full text-center">
                  Contact Sales
                </a>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Create Amazing Content?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of content creators and marketers who are already using our AI Content Studio to create 10x more content in half the time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+13024640950" className="cyber-button">
                📞 Call: (302) 464-0950
              </a>
              <a href="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300">
                Start Free Trial
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