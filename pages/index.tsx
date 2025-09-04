<<<<<<< HEAD
<<<<<<< HEAD
import type { NextPage } from 'next';
import Layout from '../components/Layout';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Star, Users, Award, Globe, Brain, Cloud } from 'lucide-react';
=======
import React from
  'react';
import Head from
  'next/head';
>>>>>>> origin/main
=======
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import { useState, useEffect } from 'react';
>>>>>>> main

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const contact = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    site: 'https://ziontechgroup.com'
  }
  return (
    <>
      <Head>
        <title>Zion Tech Group - Innovative Micro SaaS, AI & IT Solutions</title>
        <meta name="description" content="Leading provider of micro SaaS products, AI services, and IT solutions. 340+ innovative services including quantum computing, AI automation, blockchain, edge computing, and enterprise technology solutions." />
        <meta name="keywords" content="micro SaaS, AI services, IT solutions, cloud computing, automation, machine learning, DevOps, cybersecurity, quantum computing, blockchain, edge computing, 5G, IoT, MLOps, DevSecOps" />
        <link rel="canonical" href={contact.site} />
        <meta property="og:title" content="Zion Tech Group - Innovative Micro SaaS, AI & IT Solutions" />
        <meta property="og:description" content="Leading provider of micro SaaS products, AI services, and IT solutions. 340+ innovative services including quantum computing, AI automation, blockchain, edge computing, and enterprise technology solutions." />
        <meta property="og:url" content={contact.site} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion Tech Group - Innovative Micro SaaS, AI & IT Solutions" />
        <meta name="twitter:description" content="Leading provider of micro SaaS products, AI services, and IT solutions. 340+ innovative services including quantum computing, AI automation, blockchain, edge computing, and enterprise technology solutions." />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Zion Tech Group",
              "url": contact.site,
              "logo": `${contact.site}/favicon.svg`,
              "description": "Leading provider of micro SaaS products, AI services, and IT solutions",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "364 E Main St STE 1008",
                "addressLocality": "Middletown",
                "addressRegion": "DE",
                "postalCode": "19709",
                "addressCountry": "US"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": contact.phone,
                "contactType": "customer service",
                "email": contact.email
              },
              "sameAs": [contact.site]
            })
          }}
        />
      </Head>
      
      <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
        {/* Hero Section */}
        <section className="py-20 px-4 text-center" role="banner">
          <div className="max-w-4xl mx-auto">
            <h1 className={`text-5xl md:text-6xl font-extrabold tracking-tight mb-6 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Zion Tech Group
            </h1>
            <p className={`text-xl md:text-2xl text-slate-300 mb-8 transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Innovative Micro SaaS, AI Services & IT Solutions
            </p>
            <p className="text-lg text-slate-400 mb-12 max-w-3xl mx-auto">
              We deliver cutting-edge technology solutions with 150+ innovative micro SaaS products, 
              90+ advanced AI services, and 100+ comprehensive IT solutions. From quantum computing 
              to AI automation, we help businesses scale efficiently and securely with next-generation technology.
            </p>
            
            <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 transition-all duration-1000 delay-600 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <Link 
                href="/services" 
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900"
                aria-label="View all our services"
              >
                View All Services
              </Link>
              <Link 
                href="/services-catalog" 
                className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-slate-900"
                aria-label="Browse our services catalog"
              >
                Services Catalog
              </Link>
              <Link 
                href="/contact" 
                className="px-8 py-3 bg-slate-800 hover:bg-slate-700 border border-white/10 rounded-lg font-semibold transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 focus:ring-offset-slate-900"
                aria-label="Get a quote for our services"
              >
                Get Quote
              </Link>
            </div>

            <div className={`grid md:grid-cols-3 gap-6 text-center transition-all duration-1000 delay-800 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="p-6 bg-slate-900/60 rounded-lg border border-white/10 hover:border-blue-500/40 transition-all duration-300 hover:scale-105">
                <h3 className="text-2xl font-bold text-blue-400 mb-2" aria-label="150 plus micro SaaS products">150+</h3>
                <p className="text-slate-300">Micro SaaS Products</p>
              </div>
              <div className="p-6 bg-slate-900/60 rounded-lg border border-white/10">
                <h3 className="text-2xl font-bold text-purple-400 mb-2">90+</h3>
                <p className="text-slate-300">AI Services</p>
              </div>
              <div className="p-6 bg-slate-900/60 rounded-lg border border-white/10 hover:border-green-500/40 transition-all duration-300 hover:scale-105">
                <h3 className="text-2xl font-bold text-green-400 mb-2" aria-label="100 plus IT solutions">100+</h3>
                <p className="text-slate-300">IT Solutions</p>
              </div>
            </div>
          </div>
<<<<<<< HEAD
        </div>
<<<<<<< HEAD
      </section>

      {/* New Services Showcase */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest AI & Technology Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our newest AI-powered solutions and cutting-edge technology services designed to transform your business.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Brain className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">AI Content Generator</h3>
              <p className="text-gray-600 mb-4">
                Create high-quality content 10x faster with our AI-powered platform. Generate blogs, social media posts, and more.
              </p>
              <Link href="/services/ai-content-generator" className="text-blue-600 hover:text-blue-700 font-semibold flex items-center">
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Smart Inventory Management</h3>
              <p className="text-gray-600 mb-4">
                AI-powered inventory optimization that reduces stockouts by 90% and cuts costs by 40%.
              </p>
              <Link href="/services/smart-inventory-management" className="text-green-600 hover:text-green-700 font-semibold flex items-center">
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <Cloud className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Cloud Migration Services</h3>
              <p className="text-gray-600 mb-4">
                Seamless cloud migration with zero downtime. Reduce costs by 30% and improve performance by 50%.
              </p>
              <Link href="/services/cloud-migration-services" className="text-purple-600 hover:text-purple-700 font-semibold flex items-center">
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
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
              <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors cursor-pointer inline-block">
                Schedule a Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 text-gray-300 max-w-3xl mx-auto">
            Join hundreds of businesses that have already transformed their digital presence with Zion Tech Group.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg">
              Get Started Today
            </Link>
            <Link href="/about" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg">
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </Layout>
=======
=======
        </section>

        {/* Services Overview */}
        <section className="py-16 px-4" role="main">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" id="service-categories">
              Our Service Categories
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 bg-slate-900/60 rounded-xl border border-white/10 hover:border-blue-500/40 transition-colors">
                <h3 className="text-2xl font-bold mb-4 text-blue-400">Micro SaaS Products</h3>
                <p className="text-slate-300 mb-6">
                  Innovative, focused software solutions including AI-Powered Video Clip Maker, 
                  Smart Contract Analyzer, Cybersecurity Threat Intelligence, and 50+ more specialized tools.
                </p>
                <ul className="text-slate-400 space-y-2 mb-6">
                  <li>• AI-Powered Video Clip Maker</li>
                  <li>• Smart Contract Analyzer</li>
                  <li>• Cybersecurity Threat Intelligence</li>
                  <li>• Multi-Language Website Translator</li>
                  <li>• Predictive Inventory Optimizer</li>
                </ul>
                <Link href="/micro-saas" className="text-blue-400 hover:text-blue-300 font-semibold">
                  View All Micro SaaS →
                </Link>
              </div>

              <div className="p-8 bg-slate-900/60 rounded-xl border border-white/10 hover:border-purple-500/40 transition-colors">
                <h3 className="text-2xl font-bold mb-4 text-purple-400">AI Services</h3>
                <p className="text-slate-300 mb-6">
                  Advanced artificial intelligence solutions including autonomous AI agents, 
                  financial trading systems, legal document analysis, and 40+ more AI-powered services.
                </p>
                <ul className="text-slate-400 space-y-2 mb-6">
                  <li>• Autonomous AI Agents</li>
                  <li>• AI-Powered Financial Trading</li>
                  <li>• AI Legal Document Analysis</li>
                  <li>• AI-Powered Voice Analytics</li>
                  <li>• AI-Powered Search & Discovery</li>
                </ul>
                <Link href="/ai-services" className="text-purple-400 hover:text-purple-300 font-semibold">
                  View All AI Services →
                </Link>
              </div>

              <div className="p-8 bg-slate-900/60 rounded-xl border border-white/10 hover:border-green-500/40 transition-colors">
                <h3 className="text-2xl font-bold mb-4 text-green-400">IT & Cloud Services</h3>
                <p className="text-slate-300 mb-6">
                  Comprehensive IT solutions including quantum computing consulting, blockchain & Web3 solutions, 
                  DevSecOps automation, and 40+ more enterprise-grade services.
                </p>
                <ul className="text-slate-400 space-y-2 mb-6">
                  <li>• Quantum Computing Consulting</li>
                  <li>• Blockchain & Web3 Solutions</li>
                  <li>• DevSecOps & Security Automation</li>
                  <li>• Enterprise Data Platform</li>
                  <li>• High-Performance Computing Solutions</li>
                </ul>
                <Link href="/it-services" className="text-green-400 hover:text-green-300 font-semibold">
                  View All IT Services →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4 bg-slate-900/40">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-slate-300 mb-8">
              Get in touch with our experts to discuss your project requirements and discover 
              how our innovative solutions can drive your business forward.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <a href={`tel:${contact.phone.replace(/[^\d+]/g,'')}`} className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors">
                Call {contact.phone}
              </a>
              <a href={`mailto:${contact.email}`} className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-colors">
                Email {contact.email}
              </a>
              <Link href="/contact" className="px-6 py-3 bg-slate-800 hover:bg-slate-700 border border-white/10 rounded-lg font-semibold transition-colors">
                Contact Form
              </Link>
            </div>
            
            <div className="text-slate-400">
              <p>{contact.address}</p>
              <p className="mt-2">Visit us at <a href={contact.site} className="text-blue-400 hover:text-blue-300">{contact.site}</a></p>
            </div>
          </div>
        </section>
>>>>>>> main
      </main>
    </>
>>>>>>> origin/main
  );
}
