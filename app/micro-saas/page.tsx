import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Zap, Shield, Globe } from 'lucide-react';

const MicroSaaSPage: React.FC = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8 text-blue-400" />,
      title: "Lightning Fast",
      description: "Optimized for speed and performance"
    },
    {
      icon: <Shield className="w-8 h-8 text-green-400" />,
      title: "Secure",
      description: "Enterprise-grade security features"
    },
    {
      icon: <Globe className="w-8 h-8 text-purple-400" />,
      title: "Scalable",
      description: "Grows with your business needs"
    }
  ];

  const stats = [
    { number: '10,000+', label: 'Active Users' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Support Available' },
    { number: '30-day', label: 'Free Trial' }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group</title>
        <meta 
          name="description" 
          content="Comprehensive micro SaaS solutions for modern businesses. Scalable, secure, and efficient."
        />
        <meta 
          name="keywords" 
          content="micro saas, saas solutions, business software, cloud applications"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Micro SaaS Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Powerful, scalable micro SaaS applications designed to streamline your business operations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-600/50">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MicroSaaSPage;
