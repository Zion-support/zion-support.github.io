import React from 'react';
import { motion } from 'framer-motion';
import { 
  Bot, 
  TrendingUp, 
  Shield, 
  Zap, 
  Globe, 
  Users, 
  Target, 
  BarChart3,
  Brain,
  Cpu,
  Database,
  Network,
  Lock,
  CheckCircle,
  ArrowRight,
  Star
} from 'lucide-react';
const AutonomousBusinessRevolution2026: React.FC = () => {
  const features = [
    {
      icon: Bot,
      title: "Autonomous Decision Making",
      description: "AI agents that make complex business decisions in real-time with human oversight and ethical constraints.",
      metrics: "99.7% accuracy rate"
    },
    {
      icon: TrendingUp,
      title: "Predictive Business Intelligence",
      description: "Advanced analytics that predict market trends, customer behavior, and business opportunities.",
      metrics: "85% prediction accuracy"
    },
    {
      icon: Shield,
      title: "Self-Healing Operations",
      description: "Automated systems that detect, diagnose, and resolve operational issues without human intervention.",
      metrics: "95% uptime guarantee"
    },
    {
      icon: Zap,
      title: "Real-Time Optimization",
      description: "Continuous optimization of processes, resources, and strategies based on real-time data analysis.",
      metrics: "40% efficiency improvement"
    },
    {
      icon: Globe,
      title: "Global Market Adaptation",
      description: "Autonomous systems that adapt to different markets, regulations, and cultural contexts worldwide.",
      metrics: "150+ countries supported"
    },
    {
      icon: Users,
      title: "Human-AI Collaboration",
      description: "Seamless integration between human creativity and AI efficiency for optimal business outcomes.",
      metrics: "3x productivity boost"
    }
  ];
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CEO, TechCorp Global",
      content: "The autonomous business systems have revolutionized our operations. We've seen a 300% increase in efficiency while reducing costs by 45%.",
      rating: 5
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO, InnovateLabs",
      content: "Our AI-driven decision making has given us unprecedented competitive advantage. The system adapts faster than any human team ever could.",
      rating: 5
    },
    {
      name: "Dr. Emily Watson",
      role: "Chief Data Officer, DataFlow Inc",
      content: "The predictive analytics are incredibly accurate. We can now anticipate market changes weeks in advance.",
      rating: 5
    }
  ];
  const benefits = [
    "Reduced operational costs by up to 60%",
    "Improved decision-making speed by 10x",
    "Enhanced customer satisfaction by 85%",
    "Minimized human error by 95%",
    "Increased market responsiveness by 400%",
    "Optimized resource allocation automatically"
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
              <Star className="w-5 h-5 text-blue-400 mr-2" />
              <span className="text-blue-400 font-medium">Revolutionary Technology</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Autonomous Business
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {" "}Revolution 2026
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your business with fully autonomous AI systems that think, decide, and act 
              independently while maintaining human oversight and ethical standards.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center"
              >
                Start Your Transformation
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300"
              >
                Watch Case Study
              </motion.button>
            </div>
            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-6 rounded-2xl border border-blue-500/20">
                <div className="text-3xl font-bold text-white mb-2">500%</div>
                <div className="text-gray-400">ROI Increase</div>
              </div>
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-6 rounded-2xl border border-blue-500/20">
                <div className="text-3xl font-bold text-white mb-2">99.9%</div>
                <div className="text-gray-400">Uptime</div>
              </div>
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-6 rounded-2xl border border-blue-500/20">
                <div className="text-3xl font-bold text-white mb-2">24/7</div>
                <div className="text-gray-400">Autonomous</div>
              </div>
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-6 rounded-2xl border border-blue-500/20">
                <div className="text-3xl font-bold text-white mb-2">10x</div>
                <div className="text-gray-400">Faster Decisions</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      {/* Features Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Autonomous Business Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the power of fully autonomous business systems that operate independently 
              while maintaining human oversight and ethical standards.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300 h-full">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 p-4 mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {feature.description}
                  </p>
                  <div className="text-blue-400 font-semibold">
                    {feature.metrics}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      {/* Benefits Section */}
      <div className="py-20 bg-gradient-to-r from-blue-600/10 to-purple-600/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Proven Business Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join thousands of businesses already experiencing the transformative power 
              of autonomous operations.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl border border-blue-500/20"
              >
                <CheckCircle className="w-8 h-8 text-green-400 mr-4 flex-shrink-0" />
                <span className="text-white text-lg">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      {/* Testimonials Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Hear from industry leaders who have transformed their businesses with our autonomous systems.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="text-white font-semibold">{testimonial.name}</div>
                  <div className="text-blue-400">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      {/* Call to Action */}
      <div className="py-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Revolutionize Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the autonomous business revolution and transform your operations today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Schedule Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );

};

export default AutonomousBusinessRevolution2026;
