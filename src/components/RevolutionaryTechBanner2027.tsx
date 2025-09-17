import React from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Brain, 
  Atom, 
  Users, 
  ArrowRight, 
  Star,
  CheckCircle,
  Lightbulb,
  TrendingUp,
  Globe
} from 'lucide-react';

const RevolutionaryTechBanner2027 = () => {
  const technologies = [
    {
      name: "Conscious AI",
      description: "Self-aware systems with genuine consciousness",
      icon: Brain,
      impact: "300% improvement in human-AI collaboration"
    },
    {
      name: "Quantum Computing",
      description: "Revolutionary processing at quantum speeds",
      icon: Atom,
      impact: "1000x faster processing capabilities"
    },
    {
      name: "Neural Interfaces",
      description: "Direct brain-computer communication",
      icon: Users,
      impact: "500% cognitive enhancement"
    }
  ];

  return (
    <div className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 py-16 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl"></div>
        <div className="absolute top-20 right-20 w-32 h-32 bg-purple-500/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 left-1/4 w-24 h-24 bg-pink-500/20 rounded-full blur-xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center mb-6">
            <Star className="w-8 h-8 text-yellow-400 mr-3" />
            <h2 className="text-4xl md:text-6xl font-bold text-white">
              Revolutionary Tech
            </h2>
            <Star className="w-8 h-8 text-yellow-400 ml-3" />
          </div>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
            Experience the future of technology with breakthrough innovations that are 
            transforming every aspect of business and human experience
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full border border-blue-500/30">
              <Lightbulb className="w-4 h-4 inline mr-2" />
              Latest Innovation
            </span>
            <span className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30">
              <TrendingUp className="w-4 h-4 inline mr-2" />
              Proven Results
            </span>
            <span className="px-4 py-2 bg-pink-500/20 text-pink-300 rounded-full border border-pink-500/30">
              <CheckCircle className="w-4 h-4 inline mr-2" />
              Future Ready
            </span>
          </div>
        </motion.div>

        {/* Technology Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-blue-400/50 transition-all duration-300 group text-center"
            >
              <div className="p-4 bg-blue-500/20 rounded-2xl w-16 h-16 mx-auto mb-6 group-hover:bg-blue-500/30 transition-colors">
                <tech.icon className="w-8 h-8 text-blue-400 mx-auto" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">
                {tech.name}
              </h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                {tech.description}
              </p>
              <div className="text-sm text-blue-400 font-semibold">
                {tech.impact}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">1000%</div>
            <div className="text-gray-300 text-sm">ROI Increase</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">99.9%</div>
            <div className="text-gray-300 text-sm">System Uptime</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">500%</div>
            <div className="text-gray-300 text-sm">Productivity Boost</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">95%</div>
            <div className="text-gray-300 text-sm">Cost Reduction</div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join thousands of companies already leveraging these revolutionary technologies 
              to achieve unprecedented growth and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-4 px-8 rounded-xl font-semibold text-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center">
                Explore Technologies
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-white/30 text-white py-4 px-8 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RevolutionaryTechBanner2027;