<<<<<<< HEAD
import ErrorBoundary from '../components/ErrorBoundary';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
=======
import React from 'react';
import ErrorBoundary from "../components/ErrorBoundary"
import Navigation from "../components/Navigation"
import Footer from "../components/Footer"
>>>>>>> cursor/fix-errors-and-merge-to-main-ad1a

export const metadata = {
  title: 'About | Zion Tech Group',
  description: 'Professional about services by Zion Tech Group. Advanced AI and technology solutions.',
  keywords: 'about, technology, services, AI, automation',
  openGraph: {
    title: 'About | Zion Tech Group',
    description: 'Professional about services by Zion Tech Group.',
    type: 'website',
  },
};

function AboutPage() {
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              About Zion Tech Group
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Leading the future of technology with innovative AI solutions, 
              cloud infrastructure, and cutting-edge software development.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function Wrapped(props: any) {
=======
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              About
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Professional about services powered by advanced AI and technology.
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-4xl mx-auto">
              Transform your business with our cutting-edge about solutions. 
              We provide comprehensive services to help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors"
              >
                Get Started
              </a>
              <a
                href="/about"
                className="inline-flex items-center px-8 py-3 border border-white text-base font-medium rounded-md text-white bg-transparent hover:bg-white hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-colors"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default function Wrapped(props: { [key: string]: unknown }) {
>>>>>>> cursor/fix-errors-and-merge-to-main-ad1a
  return (
    <ErrorBoundary>
      <AboutPage {...props} />
    </ErrorBoundary>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> cursor/fix-errors-and-merge-to-main-ad1a
