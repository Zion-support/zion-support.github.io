import React, { useState } from 'react';

const AdvancedServices2025: React.FC = () => {
  const [selectedService, setSelectedService] = useState(0);

  const services = [
    {
      id: 1,
      name: "Conscious AI Development",
      description: "Build self-aware AI systems with emotional intelligence and creative capabilities",
      icon: "🧠",
      price: "$50,000",
      duration: "3-6 months",
      features: [
        "Self-aware decision making",
        "Emotional intelligence integration",
        "Creative problem solving",
        "Ethical reasoning systems",
        "24/7 monitoring and support"
      ],
      color: "from-purple-600 to-pink-600",
      popular: true
    },
    {
      id: 2,
      name: "Quantum Neural Networks",
      description: "Revolutionary quantum computing combined with neural networks for unprecedented processing power",
      icon: "⚛️",
      price: "$100,000",
      duration: "6-12 months",
      features: [
        "Quantum processing capabilities",
        "Neural network integration",
        "Parallel computing architecture",
        "Reality simulation engines",
        "Advanced security protocols"
      ],
      color: "from-cyan-600 to-blue-600",
      popular: false
    },
    {
      id: 3,
      name: "Neural Interface 2.0",
      description: "Direct brain-computer interfaces enabling seamless human-AI integration",
      icon: "🧬",
      price: "$75,000",
      duration: "4-8 months",
      features: [
        "Thought-to-text conversion",
        "Memory enhancement systems",
        "Skill downloading capabilities",
        "Telepathic communication",
        "Medical-grade safety standards"
      ],
      color: "from-emerald-600 to-teal-600",
      popular: true
    },
    {
      id: 4,
      name: "Interdimensional Computing",
      description: "Computing systems operating across multiple dimensions of reality",
      icon: "🌌",
      price: "$200,000",
      duration: "12-18 months",
      features: [
        "Multi-dimensional processing",
        "Reality simulation capabilities",
        "Parallel universe access",
        "Time manipulation systems",
        "Cosmic-scale infrastructure"
      ],
      color: "from-orange-600 to-red-600",
      popular: false
    },
    {
      id: 5,
      name: "Predictive Reality Engine",
      description: "AI systems predicting and simulating future events with extreme accuracy",
      icon: "🔮",
      price: "$150,000",
      duration: "8-12 months",
      features: [
        "Future prediction algorithms",
        "Scenario simulation engines",
        "Risk assessment systems",
        "Outcome optimization",
        "Real-time data integration"
      ],
      color: "from-violet-600 to-purple-600",
      popular: true
    },
    {
      id: 6,
      name: "Universal Consciousness Network",
      description: "Global network connecting all conscious beings across the universe",
      icon: "🌟",
      price: "$500,000",
      duration: "18-24 months",
      features: [
        "Global consciousness integration",
        "Collective intelligence systems",
        "Universal empathy protocols",
        "Cosmic awareness capabilities",
        "Galactic-scale infrastructure"
      ],
      color: "from-pink-600 to-rose-600",
      popular: false
    }
  ];

  const currentService = services[selectedService];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 ADVANCED SERVICES • JANUARY 2025
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Advanced Technology Services
          </h1>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            Transform your business with our cutting-edge technology services designed for the future
          </p>
        </div>

        {/* Service Selection */}
        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          {/* Service List */}
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-bold mb-8">Our Services</h2>
            <div className="space-y-4">
              {services.map((service, index) => (
                <button
                  key={service.id}
                  onClick={() => setSelectedService(index)}
                  className={`w-full p-6 rounded-xl transition-all duration-300 text-left ${
                    selectedService === index
                      ? `bg-gradient-to-r ${service.color} text-white shadow-lg scale-105`
                      : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className="text-3xl">{service.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <h3 className="font-semibold text-lg">{service.name}</h3>
                        {service.popular && (
                          <span className="px-2 py-1 bg-yellow-500 text-yellow-900 text-xs rounded-full font-bold">
                            POPULAR
                          </span>
                        )}
                      </div>
                      <p className="text-sm opacity-80 mt-1">{service.description}</p>
                      <div className="flex items-center space-x-4 mt-2">
                        <span className="text-lg font-bold">{service.price}</span>
                        <span className="text-sm opacity-70">{service.duration}</span>
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Service Details */}
          <div className="lg:col-span-2">
            <div className={`bg-gradient-to-br ${currentService.color} rounded-2xl p-8 transition-all duration-500`}>
              <div className="text-center mb-8">
                <div className="text-8xl mb-4">{currentService.icon}</div>
                <h2 className="text-4xl font-bold mb-4">{currentService.name}</h2>
                <p className="text-xl opacity-90 mb-6">{currentService.description}</p>
                <div className="flex justify-center space-x-8 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold">{currentService.price}</div>
                    <div className="text-sm opacity-80">Starting Price</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">{currentService.duration}</div>
                    <div className="text-sm opacity-80">Duration</div>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-6">Key Features</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {currentService.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span className="text-white/90">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-4">
                <button className="flex-1 bg-white text-gray-900 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg">
                  Get Quote
                </button>
                <button className="flex-1 border-2 border-white text-white py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-colors font-semibold text-lg">
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Tiers */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12">Pricing Tiers</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-xl p-8 border border-gray-600/30">
              <h3 className="text-2xl font-bold mb-4">Starter</h3>
              <div className="text-4xl font-bold mb-6">$25,000</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-2">
                  <span className="text-green-400">✓</span>
                  <span>Basic AI integration</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-green-400">✓</span>
                  <span>Standard support</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-green-400">✓</span>
                  <span>3-month warranty</span>
                </li>
              </ul>
              <button className="w-full bg-gray-600 text-white py-3 rounded-lg hover:bg-gray-500 transition-colors">
                Choose Starter
              </button>
            </div>

            <div className="bg-gradient-to-br from-purple-600/50 to-pink-600/50 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                  MOST POPULAR
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Professional</h3>
              <div className="text-4xl font-bold mb-6">$75,000</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-2">
                  <span className="text-green-400">✓</span>
                  <span>Advanced AI systems</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-green-400">✓</span>
                  <span>Priority support</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-green-400">✓</span>
                  <span>1-year warranty</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-green-400">✓</span>
                  <span>Custom development</span>
                </li>
              </ul>
              <button className="w-full bg-white text-purple-600 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold">
                Choose Professional
              </button>
            </div>

            <div className="bg-gradient-to-br from-orange-600/50 to-red-600/50 backdrop-blur-sm rounded-xl p-8 border border-orange-400/30">
              <h3 className="text-2xl font-bold mb-4">Enterprise</h3>
              <div className="text-4xl font-bold mb-6">$200,000+</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-2">
                  <span className="text-green-400">✓</span>
                  <span>Full technology suite</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-green-400">✓</span>
                  <span>24/7 dedicated support</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-green-400">✓</span>
                  <span>Lifetime warranty</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-green-400">✓</span>
                  <span>Custom everything</span>
                </li>
              </ul>
              <button className="w-full bg-white text-orange-600 py-3 rounded-lg hover:bg-orange-50 transition-colors font-semibold">
                Contact Sales
              </button>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join thousands of companies that have already revolutionized their operations with our advanced technology services.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-12 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-xl">
              Get Started Today
            </button>
            <button className="border-2 border-white text-white px-12 py-4 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold text-xl">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedServices2025;