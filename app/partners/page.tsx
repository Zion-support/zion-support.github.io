'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, ExternalLink } from 'lucide-react';

const PartnersPage: React.FC = () => {
  const partners = [
    {
      name: 'Microsoft',
      logo: '/images/partners/microsoft.png',
      description: 'Strategic partner for Azure cloud solutions and AI services',
      category: 'Cloud & AI'
    },
    {
      name: 'Amazon Web Services',
      logo: '/images/partners/aws.png',
      description: 'Premier partner for AWS cloud infrastructure and machine learning',
      category: 'Cloud & AI'
    },
    {
      name: 'Google Cloud',
      logo: '/images/partners/google-cloud.png',
      description: 'Partner for Google Cloud Platform and AI/ML solutions',
      category: 'Cloud & AI'
    },
    {
      name: 'NVIDIA',
      logo: '/images/partners/nvidia.png',
      description: 'Technology partner for GPU-accelerated AI computing',
      category: 'Hardware & AI'
    },
    {
      name: 'Salesforce',
      logo: '/images/partners/salesforce.png',
      description: 'Partner for CRM and business automation solutions',
      category: 'Business Software'
    },
    {name: 'ServiceNow',
      logo: '/images/partners/servicenow.png',
      description: 'Partner for IT service management and workflow automation',
      category: 'IT Management'}
  ];
  const benefits = [
    {
      title: 'Certified Expertise',
      description: 'Our team holds certifications from leading technology partners',
      icon: CheckCircle
    },
    {
      title: 'Priority Support',
      description: 'Get priority access to partner resources and support channels',
      icon: CheckCircle
    },
    {
      title: 'Latest Technology',
      description: 'Access to cutting-edge tools and early release features',
      icon: CheckCircle
    },
    {title: 'Cost Optimization',
      description: 'Leverage partner pricing and volume discounts for your projects',
      icon: CheckCircle}
  ];
  const categories = ['All', 'Cloud & AI', 'Hardware & AI', 'Business Software', 'IT Management']

  return (
    <>
      <Helmet>
        <title>Partners | Zion Tech Group</title>
        <meta name="description" content="Learn about our technology partnerships and how they benefit our clients with certified expertise and priority support." />
        <meta name="keywords" content="partners, technology partnerships, Microsoft, AWS, Google Cloud, NVIDIA, certified expertise" />
      </Helmet>

      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Our Technology Partners
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                We work with leading technology companies to deliver the best solutions for our clients.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-6 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full text-white hover:bg-white/20 transition-all duration-300"
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {partners.map((partner, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
                  <div className="aspect-video bg-white/10 rounded-xl mb-4 flex items-center justify-center">
                    <div className="text-4xl opacity-50">🏢</div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{partner.name}</h3>
                  <p className="text-gray-300 mb-4">{partner.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full">
                      {partner.category}
                    </span>
                    <button className="text-cyan-400 hover:text-cyan-300 transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Why Partner With Us?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                    <p className="text-gray-300 text-sm">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Become a Partner</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join our partner ecosystem and unlock new opportunities for growth and innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-purple-600 transition-all duration-300">
                  Partner With Us
                </button>
                <button className="px-8 py-4 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default PartnersPage;