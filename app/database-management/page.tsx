<<<<<<< HEAD
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Database } from 'lucide-react';

export default function DatabaseManagementZionTechGroup() {

  return (
    <div>
      <Helmet>
        <title>DatabaseManagement - Zion Tech Group</title>
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">
            DatabaseManagement
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Professional databasemanagement services coming soon.
          </p>
          <Link
<<<<<<< HEAD
            to="/contact"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
=======
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0210
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
<<<<<<< HEAD
</div>
=======
      <Footer />
    </div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0210
  );
}
=======
'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings, Server, Cloud, Monitor, Wifi, MessageCircle, Heart, DollarSign, Box, Package, Mic, Workflow, Eye, MessageSquare, CheckSquare, ShoppingCart, Calendar, Lock } from 'lucide-react'

const DatabaseManagementPage: React.FC = () => {
  const services = [
    {
      icon: Database,
      title: 'Database Design & Architecture',
      description: 'Design and implement robust database architectures for optimal performance',
      features: ['Schema design', 'Indexing strategies', 'Data modeling', 'Performance optimization']
    },
    {
      icon: Server,
      title: 'Database Administration',
      description: 'Comprehensive database administration and maintenance services',
      features: ['User management', 'Security configuration', 'Backup & recovery', 'Monitoring']
    },
    {
      icon: Cloud,
      title: 'Cloud Database Solutions',
      description: 'Migrate and manage databases in the cloud for scalability and reliability',
      features: ['Cloud migration', 'Auto-scaling', 'High availability', 'Cost optimization']
    },
    {
      icon: Shield,
      title: 'Database Security',
      description: 'Implement comprehensive security measures to protect your data',
      features: ['Access controls', 'Encryption', 'Audit trails', 'Compliance']
    },
    {
      icon: BarChart,
      title: 'Performance Tuning',
      description: 'Optimize database performance for faster queries and better user experience',
      features: ['Query optimization', 'Index tuning', 'Resource monitoring', 'Performance analysis']
    },
    {
      icon: Workflow,
      title: 'Data Migration',
      description: 'Seamless migration of data between different database systems',
      features: ['Data mapping', 'ETL processes', 'Data validation', 'Zero-downtime migration']
    }
  ]

  const benefits = [
    'Improved database performance and reliability',
    'Enhanced data security and compliance',
    'Reduced maintenance costs and downtime',
    'Better scalability and growth support',
    'Optimized data storage and retrieval',
    'Professional database management'
  ]

  const stats = [
    { label: 'Databases Managed', value: '150+', icon: Database },
    { label: 'Uptime Guarantee', value: '99.9%', icon: Clock },
    { label: 'Client Satisfaction', value: '98%', icon: Star },
    { label: 'Performance Improvement', value: '5x', icon: Zap }
  ]

  return (
    <React.Fragment>
      <Helmet>
        <title>Database Management | Zion Tech Group</title>
        <meta name="description" content="Professional database management services including design, administration, and optimization." />
        <meta name="keywords" content="database management, database administration, database optimization, cloud databases, Zion Tech Group" />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        {/* Hero Section */}
<<<<<<< HEAD
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-6">
              Database Management
=======
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' ,}} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Page
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Optimize your database performance and ensure data reliability with our comprehensive 
              database management services. From design to administration, we've got you covered.
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
                Get Started
<<<<<<< HEAD
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
=======
              </button>
              <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Learn More
              </button>
            </div></div></div></div></div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Our Database Management Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We provide comprehensive database management solutions that ensure 
                optimal performance, security, and reliability for your data.
              </p>
<<<<<<< HEAD
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-400/50 transition-all duration-300 group">
                  <service.icon className="w-12 h-12 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
=======
            </div></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div></div></div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  {feature.benefits && (
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  )}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
                </div>
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">
                  Why Choose Our Database Management Services?
                </h2>
                <p className="text-gray-300 mb-8">
                  Our experienced database administrators combine technical expertise with 
                  business understanding to deliver solutions that drive real value.
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
                <h3 className="text-2xl font-bold text-white mb-6">Our Process</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      1
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Assessment</h4>
                      <p className="text-gray-300 text-sm">Analyze your current database infrastructure and requirements</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      2
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Design</h4>
                      <p className="text-gray-300 text-sm">Create optimized database architecture and configuration</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      3
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Implementation</h4>
                      <p className="text-gray-300 text-sm">Deploy and configure your database management solution</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      4
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Optimization</h4>
                      <p className="text-gray-300 text-sm">Monitor, optimize, and maintain your database performance</p>
                    </div>
                  </div>
                </div>
              </div>
=======
        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our experts to discuss your requirements and get started today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Contact Us
                </button>
                <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Learn More
                </button>
              </div></div></div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Optimize Your Database?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our database management services can help you improve 
              performance, security, and reliability of your data infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
<<<<<<< HEAD
    </>
  )
}
=======
    </React.Fragment>
  );
};
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361

export default DatabaseManagementPage
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-02d3
=======
import React from 'react';

const DatabaseManagementPage: React.FC = () => {return (
    <>
      <title>DatabaseManagement - Zion Tech Group</title>

      <  />
  );}

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
