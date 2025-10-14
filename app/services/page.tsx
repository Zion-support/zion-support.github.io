import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Brain, 
  Shield, 
  Globe, 
  Cloud, 
  BarChart3, 
  Zap, 
  Lock, 
  Cpu, 
  Database, 
  Smartphone,
  ArrowRight,
  Check,
  Star,
  Users,
  Clock,
  Award
} from 'lucide-react';

const ServicesPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ai');

  const aiServices = [
    {
      name: "AI Content Generator Pro",
      description: "Advanced AI-powered content creation platform with GPT-4 integration",
      features: ["Multi-language support", "SEO optimization", "Brand voice training", "Content scheduling"],
      price: "$99/month",
      icon: Brain,
      popular: true
    },
    {
      name: "AI Business Intelligence Suite",
      description: "Comprehensive analytics and reporting with AI-driven insights",
      features: ["Real-time dashboards", "Predictive analytics", "Custom reports", "Data visualization"],
      price: "$199/month",
      icon: BarChart3
    },
    {
      name: "AI Code Assistant Enterprise",
      description: "AI-powered coding assistant with advanced code generation and review",
      features: ["Code generation", "Bug detection", "Performance optimization", "Security scanning"],
      price: "$149/month",
      icon: Cpu
    },
    {
      name: "AI Customer Support Bot",
      description: "Intelligent chatbot with natural language processing capabilities",
      features: ["24/7 availability", "Multi-channel support", "Sentiment analysis", "Escalation management"],
      price: "$79/month",
      icon: Users
    },
    {
      name: "AI Data Analytics Platform",
      description: "Advanced data processing and analysis with machine learning models",
      features: ["Data integration", "ML model training", "Automated insights", "API access"],
      price: "$299/month",
      icon: Database
    },
    {
      name: "AI Security Monitor",
      description: "AI-powered threat detection and security monitoring system",
      features: ["Real-time monitoring", "Threat detection", "Incident response", "Compliance reporting"],
      price: "$249/month",
      icon: Shield
    }
  ];

  const itServices = [
    {
      name: "Cloud Infrastructure Management",
      description: "Complete cloud setup, migration, and optimization services",
      features: ["AWS/Azure/GCP setup", "Cost optimization", "Security hardening", "24/7 monitoring"],
      price: "From $500/month",
      icon: Cloud
    },
    {
      name: "Cybersecurity Solutions",
      description: "Comprehensive security services to protect your digital assets",
      features: ["Security audit", "Penetration testing", "Incident response", "Security training"],
      price: "From $800/month",
      icon: Lock
    },
    {
      name: "5G Network Implementation",
      description: "Next-generation 5G network setup and optimization",
      features: ["Network design", "Equipment installation", "Performance tuning", "Maintenance"],
      price: "From $2000/month",
      icon: Globe
    },
    {
      name: "Mobile App Development",
      description: "Native and cross-platform mobile application development",
      features: ["iOS & Android apps", "UI/UX design", "Backend integration", "App store deployment"],
      price: "From $150/hour",
      icon: Smartphone
    },
    {
      name: "API Development & Management",
      description: "RESTful and GraphQL API development with management platform",
      features: ["API design", "Documentation", "Rate limiting", "Analytics"],
      price: "From $100/hour",
      icon: Zap
    },
    {
      name: "Database Optimization",
      description: "Database performance tuning and optimization services",
      features: ["Performance analysis", "Query optimization", "Indexing strategy", "Backup solutions"],
      price: "From $150/hour",
      icon: Database
    }
  ];

  const microSaasServices = [
    {
      name: "AI Content Studio",
      description: "All-in-one content creation platform with AI assistance",
      features: ["Blog posts", "Social media", "Email campaigns", "Video scripts"],
      price: "$49/month",
      icon: Brain,
      popular: true
    },
    {
      name: "Business Analytics Dashboard",
      description: "Real-time business metrics and KPI tracking",
      features: ["Custom dashboards", "Data connectors", "Automated reports", "Team collaboration"],
      price: "$79/month",
      icon: BarChart3
    },
    {
      name: "Automated Testing Suite",
      description: "AI-powered automated testing for web and mobile applications",
      features: ["Test generation", "Cross-browser testing", "Performance testing", "CI/CD integration"],
      price: "$99/month",
      icon: Zap
    },
    {
      name: "API Management Platform",
      description: "Complete API lifecycle management and monitoring",
      features: ["API gateway", "Rate limiting", "Analytics", "Developer portal"],
      price: "$129/month",
      icon: Cpu
    },
    {
      name: "Code Security Auditor",
      description: "Automated code security scanning and vulnerability detection",
      features: ["Security scanning", "Vulnerability reports", "Compliance checks", "Fix suggestions"],
      price: "$89/month",
      icon: Shield
    },
    {
      name: "Performance Monitor Pro",
      description: "Application performance monitoring and optimization",
      features: ["Real-time monitoring", "Alert system", "Performance insights", "Capacity planning"],
      price: "$69/month",
      icon: Clock
    }
  ];

  const tabs = [
    { id: 'ai', name: 'AI Services', count: aiServices.length },
    { id: 'it', name: 'IT Services', count: itServices.length },
    { id: 'saas', name: 'Micro SAAS', count: microSaasServices.length }
  ];

  const getCurrentServices = () => {
    switch (activeTab) {
      case 'ai': return aiServices;
      case 'it': return itServices;
      case 'saas': return microSaasServices;
      default: return aiServices;
    }
  };

  return (
    <>
      <Helmet>
        <title>Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI, IT, and Micro SAAS services from Zion Tech Group. Transform your business with cutting-edge technology solutions." />
        <meta name="keywords" content="AI services, IT services, micro saas, cloud solutions, cybersecurity, 5G technology" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Our Services
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Comprehensive AI, IT, and Micro SAAS solutions designed to accelerate your business growth
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="bg-blue-600/20 backdrop-blur-sm border border-blue-500/30 rounded-lg px-6 py-3">
                  <span className="text-blue-300 font-semibold">500+ Projects Completed</span>
                </div>
                <div className="bg-green-600/20 backdrop-blur-sm border border-green-500/30 rounded-lg px-6 py-3">
                  <span className="text-green-300 font-semibold">99.9% Uptime</span>
                </div>
                <div className="bg-purple-600/20 backdrop-blur-sm border border-purple-500/30 rounded-lg px-6 py-3">
                  <span className="text-purple-300 font-semibold">24/7 Support</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Tabs */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-8 py-4 rounded-lg font-semibold transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                  }`}
                >
                  {tab.name} ({tab.count})
                </button>
              ))}
            </div>

            {/* Services Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {getCurrentServices().map((service, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 relative ${
                    service.popular ? 'ring-2 ring-blue-500' : ''
                  }`}
                >
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
                        <div className="text-2xl font-bold text-blue-600">{service.price}</div>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-700">
                          <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex flex-col sm:flex-row gap-3">
                      <button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                        Get Started
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </button>
                      <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our experts today to discuss your specific needs and get a customized solution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                  Schedule Consultation
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                  View Case Studies
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServicesPage;