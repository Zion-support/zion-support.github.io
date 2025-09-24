import PerformanceMetrics from './components/PerformanceMetrics'
import ROICalculator from './components/ROICalculator'

export const metadata = {
  title: 'Zion Tech Group - AI & Technology Solutions',
  description:
    'Transform your business with cutting-edge AI, cloud infrastructure, and micro SaaS solutions. Expert consulting and implementation services.',
  keywords: ['AI', 'Technology', 'Cloud', 'Cybersecurity', 'Micro SaaS', 'Consulting'],
  openGraph: {
    title: 'Zion Tech Group - AI & Technology Solutions',
    description: 'Transform your business with cutting-edge AI, cloud infrastructure, and micro SaaS solutions.',
    type: 'website',
    siteName: 'Zion Tech Group'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zion Tech Group - AI & Technology Solutions',
    description: 'Transform your business with cutting-edge AI, cloud infrastructure, and micro SaaS solutions.'
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
  }
}

export default function HomePage() {
  return (
    <main className="min-h-screen px-6 py-12" role="main">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto" aria-labelledby="hero-heading">
        <div className="text-center mb-16">
          <h1 id="hero-heading" className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Advanced AI and{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Technology Solutions
            </span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Transform your business with cutting-edge AI, cloud infrastructure, cybersecurity solutions, and autonomous systems that
            drive unprecedented growth and efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
              aria-label="Get started with our AI solutions"
            >
              Get Started
            </button>
            <button 
              className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-700"
              aria-label="Learn more about our services"
            >
              Learn More
            </button>
          </div>
        </div>

        {/* Features Grid */}
        <section className="grid md:grid-cols-2 gap-8 mb-16" aria-labelledby="features-heading">
          <h2 id="features-heading" className="sr-only">
            Interactive Features
          </h2>
          <article className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Performance Metrics</h3>
            <PerformanceMetrics />
          </article>
          <article className="bg-gradient-to-br from-purple-50 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">ROI Calculator</h3>
            <ROICalculator />
          </article>
        </section>

        {/* Services Section */}
        <section className="text-center" aria-labelledby="services-heading">
          <h2 id="services-heading" className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
            Our Services
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <article className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 focus-within:ring-4 focus-within:ring-blue-300 dark:focus-within:ring-blue-800">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">AI Solutions</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Custom AI implementations, machine learning models, and intelligent automation systems.
              </p>
              <button className="text-blue-600 dark:text-blue-400 font-medium hover:underline focus:outline-none focus:underline">
                Learn More →
              </button>
            </article>
            <article className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 focus-within:ring-4 focus-within:ring-blue-300 dark:focus-within:ring-blue-800">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Cloud Infrastructure</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Scalable cloud solutions, DevOps automation, and infrastructure optimization.
              </p>
              <button className="text-blue-600 dark:text-blue-400 font-medium hover:underline focus:outline-none focus:underline">
                Learn More →
              </button>
            </article>
            <article className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 focus-within:ring-4 focus-within:ring-blue-300 dark:focus-within:ring-blue-800">
              <div className="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Cybersecurity</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Advanced security frameworks, threat detection, and compliance solutions.
              </p>
              <button className="text-blue-600 dark:text-blue-400 font-medium hover:underline focus:outline-none focus:underline">
                Learn More →
              </button>
            </article>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="mt-16 text-center" aria-labelledby="cta-heading">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white">
            <h2 id="cta-heading" className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join thousands of companies that have revolutionized their operations with our AI and technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50"
                aria-label="Schedule a consultation"
              >
                Schedule Consultation
              </button>
              <button 
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50"
                aria-label="View our case studies"
              >
                View Case Studies
              </button>
            </div>
          </div>
        </section>
      </section>
    </main>
  )
}