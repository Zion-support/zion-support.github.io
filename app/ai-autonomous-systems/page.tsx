'use client'
import React from 'react'
import {Helmet} from 'react-helmet-async'
import {ArrowRight, CheckCircle, Star, Users, Zap, Shield, Brain, BarChart, Target, TrendingUp} from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
const PagePage: React.FC = () => {
  const features = [
    {
      icon: Wifi,
      title: 'Feature 1',
      description: 'Description for feature 1.',
      benefits: ['Benefit 1', 'Benefit 2', 'Benefit 3']} ,
    { icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics dashboard with real-time data visualization.',
      benefits: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics']} ,
    { icon: TrendingUp,
      title: 'Performance Optimization',
      description: 'AI-powered insights to optimize your business performance.',
      benefits: ['Predictive analytics', 'Trend analysis', 'Performance metrics', 'Growth forecasting']} ,
    { icon: CheckCircle,
      title: 'Feature 3',
      description: 'Description for feature 3.',
      benefits: ['Benefit 1', 'Benefit 2', 'Benefit 3']} ]

  const benefits = [
    'Increase efficiency by up to 80%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    'Real-time processing and analysis',
    'Seamless integration with existing systems'
  ]

  return (
    <>
      <Helmet />
        <title>AI Analytics - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered analytics solutions for data-driven insights" />
        <meta name="keywords" content="AI analytics, data analysis, machine learning, business intelligence" />
      </Helmet>
      <Navigation />
      <div>
        {/* Hero Section */}

        <section className="pt-20 pb-16 px-4 sm: px-6 lg: px-8">
          <div>
          <div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Page <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Solutions</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your data into actionable insights with our advanced AI analytics platform
              </p>
              <div>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                  Learn More
                </button>
              </div>
      
      <Footer />
    </>
            </div>
      
      <Footer />
    </>
          </div>
      
      <Footer />
    </>
        </section>

        <section className="py-20"
          <div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto"
                Discover the powerful features that make our solutions stand out.
              </p>
            
            <div className="
    ,
    d: grid-cols-2 l, g: grid-cols-3 gap-8"
              {features.map((feature, index) => (
                <div>
      <Footer />
    </>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle />
                        {benefit}

                      </li>
                    )
    </>
  )
                  </ul>
                </div>
      
      <Footer />
    </>
              ))}

            </div>
      
      <Footer />
    </>
          </div>
      
      <Footer />
    </>
        </section>

        <section className="py-20 bg-gray-100"
          <div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto"
                Experience the benefits of working with industry leaders.
              </p>
            
            <div className="
    ,
    d: grid-cols-2 l, g: grid-cols-3 gap-8"
              {benefits.map((benefit, index) => (
                <div>
      <Footer />
    </>
                  <p className="text-gray-300">{benefit}</p>
                </div>
      
      <Footer />
    </>
              ))}

            </div>
      
      <Footer />
    </>
          </div>
      
      <Footer />
    </>
        </section>

        <section className="py-20"
          <div>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
              Contact us today to learn how our solutions can transform your business.
            </p>
            <div>
              <button className="
    ,
    r: bg-blue-600 hove, r: text-white transition-colors"
                Schedule Demo
              </button>
            </div>
      
      <Footer />
    </>
          </div>
      
      <Footer />
    </>
        </section>
      <Footer />
    </>
  )
}

          </ArrowRight>
