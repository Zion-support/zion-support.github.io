import React from 'react';
'use client';
import React from "react";
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
import React  from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function DataanalyticsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900to-slate-900pt-20">
      <Helmet>
        <title>Data Analytics - Zion Tech Group</title>
        <meta name="description" content="Professional data analytics services by Zion Tech Group. Transform your business with our expert solutions." / / />
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-4xl font-bold text-white mb-6"  >Data Analytics</h1>
        <p className="text-lg text-gray-300 mb-8">Professional data analytics services coming soon.</p>
        <Link to="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit" >
          Contact Us
          
          <ArrowRight className="w-5h-5ml-2"  />
        </Link>
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
            </div></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div></div></div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
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
            </div>
          </div>
        </section>

        {/* CTA Section */}
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

export default DataAnalyticsPage
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

export default function DataanalyticsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Data Analytics - Zion Tech Group</title>
        <meta name="description" content="Professional data analytics services by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Data Analytics</h1>
          <p className="text-lg text-gray-300 mb-8">Professional data analytics services coming soon.</p>
          
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
