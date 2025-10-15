import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const AIVideoGeneratorPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Video Generator Pro - Zion Tech Group</title>
        <meta name="description" content="Create stunning videos with AI. Our AI Video Generator Pro transforms text, images, and audio into professional videos with advanced editing capabilities." />
        <meta name="keywords" content="AI video generator, video creation, AI video editing, automated video production, video marketing, content creation" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-8">
              <div className="text-8xl mb-8">🎬</div>
              <h1 className="text-5xl md:text-6xl font-bold">
                AI <span className="gradient-text">Video Generator Pro</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Transform your ideas into stunning videos with our AI-powered video creation platform. 
                Generate professional-quality videos from text, images, and audio with advanced editing capabilities.
              </p>
              
              {/* Contact CTA */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
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
                  ✉️ Email Us
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
                Powerful Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to create professional videos with AI assistance
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="glass-effect rounded-2xl p-8 text-center">
                <div className="text-5xl mb-6">✍️</div>
                <h3 className="text-2xl font-bold text-white mb-4">Text-to-Video Generation</h3>
                <p className="text-gray-300">
                  Convert your text scripts into engaging videos with AI-generated visuals and animations.
                </p>
              </div>

              <div className="glass-effect rounded-2xl p-8 text-center">
                <div className="text-5xl mb-6">🎤</div>
                <h3 className="text-2xl font-bold text-white mb-4">AI Voice Synthesis</h3>
                <p className="text-gray-300">
                  Generate natural-sounding voiceovers in multiple languages with AI voice technology.
                </p>
              </div>

              <div className="glass-effect rounded-2xl p-8 text-center">
                <div className="text-5xl mb-6">✂️</div>
                <h3 className="text-2xl font-bold text-white mb-4">Auto Video Editing</h3>
                <p className="text-gray-300">
                  AI automatically edits your videos with perfect timing, transitions, and effects.
                </p>
              </div>

              <div className="glass-effect rounded-2xl p-8 text-center">
                <div className="text-5xl mb-6">📚</div>
                <h3 className="text-2xl font-bold text-white mb-4">Template Library</h3>
                <p className="text-gray-300">
                  Access hundreds of professional video templates for different industries and use cases.
                </p>
              </div>

              <div className="glass-effect rounded-2xl p-8 text-center">
                <div className="text-5xl mb-6">🎨</div>
                <h3 className="text-2xl font-bold text-white mb-4">Brand Customization</h3>
                <p className="text-gray-300">
                  Customize videos with your brand colors, fonts, and logos for consistent branding.
                </p>
              </div>

              <div className="glass-effect rounded-2xl p-8 text-center">
                <div className="text-5xl mb-6">🌐</div>
                <h3 className="text-2xl font-bold text-white mb-4">Multi-language Support</h3>
                <p className="text-gray-300">
                  Create videos in multiple languages to reach global audiences effectively.
                </p>
              </div>

              <div className="glass-effect rounded-2xl p-8 text-center">
                <div className="text-5xl mb-6">📱</div>
                <h3 className="text-2xl font-bold text-white mb-4">Social Media Optimization</h3>
                <p className="text-gray-300">
                  Optimize videos for different social media platforms with the right dimensions and formats.
                </p>
              </div>

              <div className="glass-effect rounded-2xl p-8 text-center">
                <div className="text-5xl mb-6">⚡</div>
                <h3 className="text-2xl font-bold text-white mb-4">Batch Processing</h3>
                <p className="text-gray-300">
                  Process multiple videos simultaneously to scale your content creation efficiently.
                </p>
              </div>

              <div className="glass-effect rounded-2xl p-8 text-center">
                <div className="text-5xl mb-6">👁️</div>
                <h3 className="text-2xl font-bold text-white mb-4">Real-time Preview</h3>
                <p className="text-gray-300">
                  Preview your videos in real-time as you make changes for instant feedback.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
                Simple Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your video creation needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="glass-effect rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Basic</h3>
                <div className="text-4xl font-bold gradient-text mb-6">$79<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-3 text-gray-300 mb-8">
                  <li>✓ 10 videos per month</li>
                  <li>✓ HD quality export</li>
                  <li>✓ Basic templates</li>
                  <li>✓ Text-to-video generation</li>
                  <li>✓ Email support</li>
                </ul>
                <a
                  href="mailto:kleber@ziontechgroup.com?subject=AI Video Generator Basic Plan"
                  className="block w-full px-6 py-3 border border-cyan-500 text-cyan-400 rounded-lg font-medium text-center hover:bg-cyan-500 hover:text-white transition-all duration-300"
                >
                  Get Started
                </a>
              </div>

              <div className="glass-effect rounded-2xl p-8 text-center border-2 border-cyan-500">
                <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4 inline-block">
                  Most Popular
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Pro</h3>
                <div className="text-4xl font-bold gradient-text mb-6">$199<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-3 text-gray-300 mb-8">
                  <li>✓ 50 videos per month</li>
                  <li>✓ 4K quality export</li>
                  <li>✓ Premium templates</li>
                  <li>✓ AI voice synthesis</li>
                  <li>✓ Brand customization</li>
                  <li>✓ Batch processing</li>
                  <li>✓ Priority support</li>
                </ul>
                <a
                  href="mailto:kleber@ziontechgroup.com?subject=AI Video Generator Pro Plan"
                  className="block w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-medium text-center hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                >
                  Get Started
                </a>
              </div>

              <div className="glass-effect rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
                <div className="text-4xl font-bold gradient-text mb-6">$599<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-3 text-gray-300 mb-8">
                  <li>✓ Unlimited videos</li>
                  <li>✓ 4K & 8K quality export</li>
                  <li>✓ Custom templates</li>
                  <li>✓ Advanced AI features</li>
                  <li>✓ White-label solution</li>
                  <li>✓ API access</li>
                  <li>✓ Dedicated support</li>
                  <li>✓ Custom integrations</li>
                </ul>
                <a
                  href="mailto:kleber@ziontechgroup.com?subject=AI Video Generator Enterprise Plan"
                  className="block w-full px-6 py-3 border border-cyan-500 text-cyan-400 rounded-lg font-medium text-center hover:bg-cyan-500 hover:text-white transition-all duration-300"
                >
                  Contact Sales
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
                Perfect For
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Ideal for businesses and creators who need high-quality video content
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="glass-effect rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Marketing Videos</h3>
                <p className="text-gray-300 mb-4">
                  Create compelling marketing videos that drive engagement and conversions for your products and services.
                </p>
                <ul className="space-y-2 text-gray-400">
                  <li>• Product demos</li>
                  <li>• Promotional content</li>
                  <li>• Brand storytelling</li>
                </ul>
              </div>

              <div className="glass-effect rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Social Media Content</h3>
                <p className="text-gray-300 mb-4">
                  Generate engaging social media videos optimized for different platforms to boost your online presence.
                </p>
                <ul className="space-y-2 text-gray-400">
                  <li>• Instagram stories</li>
                  <li>• TikTok videos</li>
                  <li>• YouTube shorts</li>
                </ul>
              </div>

              <div className="glass-effect rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Training Materials</h3>
                <p className="text-gray-300 mb-4">
                  Create professional training and educational videos for your team or customers.
                </p>
                <ul className="space-y-2 text-gray-400">
                  <li>• Employee onboarding</li>
                  <li>• Product tutorials</li>
                  <li>• Educational content</li>
                </ul>
              </div>

              <div className="glass-effect rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Explainer Videos</h3>
                <p className="text-gray-300 mb-4">
                  Simplify complex concepts with clear, engaging explainer videos that your audience will understand.
                </p>
                <ul className="space-y-2 text-gray-400">
                  <li>• How-to guides</li>
                  <li>• Process explanations</li>
                  <li>• Feature demonstrations</li>
                </ul>
              </div>

              <div className="glass-effect rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">E-commerce</h3>
                <p className="text-gray-300 mb-4">
                  Showcase your products with stunning videos that increase sales and customer engagement.
                </p>
                <ul className="space-y-2 text-gray-400">
                  <li>• Product showcases</li>
                  <li>• Customer testimonials</li>
                  <li>• Unboxing videos</li>
                </ul>
              </div>

              <div className="glass-effect rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Educational Content</h3>
                <p className="text-gray-300 mb-4">
                  Create educational videos that make learning engaging and effective for your audience.
                </p>
                <ul className="space-y-2 text-gray-400">
                  <li>• Online courses</li>
                  <li>• Webinar recordings</li>
                  <li>• Knowledge sharing</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-3xl p-12 border border-cyan-500/20">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
                Start Creating Amazing Videos Today
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join thousands of businesses already using our AI Video Generator Pro to create professional videos in minutes, not hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a
                  href="tel:+13024640950"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl font-semibold text-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 hover:scale-105"
                >
                  📞 Call Now
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-xl font-semibold text-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 hover:scale-105"
                >
                  ✉️ Email Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIVideoGeneratorPage;