import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Zap, 
  Smartphone, 
  Code, 
  Database, 
  BarChart3, 
  Users, 
  Globe,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  Lock,
  Clock,
  Target
} from 'lucide-react';

const ServicesPage: React.FC = () => {
  const microSaasServices = [
    {
      id: 'ai-content-generator',
      name: 'AI Content Generator Pro',
      description: 'Advanced AI-powered content creation tool for blogs, social media, and marketing materials.',
      features: [
        'Multi-language support',
        'SEO optimization',
        'Brand voice customization',
        'Content scheduling',
        'Analytics dashboard'
      ],
      pricing: '$29/month',
      category: 'AI Services',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      link: '/ai-content-generator'
    },
    {
      id: 'cloud-monitoring',
      name: 'Cloud Infrastructure Monitor',
      description: 'Real-time monitoring and alerting for cloud resources and applications.',
      features: [
        'Real-time monitoring',
        'Custom alerts',
        'Performance analytics',
        'Cost optimization',
        'Multi-cloud support'
      ],
      pricing: '$49/month',
      category: 'Cloud Services',
      icon: Cloud,
      color: 'from-blue-500 to-cyan-500',
      link: '/cloud-monitoring'
    },
    {
      id: 'cyber-threat-detector',
      name: 'Cyber Threat Detection Suite',
      description: 'AI-powered cybersecurity monitoring and threat detection system.',
      features: [
        'Threat intelligence',
        'Real-time scanning',
        'Incident response',
        'Compliance reporting',
        '24/7 monitoring'
      ],
      pricing: '$99/month',
      category: 'Cybersecurity',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      link: '/cyber-threat-detector'
    },
    {
      id: 'api-management',
      name: 'API Management Platform',
      description: 'Complete API lifecycle management with analytics and security features.',
      features: [
        'API gateway',
        'Rate limiting',
        'Analytics dashboard',
        'Developer portal',
        'Security policies'
      ],
      pricing: '$79/month',
      category: 'IT Services',
      icon: Code,
      color: 'from-green-500 to-teal-500',
      link: '/api-management'
    },
    {
      id: 'data-analytics',
      name: 'Business Intelligence Dashboard',
      description: 'Advanced data visualization and business intelligence platform.',
      features: [
        'Interactive dashboards',
        'Custom reports',
        'Data connectors',
        'Real-time updates',
        'Team collaboration'
      ],
      pricing: '$59/month',
      category: 'Analytics',
      icon: BarChart3,
      color: 'from-indigo-500 to-purple-500',
      link: '/data-analytics'
    },
    {
      id: 'customer-insights',
      name: 'Customer Insights Engine',
      description: 'AI-powered customer behavior analysis and predictive analytics.',
      features: [
        'Customer segmentation',
        'Predictive modeling',
        'Churn prediction',
        'Personalization engine',
        'ROI tracking'
      ],
      pricing: '$89/month',
      category: 'AI Services',
      icon: Users,
      color: 'from-pink-500 to-rose-500',
      link: '/customer-insights'
    },
    {
      id: '5g-network-optimizer',
      name: '5G Network Optimizer',
      description: 'Advanced 5G network performance optimization and monitoring tool.',
      features: [
        'Network optimization',
        'Performance monitoring',
        'Capacity planning',
        'Quality of Service',
        'Edge computing support'
      ],
      pricing: '$199/month',
      category: '5G Solutions',
      icon: Smartphone,
      color: 'from-cyan-500 to-blue-500',
      link: '/5g-network-optimizer'
    },
    {
      id: 'automated-testing',
      name: 'Automated Testing Suite',
      description: 'Comprehensive automated testing platform for web and mobile applications.',
      features: [
        'Cross-browser testing',
        'Mobile testing',
        'Performance testing',
        'API testing',
        'CI/CD integration'
      ],
      pricing: '$69/month',
      category: 'IT Services',
      icon: Zap,
      color: 'from-yellow-500 to-orange-500',
      link: '/automated-testing'
    }
  ];

  const categories = [
    { name: 'AI Services', count: 3, color: 'bg-purple-500' },
    { name: 'Cloud Services', count: 1, color: 'bg-blue-500' },
    { name: 'Cybersecurity', count: 1, color: 'bg-red-500' },
    { name: 'IT Services', count: 2, color: 'bg-green-500' },
    { name: 'Analytics', count: 1, color: 'bg-indigo-500' },
    { name: '5G Solutions', count: 1, color: 'bg-cyan-500' }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SAAS Services - Zion Tech Group</title>
        <meta name="description" content="Discover our comprehensive suite of micro SAAS services including AI tools, cloud solutions, cybersecurity, and more. Starting from $29/month." />
        <meta name="keywords" content="micro saas, AI services, cloud solutions, cybersecurity, API management, business intelligence, 5G solutions" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Micro SAAS Services
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Powerful, affordable micro SAAS solutions designed to accelerate your business growth. 
                Choose from our comprehensive suite of AI, cloud, and IT services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25">
                  Start Free Trial
                </Link>
                <Link to="/demo" className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                  Watch Demo
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-center text-white mb-12">Service Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category) => (
              <div key={category.name} className="text-center p-6 bg-slate-800/50 rounded-lg border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                <div className={`w-12 h-12 ${category.color} rounded-lg mx-auto mb-4 flex items-center justify-center`}>
                  <span className="text-white font-bold text-lg">{category.count}</span>
                </div>
                <h3 className="text-white font-semibold">{category.name}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-center text-white mb-12">Our Micro SAAS Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasServices.map((service) => {
              const Icon = service.icon;
              return (
                <div key={service.id} className="group bg-slate-800/50 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:transform hover:scale-105 overflow-hidden">
                  <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${service.color}`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-sm text-gray-400 bg-slate-700 px-3 py-1 rounded-full">
                        {service.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {service.name}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-2xl font-bold text-white">{service.pricing}</span>
                        <span className="text-gray-400 text-sm ml-1">/month</span>
                      </div>
                      <Link 
                        to={service.link}
                        className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors font-semibold"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Features Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Why Choose Our Micro SAAS Services?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We provide enterprise-grade solutions at startup-friendly prices with unmatched support and reliability.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Scalable Solutions</h3>
              <p className="text-gray-300">Grow with confidence as our services scale with your business needs.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Enterprise Security</h3>
              <p className="text-gray-300">Bank-level security and compliance with industry standards.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">24/7 Support</h3>
              <p className="text-gray-300">Round-the-clock technical support and monitoring services.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Proven Results</h3>
              <p className="text-gray-300">Trusted by 1000+ businesses worldwide with proven ROI.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-12 text-center border border-purple-500/20">
            <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses already using our micro SAAS services to accelerate growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25">
                Start Your Free Trial
              </Link>
              <Link to="/pricing" className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                View Pricing Plans
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesPage;