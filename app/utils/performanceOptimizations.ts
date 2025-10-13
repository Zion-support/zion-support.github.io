'use client';

import React from 'react';
import { Metadata } from 'next';
import { 
  ArrowRightIcon, 
  CheckIcon, 
  StarIcon,
  ShieldCheckIcon,
  CpuChipIcon,
  CloudIcon,
  ChartBarIcon,
  CogIcon,
  GlobeAltIcon,
  UserGroupIcon,
  LightBulbIcon,
  RocketLaunchIcon,
  SparklesIcon,
  AcademicCapIcon,
  BeakerIcon,
  BuildingOfficeIcon,
  CurrencyDollarIcon,
  DocumentTextIcon,
  EyeIcon,
  FingerPrintIcon,
  HeartIcon,
  HomeIcon,
  IdentificationIcon,
  KeyIcon,
  LockClosedIcon,
  MagnifyingGlassIcon,
  PaintBrushIcon,
  PhoneIcon,
  PresentationChartLineIcon,
  PuzzlePieceIcon,
  ServerIcon,
  ShoppingCartIcon,
  TagIcon,
  TruckIcon,
  WrenchScrewdriverIcon,
  XMarkIcon,
  ChevronRightIcon,
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon as XMarkIconSolid
} from '@heroicons/react/24/outline';
import { 
  CheckIcon as CheckIconSolid,
  StarIcon as StarIconSolid,
  ArrowRightIcon as ArrowRightIconSolid
} from '@heroicons/react/24/solid';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';


export const metadata: Metadata = {
  title: 'PerformanceOptimizations | Zion Tech Group',
  description: 'Professional PerformanceOptimizations solutions powered by AI and cutting-edge technology.',
  keywords: ['AI', 'Technology', 'Solutions', 'performanceOptimizations'],
  openGraph: {
    title: 'PerformanceOptimizations | Zion Tech Group',
    description: 'Professional PerformanceOptimizations solutions powered by AI and cutting-edge technology.',
    type: 'website',
  },
};

export default function performanceOptimizationsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              PerformanceOptimizations
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Professional PerformanceOptimizations solutions powered by AI and cutting-edge technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                Get Started
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our PerformanceOptimizations?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide cutting-edge solutions that drive real business results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <CpuChipIcon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Advanced Technology
              </h3>
              <p className="text-gray-600">
                Leveraging the latest AI and machine learning technologies.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <ShieldCheckIcon className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Secure & Reliable
              </h3>
              <p className="text-gray-600">
                Enterprise-grade security and 99.9% uptime guarantee.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <RocketLaunchIcon className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Fast Implementation
              </h3>
              <p className="text-gray-600">
                Quick setup and deployment with minimal disruption.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Contact us today to learn more about our PerformanceOptimizations solutions.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 transition-colors"
          >
            Get Started Now
            <ArrowRightIcon className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
