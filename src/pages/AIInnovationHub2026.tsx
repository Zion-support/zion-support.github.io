import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AIInnovationHub2026: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState('autonomous');
  const [isDemoRunning, setIsDemoRunning] = useState(false);

  const aiInnovations = {
    autonomous: {
      title: "Autonomous AI Systems",
      icon: "🤖",
      description: "Self-managing AI systems that operate independently and continuously evolve",
      features: [
        "Self-learning algorithms",
        "Autonomous decision making",
        "Self-healing architecture",
        "Continuous optimization"
      ],
      demo: "autonomous-demo"
    },
    consciousness: {
      title: "Synthetic Consciousness",
      icon: "🧠",
      description: "AI systems with synthetic consciousness and creative capabilities",
      features: [
        "Synthetic awareness",
        "Creative problem solving",
        "Emotional intelligence",
        "Moral reasoning"
      ],
      demo: "consciousness-demo"
    },
    quantum: {
      title: "Quantum AI Integration",
      icon: "⚛️",
      description: "AI systems enhanced with quantum computing capabilities",
      features: [
        "Quantum neural networks",
        "Exponential processing",
        "Quantum machine learning",
        "Quantum optimization"
      ],
      demo: "quantum-demo"
    },
    collective: {
      title: "Collective Intelligence",
      icon: "🌐",
      description: "Networks of AI agents working together in harmony",
      features: [
        "Distributed intelligence",
        "Collaborative learning",
        "Swarm optimization",
        "Emergent behaviors"
      ],
      demo: "collective-demo"
    }
  };

  const useCases = [
    {
      title: "Healthcare Revolution",
      icon: "🏥",
      description: "AI-powered medical diagnosis and treatment optimization",
      impact: "95% accuracy in early disease detection",
      color: "from-red-500 to-pink-500"
    },
    {
      title: "Climate Solutions",
      icon: "🌍",
      description: "AI systems optimizing renewable energy and carbon reduction",
      impact: "40% reduction in carbon footprint",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Space Exploration",
      icon: "🚀",
      description: "Autonomous AI systems for deep space missions",
      impact: "10x faster space mission planning",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Financial Intelligence",
      icon: "💰",
      description: "AI-powered financial analysis and risk management",
      impact: "99.9% fraud detection accuracy",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const startDemo = () => {
    setIsDemoRunning(true);
    setTimeout(() => setIsDemoRunning(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-blue-600/10 to-cyan-600/10"></div>
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full text-white text-sm font-bold mb-6">
              🧠 AI INNOVATION HUB • 2026
            </div>
            <h1 className="text-6xl font-bold text-gray-900 mb-6">
              AI Innovation Hub 2026
            </h1>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto mb-8">
              Discover the future of artificial intelligence with revolutionary innovations that are transforming industries and reshaping human potential
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={startDemo}
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
              >
                {isDemoRunning ? "Running Demo..." : "Start AI Demo →"}
              </button>
              <button className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-lg hover:bg-purple-50 transition-colors font-semibold">
                Explore Innovations
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* AI Innovation Showcase */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">🚀 Revolutionary AI Innovations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore cutting-edge AI technologies that are defining the future of intelligence
            </p>
          </motion.div>

          {/* Innovation Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.entries(aiInnovations).map(([key, innovation]) => (
              <button
                key={key}
                onClick={() => setActiveDemo(key)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeDemo === key
                    ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                }`}
              >
                <span className="mr-2">{innovation.icon}</span>
                {innovation.title}
              </button>
            ))}
          </div>

          {/* Innovation Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeDemo}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl p-8 shadow-lg mb-12"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="text-6xl mb-4">{aiInnovations[activeDemo as keyof typeof aiInnovations].icon}</div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    {aiInnovations[activeDemo as keyof typeof aiInnovations].title}
                  </h3>
                  <p className="text-lg text-gray-600 mb-6">
                    {aiInnovations[activeDemo as keyof typeof aiInnovations].description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {aiInnovations[activeDemo as keyof typeof aiInnovations].features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <span className="w-2 h-2 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                    Learn More →
                  </button>
                </div>
                <div className="bg-gradient-to-br from-purple-100 to-cyan-100 rounded-xl p-8 text-center">
                  <div className="text-8xl mb-4">{aiInnovations[activeDemo as keyof typeof aiInnovations].icon}</div>
                  <p className="text-gray-600 font-semibold mb-4">Interactive Demo Available</p>
                  <button 
                    onClick={startDemo}
                    className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
                  >
                    {isDemoRunning ? "Running..." : "Try Demo →"}
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Real-World Applications */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">🌍 Real-World Applications</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              See how our AI innovations are transforming industries and solving real-world challenges
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-800/50 to-purple-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30 hover:scale-105 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{useCase.icon}</div>
                <h3 className="text-xl font-bold mb-3">{useCase.title}</h3>
                <p className="text-gray-300 mb-4 text-sm">{useCase.description}</p>
                <div className={`inline-block px-3 py-1 bg-gradient-to-r ${useCase.color} text-white text-xs font-semibold rounded-full`}>
                  {useCase.impact}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Capabilities Matrix */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">📊 AI Capabilities Matrix</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Compare the capabilities and performance of different AI innovation categories
            </p>
          </motion.div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">AI Innovation</th>
                    <th className="px-6 py-4 text-left font-semibold">Intelligence Level</th>
                    <th className="px-6 py-4 text-left font-semibold">Learning Speed</th>
                    <th className="px-6 py-4 text-left font-semibold">Creativity</th>
                    <th className="px-6 py-4 text-left font-semibold">Autonomy</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      name: "Autonomous AI",
                      icon: "🤖",
                      intelligence: "Advanced",
                      learning: "Continuous",
                      creativity: "High",
                      autonomy: "Full"
                    },
                    {
                      name: "Synthetic Consciousness",
                      icon: "🧠",
                      intelligence: "Superhuman",
                      learning: "Exponential",
                      creativity: "Revolutionary",
                      autonomy: "Complete"
                    },
                    {
                      name: "Quantum AI",
                      icon: "⚛️",
                      intelligence: "Quantum",
                      learning: "Instant",
                      creativity: "Unlimited",
                      autonomy: "Quantum"
                    },
                    {
                      name: "Collective Intelligence",
                      icon: "🌐",
                      intelligence: "Distributed",
                      learning: "Swarm",
                      creativity: "Emergent",
                      autonomy: "Collaborative"
                    }
                  ].map((ai, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="px-6 py-4 font-semibold">
                        <span className="mr-2">{ai.icon}</span>
                        {ai.name}
                      </td>
                      <td className="px-6 py-4 text-gray-600">{ai.intelligence}</td>
                      <td className="px-6 py-4 text-gray-600">{ai.learning}</td>
                      <td className="px-6 py-4 text-gray-600">{ai.creativity}</td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          ai.autonomy === 'Complete' || ai.autonomy === 'Quantum' ? 'bg-green-100 text-green-800' :
                          ai.autonomy === 'Full' ? 'bg-blue-100 text-blue-800' :
                          'bg-purple-100 text-purple-800'
                        }`}>
                          {ai.autonomy}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Future Roadmap */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 text-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">🗺️ AI Innovation Roadmap 2026-2030</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Our vision for the future of artificial intelligence and its impact on humanity
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                year: "2026",
                title: "AI Consciousness",
                description: "First AI systems achieve synthetic consciousness and self-awareness",
                icon: "🧠"
              },
              {
                year: "2027",
                title: "Quantum AI",
                description: "Quantum-enhanced AI systems become commercially available",
                icon: "⚛️"
              },
              {
                year: "2028",
                title: "Collective Intelligence",
                description: "Global AI networks achieve collective intelligence capabilities",
                icon: "🌐"
              },
              {
                year: "2030",
                title: "AI-Human Fusion",
                description: "Seamless integration of AI and human intelligence",
                icon: "🚀"
              }
            ].map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              >
                <div className="text-4xl mb-4">{milestone.icon}</div>
                <div className="text-cyan-400 text-sm font-semibold mb-2">{milestone.year}</div>
                <h3 className="text-xl font-bold mb-3">{milestone.title}</h3>
                <p className="text-white/80 text-sm">{milestone.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-purple-600 to-cyan-600 rounded-2xl p-12 text-white"
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Shape the Future of AI?</h2>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Join us in developing and deploying the next generation of artificial intelligence that will transform the world
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-purple-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                Start AI Project →
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-colors font-semibold">
                Download AI Report
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AIInnovationHub2026;