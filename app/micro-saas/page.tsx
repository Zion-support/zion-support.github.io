'use client';
import React, { useState, useEffect } from 'react';
import { Check, Star, ArrowRight, Zap, Shield, Users, BarChart, Clock, Globe, Smartphone, Code, Target, TrendingUp, Database, Mail, Phone, MapPin } from 'lucide-react';

const MicroSAASPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const microSaasProducts = [
    {
      id: 1,
      name: 'AI Content Generator Pro',
      description: 'Generate high-quality content for blogs, social media, emails, and marketing materials using advanced AI.',
      price: '$29',
      period: '/month',
      features: [
        'Unlimited content generation',
        '50+ content templates',
        'Multi-language support',
        'SEO optimization',
        'Brand voice customization',
        'Plagiarism detection',
        'Content scheduling',
        'Analytics dashboard'
      ],
      icon: '✍️',
      color: 'from-pink-500 to-rose-500',
      popular: true
    },
    {
      id: 2,
      name: 'Smart Analytics Dashboard',
      description: 'Real-time business analytics with AI-powered insights and predictive forecasting.',
      price: '$49',
      period: '/month',
      features: [
        'Real-time data visualization',
        'Custom dashboard builder',
        'Predictive analytics',
        'Automated reporting',
        '50+ data sources',
        'Mobile app included',
        'API access',
        'White-label options'
      ],
      icon: '📊',
      color: 'from-blue-500 to-cyan-500',
      popular: false
    },
    {
      id: 3,
      name: 'AI Customer Support Bot',
      description: 'Intelligent chatbot that handles customer inquiries 24/7 with human-like responses.',
      price: '$39',
      period: '/month',
      features: [
        '24/7 customer support',
        'Multi-channel integration',
        'Sentiment analysis',
        'Escalation to humans',
        'Knowledge base integration',
        'Custom training',
        'Analytics & insights',
        'Unlimited conversations'
      ],
      icon: '🤖',
      color: 'from-green-500 to-emerald-500',
      popular: false
    },
    {
      id: 4,
      name: 'Email Marketing Automation',
      description: 'AI-powered email campaigns with personalization and automated workflows.',
      price: '$25',
      period: '/month',
      features: [
        'Drag-and-drop editor',
        'AI subject line optimization',
        'Behavioral triggers',
        'A/B testing',
        'List segmentation',
        'Deliverability optimization',
        'Performance analytics',
        'Unlimited emails'
      ],
      icon: '📧',
      color: 'from-purple-500 to-indigo-500',
      popular: false
    },
    {
      id: 5,
      name: 'Social Media Manager',
      description: 'Automate social media posting, engagement, and analytics across all platforms.',
      price: '$35',
      period: '/month',
      features: [
        'Multi-platform posting',
        'Content calendar',
        'Hashtag optimization',
        'Engagement tracking',
        'Influencer discovery',
        'Competitor analysis',
        'Scheduled posting',
        'Team collaboration'
      ],
      icon: '📱',
      color: 'from-orange-500 to-red-500',
      popular: false
    },
    {
      id: 6,
      name: 'Project Management AI',
      description: 'Intelligent project management with AI-powered task prioritization and team optimization.',
      price: '$45',
      period: '/month',
      features: [
        'AI task prioritization',
        'Resource allocation',
        'Risk assessment',
        'Time tracking',
        'Team collaboration',
        'Progress forecasting',
        'Integration hub',
        'Custom workflows'
      ],
      icon: '📋',
      color: 'from-teal-500 to-blue-500',
      popular: false
    },
    {
      id: 7,
      name: 'Lead Generation Engine',
      description: 'AI-powered lead generation and qualification with automated outreach sequences.',
      price: '$59',
      period: '/month',
      features: [
        'AI lead scoring',
        'Automated prospecting',
        'Email sequences',
        'LinkedIn automation',
        'CRM integration',
        'Lead nurturing',
        'Conversion tracking',
        'Custom targeting'
      ],
      icon: '🎯',
      color: 'from-yellow-500 to-orange-500',
      popular: true
    },
    {
      id: 8,
      name: 'Financial Analytics AI',
      description: 'Advanced financial reporting and forecasting with AI-powered insights.',
      price: '$69',
      period: '/month',
      features: [
        'Real-time financial tracking',
        'AI forecasting',
        'Expense categorization',
        'Budget optimization',
        'Tax preparation',
        'Investment analysis',
        'Compliance monitoring',
        'Custom reporting'
      ],
      icon: '💰',
      color: 'from-emerald-500 to-green-500',
      popular: false
    }
  ];

  const enterpriseFeatures = [
    {
      title: 'AI-Powered Automation',
      description: 'Leverage cutting-edge AI to automate repetitive tasks and boost productivity by up to 300%.',
      icon: '🤖'
    },
    {
      title: 'Real-Time Analytics',
      description: 'Get instant insights into your business performance with advanced analytics and reporting.',
      icon: '📈'
    },
    {
      title: 'Seamless Integrations',
      description: 'Connect with 500+ popular business tools and platforms for a unified workflow.',
      icon: '🔗'
    },
    {
      title: 'Enterprise Security',
      description: 'Bank-level security with SOC 2 compliance, encryption, and advanced threat protection.',
      icon: '🔒'
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock customer support with dedicated account managers for enterprise clients.',
      icon: '🎧'
    },
    {
      title: 'Custom Development',
      description: 'Tailored solutions and custom features designed specifically for your business needs.',
      icon: '⚙️'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechStart Inc.',
      role: 'CEO',
      content: 'Zion Tech Group\'s micro SAAS solutions transformed our operations. We saw a 250% increase in productivity within the first month.',
      rating: 5,
      avatar: '👩‍💼'
    },
    {
      name: 'Michael Chen',
      company: 'Digital Marketing Pro',
      role: 'Marketing Director',
      content: 'The AI content generator is incredible. It saves us 20 hours per week and the quality is outstanding.',
      rating: 5,
      avatar: '👨‍💻'
    },
    {
      name: 'Emily Rodriguez',
      company: 'E-commerce Solutions',
      role: 'Operations Manager',
      content: 'Their analytics dashboard gave us insights we never had before. Revenue increased by 40% in 3 months.',
      rating: 5,
      avatar: '👩‍🎨'
    }
  ];

  return (
    <>
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 neon-text cyber-text">
              Micro SAAS Solutions
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow">
              50+ AI-Powered Tools for Modern Businesses
            </p>
            <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              Transform your business with our comprehensive suite of micro SAAS applications. 
              From AI content generation to advanced analytics, we have everything you need to scale efficiently.
            </p>
            
            {/* Key Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
              <div className="cyber-card hologram-card p-6 text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">50+</div>
                <div className="text-white font-medium">AI Tools</div>
                <div className="text-gray-400 text-sm">Ready to use</div>
              </div>
              <div className="cyber-card hologram-card p-6 text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">300%</div>
                <div className="text-white font-medium">Productivity Boost</div>
                <div className="text-gray-400 text-sm">Average increase</div>
              </div>
              <div className="cyber-card hologram-card p-6 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
                <div className="text-white font-medium">Support</div>
                <div className="text-gray-400 text-sm">Always available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Our Micro SAAS Products
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {microSaasProducts.map((product) => (
              <div
                key={product.id}
                className={`cyber-card hologram-card p-6 relative hover:scale-105 transition-all duration-300 ${
                  product.popular ? 'ring-2 ring-cyan-400' : ''
                }`}
              >
                {product.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">{product.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{product.description}</p>
                  <div className="flex items-center justify-center mb-4">
                    <span className="text-3xl font-bold text-cyan-400">{product.price}</span>
                    <span className="text-gray-400 ml-1">{product.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-300">
                      <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-4 rounded-lg font-medium transition-all duration-300 bg-gradient-to-r ${product.color} text-white hover:shadow-lg hover:scale-105`}>
                  Start Free Trial
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Features */}
      <section className="py-16 px-4 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Why Choose Our Micro SAAS Solutions?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {enterpriseFeatures.map((feature, index) => (
              <div key={index} className="cyber-card hologram-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            What Our Clients Say
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="cyber-card hologram-card p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="text-2xl mr-3">{testimonial.avatar}</div>
                  <div>
                    <div className="text-white font-medium">{testimonial.name}</div>
                    <div className="text-cyan-400 text-sm">{testimonial.role}</div>
                    <div className="text-gray-400 text-sm">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="cyber-card hologram-card p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start your free trial today and experience the power of AI-driven micro SAAS solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cyber-button px-8 py-4 text-lg">
                Start Free Trial
              </button>
              <a
                href="tel:+13024640950"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                <Phone className="w-5 h-5 inline mr-2" />
                Call (302) 464-0950
              </a>
            </div>
            <div className="mt-8 text-sm text-gray-400">
              <p>✓ 14-day free trial • ✓ No credit card required • ✓ Cancel anytime</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-8 px-4 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex items-center justify-center space-x-2 text-cyan-400">
              <Phone className="w-5 h-5" />
              <span>+1 (302) 464-0950</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-cyan-400">
              <Mail className="w-5 h-5" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-cyan-400">
              <MapPin className="w-5 h-5" />
              <span>364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default MicroSAASPage;