<<<<<<< HEAD
import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { motion } from 'framer-motion';
import { 
  CogIcon, 
  ChartBarIcon, 
  RocketLaunchIcon,
  ShieldCheckIcon,
  LightBulbIcon,
  UserGroupIcon,
  GlobeAltIcon,
  ClockIcon
} from '@heroicons/react/24/outline';
=======
import { motion } from 'framer-motion';
import { Bot, TrendingUp, Zap, Shield, Users, Globe, BarChart3, Settings } from 'lucide-react';
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-20ee
=======
import { Helmet } from 'react-helmet-async';
import { Building, Zap, Brain, Users, Shield, TrendingUp, ArrowRight, Star, Rocket, Globe, Cpu, Database } from 'lucide-react';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
>>>>>>> origin/cursor/website-audit-and-enhancement-9d3a

<<<<<<< HEAD
const AutonomousBusinessOperationsPlatform: React.FC = () => {
<<<<<<< HEAD
<<<<<<< HEAD
  const features = [
    {
      icon: CogIcon,
      title: "Intelligent Process Automation",
      description: "AI-powered automation that learns and optimizes business processes in real-time."
    },
    {
      icon: ChartBarIcon,
      title: "Predictive Analytics",
      description: "Advanced analytics that forecast business trends and identify optimization opportunities."
    },
    {
      icon: RocketLaunchIcon,
      title: "Scalable Operations",
      description: "Automatically scale business operations based on demand and performance metrics."
    },
    {
      icon: ShieldCheckIcon,
      title: "Risk Management",
      description: "Proactive risk identification and mitigation through continuous monitoring and AI analysis."
    },
    {
      icon: LightBulbIcon,
      title: "Continuous Optimization",
      description: "Self-improving systems that continuously optimize performance and efficiency."
    },
    {
      icon: UserGroupIcon,
      title: "Team Collaboration",
      description: "Seamless integration with human teams for optimal human-AI collaboration."
=======
import { Link } from 'react-router-dom';
import { 
  Bot, 
  Zap, 
  Cpu, 
  Database, 
  BarChart3, 
  Globe, 
  Network, 
  Shield,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Clock,
  Award,
  Lightbulb,
  Target,
  Settings,
  Workflow
} from 'lucide-react';

const AutonomousBusinessOperationsPlatform = () => {
  const features = [
    {
      icon: Bot,
      title: "Autonomous Operations",
      description: "AI-powered systems that operate independently and make intelligent decisions"
    },
    {
      icon: Zap,
      title: "Real-time Processing",
      description: "Instant processing and decision-making for critical business operations"
    },
    {
      icon: Cpu,
      title: "Intelligent Automation",
      description: "Smart automation that learns and adapts to business needs"
    },
    {
      icon: Database,
      title: "Data Integration",
      description: "Seamless integration across all business systems and data sources"
    },
    {
      icon: BarChart3,
      title: "Predictive Analytics",
      description: "Advanced analytics that predict trends and optimize operations"
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Built-in security and compliance monitoring for all operations"
    }
  ];

  const operations = [
    {
      title: "Supply Chain Management",
      description: "Autonomous supply chain optimization and inventory management",
      benefits: ["Demand forecasting", "Inventory optimization", "Supplier management"]
    },
    {
      title: "Customer Service",
      description: "AI-powered customer support and relationship management",
      benefits: ["24/7 support", "Personalized interactions", "Issue resolution"]
    },
    {
      title: "Financial Operations",
      description: "Automated financial processing and risk management",
      benefits: ["Invoice processing", "Risk assessment", "Financial reporting"]
    },
    {
      title: "HR & Recruitment",
      description: "Intelligent HR processes and talent acquisition",
      benefits: ["Candidate screening", "Performance monitoring", "Training optimization"]
>>>>>>> origin/cursor/website-audit-and-enhancement-98d1
=======
import { motion } from 'framer-motion';
import { Bot, Zap, Shield, TrendingUp, Users, Globe, ArrowRight, Cpu, Network } from 'lucide-react';

const AutonomousBusinessOperationsPlatform: React.FC = () => {
  const features = [
    {
      icon: Bot,
      title: 'AI Autonomous Agents',
      description: 'Intelligent agents that autonomously manage and optimize business operations 24/7.'
    },
    {
      icon: Zap,
      title: 'Real-time Optimization',
      description: 'Continuous monitoring and automatic adjustment of business processes for maximum efficiency.'
    },
    {
      icon: Shield,
      title: 'Intelligent Security',
      description: 'AI-powered threat detection and automated response to security incidents.'
    },
    {
      icon: TrendingUp,
      title: 'Performance Analytics',
      description: 'Advanced insights and predictive analytics for business performance optimization.'
    },
    {
      icon: Cpu,
      title: 'Process Automation',
      description: 'End-to-end automation of complex business workflows and decision-making processes.'
    },
    {
      icon: Network,
      title: 'Scalable Architecture',
      description: 'Cloud-native platform that scales with your business growth and requirements.'
>>>>>>> origin/cursor/website-audit-and-enhancement-efd3
    }
  ];

  const benefits = [
<<<<<<< HEAD
<<<<<<< HEAD
    "Reduce operational costs by up to 40%",
    "Increase efficiency by 60%",
    "24/7 autonomous operation",
    "Real-time decision making",
    "Predictive maintenance",
    "Scalable growth support"
  ];

  const industries = [
    "Manufacturing",
    "Healthcare",
    "Finance",
    "Retail",
    "Logistics",
    "Energy",
    "Telecommunications",
    "Education"
=======
    "24/7 autonomous operation",
    "Reduced operational costs",
    "Improved efficiency and accuracy",
    "Real-time decision making",
    "Scalable operations",
    "Enhanced customer experience"
=======
    '24/7 autonomous operation',
    '90% reduction in manual tasks',
    'Real-time decision making',
    'Predictive maintenance',
    'Cost optimization',
    'Enhanced security'
>>>>>>> origin/cursor/website-audit-and-enhancement-efd3
  ];

  const useCases = [
    {
<<<<<<< HEAD
      title: "Manufacturing Companies",
      description: "Automate production lines and quality control processes"
    },
    {
      title: "Retail & E-commerce",
      description: "Optimize inventory and customer service operations"
    },
    {
      title: "Financial Services",
      description: "Automate trading, risk management, and compliance"
    },
    {
      title: "Healthcare Organizations",
      description: "Streamline patient care and administrative processes"
=======
      title: 'Supply Chain Management',
      description: 'Autonomous monitoring and optimization of supply chain operations, inventory management, and logistics.'
    },
    {
      title: 'Customer Service',
      description: 'AI-powered customer support with intelligent routing, automated responses, and sentiment analysis.'
    },
    {
      title: 'Financial Operations',
      description: 'Automated financial reporting, risk assessment, and compliance monitoring.'
    },
    {
      title: 'HR & Recruitment',
      description: 'Intelligent candidate screening, automated onboarding, and performance management.'
>>>>>>> origin/cursor/website-audit-and-enhancement-efd3
    }
>>>>>>> origin/cursor/website-audit-and-enhancement-98d1
  ];
=======
import { Building, Brain, Zap, Shield, ArrowRight, Users, Target, TrendingUp, Clock, BarChart3 } from 'lucide-react';
>>>>>>> origin/cursor/website-audit-and-enhancement-a260

export default function AutonomousBusinessOperationsPlatform() {
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section */}
<<<<<<< HEAD
<<<<<<< HEAD
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div className="relative mx-auto max-w-7xl">
=======
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
>>>>>>> origin/cursor/website-audit-and-enhancement-efd3
=======
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20" />
        <div className="relative z-10 container mx-auto px-4">
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-20ee
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
<<<<<<< HEAD
<<<<<<< HEAD
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
=======
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-20ee
              Autonomous Business
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Operations Platform
              </span>
            </h1>
<<<<<<< HEAD
            <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your business with AI-powered autonomous operations. 
              Achieve unprecedented efficiency, scalability, and growth.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="px-8 py-3 border border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-300">
                Schedule Demo
              </button>
=======
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Bot className="w-12 h-12 text-cyan-400 mr-3" />
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Autonomous Business Operations Platform
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Transform your business with fully autonomous operations. Our AI-powered platform 
              handles complex business processes independently, optimizing efficiency and 
              driving growth while you focus on strategic decisions.
=======
  return (
    <>
      <Helmet>
        <title>Autonomous Business Operations Platform - Zion Tech Group</title>
        <meta name="description" content="Revolutionary autonomous business operations platform that runs your business 24/7 with AI-powered automation. Streamline operations, reduce costs, and increase efficiency." />
        <meta name="keywords" content="autonomous business operations, business automation, AI business platform, autonomous systems, business process automation, AI operations" />
        <link rel="canonical" href="https://ziontechgroup.com/autonomous-business-operations-platform" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)]"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-4">
                  <Building className="w-10 h-10 text-white" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Autonomous Business
                <span className="block bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                  Operations Platform
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Transform your business with our revolutionary autonomous operations platform. 
                Let AI run your business 24/7 while you focus on strategic growth and innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg text-white font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-200 transform hover:scale-105"
                >
                  <span>Get Started</span>
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/services/ai-autonomous-systems"
                  className="inline-flex items-center px-8 py-4 border border-green-500 text-green-400 rounded-lg font-semibold hover:bg-green-500 hover:text-white transition-all duration-200"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Revolutionary Business Automation
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our platform leverages cutting-edge AI to create a truly autonomous business 
                that operates efficiently around the clock without human intervention.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-green-500 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">AI-Powered Decision Making</h3>
                <p className="text-gray-300">
                  Advanced AI algorithms make intelligent business decisions based on real-time data analysis and market conditions.
                </p>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-green-500 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">24/7 Operations</h3>
                <p className="text-gray-300">
                  Continuous business operations without downtime, holidays, or human limitations.
                </p>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-green-500 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Autonomous Teams</h3>
                <p className="text-gray-300">
                  AI agents work together as autonomous teams to handle complex business processes and workflows.
                </p>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-green-500 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Risk Management</h3>
                <p className="text-gray-300">
                  Proactive risk assessment and mitigation with real-time monitoring and automated response systems.
                </p>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-green-500 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Performance Optimization</h3>
                <p className="text-gray-300">
                  Continuous optimization of business processes for maximum efficiency and profitability.
                </p>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-green-500 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                  <Database className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Data-Driven Insights</h3>
                <p className="text-gray-300">
                  Real-time analytics and insights to drive strategic decision-making and business growth.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Business Functions Section */}
        <section className="py-20 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Autonomous Business Functions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Every aspect of your business can be automated and optimized with our 
                comprehensive autonomous operations platform.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Star className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Financial Operations</h3>
                    <p className="text-gray-300">
                      Automated accounting, invoicing, expense management, and financial reporting 
                      with AI-powered fraud detection and compliance monitoring.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Rocket className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Marketing & Sales</h3>
                    <p className="text-gray-300">
                      Intelligent lead generation, customer segmentation, personalized marketing 
                      campaigns, and automated sales processes with predictive analytics.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Users className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Human Resources</h3>
                    <p className="text-gray-300">
                      Automated recruitment, employee onboarding, performance monitoring, 
                      and HR analytics with AI-powered candidate matching.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Cpu className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">IT & Infrastructure</h3>
                    <p className="text-gray-300">
                      Automated system monitoring, security management, backup operations, 
                      and infrastructure optimization with predictive maintenance.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Globe className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Customer Service</h3>
                    <p className="text-gray-300">
                      AI-powered chatbots, automated ticket routing, customer sentiment analysis, 
                      and proactive issue resolution with 24/7 availability.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <TrendingUp className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Supply Chain</h3>
                    <p className="text-gray-300">
                      Automated inventory management, demand forecasting, supplier optimization, 
                      and logistics coordination with real-time tracking.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Transform Your Business
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience unprecedented efficiency, cost savings, and growth with our 
                autonomous business operations platform.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">300%</h3>
                <p className="text-gray-300">Increase in Operational Efficiency</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">24/7</h3>
                <p className="text-gray-300">Continuous Business Operations</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">99.9%</h3>
                <p className="text-gray-300">Uptime & Reliability</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">50%</h3>
                <p className="text-gray-300">Reduction in Operational Costs</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-900/50">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Automate Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the future of business operations with our autonomous platform that 
              works tirelessly to grow your business while you focus on what matters most.
>>>>>>> origin/cursor/website-audit-and-enhancement-9d3a
=======
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)]"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-4">
                <Building className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Autonomous Business
              <span className="block bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                Operations Platform
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with AI-powered autonomous operations that run 24/7. 
              Automate complex workflows, optimize processes, and scale operations without limits.
>>>>>>> origin/cursor/website-audit-and-enhancement-a260
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
<<<<<<< HEAD
<<<<<<< HEAD
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
=======
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg text-white font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-200 transform hover:scale-105"
>>>>>>> origin/cursor/website-audit-and-enhancement-a260
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
<<<<<<< HEAD
                to="/services"
                className="inline-flex items-center px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                View All Services
              </Link>
>>>>>>> origin/cursor/website-audit-and-enhancement-98d1
=======
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Autonomous Business Operations Platform
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your business with AI-powered autonomous operations. Our platform enables businesses 
              to run 24/7 with intelligent automation, real-time optimization, and predictive insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-green-500/30">
                Start Free Trial
              </button>
              <button className="border border-green-500 text-green-400 hover:bg-green-500 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                Schedule Demo
=======
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your business with AI-powered automation that runs 24/7. Streamline operations, reduce costs, and scale effortlessly.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105">
                Start Automation
              </button>
              <button className="border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300">
                Watch Demo
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-20ee
              </button>
>>>>>>> origin/cursor/website-audit-and-enhancement-efd3
            </div>
          </motion.div>
<<<<<<< HEAD
=======
                to="/services/ai-autonomous-systems"
                className="inline-flex items-center px-8 py-4 border border-green-500 text-green-400 rounded-lg font-semibold hover:bg-green-500 hover:text-white transition-all duration-200"
              >
                Learn More
              </Link>
            </div>
          </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-a260
        </div>
      </section>

      {/* Features Section */}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
=======
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
>>>>>>> origin/cursor/website-audit-and-enhancement-efd3
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
<<<<<<< HEAD
            <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">
              Revolutionary Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Discover how autonomous operations can transform your business processes and drive growth.
=======
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Platform Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our autonomous platform combines cutting-edge AI with business intelligence to create 
              a truly intelligent and self-optimizing business environment.
>>>>>>> origin/cursor/website-audit-and-enhancement-efd3
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-blue-400/50 transition-all duration-300"
              >
                <feature.icon className="h-12 w-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
=======
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Revolutionary Autonomous Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our platform combines cutting-edge AI with business process automation to create 
              truly autonomous operations that work around the clock.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-98d1
            ))}
