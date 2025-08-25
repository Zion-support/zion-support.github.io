import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { motion } from 'framer-motion';
import { 
  ServerIcon, 
  ShieldCheckIcon, 
  ChartBarIcon, 
  CogIcon,
  ClockIcon,
  CurrencyDollarIcon,
  GlobeAltIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';
=======
import { Link } from 'react-router-dom';
import { 
  Server, 
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
  HardDrive,
  Monitor
} from 'lucide-react';
>>>>>>> origin/cursor/website-audit-and-enhancement-98d1
=======
import { motion } from 'framer-motion';
import { Monitor, Shield, TrendingUp, Database, Network, ArrowRight, Cpu, HardDrive } from 'lucide-react';
>>>>>>> origin/cursor/website-audit-and-enhancement-efd3

const AIPoweredITAssetManagement = () => {
  const features = [
    {
<<<<<<< HEAD
      icon: ServerIcon,
      title: "Intelligent Asset Discovery",
<<<<<<< HEAD
      description: "AI-powered automatic discovery and classification of all IT assets across your infrastructure."
    },
    {
      icon: ShieldCheckIcon,
      title: "Security & Compliance",
      description: "Advanced security monitoring and automated compliance reporting for all IT assets."
    },
    {
      icon: ChartBarIcon,
      title: "Predictive Analytics",
      description: "AI-driven insights for asset lifecycle management and optimization recommendations."
    },
    {
      icon: CogIcon,
      title: "Automated Maintenance",
      description: "Smart scheduling and automated maintenance tasks based on asset health and usage patterns."
    },
    {
      icon: ClockIcon,
      title: "Real-time Monitoring",
      description: "24/7 monitoring of asset performance, health, and security status with instant alerts."
    },
    {
      icon: CurrencyDollarIcon,
      title: "Cost Optimization",
      description: "AI-powered cost analysis and optimization recommendations for IT asset management."
=======
      description: "AI-powered discovery and mapping of all IT assets across your infrastructure"
    },
    {
      icon: Zap,
      title: "Real-time Monitoring",
      description: "Continuous monitoring and alerting for all IT assets and systems"
    },
    {
      icon: Cpu,
      title: "Predictive Maintenance",
      description: "AI algorithms that predict equipment failures before they happen"
    },
    {
      icon: Database,
      title: "Centralized Management",
      description: "Single platform to manage all IT assets, licenses, and configurations"
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Comprehensive reporting and analytics for asset performance and utilization"
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Built-in security monitoring and compliance reporting for all assets"
    }
  ];

  const capabilities = [
    {
      title: "Hardware Asset Management",
      description: "Comprehensive tracking of all hardware assets from procurement to retirement",
      benefits: ["Inventory tracking", "Lifecycle management", "Depreciation tracking"]
    },
    {
      title: "Software License Management",
      description: "Intelligent software license tracking and optimization",
      benefits: ["License compliance", "Cost optimization", "Renewal management"]
    },
    {
      title: "Network Asset Management",
      description: "Complete network infrastructure mapping and monitoring",
      benefits: ["Network topology", "Performance monitoring", "Capacity planning"]
    },
    {
      title: "Cloud Asset Management",
      description: "Multi-cloud asset tracking and cost optimization",
      benefits: ["Cloud cost tracking", "Resource optimization", "Multi-cloud visibility"]
>>>>>>> origin/cursor/website-audit-and-enhancement-98d1
=======
      icon: Monitor,
      title: 'Real-time Asset Monitoring',
      description: 'Continuous monitoring of all IT assets with AI-powered anomaly detection and predictive maintenance.'
    },
    {
      icon: Shield,
      title: 'Intelligent Security',
      description: 'AI-driven threat detection and automated security response for all managed IT assets.'
    },
    {
      icon: TrendingUp,
      title: 'Performance Analytics',
      description: 'Advanced analytics and reporting for asset performance optimization and capacity planning.'
    },
    {
      icon: Database,
      title: 'Centralized Management',
      description: 'Single platform for managing all IT assets across your entire infrastructure.'
    },
    {
      icon: Network,
      title: 'Network Optimization',
      description: 'AI-powered network performance optimization and bandwidth management.'
    },
    {
      icon: Cpu,
      title: 'Resource Optimization',
      description: 'Intelligent resource allocation and workload balancing across your IT infrastructure.'
>>>>>>> origin/cursor/website-audit-and-enhancement-efd3
    }
  ];

  const benefits = [
<<<<<<< HEAD
<<<<<<< HEAD
    "Reduce IT asset costs by up to 35%",
    "Improve asset utilization by 50%",
    "Automate 80% of maintenance tasks",
    "Real-time security threat detection",
    "Predictive failure prevention",
    "Compliance automation"
  ];

  const assetTypes = [
    "Hardware Assets",
    "Software Licenses",
    "Cloud Resources",
    "Network Equipment",
    "Security Devices",
    "Mobile Devices",
    "Data Centers",
    "Virtual Machines"
=======
    "Reduced IT asset costs",
    "Improved security posture",
    "Enhanced compliance",
    "Better resource utilization",
    "Automated asset lifecycle",
    "Real-time visibility"
  ];

  const useCases = [
    {
      title: "Enterprise Organizations",
      description: "Manage complex IT infrastructures with thousands of assets"
    },
    {
      title: "Healthcare Institutions",
      description: "Ensure compliance and security for critical medical IT systems"
    },
    {
      title: "Financial Services",
      description: "Maintain security and compliance for financial IT infrastructure"
    },
    {
      title: "Educational Institutions",
      description: "Optimize IT resources across multiple campuses and departments"
=======
    'Reduced IT costs by 30-40%',
    'Improved asset utilization',
    'Predictive maintenance',
    'Enhanced security posture',
    'Automated compliance',
    'Real-time visibility'
  ];

  const assetTypes = [
    {
      title: 'Hardware Assets',
      description: 'Servers, workstations, networking equipment, and mobile devices with comprehensive lifecycle management.'
    },
    {
      title: 'Software Assets',
      description: 'License management, software deployment, and compliance tracking across your organization.'
    },
    {
      title: 'Cloud Resources',
      description: 'Multi-cloud resource monitoring, cost optimization, and performance management.'
    },
    {
      title: 'Network Infrastructure',
      description: 'Network devices, bandwidth monitoring, and connectivity optimization.'
>>>>>>> origin/cursor/website-audit-and-enhancement-efd3
    }
>>>>>>> origin/cursor/website-audit-and-enhancement-98d1
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
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
import { motion } from 'framer-motion';
import { Server, Shield, BarChart3, Zap, Users, Globe, Settings, Database } from 'lucide-react';

const AIPoweredITAssetManagement: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-emerald-600/20" />
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
              AI-Powered IT Asset
              <span className="block bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Management
              </span>
            </h1>
<<<<<<< HEAD
            <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your IT infrastructure with intelligent asset management. 
              Optimize costs, enhance security, and maximize efficiency.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="px-8 py-3 border border-green-400 text-green-400 font-semibold rounded-lg hover:bg-green-400 hover:text-white transition-all duration-300">
                Schedule Demo
              </button>
=======
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Server className="w-12 h-12 text-cyan-400 mr-3" />
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                AI-Powered IT Asset Management
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Transform your IT asset management with intelligent automation and AI-powered insights. 
              Gain complete visibility, optimize costs, and ensure compliance across your entire 
              technology infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                View All Services
              </Link>
>>>>>>> origin/cursor/website-audit-and-enhancement-98d1
=======
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-600 bg-clip-text text-transparent">
              AI-Powered IT Asset Management
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your IT infrastructure management with AI-powered asset monitoring, optimization, 
              and security. Gain complete visibility and control over your technology investments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30">
                Start Free Trial
              </button>
              <button className="border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Platform Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI-powered platform provides comprehensive IT asset management with intelligent automation, 
              security, and optimization capabilities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-gray-900/50">
        <div className="container mx-auto max-w-6xl">
=======
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Revolutionize your IT infrastructure with intelligent asset management. Monitor, optimize, and secure every device with AI-driven insights.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105">
                Start Managing
              </button>
              <button className="border-2 border-green-400 text-green-400 px-8 py-4 rounded-lg font-semibold hover:bg-green-400 hover:text-white transition-all duration-300">
                View Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Features */}
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
              <h3 className="text-2xl font-semibold mb-6 text-blue-400">Key Advantages</h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-gray-300">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-800/50 rounded-xl p-8 border border-gray-700">
              <h3 className="text-2xl font-semibold mb-6 text-blue-400">Cost Calculator</h3>
              <p className="text-gray-300 mb-6">
                Calculate your potential savings and ROI with our AI-powered asset management platform.
              </p>
              <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 flex items-center justify-center space-x-2">
                <span>Calculate Savings</span>
                <ArrowRight className="w-5 h-5" />
              </button>
>>>>>>> origin/cursor/website-audit-and-enhancement-efd3
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
<<<<<<< HEAD
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">
              Intelligent Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Discover how AI transforms traditional IT asset management into a smart, proactive system.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-green-400/50 transition-all duration-300"
              >
                <feature.icon className="h-12 w-12 text-green-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
=======
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Intelligent Asset Management Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI-powered platform provides comprehensive IT asset management capabilities 
              that adapt and learn from your infrastructure.
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
          </div>
        </div>
      </section>

<<<<<<< HEAD
<<<<<<< HEAD
      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">
              Measurable Impact
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              See the real results of AI-powered IT asset management on your organization.
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
                <ChartBarIcon className="h-6 w-6 text-green-400 flex-shrink-0" />
                <span className="text-white font-medium">{benefit}</span>
              </motion.div>
=======
      {/* Capabilities Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Asset Management
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From hardware to software, network to cloud, our platform manages every aspect 
              of your IT infrastructure.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700"
              >
                <h3 className="text-2xl font-semibold text-white mb-4">{capability.title}</h3>
                <p className="text-gray-300 mb-6">{capability.description}</p>
                <ul className="space-y-2">
                  {capability.benefits.map((benefit, benefitIndex) => (
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
      {/* Asset Types Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
=======
      {/* Asset Types Section */}
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
              Comprehensive Coverage
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Manage all types of IT assets from a single, intelligent platform.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {assetTypes.map((assetType, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-green-400/50 transition-all duration-300 text-center"
              >
                <ServerIcon className="h-8 w-8 text-green-400 mx-auto mb-3" />
                <span className="text-white font-medium">{assetType}</span>
              </motion.div>
=======
      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Key Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the transformative benefits of AI-powered IT asset management.
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
              Intelligent Asset Management
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Leverage AI to gain complete visibility and control over your IT infrastructure
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Server,
                title: "Asset Discovery",
                description: "Automatically discover and catalog all IT assets across your network"
              },
              {
                icon: Shield,
                title: "Security Monitoring",
                description: "Real-time threat detection and security posture assessment"
              },
              {
                icon: BarChart3,
                title: "Performance Analytics",
                description: "AI-powered insights into asset performance and optimization opportunities"
              },
              {
                icon: Zap,
                title: "Automated Maintenance",
                description: "Predictive maintenance scheduling and automated updates"
              },
              {
                icon: Users,
                title: "User Management",
                description: "Track asset usage and user access patterns"
              },
              {
                icon: Globe,
                title: "Global Visibility",
                description: "Manage assets across multiple locations and cloud environments"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-green-400/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
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
              Our IT asset management platform is designed for organizations of all sizes 
              across all industries.
=======
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Comprehensive Asset Coverage
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Manage all types of IT assets from a single, intelligent platform.
>>>>>>> origin/cursor/website-audit-and-enhancement-efd3
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<<<<<<< HEAD
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
            {assetTypes.map((assetType, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gray-800/50 rounded-xl p-8 border border-gray-700 hover:border-blue-500 transition-all duration-300"
              >
                <h3 className="text-2xl font-semibold mb-4 text-blue-400">{assetType.title}</h3>
                <p className="text-gray-300 text-lg">{assetType.description}</p>
              </motion.div>
>>>>>>> origin/cursor/website-audit-and-enhancement-efd3
=======
      {/* Benefits Section */}
      <section className="py-20 bg-black/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose AI-Powered Management?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your IT operations with intelligent automation and insights
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { metric: "90%", description: "Reduction in manual asset tracking" },
              { metric: "24/7", description: "Continuous monitoring and alerts" },
              { metric: "60%", description: "Faster incident response time" },
              { metric: "40%", description: "Cost savings on IT operations" }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center border border-white/20"
              >
                <div className="text-6xl font-bold text-green-400 mb-4">{benefit.metric}</div>
                <p className="text-xl text-gray-300">{benefit.description}</p>
              </motion.div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-20ee
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
              Ready to Optimize Your IT Assets?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the AI revolution in IT asset management and transform your infrastructure today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105">
                Get Started Now
              </button>
              <button className="px-8 py-4 border border-green-400 text-green-400 font-semibold rounded-lg hover:bg-green-400 hover:text-white transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </motion.div>
=======
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/50 to-purple-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your IT Asset Management?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join organizations that have revolutionized their IT asset management with AI-powered 
            automation. Our expert team is ready to help you implement intelligent asset solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Schedule Demo
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              Explore All Services
            </Link>
          </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-98d1
=======
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Optimize Your IT Assets?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Transform your IT infrastructure management with AI-powered intelligence and automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30">
                Contact Sales
              </button>
              <button className="border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                Download Whitepaper
              </button>
            </div>
          </motion.div>
>>>>>>> origin/cursor/website-audit-and-enhancement-efd3
=======
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your IT Management?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join leading organizations using AI to revolutionize their IT asset management
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-10 py-4 rounded-lg font-semibold text-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="border-2 border-green-400 text-green-400 px-10 py-4 rounded-lg font-semibold text-lg hover:bg-green-400 hover:text-white transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </motion.div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-20ee
        </div>
      </section>
    </div>
  );
};

export default AIPoweredITAssetManagement;