import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Star, Users, Award, Globe, Brain, Cloud, Shield, Zap, Database, Cpu, Lock, Heart, TrendingUp, Target, BarChart3, PenTool, Eye, Server, Smartphone, Network, Clock, Sparkles, Phone, Mail, MapPin, FileText, Building2, Car, Share2 } from 'lucide-react';

export default function Home() {
  return (
    <>
      <Head>
        <title>Zion Tech Group</title>
        <meta name="description" content="Leading technology solutions provider" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Welcome to Zion Tech Group
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leading provider of revolutionary technology solutions, AI services, and cutting-edge innovations.
            </p>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Transform Your Business with 
                <span className="text-blue-600"> AI & Technology</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Leading provider of revolutionary AI services, micro SaaS solutions, and cutting-edge IT innovations that drive real business results.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-block text-lg">
                  Get Started Today
                </Link>
                <Link href="/services" className="bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-block text-lg">
                  Explore Services
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* New Services Showcase */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest AI & Technology Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover our newest AI-powered solutions and cutting-edge technology services designed to transform your business.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Brain className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">AI Content Generator</h3>
                <p className="text-gray-600 mb-4">
                  Create high-quality content 10x faster with our AI-powered platform. Generate blogs, social media posts, and more.
                </p>
                <div className="text-sm text-gray-500 mb-4">Starting at $29/month</div>
                <Link href="/services/ai-content-generator" className="text-blue-600 hover:text-blue-700 font-semibold flex items-center">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Smart Inventory Management</h3>
                <p className="text-gray-600 mb-4">
                  AI-powered inventory optimization that reduces stockouts by 90% and cuts costs by 40%.
                </p>
                <div className="text-sm text-gray-500 mb-4">Starting at $99/month</div>
                <Link href="/services/smart-inventory-management" className="text-green-600 hover:text-green-700 font-semibold flex items-center">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                  <Cloud className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Cloud Migration Services</h3>
                <p className="text-gray-600 mb-4">
                  Seamless cloud migration with zero downtime. Reduce costs by 30% and improve performance by 50%.
                </p>
                <div className="text-sm text-gray-500 mb-4">Custom pricing</div>
                <Link href="/services/cloud-migration-services" className="text-purple-600 hover:text-purple-700 font-semibold flex items-center">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                  <Shield className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">AI Cybersecurity Platform</h3>
                <p className="text-gray-600 mb-4">
                  Advanced threat detection and prevention with 99.9% accuracy. Protect your business from cyber attacks.
                </p>
                <div className="text-sm text-gray-500 mb-4">Starting at $199/month</div>
                <Link href="/services/ai-cybersecurity" className="text-red-600 hover:text-red-700 font-semibold flex items-center">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="w-16 h-16 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
                  <Zap className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">AI Email Automation</h3>
                <p className="text-gray-600 mb-4">
                  Intelligent email marketing that increases open rates by 300% and conversion rates by 150%.
                </p>
                <div className="text-sm text-gray-500 mb-4">Starting at $49/month</div>
                <Link href="/services/ai-email-automation" className="text-yellow-600 hover:text-yellow-700 font-semibold flex items-center">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="w-16 h-16 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                  <Database className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Data Analytics Platform</h3>
                <p className="text-gray-600 mb-4">
                  Transform raw data into actionable insights with our AI-powered analytics platform.
                </p>
                <div className="text-sm text-gray-500 mb-4">Starting at $149/month</div>
                <Link href="/services/data-analytics" className="text-indigo-600 hover:text-indigo-700 font-semibold flex items-center">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Zion Tech Group?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We combine technical expertise with business acumen to deliver solutions that drive real results.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Expert Team</h3>
                      <p className="text-gray-600">Our team consists of industry experts with years of experience in cutting-edge technologies.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Proven Track Record</h3>
                      <p className="text-gray-600">We've successfully delivered hundreds of projects across various industries and technologies.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Innovation Focus</h3>
                      <p className="text-gray-600">We stay ahead of the curve, implementing the latest technologies and best practices.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold mb-2">24/7 Support</h3>
                      <p className="text-gray-600">Round-the-clock support ensures your systems are always running smoothly.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
                <p className="mb-6 text-blue-100">
                  Let's discuss how we can help transform your business with cutting-edge technology solutions.
                </p>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center">
                    <Phone className="w-4 h-4 mr-2" />
                    <span>+1 302 464 0950</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-4 h-4 mr-2" />
                    <span>kleber@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>364 E Main St STE 1008, Middletown, DE 19709</span>
                  </div>
                </div>
                <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors inline-block mt-6">
                  Schedule a Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8 text-gray-300 max-w-3xl mx-auto">
              Join hundreds of businesses that have already transformed their digital presence with Zion Tech Group.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-block text-lg">
                Get Started Today
              </Link>
              <Link href="/about" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-colors inline-block text-lg">
                Learn More About Us
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}