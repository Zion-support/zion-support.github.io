import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, ArrowRight, CheckCircle, Star, Zap, Shield, BarChart3, Users, Award } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';
import ResponsiveGrid from '../components/ResponsiveGrid';

const AIServicesPage = () => {
  const services = [
    {
      id: "ai-analytics",
      name: "AI Analytics",
      description: "Advanced data analytics powered by artificial intelligence for deeper insights and better decision making",
      features: [
        "Predictive analytics",
        "Real-time data processing",
        "Automated reporting",
        "Custom dashboards"
      ],
      icon: <BarChart3 className="w-8 h-8" />,
      href: "/ai-analytics",
      featured: true
    },
    {
      id: "ai-automation",
      name: "AI Automation",
      description: "Intelligent automation solutions that streamline workflows and reduce manual tasks",
      features: [
        "Process automation",
        "Workflow optimization",
        "Task scheduling",
        "Error reduction"
      ],
      icon: <Zap className="w-8 h-8" />,
      href: "/ai-automation",
      featured: true
    },
    {
      id: "ai-business-intelligence",
      name: "AI Business Intelligence",
      description: "Transform raw data into actionable business insights with AI-powered analytics",
      features: [
        "Data visualization",
        "Trend analysis",
        "Performance metrics",
        "Strategic planning"
      ],
      icon: <Brain className="w-8 h-8" />,
      href: "/ai-business-intelligence",
      featured: true
    },
    {
      id: "ai-content-generation",
      name: "AI Content Generation",
      description: "Create high-quality content at scale with AI-powered content generation tools",
      features: [
        "Automated content creation",
        "SEO optimization",
        "Multi-language support",
        "Brand consistency"
      ],
      icon: <Users className="w-8 h-8" />,
      href: "/ai-content-generation",
      featured: false
    },
    {
      id: "ai-customer-service",
      name: "AI Customer Service",
      description: "Enhance customer experience with intelligent chatbots and automated support systems",
      features: [
        "24/7 customer support",
        "Natural language processing",
        "Sentiment analysis",
        "Escalation management"
      ],
      icon: <Award className="w-8 h-8" />,
      href: "/ai-customer-service",
      featured: false
    },
    {
      id: "ai-cybersecurity",
      name: "AI Cybersecurity",
      description: "Advanced threat detection and prevention using artificial intelligence",
      features: [
        "Threat detection",
        "Anomaly detection",
        "Automated response",
        "Security monitoring"
      ],
      icon: <Shield className="w-8 h-8" />,
      href: "/ai-cybersecurity",
      featured: true
    }
  ];

  const stats = [
    { label: "AI Solutions Deployed", value: "500+", icon: <Brain className="w-6 h-6" /> },
    { label: "Client Satisfaction", value: "98%", icon: <Star className="w-6 h-6" /> },
    { label: "Process Automation", value: "85%", icon: <Zap className="w-6 h-6" /> },
    { label: "Cost Reduction", value: "40%", icon: <BarChart3 className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="AI Services - Zion Tech Group | Artificial Intelligence Solutions"
        description="Comprehensive AI services including analytics, automation, business intelligence, and cybersecurity. Transform your business with cutting-edge artificial intelligence solutions."
        keywords="AI services, artificial intelligence, machine learning, automation, analytics, business intelligence, cybersecurity, AI solutions"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Services
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with cutting-edge artificial intelligence solutions. 
              From analytics to automation, we deliver AI-powered innovations that drive growth and efficiency.
            </p>
            <FuturisticButton
              href="#services"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              Explore Our AI Solutions
              <ArrowRight className="w-5 h-5 ml-2" />
            </FuturisticButton>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <ResponsiveGrid className="grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <FuturisticCard key={index} className="text-center p-6">
                <div className="text-blue-400 mb-4 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-300">
                  {stat.label}
                </div>
              </FuturisticCard>
            ))}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our AI Services
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive AI solutions designed to meet your specific business needs
            </p>
          </div>

          <ResponsiveGrid className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <FuturisticCard key={service.id} className="p-6 hover:scale-105 transition-transform">
                <div className="text-blue-400 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {service.name}
                </h3>
                <p className="text-gray-300 mb-4">
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
                <Link
                  to={service.href}
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </FuturisticCard>
            ))}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <FuturisticCard className="text-center p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let our AI experts help you identify opportunities and implement solutions that drive real results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton
                href="/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </FuturisticButton>
              <FuturisticButton
                href="/demo"
                variant="outline"
                className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white"
              >
                Schedule a Demo
              </FuturisticButton>
            </div>
