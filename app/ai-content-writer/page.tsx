'use client';
import React from 'react';
import { FileText, PenTool, Zap, BarChart, Globe, Search, Target, Users } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import PerformanceOptimizer from '../components/PerformanceOptimizer';
import AccessibilityEnhancer from '../components/AccessibilityEnhancer';
import SecurityEnhancer from '../components/SecurityEnhancer';
import Analytics from '../components/Analytics';

const AIContentWriterPage: React.FC = () => {
  const features = [
    {
      title: 'Blog Writing',
      description: 'High-quality blog posts and articles on any topic',
      icon: FileText,
      benefits: ['SEO optimized', 'Engaging content', 'Multiple formats', 'Research-backed']
    },
    {
      title: 'Social Media Content',
      description: 'Captivating posts for all social media platforms',
      icon: Globe,
      benefits: ['Platform-specific', 'Trending topics', 'Hashtag optimization', 'Visual content']
    },
    {
      title: 'Email Marketing',
      description: 'Compelling email campaigns and newsletters',
      icon: Target,
      benefits: ['Personalized content', 'A/B testing', 'Subject line optimization', 'Call-to-action']
    },
    {
      title: 'Product Descriptions',
      description: 'Persuasive product descriptions and marketing copy',
      icon: PenTool,
      benefits: ['Sales-focused', 'Feature highlights', 'Benefit-driven', 'Conversion optimized']
    }
  ];

  const contentTypes = [
    {
      title: 'Blog Posts',
      description: 'Long-form articles and blog content',
      icon: FileText,
      impact: '10x faster content creation'
    },
    {
      title: 'Social Media',
      description: 'Posts, captions, and social content',
      icon: Globe,
      impact: '200% engagement increase'
    },
    {
      title: 'Email Campaigns',
      description: 'Newsletters and marketing emails',
      icon: Target,
      impact: '65% open rate increase'
    },
    {
      title: 'Website Content',
      description: 'Landing pages and web copy',
      icon: Search,
      impact: '40% conversion improvement'
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="AI Content Writer - Zion Tech Group"
        description="AI-powered content writing service for blogs, social media, email marketing, and web content. Generate high-quality, SEO-optimized content at scale."
        keywords={['AI content writer', 'content writing', 'blog writing', 'social media content', 'email marketing', 'content generation']}
        canonicalUrl="https://ziontechgroup.com/ai-content-writer"
      />
      <PerformanceOptimizer
        enableImageOptimization={true}
        enableLazyLoading={true}
        enableCodeSplitting={true}
        enablePrefetching={true}
      />
      <AccessibilityEnhancer
        enableKeyboardNavigation={true}
        enableScreenReader={true}
        enableHighContrast={true}
        enableFocusManagement={true}
      />
      <SecurityEnhancer
        enableCSP={true}
        enableHSTS={true}
        enableXSSProtection={true}
        enableClickjackingProtection={true}
      />
      <Analytics />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse">
              AI Content Writer
            </h1>
            <p className="text-xl md:text-2xl text-blue-400 mb-8 font-medium">
              Generate High-Quality Content at Scale
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Transform your content strategy with our AI-powered writing service. From blog posts 
              to social media content, we help you create engaging, SEO-optimized content that 
              drives traffic and conversions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
              >
                Get Content Consultation
              </a>
              <a
                href="tel:+13024640950"
                className="flex items-center justify-center gap-2 border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-slate-900 transition-all duration-300"
              >
                <span>+1 302 464 0950</span>
              </a>
            </div>
          </section>

          {/* Features Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text">
              Our Content Writing Capabilities
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="quantum-card p-6 energy-pulse hover:scale-105 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-3 neon-text">{feature.title}</h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">{feature.description}</p>
                      <ul className="space-y-2">
                        {feature.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                            <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 flex-shrink-0"></div>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Content Types Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text">
              Content Types We Create
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contentTypes.map((type, index) => (
                <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                    <type.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 neon-text">{type.title}</h3>
                  <p className="text-gray-300 text-sm mb-3 leading-relaxed">{type.description}</p>
                  <div className="text-blue-400 font-semibold text-sm">{type.impact}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Pricing Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text">
              Content Writing Pricing
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="cyber-card p-6 text-center">
                <h3 className="text-xl font-bold text-white mb-4 neon-text">Starter</h3>
                <div className="text-3xl font-bold text-blue-400 mb-4">$79<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-2 text-gray-300 mb-6">
                  <li>10 blog posts/month</li>
                  <li>20 social media posts</li>
                  <li>Basic SEO optimization</li>
                  <li>Email support</li>
                  <li>Standard quality</li>
                </ul>
                <a href="/contact" className="cyber-button px-6 py-3 text-sm font-medium transition-all duration-300 hover:scale-105">
                  Get Started
                </a>
              </div>
              
              <div className="cyber-card p-6 text-center ring-2 ring-blue-400">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-blue-400 text-slate-900 px-3 py-1 rounded-full text-xs font-semibold">
                    Popular
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 neon-text">Professional</h3>
                <div className="text-3xl font-bold text-blue-400 mb-4">$199<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-2 text-gray-300 mb-6">
                  <li>30 blog posts/month</li>
                  <li>50 social media posts</li>
                  <li>Advanced SEO optimization</li>
                  <li>Email marketing content</li>
                  <li>Priority support</li>
                  <li>Content strategy</li>
                </ul>
                <a href="/contact" className="cyber-button px-6 py-3 text-sm font-medium transition-all duration-300 hover:scale-105">
                  Get Started
                </a>
              </div>
              
              <div className="cyber-card p-6 text-center">
                <h3 className="text-xl font-bold text-white mb-4 neon-text">Enterprise</h3>
                <div className="text-3xl font-bold text-blue-400 mb-4">Custom</div>
                <ul className="space-y-2 text-gray-300 mb-6">
                  <li>Unlimited content</li>
                  <li>Custom content types</li>
                  <li>Brand voice training</li>
                  <li>Dedicated writer</li>
                  <li>Custom integrations</li>
                  <li>White-label solutions</li>
                </ul>
                <a href="/contact" className="cyber-button px-6 py-3 text-sm font-medium transition-all duration-300 hover:scale-105">
                  Contact Sales
                </a>
              </div>
            </div>
          </section>

          {/* Contact CTA */}
          <section className="text-center">
            <div className="cyber-card p-8 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">Ready to Scale Your Content?</h2>
              <p className="text-lg text-gray-300 mb-6">
                Let our AI content writer help you create engaging content that drives results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                >
                  Start Your Content Strategy
                </a>
                <a
                  href="tel:+13024640950"
                  className="flex items-center justify-center gap-2 border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-slate-900 transition-all duration-300"
                >
                  <span>+1 302 464 0950</span>
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