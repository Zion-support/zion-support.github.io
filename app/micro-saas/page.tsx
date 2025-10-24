'use client';
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function MicroSaasPage() {
  return (
    <>
      <Head>
        <title>Micro Saas - Zion Tech Group</title>
        <meta name="description" content="Professional micro saas services by Zion Tech Group. Transform your business with our expert solutions." />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">
            Micro Saas
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Professional micro saas services coming soon.
          </p>
          <Link
            href="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
          >
            Contact Us
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md: text-4xl font-bold text-gray-900 mb-4">
              Our SaaS Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              End-to-end SaaS development and growth services to help you succeed.
            </p>
          </div>
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover: shadow-xl transition-shadow duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-lg mb-4">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-emerald-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-emerald-600 font-semibold mb-4">{service.price}</div>
                <button className="w-full bg-emerald-600 hover: bg-emerald-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Platforms Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md: text-4xl font-bold text-gray-900 mb-4">
              Platforms We Build
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We create SaaS solutions across multiple platforms to reach your target audience.
            </p>
          </div>
          <div className="grid grid-cols-2 md: grid-cols-3 lg:grid-cols-6 gap-6">
            {platforms.map((platform, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center hover: shadow-lg transition-shadow duration-300">
                <span className="text-gray-700 font-medium">{platform}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Tech Stack Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md: text-4xl font-bold text-gray-900 mb-4">
              Our Technology Stack
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We use proven technologies to build robust, scalable, and maintainable SaaS applications.
            </p>
          </div>
          <div className="grid grid-cols-2 md: grid-cols-4 lg:grid-cols-6 gap-4">
            {techStack.map((tech, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md text-center hover: shadow-lg transition-shadow duration-300">
                <span className="text-gray-700 font-medium text-sm">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Process Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md: text-4xl font-bold text-gray-900 mb-4">
              Our SaaS Development Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A proven methodology for building successful SaaS products.
            </p>
          </div>
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-lg flex items-center justify-center text-white text-xl font-bold mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Discovery & Planning</h3>
              <p className="text-gray-600">We analyze your market, define your MVP, and create a detailed roadmap for your SaaS product.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-lg flex items-center justify-center text-white text-xl font-bold mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Design & Development</h3>
              <p className="text-gray-600">We design the user experience and develop your SaaS application using modern technologies and best practices.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-lg flex items-center justify-center text-white text-xl font-bold mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Testing & Launch</h3>
              <p className="text-gray-600">We thoroughly test your application and help you launch it to market with a solid go-to-market strategy.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-lg flex items-center justify-center text-white text-xl font-bold mb-4">
                4
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Growth & Optimization</h3>
              <p className="text-gray-600">We help you scale your SaaS product, optimize performance, and implement growth strategies.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-lg flex items-center justify-center text-white text-xl font-bold mb-4">
                5
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Maintenance & Support</h3>
              <p className="text-gray-600">We provide ongoing maintenance, updates, and support to ensure your SaaS product continues to thrive.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-lg flex items-center justify-center text-white text-xl font-bold mb-4">
                6
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Scaling & Expansion</h3>
              <p className="text-gray-600">We help you scale your infrastructure and expand your product features as your business grows.</p>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md: text-4xl font-bold text-gray-900 mb-4">
            Ready to Build Your SaaS Product?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let&apos;s turn your SaaS idea into a successful, scalable business.
          </p>
          <div className="flex flex-col sm: flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-emerald-600 hover: bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"
            >
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="/ai-services"
              className="border border-emerald-400 text-emerald-400 hover: bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
            >
              Explore AI Integration
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
export default MicroSaasPage