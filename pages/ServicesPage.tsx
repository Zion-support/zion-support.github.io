"use client";
import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { 
  CheckCircle,
  Star,
  ArrowRight,
  Server,
  Rocket,
  Brain,
  Cloud,
  Shield
} from "lucide-react";

const ServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'ai', name: 'AI Services' },
    { id: 'it', name: 'IT Services' },
    { id: 'saas', name: 'Micro SAAS' }
  ];

  const services = [
    {
      id: 'ai-analytics-dashboard',
      name: 'AI Analytics Dashboard Pro',
      category: 'ai',
      description: 'Advanced business intelligence platform with AI-powered insights and real-time analytics',
      price: '$299/month',
      icon: <Brain className="w-8 h-8" />,
      features: ['Real-time Analytics', 'AI Predictions', 'Custom Dashboards', 'API Integration']
    },
    {
      id: 'ai-content-generator',
      name: 'AI Content Generator Studio',
      category: 'ai',
      description: 'Automated content creation platform with multi-language support and brand voice customization',
      price: '$199/month',
      icon: <Rocket className="w-8 h-8" />,
      features: ['Multi-language Support', 'Brand Voice Customization', 'Content Templates', 'SEO Optimization']
    },
    {
      id: 'ai-customer-support',
      name: 'AI Customer Support Suite',
      category: 'ai',
      description: 'Intelligent customer service automation with natural language processing and sentiment analysis',
      price: '$399/month',
      icon: <CheckCircle className="w-8 h-8" />,
      features: ['Natural Language Processing', 'Sentiment Analysis', '24/7 Support', 'Multi-channel Integration']
    },
    {
      id: 'cloud-infrastructure',
      name: 'Cloud Infrastructure Management',
      category: 'it',
      description: 'Comprehensive cloud solutions with auto-scaling, monitoring, and security compliance',
      price: '$199/month',
      icon: <Cloud className="w-8 h-8" />,
      features: ['Auto-scaling', '99.9% Uptime', 'Security Compliance', 'Cost Optimization']
    },
    {
      id: 'cybersecurity-suite',
      name: 'Advanced Cybersecurity Suite',
      category: 'it',
      description: 'Enterprise-grade security monitoring and protection with real-time threat detection',
      price: '$499/month',
      icon: <Shield className="w-8 h-8" />,
      features: ['Threat Detection', 'Real-time Monitoring', 'Compliance Management', 'Incident Response']
    },
    {
      id: 'devops-automation',
      name: 'DevOps Automation Platform',
      category: 'it',
      description: 'Complete CI/CD pipeline automation with monitoring, testing, and deployment management',
      price: '$349/month',
      icon: <Server className="w-8 h-8" />,
      features: ['CI/CD Automation', 'Automated Testing', 'Deployment Management', 'Monitoring & Alerting']
    },
    {
      id: 'project-management-pro',
      name: 'Project Management Pro',
      category: 'saas',
      description: 'Comprehensive project management platform with AI-powered insights and team collaboration',
      price: '$149/month',
      icon: <CheckCircle className="w-8 h-8" />,
      features: ['Task Management', 'Team Collaboration', 'AI Insights', 'Resource Planning']
    },
    {
      id: 'api-management',
      name: 'API Management Platform',
      category: 'saas',
      description: 'Complete API lifecycle management with monitoring, security, and developer portal',
      price: '$179/month',
      icon: <Server className="w-8 h-8" />,
      features: ['API Gateway', 'Rate Limiting', 'Analytics Dashboard', 'Developer Portal']
    },
    {
      id: 'automation-tools',
      name: 'Business Automation Tools',
      category: 'saas',
      description: 'Workflow automation platform with drag-and-drop builder and integration capabilities',
      price: '$99/month',
      icon: <Rocket className="w-8 h-8" />,
      features: ['Drag-and-Drop Builder', 'Workflow Templates', 'Integration Library', 'Analytics & Reporting']
    }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  return (
    <>
      <Helmet>
        <title>Our Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI services, IT solutions, and micro SAAS platforms designed to transform your business operations." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Our Services
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Comprehensive technology solutions designed to transform your business operations and drive innovation.
            </p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-10 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-colors duration-200 ${
                    selectedCategory === category.id
                      ? "bg-blue-600 text-white"
                      : "bg-white/10 text-gray-300 hover:bg-white/20"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <div key={service.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-blue-500/50 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-blue-400">{service.icon}</div>
                    <span className="text-blue-400 font-bold">{service.price}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{service.name}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="h-4 w-4 text-blue-400 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's work together to create powerful solutions that transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Contact Us
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServicesPage;