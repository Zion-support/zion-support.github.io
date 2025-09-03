import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Star, Users, Award, Globe, Brain, Cloud, Shield, Zap, Database, Cpu, Lock, Heart, TrendingUp, Target, BarChart3, PenTool, Eye, Server, Smartphone, Network, Clock, Sparkles, Phone, Mail, MapPin, FileText, Building2, Car, Share2, Upload, Download, RefreshCw, Settings } from 'lucide-react';

export default function CloudMigrationServices() {
  return (
    <>
      <Head>
        <title>Cloud Migration Services - Zion Tech Group</title>
        <meta name="description" content="Seamless cloud migration with zero downtime. Reduce costs by 30% and improve performance by 50%. Expert cloud migration services." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-purple-50 to-indigo-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Cloud className="w-10 h-10 text-purple-600" />
              </div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Cloud Migration Services
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Seamless cloud migration with zero downtime. Reduce costs by 30% and improve performance by 50%. Our expert team ensures a smooth transition to the cloud with minimal disruption to your business operations.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/contact" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-block text-lg">
                  Get Migration Assessment
                </Link>
                <Link href="#pricing" className="bg-transparent border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-block text-lg">
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
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Comprehensive Migration Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our cloud migration experts provide end-to-end services to ensure a successful transition to the cloud with maximum efficiency and minimal risk.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                  <Upload className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Assessment & Planning</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive analysis of your current infrastructure and detailed migration strategy tailored to your business needs.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Infrastructure audit</li>
                  <li>• Migration roadmap</li>
                  <li>• Risk assessment</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <RefreshCw className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Zero-Downtime Migration</h3>
                <p className="text-gray-600 mb-4">
                  Advanced migration techniques ensure zero downtime and continuous business operations during the transition.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Live migration</li>
                  <li>• Data synchronization</li>
                  <li>• Rollback capabilities</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <Settings className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Application Modernization</h3>
                <p className="text-gray-600 mb-4">
                  Modernize your applications for cloud-native architecture with containerization and microservices.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Containerization</li>
                  <li>• Microservices architecture</li>
                  <li>• API optimization</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="w-16 h-16 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
                  <Shield className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Security & Compliance</h3>
                <p className="text-gray-600 mb-4">
                  Ensure your cloud infrastructure meets security standards and compliance requirements.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Security hardening</li>
                  <li>• Compliance validation</li>
                  <li>• Data encryption</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                  <BarChart3 className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Performance Optimization</h3>
                <p className="text-gray-600 mb-4">
                  Optimize your cloud infrastructure for maximum performance and cost efficiency.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Performance tuning</li>
                  <li>• Cost optimization</li>
                  <li>• Auto-scaling setup</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="w-16 h-16 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Training & Support</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive training and ongoing support to ensure your team can effectively manage the new cloud environment.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Team training</li>
                  <li>• Documentation</li>
                  <li>• Ongoing support</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Migration Benefits</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our cloud migration services deliver measurable benefits that transform your business operations and drive growth.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">30%</div>
                <p className="text-gray-600">Cost reduction</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">50%</div>
                <p className="text-gray-600">Performance improvement</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">99.9%</div>
                <p className="text-gray-600">Uptime guarantee</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-600 mb-2">0</div>
                <p className="text-gray-600">Downtime during migration</p>
              </div>
            </div>
          </div>
        </section>

        {/* Migration Process */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Migration Process</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A proven 6-step process that ensures successful cloud migration with minimal risk and maximum efficiency.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-600">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Assessment</h3>
                <p className="text-gray-600">Comprehensive analysis of current infrastructure and requirements</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Planning</h3>
                <p className="text-gray-600">Detailed migration strategy and timeline development</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Preparation</h3>
                <p className="text-gray-600">Environment setup and pre-migration testing</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-yellow-600">4</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Migration</h3>
                <p className="text-gray-600">Zero-downtime migration execution</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-red-600">5</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Optimization</h3>
                <p className="text-gray-600">Performance tuning and cost optimization</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-indigo-600">6</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Support</h3>
                <p className="text-gray-600">Ongoing support and monitoring</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Migration Pricing</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Custom pricing based on your infrastructure complexity and migration requirements.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-8 shadow-lg border border-gray-200">
                <h3 className="text-2xl font-bold mb-4">Small Business</h3>
                <div className="text-4xl font-bold text-purple-600 mb-6">$5,000<span className="text-lg text-gray-500">+</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Up to 10 servers</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Basic migration</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Email support</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>30-day support</span>
                  </li>
                </ul>
                <Link href="/contact" className="w-full bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-block text-center">
                  Get Quote
                </Link>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-lg border-2 border-purple-600 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Enterprise</h3>
                <div className="text-4xl font-bold text-purple-600 mb-6">$25,000<span className="text-lg text-gray-500">+</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Up to 100 servers</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Advanced migration</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Priority support</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>90-day support</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Performance optimization</span>
                  </li>
                </ul>
                <Link href="/contact" className="w-full bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-block text-center">
                  Get Quote
                </Link>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-lg border border-gray-200">
                <h3 className="text-2xl font-bold mb-4">Large Enterprise</h3>
                <div className="text-4xl font-bold text-purple-600 mb-6">Custom</div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Unlimited servers</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Custom migration</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>24/7 support</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>1-year support</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Dedicated team</span>
                  </li>
                </ul>
                <Link href="/contact" className="w-full bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-block text-center">
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Migrate to the Cloud?</h2>
            <p className="text-xl mb-8 text-gray-300 max-w-3xl mx-auto">
              Transform your business with our expert cloud migration services. Get started with a free assessment today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-block text-lg">
                Get Free Assessment
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