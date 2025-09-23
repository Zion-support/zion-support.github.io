export const metadata = {
  title: 'Zion Tech Group - AI & Technology Solutions',
  description:
    'Transform your business with cutting-edge AI, cloud infrastructure, and micro SaaS solutions. Expert consulting and implementation services.',
  keywords: [
    'AI',
    'Technology',
    'Cloud',
    'Cybersecurity',
    'Micro SaaS',
    'Consulting',
  ],
};

import PerformanceMetrics from './components/PerformanceMetrics';
import ROICalculator from './components/ROICalculator';
import {
  ArrowRightIcon,
  SparklesIcon,
  ShieldCheckIcon,
  CloudIcon,
} from '@heroicons/react/24/outline';

export default function HomePage() {
  return (
    <main className="min-h-screen px-6 py-12" role="main">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className='text-4xl md:text-6xl font-bold mb-6 leading-tight'>
            Advanced AI and{' '}
            <span className='bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'>
              Technology Solutions
            </span>
          </h1>
          <p className='text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto'>
            Transform your business with cutting-edge AI, cloud infrastructure,
            cybersecurity solutions, and autonomous systems that drive
            unprecedented growth and efficiency.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className='bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 p-8 rounded-xl'>
            <h2 className='text-2xl font-bold mb-4 text-gray-900 dark:text-white'>
              Performance Metrics
            </h2>
            <PerformanceMetrics />
          </div>
          <div className='bg-gradient-to-br from-purple-50 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 p-8 rounded-xl'>
            <h2 className='text-2xl font-bold mb-4 text-gray-900 dark:text-white'>
              ROI Calculator
            </h2>
            <ROICalculator />
          </div>
        </div>

        {/* Services Section */}
        <section className="text-center" aria-labelledby="services-heading">
          <h2 id="services-heading" className='text-3xl font-bold mb-8 text-gray-900 dark:text-white'>
            Our Services
          </h2>
          <div className='grid md:grid-cols-3 gap-6'>
            <article className='bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105 focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2'>
              <div className='flex items-center mb-4'>
                <SparklesIcon className='h-8 w-8 text-blue-600 mr-3' aria-hidden="true" />
                <h3 className='text-xl font-semibold text-gray-900 dark:text-white'>
                  AI Solutions
                </h3>
              </div>
              <p className='text-gray-600 dark:text-gray-300 mb-4'>
                Custom AI implementations, machine learning models, and
                intelligent automation systems that drive business transformation.
              </p>
              <button className='flex items-center text-blue-600 group-hover:text-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded'>
                <span className='text-sm font-medium'>Learn more</span>
                <ArrowRightIcon className='h-4 w-4 ml-1' aria-hidden="true" />
              </button>
            </article>
            <article className='bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105 focus-within:ring-2 focus-within:ring-green-500 focus-within:ring-offset-2'>
              <div className='flex items-center mb-4'>
                <CloudIcon className='h-8 w-8 text-green-600 mr-3' aria-hidden="true" />
                <h3 className='text-xl font-semibold text-gray-900 dark:text-white'>
                  Cloud Infrastructure
                </h3>
              </div>
              <p className='text-gray-600 dark:text-gray-300 mb-4'>
                Scalable cloud solutions, DevOps automation, and infrastructure
                optimization for modern businesses.
              </p>
              <button className='flex items-center text-green-600 group-hover:text-green-700 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 rounded'>
                <span className='text-sm font-medium'>Learn more</span>
                <ArrowRightIcon className='h-4 w-4 ml-1' aria-hidden="true" />
              </button>
            </article>
            <article className='bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105 focus-within:ring-2 focus-within:ring-purple-500 focus-within:ring-offset-2'>
              <div className='flex items-center mb-4'>
                <ShieldCheckIcon className='h-8 w-8 text-purple-600 mr-3' aria-hidden="true" />
                <h3 className='text-xl font-semibold text-gray-900 dark:text-white'>
                  Cybersecurity
                </h3>
              </div>
              <p className='text-gray-600 dark:text-gray-300 mb-4'>
                Advanced security frameworks, threat detection, and compliance
                solutions to protect your digital assets.
              </p>
              <button className='flex items-center text-purple-600 group-hover:text-purple-700 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 rounded'>
                <span className='text-sm font-medium'>Learn more</span>
                <ArrowRightIcon className='h-4 w-4 ml-1' aria-hidden="true" />
              </button>
            </article>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="mt-16 text-center bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-8 rounded-2xl">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Join hundreds of companies already leveraging our AI and technology solutions 
            to drive unprecedented growth and efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              Get Started Today
            </button>
            <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              Schedule Consultation
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}
