<<<<<<< HEAD
import React from 'react';
import ErrorBoundary from '../components/ErrorBoundary';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
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

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              To empower businesses with cutting-edge technology solutions that drive growth, 
              efficiency, and innovation in the digital age.
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              About Zion Tech Group
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pioneering the future of technology with cutting-edge AI solutions, 
              cloud infrastructure, and innovative software development services.
            </p>
          </div>
        </div>
      </section>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          </Link>
        </div>
      </section>
    </div>
  );
}

=======
import React from "react";
import { ErrorBoundary } from '../components/ErrorBoundary';

export const metadata = {
  title: "About Us | Zion Tech Group",
  description: "Learn about Zion Tech Group - Leading provider of AI and IT solutions",
  keywords: "about, company, AI solutions, IT services, technology",
  openGraph: {
    title: "About Us | Zion Tech Group",
    description: "Learn about Zion Tech Group - Leading provider of AI and IT solutions",
    type: "website",
  },
};

export default function About() {
>>>>>>> b61118d6144fdc99f32acbc26a83c9d4d1af6611
  return (
    <ErrorBoundary>
      <div>
        <h1>About Zion Tech Group</h1>
        <p>Leading provider of AI and IT solutions</p>
      </div>
    </ErrorBoundary>
  );
}
