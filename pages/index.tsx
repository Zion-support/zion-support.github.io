import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowRight, Brain, Cloud, Shield, Zap, Users, CheckCircle, Star, Phone, Mail, MapPin } from 'lucide-react';

export default function Home() {
  return (
    <>
      <Head>
        <title>Zion Tech Group - Leading Technology Solutions Provider</title>
        <meta name="description" content="Zion Tech Group delivers innovative micro SaaS, IT services, and AI solutions. Transform your business with our cutting-edge technology services and expert consulting." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="micro SaaS, AI services, IT solutions, cloud computing, cybersecurity, technology consulting" />
      </Head>
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Zion Tech Group</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200 leading-relaxed">
              Leading provider of revolutionary micro SaaS solutions, cutting-edge AI services, and comprehensive IT solutions. 
              Transform your business with our innovative technology services and expert consulting.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/services">
                <span className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors cursor-pointer inline-flex items-center">
                  Explore Our Services
                  <ArrowRight className="ml-2 w-5 h-5" />
                </span>
              </Link>
              <Link href="/contact">
                <span className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors cursor-pointer">
                  Get Free Consultation
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver comprehensive technology solutions across three key areas to accelerate your digital transformation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Micro SaaS Services */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-x-3 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600">
                  <Zap className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Micro SaaS Solutions</h3>
                  <p className="text-sm text-blue-600 font-medium">Innovative Applications</p>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                Powerful, affordable SaaS applications designed to solve specific business challenges and streamline operations.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-x-3">
                  <CheckCircle className="h-4 w-4 text-blue-600" />
                  <span className="text-sm text-gray-700">AI Content Generation</span>
                </li>
                <li className="flex items-center gap-x-3">
                  <CheckCircle className="h-4 w-4 text-blue-600" />
                  <span className="text-sm text-gray-700">Email Automation</span>
                </li>
                <li className="flex items-center gap-x-3">
                  <CheckCircle className="h-4 w-4 text-blue-600" />
                  <span className="text-sm text-gray-700">Talent Matching</span>
                </li>
                <li className="flex items-center gap-x-3">
                  <CheckCircle className="h-4 w-4 text-blue-600" />
                  <span className="text-sm text-gray-700">Event Management</span>
                </li>
              </ul>
              <Link href="/services/micro-saas">
                <span className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-500 transition-colors">
                  Explore Micro SaaS
                  <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              </Link>
            </div>

            {/* IT Services */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-x-3 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-600">
                  <Cloud className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">IT Services & Solutions</h3>
                  <p className="text-sm text-green-600 font-medium">Enterprise Infrastructure</p>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                Comprehensive IT services to modernize your infrastructure, enhance security, and optimize technology operations.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-x-3">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm text-gray-700">Cloud Migration</span>
                </li>
                <li className="flex items-center gap-x-3">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm text-gray-700">Cybersecurity</span>
                </li>
                <li className="flex items-center gap-x-3">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm text-gray-700">DevOps Automation</span>
                </li>
                <li className="flex items-center gap-x-3">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm text-gray-700">Edge Computing</span>
                </li>
              </ul>
              <Link href="/services/it-services">
                <span className="inline-flex items-center text-sm font-semibold text-green-600 hover:text-green-500 transition-colors">
                  Explore IT Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              </Link>
            </div>

            {/* AI Services */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-x-3 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-600">
                  <Brain className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">AI & Machine Learning</h3>
                  <p className="text-sm text-purple-600 font-medium">Intelligent Automation</p>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                Leverage the power of artificial intelligence to automate processes, gain insights, and create competitive advantages.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-x-3">
                  <CheckCircle className="h-4 w-4 text-purple-600" />
                  <span className="text-sm text-gray-700">Custom AI Models</span>
                </li>
                <li className="flex items-center gap-x-3">
                  <CheckCircle className="h-4 w-4 text-purple-600" />
                  <span className="text-sm text-gray-700">Computer Vision</span>
                </li>
                <li className="flex items-center gap-x-3">
                  <CheckCircle className="h-4 w-4 text-purple-600" />
                  <span className="text-sm text-gray-700">Predictive Analytics</span>
                </li>
                <li className="flex items-center gap-x-3">
                  <CheckCircle className="h-4 w-4 text-purple-600" />
                  <span className="text-sm text-gray-700">Drug Discovery</span>
                </li>
              </ul>
              <Link href="/services/ai-services">
                <span className="inline-flex items-center text-sm font-semibold text-purple-600 hover:text-purple-500 transition-colors">
                  Explore AI Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Zion Tech Group?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver cutting-edge solutions with proven methodologies and expert implementation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Expert Team</h3>
              <p className="text-gray-600">Experienced professionals with deep expertise in cutting-edge technologies and industry best practices.</p>
            </div>
            
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                  <Zap className="h-8 w-8 text-green-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Rapid Implementation</h3>
              <p className="text-gray-600">Quick deployment of solutions with proven methodologies and best practices for faster time to market.</p>
            </div>
            
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">
                  <Shield className="h-8 w-8 text-purple-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Enterprise Security</h3>
              <p className="text-gray-600">Bank-level security protocols and compliance standards to protect your business data and operations.</p>
            </div>
            
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-100">
                  <Star className="h-8 w-8 text-orange-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Proven Results</h3>
              <p className="text-gray-600">Track record of successful implementations with measurable ROI and client satisfaction.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get in touch with our experts for a free consultation and discover how our solutions can accelerate your growth.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600">
                  <Phone className="h-6 w-6 text-white" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
              <p className="text-gray-600">+1 302 464 0950</p>
            </div>
            
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-600">
                  <Mail className="h-6 w-6 text-white" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600">kleber@ziontechgroup.com</p>
            </div>
            
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-600">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Address</h3>
              <p className="text-gray-600">364 E Main St STE 1008<br />Middletown, DE 19709</p>
            </div>
          </div>
          
          <div className="text-center">
            <Link href="/contact">
              <span className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors cursor-pointer inline-flex items-center">
                Get Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}