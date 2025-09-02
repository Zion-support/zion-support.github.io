import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowRight, Brain, Cloud, Shield, Zap, Database, Server, Lock, BarChart3, Users, Globe, Code, CheckCircle, Star, TrendingUp, Clock, Award, Phone, Mail, MapPin } from 'lucide-react';

export default function Home() {
  return (
    <>
      <Head>
        <title>Zion Tech Group - Leading AI, Cloud & Technology Solutions</title>
        <meta name="description" content="Transform your business with our comprehensive suite of AI services, micro SaaS solutions, cloud infrastructure, and cutting-edge technology innovations. Contact us at +1 302 464 0950." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="AI services, micro SaaS, cloud solutions, IT services, cybersecurity, data analytics, technology consulting" />
      </Head>
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Award className="h-6 w-6 text-blue-600 mr-2" />
              <span className="text-base font-semibold leading-7 text-blue-600">Leading Technology Solutions</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Transform Your Business with{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Advanced Technology
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
              We deliver cutting-edge AI services, micro SaaS solutions, cloud infrastructure, and innovative technology platforms that drive real business results.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/contact"
                className="rounded-md bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 hover:shadow-xl"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-4 w-4 inline" />
              </Link>
              <Link
                href="/comprehensive-services-showcase-2026"
                className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-600 transition-colors"
              >
                Explore Our Services <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Comprehensive Service Portfolio
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              From AI-powered automation to cloud infrastructure, we provide end-to-end technology solutions
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* Micro SaaS */}
            <div className="group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-blue-300">
              <div className="flex items-center gap-x-3 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 group-hover:bg-blue-700 transition-colors">
                  <Zap className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Micro SaaS Solutions</h3>
                  <p className="text-sm text-blue-600 font-medium">Affordable & Specialized</p>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                Specialized software solutions designed for small businesses, including AI email automation, smart inventory management, and customer support chatbots.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-x-3">
                  <CheckCircle className="h-4 w-4 text-blue-600" />
                  <span className="text-sm text-gray-700">AI Email Automation Suite - $79/month</span>
                </li>
                <li className="flex items-center gap-x-3">
                  <CheckCircle className="h-4 w-4 text-blue-600" />
                  <span className="text-sm text-gray-700">Smart Inventory Management - $149/month</span>
                </li>
                <li className="flex items-center gap-x-3">
                  <CheckCircle className="h-4 w-4 text-blue-600" />
                  <span className="text-sm text-gray-700">AI Customer Support Chatbot - $99/month</span>
                </li>
              </ul>
              <Link
                href="/services/micro-saas"
                className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-500 transition-colors group"
              >
                Explore Micro SaaS
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* AI & Machine Learning */}
            <div className="group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-purple-300">
              <div className="flex items-center gap-x-3 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-600 group-hover:bg-purple-700 transition-colors">
                  <Brain className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">AI & Machine Learning</h3>
                  <p className="text-sm text-purple-600 font-medium">Intelligent Automation</p>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                Advanced AI solutions including autonomous customer success, sales intelligence, and predictive maintenance systems.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-x-3">
                  <CheckCircle className="h-4 w-4 text-purple-600" />
                  <span className="text-sm text-gray-700">AI Autonomous Customer Success - $299/month</span>
                </li>
                <li className="flex items-center gap-x-3">
                  <CheckCircle className="h-4 w-4 text-purple-600" />
                  <span className="text-sm text-gray-700">AI Sales Intelligence Platform - $199/month</span>
                </li>
                <li className="flex items-center gap-x-3">
                  <CheckCircle className="h-4 w-4 text-purple-600" />
                  <span className="text-sm text-gray-700">AI Document Processing - $179/month</span>
                </li>
              </ul>
              <Link
                href="/services/ai-services"
                className="inline-flex items-center text-sm font-semibold text-purple-600 hover:text-purple-500 transition-colors group"
              >
                Explore AI Services
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* IT Services */}
            <div className="group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-green-300">
              <div className="flex items-center gap-x-3 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-600 group-hover:bg-green-700 transition-colors">
                  <Server className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">IT Services</h3>
                  <p className="text-sm text-green-600 font-medium">Comprehensive Support</p>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                Complete IT support including managed services, cybersecurity assessment, and cloud migration consulting.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-x-3">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm text-gray-700">Managed IT Support - $299/month</span>
                </li>
                <li className="flex items-center gap-x-3">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm text-gray-700">Cybersecurity Assessment - $199/month</span>
                </li>
                <li className="flex items-center gap-x-3">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm text-gray-700">Cloud Migration Consulting - $499/month</span>
                </li>
              </ul>
              <Link
                href="/services/it-services"
                className="inline-flex items-center text-sm font-semibold text-green-600 hover:text-green-500 transition-colors group"
              >
                Explore IT Services
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Transform Your Business?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
              Our team of experts is ready to help you implement the right solutions for your business needs.
            </p>
            
            {/* Contact Details */}
            <div className="mt-12 grid gap-8 md:grid-cols-3 text-center">
              <div className="flex flex-col items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 mb-4">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                <p className="text-gray-300">+1 302 464 0950</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 mb-4">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                <p className="text-gray-300">kleber@ziontechgroup.com</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 mb-4">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
                <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>

            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/contact"
                className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50 transition-colors"
              >
                Get in touch
                <ArrowRight className="ml-2 h-4 w-4 inline" />
              </Link>
              <a
                href="https://ziontechgroup.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold leading-6 text-white hover:text-blue-300 transition-colors"
              >
                Visit our website <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}