=======
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-green-500 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
=======
export default function AutonomousBusinessOperationsPlatform() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate via-zion-blue to-zion-purple">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Autonomous Business Operations Platform
          </h1>
          <p className="text-xl md:text-2xl text-zion-cyan mb-8 max-w-4xl mx-auto">
            Transform your business with AI-powered autonomous operations that run 24/7 without human intervention
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-light hover:to-zion-purple-light text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/30"
            >
              Get Started
            </Link>
            <Link
              to="/demo"
              className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              Request Demo
            </Link>
>>>>>>> origin/cursor/website-audit-and-enhancement-3be4
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Benefits Section */}
      <section className="py-20 px-4 bg-gray-900/50">
        <div className="container mx-auto max-w-6xl">
=======
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-20ee
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
<<<<<<< HEAD
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Business Benefits
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-green-400">Key Advantages</h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-gray-300">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-800/50 rounded-xl p-8 border border-gray-700">
              <h3 className="text-2xl font-semibold mb-6 text-green-400">ROI Calculator</h3>
              <p className="text-gray-300 mb-6">
                Calculate your potential savings and efficiency gains with our autonomous platform.
              </p>
              <button className="w-full bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-green-500/30 flex items-center justify-center space-x-2">
                <span>Calculate ROI</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-efd3
          </div>
        </div>
      </section>

