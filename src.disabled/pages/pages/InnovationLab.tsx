import React from 'react';
import { SEO } from "@/components/SEO";
import { motion } from "framer-motion";

const InnovationLab = () => {
  const innovations = [
    {
      title: "Quantum Neural Networks",
      description: "Revolutionary AI that combines quantum computing with neural networks for unprecedented processing power.",
      status: "In Development",
      impact: "1000x faster processing",
      category: "Quantum AI"
    },
    {
      title: "Autonomous Code Generation",
      description: "AI that writes, tests, and deploys code automatically, reducing development time by 90%.",
      status: "Beta Testing",
      impact: "90% faster development",
      category: "AI Development"
    },
    {
      title: "Predictive Business Intelligence",
      description: "Advanced analytics that predict market trends and business outcomes with 95% accuracy.",
      status: "Available",
      impact: "95% prediction accuracy",
      category: "Business AI"
    },
    {
      title: "Blockchain Identity Verification",
      description: "Decentralized identity system that eliminates the need for traditional passwords and usernames.",
      status: "In Development",
      impact: "Zero password breaches",
      category: "Blockchain Security"
    },
    {
      title: "IoT Health Monitoring",
      description: "Real-time health monitoring through smart devices with predictive health analytics.",
      status: "Beta Testing",
      impact: "Early disease detection",
      category: "Healthcare IoT"
    },
    {
      title: "Autonomous Cybersecurity",
      description: "Self-healing security systems that automatically detect and neutralize threats.",
      status: "Available",
      impact: "99.9% threat prevention",
      category: "Cybersecurity"
    }
  ];

  const researchAreas = [
    "Artificial General Intelligence (AGI)",
    "Quantum Computing Applications",
    "Brain-Computer Interfaces",
    "Autonomous Systems",
    "Edge AI Computing",
    "Sustainable Technology"
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Innovation Lab - Zion Tech Group" 
        description="Explore cutting-edge research and development in AI, quantum computing, and emerging technologies at Zion Tech Group's Innovation Lab." 
        keywords="innovation lab, research, AI development, quantum computing, emerging technologies, R&D"
        canonical="https://ziontechgroup.com/innovation-lab"
      />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-cyan-900 overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 bg-cyan-400 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-32 w-24 h-24 bg-purple-400 rounded-full opacity-20 animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/3 w-20 h-20 bg-blue-400 rounded-full opacity-20 animate-pulse delay-2000"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Innovation Lab
            </h1>
            <p className="text-xl md:text-2xl text-cyan-200 mb-8 max-w-3xl mx-auto">
              Where the future of technology is born. Explore our cutting-edge research and revolutionary innovations.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-6 py-3 bg-purple-500 text-white rounded-full font-semibold">
                🔬 Research & Development
              </span>
              <span className="px-6 py-3 bg-cyan-500 text-white rounded-full font-semibold">
                🚀 Innovation Pipeline
              </span>
              <span className="px-6 py-3 bg-blue-500 text-white rounded-full font-semibold">
                💡 Future Technologies
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Innovation Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Revolutionary Innovations
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover the breakthrough technologies we're developing to shape the future of business and society
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {innovations.map((innovation, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-200 hover:border-purple-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    innovation.status === 'Available' ? 'bg-green-100 text-green-800' :
                    innovation.status === 'Beta Testing' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-blue-100 text-blue-800'
                  }`}>
                    {innovation.status}
                  </span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-semibold">
                    {innovation.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{innovation.title}</h3>
                <p className="text-gray-600 mb-4">{innovation.description}</p>
                
                <div className="bg-white rounded-lg p-4 mb-4">
                  <div className="text-sm text-gray-500 mb-1">Impact</div>
                  <div className="text-lg font-semibold text-purple-600">{innovation.impact}</div>
                </div>
                
                <button className="w-full px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300 font-semibold">
                  Learn More
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Research Focus Areas
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our research spans multiple cutting-edge domains, pushing the boundaries of what's possible with technology
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {researchAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 border border-gray-200 hover:border-cyan-300"
              >
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mr-4"></div>
                  <h3 className="text-lg font-semibold text-gray-900">{area}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-cyan-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Partner with Our Innovation Lab
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Join us in shaping the future of technology. Collaborate on groundbreaking research and be the first to access revolutionary innovations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-purple-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold text-lg">
                Become a Partner
              </button>
              <button className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold text-lg">
                Research Collaboration
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default InnovationLab;