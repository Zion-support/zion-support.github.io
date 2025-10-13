import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Zap, Shield, BarChart3, Cloud, Users, Target, Calendar } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';

const MicroSaasPage: React.FC = () => {
  const microSaasProducts = [
    {
      name: 'Zion Analytics Pro',
      description: 'AI-powered business intelligence platform with real-time dashboards and predictive analytics.',
      icon: <BarChart3 className="w-8 h-8" />,
      features: ['Real-time analytics', 'Predictive insights', 'Custom dashboards', 'Automated reporting'],
      price: 'From $299/month',
      link: '/zion-analytics-pro',
      popular: true,
      category: 'Analytics'
    },
    {
      name: 'Zion Security Shield',
      description: 'Advanced cybersecurity protection with AI-powered threat detection and automated response.',
      icon: <Shield className="w-8 h-8" />,
      features: ['Threat detection', 'Real-time monitoring', 'Automated response', 'Compliance reporting'],
      price: 'From $499/month',
      link: '/zion-security-shield',
      popular: true,
      category: 'Security'
    },
    {
      name: 'Zion Cloud Vault',
      description: 'Secure cloud storage solution with end-to-end encryption and unlimited scalability.',
      icon: <Cloud className="w-8 h-8" />,
      features: ['End-to-end encryption', 'Unlimited storage', 'File sharing', 'Version control'],
      price: 'From $99/month',
      link: '/zion-cloud-vault',
      popular: false,
      category: 'Storage'
    },
    {
      name: 'Zion AI CRM Pro',
      description: 'AI-powered customer relationship management with intelligent lead scoring and automation.',
      icon: <Users className="w-8 h-8" />,
      features: ['Lead scoring', 'Automated follow-ups', 'Customer insights', 'Sales forecasting'],
      price: 'From $199/month',
      link: '/zion-ai-crm-pro',
      popular: true,
      category: 'CRM'
    },
    {
      name: 'Zion AI Marketing Automation Pro',
      description: 'AI-powered marketing automation with predictive content generation and multi-channel orchestration.',
      icon: <Target className="w-8 h-8" />,
      features: ['Content generation', 'Multi-channel campaigns', 'A/B testing', 'Performance analytics'],
      price: 'From $149/month',
      link: '/zion-ai-marketing-automation-pro',
      popular: false,
      category: 'Marketing'
    },
    {
      name: 'Zion AI Project Manager Pro',
      description: 'AI-powered project management with intelligent task prioritization and resource allocation.',
      icon: <Calendar className="w-8 h-8" />,
      features: ['Task automation', 'Resource optimization', 'Progress tracking', 'Risk assessment'],
      price: 'From $99/month',
      link: '/zion-ai-project-manager-pro',
      popular: false,
      category: 'Project Management'
    }
  ];

  const categories = ['All', 'Analytics', 'Security', 'Storage', 'CRM', 'Marketing', 'Project Management'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="Micro SAAS Solutions - Zion Tech Group | Ready-to-Use Software Solutions"
        description="Discover our comprehensive suite of micro SAAS solutions designed to streamline your business operations with AI-powered tools and automation."
        keywords="micro SAAS, software solutions, business automation, AI tools, productivity software, business intelligence"
        canonical="https://ziontechgroup.com/micro-saas"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Micro SAAS Solutions
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready-to-use software solutions that can transform your business operations immediately. 
            No complex setup, no lengthy implementation - just powerful tools that work out of the box.
          </p>
        </div>

        {/* Categories Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 text-white hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Micro SAAS Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {microSaasProducts.map((product, index) => (
            <div
              key={index}
              className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 group ${
                product.popular ? 'ring-2 ring-cyan-500/50' : ''
              }`}
            >
              {product.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <div className="text-white">{product.icon}</div>
                </div>
                <div className="text-cyan-400 text-sm font-medium mb-2">{product.category}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{product.name}</h3>
                <p className="text-gray-300 text-sm mb-4">{product.description}</p>
                <div className="text-cyan-400 font-bold text-lg">{product.price}</div>
              </div>

              <ul className="space-y-2 mb-6">
                {product.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                to={product.link}
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group-hover:scale-105"
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-gradient-to-r from-cyan-900/30 to-purple-900/30 rounded-xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Why Choose Our Micro SAAS Solutions?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Instant Setup</h3>
              <p className="text-gray-300">Get started in minutes with our plug-and-play solutions. No complex configuration required.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Enterprise Security</h3>
              <p className="text-gray-300">Bank-level security and compliance with all major industry standards and regulations.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">AI-Powered</h3>
              <p className="text-gray-300">Leverage artificial intelligence to automate tasks and gain valuable insights from your data.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Start with any of our micro SAAS solutions and see immediate results. 
            Scale up or down as your business grows.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
            >
              Schedule Demo
              <Star className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MicroSaasPage;
