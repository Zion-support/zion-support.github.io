'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIContentStudioPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 holographic-text cyber-text glitch" data-text="AI Content Studio">
            AI Content Studio
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow neon-text">
            Complete Content Creation Suite
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
            Create, edit, and optimize content at scale with our AI-powered content studio. From blog posts to videos, we've got you covered.
          </p>
        </section>

        {/* Pricing Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Pricing Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="cyber-card hologram-card p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Creator</h3>
              <div className="text-4xl font-bold text-pink-400 mb-4">$99<span className="text-lg">/month</span></div>
              <ul className="text-gray-300 space-y-2 mb-6">
                <li>100 AI-generated articles/month</li>
                <li>50 AI images/month</li>
                <li>Basic video editing</li>
                <li>Social media templates</li>
                <li>Email support</li>
              </ul>
              <a href="tel:+13024640950" className="cyber-button w-full text-center">Get Started</a>
            </div>
            
            <div className="cyber-card hologram-card p-8 text-center border-2 border-pink-400">
              <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
              <div className="text-4xl font-bold text-pink-400 mb-4">$299<span className="text-lg">/month</span></div>
              <ul className="text-gray-300 space-y-2 mb-6">
                <li>500 AI-generated articles/month</li>
                <li>200 AI images/month</li>
                <li>Advanced video editing</li>
                <li>Custom brand voice</li>
                <li>Priority support</li>
                <li>Team collaboration</li>
              </ul>
              <a href="tel:+13024640950" className="cyber-button w-full text-center">Get Started</a>
            </div>
            
            <div className="cyber-card hologram-card p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-pink-400 mb-4">$599<span className="text-lg">/month</span></div>
              <ul className="text-gray-300 space-y-2 mb-6">
                <li>Unlimited content generation</li>
                <li>Unlimited AI images</li>
                <li>Professional video production</li>
                <li>Custom AI models</li>
                <li>24/7 support</li>
                <li>White-label solution</li>
              </ul>
              <a href="tel:+13024640950" className="cyber-button w-full text-center">Contact Sales</a>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Powerful Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="cyber-card hologram-card p-6">
              <div className="text-4xl mb-4">✍️</div>
              <h3 className="text-xl font-bold text-white mb-3">AI Writing Assistant</h3>
              <p className="text-gray-300">Generate high-quality blog posts, articles, and marketing copy in seconds.</p>
            </div>
            
            <div className="cyber-card hologram-card p-6">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-bold text-white mb-3">AI Image Generation</h3>
              <p className="text-gray-300">Create stunning visuals, graphics, and illustrations with AI-powered image generation.</p>
            </div>
            
            <div className="cyber-card hologram-card p-6">
              <div className="text-4xl mb-4">🎬</div>
              <h3 className="text-xl font-bold text-white mb-3">Video Creation</h3>
              <p className="text-gray-300">Produce professional videos with AI-generated scripts, voiceovers, and editing.</p>
            </div>
            
            <div className="cyber-card hologram-card p-6">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-bold text-white mb-3">Social Media Automation</h3>
              <p className="text-gray-300">Automatically create and schedule posts across all social media platforms.</p>
            </div>
            
            <div className="cyber-card hologram-card p-6">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-white mb-3">SEO Optimization</h3>
              <p className="text-gray-300">Optimize content for search engines with AI-powered keyword research and optimization.</p>
            </div>
            
            <div className="cyber-card hologram-card p-6">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-white mb-3">Performance Analytics</h3>
              <p className="text-gray-300">Track content performance and get insights to improve your content strategy.</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-white mb-8 neon-text">Start Creating Amazing Content</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of creators who are already using AI to produce better content faster.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+13024640950" className="cyber-button">
              📞 Call: (302) 464-0950
            </a>
            <a href="mailto:kleber@ziontechgroup.com" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300">
              📧 Email Us
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AIContentStudioPage;