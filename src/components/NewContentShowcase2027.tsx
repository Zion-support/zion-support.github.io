import React from 'react';
import { motion } from 'framer-motion';
import { 
  Star, 
  ArrowRight, 
  Zap, 
  Brain, 
  Atom, 
  Users,
  CheckCircle,
  Lightbulb,
  TrendingUp
} from 'lucide-react';
const NewContentShowcase2027 = () => {
  const newContent = [
    {
      id: 1,
      title: "AI 2027 Breakthrough Innovations",
      description: "Revolutionary AI technologies transforming every aspect of business and human experience",
      icon: Brain,
      category: "AI Innovation",
      readTime: "15 min read",
      featured: true,
      link: "/ai-2027-breakthrough-innovations"
    },
    {
      id: 2,
      title: "Quantum Computing Revolution 2027",
      description: "Experience the power of quantum computing with breakthrough applications",
      icon: Atom,
      category: "Quantum Tech",
      readTime: "12 min read",
      featured: true,
      link: "/quantum-computing-revolution-2027"
    },
    {
      id: 3,
      title: "Neural Interface Breakthrough 2027",
      description: "Direct neural interfaces enabling seamless mind-machine communication",
      icon: Users,
      category: "Neural Tech",
      readTime: "10 min read",
      featured: true,
      link: "/neural-interface-breakthrough-2027"
    }
  ];
  const stats = [
    { number: "1000%", label: "ROI Increase", icon: TrendingUp },
    { number: "99.9%", label: "System Uptime", icon: CheckCircle },
    { number: "500%", label: "Productivity Boost", icon: Zap },
    { number: "95%", label: "Cost Reduction", icon: Lightbulb }
  ];
  return (
    <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <Star className="w-8 h-8 text-yellow-400 mr-3" />
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              New Content
            </h2>
            <Star className="w-8 h-8 text-yellow-400 ml-3" />
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the latest breakthrough innovations and revolutionary technologies 
            that are shaping the future of AI and business in 2027
          </p>
        </motion.div>
        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <stat.icon className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-sm">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newContent.map((content, index) => (
            <motion.div
              key={content.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-blue-400/50 transition-all duration-300 group"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-500/20 rounded-xl mr-4 group-hover:bg-blue-500/30 transition-colors">
                  <content.icon className="w-8 h-8 text-blue-400" />
                </div>
                <div>
                  <div className="text-sm text-blue-400 font-semibold mb-1">
                    {content.category}
                  </div>
                  <div className="text-sm text-gray-400">
                    {content.readTime}
                  </div>
                </div>
                {content.featured && (
                  <div className="ml-auto">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  </div>
                )}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">
                {content.title}
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {content.description}
              </p>
              <button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-6 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center group">
                Explore Content
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Stay Updated with Latest Innovations
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Get exclusive access to the latest AI breakthroughs, quantum computing advances, 
              and neural interface technologies as they're developed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-4 px-8 rounded-xl font-semibold text-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center">
                View All Content
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-white/30 text-white py-4 px-8 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all duration-300">
                Subscribe to Updates
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );

};

export default NewContentShowcase2027;
