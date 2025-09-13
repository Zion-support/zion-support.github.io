import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { SEO } from '@/components/SEO';
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  User, 
  Share2, 
  BookOpen,
  TrendingUp,
  Brain,
  Zap,
  Shield,
  Globe,
  Users,
  Target,
  Rocket,
  CheckCircle
} from 'lucide-react';

export default function BlogPostAITrends2025() {
  const trends = [
    {
      title: "Autonomous AI Systems",
      description: "AI systems that can operate independently, make decisions, and learn without human intervention.",
      impact: "High",
      timeline: "2025-2026",
      icon: Brain,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Quantum AI Integration",
      description: "Combining quantum computing with AI for unprecedented computational power and problem-solving capabilities.",
      impact: "Revolutionary",
      timeline: "2025-2027",
      icon: Zap,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "AI-Powered Cybersecurity",
      description: "Advanced AI systems that can predict, detect, and respond to cyber threats in real-time.",
      impact: "Critical",
      timeline: "2025",
      icon: Shield,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Global AI Collaboration",
      description: "AI systems that can work together across different organizations and geographical boundaries.",
      impact: "High",
      timeline: "2025-2026",
      icon: Globe,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "AI-Driven Personalization",
      description: "Hyper-personalized experiences powered by AI that adapt to individual user preferences and behaviors.",
      impact: "Medium",
      timeline: "2025",
      icon: Target,
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "AI Automation Revolution",
      description: "Complete automation of business processes through intelligent AI systems and robotic process automation.",
      impact: "Transformative",
      timeline: "2025-2026",
      icon: Rocket,
      color: "from-teal-500 to-blue-500"
    }
  ];

  const benefits = [
    "300% increase in operational efficiency",
    "90% reduction in manual processes",
    "50% cost savings across all departments",
    "99.9% accuracy in automated tasks",
    "Real-time decision making capabilities",
    "24/7 autonomous operations"
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="AI Trends 2025: The Future of Business Automation | Zion Tech Group"
        description="Discover the revolutionary AI trends shaping 2025 and beyond. Learn how autonomous systems, quantum AI, and advanced automation are transforming businesses worldwide."
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Back Button */}
          <Button 
            asChild
            variant="ghost"
            className="mb-8 text-purple-400 hover:text-purple-300 hover:bg-purple-500/10"
          >
            <Link to="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>

          {/* Article Meta */}
          <div className="flex flex-wrap items-center gap-6 mb-6 text-gray-400">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>January 15, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>12 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>Zion Tech Group</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI Trends 2025:
            <span className="block bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              The Future of Business Automation
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-gray-300 max-w-4xl leading-relaxed">
            Explore the revolutionary AI trends that are reshaping industries and discover how your business 
            can leverage cutting-edge artificial intelligence to achieve unprecedented growth and efficiency.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Article Content */}
          <div className="lg:col-span-2">
            {/* Introduction */}
            <motion.div 
              className="mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-4">The AI Revolution is Here</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  As we enter 2025, artificial intelligence has evolved from a promising technology to a fundamental 
                  business necessity. Companies that embrace AI are experiencing unprecedented growth, while those 
                  that hesitate are being left behind.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  At Zion Tech Group, we've been at the forefront of AI innovation, helping businesses across 
                  industries implement cutting-edge solutions that deliver measurable results. In this comprehensive 
                  guide, we'll explore the key AI trends shaping 2025 and how they can transform your business.
                </p>
              </div>
            </motion.div>

            {/* Trends Grid */}
            <motion.div 
              className="mb-12"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <h2 className="text-3xl font-bold text-white mb-8">Key AI Trends for 2025</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {trends.map((trend, index) => {
                  const IconComponent = trend.icon;
                  return (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300"
                    >
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 bg-gradient-to-br ${trend.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-white mb-2">{trend.title}</h3>
                          <p className="text-gray-300 mb-4 leading-relaxed">{trend.description}</p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <span className="text-sm text-gray-400">Impact:</span>
                              <span className={`text-sm font-medium px-2 py-1 rounded-full ${
                                trend.impact === 'Revolutionary' ? 'bg-purple-500/20 text-purple-300' :
                                trend.impact === 'Critical' ? 'bg-red-500/20 text-red-300' :
                                trend.impact === 'High' ? 'bg-orange-500/20 text-orange-300' :
                                trend.impact === 'Transformative' ? 'bg-blue-500/20 text-blue-300' :
                                'bg-green-500/20 text-green-300'
                              }`}>
                                {trend.impact}
                              </span>
                            </div>
                            <span className="text-sm text-gray-400">{trend.timeline}</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Benefits Section */}
            <motion.div 
              className="mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="text-3xl font-bold text-white mb-8">Measurable Business Impact</h2>
              <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 backdrop-blur-sm border border-green-500/30 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-white mb-6">Companies implementing our AI solutions report:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div 
              className="mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Ready to Embrace the AI Revolution?</h3>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                  Don't let your competitors get ahead. Start your AI transformation journey today with 
                  Zion Tech Group's cutting-edge solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    asChild
                    size="lg"
                    className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
                  >
                    <Link to="/contact">
                      Get Free Consultation
                      <Rocket className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button 
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105"
                  >
                    <Link to="/services">
                      Explore AI Services
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <motion.div 
              className="sticky top-8"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {/* Share */}
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 mb-8">
                <h3 className="text-lg font-bold text-white mb-4">Share this article</h3>
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="flex-1 border-purple-500/50 text-purple-400 hover:bg-purple-500/10">
                    <Share2 className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                </div>
              </div>

              {/* Related Articles */}
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 mb-8">
                <h3 className="text-lg font-bold text-white mb-4">Related Articles</h3>
                <div className="space-y-4">
                  <Link to="/blog/quantum-ai-breakthrough-2025" className="block group">
                    <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-sm border border-blue-500/30 rounded-xl p-4 group-hover:border-blue-400/50 transition-all duration-300">
                      <h4 className="text-white font-semibold mb-2 group-hover:text-blue-300 transition-colors">
                        Quantum AI Breakthrough 2025
                      </h4>
                      <p className="text-gray-400 text-sm">Discover the latest quantum computing innovations...</p>
                    </div>
                  </Link>
                  
                  <Link to="/blog/ai-automation-enterprise-guide-2025" className="block group">
                    <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-500/30 rounded-xl p-4 group-hover:border-purple-400/50 transition-all duration-300">
                      <h4 className="text-white font-semibold mb-2 group-hover:text-purple-300 transition-colors">
                        AI Automation Enterprise Guide
                      </h4>
                      <p className="text-gray-400 text-sm">Complete guide to implementing AI automation...</p>
                    </div>
                  </Link>
                </div>
              </div>

              {/* Newsletter */}
              <div className="bg-gradient-to-br from-purple-500/10 to-cyan-500/10 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-white mb-4">Stay Updated</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Get the latest AI insights and trends delivered to your inbox.
                </p>
                <Button 
                  asChild
                  className="w-full bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white"
                >
                  <Link to="/newsletter">
                    Subscribe Now
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}