<<<<<<< HEAD
<<<<<<< HEAD
      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="mx-auto max-w-7xl">
=======
      {/* Use Cases Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
>>>>>>> origin/cursor/website-audit-and-enhancement-efd3
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
<<<<<<< HEAD
            <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">
              Measurable Results
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              See the real impact of autonomous operations on your business metrics.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10"
              >
                <ClockIcon className="h-6 w-6 text-blue-400 flex-shrink-0" />
                <span className="text-white font-medium">{benefit}</span>
              </motion.div>
=======
      {/* Operations Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Autonomous Business Operations
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how autonomous systems are revolutionizing key business operations 
              across all industries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {operations.map((operation, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700"
              >
                <h3 className="text-2xl font-semibold text-white mb-4">{operation.title}</h3>
                <p className="text-gray-300 mb-6">{operation.description}</p>
                <ul className="space-y-2">
                  {operation.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-98d1
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Industries Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">
              Industry Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our platform is designed to work across diverse industries and business models.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-blue-400/50 transition-all duration-300 text-center"
              >
                <GlobeAltIcon className="h-8 w-8 text-blue-400 mx-auto mb-3" />
                <span className="text-white font-medium">{industry}</span>
              </motion.div>
=======
      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transformative Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the revolutionary benefits of autonomous business operations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-gray-700"
              >
                <Star className="w-6 h-6 text-cyan-400 mr-3 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </div>
=======
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Autonomous Operations?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience unprecedented efficiency and growth with our intelligent automation platform
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Bot,
                title: "24/7 Operations",
                description: "Your business never sleeps with continuous automated processes"
              },
              {
                icon: TrendingUp,
                title: "Scalable Growth",
                description: "Scale operations instantly without proportional cost increases"
              },
              {
                icon: Zap,
                title: "Lightning Fast",
                description: "Execute complex operations in seconds, not hours"
              },
              {
                icon: Shield,
                title: "Secure & Reliable",
                description: "Enterprise-grade security with 99.9% uptime guarantee"
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-blue-400/50 transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-20ee
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Use Cases Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our autonomous operations platform is designed for forward-thinking organizations 
              across all industries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700"
              >
                <h3 className="text-2xl font-semibold text-white mb-4">{useCase.title}</h3>
                <p className="text-gray-300">{useCase.description}</p>
              </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-98d1
=======
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Real-World Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how autonomous operations are transforming businesses across industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gray-800/50 rounded-xl p-8 border border-gray-700 hover:border-green-500 transition-all duration-300"
              >
                <h3 className="text-2xl font-semibold mb-4 text-green-400">{useCase.title}</h3>
                <p className="text-gray-300 text-lg">{useCase.description}</p>
              </motion.div>
>>>>>>> origin/cursor/website-audit-and-enhancement-efd3
            ))}
=======
      {/* Features Section */}
      <section className="py-20 px-4 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            Autonomous Capabilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 hover:border-zion-cyan/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mb-6">
                <Bot className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">AI-Powered Automation</h3>
              <p className="text-zion-slate-light">
                Intelligent automation that learns from your business processes and optimizes them continuously
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 hover:border-zion-cyan/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Real-Time Operations</h3>
              <p className="text-zion-slate-light">
                Monitor and control your business operations in real-time with instant alerts and responses
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 hover:border-zion-cyan/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Performance Optimization</h3>
              <p className="text-zion-slate-light">
                Continuously optimize performance metrics and resource allocation for maximum efficiency
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 hover:border-zion-cyan/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Security & Compliance</h3>
              <p className="text-zion-slate-light">
                Built-in security protocols and compliance monitoring for enterprise-grade protection
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 hover:border-zion-cyan/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Team Collaboration</h3>
              <p className="text-zion-slate-light">
                Seamless collaboration between human teams and AI systems for optimal results
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 hover:border-zion-cyan/50 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Global Operations</h3>
              <p className="text-zion-slate-light">
                Manage operations across multiple locations and time zones with unified control
              </p>
            </div>
