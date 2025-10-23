'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings } from 'lucide-react'

const PagePage: React.FC = () => {
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
  
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Explore our successful AI implementation case studies. See how we've helped companies achieve 300%+ ROI with our AI solutions." />
        <meta name="keywords" content="AI, artificial intelligence, Page, AI solutions, intelligent automation" />
      </Helmet>
<div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">{/* Header */}</div>
        <header className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </div>
        </header>

        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Success Stories</h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">Real results from real companies using our AI solutions</p>
              <p className="text-lg mb-8 text-gray-300 max-w-4xl mx-auto">Discover how leading companies across industries have transformed their operations </p>
                and achieved remarkable ROI with our cutting-edge AI technology.
              </p>
            </div>
          </div>
        </section>

{/* Case Studies Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">{caseStudies.map((study) => (</div>
                <div key={study.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200">
                  <div className="p-8">
                    <div className="flex items-center mb-4">
                      <div className="text-4xl mr-4">{study.image}</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-1">{study.title}</h3>
                        <p className="text-blue-600 font-semibold">{study.company}</p>
                        <p className="text-gray-500 text-sm">{study.industry}</p>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-6">{study.description}</p>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                      <p className="text-gray-600 text-sm">{study.challenge}</p>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                      <p className="text-gray-600 text-sm">{study.solution}</p>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-4">Results:</h4>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center p-3 bg-green-50 rounded-lg">
                          <div className="text-2xl font-bold text-green-600">{study.results.roi}</div>
                          <div className="text-sm text-gray-600">ROI</div>
                        </div>
                        <div className="text-center p-3 bg-blue-50 rounded-lg">
                          <div className="text-2xl font-bold text-blue-600">{Object.values(study.results)[1]}</div>
                          <div className="text-sm text-gray-600">{Object.keys(study.results)[1].replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <Link 
                        to="/contact"
                        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
                      >
                        Learn More
                      </Link>
                      <div className="flex items-center text-green-600">
                        <CheckCircle className="w-4 h-4 mr-1" />
                        <span className="text-sm font-semibold">Verified Results</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

{/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Proven Track Record</h2>
              <p className="text-xl text-gray-600">Our AI solutions deliver consistent, measurable results</p>
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
<section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Create Your Success Story?</h2>
            <p className="text-xl mb-8 text-blue-100">Join the companies that have transformed their business with our AI solutions</p>
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
      
      <Footer />
    </>
  );
};

export default CaseStudiesPage;
