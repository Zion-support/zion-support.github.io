import { Helmet } from 'react-helmet-async';
export default function PrivacyPage() {

import React  from 'react';
const PrivacyPage: React.FC = () => {
  return (
      <Helmet>
        <title>Privacy - Zion Tech Group</title>
        <meta name="description" content="Privacy solutions by Zion Tech Group" />
      </Helmet>
'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Shield, Database, Lock, Eye, CheckCircle, AlertTriangle, Info } from 'lucide-react'
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

const PrivacyPage: React.FC = () => {
  const lastUpdated = 'January 1, 2024'

  const dataRights = [
    {
      title: 'Access',
      description: 'Request access to your personal data',
      icon: Eye;
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
'use client';

import React from 'react';
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
          </div>
        </div>
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
    </div>
  );
}
      </main>
      
      <Footer />
    </>
  )
}

export default PrivacyPage
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

      <div className="min-h-screen bg-gradient-to-br from-slate-900via-purple-900to-slate-900">
        <div className="container mx-autopx-4py-16">
          <div className="text-centermb-16">
            <h1 className="text-4xl md:text-6 xl font-bold text-white mb-6" />
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent"  />Privacy
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xlmx-auto">
              Professional privacy services by Zion Tech Group.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 backdrop-blur-sm border border-purple-500/20 rounded-xlp-8text-center">
            <h2 className="text-2 xl font-bold text-white mb-4"  >Coming Soon</h2>
            <p className="text-gray-300 mb-6">
              We're working on bringing you comprehensive privacy solutions. 
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
  );
};

export default PrivacyPolicyPage;
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

  );
};

export default PrivacyPage;
