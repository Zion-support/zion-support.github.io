<<<<<<< HEAD
=======
'use client';

>>>>>>> cursor/fix-errors-and-merge-to-main-c587
import React from 'react';
import { CheckCircle } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
<<<<<<< HEAD
<<<<<<< HEAD
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
=======
import { ArrowRight, Cloud, Shield, Zap, Globe, CheckCircle } from 'lucide-react';
>>>>>>> cursor/fix-errors-and-merge-to-main-ace5
=======
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe, Server, Database, Cloud } from 'lucide-react';
>>>>>>> cursor/fix-errors-and-merge-to-main-c587

const CloudServicesPage: React.FC = () => {
  const features = [
    {
<<<<<<< HEAD
<<<<<<< HEAD
      title: 'Page',
      description: 'Professional page services for modern businesses.',
      benefits: ['Expert Solutions', 'Advanced Technology', 'Proven Results', '24/7 Support']
    },
    {
      title: 'Advanced Technology',
      description: 'Cutting-edge tools and technologies to deliver superior results.',
      benefits: ['Latest Tools', 'Modern Methods', 'Scalable Solutions', 'Future-Ready']
    },
    {
      title: 'Proven Results',
      description: 'Track record of successful projects and satisfied clients.',
      benefits: ['High Success Rate', 'Client Satisfaction', 'Ongoing Support', 'Continuous Improvement']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Page - Zion Tech Group</title>
        <meta name="description" content="Professional page services and solutions." />
        <meta name="keywords" content="page, services, solutions, technology" />
=======
      icon: Cloud,
      title: 'Cloud Migration',
      description: 'Seamless migration to cloud infrastructure with zero downtime'
    },
    {
      icon: Shield,
      title: 'Security First',
      description: 'Enterprise-grade security and compliance for all cloud services'
=======
      icon: Brain,
      title: 'AI-Powered Cloud Solutions',
      description: 'Advanced AI technology integrated into cloud infrastructure for intelligent automation and optimization'
>>>>>>> cursor/fix-errors-and-merge-to-main-c587
    },
    {
      icon: Zap,
      title: 'High Performance',
<<<<<<< HEAD
      description: 'Optimized cloud solutions for maximum performance and scalability'
=======
      description: 'Lightning-fast cloud processing with real-time analytics and instant scalability'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption, compliance standards, and advanced threat protection'
>>>>>>> cursor/fix-errors-and-merge-to-main-c587
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide cloud deployment and support for international businesses with multi-region availability'
    },
    {
      icon: Server,
      title: 'Scalable Infrastructure',
      description: 'Auto-scaling cloud infrastructure that grows with your business needs'
    },
    {
      icon: Database,
      title: 'Data Management',
      description: 'Comprehensive data storage, backup, and management solutions with high availability'
    }
  ];

  const services = [
    {
      title: 'Cloud Migration',
      description: 'Seamless migration of your existing infrastructure to the cloud with zero downtime',
      features: ['Assessment & Planning', 'Data Migration', 'Application Modernization', 'Performance Optimization']
    },
    {
      title: 'Cloud Architecture',
      description: 'Design and implement scalable, secure, and cost-effective cloud architectures',
      features: ['Infrastructure Design', 'Security Implementation', 'Cost Optimization', 'Monitoring Setup']
    },
    {
      title: 'Cloud Management',
      description: 'Ongoing management and optimization of your cloud infrastructure',
      features: ['24/7 Monitoring', 'Performance Tuning', 'Security Updates', 'Cost Management']
    },
    {
      title: 'Hybrid Cloud Solutions',
      description: 'Bridge your on-premises and cloud environments for maximum flexibility',
      features: ['Hybrid Architecture', 'Data Synchronization', 'Unified Management', 'Security Integration']
    }
  ];

<<<<<<< HEAD
  const services = [
    {
      title: 'Infrastructure as a Service (IaaS)',
      description: 'Scalable cloud infrastructure tailored to your business needs',
      features: ['Virtual Machines', 'Storage Solutions', 'Network Configuration', 'Load Balancing']
    },
    {
      title: 'Platform as a Service (PaaS)',
      description: 'Complete development and deployment platforms in the cloud',
      features: ['Application Hosting', 'Database Management', 'Development Tools', 'API Management']
    },
    {
      title: 'Software as a Service (SaaS)',
      description: 'Ready-to-use cloud applications for immediate deployment',
      features: ['Business Applications', 'Collaboration Tools', 'Analytics Platforms', 'CRM Systems']
    }
=======
  const benefits = [
    'Reduced infrastructure costs by up to 40%',
    'Improved scalability and flexibility',
    'Enhanced security and compliance',
    '24/7 monitoring and support',
    'Faster deployment and time-to-market',
    'Disaster recovery and backup solutions',
    'Global accessibility and performance',
    'AI-powered optimization and insights'
>>>>>>> cursor/fix-errors-and-merge-to-main-c587
  ];

  return (
    <>
      <Helmet>
<<<<<<< HEAD
        <title>Cloud Services | Zion Tech Group</title>
        <meta name="description" content="Professional cloud services by Zion Tech Group. Advanced cloud solutions for your business." />
        <meta name="keywords" content="cloud services, cloud migration, IaaS, PaaS, SaaS, Zion Tech Group" />
>>>>>>> cursor/fix-errors-and-merge-to-main-ace5
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
<<<<<<< HEAD
              Page
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional page services to help your business succeed and grow.
=======
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Cloud
              </span>
              <br />
              <span className="text-white">Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our advanced cloud solutions. 
              Powered by cutting-edge technology and industry expertise.
>>>>>>> cursor/fix-errors-and-merge-to-main-ace5
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Contact us today to learn more about our page services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Contact Us
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
=======
        <title>Cloud Services - Enterprise Cloud Solutions | Zion Tech Group</title>
        <meta name="description" content="Transform your business with our comprehensive cloud services. Migration, architecture, management, and AI-powered optimization solutions." />
        <meta name="keywords" content="cloud services, cloud migration, cloud architecture, cloud management, hybrid cloud, enterprise cloud" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Cloud Services
                </span>
                <br />
                <span className="text-white">Solutions</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your business with our comprehensive cloud services. 
                Migration, architecture, management, and AI-powered optimization solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
>>>>>>> cursor/fix-errors-and-merge-to-main-c587
                  Learn More
                </button>
              </div>
            </div>
          </div>
<<<<<<< HEAD
        </div>
<<<<<<< HEAD
      </main>
      
      <Footer />
=======
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Cloud Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the power of our cloud solutions for your business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300">
                <feature.icon className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
=======
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our Cloud Services?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our cloud solutions deliver unmatched performance, security, and scalability.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <div className="flex items-center mb-4">
                    <feature.icon className="h-8 w-8 text-purple-400 mr-3" />
                    <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Cloud Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive cloud solutions tailored to your business needs.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-c587
          </div>
        </section>

<<<<<<< HEAD
      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Cloud Service Offerings
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive cloud solutions designed to meet your specific business requirements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300">
                <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact us today to discuss your cloud service requirements and get a customized solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
              View Portfolio
            </button>
          </div>
        </div>
      </section>
>>>>>>> cursor/fix-errors-and-merge-to-main-ace5
    </div>
=======
        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Benefits of Our Cloud Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the power of our cloud solutions for your business.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 text-center">
                  <CheckCircle className="h-8 w-8 text-green-400 mx-auto mb-4" />
                  <p className="text-gray-300">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Contact our experts to discuss your cloud needs and get a customized solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                <Phone className="mr-2 h-5 w-5" />
                Call Us
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center justify-center">
                <Mail className="mr-2 h-5 w-5" />
                Email Us
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
>>>>>>> cursor/fix-errors-and-merge-to-main-c587
  );
};

export default CloudServicesPage;