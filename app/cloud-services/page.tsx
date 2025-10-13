import React from 'react';
import { Link } from 'react-router-dom';

const CloudServicesPage: React.FC = () => {
  const benefits = [
    {
      icon: <Zap className="w-8 h-8 text-cyan-400" />,
      title: "Lightning Fast",
      description: "Deploy and scale applications in seconds"
    },
    {
      icon: <Shield className="w-8 h-8 text-green-400" />,
      title: "Secure & Reliable",
      description: "Enterprise-grade security and 99.9% uptime"
    },
    {
      icon: <Globe className="w-8 h-8 text-purple-400" />,
      title: "Global Reach",
      description: "Deploy anywhere with global infrastructure"
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-yellow-400" />,
      title: "Cost Effective",
      description: "Pay only for what you use, when you use it"
    }
  ];

  const benefits = [
    {
      title: "Scalability",
      description: "Scale your infrastructure up or down based on demand with cloud elasticity.",
      icon: <BarChart3 className="w-8 h-8" />
    },
    {
      title: "Security",
      description: "Enterprise-grade security with encryption, access controls, and compliance.",
      icon: <Shield className="w-8 h-8" />
    },
    {
      title: "Cost Efficiency",
      description: "Pay only for what you use with flexible pricing models and cost optimization.",
      icon: <Zap className="w-8 h-8" />
    },
    {
      title: "Reliability",
      description: "High availability and disaster recovery solutions for business continuity.",
      icon: <CheckCircle className="w-8 h-8" />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Cloud Services - Zion Tech Group</title>
        <meta name="description" content="Cloud Services solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">Cloud Services</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Discover our comprehensive cloud services solutions designed to meet your business needs.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Expert Solutions</h3>
              <p className="text-gray-300">
                Our team of experts delivers tailored solutions for your specific requirements.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Cutting-Edge Technology</h3>
              <p className="text-gray-300">
                We use the latest technologies and best practices to ensure optimal performance.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">24/7 Support</h3>
              <p className="text-gray-300">
                Get round-the-clock support from our dedicated team of professionals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
