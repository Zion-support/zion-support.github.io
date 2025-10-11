import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Brain, BarChart, Target, TrendingUp, CheckCircle, Mail, Zap, Shield } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const AiEmailAssistantPage: React.FC = () => {
  const features = [
    {
      icon: Mail,
      title: 'AI-Powered Email Assistant',
      description: 'Advanced AI algorithms that help manage and optimize email communications.',
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics dashboard with real-time data visualization.',
      benefits: ['Email analytics', 'Response tracking', 'Performance metrics', 'Engagement insights'],
    },
    {
      icon: Target,
      title: 'Smart Email Management',
      description: 'Target specific email goals with precision and accuracy.',
      benefits: ['Auto-categorization', 'Priority sorting', 'Smart replies', 'Email scheduling'],
    },
    {
      icon: TrendingUp,
      title: 'Productivity Optimization',
      description: 'Optimize email productivity with data-driven strategies.',
      benefits: ['Time management', 'Email templates', 'Automation rules', 'Efficiency gains'],
    }
  ]

  const benefits = [
    'Reduce email management time by 70%',
    'Improve email response rates by 50%',
    'Automate repetitive email tasks',
    'Increase email productivity by 80%',
    'Gain competitive advantage with AI email assistance'
  ]

  return (
    <>
      <Helmet>
        <title>AI Email Assistant - Zion Tech Group</title>
        <meta name="description" content="AI-powered email assistant for improved productivity" />
        <meta name="keywords" content="AI, artificial intelligence, email assistant, productivity" />
      </Helmet>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-sky-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI Email Assistant
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Advanced AI-powered email assistant for improved productivity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border border-sky-400 text-sky-400 hover:bg-sky-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Key Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">Advanced AI technology that drives results</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-sky-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  {feature.benefits && (
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Solution?</h2>
              <p className="text-xl text-gray-300">Proven results that drive business growth and efficiency</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-3" />
                    <span className="text-white font-semibold">{benefit}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact our experts to discuss your requirements and get started today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Contact Us
              </button>
              <button className="border border-sky-400 text-sky-400 hover:bg-sky-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default AiEmailAssistantPage