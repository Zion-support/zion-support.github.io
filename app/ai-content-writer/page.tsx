'use client';
import React from 'react';
import { FileText, PenTool, Search, Zap, Target, TrendingUp, Users, Award } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const AIContentWriterPage: React.FC = () => {
  const features = [
    {
      title: 'Blog Posts & Articles',
      description: 'Generate high-quality, SEO-optimized blog posts and articles',
      icon: FileText,
      benefits: ['SEO optimized', 'Engaging content', 'Multiple formats']
    },
    {
      title: 'Social Media Content',
      description: 'Create compelling social media posts for all platforms',
      icon: Users,
      benefits: ['Platform-specific', 'Trend-aware', 'Engagement-focused']
    },
    {
      title: 'Product Descriptions',
      description: 'Write persuasive product descriptions that convert',
      icon: Target,
      benefits: ['Conversion-focused', 'Brand voice', 'Compelling copy']
    },
    {
      title: 'Email Campaigns',
      description: 'Craft effective email marketing campaigns',
      icon: PenTool,
      benefits: ['Personalized', 'A/B tested', 'High open rates']
    },
    {
      title: 'SEO Content',
      description: 'Create content optimized for search engines',
      icon: Search,
      benefits: ['Keyword optimized', 'High rankings', 'Organic traffic']
    },
    {
      title: 'Marketing Copy',
      description: 'Generate persuasive marketing materials',
      icon: TrendingUp,
      benefits: ['Conversion-focused', 'Brand consistent', 'Compelling']
    }
  ];

  const benefits = [
    { metric: '10x', description: 'Content Output Increase' },
    { metric: '65%', description: 'Time Savings' },
    { metric: '40%', description: 'Higher Engagement' },
    { metric: '85%', description: 'SEO Score Improvement' }
  ];

  return (
    <>
      <SEOOptimizer
        title="AI Content Writer - Zion Tech Group"
        description="Generate high-quality content with our AI-powered writing assistant. Blog posts, social media, product descriptions, and more. Boost your content marketing with AI."
        keywords={['AI content writer', 'content generation', 'blog writing', 'social media content', 'SEO content', 'marketing copy']}
        canonicalUrl="https://ziontechgroup.com/ai-content-writer"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              AI Content Writer
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Generate high-quality, engaging content at scale with our AI-powered writing assistant. 
              From blog posts to social media, create content that converts and engages your audience.
            </p>
            <div className="text-2xl font-bold text-cyan-400 mb-4">$79/month</div>
            <p className="text-gray-300">Starting price for unlimited content generation</p>
          </section>

          {/* Features Grid */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Content Types</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 text-center">{feature.title}</h3>
                  <p className="text-gray-300 mb-4 text-center text-sm leading-relaxed">
                    {feature.description}
                  </p>
                  <ul className="space-y-1">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-xs text-gray-300">
                        <div className="w-1 h-1 bg-cyan-400 rounded-full mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Benefits Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Proven Results</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{benefit.metric}</div>
                  <div className="text-gray-300 text-sm">{benefit.description}</div>
                </div>
              ))}
            </div>
          </section>

          {/* How It Works */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Describe Your Needs</h3>
                <p className="text-gray-300">Tell our AI what type of content you need, your target audience, and key points to cover.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">AI Generates Content</h3>
                <p className="text-gray-300">Our advanced AI creates high-quality, engaging content tailored to your specifications.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Review & Publish</h3>
                <p className="text-gray-300">Review the generated content, make any necessary edits, and publish across your channels.</p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="cyber-card p-8">
              <h2 className="text-3xl font-bold text-white mb-4">Start Creating Amazing Content Today</h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Join thousands of businesses using our AI Content Writer to create engaging, 
                high-converting content at scale. No more writer's block or content delays.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                >
                  Get Started Now
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