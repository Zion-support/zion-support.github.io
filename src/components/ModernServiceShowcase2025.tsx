import React, { useState, useEffect } from 'react';

const ModernServiceShowcase2025: React.FC = () => {
  const [activeService, setActiveService] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const services = [
    {
      id: 'ai-automation',
      title: 'AI-Powered Automation',
      description: 'Transform your business with intelligent automation that learns and adapts.',
      icon: '🤖',
      color: 'from-purple-600 to-pink-600',
      features: [
        'Process Automation',
        'Intelligent Decision Making',
        'Predictive Analytics',
        'Cost Reduction'
      ],
      price: 'Starting at $2,999/mo',
      rating: 4.9
    },
    {
      id: 'quantum-computing',
      title: 'Quantum Computing Solutions',
      description: 'Harness the power of quantum computing for complex problem solving.',
      icon: '⚡',
      color: 'from-cyan-600 to-blue-600',
      features: [
        'Quantum Algorithm Development',
        'Optimization Problems',
        'Cryptography Solutions',
        'Research & Development'
      ],
      price: 'Starting at $5,999/mo',
      rating: 4.8
    },
    {
      id: 'neural-interfaces',
      title: 'Neural Interface Development',
      description: 'Build the future of human-computer interaction with neural interfaces.',
      icon: '🧬',
      color: 'from-emerald-600 to-teal-600',
      features: [
        'Brain-Computer Interfaces',
        'Neural Signal Processing',
        'Thought Recognition',
        'Medical Applications'
      ],
      price: 'Starting at $8,999/mo',
      rating: 4.7
    },
    {
      id: 'blockchain-solutions',
      title: 'Blockchain 3.0 Solutions',
      description: 'Next-generation blockchain technology for secure, scalable applications.',
      icon: '🔗',
      color: 'from-orange-600 to-red-600',
      features: [
        'Smart Contract Development',
        'DeFi Solutions',
        'NFT Marketplaces',
        'Cross-Chain Integration'
      ],
      price: 'Starting at $3,999/mo',
      rating: 4.9
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveService((prev) => (prev + 1) % services.length);
        setIsAnimating(false);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 MODERN SERVICE SHOWCASE • 2025
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Modern Service Showcase 2025
          </h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Discover our cutting-edge services designed to transform your business with the latest technology
          </p>
        </div>

        {/* Service Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {services.map((service, index) => (
            <button
              key={service.id}
              onClick={() => setActiveService(index)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeService === index
                  ? `bg-gradient-to-r ${service.color} text-white shadow-lg scale-105`
                  : 'bg-white/10 text-white/70 hover:bg-white/20'
              }`}
            >
              {service.icon} {service.title}
            </button>
          ))}
        </div>

        {/* Active Service Display */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-16">
          <div className={`transition-all duration-500 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
            <div className="text-center mb-8">
              <div className="text-8xl mb-4">{services[activeService].icon}</div>
              <h3 className="text-4xl font-bold mb-4">{services[activeService].title}</h3>
              <p className="text-xl opacity-90 max-w-3xl mx-auto mb-6">
                {services[activeService].description}
              </p>
              <div className="flex justify-center items-center space-x-4 mb-6">
                <div className="flex items-center space-x-1">
                  <span className="text-yellow-400">★</span>
                  <span className="text-lg font-semibold">{services[activeService].rating}</span>
                </div>
                <div className="text-lg font-semibold text-purple-300">
                  {services[activeService].price}
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-2xl font-bold mb-6">Key Features</h4>
                <ul className="space-y-4">
                  {services[activeService].features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                      <span className="text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-xl p-6">
                <h4 className="text-2xl font-bold mb-4">Get Started</h4>
                <div className="space-y-4">
                  <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                    Start Free Trial
                  </button>
                  <button className="w-full border border-purple-400 text-purple-400 py-3 rounded-lg hover:bg-purple-400/10 transition-colors font-semibold">
                    Schedule Demo
                  </button>
                  <button className="w-full border border-cyan-400 text-cyan-400 py-3 rounded-lg hover:bg-cyan-400/10 transition-colors font-semibold">
                    Contact Sales
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Service Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:scale-105 transition-all duration-300 cursor-pointer ${
                activeService === index ? 'ring-2 ring-purple-400' : ''
              }`}
              onClick={() => setActiveService(index)}
            >
              <div className="text-center">
                <div className="text-6xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-sm opacity-90 mb-4">{service.description}</p>
                <div className="flex justify-center items-center space-x-2 mb-4">
                  <span className="text-yellow-400">★</span>
                  <span className="text-sm font-semibold">{service.rating}</span>
                </div>
                <div className="text-sm font-semibold text-purple-300 mb-4">
                  {service.price}
                </div>
                <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-sm">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h3>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join thousands of companies that have already transformed their operations with our cutting-edge services.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-10 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Get Started Today
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 px-10 py-4 rounded-lg hover:bg-cyan-400/10 transition-colors font-semibold text-lg">
              View All Services
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModernServiceShowcase2025;