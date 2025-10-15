import React, { memo } from 'react';
import SEOHead from '../components/SEOHead';

const ZionAIVideoGeneratorPage: React.FC = memo(() => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Zion AI Video Generator",
    "description": "AI-powered video creation and editing platform with advanced automation",
    "url": "https://ziontechgroup.com/zion-ai-video-generator",
    "applicationCategory": "MultimediaApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "99",
      "priceCurrency": "USD",
      "priceValidUntil": "2025-12-31"
    }
  };

  return (
    <>
      <SEOHead
        title="Zion AI Video Generator - Create Professional Videos with AI | Zion Tech Group"
        description="Generate stunning videos automatically with AI. Perfect for marketing, social media, and content creation. Professional quality videos in minutes. Starting at $99/month."
        keywords="AI video generator, video creation, automated video, video editing, AI video maker, video marketing, content creation"
        canonicalUrl="https://ziontechgroup.com/zion-ai-video-generator"
        structuredData={structuredData}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -inset-10 opacity-20">
            <div className="absolute top-0 -left-4 w-96 h-96 bg-emerald-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
            <div className="absolute top-0 -right-4 w-96 h-96 bg-teal-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-96 h-96 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-500/20 border border-emerald-500/30 mb-6">
              <span className="text-emerald-300 text-sm font-medium">🎬 AI Video Technology</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Zion AI Video Generator
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Create professional-quality videos in minutes with our advanced AI technology. Perfect for marketing, social media, education, and content creation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-emerald-600 to-cyan-600 text-white px-8 py-4 rounded-lg hover:from-emerald-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 font-semibold text-lg">
                Create Video Now
              </button>
              <button className="border border-emerald-400 text-emerald-300 px-8 py-4 rounded-lg hover:bg-emerald-500/20 transition-all duration-300 font-semibold text-lg">
                View Gallery
              </button>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🤖</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">AI-Powered Creation</h3>
              <p className="text-gray-300">
                Generate videos from text prompts, scripts, or ideas. Our AI understands context and creates relevant, engaging content automatically.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Professional Templates</h3>
              <p className="text-gray-300">
                Access hundreds of professionally designed templates for different industries, styles, and use cases. Customize every element to match your brand.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🎵</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Smart Audio Sync</h3>
              <p className="text-gray-300">
                Automatically sync music, voiceovers, and sound effects with your video content. Perfect timing and professional audio quality guaranteed.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Multi-Format Export</h3>
              <p className="text-gray-300">
                Export videos in any format and resolution. Optimized for social media, web, mobile, and professional presentations.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🎭</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">AI Avatars & Characters</h3>
              <p className="text-gray-300">
                Create realistic AI avatars and animated characters for your videos. Perfect for explainer videos, tutorials, and presentations.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="w-12 h-12 bg-pink-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Real-Time Rendering</h3>
              <p className="text-gray-300">
                Fast, cloud-based rendering that delivers your videos in minutes, not hours. Preview changes instantly and iterate quickly.
              </p>
            </div>
          </div>

          {/* Video Types */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/20 mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-8">Create Any Type of Video</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📺</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Marketing Videos</h3>
                <p className="text-gray-300 text-sm">Product demos, ads, and promotional content</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📱</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Social Media</h3>
                <p className="text-gray-300 text-sm">TikTok, Instagram, YouTube, and LinkedIn content</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎓</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Educational</h3>
                <p className="text-gray-300 text-sm">Tutorials, courses, and training materials</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💼</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Corporate</h3>
                <p className="text-gray-300 text-sm">Presentations, reports, and internal communications</p>
              </div>
            </div>
          </div>

          {/* Pricing Section */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/20 mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-8">Choose Your Plan</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/10 rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-4">Starter</h3>
                <div className="text-3xl font-bold text-emerald-400 mb-4">$99<span className="text-lg text-gray-300">/month</span></div>
                <ul className="space-y-3 text-gray-300 mb-6">
                  <li>✓ 10 videos/month</li>
                  <li>✓ 5 minutes max length</li>
                  <li>✓ Basic templates</li>
                  <li>✓ 1080p export</li>
                  <li>✓ Email support</li>
                </ul>
                <button className="w-full bg-emerald-600 text-white py-3 rounded-lg hover:bg-emerald-700 transition-colors">
                  Start Free Trial
                </button>
              </div>

              <div className="bg-gradient-to-br from-emerald-600 to-cyan-600 rounded-xl p-6 border border-emerald-400 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Professional</h3>
                <div className="text-3xl font-bold text-white mb-4">$299<span className="text-lg text-emerald-200">/month</span></div>
                <ul className="space-y-3 text-emerald-100 mb-6">
                  <li>✓ 50 videos/month</li>
                  <li>✓ 30 minutes max length</li>
                  <li>✓ Premium templates</li>
                  <li>✓ 4K export</li>
                  <li>✓ AI avatars</li>
                  <li>✓ Priority support</li>
                </ul>
                <button className="w-full bg-white text-emerald-600 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                  Start Free Trial
                </button>
              </div>

              <div className="bg-white/10 rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-4">Enterprise</h3>
                <div className="text-3xl font-bold text-emerald-400 mb-4">$799<span className="text-lg text-gray-300">/month</span></div>
                <ul className="space-y-3 text-gray-300 mb-6">
                  <li>✓ Unlimited videos</li>
                  <li>✓ No length limits</li>
                  <li>✓ All templates</li>
                  <li>✓ 8K export</li>
                  <li>✓ Custom branding</li>
                  <li>✓ 24/7 support</li>
                </ul>
                <button className="w-full bg-emerald-600 text-white py-3 rounded-lg hover:bg-emerald-700 transition-colors">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-emerald-600/20 to-cyan-600/20 rounded-2xl p-12 border border-emerald-500/30">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Create Amazing Videos?</h2>
            <p className="text-xl text-gray-300 mb-8">Join thousands of creators using Zion AI Video Generator</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-emerald-600 to-cyan-600 text-white px-8 py-4 rounded-lg hover:from-emerald-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 font-semibold text-lg">
                Start Free Trial
              </button>
              <a href="mailto:kleber@ziontechgroup.com" className="border border-emerald-400 text-emerald-300 px-8 py-4 rounded-lg hover:bg-emerald-500/20 transition-all duration-300 font-semibold text-lg">
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

ZionAIVideoGeneratorPage.displayName = 'ZionAIVideoGeneratorPage';

export default ZionAIVideoGeneratorPage;