=======
      {/* Automation Modules */}
      <section className="py-20 bg-black/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Automation Modules
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive automation solutions for every aspect of your business
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "HR & Recruitment",
                description: "Automate candidate screening, onboarding, and performance management"
              },
              {
                icon: BarChart3,
                title: "Financial Operations",
                description: "Automated invoicing, expense tracking, and financial reporting"
              },
              {
                icon: Globe,
                title: "Customer Support",
                description: "24/7 AI-powered customer service and ticket management"
              },
              {
                icon: Settings,
                title: "IT Infrastructure",
                description: "Automated monitoring, maintenance, and security updates"
              },
              {
                icon: TrendingUp,
                title: "Sales & Marketing",
                description: "Lead generation, follow-ups, and campaign automation"
              },
              {
                icon: Shield,
                title: "Compliance & Security",
                description: "Automated compliance monitoring and security threat detection"
              }
            ].map((module, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-blue-400/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center mb-6">
                  <module.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{module.title}</h3>
                <p className="text-gray-300">{module.description}</p>
              </motion.div>
            ))}
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-20ee
=======
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Autonomous Business Capabilities
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Experience the future of business operations with intelligent automation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-green-500 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mb-6">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">AI Decision Making</h3>
              <p className="text-gray-400">
                Autonomous AI agents that make intelligent business decisions based on real-time data and market conditions.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-green-500 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Process Automation</h3>
              <p className="text-gray-400">
                End-to-end workflow automation that eliminates manual tasks and optimizes business processes.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-green-500 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Risk Management</h3>
              <p className="text-gray-400">
                Proactive risk assessment and mitigation through continuous monitoring and predictive analytics.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-green-500 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Performance Optimization</h3>
              <p className="text-gray-400">
                Continuous optimization of business metrics and KPIs through machine learning and data analysis.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-green-500 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mb-6">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">24/7 Operations</h3>
              <p className="text-gray-400">
                Round-the-clock business operations with intelligent monitoring and automated incident response.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-green-500 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-600 rounded-lg flex items-center justify-center mb-6">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Real-Time Analytics</h3>
              <p className="text-gray-400">
                Live business intelligence and predictive analytics for data-driven decision making.
              </p>
            </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-a260
          </div>
        </div>
      </section>

