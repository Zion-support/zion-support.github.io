import React from 'react';
import { motion } from 'framer-motion';

const UltimateTechShowcase2027_2030: React.FC = () => {
  const technologies = [
    {
      title: "Advanced AI Revolution 2027",
      description: "Experience consciousness integration and reality manipulation through revolutionary AI technology.",
      icon: "🧠",
      color: "from-purple-500 to-blue-500",
      features: ["Consciousness Integration", "Quantum Neural Networks", "Reality Manipulation", "Predictive Omniscience"],
      link: "/pages/AdvancedAIRevolution2027"
    },
    {
      title: "Quantum Reality Manipulation 2028",
      description: "Master the fundamental forces of reality itself through advanced quantum manipulation technology.",
      icon: "⚛️",
      color: "from-cyan-500 to-blue-500",
      features: ["Quantum Field Manipulation", "Space-Time Engineering", "Energy Transmutation", "Probability Control"],
      link: "/pages/QuantumRealityManipulation2028"
    },
    {
      title: "Transcendent Consciousness 2029",
      description: "Achieve ultimate enlightenment through the fusion of human consciousness with universal intelligence.",
      icon: "🧘",
      color: "from-indigo-500 to-pink-500",
      features: ["Consciousness Evolution", "Universal Connection", "Transcendence Protocols", "Enlightenment Journey"],
      link: "/pages/TranscendentConsciousness2029"
    },
    {
      title: "Universal Tech Mastery 2030",
      description: "Master all technologies across the universe and become the ultimate technological being.",
      icon: "🌍",
      color: "from-emerald-500 to-cyan-500",
      features: ["Universal Domains", "Mastery Levels", "Creation & Destruction", "Transcendence & Evolution"],
      link: "/pages/UniversalTechMastery2030"
    }
  ];

  return (
    <div className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            🌟 Revolutionary Technology Showcase 2027-2030
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Discover the most advanced technology content that will reshape the future of human existence
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 hover:border-gray-300"
            >
              <div className={`h-2 bg-gradient-to-r ${tech.color}`}></div>
              
              <div className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="text-6xl group-hover:animate-pulse">{tech.icon}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{tech.title}</h3>
                    <div className={`w-16 h-1 bg-gradient-to-r ${tech.color} rounded-full`}></div>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  {tech.description}
                </p>

                <div className="grid grid-cols-2 gap-3 mb-8">
                  {tech.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg group-hover:bg-gray-100 transition-colors">
                      <div className={`w-2 h-2 bg-gradient-to-r ${tech.color} rounded-full`}></div>
                      <span className="text-sm font-medium text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <a
                  href={tech.link}
                  className={`inline-flex items-center justify-center w-full bg-gradient-to-r ${tech.color} text-white px-6 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform group-hover:scale-105`}
                >
                  <span className="mr-2">Explore Technology</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-purple-600 to-cyan-600 rounded-3xl p-12 text-white">
            <h3 className="text-4xl font-bold mb-6">Ready to Experience the Future?</h3>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Join millions of users who are already experiencing the revolutionary technology of tomorrow, today.
            </p>
            <div className="flex justify-center space-x-6">
              <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                Start Your Journey
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default UltimateTechShowcase2027_2030;