import React from 'react'
import SEOHead from '../components/SEOHead'
const AugmentedRealitySolutionsPage: React.FC = () => {
  return (
    <>
<SEOHead
        title="Augmented Reality Solutions - Zion Tech Group"
        description="Advanced AR solutions for enterprise, retail, education, and healthcare with custom AR applications and immersive experiences."
        keywords="augmented reality, AR solutions, AR development, immersive technology, AR applications, mixed reality"
        canonicalUrl="https://ziontechgroup.com/augmented-reality-solutions"
      />
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Augmented Reality Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Create immersive AR experiences for enterprise, retail, education, and healthcare with our advanced augmented reality solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-slate-800 rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4 text-orange-400">AR Development</h2>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Custom AR applications
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Cross-platform AR solutions
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  AR content creation
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  3D object recognition
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Real-time tracking
                </li>
              </ul>
            </div>
            <div className="bg-slate-800 rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4 text-red-400">AR Applications</h2>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">→</span>
                  Retail and e-commerce
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">→</span>
                  Training and education
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">→</span>
                  Healthcare visualization
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">→</span>
                  Industrial maintenance
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">→</span>
                  Marketing and advertising
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-slate-800 rounded-lg p-8 mb-12">
            <h2 className="text-3xl font-bold mb-6 text-center">AR Technology Stack</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📱</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-orange-400">Mobile AR</h3>
                <p className="text-gray-300">iOS and Android AR applications using ARKit and ARCore.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🥽</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-red-400">AR Glasses</h3>
                <p className="text-gray-300">Enterprise AR solutions for HoloLens and Magic Leap.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌐</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-purple-400">Web AR</h3>
                <p className="text-gray-300">Browser-based AR experiences accessible on any device.</p>
              </div>
            </div>
          </div>
          <div className="text-center">
            <a
              href="/contact?service=augmented-reality-solutions"
              className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-orange-700 hover:to-red-700 transition-all duration-300"
            >
              Create AR Experience
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
export default AugmentedRealitySolutionsPage