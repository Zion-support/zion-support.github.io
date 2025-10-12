import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Code, Cloud, Shield, Database, Zap, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function DevOpsSolutionsPage() {
  const services = [
    {
      icon: <Code className="w-8 h-8 text-blue-500" />,
      title: 'CI/CD Pipeline Setup',
      description: 'Automated continuous integration and deployment pipelines for faster, more reliable releases.',
      features: ['Automated testing', 'Code quality checks', 'Deployment automation', 'Rollback capabilities']
    },
    {
      icon: <Cloud className="w-8 h-8 text-green-500" />,
      title: 'Infrastructure as Code',
      description: 'Manage your infrastructure through code with tools like Terraform and CloudFormation.',
      features: ['Terraform automation', 'CloudFormation templates', 'Version control', 'Environment consistency']
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'Security Integration',
      description: 'Integrate security practices into your development and deployment processes.',
      features: ['Security scanning', 'Compliance checks', 'Vulnerability management', 'Access controls']
    },
    {
      icon: <Database className="w-8 h-8 text-purple-500" />,
      title: 'Database Management',
      description: 'Automated database migrations, backups, and monitoring solutions.',
      features: ['Automated migrations', 'Backup strategies', 'Performance monitoring', 'Data integrity']
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: 'Performance Optimization',
      description: 'Optimize application performance through monitoring and automated scaling.',
      features: ['Performance monitoring', 'Auto-scaling', 'Load balancing', 'Caching strategies']
    },
    {
      icon: <Settings className="w-8 h-8 text-indigo-500" />,
      title: 'Configuration Management',
      description: 'Centralized configuration management for consistent deployments across environments.',
      features: ['Environment management', 'Secret management', 'Configuration validation', 'Change tracking']
    }
  ];

  const benefits = [
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Faster Deployments',
      description: 'Reduce deployment time from hours to minutes with automated pipelines.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Improved Reliability',
      description: 'Consistent, repeatable deployments reduce human error and system downtime.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Enhanced Security',
      description: 'Built-in security practices protect your applications and data throughout the lifecycle.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Cost Optimization',
      description: 'Automated scaling and resource management help optimize cloud costs.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>DevOps Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive DevOps solutions including CI/CD pipelines, infrastructure as code, and automated deployment strategies." />
        <meta name="keywords" content="DevOps, CI/CD, infrastructure as code, automation, deployment, cloud" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            DevOps Solutions for
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {' '}Modern Applications
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Streamline your development and deployment processes with our comprehensive DevOps solutions. 
            From CI/CD pipelines to infrastructure automation, we help you deliver software faster and more reliably.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center"
            >
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/about"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Our DevOps Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive DevOps solutions tailored to your development needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20">
                <div className="flex items-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-gray-300 text-sm flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Why Choose Our DevOps Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your development process with proven DevOps practices
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Development Process?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let our DevOps experts help you build faster, more reliable software delivery pipelines.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center"
            >
              Start Your DevOps Journey
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              to="/it-services" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Explore IT Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}