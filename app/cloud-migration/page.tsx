'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Cloud, ArrowRight, Shield, Zap, CheckCircle, Star, Globe, Smartphone, Code, Database, Lock, Users, Target, TrendingUp, Brain } from 'lucide-react';

const CloudMigrationPage: React.FC = () => {
  const features = [
    {
      icon: Cloud,
      title: 'Multi-Cloud Strategy',
      description: 'Design and implement cloud strategies across AWS, Azure, and Google Cloud platforms.'
    },
    {
      icon: Shield,
      title: 'Security-First Approach',
      description: 'Ensure data security and compliance throughout the migration process with enterprise-grade security.'
    },
    {
      icon: Zap,
      title: 'Zero-Downtime Migration',
      description: 'Migrate applications and data with minimal downtime using advanced migration techniques.'
    },
    {
      icon: Database,
      title: 'Data Migration',
      description: 'Safely migrate databases and data warehouses to the cloud with data integrity guarantees.'
    },
    {
      icon: Code,
      title: 'Application Modernization',
      description: 'Modernize legacy applications for cloud-native architectures and microservices.'
    },
    {
      icon: Target,
      title: 'Cost Optimization',
      description: 'Optimize cloud costs with right-sizing, reserved instances, and automated scaling.'
    }
  ];

  const migrationSteps = [
    {
      title: 'Assessment & Planning',
      description: 'Comprehensive analysis of current infrastructure and creation of detailed migration roadmap.',
      icon: CheckCircle
    },
    {
      title: 'Security & Compliance',
      description: 'Implement security controls and ensure compliance with industry regulations.',
      icon: Shield
    },
    {
      title: 'Data Migration',
      description: 'Migrate databases, files, and applications with zero data loss.',
      icon: Database
    },
    {
      title: 'Application Migration',
      description: 'Move applications to cloud platforms with performance optimization.',
      icon: Code
    },
    {
      title: 'Testing & Validation',
      description: 'Comprehensive testing to ensure all systems work correctly in the cloud.',
      icon: Target
    },
    {
      title: 'Go-Live & Support',
      description: 'Smooth transition to cloud operations with ongoing support and monitoring.',
      icon: Globe
    }
  ];

  const benefits = [
    'Reduce infrastructure costs by up to 40%',
    'Improve scalability and flexibility',
    'Enhance security and compliance',
    'Enable remote work capabilities',
    'Reduce maintenance overhead',
    'Access to latest cloud technologies'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 text-sm font-medium mb-6">
              <Cloud className="w-4 h-4 mr-2" />
              Cloud Migration Services
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Seamless Cloud
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> Migration</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Migrate your infrastructure to the cloud with zero downtime, enhanced security, and optimized performance. Our experts handle every aspect of your cloud journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cyber-button inline-flex items-center px-8 py-4 text-lg">
                Start Migration
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="px-8 py-4 border border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500/10 transition-colors">
                Get Assessment
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Migration Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our cloud migration experts provide end-to-end services to ensure a smooth, secure, and cost-effective transition to the cloud.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-blue-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Migration Process Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Migration Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We follow a proven methodology to ensure your cloud migration is successful, secure, and cost-effective.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {migrationSteps.map((step, index) => (
              <div key={index} className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4">
                  <step.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Choose Cloud Migration?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Cloud migration delivers significant benefits including cost savings, improved scalability, and enhanced security for your business.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300 text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl p-8 border border-blue-500/30">
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">40%</div>
                <div className="text-gray-300 mb-6">Cost Reduction</div>
                <div className="text-4xl font-bold text-white mb-2">99.9%</div>
                <div className="text-gray-300 mb-6">Uptime Guarantee</div>
                <div className="text-4xl font-bold text-white mb-2">Zero</div>
                <div className="text-gray-300">Data Loss</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Move to the Cloud?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get a free cloud migration assessment and discover how much you can save while improving performance and security.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="cyber-button inline-flex items-center px-8 py-4 text-lg">
              Get Free Assessment
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="px-8 py-4 border border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500/10 transition-colors">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CloudMigrationPage;