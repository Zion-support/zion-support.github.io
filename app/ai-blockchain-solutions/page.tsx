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
      description: 'Comprehensive analytics dashboard with real-time data visualization.' } ]

  const benefits = [
  ]

  return (
    <>
<div>
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

        {/* Features Section */}

            </div>
      
      <Footer />
    </>
            <div>
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
