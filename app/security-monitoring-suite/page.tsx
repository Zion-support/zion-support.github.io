'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import {Shield}
  Eye,
  AlertTriangle,
  CheckCircle,
  BarChart,
  Clock,
  Users,
  Zap,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Brain,
  Globe,
  Lock,
  Activity,
  TrendingUp,

  Settings,

  Database,

  Target,

  Monitor}} from 'lucide-react'
const SecurityMonitoringSuitePage: React.FC = () => {
    const features = [
    {
      icon: Monitor,
      title: 'Real-time Dashboard',
      description: 'Comprehensive security monitoring dashboard with live threat detection and incident tracking.'},
    {
      icon: AlertTriangle,
      title: 'Advanced Alerts',
      description: 'Intelligent alerting system that notifies you of security threats and anomalies instantly.'},
    {
      icon: BarChart,
      title: 'Security Analytics',
      description: 'Detailed security reports and analytics to help you understand and improve your security posture.'},
    {
      icon: Zap,
      title: 'Automated Response',
      description: 'Seamless integration with CI/CD pipelines and DevOps tools for streamlined operations.'
    }
  ];
const benefits = [
  ]
  const benefits = [
    '24/7 security monitoring and protection',
    'Real-time threat detection and alerts',
    'Comprehensive security analytics',
    'Automated incident response',

    'Compliance monitoring and reporting',

    'Easy-to-use dashboard interface',

    'Scalable for any business size',

    'Expert security team support'
  ]
return(<>)
      <Helmet><title>Security Monitoring Suite - Zion Tech Group | Cybersecurity Platform</title>
    'Expert security team support'
  ]
return (
    <>

      <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
        </section>
        {/* Hero Section */} <section className="py-20 px-4">
          <div className="max-w-7 xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4 xl font-boldtext-whitemb-4">Section Title</h2>
        {/* Hero Section */}
        <section className="py-20 px-4">
          </section>
        <div className="text-center mb-16">
              </div><h2 className="text-4 xl font-boldtext-whitemb-4">Section Title</h2>
              <p className="text-xltext-gray-300">Section description</p>
            </div>
        </div>
      </section>
          <div className="max-w-7 xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h1>Security Monitoring Suite;</h1>
              </h1>
              <p>Comprehensive cybersecurity platform with real-time monitoring, advanced threat detection,</p>
                and automated response capabilities to protect your business 24/7.
              </p>
              <div className="flexflex-colsm:flex-row gap-4 justify-center"></div>,
                <button>
                  <Shield>
                  Start Free Trial;
                </button>
                <button>
                  </button><Phone>
                  Call (302) 464-0950,
                </button>
              </div>
            </div>
        </div>
      </section>
        {/* Features Section */} <section className="py-20 px-4">
          <section>
        <div>
          <div>
            <h2>Section Title</h2>
            <p>Section description</p>
          </div>
        </div>
      </section>
          <div className="max-w-7 xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2>Why Choose Our Cloud Migration?</h2>
              <p>Our security monitoring suite provides everything you need to protect your business from cyber threats.,</p>
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>,
              {features.map((feature, index) => (
                <div key={index}className="bg-white/10 backdrop-blur-smrounded-xlp-6 border border-white/20 hover: bg-white/20 transition-all duration-300"></div>,
                  <div className="flexitems-centerjustify-centerw-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4"></div>
                    <feature />
                  <h3 className="text-xlfont-semiboldtext-whitemb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
        </div>
      </section>
        {/* Benefits Section */} <section className="py-20 px-4">
          <div className="max-w-7 xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5 xlmd:text-6 xlfont-boldtext-white mb-6">Security Monitoring Suite
              <p className="text-xl text-gray-300 mb-8 max-w-3 xl mx-auto">
                Comprehensive cybersecurity platform with real-time monitoring, advanced threat detection, 
                and automated response capabilities to protect your business 24/7.
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-rfrom-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                  <Shield className="mr-2 h-5 w-5" />
                  Start Free Trial
                <button className="borderborder-white/20 text-whitepx-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center">
                  <Phone className="mr-2 h-5 w-5" />
                  Call (302) 464-0950
        {/* Features Section */}
        <section className="py-20 px-4">
        <div className="max-w-7 xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3 xlmd:text-4 xl font-boldtext-white mb-4">Platform Features
              <p className="text-xl text-gray-300 max-w-3 xl mx-auto">
                Our security monitoring suite provides everything you need to protect your business from cyber threats.
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-smrounded-xlp-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="flexitems-centerjustify-centerw-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                    <feature.icon className="w-12 h-12 text-purple-400 mb-4" />
                  <h3 className="text-xlfont-semiboldtext-whitemb-3">{feature.title}
                  <p className="text-gray-300">{feature.description}
              ))}
        {/* Benefits Section */}
        <section className="py-20 px-4">
          </section>
        <div className="text-center mb-16">
              </div><h2 className="text-4 xl font-boldtext-whitemb-4">Section Title</h2>
              <p className="text-xltext-gray-300">Section description</p>
            </div>
        </div>
      </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
        <div className="max-w-7 xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3 xlmd:text-4 xl font-boldtext-white mb-4">
          <div className="max-w-7 xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2>Why Choose Our Cloud Migration?</h2>
              <p>Experience comprehensive security protection with our all-in-one monitoring platform.,</p>
                Why Choose Our Suite?
              </h2>
              <p></p>
                Experience comprehensive security protection with our all-in-one monitoring platform.,
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div>,
              {benefits.map((benefit, index) => (
                <div key={index}className="flexitems-startspace-x-3"></div>
                  <CheckCircle />
                  <p className="text-gray-300 text-lg">{benefit}</p>
                </div>
              <p className="text-xl text-gray-300 max-w-3 xl mx-auto">
                Experience comprehensive security protection with our all-in-one monitoring platform.
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flexitems-startspace-x-3">
                  <CheckCircle className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300 text-lg">{benefit}
              ))}
            </div>
          ))
        </section>
        {/* CTA Section */} <section className="py-20 px-4">
          <div className="max-w-7 xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4 xl font-boldtext-whitemb-4">Section Title</h2>
        <section className="py-20 px-4">
        <div className="max-w-7 xl mx-auto">
            <div className="bg-gradient-to-rfrom-purple-600 to-blue-600 rounded-2 xl p-8 md:p-12">
              <h2 className="text-3 xlmd:text-4 xl font-boldtext-white mb-4">
              <p className="text-xltext-gray-300">Section description</p>
            </div>
        </div>
      </section>
          <div className="max-w-4 xlmx-autotext-center"></div>
            <div className="bg-gradient-to-rfrom-purple-600 to-blue-600 rounded-2 xl p-8 md: p-12"></div>,
              <h2>Why Choose Our Cloud Migration?</h2>
              <p>Start your free trial today and experience the power of our security monitoring suite.</p>
                Ready to Secure Your Business?
              </h2>
              <p></p>
                Start your free trial today and experience the power of our security monitoring suite.
              </p>
              <div className="flexflex-colsm:flex-row gap-4 justify-center"></div>,
                <button>
                  <Phone>
                  Call (302) 464-0950;
                </button>
                <button>
                  <Mail>
                  Email Us;
                </button>
              </div>
            </div>
          ))
        </section>
      </div>

  )};

export default PagePage;
