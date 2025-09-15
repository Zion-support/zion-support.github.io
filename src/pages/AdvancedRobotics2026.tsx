import React from 'react';
import { motion } from 'framer-motion';

const AdvancedRobotics2026: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-zinc-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-500/20 to-gray-500/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-slate-500 to-gray-500 rounded-full text-white text-sm font-bold mb-6">
              🤖 ADVANCED ROBOTICS • 2026
            </div>
            <h1 className="text-6xl font-bold mb-6">
              Advanced Robotics 2026
            </h1>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Revolutionary robotics solutions that are transforming industries and reshaping human-robot collaboration
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gradient-to-r from-slate-500 to-gray-500 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
                Explore Robotics →
              </button>
              <button className="border-2 border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all duration-300 font-semibold text-lg">
                View Demo
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Robotics Capabilities */}
      <div className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Revolutionary Robotics Capabilities</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the cutting-edge robotics technologies that are revolutionizing industries
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Autonomous Navigation",
                description: "AI-powered robots that navigate complex environments independently",
                icon: "🧭",
                color: "from-blue-500 to-cyan-500"
              },
              {
                title: "Human-Robot Collaboration",
                description: "Seamless interaction between humans and robots in shared workspaces",
                icon: "🤝",
                color: "from-green-500 to-emerald-500"
              },
              {
                title: "Precision Manufacturing",
                description: "Ultra-precise robotic systems for advanced manufacturing processes",
                icon: "⚙️",
                color: "from-purple-500 to-pink-500"
              },
              {
                title: "Medical Robotics",
                description: "Surgical and therapeutic robots for advanced medical procedures",
                icon: "🏥",
                color: "from-red-500 to-orange-500"
              },
              {
                title: "Service Robotics",
                description: "Intelligent service robots for hospitality, retail, and customer service",
                icon: "🛎️",
                color: "from-indigo-500 to-purple-500"
              },
              {
                title: "Agricultural Robotics",
                description: "Autonomous farming robots for precision agriculture and crop management",
                icon: "🌾",
                color: "from-yellow-500 to-green-500"
              }
            ].map((capability, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-indigo-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-8 border border-indigo-400/30 hover:scale-105 transition-all duration-300"
              >
                <div className="text-5xl mb-6 text-center">{capability.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-cyan-300 text-center">{capability.title}</h3>
                <p className="text-gray-300 mb-6 text-center leading-relaxed">{capability.description}</p>
                <div className={`w-full h-2 bg-gradient-to-r ${capability.color} rounded-full`}></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-20 px-4 bg-gradient-to-r from-slate-600/10 to-gray-600/10">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Transform Your Industry
          </h2>
          <p className="text-2xl text-gray-300 mb-12 max-w-4xl mx-auto">
            Implement advanced robotics solutions to revolutionize your business operations
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white px-12 py-4 rounded-2xl text-xl font-bold hover:shadow-2xl transition-all duration-300 hover:scale-105">
              Start Robotics Journey →
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 px-12 py-4 rounded-2xl text-xl font-bold hover:bg-cyan-400/10 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedRobotics2026;