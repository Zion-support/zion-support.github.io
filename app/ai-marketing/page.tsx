'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIMarketingPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Marketing Solutions - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered marketing automation, ad optimization, and content generation. Transform your marketing with cutting-edge AI technology." />
        <meta name="keywords" content="AI marketing, marketing automation, AI advertising, content generation, marketing AI" />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
              AI Marketing Solutions
            </h1>
            <p className="text-xl text-cyan-400 mb-8">
              Revolutionize your marketing with AI-powered automation and optimization
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Transform Your Marketing Strategy</h2>
              <p className="text-gray-300 mb-6 text-lg">
                Our AI marketing solutions leverage advanced machine learning algorithms to optimize your campaigns, 
                generate compelling content, and maximize ROI across all channels.
              </p>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-center">
                  <span className="text-cyan-400 mr-3">✓</span>
                  Automated campaign optimization
                </li>
                <li className="flex items-center">
                  <span className="text-cyan-400 mr-3">✓</span>
                  AI-generated content creation
                </li>
                <li className="flex items-center">
                  <span className="text-cyan-400 mr-3">✓</span>
                  Predictive audience targeting
                </li>
                <li className="flex items-center">
                  <span className="text-cyan-400 mr-3">✓</span>
                  Real-time performance analytics
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-white mb-4">Key Features</h3>
              <div className="space-y-4">
                <div className="bg-white/10 p-4 rounded-lg">
                  <h4 className="text-lg font-semibold text-cyan-400 mb-2">Smart Ad Optimization</h4>
                  <p className="text-gray-300">AI continuously optimizes your ad spend and targeting for maximum ROI</p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <h4 className="text-lg font-semibold text-cyan-400 mb-2">Content Generation</h4>
                  <p className="text-gray-300">Generate high-quality marketing content at scale</p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <h4 className="text-lg font-semibold text-cyan-400 mb-2">Customer Insights</h4>
                  <p className="text-gray-300">Deep analytics to understand and predict customer behavior</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Ready to Transform Your Marketing?</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
              >
                Get Started Today
              </a>
              <a
                href="/pricing"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                View Pricing
              </a>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default AIMarketingPage;