import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Navigation from '../../src/components/Navigation';
import Footer from '../../src/components/Footer';
import { BarChart3, TrendingUp, Database, Brain, CheckCircle, ArrowRight, Phone, Mail, Users, Award, Clock, Globe } from 'lucide-react';

export default function AIBusinessIntelligence() {
  const services = [
    {
      icon: BarChart3,
      title: 'Data Analytics & Visualization',
      description: 'Transform raw data into actionable insights with advanced analytics and interactive dashboards.',
      features: ['Real-time Dashboards', 'Predictive Analytics', 'Data Visualization', 'KPI Monitoring']
    }, {
      icon: Brain,
      title: 'AI-Powered Insights',
      description: 'Leverage machine learning and AI to uncover hidden patterns and predict future trends.',
      features: ['Machine Learning Models', 'Predictive Analytics', 'Anomaly Detection', 'Recommendation Engines']
    }, {
      icon: Database,
      title: 'Data Integration',
      description: 'Connect and consolidate data from multiple sources for comprehensive business intelligence.',
      features: ['ETL Processes', 'Data Warehousing', 'API Integration', 'Real-time Data Sync']
    }, {
      icon: TrendingUp,
      title: 'Performance Optimization',
      description: 'Optimize business processes and decision-making with data-driven insights and recommendations.',
      features: ['Process Optimization', 'Cost Analysis', 'Revenue Optimization', 'Operational Efficiency']
    }
  ];

  const industries = [
    { name: 'E-commerce', description: 'Customer behavior analysis and sales optimization' }, { name: 'Healthcare', description: 'Patient data analysis and treatment optimization' }, { name: 'Finance', description: 'Risk assessment and fraud detection' }, { name: 'Manufacturing', description: 'Supply chain optimization and quality control' }, { name: 'Retail', description: 'Inventory management and customer insights' }, { name: 'Marketing', description: 'Campaign performance and customer segmentation' }
  ];

  const stats = [
    { number: '40%', label: 'Cost Reduction', icon: TrendingUp }, { number: '60%', label: 'Faster Decisions', icon: Clock }, { number: '85%', label: 'Accuracy Improvement', icon: Award }, { number: '24/7', label: 'Real-time Insights', icon: Globe }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Head>
        <title>AI Business Intelligence Solutions | Zion Tech Group</title>
        <meta name="description" content="Transform your data into actionable insights with our AI-powered business intelligence solutions. Advanced analytics, predictive modeling, and real-time dashboards." />
        <meta name="keywords" content="business intelligence, data analytics, AI insights, predictive analytics, data visualization, machine learning" />
        <link rel="canonical" href="https://ziontechgroup.com/solutions/ai-business-intelligence" />
      </Head>

      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-gray-900 via-green-900 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
                AI Business Intelligence
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your data into actionable insights with our AI-powered business intelligence solutions. 
              Make data-driven decisions with advanced analytics, predictive modeling, and real-time dashboards.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-teal-500 text-white font-semibold rounded-lg hover:from-green-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25"
              >
                Get Data Analysis
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-green-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Comprehensive BI Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From data collection to actionable insights, we provide end-to-end business intelligence solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 hover:border-green-500/50 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-lg flex items-center justify-center mr-4">
                    <service.icon className="w-6 h-6 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-semibold">{service.title}</h3>
                </div>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Industry Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI business intelligence solutions are tailored for various industries and use cases.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="bg-gray-900/50 border border-gray-700 rounded-lg p-6 text-center hover:border-green-500/50 transition-all duration-300">
                <h3 className="text-lg font-semibold text-white mb-2">{industry.name}</h3>
                <p className="text-gray-400 text-sm">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-900/20 to-teal-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Unlock Your Data's Potential?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Transform your business with AI-powered insights. Contact our data experts for a personalized consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-gradient-to-r from-green-500 to-teal-500 text-white font-semibold rounded-lg hover:from-green-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2 inline" />
            </Link>
            <a
              href="tel:+13024640950"
              className="px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300 flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )}
  );
};