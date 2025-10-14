import React from 'react';
import { Link  } from 'react-router-dom';
import { motion  } from 'framer-motion';import { Monitor, Shield, TrendingUp, Database, Network, ArrowRight, Cpu, HardDrive, Users, Globe, BarChart3, Zap, Target, Rocket, CheckCircle, Star, Lightbulb, Cloud, Settings, Brain, Server, Printer, Clock } from 'lucide-react'
import SEOHead from '../components/SEOHead'
import { Helmet } from 'react-helmet-async'
const AIPoweredITAssetManagement  = () => {
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
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50"></div>
            <Helmet></Helmet>
                <title>AI-Powered IT Asset Management | Zion Tech Group</title>
                <meta name="description" content="Revolutionary AI-powered IT asset management solution with intelligent discovery, real-time monitoring, and predictive maintenance capabilities." />
            </Helmet>
                {/* Hero Section */}
                <section className="relative py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white overflow-hidden"></section>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="container mx-auto px-4 relative z-10"></div>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center max-w-4xl mx-auto"
                    ></motion.div
>
                        <h1 className="text-5xl md:text-6xl font-bold mb-6"></h1>
                            AI-Powered IT Asset Management
                        </h1>
                        <p className="text-xl md:text-2xl mb-8 opacity-90"></p>
                            Transform your IT infrastructure with intelligent asset discovery, 
                            real-time monitoring, and predictive maintenance powered by AI.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
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
                <section className="py-20"></section>
                <div className="container mx-auto px-4"></div>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    ></motion.div
>
                        <h2 className="text-4xl font-bold text-gray-900 mb-4"></h2>
                            Revolutionary AI Features
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto"></p>
                            Our AI-powered platform provides comprehensive IT asset management 
                            with intelligent automation and predictive insights.
                        </p>
                </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
                {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                            ></motion.div
>
                                <div className="text-blue-600 mb-4"></div>
                                    <feature.icon className="w-12 h-12" />
                                </div>
                                <h3 className="text-xl font-semibold mb-4"></h3>
                {feature.title}
                </h3>
                                <p className="text-gray-600"></p>
                {feature.description}
                </p>
                </motion.div>
                        ))}
                </div>
                </div>
            </section>
                {/* Capabilities Section */}
                <section className="py-20 bg-gray-50"></section>
                <div className="container mx-auto px-4"></div>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    ></motion.div
>
                        <h2 className="text-4xl font-bold text-gray-900 mb-4"></h2>
                            Advanced Capabilities
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto"></p>
                            Comprehensive IT asset management capabilities powered by cutting-edge AI technology.
                        </p>
                </motion.div>

                    <div className="grid md:grid-cols-2 gap-8"></div>
                {capabilities.map((capability, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                className="bg-white p-8 rounded-xl shadow-lg"
                            ></motion.div
>
                                <div className="flex items-start space-x-4"></div>
                                    <div className="text-blue-600 flex-shrink-0"></div>
                                        <capability.icon className="w-8 h-8" />
                                    </div>
                                    <div></div>
                                        <h3 className="text-xl font-semibold mb-2"></h3>
                {capability.title}
                </h3>
                                        <p className="text-gray-600"></p>
                {capability.description}
                </p>
                </div>
                                </div>
                </motion.div>
                        ))}
                </div>
                </div>
            </section>
                {/* Benefits Section */}
                <section className="py-20"></section>
                <div className="container mx-auto px-4"></div>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    ></motion.div
>
                        <h2 className="text-4xl font-bold text-gray-900 mb-4"></h2>
                            Measurable Benefits
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto"></p>
                            Experience significant improvements in efficiency, security, and cost optimization.
                        </p>
                </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
                {benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                className="text-center"
                            ></motion.div
>
                                <div className="text-green-600 mb-4 flex justify-center"></div>
                                    <benefit.icon className="w-12 h-12" />
                                </div>
                                <h3 className="text-xl font-semibold mb-2"></h3>
                {benefit.title}
                </h3>
                                <p className="text-gray-600"></p>
                {benefit.description}
                </p>
                </motion.div>
                        ))}
                </div>
                </div>
            </section>
                {/* CTA Section */}
                <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white"></section>
                <div className="container mx-auto px-4 text-center"></div>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto"
                    ></motion.div
>
                        <h2 className="text-4xl font-bold mb-6"></h2>
                            Ready to Transform Your IT Asset Management?
                        </h2>
                        <p className="text-xl mb-8 opacity-90"></p>
                            Join leading organizations that have revolutionized their IT infrastructure 
                            with our AI-powered asset management solution.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
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
;