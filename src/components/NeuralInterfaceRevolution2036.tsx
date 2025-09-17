import React from 'react';
import { ArrowRight, Brain, Zap, Eye, Hand, Headphones, Wifi } from 'lucide-react';

const NeuralInterfaceRevolution2036: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-violet-900 via-purple-900 to-indigo-900 py-20">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-violet-500/20 via-purple-500/20 to-indigo-500/20 animate-pulse"></div>
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-violet-500/20 to-indigo-500/20 border border-violet-500/30 mb-6">
            <Brain className="w-5 h-5 text-violet-400 mr-2" />
            <span className="text-violet-400 font-semibold">NEURAL REVOLUTION 2036</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Neural Interface
            </span>
            <br />
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-violet-400 bg-clip-text text-transparent">
              Revolution
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Experience the future of human-computer interaction with direct neural interfaces 
            that bridge the gap between mind and machine.
          </p>
        </div>

        {/* Key Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-violet-900/50 to-purple-900/50 border border-violet-500/20 hover:border-violet-400/40 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-purple-500 rounded-xl flex items-center justify-center mb-6">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Mind Control</h3>
              <p className="text-gray-300 leading-relaxed">
                Control devices, applications, and systems directly with your thoughts 
                through advanced neural signal processing.
              </p>
            </div>
          </div>

          <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-purple-900/50 to-indigo-900/50 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-indigo-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Visual Interface</h3>
              <p className="text-gray-300 leading-relaxed">
                Project digital interfaces directly into your visual cortex for 
                seamless augmented reality experiences.
              </p>
            </div>
          </div>

          <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-indigo-900/50 to-blue-900/50 border border-indigo-500/20 hover:border-indigo-400/40 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-xl flex items-center justify-center mb-6">
                <Hand className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Tactile Feedback</h3>
              <p className="text-gray-300 leading-relaxed">
                Experience realistic touch sensations and haptic feedback through 
                neural stimulation technology.
              </p>
            </div>
          </div>

          <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-blue-900/50 to-cyan-900/50 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6">
                <Headphones className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Audio Interface</h3>
              <p className="text-gray-300 leading-relaxed">
                Direct audio transmission to your auditory cortex for crystal-clear 
                sound without external devices.
              </p>
            </div>
          </div>

          <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-cyan-900/50 to-teal-900/50 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-teal-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-xl flex items-center justify-center mb-6">
                <Wifi className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Wireless Connectivity</h3>
              <p className="text-gray-300 leading-relaxed">
                Seamless wireless connection to the internet and cloud services 
                through neural network protocols.
              </p>
            </div>
          </div>

          <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-teal-900/50 to-green-900/50 border border-teal-500/20 hover:border-teal-400/40 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-green-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-green-500 rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Enhanced Cognition</h3>
              <p className="text-gray-300 leading-relaxed">
                Boost your cognitive abilities with AI-assisted thinking and 
                enhanced memory processing capabilities.
              </p>
            </div>
          </div>
        </div>

        {/* Applications Section */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
              Revolutionary Applications
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-xl bg-gradient-to-br from-violet-900/30 to-purple-900/30 border border-violet-500/20">
              <h3 className="text-xl font-bold text-white mb-3">Medical Diagnosis</h3>
              <p className="text-gray-300 text-sm">Real-time health monitoring and AI-powered medical diagnosis</p>
            </div>
            <div className="p-6 rounded-xl bg-gradient-to-br from-purple-900/30 to-indigo-900/30 border border-purple-500/20">
              <h3 className="text-xl font-bold text-white mb-3">Education</h3>
              <p className="text-gray-300 text-sm">Direct knowledge transfer and accelerated learning</p>
            </div>
            <div className="p-6 rounded-xl bg-gradient-to-br from-indigo-900/30 to-blue-900/30 border border-indigo-500/20">
              <h3 className="text-xl font-bold text-white mb-3">Communication</h3>
              <p className="text-gray-300 text-sm">Telepathic communication and language translation</p>
            </div>
            <div className="p-6 rounded-xl bg-gradient-to-br from-blue-900/30 to-cyan-900/30 border border-blue-500/20">
              <h3 className="text-xl font-bold text-white mb-3">Entertainment</h3>
              <p className="text-gray-300 text-sm">Immersive virtual reality and shared experiences</p>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent mb-2">
              99.8%
            </div>
            <div className="text-gray-300">Neural Accuracy</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent mb-2">
              10,000+
            </div>
            <div className="text-gray-300">Neural Channels</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent mb-2">
              &lt;1ms
            </div>
            <div className="text-gray-300">Response Time</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
              24/7
            </div>
            <div className="text-gray-300">Continuous Operation</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-violet-500 to-indigo-500 text-white font-semibold text-lg hover:from-violet-400 hover:to-indigo-400 transition-all duration-300 cursor-pointer group">
            <span>Experience Neural Future</span>
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </div>
          <p className="text-gray-400 mt-4">
            Transform your reality with neural interfaces
          </p>
        </div>
      </div>
    </div>
  );
};

export default NeuralInterfaceRevolution2036;