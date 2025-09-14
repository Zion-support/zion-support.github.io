import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Atom, 
  Bot, 
  ArrowRight,
  Zap,
  Star,
  Sparkles,
  ChevronRight
} from 'lucide-react';

export default function NewContent2025PromotionBanner() {
  const newContentPages = [
    {
      icon: <Brain className="w-6 h-6 text-cyan-400" />,
      title: "AI Innovation Hub 2025",
      description: "Revolutionary AI solutions with autonomous operations and quantum-enhanced processing",
      link: "/ai-innovation-hub-2025",
      highlight: "New"
    },
    {
      icon: <Atom className="w-6 h-6 text-purple-400" />,
      title: "Quantum Computing Solutions",
      description: "Cutting-edge quantum technology for finance, security, and optimization",
      link: "/quantum-computing-solutions-2025",
      highlight: "Featured"
    },
    {
      icon: <Bot className="w-6 h-6 text-green-400" />,
      title: "Autonomous Business Operations",
      description: "Self-managing AI systems that run your business automatically",
      link: "/autonomous-business-operations-2025",
      highlight: "Popular"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-r from-slate-900/90 via-purple-900/90 to-slate-900/90 backdrop-blur-xl p-8 mb-8"
    >
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-green-500/5 opacity-50" />
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-400/20 to-transparent rounded-full blur-2xl" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-400/20 to-transparent rounded-full blur-2xl" />
      
      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full text-cyan-300 text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4 mr-2" />
            New Content Available
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Discover Revolutionary Technology Solutions
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Explore our latest AI innovation hub, quantum computing solutions, and autonomous business operations. 
            Experience the future of technology today.
          </p>
        </div>

        {/* Content Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {newContentPages.map((page, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              <Link href={page.link} className="block">
                <div className="relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 p-6 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 group-hover:scale-105">
                  {/* Hover effect */}
                  <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-cyan-500/0 via-purple-400/10 to-green-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                  
                  {/* Highlight badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                      page.highlight === 'New' ? 'bg-cyan-500/20 text-cyan-300' :
                      page.highlight === 'Featured' ? 'bg-purple-500/20 text-purple-300' :
                      'bg-green-500/20 text-green-300'
                    }`}>
                      {page.highlight}
                    </span>
                  </div>

                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-gradient-to-r from-white/10 to-white/5 rounded-lg mr-4">
                      {page.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {page.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {page.description}
                  </p>

                  <div className="flex items-center text-cyan-400 text-sm font-medium group-hover:text-cyan-300 transition-colors">
                    Explore Now
                    <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/services" className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105">
              <Zap className="w-4 h-4 mr-2" />
              View All Services
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
            <Link href="/contact" className="inline-flex items-center px-6 py-3 border border-white/20 text-white hover:bg-white/10 font-semibold rounded-lg transition-all duration-300">
              Get Free Consultation
              <Star className="ml-2 w-4 h-4" />
            </Link>
          </div>
          
          <p className="text-sm text-gray-400 mt-4">
            Join 500+ businesses already transforming with our revolutionary technology solutions
          </p>
        </div>
      </div>
    </motion.div>
  );
}