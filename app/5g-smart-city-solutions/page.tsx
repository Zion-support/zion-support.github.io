<<<<<<< HEAD
import React from "react";
import Head from "next/head";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function FiveGSmartCitySolutionsPage() {
  return (
    <>
      <Head>
        <title>5G Smart City Solutions - Zion Tech Group</title>
        <meta name="description" content="5G smart city solutions for modern urban development." />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-white mb-6">5G Smart City Solutions</h1>
          <p className="text-lg text-gray-300 mb-8">Professional 5G smart city solutions by Zion Tech Group. Transform your city with our expert solutions.</p>
          
          <Link href="/contact" className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Contact Us
            <ArrowRight className="ml-2 h-4 w-4" />
=======
import React from 'react';
import Link from 'next/link';
import { Wifi, ArrowRight, CheckCircle } from 'lucide-react';

export default function FiveGSmartCitySolutionsPage() {
  const features = [
    {
      icon: <Wifi className="w-8 h-8" />,
      title: 'Feature 1',
      description: 'Description of the first key feature.',
      benefits: ['Benefit 1', 'Benefit 2', 'Benefit 3', 'Benefit 4']
    },
    {
      icon: <Wifi className="w-8 h-8" />,
      title: 'Feature 2',
      description: 'Description of the second key feature.',
      benefits: ['Benefit 1', 'Benefit 2', 'Benefit 3', 'Benefit 4']
    },
    {
      icon: <Wifi className="w-8 h-8" />,
      title: 'Feature 3',
      description: 'Description of the third key feature.',
      benefits: ['Benefit 1', 'Benefit 2', 'Benefit 3', 'Benefit 4']
    },
    {
      icon: <Wifi className="w-8 h-8" />,
      title: 'Feature 4',
      description: 'Description of the fourth key feature.',
      benefits: ['Benefit 1', 'Benefit 2', 'Benefit 3', 'Benefit 4']
    }
  ];

  const stats = [
    { number: '95%', label: 'Success Rate' },
    { number: '80%', label: 'Efficiency Gain' },
    { number: '1000+', label: 'Projects Completed' },
    { number: '99.9%', label: 'Uptime Guarantee' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            5G Smart City Solutions
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Next-generation connectivity for smart cities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/demo"
              className="border border-gray-300 text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              View Demo
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="text-blue-400 mr-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-8">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-gray-300 mb-6">Contact us today to learn more about our solutions.</p>
          <Link
            href="/contact"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
          >
            Get Started Now
            <ArrowRight className="ml-2 w-5 h-5" />
>>>>>>> origin/main
          </Link>
        </div>
      </div>
    </div>
  );
}