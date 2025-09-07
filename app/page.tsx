import React from 'react';
import Link from 'next/link';
import {
  CpuChipIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  UserGroupIcon,
  ArrowRightIcon,
  StarIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/outline';

const stats = [
  { label: 'Companies Served', value: '500+' },
  { label: 'Projects Completed', value: '1,200+' },
  { label: 'Years of Experience', value: '10+' },
  { label: 'Countries', value: '25+' },
];

const features = [
  {
    name: 'AI Solutions',
    description: 'Transform your business with cutting-edge artificial intelligence solutions including machine learning, NLP, and computer vision.',
    href: '/services/ai-services',
    icon: CpuChipIcon,
    color: 'blue',
  },
  {
    name: 'Micro SaaS Development',
    description: 'Build and launch your next micro SaaS product with our full-stack development expertise and rapid deployment capabilities.',
    href: '/services/micro-saas',
    icon: RocketLaunchIcon,
    color: 'green',
  },
  {
    name: 'Enterprise IT',
    description: 'Comprehensive IT services including cloud infrastructure, cybersecurity, and digital transformation solutions.',
    href: '/services/it-services',
    icon: ShieldCheckIcon,
    color: 'purple',
  },
];

const testimonials = [
  {
    content: 'Zion Tech Group transformed our business with their AI solutions. The results exceeded our expectations.',
    author: 'Sarah Johnson',
    role: 'CEO, TechCorp',
    rating: 5,
  },
  {
    content: 'Outstanding micro SaaS development. They delivered exactly what we needed, on time and on budget.',
    author: 'Michael Chen',
    role: 'Founder, StartupXYZ',
    rating: 5,
  },
  {
    content: 'Professional IT services that kept our infrastructure running smoothly during rapid growth.',
    author: 'Emily Rodriguez',
    role: 'CTO, GrowthCo',
    rating: 5,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="mb-8">
              <span className="inline-block px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-full mb-4">
                Trusted by 500+ Companies Worldwide
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Build and scale with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                AI
              </span>,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
                Micro SaaS
              </span>{' '}
              and{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Enterprise IT
              </span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              We help businesses transform with cutting-edge technology solutions. From AI-powered applications to enterprise-grade infrastructure, we deliver results that drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Explore Our Services
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive technology solutions to help your business thrive in the digital age.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className={`w-16 h-16 bg-${feature.color}-100 rounded-lg flex items-center justify-center mb-6`}>
                  <feature.icon className={`w-8 h-8 text-${feature.color}-600`} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.name}</h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <Link
                  href={feature.href}
                  className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800"
                >
                  Learn More
                  <ArrowRightIcon className="w-5 h-5 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don&apos;t just take our word for it. Here&apos;s what our clients have to say about working with us.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">&ldquo;{testimonial.content}&rdquo;</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-gray-500 text-sm">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join hundreds of companies already using our AI-powered solutions to drive innovation and growth.
            Let&apos;s build something amazing together.
          </p>
          <Link
            href="/contact"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
}