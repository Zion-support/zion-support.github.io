import React from 'react'
import { ArrowRight } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export const metadata = {
  title: 'Legal Document Manager | Zion Tech Group',
  description: 'Professional legal document management services by Zion Tech Group.',
  keywords: 'legal, document, management, technology, services',
  openGraph: {
    title: 'Legal Document Manager | Zion Tech Group',
    description: 'Professional legal document management services by Zion Tech Group.',
    type: 'website',
  },
};

const PageComponent = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Legal Document Manager
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional legal document management services by Zion Tech Group.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Coming Soon</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              This service is currently under development. Contact us to learn more about our upcoming services.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let&apos;s discuss how we can help you with your technology needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a
              href="/about"
              className="inline-flex items-center px-8 py-3 border-2 border-blue-300 text-blue-100 rounded-lg hover:bg-blue-500 transition-colors font-semibold"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PageComponent;