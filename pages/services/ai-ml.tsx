import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
import EnhancedNavigation from '../../components/EnhancedNavigation';
import EnhancedNavigation from '../../components/EnhancedNavigation';
import EnhancedFooter from '../../components/EnhancedFooter';
import EnhancedFooter from '../../components/EnhancedFooter';

export default function AIMLServicesPage() {

import React from 'react';
import Head from 'next / head';

import { motion } from 'framer-motion';

import {


import EnhancedNavigation from '../../components/EnhancedNavigation';
import EnhancedNavigation from '../../components/EnhancedNavigation';
import EnhancedFooter from '../../components/EnhancedFooter';
import EnhancedFooter from '../../components/EnhancedFooter';
export default function AIMLServicesPage() {


      icon: Brain,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "AI-Powered Automation",
      description: "Intelligent automation systems that learn and adapt",
      features: ["Process Automation", "Workflow Optimization", "Smart Decision Making", "Continuous Learning"],
      price: "From $3,500",
      icon: Zap,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Data Intelligence Platform",
      description: "Advanced analytics and insights powered by AI",
      features: ["Big Data Processing", "Real-time Analytics", "Business Intelligence", "Predictive Insights"],
      price: "From $7,500",
      icon: Database,
      color: "from-emerald-500 to-teal-500"
    },
    {
      title: "AI Consulting & Strategy",
      description: "Strategic guidance for AI implementation and transformation",
      features: ["AI Roadmap Planning", "Technology Assessment", "Implementation Strategy", "ROI Optimization"],
      price: "From $2,500",
      icon: Rocket,
      color: "from-orange-500 to-red-500"
    }
  ];

  const stats = [
    { number: "500+", label: "AI Models Deployed", icon: Brain },
    { number: "99.9%", label: "Accuracy Rate", icon: CheckCircle },
    { number: "24/7", label: "AI Monitoring", icon: Clock },
    { number: "2500%", label: "Average ROI", icon: TrendingUp }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <Head>
        <title>AI & Machine Learning Services - Zion Tech Group</title>
        <meta name="description" content="Cutting-edge AI and machine learning solutions from Zion Tech Group. Custom AI applications, automation, and intelligent systems that drive business growth." />
        <meta property="og:title" content="AI & Machine Learning Services - Zion Tech Group" />
        <meta property="og:description" content="Cutting-edge AI and machine learning solutions that drive business growth and innovation." />
        <link rel="canonical" href="https://ziontechgroup.com/services/ai-ml" />
      </Head>

      <EnhancedNavigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent mb-6">
              AI & Machine Learning
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Revolutionary AI solutions that adapt, learn, and evolve with your business


            </p>
          </motion.div>

            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}

            className="mb-12"
          >
            <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8">
              From custom neural networks to intelligent automation systems, we deliver AI solutions 
              that provide measurable business outcomes and competitive advantages.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2 mx-auto">
              Get AI Consultation
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-purple-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-white/70">{stat.label}</div>
              </motion.div>
            ))}





      {/* Services Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Our AI Services</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Comprehensive AI solutions designed to transform your business operations and drive innovation
            </p>
          </motion.div>

                      <CheckCircle className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />


      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div








            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Let's discuss how our AI solutions can drive innovation, efficiency, and growth for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                Schedule Consultation
              </button>
              <button className="px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm bg-white/5 hover:bg-white/10">
                View Case Studies
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <EnhancedFooter />
    </div>





      <EnhancedFooter />;
      <EnhancedFooter />


              <ArrowRight className='w - 5 h - 5' />            </button>;
                      <CheckCircle className='w - 5 h - 5 text - purple - 400 mr - 3 flex - shrink - 0' />                      {feature}
}> <h2 className="text-4xl font-bold text-white mb-6" > Ready to Transform Your Business with AI? </h2> <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto" > Let's discuss how our AI solutions can drive innovation, efficiency, and growth for your organization. </p> Schedule Consultation </button> <button className="px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm bg-white/5 hover:bg-white/10" > View Case Studies </button> </div> </motion.div> </div> </section> <EnhancedFooter /> </div>)

      <EnhancedFooter />;




