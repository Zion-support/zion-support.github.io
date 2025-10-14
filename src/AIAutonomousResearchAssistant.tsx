import React from 'react';
import { Link  } from 'react-router-dom';
import { motion  } from 'framer-motion';import { Brain, Search, FileText, TrendingUp, Users, Globe, ArrowRight, CheckCircle, Star, Lightbulb, Target, Zap } from 'lucide-react'
import SEOHead from '../components/SEOHead'
import { Helmet } from 'react-helmet-async'
const AIAutonomousResearchAssistant  = () => {
    const features = [
        {
            icon: Brain,
            title: "Intelligent Research",
            description: "AI-powered research capabilities that automatically gather, analyze, and synthesize information from multiple sources."
        },
        {
            icon: Search,
            title: "Advanced Search",
            description: "Deep search across academic papers, industry reports, and real-time data sources with natural language queries."
        },
        {
            icon: FileText,
            title: "Report Generation",
            description: "Automatically generate comprehensive research reports with citations, analysis, and actionable insights."
        },
        {
            icon: TrendingUp,
            title: "Trend Analysis",
            description: "Identify emerging trends and patterns across industries with predictive analytics and market intelligence."
        }
    ]
    const capabilities = [
        {
            icon: Users,
            title: "Multi-Domain Expertise",
            description: "Research across technology, healthcare, finance, and other industries with specialized knowledge."
        },
        {
            icon: Globe,
            title: "Global Data Access",
            description: "Access to international databases, research institutions, and real-time global information sources."
        },
        {
            icon: Target,
            title: "Precision Research",
            description: "Targeted research with high accuracy and relevance to your specific requirements and objectives."
        },
        {
            icon: Zap,
            title: "Real-time Updates",
            description: "Continuous monitoring and updates on research topics with automated alerts and notifications."
        }
    ]
    const benefits = [
        {
            icon: CheckCircle,
            title: "Time Savings",
            description: "Reduce research time by up to 80% with automated data collection and analysis"
        },
        {
            icon: Star,
            title: "Higher Accuracy",
            description: "AI-powered validation ensures high-quality, accurate research results"
        },
        {
            icon: Lightbulb,
            title: "Actionable Insights",
            description: "Transform raw data into strategic insights and recommendations"
        },
        {
            icon: TrendingUp,
            title: "Competitive Advantage",
            description: "Stay ahead with cutting-edge research and market intelligence"
        }
    ]
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50"></div>
            <Helmet></Helmet>
                <title>AI Autonomous Research Assistant | Zion Tech Group</title>
                <meta name="description" content="Revolutionary AI-powered research assistant with intelligent data collection, analysis, and report generation capabilities." />
            </Helmet>
                {/* Hero Section */}
                <section className="relative py-20 bg-gradient-to-r from-purple-600 to-blue-700 text-white overflow-hidden"></section>
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
                            AI Autonomous Research Assistant
                        </h1>
                        <p className="text-xl md:text-2xl mb-8 opacity-90"></p>
                            Transform your research process with intelligent AI that automatically 
                            gathers, analyzes, and synthesizes information from multiple sources.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
                            <$2 />
                                to="/contact"
                                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                            >
                                Get Started Today
                            </Link>
                            <$2 />
                                to="/pages/InnovativeServicesShowcase2025"
                                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
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
                            Our AI research assistant provides comprehensive research capabilities 
                            with intelligent automation and deep analysis.
                        </p>
                </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
                {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                            ></motion.div
>
                                <div className="text-purple-600 mb-4"></div>
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
                            Comprehensive research capabilities powered by cutting-edge AI technology.
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
                                    <div className="text-purple-600 flex-shrink-0"></div>
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
                            Experience significant improvements in research efficiency and quality.
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
                <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-700 text-white"></section>
                <div className="container mx-auto px-4 text-center"></div>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto"
                    ></motion.div
>
                        <h2 className="text-4xl font-bold mb-6"></h2>
                            Ready to Transform Your Research Process?
                        </h2>
                        <p className="text-xl mb-8 opacity-90"></p>
                            Join leading organizations that have revolutionized their research 
                            capabilities with our AI-powered research assistant.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
                            <$2 />
                                to="/contact"
                                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                            >
                                Schedule Demo
                            </Link>
                            <$2 />
                                to="/pages/InnovativeServicesShowcase2025"
                                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
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
export default AIAutonomousResearchAssistant
;