import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Shield, 
  Cloud, 
  Database, 
  Zap, 
  Eye, 
  MessageSquare, 
  BarChart3,
  Code,
  Lock,
  Globe,
  Smartphone,
  ArrowRight,
  CheckCircle,
  Star
} from 'lucide-react';

interface Service {
  id: string;
  name: string;
  description: string;
  icon: React.ComponentType<any>;
  features: string[];
  pricing: {
    basic: number;
    pro: number;
    enterprise: number;
  };
  category: 'AI' | 'Security' | 'Cloud' | 'Analytics' | 'Development' | 'Mobile';
  popular?: boolean;
  new?: boolean;
}

const ServicesShowcase: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  const services: Service[] = [
    {
      id: 'ai-chatbot-pro',
      name: 'AI Chatbot Pro',
      description: 'Advanced conversational AI with natural language processing and multi-language support.',
      icon: MessageSquare,
      features: ['Natural Language Processing', 'Multi-language Support', 'Custom Training', 'Analytics Dashboard', 'API Integration'],
      pricing: { basic: 99, pro: 299, enterprise: 999 },
      category: 'AI',
      popular: true
    },
    {
      id: 'cyber-shield-enterprise',
      name: 'Cyber Shield Enterprise',
      description: 'Comprehensive cybersecurity suite with real-time threat detection and automated response.',
      icon: Shield,
      features: ['Real-time Threat Detection', 'Automated Response', '24/7 Monitoring', 'Compliance Reporting', 'Incident Response'],
      pricing: { basic: 199, pro: 599, enterprise: 1999 },
      category: 'Security',
      popular: true
    },
    {
      id: 'cloud-optimizer',
      name: 'Cloud Optimizer Pro',
      description: 'Intelligent cloud infrastructure management with cost optimization and performance monitoring.',
      icon: Cloud,
      features: ['Cost Optimization', 'Performance Monitoring', 'Auto-scaling', 'Multi-cloud Support', 'Security Compliance'],
      pricing: { basic: 149, pro: 449, enterprise: 1499 },
      category: 'Cloud'
    },
    {
      id: 'data-insights-ai',
      name: 'Data Insights AI',
      description: 'AI-powered business intelligence platform with predictive analytics and automated reporting.',
      icon: BarChart3,
      features: ['Predictive Analytics', 'Automated Reports', 'Real-time Dashboards', 'Data Visualization', 'Custom Models'],
      pricing: { basic: 79, pro: 249, enterprise: 799 },
      category: 'Analytics',
      new: true
    },
    {
      id: 'code-assistant-ai',
      name: 'Code Assistant AI',
      description: 'Intelligent code generation and review tool with automated testing and documentation.',
      icon: Code,
      features: ['Code Generation', 'Automated Testing', 'Code Review', 'Documentation', 'Version Control'],
      pricing: { basic: 59, pro: 179, enterprise: 599 },
      category: 'Development'
    },
    {
      id: 'mobile-app-builder',
      name: 'Mobile App Builder',
      description: 'No-code mobile app development platform with AI-powered design and deployment.',
      icon: Smartphone,
      features: ['No-code Development', 'AI Design Assistant', 'Cross-platform', 'App Store Deployment', 'Analytics'],
      pricing: { basic: 89, pro: 269, enterprise: 899 },
      category: 'Mobile',
      new: true
    },
    {
      id: 'computer-vision-pro',
      name: 'Computer Vision Pro',
      description: 'Advanced image and video analysis with object detection and facial recognition capabilities.',
      icon: Eye,
      features: ['Object Detection', 'Facial Recognition', 'Image Classification', 'Video Analysis', 'Custom Models'],
      pricing: { basic: 129, pro: 389, enterprise: 1299 },
      category: 'AI'
    },
    {
      id: 'database-optimizer',
      name: 'Database Optimizer',
      description: 'Intelligent database performance optimization with automated tuning and monitoring.',
      icon: Database,
      features: ['Performance Tuning', 'Query Optimization', 'Automated Monitoring', 'Backup Management', 'Scaling'],
      pricing: { basic: 69, pro: 209, enterprise: 699 },
      category: 'Cloud'
    },
    {
      id: 'api-gateway-pro',
      name: 'API Gateway Pro',
      description: 'Enterprise-grade API management with security, monitoring, and rate limiting.',
      icon: Globe,
      features: ['API Security', 'Rate Limiting', 'Monitoring', 'Documentation', 'Versioning'],
      pricing: { basic: 49, pro: 149, enterprise: 499 },
      category: 'Development'
    },
    {
      id: 'threat-intelligence',
      name: 'Threat Intelligence',
      description: 'Advanced threat detection and intelligence platform with machine learning capabilities.',
      icon: Lock,
      features: ['Threat Detection', 'Machine Learning', 'Intelligence Feeds', 'Incident Response', 'Compliance'],
      pricing: { basic: 179, pro: 539, enterprise: 1799 },
      category: 'Security'
    },
    {
      id: 'performance-monitor',
      name: 'Performance Monitor',
      description: 'Real-time application performance monitoring with AI-powered insights and alerts.',
      icon: Zap,
      features: ['Real-time Monitoring', 'AI Insights', 'Alerting', 'Performance Analytics', 'Root Cause Analysis'],
      pricing: { basic: 99, pro: 299, enterprise: 999 },
      category: 'Analytics'
    },
    {
      id: 'ai-content-generator',
      name: 'AI Content Generator',
      description: 'Intelligent content creation platform with SEO optimization and multi-format support.',
      icon: Brain,
      features: ['Content Generation', 'SEO Optimization', 'Multi-format', 'Brand Voice', 'Analytics'],
      pricing: { basic: 39, pro: 119, enterprise: 399 },
      category: 'AI',
      new: true
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', count: services.length },
    { id: 'AI', name: 'AI Services', count: services.filter(s => s.category === 'AI').length },
    { id: 'Security', name: 'Security', count: services.filter(s => s.category === 'Security').length },
    { id: 'Cloud', name: 'Cloud', count: services.filter(s => s.category === 'Cloud').length },
    { id: 'Analytics', name: 'Analytics', count: services.filter(s => s.category === 'Analytics').length },
    { id: 'Development', name: 'Development', count: services.filter(s => s.category === 'Development').length },
    { id: 'Mobile', name: 'Mobile', count: services.filter(s => s.category === 'Mobile').length }
  ];

  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(service => service.category === activeCategory);

  return (
    <div className="py-20 bg-gradient-to-b from-gray-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Our Micro SAAS Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our comprehensive suite of AI-powered, security-focused, and cloud-native solutions 
            designed to accelerate your digital transformation.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover-glow'
                  : 'glass text-gray-300 hover:text-white hover:bg-cyan-400/10'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className={`group relative glass rounded-2xl p-8 hover-glow transition-all duration-500 ${
                  hoveredService === service.id ? 'scale-105' : 'scale-100'
                }`}
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Badges */}
                <div className="absolute top-4 right-4 flex gap-2">
                  {service.popular && (
                    <span className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold rounded-full">
                      Popular
                    </span>
                  )}
                  {service.new && (
                    <span className="px-3 py-1 bg-gradient-to-r from-green-400 to-cyan-500 text-black text-xs font-bold rounded-full">
                      New
                    </span>
                  )}
                </div>

                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-cyan-400" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                  {service.name}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-400 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                    {service.features.length > 3 && (
                      <li className="text-sm text-cyan-400">
                        +{service.features.length - 3} more features
                      </li>
                    )}
                  </ul>
                </div>

                {/* Pricing */}
                <div className="mb-6">
                  <div className="flex items-baseline mb-2">
                    <span className="text-3xl font-bold text-white">${service.pricing.pro}</span>
                    <span className="text-gray-400 ml-2">/month</span>
                  </div>
                  <div className="text-sm text-gray-400">
                    Pro plan • Enterprise from ${service.pricing.enterprise}/month
                  </div>
                </div>

                {/* CTA */}
                <div className="flex gap-3">
                  <Link
                    to={`/services/${service.id}`}
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 text-center group/btn"
                  >
                    <span className="flex items-center justify-center">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                  <Link
                    to="/contact"
                    className="px-4 py-3 glass border border-cyan-400/50 text-cyan-400 rounded-lg hover:bg-cyan-400/10 transition-all duration-300"
                  >
                    <Star className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="glass rounded-2xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-gray-300 mb-8">
              Contact our experts to discuss your specific needs and get a customized solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover-glow hover-scale transition-all duration-300"
              >
                Get Free Consultation
              </Link>
              <Link
                to="/pricing"
                className="px-8 py-4 glass border border-cyan-400/50 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300"
              >
                View All Pricing
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesShowcase;