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
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Advanced AI and <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Technology Solutions</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Transform your business with cutting-edge AI, cloud infrastructure, cybersecurity solutions, and autonomous systems that drive unprecedented growth and efficiency.
          </p>
        </div>
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
      </div>
    </main>
  );
}

