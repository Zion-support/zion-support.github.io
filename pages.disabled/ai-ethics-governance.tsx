import React from 'react';
import { Shield, Scale, Eye, Lock, Users, Globe, CheckCircle, AlertTriangle, BookOpen, Gavel, Heart, Target, ArrowRight, Brain, Cpu, Database, Network, Zap, TrendingUp, Star } from 'lucide-react';

export default function AIEthicsGovernance() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent mb-6">
            AI Ethics & Governance
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Comprehensive ethical frameworks and governance systems for responsible AI development. 
            Ensure your AI systems operate with integrity, fairness, and human values.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-lg hover:scale-105 transition-all duration-200 flex items-center space-x-2">
              <span>Implement Ethics</span>
              <ArrowRight className="w-5 h-5" />
            </button>
              <button className="px-8 py-4 border border-green-500 text-green-400 font-semibold rounded-lg hover:bg-green-500 hover:text-white transition-all duration-200">
                Download Framework
              </button>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Core Ethical Principles</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our comprehensive ethical framework is built on proven principles that ensure AI systems serve humanity
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Transparency */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-green-500/20 rounded-xl p-6 hover:border-green-500/40 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Transparency</h3>
              <p className="text-gray-400">
                Complete visibility into AI decision-making processes, ensuring accountability and trust
              </p>
            </div>

            {/* Fairness */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-green-500/20 rounded-xl p-6 hover:border-green-500/40 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                <Scale className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Fairness</h3>
              <p className="text-gray-400">
                AI systems that treat all individuals and groups equitably, without bias or discrimination
              </p>
            </div>

            {/* Privacy */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-green-500/20 rounded-xl p-6 hover:border-green-500/40 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                <Lock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Privacy</h3>
              <p className="text-gray-400">
                Robust data protection and privacy preservation throughout AI system operations
              </p>
            </div>

            {/* Accountability */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-green-500/20 rounded-xl p-6 hover:border-green-500/40 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                <Gavel className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Accountability</h3>
              <p className="text-gray-400">
                Clear responsibility chains and mechanisms for AI system outcomes and decisions
              </p>
            </div>

            {/* Beneficence */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-green-500/20 rounded-xl p-6 hover:border-green-500/40 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Beneficence</h3>
              <p className="text-gray-400">
                AI systems designed to maximize positive outcomes and minimize harm to society
              </p>
            </div>

            {/* Human Control */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-green-500/20 rounded-xl p-6 hover:border-green-500/40 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Human Control</h3>
              <p className="text-gray-400">
                Human oversight and control mechanisms ensuring AI systems remain under human direction
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Governance Framework */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Comprehensive Governance Framework</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Multi-layered governance system ensuring ethical AI development and deployment
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Policy Layer */}
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Policy Framework</h3>
              <p className="text-gray-400 text-sm">
                Comprehensive policies and guidelines for ethical AI development
              </p>
            </div>

            {/* Technical Layer */}
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Cpu className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Technical Controls</h3>
              <p className="text-gray-400 text-sm">
                Built-in technical safeguards and monitoring systems
              </p>
            </div>

            {/* Process Layer */}
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Network className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Process Oversight</h3>
              <p className="text-gray-400 text-sm">
                Systematic review and approval processes for AI systems
              </p>
            </div>

            {/* Monitoring Layer */}
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Continuous Monitoring</h3>
              <p className="text-gray-400 text-sm">
                Real-time monitoring and alerting for ethical compliance
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Implementation Features</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Practical tools and systems for implementing ethical AI governance in your organization
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800/50 backdrop-blur-sm border border-green-500/20 rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-4">Ethical AI Assessment</h3>
              <p className="text-gray-400 mb-6">
                Comprehensive evaluation framework for assessing AI system ethics and compliance
              </p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Bias detection and mitigation</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Privacy impact assessment</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Social impact evaluation</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm border border-green-500/20 rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-4">Governance Dashboard</h3>
              <p className="text-gray-400 mb-6">
                Real-time monitoring and reporting system for AI ethics compliance
              </p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Compliance tracking</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Risk assessment</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Audit trail management</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm border border-green-500/20 rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-4">Training & Certification</h3>
              <p className="text-gray-400 mb-6">
                Comprehensive training programs for AI ethics and governance implementation
              </p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Ethics training modules</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Certification programs</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Best practices workshops</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm border border-green-500/20 rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-4">Compliance Automation</h3>
              <p className="text-gray-400 mb-6">
                Automated systems for ensuring ongoing ethical compliance and governance
              </p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Automated compliance checks</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Policy enforcement</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Incident response automation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Applications */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Industry Applications</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Ethical AI governance solutions tailored for specific industries and use cases
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Healthcare</h3>
              <p className="text-gray-400">
                Ethical AI for medical diagnosis, treatment planning, and patient care
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Scale className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Finance</h3>
              <p className="text-gray-400">
                Ethical AI for credit scoring, fraud detection, and investment decisions
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Gavel className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Legal</h3>
              <p className="text-gray-400">
                Ethical AI for legal research, contract analysis, and case prediction
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-900/20 to-emerald-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Implement Ethical AI Governance?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Build trust and ensure compliance with comprehensive AI ethics and governance frameworks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-lg hover:scale-105 transition-all duration-200">
              Get Started Now
            </button>
            <button className="px-8 py-4 border border-green-500 text-green-400 font-semibold rounded-lg hover:bg-green-500 hover:text-white transition-all duration-200">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}