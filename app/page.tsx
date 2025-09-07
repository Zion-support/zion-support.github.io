'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  CpuChipIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  UserGroupIcon,
  ArrowRightIcon,
  StarIcon,
  RocketLaunchIcon,
  PlayIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

const stats = [
  { label: 'Companies Served', value: '500+' },
  { label: 'Projects Completed', value: '1,200+' },
  { label: 'Years of Experience', value: '10+' },
  { label: 'Countries', value: '25+' },
];

const features = [
  {
    name: 'AI-Powered Solutions',
    description: 'Cutting-edge artificial intelligence to automate and optimize your business processes.',
    icon: CpuChipIcon,
  },
  {
    name: 'Micro SaaS Platforms',
    description: 'Scalable, focused software solutions that grow with your business needs.',
    icon: RocketLaunchIcon,
  },
  {
    name: 'Enterprise IT Services',
    description: 'Comprehensive IT infrastructure and support for modern businesses.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Data Analytics',
    description: 'Transform your data into actionable insights with our analytics solutions.',
    icon: ChartBarIcon,
  },
];

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CTO, TechCorp',
    content: 'Zion Tech Group transformed our entire IT infrastructure. Their AI solutions increased our efficiency by 300%.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Founder, StartupXYZ',
    content: 'The micro SaaS platform they built for us was exactly what we needed. It scaled perfectly with our growth.',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    role: 'VP Engineering, DataFlow',
    content: 'Outstanding service and technical expertise. They delivered our project ahead of schedule.',
    rating: 5,
  },
];

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className={`sm:text-center lg:text-left transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">AI, Micro SaaS, and</span>{' '}
                  <span className="block text-blue-400 xl:inline animate-pulse">IT Services</span>
                </h1>
                <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Enterprise-grade solutions that drive real business results. We help companies build, scale, and optimize their technology infrastructure.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <Link
                      href="/services"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
                    >
                      Explore Services
                      <ArrowRightIcon className="ml-2 h-5 w-5" />
                    </Link>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <Link
                      href="/contact"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-400 bg-transparent hover:bg-blue-50 hover:text-blue-600 md:py-4 md:text-lg md:px-10"
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-slate-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Trusted by Industry Leaders</h2>
            <p className="text-gray-300">Numbers that speak for themselves</p>
          </div>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="text-4xl font-bold text-blue-400 mb-2 group-hover:text-blue-300 transition-colors">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-300 group-hover:text-white transition-colors">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Why Choose Zion Tech Group?
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              We deliver cutting-edge technology solutions that drive business growth.
            </p>
          </div>

          <div className="mt-12">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((feature, index) => (
                <div key={feature.name} className="pt-6 group">
                  <div className="flow-root bg-slate-800 rounded-lg px-6 pb-8 hover:bg-slate-700 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20">
                    <div className="-mt-6">
                      <div>
                        <span className="inline-flex items-center justify-center p-3 bg-blue-500 rounded-md shadow-lg group-hover:bg-blue-400 group-hover:scale-110 transition-all duration-300">
                          <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                        </span>
                      </div>
                      <h3 className="mt-8 text-lg font-medium text-white tracking-tight group-hover:text-blue-300 transition-colors">
                        {feature.name}
                      </h3>
                      <p className="mt-5 text-base text-gray-300 group-hover:text-gray-200 transition-colors">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-slate-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              What Our Clients Say
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              Don't just take our word for it. Here's what our clients have to say.
            </p>
          </div>

          <div className="mt-12">
            <div className="relative">
              <div className="bg-slate-700 rounded-lg p-8 max-w-4xl mx-auto">
                <div className="flex items-center justify-center mb-6">
                  {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                    <StarIcon key={i} className="h-6 w-6 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 text-lg text-center mb-6 italic">
                  "{testimonials[activeTestimonial].content}"
                </p>
                <div className="text-center">
                  <div className="text-white font-semibold text-xl">{testimonials[activeTestimonial].name}</div>
                  <div className="text-gray-400">{testimonials[activeTestimonial].role}</div>
                </div>
              </div>
              
              {/* Testimonial indicators */}
              <div className="flex justify-center mt-6 space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === activeTestimonial ? 'bg-blue-500' : 'bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Demo Section */}
      <div className="py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">See Our Solutions in Action</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Watch how our AI-powered solutions can transform your business operations and drive real results.
            </p>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-slate-800 rounded-lg p-8 text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 hover:bg-blue-500 transition-colors cursor-pointer">
                <PlayIcon className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Product Demo</h3>
              <p className="text-gray-300 mb-6">
                Experience the power of our AI solutions with this interactive demonstration.
              </p>
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to get started?</span>
            <span className="block text-blue-200">Let's build something amazing together.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
              >
                Get Started
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}