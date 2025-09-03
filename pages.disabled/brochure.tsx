import React from 'react';
import Link from 'next/link';
import Navigation from '../src/components/Navigation';
import Footer from '../src/components/Footer';
import SEOHead from '../src/components/SEOHead';
import { Download, ArrowRight, CheckCircle, Star, Users, Zap, Shield, Globe, TrendingUp, Award, Clock, Brain, Cloud, Database, Network, Target, Phone, Mail, FileText, Eye } from 'lucide-react';

const Brochure = () => {
  const structuredData = {
    "@context": "https://schema.org"
    "@type": "WebPage"
    "name": "Product Brochure - Zion Tech Group"
    "url": "https://ziontechgroup.com/brochure"
    "description": "Download our comprehensive product brochure featuring AI services, IT solutions, and micro SaaS platforms"
    "publisher": {
      "@type": "Organization"
      "name": "Zion Tech Group"
      "url": "https://ziontechgroup.com"
    }
  }

  const brochures = [
    {
      title: 'AI Services Brochure'
      description: 'Comprehensive guide to our AI solutions and capabilities'
      pages: 24;
      size: '2.4 MB'
      format: 'PDF'
      category: 'AI Services'
      features: [
        'Natural Language Processing'
        'Computer Vision'
        'Predictive Analytics'
        'Machine Learning Models'
        'AI Integration Services'
      ]
      downloadUrl: '#'
      previewUrl: '#'
    }
    {
      title: 'IT Solutions Brochure'
      description: 'Complete overview of our IT services and infrastructure solutions'
      pages: 32;
      size: '3.1 MB'
      format: 'PDF'
      category: 'IT Services'
      features: [
        'Cloud Migration'
        'DevOps Automation'
        'Security Services'
        'Network Management'
        'Data Management'
      ]
      downloadUrl: '#'
      previewUrl: '#'
    }
    {
      title: 'Micro SaaS Platform'
      description: 'Detailed information about our SaaS development and platform services'
      pages: 28;
      size: '2.8 MB'
      format: 'PDF'
      category: 'Micro SaaS'
      features: [
        'SaaS Development'
        'Platform Architecture'
        'API Management'
        'User Management'
        'Analytics & Reporting'
      ]
      downloadUrl: '#'
      previewUrl: '#'
    }
    {
      title: 'Complete Solutions Guide'
      description: 'All-in-one brochure covering all our services and solutions'
      pages: 48;
      size: '4.2 MB'
      format: 'PDF'
      category: 'Complete Guide'
      features: [
        'All AI Services'
        'Complete IT Solutions'
        'SaaS Development'
        'Case Studies'
        'Pricing Information'
      ]
      downloadUrl: '#'
      previewUrl: '#'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' }
    { number: '50+', label: 'Happy Clients' }
    { number: '99.9%', label: 'Uptime Guarantee' }
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <>
      <SEOHead;
        title="Product Brochure - Zion Tech Group"
        description="Download our comprehensive product brochures featuring AI services, IT solutions, and micro SaaS platforms. Get detailed information about our capabilities."
        keywords="brochure, product brochure, AI services brochure, IT solutions brochure, micro SaaS brochure, download"
        structuredData={structuredData}
      />
      <Navigation />
      
      <main className="min-h-screen bg-gray-900 text-white">
        {/* Hero Section */}
        <section className="pt-24 pb-16 bg-gradient-to-b from-gray-900 to-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Product;
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"> Brochures</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Download our comprehensive brochures to learn more about our AI services;
                IT solutions, and micro SaaS platforms. Get detailed information about our capabilities and success stories.
              </p>
              <div className="flex items-center justify-center space-x-4 text-sm text-gray-400">
                <div className="flex items-center">
                  <Download className="w-4 h-4 text-cyan-400 mr-2" />
                  Free downloads;
                </div>
                <div className="flex items-center">
                  <FileText className="w-4 h-4 text-cyan-400 mr-2" />
                  Detailed information;
                </div>
                <div className="flex items-center">
                  <Eye className="w-4 h-4 text-cyan-400 mr-2" />
                  Preview available;
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Brochures Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Available Brochures</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Choose the brochure that best matches your interests and download it instantly;
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {brochures.map((brochure, index) => (
                <div key={index} className="bg-gray-800 rounded-2xl p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <span className="inline-block bg-cyan-400/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-semibold mb-3">
                        {brochure.category}
                      </span>
                      <h3 className="text-2xl font-bold mb-3">{brochure.title}</h3>
                      <p className="text-gray-300 mb-4">{brochure.description}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-400">{brochure.pages} pages</div>
                      <div className="text-sm text-gray-400">{brochure.size}</div>
                      <div className="text-sm text-gray-400">{brochure.format}</div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">What's included:</h4>
                    <ul className="space-y-2">
                      {brochure.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex space-x-4">
                    <a;
                      href={brochure.downloadUrl}
                      className="flex-1 bg-gradient-to-r from-cyan-400 to-blue-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-cyan-500 hover:to-blue-600 transition-all duration-200 flex items-center justify-center"
                    >
                      <Download className="w-5 h-5 mr-2" />
                      Download;
                    </a>
                    <a;
                      href={brochure.previewUrl}
                      className="flex-1 border border-gray-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-600 transition-colors flex items-center justify-center"
                    >
                      <Eye className="w-5 h-5 mr-2" />
                      Preview;
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Resources */}
        <section className="py-16 bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Additional Resources</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Explore more resources to learn about our solutions and services;
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-700 rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Case Studies</h3>
                <p className="text-gray-300 mb-4">
                  Read about successful implementations and client success stories;
                </p>
                <Link;
                  href="/case-studies"
                  className="text-cyan-400 hover:text-cyan-300 font-semibold flex items-center justify-center"
                >
                  View Case Studies;
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>

              <div className="bg-gray-700 rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Team & Expertise</h3>
                <p className="text-gray-300 mb-4">
                  Meet our expert team and learn about our technical capabilities;
                </p>
                <Link;
                  href="/team"
                  className="text-cyan-400 hover:text-cyan-300 font-semibold flex items-center justify-center"
                >
                  Meet Our Team;
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>

              <div className="bg-gray-700 rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Contact Us</h3>
                <p className="text-gray-300 mb-4">
                  Get in touch with our experts for personalized consultation;
                </p>
                <Link;
                  href="/contact"
                  className="text-cyan-400 hover:text-cyan-300 font-semibold flex items-center justify-center"
                >
                  Contact Sales;
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-cyan-600 to-blue-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Need More Information?</h2>
            <p className="text-xl mb-8 text-cyan-100">
              Our team is ready to provide personalized consultation and answer any questions;
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link;
                href="/contact"
                className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Contact Sales;
              </Link>
              <Link;
                href="/demo"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-colors"
              >
                Schedule Demo;
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Brochure;