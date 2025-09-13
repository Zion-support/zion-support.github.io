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
  Rocket,
  Star,
  Target
} from 'lucide-react';

export default function HomepageContentPromotion2025() {
  const featuredContent = [
    {
      title: "AI Trends 2025: The Future of Business Automation",
      description: "Discover revolutionary AI trends shaping industries worldwide",
      category: "Latest Blog",
      readTime: "12 min read",
      link: "/blog/ai-trends-2025",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      featured: true
    },
    {
      title: "Enterprise AI Transformation: 300% Efficiency Gains",
      description: "Real case study of Fortune 500 company transformation",
      category: "Case Study",
      readTime: "8 min read",
      link: "/case-studies/enterprise-ai-transformation-300-percent-gains",
      icon: TrendingUp,
      color: "from-green-500 to-emerald-500",
      featured: true
    },
    {
      title: "Revolutionary AI Services Showcase",
      description: "Explore cutting-edge AI solutions transforming businesses",
      category: "Services",
      readTime: "5 min read",
      link: "/services",
      icon: Rocket,
      color: "from-blue-500 to-cyan-500",
      featured: false
    }
  ];

  const quickStats = [
    {
      number: "50+",
      label: "New Articles",
      icon: BookOpen,
      color: "text-purple-400"
    },
    {
      number: "25+",
      label: "Case Studies",
      icon: Award,
      color: "text-cyan-400"
    },
    {
      number: "15+",
      label: "AI Services",
      icon: Brain,
      color: "text-green-400"
    },
    {
      number: "10K+",
      label: "Monthly Readers",
      icon: Users,
      color: "text-orange-400"
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
    <section className="relative py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-500/5 rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full px-6 py-3 mb-6">
            <Star className="h-5 w-5 text-purple-400" />
            <span className="text-purple-300 font-medium">Featured Content 2025</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Discover Our Latest
            <span className="block bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Revolutionary Insights
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Stay ahead with cutting-edge insights, real-world case studies, and innovative solutions 
            from the forefront of AI and quantum computing transformation.
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {quickStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className={`h-8 w-8 ${stat.color}`} />
                  </div>
                  <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Featured Content Grid */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {featuredContent.map((content, index) => {
            const IconComponent = content.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`group relative ${
                  content.featured ? 'lg:col-span-1' : ''
                }`}
              >
                <Link to={content.link} className="block">
                  <div className="relative h-full bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10">
                    {/* Featured Badge */}
                    {content.featured && (
                      <div className="absolute -top-4 -right-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg">
                        Featured
                      </div>
                    )}

                    {/* Icon */}
                    <div className={`w-20 h-20 bg-gradient-to-br ${content.color} rounded-3xl flex items-center justify-center mb-6`}>
                      <IconComponent className="h-10 w-10 text-white" />
                    </div>

                    {/* Category Badge */}
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full px-4 py-2 mb-6">
                      <span className="text-purple-300 text-sm font-medium">{content.category}</span>
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                      {content.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {content.description}
                    </p>

                    {/* Footer */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <Clock className="h-4 w-4" />
                        <span>{content.readTime}</span>
                      </div>
                      
                      <div className="flex items-center text-purple-400 group-hover:text-cyan-400 transition-colors">
                        <span className="text-sm font-medium mr-2">Read More</span>
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>

                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-cyan-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
          <div className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 backdrop-blur-sm border border-purple-500/30 rounded-3xl p-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join thousands of companies already leveraging our AI and quantum computing solutions 
              to achieve unprecedented growth and efficiency. Start your transformation today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                asChild
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white px-10 py-6 text-xl font-semibold rounded-xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
              >
                <Link to="/content-showcase">
                  Explore All Content
                  <ArrowRight className="ml-2 h-6 w-6" />
                </Link>
              </Button>
              
              <Button 
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-10 py-6 text-xl font-semibold rounded-xl transition-all duration-300 transform hover:scale-105"
              >
                <Link to="/contact">
                  Get Free Consultation
                  <Sparkles className="ml-2 h-6 w-6" />
                </Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mt-12 pt-8 border-t border-purple-500/20">
              <div className="flex items-center gap-2 text-gray-300">
                <Shield className="h-5 w-5 text-green-400" />
                <span>Enterprise Security</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Target className="h-5 w-5 text-blue-400" />
                <span>Proven Results</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Users className="h-5 w-5 text-purple-400" />
                <span>Expert Team</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}