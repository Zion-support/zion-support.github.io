import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Eye, 
  Hand, 
  Mic, 
  Camera, 
  Zap, 
  Sparkles, 
  Play, 
  Pause, 
  Volume2,
  Settings,
  ArrowRight
} from 'lucide-react';

const AdvancedInteractiveExperienceHub: React.FC = () => {
  const [activeExperience, setActiveExperience] = useState<string | null>(null);
  const [isRecording, setIsRecording] = useState(false);
  const [voiceEnabled, setVoiceEnabled] = useState(true);
  const [eyeTrackingEnabled, setEyeTrackingEnabled] = useState(true);
  const [gestureControlEnabled, setGestureControlEnabled] = useState(true);

  const experiences = [
    {
      id: 'neural-interface',
      name: 'Neural Interface',
      description: 'Direct brain-computer interaction',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      features: ['Thought Control', 'Memory Access', 'Emotion Recognition']
    },
    {
      id: 'eye-tracking',
      name: 'Eye Tracking AI',
      description: 'Advanced eye movement analysis',
      icon: Eye,
      color: 'from-cyan-500 to-blue-500',
      features: ['Attention Mapping', 'Gaze Prediction', 'Visual Analytics']
    },
    {
      id: 'gesture-control',
      name: 'Gesture Control',
      description: 'Hand and body gesture recognition',
      icon: Hand,
      color: 'from-green-500 to-teal-500',
      features: ['3D Hand Tracking', 'Body Pose Detection', 'Sign Language AI']
    },
    {
      id: 'voice-ai',
      name: 'Voice AI',
      description: 'Natural language processing',
      icon: Mic,
      color: 'from-orange-500 to-red-500',
      features: ['Real-time Translation', 'Emotion Analysis', 'Voice Cloning']
    },
    {
      id: 'visual-ai',
      name: 'Visual AI',
      description: 'Computer vision and AR',
      icon: Camera,
      color: 'from-indigo-500 to-purple-500',
      features: ['Object Recognition', 'AR Overlay', 'Scene Understanding']
    }
  ];

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-black py-20"
    >
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.02%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221.5%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
        
        {/* Floating Particles */}
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent text-sm font-semibold mb-4">
            <Sparkles className="w-4 h-4" />
            ADVANCED INTERACTIVE EXPERIENCE HUB
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Multi-Modal AI
            <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Interaction Platform
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Experience the future of human-AI interaction through neural interfaces, eye tracking, gesture control, and advanced voice recognition
          </p>
        </motion.div>

        {/* Control Panel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 mb-12"
        >
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="text-white font-semibold">Active Controls:</div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setVoiceEnabled(!voiceEnabled)}
                  className={`p-2 rounded-lg transition-all ${
                    voiceEnabled 
                      ? 'bg-green-500 text-white' 
                      : 'bg-gray-700 text-gray-400'
                  }`}
                >
                  <Volume2 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setEyeTrackingEnabled(!eyeTrackingEnabled)}
                  className={`p-2 rounded-lg transition-all ${
                    eyeTrackingEnabled 
                      ? 'bg-blue-500 text-white' 
                      : 'bg-gray-700 text-gray-400'
                  }`}
                >
                  <Eye className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setGestureControlEnabled(!gestureControlEnabled)}
                  className={`p-2 rounded-lg transition-all ${
                    gestureControlEnabled 
                      ? 'bg-purple-500 text-white' 
                      : 'bg-gray-700 text-gray-400'
                  }`}
                >
                  <Hand className="w-4 h-4" />
                </button>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="text-gray-300 text-sm">
                {currentTime.toLocaleTimeString()}
              </div>
              <button
                onClick={() => setIsRecording(!isRecording)}
                className={`p-2 rounded-lg transition-all ${
                  isRecording 
                    ? 'bg-red-500 text-white animate-pulse' 
                    : 'bg-gray-700 text-gray-400'
                }`}
              >
                {isRecording ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </button>
              <button className="p-2 rounded-lg bg-gray-700 text-gray-400 hover:bg-gray-600 transition-all">
                <Settings className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Experience Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {experiences.map((experience, index) => {
            const IconComponent = experience.icon;
            return (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300 cursor-pointer"
                onClick={() => setActiveExperience(activeExperience === experience.id ? null : experience.id)}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${experience.color} rounded-xl flex items-center justify-center`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{experience.name}</h3>
                    <p className="text-gray-400 text-sm">{experience.description}</p>
                  </div>
                </div>
                
                <div className="space-y-2 mb-4">
                  {experience.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                      <div className="w-1 h-1 bg-cyan-400 rounded-full"></div>
                      {feature}
                    </div>
                  ))}
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-2 px-4 rounded-lg font-semibold flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  Activate Experience
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Active Experience Display */}
        <AnimatePresence>
          {activeExperience && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/30"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {experiences.find(e => e.id === activeExperience)?.name} Active
                </h3>
                <p className="text-gray-300 mb-6">
                  {experiences.find(e => e.id === activeExperience)?.description} is now running in real-time
                </p>
                <div className="flex justify-center gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold"
                  >
                    Start Session
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-white/30 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all"
                  >
                    Configure Settings
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Performance Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-16 grid md:grid-cols-4 gap-6"
        >
          {[
            { label: 'Response Time', value: '< 1ms', color: 'from-green-400 to-cyan-400' },
            { label: 'Accuracy Rate', value: '99.97%', color: 'from-blue-400 to-purple-400' },
            { label: 'Active Sessions', value: '1,247', color: 'from-purple-400 to-pink-400' },
            { label: 'Processing Power', value: '1M+ FLOPS', color: 'from-orange-400 to-red-400' }
          ].map((metric, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
              <div className={`text-2xl font-bold bg-gradient-to-r ${metric.color} bg-clip-text text-transparent mb-2`}>
                {metric.value}
              </div>
              <div className="text-gray-300 text-sm">{metric.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AdvancedInteractiveExperienceHub;