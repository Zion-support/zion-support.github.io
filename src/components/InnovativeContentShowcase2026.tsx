import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, Brain, Zap, Target, TrendingUp, Users, Cpu, Globe, Rocket, Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';

const InnovativeContentShowcase2026 = () => {
  const featuredContent = [
    {
      title: 'AI 2026: Quantum-Neural Fusion Breakthrough',
      description: 'Revolutionary quantum-AI fusion delivering 10,000x faster processing with 99.9% accuracy',
      type: 'Breakthrough',
      category: 'Quantum AI',
      readTime: '12 min read',
      href: '/blog/ai-2026-quantum-neural-fusion-breakthrough',
      icon: Brain,
      featured: true,
      badge: 'HOT',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Enterprise Transformation: $2.3B Revenue Impact',
      description: 'Fortune 500 company achieves unprecedented ROI with our quantum-AI solutions',
      type: 'Case Study',
      category: 'Success Story',
      readTime: '8 min read',
      href: '/case-studies/enterprise-quantum-ai-transformation-2026',
      icon: Target,
      featured: true,
      badge: 'NEW',
      color: 'from-emerald-500 to-cyan-500'
    },
    {
      title: 'Autonomous Business Systems 2026',
      description: 'Complete business process automation with self-healing AI systems',
      type: 'Service',
      category: 'Automation',
      readTime: '6 min read',
      href: '/services/autonomous-business-systems-2026',
      icon: Zap,
      featured: true,
      badge: 'TRENDING',
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Neural Interface Revolution',
      description: 'Direct brain-computer interface technology for seamless human-AI collaboration',
      type: 'Innovation',
      category: 'Neural Tech',
      readTime: '10 min read',
      href: '/blog/neural-interface-revolution-2026',
      icon: Cpu,
      featured: false,
      badge: 'BREAKTHROUGH',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      title: 'Global AI Implementation Mastery',
      description: 'Comprehensive guide to implementing AI across 50+ countries and industries',
      type: 'Guide',
      category: 'Implementation',
      readTime: '15 min read',
      href: '/guides/global-ai-implementation-mastery-2026',
      icon: Globe,
      featured: false,
      badge: 'COMPREHENSIVE',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Space Technology Solutions',
      description: 'AI-powered space exploration and satellite management systems',
      type: 'Service',
      category: 'Space Tech',
      readTime: '7 min read',
      href: '/services/space-technology-solutions-2026',
      icon: Rocket,
      featured: false,
      badge: 'FUTURE',
      color: 'from-violet-500 to-purple-500'
    }
  ];

  const stats = [
    { label: 'New Breakthroughs', value: '25+', icon: Lightbulb, color: 'from-yellow-500 to-orange-500' },
    { label: 'Success Stories', value: '150+', icon: Users, color: 'from-green-500 to-emerald-500' },
    { label: 'Innovation Labs', value: '12+', icon: Cpu, color: 'from-blue-500 to-cyan-500' },
    { label: 'Global Reach', value: '50+', icon: Globe, color: 'from-purple-500 to-pink-500' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-cyan-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-pink-500/5 rounded-full blur-2xl animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <Badge className="mb-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm px-4 py-2">
              🚀 2026 Innovation Hub
            </Badge>
            <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-cyan-300 to-purple-300 bg-clip-text text-transparent mb-6">
              Revolutionary Content
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Discover cutting-edge AI breakthroughs, quantum computing innovations, and autonomous systems 
              that are reshaping the future of technology and business.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div 
                  key={index} 
                  className="text-center group"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg group-hover:shadow-cyan-500/25 transition-all duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-300 text-sm font-medium">{stat.label}</div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Featured Content Grid */}
          <motion.div variants={itemVariants} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {featuredContent.map((content, index) => {
              const IconComponent = content.icon;
              return (
                <motion.div
                  key={index}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card 
                    className="bg-slate-800/60 backdrop-blur-sm border-slate-700 hover:border-cyan-500/50 transition-all duration-500 group cursor-pointer h-full relative overflow-hidden"
                    onClick={() => window.location.href = content.href}
                  >
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-800/80 to-slate-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <CardHeader className="relative z-10">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className={`p-3 bg-gradient-to-r ${content.color} rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                            <IconComponent className="w-5 h-5 text-white" />
                          </div>
                          <Badge variant="outline" className="text-cyan-400 border-cyan-400/50 bg-cyan-500/10">
                            {content.type}
                          </Badge>
                        </div>
                        <Badge className={`bg-gradient-to-r ${content.color} text-white text-xs px-2 py-1`}>
                          {content.badge}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl text-white group-hover:text-cyan-300 transition-colors line-clamp-2 leading-tight">
                        {content.title}
                      </CardTitle>
                    </CardHeader>
                    
                    <CardContent className="relative z-10">
                      <CardDescription className="text-gray-300 mb-6 line-clamp-3 leading-relaxed">
                        {content.description}
                      </CardDescription>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <span className="text-sm text-gray-400">{content.readTime}</span>
                          <Badge variant="secondary" className="text-gray-400 bg-gray-700/50">
                            {content.category}
                          </Badge>
                        </div>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10 group-hover:translate-x-1 transition-all duration-300"
                        >
                          Explore
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </Button>
                      </div>
                    </CardContent>

                    {/* Hover effect overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>

          {/* CTA Section */}
          <motion.div variants={itemVariants}>
            <Card className="bg-gradient-to-r from-purple-500/10 via-cyan-500/10 to-pink-500/10 border-cyan-500/30 backdrop-blur-sm relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5"></div>
              <CardContent className="py-16 text-center relative z-10">
                <div className="mb-8">
                  <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-transparent mb-6">
                    Join the AI Revolution
                  </h3>
                  <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                    Get exclusive access to our latest breakthroughs, implementation guides, 
                    and cutting-edge AI solutions that are transforming industries worldwide.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-lg mx-auto mb-8">
                  <input
                    type="email"
                    placeholder="Enter your email for exclusive access"
                    className="flex-1 px-6 py-4 bg-slate-800/80 border border-slate-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50 focus:bg-slate-800 transition-all duration-300"
                  />
                  <Button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25">
                    Get Started
                  </Button>
                </div>
                
                <div className="flex items-center justify-center gap-8 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span>50,000+ subscribers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                    <span>Weekly updates</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                    <span>No spam ever</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default InnovativeContentShowcase2026;