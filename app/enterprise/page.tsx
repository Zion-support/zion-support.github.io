'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { CheckCircle, TrendingUp, Phone, Mail, MapPin, Building, Shield, Users, Globe, Zap, Database, Cloud, Code, Target, BarChart, Award, Clock, Star, ArrowRight } from 'lucide-react';

const EnterprisePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer
        title="Enterprise Solutions - Zion Tech Group"
        description="Comprehensive enterprise-grade solutions for large-scale business operations."
        keywords={["enterprise solutions","enterprise software","large-scale solutions","enterprise integration","business solutions"]}
        canonicalUrl="https://ziontechgroup.com/enterprise"
      />

      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 cyber-text neon-pulse">
              Enterprise Solutions
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              Comprehensive enterprise-grade solutions designed for large-scale business operations, 
              scalability, and mission-critical performance.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 bg-cyan-500/20 px-4 py-2 rounded-lg">
                <Shield className="w-5 h-5 text-cyan-400" />
                <span className="text-white font-medium">Enterprise Security</span>
              </div>
              <div className="flex items-center space-x-2 bg-purple-500/20 px-4 py-2 rounded-lg">
                <Users className="w-5 h-5 text-purple-400" />
                <span className="text-white font-medium">Scalable Solutions</span>
              </div>
              <div className="flex items-center space-x-2 bg-green-500/20 px-4 py-2 rounded-lg">
                <Globe className="w-5 h-5 text-green-400" />
                <span className="text-white font-medium">Global Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Enterprise-Grade Features</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built for enterprise needs with security, scalability, and reliability at the core.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: 'Enterprise Security',
                description: 'Bank-level security with end-to-end encryption, compliance certifications, and advanced threat protection.'
              },
              {
                icon: Users,
                title: 'Scalable Architecture',
                description: 'Designed to handle millions of users and transactions with auto-scaling and load balancing capabilities.'
              },
              {
                icon: Database,
                title: 'Data Management',
                description: 'Advanced data processing, analytics, and management solutions for enterprise-scale operations.'
              },
              {
                icon: Cloud,
                title: 'Cloud Integration',
                description: 'Seamless integration with existing cloud infrastructure and hybrid cloud deployment options.'
              },
              {
                icon: Code,
                title: 'Custom Development',
                description: 'Tailored solutions built specifically for your enterprise requirements and business processes.'
              },
              {
                icon: Globe,
                title: 'Global Support',
                description: '24/7 enterprise support with dedicated account managers and global deployment capabilities.'
              }
            ].map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl p-6 h-full border border-slate-700/50 group-hover:border-purple-500/50 transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Enterprise Solutions</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive solutions designed to address enterprise challenges and drive digital transformation.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            {[
              {
                title: 'AI-Powered Enterprise Automation',
                description: 'Intelligent automation solutions that streamline complex enterprise processes, reduce operational costs, and improve efficiency across all departments.',
                features: [
                  'Process automation and workflow optimization',
                  'Intelligent document processing',
                  'Predictive analytics and insights',
                  'Integration with existing enterprise systems'
                ],
                icon: Zap
              },
              {
                title: 'Enterprise Data Analytics Platform',
                description: 'Advanced analytics platform that transforms enterprise data into actionable insights, enabling data-driven decision making at scale.',
                features: [
                  'Real-time data processing and analysis',
                  'Advanced visualization and reporting',
                  'Machine learning-powered insights',
                  'Enterprise-grade data governance'
                ],
                icon: BarChart
              },
              {
                title: 'Cloud Migration & Modernization',
                description: 'Comprehensive cloud migration services that modernize legacy systems and optimize enterprise infrastructure for the cloud era.',
                features: [
                  'Legacy system modernization',
                  'Cloud-native architecture design',
                  'Zero-downtime migration strategies',
                  'Cost optimization and performance tuning'
                ],
                icon: Cloud
              },
              {
                title: 'Enterprise Cybersecurity Suite',
                description: 'Comprehensive security solutions that protect enterprise assets, ensure compliance, and provide advanced threat detection and response.',
                features: [
                  'Advanced threat detection and prevention',
                  'Compliance management and reporting',
                  'Security monitoring and incident response',
                  'Employee security training and awareness'
                ],
                icon: Shield
              }
            ].map((solution, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl p-8 border border-slate-700/50 group-hover:border-purple-500/50 transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300">
                      <solution.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{solution.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">{solution.description}</p>
                  <ul className="space-y-3">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-400">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Enterprise?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our enterprise solutions can help you achieve your business objectives 
            and drive digital transformation at scale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Schedule Enterprise Consultation
              <ArrowRight className="inline-block ml-2 w-5 h-5" />
            </button>
            <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Download Enterprise Brochure
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EnterprisePage;