'use client';
import React from "react";
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
export default function StatusZionTechGroup() {
'use client';
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="flex items-center gap-2">
              {getStatusIcon(overallStatus)}
              <span className={`text-2xl font-bold ${getStatusColor(overallStatus)}`}>
                {overallStatus === 'operational' ? 'All Systems Operational' : 
                 overallStatus === 'degraded' ? 'Degraded Performance' : 'Service Outage'}
              </span>
            </div></div>
            <button
              onClick={refreshStatus}
              disabled={isRefreshing}
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors disabled:opacity-50"
            >
              <RefreshCw className={`w-5 h-5 ${isRefreshing ? 'animate-spin' : ''}`} />
              Refresh
import React from 'react';

import {Helmet} from 'react-helmet-async';
import {Link} from 'react-router-dom';
import {ArrowRight} from 'lucide-react';

export default function Status() {return (
    <title>Status - Zion Tech Group</title>

            <h1 className="text-4xl font-bold text-white mb-6">Status</h1>
            <p className="text-lg text-gray-300 mb-8">Professional status services coming soon.</p>

              Contact Us

      <  />
  );}

    <><  />
      <Helmet></Helmet>
        <title>Status - Zion Tech Group</title>
        <meta name="description" content="Status services by Zion Tech Group. Professional AI and IT solutions."   /></meta>
        <meta name="keywords" content="status, AI solutions, IT services"   /></meta>
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            <h1 className="w-5h-5ml-2"   /></h1>
              <span className="w-5h-5ml-2"   />Status;
              </span>
            </h1>
            <p className="w-5h-5ml-2">Professional status services by Zion Tech Group.
            </p>
          </div>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            <h2 className="text-2 xl font-bold text-white mb-4"  >Coming Soon</h2>
            <p className="w-5h-5ml-2">We're working on bringing you comprehensive status solutions.
              Contact us to learn more about our services.
            </p>
            <button className="w-5h-5ml-2">Contact Us;
            </button>
          </div>
          
          <p className="text-gray-400 text-sm">
            Last updated: {lastUpdated.toLocaleString(),}
          </p>
        </div>
      </section>

      {/* Services Status */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Service Status</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    {getStatusIcon(service.status)}
                    <h3 className="text-lg font-semibold text-white">{service.name}</h3>
                  </div></div></div></div></div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(service.status)}`}>
                    {service.status}
                  </span>
                </div>
                
                <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Uptime:</span>
                    <span className="text-white">{service.uptime}</span>
                  </div></div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Response Time:</span>
                    <span className="text-white">{service.responseTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Last Incident:</span>
                    <span className="text-white">{service.lastIncident}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Incidents */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Recent Incidents</h2>
          <div className="space-y-6">
            {incidents.map((incident) => (
              <div key={incident.id} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{incident.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <span>Started: {new Date(incident.startTime).toLocaleString(),}</span>
                      <span>Ended: {new Date(incident.endTime).toLocaleString(),}</span>
                    </div></div></div></div></div></div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getSeverityColor(incident.severity)}`}>
                      {incident.severity}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      incident.status === 'resolved' 
                        ? 'bg-green-500/20 text-green-400' 
                        : 'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {incident.status}
                    </span>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4">{incident.description}</p>
                
                <div>
                  <span className="text-gray-400 text-sm">Affected Services: </span>
                  <span className="text-white text-sm">{incident.affectedServices.join(', ')}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Performance Metrics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div></div></div></div>
              <div className="text-3xl font-bold text-white mb-2">99.9%</div>
              <div className="text-gray-400">Overall Uptime</div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div></div>
              <div className="text-3xl font-bold text-white mb-2">45ms</div>
              <div className="text-gray-400">Avg Response Time</div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-white" />
              </div></div>
              <div className="text-3xl font-bold text-white mb-2">50K+</div>
              <div className="text-gray-400">Active Users</div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Activity className="w-6 h-6 text-white" />
              </div></div>
              <div className="text-3xl font-bold text-white mb-2">1.2M</div>
              <div className="text-gray-400">Requests Today</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-blue-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Need More Information?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Subscribe to status updates or contact our support team for more details.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
              Subscribe to Updates
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-purple-600 transition-colors">
              Contact Support
            </button>
          </div></div>
        </div>
      </div>
