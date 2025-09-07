import React from "react";
import Link from "next/link";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Zion Tech Group — AI, Micro SaaS, and IT Services',
  description: 'Leading provider of AI-powered solutions, micro SaaS platforms, and comprehensive IT services. Transform your business with cutting-edge technology.',
  keywords: 'AI services, micro SaaS, IT services, automation, technology solutions, business transformation',
  openGraph: {
    title: 'Zion Tech Group — AI, Micro SaaS, and IT Services',
    description: 'Leading provider of AI-powered solutions, micro SaaS platforms, and comprehensive IT services.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zion Tech Group — AI, Micro SaaS, and IT Services',
    description: 'Leading provider of AI-powered solutions, micro SaaS platforms, and comprehensive IT services.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://ziontechgroup.com',
  },
};

export default function HomePage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg" role="banner">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Zion Tech Group
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Leading provider of AI-powered solutions, micro SaaS platforms, and comprehensive IT services. 
          Transform your business with cutting-edge technology.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/services" 
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Explore Services
          </Link>
          <Link 
            href="/contact" 
            className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16" role="region" aria-labelledby="services-heading">
        <h2 id="services-heading" className="text-3xl font-bold text-center mb-12">
          Our Services
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">AI Solutions</h3>
            <p className="text-gray-600 mb-4">
              Harness the power of artificial intelligence to automate processes, 
              gain insights, and drive innovation.
            </p>
            <Link href="/services/ai" className="text-blue-600 hover:underline">
              Learn More →
            </Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Micro SaaS</h3>
            <p className="text-gray-600 mb-4">
              Scalable software-as-a-service solutions tailored to your specific 
              business needs and requirements.
            </p>
            <Link href="/services/micro-saas" className="text-blue-600 hover:underline">
              Learn More →
            </Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">IT Services</h3>
            <p className="text-gray-600 mb-4">
              Comprehensive IT support, infrastructure management, and technology 
              consulting services.
            </p>
            <Link href="/services/it" className="text-blue-600 hover:underline">
              Learn More →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-16 rounded-lg text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Let's discuss how our AI, micro SaaS, and IT services can help you achieve your goals.
        </p>
        <Link 
          href="/contact" 
          className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-block"
        >
          Contact Us Today
        </Link>
      </section>
    </div>
  );
}