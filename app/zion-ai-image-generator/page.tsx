import React from 'react';
import SEOHead from '../components/SEOHead';

const ZionAIImageGeneratorPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Zion AI Image Generator - Create Stunning Visuals with AI"
        description="Generate high-quality images, artwork, and graphics using advanced AI. Perfect for marketing, design, social media, and creative projects. Multiple styles and formats supported."
        keywords="AI image generator, AI art, image creation, graphic design, marketing visuals, social media images, AI artwork, creative AI, visual content"
        canonicalUrl="https://ziontechgroup.com/zion-ai-image-generator"
      />
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Zion AI Image Generator</h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Create stunning, professional-quality images and artwork in seconds using advanced AI technology. Perfect for marketing, design, and creative projects.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#demo" 
                  className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Try Free Generator
                </a>
                <a 
                  href="/contact?service=zion-ai-image-generator" 
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Powerful AI Image Generation</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Transform your creative ideas into stunning visuals with our advanced AI image generation technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Multiple Art Styles</h3>
              <p className="text-gray-600 mb-4">
                Generate images in various artistic styles including photorealistic, cartoon, watercolor, oil painting, digital art, and more.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Photorealistic images</li>
                <li>• Artistic styles (oil, watercolor)</li>
                <li>• Digital art and illustrations</li>
                <li>• Cartoon and anime styles</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">📐</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Custom Dimensions</h3>
              <p className="text-gray-600 mb-4">
                Create images in any size you need - from social media posts to large format prints. Support for all standard aspect ratios.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Social media formats (1:1, 16:9)</li>
                <li>• Print-ready resolutions</li>
                <li>• Custom dimensions</li>
                <li>• High-resolution output</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Smart Prompting</h3>
              <p className="text-gray-600 mb-4">
                Advanced natural language processing understands complex descriptions and generates exactly what you envision.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Natural language descriptions</li>
                <li>• Style and mood specifications</li>
                <li>• Color palette control</li>
                <li>• Composition guidance</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Image Variations</h3>
              <p className="text-gray-600 mb-4">
                Generate multiple variations of the same concept. Perfect for A/B testing, exploring different creative directions, or finding the perfect image.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Multiple variations per prompt</li>
                <li>• Style consistency options</li>
                <li>• Batch generation</li>
                <li>• Iterative refinement</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🎭</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Character & Portrait</h3>
              <p className="text-gray-600 mb-4">
                Create realistic portraits, character designs, and human figures with consistent facial features and expressions.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Realistic human portraits</li>
                <li>• Character design</li>
                <li>• Facial expression control</li>
                <li>• Age and gender specification</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Business Graphics</h3>
              <p className="text-gray-600 mb-4">
                Generate professional business graphics, infographics, presentations, and marketing materials with AI precision.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Infographics and charts</li>
                <li>• Presentation graphics</li>
                <li>• Marketing materials</li>
                <li>• Logo concepts</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Perfect For Every Creative Need</h2>
              <p className="text-lg text-gray-600">From marketing to art, our AI image generator serves every creative purpose</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6">
                <div className="text-4xl mb-4">📱</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Social Media</h3>
                <p className="text-gray-600 text-sm">Create engaging posts, stories, and ads for all social platforms</p>
              </div>
              <div className="text-center p-6">
                <div className="text-4xl mb-4">🛍️</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">E-commerce</h3>
                <p className="text-gray-600 text-sm">Generate product images, lifestyle shots, and marketing visuals</p>
              </div>
              <div className="text-center p-6">
                <div className="text-4xl mb-4">📚</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Content Creation</h3>
                <p className="text-gray-600 text-sm">Blog headers, article images, and educational graphics</p>
              </div>
              <div className="text-center p-6">
                <div className="text-4xl mb-4">🎨</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Art & Design</h3>
                <p className="text-gray-600 text-sm">Personal artwork, digital illustrations, and creative projects</p>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Simple, Affordable Pricing</h2>
              <p className="text-lg text-gray-600">Choose the plan that fits your creative needs</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Creator</h3>
                <div className="text-4xl font-bold text-purple-600 mb-2">$19</div>
                <div className="text-gray-600 mb-6">per month</div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>100 images per month</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Standard resolution (1024x1024)</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>5 art styles</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Email support</span>
                  </li>
                </ul>
                <a 
                  href="/contact?service=zion-ai-image-generator&plan=creator" 
                  className="w-full bg-purple-600 text-white text-center py-3 px-4 rounded-lg hover:bg-purple-700 transition-colors block"
                >
                  Start Free Trial
                </a>
              </div>

              <div className="bg-purple-600 text-white p-8 rounded-xl relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Professional</h3>
                <div className="text-4xl font-bold mb-2">$49</div>
                <div className="text-purple-100 mb-6">per month</div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <span className="text-green-400 mr-3">✓</span>
                    <span>500 images per month</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-3">✓</span>
                    <span>High resolution (2048x2048)</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-3">✓</span>
                    <span>All art styles</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-3">✓</span>
                    <span>Commercial license</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-3">✓</span>
                    <span>Priority support</span>
                  </li>
                </ul>
                <a 
                  href="/contact?service=zion-ai-image-generator&plan=professional" 
                  className="w-full bg-white text-purple-600 text-center py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors block"
                >
                  Start Free Trial
                </a>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise</h3>
                <div className="text-4xl font-bold text-purple-600 mb-2">$149</div>
                <div className="text-gray-600 mb-6">per month</div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Unlimited images</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Ultra high resolution (4K)</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Custom model training</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>API access</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>24/7 dedicated support</span>
                  </li>
                </ul>
                <a 
                  href="/contact?service=zion-ai-image-generator&plan=enterprise" 
                  className="w-full bg-purple-600 text-white text-center py-3 px-4 rounded-lg hover:bg-purple-700 transition-colors block"
                >
                  Contact Sales
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Demo Section */}
        <div id="demo" className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Try Our AI Image Generator</h2>
              <p className="text-lg text-gray-600">Experience the power of AI image generation with our interactive demo</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Describe Your Image</h3>
                  <p className="text-gray-600 mb-6">
                    Enter a detailed description of the image you want to create. Be specific about style, colors, composition, and mood.
                  </p>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Image Description:</label>
                      <textarea 
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        rows={4}
                        placeholder="e.g., A futuristic cityscape at sunset with flying cars, neon lights, and a cyberpunk aesthetic, highly detailed, 4K resolution"
                      ></textarea>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Style:</label>
                        <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500">
                          <option>Photorealistic</option>
                          <option>Digital Art</option>
                          <option>Oil Painting</option>
                          <option>Watercolor</option>
                          <option>Anime</option>
                          <option>Cartoon</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Aspect Ratio:</label>
                        <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500">
                          <option>Square (1:1)</option>
                          <option>Portrait (3:4)</option>
                          <option>Landscape (16:9)</option>
                          <option>Wide (21:9)</option>
                        </select>
                      </div>
                    </div>
                    <button className="w-full bg-purple-600 text-white py-3 px-4 rounded-lg hover:bg-purple-700 transition-colors">
                      Generate Image
                    </button>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Generated Image</h3>
                  <div className="bg-gray-200 rounded-lg h-80 flex items-center justify-center border-2 border-dashed border-gray-300">
                    <div className="text-center">
                      <div className="text-4xl mb-2">🎨</div>
                      <p className="text-gray-500">Your AI-generated image will appear here</p>
                    </div>
                  </div>
                  <div className="mt-4 flex gap-2">
                    <button className="flex-1 bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition-colors">
                      Download
                    </button>
                    <button className="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors">
                      Generate Variation
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-4">Ready to Create Amazing Images?</h2>
            <p className="text-xl mb-8">
              Join thousands of creators, marketers, and designers who are already using AI to bring their visions to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact?service=zion-ai-image-generator" 
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Start Creating Free
              </a>
              <a 
                href="tel:+13024640950" 
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                Call +1 302 464 0950
              </a>
            </div>
            <div className="mt-8 text-sm">
              <p>Email: kleber@ziontechgroup.com</p>
              <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ZionAIImageGeneratorPage;