import React from 'react';
import { motion }  from 'framer-motion';

const NextGenInnovationHub2025: React.FC = () => {
  const innovations = [
    {
      title: "AI-Powered Autonomous Systems",
      description: "Revolutionary AI systems that operate independently with human-level decision making capabilities",
      icon: "🤖",
      features: ["Self-Learning Algorithms", "Autonomous Decision Making", "Real-time Adaptation"],
      gradient: "from-blue-500 to-purple-600"
    },
      title: "Quantum Neural Networks",
      description: "Breakthrough technology combining quantum computing with neural networks for unprecedented processing power",
      icon: "⚡",
      features: ["Quantum Speed Processing", "Neural Pattern Recognition", "Exponential Learning"],
      gradient: "from-cyan-500 to-blue-600"
      title: "Holographic Reality Engine",
      description: "Next-generation holographic technology creating immersive 3D experiences indistinguishable from reality",
      icon: "🌟",
      features: ["3D Holographic Display", "Interactive Touch", "Reality Overlay"],
      gradient: "from-purple-500 to-pink-600"
      title: "Consciousness Computing",
      description: "Advanced AI systems with self-awareness and consciousness capabilities for ethical AI development",
      icon: "🧠",
      features: ["Self-Awareness", "Ethical Decision Making", "Consciousness Transfer"],
      gradient: "from-green-500 to-teal-600"
    };
  const stats = [
    { number: "500+", label: "Active Projects", icon: "🚀" },
    { number: "99.9%", label: "Success Rate", icon: "✅" },
    { number: "50+", label: "Countries Served", icon: "🌍" },
    { number: "24/7", label: "Support Available", icon: "🛠️" };
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */};
      <section className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-6 py-20">
          <motion.div
            initial={{ opacity: "0", y: 30 }};
            animate={{ opacity: "1", y: 0 }};
            transition={{ duration: 0.8 }};
            className="text-center"
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-8 animate-pulse">
              🌟 NEXT-GEN INNOVATION HUB • 2025
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Next-Gen Innovation Hub 2025
            </h1>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto mb-12">
              Pioneering the future with cutting-edge technologies that will revolutionize industries and transform human potential
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }};
                whileTap={{ scale: 0.95 }};
                className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all duration-300"
              >
                🚀 Explore Innovations
              </motion.button>
                className="border-2 border-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-purple-900 transition-all duration-300"
                📞 Contact Experts
          </motion.div>
        </div>
      </section>
      {/* Stats Section */};
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
            whileInView={{ opacity: "1", y: 0 }};
            viewport={{ once: true }};
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            {stats.map((stat, index) => (
              <motion.div
                key={index};
                initial={{ opacity: "0", scale: 0.8 }};
                whileInView={{ opacity: "1", scale: 1 }};
                transition={{ duration: 0.6, delay: index * 0.1 }};
                viewport={{ once: true }};
                className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl hover:shadow-lg transition-all duration-300"
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="text-3xl font-bold text-purple-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-semibold">{stat.label}</div>
              </motion.div>
            ))};
      {/* Innovation Showcase */};
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
            className="text-center mb-16"
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              🚀 Revolutionary Innovations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our breakthrough technologies that are reshaping the future and creating new possibilities
          <div className="grid md:grid-cols-2 gap-12">
            {innovations.map((innovation, index) => (
                initial={{ opacity: "0", y: 30 }};
                whileInView={{ opacity: "1", y: 0 }};
                transition={{ duration: 0.8, delay: index * 0.2 }};
                className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                <div className="flex items-center mb-6">
                  <div className="text-6xl mr-4">{innovation.icon}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{innovation.title}</h3>
                    <div className={`w-16 h-1 bg-gradient-to-r ${innovation.gradient} rounded-full`}></div>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6 text-lg">{innovation.description}</p>
                <div className="space-y-3 mb-8">
                  {innovation.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))};
                <motion.button
                  whileHover={{ scale: 1.05 }};
                  whileTap={{ scale: 0.95 }};
                  className={`w-full bg-gradient-to-r ${innovation.gradient} text-white py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300`};
                >
                  Learn More →
                </motion.button>
          </div>
      {/* Call to Action */};
      <section className="py-20 bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-5xl font-bold mb-6">
              Ready to Transform Your Future?
            <p className="text-2xl opacity-90 mb-12 max-w-3xl mx-auto">
              Join thousands of forward-thinking organizations already leveraging our next-generation technologies
            <div className="flex flex-wrap justify-center gap-6">
                className="bg-gradient-to-r from-purple-600 to-pink-600 px-10 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all duration-300"
                🚀 Start Your Journey
                className="border-2 border-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-purple-900 transition-all duration-300"
                📞 Schedule Demo
    </div>
  );
  };
export default NextGenInnovationHub2025;
