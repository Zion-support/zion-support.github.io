'use client';
import React from 'react';
import { FileText, PenTool, Zap, BarChart, Globe, Target, Brain, Settings } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const AIContentWriterPage: React.FC = () => {
  const contentServices = [
    {
      title: 'Blog Writing',
      description: 'AI-powered blog posts that engage readers and drive traffic',
      icon: FileText,
      features: ['SEO Optimized', 'Engaging Content', 'Multiple Formats', 'Brand Voice Consistency']
    },
    {
      title: 'Social Media Content',
      description: 'Compelling social media posts for all major platforms',
      icon: Globe,
      features: ['Platform-Specific', 'Trending Topics', 'Hashtag Optimization', 'Visual Content Ideas']
    },
    {
      title: 'Email Marketing',
      description: 'Persuasive email campaigns that convert subscribers into customers',
      icon: Target,
      features: ['Subject Line Optimization', 'Personalization', 'A/B Testing', 'Conversion Focused']
    },
    {
      title: 'Product Descriptions',
      description: 'Compelling product descriptions that drive sales and conversions',
      icon: BarChart,
      features: ['Sales-Focused', 'Feature Highlighting', 'Benefit Emphasis', 'Call-to-Action']
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="AI Content Writer - Zion Tech Group"
        description="AI-powered content writing services for blogs, social media, email marketing, and product descriptions. Create engaging content that drives results."
        keywords={['AI content writer', 'content writing', 'blog writing', 'social media content', 'email marketing', 'content creation']}
        canonicalUrl="https://ziontechgroup.com/ai-content-writer"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse">
              AI Content Writer
            </h1>
            <p className="text-xl text-blue-400 mb-8 font-medium">
              Create Engaging Content with AI
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
              Transform your content strategy with AI-powered writing that engages audiences, 
              drives traffic, and converts readers into customers. From blogs to social media, 
              we create content that works.
            </p>
          </section>

          {/* Content Services Grid */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {contentServices.map((service, index) => (
                <article key={index} className="cyber-card p-8 hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 neon-text">{service.title}</h3>
                  <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-blue-400 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <div className="w-2 h-2 bg-green-400 rounded-full mr-3 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Benefits Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Why Choose Our AI Content Writer?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl mb-4">✍️</div>
                <h3 className="text-xl font-bold text-white mb-3">High-Quality Content</h3>
                <p className="text-gray-300">AI-generated content that reads naturally and engages your target audience effectively.</p>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-bold text-white mb-3">Fast Turnaround</h3>
                <p className="text-gray-300">Generate high-quality content in minutes, not hours, to keep up with your content calendar.</p>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-4xl mb-4">📈</div>
                <h3 className="text-xl font-bold text-white mb-3">SEO Optimized</h3>
                <p className="text-gray-300">Content that ranks well in search engines and drives organic traffic to your website.</p>
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Simple, Transparent Pricing</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="cyber-card p-6 text-center">
                <h3 className="text-xl font-bold text-white mb-4">Starter</h3>
                <div className="text-3xl font-bold text-blue-400 mb-4">$79/month</div>
                <ul className="space-y-2 text-gray-300 mb-6">
                  <li>50 blog posts/month</li>
                  <li>100 social media posts</li>
                  <li>25 email campaigns</li>
                  <li>Basic SEO optimization</li>
                </ul>
                <a href="/contact" className="cyber-button px-6 py-3 text-sm font-medium">
                  Get Started
                </a>
              </div>
              <div className="cyber-card p-6 text-center ring-2 ring-blue-400">
                <h3 className="text-xl font-bold text-white mb-4">Professional</h3>
                <div className="text-3xl font-bold text-blue-400 mb-4">$149/month</div>
                <ul className="space-y-2 text-gray-300 mb-6">
                  <li>150 blog posts/month</li>
                  <li>300 social media posts</li>
                  <li>75 email campaigns</li>
                  <li>Advanced SEO optimization</li>
                  <li>Content strategy consultation</li>
                </ul>
                <a href="/contact" className="cyber-button px-6 py-3 text-sm font-medium">
                  Get Started
                </a>
              </div>
              <div className="cyber-card p-6 text-center">
                <h3 className="text-xl font-bold text-white mb-4">Enterprise</h3>
                <div className="text-3xl font-bold text-blue-400 mb-4">$299/month</div>
                <ul className="space-y-2 text-gray-300 mb-6">
                  <li>Unlimited content</li>
                  <li>Custom content types</li>
                  <li>Brand voice training</li>
                  <li>Priority support</li>
                  <li>Dedicated account manager</li>
                </ul>
                <a href="/contact" className="cyber-button px-6 py-3 text-sm font-medium">
                  Get Started
                </a>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="cyber-card p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4 neon-text">Ready to Transform Your Content Strategy?</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Let our AI content writer help you create engaging content that drives results. 
              Get a free content audit and discover how we can improve your content performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
              >
                Get Free Content Audit
              </a>
              <a
                href="tel:+13024640950"
                className="flex items-center justify-center gap-2 border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-slate-900 transition-all duration-300"
              >
                Call +1 302 464 0950
              </a>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default AIContentWriterPage;