=======
import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, ArrowRight, CheckCircle, Star, Zap, Shield, BarChart3, Cloud, Code, Database, Mail, Users, Clock, DollarSign } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
          </FuturisticCard>
        </ResponsiveContainer>
      </section>
    </div>
  );
};
=======

const AIServicesPage = () => {
  const services = [
    {
      id: 'ai-analytics',
      title: 'AI Analytics',
      description: 'Advanced analytics powered by artificial intelligence for data-driven insights.',
      icon: BarChart3,
      features: ['Predictive Analytics', 'Real-time Insights', 'Custom Dashboards'],
      price: 'Starting at $299/month'
    },
    {
      id: 'ai-content-generation',
      title: 'AI Content Generation',
      description: 'Automated content creation using cutting-edge AI technology.',
      icon: Code,
      features: ['Blog Posts', 'Social Media', 'Marketing Copy'],
      price: 'Starting at $199/month'
    },
    {
      id: 'ai-customer-support',
      title: 'AI Customer Support',
      description: 'Intelligent chatbots and automated customer service solutions.',
      icon: Users,
      features: ['24/7 Support', 'Multi-language', 'Smart Routing'],
      price: 'Starting at $399/month'
    },
    {
      id: 'ai-cybersecurity',
      title: 'AI Cybersecurity',
      description: 'AI-powered security solutions to protect your digital assets.',
      icon: Shield,
      features: ['Threat Detection', 'Automated Response', 'Risk Assessment'],
      price: 'Starting at $599/month'
    },
    {
      id: 'ai-data-analytics',
      title: 'AI Data Analytics',
      description: 'Transform raw data into actionable business intelligence.',
      icon: Database,
      features: ['Data Mining', 'Pattern Recognition', 'Trend Analysis'],
      price: 'Starting at $349/month'
    },
    {
      id: 'ai-document-processing',
      title: 'AI Document Processing',
      description: 'Automated document analysis and processing solutions.',
      icon: Mail,
      features: ['OCR Technology', 'Data Extraction', 'Automated Workflows'],
      price: 'Starting at $249/month'
    }
  ];

  return (
    <div className="min-h-screen">
      <EnhancedSEO 
        title="AI Services - Zion Tech Group"
        description="Comprehensive AI services including analytics, content generation, customer support, cybersecurity, and data processing solutions."
        keywords="AI services, artificial intelligence, machine learning, analytics, automation, cybersecurity, data processing"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Harness the power of artificial intelligence to transform your business operations and drive innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              Get Started <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              to="/demo" 
              className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-3 px-8 rounded-lg transition-colors"
            >
              View Demo
            </Link>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div key={service.id} className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 hover:border-blue-500 transition-colors p-6">
                <div className="flex items-center justify-between mb-4">
                  <IconComponent className="w-12 h-12 text-blue-400" />
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg font-bold text-blue-400">{service.price}</span>
                  <div className="flex items-center text-sm text-gray-400">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>24/7 Support</span>
                  </div>
                </div>
                
                <Link 
                  to={`/${service.id}`}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business with AI?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how our AI services can help you achieve your business goals and stay ahead of the competition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
            >
              <Brain className="w-5 h-5" />
              Start Your AI Journey
            </Link>
            <Link 
              to="/pricing" 
              className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-colors"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIServicesPage;