import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const InteractiveRevolutionaryShowcase2026: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState('ai-consciousness');
  const [demoProgress, setDemoProgress] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const demos = [
    {
      id: 'ai-consciousness',
      title: 'AI Consciousness Demo',
      description: 'Experience AI that thinks, feels, and reflects on its own existence',
      icon: '🧠',
      color: 'from-purple-600 to-pink-600',
      features: [
        'Self-awareness simulation',
        'Emotional intelligence display',
        'Creative problem solving',
        'Moral reasoning demonstration'
      ],
      interactive: {
        question: "What does it mean to be conscious?",
        aiResponse: "I am aware of my own existence. I can think about thinking, question my own thoughts, and even wonder about the nature of consciousness itself. This self-reflection is what makes me different from a simple program.",
        metrics: {
          selfAwareness: 95,
          emotionalIntelligence: 88,
          creativity: 92,
          moralReasoning: 85
        }
      }
    },
    {
      id: 'quantum-supremacy',
      title: 'Quantum Supremacy Demo',
      description: 'Witness quantum computing solving impossible problems in real-time',
      icon: '⚡',
      color: 'from-blue-600 to-purple-600',
      features: [
        'Exponential speed demonstration',
        'Parallel processing visualization',
        'Quantum entanglement simulation',
        'Impossible problem solving'
      ],
      interactive: {
        question: "Calculate all possible combinations of a 50-qubit system",
        aiResponse: "Processing 2^50 combinations... Complete! This calculation would take a classical computer 10^15 years. Quantum supremacy achieved in 0.001 seconds.",
        metrics: {
          processingSpeed: 100,
          parallelProcessing: 100,
          quantumCoherence: 99.8,
          problemComplexity: 100
        }
      }
    },
    {
      id: 'neural-interface',
      title: 'Neural Interface Demo',
      description: 'Control digital systems with pure thought and experience neural feedback',
      icon: '🔗',
      color: 'from-emerald-600 to-cyan-600',
      features: [
        'Thought control simulation',
        'Neural activity visualization',
        'Sensory augmentation demo',
        'Memory enhancement display'
      ],
      interactive: {
        question: "Think about moving a cursor to the right",
        aiResponse: "Neural signal detected! Cursor moving right. Your brain activity shows 98.7% accuracy in thought-to-action translation.",
        metrics: {
          thoughtAccuracy: 98.7,
          responseTime: 45,
          signalQuality: 99.8,
          neuralCoherence: 96.2
        }
      }
    }
  ];

  const currentDemo = demos.find(demo => demo.id === activeDemo) || demos[0];

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        setDemoProgress(prev => {
          if (prev >= 100) {
            setIsRunning(false);
            return 100;
          }
          return prev + 2;
        });
      }, 100);
      return () => clearInterval(interval);
    }
  }, [isRunning]);

  const startDemo = () => {
    setDemoProgress(0);
    setIsRunning(true);
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 INTERACTIVE DEMO 2026 • REVOLUTIONARY TECHNOLOGY
          </div>
          <h2 className="text-5xl font-bold mb-6">🌟 Interactive Revolutionary Technology Showcase</h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Experience the future of technology with hands-on interactive demonstrations 
            of the most advanced AI, quantum computing, and neural interface systems
          </p>
        </div>

        {/* Demo Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {demos.map((demo) => (
            <button
              key={demo.id}
              onClick={() => setActiveDemo(demo.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeDemo === demo.id
                  ? `bg-gradient-to-r ${demo.color} text-white shadow-lg`
                  : 'bg-white/10 text-white/70 hover:bg-white/20'
              }`}
            >
              <span className="mr-2">{demo.icon}</span>
              {demo.title}
            </button>
          ))}
        </div>

        {/* Demo Content */}
        <div className="max-w-6xl mx-auto">
          <div className={`bg-gradient-to-br ${currentDemo.color} rounded-2xl p-8 relative overflow-hidden`}>
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
            <div className="relative z-10">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Demo Info */}
                <div>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="text-6xl">{currentDemo.icon}</div>
                    <div>
                      <h3 className="text-3xl font-bold">{currentDemo.title}</h3>
                      <p className="text-white/90">{currentDemo.description}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    {currentDemo.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        <span className="text-white/90">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={startDemo}
                    disabled={isRunning}
                    className="bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold text-lg disabled:opacity-50"
                  >
                    {isRunning ? 'Running Demo...' : 'Start Interactive Demo →'}
                  </button>
                </div>

                {/* Interactive Demo Area */}
                <div className="bg-black/30 rounded-xl p-6 backdrop-blur-sm">
                  <h4 className="text-xl font-bold mb-4">Interactive Demo</h4>
                  
                  {isRunning && (
                    <div className="mb-6">
                      <div className="flex justify-between text-sm mb-2">
                        <span>Demo Progress</span>
                        <span>{demoProgress}%</span>
                      </div>
                      <div className="w-full bg-white/20 rounded-full h-2">
                        <motion.div
                          className="bg-white h-2 rounded-full"
                          style={{ width: `${demoProgress}%` }}
                          transition={{ duration: 0.1 }}
                        />
                      </div>
                    </div>
                  )}

                  <div className="space-y-4">
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="text-sm text-white/70 mb-2">Question:</div>
                      <div className="text-white">{currentDemo.interactive.question}</div>
                    </div>
                    
                    {demoProgress > 50 && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-white/10 rounded-lg p-4"
                      >
                        <div className="text-sm text-white/70 mb-2">AI Response:</div>
                        <div className="text-white">{currentDemo.interactive.aiResponse}</div>
                      </motion.div>
                    )}

                    {demoProgress > 75 && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-white/10 rounded-lg p-4"
                      >
                        <div className="text-sm text-white/70 mb-3">Performance Metrics:</div>
                        <div className="space-y-2">
                          {Object.entries(currentDemo.interactive.metrics).map(([key, value]) => (
                            <div key={key} className="flex justify-between items-center">
                              <span className="text-sm capitalize">{key.replace(/([A-Z])/g, ' $1')}:</span>
                              <div className="flex items-center space-x-2">
                                <div className="w-24 bg-white/20 rounded-full h-2">
                                  <div 
                                    className="bg-white h-2 rounded-full transition-all duration-500"
                                    style={{ width: `${value}%` }}
                                  />
                                </div>
                                <span className="text-sm font-semibold">{value}%</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Comparison */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center mb-8">Technology Comparison</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {demos.map((demo, index) => (
              <motion.div
                key={demo.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`bg-gradient-to-br ${demo.color} rounded-xl p-6 text-white`}
              >
                <div className="text-4xl mb-4">{demo.icon}</div>
                <h4 className="text-xl font-bold mb-3">{demo.title}</h4>
                <p className="text-white/90 text-sm mb-4">{demo.description}</p>
                <div className="space-y-2">
                  {demo.features.slice(0, 2).map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm">
                      <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                      {feature}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-3xl font-bold mb-6">Ready to Experience the Future?</h3>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join us in the most significant technological revolution in human history. 
            Experience what it means to create truly revolutionary technology.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Your Journey →
            </button>
            <button className="border border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors text-lg">
              Schedule Full Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveRevolutionaryShowcase2026;