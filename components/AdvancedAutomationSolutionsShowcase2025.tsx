import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Bot, 
  Zap, 
  Settings, 
  Cpu, 
  Database, 
  Shield, 
  Globe, 
  Rocket,
  ArrowRight,
  CheckCircle,
  Star,
  Lightbulb,
  Target,
  TrendingUp,
  Users,
  Brain,
  Workflow,
  BarChart3,
  Clock,
  DollarSign
} from 'lucide-react';

const AdvancedAutomationSolutionsShowcase2025: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const automationData = {
    overview: {
      title: "Advanced Automation Solutions 2025",
      subtitle: "Revolutionary automation technologies transforming business operations",
      description: "Our comprehensive automation platform delivers unprecedented efficiency gains, cost reductions, and operational excellence across all business functions.",
      keyMetrics: [
        { label: "Efficiency Gains", value: "2,500%", icon: TrendingUp, color: "from-green-500 to-emerald-500" },
        { label: "Cost Reduction", value: "85%", icon: DollarSign, color: "from-blue-500 to-cyan-500" },
        { label: "Processing Speed", value: "10,000x", icon: Zap, color: "from-yellow-500 to-orange-500" },
        { label: "Accuracy Rate", value: "99.9%", icon: Target, color: "from-purple-500 to-pink-500" }
      ]
    },
    solutions: {
      title: "Revolutionary Automation Solutions",
      categories: [
        {
          name: "Intelligent Process Automation (IPA)",
          description: "AI-powered automation that learns, adapts, and optimizes business processes in real-time.",
          features: [
            "Self-learning process optimization",
            "Dynamic workflow adaptation",
            "Predictive process maintenance",
            "Cross-system integration"
          ],
          roi: "400%",
          icon: Workflow,
          color: "bg-blue-500"
        },
        {
          name: "Cognitive Automation",
          description: "Advanced AI systems that understand context, make decisions, and handle complex tasks autonomously.",
          features: [
            "Natural language processing",
            "Decision-making algorithms",
            "Context-aware automation",
            "Human-like reasoning"
          ],
          roi: "600%",
          icon: Brain,
          color: "bg-purple-500"
        },
        {
          name: "Robotic Process Automation (RPA)",
          description: "Software robots that automate repetitive tasks with 100% accuracy and 24/7 availability.",
          features: [
            "Rule-based task automation",
            "UI/API integration",
            "Exception handling",
            "Scalable deployment"
          ],
          roi: "300%",
          icon: Bot,
          color: "bg-green-500"
        },
        {
          name: "Autonomous Business Systems",
          description: "Self-managing systems that operate independently with minimal human intervention.",
          features: [
            "Self-healing capabilities",
            "Automatic scaling",
            "Proactive maintenance",
            "Intelligent resource allocation"
          ],
          roi: "800%",
          icon: Settings,
          color: "bg-orange-500"
        },
        {
          name: "Predictive Analytics Automation",
          description: "AI-driven systems that predict trends, optimize decisions, and prevent issues before they occur.",
          features: [
            "Real-time data analysis",
            "Predictive modeling",
            "Automated reporting",
            "Risk assessment"
          ],
          roi: "500%",
          icon: BarChart3,
          color: "bg-cyan-500"
        },
        {
          name: "Customer Experience Automation",
          description: "End-to-end automation of customer interactions, support, and engagement processes.",
          features: [
            "Intelligent chatbots",
            "Automated support routing",
            "Personalized experiences",
            "Omnichannel integration"
          ],
          roi: "350%",
          icon: Users,
          color: "bg-pink-500"
        }
      ]
    },
    industries: {
      title: "Industry-Specific Automation Solutions",
      sectors: [
        {
          industry: "Manufacturing",
          solutions: [
            "Smart factory automation with IoT integration",
            "Predictive maintenance reducing downtime by 90%",
            "Quality control automation with 99.9% accuracy",
            "Supply chain optimization and demand forecasting"
          ],
          results: "60% cost reduction, 200% productivity increase",
          icon: Settings,
          color: "from-blue-400 to-cyan-500"
        },
        {
          industry: "Financial Services",
          solutions: [
            "Automated fraud detection and prevention",
            "Real-time risk assessment and compliance",
            "Intelligent loan processing and underwriting",
            "Automated trading and portfolio management"
          ],
          results: "85% faster processing, 99.9% accuracy",
          icon: DollarSign,
          color: "from-green-400 to-emerald-500"
        },
        {
          industry: "Healthcare",
          solutions: [
            "Automated patient scheduling and management",
            "AI-powered diagnostic assistance",
            "Automated billing and insurance processing",
            "Predictive health analytics and monitoring"
          ],
          results: "70% efficiency gain, 50% cost reduction",
          icon: Shield,
          color: "from-red-400 to-pink-500"
        },
        {
          industry: "Retail & E-commerce",
          solutions: [
            "Intelligent inventory management",
            "Automated customer service and support",
            "Dynamic pricing optimization",
            "Personalized recommendation engines"
          ],
          results: "40% increase in sales, 30% reduction in costs",
          icon: Globe,
          color: "from-purple-400 to-indigo-500"
        },
        {
          industry: "Logistics & Transportation",
          solutions: [
            "Autonomous route optimization",
            "Predictive maintenance for vehicles",
            "Automated warehouse management",
            "Real-time tracking and monitoring"
          ],
          results: "50% fuel savings, 80% on-time delivery",
          icon: Rocket,
          color: "from-yellow-400 to-orange-500"
        },
        {
          industry: "Human Resources",
          solutions: [
            "Automated resume screening and candidate matching",
            "Intelligent employee onboarding",
            "Performance analytics and feedback automation",
            "Workforce planning and optimization"
          ],
          results: "75% faster hiring, 60% better candidate fit",
          icon: Users,
          color: "from-cyan-400 to-blue-500"
        }
      ]
    },
    benefits: {
      title: "Comprehensive Benefits & ROI",
      categories: [
        {
          title: "Operational Excellence",
          benefits: [
            "99.9% accuracy in automated processes",
            "24/7 operation without human intervention",
            "Instant scalability based on demand",
            "Zero human error in repetitive tasks"
          ],
          icon: Target,
          color: "from-green-500 to-emerald-500"
        },
        {
          title: "Cost Optimization",
          benefits: [
            "85% reduction in operational costs",
            "Elimination of manual labor expenses",
            "Reduced error-related costs by 95%",
            "Optimized resource utilization"
          ],
          icon: DollarSign,
          color: "from-blue-500 to-cyan-500"
        },
        {
          title: "Speed & Efficiency",
          benefits: [
            "10,000x faster processing speeds",
            "2,500% improvement in efficiency",
            "Real-time decision making",
            "Instant response to business changes"
          ],
          icon: Zap,
          color: "from-yellow-500 to-orange-500"
        },
        {
          title: "Innovation & Growth",
          benefits: [
            "Freed resources for strategic initiatives",
            "Enhanced customer experiences",
            "Data-driven insights and analytics",
            "Competitive advantage through automation"
          ],
          icon: Lightbulb,
          color: "from-purple-500 to-pink-500"
        }
      ]
    }
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Target },
    { id: 'solutions', label: 'Solutions', icon: Bot },
    { id: 'industries', label: 'Industries', icon: Globe },
    { id: 'benefits', label: 'Benefits', icon: TrendingUp }
  ];

  if (!isVisible) return null;

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="py-20 bg-gradient-to-br from-slate-900 via-green-900 to-slate-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-600 to-blue-600 text-white text-sm font-semibold mb-6"
          >
            <Bot className="w-4 h-4 mr-2" />
            Advanced Automation Solutions 2025
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {automationData[activeTab as keyof typeof automationData].title}
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            {automationData[activeTab as keyof typeof automationData].subtitle || automationData[activeTab as keyof typeof automationData].description}
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-green-600 to-blue-600 text-white shadow-lg'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              <tab.icon className="w-5 h-5 mr-2" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
        >
          {activeTab === 'overview' && (
            <div className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {automationData.overview.keyMetrics.map((metric, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-center p-6 bg-gradient-to-br from-white/10 to-white/5 rounded-xl border border-white/20"
                  >
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${metric.color} flex items-center justify-center`}>
                      <metric.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-white mb-2">{metric.value}</div>
                    <div className="text-gray-300 text-sm">{metric.label}</div>
                  </motion.div>
                ))}
              </div>
              
              <div className="text-center">
                <p className="text-lg text-gray-300 max-w-4xl mx-auto">
                  Our comprehensive automation platform delivers unprecedented efficiency gains, cost reductions, 
                  and operational excellence across all business functions.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'solutions' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {automationData.solutions.categories.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 bg-gradient-to-br from-white/10 to-white/5 rounded-xl border border-white/20 hover:border-white/40 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 ${solution.color} rounded-lg flex items-center justify-center mr-4`}>
                      <solution.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">{solution.name}</h3>
                      <div className="text-sm text-green-400 font-semibold">ROI: {solution.roi}</div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4 text-sm">{solution.description}</p>
                  
                  <div className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {activeTab === 'industries' && (
            <div className="space-y-8">
              {automationData.industries.sectors.map((sector, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-8 bg-gradient-to-r from-white/10 to-white/5 rounded-xl border border-white/20"
                >
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${sector.color} flex items-center justify-center mr-6`}>
                      <sector.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{sector.industry}</h3>
                      <div className="text-lg text-green-400 font-semibold">{sector.results}</div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {sector.solutions.map((solution, solutionIndex) => (
                      <div key={solutionIndex} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-300">{solution}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {activeTab === 'benefits' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {automationData.benefits.categories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-8 bg-gradient-to-br from-white/10 to-white/5 rounded-xl border border-white/20"
                >
                  <div className="flex items-center mb-6">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mr-4`}>
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{category.title}</h3>
                  </div>
                  
                  <div className="space-y-3">
                    {category.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-300">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Automate Your Future?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Transform your business with our advanced automation solutions and achieve unprecedented efficiency, 
              cost savings, and competitive advantage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/automation-solutions"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-blue-700 transition-all duration-300"
              >
                Explore Automation Solutions
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/automation-consultation"
                className="inline-flex items-center px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                Get Automation Consultation
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AdvancedAutomationSolutionsShowcase2025;