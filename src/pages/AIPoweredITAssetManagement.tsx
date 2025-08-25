import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
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
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
import { Cpu, Database, Shield, TrendingUp, Users, Globe, ArrowRight, Network, Code, BarChart3 } from 'lucide-react';
import SEOHead from '../components/SEOHead';
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-4867
=======
import { Helmet } from 'react-helmet-async';
import { 
  Database, 
  Zap, 
  Target, 
  Shield, 
  Rocket, 
  Globe,
  BarChart3,
  Users,
  ArrowRight,
  CheckCircle,
  Star,
  Lightbulb,
  Code,
  Network,
  Cloud,
  Lock,
  Eye,
  Sparkles,
  TrendingUp,
  Settings,
  Cpu,
  Brain,
  Server,
  HardDrive,
  Monitor,
  Smartphone,
  Printer,
  Router
} from 'lucide-react';
>>>>>>> origin/cursor/website-audit-and-enhancement-2b07

const AIPoweredITAssetManagement = () => {
  const features = [
    {
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
      icon: Database,
      title: "Intelligent Asset Discovery",
      description: "AI-powered automatic discovery and classification of all IT assets across your network infrastructure."
>>>>>>> origin/cursor/website-audit-and-enhancement-2b07
    },
    {
      icon: Zap,
      title: "Real-time Monitoring",
<<<<<<< HEAD
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
=======
      description: "Continuous monitoring of asset health, performance, and utilization with instant alerts and notifications."
    },
    {
      icon: Target,
      title: "Predictive Maintenance",
      description: "AI algorithms predict potential failures and maintenance needs before they impact your operations."
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Automated security monitoring, vulnerability assessment, and compliance reporting for all assets."
    },
    {
      icon: Rocket,
      title: "Lifecycle Management",
      description: "Complete asset lifecycle tracking from procurement to retirement with optimization recommendations."
    },
    {
      icon: Globe,
      title: "Multi-Platform Support",
      description: "Unified management across Windows, Linux, macOS, cloud platforms, and mobile devices."
>>>>>>> origin/cursor/website-audit-and-enhancement-2b07
    }
  ];

  const capabilities = [
    {
<<<<<<< HEAD
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
=======
      icon: Cpu,
      title: "Intelligent Asset Discovery",
      description: "Automatically discover and catalog all IT assets across your infrastructure."
    },
    {
      icon: Database,
      title: "Smart Inventory Management",
      description: "AI-powered inventory tracking with predictive maintenance scheduling."
    },
    {
      icon: Shield,
      title: "Security Compliance",
      description: "Automated security audits and compliance monitoring for all assets."
    },
    {
      icon: TrendingUp,
      title: "Performance Analytics",
      description: "Real-time performance monitoring and optimization recommendations."
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-4867
=======
      icon: Server,
      title: "Servers & Infrastructure",
      description: "Physical and virtual servers, storage systems, and network infrastructure management."
    },
    {
      icon: Monitor,
      title: "End User Devices",
      description: "Desktops, laptops, tablets, and mobile devices with user assignment tracking."
    },
    {
      icon: Network,
      title: "Network Equipment",
      description: "Routers, switches, firewalls, and wireless access points with performance monitoring."
    },
    {
      icon: Printer,
      title: "Peripheral Devices",
      description: "Printers, scanners, and other office equipment with usage analytics."
    },
    {
      icon: Cloud,
      title: "Cloud Resources",
      description: "Cloud instances, storage, and services across multiple cloud providers."
    },
    {
      icon: HardDrive,
      title: "Software & Licenses",
      description: "Application tracking, license management, and software deployment automation."
>>>>>>> origin/cursor/website-audit-and-enhancement-2b07
    }
  ];

  const benefits = [
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    "Reduce IT asset costs by up to 35%",
    "Improve asset utilization by 50%",
    "Automate 80% of maintenance tasks",
    "Real-time security threat detection",
    "Predictive failure prevention",
    "Compliance automation"
=======
    {
      title: "Cost Optimization",
      description: "Reduce IT costs by identifying underutilized assets and optimizing resource allocation."
    },
    {
      title: "Risk Mitigation",
      description: "Proactively identify security vulnerabilities and compliance issues."
    },
    {
      title: "Operational Efficiency",
      description: "Streamline IT operations with automated asset management workflows."
    },
    {
      title: "Strategic Planning",
      description: "Data-driven insights for informed IT investment and planning decisions."
=======
    "Complete visibility into all IT assets across your organization",
    "Reduced asset downtime through predictive maintenance",
    "Optimized asset utilization and cost savings",
    "Automated compliance reporting and audit preparation",
    "Streamlined procurement and retirement processes",
    "Enhanced security through continuous monitoring"
  ];

  const capabilities = [
    {
      icon: Brain,
      title: "AI-Powered Analytics",
      description: "Machine learning algorithms analyze asset data to provide insights and optimization recommendations."
    },
    {
      icon: BarChart3,
      title: "Advanced Reporting",
      description: "Comprehensive dashboards and reports for asset performance, costs, and compliance."
    },
    {
      icon: Settings,
      title: "Automated Workflows",
      description: "Streamlined processes for asset procurement, deployment, maintenance, and retirement."
    },
    {
      icon: Eye,
      title: "Real-time Visibility",
      description: "Live monitoring and tracking of all assets with instant status updates and alerts."
    },
    {
      icon: Lock,
      title: "Security Management",
      description: "Integrated security monitoring, vulnerability assessment, and threat detection."
    },
    {
      icon: TrendingUp,
      title: "Performance Optimization",
      description: "Continuous optimization of asset performance and resource utilization."
>>>>>>> origin/cursor/website-audit-and-enhancement-2b07
    }
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-4867
  ];

  const assetTypes = [
    "Hardware Assets",
    "Software Licenses",
<<<<<<< HEAD
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
=======
import { Database, Brain, Shield, TrendingUp, ArrowRight, Users, Target, Clock, BarChart3, Zap } from 'lucide-react';
>>>>>>> origin/cursor/website-audit-and-enhancement-a260

export default function AIPoweredITAssetManagement() {
  return (
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
import { Helmet } from 'react-helmet-async';
import { Cpu, Shield, Database, Network, TrendingUp, ArrowRight, Star, Rocket, Globe, Brain, Zap, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const AIPoweredITAssetManagement: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI-Powered IT Asset Management - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered IT asset management platform that automatically tracks, monitors, and optimizes your entire IT infrastructure. Reduce costs and improve efficiency." />
        <meta name="keywords" content="AI IT asset management, IT asset tracking, IT infrastructure management, AI-powered IT, asset optimization, IT cost reduction" />
=======
    <>
      <Helmet>
        <title>AI-Powered IT Asset Management - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered IT asset management platform that provides complete visibility, predictive maintenance, and automated lifecycle management for all your technology assets." />
        <meta name="keywords" content="IT asset management, AI asset management, IT infrastructure management, asset tracking, predictive maintenance, IT compliance" />
>>>>>>> origin/cursor/website-audit-and-enhancement-2b07
        <link rel="canonical" href="https://ziontechgroup.com/ai-powered-it-asset-management" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)]"></div>
<<<<<<< HEAD
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-4">
                  <Cpu className="w-10 h-10 text-white" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                AI-Powered IT Asset
                <span className="block bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
                  Management
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Transform your IT infrastructure with intelligent asset management powered by AI. 
                Automatically track, monitor, and optimize every piece of technology in your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg text-white font-semibold hover:from-blue-600 hover:to-indigo-700 transition-all duration-200 transform hover:scale-105"
                >
                  <span>Get Started</span>
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/services/it-infrastructure"
                  className="inline-flex items-center px-8 py-4 border border-blue-500 text-blue-400 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition-all duration-200"
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
                Intelligent Asset Management
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI platform provides comprehensive visibility and control over your entire 
                IT infrastructure with predictive analytics and automated optimization.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-blue-500 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">AI-Powered Discovery</h3>
                <p className="text-gray-300">
                  Automatically discover and catalog all IT assets across your network with intelligent scanning and classification.
                </p>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-blue-500 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Real-time Monitoring</h3>
                <p className="text-gray-300">
                  Continuous monitoring of asset health, performance, and utilization with instant alerts and notifications.
                </p>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-blue-500 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Predictive Analytics</h3>
                <p className="text-gray-300">
                  AI-driven insights predict maintenance needs, capacity requirements, and potential issues before they occur.
                </p>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-blue-500 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Security & Compliance</h3>
                <p className="text-gray-300">
                  Comprehensive security monitoring, compliance tracking, and automated policy enforcement across all assets.
                </p>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-blue-500 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center mb-4">
                  <Database className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Lifecycle Management</h3>
                <p className="text-gray-300">
                  Complete asset lifecycle tracking from procurement to retirement with automated depreciation and replacement planning.
                </p>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-blue-500 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                  <Network className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Network Mapping</h3>
                <p className="text-gray-300">
                  Visual network topology mapping with real-time asset relationships and dependency tracking.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Asset Types Section */}
        <section className="py-20 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Comprehensive Asset Coverage
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our platform manages every type of IT asset across your organization, 
                from hardware to software and everything in between.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Star className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Hardware Assets</h3>
                    <p className="text-gray-300">
                      Servers, workstations, laptops, mobile devices, networking equipment, 
                      storage devices, and peripherals with detailed specifications and warranty tracking.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Rocket className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Software Assets</h3>
                    <p className="text-gray-300">
                      Operating systems, applications, databases, development tools, and cloud services 
                      with license management and compliance tracking.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Users className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">User Assets</h3>
                    <p className="text-gray-300">
                      User accounts, access rights, device assignments, and resource allocations 
                      with automated provisioning and deprovisioning.
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
                    <h3 className="text-xl font-semibold text-white mb-2">Virtual Assets</h3>
                    <p className="text-gray-300">
                      Virtual machines, containers, cloud instances, and virtual networks 
                      with resource utilization and performance monitoring.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Globe className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Cloud Assets</h3>
                    <p className="text-gray-300">
                      Cloud services, APIs, storage buckets, and serverless functions 
                      with cost tracking and optimization recommendations.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Shield className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Security Assets</h3>
                    <p className="text-gray-300">
                      Firewalls, antivirus software, encryption keys, certificates, and security policies 
                      with compliance monitoring and threat detection.
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
                Transform Your IT Operations
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience unprecedented efficiency, cost savings, and control over your 
                IT infrastructure with AI-powered asset management.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">40%</h3>
                <p className="text-gray-300">Reduction in IT Costs</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">90%</h3>
                <p className="text-gray-300">Faster Asset Discovery</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">99.9%</h3>
                <p className="text-gray-300">Compliance Rate</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">60%</h3>
                <p className="text-gray-300">Improved Efficiency</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-900/50">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Optimize Your IT Assets?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the future of IT asset management with our AI-powered platform that 
              provides complete visibility and control over your technology infrastructure.
>>>>>>> origin/cursor/website-audit-and-enhancement-9d3a
=======
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)]"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4">
                <Database className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI-Powered IT Asset
              <span className="block bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
                Management
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Revolutionize your IT infrastructure management with intelligent asset tracking, 
              predictive maintenance, and automated optimization powered by artificial intelligence.
>>>>>>> origin/cursor/website-audit-and-enhancement-a260
=======
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.1),transparent_50%)]"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-4">
                <Database className="w-8 h-8 text-white" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI-Powered IT Asset
              <span className="block bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Management
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Transform your IT asset management with AI-powered intelligence. Get complete visibility, 
              predictive maintenance, and automated lifecycle management for all your technology assets 
              across the enterprise.
