import React from 'react';
'use client';
import React from "react";
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
export default function ApiDevelopmentZionTechGroup() {

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
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings, Code, Server, Cloud } from 'lucide-react'

const ApiDevelopmentPage: React.FC = () => {
  const serviceType = 'api'
  
  const features = [
    {
      icon: Code,
      title: 'RESTful API Development',
      description: 'Build robust and scalable RESTful APIs following industry best practices.',
      benefits: ['RESTful design', 'HTTP methods', 'Status codes', 'Error handling']
    },
    {
      icon: Server,
      title: 'GraphQL APIs',
      description: 'Create flexible GraphQL APIs for efficient data fetching and manipulation.',
      benefits: ['Schema design', 'Resolvers', 'Subscriptions', 'Real-time updates']
    },
    {
      icon: Cloud,
      title: 'Microservices Architecture',
      description: 'Design and implement microservices for scalable and maintainable systems.',
      benefits: ['Service decomposition', 'API gateway', 'Load balancing', 'Service discovery']
    },
    {
      icon: Shield,
      title: 'API Security',
      description: 'Implement comprehensive security measures for your APIs.',
      benefits: ['Authentication', 'Authorization', 'Rate limiting', 'Data encryption']
    },
    {
      icon: Database,
      title: 'Database Integration',
      description: 'Seamlessly integrate APIs with various database systems.',
      benefits: ['SQL databases', 'NoSQL databases', 'Caching', 'Data validation']
    },
    {
      icon: Users,
      title: 'API Documentation',
      description: 'Comprehensive documentation and testing for your APIs.',
      benefits: ['OpenAPI specs', 'Interactive docs', 'Testing tools', 'Version control']
    }
  ]

  const services = [
    {
      name: 'Custom API Development',
      description: 'Tailored API solutions designed for your specific business requirements',
      icon: Code,
      features: ['Custom endpoints', 'Business logic', 'Data models', 'Integration support']
    },
    {
      name: 'API Integration',
      description: 'Connect your systems with third-party APIs and services',
      icon: Globe,
      features: ['Third-party APIs', 'Data synchronization', 'Webhook handling', 'Error management']
    },
    {
      name: 'API Migration',
      description: 'Modernize and migrate existing APIs to new technologies',
      icon: Settings,
      features: ['Legacy modernization', 'Technology upgrade', 'Data migration', 'Performance optimization']
    },
    {
      name: 'API Testing',
      description: 'Comprehensive testing and quality assurance for your APIs',
      icon: Shield,
      features: ['Unit testing', 'Integration testing', 'Performance testing', 'Security testing']
    }
  ]

  const stats = [
    { label: 'APIs Developed', value: '500+', icon: Code },
    { label: 'Client Satisfaction', value: '99%', icon: Star },
    { label: 'Response Time', value: '<100ms', icon: Zap },
    { label: 'Uptime', value: '99.9%', icon: Clock }
  ]

  return (
    <>
      <Helmet>
        <title>API Development | Zion Tech Group</title>
        <meta name="description" content="Professional API development services including RESTful APIs, GraphQL, microservices, and API integration solutions for modern applications." />
        <meta name="keywords" content="API development, RESTful APIs, GraphQL, microservices, API integration, web services" />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-6">
              API Development
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Build robust, scalable APIs that power your applications. Our comprehensive API development 
              services include RESTful APIs, GraphQL, microservices, and seamless integrations.
import React  from 'react';
const ApiDevelopmentPage: React.FC = () => {
  return (
      <Helmet>
        <title>Api Development - Zion Tech Group</title>
        <meta name="description" content="Api Development services by Zion Tech Group. Professional AI and IT solutions." / / />
        <meta name="keywords" content="api-development, AI solutions, IT services" / / />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900via-purple-900to-slate-900">
        <div className="container mx-autopx-4py-16">
          <div className="text-centermb-16">
            <h1 className="text-4xl md:text-6 xl font-bold text-white mb-6" />
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent"  />Api Development
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xlmx-auto">
              Professional api development services by Zion Tech Group.
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
              We're working on bringing you comprehensive api development solutions. 
              Contact us to learn more about our services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group"
              >
                Start Your API Project
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
import React from 'react';

const ApiDevelopmentPage: React.FC = () => {return (
    <>
      <title>ApiDevelopment - Zion Tech Group</title>

      <  />
  );}

export default function ApidevelopmentPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Api Development - Zion Tech Group</title>
        <meta name="description" content="Professional api development services by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Api Development</h1>
          <p className="text-lg text-gray-300 mb-8">Professional api development services coming soon.</p>
          
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

export default ApiDevelopmentPage;
