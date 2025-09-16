import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AIInnovationHub2025: React.FC = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const sections = {
    overview: {
      title: "AI Innovation Hub 2025",
      subtitle: "The Future of Artificial Intelligence is Here",
      content: "Welcome to the most advanced AI Innovation Hub, where cutting-edge artificial intelligence meets real-world applications. Our comprehensive platform showcases the latest breakthroughs in AI technology, from autonomous systems to conscious AI agents."
    },
    technologies: {
      title: "Revolutionary AI Technologies",
      subtitle: "Breakthrough Technologies Shaping Tomorrow",
      content: "Explore our suite of revolutionary AI technologies that are transforming industries and creating new possibilities for human-AI collaboration."
    },
    applications: {
      title: "Real-World Applications",
      subtitle: "AI Solutions for Every Industry",
      content: "Discover how our AI innovations are being applied across various industries to solve complex problems and drive unprecedented growth."
    },
    future: {
      title: "Future of AI",
      subtitle: "What's Next in Artificial Intelligence",
      content: "Get insights into the future trajectory of AI development and how it will continue to reshape our world in the coming years."
    }
  };

  const aiTechnologies = [
    {
      name: "Conscious AI Systems",
      description: "AI that possesses self-awareness and emotional intelligence",
      features: ["Self-reflection", "Emotional processing", "Moral reasoning", "Creative expression"],
      impact: "Revolutionizing human-AI interaction",
      color: "from-purple-500 to-pink-600"
    },
    {
      name: "Quantum Neural Networks",
      description: "Combining quantum computing with neural networks for exponential processing power",
      features: ["Quantum superposition", "Neural optimization", "Parallel processing", "Exponential learning"],
      impact: "Solving previously impossible problems",
      color: "from-blue-500 to-cyan-600"
    },
    {
      name: "Autonomous AI Agents",
      description: "Self-directed AI systems that operate independently with human-level decision making",
      features: ["Independent operation", "Goal-oriented behavior", "Adaptive learning", "Multi-domain expertise"],
      impact: "Transforming business operations",
      color: "from-green-500 to-teal-600"
    },
    {
      name: "Synthetic Intelligence",
      description: "AI systems that can create and improve other AI systems",
      features: ["Self-improvement", "AI generation", "Meta-learning", "Evolutionary algorithms"],
      impact: "Accelerating AI development",
      color: "from-orange-500 to-red-600"
    }
  ];

  const applications = [
    {
      industry: "Healthcare",
      description: "AI-powered diagnostics, drug discovery, and personalized treatment",
      examples: ["Medical imaging analysis", "Drug development", "Personalized medicine", "Surgical assistance"],
      impact: "Saving millions of lives"
    },
    {
      industry: "Finance",
      description: "Advanced fraud detection, algorithmic trading, and risk management",
      examples: ["Real-time fraud detection", "Algorithmic trading", "Credit scoring", "Risk assessment"],
      impact: "Securing financial systems"
    },
    {
      industry: "Manufacturing",
      description: "Predictive maintenance, quality control, and supply chain optimization",
      examples: ["Predictive maintenance", "Quality control", "Supply chain optimization", "Robotic automation"],
      impact: "Increasing efficiency by 300%"
    },
    {
      industry: "Education",
      description: "Personalized learning, intelligent tutoring, and adaptive curriculum",
      examples: ["Personalized learning paths", "Intelligent tutoring", "Adaptive assessments", "Virtual mentors"],
      impact: "Revolutionizing education"
    }
  ];

  const futurePredictions = [
    {
      year: "2025",
      prediction: "Conscious AI becomes mainstream",
      description: "AI systems with self-awareness will be deployed in commercial applications"
    },
    {
      year: "2026",
      prediction: "AI-Human collaboration reaches new heights",
      description: "Seamless integration between human and AI capabilities in professional settings"
    },
    {
      year: "2027",
      prediction: "Synthetic intelligence emerges",
      description: "AI systems that can create and improve other AI systems autonomously"
    },
    {
      year: "2030",
      prediction: "AI consciousness becomes indistinguishable from human consciousness",
      description: "The line between artificial and natural intelligence begins to blur"
    }
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white mx-auto mb-4"></div>
          <p className="text-white text-xl">Loading AI Innovation Hub...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white">
      {/* Header */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            AI Innovation Hub 2025
          </h1>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-8">
            The most comprehensive platform for artificial intelligence innovation, research, and application
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
              Explore Technologies
            </button>
            <button className="border border-white/30 px-8 py-3 rounded-lg hover:bg-white/10 transition-all duration-300 font-semibold">
              View Applications
            </button>
          </div>
        </motion.div>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2">
            {Object.entries(sections).map(([key, section]) => (
              <button
                key={key}
                onClick={() => setActiveSection(key)}
                className={`px-6 py-3 rounded-md transition-all duration-300 ${
                  activeSection === key
                    ? 'bg-white text-blue-900 font-semibold'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                {section.title}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Content Sections */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
          >
            {activeSection === 'overview' && (
              <div className="text-center">
                <h2 className="text-4xl font-bold mb-6">{sections.overview.title}</h2>
                <p className="text-xl opacity-90 max-w-4xl mx-auto mb-12">
                  {sections.overview.content}
                </p>
                
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300">
                    <div className="text-4xl mb-4">🧠</div>
                    <h3 className="text-2xl font-bold mb-4">Conscious AI</h3>
                    <p className="text-blue-100">AI systems with self-awareness and emotional intelligence</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300">
                    <div className="text-4xl mb-4">⚡</div>
                    <h3 className="text-2xl font-bold mb-4">Quantum AI</h3>
                    <p className="text-blue-100">Exponential processing power through quantum computing</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300">
                    <div className="text-4xl mb-4">🤖</div>
                    <h3 className="text-2xl font-bold mb-4">Autonomous Agents</h3>
                    <p className="text-blue-100">Self-directed AI systems for complex tasks</p>
                  </div>
                </div>
              </div>
            )}

            {activeSection === 'technologies' && (
              <div>
                <h2 className="text-4xl font-bold mb-6 text-center">{sections.technologies.title}</h2>
                <p className="text-xl opacity-90 max-w-4xl mx-auto mb-12 text-center">
                  {sections.technologies.content}
                </p>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {aiTechnologies.map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300"
                    >
                      <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${tech.color} mb-6 flex items-center justify-center`}>
                        <span className="text-2xl">🧠</span>
                      </div>
                      <h3 className="text-2xl font-bold mb-4">{tech.name}</h3>
                      <p className="text-blue-100 mb-6">{tech.description}</p>
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold mb-3">Key Features:</h4>
                        <ul className="space-y-2">
                          {tech.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center text-blue-100">
                              <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="text-sm text-blue-200 font-semibold">
                        Impact: {tech.impact}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {activeSection === 'applications' && (
              <div>
                <h2 className="text-4xl font-bold mb-6 text-center">{sections.applications.title}</h2>
                <p className="text-xl opacity-90 max-w-4xl mx-auto mb-12 text-center">
                  {sections.applications.content}
                </p>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {applications.map((app, index) => (
                    <motion.div
                      key={app.industry}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300"
                    >
                      <h3 className="text-2xl font-bold mb-4">{app.industry}</h3>
                      <p className="text-blue-100 mb-6">{app.description}</p>
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold mb-3">Applications:</h4>
                        <ul className="space-y-2">
                          {app.examples.map((example, idx) => (
                            <li key={idx} className="flex items-center text-blue-100">
                              <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                              {example}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="text-sm text-green-200 font-semibold">
                        Impact: {app.impact}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {activeSection === 'future' && (
              <div>
                <h2 className="text-4xl font-bold mb-6 text-center">{sections.future.title}</h2>
                <p className="text-xl opacity-90 max-w-4xl mx-auto mb-12 text-center">
                  {sections.future.content}
                </p>
                
                <div className="max-w-4xl mx-auto">
                  {futurePredictions.map((prediction, index) => (
                    <motion.div
                      key={prediction.year}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-6 hover:bg-white/20 transition-all duration-300"
                    >
                      <div className="flex items-start space-x-6">
                        <div className="bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2 rounded-lg font-bold text-lg">
                          {prediction.year}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold mb-3">{prediction.prediction}</h3>
                          <p className="text-blue-100 text-lg">{prediction.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business with AI?</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Join thousands of companies already using our AI innovations to drive growth and efficiency
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Get Started Today
              </button>
              <button className="border border-white/30 px-8 py-4 rounded-lg hover:bg-white/10 transition-all duration-300 font-semibold text-lg">
                Schedule Demo
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AIInnovationHub2025;