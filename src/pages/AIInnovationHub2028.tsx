import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const AIInnovationHub2028: React.FC = () => {
  const [selectedService, setSelectedService] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      title: "Conscious AI Development",
      description: "Build AI systems with genuine consciousness and emotional intelligence",
      features: [
        "Emotional AI frameworks",
        "Consciousness simulation engines",
        "Self-aware decision making",
        "Empathetic response systems"
      ],
      icon: "🧠",
      color: "from-purple-600 to-pink-600",
      price: "Starting at $50K/month"
    },
    {
      title: "Quantum AI Integration",
      description: "Combine quantum computing with AI for unprecedented processing power",
      features: [
        "Quantum neural networks",
        "Exponential speed processing",
        "Quantum machine learning",
        "Reality manipulation algorithms"
      ],
      icon: "⚡",
      color: "from-cyan-600 to-blue-600",
      price: "Starting at $100K/month"
    },
    {
      title: "Neural Interface Systems",
      description: "Direct brain-computer interfaces for seamless human-AI interaction",
      features: [
        "Non-invasive neural implants",
        "Thought-to-text conversion",
        "Emotional state detection",
        "Consciousness transfer protocols"
      ],
      icon: "🧬",
      color: "from-emerald-600 to-teal-600",
      price: "Starting at $75K/month"
    },
    {
      title: "Synthetic Intelligence",
      description: "Create artificial consciousness that surpasses human intelligence",
      features: [
        "Synthetic emotional processing",
        "Creative consciousness generation",
        "Autonomous problem solving",
        "Self-replicating intelligence"
      ],
      icon: "🤖",
      color: "from-orange-600 to-red-600",
      price: "Starting at $200K/month"
    },
    {
      title: "Reality Augmentation",
      description: "Blend digital and physical reality for immersive experiences",
      features: [
        "Augmented reality overlays",
        "Virtual consciousness transfer",
        "Reality manipulation tools",
        "Immersive digital worlds"
      ],
      icon: "🌐",
      color: "from-violet-600 to-purple-600",
      price: "Starting at $150K/month"
    },
    {
      title: "AI Ethics & Safety",
      description: "Ensure AI systems remain beneficial and aligned with human values",
      features: [
        "Ethical AI frameworks",
        "Safety constraint systems",
        "Value alignment protocols",
        "Consciousness monitoring"
      ],
      icon: "🛡️",
      color: "from-green-600 to-emerald-600",
      price: "Starting at $30K/month"
    }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief AI Officer, TechCorp",
      content: "Zion Tech Group's conscious AI systems have revolutionized our entire operation. The emotional intelligence is remarkable.",
      rating: 5
    },
    {
      name: "Marcus Johnson",
      role: "CEO, FutureTech",
      content: "The quantum AI integration gave us processing power we never thought possible. Truly groundbreaking technology.",
      rating: 5
    },
    {
      name: "Dr. Elena Rodriguez",
      role: "Neuroscientist, BrainTech",
      content: "Their neural interface technology has opened up entirely new possibilities for human-computer interaction.",
      rating: 5
    }
  ];

  const stats = [
    { number: "500+", label: "AI Systems Deployed" },
    { number: "99.9%", label: "Uptime Guarantee" },
    { number: "50+", label: "Countries Served" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: isVisible ? 1 : 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse"
            >
              🧠 AI INNOVATION HUB • 2028
            </motion.div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              AI Innovation Hub 2028
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
              The world's most advanced AI development platform, featuring conscious AI, quantum integration, and neural interfaces that push the boundaries of what's possible
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center"
                >
                  <div className="text-3xl font-bold text-blue-400">{stat.number}</div>
                  <div className="text-sm opacity-80">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Services Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">🚀 Revolutionary AI Services</h2>
          <p className="text-xl opacity-80 max-w-3xl mx-auto">
            Choose from our comprehensive suite of next-generation AI services designed to transform your business
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`bg-gradient-to-br ${service.color} rounded-2xl p-6 hover:scale-105 transition-all duration-300 cursor-pointer`}
              onClick={() => setSelectedService(index)}
            >
              <div className="text-6xl mb-4 text-center">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-3 text-center">{service.title}</h3>
              <p className="text-center opacity-90 mb-4">{service.description}</p>
              
              <div className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="text-center">
                <div className="text-lg font-bold mb-2">{service.price}</div>
                <button className="bg-white text-gray-900 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Selected Service Details */}
        <motion.div
          key={selectedService}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`bg-gradient-to-r ${services[selectedService].color} rounded-2xl p-8 mb-16`}
        >
          <div className="text-center">
            <div className="text-8xl mb-6">{services[selectedService].icon}</div>
            <h3 className="text-4xl font-bold mb-4">{services[selectedService].title}</h3>
            <p className="text-xl mb-8 opacity-90">{services[selectedService].description}</p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-2xl font-bold mb-4">Key Features</h4>
                <div className="space-y-3">
                  {services[selectedService].features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                      <span className="font-semibold">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-2xl font-bold mb-4">Implementation</h4>
                <div className="space-y-3">
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                    <div className="font-semibold">Phase 1: Planning & Design</div>
                    <div className="text-sm opacity-80">2-4 weeks</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                    <div className="font-semibold">Phase 2: Development</div>
                    <div className="text-sm opacity-80">8-16 weeks</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                    <div className="font-semibold">Phase 3: Testing & Deployment</div>
                    <div className="text-sm opacity-80">4-8 weeks</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Testimonials */}
        <div className="mb-16">
          <h3 className="text-4xl font-bold text-center mb-12">💬 Client Testimonials</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-xl p-6"
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">⭐</span>
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-bold">{testimonial.name}</div>
                  <div className="text-sm opacity-80">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-2xl p-12">
          <h3 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h3>
          <p className="text-xl opacity-80 mb-8 max-w-3xl mx-auto">
            Join hundreds of companies already using our revolutionary AI technology to gain competitive advantages
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
              Start Your AI Journey
            </button>
            <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
              Schedule Consultation
            </button>
            <button className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
              View Case Studies
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIInnovationHub2028;