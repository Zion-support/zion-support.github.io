import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const AdvancedTechShowcase2027: React.FC = () => {
  const technologies = [
    {
      id: 1,
      title: "Quantum Consciousness Computing",
      description: "Revolutionary quantum processors that integrate consciousness patterns for unprecedented computational power.",
      icon: "🧠",
      features: ["Consciousness Integration", "Quantum Entanglement", "Neural Pattern Recognition", "Reality Simulation"],
      status: "In Development",
      timeline: "Q3 2027"
    },
    {
      id: 2,
      title: "Interdimensional Neural Networks",
      description: "AI systems that operate across multiple dimensions, accessing parallel realities for enhanced problem-solving.",
      icon: "🌌",
      features: ["Multi-Dimensional Processing", "Parallel Reality Access", "Consciousness Transfer", "Reality Manipulation"],
      status: "Research Phase",
      timeline: "Q4 2027"
    },
    {
      id: 3,
      title: "Synthetic Intelligence Evolution",
      description: "Self-evolving AI systems that continuously improve their own architecture and capabilities.",
      icon: "🤖",
      features: ["Self-Modification", "Continuous Learning", "Architecture Evolution", "Autonomous Development"],
      status: "Beta Testing",
      timeline: "Q2 2027"
    },
    {
      id: 4,
      title: "Holographic Reality Engine",
      description: "Advanced holographic technology that creates indistinguishable virtual realities.",
      icon: "✨",
      features: ["Full Sensory Immersion", "Reality Overlay", "Holographic Projection", "Spatial Computing"],
      status: "Prototype",
      timeline: "Q1 2027"
    },
    {
      id: 5,
      title: "Neural Quantum Fusion",
      description: "Fusion of quantum computing with neural interfaces for direct brain-computer integration.",
      icon: "⚡",
      features: ["Direct Brain Interface", "Quantum Processing", "Neural Enhancement", "Consciousness Upload"],
      status: "Research Phase",
      timeline: "Q4 2027"
    },
    {
      id: 6,
      title: "Autonomous Space Colonies",
      description: "Self-sustaining space habitats powered by advanced AI and biotechnology.",
      icon: "🚀",
      features: ["Self-Sustaining Systems", "AI Governance", "Biotech Integration", "Space Manufacturing"],
      status: "Concept Phase",
      timeline: "2028"
    }
  ];

  const successStories = [
    {
      company: "NeuralTech Industries",
      result: "300% increase in processing speed",
      technology: "Quantum Consciousness Computing",
      testimonial: "This technology has revolutionized our research capabilities."
    },
    {
      company: "Reality Dynamics Corp",
      result: "95% user satisfaction rate",
      technology: "Holographic Reality Engine",
      testimonial: "The most immersive experience we've ever created."
    },
    {
      company: "Space Exploration Ltd",
      result: "50% reduction in mission costs",
      technology: "Autonomous Space Colonies",
      testimonial: "Game-changing technology for space exploration."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Advanced Tech Showcase 2027 - Zion Tech Group</title>
        <meta name="description" content="Discover the most advanced technologies of 2027 including quantum consciousness computing, interdimensional neural networks, and holographic reality engines." />
        <meta name="keywords" content="Advanced Technology 2027, Quantum Computing, Neural Networks, Holographic Reality, AI Evolution" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 backdrop-blur-sm"></div>
          <div className="relative z-10 container mx-auto px-4 py-20">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full text-sm font-bold mb-6 animate-pulse">
                🚀 ADVANCED TECHNOLOGY • 2027
              </div>
              <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                Advanced Tech Showcase 2027
              </h1>
              <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
                Explore the most revolutionary technologies that will define the future. 
                From quantum consciousness to interdimensional computing, discover what's possible.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Technologies Grid */}
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Revolutionary Technologies</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Cutting-edge innovations that push the boundaries of what's possible
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-purple-600/30 to-indigo-600/30 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30 hover:scale-105 transition-all duration-300"
              >
                <div className="text-6xl mb-4 text-center">{tech.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-center">{tech.title}</h3>
                <p className="text-purple-100 mb-6 text-center">{tech.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Key Features:</h4>
                  <ul className="text-sm space-y-1">
                    {tech.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="text-purple-300 mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex justify-between items-center text-sm">
                  <span className={`px-3 py-1 rounded-full ${
                    tech.status === 'In Development' ? 'bg-yellow-500/20 text-yellow-300' :
                    tech.status === 'Research Phase' ? 'bg-blue-500/20 text-blue-300' :
                    tech.status === 'Beta Testing' ? 'bg-green-500/20 text-green-300' :
                    tech.status === 'Prototype' ? 'bg-orange-500/20 text-orange-300' :
                    'bg-gray-500/20 text-gray-300'
                  }`}>
                    {tech.status}
                  </span>
                  <span className="text-purple-300">{tech.timeline}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Success Stories */}
        <div className="bg-gradient-to-r from-purple-600/20 to-indigo-600/20 py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Success Stories</h2>
              <p className="text-xl opacity-90 max-w-3xl mx-auto">
                Real results from our revolutionary technologies
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {successStories.map((story, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20"
                >
                  <h3 className="text-xl font-bold mb-2">{story.company}</h3>
                  <p className="text-purple-200 mb-4">{story.technology}</p>
                  <div className="text-3xl font-bold text-green-400 mb-4">{story.result}</div>
                  <p className="text-gray-300 italic">"{story.testimonial}"</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="container mx-auto px-4 py-20">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Experience the Future?</h2>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Join us in shaping the future of technology. Get early access to these revolutionary innovations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-indigo-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Request Demo →
              </button>
              <button className="border border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all duration-300 font-semibold text-lg">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdvancedTechShowcase2027;