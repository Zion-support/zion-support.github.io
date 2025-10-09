'use client';
import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Brain, Shield, Lock, Eye, AlertTriangle, Phone, Mail, MapPin, CheckCircle } from 'lucide-react';

export default function CybersecuritySuitePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="bg-slate-900/95 backdrop-blur-md border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
            </Link>
            <Link href="/" className="text-gray-300 hover:text-cyan-400 transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Cybersecurity Suite
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Comprehensive security solutions with threat detection, vulnerability assessment, and automated response.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
              >
                📞 Call: (302) 464-0950
              </a>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
              >
                Get Security Audit
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Advanced Security Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20">
              <Shield className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">AI Threat Detection</h3>
              <p className="text-gray-300">
                Advanced AI algorithms detect and prevent cyber threats in real-time with 99.9% accuracy.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20">
              <Lock className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Zero Trust Architecture</h3>
              <p className="text-gray-300">
                Implement zero trust security model with continuous verification and least privilege access.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20">
              <Eye className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">24/7 Monitoring</h3>
              <p className="text-gray-300">
                Round-the-clock security monitoring with instant threat response and incident management.
              </p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Security Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-cyan-500/20">
              <h3 className="text-2xl font-semibold text-white mb-4">Security Assessment</h3>
              <ul className="space-y-3 text-gray-300 mb-6">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Vulnerability scanning
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Penetration testing
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Compliance auditing
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Security policy review
                </li>
              </ul>
              <div className="text-2xl font-bold text-cyan-400 mb-4">Starting at $799/month</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-cyan-500/20">
              <h3 className="text-2xl font-semibold text-white mb-4">Managed Security</h3>
              <ul className="space-y-3 text-gray-300 mb-6">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  SIEM monitoring
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Incident response
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Security updates
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Staff training
                </li>
              </ul>
              <div className="text-2xl font-bold text-cyan-400 mb-4">Starting at $1,299/month</div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-cyan-500/20">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Secure Your Business Today</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-cyan-400 mr-3" />
                  <a href="tel:+13024640950" className="text-white hover:text-cyan-400">
                    +1 (302) 464-0950
                  </a>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-cyan-400 mr-3" />
                  <a href="mailto:kleber@ziontechgroup.com" className="text-white hover:text-cyan-400">
                    kleber@ziontechgroup.com
                  </a>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-cyan-400 mr-3" />
                  <span className="text-white">364 E Main St STE 1008, Middletown, DE 19709</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Get Your Security Audit</h3>
              <p className="text-gray-300 mb-4">
                Schedule a comprehensive security assessment to identify vulnerabilities and protect your business.
              </p>
              <Link
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 inline-block"
              >
                Schedule Audit
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}