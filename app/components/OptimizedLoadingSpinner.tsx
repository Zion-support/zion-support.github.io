import React from 'react'
import { ArrowRight, CheckCircle, Loader2, Clock, Zap, RefreshCw } from 'lucide-react';

const OptimizedLoadingSpinner: React.FC = () => {
  const features = [
    {
      icon: Loader2,
      title: 'Optimized Loading Spinner',
      description: 'Intelligent optimized loading spinner that adapts to user context and content type.',
      benefits: ['Context-aware loading', 'Progressive loading', 'Skeleton screens', 'Smooth transitions']
    },
    {
      icon: Clock,
      title: 'Performance Loading Spinner',
      description: 'Optimized loading spinner for better performance and user experience.',
      benefits: ['Lazy loading', 'Code splitting', 'Resource optimization', 'Caching strategies']
    },
    {
      icon: Zap,
      title: 'Instant Loading Spinner',
      description: 'Near-instant optimized loading spinner experiences through advanced optimization techniques.',
      benefits: ['Preloading', 'Predictive loading', 'Background processing', 'Optimistic updates']
    },
    {
      icon: RefreshCw,
      title: 'Dynamic Loading Spinner',
      description: 'Dynamic optimized loading spinner that responds to real-time application state changes.',
      benefits: ['Real-time updates', 'State synchronization', 'Error recovery', 'Retry mechanisms']
    }
  ]

  const benefits = [
    'Improve perceived performance by 60%',
    'Reduce bounce rate with better loading experiences',
    'Enhance user engagement and satisfaction',
    'Optimize resource usage and bandwidth',
    'Provide consistent loading experiences across devices'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Optimized Loading Spinner
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Advanced optimized loading spinner solutions for better user experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Key Features</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive optimized loading spinner features designed for optimal user experience
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
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Solution</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the benefits of comprehensive optimized loading spinner features
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
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Enhance Your Optimized Loading Spinner?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of businesses already using our optimized loading spinner solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
              Start Free Trial
            </button>
            <button className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
              Contact Sales
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default OptimizedLoadingSpinner