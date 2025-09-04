import React from 'react';
import Head from 'next/head';
import { Zap, Users, Shield, ArrowRight } from 'lucide-react';

export default function ServicesOverview() {
  const contact = { 
    phone: '+1 302 464 0950', 
    email: 'kleber@ziontechgroup.com', 
    address: '364 E Main St STE 1008 Middletown DE 19709', 
    site: 'https://ziontechgroup.com' 
  };

  const serviceCategories = [
    {
      title: 'Micro SaaS Products',
      count: '150+',
      description: 'Focused software solutions for specific business needs',
      icon: <Zap className="w-8 h-8" />,
      features: ['Quick deployment', 'Scalable architecture', 'API integrations', 'Custom branding']
    },
    {
      title: 'AI Services',
      count: '100+',
      description: 'Artificial intelligence solutions to automate and optimize processes',
      icon: <Users className="w-8 h-8" />,
      features: ['Machine learning models', 'Natural language processing', 'Computer vision', 'Predictive analytics']
    },
    {
      title: 'IT Services',
      count: '100+',
      description: 'Comprehensive IT infrastructure and support services',
      icon: <Shield className="w-8 h-8" />,
      features: ['Cloud migration', 'System administration', 'Security audits', 'Technical support']
    }
  ];

  return (
    <>
      <Head>
        <title>Services Overview - Zion Tech Group</title>
        <meta name="description" content="Comprehensive overview of Zion Tech Group's 350+ innovative services including micro SaaS products, AI services, and IT solutions." />
        <meta name="keywords" content="services overview, micro SaaS, AI services, IT solutions, technology services, enterprise solutions" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${contact.site}/services-overview`} />
        <meta property="og:title" content="Services Overview - Zion Tech Group" />
        <meta property="og:description" content="Comprehensive overview of Zion Tech Group's 350+ innovative services including micro SaaS products, AI services, and IT solutions." />
        <meta property="og:url" content={`${contact.site}/services-overview`} />
        <meta property="og:type" content="website" />
      </Head>

      <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
        {/* Hero Section */}
        <section className="py-20 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
              Services Overview
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              Comprehensive Technology Solutions for Modern Businesses
            </p>
            <p className="text-lg text-slate-400 mb-12 max-w-3xl mx-auto">
              Explore our complete portfolio of 350+ innovative services designed to accelerate your digital transformation and drive business growth.
            </p>
          </div>
        </section>

        {/* Service Categories */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Our Service Categories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {serviceCategories.map((category, index) => (
                <div key={index} className="bg-slate-800 rounded-lg p-8 hover:bg-slate-700 transition-colors">
                  <div className="text-blue-400 mb-4">
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {category.title}
                  </h3>
                  <p className="text-blue-400 font-semibold text-lg mb-4">
                    {category.count} Services
                  </p>
                  <p className="text-slate-300 mb-6">
                    {category.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {category.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-slate-300">
                        <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                    Explore Services
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Let's discuss how our services can help you achieve your technology goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a href="/schedule-demo" className="inline-flex items-center px-8 py-4 bg-transparent text-white border-2 border-white rounded-lg hover:bg-white hover:text-slate-900 transition-colors font-semibold">
                Schedule Demo
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}