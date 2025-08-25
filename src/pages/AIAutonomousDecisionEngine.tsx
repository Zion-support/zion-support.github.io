import React from 'react';
<<<<<<< HEAD
import { motion } from 'framer-motion';
=======
<<<<<<< HEAD
import { Link } from 'react-router-dom';
=======
import { motion } from 'framer-motion';
>>>>>>> origin/cursor/website-audit-and-enhancement-cd9f
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
import { 
  Brain, 
  Target, 
  BarChart3, 
  Zap, 
  Shield, 
  Users, 
<<<<<<< HEAD
=======
<<<<<<< HEAD
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  Globe,
  Cpu,
  Network,
  Lock,
  Eye,
  Search,
  Filter,
  Download,
  Upload,
  RefreshCw,
  Settings,
  Monitor,
  AlertTriangle,
  Clock,
  Calendar,
  FileText,
  PieChart,
  LineChart,
  Activity,
  Gauge,
  Lightbulb,
  Rocket,
  Award,
  Zap as ZapIcon,
  Brain as BrainIcon,
  Target as TargetIcon
=======
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
  Globe, 
  Lock,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Cpu,
  Network,
  Cloud,
  Lightbulb,
  Rocket,
  Gauge,
  Activity,
  PieChart,
  LineChart
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-cd9f
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
} from 'lucide-react';

const AIAutonomousDecisionEngine: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: "Intelligent Decision Making",
<<<<<<< HEAD
=======
<<<<<<< HEAD
      description: "AI-powered autonomous decision engine with real-time analysis and optimization"
    },
    {
      icon: Target,
      title: "Goal-Oriented Optimization",
      description: "Continuously optimizes decisions based on business objectives and outcomes"
    },
    {
      icon: BarChart3,
      title: "Predictive Analytics",
      description: "Future-focused decision support with machine learning insights"
=======
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
      description: "AI-powered autonomous decision engine with real-time analysis capabilities"
    },
    {
      icon: Target,
      title: "Predictive Analytics",
      description: "Advanced forecasting and trend analysis for strategic planning"
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-cd9f
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
    },
    {
      icon: Shield,
      title: "Risk Assessment",
      description: "Comprehensive risk evaluation and mitigation strategies"
    },
    {
<<<<<<< HEAD
=======
<<<<<<< HEAD
      icon: Users,
      title: "Stakeholder Alignment",
      description: "Balances multiple stakeholder interests and priorities"
    },
    {
      icon: Zap,
      title: "Real-Time Processing",
      description: "Instant decision-making capabilities for time-critical situations"
    }
  ];

  const capabilities = [
    "Autonomous decision execution and monitoring",
    "Real-time data analysis and pattern recognition",
    "Multi-objective optimization algorithms",
    "Risk assessment and mitigation strategies",
    "Stakeholder preference learning and adaptation",
    "Decision outcome prediction and validation",
    "Automated decision documentation and audit trails",
    "Performance metrics and continuous improvement",
    "Integration with existing business systems",
    "Customizable decision frameworks and rules"
=======
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
      icon: Zap,
      title: "Real-time Processing",
      description: "Instant decision-making with minimal latency"
    },
    {
      icon: Users,
      title: "Multi-stakeholder Support",
      description: "Collaborative decision-making across teams and departments"
    },
    {
      icon: Globe,
      title: "Global Scalability",
      description: "Enterprise-grade solution that scales with your business"
    }
  ];

  const benefits = [
    "Automated decision-making processes",
    "Real-time risk assessment and mitigation",
    "Predictive analytics for strategic planning",
    "Reduced decision-making time by 80%",
    "Improved accuracy and consistency",
    "Comprehensive audit trails and compliance"
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-cd9f
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
  ];

  const useCases = [
    {
      title: "Financial Trading",
<<<<<<< HEAD
=======
<<<<<<< HEAD
      description: "Autonomous trading decisions with risk management"
    },
    {
      title: "Supply Chain",
      description: "Dynamic inventory and logistics optimization"
    },
    {
      title: "Customer Service",
      description: "Intelligent routing and issue resolution"
    },
    {
      title: "Manufacturing",
      description: "Production planning and quality control decisions"
    },
    {
      title: "Healthcare",
      description: "Treatment recommendations and resource allocation"
    },
    {
      title: "Energy Management",
      description: "Grid optimization and demand response decisions"
    }
  ];

  const benefits = [
    {
      icon: ZapIcon,
      title: "Faster Decisions",
      description: "Reduce decision time from hours to seconds"
    },
    {
      icon: BrainIcon,
      title: "Better Outcomes",
      description: "Data-driven decisions with higher success rates"
    },
    {
      icon: TargetIcon,
      title: "Consistent Results",
      description: "Eliminate human bias and inconsistency"
    },
    {
      icon: TrendingUp,
      title: "Continuous Learning",
      description: "Improves decision quality over time"
=======
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
      description: "Automated trading decisions with real-time market analysis and risk management"
    },
    {
      title: "Healthcare Diagnostics",
      description: "AI-powered medical decision support with patient data analysis"
    },
    {
      title: "Supply Chain Management",
      description: "Intelligent logistics decisions and route optimization"
    },
    {
      title: "Customer Service",
      description: "Automated customer support decisions and routing"
    }
  ];

  const decisionTypes = [
    {
      title: "Strategic Decisions",
      description: "Long-term planning and business strategy",
      icon: Target
    },
    {
      title: "Operational Decisions",
      description: "Day-to-day business operations and processes",
      icon: Activity
    },
    {
      title: "Tactical Decisions",
      description: "Medium-term planning and resource allocation",
      icon: PieChart
    },
    {
      title: "Emergency Decisions",
      description: "Crisis management and rapid response",
      icon: Zap
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-cd9f
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
    }
  ];

  return (
<<<<<<< HEAD
=======
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-700 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-white/20 rounded-full">
                <Brain className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI Autonomous Decision Engine
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-purple-100">
              Transform your business with intelligent, autonomous decision-making that 
              learns, adapts, and optimizes in real-time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg hover:bg-purple-50 transition-colors"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-600 transition-colors"
              >
                Watch Demo
              </Link>
            </div>
          </div>
=======
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-700 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-white/20 rounded-full">
                <Brain className="w-8 h-8" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              AI Autonomous Decision Engine
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-purple-100">
              Empower your business with intelligent, autonomous decision-making that operates 24/7 with precision and speed
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors flex items-center justify-center">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors">
                Watch Demo
              </button>
            </div>
          </motion.div>
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-cd9f
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<<<<<<< HEAD
=======
<<<<<<< HEAD
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Autonomous Decision Intelligence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI-powered decision engine autonomously analyzes, evaluates, and executes 
              decisions with unprecedented speed and accuracy.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-50 to-indigo-50 p-8 rounded-xl border border-purple-100 hover:shadow-lg transition-shadow">
                <div className="p-3 bg-purple-600 rounded-lg w-fit mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
=======
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Advanced Decision-Making Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI Autonomous Decision Engine combines machine learning, predictive analytics, and real-time processing to deliver intelligent decisions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-white to-purple-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-purple-600" />
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-cd9f
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
<<<<<<< HEAD
=======
<<<<<<< HEAD
              </div>
=======
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Decision Types Section */}
      <section className="py-20 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Types of Decisions We Handle
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From strategic planning to operational decisions, our engine handles all levels of business decision-making
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {decisionTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                    <type.icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {type.title}
                  </h3>
                </div>
                <p className="text-gray-600">
                  {type.description}
                </p>
              </motion.div>
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-cd9f
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
<<<<<<< HEAD
=======
<<<<<<< HEAD
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Autonomous Decision Making?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the transformative benefits of AI-powered autonomous decision-making.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-purple-600 rounded-full">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Advanced Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive decision-making capabilities that adapt and learn from your business environment.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              {capabilities.slice(0, 5).map((capability, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{capability}</span>
                </div>
              ))}
            </div>
            <div className="space-y-4">
              {capabilities.slice(5).map((capability, index) => (
                <div key={index + 5} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{capability}</span>
                </div>
              ))}
            </div>
