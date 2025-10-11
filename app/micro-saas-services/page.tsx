'use client'
import React from 'react'
import {Helmet} from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import {Brain, BarChart, CheckCircle, ArrowRight, Zap, Shield, Target} from 'lucide-react'
const MicroSaasServicesPage: React.FC = () => {
  const features = [
    {
      icon: Wifi,
      title: 'Feature 1',
      description: 'Description for feature 1.',
      benefits: ['Benefit 1', 'Benefit 2', 'Benefit 3']} ,
    { icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics dashboard with real-time data visualization.',
      benefits: ['Real-time monitoring', 'Performance metrics', 'Data visualization', 'Custom reports']} ,
    { icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast processing with optimized algorithms and infrastructure.',
      benefits: ['Fast processing', 'Optimized algorithms', 'Scalable infrastructure', 'High availability']} ,
    { icon: Shield,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security and reliability for mission-critical applications.',
      benefits: ['Data encryption', 'Access control', 'Audit logging', 'Compliance ready']} ]

  const benefits = [
    'Enhanced productivity and efficiency',
    'Reduced operational costs',
    'Improved decision making',
    'Scalable solutions',
    '24/7 availability',
    'Expert support'
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
      <Helmet />
        <title>Page Title - Zion Tech Group</title>
        <meta name="description" content="Description of the page and its benefits."
        <meta name="keywords" content="relevant, keywords, for, seo"
      </Helmet>
      
      <Navigation />
      <main className="pt-16"
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700"
          <div>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto"
                Transform your business with our cutting-edge AI and IT solutions designed for the modern enterprise.
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
            </div>
      
      <Footer />
    </>
            <div>
              {features.map((feature, index) => (
                <div>
      <Footer />
    </>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  {feature.benefits && (
                    <ul className="space-y-2"
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-400"
                          <CheckCircle />
                          {benefit}

                        </li>
                      )
    </>
  )
                    </ul>
                  )}

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
            </div>
      
      <Footer />
    </>
            <div>
              {benefits.map((benefit, index) => (
                <div>
      <Footer />
    </>
                  <p className="text-lg text-white font-medium">{benefit}</p>
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

        {/* CTA Section */}

        <section className="py-20 px-4">
          <div>
          <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our experts to discuss your requirements and get started today.
              </p>
              <div>
                <button className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Contact Us
                </button>
                <button className="border border-green-400 text-green-400 hover:bg-green-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
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
      </main>

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
      
      <Footer />
    </>
  )
}

export default MicroSaasServicesPage
        </Navigation>
