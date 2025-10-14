import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  CodeBracketIcon, 
  ServerIcon, 
  WrenchScrewdriverIcon,
  ComputerDesktopIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

const ITServicesPage: React.FC = () => {
  const services = [
    {
      icon: CodeBracketIcon,
      title: 'Software Development',
      description: 'Custom software solutions tailored to your business needs and requirements.',
      features: ['Web Applications', 'Mobile Apps', 'Desktop Software', 'API Development']
    },
    {
      icon: ServerIcon,
      title: 'System Integration',
      description: 'Seamlessly integrate different systems and applications for improved efficiency.',
      features: ['API Integration', 'Data Migration', 'System Architecture', 'Legacy Modernization']
    },
    {
      icon: WrenchScrewdriverIcon,
      title: 'Technical Support',
      description: '24/7 technical support to keep your systems running smoothly.',
      features: ['Remote Support', 'On-site Service', 'Preventive Maintenance', 'Issue Resolution']
    },
    {
      icon: ComputerDesktopIcon,
      title: 'Network Management',
      description: 'Comprehensive network solutions for optimal performance and security.',
      features: ['Network Design', 'Performance Monitoring', 'Security Implementation', 'Troubleshooting']
    }
  ];

  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including software development, system integration, technical support, and network management." />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white">
        <section className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                IT Services
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Comprehensive IT solutions to keep your business running efficiently and securely.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="bg-slate-800/50 rounded-xl p-8 border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105 group"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-6">
                      {service.description}
                    </p>
                    
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-gray-400">
                          • {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <button className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white py-2 rounded-lg font-medium hover:from-purple-700 hover:to-cyan-700 transition-all duration-300">
                      Learn More
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-r from-purple-900 to-cyan-900">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Need IT Support?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Our expert IT team is ready to help you with all your technology needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-white text-purple-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center gap-2">
                Contact Us
                <ArrowRightIcon className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ITServicesPage;