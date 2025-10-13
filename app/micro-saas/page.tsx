import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Check, 
  Star, 
  Zap, 
  Shield, 
  BarChart3, 
  Cloud, 
  Brain, 
  Code, 
  Mail, 
  Database, 
  Users, 
  TrendingUp,
  Clock,
  Globe,
  Lock,
  Sparkles,
  Target,
  Rocket,
  Award
} from "lucide-react";

const MicroSaas = () => {
  const [activeTab, setActiveTab] = useState('all');

  const microSaasServices = [
    {
      id: 'zion-analytics-pro',
      name: 'Zion Analytics Pro',
      description: 'AI-powered business intelligence platform with real-time analytics, predictive insights, and automated reporting',
      price: '$29/month',
      features: ['Real-time dashboards', 'Predictive analytics', 'Custom reports', 'API integration', 'Mobile app'],
      icon: <BarChart3 className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500',
      category: 'analytics',
      popular: true,
      link: '/zion-analytics-pro',
      benefits: ['40% faster decision making', 'ROI tracking', 'Team collaboration', '24/7 support']
    },
    {
      id: 'zion-security-shield',
      name: 'Zion Security Shield',
      description: 'Comprehensive cybersecurity monitoring and threat detection system for small to medium businesses',
      price: '$49/month',
      features: ['Real-time monitoring', 'Threat detection', 'Vulnerability scanning', 'Incident response', 'Compliance reports'],
      icon: <Shield className="w-8 h-8" />,
      color: 'from-red-500 to-pink-500',
      category: 'security',
      popular: true,
      link: '/zion-security-shield',
      benefits: ['99.9% threat detection', 'Automated response', 'Compliance ready', 'Expert support']
    },
    {
      id: 'zion-cloud-vault',
      name: 'Zion Cloud Vault',
      description: 'Secure cloud storage and file management solution with advanced encryption and collaboration tools',
      price: '$19/month',
      features: ['Unlimited storage', 'End-to-end encryption', 'File sharing', 'Version control', 'Team collaboration'],
      icon: <Cloud className="w-8 h-8" />,
      color: 'from-purple-500 to-indigo-500',
      category: 'storage',
      popular: false,
      link: '/zion-cloud-vault',
      benefits: ['99.99% uptime', 'Global CDN', 'Mobile sync', 'Advanced security']
    },
    {
      id: 'zion-content-studio',
      name: 'Zion Content Studio',
      description: 'AI-powered content creation platform for blogs, social media, and marketing materials',
      price: '$39/month',
      features: ['AI writing assistant', 'Content templates', 'SEO optimization', 'Social media scheduling', 'Analytics'],
      icon: <Brain className="w-8 h-8" />,
      color: 'from-green-500 to-teal-500',
      category: 'content',
      popular: true,
      link: '/zion-content-studio',
      benefits: ['10x content output', 'SEO optimized', 'Brand consistency', 'Multi-platform support']
    },
    {
      id: 'zion-data-sync',
      name: 'Zion Data Sync',
      description: 'Automated data synchronization and integration platform for seamless workflow management',
      price: '$25/month',
      features: ['Real-time sync', 'API integrations', 'Data transformation', 'Error handling', 'Monitoring'],
      icon: <Database className="w-8 h-8" />,
      color: 'from-orange-500 to-yellow-500',
      category: 'integration',
      popular: false,
      link: '/zion-data-sync',
      benefits: ['Zero data loss', 'Real-time updates', 'Easy setup', 'Scalable architecture']
    },
    {
      id: 'zion-email-automation',
      name: 'Zion Email Automation',
      description: 'Advanced email marketing and automation platform with AI-powered personalization',
      price: '$35/month',
      features: ['Email campaigns', 'Automation workflows', 'A/B testing', 'Analytics', 'CRM integration'],
      icon: <Mail className="w-8 h-8" />,
      color: 'from-pink-500 to-rose-500',
      category: 'marketing',
      popular: false,
      link: '/zion-email-automation',
      benefits: ['40% higher open rates', 'Automated workflows', 'Personalization', 'Advanced analytics']
    },
    {
      id: 'zion-project-master',
      name: 'Zion Project Master',
      description: 'Comprehensive project management tool with AI-powered insights and team collaboration',
      price: '$45/month',
      features: ['Task management', 'Team collaboration', 'Time tracking', 'Resource planning', 'AI insights'],
      icon: <Target className="w-8 h-8" />,
      color: 'from-indigo-500 to-blue-500',
      category: 'productivity',
      popular: true,
      link: '/zion-project-master',
      benefits: ['30% faster delivery', 'Better resource allocation', 'Team productivity', 'Project insights']
    },
    {
      id: 'zion-customer-insights',
      name: 'Zion Customer Insights',
      description: 'AI-powered customer analytics and behavior tracking for better business decisions',
      price: '$55/month',
      features: ['Customer analytics', 'Behavior tracking', 'Predictive modeling', 'Segmentation', 'Reports'],
      icon: <Users className="w-8 h-8" />,
      color: 'from-teal-500 to-cyan-500',
      category: 'analytics',
      popular: false,
      link: '/zion-customer-insights',
      benefits: ['Better customer understanding', 'Predictive insights', 'Segmentation', 'ROI optimization']
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', count: microSaasServices.length },
    { id: 'analytics', name: 'Analytics', count: microSaasServices.filter(s => s.category === 'analytics').length },
    { id: 'security', name: 'Security', count: microSaasServices.filter(s => s.category === 'security').length },
    { id: 'storage', name: 'Storage', count: microSaasServices.filter(s => s.category === 'storage').length },
    { id: 'content', name: 'Content', count: microSaasServices.filter(s => s.category === 'content').length },
    { id: 'integration', name: 'Integration', count: microSaasServices.filter(s => s.category === 'integration').length },
    { id: 'marketing', name: 'Marketing', count: microSaasServices.filter(s => s.category === 'marketing').length },
    { id: 'productivity', name: 'Productivity', count: microSaasServices.filter(s => s.category === 'productivity').length }
  ];

  const filteredServices = activeTab === 'all' 
    ? microSaasServices 
    : microSaasServices.filter(service => service.category === activeTab);

  return (
    <>
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group</title>
        <meta
          name="description"
          content="Discover our comprehensive suite of micro SAAS solutions designed to accelerate your business growth. From analytics to security, we have the tools you need."
        />
        <meta name="keywords" content="micro saas, business software, analytics, security, productivity, cloud solutions" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <div className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 animate-pulse"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                Micro SAAS Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Powerful, ready-to-use software solutions that transform your business operations. 
              No complex setup, no lengthy implementations - just instant value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Watch Demo
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">50+</div>
                <div className="text-gray-300">Solutions</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">10K+</div>
                <div className="text-gray-300">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">99.9%</div>
                <div className="text-gray-300">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">24/7</div>
                <div className="text-gray-300">Support</div>
              </div>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="px-4 sm:px-6 lg:px-8 mb-12">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveTab(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeTab === category.id
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="px-4 sm:px-6 lg:px-8 pb-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <div
                  key={service.id}
                  className="relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 group"
                >
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold flex items-center">
                        <Star className="w-3 h-3 mr-1" />
                        Popular
                      </span>
                    </div>
                  )}
                  
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                  <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
                  
                  <div className="text-2xl font-bold text-cyan-400 mb-4">{service.price}</div>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-300">
                        <Check className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="space-y-2 mb-6">
                    <h4 className="text-sm font-semibold text-cyan-400">Key Benefits:</h4>
                    {service.benefits.map((benefit, index) => (
                      <div key={index} className="text-xs text-gray-400 flex items-center">
                        <Sparkles className="w-3 h-3 text-yellow-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                  
                  <Link
                    to={service.link}
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="px-4 sm:px-6 lg:px-8 pb-16">
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-8 border border-cyan-500/20">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-gray-300 mb-8">
              Join thousands of businesses already using our micro SAAS solutions to accelerate growth and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Free Trial
                <Rocket className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/pricing"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MicroSaas;