<<<<<<< HEAD
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Brain, 
  Search, 
  BookOpen, 
  Zap, 
  TrendingUp, 
  Users, 
  Globe, 
  ArrowRight, 
  Cpu, 
  Database, 
  Network 
} from 'lucide-react';
import SEOHead from '../components/SEOHead';

export default function AIAutonomousResearchAssistant() {
  return (
    <>
      <SEOHead
        title="AI Autonomous Research Assistant - Zion Tech Group"
        description="Revolutionary AI-powered research assistant that autonomously conducts comprehensive research, analyzes data, and generates insights across multiple domains."
        keywords="AI research assistant, autonomous research, data analysis, research automation, AI insights"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-800/20 to-purple-800/20"></div>
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-blue-500/20 rounded-full px-6 py-3 mb-6">
                <Brain className="w-5 h-5 text-blue-400" />
                <span className="text-blue-300 font-medium">AI Research Assistant</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
                Autonomous Research
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent block">
                  Intelligence
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Revolutionary AI-powered research assistant that autonomously conducts comprehensive research, 
                analyzes data, and generates insights across multiple domains with unprecedented accuracy.
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Research Capabilities</h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Advanced AI research capabilities that transform how knowledge is discovered and analyzed
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {[
                {
                  icon: Search,
                  title: 'Autonomous Research',
                  description: 'Conducts comprehensive research across multiple sources and domains automatically'
                },
                {
                  icon: Brain,
                  title: 'Intelligent Analysis',
                  description: 'Advanced AI algorithms analyze complex data patterns and generate insights'
                },
                {
                  icon: BookOpen,
                  title: 'Knowledge Synthesis',
                  description: 'Synthesizes information from diverse sources into coherent, actionable insights'
                },
                {
                  icon: Zap,
                  title: 'Real-time Processing',
                  description: 'Processes and analyzes data in real-time for immediate research results'
                },
                {
                  icon: TrendingUp,
                  title: 'Trend Analysis',
                  description: 'Identifies emerging trends and patterns across multiple research domains'
                },
                {
                  icon: Users,
                  title: 'Collaborative Research',
                  description: 'Facilitates collaborative research workflows and knowledge sharing'
                }
              ].map((feature, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 border border-gray-200 hover:border-blue-500/50 transition-colors">
                  <feature.icon className="w-12 h-12 text-blue-500 mb-6" />
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
              Ready to Transform Your Research Process?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get started with our AI Autonomous Research Assistant and discover insights like never before.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all flex items-center gap-2 justify-center">
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border border-blue-500 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-500/10 transition-all">
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
import { Brain, Search, FileText, TrendingUp, Users, Globe, ArrowRight, CheckCircle, Star, Lightbulb, Target, Zap } from 'lucide-react'
import SEOHead from '../components/SEOHead'
import { Helmet } from 'react-helmet-async'
const AIAutonomousResearchAssistant = () => {
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
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
            <Helmet>
                <title>AI Autonomous Research Assistant | Zion Tech Group</title>
                <meta name="description" content="Revolutionary AI-powered research assistant with intelligent data collection, analysis, and report generation capabilities." />
            </Helmet>

            {/* Hero Section */}
            <section className="relative py-20 bg-gradient-to-r from-purple-600 to-blue-700 text-white overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">
                            AI Autonomous Research Assistant
                        </h1>
                        <p className="text-xl md:text-2xl mb-8 opacity-90">
                            Transform your research process with intelligent AI that automatically 
                            gathers, analyzes, and synthesizes information from multiple sources.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                            Our AI research assistant provides comprehensive research capabilities 
                            with intelligent automation and deep analysis.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                            >
                                <div className="text-purple-600 mb-4">
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
                            Comprehensive research capabilities powered by cutting-edge AI technology.
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
                                    <div className="text-purple-600 flex-shrink-0">
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
                            Experience significant improvements in research efficiency and quality.
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
            <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-700 text-white">
                <div className="container mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto"
                    >
                        <h2 className="text-4xl font-bold mb-6">
                            Ready to Transform Your Research Process?
                        </h2>
                        <p className="text-xl mb-8 opacity-90">
                            Join leading organizations that have revolutionized their research 
                            capabilities with our AI-powered research assistant.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
>>>>>>> origin/main
