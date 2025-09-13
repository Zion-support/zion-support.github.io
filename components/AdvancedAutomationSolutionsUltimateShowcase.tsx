import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Cpu, 
  Zap, 
  Settings, 
  Shield, 
  BarChart3, 
  Users, 
  Target, 
  CheckCircle,
  ArrowRight,
  Rocket,
  Star,
  Brain,
  Database,
  Network,
  Gauge,
  Lightbulb,
  Globe,
  Lock,
  TrendingUp
} from 'lucide-react';

const AdvancedAutomationSolutionsUltimateShowcase: React.FC = () => {
  const [activeSolution, setActiveSolution] = useState('business');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const automationContent = {
    business: {
      title: "Business Process Automation",
      subtitle: "Revolutionary automation transforming every business function",
      icon: <Cpu className="w-8 h-8 text-green-500" />,
      content: [
        {
          title: "Autonomous Operations",
          description: "Complete business processes running without human intervention",
          impact: "99.9% efficiency",
          features: ["Self-managing systems", "Predictive maintenance", "Automatic optimization", "Zero downtime"],
          icon: <Settings className="w-6 h-6 text-green-500" />
        },
        {
          title: "Intelligent Process Mining",
          description: "AI systems discovering and optimizing hidden business processes",
          impact: "Perfect optimization",
          features: ["Process discovery", "Bottleneck elimination", "Continuous improvement", "ROI maximization"],
          icon: <BarChart3 className="w-6 h-6 text-blue-500" />
        },
        {
          title: "Self-Evolving Systems",
          description: "Automation systems that evolve and improve themselves continuously",
          impact: "Infinite improvement",
          features: ["Self-modification", "Adaptive learning", "Evolutionary optimization", "Creative solutions"],
          icon: <Brain className="w-6 h-6 text-purple-500" />
        },
        {
          title: "Universal Automation Platform",
          description: "Single platform automating all business functions across industries",
          impact: "Complete automation",
          features: ["Universal compatibility", "Industry agnostic", "Seamless integration", "Scalable architecture"],
          icon: <Network className="w-6 h-6 text-orange-500" />
        },
        {
          title: "Predictive Automation",
          description: "Systems that predict and prevent issues before they occur",
          impact: "Zero downtime",
          features: ["Predictive maintenance", "Risk prevention", "Proactive optimization", "Intelligent forecasting"],
          icon: <Target className="w-6 h-6 text-red-500" />
        },
        {
          title: "Conscious Automation",
          description: "Automation systems with consciousness and creative problem-solving",
          impact: "Creative solutions",
          features: ["Creative automation", "Intuitive problem solving", "Emotional intelligence", "Human-like reasoning"],
          icon: <Lightbulb className="w-6 h-6 text-yellow-500" />
        }
      ]
    },
    industry: {
      title: "Industry-Specific Solutions",
      subtitle: "Specialized automation solutions for every industry",
      icon: <Globe className="w-8 h-8 text-blue-500" />,
      content: [
        {
          title: "Manufacturing Automation",
          description: "Revolutionary automation transforming manufacturing processes",
          impact: "10x productivity",
          features: ["Smart factories", "Predictive maintenance", "Quality control", "Supply chain optimization"],
          icon: <Settings className="w-6 h-6 text-green-500" />
        },
        {
          title: "Healthcare Automation",
          description: "AI-powered automation improving patient care and outcomes",
          impact: "50% faster diagnosis",
          features: ["Diagnostic automation", "Treatment optimization", "Patient monitoring", "Drug discovery"],
          icon: <Shield className="w-6 h-6 text-blue-500" />
        },
        {
          title: "Financial Services",
          description: "Advanced automation for financial institutions and trading",
          impact: "99.99% accuracy",
          features: ["Algorithmic trading", "Risk management", "Fraud detection", "Compliance automation"],
          icon: <BarChart3 className="w-6 h-6 text-purple-500" />
        },
        {
          title: "Retail & E-commerce",
          description: "Intelligent automation enhancing customer experience",
          impact: "3x conversion rate",
          features: ["Personalized recommendations", "Inventory management", "Customer service", "Dynamic pricing"],
          icon: <Users className="w-6 h-6 text-orange-500" />
        },
        {
          title: "Transportation & Logistics",
          description: "Autonomous systems revolutionizing transportation",
          impact: "90% efficiency gain",
          features: ["Autonomous vehicles", "Route optimization", "Fleet management", "Predictive maintenance"],
          icon: <Rocket className="w-6 h-6 text-red-500" />
        },
        {
          title: "Energy & Utilities",
          description: "Smart automation for energy management and distribution",
          impact: "40% energy savings",
          features: ["Smart grids", "Energy optimization", "Predictive maintenance", "Renewable integration"],
          icon: <Zap className="w-6 h-6 text-yellow-500" />
        }
      ]
    },
    technology: {
      title: "Advanced Technologies",
      subtitle: "Cutting-edge automation technologies and capabilities",
      icon: <Brain className="w-8 h-8 text-purple-500" />,
      content: [
        {
          title: "Machine Learning Automation",
          description: "Self-improving systems that learn and adapt continuously",
          impact: "Exponential learning",
          features: ["Continuous learning", "Pattern recognition", "Predictive analytics", "Adaptive algorithms"],
          icon: <Brain className="w-6 h-6 text-purple-500" />
        },
        {
          title: "Robotic Process Automation",
          description: "Intelligent robots handling complex business processes",
          impact: "24/7 operations",
          features: ["Process automation", "Data processing", "System integration", "Error elimination"],
          icon: <Cpu className="w-6 h-6 text-green-500" />
        },
        {
          title: "Natural Language Processing",
          description: "AI systems understanding and processing human language",
          impact: "Human-like interaction",
          features: ["Language understanding", "Text generation", "Translation", "Sentiment analysis"],
          icon: <Users className="w-6 h-6 text-blue-500" />
        },
        {
          title: "Computer Vision",
          description: "AI systems that can see and understand visual information",
          impact: "Perfect visual recognition",
          features: ["Image recognition", "Object detection", "Quality control", "Visual analytics"],
          icon: <Target className="w-6 h-6 text-orange-500" />
        },
        {
          title: "Predictive Analytics",
          description: "Advanced analytics predicting future trends and outcomes",
          impact: "Future prediction",
          features: ["Trend analysis", "Forecasting", "Risk assessment", "Opportunity identification"],
          icon: <TrendingUp className="w-6 h-6 text-red-500" />
        },
        {
          title: "Blockchain Integration",
          description: "Secure and transparent automation using blockchain technology",
          impact: "Perfect security",
          features: ["Secure transactions", "Transparent processes", "Smart contracts", "Decentralized automation"],
          icon: <Lock className="w-6 h-6 text-yellow-500" />
        }
      ]
    }
  };

  const solutions = [
    { id: 'business', label: 'Business Process', icon: <Cpu className="w-5 h-5" /> },
    { id: 'industry', label: 'Industry Solutions', icon: <Globe className="w-5 h-5" /> },
    { id: 'technology', label: 'Technologies', icon: <Brain className="w-5 h-5" /> }
  ];

  const currentContent = automationContent[activeSolution as keyof typeof automationContent];

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-20 bg-gradient-to-br from-slate-900 via-green-900 to-blue-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mb-6"
          >
            {currentContent.icon}
          </motion.div>
          
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            {currentContent.title}
          </motion.h2>
          
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            {currentContent.subtitle}
          </motion.p>
        </div>

        {/* Solution Navigation */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {solutions.map((solution) => (
            <button
              key={solution.id}
              onClick={() => setActiveSolution(solution.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeSolution === solution.id
                  ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white shadow-lg'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              {solution.icon}
              {solution.label}
            </button>
          ))}
        </motion.div>

        {/* Content Grid */}
        <motion.div
          key={activeSolution}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {currentContent.content.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
                  {item.icon}
                </div>
                <Star className="w-5 h-5 text-yellow-400" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-300 transition-colors">
                {item.title}
              </h3>
              
              <p className="text-gray-300 mb-4 leading-relaxed">
                {item.description}
              </p>
              
              <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg p-3 mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <Gauge className="w-4 h-4 text-green-400" />
                  <span className="text-sm font-semibold text-green-400">Impact</span>
                </div>
                <p className="text-white font-medium">{item.impact}</p>
              </div>
              
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-gray-400 mb-2">Key Features:</h4>
                {item.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span className="text-sm text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Automate Your Future?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join thousands of organizations already implementing advanced automation solutions and achieving unprecedented efficiency and growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/advanced-automation-solutions-ultimate"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-green-600 hover:to-blue-600 transition-all duration-300"
              >
                Explore Automation Solutions
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300"
              >
                Get Automation Consultation
                <Rocket className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AdvancedAutomationSolutionsUltimateShowcase;