>>>>>>> origin/cursor/website-audit-and-enhancement-2b07
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
<<<<<<< HEAD
              <Link
                to="/contact"
<<<<<<< HEAD
<<<<<<< HEAD
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
=======
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg text-white font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
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
=======
              <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border-2 border-purple-500/50 text-purple-400 hover:bg-purple-500/10 font-semibold rounded-xl transition-all duration-300">
                Schedule Demo
>>>>>>> origin/cursor/website-audit-and-enhancement-2b07
              </button>
              <button className="border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                Schedule Demo
              </button>
=======
                to="/services/it-infrastructure"
                className="inline-flex items-center px-8 py-4 border border-indigo-500 text-indigo-400 rounded-lg font-semibold hover:bg-indigo-500 hover:text-white transition-all duration-200"
              >
                Learn More
              </Link>
            </div>
=======
    "Network Infrastructure",
    "Cloud Resources",
    "Security Devices",
    "Mobile Devices"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      <SEOHead 
        title="AI-Powered IT Asset Management - Zion Tech Group"
        description="Revolutionary AI-powered platform for comprehensive IT asset management, optimization, and security compliance."
        keywords="IT asset management, AI asset tracking, IT inventory, asset optimization, IT compliance, AI management"
      />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <div className="p-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full">
              <Cpu className="h-12 w-12 text-white" />
            </div>
          </div>
