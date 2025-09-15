import React from 'react';
import { motion } from 'framer-motion';

const AdvancedRobotics2026: React.FC = () => {
  const robots = [
    {
      name: "Humanoid Assistant",
      description: "Advanced humanoid robots with human-like dexterity and intelligence",
      icon: "🤖",
      features: ["Human-like movement", "Facial recognition", "Natural language processing", "Emotional intelligence"]
    },
    {
      name: "Medical Surgery Bot",
      description: "Precision surgical robots for complex medical procedures",
      icon: "🏥",
      features: ["Sub-millimeter precision", "Real-time imaging", "Minimally invasive", "AI-assisted diagnosis"]
    },
    {
      name: "Space Exploration Rover",
      description: "Autonomous robots for planetary exploration and research",
      icon: "🚀",
      features: ["Extreme environment operation", "Self-repair capabilities", "Scientific analysis", "Long-range communication"]
    },
    {
      name: "Industrial Manufacturing",
      description: "Highly efficient robots for advanced manufacturing processes",
      icon: "🏭",
      features: ["24/7 operation", "Quality control", "Adaptive learning", "Collaborative work"]
    },
    {
      name: "Service Companion",
      description: "Personal service robots for daily assistance and companionship",
      icon: "👥",
      features: ["Personal assistance", "Health monitoring", "Entertainment", "Social interaction"]
    },
    {
      name: "Search and Rescue",
      description: "Emergency response robots for disaster relief and rescue operations",
      icon: "🚨",
      features: ["Hazardous environment operation", "Victim detection", "Emergency response", "Communication relay"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🤖 ADVANCED ROBOTICS • 2026
            </div>
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 bg-clip-text text-transparent">
              The Future of Robotics
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              Revolutionary robotics technology that combines artificial intelligence, 
              advanced mechanics, and human-like capabilities to transform industries and daily life.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Robotics Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {robots.map((robot, index) => (
            <motion.div
              key={robot.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="text-6xl mb-4 text-center">{robot.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-center text-gray-800">{robot.name}</h3>
              <p className="text-gray-600 mb-6 text-center">{robot.description}</p>
              <ul className="text-gray-700 space-y-2 mb-6 text-sm">
                {robot.features.map((feature, idx) => (
                  <li key={idx}>• {feature}</li>
                ))}
              </ul>
              <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                Learn More →
              </button>
            </motion.div>
          ))}
        </div>

        {/* Technology Features */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-2xl p-12 mb-16"
        >
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Revolutionary Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our advanced robotics systems possess capabilities that were once considered science fiction
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">AI Integration</h3>
              <p className="text-gray-600 text-sm">
                Advanced artificial intelligence for autonomous decision making and learning
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Precision Control</h3>
              <p className="text-gray-600 text-sm">
                Sub-millimeter precision for delicate operations and complex tasks
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Adaptive Learning</h3>
              <p className="text-gray-600 text-sm">
                Continuous learning and adaptation to new environments and tasks
              </p>
            </div>
          </div>
        </motion.div>

        {/* Applications */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Industry Applications
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Our robotics solutions are transforming industries across the globe
          </p>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { industry: 'Healthcare', icon: '🏥', robots: '50K+' },
              { industry: 'Manufacturing', icon: '🏭', robots: '1M+' },
              { industry: 'Space', icon: '🚀', robots: '500+' },
              { industry: 'Service', icon: '👥', robots: '100K+' }
            ].map((app, index) => (
              <motion.div
                key={app.industry}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl mb-3">{app.icon}</div>
                <h3 className="text-lg font-bold mb-2 text-gray-800">{app.industry}</h3>
                <div className="text-2xl font-bold text-purple-600">{app.robots}</div>
                <div className="text-sm text-gray-600">Active Robots</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 rounded-2xl p-12 text-white">
            <h2 className="text-4xl font-bold mb-4">Ready to Embrace Robotics?</h2>
            <p className="text-xl mb-8 opacity-90">
              Discover how our advanced robotics solutions can transform your business and operations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-purple-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg"
              >
                Get Started
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold text-lg"
              >
                Learn More
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AdvancedRobotics2026;