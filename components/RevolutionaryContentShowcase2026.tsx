import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  Globe, 
  Shield, 
  Rocket, 
  Cpu,
  Database,
  Network,
  Lock,
  Target,
  TrendingUp,
  Users,
  Star,
  ArrowRight,
  CheckCircle,
  Lightbulb,
  Cogs,
  Activity
} from 'lucide-react';

const RevolutionaryContentShowcase2026: React.FC = () => {
  const revolutionaryContent = [
    {
      id: 'ai-consciousness-2026',
      title: 'AI Consciousness Revolution 2026',
      description: 'Breakthrough in artificial general intelligence achieving human-level consciousness and reasoning capabilities.',
      category: 'AI Breakthrough',
      price: '$2,999/month',
      marketPrice: '$5,000-15,000/month',
      features: [
        'Human-level reasoning and consciousness',
        'Autonomous decision making',
        'Emotional intelligence integration',
        'Real-time learning and adaptation'
      ],
      benefits: [
        'Achieve AGI capabilities',
        'Reduce human oversight by 90%',
        'Increase productivity by 500%',
        'Revolutionary business transformation'
      ],
      icon: Brain,
      gradient: 'from-purple-600 to-pink-600',
      link: '/ai-consciousness-2026',
      new: true,
      featured: true
    },
    {
      id: 'quantum-ai-fusion-2026',
      title: 'Quantum-AI Fusion Platform 2026',
      description: 'Revolutionary fusion of quantum computing and artificial intelligence for unprecedented processing power.',
      category: 'Quantum Computing',
      price: '$4,999/month',
      marketPrice: '$10,000-25,000/month',
      features: [
        'Quantum neural networks',
        'Exponential processing speed',
        'Quantum machine learning algorithms',
        'Breakthrough optimization capabilities'
      ],
      benefits: [
        'Process data 10,000x faster',
        'Solve impossible problems',
        'Achieve quantum supremacy',
        'Revolutionary computational power'
      ],
      icon: Zap,
      gradient: 'from-blue-600 to-cyan-600',
      link: '/quantum-ai-fusion-2026',
      new: true,
      featured: true
    },
    {
      id: 'autonomous-business-ecosystem',
      title: 'Autonomous Business Ecosystem 2026',
      description: 'Complete business automation with AI-driven decision making and autonomous operations.',
      category: 'Business Automation',
      price: '$1,999/month',
      marketPrice: '$3,000-8,000/month',
      features: [
        'Autonomous business operations',
        'AI-driven strategic planning',
        'Self-optimizing processes',
        'Predictive business intelligence'
      ],
      benefits: [
        'Reduce operational costs by 70%',
        'Increase efficiency by 400%',
        'Autonomous growth optimization',
        'Complete business transformation'
      ],
      icon: Cogs,
      gradient: 'from-green-600 to-emerald-600',
      link: '/autonomous-business-ecosystem-2026',
      new: true,
      featured: true
    },
    {
      id: 'neural-interface-revolution',
      title: 'Neural Interface Revolution 2026',
      description: 'Direct brain-computer interface technology for seamless human-AI interaction.',
      category: 'Neural Technology',
      price: '$3,499/month',
      marketPrice: '$5,000-12,000/month',
      features: [
        'Direct neural communication',
        'Thought-controlled interfaces',
        'Enhanced cognitive capabilities',
        'Seamless human-AI integration'
      ],
      benefits: [
        'Control systems with thoughts',
        'Enhance cognitive abilities',
        'Revolutionary human-AI symbiosis',
        'Breakthrough interaction methods'
      ],
      icon: Network,
      gradient: 'from-indigo-600 to-purple-600',
      link: '/neural-interface-revolution-2026',
      new: true,
      featured: true
    },
    {
      id: 'space-technology-platform',
      title: 'Space Technology Platform 2026',
      description: 'Advanced space technology solutions for commercial space operations and exploration.',
      category: 'Space Technology',
      price: '$5,999/month',
      marketPrice: '$10,000-30,000/month',
      features: [
        'Commercial space operations',
        'Satellite constellation management',
        'Space resource optimization',
        'Interplanetary communication systems'
      ],
      benefits: [
        'Access space economy opportunities',
        'Optimize space operations',
        'Revolutionary space technology',
        'Future-ready space solutions'
      ],
      icon: Rocket,
      gradient: 'from-orange-600 to-red-600',
      link: '/space-technology-platform-2026',
      new: true,
      featured: true
    },
    {
      id: 'cybersecurity-ai-defense',
      title: 'AI-Powered Cybersecurity Defense 2026',
      description: 'Next-generation cybersecurity with AI-driven threat detection and autonomous defense.',
      category: 'Cybersecurity',
      price: '$2,499/month',
      marketPrice: '$4,000-10,000/month',
      features: [
        'AI threat detection',
        'Autonomous defense systems',
        'Predictive security analytics',
        'Zero-trust architecture'
      ],
      benefits: [
        'Detect threats 100x faster',
        'Reduce security breaches by 95%',
        'Autonomous security operations',
        'Revolutionary protection'
      ],
      icon: Shield,
      gradient: 'from-red-600 to-pink-600',
      link: '/cybersecurity-ai-defense-2026',
      new: true,
      featured: true
    }
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
    hidden: { y: 20, opacity: 0 },
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
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-medium mb-6">
            <Star className="w-4 h-4 mr-2" />
            Revolutionary Content 2026
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Revolutionary Technology
            <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Breakthroughs 2026
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Discover the most advanced technology solutions that will revolutionize your business in 2026. 
            From AI consciousness to quantum computing, explore the future of technology today.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
              Up to 10,000x Performance
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
              99.9% Accuracy
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
              Revolutionary ROI
            </div>
          </div>
        </motion.div>

        {/* Content Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {revolutionaryContent.map((content, index) => {
            const IconComponent = content.icon;
            return (
              <motion.div
                key={content.id}
                variants={itemVariants}
                className="group relative"
              >
                <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105">
                  {/* New Badge */}
                  {content.new && (
                    <div className="absolute -top-3 -right-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      NEW
                    </div>
                  )}

                  {/* Featured Badge */}
                  {content.featured && (
                    <div className="absolute -top-3 -left-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      FEATURED
                    </div>
                  )}

                  {/* Icon */}
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${content.gradient} mb-6`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>

                  {/* Category */}
                  <div className="text-sm text-cyan-400 font-medium mb-2">
                    {content.category}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {content.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {content.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {content.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-green-400 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Benefits */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3">Benefits:</h4>
                    <ul className="space-y-2">
                      {content.benefits.slice(0, 2).map((benefit, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-300">
                          <TrendingUp className="w-4 h-4 mr-2 mt-0.5 text-blue-400 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Pricing */}
                  <div className="mb-6 p-4 bg-gradient-to-r from-slate-800 to-slate-700 rounded-xl">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-2xl font-bold text-white">{content.price}</span>
                      <span className="text-sm text-gray-400 line-through">{content.marketPrice}</span>
                    </div>
                    <div className="text-sm text-green-400 font-medium">
                      Save up to 70% vs market rate
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Link
                    to={content.link}
                    className={`w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r ${content.gradient} text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 group-hover:scale-105`}
                  >
                    Explore Solution
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses already using our revolutionary technology solutions to achieve unprecedented growth and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 inline-flex items-center justify-center"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/case-studies"
                className="bg-white/10 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 inline-flex items-center justify-center"
              >
                View Success Stories
                <Users className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RevolutionaryContentShowcase2026;