import React from 'react';
import { CheckCircle, ArrowRight, Zap, Shield, Globe, Cloud, Database, Smartphone, Code, Server } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function DevOpsSolutionsPage() {
  const features = [
    {
      icon: <Code className="w-8 h-8 text-blue-500" />,
      title: 'CI/CD Pipeline Setup',
      description: 'Automated continuous integration and deployment pipelines for faster, more reliable releases.'
    },
    {
      icon: <Cloud className="w-8 h-8 text-green-500" />,
      title: 'Infrastructure as Code',
      description: 'Manage your infrastructure using code with tools like Terraform and CloudFormation.'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'Security Integration',
      description: 'Built-in security scanning and compliance checks in your deployment pipeline.'
    },
    {
      icon: <Database className="w-8 h-8 text-purple-500" />,
      title: 'Monitoring & Logging',
      description: 'Comprehensive monitoring, logging, and alerting solutions for your applications.'
    }
  ];

  const services = [
    {
      title: 'CI/CD Implementation',
      description: 'Set up automated build, test, and deployment pipelines',
      features: ['GitHub Actions', 'Jenkins', 'GitLab CI', 'Azure DevOps']
    },
    {
      title: 'Container Orchestration',
      description: 'Deploy and manage containerized applications at scale',
      features: ['Kubernetes', 'Docker Swarm', 'Amazon ECS', 'Azure Container Instances']
    },
    {
      title: 'Infrastructure Automation',
      description: 'Automate infrastructure provisioning and management',
      features: ['Terraform', 'Ansible', 'Puppet', 'Chef']
    },
    {
      title: 'Monitoring & Observability',
      description: 'Comprehensive monitoring and observability solutions',
      features: ['Prometheus', 'Grafana', 'ELK Stack', 'Datadog']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>DevOps Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive DevOps solutions including CI/CD, infrastructure automation, and monitoring. Accelerate your development lifecycle with our expert DevOps services." />
        <meta name="keywords" content="DevOps, CI/CD, infrastructure automation, monitoring, Kubernetes, Docker, cloud deployment" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Accelerate Development with
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {' '}DevOps Solutions
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Streamline your development lifecycle with our comprehensive DevOps services. 
            From CI/CD pipelines to infrastructure automation, we help you deploy faster and more reliably.
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

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Why Choose Our DevOps Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We deliver enterprise-grade DevOps solutions that accelerate your development process
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20">
                <div className="flex items-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Our DevOps Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive DevOps solutions tailored to your specific needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <div className="grid grid-cols-2 gap-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>
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
            Let our DevOps experts help you build faster, more reliable deployment pipelines.
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