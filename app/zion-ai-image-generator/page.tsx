import React, { memo } from 'react'
import SEOHead from '../components/SEOHead'
const ZionAIImageGeneratorPage: React.FC = memo(() => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Zion AI Image Generator Pro",
    "description": "Advanced AI-powered image generation and editing platform for creating stunning visuals, artwork, and marketing materials",
    "url": "https://ziontechgroup.com/zion-ai-image-generator",
    "applicationCategory": "DesignApplication",
    "operatingSystem": "Web-based",
    "offers": {
      "@type": "Offer",
      "price": "39",
      "priceCurrency": "USD",
      "priceValidUntil": "2025-12-31"
    },
    "provider": {
      "@type": "Organization",
      "name": "Zion Tech Group",
      "url": "https://ziontechgroup.com"
    }
  }
  return (
    <>
      <SEOHead
        title="Zion AI Image Generator Pro - Create Stunning Images with AI"
        description="Generate professional images, artwork, and marketing materials with advanced AI technology. Text-to-image, style transfer, and custom training capabilities."
        keywords="AI image generator, text to image, AI art, image creation, marketing visuals, AI design"
        canonicalUrl="https://ziontechgroup.com/zion-ai-image-generator"
        structuredData={structuredData}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Zion AI Image Generator Pro
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Create stunning images, artwork, and marketing materials with advanced AI technology. 
              <span className="text-cyan-400 font-semibold"> From text to masterpiece in seconds.</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white px-10 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/30 hover:scale-105 transform">
                Start Creating
              </button>
              <button className="border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 px-10 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 hover:scale-105 transform">
                View Gallery
              </div>

          {/* Features Section */}
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Powerful AI Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 hover:scale-105 transform group">
                <div className="text-4xl mb-4 group-hover:animate-bounce">✨</div>
                <h3 className="text-2xl font-bold text-cyan-400 mb-4">Text-to-Image</h3>
                <p className="text-gray-300 leading-relaxed">
                  Generate stunning images from simple text descriptions using advanced AI models.
                </div>
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 hover:scale-105 transform group">
                <div className="text-4xl mb-4 group-hover:animate-bounce">🎨</div>
                <h3 className="text-2xl font-bold text-purple-400 mb-4">Style Transfer</h3>
                <p className="text-gray-300 leading-relaxed">
                  Apply artistic styles to your images or create unique artwork in any style.
                </div>
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-pink-500/20 hover:border-pink-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/20 hover:scale-105 transform group">
                <div className="text-4xl mb-4 group-hover:animate-bounce">🖼️</div>
                <h3 className="text-2xl font-bold text-pink-400 mb-4">Image Enhancement</h3>
                <p className="text-gray-300 leading-relaxed">
                  Upscale, enhance, and improve existing images with AI-powered algorithms.
                </div>
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/20 hover:scale-105 transform group">
                <div className="text-4xl mb-4 group-hover:animate-bounce">🎯</div>
                <h3 className="text-2xl font-bold text-orange-400 mb-4">Custom Training</h3>
                <p className="text-gray-300 leading-relaxed">
                  Train AI models on your specific style or brand for personalized results.
                </div>
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-green-500/20 hover:border-green-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/20 hover:scale-105 transform group">
                <div className="text-4xl mb-4 group-hover:animate-bounce">📱</div>
                <h3 className="text-2xl font-bold text-green-400 mb-4">Social Media Formats</h3>
                <p className="text-gray-300 leading-relaxed">
                  Generate images optimized for Instagram, Facebook, Twitter, and other platforms.
                </div>
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 hover:scale-105 transform group">
                <div className="text-4xl mb-4 group-hover:animate-bounce">🔧</div>
                <h3 className="text-2xl font-bold text-blue-400 mb-4">API Integration</h3>
                <p className="text-gray-300 leading-relaxed">
                  Integrate image generation into your applications with our powerful API.
                </div>

          {/* Use Cases Section */}
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Perfect For
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm p-6 rounded-xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20 hover:scale-105 transform group">
                <div className="text-3xl mb-3 group-hover:animate-pulse">📈</div>
                <h3 className="text-lg font-bold text-cyan-400 mb-2">Marketing Materials</h3>
                <p className="text-gray-300 text-sm">Create compelling visuals for campaigns and advertisements</div>
              <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20 hover:scale-105 transform group">
                <div className="text-3xl mb-3 group-hover:animate-pulse">🎨</div>
                <h3 className="text-lg font-bold text-purple-400 mb-2">Art & Design</h3>
                <p className="text-gray-300 text-sm">Generate unique artwork and creative designs</div>
              <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm p-6 rounded-xl border border-pink-500/20 hover:border-pink-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-pink-500/20 hover:scale-105 transform group">
                <div className="text-3xl mb-3 group-hover:animate-pulse">🛍️</div>
                <h3 className="text-lg font-bold text-pink-400 mb-2">E-commerce</h3>
                <p className="text-gray-300 text-sm">Create product mockups and lifestyle images</div>
              <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm p-6 rounded-xl border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/20 hover:scale-105 transform group">
                <div className="text-3xl mb-3 group-hover:animate-pulse">📱</div>
                <h3 className="text-lg font-bold text-orange-400 mb-2">Social Media</h3>
                <p className="text-gray-300 text-sm">Generate engaging content for all social platforms</div>

          {/* Pricing Section */}
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Simple Pricing
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-600/20 hover:border-cyan-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 hover:scale-105 transform">
                <h3 className="text-2xl font-bold text-cyan-400 mb-4">Basic</h3>
                <div className="text-4xl font-bold text-white mb-6">$39<span className="text-lg text-gray-400">/month</div>
                <ul className="space-y-3 mb-8">
                  <li className="text-gray-300 flex items-center"><span className="text-green-400 mr-2">✓</span> 1,000 images/month</li>
                  <li className="text-gray-300 flex items-center"><span className="text-green-400 mr-2">✓</span> HD resolution (1024x1024)</li>
                  <li className="text-gray-300 flex items-center"><span className="text-green-400 mr-2">✓</span> Basic styles</li>
                  <li className="text-gray-300 flex items-center"><span className="text-green-400 mr-2">✓</span> Email support</ul>
                <button className="w-full bg-cyan-500 hover:bg-cyan-400 text-white py-3 rounded-lg font-semibold transition-colors duration-300">
                  Get Started
                </div>
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/40 hover:border-purple-500/60 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/30 hover:scale-110 transform relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
                <h3 className="text-2xl font-bold text-purple-400 mb-4">Pro</h3>
                <div className="text-4xl font-bold text-white mb-6">$99<span className="text-lg text-gray-400">/month</div>
                <ul className="space-y-3 mb-8">
                  <li className="text-gray-300 flex items-center"><span className="text-green-400 mr-2">✓</span> 5,000 images/month</li>
                  <li className="text-gray-300 flex items-center"><span className="text-green-400 mr-2">✓</span> 4K resolution (4096x4096)</li>
                  <li className="text-gray-300 flex items-center"><span className="text-green-400 mr-2">✓</span> All styles & effects</li>
                  <li className="text-gray-300 flex items-center"><span className="text-green-400 mr-2">✓</span> Custom training</li>
                  <li className="text-gray-300 flex items-center"><span className="text-green-400 mr-2">✓</span> Priority support</ul>
                <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-white py-3 rounded-lg font-semibold transition-all duration-300">
                  Get Started
                </div>
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-pink-500/20 hover:border-pink-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/20 hover:scale-105 transform">
                <h3 className="text-2xl font-bold text-pink-400 mb-4">Enterprise</h3>
                <div className="text-4xl font-bold text-white mb-6">$299<span className="text-lg text-gray-400">/month</div>
                <ul className="space-y-3 mb-8">
                  <li className="text-gray-300 flex items-center"><span className="text-green-400 mr-2">✓</span> Unlimited images</li>
                  <li className="text-gray-300 flex items-center"><span className="text-green-400 mr-2">✓</span> 8K resolution (8192x8192)</li>
                  <li className="text-gray-300 flex items-center"><span className="text-green-400 mr-2">✓</span> API access</li>
                  <li className="text-gray-300 flex items-center"><span className="text-green-400 mr-2">✓</span> White-label options</li>
                  <li className="text-gray-300 flex items-center"><span className="text-green-400 mr-2">✓</span> 24/7 dedicated support</ul>
                <button className="w-full bg-pink-500 hover:bg-pink-400 text-white py-3 rounded-lg font-semibold transition-colors duration-300">
                  Contact Sales
                </div>

          {/* Contact Section */}
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Ready to Create?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Start generating stunning images with AI today. Contact our team to learn more about our image generation capabilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="mailto:kleber@ziontechgroup.com" className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white px-10 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/30 hover:scale-105 transform">
                Contact Us
              </a>
              <a href="tel:+13024640950" className="border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 px-10 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 hover:scale-105 transform">
                Call +1 302 464 0950
              </div>
            <p className="text-gray-400 mt-6">
              364 E Main St STE 1008, Middletown DE 19709
            </div>
    </>
  )
  })
ZionAIImageGeneratorPage.displayName = 'ZionAIImageGeneratorPage'
export default ZionAIImageGeneratorPage
                                                                                  </p>
                                                                                </a>
                                                                              </button>
                                                                            </li>
                                                                          </li>
                                                                        </li>
                                                                      </li>
                                                                    </li>
                                                                  </ul>
                                                                </button>
                                                              </li>
                                                            </li>
                                                          </li>
                                                        </li>
                                                      </li>
                                                    </ul>
                                                  </button>
                                                </li>
                                              </li>
                                            </li>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </p>
                                </p>
                              </p>
                            </p>
                          </div>
                        </div>
                      </p>
                    </p>
                  </p>
                </p>
              </p>
            </p>
          </div>
        </div>
      </button>
    </div>
  </div>
</div>