<<<<<<< HEAD
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Server, 
  Shield, 
  BarChart3, 
  Zap, 
  CheckCircle, 
  ArrowRight, 
  Brain, 
  Settings 
} from 'lucide-react';
import SEOHead from '../components/SEOHead';

export default function AIPoweredITAssetManagement() {
  return (
    <>
      <SEOHead
        title="AI-Powered IT Asset Management - Zion Tech Group"
        description="Revolutionary AI-powered IT asset management platform that optimizes infrastructure, monitors performance, and ensures security."
        keywords="AI IT management, asset management, infrastructure optimization, IT security, system monitoring"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-cyan-50">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-800/20 to-blue-800/20"></div>
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-cyan-500/20 rounded-full px-6 py-3 mb-6">
                <Server className="w-5 h-5 text-cyan-400" />
                <span className="text-cyan-300 font-medium">AI IT Asset Management</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
                Intelligent
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent block">
                  IT Infrastructure
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Revolutionary AI-powered IT asset management platform that optimizes infrastructure, 
                monitors performance, and ensures security with unprecedented efficiency.
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">IT Management Features</h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Advanced AI capabilities that transform IT infrastructure management and optimization
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {[
                {
                  icon: Server,
                  title: 'Asset Optimization',
                  description: 'AI-powered optimization of IT assets and resource allocation'
                },
                {
                  icon: Shield,
                  title: 'Security Monitoring',
                  description: 'Real-time security monitoring and threat detection'
                },
                {
                  icon: BarChart3,
                  title: 'Performance Analytics',
                  description: 'Comprehensive performance analytics and reporting'
                },
                {
                  icon: Brain,
                  title: 'Predictive Maintenance',
                  description: 'Predictive maintenance and proactive issue resolution'
                },
                {
                  icon: Settings,
                  title: 'Automated Configuration',
                  description: 'Automated system configuration and management'
                },
                {
                  icon: CheckCircle,
                  title: 'Compliance Assurance',
                  description: 'Ensure compliance with industry standards and regulations'
                }
              ].map((feature, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 border border-gray-200 hover:border-cyan-500/50 transition-colors">
                  <feature.icon className="w-12 h-12 text-cyan-500 mb-6" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gray-900">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get started with our AI-Powered IT Asset Management platform and optimize your infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all flex items-center gap-2 justify-center">
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
=======
import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Monitor, Shield, TrendingUp, Database, Network, ArrowRight, Cpu, HardDrive, Users, Globe, BarChart3, Zap, Target, Rocket, CheckCircle, Star, Lightbulb, Cloud, Settings, Brain, Server, Printer, Clock } from 'lucide-react'
import SEOHead from '../components/SEOHead'
import { Helmet } from 'react-helmet-async'
const AIPoweredITAssetManagement = () => {
    const features = [
        {
            icon: Monitor,
            title: "Real-time Asset Monitoring",
            description: "Continuous monitoring of all IT assets with AI-powered anomaly detection and predictive maintenance."
        },
        {
            icon: Shield,
            title: "Intelligent Security",
            description: "AI-driven threat detection and automated security response for all managed IT assets."
        },
        {
            icon: TrendingUp,
            title: "Performance Analytics",
            description: "Advanced analytics and reporting for asset performance optimization and capacity planning."
        },
        {
            icon: Database,
            title: "Centralized Management",
            description: "Single platform for managing all IT assets across your entire infrastructure."
        },
        {
            icon: Network,
            title: "Network Optimization",
            description: "AI-powered network performance optimization and bandwidth management."
        },
        {
            icon: Target,
            title: "Predictive Maintenance",
            description: "AI algorithms predict potential failures and maintenance needs before they impact operations."
        }
    ]
    const capabilities = [
        {
            icon: Cpu,
            title: "Intelligent Asset Discovery",
            description: "AI-powered scanning and discovery of all IT assets across your infrastructure."
        },
        {
            icon: Shield,
            title: "Security Monitoring",
            description: "Continuous security assessment and threat detection for all managed assets."
        },
        {
            icon: BarChart3,
            title: "Performance Analytics",
            description: "Real-time performance monitoring and predictive maintenance insights."
        },
        {
            icon: Database,
            title: "Centralized Management",
            description: "Unified management across Windows, Linux, macOS, cloud platforms, and mobile devices."
        }
    ]
    const benefits = [
        {
            icon: CheckCircle,
            title: "Reduced Downtime",
            description: "Predictive maintenance reduces unplanned outages by up to 70%"
        },
        {
            icon: TrendingUp,
            title: "Cost Optimization",
            description: "Identify underutilized assets and optimize resource allocation"
        },
        {
            icon: Shield,
            title: "Enhanced Security",
            description: "Proactive threat detection and automated security responses"
        },
        {
            icon: Users,
            title: "Improved Productivity",
            description: "Streamlined asset management reduces administrative overhead"
        }
    ]
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
            <Helmet>
                <title>AI-Powered IT Asset Management | Zion Tech Group</title>
                <meta name="description" content="Revolutionary AI-powered IT asset management solution with intelligent discovery, real-time monitoring, and predictive maintenance capabilities." />
            </Helmet>

            {/* Hero Section */}
            <section className="relative py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">
                            AI-Powered IT Asset Management
                        </h1>
                        <p className="text-xl md:text-2xl mb-8 opacity-90">
                            Transform your IT infrastructure with intelligent asset discovery, 
                            real-time monitoring, and predictive maintenance powered by AI.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <$2 />
                                to="/contact"
                                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                            >
                                Get Started Today
                            </Link>
                            <$2 />
                                to="/pages/InnovativeServicesShowcase2025"
                                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                            >
                                Learn More
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Revolutionary AI Features
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Our AI-powered platform provides comprehensive IT asset management 
                            with intelligent automation and predictive insights.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                            >
                                <div className="text-blue-600 mb-4">
                                    <feature.icon className="w-12 h-12" />
                                </div>
                                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Capabilities Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Advanced Capabilities
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Comprehensive IT asset management capabilities powered by cutting-edge AI technology.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {capabilities.map((capability, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                className="bg-white p-8 rounded-xl shadow-lg"
                            >
                                <div className="flex items-start space-x-4">
                                    <div className="text-blue-600 flex-shrink-0">
                                        <capability.icon className="w-8 h-8" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">{capability.title}</h3>
                                        <p className="text-gray-600">{capability.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Measurable Benefits
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Experience significant improvements in efficiency, security, and cost optimization.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                className="text-center"
                            >
                                <div className="text-green-600 mb-4 flex justify-center">
                                    <benefit.icon className="w-12 h-12" />
                                </div>
                                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                                <p className="text-gray-600">{benefit.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
                <div className="container mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto"
                    >
                        <h2 className="text-4xl font-bold mb-6">
                            Ready to Transform Your IT Asset Management?
                        </h2>
                        <p className="text-xl mb-8 opacity-90">
                            Join leading organizations that have revolutionized their IT infrastructure 
                            with our AI-powered asset management solution.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <$2 />
                                to="/contact"
                                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                            >
                                Schedule Demo
                            </Link>
                            <$2 />
                                to="/pages/InnovativeServicesShowcase2025"
                                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                            >
                                View All Services
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}
export default AIPoweredITAssetManagement
>>>>>>> origin/main