<<<<<<< HEAD
<<<<<<< HEAD
      {/* Business Areas Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            Business Operations Covered
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-zion-cyan">Finance & Accounting</h3>
              <p className="text-zion-slate-light text-lg">
                Automated financial reporting, expense management, and budget optimization
              </p>
              <ul className="space-y-2 text-zion-slate-light">
                <li>• Automated invoicing and payments</li>
                <li>• Real-time financial reporting</li>
                <li>• Expense tracking and approval</li>
                <li>• Budget forecasting and management</li>
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-zion-cyan">Human Resources</h3>
              <p className="text-zion-slate-light text-lg">
                Streamlined HR processes from recruitment to performance management
              </p>
              <ul className="space-y-2 text-zion-slate-light">
                <li>• Automated recruitment workflows</li>
                <li>• Performance tracking and reviews</li>
                <li>• Payroll and benefits management</li>
                <li>• Training and development tracking</li>
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-zion-cyan">Supply Chain Management</h3>
              <p className="text-zion-slate-light text-lg">
                End-to-end supply chain optimization and inventory management
              </p>
              <ul className="space-y-2 text-zion-slate-light">
                <li>• Demand forecasting and planning</li>
                <li>• Inventory optimization</li>
                <li>• Supplier relationship management</li>
                <li>• Logistics and delivery tracking</li>
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-zion-cyan">Customer Service</h3>
              <p className="text-zion-slate-light text-lg">
                AI-powered customer support and relationship management
              </p>
              <ul className="space-y-2 text-zion-slate-light">
                <li>• Automated customer support</li>
                <li>• Customer behavior analysis</li>
                <li>• Personalized marketing campaigns</li>
                <li>• Customer satisfaction monitoring</li>
              </ul>
=======
      {/* Use Cases Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Business Applications
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Discover how autonomous operations transform different business functions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Target className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Supply Chain Management</h3>
                  <p className="text-gray-400">
                    Autonomous inventory optimization, demand forecasting, and logistics coordination.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Users className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Customer Service</h3>
                  <p className="text-gray-400">
                    AI-powered customer support with intelligent routing and automated issue resolution.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <TrendingUp className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Financial Operations</h3>
                  <p className="text-gray-400">
                    Automated accounting, expense management, and financial reporting with AI oversight.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Building className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">HR & Recruitment</h3>
                  <p className="text-gray-400">
                    Intelligent candidate screening, performance monitoring, and automated HR processes.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Shield className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Compliance & Governance</h3>
                  <p className="text-gray-400">
                    Automated compliance monitoring, audit preparation, and regulatory reporting.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <BarChart3 className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Sales & Marketing</h3>
                  <p className="text-gray-400">
                    Autonomous lead generation, campaign optimization, and sales process automation.
                  </p>
                </div>
              </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-a260
            </div>
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Analytics Dashboard Section */}
      <section className="py-20 px-4 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            Intelligent Analytics Dashboard
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-6">
                <BarChart3 className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Real-Time Metrics</h3>
              <p className="text-zion-slate-light">
                Monitor key performance indicators and business metrics in real-time
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-6">
                <Settings className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Automated Optimization</h3>
              <p className="text-zion-slate-light">
                AI continuously optimizes operations based on performance data
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Predictive Insights</h3>
              <p className="text-zion-slate-light">
                Get predictive analytics and insights for better decision making
              </p>
            </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-3be4
