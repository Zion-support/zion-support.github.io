'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, CheckCircle, BarChart, Users, Clock, ArrowRight, Brain, Cloud, Database, Smartphone, Settings, Target, Lightbulb, Zap, FileText, Lock, AlertTriangle, TrendingUp, Award } from 'lucide-react';

const ComplianceServicesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Compliance Services | Zion Tech Group</title>
        <meta name="description" content="Professional compliance services for GDPR, HIPAA, SOX, and industry regulations. Automated compliance monitoring, audit preparation, and regulatory reporting solutions." />
        <meta name="keywords" content="compliance services, GDPR compliance, HIPAA compliance, SOX compliance, regulatory compliance, audit preparation" />
        <link rel="canonical" href="https://ziontechgroup.com/compliance-services" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-2xl flex items-center justify-center">
                  <Shield className="w-8 h-8 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Compliance Services
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">
                  Solutions
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Comprehensive compliance services for GDPR, HIPAA, SOX, and industry regulations. Automated monitoring, audit preparation, and regulatory reporting solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                  <Brain className="w-5 h-5 mr-2" />
                  Start Compliance Assessment
                </button>
                <button className="border border-indigo-400 text-indigo-400 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-400 hover:text-white transition-all duration-300 flex items-center justify-center">
                  <BarChart className="w-5 h-5 mr-2" />
                  View Compliance Reports
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Compliance Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our comprehensive compliance services ensure your organization meets all regulatory requirements and industry standards.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-indigo-500/20 hover:border-indigo-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-lg flex items-center justify-center mb-6">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">GDPR Compliance</h3>
                <p className="text-gray-300 mb-6">
                  Complete GDPR compliance solutions with data protection impact assessments, privacy policies, and consent management.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-indigo-400 mr-2" />
                    Data protection impact assessments
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-indigo-400 mr-2" />
                    Privacy policy development
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-indigo-400 mr-2" />
                    Consent management systems
                  </li>
                </ul>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-indigo-500/20 hover:border-indigo-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-lg flex items-center justify-center mb-6">
                  <Lock className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">HIPAA Compliance</h3>
                <p className="text-gray-300 mb-6">
                  Healthcare data protection compliance with administrative, physical, and technical safeguards implementation.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-indigo-400 mr-2" />
                    Administrative safeguards
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-indigo-400 mr-2" />
                    Physical safeguards
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-indigo-400 mr-2" />
                    Technical safeguards
                  </li>
                </ul>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-indigo-500/20 hover:border-indigo-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-lg flex items-center justify-center mb-6">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">SOX Compliance</h3>
                <p className="text-gray-300 mb-6">
                  Sarbanes-Oxley compliance with internal controls, financial reporting, and audit trail management.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-indigo-400 mr-2" />
                    Internal controls assessment
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-indigo-400 mr-2" />
                    Financial reporting controls
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-indigo-400 mr-2" />
                    Audit trail management
                  </li>
                </ul>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-indigo-500/20 hover:border-indigo-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-lg flex items-center justify-center mb-6">
                  <AlertTriangle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Risk Assessment</h3>
                <p className="text-gray-300 mb-6">
                  Comprehensive risk assessment and management with threat identification and mitigation strategies.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-indigo-400 mr-2" />
                    Risk identification
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-indigo-400 mr-2" />
                    Threat assessment
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-indigo-400 mr-2" />
                    Mitigation planning
                  </li>
                </ul>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-indigo-500/20 hover:border-indigo-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-lg flex items-center justify-center mb-6">
                  <BarChart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Compliance Monitoring</h3>
                <p className="text-gray-300 mb-6">
                  Automated compliance monitoring with real-time alerts, reporting, and dashboard analytics.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-indigo-400 mr-2" />
                    Real-time monitoring
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-indigo-400 mr-2" />
                    Automated reporting
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-indigo-400 mr-2" />
                    Dashboard analytics
                  </li>
                </ul>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-indigo-500/20 hover:border-indigo-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-lg flex items-center justify-center mb-6">
                  <Settings className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Audit Preparation</h3>
                <p className="text-gray-300 mb-6">
                  Comprehensive audit preparation with documentation, evidence collection, and compliance verification.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-indigo-400 mr-2" />
                    Documentation management
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-indigo-400 mr-2" />
                    Evidence collection
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-indigo-400 mr-2" />
                    Compliance verification
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Compliance Benefits
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our compliance services help organizations maintain regulatory compliance while reducing costs and risks.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">100%</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Compliance Rate</h3>
                <p className="text-gray-300">Achieved compliance for all clients</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">70%</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Cost Reduction</h3>
                <p className="text-gray-300">Reduction in compliance costs</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">95%</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Audit Success</h3>
                <p className="text-gray-300">First-time audit pass rate</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">24/7</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Monitoring</h3>
                <p className="text-gray-300">Continuous compliance monitoring</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Ensure Compliance?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let us help you achieve and maintain regulatory compliance with our comprehensive compliance services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                <Brain className="w-5 h-5 mr-2" />
                Start Compliance Assessment
              </button>
              <button className="border border-indigo-400 text-indigo-400 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-400 hover:text-white transition-all duration-300 flex items-center justify-center">
                <Users className="w-5 h-5 mr-2" />
                Schedule Consultation
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ComplianceServicesPage;