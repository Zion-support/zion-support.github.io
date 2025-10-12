import React from 'react';
import { 
  CpuChipIcon, 
  CloudIcon, 
  ShieldCheckIcon, 
  DevicePhoneMobileIcon, 
  ChartBarIcon, 
  GlobeAltIcon 
} from '@heroicons/react/24/outline';

interface Service {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  features: string[];
}

const EnhancedServicesShowcase: React.FC = () => {
  const services: Service[] = [
    {
      icon: CpuChipIcon,
      title: 'AI Solutions',
      description: 'Cutting-edge artificial intelligence solutions to automate and optimize your business processes.',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics']
    },
    {
      icon: CloudIcon,
      title: 'Cloud Migration',
      description: 'Seamless migration to cloud platforms with enhanced security and scalability.',
      features: ['AWS Migration', 'Azure Solutions', 'Google Cloud', 'Hybrid Cloud']
    },
    {
      icon: ShieldCheckIcon,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets and data.',
      features: ['Security Audits', 'Threat Detection', 'Incident Response', 'Compliance']
    },
    {
      icon: DevicePhoneMobileIcon,
      title: 'Mobile Development',
      description: 'Custom mobile applications for iOS and Android platforms.',
      features: ['Native Apps', 'Cross-Platform', 'UI/UX Design', 'App Store Optimization']
    },
    {
      icon: ChartBarIcon,
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with advanced analytics solutions.',
      features: ['Business Intelligence', 'Data Visualization', 'Real-time Analytics', 'Custom Dashboards']
    },
    {
      icon: GlobeAltIcon,
      title: 'Digital Transformation',
      description: 'Complete digital transformation services to modernize your business and stay competitive.',
      features: ['Strategy Development', 'Technology Integration', 'Change Management', 'Training & Support']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Our Core Services</h2>
          <p className="text-lg text-gray-300">
            Comprehensive AI and IT solutions designed to transform your business and drive innovation
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-8 group hover:scale-105 transition-transform">
              <div className="flex items-center mb-4">
                <service.icon className="w-8 h-8 text-cyan-400 mr-3" />
                <h3 className="text-xl font-semibold text-white">{service.title}</h3>
              </div>
              <p className="text-gray-300 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-sm text-gray-400 flex items-center">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EnhancedServicesShowcase;