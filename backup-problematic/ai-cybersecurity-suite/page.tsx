import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Shield, Zap, CheckCircle } from 'lucide-react';

export default function A ICybersecurity Suite Page() {
  return (
    <d iv class Name="m in-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <H elmet>
        <t itle>A I Cybersecurity Suite - Zion Tech Group</t itle>
        <m eta name="description" content="Comprehensive A I-powered cybersecurity suite with threat detection, zero trust security, and automated incident response." />
        <m eta name="keywords" content="A I cybersecurity, threat detection, zero trust, security automation, incident response" />
      </H elmet>

      {/* Hero Section */}
      <d iv class Name="r elative overflow-hidden">
        <d iv class Name="m ax-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <d iv class Name="t ext-center">
            <h1 c lass Name="t ext-4xl md:text-6xl font-bold text-white mb-6">
              A I Cybersecurity Suite
            </h1>
            <p c lass Name="t ext-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive A I-powered cybersecurity solutions with advanced threat detection, 
              zero trust security, and automated incident response capabilities.
            </p>
            <d iv class Name="f lex flex-col sm:flex-row gap-4 justify-center">
              <L ink
                to="/contact"
                class Name="b g-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Started
                <A rrow Right class Name="w-5 h-5 m l-2" />
              </L ink>
              <L ink
                to="/pricing"
                class Name="b order border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                View Pricing
              </L ink>
            </d iv>
        </d iv>

      {/* Features Section */}
      <d iv class Name="p y-20">
        <d iv class Name="m ax-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <d iv class Name="t ext-center mb-16">
            <h2 c lass Name="t ext-3xl md:text-4xl font-bold text-white mb-4">
              Advanced Security Features
            </h2>
            <p c lass Name="t ext-xl text-gray-300 max-w-3xl mx-auto">
              Protect your organization with cutting-edge A I-powered cybersecurity solutions.
            </p>
          </d iv>

          <d iv class Name="g rid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <d iv class Name="b g-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300">
              <d iv class Name="m b-4">
                <B rain class Name="w-8 h-8 t ext-cyan-400" />
              </d iv>
              <h3 c lass Name="t ext-xl font-semibold text-white mb-3">
                A I Threat Detection
              </h3>
              <p c lass Name="t ext-gray-300 mb-4">
                Advanced machine learning algorithms detect and prevent cyber threats in real-time.
              </p>
              <u l class Name="s pace-y-2">
                <l i class Name="f lex items-center text-sm text-gray-300">
                  <C heck Circle class Name="w-4 h-4 t ext-green-400 mr-2" />
                  Real-time monitoring
                </l i>
                <l i class Name="f lex items-center text-sm text-gray-300">
                  <C heck Circle class Name="w-4 h-4 t ext-green-400 mr-2" />
                  Behavioral analysis
                </l i>
                <l i class Name="f lex items-center text-sm text-gray-300">
                  <C heck Circle class Name="w-4 h-4 t ext-green-400 mr-2" />
                  Anomaly detection
                </l i>
              </u l>
            </d iv>

            <d iv class Name="b g-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-green-500/20 hover:border-green-400/40 transition-all duration-300">
              <d iv class Name="m b-4">
                <S hield class Name="w-8 h-8 t ext-green-400" />
              </d iv>
              <h3 c lass Name="t ext-xl font-semibold text-white mb-3">
                Zero Trust Security
              </h3>
              <p c lass Name="t ext-gray-300 mb-4">
                Implement zero trust architecture with continuous verification and access control.
              </p>
              <u l class Name="s pace-y-2">
                <l i class Name="f lex items-center text-sm text-gray-300">
                  <C heck Circle class Name="w-4 h-4 t ext-green-400 mr-2" />
                  Continuous verification
                </l i>
                <l i class Name="f lex items-center text-sm text-gray-300">
                  <C heck Circle class Name="w-4 h-4 t ext-green-400 mr-2" />
                  Access control
                </l i>
                <l i class Name="f lex items-center text-sm text-gray-300">
                  <C heck Circle class Name="w-4 h-4 t ext-green-400 mr-2" />
                  Identity management
                </l i>
              </u l>
            </d iv>

            <d iv class Name="b g-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300">
              <d iv class Name="m b-4">
                <Z ap class Name="w-8 h-8 t ext-purple-400" />
              </d iv>
              <h3 c lass Name="t ext-xl font-semibold text-white mb-3">
                Automated Response
              </h3>
              <p c lass Name="t ext-gray-300 mb-4">
                Automated incident response and threat mitigation with A I-powered decision making.
              </p>
              <u l class Name="s pace-y-2">
                <l i class Name="f lex items-center text-sm text-gray-300">
                  <C heck Circle class Name="w-4 h-4 t ext-green-400 mr-2" />
                  Instant response
                </l i>
                <l i class Name="f lex items-center text-sm text-gray-300">
                  <C heck Circle class Name="w-4 h-4 t ext-green-400 mr-2" />
                  Threat mitigation
                </l i>
                <l i class Name="f lex items-center text-sm text-gray-300">
                  <C heck Circle class Name="w-4 h-4 t ext-green-400 mr-2" />
                  Recovery automation
                </l i>
              </u l>
            </d iv>
        </d iv>

      {/* C TA Section */}
      <d iv class Name="p y-20 bg-slate-800/30">
        <d iv class Name="m ax-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 c lass Name="t ext-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Secure Your Organization?
          </h2>
          <p c lass Name="t ext-xl text-gray-300 mb-8">
            Protect your business with our comprehensive A I-powered cybersecurity suite.
          </p>
          <d iv class Name="f lex flex-col sm:flex-row gap-4 justify-center">
            <L ink
              to="/contact"
              class Name="b g-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
            >
              Get Started
              <A rrow Right class Name="w-5 h-5 m l-2" />
            </L ink>
            <L ink
              to="/pricing"
              class Name="b order border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              View Pricing
            </L ink>
      </d iv>
    </d iv>
  );
}