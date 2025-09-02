import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Brain, Network, Cloud, CheckCircle, ArrowRight, Award, Phone, Mail, MapPin } from 'lucide-react';
import EnhancedHeader from '../components/EnhancedHeader';
import EnhancedFooter from '../components/EnhancedFooter';

export default function ServicesOverview() {
  const title = 'Comprehensive Services Overview — Zion Tech Group';
  const description = 'Complete overview of all our AI services, IT solutions, and micro SaaS offerings.';

  const serviceCategories = [
    {
      title: 'AI Services',
      description: 'Revolutionary artificial intelligence solutions',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      services: [
        { name: 'AI-Powered Drug Discovery', pricing: '$25,000 - $150,000/month', delivery: '8-16 weeks' },
        { name: 'Quantum Computing Interface', pricing: '$50,000 - $500,000/month', delivery: '12-24 weeks' },
        { name: 'Climate Analytics AI', pricing: '$15,000 - $75,000/month', delivery: '6-12 weeks' },
        { name: 'Space Analytics Platform', pricing: '$30,000 - $200,000/month', delivery: '10-20 weeks' }
      ]
    },
    {
      title: 'IT Services',
      description: 'Comprehensive IT infrastructure solutions',
      icon: Network,
      color: 'from-blue-500 to-cyan-500',
      services: [
        { name: 'Cloud Infrastructure & Migration', pricing: '$5,000 - $50,000/month', delivery: '4-12 weeks' },
        { name: 'Zero Trust Security Architecture', pricing: '$12,000 - $75,000/month', delivery: '8-20 weeks' },
        { name: 'Hyperautomation Platform', pricing: '$20,000 - $120,000/month', delivery: '10-24 weeks' },
        { name: 'Digital Twin Platforms', pricing: '$25,000 - $150,000/month', delivery: '12-32 weeks' }
      ]
    },
    {
      title: 'Micro SaaS',
      description: 'Innovative micro SaaS solutions',
      icon: Cloud,
      color: 'from-green-500 to-emerald-500',
      services: [
        { name: 'Affiliate Marketing Tracker', pricing: '$1,500 - $6,000/month', delivery: '3-5 weeks' },
        { name: 'Contract Management System', pricing: '$2,500 - $8,000/month', delivery: '4-6 weeks' },
        { name: 'Video Content Generator', pricing: '$3,500 - $12,000/month', delivery: '5-8 weeks' },
        { name: 'Energy Management Dashboard', pricing: '$2,000 - $7,000/month', delivery: '3-6 weeks' }
      ]
    }
  ];

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://ziontechgroup.com/services-overview" />
      </Head>
      
      <EnhancedHeader />
      
      <main className="min-h-screen bg-white pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-blue-600 mr-2" />
                <span className="text-base font-semibold leading-7 text-blue-600">Comprehensive Services</span>
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Complete Technology Solutions
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
                From AI-powered drug discovery to quantum computing interfaces, we provide cutting-edge technology solutions 
                that transform businesses and drive innovation across industries.
              </p>
            </div>
          </div>
        </section>

        {/* Service Categories */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Service Categories</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive technology solutions designed to drive your business forward
              </p>
            </div>
            
            <div className="space-y-16">
              {serviceCategories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  {/* Category Header */}
                  <div className={`bg-gradient-to-r ${category.color} p-8 text-white`}>
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-white/20 rounded-lg mr-4">
                        <category.icon className="w-8 h-8" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">{category.title}</h3>
                        <p className="text-white/90">{category.description}</p>
                      </div>
                    </div>
                  </div>

                  {/* Services Grid */}
                  <div className="p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {category.services.map((service, serviceIndex) => (
                        <div key={serviceIndex} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                          <h4 className="text-lg font-semibold text-gray-900 mb-4">{service.name}</h4>
                          
                          <div className="space-y-2 mb-4">
                            <div className="flex justify-between items-center">
                              <span className="text-sm font-medium text-gray-700">Pricing:</span>
                              <span className="text-sm font-bold text-green-600">{service.pricing}</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm font-medium text-gray-700">Delivery:</span>
                              <span className="text-sm text-blue-600">{service.delivery}</span>
                            </div>
                          </div>

                          <Link href="/contact" className="block">
                            <div className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center flex items-center justify-center text-sm">
                              Get Started
                              <ArrowRight className="w-3 h-3 ml-2" />
                            </div>
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
              <p className="text-lg text-gray-600">
                Contact us today for a free consultation
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Contact Information */}
              <div className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-blue-600 mr-3" />
                    <div>
                      <p className="font-semibold text-gray-900">Phone</p>
                      <a href="tel:+13024640950" className="text-blue-600 hover:text-blue-700">+1 302 464 0950</a>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-blue-600 mr-3" />
                    <div>
                      <p className="font-semibold text-gray-900">Email</p>
                      <a href="mailto:kleber@ziontechgroup.com" className="text-blue-600 hover:text-blue-700">kleber@ziontechgroup.com</a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Address</p>
                      <p className="text-gray-600">364 E Main St STE 1008<br />Middletown DE 19709</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Free Consultation</h3>
                <p className="mb-6">
                  Schedule a complimentary strategy session to understand your needs and provide accurate pricing.
                </p>
                <Link href="/contact" className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Schedule Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <EnhancedFooter />
    </>
  );
}