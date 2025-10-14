'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { 
  CpuChipIcon,
  ShieldCheckIcon,
  CloudIcon,
  ChartBarIcon,
  GlobeAltIcon,
  RocketLaunchIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  PhoneIcon,
  EnvelopeIcon,
  CurrencyDollarIcon,
  ClockIcon,
  UserGroupIcon,
  CogIcon
} from '@heroicons/react/24/outline';

export default function MicroSaaSSolutionsPage() {
  const microSaaSProducts = [
    {
      title: "AI-Powered Analytics Dashboard",
      description: "Real-time business analytics with AI-driven insights and predictive modeling for data-driven decision making.",
      icon: ChartBarIcon,
      features: [
        "Real-time data visualization",
        "AI-powered insights",
        "Custom dashboard creation",
        "Automated reporting",
        "Multi-source data integration",
        "Mobile-responsive design"
      ],
      color: "from-blue-500 to-indigo-500",
      price: "$299/month",
      setupFee: "$1,500",
      benefits: ["40% faster insights", "Real-time updates", "Custom dashboards"],
      useCases: ["E-commerce analytics", "Marketing performance", "Financial reporting"],
      href: "/ai-analytics-dashboard"
    },
    {
      title: "AI Content Management System",
      description: "Intelligent content creation, management, and optimization platform with AI-powered writing assistance.",
      icon: CpuChipIcon,
      features: [
        "AI content generation",
        "SEO optimization",
        "Content scheduling",
        "Multi-language support",
        "Brand voice consistency",
        "Performance analytics"
      ],
      color: "from-purple-500 to-pink-500",
      price: "$199/month",
      setupFee: "$1,200",
      benefits: ["80% faster content creation", "SEO-optimized content", "Multi-language support"],
      useCases: ["Blog management", "Social media content", "Marketing campaigns"],
      href: "/ai-content-management"
    },
    {
      title: "AI Customer Support Bot",
      description: "Advanced conversational AI bot that provides 24/7 customer support with natural language understanding.",
      icon: ShieldCheckIcon,
      features: [
        "Natural language processing",
        "Multi-channel support",
        "Sentiment analysis",
        "Escalation to human agents",
        "Knowledge base integration",
        "Performance analytics"
      ],
      color: "from-green-500 to-emerald-500",
      price: "$149/month",
      setupFee: "$800",
      benefits: ["24/7 availability", "Instant responses", "Reduced support costs"],
      useCases: ["Customer inquiries", "Technical support", "Order tracking"],
      href: "/ai-customer-support"
    },
    {
      title: "AI Cybersecurity Monitor",
      description: "Real-time threat detection and security monitoring system powered by machine learning algorithms.",
      icon: ShieldCheckIcon,
      features: [
        "Real-time threat detection",
        "Automated incident response",
        "Security analytics",
        "Compliance monitoring",
        "Threat intelligence",
        "Custom security rules"
      ],
      color: "from-red-500 to-orange-500",
      price: "$399/month",
      setupFee: "$2,000",
      benefits: ["Real-time protection", "Automated responses", "Compliance ready"],
      useCases: ["Network security", "Data protection", "Compliance monitoring"],
      href: "/ai-cybersecurity-monitor"
    },
    {
      title: "AI Business Intelligence Pro",
      description: "Advanced business intelligence platform with AI-powered insights, forecasting, and decision support.",
      icon: ChartBarIcon,
      features: [
        "Advanced analytics",
        "Predictive modeling",
        "Custom reports",
        "Data visualization",
        "Trend analysis",
        "ROI tracking"
      ],
      color: "from-indigo-500 to-purple-500",
      price: "$349/month",
      setupFee: "$1,800",
      benefits: ["Data-driven decisions", "Predictive insights", "Custom reporting"],
      useCases: ["Financial analysis", "Market research", "Performance tracking"],
      href: "/ai-business-intelligence-pro"
    },
    {
      title: "AI Code Assistant Pro",
      description: "Intelligent code generation, review, and optimization tool for developers and development teams.",
      icon: CogIcon,
      features: [
        "Code generation",
        "Code review",
        "Bug detection",
        "Performance optimization",
        "Documentation generation",
        "Multi-language support"
      ],
      color: "from-cyan-500 to-blue-500",
      price: "$249/month",
      setupFee: "$1,000",
      benefits: ["Faster development", "Better code quality", "Reduced bugs"],
      useCases: ["Software development", "Code review", "Technical documentation"],
      href: "/ai-code-assistant-pro"
    }
  ];

  const benefits = [
    {
      icon: RocketLaunchIcon,
      title: "Rapid Deployment",
      description: "Get your micro SaaS solution up and running in days, not months."
    },
    {
      icon: CurrencyDollarIcon,
      title: "Cost Effective",
      description: "Start with minimal upfront investment and scale as you grow."
    },
    {
      icon: ShieldCheckIcon,
      title: "Secure & Reliable",
      description: "Enterprise-grade security and 99.9% uptime guarantee."
    },
    {
      icon: CogIcon,
      title: "Fully Customizable",
      description: "Tailored to your specific business needs and requirements."
    }
  ];

  return (
    <>
      <SEO 
        title="Micro SaaS Solutions - Zion Tech Group"
        description="Discover our comprehensive range of AI-powered micro SaaS solutions designed to solve specific business challenges with scalable, cost-effective applications."
        keywords="micro SaaS, AI solutions, business software, SaaS applications, custom software"
        url="/micro-saas-solutions"
      />

      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-purple-900/20 to-cyan-900/20"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
              Micro SaaS Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Powerful AI-Driven Applications for Modern Businesses
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
              Discover our comprehensive range of micro SaaS solutions designed to solve specific 
              business challenges with scalable, cost-effective applications powered by artificial intelligence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="group bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center gap-2"
              >
                Get Started Today
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/demo" 
                className="group border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center gap-2"
              >
                Schedule Demo
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Our Micro SaaS Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built for modern businesses that need powerful, focused solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Micro SaaS Products
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our range of AI-powered micro SaaS solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaaSProducts.map((product, index) => {
              const Icon = product.icon;
              return (
                <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105">
                  <div className={`w-16 h-16 bg-gradient-to-r ${product.color} rounded-lg flex items-center justify-center mb-6`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{product.title}</h3>
                  <p className="text-gray-300 mb-6">{product.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {product.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300">Monthly Price:</span>
                      <span className="text-2xl font-bold text-purple-400">{product.price}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Setup Fee:</span>
                      <span className="text-lg font-semibold text-cyan-400">{product.setupFee}</span>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Benefits:</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.benefits.map((benefit, benefitIndex) => (
                        <span key={benefitIndex} className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Link 
                    to={product.href}
                    className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Learn More
                    <ArrowRightIcon className="w-4 h-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Let's discuss which micro SaaS solution is right for your business needs.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="flex items-center justify-center gap-4 text-gray-300">
                <PhoneIcon className="w-6 h-6 text-purple-400" />
                <span>+1-302-464-0950</span>
              </div>
              <div className="flex items-center justify-center gap-4 text-gray-300">
                <EnvelopeIcon className="w-6 h-6 text-purple-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center gap-4 text-gray-300">
                <ClockIcon className="w-6 h-6 text-purple-400" />
                <span>24/7 Support</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300"
              >
                Get In Touch
              </Link>
              <Link 
                to="/demo" 
                className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}