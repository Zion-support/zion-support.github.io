'use client';

import React from 'react';
import { ArrowRight, Star, CheckCircle, Phone, Mail, MapPin, Shield, Lock, Eye, AlertTriangle, Users, Globe, Zap, Settings, FileText, Brain, Target, Activity } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import ErrorBoundary from '../components/ErrorBoundary';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AICybersecuritySuitePage: React.FC = () => {
  return (
    <ErrorBoundary>
      <SEOHead 
        title="AI Cybersecurity Suite - Advanced Threat Protection | Zion Tech Group"
        description="Comprehensive AI-powered cybersecurity solutions with real-time threat detection, automated response, and advanced analytics. Starting at $1,999/month."
        keywords="AI cybersecurity, threat detection, security automation, cyber defense, AI security, threat intelligence, security analytics"
        canonical="https://ziontechgroup.com/ai-cybersecurity-suite"
      />
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto"></section>
            <div className="text-center"></div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-100 text-red-800 text-sm font-medium mb-6"></div>
                <Shield className="w-4 h-4 mr-2" />
                AI Security Technology
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Cybersecurity Suite</h1>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
                  Advanced Threat Protection
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Protect your organization with AI-powered cybersecurity solutions. Real-time threat detection, 
                automated response, and advanced analytics for comprehensive security.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
                <a 
                  href="#pricing" 
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 text-white font-semibold rounded-lg hover:from-red-700 hover:to-orange-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Security Assessment
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <a 
                  href="#demo" 
                  className="inline-flex items-center px-8 py-4 border border-red-400 text-red-400 font-semibold rounded-lg hover:bg-red-400 hover:text-white transition-all duration-300"
                >
                  <Eye className="mr-2 w-5 h-5" />
                  View Demo
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto"></section>
            <div className="text-center mb-16"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Comprehensive AI Security Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Advanced AI-powered cybersecurity tools to protect against modern threats
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
              <div className="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-xl border border-red-100"></div>
                <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-6"></div>
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">AI Threat Detection</h3>
                <p className="text-gray-600 mb-4">
                  Machine learning algorithms detect and analyze threats in real-time with 99.9% accuracy.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Real-time analysis
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Behavioral analysis
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl border border-blue-100"></div>
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6"></div>
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Automated Response</h3>
                <p className="text-gray-600 mb-4">
                  Instant automated response to security incidents with AI-powered decision making.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Instant response
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Smart quarantine
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-xl border border-green-100"></div>
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-6"></div>
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Network Monitoring</h3>
                <p className="text-gray-600 mb-4">
                  24/7 network monitoring with AI-powered anomaly detection and traffic analysis.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    24/7 monitoring
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Traffic analysis
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-xl border border-purple-100"></div>
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-6"></div>
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Vulnerability Assessment</h3>
                <p className="text-gray-600 mb-4">
                  Automated vulnerability scanning and penetration testing with AI-enhanced analysis.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Automated scanning
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Risk prioritization
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-8 rounded-xl border border-orange-100"></div>
                <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-6"></div>
                  <AlertTriangle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Threat Intelligence</h3>
                <p className="text-gray-600 mb-4">
                  Global threat intelligence feeds with AI-powered correlation and analysis.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Global threat feeds
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Predictive analysis
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-8 rounded-xl border border-indigo-100"></div>
                <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center mb-6"></div>
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Security Operations</h3>
                <p className="text-gray-600 mb-4">
                  Centralized security operations center with AI-powered incident management.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Centralized SOC
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Incident management
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Security Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto"></section>
            <div className="text-center mb-16"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Advanced Security Capabilities
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive protection against all types of cyber threats
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12"></div>
              <div className="space-y-8"></div>
                <div className="flex items-start space-x-4"></div>
                  <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center flex-shrink-0"></div>
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div></div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Endpoint Protection</h3>
                    <p className="text-gray-600">Advanced endpoint detection and response with AI-powered malware analysis and prevention.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4"></div>
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0"></div>
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <div></div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Network Security</h3>
                    <p className="text-gray-600">Comprehensive network security with AI-powered firewall, intrusion detection, and traffic analysis.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4"></div>
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0"></div>
                    <Lock className="w-6 h-6 text-white" />
                  </div>
                  <div></div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Data Protection</h3>
                    <p className="text-gray-600">Advanced data encryption, access control, and data loss prevention with AI monitoring.</p>
                  </div>
                </div>
              </div>

              <div className="space-y-8"></div>
                <div className="flex items-start space-x-4"></div>
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0"></div>
                    <Activity className="w-6 h-6 text-white" />
                  </div>
                  <div></div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Security Analytics</h3>
                    <p className="text-gray-600">AI-powered security analytics and reporting with predictive threat modeling and risk assessment.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4"></div>
                  <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center flex-shrink-0"></div>
                    <Settings className="w-6 h-6 text-white" />
                  </div>
                  <div></div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Compliance Management</h3>
                    <p className="text-gray-600">Automated compliance monitoring and reporting for GDPR, HIPAA, SOX, and other regulations.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4"></div>
                  <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0"></div>
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <div></div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Incident Response</h3>
                    <p className="text-gray-600">Automated incident response with AI-powered forensics, evidence collection, and recovery procedures.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto"></section>
            <div className="text-center mb-16"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Cybersecurity Pricing
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive security solutions for organizations of all sizes
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8"></div>
              <div className="bg-white p-8 rounded-xl border border-gray-200"></div>
                <div className="text-center"></div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Small Business</h3>
                  <div className="mb-6"></div>
                    <span className="text-4xl font-bold text-gray-900">$1,999</span>
                    <span className="text-gray-600">/month</span>
                  </div>
                  <p className="text-gray-600 mb-8">For small businesses and startups</p>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Up to 50 endpoints</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Basic threat detection</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Email support</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Monthly reports</span>
                  </li>
                </ul>
                <a 
                  href="mailto:kleber@ziontechgroup.com?subject=AI Cybersecurity Small Business Plan"
                  className="w-full bg-gray-900 text-white py-3 px-6 rounded-lg font-semibold text-center block hover:bg-gray-800 transition-colors"
                >
                  Get Started
                </a>
              </div>

              <div className="bg-white p-8 rounded-xl border-2 border-red-500 relative"></div>
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"></div>
                  <span className="bg-red-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
                <div className="text-center"></div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise</h3>
                  <div className="mb-6"></div>
                    <span className="text-4xl font-bold text-gray-900">$4,999</span>
                    <span className="text-gray-600">/month</span>
                  </div>
                  <p className="text-gray-600 mb-8">For mid to large enterprises</p>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Up to 500 endpoints</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Advanced AI detection</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">24/7 phone support</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Real-time monitoring</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Compliance reporting</span>
                  </li>
                </ul>
                <a 
                  href="mailto:kleber@ziontechgroup.com?subject=AI Cybersecurity Enterprise Plan"
                  className="w-full bg-red-600 text-white py-3 px-6 rounded-lg font-semibold text-center block hover:bg-red-700 transition-colors"
                >
                  Get Started
                </a>
              </div>

              <div className="bg-white p-8 rounded-xl border border-gray-200"></div>
                <div className="text-center"></div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Custom</h3>
                  <div className="mb-6"></div>
                    <span className="text-4xl font-bold text-gray-900">Custom</span>
                    <span className="text-gray-600">pricing</span>
                  </div>
                  <p className="text-gray-600 mb-8">For large organizations and government</p>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Unlimited endpoints</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Custom AI models</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Dedicated SOC team</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">On-premise deployment</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Custom integrations</span>
                  </li>
                </ul>
                <a 
                  href="mailto:kleber@ziontechgroup.com?subject=AI Cybersecurity Custom Plan"
                  className="w-full bg-gray-900 text-white py-3 px-6 rounded-lg font-semibold text-center block hover:bg-gray-800 transition-colors"
                >
                  Contact Sales
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-600 to-orange-600">
          <div className="max-w-4xl mx-auto text-center"></section>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Secure Your Organization Today
            </h2>
            <p className="text-xl text-red-100 mb-8">
              Don't wait for a breach. Get comprehensive AI-powered cybersecurity protection now.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <a 
                href="mailto:kleber@ziontechgroup.com?subject=AI Cybersecurity Suite Inquiry"
                className="inline-flex items-center px-8 py-4 bg-white text-red-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                Get Security Assessment
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a 
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-red-600 transition-all duration-300"
              >
                <Phone className="mr-2 w-5 h-5" />
                Call +1 302 464 0950
              </a>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-900">
          <div className="max-w-4xl mx-auto text-center"></section>
            <div className="grid md:grid-cols-3 gap-8 text-white"></div>
              <div className="flex items-center justify-center"></div>
                <Phone className="w-5 h-5 mr-2" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center justify-center"></div>
                <Mail className="w-5 h-5 mr-2" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center"></div>
                <MapPin className="w-5 h-5 mr-2" />
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </ErrorBoundary>
  );
};

export default AICybersecuritySuitePage;