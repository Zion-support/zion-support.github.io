import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Zap, Shield, Brain, Globe, Database, BarChart3 } from 'lucide-react';

export default function MicroSaasServicesPage() {
  const services = [
    {
      title: "Zion Analytics Pro",
      description: "Advanced business intelligence and analytics platform with real-time insights",
      icon: <BarChart3 className="w-8 h-8" />,
      features: ["Real-time dashboards", "Custom reports", "Data visualization", "API integration"]
    },
    {
      title: "Zion Security Shield",
      description: "Comprehensive cybersecurity solution for small to medium businesses",
      icon: <Shield className="w-8 h-8" />,
      features: ["Threat detection", "Vulnerability scanning", "Compliance monitoring", "Incident response"]
    },
    {
      title: "Zion AI Assistant",
      description: "Intelligent virtual assistant powered by advanced AI technology",
      icon: <Brain className="w-8 h-8" />,
      features: ["Natural language processing", "Task automation", "Smart scheduling", "Voice commands"]
    },
    {
      title: "Zion Cloud Vault",
      description: "Secure cloud storage and file management solution",
      icon: <Database className="w-8 h-8" />,
      features: ["Encrypted storage", "File sharing", "Version control", "Backup automation"]
    },
    {
      title: "Zion Content Studio",
      description: "AI-powered content creation and management platform",
      icon: <Globe className="w-8 h-8" />,
      features: ["Content generation", "SEO optimization", "Social media management", "Analytics"]
    },
    {
      title: "Zion Performance Optimizer",
      description: "Website and application performance monitoring and optimization",
      icon: <Zap className="w-8 h-8" />,
      features: ["Performance monitoring", "Speed optimization", "Error tracking", "Uptime monitoring"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Micro SAAS Services - Zion Tech Group</title>
        <meta name="description" content="Innovative micro SAAS solutions by Zion Tech Group - Transform your business with our cutting-edge software services" />
      </Helmet>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Micro SAAS Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our innovative micro SAAS solutions designed to streamline your business operations and boost productivity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center text-white mx-auto mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-4 text-center">{service.title}</h3>
              <p className="text-gray-300 mb-6 text-center">{service.description}</p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-sm text-gray-300 flex items-center">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-2 px-4 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                Learn More
              </button>
            </div>
          ))}
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
          <h2 className="text-2xl font-semibold text-white mb-6 text-center">Why Choose Our Micro SAAS Solutions?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Scalable Solutions</h3>
              <p className="text-gray-300 mb-4">
                Our micro SAAS services are designed to grow with your business, from startup to enterprise scale.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Cost-Effective</h3>
              <p className="text-gray-300 mb-4">
                Get enterprise-level functionality at a fraction of the cost with our affordable pricing models.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Easy Integration</h3>
              <p className="text-gray-300 mb-4">
                Seamlessly integrate our solutions with your existing tools and workflows.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">24/7 Support</h3>
              <p className="text-gray-300 mb-4">
                Get round-the-clock support from our expert team to ensure your success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}