=======
      {/* ROI Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Proven Results
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See the impact of autonomous operations on your bottom line
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { metric: "85%", description: "Reduction in operational costs" },
              { metric: "24/7", description: "Continuous business operations" },
              { metric: "300%", description: "Increase in productivity" }
            ].map((result, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center border border-white/20"
              >
                <div className="text-6xl font-bold text-blue-400 mb-4">{result.metric}</div>
                <p className="text-xl text-gray-300">{result.description}</p>
              </motion.div>
            ))}
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-20ee
=======
      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Business Benefits
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Transform your business operations with autonomous AI capabilities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-r from-green-500/10 to-emerald-600/10 rounded-2xl p-8 border border-green-500/20">
              <h3 className="text-2xl font-semibold text-white mb-4">Operational Efficiency</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Reduce operational costs by up to 40%</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Eliminate manual errors and bottlenecks</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>24/7 automated operations</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Scalable business processes</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-blue-500/10 to-cyan-600/10 rounded-2xl p-8 border border-blue-500/20">
              <h3 className="text-2xl font-semibold text-white mb-4">Strategic Advantages</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Data-driven decision making</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Predictive analytics and insights</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Competitive market advantage</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Future-ready business model</span>
                </li>
              </ul>
            </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-a260
          </div>
        </div>
      </section>

      {/* CTA Section */}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
=======
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
>>>>>>> origin/cursor/website-audit-and-enhancement-efd3
=======
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-20ee
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
<<<<<<< HEAD
<<<<<<< HEAD
            <h2 className="text-3xl font-bold text-white sm:text-4xl mb-6">
              Ready to Automate Your Operations?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the autonomous business revolution and transform your operations today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105">
                Get Started Now
              </button>
              <button className="px-8 py-4 border border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </motion.div>
=======
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Brain, 
  Zap, 
  Shield, 
  Users, 
  Target, 
  BarChart3,
  ArrowRight,
  CheckCircle,
  Star,
  ExternalLink,
  Phone,
  Mail,
  MapPin,
  Bot,
  Workflow,
  Settings,
  Monitor,
  TrendingUp,
  DollarSign,
  Clock,
  Award
} from 'lucide-react';

