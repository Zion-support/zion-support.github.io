import { ErrorBoundary } from '../components/ErrorBoundary';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'About Us - Zion Tech Group',
  description: 'Learn about Zion Tech Group and our mission to provide innovative technology solutions.',
  keywords: 'about, company, technology, solutions, innovation',
  openGraph: {
    title: 'About Us - Zion Tech Group',
    description: 'Learn about Zion Tech Group and our mission to provide innovative technology solutions.',
    type: 'website',
  },
};

export default function About() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              About Us
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Learn about Zion Tech Group and our mission to provide innovative technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors">
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Our Story</h2>
              <p className="text-xl text-gray-300">Building the future of technology</p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-white mb-6">Our Mission</h3>
                <p className="text-gray-300 mb-6">
                  At Zion Tech Group, we are dedicated to providing innovative technology solutions that help businesses thrive in the digital age. Our team of experts works tirelessly to deliver cutting-edge solutions that drive growth and success.
                </p>
                <p className="text-gray-300">
                  We believe in the power of technology to transform businesses and create opportunities for growth. Our commitment to excellence and innovation drives everything we do.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <h4 className="text-2xl font-bold text-white mb-4">Why Choose Us</h4>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <ArrowRight className="h-6 w-6 text-blue-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Innovative solutions</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-6 w-6 text-blue-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Expert team</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-6 w-6 text-blue-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Proven track record</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </ErrorBoundary>
  );
}
