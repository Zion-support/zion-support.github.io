'use client';
import React, { memo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Cloud, Shield, Zap, CheckCircle, ArrowRight, Phone, MessageSquare, Star, TrendingUp, Settings, Database, Globe, Server, Lock, Activity } from 'lucide-react';

const CloudMigrationPage: React.FC = memo(() => {
  const features = [
    {
      icon: Cloud,
      title: 'Zero-Downtime Migration',
      description: 'Seamless migration with zero business disruption using advanced replication and failover technologies',
      color: 'text-blue-400'
    },
    {
      icon: Shield,
      title: 'Enhanced Security',
      description: 'Enterprise-grade security with encryption, compliance, and advanced threat protection',
      color: 'text-green-400'
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'AI-powered optimization ensures your applications run 3x faster in the cloud',
      color: 'text-purple-400'
    },
    {
      icon: Server,
      title: 'Scalable Infrastructure',
      description: 'Auto-scaling capabilities that adapt to your business needs and traffic patterns',
      color: 'text-orange-400'
    },
    {
      icon: Database,
      title: 'Data Migration',
      description: 'Safe and secure migration of all your data with integrity checks and validation',
      color: 'text-cyan-400'
    },
    {
      icon: Activity,
      title: '24/7 Monitoring',
      description: 'Continuous monitoring and support to ensure optimal performance and reliability',
      color: 'text-red-400'
    }
  ];

  const migrationSteps = [
    {
      step: '01',
      title: 'Assessment & Planning',
      description: 'Comprehensive analysis of your current infrastructure and migration requirements',
      duration: '1-2 weeks'
    },
    {
      step: '02',
      title: 'Strategy Development',
      description: 'Custom migration strategy tailored to your business needs and compliance requirements',
      duration: '1 week'
    },
    {
      step: '03',
      title: 'Pilot Migration',
      description: 'Small-scale pilot migration to test and validate the migration process',
      duration: '2-3 weeks'
    },
    {
      step: '04',
      title: 'Full Migration',
      description: 'Complete migration of all systems and applications with zero downtime',
      duration: '2-4 weeks'
    },
    {
      step: '05',
      title: 'Optimization',
      description: 'Performance tuning and optimization to maximize cloud benefits',
      duration: '1-2 weeks'
    },
    {
      step: '06',
      title: 'Support & Training',
      description: 'Ongoing support and team training to ensure smooth operations',
      duration: 'Ongoing'
    }
  ];

  const benefits = [
    {
      metric: '99.9%',
      label: 'Uptime Guarantee',
      description: 'Enterprise-grade reliability and availability'
    },
    {
      metric: '50%',
      label: 'Cost Reduction',
      description: 'Significant savings on infrastructure and maintenance'
    },
    {
      metric: '3x',
      label: 'Performance Boost',
      description: 'Faster application performance and response times'
    },
    {
      metric: '24/7',
      label: 'Support',
      description: 'Round-the-clock monitoring and support'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Helmet>
        <title>Cloud Migration Services - Seamless Cloud Transition | Zion Tech Group</title>
        <meta name="description" content="Professional cloud migration services with zero downtime, enhanced security, and 3x performance boost. Migrate to AWS, Azure, or GCP with confidence." />
        <meta name="keywords" content="cloud migration, AWS migration, Azure migration, GCP migration, cloud services, infrastructure migration" />
        <meta property="og:title" content="Cloud Migration Services - Seamless Cloud Transition" />
        <meta property="og:description" content="Professional cloud migration services with zero downtime and enhanced security." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/cloud-migration" />
      </Helmet>

      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-600/20 text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Cloud className="w-4 h-4" />
            <span>Cloud Migration Services</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Cloud Migration Services
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Seamlessly migrate your infrastructure to the cloud with zero downtime, enhanced security, 
            and 3x performance improvement. Trust our experts for a smooth transition.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call: (302) 464-0950
            </a>
            <a
              href="/contact"
              className="border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-slate-900 transition-all duration-300"
            >
              Get Free Assessment
            </a>
          </div>
        </section>

        {/* Benefits Stats */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-slate-800/50 p-6 rounded-lg border border-blue-500/20 text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">{benefit.metric}</div>
                <div className="text-white font-semibold mb-2">{benefit.label}</div>
                <div className="text-sm text-gray-400">{benefit.description}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Comprehensive Migration Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our cloud migration experts handle every aspect of your transition with precision and care
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/30 p-6 rounded-lg border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
                <div className={`w-12 h-12 rounded-lg bg-slate-700/50 flex items-center justify-center mb-4`}>
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Migration Process */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Our Migration Process</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A proven 6-step process that ensures successful cloud migration
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {migrationSteps.map((step, index) => (
              <div key={index} className="bg-slate-800/30 p-6 rounded-lg border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold text-lg mr-4">
                    {step.step}
                  </div>
                  <div className="text-sm text-blue-400 font-semibold">{step.duration}</div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Cloud Providers */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Cloud Platform Expertise</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We work with all major cloud providers to find the best fit for your needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800/30 p-8 rounded-lg border border-gray-700 text-center">
              <div className="w-16 h-16 bg-orange-500 text-white rounded-lg flex items-center justify-center mx-auto mb-4">
                <Cloud className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Amazon Web Services</h3>
              <p className="text-gray-400 mb-6">Comprehensive AWS migration services with expertise in EC2, S3, RDS, and more</p>
              <ul className="text-left space-y-2 text-sm text-gray-300">
                <li>• EC2 Instance Migration</li>
                <li>• Database Migration (RDS)</li>
                <li>• Storage Migration (S3)</li>
                <li>• Lambda Functions</li>
              </ul>
            </div>
            
            <div className="bg-slate-800/30 p-8 rounded-lg border border-gray-700 text-center">
              <div className="w-16 h-16 bg-blue-500 text-white rounded-lg flex items-center justify-center mx-auto mb-4">
                <Cloud className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Microsoft Azure</h3>
              <p className="text-gray-400 mb-6">Seamless Azure migration with focus on hybrid cloud and enterprise integration</p>
              <ul className="text-left space-y-2 text-sm text-gray-300">
                <li>• Virtual Machines</li>
                <li>• Azure SQL Database</li>
                <li>• Blob Storage</li>
                <li>• Azure Functions</li>
              </ul>
            </div>
            
            <div className="bg-slate-800/30 p-8 rounded-lg border border-gray-700 text-center">
              <div className="w-16 h-16 bg-green-500 text-white rounded-lg flex items-center justify-center mx-auto mb-4">
                <Cloud className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Google Cloud Platform</h3>
              <p className="text-gray-400 mb-6">Advanced GCP migration with focus on AI/ML and data analytics</p>
              <ul className="text-left space-y-2 text-sm text-gray-300">
                <li>• Compute Engine</li>
                <li>• Cloud SQL</li>
                <li>• Cloud Storage</li>
                <li>• Cloud Functions</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-12 rounded-lg border border-blue-500/30">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Move to the Cloud?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get a free cloud migration assessment and discover how much you can save and improve performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call: (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Email Us
            </a>
          </div>
        </section>
      </div>
    </div>
  );
});

CloudMigrationPage.displayName = 'CloudMigrationPage';

export default CloudMigrationPage;