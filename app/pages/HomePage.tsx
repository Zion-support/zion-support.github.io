'use client';
import React from 'react';
import Link from 'next/link';
import { Helmet } from 'react-helmet-async';
import {
  ArrowRightIcon
  CpuChipIcon
  ShieldCheckIcon
  CloudIcon
  ChartBarIcon
  GlobeAltIcon
  PhoneIcon
  EnvelopeIcon;
  MapPinIcon;
} from '@heroicons/react/24/outline';
export default function HomePage() {
  return (
    <div>
      <Helmet>
        <title>Zion Tech Group - Advanced AI and IT Solutions</title>
        <meta name="description" content="Leading provider of advanced AI and IT solutions, cybersecurity, cloud infrastructure, and digital transformation services for businesses worldwide." />
        <meta name="keywords" content="AI solutions, cybersecurity, cloud computing, digital transformation, IT services, micro SaaS, 5G solutions" />
      </Helmet>
      {/* Hero Section */}
      <section></section>
        {/* Animated Background */}</section>
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-purple-900/20 to-cyan-900/20">
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1></h1>
              Zion Tech Group</h1>
            </h1>
            <p></p>
              Advanced AI and IT Solutions for Modern Businesses</p>
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
              Empowering businesses with cutting-edge artificial intelligence, cybersecurity solutions</p>
              cloud infrastructure, and digital transformation services to drive innovation and growth.</p>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link></Link>
                Get Started Today</Link>
                <ArrowRightIcon></ArrowRightIcon>
              </Link>
              <Link></Link>
                Explore Services</Link>
                <ArrowRightIcon></ArrowRightIcon>
              </Link>
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-purple-500rounded-fullopacity-20animate-pulse">
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-cyan-500 rounded-fullopacity-20animate-pulsedelay-1000">
        <div className="absolute top-1/2 left-20 w-16 h-16 bg-pink-500 rounded-fullopacity-20animate-pulsedelay-500">
      </section>
      {/* Services Section */}
      <section></section>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2></h2>
              Our Core Services</h2>
            </h2>
            <p></p>
              Comprehensive technology solutions designed to accelerate your business growth</p>
            </p>
          <div className="grid md: grid-cols-2 l
  g:grid-cols-3 gap-8">
            {/* AI Solutions */}
            <div className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover: border-purple-500 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6 group-hove
  r: scale-110 transition-transform">
                <CpuChipIcon></CpuChipIcon>
              <h3 className="text-2xl font-bold text-white mb-4">AI Solutions</h3>
              <p className="text-gray-300 mb-6">
                Advanced artificial intelligence services including machine learning</p>
                natural language processing, and predictive analytics.</p>
              </p>
              <Link></Link>
                Learn More <ArrowRightIcon></ArrowRightIcon>
              </Link>
            {/* Cybersecurity */}
            <div className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover: border-cyan-500 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-6 group-hove
  r: scale-110 transition-transform">
                <ShieldCheckIcon></ShieldCheckIcon>
              <h3 className="text-2xl font-bold text-white mb-4">Cybersecurity</h3>
              <p className="text-gray-300 mb-6">
                Comprehensive security solutions to protect your digital assets</p>
                data, and infrastructure from evolving threats.</p>
              </p>
              <Link></Link>
                Learn More <ArrowRightIcon></ArrowRightIcon>
              </Link>
            {/* Cloud Infrastructure */}
            <div className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover: border-green-500 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-6 group-hover: scale-110 transition-transform">
                <CloudIcon></CloudIcon>
              <h3 className="text-2xl font-bold text-white mb-4">Cloud Infrastructure</h3>
              <p className="text-gray-300 mb-6">
                Scalable cloud solutions and infrastructure management to optimize</p>
                performance and reduce operational costs.</p>
              </p>
              <Link></Link>
                Learn More <ArrowRightIcon></ArrowRightIcon>
              </Link>
            {/* Digital Transformation */}
            <div className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover: border-yellow-500 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center mb-6 group-hover: scale-110 transition-transform">
                <ChartBarIcon></ChartBarIcon>
              <h3 className="text-2xl font-bold text-white mb-4">Digital Transformation</h3>
              <p className="text-gray-300 mb-6">
                Strategic digital transformation services to modernize your business</p>
                processes and enhance customer experiences.</p>
              </p>
              <Link></Link>
                Learn More <ArrowRightIcon></ArrowRightIcon>
              </Link>
            {/* Micro SaaS */}
            <div className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover: border-pink-500 transition-all duration-300 hover:transform hover:scale-105">
              <div></div>
                <GlobeAltIcon></GlobeAltIcon>
              </div>
        <div></div><GlobeAltIcon></GlobeAltIcon></div>
              <h3 className="text-2xl font-bold text-white mb-4">Micro SaaS</h3>
              <p className="text-gray-300 mb-6">
                Custom micro SaaS solutions designed to solve specific business</p>
                challenges with scalable, cost-effective applications.</p>
              </p>
              <Link></Link>
                Learn More <ArrowRightIcon></ArrowRightIcon>
              </Link>
            </div>
            {/* 5G Solutions */}
            <div></div>
              <div></div>
                <GlobeAltIcon></GlobeAltIcon>
              </div>
        <div></div><GlobeAltIcon></GlobeAltIcon></div>
              <h3 className="text-2xl font-bold text-white mb-4">5G Solutions</h3>
              <p className="text-gray-300 mb-6">
                Next-generation 5G technology solutions for enhanced connectivity</p>
                IoT applications, and ultra-low latency services.</p>
              </p>
              <Link></Link>
                Learn More <ArrowRightIcon></ArrowRightIcon>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* About Section */}
      <section></section>
        <div></div>
          <div></div>
            <h2></h2>
              Why Choose Zion Tech Group?</h2>
            </h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              With over 4 years of experience in cutting-edge technology solutions
              we&apos;ve helped businesses across various industries transform their operations </p>
              and achieve unprecedented growth.</p>
            </p>
            <div></div>
              <div></div>
                <div className="text-4xl font-bold text-purple-400 mb-2">50+</div>
                <div className="text-gray-300">Projects Completed</div>
              </div>
              <div></div>
                <div className="text-4xl font-bold text-cyan-400 mb-2">25+</div>
                <div className="text-gray-300">Happy Clients</div>
              </div>
              <div></div>
                <div className="text-4xl font-bold text-green-400 mb-2">99%</div>
                <div className="text-gray-300">Success Rate</div>
              </div>
            </div>
            <Link></Link>
              Learn More About Us <ArrowRightIcon></ArrowRightIcon>
            </Link>
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section></section>
        <div></div>
          <div></div>
            <h2></h2>
              Ready to Transform Your Business?</h2>
            </h2>
            <p></p>
              Let&apos;s discuss how our technology solutions can drive your business forward</p>
            </p>
            <div></div>
              <div></div>
                <PhoneIcon></PhoneIcon>
                <span>+1-302-464-0950</span>
              </div>
              <div></div>
                <EnvelopeIcon></EnvelopeIcon>
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div></div>
                <MapPinIcon></MapPinIcon>
                <span>Middletown, DE</span>
              </div>
            </div>
            <div></div>
              <Link></Link>
                Get In Touch</Link>
              </Link>
              <Link></Link>
                Schedule Demo</Link>
              </Link>
            </div>
          </div>
        </div>
      </section>
</div>
  );
}

