import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const AIVideoGeneratorPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Zion AI Video Generator - Create Professional Videos with AI | Zion Tech Group</title>
        <meta name="description" content="Generate professional videos from text, images, and scripts using AI. Create marketing videos, tutorials, and presentations in minutes." />
        <meta name="keywords" content="AI video generator, video creation, marketing videos, video automation, content creation, video production" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Zion AI Video Generator
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Create stunning professional videos from text, images, and scripts in minutes. 
              No video editing experience required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://ziontechgroup.com/ai-video-generator" className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors text-center">
                Create Video Now
              </a>
              <Link to="/contact" className="border border-purple-600 text-purple-600 px-8 py-3 rounded-lg hover:bg-purple-50 transition-colors text-center">
                Watch Demo
              </Link>
            </div>
          </div>

          {/* Features Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Powerful Video Creation Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🎬</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Text-to-Video</h3>
                <p className="text-gray-600 mb-4">
                  Transform any text into engaging videos with AI-generated visuals, animations, and voiceovers.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Script to video conversion</li>
                  <li>• Auto-generated visuals</li>
                  <li>• Multiple voice options</li>
                  <li>• Custom branding</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🎨</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">AI-Powered Design</h3>
                <p className="text-gray-600 mb-4">
                  Intelligent design suggestions, color schemes, and layouts that match your brand and content.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Brand-aware design</li>
                  <li>• Color palette matching</li>
                  <li>• Layout optimization</li>
                  <li>• Style consistency</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🎵</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Audio & Music</h3>
                <p className="text-gray-600 mb-4">
                  High-quality voice synthesis, background music, and sound effects that enhance your video content.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Natural voice synthesis</li>
                  <li>• Royalty-free music</li>
                  <li>• Sound effect library</li>
                  <li>• Audio mixing tools</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">📱</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Multi-Format Export</h3>
                <p className="text-gray-600 mb-4">
                  Export videos in multiple formats optimized for different platforms and devices.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Social media formats</li>
                  <li>• 4K/HD quality</li>
                  <li>• Mobile optimization</li>
                  <li>• Web streaming ready</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Smart Automation</h3>
                <p className="text-gray-600 mb-4">
                  Automated video creation workflows with intelligent scene transitions and timing optimization.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Auto scene generation</li>
                  <li>• Smart transitions</li>
                  <li>• Timing optimization</li>
                  <li>• Batch processing</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Analytics & Insights</h3>
                <p className="text-gray-600 mb-4">
                  Track video performance with detailed analytics and optimization recommendations.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• View analytics</li>
                  <li>• Engagement metrics</li>
                  <li>• A/B testing</li>
                  <li>• Performance insights</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Pricing Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Choose Your Plan</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Creator</h3>
                <div className="text-4xl font-bold text-purple-600 mb-4">$49<span className="text-lg text-gray-500">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Up to 10 videos/month
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    HD quality export
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Basic templates
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Email support
                  </li>
                </ul>
                <a href="https://ziontechgroup.com/ai-video-generator/creator" className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors text-center block">
                  Start Free Trial
                </a>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md border-2 border-purple-600 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm">Most Popular</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional</h3>
                <div className="text-4xl font-bold text-purple-600 mb-4">$149<span className="text-lg text-gray-500">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Up to 50 videos/month
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    4K quality export
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Premium templates & effects
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Brand customization
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Priority support
                  </li>
                </ul>
                <a href="https://ziontechgroup.com/ai-video-generator/professional" className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors text-center block">
                  Get Started
                </a>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise</h3>
                <div className="text-4xl font-bold text-purple-600 mb-4">$399<span className="text-lg text-gray-500">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Unlimited videos
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Custom branding & templates
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Team collaboration
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    API access
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    24/7 dedicated support
                  </li>
                </ul>
                <a href="https://ziontechgroup.com/ai-video-generator/enterprise" className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors text-center block">
                  Contact Sales
                </a>
              </div>
            </div>
          </div>

          {/* Use Cases Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Perfect For Every Use Case</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Marketing Videos</h3>
                <p className="text-gray-600 text-sm">
                  Create compelling product demos, promotional videos, and social media content that converts.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Training & Tutorials</h3>
                <p className="text-gray-600 text-sm">
                  Develop educational content, how-to videos, and training materials for your team or customers.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Presentations</h3>
                <p className="text-gray-600 text-sm">
                  Transform boring presentations into engaging video content that captures attention.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Social Media</h3>
                <p className="text-gray-600 text-sm">
                  Create platform-optimized videos for Instagram, TikTok, YouTube, and other social channels.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">E-learning</h3>
                <p className="text-gray-600 text-sm">
                  Build comprehensive online courses and educational content with professional video quality.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Internal Communications</h3>
                <p className="text-gray-600 text-sm">
                  Create engaging internal videos for announcements, updates, and team communications.
                </p>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Choose Our AI Video Generator?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">⚡ 10x Faster Production</h3>
                <p className="text-gray-600">
                  Create professional videos in minutes instead of hours. No video editing skills required - 
                  just input your content and let AI do the rest.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">💰 Cost Effective</h3>
                <p className="text-gray-600">
                  Save up to 90% on video production costs compared to traditional methods. 
                  No need for expensive equipment, studios, or video editors.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">🎯 Professional Quality</h3>
                <p className="text-gray-600">
                  Generate high-quality videos that rival professional productions. 
                  AI ensures consistent quality and brand alignment across all content.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">📈 Scalable Content</h3>
                <p className="text-gray-600">
                  Create unlimited videos at scale. Perfect for businesses that need to 
                  produce large volumes of video content consistently.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-purple-600 text-white rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Start Creating Amazing Videos Today</h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of creators and businesses using AI to produce professional videos effortlessly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://ziontechgroup.com/ai-video-generator" className="bg-white text-purple-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">
                Create Your First Video
              </a>
              <Link to="/contact" className="border border-white text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors">
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIVideoGeneratorPage;