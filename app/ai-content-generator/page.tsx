import React from 'react';
import { Helmet } from 'react-helmet-async';

const AIContentGeneratorPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Content Generator Pro - Zion Tech Group | Advanced Content Creation</title>
        <meta name="description" content="Create high-quality content with our AI Content Generator Pro. Multi-format content, language translation, SEO optimization, and brand voice matching." />
        <meta name="keywords" content="AI content generator, content creation, SEO optimization, brand voice, multi-language content, automated writing" />
      </Helmet>
      
      <div className="min-h-screen relative overflow-hidden">
        {/* Animated Background */}
        <div className="cyber-bg"></div>
        <div className="neon-grid"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="text-6xl mb-6">✍️</div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 holographic">
              AI Content Generator Pro
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Create high-quality, SEO-optimized content at scale with our advanced AI content generation platform. 
              From blog posts to social media, marketing copy to technical documentation.
            </p>
          </div>

          {/* Features Section */}
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 neon-text">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
              Everything you need to create compelling content that engages your audience and drives results.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: '📝',
                  title: 'Multi-Format Content',
                  description: 'Blog posts, articles, social media posts, emails, ads, and more'
                },
                {
                  icon: '🌍',
                  title: 'Language Translation',
                  description: 'Generate content in 50+ languages with native-level quality'
                },
                {
                  icon: '🔍',
                  title: 'SEO Optimization',
                  description: 'Built-in SEO optimization for better search engine rankings'
                },
                {
                  icon: '🎯',
                  title: 'Brand Voice Matching',
                  description: 'Maintain consistent brand voice across all content'
                },
                {
                  icon: '📋',
                  title: 'Content Templates',
                  description: 'Pre-built templates for various content types and industries'
                },
                {
                  icon: '✅',
                  title: 'Plagiarism Detection',
                  description: 'Built-in plagiarism checker to ensure original content'
                },
                {
                  icon: '⚡',
                  title: 'Bulk Generation',
                  description: 'Generate hundreds of pieces of content in minutes'
                },
                {
                  icon: '🔌',
                  title: 'API Access',
                  description: 'Integrate with your existing tools and workflows'
                }
              ].map((feature, index) => (
                <div key={index} className="futuristic-card group">
                  <div className="text-4xl mb-4 text-center">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-3 neon-text text-center">{feature.title}</h3>
                  <p className="text-gray-300 text-center leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing Section */}
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 neon-text-green">
              Simple Pricing
            </h2>
            <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
              Choose the plan that fits your content creation needs
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  name: 'Basic',
                  price: '$29',
                  period: '/month',
                  description: 'Perfect for individuals and small teams',
                  features: [
                    '10,000 words/month',
                    '5 content formats',
                    'Basic SEO optimization',
                    'Email support',
                    '5 brand voices'
                  ],
                  button: 'Start Free Trial',
                  popular: false
                },
                {
                  name: 'Pro',
                  price: '$79',
                  period: '/month',
                  description: 'Ideal for growing businesses',
                  features: [
                    '50,000 words/month',
                    'All content formats',
                    'Advanced SEO optimization',
                    'Priority support',
                    'Unlimited brand voices',
                    'API access',
                    'Bulk generation'
                  ],
                  button: 'Start Free Trial',
                  popular: true
                },
                {
                  name: 'Enterprise',
                  price: '$199',
                  period: '/month',
                  description: 'For large organizations',
                  features: [
                    'Unlimited words',
                    'All features included',
                    'Custom integrations',
                    'Dedicated support',
                    'White-label options',
                    'Custom training',
                    'SLA guarantee'
                  ],
                  button: 'Contact Sales',
                  popular: false
                }
              ].map((plan, index) => (
                <div key={index} className={`futuristic-card group ${plan.popular ? 'glow' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-neon-green text-black px-4 py-1 rounded-full text-sm font-bold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold mb-2 neon-text">{plan.name}</h3>
                    <div className="text-4xl font-bold neon-text-green mb-2">
                      {plan.price}<span className="text-lg text-gray-400">{plan.period}</span>
                    </div>
                    <p className="text-gray-300">{plan.description}</p>
                  </div>
                  
                  <div className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-300">
                        <span className="w-2 h-2 bg-neon-blue rounded-full mr-3 flex-shrink-0"></span>
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <a 
                    href="/contact" 
                    className={`w-full text-center block ${plan.popular ? 'neon-button glow' : 'neon-button'}`}
                  >
                    {plan.button}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 neon-text-purple">
              Why Choose Our AI Content Generator?
            </h2>
            <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
              Experience the power of AI-driven content creation that saves time and boosts engagement.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: '⚡',
                  title: '10x Faster',
                  description: 'Create content 10 times faster than traditional methods'
                },
                {
                  icon: '🎯',
                  title: 'Consistent Brand Voice',
                  description: 'Maintain consistent brand voice across all content'
                },
                {
                  icon: '🔍',
                  title: 'SEO Optimized',
                  description: 'Built-in SEO optimization for better rankings'
                },
                {
                  icon: '🌍',
                  title: 'Multi-Language',
                  description: 'Generate content in 50+ languages'
                }
              ].map((benefit, index) => (
                <div key={index} className="futuristic-card text-center">
                  <div className="text-5xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold mb-3 neon-text-purple">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="futuristic-card max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 holographic">
                Ready to Transform Your Content Creation?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Start creating high-quality content at scale with our AI Content Generator Pro. 
                Join thousands of businesses already using our platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" className="neon-button glow">
                  Start Free Trial
                </a>
                <a href="tel:+13024640950" className="neon-button-purple">
                  Call: +1 302 464 0950
                </a>
                <a href="mailto:kleber@ziontechgroup.com" className="neon-button-green">
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIContentGeneratorPage;
