import React, { useState } from 'react';
import SEOHead from '../components/SEOHead';
import { SparklesIcon, DocumentTextIcon, GlobeAltIcon, LanguageIcon } from '@heroicons/react/24/outline';

const AIContentGeneratorPage: React.FC = () => {
  const [contentType, setContentType] = useState('');
  const [topic, setTopic] = useState('');
  const [tone, setTone] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedContent, setGeneratedContent] = useState('');

  const handleGenerate = async () => {
    setIsGenerating(true);
    // Simulate content generation
    await new Promise(resolve => setTimeout(resolve, 2000));
    setGeneratedContent(`Here's your ${contentType} about ${topic} with a ${tone} tone:

[Generated content would appear here]

This content has been optimized for SEO and is ready to use across your marketing channels.`);
    setIsGenerating(false);
  };

  return (
    <>
      <SEOHead 
        title="AI Content Generator Pro - Zion Tech Group"
        description="Generate high-quality content for blogs, social media, and marketing materials using advanced AI. Unlimited content generation with SEO optimization."
      />
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/30 via-slate-900 to-blue-900/30"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                AI Content Generator Pro
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Generate high-quality content for blogs, social media, and marketing materials using advanced AI. 
                Save time and create engaging content that drives results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Start Free Trial
                </button>
                <button className="border-2 border-cyan-400 text-cyan-300 hover:bg-cyan-400 hover:text-white font-bold py-3 px-8 rounded-lg transition-all duration-300">
                  View Pricing
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Content Generator */}
        <section className="py-16 bg-slate-800/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-slate-800 p-8 rounded-xl">
              <h2 className="text-2xl font-bold mb-6 text-center">Generate Your Content</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Content Type</label>
                  <select
                    value={contentType}
                    onChange={(e) => setContentType(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  >
                    <option value="">Select content type</option>
                    <option value="blog-post">Blog Post</option>
                    <option value="social-media">Social Media Post</option>
                    <option value="email">Email Campaign</option>
                    <option value="product-description">Product Description</option>
                    <option value="ad-copy">Ad Copy</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Topic</label>
                  <input
                    type="text"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    placeholder="Enter your topic or keyword"
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Tone</label>
                  <select
                    value={tone}
                    onChange={(e) => setTone(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  >
                    <option value="">Select tone</option>
                    <option value="professional">Professional</option>
                    <option value="casual">Casual</option>
                    <option value="friendly">Friendly</option>
                    <option value="authoritative">Authoritative</option>
                    <option value="conversational">Conversational</option>
                  </select>
                </div>

                <button
                  onClick={handleGenerate}
                  disabled={!contentType || !topic || !tone || isGenerating}
                  className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
                >
                  {isGenerating ? 'Generating...' : 'Generate Content'}
                </button>

                {generatedContent && (
                  <div className="mt-6 p-4 bg-slate-700 rounded-lg">
                    <h3 className="text-lg font-semibold mb-3">Generated Content:</h3>
                    <p className="text-gray-300 whitespace-pre-line">{generatedContent}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Why Choose Our AI Content Generator?
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Our advanced AI technology creates high-quality content that engages your audience and drives results.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <SparklesIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Unlimited Generation</h3>
                <p className="text-gray-300">Generate as much content as you need without limits.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <DocumentTextIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">SEO Optimized</h3>
                <p className="text-gray-300">All content is optimized for search engines and readability.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <LanguageIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Multi-language</h3>
                <p className="text-gray-300">Generate content in multiple languages for global reach.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <GlobeAltIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Brand Voice</h3>
                <p className="text-gray-300">Maintain consistent brand voice across all content.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-16 bg-slate-800/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Simple Pricing</h2>
              <p className="text-lg text-gray-300">Choose the plan that fits your content needs.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-slate-800 p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4">Starter</h3>
                <div className="text-4xl font-bold mb-6">$29<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <span className="text-cyan-400 mr-3">✓</span>
                    <span>1,000 content generations</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-cyan-400 mr-3">✓</span>
                    <span>Basic templates</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-cyan-400 mr-3">✓</span>
                    <span>Email support</span>
                  </li>
                </ul>
                <button className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300">
                  Get Started
                </button>
              </div>

              <div className="bg-slate-800 p-8 rounded-xl border-2 border-cyan-500 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Pro</h3>
                <div className="text-4xl font-bold mb-6">$199<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <span className="text-cyan-400 mr-3">✓</span>
                    <span>Unlimited content generations</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-cyan-400 mr-3">✓</span>
                    <span>Advanced templates</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-cyan-400 mr-3">✓</span>
                    <span>SEO optimization</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-cyan-400 mr-3">✓</span>
                    <span>Multi-language support</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-cyan-400 mr-3">✓</span>
                    <span>Priority support</span>
                  </li>
                </ul>
                <button className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300">
                  Start Free Trial
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIContentGeneratorPage;
