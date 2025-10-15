import React from 'react';
import { Helmet } from 'react-helmet-async';

const ZionAIVideoGeneratorProPage: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Zion AI Video Generator Pro",
    "description": "AI-powered video creation platform with automated editing, voice synthesis, and content optimization",
    "url": "https://ziontechgroup.com/zion-ai-video-generator-pro",
    "applicationCategory": "MultimediaApplication",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "79",
      "priceCurrency": "USD",
      "priceValidUntil": "2025-12-31"
    },
    "provider": {
      "@type": "Organization",
      "name": "Zion Tech Group",
      "url": "https://ziontechgroup.com"
    }
  };

  return (
    <>
      <Helmet>
        <title>Zion AI Video Generator Pro - Create Professional Videos with AI</title>
        <meta name="description" content="AI-powered video creation platform with automated editing, voice synthesis, and content optimization. Create professional videos 10x faster." />
        <meta name="keywords" content="AI video generator, video creation, automated editing, voice synthesis, content optimization" />
        <meta property="og:title" content="Zion AI Video Generator Pro - Create Professional Videos with AI" />
        <meta property="og:description" content="AI-powered video creation platform with automated editing, voice synthesis, and content optimization." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/zion-ai-video-generator-pro" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="text-6xl mb-6">🎬</div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Zion AI Video Generator Pro
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Create professional videos with AI assistance. Generate scripts, synthesize voices, and produce high-quality content 10x faster than traditional methods.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#pricing" className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors text-center">
                Start Free Trial
              </a>
              <a href="#demo" className="border border-purple-600 text-purple-600 px-8 py-3 rounded-lg hover:bg-purple-50 transition-colors text-center">
                Watch Demo
              </a>
            </div>
          </div>

          {/* Features Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Powerful AI Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-4">🤖</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">AI Video Script Generation</h3>
                <p className="text-gray-600">
                  Generate engaging video scripts automatically based on your topic, audience, and objectives.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-4">🎤</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Automated Voice Synthesis</h3>
                <p className="text-gray-600">
                  Convert your scripts to natural-sounding voiceovers with multiple voice options and languages.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-4">✂️</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Smart Video Editing</h3>
                <p className="text-gray-600">
                  AI-powered editing that automatically cuts, transitions, and optimizes your video content.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-4">📚</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Template Library</h3>
                <p className="text-gray-600">
                  Access hundreds of professional video templates for different industries and use cases.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-4">🎨</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Brand Customization</h3>
                <p className="text-gray-600">
                  Customize colors, fonts, logos, and styles to match your brand identity perfectly.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-4">🌍</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Multi-language Support</h3>
                <p className="text-gray-600">
                  Create videos in multiple languages with accurate translations and native voice synthesis.
                </p>
              </div>
            </div>
          </div>

          {/* Pricing Section */}
          <div id="pricing" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Simple, Transparent Pricing</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Basic</h3>
                <div className="text-4xl font-bold text-purple-600 mb-6">$79<span className="text-lg text-gray-500">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> 50 videos per month</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Basic templates</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> 1080p quality</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> 5 voice options</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Email support</li>
                </ul>
                <button className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors">
                  Start Free Trial
                </button>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md border-2 border-purple-600 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Pro</h3>
                <div className="text-4xl font-bold text-purple-600 mb-6">$199<span className="text-lg text-gray-500">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> 200 videos per month</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Premium templates</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> 4K quality</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> 20+ voice options</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Priority support</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Brand customization</li>
                </ul>
                <button className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors">
                  Start Free Trial
                </button>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise</h3>
                <div className="text-4xl font-bold text-purple-600 mb-6">$599<span className="text-lg text-gray-500">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Unlimited videos</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Custom templates</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> 8K quality</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Custom voices</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> 24/7 support</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> White-label solution</li>
                </ul>
                <button className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>

          {/* Use Cases Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Perfect For</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Marketing Videos</h3>
                <p className="text-gray-600">Create compelling marketing videos for social media, websites, and campaigns.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Training Content</h3>
                <p className="text-gray-600">Develop educational and training videos for employees and customers.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Product Demos</h3>
                <p className="text-gray-600">Showcase your products with professional demonstration videos.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Social Media Posts</h3>
                <p className="text-gray-600">Generate engaging video content for all social media platforms.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Educational Content</h3>
                <p className="text-gray-600">Create informative and educational video content for your audience.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Brand Storytelling</h3>
                <p className="text-gray-600">Tell your brand story with compelling video narratives.</p>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Ready to Get Started?</h2>
            <div className="text-center">
              <p className="text-lg text-gray-600 mb-6">
                Contact us today to learn more about Zion AI Video Generator Pro and start creating amazing videos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+13024640950" className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors text-center">
                  Call +1 302 464 0950
                </a>
                <a href="mailto:kleber@ziontechgroup.com" className="border border-purple-600 text-purple-600 px-8 py-3 rounded-lg hover:bg-purple-50 transition-colors text-center">
                  Email Us
                </a>
              </div>
              <div className="mt-6 text-sm text-gray-500">
                <p>364 E Main St STE 1008, Middletown, DE 19709</p>
                <p>Visit us at <a href="https://ziontechgroup.com" className="text-purple-600 hover:text-purple-800">ziontechgroup.com</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ZionAIVideoGeneratorProPage;