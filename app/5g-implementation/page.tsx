import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings, Check, Send, BarChart3, DollarSign, Activity, Lock, FileText, CreditCard, Building2, Sparkles, PieChart } from 'lucide-react'

const FiveGImplementationPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Advanced AI algorithms that provide intelligent insights and recommendations.',
      benefits: ['Smart recommendations', 'Predictive analytics', 'Automated insights', 'Real-time analysis']
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics dashboard with real-time data visualization.',
      benefits: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics']
    },
    {
      icon: Target,
      title: 'Precision Targeting',
      description: 'Target specific goals and objectives with precision and accuracy.',
      benefits: ['Goal tracking', 'Performance optimization', 'Strategic planning', 'Success metrics']
    },
    {
      icon: TrendingUp,
      title: 'Growth Optimization',
      description: 'Optimize your business growth with data-driven strategies.',
      benefits: ['Growth strategies', 'Market analysis', 'Competitive insights', 'ROI optimization']
    }
  ]

  const benefits = [
    'Increase efficiency by up to 50%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    'Gain competitive advantage with advanced technology'
  ]

  return (
    <>
      <Navigation />
      <div className='min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900'>
        {/* Hero Section */}
        <section className='relative py-20 px-4 overflow-hidden'>
          <div className='absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20'></div>
          <div className='relative max-w-7xl mx-auto text-center'>
            <h1 className='text-5xl md:text-7xl font-bold text-white mb-6 leading-tight'>
              5G Implementation
            </h1>
            <p className='text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed'>
              Advanced 5G implementation solution for modern businesses.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <button className='bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center'>
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className='border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200'>
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className='py-20 px-4'>
          <div className='max-w-7xl mx-auto'>
            <div className='text-center mb-16'>
              <h2 className='text-4xl font-bold text-white mb-4'>Key Features</h2>
              <p className='text-xl text-gray-300 max-w-2xl mx-auto'>
                Discover the powerful features that make our 5G implementation solution stand out.
              </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
              {features.map((feature, index) => (
                <div key={index} className='bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300'>
                  <div className='flex items-center mb-4'>
                    <feature.icon className='w-8 h-8 text-emerald-400 mr-3' />
                    <h3 className='text-xl font-semibold text-white'>{feature.title}</h3>
                  </div>
                  <p className='text-gray-300 mb-4'>{feature.description}</p>
                  <ul className='space-y-2'>
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className='flex items-center text-sm text-gray-400'>
                        <CheckCircle className='w-4 h-4 text-emerald-400 mr-2' />
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
        <section className='py-20 px-4 bg-slate-800/30'>
          <div className='max-w-7xl mx-auto'>
            <div className='text-center mb-16'>
              <h2 className='text-4xl font-bold text-white mb-4'>Why Choose Our 5G Implementation?</h2>
              <p className='text-xl text-gray-300 max-w-2xl mx-auto'>
                Experience the benefits of cutting-edge 5G technology for your business.
              </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {benefits.map((benefit, index) => (
                <div key={index} className='flex items-start space-x-3'>
                  <CheckCircle className='w-6 h-6 text-emerald-400 mt-1' />
                  <p className='text-gray-300'>{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className='py-20 px-4'>
          <div className='max-w-4xl mx-auto text-center'>
            <h2 className='text-4xl font-bold text-white mb-6'>Ready to Implement 5G?</h2>
            <p className='text-xl text-gray-300 mb-8'>
              Get started with our 5G implementation solution and transform your business today.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <button className='bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center'>
                Start Implementation
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className='border border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-colors duration-200'>
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default FiveGImplementationPage