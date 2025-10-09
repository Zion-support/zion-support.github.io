'use client';
import React from 'react';
import { Cloud, ArrowRight, CheckCircle, Shield, Zap, Users, TrendingUp, Clock } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const CloudMigrationPage: React.FC = () => {
  const features = [
    {
      icon: Cloud,
      title: 'Seamless Migration',
      description: 'Zero-downtime migration to cloud platforms with automated data transfer and validation.'
    },
    {
      icon: Shield,
      title: 'Security First',
      description: 'Enterprise-grade security protocols and compliance standards throughout the migration process.'
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Optimize your cloud infrastructure for maximum performance and cost efficiency.'
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: 'Dedicated cloud architects and engineers guide you through every step of the process.'
    }
  ];

  const benefits = [
    'Reduce infrastructure costs by 40%',
    'Improve scalability and flexibility',
    'Enhanced security and compliance',
    '24/7 monitoring and support',
    'Faster deployment and updates',
    'Disaster recovery and backup'
  ];

  const migrationSteps = [
    {
      step: '01',
      title: 'Assessment & Planning',
      description: 'Comprehensive analysis of your current infrastructure and migration requirements.'
    },
    {
      step: '02',
      title: 'Strategy Design',
      description: 'Custom migration strategy tailored to your business needs and goals.'
    },
    {
      step: '03',
      title: 'Migration Execution',
      description: 'Seamless migration with minimal downtime and maximum data integrity.'
    },
    {
      step: '04',
      title: 'Optimization & Support',
      description: 'Continuous optimization and ongoing support for your cloud infrastructure.'
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="Cloud Migration Services - Zion Tech Group"
        description="Seamless cloud migration with zero downtime. Reduce costs by 40% and improve scalability with our expert cloud migration services."
        keywords={['cloud migration', 'cloud services', 'AWS migration', 'Azure migration', 'cloud infrastructure', 'cloud consulting']}
        canonicalUrl="https://ziontechgroup.com/cloud-migration"
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center pt-20">
        <div className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2 bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm">
                  <Cloud className="w-4 h-4" />
                  <span>Cloud Migration Services</span>
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Seamless
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"> Cloud Migration</span>
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Transform your business with zero-downtime cloud migration. Reduce infrastructure costs by 40% while improving scalability, security, and performance.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="cyber-button inline-flex items-center justify-center px-8 py-4 text-lg">
                  <Cloud className="w-5 h-5 mr-2" />
                  Start Migration
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 px-8 py-4 rounded-lg transition-all duration-300 text-lg">
                  Get Free Assessment
                </button>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400">40%</div>
                  <div className="text-sm text-gray-400">Cost Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400">Zero</div>
                  <div className="text-sm text-gray-400">Downtime</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400">99.9%</div>
                  <div className="text-sm text-gray-400">Uptime SLA</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-2xl p-8 backdrop-blur-sm border border-cyan-500/30">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-white font-medium">Migration Dashboard</span>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-slate-800/50 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-cyan-400 text-sm">Data Transfer</span>
                        <span className="text-green-400 text-sm">95% Complete</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <div className="bg-gradient-to-r from-cyan-400 to-purple-400 h-2 rounded-full w-4/5"></div>
                      </div>
                    </div>
                    <div className="bg-slate-800/50 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-purple-400 text-sm">Application Sync</span>
                        <span className="text-green-400 text-sm">Complete</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <div className="bg-gradient-to-r from-purple-400 to-pink-400 h-2 rounded-full w-full"></div>
                      </div>
                    </div>
                    <div className="bg-slate-800/50 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-pink-400 text-sm">Security Validation</span>
                        <span className="text-yellow-400 text-sm">In Progress</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <div className="bg-gradient-to-r from-pink-400 to-orange-400 h-2 rounded-full w-3/5"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Comprehensive Cloud Migration Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our expert team handles every aspect of your cloud migration, from initial assessment to ongoing optimization and support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 group">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Migration Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Our Migration Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A proven 4-step process that ensures successful cloud migration with minimal risk and maximum benefit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {migrationSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300">
                  <div className="text-4xl font-bold text-cyan-400 mb-4">{step.step}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
                {index < migrationSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 transform -translate-y-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Why Choose Our Cloud Migration?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Our cloud migration services deliver measurable improvements in cost, performance, and scalability while ensuring zero downtime.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300 text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-2xl p-8">
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-6xl font-bold text-cyan-400 mb-2">40%</div>
                  <div className="text-white text-xl">Cost Reduction</div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-slate-800/50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-400">Zero</div>
                    <div className="text-sm text-gray-300">Downtime</div>
                  </div>
                  <div className="text-center p-4 bg-slate-800/50 rounded-lg">
                    <div className="text-2xl font-bold text-green-400">99.9%</div>
                    <div className="text-sm text-gray-300">Uptime SLA</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Migrate to the Cloud?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Get a free cloud migration assessment and discover how much you can save while improving performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cyber-button inline-flex items-center justify-center px-8 py-4 text-lg">
                <Clock className="w-5 h-5 mr-2" />
                Get Free Assessment
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 px-8 py-4 rounded-lg transition-all duration-300 text-lg">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default CloudMigrationPage;