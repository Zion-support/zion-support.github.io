import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Star, Users, Award, Globe, Brain, Cloud, Shield, Zap, Database, Cpu, Lock, Heart, TrendingUp, Target, BarChart3, PenTool, Eye, Server, Smartphone, Network, Clock, Sparkles, Phone, Mail, MapPin, FileText, Building2, Car, Share2, Send, MailCheck, UserCheck } from 'lucide-react';

export default function AIEmailAutomation() {
  return (
    <>
      <Head>
        <title>AI Email Automation - Zion Tech Group</title>
        <meta name="description" content="Intelligent email marketing that increases open rates by 300% and conversion rates by 150%. AI-powered email automation platform." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-yellow-50 to-orange-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Zap className="w-10 h-10 text-yellow-600" />
              </div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                AI Email Automation
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Intelligent email marketing that increases open rates by 300% and conversion rates by 150%. Our AI-powered platform creates personalized, engaging emails that drive results.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/contact" className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-block text-lg">
                  Start Free Trial
                </Link>
                <Link href="#pricing" className="bg-transparent border-2 border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-block text-lg">
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
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Powerful Email Automation Features</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our AI-powered email automation platform uses machine learning to create personalized, high-converting email campaigns.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="w-16 h-16 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
                  <Brain className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">AI-Powered Personalization</h3>
                <p className="text-gray-600 mb-4">
                  Create highly personalized emails using AI that analyzes customer behavior, preferences, and engagement patterns.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Behavioral analysis</li>
                  <li>• Dynamic content</li>
                  <li>• Personalized recommendations</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Send className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Smart Send Time Optimization</h3>
                <p className="text-gray-600 mb-4">
                  AI determines the optimal send time for each recipient based on their engagement history and timezone.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Individual send times</li>
                  <li>• Timezone optimization</li>
                  <li>• Engagement-based timing</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Advanced Segmentation</h3>
                <p className="text-gray-600 mb-4">
                  Automatically segment your audience using AI to create targeted campaigns that resonate with specific groups.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Behavioral segmentation</li>
                  <li>• Predictive modeling</li>
                  <li>• Dynamic segments</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                  <PenTool className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">AI Content Generation</h3>
                <p className="text-gray-600 mb-4">
                  Generate compelling email content, subject lines, and CTAs using AI that understands your brand voice.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Subject line optimization</li>
                  <li>• Content generation</li>
                  <li>• Brand voice consistency</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                  <BarChart3 className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Performance Analytics</h3>
                <p className="text-gray-600 mb-4">
                  Track and analyze email performance with detailed insights and AI-powered recommendations for improvement.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Real-time analytics</li>
                  <li>• Performance insights</li>
                  <li>• Optimization suggestions</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="w-16 h-16 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                  <MailCheck className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Automated Workflows</h3>
                <p className="text-gray-600 mb-4">
                  Create sophisticated email workflows that automatically respond to customer actions and behaviors.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Trigger-based automation</li>
                  <li>• Multi-step sequences</li>
                  <li>• Conditional logic</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Proven Results</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our AI email automation platform has helped businesses achieve remarkable improvements in their email marketing performance.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-600 mb-2">300%</div>
                <p className="text-gray-600">Increase in open rates</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">150%</div>
                <p className="text-gray-600">Boost in conversion rates</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">85%</div>
                <p className="text-gray-600">Reduction in unsubscribes</p>
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
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Email Automation Pricing</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the plan that fits your email marketing needs and subscriber count.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-8 shadow-lg border border-gray-200">
                <h3 className="text-2xl font-bold mb-4">Starter</h3>
                <div className="text-4xl font-bold text-yellow-600 mb-6">$49<span className="text-lg text-gray-500">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Up to 5,000 subscribers</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Basic AI personalization</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Email support</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Basic analytics</span>
                  </li>
                </ul>
                <Link href="/contact" className="w-full bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-block text-center">
                  Start Free Trial
                </Link>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-lg border-2 border-yellow-600 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-yellow-600 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Professional</h3>
                <div className="text-4xl font-bold text-yellow-600 mb-6">$149<span className="text-lg text-gray-500">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Up to 25,000 subscribers</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Advanced AI features</span>
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
                    <span>Automated workflows</span>
                  </li>
                </ul>
                <Link href="/contact" className="w-full bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-block text-center">
                  Start Free Trial
                </Link>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-lg border border-gray-200">
                <h3 className="text-2xl font-bold mb-4">Enterprise</h3>
                <div className="text-4xl font-bold text-yellow-600 mb-6">$399<span className="text-lg text-gray-500">/month</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Unlimited subscribers</span>
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
                    <span>Dedicated account manager</span>
                  </li>
                </ul>
                <Link href="/contact" className="w-full bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-block text-center">
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">Transform Your Email Marketing Today</h2>
            <p className="text-xl mb-8 text-gray-300 max-w-3xl mx-auto">
              Join thousands of businesses that have revolutionized their email marketing with our AI-powered automation platform.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-block text-lg">
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