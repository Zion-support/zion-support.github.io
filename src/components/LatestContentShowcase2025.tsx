import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  ArrowRight, 
  Sparkles, 
  Brain, 
  Zap, 
  Shield, 
  TrendingUp,
  BookOpen,
  Users,
  Award,
  Rocket
} from 'lucide-react';

export default function LatestContentShowcase2025() {
  const newContentItems = [
    {
      id: 1,
      title: "AI Revolution 2025: The Future of Business Automation",
      description: "Discover how AI is transforming enterprise operations with cutting-edge autonomous systems and quantum computing integration.",
      category: "AI & Automation",
      readTime: "8 min read",
      featured: true,
      link: "/blog/ai-2026-neural-computing-revolution",
      icon: Brain,
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 2,
      title: "Quantum Computing Breakthrough: Real-World Applications",
      description: "Explore the latest quantum computing innovations and how they're revolutionizing industries from finance to healthcare.",
      category: "Quantum Computing",
      readTime: "12 min read",
      featured: true,
      link: "/blog/quantum-ai-autonomous-systems-2026",
      icon: Zap,
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 3,
      title: "Enterprise AI Transformation: Success Stories",
      description: "Real case studies of companies that achieved 300% productivity gains through AI implementation.",
      category: "Case Studies",
      readTime: "6 min read",
      featured: false,
      link: "/case-studies/enterprise-quantum-ai-transformation-2026",
      icon: Award,
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 4,
      title: "Autonomous Business Platform: Complete Implementation Guide",
      description: "Step-by-step guide to implementing autonomous business systems with ROI calculations and best practices.",
      category: "Implementation Guide",
      readTime: "15 min read",
      featured: false,
      link: "/resources/quantum-ai-implementation-master-guide-2026",
      icon: Rocket,
      color: "from-orange-500 to-red-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full px-6 py-3 mb-6">
            <Sparkles className="h-5 w-5 text-purple-400" />
            <span className="text-purple-300 font-medium">Latest Content 2025</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Discover Our Latest
            <span className="block bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Revolutionary Content
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stay ahead with cutting-edge insights, case studies, and implementation guides 
            from the forefront of AI and quantum computing innovation.
          </p>
        </motion.div>

        {/* Content Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {newContentItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className={`group relative ${
                  item.featured ? 'md:col-span-1' : ''
                }`}
              >
                <Link to={item.link} className="block">
                  <div className="relative h-full bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10">
                    {/* Featured Badge */}
                    {item.featured && (
                      <div className="absolute -top-3 -right-3 bg-gradient-to-r from-purple-500 to-cyan-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                        Featured
                      </div>
                    )}

                    {/* Category Badge */}
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full px-4 py-2 mb-6">
                      <IconComponent className={`h-4 w-4 bg-gradient-to-r ${item.color} bg-clip-text text-transparent`} />
                      <span className="text-purple-300 text-sm font-medium">{item.category}</span>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                      {item.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Footer */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <span className="flex items-center gap-1">
                          <BookOpen className="h-4 w-4" />
                          {item.readTime}
                        </span>
                      </div>
                      
                      <div className="flex items-center text-purple-400 group-hover:text-cyan-400 transition-colors">
                        <span className="text-sm font-medium mr-2">Read More</span>
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>

                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-cyan-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join thousands of companies already leveraging our AI and quantum computing solutions 
              to achieve unprecedented growth and efficiency.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
              >
                <Link to="/content-showcase">
                  Explore All Content
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              
              <Button 
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105"
              >
                <Link to="/contact">
                  Get Custom Solution
                  <Sparkles className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">50+</div>
            <div className="text-gray-300">New Articles</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">25+</div>
            <div className="text-gray-300">Case Studies</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">15+</div>
            <div className="text-gray-300">Implementation Guides</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">10K+</div>
            <div className="text-gray-300">Monthly Readers</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}