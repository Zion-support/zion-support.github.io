<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React from "react";
import { Helmet } from 'react-helmet-async';
export default function PrivacyPage() {

<<<<<<< HEAD
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Privacy - Zion Tech Group</title>
        <meta name="description" content="Privacy solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">Privacy</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Discover our comprehensive privacy solutions designed to meet your business needs.
          </p>
<<<<<<< HEAD
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Expert Solutions</h3>
              <p className="text-gray-300">
                Our team of experts delivers tailored solutions for your specific requirements.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Cutting-Edge Technology</h3>
              <p className="text-gray-300">
                We use the latest technologies and best practices to ensure optimal performance.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">24/7 Support</h3>
              <p className="text-gray-300">
                Get round-the-clock support from our dedicated team of professionals.
=======
'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Shield, Database, Lock, Eye, CheckCircle, AlertTriangle, Info } from 'lucide-react'
=======
  const purposes = [
    {
      title: 'Service Provision',
      icon: Globe,
      description: 'To provide and maintain our services',
    },
    {
      title: 'Communication',
      icon: Mail,
      description: 'To communicate with you about our services',
    },
    {
      title: 'Improvement',
      icon: ArrowRight,
      description: 'To improve and develop new features',
    },
    {
      title: 'Security',
      icon: Shield,
      description: 'To protect against fraud and abuse',
    }
  ];
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361

const PrivacyPage: React.FC = () => {
  const lastUpdated = 'January 1, 2024'

  const dataRights = [
    {
      title: 'Access',
      description: 'Request access to your personal data',
<<<<<<< HEAD
      icon: Database
=======
      icon: Eye;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
    },
    {
      title: 'Rectification',
      description: 'Correct inaccurate or incomplete data',
      icon: CheckCircle;
    },
    {
      title: 'Erasure',
      description: 'Request deletion of your personal data',
      icon: Lock;
    },
    {
      title: 'Restriction',
      description: 'Limit how we process your data',
      icon: Shield
    },
    {
      title: 'Objection',
      description: 'Object to certain types of processing',
      icon: AlertTriangle
    },
    {
      title: 'Portability',
      description: 'Receive your data in a structured format',
      icon: Database;
    }
  ]
=======
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
'use client';

import React from 'react';
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings } from 'lucide-react';

const PrivacyPolicyPage: React.FC = () => {
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
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-02f6

  return (
<<<<<<< HEAD
    <>
      <Helmet>
        <title>Privacy Policy - Zion Tech Group</title>
<<<<<<< HEAD
        <meta name="description" content="Learn about how we collect, use, and protect your personal information." />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-white mb-6">Privacy Policy</h1>
            <p className="text-gray-300 mb-8">Last updated: {lastUpdated}</p>

            <div className="prose prose-invert max-w-none">
              <h2 className="text-2xl font-semibold text-white mb-4">Introduction</h2>
              <p className="text-gray-300 mb-6">
                At Zion Tech Group, we are committed to protecting your privacy and ensuring the security of your personal information. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website 
                or use our services.
              </p>

              <h2 className="text-2xl font-semibold text-white mb-4">Information We Collect</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
                  <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
                    <Database className="w-5 h-5 mr-2 text-cyan-400" />
                    Personal Information
                  </h3>
                  <ul className="text-gray-300 text-sm space-y-2">
                    <li>• Name and contact information</li>
                    <li>• Email address and phone number</li>
                    <li>• Company information</li>
                    <li>• Communication preferences</li>
                  </ul>
                </div>
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
                  <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
                    <Eye className="w-5 h-5 mr-2 text-purple-400" />
                    Usage Information
                  </h3>
                  <ul className="text-gray-300 text-sm space-y-2">
                    <li>• Website usage patterns</li>
                    <li>• IP address and location</li>
                    <li>• Browser and device information</li>
                    <li>• Cookies and tracking data</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl font-semibold text-white mb-4">How We Use Your Information</h2>
              <p className="text-gray-300 mb-6">
                We use the information we collect to provide, maintain, and improve our services, communicate with you, 
                and ensure the security of our platform. We do not sell, trade, or otherwise transfer your personal 
                information to third parties without your consent.
              </p>

              <h2 className="text-2xl font-semibold text-white mb-4">Data Security</h2>
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700 mb-8">
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
                  <Shield className="w-5 h-5 mr-2 text-green-400" />
                  Security Measures
                </h3>
                <ul className="text-gray-300 space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Encryption of data in transit and at rest</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Regular security audits and assessments</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Access controls and authentication</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Employee training on data protection</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-semibold text-white mb-4">Your Rights</h2>
              <p className="text-gray-300 mb-6">
                You have certain rights regarding your personal information. These rights may vary depending on your location 
                and applicable laws.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {dataRights.map((right, index) => (
                  <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
                    <div className="flex items-center gap-3 mb-3">
                      <right.icon className="w-6 h-6 text-cyan-400" />
                      <h3 className="text-lg font-semibold text-white">{right.title}</h3>
                    </div>
                    <p className="text-gray-300 text-sm">{right.description}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-semibold text-white mb-4">Cookies and Tracking</h2>
              <p className="text-gray-300 mb-6">
                We use cookies and similar tracking technologies to enhance your experience on our website. 
                You can control cookie settings through your browser preferences.
              </p>

              <h2 className="text-2xl font-semibold text-white mb-4">Third-Party Services</h2>
              <p className="text-gray-300 mb-6">
                We may use third-party services for analytics, marketing, and other purposes. These services have their own 
                privacy policies, and we encourage you to review them.
              </p>

              <h2 className="text-2xl font-semibold text-white mb-4">Changes to This Policy</h2>
              <p className="text-gray-300 mb-6">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new 
                Privacy Policy on this page and updating the "Last updated" date.
              </p>

              <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
              <p className="text-gray-300 mb-6">
                If you have any questions about this Privacy Policy or our data practices, please contact us at{' '}
                <a href="mailto:privacy@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">
                  privacy@ziontechgroup.com
                </a>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-02d3
              </p>
            </div>
=======
    <div className="min-h-screen bg-white"></div>
      <div className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20"></div>
        <div className="container mx-auto px-4 text-center"></div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Privacy Policy</h1>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Your privacy is important to us. Learn how we collect, use, and protect your information.
          </p>
          <div className="flex items-center justify-center text-sm text-blue-200"></div>
            <Calendar className="h-4 w-4 mr-2" />
            Last updated: {lastUpdated,}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
          </div>
        </div>
<<<<<<< HEAD
      </div>
=======
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
      <Footer />
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0210
    </div>
  );
}
=======
      </main>
      
      <Footer />
    </>
  )
}

export default PrivacyPage
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-02d3
=======
        <meta name="description" content="Privacy policy and data protection information." />
        <meta name="keywords" content="privacy policy, data protection, GDPR, privacy" />
      </Helmet>

      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-amber-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Privacy policy and data protection information.
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
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Key Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced AI technology that drives results
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  {feature.benefits && (
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
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
      <Footer />
    </>
=======
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';
import ErrorBoundary from '../components/ErrorBoundary';
import Navigation from '../components/Navigation';

const PrivacyPage = () => {
  return (
    <ErrorBoundary>
      <SEOHead 
        title="Privacy Policy - Zion Tech Group"
        description="Privacy Policy for Zion Tech Group - AI-Powered Enterprise Solutions"
      />
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 mb-6">
              This privacy policy describes how Zion Tech Group collects, uses, and protects your information.
            </p>
            <h2 className="text-2xl font-semibold text-white mb-4">Information We Collect</h2>
            <p className="text-gray-300 mb-6">
              We collect information you provide directly to us, such as when you contact us or use our services.
            </p>
            <h2 className="text-2xl font-semibold text-white mb-4">How We Use Your Information</h2>
            <p className="text-gray-300 mb-6">
              We use your information to provide, maintain, and improve our services.
            </p>
            <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
            <p className="text-gray-300">
              If you have any questions about this privacy policy, please contact us at kleber@ziontechgroup.com.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </ErrorBoundary>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
  );
};

export default PrivacyPolicyPage;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-02f6
=======
import React from 'react';

import {Helmet} from 'react-helmet-async';
import {Link} from 'react-router-dom';
import {ArrowRight} from 'lucide-react';

export default function Privacy() {return (
    <title>Privacy - Zion Tech Group</title>

            <h1 className="text-4xl font-bold text-white mb-6">Privacy</h1>
            <p className="text-lg text-gray-300 mb-8">Professional privacy services coming soon.</p>

              Contact Us

      <  />
  );}

    <><  />
      <Helmet></Helmet>
        <title>Privacy - Zion Tech Group</title>
        <meta name="description" content="Privacy services by Zion Tech Group. Professional AI and IT solutions."   /></meta>
        <meta name="keywords" content="privacy, AI solutions, IT services"   /></meta>
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            <h1 className="w-5h-5ml-2"   /></h1>
              <span className="w-5h-5ml-2"   />Privacy;
              </span>
            </h1>
            <p className="w-5h-5ml-2">Professional privacy services by Zion Tech Group.
            </p>
          </div>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            <h2 className="text-2 xl font-bold text-white mb-4"  >Coming Soon</h2>
            <p className="w-5h-5ml-2">We're working on bringing you comprehensive privacy solutions.
              Contact us to learn more about our services.
            </p>
            <button className="w-5h-5ml-2">Contact Us;
            </button>
          </div>
      </div>
    <  />
  );
};

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Privacy - Zion Tech Group</title>
        <meta name="description" content="Professional privacy services by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Privacy</h1>
          <p className="text-lg text-gray-300 mb-8">Professional privacy services coming soon.</p>
          
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
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0659
