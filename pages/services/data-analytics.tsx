import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Star, Users, Award, Globe, Brain, Cloud, Shield, Zap, Database, Cpu, Lock, Heart, TrendingUp, Target, BarChart3, PenTool, Eye, Server, Smartphone, Network, Clock, Sparkles, Phone, Mail, MapPin, FileText, Building2, Car, Share2, PieChart, LineChart, Activity } from 'lucide-react';

export default function DataAnalytics() {
  return (
    <>
      <Head>
        <title>Data Analytics Platform - Zion Tech Group</title>
        <meta name="description" content="Transform raw data into actionable insights with our AI-powered analytics platform. Advanced data visualization and predictive analytics." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-indigo-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Database className="w-10 h-10 text-indigo-600" />
              </div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Data Analytics Platform
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Transform raw data into actionable insights with our AI-powered analytics platform. Advanced data visualization, predictive analytics, and real-time reporting for data-driven decisions.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/contact" className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-block text-lg">
                  Start Free Trial
                </Link>
                <Link href="#pricing" className="bg-transparent border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-block text-lg">
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
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Advanced Analytics Features</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our AI-powered data analytics platform provides comprehensive insights, predictive modeling, and real-time visualization for informed decision-making.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="w-16 h-16 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                  <BarChart3 className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Real-time Dashboards</h3>
                <p className="text-gray-600 mb-4">
                  Create interactive dashboards with real-time data visualization and customizable widgets for instant insights.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Live data updates</li>
                  <li>• Interactive charts</li>
                  <li>• Customizable layouts</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Brain className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">AI-Powered Insights</h3>
                <p className="text-gray-600 mb-4">
                  Get intelligent insights and recommendations from AI that analyzes patterns and trends in your data.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Pattern recognition</li>
                  <li>• Anomaly detection</li>
                  <li>• Predictive insights</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <TrendingUp className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Predictive Analytics</h3>
                <p className="text-gray-600 mb-4">
                  Forecast future trends and outcomes using advanced machine learning models and statistical analysis.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Trend forecasting</li>
                  <li>• Risk assessment</li>
                  <li>• Scenario modeling</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                  <PieChart className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Advanced Visualization</h3>
                <p className="text-gray-600 mb-4">
                  Create stunning visualizations with a wide range of chart types, maps, and interactive elements.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Multiple chart types</li>
                  <li>• Interactive maps</li>
                  <li>• Custom styling</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="w-16 h-16 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
                  <Database className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Data Integration</h3>
                <p className="text-gray-600 mb-4">
                  Connect to multiple data sources including databases, APIs, cloud services, and file uploads.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Multiple data sources</li>
                  <li>• Real-time sync</li>
                  <li>• Data transformation</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                  <Activity className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Performance Monitoring</h3>
                <p className="text-gray-600 mb-4">
                  Monitor KPIs and performance metrics with automated alerts and comprehensive reporting.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• KPI tracking</li>
                  <li>• Automated alerts</li>
                  <li>• Performance reports</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Data-Driven Results</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our clients have achieved significant improvements in their decision-making and business performance through data analytics.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-indigo-600 mb-2">75%</div>
                <p className="text-gray-600">Faster decision making</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">40%</div>
                <p className="text-gray-600">Cost reduction</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">90%</div>
                <p className="text-gray-600">Accuracy improvement</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">60%</div>
                <p className="text-gray-600">Time savings</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Analytics Pricing Plans</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the analytics plan that fits your data volume and analysis needs.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-8 shadow-lg border border-gray-200">
                <h3 className="text-2xl font-bold mb-4">Starter</h3>
                <div className="text-4xl font-bold text-indigo-600 mb-6">$149<span className="text-lg text-gray-500">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Up to 1M data points</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Basic dashboards</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Email support</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Standard reports</span>
                  </li>
                </ul>
                <Link href="/contact" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-block text-center">
                  Start Free Trial
                </Link>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-lg border-2 border-indigo-600 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-indigo-600 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Professional</h3>
                <div className="text-4xl font-bold text-indigo-600 mb-6">$399<span className="text-lg text-gray-500">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Up to 10M data points</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Advanced dashboards</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Priority support</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Predictive analytics</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Custom integrations</span>
                  </li>
                </ul>
                <Link href="/contact" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-block text-center">
                  Start Free Trial
                </Link>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-lg border border-gray-200">
                <h3 className="text-2xl font-bold mb-4">Enterprise</h3>
                <div className="text-4xl font-bold text-indigo-600 mb-6">$999<span className="text-lg text-gray-500">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Unlimited data points</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Custom dashboards</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>24/7 phone support</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Advanced AI models</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Dedicated analyst</span>
                  </li>
                </ul>
                <Link href="/contact" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-block text-center">
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">Unlock the Power of Your Data</h2>
            <p className="text-xl mb-8 text-gray-300 max-w-3xl mx-auto">
              Transform your business with data-driven insights and AI-powered analytics that drive real results.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-block text-lg">
                Start Free Trial
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