<<<<<<< HEAD
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            AI-Powered IT Asset Management
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your IT operations with our revolutionary AI-powered platform that provides 
            comprehensive asset management, optimization, and security compliance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/services/it-infrastructure"
              className="inline-flex items-center px-8 py-4 border-2 border-cyan-500 text-cyan-500 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Revolutionary Features
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our platform combines cutting-edge AI with comprehensive asset management capabilities.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-500 transition-all duration-300">
                <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg w-fit mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-4867
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Intelligent Asset Management Features
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Harness the power of AI to transform your IT asset lifecycle management
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-indigo-500 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mb-6">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">AI Asset Discovery</h3>
              <p className="text-gray-400">
                Automatically discover and catalog all IT assets across your network with intelligent scanning and classification.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-indigo-500 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Predictive Maintenance</h3>
              <p className="text-gray-400">
                AI-powered predictive analytics to identify potential hardware failures before they occur.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-indigo-500 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Security Monitoring</h3>
              <p className="text-gray-400">
                Continuous security monitoring and threat detection across all IT assets with AI-powered analysis.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-indigo-500 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Performance Optimization</h3>
              <p className="text-gray-400">
                Intelligent optimization of asset performance and resource allocation based on usage patterns.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-indigo-500 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-600 rounded-lg flex items-center justify-center mb-6">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Lifecycle Management</h3>
              <p className="text-gray-400">
                Automated tracking of asset lifecycle from procurement to retirement with intelligent recommendations.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-indigo-500 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-6">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Real-Time Analytics</h3>
              <p className="text-gray-400">
                Live dashboards and reports providing comprehensive insights into asset utilization and performance.
              </p>
            </div>
