import React from 'react';
import SEOHead from '../components/SEOHead';
import { 
  CpuChipIcon,
  SignalIcon,
  GlobeAltIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  CloudIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  CogIcon,
  BoltIcon
} from '@heroicons/react/24/outline';

const EdgeComputingSolutionsPage: React.FC = () => {
  const services = [
    {
      icon: CpuChipIcon,
      title: 'Edge Infrastructure',
      description: 'Deploy and manage edge computing infrastructure for real-time data processing and analysis.',
      features: ['Edge servers', 'Real-time processing', 'Low latency', 'High availability'],
      pricing: 'Starting at $4,999/mo'
    },
    {
      icon: SignalIcon,
      title: 'IoT Edge Solutions',
      description: 'Connect and process IoT devices at the edge for faster response times and reduced bandwidth.',
      features: ['Device connectivity', 'Data processing', 'Protocol support', 'Security'],
      pricing: 'Starting at $3,999/mo'
    },
    {
      icon: CloudIcon,
      title: 'Edge-Cloud Integration',
      description: 'Seamlessly integrate edge computing with cloud services for hybrid architectures.',
      features: ['Cloud integration', 'Data synchronization', 'Hybrid deployment', 'Monitoring'],
      pricing: 'Starting at $5,999/mo'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Edge Security',
      description: 'Comprehensive security solutions for edge computing environments and devices.',
      features: ['Device security', 'Data encryption', 'Access control', 'Threat detection'],
      pricing: 'Starting at $2,999/mo'
    }
  ];

  const useCases = [
    { name: 'Manufacturing', description: 'Real-time monitoring and control of production lines' },
    { name: 'Healthcare', description: 'Patient monitoring and medical device data processing' },
    { name: 'Retail', description: 'Inventory management and customer analytics' },
    { name: 'Transportation', description: 'Fleet management and traffic optimization' },
    { name: 'Energy', description: 'Smart grid monitoring and renewable energy management' },
    { name: 'Agriculture', description: 'Precision farming and crop monitoring' }
  ];

  const stats = [
    { number: '50ms', label: 'Response Time' },
    { number: '99.9%', label: 'Uptime' },
    { number: '24/7', label: 'Monitoring' },
    { number: '1000+', label: 'Devices Supported' }
  ];

  return (
    <>
      <SEOHead
        title="Edge Computing Solutions - Zion Tech Group"
        description="Advanced edge computing solutions for real-time data processing, IoT integration, and low-latency applications. Bring computing closer to your data."
        keywords="edge computing, IoT solutions, real-time processing, low latency, edge infrastructure, edge security"
        canonicalUrl="https://ziontechgroup.com/edge-computing-solutions"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-green-900/30 via-slate-900 to-teal-900/30"></div>
          <div className="absolute inset-0 cyber-grid opacity-20"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-6">
                <CpuChipIcon className="w-5 h-5 text-green-400 mr-2" />
                <span className="text-green-300 text-sm font-medium">Edge Computing</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-green-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent holographic">
                  Edge Computing Solutions
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Bring computing closer to your data with edge computing solutions for real-time processing and low-latency applications.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button className="bg-gradient-to-r from-green-600 to-teal-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-green-500/25">
                  Explore Edge Solutions
                </button>
                <button className="border-2 border-green-400 text-green-300 px-8 py-4 rounded-lg font-semibold hover:bg-green-400 hover:text-white transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
              
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-green-400 mb-2 neon-text">{stat.number}</div>
                    <div className="text-gray-300 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Our <span className="bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">Edge Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive edge computing solutions designed for real-time data processing and IoT applications.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={index} className="group holographic-card p-8 hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-green-500/20">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform neon-border-animated">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <span className="text-sm text-green-400 font-medium neon-text">{service.pricing}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-green-300 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-6">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className="w-full cyber-button py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
                    Learn More
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">Use Cases</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover how edge computing can transform your industry and improve operational efficiency.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {useCases.map((useCase, index) => (
                <div key={index} className="group bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-green-500 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/20">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <CpuChipIcon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-green-300 transition-colors">
                      {useCase.name}
                    </h3>
                    <p className="text-sm text-gray-400">
                      {useCase.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-900/40 via-slate-900 to-teal-900/40">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
              Ready for Edge Computing?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Transform your business with edge computing solutions. Schedule a consultation to see how edge technology can improve your operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-green-600 to-teal-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-green-500/25">
                Schedule Consultation
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                Contact Edge Team
              </button>
            </div>
            <div className="mt-8 text-sm text-gray-400">
              <p>📞 <strong>Phone:</strong> +1 302 464 0950</p>
              <p>✉️ <strong>Email:</strong> edge@ziontechgroup.com</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default EdgeComputingSolutionsPage;