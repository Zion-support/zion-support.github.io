import React from 'react';
import SEOHead from '../components/SEOHead';
import { 
  CpuChipIcon,
  BoltIcon,
  ChartBarIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
  CogIcon
} from '@heroicons/react/24/outline';

const QuantumComputingSolutionsPage: React.FC = () => {
  const services = [
    {
      icon: CpuChipIcon,
      title: 'Quantum Algorithm Development',
      description: 'Custom quantum algorithms designed for your specific business problems and optimization challenges.',
      features: ['Custom algorithm design', 'Performance optimization', 'Quantum simulation', 'Integration support'],
      pricing: 'Starting at $15,999/mo'
    },
    {
      icon: BoltIcon,
      title: 'Quantum Machine Learning',
      description: 'Advanced quantum machine learning solutions for complex data analysis and pattern recognition.',
      features: ['Quantum neural networks', 'Pattern recognition', 'Data analysis', 'Model training'],
      pricing: 'Starting at $12,999/mo'
    },
    {
      icon: ChartBarIcon,
      title: 'Quantum Optimization',
      description: 'Quantum optimization solutions for complex business problems and resource allocation.',
      features: ['Resource optimization', 'Scheduling algorithms', 'Supply chain optimization', 'Financial modeling'],
      pricing: 'Starting at $10,999/mo'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Quantum Cryptography',
      description: 'Next-generation security solutions using quantum cryptography for unbreakable encryption.',
      features: ['Quantum key distribution', 'Unbreakable encryption', 'Secure communication', 'Compliance'],
      pricing: 'Starting at $8,999/mo'
    }
  ];

  const applications = [
    { name: 'Financial Modeling', description: 'Quantum algorithms for portfolio optimization and risk analysis' },
    { name: 'Drug Discovery', description: 'Molecular simulation and drug interaction analysis' },
    { name: 'Supply Chain', description: 'Complex logistics optimization and route planning' },
    { name: 'Climate Modeling', description: 'Advanced climate simulation and prediction models' },
    { name: 'Cryptography', description: 'Quantum-resistant encryption and secure communication' },
    { name: 'Machine Learning', description: 'Quantum-enhanced pattern recognition and AI' }
  ];

  const stats = [
    { number: '1000x', label: 'Faster Processing' },
    { number: '99.9%', label: 'Accuracy Rate' },
    { number: '24/7', label: 'Monitoring' },
    { number: '5+', label: 'Years Experience' }
  ];

  return (
    <>
      <SEOHead
        title="Quantum Computing Solutions - Zion Tech Group"
        description="Cutting-edge quantum computing solutions including algorithm development, machine learning, optimization, and cryptography. Harness the power of quantum technology."
        keywords="quantum computing, quantum algorithms, quantum machine learning, quantum optimization, quantum cryptography, quantum technology"
        canonicalUrl="https://ziontechgroup.com/quantum-computing-solutions"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-slate-900 to-indigo-900/30"></div>
          <div className="absolute inset-0 cyber-grid opacity-20"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
                <CpuChipIcon className="w-5 h-5 text-purple-400 mr-2" />
                <span className="text-purple-300 text-sm font-medium">Quantum Technology</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent holographic">
                  Quantum Computing Solutions
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Harness the power of quantum computing for complex problem solving, optimization, and next-generation security.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/25">
                  Explore Quantum Solutions
                </button>
                <button className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300">
                  Schedule Consultation
                </button>
              </div>
              
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-purple-400 mb-2 neon-text">{stat.number}</div>
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
                Our <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">Quantum Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Cutting-edge quantum computing solutions designed to solve complex business problems.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={index} className="group holographic-card p-8 hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform neon-border-animated">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <span className="text-sm text-purple-400 font-medium neon-text">{service.pricing}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
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

        {/* Applications Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">Quantum Applications</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover how quantum computing can transform your industry and solve complex problems.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {applications.map((application, index) => (
                <div key={index} className="group bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <CpuChipIcon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
                      {application.name}
                    </h3>
                    <p className="text-sm text-gray-400">
                      {application.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-900/40 via-slate-900 to-indigo-900/40">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Ready for Quantum Computing?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Explore the future of computing with our quantum solutions. Schedule a consultation to see how quantum technology can transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/25">
                Schedule Consultation
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                Contact Quantum Team
              </button>
            </div>
            <div className="mt-8 text-sm text-gray-400">
              <p>📞 <strong>Phone:</strong> +1 302 464 0950</p>
              <p>✉️ <strong>Email:</strong> quantum@ziontechgroup.com</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default QuantumComputingSolutionsPage;