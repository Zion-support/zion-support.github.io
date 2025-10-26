'use client';
import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Brain } from 'lucide-react';


const AIProjectManagementProPage: React.FC = () => {
  const features = [
    {
      icon: 'Brain',
    title: 'AI Project Planning',
      description: 'Intelligent project planning with AI-powered task breakdown, resource allocation, and timeline optimization.'
},
  {
    icon: 'Users',
    title: 'Team Collaboration',
      description: 'Enhanced team collaboration with AI-powered communication, task assignment, and progress tracking.'
},
  {
    icon: 'BarChart',
    title: 'Advanced Analytics',
      description: 'Comprehensive project analytics with AI insights, performance metrics, and predictive forecasting.'
},
  {
    icon: 'Target',
    title: 'Smart Resource Management',
    description: 'AI-driven resource allocation and workload balancing for optimal team productivity.'}
  ]
  const benefits = [
  'Increase project success rate by 40%',
    'Reduce project delivery time by 25%',
    'Improve team productivity by 35%',
    'Minimize project risks with AI predictions',
    'Automated progress tracking',
    'Real-time collaboration tools'
  ]
  const pricing = [
  {
  name: 'Starter',
    price: '$29.99',
      period: '/month',
    description: 'Perfect for small teams and freelancers',
      features: [
        'Up to 5 projects',
        'Basic AI features',
        'Team collaboration',
        'Basic analytics',
    'Email support'
      ]
    },
    {
      name: 'Professional',
    price: '$79.99',
      period: '/month',
    description: 'Ideal for growing businesses',
      features: [
        'Up to 25 projects',
        'Advanced AI features',
        'Advanced analytics',
        'Priority support',
        'API access',
    'Custom integrations'
      ]
    },
    {
      name: 'Enterprise',
    price: 'Custom',
      period: '',
    description: 'For large organizations',
      features: [
        'Unlimited projects',
        'Full AI suite',
        'Custom integrations',
        'Dedicated support',
        'White-label solution',
    'SLA guarantee'
  ]
}
  ]
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm: px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md: text-6xl font-bold text-white mb-6">
            AI Project Management <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Pro</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform project management with AI-powered automation. Plan, track, and deliver projects efficiently with our intelligent project management platform.
          </p>
          <div className="flex flex-col sm: flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
            >
              Get Started
              <ArrowRight className="w-8 h-8" />
            </Link>
            <Link
              href="/ai-services"
              className="inline-flex items-center px-8 py-3 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
            >
              View All AI Services
            </Link>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-20 px-4 sm: px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md: text-4xl font-bold text-white mb-6">
              Smart Project Management Features
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Our AI project management platform provides everything you need to plan, execute, and deliver successful projects.
            </p>
          </div>
          <div className="grid md: grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover: border-cyan-400/50 transition-all duration-300 group">
                <div className="mb-6">
                  <div className="w-12 h-12 text-cyan-400">{feature.icon}</div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Benefits Section */}
      <section className="py-20 px-4 sm: px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg: grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md: text-4xl font-bold text-white mb-6">
                Why Choose Our AI Project Management?
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Our AI-powered project management helps you deliver projects on time, within budget, and with higher success rates.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-8 h-8" />
                    <span className="text-gray-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mb-6">
                    <Brain className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">AI-Powered Intelligence</h3>
                  <p className="text-gray-300">
                    Our AI learns from your project patterns and automatically optimizes workflows, resource allocation, and timeline predictions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Pricing Section */}
      <section className="py-20 px-4 sm: px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md: text-4xl font-bold text-white mb-6">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your team size and project needs. All plans include our core AI features with no hidden fees.
            </p>
          </div>
          <div className="grid md: grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover: border-cyan-400/50 transition-all duration-300">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle className="w-8 h-8" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
                >
                  {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                  <ArrowRight className="w-8 h-8" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 px-4 sm: px-6 lg:px-8 bg-gradient-to-r from-cyan-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md: text-4xl font-bold text-white mb-6">
            Ready to Transform Your Project Management?
          </h2>
          <p className="text-xl text-cyan-100 mb-8">
            Join thousands of teams already using our AI project management to deliver better projects faster.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="inline-flex items-center px-8 py-3 bg-white text-cyan-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300"
            >
              Start Free Trial
              <ArrowRight className="w-8 h-8" />
            </Link>
            <Link 
              href="/ai-services" 
              className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-cyan-600 transition-colors duration-300"
            >
              Explore All AI Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
export default AIProjectManagementProPage