'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings } from 'lucide-react';

const SystemStatusPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Advanced AI algorithms that provide intelligent insights and recommendations.',
      benefits: ['Smart recommendations', 'Predictive analytics', 'Automated insights', 'Real-time analysis']
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics dashboard with real-time data visualization.',
      benefits: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics']
    },
    {
      icon: Target,
      title: 'Precision Targeting',
      description: 'Target specific goals and objectives with precision and accuracy.',
      benefits: ['Goal tracking', 'Performance optimization', 'Strategic planning', 'Success metrics']
    },
    {
      icon: TrendingUp,
      title: 'Growth Optimization',
      description: 'Optimize your business growth with data-driven strategies.',
      benefits: ['Growth strategies', 'Market analysis', 'Competitive insights', 'ROI optimization']
    },
    {
      icon: Zap,
      title: 'Fast Processing',
      description: 'Process large datasets in seconds with our optimized AI analytics engine.',
      benefits: ['High-speed processing', 'Scalable infrastructure', 'Real-time analysis', 'Batch processing']
    },
    {
      icon: Shield,
      title: 'Secure Analytics',
      description: 'Enterprise-grade security for your sensitive data and analytics.',
      benefits: ['Data encryption', 'Access controls', 'Audit trails', 'Compliance ready']
    }
  ];

  const benefits = [
    'Increase efficiency by up to 50%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    'Gain competitive advantage with advanced technology'
  ];

  return (
    <>
      <Helmet>
        <title>System Status - Zion Tech Group</title>
        <meta name="description" content="Real-time system status and monitoring." />
        <meta name="keywords" content="system status, monitoring, uptime, health" />
      </Helmet>

      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-amber-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              System Status
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Real-time system status and monitoring.
import React  from 'react';
const StatusPage: React.FC = () => {
  return (
      <Helmet>
        <title>Status - Zion Tech Group</title>
        <meta name="description" content="Status services by Zion Tech Group. Professional AI and IT solutions." / / />
        <meta name="keywords" content="status, AI solutions, IT services" / / />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900via-purple-900to-slate-900">
        <div className="container mx-autopx-4py-16">
          <div className="text-centermb-16">
            <h1 className="text-4xl md:text-6 xl font-bold text-white mb-6" />
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent"  />Status
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xlmx-auto">
              Professional status services by Zion Tech Group.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 backdrop-blur-sm border border-purple-500/20 rounded-xlp-8text-center">
            <h2 className="text-2 xl font-bold text-white mb-4"  >Coming Soon</h2>
            <p className="text-gray-300 mb-6">
              We're working on bringing you comprehensive status solutions. 
              Contact us to learn more about our services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-amber-500 to-blue-600 hover:from-amber-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
      </div>
        </div>
      </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Our Solution?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Proven results that drive business growth and efficiency
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-lg text-white font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our experts to discuss your requirements and get started today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-amber-500 to-blue-600 hover:from-amber-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Contact Us
                </button>
                <button className="border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

  );
};

export default SystemStatusPage;

import React from 'react';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';
import ErrorBoundary from '../components/ErrorBoundary';
import Navigation from '../components/Navigation';

const StatusPage = () => {
  return (
    <ErrorBoundary>
      <SEOHead 
        title="System Status - Zion Tech Group"
        description="System status for Zion Tech Group services"
      />
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-4xl font-bold text-white mb-8">System Status</h1>
          <div className="bg-green-500/20 border border-green-500 rounded-lg p-4">
            <p className="text-green-400 font-semibold">All systems operational</p>
          </div>
        </div>
      </main>

      <Footer />
    </ErrorBoundary>
  );
};

export default StatusPage;
    <  />
  );
};

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function StatusPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Status - Zion Tech Group</title>
        <meta name="description" content="Professional status services by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Status</h1>
          <p className="text-lg text-gray-300 mb-8">Professional status services coming soon.</p>
          
          <Link
            to="/contact"
            className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
          >
            Contact Us
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}
