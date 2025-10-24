<<<<<<< HEAD
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function GDataAnalyticsZionTechGroupPage() {

  return (
    <div>
      <Helmet>
        <title>5G Data Analytics - Zion Tech Group</title>
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Data Analytics</h1>
          <p className="text-lg text-gray-300 mb-8">
            Professional data analytics services coming soon.
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
import { BarChart, TrendingUp, Database, CheckCircle, Brain, Clock, Users, Zap, Phone, Mail, MapPin, ArrowRight, Star, Shield, Target, Globe, Settings, FileText, PieChart, LineChart } from 'lucide-react'

const DataAnalyticsPage: React.FC = () => {
  const services = [
    {
      icon: BarChart,
      title: 'Business Intelligence',
      description: 'Transform raw data into actionable insights that drive business decisions.',
      features: ['Custom dashboards', 'Real-time reporting', 'Data visualization', 'KPI tracking']
    },
    {
      icon: Brain,
      title: 'AI-Powered Analytics',
<<<<<<< HEAD
      description: 'Leverage artificial intelligence to uncover patterns and predict trends.',
      features: ['Machine learning models', 'Predictive analytics', 'Anomaly detection', 'Automated insights']
    },
    {
      icon: Database,
      title: 'Data Management',
      description: 'Organize, clean, and optimize your data for better analysis.',
      features: ['Data cleaning', 'Data integration', 'Data warehousing', 'Data governance']
    },
    {
      icon: PieChart,
      title: 'Visualization',
      description: 'Create compelling visualizations that tell your data story.',
      features: ['Interactive charts', 'Custom reports', 'Mobile dashboards', 'Export capabilities']
    },
    {
      icon: LineChart,
      title: 'Trend Analysis',
      description: 'Identify trends and patterns in your data over time.',
      features: ['Time series analysis', 'Seasonal patterns', 'Forecasting', 'Trend alerts']
    },
    {
      icon: Target,
      title: 'Performance Metrics',
      description: 'Track and measure key performance indicators across your organization.',
      features: ['KPI dashboards', 'Scorecards', 'Benchmarking', 'Goal tracking']
=======
      description: 'Leverage machine learning and artificial intelligence to uncover hidden patterns and trends.',
    },
    {
      icon: Database,
      title: 'Data Integration',
      description: 'Connect and analyze data from multiple sources to get a complete picture of your business.',
    },
    {
      icon: TrendingUp,
      title: 'Predictive Analytics',
      description: 'Forecast future trends and make data-driven decisions with predictive modeling.',
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
    }
  ]

  const benefits = [
    'Data-driven decision making',
    'Improved operational efficiency',
    'Better customer insights',
    'Competitive advantage',
    'Cost reduction',
    'Risk mitigation'
  ]

  const stats = [
    { label: 'Data Sources Integrated', value: '100+', icon: Database },
    { label: 'Client Satisfaction', value: '99%', icon: Star },
    { label: 'Insights Generated', value: '10K+', icon: Brain },
    { label: 'Time Saved', value: '80%', icon: Clock }
  ]

  return (
    <React.Fragment>
      <Helmet>
        <title>Data Analytics | Zion Tech Group</title>
        <meta name="description" content="Professional data analytics solutions for modern businesses. Transform data into actionable insights." />
        <meta name="keywords" content="data analytics, business intelligence, AI analytics, data visualization, Zion Tech Group" />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        {/* Hero Section */}
<<<<<<< HEAD
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-6">
              Data Analytics
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your data into actionable insights that drive business growth. 
              Our advanced analytics solutions help you make informed decisions.
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
=======
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Data Analytics Services
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your data into actionable insights with our advanced analytics solutions. 
                Make smarter decisions and drive business growth with AI-powered data analysis.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                  <BarChart className="mr-2 h-5 w-5" />
                  Get Analytics Now
                </button>
                <button className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center">
                  <Phone className="mr-2 h-5 w-5" />
                  Call (302) 464-0950
                </button>
              </div></div></div></div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Our Analytics Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We provide comprehensive data analytics solutions that help you understand 
                your business better and make data-driven decisions.
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
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div></div></div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
<<<<<<< HEAD
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">
                  Why Choose Our Analytics Solutions?
                </h2>
                <p className="text-gray-300 mb-8">
                  Our data analytics solutions are designed to help you unlock the full potential 
                  of your data and gain a competitive edge in your industry.
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
                      <h4 className="text-lg font-semibold text-white mb-2">Data Assessment</h4>
                      <p className="text-gray-300 text-sm">Analyze your current data landscape and identify opportunities</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      2
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Strategy Development</h4>
                      <p className="text-gray-300 text-sm">Create a comprehensive analytics strategy tailored to your needs</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      3
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Implementation</h4>
                      <p className="text-gray-300 text-sm">Deploy analytics tools and create custom dashboards</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      4
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Optimization</h4>
                      <p className="text-gray-300 text-sm">Continuously improve and optimize your analytics capabilities</p>
                    </div>
                  </div>
                </div>
              </div>
=======
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Key Benefits
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Drive business success with our comprehensive data analytics services.
              </p>
            </div></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300 text-lg">{benefit}</p>
                </div></div>
              ))}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
            </div>
          </div>
        </section>

        {/* CTA Section */}
<<<<<<< HEAD
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Unlock Your Data's Potential?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our data analytics solutions can help you make better 
              decisions and drive business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group"
              >
                Start Your Analytics Journey
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
        </section>
      </main>
      
      <Footer />
    </>
  )
}
=======
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Unlock Your Data?
              </h2>
              <p className="text-xl text-purple-100 mb-8">
                Contact our analytics experts to discuss your data needs and get a customized solution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                  <Phone className="mr-2 h-5 w-5" />
                  Call (302) 464-0950
                </button>
                <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
                  <Mail className="mr-2 h-5 w-5" />
                  Email Us
                </button>
              </div></div></div>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361

export default DataAnalyticsPage
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-02d3
=======
import React from 'react';

import {Link} from 'react-router-dom';
import {ArrowRight} from 'lucide-react';

export default function DataanalyticsPage() {
  return (
    <>
      <title>5G Data Analytics - Zion Tech Group</title>
        <title>Data Analytics - Zion Tech Group</title>
        <h1 className="text-4 xl font-boldtext-whitemb-6">Data Analytics</h1>
        <p className="text-lgtext-gray-300mb-8">Professional data analytics services coming soon.</p>
          Contact Us

  );

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
