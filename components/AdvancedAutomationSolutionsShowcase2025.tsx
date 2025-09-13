import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Cog, 
  Zap, 
  Brain, 
  Shield, 
  Target, 
  TrendingUp, 
  Users, 
  Globe,
  ArrowRight,
  CheckCircle,
  Star,
  Lightbulb,
  Rocket,
  Database,
  Network,
  Settings,
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
      description: "Our comprehensive automation solutions deliver unprecedented efficiency, accuracy, and ROI through intelligent process automation, AI-driven decision making, and autonomous operations.",
      keyMetrics: [
        { label: "Efficiency Gains", value: "2,500%", icon: TrendingUp, color: "from-green-500 to-emerald-500" },
        { label: "Cost Reduction", value: "85%", icon: DollarSign, color: "from-blue-500 to-cyan-500" },
        { label: "Accuracy Rate", value: "99.9%", icon: Target, color: "from-purple-500 to-pink-500" },
        { label: "Time Savings", value: "90%", icon: Clock, color: "from-yellow-500 to-orange-500" }
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
          icon: Brain,
          color: "bg-blue-500"
        },
        {
          name: "Autonomous Business Operations",
          description: "Fully autonomous business systems that operate independently with minimal human intervention.",
          features: [
            "24/7 autonomous decision making",
            "Self-healing system architecture",
            "Predictive resource allocation",
            "Automated compliance monitoring"
          ],
          roi: "600%",
          icon: Cog,
          color: "bg-green-500"
        },
        {
          name: "AI-Driven Customer Service",
          description: "Intelligent customer service automation with human-level understanding and empathy.",
          features: [
            "Natural language processing",
            "Emotional intelligence integration",
            "Multi-channel support automation",
            "Predictive customer needs"
          ],
          roi: "350%",
          icon: Users,
          color: "bg-purple-500"
        },
        {
          name: "Smart Supply Chain Automation",
          description: "End-to-end supply chain optimization with predictive analytics and autonomous decision making.",
          features: [
            "Predictive demand forecasting",
            "Autonomous inventory management",
            "Dynamic pricing optimization",
            "Risk assessment automation"
          ],
          roi: "500%",
          icon: Globe,
          color: "bg-orange-500"
        },
        {
          name: "Financial Process Automation",
          description: "Comprehensive financial operations automation with real-time analytics and compliance.",
          features: [
            "Automated financial reporting",
            "Real-time risk assessment",
            "Compliance monitoring",
            "Predictive financial modeling"
          ],
          roi: "450%",
          icon: BarChart3,
          color: "bg-red-500"
        },
        {
          name: "HR & Talent Automation",
          description: "Intelligent human resources automation for recruitment, onboarding, and talent management.",
          features: [
            "AI-powered candidate screening",
            "Automated onboarding workflows",
            "Performance analytics automation",
            "Predictive talent retention"
          ],
          roi: "300%",
          icon: Users,
          color: "bg-indigo-500"
        }
      ]
    },
    industries: {
      title: "Industry-Specific Automation Solutions",
      sectors: [
        {
          industry: "Manufacturing",
          solutions: [
            "Autonomous production lines with self-optimization",
            "Predictive maintenance reducing downtime by 95%",
            "Quality control automation with 99.9% accuracy",
            "Supply chain optimization with real-time adjustments"
          ],
          results: "80% cost reduction, 500% efficiency gains",
          icon: Cog,
          color: "from-blue-400 to-cyan-500"
        },
        {
          industry: "Healthcare",
          solutions: [
            "Automated patient diagnosis with AI assistance",
            "Predictive health analytics for preventive care",
            "Automated medical record management",
            "Drug discovery acceleration through automation"
          ],
          results: "90% faster diagnosis, 70% cost reduction",
          icon: Shield,
          color: "from-green-400 to-emerald-500"
        },
        {
          industry: "Financial Services",
          solutions: [
            "Automated trading algorithms with machine learning",
            "Real-time fraud detection and prevention",
            "Automated compliance and regulatory reporting",
            "Predictive risk assessment and management"
          ],
          results: "99.9% fraud detection accuracy, 300% ROI",
          icon: BarChart3,
          color: "from-purple-400 to-pink-500"
        },
        {
          industry: "Retail & E-commerce",
          solutions: [
            "Automated inventory management and optimization",
            "AI-powered customer service and support",
            "Dynamic pricing and promotion automation",
            "Predictive analytics for demand forecasting"
          ],
          results: "85% inventory reduction, 400% sales increase",
          icon: Globe,
          color: "from-orange-400 to-red-500"
        },
        {
          industry: "Logistics & Transportation",
          solutions: [
            "Autonomous route optimization and planning",
            "Predictive maintenance for fleet management",
            "Automated warehouse operations",
            "Real-time delivery tracking and optimization"
          ],
          results: "60% fuel savings, 200% delivery efficiency",
          icon: Rocket,
          color: "from-yellow-400 to-orange-500"
        },
        {
          industry: "Real Estate",
          solutions: [
            "Automated property valuation and assessment",
            "AI-powered market analysis and forecasting",
            "Automated tenant screening and management",
            "Predictive maintenance for property management"
          ],
          results: "70% faster transactions, 250% ROI improvement",
          icon: Target,
          color: "from-indigo-400 to-purple-500"
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
            "Real-time monitoring and optimization",
            "Seamless integration with existing systems"
          ],
          icon: Settings,
          color: "from-blue-500 to-cyan-500"
        },
        {
          title: "Cost Optimization",
          benefits: [
            "85% reduction in operational costs",
            "Elimination of manual errors and rework",
            "Optimized resource utilization",
            "Reduced compliance and regulatory costs"
          ],
          icon: DollarSign,
          color: "from-green-500 to-emerald-500"
        },
        {
          title: "Scalability & Growth",
          benefits: [
            "Unlimited scalability without linear cost increase",
            "Rapid deployment across multiple locations",
            "Easy adaptation to changing business needs",
            "Future-proof technology architecture"
          ],
          icon: TrendingUp,
          color: "from-purple-500 to-pink-500"
        },
        {
          title: "Innovation & Competitive Advantage",
          benefits: [
            "Faster time-to-market for new products",
            "Data-driven decision making capabilities",
            "Enhanced customer experience and satisfaction",
            "Continuous improvement through AI learning"
          ],
          icon: Lightbulb,
          color: "from-yellow-500 to-orange-500"
        }
      ]
    },
    implementation: {
      title: "Implementation Roadmap",
      phases: [
        {
          phase: "Phase 1: Assessment & Planning",
          duration: "2-4 weeks",
          activities: [
            "Current process analysis and mapping",
            "Automation opportunity identification",
            "ROI assessment and business case development",
            "Technology stack selection and architecture design"
          ],
          deliverables: "Automation strategy and implementation plan"
        },
        {
          phase: "Phase 2: Pilot Implementation",
          duration: "4-8 weeks",
          activities: [
            "Pilot process selection and setup",
            "Automation tool configuration and testing",
            "User training and change management",
            "Performance monitoring and optimization"
          ],
          deliverables: "Working pilot with measurable results"
        },
        {
          phase: "Phase 3: Full Deployment",
          duration: "8-16 weeks",
          activities: [
            "Enterprise-wide automation deployment",
            "Integration with existing systems",
            "Comprehensive user training and support",
            "Performance monitoring and continuous improvement"
          ],
          deliverables: "Fully automated business operations"
        },
        {
          phase: "Phase 4: Optimization & Scaling",
          duration: "Ongoing",
          activities: [
            "Continuous performance monitoring",
            "Process optimization and enhancement",
            "New automation opportunity identification",
            "Technology updates and upgrades"
          ],
          deliverables: "Optimized and scalable automation platform"
        }
      ]
    }
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Target },
    { id: 'solutions', label: 'Solutions', icon: Cog },
    { id: 'industries', label: 'Industries', icon: Globe },
    { id: 'benefits', label: 'Benefits', icon: TrendingUp },
    { id: 'implementation', label: 'Implementation', icon: Rocket }
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
            className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-600 to-emerald-600 text-white text-sm font-semibold mb-6"
          >
            <Cog className="w-4 h-4 mr-2" />
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
                  ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg'
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
                  Our comprehensive automation solutions deliver unprecedented efficiency, accuracy, and ROI through 
                  intelligent process automation, AI-driven decision making, and autonomous operations.
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
                      <div className="text-green-400 font-semibold">ROI: {solution.roi}</div>
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
                  className="p-6 bg-gradient-to-br from-white/10 to-white/5 rounded-xl border border-white/20"
                >
                  <div className="flex items-center mb-4">
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

          {activeTab === 'implementation' && (
            <div className="space-y-6">
              {automationData.implementation.phases.map((phase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start p-6 bg-gradient-to-r from-white/10 to-white/5 rounded-xl border border-white/20"
                >
                  <div className="flex-shrink-0 mr-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
                      <span className="text-white font-bold text-lg">{index + 1}</span>
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-white">{phase.phase}</h3>
                      <span className="text-sm text-gray-400 bg-white/10 px-3 py-1 rounded-full">{phase.duration}</span>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-green-400 mb-2">Key Activities:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {phase.activities.map((activity, activityIndex) => (
                          <div key={activityIndex} className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-1 flex-shrink-0" />
                            <span className="text-gray-300 text-sm">{activity}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="bg-green-500/20 text-green-400 px-3 py-2 rounded-lg text-sm font-semibold">
                      Deliverable: {phase.deliverables}
                    </div>
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
          <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Automate Your Future?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Transform your business operations with our advanced automation solutions and achieve unprecedented efficiency and ROI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/automation-solutions"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-300"
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