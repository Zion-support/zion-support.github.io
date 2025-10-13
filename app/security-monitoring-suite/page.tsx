<<<<<<< HEAD
=======
'use client';
import React from 'react';
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
import {Shield,}
=======
import { Helmet } from 'react-helmet-async'
import {
    Shield,
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
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
<<<<<<< HEAD

  Settings,

  Database,

  Target,

  Monitor;} from 'lucide-react'
const SecurityMonitoringSuitePage: React.FC = () => {
  const features = [
=======
  Settings,
  Database,
  Target,
<<<<<<< HEAD
  Monitor
  }
} from 'lucide-react'
const SecurityMonitoringSuitePage: React.FC = () => {
const features = [
=======
} from 'lucide-react';
;
const SecurityMonitoringSuitePage: React.FC = () => {
const features = [
];
};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
    {
      icon: Monitor,
      title: 'Real-time Dashboard',
      description: 'Comprehensive security monitoring dashboard with live threat detection and incident tracking.',},
    {icon: AlertTriangle,
      title: 'Advanced Alerts',
      description: 'Intelligent alerting system that notifies you of security threats and anomalies instantly.',},
    {icon: BarChart,
      title: 'Security Analytics',
      description: 'Detailed security reports and analytics to help you understand and improve your security posture.',},
    {icon: Zap,
      title: 'Automated Response',
<<<<<<< HEAD
      description: 'Automated incident response and threat mitigation to protect your systems 24/7.',}}
  ]
=======
<<<<<<< HEAD
      description: 'Automated incident response and threat mitigation to protect your systems 24/7.'  }
  }]
=======
      description: 'Automated incident response and threat mitigation to protect your systems 24
    };
  ];
;
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
const benefits = [
];
    '24/7 security monitoring and protection',
    'Real-time threat detection and alerts',
    'Comprehensive security analytics',
    'Automated incident response',
<<<<<<< HEAD

    'Compliance monitoring and reporting',

    'Easy-to-use dashboard interface',

    'Scalable for any business size',

    'Expert security team support'
  ]
return (
    <>
  <Helmet />
        <title>Security Monitoring Suite - Zion Tech Group | Cybersecurity Platform</title>
        <meta name="description" content="AI-powered solution" />
=======
    'Compliance monitoring and reporting',
    'Easy-to-use dashboard interface',
    'Scalable for any business size',
    'Expert security team support'
<<<<<<< HEAD
  ]
return (
    <>
=======
  ];
  return (
    <React .Fragment>
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
      <Helmet>
        <title>Security Monitoring Suite - Zion Tech Group | Cybersecurity Platform</title>
        <meta name="description" content="Advanced AI solutions" />
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
        <meta name="keywords" content="AI, artificial intelligence, business solutions" />
      </Helmet>
<<<<<<< HEAD
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        {/* Hero Section */} <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
              <p className="text-xl text-gray-300">Section description</p>
            </div>
          </div>
        </section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
<<<<<<< HEAD
              <h1>Security Monitoring Suite;</h1>
              </h1>
              <p>Comprehensive cybersecurity platform with real-time monitoring, advanced threat detection,</p>
=======
              <h1>
                Security Monitoring Suite
              </h1>
              <p>
                Comprehensive cybersecurity platform with real-time monitoring, advanced threat detection,
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
                and automated response capabilities to protect your business 24/7.
              </p>
              <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>,
                <button>
                  <Shield>
                  Start Free Trial;
                </button>
                <button>
                  <Phone>
                  Call (302) 464-0950,
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* Features Section */} <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
              <p className="text-xl text-gray-300">Section description</p>
            </div>
          </div>
        </section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2>Platform Features;</h2>
              </h2>
              <p>Our security monitoring suite provides everything you need to protect your business from cyber threats.,</p>
              </p>
            </div>
<<<<<<< HEAD
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8"></div>,
              {features.map((feature, index) => (
                <div key={index}className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover: bg-white/20 transition-all duration-300"></div>,
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4"></div>
                    <feature />
=======
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"></div>
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4"></div>
                    <feature.icon className="w-8 h-8 text-white" />
=======
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section *
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
                    <feature .icon className="h-6 w-6 text-white" />
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
                  </div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description</p>}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
<<<<<<< HEAD
        {/* Benefits Section */} <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
              <p className="text-xl text-gray-300">Section description</p>
            </div>
          </div>
        </section>
=======
<<<<<<< HEAD
        {/* Benefits Section */}
        <section className="py-20 px-4 sm: px-6 lg:px-8 bg-white/5"></section>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2>Why Choose Our Suite?</h2>
              </h2>
              <p>Experience comprehensive security protection with our all-in-one monitoring platform.,</p>
              </p>
            </div>
<<<<<<< HEAD
            <div className="grid grid-cols-1 md: grid-cols-2 gap-6"></div>,
              {benefits.map((benefit, index) => (
                <div key={index}className="flex items-start space-x-3"></div>
                  <CheckCircle />
                  <p className="text-gray-300 text-lg">{benefit</p>}</p>
=======
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div>
=======
        {/* Benefits Section *
        <section className="py-20 px-4 sm: px-6 lg:px-8 bg-white
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our Suite?
              <
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience comprehensive security protection with our all-in-one monitoring platform.
              <
            <
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3"></div>
                  <CheckCircle>
                  <p className="text-gray-300 text-lg">{benefit}</p>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
                </div>
              ))}
            </div>
          </div>
        </section>
<<<<<<< HEAD
        {/* CTA Section */} <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
              <p className="text-xl text-gray-300">Section description</p>
            </div>
          </div>
        </section>
          <div className="max-w-4xl mx-auto text-center"></div>
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md: p-12"></div>,
              <h2>Ready to Secure Your Business?</h2>
              </h2>
              <p>Start your free trial today and experience the power of our security monitoring suite.</p>
              </p>
              <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>,
=======
<<<<<<< HEAD
        {/* CTA Section */}
        <section className="py-20 px-4 sm: px-6 lg:px-8"></section>
          <div className="max-w-4xl mx-auto text-center"></div>
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12"></div>
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Secure Your Business?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Start your free trial today and experience the power of our security monitoring suite.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
                <button>
                  <Phone>
                  Call (302) 464-0950
                </button>
                <button>
                  <Mail>
<<<<<<< HEAD
                  Email Us;
=======
=======
        {/* CTA Section *
        <section className="py-20 px-4 sm: px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Secure Your Business?
              <
              <p className="text-xl text-purple-100 mb-8">
                Start your free trial today and experience the power of our security monitoring suite.
              <
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hove,
    r:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                  <Mail className="mr-2 h-5 w-5" 
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
                  Email Us
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
<<<<<<< HEAD
    </>
<<<<<<< HEAD
  ),
};

export default SecurityMonitoringSuitePage;

>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232
=======
  )
}
export default SecurityMonitoringSuitePage
=======
    </React.Fragment>)
export default SecurityMonitoringSuitePage;
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
