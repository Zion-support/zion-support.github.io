import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
const AdvancedTechShowcase2025: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);
  const technologies = [
    {
      id: 1,
      title: "Neural Quantum Processing",
      description: "Revolutionary fusion of quantum computing and neural networks for unprecedented computational power.",
      features: [
        "Quantum neural pathways",
        "Superposition learning algorithms",
        "Entanglement-based processing",
        "Quantum error correction"
      ],
      icon: "🧠",
      gradient: "from-purple-600 to-indigo-600",
      applications: ["Drug discovery", "Financial modeling", "Climate simulation", "AI training acceleration"]
    },
    {
      id: 2,
      title: "Holographic Data Storage",
      description: "Next-generation storage technology using holographic principles for massive data capacity.",
      features: [
        "3D holographic encoding",
        "Light-speed data access",
        "Infinite scalability",
        "Quantum encryption"
      ],
      icon: "💎",
      gradient: "from-cyan-600 to-teal-600",
      applications: ["Enterprise databases", "AI model storage", "Medical imaging", "Scientific data"]
    },
    {
      id: 3,
      title: "Bio-Integrated Computing",
      description: "Seamless integration of biological systems with advanced computing for enhanced performance.",
      features: [
        "Neural interface protocols",
        "Biomolecular processors",
        "Organic memory systems",
        "Biological error correction"
      ],
      icon: "🧬",
      gradient: "from-emerald-600 to-green-600",
      applications: ["Medical diagnostics", "Prosthetic control", "Brain-computer interfaces", "Health monitoring"]
    },
    {
      id: 4,
      title: "Temporal Computing Systems",
      description: "Advanced systems that can process information across multiple time dimensions simultaneously.",
      features: [
        "Time-parallel processing",
        "Temporal data synchronization",
        "Predictive computation",
        "Historical analysis engines"
      ],
      icon: "⏰",
      gradient: "from-orange-600 to-red-600",
      applications: ["Financial forecasting", "Climate prediction", "Supply chain optimization", "Risk assessment"]
    }
  ];
  return (
    <>
      <Helmet>
        <title>Advanced Tech Showcase 2025 | Zion Tech Group</title>
        <meta name="description" content="Discover the most advanced technologies of 2025: Neural Quantum Processing, Holographic Data Storage, Bio-Integrated Computing, and Temporal Computing Systems." />
        <link rel="canonical" href="https://ziontechgroup.com/pages/AdvancedTechShowcase2025" />
      </Helmet>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 1 }}
        className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white"
      >
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
          <div className="relative z-10 container mx-auto px-6 py-20 text-center">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Advanced Tech Showcase 2025
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-300">
                Explore the cutting-edge technologies that are reshaping the future of computing, 
                data storage, and human-computer interaction.
              </p>
              <div className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-lg font-bold mb-4 animate-pulse">
                🚀 NEW: Revolutionary Technologies 2025 - The Future is Here
              </div>
            </motion.div>
          </div>
        </div>
        {/* Technology Tabs */}
        <div className="container mx-auto px-6 py-12">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {technologies.map((tech, index) => (
              <button
                key={tech.id}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === index
                    ? `bg-gradient-to-r ${tech.gradient} text-white shadow-lg transform scale-105`
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                <span className="mr-2">{tech.icon}</span>
                {tech.title}
              </button>
            ))}
          </div>
          {/* Technology Details */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    {technologies[activeTab].title}
                  </h2>
                  <p className="text-lg mb-6 text-gray-300">
                    {technologies[activeTab].description}
                  </p>
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-3 text-cyan-400">Key Features</h3>
                    <ul className="space-y-2">
                      {technologies[activeTab].features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-purple-400">Applications</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {technologies[activeTab].applications.map((app, index) => (
                      <div
                        key={index}
                        className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 p-3 rounded-lg text-center"
                      >
                        {app}
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 p-4 bg-gradient-to-r from-cyan-600/20 to-purple-600/20 rounded-lg">
                    <h4 className="font-semibold mb-2">Ready to Transform Your Business?</h4>
                    <p className="text-sm text-gray-300 mb-3">
                      Integrate these advanced technologies into your organization today.
                    </p>
                    <button className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300">
                      Get Started
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        {/* Call to Action */}
        <div className="container mx-auto px-6 py-12 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Ready for the Future?
            </h2>
            <p className="text-lg mb-6 text-gray-300 max-w-2xl mx-auto">
              Join the technological revolution and transform your business with our advanced solutions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                Schedule Consultation
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );

};

export default AdvancedTechShowcase2025;
