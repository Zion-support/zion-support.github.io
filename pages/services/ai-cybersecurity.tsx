import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Star, Users, Award, Globe, Brain, Cloud, Shield, Zap, Database, Cpu, Lock, Heart, TrendingUp, Target, BarChart3, PenTool, Eye, Server, Smartphone, Network, Clock, Sparkles, Phone, Mail, MapPin, FileText, Building2, Car, Share2, AlertTriangle, Bug, Key, Monitor } from 'lucide-react';

export default function AICybersecurity() {
  return (
    <>
      <Head>
        <title>AI Cybersecurity Platform - Zion Tech Group</title>
        <meta name="description" content="Advanced threat detection and prevention with 99.9% accuracy. Protect your business from cyber attacks with our AI-powered security platform." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-red-50 to-rose-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-red-600" />
              </div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                AI Cybersecurity Platform
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Advanced threat detection and prevention with 99.9% accuracy. Protect your business from cyber attacks with our AI-powered security platform that learns and adapts to new threats.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/contact" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-block text-lg">
                  Get Security Assessment
                </Link>
                <Link href="#pricing" className="bg-transparent border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-block text-lg">
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Advanced Security Features</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our AI-powered cybersecurity platform provides comprehensive protection against evolving cyber threats with real-time monitoring and automated response.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Real-time Threat Detection</h3>
                <p className="text-gray-600 mb-4">
                  Monitor your network 24/7 with AI-powered threat detection that identifies and blocks malicious activities in real-time.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• 24/7 monitoring</li>
                  <li>• Instant threat alerts</li>
                  <li>• Behavioral analysis</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Brain className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">AI-Powered Analysis</h3>
                <p className="text-gray-600 mb-4">
                  Advanced machine learning algorithms analyze patterns and predict potential security breaches before they occur.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Predictive analytics</li>
                  <li>• Pattern recognition</li>
                  <li>• Anomaly detection</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <Zap className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Automated Response</h3>
                <p className="text-gray-600 mb-4">
                  Automatically respond to security incidents with predefined actions, reducing response time from hours to seconds.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Instant response</li>
                  <li>• Automated blocking</li>
                  <li>• Incident containment</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                  <Lock className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Endpoint Protection</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive endpoint security that protects all devices connected to your network from malware and unauthorized access.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Device monitoring</li>
                  <li>• Malware prevention</li>
                  <li>• Access control</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="w-16 h-16 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
                  <Network className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Network Security</h3>
                <p className="text-gray-600 mb-4">
                  Advanced network security with firewall management, intrusion detection, and traffic analysis.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Firewall management</li>
                  <li>• Intrusion detection</li>
                  <li>• Traffic analysis</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="w-16 h-16 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                  <BarChart3 className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Security Analytics</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive security analytics and reporting to help you understand your security posture and compliance status.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Security dashboards</li>
                  <li>• Compliance reporting</li>
                  <li>• Risk assessment</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Security Stats */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Proven Security Performance</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our AI cybersecurity platform has protected thousands of businesses with industry-leading security metrics.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-red-600 mb-2">99.9%</div>
                <p className="text-gray-600">Threat detection accuracy</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
                <p className="text-gray-600">Monitoring coverage</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">&lt;1s</div>
                <p className="text-gray-600">Response time</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">100%</div>
                <p className="text-gray-600">Compliance coverage</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Security Pricing Plans</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the security plan that fits your business size and protection needs.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-8 shadow-lg border border-gray-200">
                <h3 className="text-2xl font-bold mb-4">Essential</h3>
                <div className="text-4xl font-bold text-red-600 mb-6">$199<span className="text-lg text-gray-500">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Up to 50 endpoints</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Basic threat detection</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Email support</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Basic reporting</span>
                  </li>
                </ul>
                <Link href="/contact" className="w-full bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-block text-center">
                  Get Started
                </Link>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-lg border-2 border-red-600 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-red-600 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Professional</h3>
                <div className="text-4xl font-bold text-red-600 mb-6">$499<span className="text-lg text-gray-500">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Up to 200 endpoints</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Advanced AI detection</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Priority support</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Advanced analytics</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Automated response</span>
                  </li>
                </ul>
                <Link href="/contact" className="w-full bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-block text-center">
                  Get Started
                </Link>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-lg border border-gray-200">
                <h3 className="text-2xl font-bold mb-4">Enterprise</h3>
                <div className="text-4xl font-bold text-red-600 mb-6">$999<span className="text-lg text-gray-500">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Unlimited endpoints</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Custom AI models</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>24/7 phone support</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Custom integrations</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Dedicated security team</span>
                  </li>
                </ul>
                <Link href="/contact" className="w-full bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-block text-center">
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">Protect Your Business Today</h2>
            <p className="text-xl mb-8 text-gray-300 max-w-3xl mx-auto">
              Don't wait for a cyber attack. Get comprehensive AI-powered security protection for your business.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-block text-lg">
                Get Security Assessment
              </Link>
              <Link href="/services" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-colors inline-block text-lg">
                View All Services
              </Link>
            </div>
            <div className="mt-8 text-sm text-gray-400">
              <p>Questions? Call us at <span className="text-white">+1 302 464 0950</span> or email <span className="text-white">kleber@ziontechgroup.com</span></p>
            </div>
          </div>
        </section>
      </main>
    </>
  )}