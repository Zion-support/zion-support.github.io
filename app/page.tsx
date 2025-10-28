import ErrorBoundary from './components/ErrorBoundary'
import Link from 'next/link'

export const metadata = {
  title: 'Zion Tech Group | Technology Solutions',
  description: 'Professional technology solutions and services by Zion Tech Group',
  keywords: 'technology, solutions, services, AI, DevOps, 5G',
  openGraph: {
    title: 'Zion Tech Group | Technology Solutions',
    description: 'Professional technology solutions and services by Zion Tech Group',
    type: 'website',
  },
};

function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Zion Tech Group
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl">
            Professional technology solutions and services for the modern world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/about" className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
              Learn More
            </Link>
            <Link href="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Services
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">AI Solutions</h3>
              <p className="text-gray-600 mb-4">
                Leverage artificial intelligence to optimize your business processes.
              </p>
              <Link href="/ai-powered-devops" className="text-blue-600 hover:text-blue-800">
                Learn More →
              </Link>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">5G Technology</h3>
              <p className="text-gray-600 mb-4">
                Next-generation 5G solutions for faster, more reliable connectivity.
              </p>
              <Link href="/5g-data-analytics" className="text-blue-600 hover:text-blue-800">
                Learn More →
              </Link>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Micro SaaS</h3>
              <p className="text-gray-600 mb-4">
                Scalable micro SaaS solutions tailored to your business needs.
              </p>
              <Link href="/micro-saas-services" className="text-blue-600 hover:text-blue-800">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function Wrapped(props: any) {
  return (
    <ErrorBoundary>
      <HomePage {...props} />
    </ErrorBoundary>
  );
}