=======
      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Key Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Discover how AI-powered asset management transforms your IT operations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
                <h3 className="text-2xl font-semibold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-300 text-lg">{benefit.description}</p>
              </div>
            ))}
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-4867
          </div>
        </div>
      </section>

      {/* Asset Types Section */}
<<<<<<< HEAD
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
=======
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-4867
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Comprehensive Asset Coverage
            </h2>
<<<<<<< HEAD
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Manage all types of IT assets with intelligent automation and monitoring
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Database className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Hardware Assets</h3>
                  <p className="text-gray-400">
                    Servers, workstations, networking equipment, storage devices, and mobile devices.
                  </p>
                </div>
=======
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our platform manages all types of IT assets across your organization.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {assetTypes.map((assetType, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 text-center hover:border-cyan-500 transition-all duration-300">
                <h3 className="text-lg font-semibold text-white">{assetType}</h3>
=======
        </section>

        {/* Features Section */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Revolutionary Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI-powered IT asset management platform delivers unprecedented capabilities 
                that redefine how organizations manage their technology infrastructure.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="group">
                    <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 h-full hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-8 h-8 text-purple-400" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Asset Types Section */}
        <section className="py-20 relative bg-gray-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Comprehensive Asset Coverage
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our platform manages every type of IT asset across your organization, 
                providing unified visibility and control.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {assetTypes.map((assetType, index) => {
                const Icon = assetType.icon;
                return (
                  <div key={index} className="group">
                    <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-600/50 rounded-2xl p-8 h-full hover:border-pink-500/50 transition-all duration-300 hover:transform hover:scale-105">
                      <div className="w-16 h-16 bg-gradient-to-r from-pink-500/20 to-rose-500/20 border border-pink-500/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-8 h-8 text-pink-400" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">{assetType.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{assetType.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Advanced Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our platform combines cutting-edge AI technology with comprehensive asset management 
                to deliver unprecedented operational excellence.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {capabilities.map((capability, index) => {
                const Icon = capability.icon;
                return (
                  <div key={index} className="group">
                    <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 h-full hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-8 h-8 text-blue-400" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">{capability.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{capability.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 relative bg-gray-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose AI-Powered Asset Management?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the competitive advantage that intelligent asset management provides 
                for your organization's efficiency and cost control.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white mb-6">Key Benefits</h3>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-purple-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300 text-lg">{benefit}</span>
                    </div>
                  ))}
                </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-2b07
              </div>
              
              <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-2xl p-8">
                <div className="text-center">
                  <Star className="w-16 h-16 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-4">Industry Leader</h3>
                  <p className="text-gray-300 mb-6">
                    Join forward-thinking organizations already leveraging AI-powered asset management 
                    for competitive advantage and operational excellence.
                  </p>
                  <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-500 hover:to-pink-500 transition-all duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

<<<<<<< HEAD
      {/* Technology Stack Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Technology Stack
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Built with cutting-edge technologies for maximum performance and reliability.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Cpu, name: "AI Processing" },
              { icon: Database, name: "Big Data" },
              { icon: Network, name: "Cloud Native" },
              { icon: Code, name: "Machine Learning" }
            ].map((tech, index) => (
              <div key={index} className="text-center">
                <div className="p-4 bg-gray-800/50 rounded-xl mb-4 mx-auto w-fit">
                  <tech.icon className="h-8 w-8 text-cyan-500 mx-auto" />
                </div>
                <p className="text-white font-medium">{tech.name}</p>
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-4867
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Target className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Software Assets</h3>
                  <p className="text-gray-400">
                    Operating systems, applications, databases, and development tools with license tracking.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Users className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Cloud Resources</h3>
                  <p className="text-gray-400">
                    Virtual machines, cloud storage, containers, and serverless functions across multiple providers.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Shield className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Network Infrastructure</h3>
                  <p className="text-gray-400">
                    Routers, switches, firewalls, load balancers, and wireless access points.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <TrendingUp className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Data Assets</h3>
                  <p className="text-gray-400">
                    Databases, file systems, backup systems, and data warehouses with classification.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Clock className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">IoT Devices</h3>
                  <p className="text-gray-400">
                    Smart sensors, connected devices, and industrial IoT equipment with monitoring.
                  </p>
                </div>
              </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-a260
            </div>
          </motion.div>
        </div>
      </section>

<<<<<<< HEAD
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
=======
      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Business Benefits
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Transform your IT operations with intelligent asset management
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-r from-indigo-500/10 to-purple-600/10 rounded-2xl p-8 border border-indigo-500/20">
              <h3 className="text-2xl font-semibold text-white mb-4">Operational Excellence</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                  <span>Reduce asset downtime by up to 60%</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                  <span>Optimize resource utilization by 40%</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                  <span>Automate routine maintenance tasks</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                  <span>Improve asset lifecycle planning</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-blue-500/10 to-cyan-600/10 rounded-2xl p-8 border border-blue-500/20">
              <h3 className="text-2xl font-semibold text-white mb-4">Cost Optimization</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Reduce IT operational costs by 30%</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Prevent costly hardware failures</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Optimize software license usage</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Streamline procurement processes</span>
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
=======
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Optimize Your IT Assets?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the AI-powered asset management revolution and transform your IT operations.
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-4867
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
<<<<<<< HEAD
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
=======
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
            >
              Schedule a Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/services/it-infrastructure"
              className="inline-flex items-center px-8 py-4 border-2 border-cyan-500 text-cyan-500 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              Explore IT Services
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-4867
            </Link>
=======
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-indigo-500/10 to-purple-600/10 rounded-2xl p-12 text-center border border-indigo-500/20">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your IT Asset Management?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Experience the future of IT infrastructure management with AI-powered automation, 
              predictive analytics, and intelligent optimization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg text-white font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
              >
                Schedule a Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center px-8 py-4 border border-indigo-500 text-indigo-400 rounded-lg font-semibold hover:bg-indigo-500 hover:text-white transition-all duration-200"
              >
                View Pricing
              </Link>
            </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-a260
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
=======
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg text-white font-semibold hover:from-blue-600 hover:to-indigo-700 transition-all duration-200 transform hover:scale-105"
              >
                <span>Schedule a Demo</span>
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center px-8 py-4 border border-blue-500 text-blue-400 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition-all duration-200"
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
        {/* CTA Section */}
        <section className="py-20 relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-3xl p-12">
              <Lightbulb className="w-20 h-20 text-purple-400 mx-auto mb-6" />
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Your Asset Management?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Start your journey toward intelligent IT asset management today 
                and discover the unlimited potential of AI-powered infrastructure optimization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
                  Get Started Now
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </button>
                <button className="px-8 py-4 border-2 border-purple-500/50 text-purple-400 hover:bg-purple-500/10 font-semibold rounded-xl transition-all duration-300">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
>>>>>>> origin/cursor/website-audit-and-enhancement-2b07
  );
}