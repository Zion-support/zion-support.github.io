import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, CheckCircle, Zap, Sparkles, Rocket, TrendingUp, Shield, Clock, Users, Award } from 'lucide-react';

const MicroSAASPage: React.FC = () => {
  const microSAASServices = [
    {
      title: 'AI Content Generator',
      description: 'Create high-quality content 10x faster with AI. Blogs, social media, emails, and marketing materials.',
      icon: '✍️',
      price: '$29',
      period: 'month',
      features: [
        '10x Faster Content Creation',
        '50+ Languages Support',
        'SEO Optimized Output',
        'Brand Voice Training',
        'Unlimited Generations',
        'API Access Included'
      ],
      popular: true,
      color: 'orange'
    },
    {
      title: 'AI Analytics Dashboard',
      description: 'Real-time business intelligence with AI-powered insights and automated reporting.',
      icon: '📊',
      price: '$149',
      period: 'month',
      features: [
        'Real-time Analytics',
        'AI-Powered Insights',
        'Automated Reports',
        'Custom Dashboards',
        'Data Visualization',
        'Export to PDF/Excel'
      ],
      popular: false,
      color: 'cyan'
    },
    {
      title: 'AI Customer Support',
      description: '24/7 intelligent customer support with AI that never sleeps. 90% faster response times.',
      icon: '💬',
      price: '$199',
      period: 'month',
      features: [
        '24/7 AI Chat Support',
        '90% Faster Response',
        'Multi-language Support',
        'Human Handoff',
        'Knowledge Base Integration',
        'Sentiment Analysis'
      ],
      popular: true,
      color: 'green'
    },
    {
      title: 'AI Sales Automation',
      description: 'Automate your sales process and close more deals with AI-powered lead scoring and follow-ups.',
      icon: '📈',
      price: '$299',
      period: 'month',
      features: [
        'AI Lead Scoring',
        'Auto Follow-ups',
        'Predictive Analytics',
        'CRM Integration',
        'Email Sequences',
        'Performance Tracking'
      ],
      popular: false,
      color: 'purple'
    },
    {
      title: 'AI Security Scanner',
      description: 'AI-powered security scanning and threat detection for websites and applications.',
      icon: '🔒',
      price: '$99',
      period: 'month',
      features: [
        'Automated Security Scans',
        'Threat Detection',
        'Vulnerability Assessment',
        'Compliance Reports',
        'Real-time Alerts',
        'Fix Recommendations'
      ],
      popular: false,
      color: 'red'
    },
    {
      title: 'AI Mobile App Builder',
      description: 'Build native mobile apps with AI assistance. No coding required, deploy in days.',
      icon: '📱',
      price: '$199',
      period: 'month',
      features: [
        'No-Code Development',
        'Native iOS & Android',
        'AI Design Assistant',
        'App Store Deployment',
        'Push Notifications',
        'Analytics Integration'
      ],
      popular: false,
      color: 'blue'
    },
    {
      title: 'AI E-commerce Assistant',
      description: 'AI-powered e-commerce tools for inventory management, pricing optimization, and customer insights.',
      icon: '🛒',
      price: '$149',
      period: 'month',
      features: [
        'Inventory Management',
        'Dynamic Pricing',
        'Customer Insights',
        'Product Recommendations',
        'Order Automation',
        'Sales Forecasting'
      ],
      popular: false,
      color: 'pink'
    },
    {
      title: 'AI Workflow Automation',
      description: 'Automate repetitive tasks and workflows with intelligent AI-powered automation.',
      icon: '🤖',
      price: '$399',
      period: 'month',
      features: [
        'Process Automation',
        'RPA Solutions',
        'Workflow Builder',
        'Exception Handling',
        'Integration Hub',
        'Performance Monitoring'
      ],
      popular: false,
      color: 'indigo'
    },
    {
      title: 'AI Data Visualization',
      description: 'Transform your data into stunning visual insights with AI-powered analytics and dashboards.',
      icon: '📊',
      price: '$149',
      period: 'month',
      features: [
        'Interactive Dashboards',
        '50+ Chart Types',
        'AI Insights',
        'Real-time Updates',
        'Custom Themes',
        'Collaborative Features'
      ],
      popular: false,
      color: 'teal'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      orange: 'text-orange-400 border-orange-400 bg-orange-500/20',
      cyan: 'text-cyan-400 border-cyan-400 bg-cyan-500/20',
      green: 'text-green-400 border-green-400 bg-green-500/20',
      purple: 'text-purple-400 border-purple-400 bg-purple-500/20',
      red: 'text-red-400 border-red-400 bg-red-500/20',
      blue: 'text-blue-400 border-blue-400 bg-blue-500/20',
      pink: 'text-pink-400 border-pink-400 bg-pink-500/20',
      indigo: 'text-indigo-400 border-indigo-400 bg-indigo-500/20',
      teal: 'text-teal-400 border-teal-400 bg-teal-500/20'
    };
    return colorMap[color as keyof typeof colorMap] || 'text-cyan-400 border-cyan-400 bg-cyan-500/20';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 neon-text cyber-text">
              Micro SAAS Solutions
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow">
              Affordable, powerful AI-driven tools for modern businesses
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Start free, scale as you grow. Our micro SAAS solutions provide enterprise-grade AI capabilities 
              at startup-friendly prices. No long-term contracts, cancel anytime.
            </p>
            
            {/* Key Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto mb-12">
              <div className="quantum-card p-4 sm:p-6 energy-pulse">
                <div className="text-2xl sm:text-3xl mb-3">🚀</div>
                <h3 className="font-bold text-white mb-3 text-base sm:text-lg">Instant Setup</h3>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Get started in minutes with our one-click setup and pre-configured templates</p>
              </div>
              <div className="quantum-card p-4 sm:p-6 energy-pulse">
                <div className="text-2xl sm:text-3xl mb-3">💰</div>
                <h3 className="font-bold text-white mb-3 text-base sm:text-lg">Transparent Pricing</h3>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">No hidden fees, no surprise charges. Pay only for what you use, when you use it</p>
              </div>
              <div className="quantum-card p-4 sm:p-6 energy-pulse">
                <div className="text-2xl sm:text-3xl mb-3">🔧</div>
                <h3 className="font-bold text-white mb-3 text-base sm:text-lg">Easy Integration</h3>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Connect with your existing tools through our comprehensive API and integrations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSAASServices.map((service, index) => (
              <div key={index} className={`quantum-card p-6 energy-pulse relative ${service.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <div className="text-5xl mb-4 cyber-scan-line">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-3 neon-text">{service.title}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{service.description}</p>
                </div>

                <div className="text-center mb-6">
                  <div className={`text-4xl font-bold mb-2 neon-text ${getColorClasses(service.color).split(' ')[0]}`}>
                    ${service.price}
                  </div>
                  <div className="text-gray-400">per {service.period}</div>
                </div>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className={`w-4 h-4 mr-3 flex-shrink-0 ${getColorClasses(service.color).split(' ')[0]}`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="space-y-3">
                  <Link
                    to="/contact"
                    className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center ${
                      service.popular 
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700' 
                        : `border-2 ${getColorClasses(service.color).split(' ')[1]} text-white hover:bg-opacity-20`
                    }`}
                  >
                    <Rocket className="w-4 h-4 mr-2" />
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                  
                  <Link
                    to="/contact"
                    className="w-full py-2 px-4 rounded-lg font-medium transition-all duration-200 flex items-center justify-center text-gray-300 hover:text-cyan-400 border border-gray-600 hover:border-cyan-400"
                  >
                    <Sparkles className="w-4 h-4 mr-2" />
                    Try Free Demo
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gradient-to-r from-slate-800/50 to-purple-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text cyber-text">
              Why Choose Our Micro SAAS Solutions?
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Built for modern businesses that need powerful AI tools without the complexity and cost of enterprise solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="quantum-card p-6 text-center energy-pulse">
              <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Lightning Fast</h3>
              <p className="text-gray-300 text-sm">Deploy and start using our tools in under 5 minutes with our streamlined onboarding process.</p>
            </div>

            <div className="quantum-card p-6 text-center energy-pulse">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Enterprise Security</h3>
              <p className="text-gray-300 text-sm">Bank-level security with SOC 2 compliance, data encryption, and regular security audits.</p>
            </div>

            <div className="quantum-card p-6 text-center energy-pulse">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Scalable Growth</h3>
              <p className="text-gray-300 text-sm">Start small and scale up as your business grows with flexible pricing and feature upgrades.</p>
            </div>

            <div className="quantum-card p-6 text-center energy-pulse">
              <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-orange-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">24/7 Support</h3>
              <p className="text-gray-300 text-sm">Get help when you need it with our dedicated support team and comprehensive documentation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="quantum-card p-8 sm:p-12 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text cyber-text">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses already using our AI-powered micro SAAS solutions to streamline operations and boost productivity.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <a
                href="tel:+13024640950"
                className="cyber-button w-full sm:w-auto text-center"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call: (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="cyber-button w-full sm:w-auto text-center"
                style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
              >
                <Mail className="w-4 h-4 mr-2" />
                Email Us
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm text-gray-400">
              <div className="flex items-center justify-center">
                <Clock className="w-4 h-4 mr-2 text-cyan-400" />
                <span>Free 14-day trial</span>
              </div>
              <div className="flex items-center justify-center">
                <Award className="w-4 h-4 mr-2 text-cyan-400" />
                <span>No setup fees</span>
              </div>
              <div className="flex items-center justify-center">
                <Shield className="w-4 h-4 mr-2 text-cyan-400" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSAASPage;