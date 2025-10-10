'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, ArrowRight, Zap, Shield, Users, BarChart, Clock } from 'lucide-react';

const MicroSaasPage: React.FC = () => {
  const microSaasProducts = [
    {
      name: 'AI Voice Assistant',
      description: 'Revolutionary voice AI platform with natural language processing and multi-language support.',
      price: '$299/month',
      features: ['50+ languages', '99.2% accuracy', 'Real-time processing', 'Custom voice training'],
      icon: '🎤',
      category: 'AI & Voice',
      popular: true
    },
    {
      name: 'AI Predictive Maintenance',
      description: 'Prevent equipment failures with AI-powered predictive maintenance that reduces downtime by 70%.',
      price: '$1,999/month',
      features: ['IoT integration', '99.9% accuracy', 'Real-time alerts', 'Custom ML models'],
      icon: '🔧',
      category: 'AI & IoT',
      popular: false
    },
    {
      name: 'AI Recruitment Assistant',
      description: 'Transform hiring with AI that screens candidates, conducts interviews, and finds perfect matches.',
      price: '$599/month',
      features: ['Automated screening', 'Video interviews', 'Bias-free evaluation', 'Predictive analytics'],
      icon: '👥',
      category: 'HR & Recruitment',
      popular: true
    },
    {
      name: 'AI-Powered CRM',
      description: 'Intelligent customer relationship management with AI insights, automated follow-ups, and predictive analytics.',
      price: '$149/month',
      features: ['AI insights', 'Automated follow-ups', 'Predictive analytics', 'Custom integrations'],
      icon: '💻',
      category: 'CRM & Sales',
      popular: false
    },
    {
      name: 'AI Analytics Dashboard',
      description: 'Real-time business intelligence with AI-powered insights, custom dashboards, and automated reporting.',
      price: '$199/month',
      features: ['Real-time analytics', 'Custom dashboards', 'Automated reports', '100+ data sources'],
      icon: '📊',
      category: 'Analytics & BI',
      popular: true
    },
    {
      name: 'AI Content Studio',
      description: 'Complete content creation suite with AI writing, image generation, video editing, and social media automation.',
      price: '$299/month',
      features: ['AI writing', 'Image generation', 'Video editing', 'Social automation'],
      icon: '✍️',
      category: 'Content & Marketing',
      popular: false
    },
    {
      name: 'AI Chatbot Builder',
      description: 'Create intelligent chatbots for customer support, sales, and lead generation with no coding required.',
      price: '$99/month',
      features: ['No-code builder', 'Multi-channel support', 'Analytics dashboard', 'Custom integrations'],
      icon: '🤖',
      category: 'Customer Support',
      popular: true
    },
    {
      name: 'AI Email Marketing',
      description: 'Automated email campaigns with AI optimization, personalization, and advanced analytics for maximum ROI.',
      price: '$179/month',
      features: ['AI optimization', 'Personalization', 'A/B testing', 'Advanced analytics'],
      icon: '📧',
      category: 'Marketing & Email',
      popular: false
    },
    {
      name: 'AI Mobile App Builder',
      description: 'Build native mobile apps with AI assistance, drag-and-drop interface, and instant deployment.',
      price: '$399/month',
      features: ['Drag-and-drop', 'AI assistance', 'Instant deployment', 'Cross-platform'],
      icon: '📱',
      category: 'Mobile Development',
      popular: true
    },
    {
      name: 'AI SEO Optimizer',
      description: 'Automated SEO analysis, keyword research, content optimization, and ranking tracking with AI insights.',
      price: '$129/month',
      features: ['SEO analysis', 'Keyword research', 'Content optimization', 'Ranking tracking'],
      icon: '🔍',
      category: 'SEO & Marketing',
      popular: false
    },
    {
      name: 'AI Invoice Generator',
      description: 'Automated invoice creation, payment tracking, and financial reporting with AI-powered insights.',
      price: '$79/month',
      features: ['Auto generation', 'Payment tracking', 'Financial reports', 'AI insights'],
      icon: '💰',
      category: 'Finance & Accounting',
      popular: true
    },
    {
      name: 'AI Writing Assistant',
      description: 'Advanced AI writing tool for blogs, emails, reports, and content creation with 50+ templates.',
      price: '$29/month',
      features: ['50+ templates', 'Multiple languages', 'Tone adjustment', 'Plagiarism check'],
      icon: '✍️',
      category: 'Content & Writing',
      popular: false
    }
  ];

  const categories = ['All', 'AI & Voice', 'AI & IoT', 'HR & Recruitment', 'CRM & Sales', 'Analytics & BI', 'Content & Marketing', 'Customer Support', 'Marketing & Email', 'Mobile Development', 'SEO & Marketing', 'Finance & Accounting', 'Content & Writing'];

  const benefits = [
    {
      icon: <Zap className="w-8 h-8 text-cyan-400" />,
      title: 'Instant Setup',
      description: 'Get started in minutes with our plug-and-play solutions'
    },
    {
      icon: <Shield className="w-8 h-8 text-green-400" />,
      title: 'Enterprise Security',
      description: 'Bank-level security and compliance for all products'
    },
    {
      icon: <Users className="w-8 h-8 text-purple-400" />,
      title: '24/7 Support',
      description: 'Round-the-clock support from our expert team'
    },
    {
      icon: <BarChart className="w-8 h-8 text-yellow-400" />,
      title: 'Proven ROI',
      description: 'Average 300% ROI within 6 months of implementation'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group | 50+ AI Tools</title>
        <meta name="description" content="Discover our comprehensive suite of 50+ AI-powered micro SAAS solutions. From voice assistants to predictive maintenance, find the perfect tool for your business." />
        <meta name="keywords" content="micro saas, AI tools, business software, productivity tools, AI solutions, software as a service" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="pt-24 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
                Micro SAAS Solutions
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Discover our comprehensive suite of 50+ AI-powered micro SAAS solutions designed to transform your business operations.
              </p>
            </div>

            {/* Benefits */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">
                Why Choose Our Micro SAAS Solutions?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="cyber-card p-6 text-center">
                    <div className="mb-4">{benefit.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                    <p className="text-gray-300">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasProducts.map((product, index) => (
                <div key={index} className={`cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300 ${product.popular ? 'border-2 border-cyan-400' : ''}`}>
                  {product.popular && (
                    <div className="flex justify-end mb-4">
                      <span className="bg-cyan-400 text-slate-900 px-3 py-1 rounded-full text-sm font-bold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <div className="text-6xl mb-4">{product.icon}</div>
                    <h3 className="text-2xl font-bold text-white mb-2">{product.name}</h3>
                    <p className="text-gray-300 mb-4">{product.description}</p>
                    <div className="flex items-center justify-center space-x-2 mb-4">
                      <span className="text-3xl font-bold text-cyan-400">{product.price}</span>
                      <span className="text-gray-400">/month</span>
                    </div>
                    <span className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm font-medium rounded-full">
                      {product.category}
                    </span>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                    {product.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <a 
                    href={`/micro-saas/${product.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className="w-full cyber-button text-center block"
                  >
                    Learn More
                  </a>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="mt-16 cyber-card hologram-card p-8 text-center">
              <h2 className="text-3xl font-bold text-white mb-6 neon-text">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Choose from our 50+ AI-powered micro SAAS solutions and start seeing results immediately.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+13024640950" className="cyber-button">
                  📞 Call: (302) 464-0950
                </a>
                <a href="mailto:kleber@ziontechgroup.com" className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                  📧 Get Free Demo
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MicroSaasPage;