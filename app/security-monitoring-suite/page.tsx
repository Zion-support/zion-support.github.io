<<<<<<< HEAD
'use client;

import React from 'react;

import { Helmet } from 'react-helmet-async;

import {
=======
'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import {}
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
  Shield,
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
<<<<<<< HEAD

} from lucide-react;

;

const SecurityMonitoringSuitePage: React.FC = () => {const features = [;;;

    {
      ico,
    n: Monitor,
      title: 'Real-time Dashboard,
      description: Comprehensive security monitoring dashboard with live threat detection and incident tracking.
=======
;
} from 'lucide-react';
;

const $1Page: React.FC = () => {}
  const features = [
    {}
      icon: Monitor,
      title: 'Real-time Dashboard',
      description: 'Comprehensive security monitoring dashboard with live threat detection and incident tracking.'
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
    },
    {}
      icon: AlertTriangle,
      title: 'Advanced Alerts,
      description: Intelligent alerting system that notifies you of security threats and anomalies instantly.
    },
    {}
      icon: BarChart,
      title: 'Security Analytics,
      description: Detailed security reports and analytics to help you understand and improve your security posture.
    },
    {}
      icon: Zap,
<<<<<<< HEAD
      title: 'Automated Response,
      description: Automated incident response and threat mitigation to protect your systems 24
=======
      title: 'Automated Response',
      description: 'Automated incident response and threat mitigation to protect your systems 24'
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
    }

  ];

;
<<<<<<< HEAD

const benefits = [;
    '24/7 security monitoring and protection,
    'Real-time threat detection and alerts',    'Comprehensive security analytics,
    'Automated incident response,
    'Compliance monitoring and reporting,
    'Easy-to-use dashboard interface,
    'Scalable for any business size,
    Expert security team support
=======
const benefits = ['
    '24/7 security monitoring and protection',
    'Real-time threat detection and alerts',
    'Comprehensive security analytics',
    'Automated incident response',
    'Compliance monitoring and reporting',
    'Easy-to-use dashboard interface',
    'Scalable for any business size',
    'Expert security team support'
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
  ];

  return (

    <React.Fragment>
      <Helmet>
        <title>Security Monitoring Suite - Zion Tech Group | Cybersecurity Platform</title>
        <meta name="description" content="Comprehensive security monitoring suite by Zion Tech Group. Advanced cybersecurity platform with real-time monitoring, alerts, and automated response. />
        <meta name="keywords" content="security monitoring suite, cybersecurity platform, threat detection, security alerts, Zion Tech Group />
      </Helmet>
<<<<<<< HEAD
        {/* Benefits Section *
        <section className=py-20 px-4 sm: px-6 lg:px-8 bg-white
          <div className="max-w-7xl mx-auto>
            <div className="text-center mb-16>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4>
=======

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section *}
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Security Monitoring Suite
              <
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Comprehensive cybersecurity platform with real-time monitoring, advanced threat detection, 
                and automated response capabilities to protect your business 24
              <
              <div className="flex flex-col sm: flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                  
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Platform Features
              <
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our security monitoring suite provides everything you need to protect your business from cyber threats.
              <
            <

            <div className="grid grid-cols-1 md:grid-cols-2 l,
    g:grid-cols-4 gap-8">
              {features.map((feature, index) => (<div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))
            </div>
          </div>
        </section>

        {/* Benefits Section *}
        <section className="py-20 px-4 sm: px-6 lg:px-8 bg-white
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
                Why Choose Our Suite?
              <
              <p className="text-xl text-gray-300 max-w-3xl mx-auto>
                Experience comprehensive security protection with our all-in-one monitoring platform.
              <
            <

<<<<<<< HEAD
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6>
              {benefits.map((benefit, index) => (

                <div key={index} className="flex items-start space-x-3>
                  <CheckCircle className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0 />
                  <p className="text-gray-300 text-lg>{benefit}</p>
=======
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (}
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300 text-lg">{benefit}</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
                </div>
              ))
            </div>
          </div>
        </section>
<<<<<<< HEAD
        {/* CTA Section *
        <section className="py-20 px-4 sm: px-6 lg:px-8>
          <div className="max-w-4xl mx-auto text-center>
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4>
=======

        {/* CTA Section *}
        <section className="py-20 px-4 sm: px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
                Ready to Secure Your Business?
              <
              <p className="text-xl text-purple-100 mb-8>
                Start your free trial today and experience the power of our security monitoring suite.
              <
              <div className="flex flex-col sm:flex-row gap-4 justify-center>
                <button className=bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hove,
    r:bg-gray-100 transition-all duration-300 flex items-center justify-center>
                  
                  <Mail className="mr-2 h-5 w-5 
                  Email Us
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>)
export default SecurityMonitoringSuitePage;
