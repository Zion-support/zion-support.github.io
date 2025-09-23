
 

export const metadata = {
  title: 'Zion Tech Group - AI & Technology Solutions',
  description: 'Transform your business with cutting-edge AI, cloud infrastructure, and micro SaaS solutions. Expert consulting and implementation services.',
  keywords: ['AI', 'Technology', 'Cloud', 'Cybersecurity', 'Micro SaaS', 'Consulting'],
};

import PerformanceMetrics from './components/PerformanceMetrics';
import ROICalculator from './components/ROICalculator';

export default function HomePage() {
  return (
    <main className="min-h-screen px-6 py-12">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Advanced AI and <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Technology Solutions</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Transform your business with cutting-edge AI, cloud infrastructure, cybersecurity solutions, and autonomous systems that drive unprecedented growth and efficiency.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Performance Metrics</h2>
            <PerformanceMetrics />
          </div>
          
          <div className="bg-gradient-to-br from-purple-50 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">ROI Calculator</h2>
            <ROICalculator />
          </div>
        </div>

        {/* Services Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">AI Solutions</h3>
              <p className="text-gray-600 dark:text-gray-300">Custom AI implementations, machine learning models, and intelligent automation systems.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Cloud Infrastructure</h3>
              <p className="text-gray-600 dark:text-gray-300">Scalable cloud solutions, DevOps automation, and infrastructure optimization.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Cybersecurity</h3>
              <p className="text-gray-600 dark:text-gray-300">Advanced security frameworks, threat detection, and compliance solutions.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

