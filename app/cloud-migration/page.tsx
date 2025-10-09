'use client';
import React from 'react';
import { Cloud, Shield, Zap, BarChart, Users, Clock, CheckCircle, ArrowRight, Star, Database, Server } from 'lucide-react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

const CloudMigrationPage: React.FC = () => {
  const features = [
    {
      icon: Cloud,
      title: 'Seamless Migration',
      description: 'Automated migration tools that ensure zero downtime and data integrity during cloud transitions.'
    },
    {
      icon: Shield,
      title: 'Security First',
      description: 'Comprehensive security assessment and implementation to protect your data in the cloud.'
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Optimize your cloud infrastructure for maximum performance and cost efficiency.'
    },
    {
      icon: BarChart,
      title: 'Cost Management',
      description: 'Intelligent cost monitoring and optimization to ensure you get the best value from cloud services.'
    },
    {
      icon: Users,
      title: 'Team Training',
      description: 'Comprehensive training programs to help your team adapt to cloud technologies.'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock support during and after migration to ensure smooth operations.'
    }
  ];

  const benefits = [
    { icon: CheckCircle, text: 'Reduce infrastructure costs by 40%' },
    { icon: CheckCircle, text: 'Improve scalability and flexibility' },
    { icon: CheckCircle, text: 'Enhance security and compliance' },
    { icon: CheckCircle, text: 'Enable remote work capabilities' },
    { icon: CheckCircle, text: 'Reduce maintenance overhead' },
    { icon: CheckCircle, text: 'Improve disaster recovery' }
  ];

  const migrationSteps = [
    {
      title: 'Assessment & Planning',
      description: 'Comprehensive analysis of your current infrastructure and migration requirements',
      icon: BarChart
    },
    {
      title: 'Security Review',
      description: 'Security assessment and implementation of cloud security best practices',
      icon: Shield
    },
    {
      title: 'Migration Execution',
      description: 'Automated migration with minimal downtime and data integrity assurance',
      icon: Cloud
    },
    {
      title: 'Optimization',
      description: 'Post-migration optimization for performance and cost efficiency',
      icon: Zap
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Cloud Migration</span> Services
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Seamlessly migrate your infrastructure to the cloud with our expert migration services. 
              Reduce costs, improve scalability, and enhance security with zero downtime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cyber-button inline-flex items-center">
                <Cloud className="w-5 h-5 mr-2" />
                Start Migration
              </button>
              <button className="cyber-button-secondary inline-flex items-center">
                <ArrowRight className="w-5 h-5 mr-2" />
                Get Assessment
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">40%</div>
              <div className="text-gray-300">Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">99.9%</div>
              <div className="text-gray-300">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">0</div>
              <div className="text-gray-300">Downtime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">24/7</div>
              <div className="text-gray-300">Support</div>
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
              End-to-end cloud migration solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="cyber-card p-6 hover:scale-105 transition-transform duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600/20 to-blue-600/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Migration Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the benefits of professional cloud migration
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <benefit.icon className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                <span className="text-gray-300">{benefit.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Migration Steps Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Migration Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A proven methodology for successful cloud migration
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {migrationSteps.map((step, index) => (
              <div key={index} className="cyber-card p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="cyber-card p-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Migrate to the Cloud?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get started with your cloud migration journey today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cyber-button inline-flex items-center">
                <Cloud className="w-5 h-5 mr-2" />
                Start Migration
              </button>
              <button className="cyber-button-secondary inline-flex items-center">
                <ArrowRight className="w-5 h-5 mr-2" />
                Get Free Assessment
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CloudMigrationPage;