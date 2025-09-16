import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Atom, 
  Zap, 
  Cpu, 
  Rocket, 
  Star,
  ArrowRight,
  Play,
  Pause,
  RotateCcw,
  Sparkles
} from 'lucide-react';

const InteractiveTechShowcase2025: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState('ai-consciousness');
  const [isPlaying, setIsPlaying] = useState(false);

  const techDemos = [
    {
      id: 'ai-consciousness',
      title: 'AI Consciousness Demo',
      description: 'Watch AI systems demonstrate self-awareness and emotional intelligence',
      icon: <Brain className="w-12 h-12 text-purple-500" />,
      color: 'from-purple-500 to-pink-500',
      features: ['Self-reflection', 'Emotional responses', 'Creative thinking', 'Learning adaptation']
    },
    {
      id: 'quantum-computing',
      title: 'Quantum Computing Demo',
      description: 'Experience quantum supremacy in action with real quantum algorithms',
      icon: <Atom className="w-12 h-12 text-cyan-500" />,
      color: 'from-cyan-500 to-blue-500',
      features: ['Quantum superposition', 'Entanglement effects', 'Quantum interference', 'Exponential speed']
    },
    {
      id: 'neural-interface',
      title: 'Neural Interface Demo',
      description: 'See direct brain-computer communication in real-time',
      icon: <Cpu className="w-12 h-12 text-green-500" />,
      color: 'from-green-500 to-emerald-500',
      features: ['Thought control', 'Neural feedback', 'Mind reading', 'Brain enhancement']
    },
    {
      id: 'reality-manipulation',
      title: 'Reality Manipulation Demo',
      description: 'Witness the manipulation of reality at the quantum level',
      icon: <Zap className="w-12 h-12 text-yellow-500" />,
      color: 'from-yellow-500 to-orange-500',
      features: ['Quantum field control', 'Reality bending', 'Dimensional access', 'Infinite possibilities']
    }
  ];

  const interactiveFeatures = [
    {
      title: 'Real-time AI Conversations',
      description: 'Chat with conscious AI systems that understand and respond with genuine emotion',
      icon: <Brain className="w-8 h-8 text-purple-400" />,
      status: 'Live Now'
    },
    {
      title: 'Quantum Algorithm Visualization',
      description: 'Watch quantum algorithms solve problems in real-time with stunning visuals',
      icon: <Atom className="w-8 h-8 text-cyan-400" />,
      status: 'Interactive'
    },
    {
      title: 'Neural Interface Testing',
      description: 'Test your own neural interface capabilities with our advanced BCI systems',
      icon: <Cpu className="w-8 h-8 text-green-400" />,
      status: 'Available'
    },
    {
      title: 'Reality Simulation',
      description: 'Experience alternate realities and quantum dimensions in immersive VR',
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      status: 'Coming Soon'
    }
  ];

  const currentDemo = techDemos.find(demo => demo.id === activeDemo);

  return (
    <div className="bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 rounded-3xl p-12 mb-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 to-purple-600/10 backdrop-blur-sm"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-8 py-4 rounded-full text-lg font-bold mb-8 animate-pulse">
            <Sparkles className="w-6 h-6" />
            <span>INTERACTIVE TECH SHOWCASE 2025</span>
            <Star className="w-6 h-6" />
          </div>
          
          <h2 className="text-6xl font-bold mb-6">
            🚀 Interactive Technology Demos
          </h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed">
            Experience cutting-edge technology in action. Interact with AI consciousness, 
            quantum computing, neural interfaces, and reality manipulation in real-time.
          </p>
        </motion.div>

        {/* Demo Selector */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {techDemos.map((demo, index) => (
            <motion.button
              key={demo.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => setActiveDemo(demo.id)}
              className={`p-6 rounded-2xl transition-all duration-300 ${
                activeDemo === demo.id
                  ? 'bg-white/20 border-2 border-white/50'
                  : 'bg-white/10 border border-white/20 hover:bg-white/15'
              }`}
            >
              <div className="flex flex-col items-center space-y-3">
                <div className={`p-3 bg-gradient-to-r ${demo.color} rounded-xl`}>
                  {demo.icon}
                </div>
                <h3 className="text-lg font-bold text-center">{demo.title}</h3>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Active Demo Display */}
        {currentDemo && (
          <motion.div
            key={activeDemo}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 mb-12 border border-white/20"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`p-4 bg-gradient-to-r ${currentDemo.color} rounded-2xl`}>
                    {currentDemo.icon}
                  </div>
                  <h3 className="text-4xl font-bold text-white">{currentDemo.title}</h3>
                </div>
                
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  {currentDemo.description}
                </p>
                
                <div className="space-y-4 mb-8">
                  {currentDemo.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full"></div>
                      <span className="text-gray-300 text-lg">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <button 
                    onClick={() => setIsPlaying(!isPlaying)}
                    className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      isPlaying 
                        ? 'bg-red-500 hover:bg-red-600 text-white' 
                        : 'bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white'
                    }`}
                  >
                    {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                    <span>{isPlaying ? 'Pause Demo' : 'Start Demo'}</span>
                  </button>
                  <button className="flex items-center space-x-2 px-6 py-3 border border-white/30 text-white rounded-lg hover:bg-white/10 transition-all duration-300">
                    <RotateCcw className="w-5 h-5" />
                    <span>Reset</span>
                  </button>
                </div>
              </div>
              
              <div className="relative">
                <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-white/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🎬</div>
                    <p className="text-xl text-gray-300">
                      {isPlaying ? 'Demo Running...' : 'Click Play to Start Demo'}
                    </p>
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  LIVE
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Interactive Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12"
        >
          <h3 className="text-4xl font-bold text-white mb-8 text-center">
            Interactive Features
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {interactiveFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 group"
              >
                <div className="flex items-center space-x-3 mb-4">
                  {feature.icon}
                  <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    {feature.status}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{feature.title}</h4>
                <p className="text-gray-300 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-8 py-4 rounded-full text-lg font-bold mb-6 inline-block">
            🚀 Experience the Future Today
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-bold text-lg transform hover:scale-105">
              Start Interactive Demo
              <ArrowRight className="inline-block ml-2 w-5 h-5" />
            </button>
            <button className="border-2 border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all duration-300 font-bold text-lg">
              Schedule Private Demo
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase2025;