'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe, Code, GitBranch, Server, Database, Cloud, Settings, Monitor, Rocket } from 'lucide-react';

const DevOpsPage: React.FC = () => {
  const features = [
    {
      icon: Code,
      title: 'CI/CD Pipeline',
      description: 'Automated continuous integration and deployment pipelines for faster, more reliable releases.',
      benefits: ['Automated testing', 'Deployment automation', 'Rollback capabilities', 'Multi-environment support']
    },
    {
      icon: GitBranch,
      title: 'Version Control',
      description: 'Advanced Git workflows and branching strategies for collaborative development.',
      benefits: ['Git best practices', 'Code review processes', 'Branch protection', 'Merge automation']
    },
    {
      icon: Server,
      title: 'Infrastructure as Code',
      description: 'Manage and provision infrastructure using code for consistency and scalability.',
      benefits: ['Terraform/CloudFormation', 'Infrastructure automation', 'Environment consistency', 'Cost optimization']
    },
    {
      icon: Monitor,
      title: 'Monitoring & Logging',
      description: 'Comprehensive monitoring and logging solutions for application performance and reliability.',
      benefits: ['Real-time monitoring', 'Log aggregation', 'Alerting systems', 'Performance metrics']
    }
  ];

  const benefits = [
    'Reduce deployment time by 80%',
    'Increase deployment frequency by 300%',
    'Decrease failure rate by 60%',
    'Faster recovery from incidents',
    'Improved collaboration between teams',
    'Automated testing and quality assurance',
    'Scalable and reliable infrastructure',
    'Cost-effective cloud resource management'
  ];

  const services = [
    {
      name: 'DevOps Assessment',
      description: 'Evaluate your current DevOps maturity and identify improvement opportunities',
      price: 'Starting at $3,000'
    },
    {
      name: 'CI/CD Implementation',
      description: 'Set up automated build, test, and deployment pipelines',
      price: 'Starting at $5,000'
    },
    {
      name: 'Infrastructure Automation',
      description: 'Implement Infrastructure as Code and automated provisioning',
      price: 'Starting at $7,000'
    },
    {
      name: 'DevOps Training',
      description: 'Train your team on DevOps best practices and tools',
      price: 'Starting at $2,000/day'
    }
  ];

  return (
    <>
      <Helmet>
        <title>DevOps & CI/CD - Zion Tech Group | Automation Solutions</title>
        <meta name="description" content="Comprehensive DevOps and CI/CD solutions including automation, monitoring, infrastructure as code, and team training." />
        <meta name="keywords" content="devops, ci/cd, continuous integration, continuous deployment, automation, infrastructure as code, monitoring" />
      </Helmet>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                  DevOps & CI/CD
                </span>
                <br />
                <span className="text-white">Solutions</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Accelerate your development lifecycle with our comprehensive DevOps and CI/CD solutions. 
                Automate, monitor, and scale your applications with confidence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-300 flex items-center">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our DevOps Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive DevOps services designed to streamline your development and operations.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg mb-4">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
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
                Why Choose Our DevOps Solutions?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transform your development process with proven DevOps practices and cutting-edge tools.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300 text-lg">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our DevOps Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive DevOps services tailored to your development needs.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-white mb-3">{service.name}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <div className="text-lg font-bold text-green-400">{service.price}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Development Process?
              </h2>
              <p className="text-xl text-green-100 mb-8">
                Contact our DevOps experts to discuss your automation needs and get a customized solution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </button>
                <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-all duration-300 flex items-center justify-center">
                  <Mail className="mr-2 h-5 w-5" />
                  Email Us
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default DevOpsPage;