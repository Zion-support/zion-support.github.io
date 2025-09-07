<<<<<<< HEAD
<<<<<<< HEAD
import React, { Suspense } from 'react';
=======
import React from 'react';
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
=======
import React from 'react';
<<<<<<< HEAD
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
import Link from 'next/link';
import { Metadata } from 'next';
import ServicesGrid from './components/ServicesGrid';
import HeroSection from './components/HeroSection';

export const metadata: Metadata = {
  title: 'Zion Tech Group - Leading AI and Technology Solutions',
  description: 'Leading the future of AI, autonomous systems, and innovative technology solutions. We empower businesses with cutting-edge technology to drive growth and transformation.',
  keywords: ['AI', 'artificial intelligence', 'blockchain', 'technology', 'innovation', 'automation'],
  openGraph: {
    title: 'Zion Tech Group - Leading AI and Technology Solutions',
    description: 'Leading the future of AI, autonomous systems, and innovative technology solutions.',
    type: 'website',
  },
};

<<<<<<< HEAD
<<<<<<< HEAD
// Lazy load components for better performance
const ServicesGrid = React.lazy(() => import('./components/ServicesGrid'));
const HeroSection = React.lazy(() => import('./components/HeroSection'));

=======
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <HeroSection />

        {/* Services Grid */}
        <ServicesGrid />

        {/* Research Section */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Research & Innovation</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Stay ahead with our cutting-edge research in AI, quantum computing, and emerging technologies.
          </p>
          <Link 
            href="/research" 
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300"
          >
            Explore Research
          </Link>
        </div>
      </div>
    </main>
=======
<<<<<<< HEAD
=======
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Zion Tech Group - Enterprise AI & IT Solutions | Micro SaaS Development',
  description: 'Leading provider of enterprise-grade AI solutions, micro SaaS development, and IT services. 500+ services including AI automation, blockchain solutions, and cloud infrastructure.',
  keywords: 'AI solutions, micro SaaS, IT services, enterprise software, blockchain, cloud computing, automation, machine learning, software development',
  authors: [{ name: 'Zion Tech Group' }],
  openGraph: {
    title: 'Zion Tech Group - Enterprise AI & IT Solutions',
    description: 'Leading provider of enterprise-grade AI solutions, micro SaaS development, and IT services.',
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
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

interface CardProps {
  title: string;
  href: string;
  description: string;
  bullets?: string[];
  icon?: string;
  pricing?: string;
}

function ServiceCard({
  title,
  href,
  description,
  bullets = [],
  icon,
  pricing,
}: CardProps) {
  return (
    <Link
      href={href}
      className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      aria-label={`Learn more about ${title} services`}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          {icon && <span className="text-2xl mr-3" aria-hidden="true">{icon}</span>}
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        </div>
        {pricing && (
          <span className="text-sm font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">
            {pricing}
          </span>
        )}
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      {bullets && (
        <ul className="space-y-2 mb-6">
          {bullets.map((bullet, index) => (
            <li key={index} className="flex items-center text-sm text-gray-600">
              <span className="text-green-500 mr-2">✓</span>
              {bullet}
            </li>
          ))}
        </ul>
      )}
      <div className="text-blue-600 font-medium hover:text-blue-700 transition-colors">
        Learn more →
      </div>
    </Link>
  );
}

>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Zion Tech Group
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Leading AI and Technology Solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/about" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200"
            >
              Learn More
            </Link>
            <Link 
              href="/contact" 
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold py-3 px-6 rounded-lg transition-colors duration-200"
            >
              Get in Touch
            </Link>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors duration-200">
            <h3 className="text-xl font-bold text-white mb-4">AI Solutions</h3>
            <p className="text-gray-300">
              Advanced AI solutions for business automation and intelligence.
            </p>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors duration-200">
            <h3 className="text-xl font-bold text-white mb-4">Web Development</h3>
            <p className="text-gray-300">
              Professional web development services for modern applications.
            </p>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors duration-200">
            <h3 className="text-xl font-bold text-white mb-4">Cloud Services</h3>
            <p className="text-gray-300">
              Scalable cloud services for business growth and efficiency.
            </p>
          </div>
        </div>
      </div>
    </div>
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
=======
>>>>>>> main
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
  );
}