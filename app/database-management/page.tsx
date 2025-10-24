import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Database } from 'lucide-react';

export default function DatabaseManagementZionTechGroup() {

export default function DatabasemanagementPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Database Management - Zion Tech Group</title>
        <meta name="description" content="Professional database management services by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Database Management</h1>
          <p className="text-lg text-gray-300 mb-8">Professional database management services coming soon.</p>
          
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
    </div>
  );
}
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
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' ,}} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Page
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Optimize your database performance and ensure data reliability with our comprehensive 
              database management services. From design to administration, we've got you covered.
import React  from 'react';
const DatabaseManagementPage: React.FC = () => {
  return (
      <Helmet>
        <title>Database Management - Zion Tech Group</title>
        <meta name="description" content="Database Management services by Zion Tech Group. Professional AI and IT solutions." / / />
        <meta name="keywords" content="database-management, AI solutions, IT services" / / />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900via-purple-900to-slate-900">
        <div className="container mx-autopx-4py-16">
          <div className="text-centermb-16">
            <h1 className="text-4xl md:text-6 xl font-bold text-white mb-6" />
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent"  />Database Management
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xlmx-auto">
              Professional database management services by Zion Tech Group.
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
              </button>
              <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Learn More
              </button>
            </div></div></div></div></div>
          </div>
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
                </div>
              ))}
            </div>
          </div>
        </section>

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

          <div className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 backdrop-blur-sm border border-purple-500/20 rounded-xlp-8text-center">
            <h2 className="text-2 xl font-bold text-white mb-4"  >Coming Soon</h2>
            <p className="text-gray-300 mb-6">
              We're working on bringing you comprehensive database management solutions. 
              Contact us to learn more about our services.
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
    </React.Fragment>
      </div>
        </div>
      </div>
          </div>
        </div>
      </div>
        </div>
      </div>
          </div>
        </div>
      </div>
        </div>
      </div>
      </div>

  );
};

import React from 'react';

const DatabaseManagementPage: React.FC = () => {return (
    <>
      <title>DatabaseManagement - Zion Tech Group</title>

      <  />
  );}

            className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
          >
            Contact Us
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}
export default DatabaseManagementPage;
