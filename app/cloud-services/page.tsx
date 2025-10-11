import React from 'react';
<<<<<<< HEAD
import { CheckCircle, ArrowRight, Cloud, Server, Shield, Zap } from 'lucide-react';
=======
import { ArrowRight, Cloud, Shield, Zap, Globe, CheckCircle } from 'lucide-react';
>>>>>>> cursor/fix-errors-and-merge-to-main-529a
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const CloudServicesPage: React.FC = () => {
  const features = [
    {
<<<<<<< HEAD
icon: Cloud,
=======
icon: Cloud,

      title: 'Cloud Migration',
      description: 'Seamless migration to cloud infrastructure with zero downtime',
      benefits: ['Zero Downtime', 'Cost Optimization', 'Scalability', 'Security']
    },
    {
      icon: Shield,
      title: 'Security First',
      description: 'Enterprise-grade security and compliance for all cloud services',
      benefits: ['Data Encryption', 'Access Control', 'Compliance', 'Monitoring']
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Optimized cloud solutions for maximum performance and scalability',
      benefits: ['Auto Scaling', 'Load Balancing', 'CDN', 'Caching']
    },
    {
      icon: Globe,
      title: 'Global Reach',
description: 'Worldwide cloud infrastructure for global business operations',
      benefits: ['Multi-Region', 'Edge Computing', 'Low Latency', 'High Availability']
    },
    {
      icon: CheckCircle,
      title: 'Managed Services',
      description: 'Complete cloud management and monitoring services',
      benefits: ['24/7 Support', 'Proactive Monitoring', 'Backup & Recovery', 'Updates']
    },
    {
      icon: ArrowRight,
      title: 'DevOps Integration',
      description: 'Seamless integration with CI/CD pipelines and development workflows',
      benefits: ['CI/CD Pipelines', 'Infrastructure as Code', 'Automation', 'Monitoring']
    }
  ];

  const cloudProviders = [
    {
      name: 'Amazon Web Services',
description: 'Comprehensive AWS solutions including EC2, S3, Lambda, and more',
      features: ['EC2', 'S3', 'Lambda', 'RDS', 'CloudFront']
    },
    {
      name: 'Microsoft Azure',
      description: 'Enterprise-grade Azure cloud services and hybrid solutions',
      features: ['Virtual Machines', 'Azure SQL', 'Functions', 'App Service', 'Cosmos DB']
    },
    {
      name: 'Google Cloud Platform',
      description: 'Advanced GCP services with AI and machine learning capabilities',
      features: ['Compute Engine', 'Cloud Storage', 'BigQuery', 'AI Platform', 'Kubernetes']
=======

=======
      title: 'Cloud Infrastructure',
      description: 'Scalable and reliable cloud infrastructure solutions.',
      benefits: ['Auto-scaling', 'High Availability', 'Global Reach', 'Cost Optimization'],
      icon: <Cloud className="w-8 h-8 text-blue-400" />
    },
    {
      title: 'Server Management',
      description: 'Professional server management and maintenance services.',
      benefits: ['24/7 Monitoring', 'Security Updates', 'Performance Tuning', 'Backup Solutions'],
      icon: <Server className="w-8 h-8 text-purple-400" />
    },
    {
      title: 'Security Solutions',
      description: 'Comprehensive cloud security and compliance solutions.',
      benefits: ['Data Encryption', 'Access Control', 'Threat Detection', 'Compliance'],
      icon: <Shield className="w-8 h-8 text-green-400" />
    },
    {
      title: 'Performance Optimization',
      description: 'Advanced performance optimization and monitoring.',
      benefits: ['Load Balancing', 'Caching', 'CDN Integration', 'Real-time Monitoring'],
      icon: <Zap className="w-8 h-8 text-orange-400" />
=======
      title: 'Cloud Migration',
      description: 'Seamless migration of your applications and data to the cloud.',
      benefits: ['Zero downtime', 'Cost optimization', 'Scalability', 'Security'],
      icon: <Cloud className="w-8 h-8 text-blue-400" />
    },
    {
      title: 'Cloud Security',
      description: 'Comprehensive security solutions for your cloud infrastructure.',
      benefits: ['Data encryption', 'Access control', 'Threat detection', 'Compliance'],
      icon: <Shield className="w-8 h-8 text-green-400" />
    },
    {
      title: 'Auto Scaling',
      description: 'Automatic scaling based on demand and traffic patterns.',
      benefits: ['Cost efficiency', 'Performance optimization', 'Load balancing', 'Monitoring'],
      icon: <Zap className="w-8 h-8 text-yellow-400" />
    },
    {
      title: 'Global CDN',
      description: 'Worldwide content delivery network for optimal performance.',
      benefits: ['Low latency', 'High availability', 'Global reach', 'Edge computing'],
      icon: <Globe className="w-8 h-8 text-purple-400" />
>>>>>>> cursor/fix-errors-and-merge-to-main-529a
    }
  ];

  return (
<<<<<<< HEAD
<>
      <Helmet>
        <title>Cloud Services | Zion Tech Group</title>
        <meta name="description" content="Professional cloud services and solutions by Zion Tech Group. Advanced cloud infrastructure and migration services." />
        <meta name="keywords" content="cloud services, cloud migration, AWS, Azure, GCP, Zion Tech Group" />
      </Helmet>
      
=======
    <>
      <Helmet>
        <title>Cloud Services | Zion Tech Group</title>
        <meta name="description" content="Professional cloud services and solutions by Zion Tech Group. Advanced cloud infrastructure and migration services." />
        <meta name="keywords" content="cloud services, cloud migration, AWS, Azure, GCP, cloud solutions, Zion Tech Group" />
      </Helmet>
      

=======
    <>
      <Helmet>
        <title>Cloud Services | Zion Tech Group</title>
        <meta name="description" content="Professional cloud services including migration, security, and optimization solutions." />
        <meta name="keywords" content="cloud services, cloud migration, cloud security, cloud optimization" />
      </Helmet>
      
>>>>>>> cursor/fix-errors-and-merge-to-main-529a
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Navigation />

        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Cloud
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
<<<<<<< HEAD
              Professional cloud services and solutions by Zion Tech Group. Advanced cloud infrastructure and migration services.

=======

=======
    <>
      <Helmet>
        <title>Cloud Services - Zion Tech Group</title>
        <meta name="description" content="Professional cloud services and infrastructure solutions." />
      </Helmet>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Cloud Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional cloud services and infrastructure solutions for modern businesses. 
              Scale your operations with our reliable cloud platform.
            </p>
=======
              Professional cloud services including migration, security, and optimization solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25">
                Get Started Today
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </button>
              <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Demo
              </button>
            </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-529a
          </div>

<<<<<<< HEAD
<div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Move to the Cloud?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Contact us today to learn more about our cloud services and migration solutions.

=======
Contact us today to learn more about our cloud services and migration solutions.

=======
        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Cloud Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive cloud services designed for modern businesses.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="mb-4">
                    {feature.icon}
                  </div>
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
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Contact us today to learn more about our cloud services.
>>>>>>> cursor/fix-errors-and-merge-to-main-529a
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Contact Us
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                  Learn More
                </button>
<<<<<<< HEAD
=======
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  {feature.icon}
                  <h3 className="text-xl font-semibold text-gray-900 ml-3">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center mx-auto">
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
</section>
=======
              </div>
            </div>
          </div>
        </section>
>>>>>>> cursor/fix-errors-and-merge-to-main-529a

        <Footer />
      </div>
    </>
<<<<<<< HEAD
</section>
        
        <Footer />
      </div>
    </>
=======

=======
        </div>
      </main>
      <Footer />
    </>
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-529a
  );
};

export default CloudServicesPage;
