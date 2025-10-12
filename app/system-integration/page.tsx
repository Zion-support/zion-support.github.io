import React from 'react'
import Layout from '../layout'
const SystemIntegrationPage: React.FC = () => {
  return (
    <Layout
      title="System Integration - Zion Tech Group"
      description="Seamless system integration services to connect your applications, databases, and third-party services."
      keywords="system integration, API integration, data integration, enterprise integration"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              System Integration
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Connect your systems seamlessly with our comprehensive integration solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-4">API Integration</h3>
              <p className="text-gray-300 mb-4">
                Connect your applications with external APIs and services for enhanced functionality.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• REST API development</li>
                <li>• GraphQL integration</li>
                <li>• Third-party API connections</li>
                <li>• API gateway management</li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-4">Data Integration</h3>
              <p className="text-gray-300 mb-4">
                Synchronize and consolidate data from multiple sources for better insights.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• ETL processes</li>
                <li>• Real-time data sync</li>
                <li>• Data warehousing</li>
                <li>• Data migration</li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-4">Enterprise Integration</h3>
              <p className="text-gray-300 mb-4">
                Connect your enterprise systems for improved efficiency and data flow.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• ERP integration</li>
                <li>• CRM connectivity</li>
                <li>• Legacy system modernization</li>
                <li>• Workflow automation</li>
              </ul>
            </div>
          </div>
        </div>
import { Helmet } from 'react-helmet-async'
import Layout from '../layout'
import { Network, Database, Code, Shield, Zap, CheckCircle, ArrowRight, Users, Clock, BarChart3, Cloud, Settings } from 'lucide-react'
import { Link } from 'react-router-dom'
const SystemIntegrationPage: React.FC = () => {
  const features = [
    {
      icon: <Network className="w-8 h-8 text-blue-500" />,
      title: 'API Integration',
      description: 'Seamless integration of third-party APIs and services to enhance your application functionality.'
    },
    {
      icon: <Database className="w-8 h-8 text-green-500" />,
      title: 'Database Integration',
      description: 'Connect and synchronize multiple databases for unified data management and reporting.'
    },
    {
      icon: <Cloud className="w-8 h-8 text-purple-500" />,
      title: 'Cloud Integration',
      description: 'Integrate your on-premises systems with cloud services for hybrid infrastructure solutions.'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'Security Integration',
      description: 'Implement secure authentication and authorization across all integrated systems.'
    }
  ]
  const services = [
    {
      icon: <Code className="w-6 h-6 text-blue-500" />,
      title: 'Custom Integration Development',
      description: 'Bespoke integration solutions tailored to your specific business requirements.'
    },
    {
      icon: <Settings className="w-6 h-6 text-green-500" />,
      title: 'Legacy System Modernization',
      description: 'Modernize and integrate legacy systems with modern applications and platforms.'
    },
    {
      icon: <Zap className="w-6 h-6 text-yellow-500" />,
      title: 'Real-time Data Sync',
      description: 'Real-time data synchronization across multiple systems and platforms.'
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-purple-500" />,
      title: 'Integration Monitoring',
      description: 'Comprehensive monitoring and analytics for all integrated systems and data flows.'
    }
  ]
  const benefits = [
    'Streamlined business processes through unified systems',
    'Reduced manual data entry and human errors',
    'Improved data accuracy and consistency across platforms',
    'Enhanced operational efficiency and productivity',
    'Better decision-making with unified data insights',
    'Scalable integration architecture for future growth'
  ]
  const integrationTypes = [
    {
      title: 'ERP Integration',
      description: 'Connect your ERP system with CRM, e-commerce, and other business applications.',
      icon: <Database className="w-8 h-8 text-blue-500" />
    },
    {
      title: 'CRM Integration',
      description: 'Integrate your CRM with marketing automation, support systems, and analytics platforms.',
      icon: <Users className="w-8 h-8 text-green-500" />
    },
    {
      title: 'E-commerce Integration',
      description: 'Connect your online store with inventory, payment, shipping, and accounting systems.',
      icon: <Cloud className="w-8 h-8 text-purple-500" />
    },
    {
      title: 'Analytics Integration',
      description: 'Unify data from multiple sources for comprehensive business intelligence and reporting.',
      icon: <BarChart3 className="w-8 h-8 text-orange-500" />
    }
  ]
  return (
    <Layout
      title="System Integration - Zion Tech Group"
      description="Expert system integration services to connect your applications, databases, and platforms for seamless data flow and improved business processes."
      keywords="system integration, API integration, database integration, ERP integration, CRM integration, data synchronization"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              System
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Integration
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Connect your applications, databases, and platforms for seamless data flow and improved business processes. 
              Our integration experts ensure your systems work together harmoniously.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to="/pricing" 
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </section>
        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our Integration Services?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We provide comprehensive system integration solutions that connect your business applications seamlessly.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Integration Types Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Types of Integration We Handle
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From simple API connections to complex enterprise system integrations, we handle it all.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {integrationTypes.map((type, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    {type.icon}
                    <h3 className="text-xl font-semibold text-white ml-4">{type.title}</h3>
                  </div>
                  <p className="text-gray-300">{type.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Services Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Integration Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive integration solutions tailored to your specific business needs and technical requirements.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    {service.icon}
                    <h3 className="text-lg font-semibold text-white ml-3">{service.title}</h3>
                  </div>
                  <p className="text-gray-300 text-sm">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Benefits Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Benefits of System Integration
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transform your business operations with integrated systems that work together seamlessly.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-300 text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">Ready to Integrate?</h3>
                <p className="text-gray-300 mb-6">
                  Let our integration experts assess your current systems and create a comprehensive integration strategy 
                  that will streamline your business processes and improve efficiency.
                </p>
                <Link 
                  to="/contact" 
                  className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 inline-flex items-center"
                >
                  Start Your Integration
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                  Ready to Connect Your Systems?
                </h2>
                <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                  Let's discuss how our system integration services can streamline your business processes and improve efficiency.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact" 
                    className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Get Started Today
                  </Link>
                  <Link 
                    to="/pricing" 
                    className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                  >
                    View Pricing
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}
export default SystemIntegrationPage