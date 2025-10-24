import React from 'react';
'use client';
import React from "react";
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
export default function DataEngineeringZionTechGroup() {

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
import { ArrowRight, CheckCircle, Star, Users, Zap, Shield, Brain, Globe, Database, Cpu, Target, BarChart, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Link as LinkIcon, Server, Package, Mic, Workflow, Eye, Wifi, MessageSquare, CheckSquare, ShoppingCart, Settings, Calendar, TrendingUp, Lock } from 'lucide-react'

const DataEngineeringPage: React.FC = () => {
  const features = [
    {
      icon: Database,
      title: 'Data Pipeline Development',
      description: 'Build robust, scalable data pipelines that process and transform your data efficiently',
      benefits: ['Real-time processing', 'Batch processing', 'Data validation', 'Error handling']
    },
    {
      icon: Server,
      title: 'Data Warehouse Solutions',
      description: 'Design and implement data warehouses for centralized data storage and analysis',
      benefits: ['Scalable storage', 'Data modeling', 'ETL processes', 'Query optimization']
    },
    {
      icon: Workflow,
      title: 'Data Orchestration',
      description: 'Automate and orchestrate complex data workflows and processes',
      benefits: ['Workflow automation', 'Scheduling', 'Monitoring', 'Alerting']
    },
    {
      icon: Shield,
      title: 'Data Security & Governance',
      description: 'Implement comprehensive data security and governance policies',
      benefits: ['Access controls', 'Data encryption', 'Audit trails', 'Compliance']
    },
    {
      icon: BarChart,
      title: 'Data Quality Management',
      description: 'Ensure data quality and consistency across your organization',
      benefits: ['Data validation', 'Cleansing', 'Monitoring', 'Reporting']
    },
    {
      icon: Cpu,
      title: 'Real-time Analytics',
      description: 'Build real-time analytics solutions for instant insights',
      benefits: ['Stream processing', 'Real-time dashboards', 'Event-driven architecture', 'Low latency']
    }
  ]

  const benefits = [
    'Improved data quality and consistency',
    'Faster data processing and analysis',
    'Better data security and compliance',
    'Reduced data processing costs',
    'Enhanced decision-making capabilities',
    'Scalable data infrastructure'
  ]

  const stats = [
    { label: 'Data Pipelines Built', value: '200+', icon: Workflow },
    { label: 'Data Volume Processed', value: '1TB+', icon: Database },
    { label: 'Client Satisfaction', value: '99%', icon: Star },
    { label: 'Processing Speed', value: '10x', icon: Zap }
  ]

  return (
    <>
      <Helmet>
        <title>Data Engineering | Zion Tech Group</title>
        <meta name="description" content="Professional data engineering services including pipeline development, data warehousing, and real-time analytics." />
        <meta name="keywords" content="data engineering, data pipelines, data warehousing, real-time analytics, Zion Tech Group" />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-6">
              Data Engineering
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Build robust, scalable data infrastructure that transforms raw data into 
              actionable insights. Our data engineering solutions power your analytics and AI initiatives.
import React  from 'react';
const DataEngineeringPage: React.FC = () => {
  return (
      <Helmet>
        <title>Data Engineering - Zion Tech Group</title>
        <meta name="description" content="Data Engineering services by Zion Tech Group. Professional AI and IT solutions." / / />
        <meta name="keywords" content="data-engineering, AI solutions, IT services" / / />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900via-purple-900to-slate-900">
        <div className="container mx-autopx-4py-16">
          <div className="text-centermb-16">
            <h1 className="text-4xl md:text-6 xl font-bold text-white mb-6" />
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent"  />Data Engineering
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xlmx-auto">
              Professional data engineering services by Zion Tech Group.
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
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300"
              >
                View Demo
              </Link>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 backdrop-blur-sm border border-purple-500/20 rounded-xlp-8text-center">
            <h2 className="text-2 xl font-bold text-white mb-4"  >Coming Soon</h2>
            <p className="text-gray-300 mb-6">
              We're working on bringing you comprehensive data engineering solutions. 
              Contact us to learn more about our services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group"
              >
                Start Your Data Journey
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
import React from 'react';

const DataEngineeringPage: React.FC = () => {return (
    <>
      <title>DataEngineering - Zion Tech Group</title>

      <  />
  );}

export default function DataengineeringPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Data Engineering - Zion Tech Group</title>
        <meta name="description" content="Professional data engineering services by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Data Engineering</h1>
          <p className="text-lg text-gray-300 mb-8">Professional data engineering services coming soon.</p>
          
          <Link
            to="/contact"
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

export default DataEngineeringPage;
