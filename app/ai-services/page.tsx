import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, ArrowRight, CheckCircle, Zap, BarChart3, Shield, Cloud, Code } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';

const AIServicesPage: React.FC = () => {
  const aiServices = [
    {
      id: 1,
      name: "AI Analytics",
      description: "Transform your data into actionable insights with our advanced AI analytics platform",
      icon: <BarChart3 className="w-8 h-8" />,
      features: [
        "Predictive analytics",
        "Real-time dashboards",
        "Custom reporting",
        "Data visualization"
      ],
      link: "/ai-analytics",
      featured: true
    },
    {
      id: 2,
      name: "AI Automation",
      description: "Streamline your business processes with intelligent automation solutions",
      icon: <Zap className="w-8 h-8" />,
      features: [
        "Workflow automation",
        "Process optimization",
        "Smart scheduling",
        "Task management"
      ],
      link: "/ai-automation",
      featured: true
    },
    {
      id: 3,
      name: "AI Security",
      description: "Protect your business with AI-powered cybersecurity solutions",
      icon: <Shield className="w-8 h-8" />,
      features: [
        "Threat detection",
        "Automated response",
        "Security monitoring",
        "Compliance reporting"
      ],
      link: "/ai-cybersecurity",
      featured: true
    },
    {
      id: 4,
      name: "AI Content Generation",
      description: "Create engaging content at scale with our AI content generation tools",
      icon: <Code className="w-8 h-8" />,
      features: [
        "Content creation",
        "SEO optimization",
        "Multi-language support",
        "Brand consistency"
      ],
      link: "/ai-content-generation",
      featured: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="AI Services - Zion Tech Group | Artificial Intelligence Solutions"
        description="Discover our comprehensive AI services including analytics, automation, security, and content generation. Transform your business with cutting-edge artificial intelligence solutions."
        keywords="AI services, artificial intelligence, machine learning, automation, analytics, AI security, content generation"
        canonical="https://ziontechgroup.com/ai-services"
      />
      
      <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              AI Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Harness the power of artificial intelligence to transform your business operations, 
              enhance decision-making, and drive innovation across all departments.
            </p>
          </div>

          {/* Featured Services */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8">Featured AI Solutions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.filter(service => service.featured).map((service) => (
                <div key={service.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center text-white mr-4">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white">{service.name}</h3>
                  </div>
                  <p className="text-gray-300 mb-4 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link 
                    to={service.link}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* All Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service) => (
              <div key={service.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center text-white mr-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{service.name}</h3>
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  to={service.link}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIServicesPage;
