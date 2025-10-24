import React from 'react'
import { ArrowRight, Brain, CheckCircle, Shield, AlertTriangle, Home, Search, RefreshCw } from 'lucide-react'

const NotFoundPage: React.FC = () => {
  const features = [
    {
      icon: AlertTriangle,
      title: '404 Error Handling',
      description: 'Advanced 404 error handling for better user experience and navigation.',
      benefits: ['User-friendly error pages', 'Navigation assistance', 'Search suggestions', 'Error tracking']
    },
    {
      icon: Home,
      title: 'Navigation Recovery',
      description: 'Intelligent navigation recovery to help users find what they&apos;re looking for.',
      benefits: ['Smart redirects', 'Related content', 'Search functionality', 'Breadcrumb navigation']
    },
    {
      icon: Search,
      title: 'Search Integration',
      description: 'Integrated search functionality to help users find relevant content.',
      benefits: ['Site search', 'Content suggestions', 'Search analytics', 'Auto-complete']
    },
    {
      icon: RefreshCw,
      title: 'Error Recovery',
      description: 'Automatic error recovery mechanisms to restore user experience.',
      benefits: ['Auto-refresh', 'Error reporting', 'Fallback content', 'User assistance']
    }
  ]

  const benefits = [
    'Improve user experience with better error handling',
    'Reduce bounce rate from 404 errors',
    'Enhance navigation and content discovery',
    'Provide helpful error recovery options',
    'Maintain user engagement during errors'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Page Not Found
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center">
              Go Home
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">What Can We Help You Find?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Here are some helpful options to get you back on track
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <feature.icon className="h-12 w-12 text-emerald-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="h-4 w-4 text-emerald-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Error Handling</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the benefits of comprehensive error handling features
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-emerald-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Need Help Finding Something?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Our support team is here to help you navigate our services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
              Contact Support
            </button>
            <button className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
              Browse Services
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default NotFoundPage