import React from 'react';
import SEOHead from '../components/SEOHead';

const AIImageGeneratorPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Zion AI Image Generator - Create Stunning Images with AI"
        description="Generate high-quality images from text descriptions using advanced AI. Perfect for marketing, design, and creative projects. Multiple styles and formats supported."
        keywords="AI image generator, text to image, AI art, image creation, marketing images, design tools, creative AI, image generation"
        canonicalUrl="https://ziontechgroup.com/ai-image-generator"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
            <div className="text-center">
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
                Zion AI Image Generator
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Create stunning, high-quality images from simple text descriptions. 
                Perfect for marketing, design, and creative projects with multiple artistic styles.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full font-semibold text-lg hover:from-cyan-400 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25">
                  Generate Images Now
                </button>
                <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-full font-semibold text-lg hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 transform hover:scale-105">
                  View Gallery
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
              Powerful Image Generation
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your ideas into stunning visuals with advanced AI technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative bg-gray-800/50 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-8 hover:border-cyan-400/60 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">Multiple Art Styles</h3>
              <p className="text-gray-300 mb-6">
                Choose from various artistic styles including photorealistic, cartoon, oil painting, watercolor, and digital art.
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Photorealistic images</li>
                <li>• Cartoon & illustration styles</li>
                <li>• Oil painting & watercolor</li>
                <li>• Digital art & concept art</li>
              </ul>
            </div>

            <div className="group relative bg-gray-800/50 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 hover:border-purple-400/60 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold text-purple-400 mb-4">Fast Generation</h3>
              <p className="text-gray-300 mb-6">
                Generate high-quality images in seconds. Our optimized AI models deliver results quickly without compromising quality.
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• 2-5 second generation time</li>
                <li>• High resolution output</li>
                <li>• Batch processing</li>
                <li>• Real-time preview</li>
              </ul>
            </div>

            <div className="group relative bg-gray-800/50 backdrop-blur-sm border border-pink-500/30 rounded-2xl p-8 hover:border-pink-400/60 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/20">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-pink-400 mb-4">Precise Control</h3>
              <p className="text-gray-300 mb-6">
                Fine-tune your images with detailed prompts, aspect ratio control, and style mixing for perfect results.
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Detailed prompt engineering</li>
                <li>• Aspect ratio customization</li>
                <li>• Style mixing & blending</li>
                <li>• Negative prompts</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="bg-gray-800/30 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
                Perfect For
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Ideal for various industries and creative projects
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-5xl mb-4">📱</div>
                <h3 className="text-xl font-bold text-cyan-400 mb-3">Marketing</h3>
                <p className="text-gray-300 text-sm">Social media posts, ads, banners, and promotional materials</p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">🎮</div>
                <h3 className="text-xl font-bold text-purple-400 mb-3">Gaming</h3>
                <p className="text-gray-300 text-sm">Character designs, environments, and concept art</p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">📚</div>
                <h3 className="text-xl font-bold text-pink-400 mb-3">Education</h3>
                <p className="text-gray-300 text-sm">Educational illustrations and visual content</p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">🏢</div>
                <h3 className="text-xl font-bold text-green-400 mb-3">Business</h3>
                <p className="text-gray-300 text-sm">Presentations, reports, and corporate materials</p>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
                Simple Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your creative needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-600/30 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Creator</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-6">$19<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-gray-300">
                    <span className="text-green-400 mr-3">✓</span>
                    100 images/month
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-green-400 mr-3">✓</span>
                    HD resolution (1024x1024)
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-green-400 mr-3">✓</span>
                    5 art styles
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-green-400 mr-3">✓</span>
                    Commercial license
                  </li>
                </ul>
                <button className="w-full bg-cyan-500 text-white py-3 rounded-lg font-semibold hover:bg-cyan-400 transition-colors">
                  Start Free Trial
                </button>
              </div>

              <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 backdrop-blur-sm border border-cyan-500/50 rounded-2xl p-8 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-6">$49<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-gray-300">
                    <span className="text-green-400 mr-3">✓</span>
                    500 images/month
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-green-400 mr-3">✓</span>
                    4K resolution (4096x4096)
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-green-400 mr-3">✓</span>
                    All art styles
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-green-400 mr-3">✓</span>
                    Batch generation
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-green-400 mr-3">✓</span>
                    Priority support
                  </li>
                </ul>
                <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-cyan-400 hover:to-purple-500 transition-all duration-300">
                  Start Free Trial
                </button>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-600/30 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-6">$199<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-gray-300">
                    <span className="text-green-400 mr-3">✓</span>
                    Unlimited images
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-green-400 mr-3">✓</span>
                    Custom resolutions
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-green-400 mr-3">✓</span>
                    Custom model training
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-green-400 mr-3">✓</span>
                    API access
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-green-400 mr-3">✓</span>
                    24/7 dedicated support
                  </li>
                </ul>
                <button className="w-full bg-cyan-500 text-white py-3 rounded-lg font-semibold hover:bg-cyan-400 transition-colors">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-cyan-600 to-purple-700 py-20">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-white mb-6">Start Creating Amazing Images Today</h2>
            <p className="text-xl text-gray-200 mb-8">
              Join thousands of creators who are already using AI to bring their ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
                Generate Images Now
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-cyan-600 transition-colors">
                View Gallery
              </button>
            </div>
            <div className="mt-8 text-sm text-gray-200">
              <p>Contact: +1 302 464 0950 | kleber@ziontechgroup.com</p>
              <p>364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIImageGeneratorPage;