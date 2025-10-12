<<<<<<< HEAD
<<<<<<< HEAD

import { Shield, ArrowRight, CheckCircle, Brain, Lock, Star, Eye } from 'lucide-react'

import Layout from '../layout'
import React from 'react';

import React from 'react';
import { Helmet } from 'react-helmet-async';

=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
>>>>>>> cursor/fix-errors-and-merge-to-main-b918
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function AdvancedSecuritySuite() {
<<<<<<< HEAD

=======
import React from 'react';
<<<<<<< HEAD
export default function AdvancedSecuritySuite() {
>>>>>>> origin/main
  return (
<<<<<<< HEAD

        <>
      <title>Advanced Security Suite - Zion Tech Group</title>
      
            <h1 className="text-4xl font-bold text-white mb-6">Advanced Security Suite</h1>
            <p className="text-lg text-gray-300 mb-8">Professional advanced security suite services coming soon.</p>

<<<<<<< HEAD
=======
  return (
    <>
      <Helmet>
        <title>Advanced Security Suite - Zion Tech Group</title>
        <meta name="description" content="Professional advanced security suite services by Zion Tech Group. Transform your business with our expert cybersecurity solutions." />
        <meta name="keywords" content="cybersecurity, threat detection, security monitoring, compliance, enterprise security, AI security" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Advanced Security Suite</h1>
          <p className="text-lg text-gray-300 mb-8">Professional advanced security suite services coming soon.</p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
          >
            Contact Us
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </>
  );
}
>>>>>>> cursor/fix-errors-and-merge-to-main-b918
=======
      </>
=======
    <Layout;</Layout></Layout>
      title="Advanced Security Suite - Enterprise Cybersecurity | Zion Tech Group"
      description="Comprehensive cybersecurity solution with AI threat detection, 24/7 monitoring, and compliance tools. Protect your business from advanced cyber threats. Get your free security assessment today."
      keywords="cybersecurity, threat detection, security monitoring, compliance, enterprise security, AI security"
    ></Layout>
      <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
        {/* Hero Section */}
        <section className="py-16"></section>
          <div className="max-w-7xlmx-auto px-4 sm:px-6 lg:px-8 text-center"></div>
            <Shield className="w-16h-16 text-red-400 mx-auto mb-6" /></Shield>
            <h1 className="text-4xlmd:text-6xl font-bold text-white mb-6"></h1>
              Advanced Security Suite;
            </h1>
            <p className="text-xltext-gray-300 mb-8 max-w-3xl mx-auto"></p>
              Protect your business with our comprehensive cybersecurity solution. AI-powered threat detection, 
              24/7 monitoring, and compliance tools to keep your data and systems secure.
            </p>
            <div className="flexflex-col sm:flex-row gap-4 justify-center"></div>
              <Link;</Link></Link>
                to="/contact"
                className="bg-gradient-to-rfrom-red-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              ></Link>
                Get Free Assessment;
                <ArrowRight className="w-5h-5 ml-2" /></ArrowRight>
              </Link>
              <Link;</Link></Link>
                to="#demo" 
                className="border-2border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              ></Link>
                View Demo;
              </Link>
            </div>
          </div>
        </section>
        {/* Features Section */}
        <section className="py-16"></section>
          <div className="max-w-7xlmx-auto px-4 sm:px-6 lg:px-8"></div>
            <div className="text-centermb-12"></div>
              <h2 className="text-3xlfont-bold text-white mb-4">Comprehensive Security Features</h2>
              <p className="text-lgtext-gray-300">Advanced protection against the latest cyber threats</p>
            </div>
            <div className="gridmd:grid-cols-2 lg:grid-cols-4 gap-6"></div>
              <div className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 rounded-xl p-6 border border-red-500/20 hover:border-red-400/40 transition-all duration-300"></div>
                <Shield className="w-8 h-8 text-red-400 mb-4" /></Shield>
                <h3 className="text-xlfont-semibold text-white mb-2">360° Protection</h3>
                <p className="text-gray-300">Comprehensive security coverage across all endpoints, networks, and cloud infrastructure</p>
              </div>
              <div className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 rounded-xl p-6 border border-red-500/20 hover:border-red-400/40 transition-all duration-300"></div>
                <Brain className="w-8 h-8 text-red-400 mb-4" /></Brain>
                <h3 className="text-xlfont-semibold text-white mb-2">AI Threat Detection</h3>
                <p className="text-gray-300">Advanced machine learning algorithms detect and prevent sophisticated cyber attacks</p>
              </div>
              <div className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 rounded-xl p-6 border border-red-500/20 hover:border-red-400/40 transition-all duration-300"></div>
                <Eye className="w-8 h-8 text-red-400 mb-4" /></Eye>
                <h3 className="text-xlfont-semibold text-white mb-2">Real-time Monitoring</h3>
                <p className="text-gray-300">24/7 security monitoring with instant threat response and automated remediation</p>
              </div>
              <div className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 rounded-xl p-6 border border-red-500/20 hover:border-red-400/40 transition-all duration-300"></div>
                <Lock className="w-8 h-8 text-red-400 mb-4" /></Lock>
                <h3 className="text-xlfont-semibold text-white mb-2">Compliance Ready</h3>
                <p className="text-gray-300">Meet GDPR, HIPAA, SOX, and other regulatory requirements with built-in compliance tools</p>
              </div>
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-16"></section>
          <div className="max-w-7xlmx-auto px-4 sm:px-6 lg:px-8 text-center"></div>
            <h2 className="text-3xlfont-bold text-white mb-4">Secure Your Business Today</h2>
            <p className="text-lgtext-gray-300 mb-8">Don't wait for a cyber attack. Get comprehensive protection with Advanced Security Suite</p>
            <div className="flexflex-col sm:flex-row gap-4 justify-center"></div>
              <Link;</Link></Link>
                to="/contact" 
                className="bg-gradient-to-rfrom-red-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-600 hover:to-purple-700 transition-all duration-300"
              ></Link>
                Get Free Security Assessment;
              </Link>
              <Link;</Link></Link>
                to="/about" 
                className="border-2border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              ></Link>
                Learn More;
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>  );
}
>>>>>>> cursor/fix-errors-and-merge-to-main-e6d0
>>>>>>> origin/main
=======
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function AdvancedSecuritySuitePage() {
  return (
    <>
      <Helmet>
        <title>AdvancedSecuritySuite - Zion Tech Group</title>
        <meta name="description" content="Professional advanced security suite solutions and services." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">AdvancedSecuritySuite</h1>
          <p className="text-lg text-gray-300 mb-8">Professional advanced security suite solutions coming soon.</p>
          <Link 
            to="/contact" 
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </>
  );
}
>>>>>>> cursor/fix-errors-and-merge-to-main-3e0a
