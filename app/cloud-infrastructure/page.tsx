'use client';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Cloud, Shield, Zap, Database, Globe, CheckCircle, ArrowRight, Star, Clock, Users, BarChart, Settings, Server, Lock, TrendingUp, Target, Brain, Code, Smartphone } from 'lucide-react';

const CloudInfrastructurePage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const services = [
    {
      icon: Cloud,
      title: 'Cloud Migration',
      description: 'Seamless migration to AWS, Azure, or GCP with zero downtime',
      features: ['Assessment & Planning', 'Data Migration', 'Application Migration', 'Post-Migration Support']
    },
    {
      icon: Shield,
      title: 'Cloud Security',
      description: 'Comprehensive security solutions for your cloud infrastructure',
      features: ['Identity & Access Management', 'Data Encryption', 'Security Monitoring', 'Compliance Management']
    },
    {
      icon: Zap,
      title: 'Auto-Scaling',
      description: 'Dynamic resource allocation based on demand',
      features: ['Load Balancing', 'Auto-Scaling Groups', 'Performance Monitoring', 'Cost Optimization']
    },
    {
      icon: Database,
      title: 'Database Services',
      description: 'Managed database solutions for optimal performance',
      features: ['Database Migration', 'Performance Tuning', 'Backup & Recovery', 'Monitoring & Maintenance']
    }
  ];

  const platforms = [
    {
      name: 'Amazon Web Services (AWS)',
      description: 'Comprehensive cloud platform with 200+ services',
      features: ['EC2, S3, RDS', 'Lambda Functions', 'CloudFormation', 'CloudWatch'],
      icon: Cloud
    },
    {
      name: 'Microsoft Azure',
      description: 'Enterprise-grade cloud platform with hybrid capabilities',
      features: ['Virtual Machines', 'Azure SQL', 'Azure Functions', 'Azure Monitor'],
      icon: Globe
    },
    {
      name: 'Google Cloud Platform (GCP)',
      description: 'AI and machine learning focused cloud platform',
      features: ['Compute Engine', 'Cloud Storage', 'BigQuery', 'AI Platform'],
      icon: Brain
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Cost Reduction',
      description: 'Reduce infrastructure costs by up to 40% with optimized cloud resources'
    },
    {
      icon: Zap,
      title: 'Improved Performance',
      description: 'Enhanced application performance with auto-scaling and load balancing'
    },
    {
      icon: Shield,
      title: 'Enhanced Security',
      description: 'Bank-level security with advanced threat detection and compliance'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Deploy applications globally with low latency and high availability'
    }
  ];

  const stats = [
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '40%', label: 'Cost Reduction' },
    { number: '50+', label: 'Cloud Projects' },
    { number: '24/7', label: 'Monitoring' }
  ];

  return (
    <>
      <Helmet>
        <title>Cloud Infrastructure Services - Zion Tech Group | AWS, Azure, GCP</title>
        <meta name="description" content="Expert cloud infrastructure services including AWS, Azure, and GCP migration, security, and optimization. Reduce costs by 40% with our cloud solutions." />
        <meta name="keywords" content="cloud infrastructure, AWS, Azure, GCP, cloud migration, cloud security, cloud optimization" />
        <meta property="og:title" content="Cloud Infrastructure Services - Zion Tech Group" />
        <meta property="og:description" content="Expert cloud infrastructure services for AWS, Azure, and GCP" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className={`text-center mb-16 transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Cloud Infrastructure
            </h1>
            <p className="text-xl text-cyan-400 mb-8 font-medium">
              Scalable, Secure, and Cost-Effective Cloud Solutions
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Transform your business with our comprehensive cloud infrastructure services. We help you migrate, 
              secure, and optimize your cloud environment on AWS, Azure, and GCP to achieve maximum performance and cost efficiency.
            </p>
          </section>

          {/* Stats Section */}
          <section className="mb-16">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                {stats.map((stat, index) => (
                  <div key={index}>
                    <div className="text-4xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                    <div className="text-gray-300">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-white mb-12">
              Our Cloud Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{service.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Cloud Platforms Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-white mb-12">
              Supported Cloud Platforms
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {platforms.map((platform, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <platform.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{platform.name}</h3>
                  <p className="text-gray-300 mb-4">{platform.description}</p>
                  <ul className="space-y-1">
                    {platform.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-gray-400">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Benefits Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-white mb-12">
              Why Choose Our Cloud Solutions?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="mb-16">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 text-center border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-6">Ready to Transform Your Infrastructure?</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Let our cloud experts help you migrate to the cloud, optimize your infrastructure, and achieve maximum performance and cost efficiency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center"
                >
                  Get Free Consultation
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <a
                  href="tel:+13024640950"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  Call: (302) 464-0950
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default CloudInfrastructurePage;