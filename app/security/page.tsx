import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Lock, CheckCircle, AlertTriangle, Users, Eye } from 'lucide-react';

const SecurityPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Security - Zion Tech Group | Data Protection & Cybersecurity</title>
        <meta name="description" content="Learn about our comprehensive security measures, data protection practices, and cybersecurity protocols to keep your data safe." />
        <meta name="keywords" content="security, cybersecurity, data protection, privacy, encryption, compliance" />
      </Helmet>

      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Security
            </span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed mb-8">
            Your data security is our top priority. Learn about our comprehensive security measures and data protection practices.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <div className="flex items-center mb-6">
              <Shield className="w-8 h-8 text-cyan-400 mr-3" />
              <h2 className="text-2xl font-bold text-white">Security Measures</h2>
            </div>
            <p className="text-gray-300 mb-8">
              We implement industry-leading security measures to protect your data and ensure the highest level of security.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <Lock className="w-5 h-5 text-cyan-400 mr-2" />
                  Data Protection
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">End-to-end encryption</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">Regular security audits</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">Secure data centers</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">GDPR compliance</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <Eye className="w-5 h-5 text-cyan-400 mr-2" />
                  Monitoring & Detection
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">24/7 security monitoring</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">AI-powered threat detection</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">Real-time alerts</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">Incident response team</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-cyan-900/20 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-3">Report Security Issues</h3>
              <p className="text-gray-300 mb-4">
                If you discover a security vulnerability, please report it to our security team:
              </p>
              <p className="text-cyan-400">
                Email: <a href="mailto:security@ziontechgroup.com" className="hover:text-cyan-300">security@ziontechgroup.com</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SecurityPage;