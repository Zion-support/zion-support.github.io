import React from 'react';
import Link from 'next/link';

const RevolutionaryAIServices2026: React.FC = () => {
  const services = [
    {
      title: "Quantum Neural Architecture",
      description: "Revolutionary AI systems that combine quantum computing with advanced neural networks for unprecedented processing capabilities.",
      features: ["1000x faster computation", "Real-time learning", "Quantum encryption", "Autonomous optimization"],
      price: "From $50,000",
      icon: "⚛️",
      gradient: "from-purple-600 to-indigo-600"
    },
    {
      title: "Autonomous Business Intelligence",
      description: "Self-managing AI systems that handle complex business operations, decision-making, and optimization with minimal human intervention.",
      features: ["24/7 autonomous operation", "Predictive analytics", "Self-healing systems", "Continuous optimization"],
      price: "From $75,000",
      icon: "🤖",
      gradient: "from-blue-600 to-cyan-600"
    },
    {
      title: "Synthetic Intelligence Platform",
      description: "Advanced AI systems that can create, evolve, and manage other AI systems, leading to exponential technological advancement.",
      features: ["AI breeding capabilities", "Evolutionary algorithms", "Self-improving systems", "Exponential innovation"],
      price: "From $100,000",
      icon: "🔬",
      gradient: "from-green-600 to-emerald-600"
    },
    {
      title: "Neural Interface Integration",
      description: "Direct brain-computer interfaces that revolutionize human-AI collaboration and unlock new levels of productivity.",
      features: ["Direct neural control", "Thought-to-action", "Enhanced cognition", "Seamless integration"],
      price: "From $125,000",
      icon: "🧠",
      gradient: "from-orange-600 to-red-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-black rounded-full px-6 py-2 mb-6 font-bold">
            <span className="text-sm">🚀 REVOLUTIONARY SERVICES 2026</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Next-Generation AI Services
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Experience the most advanced AI technologies available. Our revolutionary services will transform your business 
            and give you a competitive edge in the AI-powered future.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white bg-opacity-10 to-white bg-opacity-5 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20 hover:border-opacity-40 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="flex items-center mb-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-xl flex items-center justify-center text-3xl mr-4`}>
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                  <div className="text-yellow-400 font-bold">{service.price}</div>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>

              <div className="grid grid-cols-2 gap-3 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                    <span className="text-green-400 mr-2">✓</span>
                    {feature}
                  </div>
                ))}
              </div>

              <div className="flex space-x-4">
                <Link
                  href={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className={`flex-1 bg-gradient-to-r ${service.gradient} text-white px-6 py-3 rounded-lg font-semibold text-center hover:opacity-90 transition-all duration-300`}
                >
                  Learn More
                </Link>
                <Link
                  href="/contact"
                  className="flex-1 border-2 border-white border-opacity-30 text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-white hover:bg-opacity-10 transition-all duration-300"
                >
                  Get Quote
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl p-8 mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-white opacity-90 mb-6">
              Join the AI revolution and secure your competitive advantage for the next decade.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                Schedule Consultation
              </Link>
              <Link
                href="/demo"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:bg-opacity-10 transition-all duration-300"
              >
                Request Demo
              </Link>
            </div>
          </div>
          
          <div className="text-gray-400 text-sm">
            * All services include 24/7 support, implementation assistance, and ongoing optimization
          </div>
        </div>
      </div>
    </section>
  );
};

export default RevolutionaryAIServices2026;