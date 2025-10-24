'use client';

import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/EnhancedSEOOptimizer';
import {CheckCircle, TrendingUp, Phone, Mail, MapPin, Building, Users, Shield, Globe, Brain, Cloud, Code, BarChart, Zap, ArrowRight, Star, Award, Target, Clock, Settings, Lock, Database, Smartphone, Eye, Sparkles} from 'lucide-react';
const EnterprisePage: React.FC = () => {
    const features = [
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Comprehensive security solutions designed for large-scale enterprise environments.',
      benefits: ['Advanced threat protection', 'Compliance management', 'Data encryption', 'Access control']
    },
    {
      icon: Cloud},
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions that grow with your business needs.',
      benefits: ['Auto-scaling', 'High availability', 'Disaster recovery', 'Cost optimization']
    },
    {
      icon: Brain,
      title: 'AI Integration',
      description: 'Enterprise-grade AI solutions for automation and intelligent decision making.',
      benefits: ['Machine learning', 'Predictive analytics', 'Process automation', 'Intelligent insights']
    },
    {
      icon: Database,
      title: 'Data Management',
      description: 'Advanced data management and analytics for enterprise-scale operations.',
      benefits: ['Big data processing', 'Real-time analytics', 'Data governance', 'Business intelligence']
    },
    {
      icon: Users,
      title: 'User Management',
      description: 'Comprehensive user and access management for large organizations.',
      benefits: ['Single sign-on', 'Role-based access', 'User provisioning', 'Audit trails']
    },
    {
      icon: Settings,
      title: 'System Integration',
      description: 'Seamless integration with existing enterprise systems and workflows.',
      benefits: ['API integration', 'Legacy system support', 'Workflow automation', 'Data synchronization']
    }
  ];

  const solutions = [
    {
      icon: Brain,
      title: 'AI Integration',
      description: 'Enterprise-grade AI solutions for automation and intelligent decision making.',
      benefits: ['Automation', 'Intelligence', 'Scalability', 'Integration']
    },
    {
      icon: Database,
      title: 'Data Management',
      description: 'Advanced data management and analytics for enterprise-scale operations.',
      benefits: ['Data processing', 'Analytics', 'Storage', 'Security']
    },
    {
      icon: Users,
      title: 'User Management',
      description: 'Comprehensive user and access management for large organizations.',
      benefits: ['Access control', 'User provisioning', 'Authentication', 'Authorization']
    },
    {
      icon: Settings,
      title: 'System Integration',
      description: 'Seamless integration with existing enterprise systems and workflows.',
      benefits: ['API integration', 'Legacy system support', 'Workflow automation', 'Data synchronization']
    }
  ];
  
  const additionalSolutions = [
    {
      icon: Brain,
      title: 'AI Integration',
      description: 'Enterprise-grade AI solutions for automation and intelligent decision making.',
      benefits: ['Machine learning', 'Automation', 'Intelligence', 'Scalability']
    },
    {
      icon: Database,
      title: 'Data Management',
      description: 'Advanced data management and analytics for enterprise-scale operations.',
      benefits: ['Data processing', 'Analytics', 'Storage', 'Security']
    },
    {
      icon: Users,
      title: 'User Management',
      description: 'Comprehensive user and access management for large organizations.',
      benefits: ['Access control', 'User provisioning', 'Authentication', 'Authorization']
    },
    {
      icon: Settings,
      title: 'System Integration',
      description: 'Seamless integration with existing enterprise systems and workflows.',
      benefits: ['API integration', 'Legacy system support', 'Workflow automation', 'Data synchronization']
    }
  ];
  
  const solutions = [
    {
      title: 'Enterprise Resource Planning',
      description: 'Comprehensive ERP solutions that streamline business processes and improve efficiency.',
      icon: Building,
      benefits: ['Financial management', 'Supply chain optimization', 'Human resources', 'Project management']
    },
    {
      title: 'Customer Relationship Management',
      description: 'Advanced CRM systems for managing customer relationships and sales processes.',
      icon: Users,
      benefits: ['Lead management', 'Sales automation', 'Customer analytics', 'Marketing automation']
    },
    {
      title: 'Enterprise Resource Planning',
      description: 'Comprehensive ERP solutions that streamline business processes and improve efficiency.',
      icon: Building,
      benefits: ['Financial management', 'Supply chain optimization', 'Human resources', 'Project management']
    },
    {
      title: 'Customer Relationship Management',
      description: 'Advanced CRM systems for managing customer relationships and sales processes.',
      icon: Users,
      benefits: ['Lead management', 'Sales automation', 'Customer analytics', 'Marketing automation']
    },
    {
      title: 'Business Intelligence',
      description: 'Powerful BI solutions for data-driven decision making and strategic planning.',
      icon: BarChart,
      benefits: ['Data visualization', 'Predictive analytics', 'Reporting', 'Performance monitoring']
    },
    {
      title: 'Workflow Automation',
      description: 'Automate complex business processes to improve efficiency and reduce errors.',
      icon: Zap,
      benefits: ['Process automation', 'Task management', 'Approval workflows', 'Document management']
    },
    {
      title: 'Business Intelligence',
      description: 'Powerful BI solutions for data-driven decision making and strategic planning.',
      icon: BarChart,
      benefits: ['Data visualization', 'Reporting', 'Analytics', 'Insights']
    }
  ];
  
  const benefits = [
    'Reduce operational costs by 30%',
    'Improve productivity by 50%',
    'Enhance security and compliance',
    'Streamline business processes',

    'Enable data-driven decisions',

    'Scale with business growth',

    'Integrate with existing systems',

    'Provide 24/7 support and monitoring'
  ];
  
  const stats = [
    { number: '500+', label: 'Enterprise Clients', icon: Building },
    { number: '99.9%', label: 'Uptime Guarantee', icon: Shield },
    { number: '50%', label: 'Cost Reduction', icon: TrendingUp },
    { number: '24/7', label: 'Support Available', icon: Clock }
  ];
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer>
        <title>Enterprise Solutions | Zion Tech Group</title>
        <meta name="description" content="Comprehensive enterprise solutions powered by AI" />
        <meta name="keywords" content="enterprise solutions, AI, business solutions" />
      </SEOOptimizer>
      <Navigation />
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Enterprise Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Comprehensive enterprise-grade solutions designed for large-scale business operations.
              Transform your organization with cutting-edge technology and expert implementation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300">
                Get Enterprise Consultation
                <ArrowRight className="w-5 h-5 inline ml-2" />
              </button>
              <button className="bg-transparent border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4">
        <div>
          <div>
            <h2>Section Title</h2>
            <p>Section description</p>
          </div>
        </div>
      </section>
              <h2 className="text-4 xl font-boldtext-whitemb-4">Section Title</h2>
    <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <SEOOptimizer
        title="Enterprise Solutions - Zion Tech Group"
        description="Comprehensive enterprise-grade solutions for large-scale business operations."
        keywords="enterprise solutions, enterprise software, large-scale solutions, enterprise integration, business solutions"
      />
      <Navigation />
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Enterprise Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Comprehensive enterprise-grade solutions designed for large-scale business operations. 
              Transform your organization with cutting-edge technology and expert implementation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
                Get Enterprise Consultation
              <ArrowRight className="inline-blockml-2 w-5 h-5" />
            </button>
            <button className="borderborder-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              View Case Studies
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <stat.icon className="w-12 h-12 text-purple-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7 xl mx-auto"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-4 xl font-boldtext-whitemb-4">
              Enterprise-Grade Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3 xl mx-auto">
              <p className="text-xltext-gray-300">Section description</p>
            </div>
        </div>
      </section>
        <div className="max-w-7 xl mx-auto"></div>
          <div className="text-center mb-16"></div>
            <h2>Why Choose Our Cloud Migration?</h2>
            <p>Built for scale, security, and performance to meet the demands of large organizations.</p>
              Built for scale, security, and performance to meet the demands of large organizations.
            </p>
          </div>
          
          <div className="gridgrid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-smborderborder-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="flexitems-centermb-4">
                  <feature.icon className="w-12 h-12 text-purple-400 mb-4" />
                  <h3 className="text-xlfont-semiboldtext-white">{feature.title}</h3>
          <div className="gridgrid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>,
                  <feature>
                  </feature><h3 className="text-xlfont-semiboldtext-white">{feature.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul>
                  {feature.benefits.map((benefit, idx) => (} <li>
                      <CheckCircle />
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flexitems-centertext-smtext-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {benefit}
                    </li>

                      {benefit} </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 px-4">
        <div className="max-w-7 xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4 xl font-boldtext-whitemb-4">
              Comprehensive Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3 xl mx-auto">

          </div>
        </div>
      </section>
            <h2>Why Choose Our Cloud Migration?</h2>
            <p>End-to-end enterprise solutions that address every aspect of your business operations.</p>
              End-to-end enterprise solutions that address every aspect of your business operations.
            </p>
          </div>
          
          <div className="gridgrid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-smborderborder-white/10 rounded-xl p-8 hover:bg-white/10 transition-all duration-300">
                <div className="flexitems-centermb-6">
                  <solution.icon className="w-12 h-12 text-purple-400 mr-4" />
                  <h3 className="text-2 xlfont-semiboldtext-white">{solution.title}</h3>
                </div>
                <p className="text-gray-300 mb-6">{solution.description}</p>
                <ul className="space-y-3">
                  {solution.benefits.map((benefit, idx) => (
                    <li key={idx} className="flexitems-centertext-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      {benefit}
                    </li>

                  ))}
                </ul>
              </div>
            ))}

          </div>
        </div>
      </section>
      {/* Benefits Section */} <section className="py-20 px-4">
          <div className="max-w-7 xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4 xl font-boldtext-whitemb-4">Section Title</h2>
        <div className="max-w-7 xl mx-auto">
          <div className="gridgrid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4 xl font-boldtext-whitemb-6">Why Choose Our Enterprise Solutions?</h2>
              <p className="text-xltext-gray-300 mb-8">
                Our enterprise solutions are designed to meet the unique challenges of large organizations, 
                providing the scalability, security, and performance you need to succeed.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flexitems-start">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-3 mt-1" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-smborderborder-white/10 rounded-xl p-8">
              <h3 className="text-2 xlfont-boldtext-whitemb-6">Get Started Today</h3>
              <p className="text-gray-300 mb-6">
                Ready to transform your enterprise? Contact our experts to discuss your requirements 
                and get a customized solution that fits your business needs.
              </p>
              <div className="space-y-4">
                <button className="w-fullbg-gradient-to-rfrom-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300">
                  Schedule Consultation
                </button>
                <button className="w-fullborderborder-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-3 px-6 rounded-lg transition-all duration-300">
                  Download Brochure
              <p className="text-xltext-gray-300">Section description</p>
            </div>
        </div>
      </section>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */} <section className="py-20 px-4">
          <div className="max-w-7 xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4 xl font-boldtext-whitemb-4">Section Title</h2>
        </section>
        <div className="max-w-4 xlmx-autotext-center"></div>
          <h2 className="text-4 xl font-boldtext-whitemb-6">
            Ready to Transform Your Enterprise?
          </h2>
          <p className="text-xltext-gray-300 mb-8">
            Join hundreds of enterprise clients who trust our solutions for their mission-critical operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <button className="bg-gradient-to-rfrom-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              <p className="text-xltext-gray-300">Section description</p>
            </div>
        </div>
      </section>
        <div className="max-w-4 xlmx-autotext-center"></div>
          <h2>Why Choose Our Cloud Migration?</h2>
          <p>Join hundreds of enterprise clients who trust our solutions for their mission-critical operations.</p>
          </p>
          <div className="flexflex-colsm:flex-row gap-4 justify-center"></div>,
            <button>Contact Enterprise Sales;</button>
              <ArrowRight>
            </button>
            <button>Learn More;</button>
              Contact Enterprise Sales
              </button><ArrowRight>
            </button>
            <button className="borderborder-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>
      <Footer /></Footer>
  )}
export default EnterprisePage
        <div className="max-w-4 xlmx-autotext-center">
          <h2 className="text-4 xl font-boldtext-whitemb-6">
            Ready to Transform Your Enterprise?
          <p className="text-xltext-gray-300 mb-8">
            Join hundreds of enterprise clients who trust our solutions for their mission-critical operations.
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-rfrom-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Contact Enterprise Sales
              <ArrowRight className="inline-blockml-2 w-5 h-5" />
            <button className="borderborder-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">Learn More
      <Footer />
    </div>
  )};

export default PagePage;
