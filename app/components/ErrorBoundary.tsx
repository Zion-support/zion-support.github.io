import React from 'react'
import { ArrowRight, Brain, CheckCircle, Shield, AlertTriangle, Bug, RefreshCw, Zap } from 'lucide-react'

const ErrorBoundary: React.FC = () => {
  const features = [
    {
      icon: AlertTriangle,
      title: 'Error Detection',
      description: 'Advanced error detection and monitoring for better application stability.',
      benefits: ['Real-time monitoring', 'Error tracking', 'Performance metrics', 'User impact analysis']
    },
    {
      icon: Bug,
      title: 'Error Recovery',
      description: 'Intelligent error recovery mechanisms to minimize user impact.',
      benefits: ['Automatic recovery', 'Graceful degradation', 'Fallback UI', 'Error reporting']
    },
    {
      icon: RefreshCw,
      title: 'Auto Recovery',
      description: 'Automatic recovery mechanisms to restore application functionality.',
      benefits: ['Self-healing', 'Automatic restarts', 'State recovery', 'Service restoration']
    },
    {
      icon: Shield,
      title: 'Error Prevention',
      description: 'Proactive error prevention through advanced monitoring and analysis.',
      benefits: ['Predictive analysis', 'Risk assessment', 'Prevention strategies', 'Quality assurance']
    }
  ]

  const benefits = [
    'Reduce application downtime by 90%',
    'Improve user experience with better error handling',
    'Minimize data loss and corruption',
    'Enhance application reliability and stability',
    'Provide better debugging and monitoring capabilities'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Error Boundary
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Advanced error boundary solutions for robust application stability.
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
              Comprehensive error boundary features designed for application stability
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
              Experience the benefits of comprehensive error boundary features
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
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Enhance Your App&apos;s Stability?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of businesses already using our error boundary solutions
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

export default ErrorBoundary