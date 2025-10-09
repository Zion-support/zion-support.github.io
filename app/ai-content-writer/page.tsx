'use client';
import React from 'react';
import { FileText, PenTool, BarChart, Zap, Search, Target } from 'lucide-react';
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
      description: 'High-quality blog posts that engage readers and drive traffic to your website',
      icon: FileText,
      features: ['SEO Optimized', 'Engaging Content', 'Research-based', 'Brand Voice'],
      benefits: ['10x content output', 'Higher engagement', 'Better SEO rankings']
    },
    {
      title: 'Social Media Content',
      description: 'Compelling social media posts that boost engagement and brand awareness',
      icon: PenTool,
      features: ['Platform-specific', 'Trending Topics', 'Visual Content', 'Hashtag Optimization'],
      benefits: ['200% engagement increase', 'Consistent posting', 'Brand awareness']
    },
    {
      title: 'Product Descriptions',
      description: 'Persuasive product descriptions that convert visitors into customers',
      icon: Target,
      features: ['Compelling Copy', 'Feature Benefits', 'Call-to-Action', 'SEO Optimized'],
      benefits: ['Higher conversion rates', 'Better product understanding', 'Increased sales']
    },
    {
      title: 'Email Marketing',
      description: 'Personalized email campaigns that nurture leads and drive conversions',
      icon: Zap,
      features: ['Personalization', 'A/B Testing', 'Segmentation', 'Automation'],
      benefits: ['65% open rate increase', '40% revenue growth', 'Better engagement']
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="AI Content Writer - Zion Tech Group"
        description="AI-powered content writing services for blogs, social media, product descriptions, and email marketing. Generate high-quality content at scale with our AI content writer."
        keywords={['AI content writer', 'content writing', 'blog writing', 'social media content', 'product descriptions', 'email marketing']}
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
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-yellow-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse">
              AI Content Writer
            </h1>
            <p className="text-xl text-cyan-400 mb-8 font-medium">
              Generate High-Quality Content at Scale
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
              Our AI content writer creates engaging, SEO-optimized content for blogs, social media, 
              product descriptions, and email marketing that drives engagement and conversions.
            </p>
          </section>

          {/* Content Services Grid */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {contentServices.map((service, index) => (
                <article key={index} className="cyber-card p-8 hover:scale-105 transition-all duration-300">
                  <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                    <service.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 text-center neon-text">{service.title}</h3>
                  <p className="text-gray-300 mb-6 text-center text-lg leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-yellow-400 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <div className="w-2 h-2 bg-green-400 rounded-full mr-3 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-orange-400 mb-3">Business Benefits:</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-gray-300">
                          <div className="w-2 h-2 bg-orange-400 rounded-full mr-3 flex-shrink-0"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Contact CTA */}
          <section className="text-center">
            <div className="cyber-card p-8 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">Ready to Scale Your Content Creation?</h2>
              <p className="text-lg text-gray-300 mb-8">
                Let our AI content writer help you create engaging, high-quality content that drives results for your business.
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