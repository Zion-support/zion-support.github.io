'use client';
import React, { useState } from 'react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

const AIContentGenerator: React.FC = () => {
  const [content, setContent] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = async () => {
    setIsGenerating(true);
    // Simulate AI content generation
    setTimeout(() => {
      setContent("Generated AI content would appear here...");
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text text-center">
            AI Content Generator
          </h1>
          <p className="text-xl text-gray-300 text-center mb-12">
            Generate high-quality content using advanced AI technology
          </p>

          <div className="cyber-card p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">Blog posts and articles</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">Social media content</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">Product descriptions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">Email marketing content</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                  <span className="text-gray-300">SEO-optimized content</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                  <span className="text-gray-300">Multiple languages</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                  <span className="text-gray-300">Tone customization</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                  <span className="text-gray-300">Plagiarism-free content</span>
                </div>
              </div>
            </div>
          </div>

          <div className="cyber-card p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">Try It Now</h2>
            <div className="space-y-4">
              <textarea
                className="w-full h-32 p-4 bg-gray-800 text-white rounded-lg border border-gray-600 focus:border-cyan-400 focus:outline-none"
                placeholder="Enter your content prompt here..."
              />
              <button
                onClick={handleGenerate}
                disabled={isGenerating}
                className="cyber-button w-full"
              >
                {isGenerating ? 'Generating...' : 'Generate Content'}
              </button>
              {content && (
                <div className="mt-4 p-4 bg-gray-800 rounded-lg">
                  <h3 className="text-white font-bold mb-2">Generated Content:</h3>
                  <p className="text-gray-300">{content}</p>
                </div>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="cyber-card p-6 text-center">
              <h3 className="text-xl font-bold text-white mb-4">Starter Plan</h3>
              <div className="text-3xl font-bold text-cyan-400 mb-4">$29/month</div>
              <ul className="text-gray-300 space-y-2">
                <li>10,000 words/month</li>
                <li>5 content types</li>
                <li>Basic templates</li>
                <li>Email support</li>
              </ul>
            </div>
            <div className="cyber-card p-6 text-center border-2 border-cyan-400">
              <h3 className="text-xl font-bold text-white mb-4">Professional</h3>
              <div className="text-3xl font-bold text-cyan-400 mb-4">$79/month</div>
              <ul className="text-gray-300 space-y-2">
                <li>50,000 words/month</li>
                <li>All content types</li>
                <li>Advanced templates</li>
                <li>Priority support</li>
                <li>API access</li>
              </ul>
            </div>
            <div className="cyber-card p-6 text-center">
              <h3 className="text-xl font-bold text-white mb-4">Enterprise</h3>
              <div className="text-3xl font-bold text-cyan-400 mb-4">$199/month</div>
              <ul className="text-gray-300 space-y-2">
                <li>Unlimited words</li>
                <li>Custom templates</li>
                <li>White-label option</li>
                <li>24/7 support</li>
                <li>Custom integrations</li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <a
              href="tel:+13024640950"
              className="cyber-button mr-4"
            >
              📞 Call: (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
            >
              Get Started
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AIContentGenerator;