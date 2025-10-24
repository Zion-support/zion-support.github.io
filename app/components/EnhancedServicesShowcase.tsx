import React from 'react';
import { Brain, Zap, Shield, Globe } from 'lucide-react';

const EnhancedServicesShowcase: React.FC = () => {
  const services = [
    {
      icon: Brain,
      title: 'AI Solutions',
      description: 'Transform your business with cutting-edge artificial intelligence',
      color: 'text-purple-400',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
      stats: '95% Accuracy'
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Boost your application performance with our expert optimization services',
      color: 'text-yellow-400',
      features: ['Code Optimization', 'Database Tuning', 'Caching Strategies', 'Load Balancing'],
      stats: '10x Faster'
    },
    {
      icon: Shield,
      title: 'Security Services',
      description: 'Protect your digital assets with enterprise-grade security solutions',
      color: 'text-green-400',
      features: ['Penetration Testing', 'Security Audits', 'Compliance', 'Threat Monitoring'],
      stats: '99.9% Uptime'
    },
    {
      icon: Globe,
      title: 'Cloud Solutions',
      description: 'Scale your infrastructure with our comprehensive cloud services',
      color: 'text-blue-400',
      features: ['Cloud Migration', 'DevOps', 'Containerization', 'Auto-scaling'],
      stats: '50% Cost Reduction'
    }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Enhanced Services Showcase
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our comprehensive range of technology services designed to accelerate your business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className={`text-xl font-semibold ${service.color} text-center mb-3`}>
                {service.title}
              </h3>
              
              <p className="text-gray-300 text-center mb-4 text-sm">
                {service.description}
              </p>
              
              <ul className="space-y-2 mb-4">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-gray-400 text-sm flex items-center">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">
                  {service.stats}
                </div>
                <div className="text-gray-400 text-xs">
                  Average Result
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EnhancedServicesShowcase;