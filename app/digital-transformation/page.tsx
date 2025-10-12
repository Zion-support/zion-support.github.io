'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Zap, Users, Globe, Shield, Target, TrendingUp, Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const DigitalTransformationPage: React.FC = () => {
  const transformationServices = [
    {
      icon: <Zap className="w-8 h-8 text-blue-500" />,
      title: 'Process Automation',
      description: 'Streamline operations with intelligent automation and workflow optimization.',
      features: ['Workflow automation', 'RPA implementation', 'Process optimization', 'Integration services', 'Performance monitoring'],
      pricing: 'Starting at $1,999/month',
      popular: true,
      category: 'Automation'
    },
    {
      icon: <Users className="w-8 h-8 text-green-500" />,
      title: 'Digital Workforce',
      description: 'Transform your team with digital tools and modern collaboration platforms.',
      features: ['Digital tools training', 'Collaboration platforms', 'Remote work solutions', 'Change management', 'User adoption'],
      pricing: 'Starting at $799/month',
      popular: false,
      category: 'Workforce'
    },
    {
      icon: <Globe className="w-8 h-8 text-purple-500" />,
      title: 'Customer Experience',
      description: 'Enhance customer interactions with digital touchpoints and personalized experiences.',
      features: ['Digital touchpoints', 'Customer journey mapping', 'Personalization engines', 'Omnichannel solutions', 'Analytics & insights'],
      pricing: 'Starting at $1,499/month',
      popular: false,
      category: 'Experience'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'Data Strategy',
      description: 'Leverage data as a strategic asset with advanced analytics and insights.',
      features: ['Data strategy planning', 'Analytics implementation', 'Data governance', 'Business intelligence', 'Predictive modeling'],
      pricing: 'Starting at $1,299/month',
      popular: false,
      category: 'Data'
    },
    {
      icon: <Target className="w-8 h-8 text-orange-500" />,
      title: 'Digital Strategy',
      description: 'Comprehensive digital roadmap aligned with your business objectives.',
      features: ['Digital roadmap', 'Technology assessment', 'ROI planning', 'Implementation strategy', 'Change management'],
      pricing: 'Starting at $2,499',
      popular: false,
      category: 'Strategy'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-yellow-500" />,
      title: 'Innovation Labs',
      description: 'Foster innovation with dedicated labs and emerging technology exploration.',
      features: ['Innovation workshops', 'Emerging tech exploration', 'Prototype development', 'Pilot programs', 'Innovation metrics'],
      pricing: 'Starting at $3,999/month',
      popular: false,
      category: 'Innovation'
    }
  ]

  const transformationPhases = [
    {
      phase: '01',
      title: 'Assessment & Planning',
      description: 'Comprehensive analysis of current state and digital readiness assessment.',
      duration: '2-4 weeks'
    },
    {
      phase: '02',
      title: 'Strategy Development',
      description: 'Create a tailored digital transformation roadmap aligned with business goals.',
      duration: '3-6 weeks'
    },
    {
      phase: '03',
      title: 'Implementation',
      description: 'Execute the transformation plan with phased rollouts and change management.',
      duration: '3-12 months'
    },
    {
      phase: '04',
      title: 'Optimization',
      description: 'Continuous monitoring, optimization, and scaling of digital initiatives.',
      duration: 'Ongoing'
    }
  ]

  const benefits = [
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Increased Efficiency',
      description: 'Streamline operations and reduce manual processes with intelligent automation.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Better Customer Experience',
      description: 'Deliver personalized, seamless experiences across all touchpoints.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Data-Driven Decisions',
      description: 'Leverage advanced analytics and insights for strategic decision making.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Competitive Advantage',
      description: 'Stay ahead of the competition with cutting-edge digital capabilities.'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Helmet>
        <title>Digital Transformation - Zion Tech Group</title>
        <meta name="description" content="Transform your business with comprehensive digital transformation services. Process automation, digital workforce, and customer experience solutions." />
        <meta name="keywords" content="digital transformation, process automation, digital workforce, customer experience, data strategy" />
      </Helmet>

      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Digital
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                {' '}Transformation
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Transform your business for the digital age with comprehensive solutions that drive efficiency, 
              enhance customer experience, and unlock new opportunities for growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Start Your Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center px-8 py-4 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Transformation Phases */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Transformation Process</h2>
            <p className="text-xl text-gray-600">A structured approach to digital transformation success</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {transformationPhases.map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">{phase.phase}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{phase.title}</h3>
                <p className="text-gray-600 mb-2">{phase.description}</p>
                <span className="text-sm text-blue-600 font-medium">{phase.duration}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Digital Transformation Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions designed to modernize your business operations and drive growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {transformationServices.map((service, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 ${
                  service.popular ? 'ring-2 ring-blue-500' : ''
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="mb-6">
                  {service.icon}
                  <div className="mt-4 mb-2">
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                      {service.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mt-2 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                </div>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mb-6">
                  <span className="text-2xl font-bold text-gray-900">
                    {service.pricing}
                  </span>
                </div>

                <Link
                  to={service.link}
                  className="w-full inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Digital Transformation?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your business with proven digital strategies that deliver measurable results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let our digital transformation experts help you modernize your operations and unlock new opportunities for growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Start Your Transformation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/pricing"
              className="inline-flex items-center px-8 py-4 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              View Pricing Plans
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default DigitalTransformationPage