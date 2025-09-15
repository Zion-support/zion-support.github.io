import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AIInnovationHub2026: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: '🏠' },
    { id: 'technologies', label: 'Technologies', icon: '⚡' },
    { id: 'applications', label: 'Applications', icon: '🚀' },
    { id: 'case-studies', label: 'Case Studies', icon: '📊' },
    { id: 'future', label: 'Future Vision', icon: '🔮' }
  ];

  const technologies = [
    {
      name: "Synthetic Consciousness AI",
      description: "AI systems with self-awareness and creative problem-solving capabilities",
      icon: "🧠",
      features: ["Self-Awareness", "Creative Thinking", "Emotional Intelligence", "Ethical Reasoning"],
      status: "In Development",
      progress: 85
    },
    {
      name: "Quantum Neural Networks",
      description: "Hybrid quantum-classical neural networks for exponential processing power",
      icon: "⚛️",
      features: ["Quantum Processing", "Neural Learning", "Exponential Speed", "Pattern Recognition"],
      status: "Research Phase",
      progress: 60
    },
    {
      name: "Autonomous AI Agents",
      description: "Self-operating AI systems that can make decisions and execute tasks independently",
      icon: "🤖",
      features: ["Autonomous Operation", "Decision Making", "Task Execution", "Self-Healing"],
      status: "Beta Testing",
      progress: 75
    },
    {
      name: "Emotional AI Systems",
      description: "AI that understands and responds to human emotions with empathy",
      icon: "💝",
      features: ["Emotion Recognition", "Empathetic Responses", "Social Intelligence", "Human Connection"],
      status: "Production Ready",
      progress: 90
    }
  ];

  const applications = [
    {
      title: "Healthcare Revolution",
      description: "AI-powered diagnostic systems and personalized treatment plans",
      impact: "40% faster diagnosis, 60% improved outcomes",
      icon: "🏥",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Smart Cities",
      description: "Autonomous urban management systems optimizing traffic, energy, and resources",
      impact: "50% reduction in energy consumption, 30% less traffic congestion",
      icon: "🏙️",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "Education Transformation",
      description: "Personalized AI tutors adapting to individual learning styles",
      impact: "70% improvement in learning outcomes, 80% student engagement",
      icon: "🎓",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Climate Solutions",
      description: "AI systems optimizing renewable energy and carbon capture technologies",
      impact: "35% increase in renewable efficiency, 25% carbon reduction",
      icon: "🌱",
      gradient: "from-teal-500 to-green-500"
    }
  ];

  const caseStudies = [
    {
      company: "GlobalTech Corp",
      challenge: "Manual data processing causing 40% efficiency loss",
      solution: "Implemented autonomous AI agents for data processing",
      results: "300% efficiency increase, $2M annual savings",
      timeline: "6 months",
      icon: "📈"
    },
    {
      company: "MediCare Plus",
      challenge: "Diagnostic errors affecting patient outcomes",
      solution: "Deployed emotional AI diagnostic systems",
      results: "60% reduction in diagnostic errors, 45% faster treatment",
      timeline: "4 months",
      icon: "🏥"
    },
    {
      company: "EcoCity Solutions",
      challenge: "Inefficient energy management in smart cities",
      solution: "Quantum neural networks for energy optimization",
      results: "50% energy savings, 30% cost reduction",
      timeline: "8 months",
      icon: "⚡"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-sm font-bold mb-6">
              🚀 AI INNOVATION HUB 2026
            </div>
            <h1 className="text-5xl font-bold mb-6">
              The Future of Artificial Intelligence
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
              Discover revolutionary AI technologies that are reshaping industries and transforming human potential. 
              Experience the next generation of intelligent systems.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                Explore Technologies →
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-colors font-semibold">
                Watch Demo
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2 py-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="container mx-auto px-4 py-12">
        <AnimatePresence mode="wait">
          {activeTab === 'overview' && (
            <motion.div
              key="overview"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">AI Innovation Overview</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Our AI Innovation Hub represents the cutting edge of artificial intelligence research and development, 
                  pushing the boundaries of what's possible with intelligent systems.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-5xl mb-4">🧠</div>
                  <h3 className="text-2xl font-bold mb-4">Synthetic Intelligence</h3>
                  <p className="text-gray-600 mb-4">
                    AI systems with consciousness, creativity, and emotional intelligence that can think and feel like humans.
                  </p>
                  <div className="text-3xl font-bold text-purple-600">85%</div>
                  <div className="text-sm text-gray-500">Development Progress</div>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-5xl mb-4">⚛️</div>
                  <h3 className="text-2xl font-bold mb-4">Quantum AI</h3>
                  <p className="text-gray-600 mb-4">
                    Revolutionary quantum-classical hybrid systems that process information at unprecedented speeds.
                  </p>
                  <div className="text-3xl font-bold text-blue-600">60%</div>
                  <div className="text-sm text-gray-500">Research Progress</div>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-5xl mb-4">🤖</div>
                  <h3 className="text-2xl font-bold mb-4">Autonomous Agents</h3>
                  <p className="text-gray-600 mb-4">
                    Self-operating AI systems that can make decisions and execute complex tasks independently.
                  </p>
                  <div className="text-3xl font-bold text-green-600">75%</div>
                  <div className="text-sm text-gray-500">Beta Testing</div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white text-center">
                <h3 className="text-3xl font-bold mb-4">🌟 Join the AI Revolution</h3>
                <p className="text-xl opacity-90 mb-6 max-w-2xl mx-auto">
                  Be part of the most significant technological advancement in human history. 
                  Experience AI that thinks, feels, and creates like never before.
                </p>
                <button className="bg-white text-purple-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                  Get Started Today →
                </button>
              </div>
            </motion.div>
          )}

          {activeTab === 'technologies' && (
            <motion.div
              key="technologies"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Revolutionary AI Technologies</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Explore the cutting-edge AI technologies that are reshaping our understanding of intelligence and capability.
                </p>
              </div>

              <div className="space-y-8">
                {technologies.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow"
                  >
                    <div className="flex items-start space-x-6">
                      <div className="text-6xl">{tech.icon}</div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-2xl font-bold text-gray-900">{tech.name}</h3>
                          <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
                            tech.status === 'Production Ready' ? 'bg-green-100 text-green-700' :
                            tech.status === 'Beta Testing' ? 'bg-blue-100 text-blue-700' :
                            tech.status === 'In Development' ? 'bg-yellow-100 text-yellow-700' :
                            'bg-gray-100 text-gray-700'
                          }`}>
                            {tech.status}
                          </span>
                        </div>
                        <p className="text-gray-600 mb-6 text-lg">{tech.description}</p>
                        
                        <div className="mb-6">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-semibold text-gray-700">Development Progress</span>
                            <span className="text-sm font-semibold text-gray-700">{tech.progress}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-3">
                            <div 
                              className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full transition-all duration-1000"
                              style={{ width: `${tech.progress}%` }}
                            ></div>
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                            <ul className="space-y-2">
                              {tech.features.map((feature, featureIndex) => (
                                <li key={featureIndex} className="flex items-center text-gray-600">
                                  <span className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-3"></span>
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="flex items-center justify-center">
                            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                              Learn More →
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'applications' && (
            <motion.div
              key="applications"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Real-World Applications</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  See how our AI technologies are transforming industries and creating measurable impact across the globe.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {applications.map((app, index) => (
                  <motion.div
                    key={app.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow"
                  >
                    <div className={`w-16 h-16 bg-gradient-to-r ${app.gradient} rounded-2xl flex items-center justify-center text-3xl mb-6`}>
                      {app.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{app.title}</h3>
                    <p className="text-gray-600 mb-6 text-lg">{app.description}</p>
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                      <div className="flex items-center mb-2">
                        <span className="text-green-600 font-semibold">📈 Measurable Impact:</span>
                      </div>
                      <p className="text-green-700 font-semibold">{app.impact}</p>
                    </div>
                    <button className={`w-full bg-gradient-to-r ${app.gradient} text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}>
                      Explore Application →
                    </button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'case-studies' && (
            <motion.div
              key="case-studies"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Success Stories</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Real companies, real challenges, real results. See how our AI solutions have transformed businesses.
                </p>
              </div>

              <div className="space-y-8">
                {caseStudies.map((study, index) => (
                  <motion.div
                    key={study.company}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow"
                  >
                    <div className="flex items-start space-x-6">
                      <div className="text-5xl">{study.icon}</div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-2xl font-bold text-gray-900">{study.company}</h3>
                          <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                            {study.timeline}
                          </span>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                            <p className="text-gray-600 mb-4">{study.challenge}</p>
                            
                            <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                            <p className="text-gray-600">{study.solution}</p>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Results:</h4>
                            <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-4">
                              <p className="text-green-700 font-semibold text-lg">{study.results}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'future' && (
            <motion.div
              key="future"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Future Vision 2030</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  A glimpse into the future where AI and humanity work together to solve the world's greatest challenges.
                </p>
              </div>

              <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 rounded-2xl p-12 text-white text-center mb-12">
                <h3 className="text-4xl font-bold mb-6">🌟 The AI-Powered Future</h3>
                <p className="text-xl opacity-90 max-w-4xl mx-auto mb-8">
                  By 2030, we envision a world where AI systems work seamlessly with humans to solve complex problems, 
                  enhance creativity, and create unprecedented opportunities for growth and discovery.
                </p>
                <div className="grid md:grid-cols-3 gap-8 mt-12">
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
                    <div className="text-4xl mb-4">🌍</div>
                    <h4 className="text-xl font-bold mb-3">Global Impact</h4>
                    <p className="opacity-90">AI solutions addressing climate change, healthcare, and education worldwide</p>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
                    <div className="text-4xl mb-4">🤝</div>
                    <h4 className="text-xl font-bold mb-3">Human-AI Collaboration</h4>
                    <p className="opacity-90">Seamless partnership between human creativity and AI capabilities</p>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
                    <div className="text-4xl mb-4">🚀</div>
                    <h4 className="text-xl font-bold mb-3">Infinite Possibilities</h4>
                    <p className="opacity-90">Unlimited potential for innovation and discovery</p>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Ready to Shape the Future?</h3>
                <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                  Join us in creating the next generation of AI technologies that will transform our world.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                    Start Your Journey →
                  </button>
                  <button className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold">
                    Learn More
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AIInnovationHub2026;