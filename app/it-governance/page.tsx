'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, CheckCircle, BarChart, Users, Clock, ArrowRight, Brain, Cloud, Database, Smartphone, Settings, Target, Lightbulb, Zap, FileText, Lock, AlertTriangle, TrendingUp, Award, Gavel } from 'lucide-react';

const ITGovernancePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>IT Governance Services | Zion Tech Group</title>
        <meta name="description" content="Professional IT governance services for policy development, compliance management, risk assessment, and strategic IT planning. Ensure effective IT governance for your organization." />
        <meta name="keywords" content="IT governance, IT policy, compliance management, risk assessment, IT strategy, governance framework" />
        <link rel="canonical" href="https://ziontechgroup.com/it-governance" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-slate-400 to-gray-500 rounded-2xl flex items-center justify-center">
                  <Gavel className="w-8 h-8 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                IT Governance
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-gray-500">
                  Services
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Professional IT governance services for policy development, compliance management, risk assessment, and strategic IT planning to ensure effective IT governance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-slate-500 to-gray-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-slate-600 hover:to-gray-700 transition-all duration-300 flex items-center justify-center">
                  <Brain className="w-5 h-5 mr-2" />
                  Start Governance Assessment
                </button>
                <button className="border border-slate-400 text-slate-400 px-8 py-4 rounded-lg font-semibold hover:bg-slate-400 hover:text-white transition-all duration-300 flex items-center justify-center">
                  <BarChart className="w-5 h-5 mr-2" />
                  View Governance Framework
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
                IT Governance Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our comprehensive IT governance services ensure effective IT management, compliance, and strategic alignment.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-500/20 hover:border-slate-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-slate-400 to-gray-500 rounded-lg flex items-center justify-center mb-6">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Policy Development</h3>
                <p className="text-gray-300 mb-6">
                  Comprehensive IT policy development with governance frameworks, standards, and best practices implementation.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-slate-400 mr-2" />
                    Governance framework design
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-slate-400 mr-2" />
                    Policy documentation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-slate-400 mr-2" />
                    Standards implementation
                  </li>
                </ul>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-500/20 hover:border-slate-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-slate-400 to-gray-500 rounded-lg flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Compliance Management</h3>
                <p className="text-gray-300 mb-6">
                  Automated compliance monitoring and management with regulatory adherence and audit preparation.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-slate-400 mr-2" />
                    Regulatory compliance
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-slate-400 mr-2" />
                    Audit preparation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-slate-400 mr-2" />
                    Compliance reporting
                  </li>
                </ul>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-500/20 hover:border-slate-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-slate-400 to-gray-500 rounded-lg flex items-center justify-center mb-6">
                  <AlertTriangle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Risk Assessment</h3>
                <p className="text-gray-300 mb-6">
                  Comprehensive IT risk assessment with threat identification, vulnerability analysis, and mitigation strategies.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-slate-400 mr-2" />
                    Risk identification
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-slate-400 mr-2" />
                    Vulnerability assessment
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-slate-400 mr-2" />
                    Mitigation planning
                  </li>
                </ul>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-500/20 hover:border-slate-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-slate-400 to-gray-500 rounded-lg flex items-center justify-center mb-6">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Strategic Planning</h3>
                <p className="text-gray-300 mb-6">
                  IT strategic planning and alignment with business objectives, technology roadmaps, and investment planning.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-slate-400 mr-2" />
                    Strategic alignment
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-slate-400 mr-2" />
                    Technology roadmaps
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-slate-400 mr-2" />
                    Investment planning
                  </li>
                </ul>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-500/20 hover:border-slate-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-slate-400 to-gray-500 rounded-lg flex items-center justify-center mb-6">
                  <BarChart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Performance Monitoring</h3>
                <p className="text-gray-300 mb-6">
                  IT performance monitoring and measurement with KPIs, metrics, and continuous improvement processes.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-slate-400 mr-2" />
                    KPI development
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-slate-400 mr-2" />
                    Performance metrics
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-slate-400 mr-2" />
                    Continuous improvement
                  </li>
                </ul>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-500/20 hover:border-slate-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-slate-400 to-gray-500 rounded-lg flex items-center justify-center mb-6">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Stakeholder Management</h3>
                <p className="text-gray-300 mb-6">
                  Effective stakeholder management with communication strategies, relationship building, and governance committees.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-slate-400 mr-2" />
                    Communication strategies
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-slate-400 mr-2" />
                    Relationship building
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-slate-400 mr-2" />
                    Governance committees
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
                IT Governance Benefits
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our IT governance services deliver measurable improvements in IT management, compliance, and strategic alignment.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-slate-400 to-gray-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">100%</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Compliance</h3>
                <p className="text-gray-300">Regulatory compliance achievement</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-slate-400 to-gray-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">60%</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Risk Reduction</h3>
                <p className="text-gray-300">IT risk reduction achieved</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-slate-400 to-gray-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">40%</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Cost Savings</h3>
                <p className="text-gray-300">IT governance cost reduction</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-slate-400 to-gray-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">95%</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Alignment</h3>
                <p className="text-gray-300">IT-business alignment improvement</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Improve Your IT Governance?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let us help you establish effective IT governance practices that align with your business objectives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-slate-500 to-gray-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-slate-600 hover:to-gray-700 transition-all duration-300 flex items-center justify-center">
                <Brain className="w-5 h-5 mr-2" />
                Start Governance Assessment
              </button>
              <button className="border border-slate-400 text-slate-400 px-8 py-4 rounded-lg font-semibold hover:bg-slate-400 hover:text-white transition-all duration-300 flex items-center justify-center">
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

export default ITGovernancePage;