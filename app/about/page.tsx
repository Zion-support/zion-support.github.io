import ErrorBoundary from '../components/ErrorBoundary';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'About Us - Zion Tech Group',
  description: 'Learn about Zion Tech Group, a leading technology company specializing in AI solutions, cloud infrastructure, and innovative software development services.',
  keywords: 'about us, technology company, AI solutions, cloud infrastructure, software development',
  openGraph: {
    title: 'About Us - Zion Tech Group',
    description: 'Learn about Zion Tech Group, a leading technology company specializing in AI solutions, cloud infrastructure, and innovative software development services.',
    type: 'website',
  },
};
function AboutPage() {
  return (
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
  return (
    <ErrorBoundary>
      <AboutPage {...props} />
    </ErrorBoundary>
  );
}
