import React from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Target,
  Rocket,
  Users,
  CheckCircle,
  ArrowRight,
  Zap,
  Shield,
  BarChart3,
  Globe
} from 'lucide-react';

const MicroSAASPage: React.FC = () => {
  const features = [
    {
      icon: <Target className="w-8 h-8 text-blue-500" />,
      title: 'Focused Solutions',
      description: 'Specialized tools designed for specific business needs and workflows.'
    },
    {
      icon: <Rocket className="w-8 h-8 text-green-500" />,
      title: 'Rapid Deployment',
      description: 'Quick setup and deployment to get your business running faster.'
    },
    {
      icon: <Users className="w-8 h-8 text-purple-500" />,
      title: 'User-Friendly',
      description: 'Intuitive interfaces designed for maximum productivity and ease of use.'
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-orange-500" />,
      title: 'Reliable Performance',
      description: 'Consistent, reliable performance with 99.9% uptime guarantee.'
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: 'Lightning Fast',
      description: 'Optimized for speed and performance to enhance your productivity.'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'Secure & Compliant',
      description: 'Enterprise-grade security with full compliance and data protection.'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-cyan-500" />,
      title: 'Analytics & Insights',
      description: 'Comprehensive analytics to track performance and optimize operations.'
    },
    {
      icon: <Globe className="w-8 h-8 text-indigo-500" />,
      title: 'Global Access',
      description: 'Access your tools from anywhere with our cloud-based platform.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group</title>
        <meta name="description" content="Specialized micro SAAS solutions designed for specific business needs and workflows." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              Micro SAAS Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Specialized software-as-a-service solutions designed to address specific 
              business challenges with precision and efficiency.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-all duration-300">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Why Choose Micro SAAS?
            </h2>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
              Micro SAAS solutions offer focused, specialized tools that address specific 
              business needs without the complexity of larger enterprise systems. 
              They provide quick implementation, lower costs, and targeted functionality 
              that delivers immediate value.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300 inline-flex items-center">
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MicroSAASPage;