export default function AutonomousBusinessOperationsPlatform() {
  const [selectedTab, setSelectedTab] = useState('overview');

  const features = [
    {
      icon: Bot,
      title: 'AI-Powered Automation',
      description: 'Intelligent automation that learns and adapts to your business processes',
      benefits: ['80% reduction in manual tasks', 'Adaptive learning algorithms', '24/7 operation']
    },
    {
      icon: Workflow,
      title: 'Process Orchestration',
      description: 'Seamlessly coordinate complex business workflows across departments',
      benefits: ['End-to-end automation', 'Real-time monitoring', 'Exception handling']
    },
    {
      icon: BarChart3,
      title: 'Intelligent Analytics',
      description: 'Advanced analytics and insights to optimize business operations',
      benefits: ['Predictive insights', 'Performance optimization', 'Data-driven decisions']
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with compliance and audit trails',
      benefits: ['SOC2 compliance', 'End-to-end encryption', 'Audit logging']
    }
  ];

  const useCases = [
    {
      title: 'Supply Chain Optimization',
      description: 'Autonomous management of inventory, suppliers, and logistics',
      roi: '35% cost reduction',
      icon: Target
    },
    {
      title: 'Customer Service Automation',
      description: 'AI-driven customer support with human escalation',
      roi: '60% faster resolution',
      icon: Users
    },
    {
      title: 'Financial Operations',
      description: 'Automated invoicing, payments, and financial reporting',
      roi: '50% time savings',
      icon: DollarSign
    },
    {
      title: 'HR Process Management',
      description: 'Streamlined hiring, onboarding, and employee management',
      roi: '40% efficiency gain',
      icon: Brain
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$2,499',
      period: '/month',
      description: 'Perfect for small to medium businesses',
      features: [
        'Up to 50 automated processes',
        'Basic analytics dashboard',
        'Email support',
        'Standard integrations',
        '1 admin user'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$4,999',
      period: '/month',
      description: 'Ideal for growing enterprises',
      features: [
        'Up to 200 automated processes',
        'Advanced analytics & reporting',
        'Priority support',
        'Custom integrations',
        '5 admin users',
        'AI optimization engine'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large-scale operations',
      features: [
        'Unlimited automated processes',
        'Real-time analytics & AI insights',
        'Dedicated support team',
        'Custom development',
        'Unlimited users',
        'White-label options'
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple">
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-32 pb-16">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-zion-cyan/20 text-zion-cyan border-zion-cyan/30">
            🤖 Autonomous Business Operations
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Autonomous Business
            <span className="block bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
              Operations Platform
            </span>
          </h1>
          <p className="text-xl text-zion-cyan-light max-w-3xl mx-auto mb-8">
            Transform your business with AI-powered autonomous operations that work 24/7, 
            learn continuously, and scale automatically.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-zion-cyan hover:bg-zion-cyan/90 text-white">
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
              <Phone className="mr-2 w-5 h-5" />
              Schedule Demo
            </Button>
=======
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/50 to-purple-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready for Autonomous Operations?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the autonomous revolution and transform your business operations. 
            Our expert team is ready to help you implement cutting-edge autonomous solutions.
=======
      <section className="py-20 px-4 bg-gradient-to-r from-zion-purple to-zion-cyan">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Automate Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join the autonomous business revolution and let AI handle your operations 24/7
>>>>>>> origin/cursor/website-audit-and-enhancement-3be4
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
<<<<<<< HEAD
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Schedule Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              Explore All Services
=======
              className="bg-white text-zion-purple hover:bg-zion-slate-light px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              Start Automation Journey
            </Link>
            <Link
              to="/pricing"
              className="border-2 border-white text-white hover:bg-white hover:text-zion-purple px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              View Pricing
>>>>>>> origin/cursor/website-audit-and-enhancement-3be4
            </Link>
>>>>>>> origin/cursor/website-audit-and-enhancement-98d1
=======
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-green-500/10 to-emerald-600/10 rounded-2xl p-12 text-center border border-green-500/20">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Automate Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join the autonomous business revolution and transform your operations with 
              AI-powered automation and intelligent decision making.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg text-white font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-200 transform hover:scale-105"
              >
                Schedule a Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center px-8 py-4 border border-green-500 text-green-400 rounded-lg font-semibold hover:bg-green-500 hover:text-white transition-all duration-200"
              >
                View Pricing
              </Link>
            </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-a260
          </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-ee8a
=======
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Automate Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the autonomous business revolution and transform your operations with AI-powered intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-green-500/30">
                Contact Sales
              </button>
              <button className="border border-green-500 text-green-400 hover:bg-green-500 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                Download Case Study
              </button>
            </div>
          </motion.div>
>>>>>>> origin/cursor/website-audit-and-enhancement-efd3
=======
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Automate Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join thousands of businesses already experiencing the future of autonomous operations
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-10 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="border-2 border-blue-400 text-blue-400 px-10 py-4 rounded-lg font-semibold text-lg hover:bg-blue-400 hover:text-white transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </motion.div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-20ee
        </div>
<<<<<<< HEAD

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {[
            { value: '85%', label: 'Cost Reduction' },
            { value: '24/7', label: 'Operation' },
            { value: '300%', label: 'ROI Average' },
            { value: '99.9%', label: 'Uptime' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-zion-cyan mb-2">{stat.value}</div>
              <div className="text-zion-slate-light">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content Tabs */}
      <div className="container mx-auto px-4 py-16">
        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-white/10 backdrop-blur-sm border-zion-cyan/30">
            <TabsTrigger value="overview" className="text-zion-cyan data-[state=active]:bg-zion-cyan data-[state=active]:text-white">
              Overview
            </TabsTrigger>
            <TabsTrigger value="features" className="text-zion-cyan data-[state=active]:bg-zion-cyan data-[state=active]:text-white">
              Features
            </TabsTrigger>
            <TabsTrigger value="use-cases" className="text-zion-cyan data-[state=active]:bg-zion-cyan data-[state=active]:text-white">
              Use Cases
            </TabsTrigger>
            <TabsTrigger value="pricing" className="text-zion-cyan data-[state=active]:bg-zion-cyan data-[state=active]:text-white">
              Pricing
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="mt-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">
                  The Future of Business Operations
                </h2>
                <p className="text-lg text-zion-cyan-light mb-6">
                  Our Autonomous Business Operations Platform leverages advanced AI to create 
                  self-managing business processes that adapt, learn, and optimize continuously.
                </p>
                <div className="space-y-4">
                  {[
                    'AI-powered process automation',
                    'Intelligent decision making',
                    'Continuous learning and optimization',
                    'Seamless integration with existing systems',
                    'Real-time monitoring and analytics'
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-zion-cyan" />
                      <span className="text-zion-slate-light">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <Card className="bg-white/10 backdrop-blur-sm border-zion-cyan/30">
                  <CardHeader>
                    <CardTitle className="text-white">Platform Benefits</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      { icon: TrendingUp, label: 'Increased Efficiency', value: '85%' },
                      { icon: DollarSign, label: 'Cost Savings', value: '$2.5M avg' },
                      { icon: Clock, label: 'Time Reduction', value: '70%' },
                      { icon: Award, label: 'Quality Improvement', value: '95%' }
                    ].map((benefit, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <benefit.icon className="w-5 h-5 text-zion-cyan" />
                          <span className="text-zion-slate-light">{benefit.label}</span>
                        </div>
                        <span className="text-white font-semibold">{benefit.value}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Features Tab */}
          <TabsContent value="features" className="mt-8">
            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="bg-white/10 backdrop-blur-sm border-zion-cyan/30 hover:border-zion-cyan/50 transition-colors">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="p-2 bg-zion-cyan/20 rounded-lg">
                        <feature.icon className="w-6 h-6 text-zion-cyan" />
                      </div>
                      <CardTitle className="text-white">{feature.title}</CardTitle>
                    </div>
                    <CardDescription className="text-zion-slate-light">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-zion-cyan" />
                          <span className="text-sm text-zion-slate-light">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Use Cases Tab */}
          <TabsContent value="use-cases" className="mt-8">
            <div className="grid md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <Card key={index} className="bg-white/10 backdrop-blur-sm border-zion-cyan/30 hover:border-zion-cyan/50 transition-colors">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <useCase.icon className="w-6 h-6 text-zion-cyan" />
                        <CardTitle className="text-white">{useCase.title}</CardTitle>
                      </div>
                      <Badge className="bg-zion-cyan/20 text-zion-cyan border-zion-cyan/30">
                        {useCase.roi}
                      </Badge>
                    </div>
                    <CardDescription className="text-zion-slate-light">
                      {useCase.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Pricing Tab */}
          <TabsContent value="pricing" className="mt-8">
            <div className="grid md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <Card key={index} className={`bg-white/10 backdrop-blur-sm border-zion-cyan/30 hover:border-zion-cyan/50 transition-colors relative ${plan.popular ? 'ring-2 ring-zion-cyan' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-zion-cyan text-white">Most Popular</Badge>
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-white">{plan.name}</CardTitle>
                    <div className="text-3xl font-bold text-zion-cyan">
                      {plan.price}
                      <span className="text-sm font-normal text-zion-slate-light">{plan.period}</span>
                    </div>
                    <CardDescription className="text-zion-slate-light">
                      {plan.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-3">
                          <CheckCircle className="w-4 h-4 text-zion-cyan" />
                          <span className="text-sm text-zion-slate-light">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full bg-zion-cyan hover:bg-zion-cyan/90 text-white">
                      Get Started
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <Card className="bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 backdrop-blur-sm border-zion-cyan/30">
          <CardContent className="text-center py-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business Operations?
            </h2>
            <p className="text-zion-cyan-light mb-8 max-w-2xl mx-auto">
              Join hundreds of companies already using our platform to automate and optimize their operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-zion-cyan hover:bg-zion-cyan/90 text-white">
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
                <Phone className="mr-2 w-5 h-5" />
                Contact Sales
              </Button>
            </div>
            
            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mt-8 text-sm text-zion-slate-light">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Delaware, USA</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
=======
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg text-white font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-200 transform hover:scale-105"
              >
                <span>Schedule a Demo</span>
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center px-8 py-4 border border-green-500 text-green-400 rounded-lg font-semibold hover:bg-green-500 hover:text-white transition-all duration-200"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
>>>>>>> origin/cursor/website-audit-and-enhancement-9d3a
=======
      </section>
    </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-a260
  );
}