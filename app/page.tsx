import React from 'react';
<<<<<<< HEAD
=======
<<<<<<< HEAD
import Link from 'next/link';
import { Metadata } from 'next';
import ServicesGrid from './components/ServicesGrid';
import HeroSection from './components/HeroSection';

export const metadata: Metadata = {
  title: 'Zion Tech Group - Enterprise AI & IT Solutions | Micro SaaS Development',
  description: 'Leading provider of micro SaaS products, AI services, and IT solutions. 67+ innovative services including cloud optimization, AI automation, quantum computing, and enterprise technology solutions.',
  keywords: 'micro SaaS, AI services, IT solutions, cloud computing, automation, machine learning, DevOps, cybersecurity, blockchain, quantum computing, enterprise solutions',
  openGraph: {
    title: 'Zion Tech Group - Enterprise AI & IT Solutions',
    description: 'Leading provider of micro SaaS products, AI services, and IT solutions.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Zion Tech Group',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zion Tech Group - Enterprise AI & IT Solutions',
    description: 'Leading provider of enterprise-grade AI solutions, micro SaaS development, and IT services.',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <HeroSection />

        {/* Stats Section */}
        <div className="py-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { number: "67+", label: "Services" },
                { number: "500+", label: "Clients" },
                { number: "99.9%", label: "Uptime" },
                { number: "24/7", label: "Support" }
              ].map((stat, index) => (
                <div key={index} className="space-y-2">
                  <div className="text-4xl md:text-5xl font-bold text-blue-400">
                    {stat.number}
                  </div>
                  <div className="text-slate-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <ServicesGrid />

        {/* CTA Section */}
        <div className="py-20 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-slate-400 mb-12 max-w-3xl mx-auto">
            Get in touch with our experts to discuss your project requirements and discover
            how our innovative solutions can drive your business forward.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/contact" 
              className="group px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2"
            >
              Get Started Today
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <a 
              href="tel:+13024640950" 
              className="px-8 py-4 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Us Now
            </a>
          </div>
          <div className="mt-6 text-sm text-slate-400">
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
          </div>
        </div>
      </div>
    </main>
=======
import { Metadata } from 'next';
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
import Link from 'next/link';
import {
  LightBulbIcon,
  CpuChipIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  UserGroupIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  StarIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/outline';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Zion Tech Group - Enterprise AI & IT Solutions | Micro SaaS Development',
  description: 'Leading provider of micro SaaS products, AI services, and IT solutions. 67+ innovative services including cloud optimization, AI automation, quantum computing, and enterprise technology solutions.',
  keywords: 'micro SaaS, AI services, IT solutions, cloud computing, automation, machine learning, DevOps, cybersecurity, blockchain, quantum computing, enterprise solutions',
  openGraph: {
    title: 'Zion Tech Group - Enterprise AI & IT Solutions',
    description: 'Leading provider of micro SaaS products, AI services, and IT solutions.',
    type: 'website',
    url: 'https://ziontechgroup.com',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Zion Tech Group - Enterprise AI & IT Solutions'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zion Tech Group - Enterprise AI & IT Solutions',
    description: 'Leading provider of micro SaaS products, AI services, and IT solutions.',
    images: ['/og-image.jpg']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  }
};

const features = [
  {
    name: 'AI-Powered Solutions',
    description: 'Advanced artificial intelligence services for automation, analytics, and decision-making.',
    icon: CpuChipIcon,
    href: '/services/ai-services'
  },
  {
    name: 'Micro SaaS Development',
    description: 'Custom micro SaaS applications tailored to your business needs.',
    icon: RocketLaunchIcon,
    href: '/services/micro-saas'
  },
  {
    name: 'Cloud Infrastructure',
    description: 'Scalable cloud solutions for modern businesses.',
    icon: GlobeAltIcon,
    href: '/services/cloud-solutions'
  },
  {
    name: 'Cybersecurity',
    description: 'Comprehensive security solutions to protect your digital assets.',
    icon: ShieldCheckIcon,
    href: '/services/cybersecurity'
  },
  {
    name: 'Data Analytics',
    description: 'Transform your data into actionable insights.',
    icon: ChartBarIcon,
    href: '/services/data-analytics'
  },
  {
    name: 'Enterprise Support',
    description: '24/7 support and maintenance for enterprise solutions.',
    icon: UserGroupIcon,
    href: '/services/enterprise-support'
  }
];

const stats = [
  { name: 'Active Projects', value: '67+' },
  { name: 'Happy Clients', value: '500+' },
  { name: 'Years Experience', value: '10+' },
  { name: 'Team Members', value: '50+' }
];

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CTO, TechCorp',
    content: 'Zion Tech Group transformed our infrastructure with their AI solutions. Incredible results!',
    avatar: '/testimonials/sarah.jpg'
  },
  {
    name: 'Michael Chen',
    role: 'CEO, StartupXYZ',
    content: 'Their micro SaaS development expertise helped us scale from 0 to 100k users in 6 months.',
    avatar: '/testimonials/michael.jpg'
  },
  {
    name: 'Emily Rodriguez',
    role: 'VP Engineering, DataFlow',
    content: 'Outstanding cybersecurity implementation. Our systems have never been more secure.',
    avatar: '/testimonials/emily.jpg'
  }
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Enterprise AI & IT
              <span className="text-blue-600 block">Solutions</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Leading provider of micro SaaS products, AI services, and IT solutions. 
              Transform your business with our 67+ innovative services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services"
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                Explore Services
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.name} className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive technology solutions designed to accelerate your business growth
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <Link
                key={feature.name}
                href={feature.href}
                className="group bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <feature.icon className="h-8 w-8 text-blue-600 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600">
                    {feature.name}
                  </h3>
                </div>
                <p className="text-gray-600">{feature.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">
              Trusted by leading companies worldwide
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-600 text-sm">{testimonial.role}</div>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.content}"</p>
                <div className="flex mt-4">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of companies that trust Zion Tech Group for their technology needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 transition-colors"
            >
              Start Your Project
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center px-8 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-blue-700 transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
>>>>>>> main
  );
}