=======
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose AI Autonomous Decision Engine?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience unprecedented efficiency and accuracy in your decision-making processes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Transform Your Decision-Making Process
              </h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="flex items-start"
                  >
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-white p-8 rounded-2xl shadow-xl">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Gauge className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">
                    Performance Metrics
                  </h4>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Decision Speed</span>
                      <span className="font-semibold text-green-600">10x Faster</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Accuracy Rate</span>
                      <span className="font-semibold text-green-600">99.5%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Cost Reduction</span>
                      <span className="font-semibold text-green-600">70%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Uptime</span>
                      <span className="font-semibold text-green-600">99.9%</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-cd9f
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
<<<<<<< HEAD
=======
<<<<<<< HEAD
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how AI Autonomous Decision Engine transforms operations across various industries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-xl border border-indigo-100 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {useCase.title}
                </h3>
                <p className="text-gray-600">
                  {useCase.description}
                </p>
              </div>
=======
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
      <section className="py-20 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how AI Autonomous Decision Engine transforms operations across various industries
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {useCase.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {useCase.description}
                </p>
                <button className="text-purple-600 font-semibold hover:text-purple-700 transition-colors flex items-center">
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </motion.div>
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-cd9f
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
<<<<<<< HEAD
=======
<<<<<<< HEAD
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-700">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Automate Your Decision Making?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Join the future of autonomous business intelligence with Zion Tech Group.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg hover:bg-purple-50 transition-colors"
            >
              Start Your Journey
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/pricing"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-600 transition-colors"
            >
              View Pricing
            </Link>
          </div>
=======
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-700 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Automate Your Decision-Making?
            </h2>
            <p className="text-xl mb-8 text-purple-100">
              Join the future of autonomous business intelligence with Zion Tech Group
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors">
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors">
                Schedule Demo
              </button>
            </div>
          </motion.div>
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-cd9f
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
        </div>
      </section>
    </div>
  );
};

export default AIAutonomousDecisionEngine;