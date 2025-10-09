'use client';
import React from 'react';
import { FileText, PenTool, Zap, Target, BarChart, Globe } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const AIContentWriterPage: React.FC = () => {
  return (
    <>
      <SEOOptimizer
        title="AI Content Writer - Zion Tech Group"
        description="AI-powered content writing service for blogs, social media, product descriptions, and SEO optimization. Generate high-quality content at scale with artificial intelligence."
        keywords={['AI content writer', 'content generation', 'blog writing', 'social media content', 'SEO content', 'automated writing']}
        canonicalUrl="https://ziontechgroup.com/ai-content-writer"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse">
              AI Content Writer
            </h1>
            <p className="text-xl text-orange-400 mb-8 font-medium">
              Intelligent Content Generation
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
              Generate high-quality content at scale with our AI-powered writing assistant. 
              From blog posts to social media content, create engaging content that drives results.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Content Capabilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <FileText className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Blog Writing</h3>
                <p className="text-gray-300">SEO-optimized blog posts and articles</p>
              </div>
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <Globe className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Social Media</h3>
                <p className="text-gray-300">Engaging social media content and posts</p>
              </div>
              <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <Target className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">SEO Optimization</h3>
                <p className="text-gray-300">Content optimized for search engines</p>
              </div>
            </div>
          </section>

          <section className="text-center">
            <div className="cyber-card p-8">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">Ready to Scale Your Content?</h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Contact our content experts today to discuss how AI can transform your content strategy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300">
                  Get Started Today
                </a>
                <a href="tel:+13024640950" className="flex items-center justify-center gap-2 border-2 border-orange-400 text-orange-400 px-8 py-4 rounded-lg font-semibold hover:bg-orange-400 hover:text-slate-900 transition-all duration-300">
                  Call +1 302 464 0950
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default AIContentWriterPage;