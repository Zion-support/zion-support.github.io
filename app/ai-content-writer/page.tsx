'use client';
import React from 'react';
import { FileText, PenTool, Globe, BarChart, Zap, Users, Target, TrendingUp, Phone } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import PerformanceOptimizer from '../components/PerformanceOptimizer';
import AccessibilityEnhancer from '../components/AccessibilityEnhancer';
import SecurityEnhancer from '../components/SecurityEnhancer';
import Analytics from '../components/Analytics';

const AIContentWriterPage: React.FC = () => {
  const contentServices = [
    {
      title: 'Blog Writing',
      description: 'High-quality blog posts that engage readers and drive traffic',
      icon: FileText,
      price: '$79/month',
      features: ['SEO Optimized', 'Multiple Topics', 'Research Integration', 'Custom Tone'],
      color: 'text-blue-400'
    },
    {
      title: 'Social Media Content',
      description: 'Engaging social media posts for all platforms',
      icon: Globe,
      price: '$99/month',
      features: ['Platform Optimization', 'Hashtag Research', 'Visual Content', 'Scheduling'],
      color: 'text-purple-400'
    },
    {
      title: 'Email Marketing',
      description: 'Compelling email campaigns that convert',
      icon: PenTool,
      price: '$89/month',
      features: ['Subject Line Optimization', 'A/B Testing', 'Personalization', 'Analytics'],
      color: 'text-green-400'
    },
    {
      title: 'Product Descriptions',
      description: 'Persuasive product descriptions that sell',
      icon: Target,
      price: '$69/month',
      features: ['E-commerce Optimization', 'Keyword Integration', 'Conversion Focused', 'Bulk Generation'],
      color: 'text-orange-400'
    },
    {
      title: 'Website Content',
      description: 'Professional website copy that converts visitors',
      icon: BarChart,
      price: '$149/month',
      features: ['Landing Pages', 'About Pages', 'Service Descriptions', 'Call-to-Actions'],
      color: 'text-cyan-400'
    },
    {
      title: 'Technical Writing',
      description: 'Clear, concise technical documentation',
      icon: Zap,
      price: '$199/month',
      features: ['API Documentation', 'User Manuals', 'Technical Guides', 'Process Documentation'],
      color: 'text-yellow-400'
    },
    {
      title: 'Content Strategy',
      description: 'Comprehensive content marketing strategy',
      icon: Users,
      price: '$299/month',
      features: ['Content Calendar', 'Topic Research', 'Competitor Analysis', 'Performance Tracking'],
      color: 'text-pink-400'
    },
    {
      title: 'SEO Content',
      description: 'Search engine optimized content that ranks',
      icon: TrendingUp,
      price: '$179/month',
      features: ['Keyword Research', 'On-Page SEO', 'Content Optimization', 'Ranking Tracking'],
      color: 'text-red-400'
    }
  ];

  const contentTypes = [
    {
      type: 'Blog Posts',
      description: 'Long-form articles, how-to guides, and thought leadership pieces',
      count: 'Unlimited'
    },
    {
      type: 'Social Media',
      description: 'Posts for Facebook, Twitter, LinkedIn, Instagram, and TikTok',
      count: '500+ per month'
    },
    {
      type: 'Email Campaigns',
      description: 'Newsletters, promotional emails, and drip campaigns',
      count: '50+ per month'
    },
    {
      type: 'Product Content',
      description: 'Product descriptions, features, and benefits',
      count: '1000+ per month'
    },
    {
      type: 'Website Copy',
      description: 'Landing pages, about pages, and service descriptions',
      count: 'Unlimited'
    },
    {
      type: 'Technical Docs',
      description: 'API documentation, user guides, and manuals',
      count: 'Unlimited'
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="AI Content Writer Services - Zion Tech Group"
        description="Professional AI-powered content writing services including blog posts, social media content, email marketing, and SEO-optimized copy. Boost your content marketing with AI."
        keywords={['AI content writer', 'content writing', 'blog writing', 'social media content', 'email marketing', 'SEO content']}
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
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse">
              AI Content Writer
            </h1>
            <p className="text-xl text-cyan-400 mb-8 font-medium">
              Professional AI-Powered Content Creation
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
              Transform your content marketing with our AI-powered writing services. 
              From blog posts to social media content, we create engaging, SEO-optimized copy that drives results.
            </p>
          </section>

          {/* Content Types */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              Content Types We Create
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {contentTypes.map((content, index) => (
                <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                  <h3 className="text-xl font-bold text-cyan-400 mb-3">{content.type}</h3>
                  <p className="text-gray-300 mb-4 text-sm">{content.description}</p>
                  <div className="text-lg font-bold text-purple-400">{content.count}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Services Grid */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              Our Content Writing Services
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {contentServices.map((service, index) => (
                <article key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 text-center neon-text">{service.title}</h3>
                  <p className="text-gray-300 mb-4 text-center text-sm leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-xs text-gray-300">
                          <div className="w-2 h-2 bg-green-400 rounded-full mr-2 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="text-center">
                    <div className={`text-lg font-bold mb-2 neon-text ${service.color}`}>{service.price}</div>
                    <a 
                      href="/contact" 
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 ${service.color} border border-current hover:bg-current hover:text-slate-900`}
                    >
                      Get Started
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Process Section */}
          <section className="mb-16">
            <div className="cyber-card p-8">
              <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
                Our Content Creation Process
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">1</span>
                  </div>
                  <h3 className="text-lg font-semibold text-purple-400 mb-2">Research</h3>
                  <p className="text-gray-300 text-sm">We research your industry, competitors, and target audience to understand what content resonates.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">2</span>
                  </div>
                  <h3 className="text-lg font-semibold text-blue-400 mb-2">Strategy</h3>
                  <p className="text-gray-300 text-sm">We develop a content strategy that aligns with your business goals and SEO objectives.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">3</span>
                  </div>
                  <h3 className="text-lg font-semibold text-green-400 mb-2">Creation</h3>
                  <p className="text-gray-300 text-sm">Our AI creates high-quality, engaging content that matches your brand voice and style.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">4</span>
                  </div>
                  <h3 className="text-lg font-semibold text-orange-400 mb-2">Optimization</h3>
                  <p className="text-gray-300 text-sm">We optimize content for SEO, readability, and conversion to maximize its impact.</p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="cyber-card p-8 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">
                Ready to Transform Your Content Marketing?
              </h2>
              <p className="text-gray-300 mb-6 text-lg">
                Let our AI content writer help you create compelling, SEO-optimized content 
                that engages your audience and drives business growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                >
                  Start Creating Content
                </a>
                <a
                  href="tel:+13024640950"
                  className="flex items-center justify-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  +1 302 464 0950
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