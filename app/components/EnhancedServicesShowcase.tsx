import React from 'react';
<<<<<<< HEAD
import { Brain, Shield, Zap, Globe, ArrowRight } from 'lucide-react';

<<<<<<< HEAD
interface Service {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  features: string[];
}

interface EnhancedServicesShowcaseProps {
  className?: string;
}

const EnhancedServicesShowcase: React.FC<EnhancedServicesShowcaseProps> = ({ className = '' }) => {
  const services: Service[] = [
=======
import { Brain, Cloud, Shield, BarChart, Zap, Globe, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const EnhancedServicesShowcase: React.FC = () => {
  const services = [
>>>>>>> cursor/fix-errors-and-merge-to-main-09f3
    {
      icon: Brain,
      title: 'AI Solutions',
      description: 'Cutting-edge artificial intelligence solutions to automate and optimize your business processes.',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics']
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your business from cyber threats and data breaches.',
      features: ['Security Audits', 'Threat Detection', 'Data Protection', 'Compliance Management']
    },
    {
      icon: Zap,
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions to modernize your infrastructure and reduce costs.',
      features: ['Cloud Migration', 'Infrastructure as Code', 'Auto-scaling', 'Disaster Recovery']
    },
    {
      icon: Globe,
      title: 'Digital Transformation',
      description: 'Complete digital transformation services to modernize your business and stay competitive.',
      features: ['Strategy Development', 'Technology Integration', 'Change Management', 'Training & Support']
    }
  ];

  return (
<<<<<<< HEAD
    <div className={`enhanced-services-showcase ${className}`}>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Core Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI and IT solutions designed to transform your business and drive innovation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center mb-4 mx-auto">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 text-center">{service.title}</h3>
                <p className="text-gray-300 text-center mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-gray-400 flex items-center">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
=======
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Our Core Services</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive AI and IT solutions designed to transform your business and drive innovation
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="cyber-card p-8 group hover:scale-105 transition-transform">
              <div className="flex items-center mb-4">
                <service.icon className="h-12 w-12 text-cyan-400 mr-4" />
                <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
              </div>
              <p className="text-gray-300 mb-6">{service.description}</p>
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-cyan-400 mb-3">Key Features</h4>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
>>>>>>> cursor/fix-errors-and-merge-to-main-09f3
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
<<<<<<< HEAD
            ))}
          </div>
          
          <div className="text-center mt-16">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto">
              Learn More
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </div>
=======
interface EnhancedServicesShowcaseProps {
  children?: React.ReactNode;
  className?: string;
  title?: string;
  description?: string;
}

const EnhancedServicesShowcase: React.FC<EnhancedServicesShowcaseProps> = ({
  children,
  className = '',
  title,
  description
}) => {
  return (
    <div className={`enhanced-component ${className}`}>
      {title && <h2 className="text-2xl font-bold mb-4">{title}</h2>}
      {description && <p className="text-gray-600 mb-4">{description}</p>}
      {children}
>>>>>>> cursor/fix-errors-and-merge-to-main-c493
    </div>
  );
};

<<<<<<< HEAD
export default EnhancedServicesShowcase;
=======
export default EnhancedServicesShowcase;
>>>>>>> cursor/fix-errors-and-merge-to-main-c493
=======
              <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                Learn More
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Link
            to="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
          >
            Contact Us
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EnhancedServicesShowcase;
>>>>>>> cursor/fix-errors-and-merge-to-main-09f3
