'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, Zap, Settings, Clock, Users, Shield, BarChart, ArrowRight } from 'lucide-react';

const AIOpsPage: React.FC = () => {
  const features = [
    {
      icon: Settings,
      title: 'Intelligent IT Operations',
      description: 'AI-powered IT operations that automatically detect, diagnose, and resolve issues before they impact your business.',
      benefits: ['Proactive monitoring', 'Automated remediation', 'Predictive analytics']
    },
    {
      icon: Zap,
      title: 'Automated Incident Response',
      description: 'Automatically respond to incidents with intelligent root cause analysis and resolution recommendations.',
      benefits: ['Faster resolution', 'Reduced downtime', 'Smart diagnostics']
    },
    {
      icon: Clock,
      title: '24/7 Monitoring',
      description: 'Continuous monitoring of your entire IT infrastructure with real-time alerts and notifications.',
      benefits: ['Always-on monitoring', 'Instant alerts', 'Comprehensive coverage']
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Enable seamless collaboration between IT teams with shared dashboards and communication tools.',
      benefits: ['Team coordination', 'Shared visibility', 'Efficient workflows']
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption, audit trails, and compliance features for IT operations.',
      benefits: ['Data protection', 'Audit compliance', 'Secure operations']
    },
    {
      icon: BarChart,
      title: 'Performance Analytics',
      description: 'Comprehensive analytics to track IT performance and identify optimization opportunities.',
      benefits: ['Performance insights', 'Trend analysis', 'Optimization recommendations']
    }
  ];

  const benefits = [
    'Reduce IT incidents by up to 80%',
    'Decrease mean time to resolution by 90%',
    'Improve system uptime to 99.9%',
    'Automate routine IT tasks',
    'Enable proactive problem prevention',
    'Scale IT operations efficiently'
  ];

  return (
    <>
      <Helmet>
        <title>AI Operations (AIOps) - Zion Tech Group</title>
        <meta name="description" content="Transform your IT operations with AI-powered automation, monitoring, and incident response. Reduce downtime and improve efficiency." />
        <meta name="keywords" content="AIOps, IT operations, automation, monitoring, incident response, DevOps" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="relative py-20 lg:py-32 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-600/20"></div>
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                  AI Operations (AIOps)
                </h1>
                <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
                  Transform your IT operations with AI-powered automation, monitoring, and incident response. 
                  Reduce downtime and improve efficiency with intelligent operations.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <div className="flex items-center space-x-2 bg-purple-500/20 px-4 py-2 rounded-lg">
                    <Settings className="w-5 h-5 text-purple-400" />
                    <span className="text-white font-medium">Intelligent Automation</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-blue-500/20 px-4 py-2 rounded-lg">
                    <Zap className="w-5 h-5 text-blue-400" />
                    <span className="text-white font-medium">Automated Response</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-green-500/20 px-4 py-2 rounded-lg">
                    <Clock className="w-5 h-5 text-green-400" />
                    <span className="text-white font-medium">24/7 Monitoring</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-20 bg-slate-800/50">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                    Advanced AIOps Capabilities
                  </h2>
                  <p className="text-xl text-gray-300">
                    Comprehensive AI-powered tools for modern IT operations
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {features.map((feature, index) => (
                    <div key={index} className="bg-slate-700/50 rounded-xl p-6 hover:bg-slate-700/70 transition-colors">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-gray-300 mb-4">
                        {feature.description}
                      </p>
                      <ul className="space-y-2">
                        {feature.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-400">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                    Transform Your IT Operations
                  </h2>
                  <p className="text-xl text-gray-300">
                    Achieve measurable improvements in efficiency, reliability, and performance
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl p-6 text-center hover:from-slate-700 hover:to-slate-600 transition-all">
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <CheckCircle className="w-8 h-8 text-white" />
                      </div>
                      <p className="text-white font-medium">
                        {benefit}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                  Ready to Automate Your IT Operations?
                </h2>
                <p className="text-xl text-purple-100 mb-8">
                  Start your AIOps transformation today and experience the future of IT operations
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center">
                    <ArrowRight className="w-5 h-5 mr-2" />
                    Get Started
                  </button>
                  <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors flex items-center justify-center">
                    <Users className="w-5 h-5 mr-2" />
                    Contact Expert
                  </button>
                </div>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default AIOpsPage;