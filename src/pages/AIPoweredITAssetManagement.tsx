import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Monitor, Shield, TrendingUp, Database, Network, ArrowRight, Cpu, HardDrive, Zap, Target, Rocket, CheckCircle, Star, Lightbulb, Cloud, Settings, Brain, Server, Printer, Clock, Users, Globe, BarChart3 } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { Header } from '@/components/header/Header';
import { Footer } from '@/components/Footer';
import { GradientHeading } from '@/components/GradientHeading';

const AIPoweredITAssetManagement = () => {
    const features = [
        {
            icon: Monitor,
            title: "Intelligent Asset Discovery",
            description: "AI-powered scanning and discovery of all IT assets across your infrastructure"
        },
        {
            icon: Shield,
            title: "Security & Compliance",
            description: "Continuous monitoring of asset health, performance, and utilization with instant alerts and notifications."
        },
        {
            icon: Target,
            title: "Predictive Maintenance",
            description: "AI algorithms predict potential failures and maintenance needs before they impact your operations."
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
        },
        {
            icon: Zap,
            title: "Real-time Monitoring",
            description: "Continuous monitoring of all IT assets with AI-powered anomaly detection and predictive maintenance."
        }
    ];

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
            icon: TrendingUp,
            title: "Performance Analytics",
            description: "Real-time performance monitoring and predictive maintenance insights"
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
            icon: Brain,
            title: "AI-Powered Insights",
            description: "Machine learning algorithms provide actionable insights for asset optimization."
        }
    ];

    const benefits = [
        {
            icon: CheckCircle,
            title: "Reduced Downtime",
            description: "Predictive maintenance prevents unexpected failures and minimizes system downtime."
        },
        {
            icon: TrendingUp,
            title: "Cost Optimization",
            description: "Identify underutilized assets and optimize resource allocation for better ROI."
        },
        {
            icon: Shield,
            title: "Enhanced Security",
            description: "Continuous security monitoring and automated threat response for all assets."
        },
        {
            icon: Star,
            title: "Improved Efficiency",
            description: "Streamlined asset management processes with AI-powered automation."
        }
    ];

    return (
        <>
            <SEO 
                title="AI-Powered IT Asset Management - Zion Tech Group" 
                description="Transform your IT asset management with AI-powered discovery, monitoring, and optimization solutions." 
                keywords="IT asset management, AI monitoring, asset discovery, predictive maintenance, IT infrastructure" 
                canonical="https://ziontechgroup.com/ai-powered-it-asset-management"
            />
            <Header />
            <main className="min-h-screen bg-zion-blue pt-24 pb-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Hero Section */}
                    <div className="text-center mb-16">
                        <GradientHeading>AI-Powered IT Asset Management</GradientHeading>
                        <p className="text-xl text-zion-slate-light mt-6 max-w-3xl mx-auto">
                            Transform your IT infrastructure management with intelligent asset discovery, 
                            real-time monitoring, and AI-powered optimization solutions.
                        </p>
                    </div>

                    {/* Features Grid */}
                    <div className="mb-20">
                        <h2 className="text-3xl font-bold text-white text-center mb-12">Key Features</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="bg-zion-blue-light border border-zion-blue-lighter rounded-lg p-6 hover:border-zion-cyan transition-colors"
                                >
                                    <div className="w-16 h-16 bg-zion-cyan/20 rounded-lg flex items-center justify-center mb-4">
                                        <feature.icon className="h-8 w-8 text-zion-cyan" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                                    <p className="text-zion-slate-light">{feature.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Capabilities Section */}
                    <div className="mb-20">
                        <h2 className="text-3xl font-bold text-white text-center mb-12">Advanced Capabilities</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {capabilities.map((capability, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="bg-zion-blue-light border border-zion-blue-lighter rounded-lg p-6 hover:border-zion-cyan transition-colors"
                                >
                                    <div className="w-16 h-16 bg-zion-purple/20 rounded-lg flex items-center justify-center mb-4">
                                        <capability.icon className="h-8 w-8 text-zion-purple" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-white mb-3">{capability.title}</h3>
                                    <p className="text-zion-slate-light">{capability.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Benefits Section */}
                    <div className="mb-20">
                        <h2 className="text-3xl font-bold text-white text-center mb-12">Business Benefits</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {benefits.map((benefit, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="bg-zion-blue-light border border-zion-blue-lighter rounded-lg p-6 hover:border-zion-cyan transition-colors"
                                >
                                    <div className="flex items-start">
                                        <div className="w-12 h-12 bg-zion-green/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                                            <benefit.icon className="h-6 w-6 text-zion-green" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                                            <p className="text-zion-slate-light">{benefit.description}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="text-center">
                        <div className="bg-zion-blue-dark border border-zion-blue-lighter rounded-lg p-8">
                            <h2 className="text-2xl font-bold text-white mb-4">
                                Ready to Transform Your IT Asset Management?
                            </h2>
                            <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
                                Discover how AI-powered asset management can optimize your infrastructure, 
                                reduce costs, and improve operational efficiency.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link 
                                    to="/contact" 
                                    className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center"
                                >
                                    Get Started Today
                                    <ArrowRight className="h-4 w-4 ml-2" />
                                </Link>
                                <Link 
                                    to="/services" 
                                    className="border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                                >
                                    Learn More
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default AIPoweredITAssetManagement;
