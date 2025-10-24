<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
export default function ZionAiPredictiveMaintenanceZionTechGroup() {

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Zion Ai Predictive Maintenance - Zion Tech Group</title>
        <meta name="description" content="Zion Ai Predictive Maintenance solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">Zion Ai Predictive Maintenance</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Discover our comprehensive zion ai predictive maintenance solutions designed to meet your business needs.
          </p>
<<<<<<< HEAD
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Expert Solutions</h3>
              <p className="text-gray-300">
                Our team of experts delivers tailored solutions for your specific requirements.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Cutting-Edge Technology</h3>
              <p className="text-gray-300">
                We use the latest technologies and best practices to ensure optimal performance.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">24/7 Support</h3>
              <p className="text-gray-300">
                Get round-the-clock support from our dedicated team of professionals.
              </p>
            </div>
          </div>
        </div>
      </div>
=======
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
      <Footer />
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0210
    </div>
  );
}
=======
'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { ArrowRight, CheckCircle, Star, Users, Zap, Shield, Brain, Globe, Database, Cpu, Target, BarChart, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Link as LinkIcon, Server, Package, Mic, Workflow, Eye, Wifi, MessageSquare, CheckSquare, ShoppingCart, Settings, Calendar, TrendingUp, Lock, Factory, Gauge, AlertCircle } from 'lucide-react'

const ZionAiPredictiveMaintenancePage: React.FC = () => {
  const features = [
    {
      icon: Gauge,
      title: 'Real-time Anomaly Detection',
      description: 'Detect anomalies in equipment performance in real-time to prevent failures',
      benefits: ['Early fault detection', 'Reduced unplanned downtime', 'Improved asset reliability', 'Continuous monitoring']
    },
    {
      icon: Brain,
      title: 'AI-Powered Prediction',
      description: 'Leverage machine learning models to predict future equipment failures with high accuracy',
      benefits: ['Predictive modeling', 'Reduced maintenance costs', 'Optimized spare parts inventory', 'Proactive maintenance']
    },
    {
      icon: Settings,
      title: 'Optimized Maintenance Schedules',
      description: 'Automate and optimize maintenance schedules based on predicted failure times',
      benefits: ['Maximized asset lifespan', 'Efficient resource allocation', 'Reduced maintenance burden', 'Scheduled maintenance']
    },
    {
      icon: Factory,
      title: 'Asset Health Monitoring',
      description: 'Gain comprehensive insights into the health and performance of your industrial assets',
      benefits: ['Asset performance analytics', 'Condition monitoring', 'Health scoring', 'Root cause analysis']
    },
    {
      icon: Shield,
      title: 'Safety & Compliance',
      description: 'Ensure operational safety and compliance with industry regulations through predictive insights',
      benefits: ['Enhanced safety protocols', 'Regulatory compliance', 'Risk mitigation', 'Incident prevention']
    },
    {
      icon: Database,
      title: 'Data Integration',
      description: 'Seamlessly integrate with various data sources, including IoT sensors, SCADA, and ERP systems',
      benefits: ['Unified data view', 'Easy data ingestion', 'Interoperability', 'Data quality assurance']
    }
  ]

  const benefits = [
    'Up to 30% reduction in maintenance costs',
    'Up to 70% reduction in unplanned downtime',
    'Increased asset lifespan by 20%+',
    'Improved operational efficiency',
    'Enhanced safety and regulatory compliance',
    'Better decision-making with predictive insights'
  ]

  const stats = [
    { label: 'Assets Monitored', value: '1,000+', icon: Factory },
    { label: 'Faults Predicted', value: '95%', icon: AlertCircle },
    { label: 'Uptime Improvement', value: '25%', icon: TrendingUp },
    { label: 'Client Satisfaction', value: '98%', icon: Star }
  ]

  return (
    <>
      <Helmet>
        <title>AI Predictive Maintenance | Zion Tech Group</title>
        <meta name="description" content="Leverage AI for predictive maintenance to minimize downtime, reduce costs, and optimize asset performance." />
        <meta name="keywords" content="AI predictive maintenance, industrial IoT, asset management, machine learning, operational efficiency, Zion Tech Group" />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-6">
              AI Predictive Maintenance
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Minimize downtime, reduce costs, and optimize asset performance with our 
              AI-powered predictive maintenance solutions for industrial operations.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center gap-2 bg-slate-800/50 backdrop-blur-sm rounded-lg px-4 py-2 border border-slate-700">
                  <stat.icon className="w-5 h-5 text-cyan-400" />
                  <span className="text-white font-semibold">{stat.value}</span>
                  <span className="text-gray-400 text-sm">{stat.label}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group"
              >
                Request Demo
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/case-studies"
                className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Key Features & Benefits
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI predictive maintenance solution is packed with powerful features 
                designed to keep your operations running smoothly and efficiently.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-400/50 transition-all duration-300 group">
                  <feature.icon className="w-12 h-12 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center gap-2 text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Overall Benefits Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">
                  Why Choose Zion Tech Group for Predictive Maintenance?
                </h2>
                <p className="text-gray-300 mb-8">
                  Our deep expertise in AI and industrial operations allows us to deliver 
                  predictive maintenance solutions that drive significant value for your business.
                </p>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-3 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
                <h3 className="text-2xl font-bold text-white mb-6">Our Implementation Process</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      1
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Assessment</h4>
                      <p className="text-gray-300 text-sm">Evaluate your existing systems and identify predictive maintenance opportunities.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      2
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Data Integration</h4>
                      <p className="text-gray-300 text-sm">Integrate IoT sensors, SCADA, and other data sources for comprehensive data collection.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      3
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Model Deployment</h4>
                      <p className="text-gray-300 text-sm">Deploy and fine-tune AI/ML models for accurate failure prediction.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      4
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Monitoring & Optimization</h4>
                      <p className="text-gray-300 text-sm">Provide continuous monitoring and ongoing optimization of the solution.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Boost Your Operational Efficiency?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact us today to learn how our AI predictive maintenance solutions can 
              transform your industrial operations and drive significant cost savings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group"
              >
                Schedule Consultation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300"
              >
                Request a Demo
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  )
}

export default ZionAiPredictiveMaintenancePage
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-02d3
