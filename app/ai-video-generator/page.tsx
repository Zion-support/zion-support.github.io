import React from 'react';
import SEOHead from '../components/SEOHead';

const AIVideoGeneratorPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="AI Video Generator Pro - Zion Tech Group"
        description="Create professional videos with AI. Automated editing, voice synthesis, and professional templates for marketing, training, and social media content."
        keywords="AI video generator, video creation, automated editing, voice synthesis, video marketing, social media videos"
        canonicalUrl="https://ziontechgroup.com/ai-video-generator"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-red-50 via-pink-50 to-purple-100">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-100 text-red-800 text-sm font-medium mb-6">
                🎬 AI-Powered Video Creation
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
                AI Video Generator
                <span className="block bg-gradient-to-r from-red-600 to-purple-600 bg-clip-text text-transparent">
                  Pro
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Create professional videos with AI. Automated editing, voice synthesis, and professional templates for marketing, training, and social media content.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#pricing" className="bg-gradient-to-r from-red-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:from-red-700 hover:to-purple-700 transition-all duration-300 text-center font-semibold shadow-lg hover:shadow-xl">
                  Start Free Trial
                </a>
                <a href="#demo" className="border-2 border-red-600 text-red-600 px-8 py-4 rounded-lg hover:bg-red-50 transition-all duration-300 text-center font-semibold">
                  Watch Demo
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Revolutionary Video Features</h2>
              <p className="text-xl text-gray-600">Create stunning videos with AI assistance</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-red-50 to-pink-50 p-8 rounded-xl border border-red-100 hover:shadow-lg transition-all duration-300">
                <div className="text-4xl mb-4">🎥</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Auto Video Creation</h3>
                <p className="text-gray-600">Generate complete videos from text prompts with automatic scene selection and transitions.</p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-8 rounded-xl border border-purple-100 hover:shadow-lg transition-all duration-300">
                <div className="text-4xl mb-4">🎤</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Voice Synthesis</h3>
                <p className="text-gray-600">Natural-sounding voiceovers in multiple languages with customizable tone and style.</p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-xl border border-blue-100 hover:shadow-lg transition-all duration-300">
                <div className="text-4xl mb-4">📝</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Text-to-Video</h3>
                <p className="text-gray-600">Convert any text content into engaging video presentations with visual elements.</p>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-xl border border-green-100 hover:shadow-lg transition-all duration-300">
                <div className="text-4xl mb-4">🎨</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Template Library</h3>
                <p className="text-gray-600">Hundreds of professional templates for different industries and use cases.</p>
              </div>
              
              <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-8 rounded-xl border border-orange-100 hover:shadow-lg transition-all duration-300">
                <div className="text-4xl mb-4">🏷️</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Brand Customization</h3>
                <p className="text-gray-600">Apply your brand colors, fonts, and logos automatically to all videos.</p>
              </div>
              
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-xl border border-indigo-100 hover:shadow-lg transition-all duration-300">
                <div className="text-4xl mb-4">📱</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Social Media Optimization</h3>
                <p className="text-gray-600">Auto-format videos for different social platforms with optimal dimensions and duration.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Perfect For Every Content Need</h2>
              <p className="text-xl text-gray-600">From marketing to education</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="text-4xl mb-4">📈</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Marketing Videos</h3>
                <p className="text-gray-600">Create compelling product demos, promotional videos, and brand stories that convert.</p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="text-4xl mb-4">🎓</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Training Content</h3>
                <p className="text-gray-600">Develop engaging training videos and educational content for your team or customers.</p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="text-4xl mb-4">📱</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Social Media Posts</h3>
                <p className="text-gray-600">Generate eye-catching social media videos for Instagram, TikTok, and other platforms.</p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="text-4xl mb-4">🛍️</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Product Demos</h3>
                <p className="text-gray-600">Showcase your products with professional demonstration videos that highlight key features.</p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="text-4xl mb-4">📰</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">News & Updates</h3>
                <p className="text-gray-600">Transform company news and updates into engaging video announcements.</p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="text-4xl mb-4">🎉</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Event Promotion</h3>
                <p className="text-gray-600">Create promotional videos for events, webinars, and special announcements.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div id="pricing" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
              <p className="text-xl text-gray-600">Choose the plan that fits your video needs</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Basic</h3>
                  <div className="text-4xl font-bold text-red-600 mb-4">$39<span className="text-lg text-gray-500">/month</span></div>
                  <p className="text-gray-600 mb-6">Perfect for small businesses</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> 10 videos/month</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> 5 minutes max length</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Basic templates</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> 720p export</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Email support</li>
                </ul>
                <button className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition-colors">
                  Start Free Trial
                </button>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-2xl border-2 border-red-500 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-red-500 text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Pro</h3>
                  <div className="text-4xl font-bold text-red-600 mb-4">$129<span className="text-lg text-gray-500">/month</span></div>
                  <p className="text-gray-600 mb-6">Ideal for growing businesses</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> 50 videos/month</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> 15 minutes max length</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Premium templates</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> 1080p export</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Priority support</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Brand customization</li>
                </ul>
                <button className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition-colors">
                  Start Free Trial
                </button>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise</h3>
                  <div className="text-4xl font-bold text-red-600 mb-4">$399<span className="text-lg text-gray-500">/month</span></div>
                  <p className="text-gray-600 mb-6">For large organizations</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Unlimited videos</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> 60 minutes max length</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> All templates</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> 4K export</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> 24/7 phone support</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Custom integrations</li>
                </ul>
                <button className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition-colors">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="py-20 bg-gradient-to-r from-red-600 to-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">Ready to Create Amazing Videos?</h2>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              Join thousands of creators using our AI video generator to produce professional content in minutes, not hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+13024640950" className="bg-white text-red-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                Call: +1 302 464 0950
              </a>
              <a href="mailto:kleber@ziontechgroup.com" className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-red-600 transition-colors font-semibold">
                Email: kleber@ziontechgroup.com
              </a>
            </div>
            <div className="mt-8 text-red-100">
              <p>Address: 364 E Main St STE 1008, Middletown, DE 19709</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIVideoGeneratorPage;