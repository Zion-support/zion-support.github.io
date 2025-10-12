import React from 'react';
import { Brain, Shield, Zap, Globe, ArrowRight } from 'lucide-react';

interface Service {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  features: string[];
  price: string;
  popular?: boolean;
}

const EnhancedServicesShowcase: React.FC = () => {
  const services: Service[] = [
    {
      icon: Brain,
      title: 'AI Solutions',
      description: 'Advanced artificial intelligence solutions for your business',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
      price: 'Starting at $299/month',
      popular: true
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your business',
      features: ['Threat Detection', 'Vulnerability Assessment', 'Security Monitoring', 'Incident Response'],
      price: 'Starting at $199/month'
    },
    {
      icon: Zap,
      title: 'Cloud Migration',
      description: 'Seamless migration to cloud infrastructure',
      features: ['Zero Downtime', 'Cost Optimization', 'Performance Enhancement', 'Security Compliance'],
      price: 'Starting at $499/month'
    },
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Modern web applications and websites',
      features: ['Responsive Design', 'SEO Optimization', 'Performance Tuning', 'Mobile First'],
      price: 'Starting at $399/month'
    }
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive technology solutions to transform your business
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 border ${
                service.popular ? 'border-cyan-400' : 'border-white/20'
              } hover:bg-white/20 transition-all duration-300`}
            >
              {service.popular && (
                <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-sm font-semibold px-3 py-1 rounded-full text-center mb-4">
                  Most Popular
                </div>
              )}
              
              <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center mb-4">
                <service.icon className="h-6 w-6 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
              <p className="text-gray-300 mb-4">{service.description}</p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3 flex-shrink-0"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="text-center">
                <p className="text-cyan-400 font-semibold mb-4">{service.price}</p>
                <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EnhancedServicesShowcase;