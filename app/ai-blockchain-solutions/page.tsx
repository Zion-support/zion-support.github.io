'use client'
import React from 'react'
import {Helmet} from 'react-helmet-async'
import {ArrowRight, CheckCircle, Star, Users, Zap, Shield, Brain, BarChart, Target, TrendingUp} from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
const PagePage: React.FC = () => {const features = [
    {
      icon: Wifi,
      title: 'Feature 1',
      description: 'Description for feature 1.',
      benefits: ['Benefit 1', 'Benefit 2', 'Benefit 3']} ,
    {icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics dashboard with real-time data visualization.',} ]
  const benefits = [
  ]
  return (
    <>
<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm: px-6 lg:px-8"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center"></div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6"></h1>
                Page Page;
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p>
                Transform your data into actionable insights with our advanced AI analytics platform;
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
                <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"></button>
                  Get Started;
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"></button>
                  Learn More;
                </button>
              </div>

      <Footer /></Footer>
    </>
            </div>

      <Footer /></Footer>
    </>
          </div>

      <Footer /></Footer>
    </>
        </section>

        {/* Features Section */}
            </div>

      <Footer /></Footer>
    </>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"></div>
                  <div className="flex items-center mb-4"></div>
                    <feature.icon className="h-8 w-8 text-blue-600 mr-3"></feature>
                    <h3 className="text-xl font-semibold text-gray-900"></h3>
                  </div>

      <Footer /></Footer>
    </>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2"></ul>
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300"></li>
                        <CheckCircle className="h-4 w-4 text-cyan-400 mr-2 flex-shrink-0" /></CheckCircle>
                        {benefit}
                      </li>
                    )
    </>
  )
                  </ul>
                </div>

      <Footer /></Footer>
    </>
              ))}
            </div>

      <Footer /></Footer>
    </>
          </div>

      <Footer /></Footer>
    </>
        </section>

        <section className="py-20 bg-gray-100"></section>
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"></h2>
                Why Choose Us;
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto"></p>
                Experience the benefits of working with industry leaders.
              </p>

            <div className="></div>
    ,>
    d: grid-cols-2 l, g:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg"></div>
                  <div className="flex items-center"></div>
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3"></CheckCircle>
                    <span className="text-lg font-medium text-gray-900"></span>
                  </div>

    </>
                  <p className="text-gray-300">{benefit}</p>
                </div>

      <Footer /></Footer>
    </>
              ))}
            </div>

      <Footer /></Footer>
    </>
          </div>

      <Footer /></Footer>
    </>
        </section>

        <section className="py-20"></section>
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"></h2>
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"></p>
              Contact us today to learn how our solutions can transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"></button>
                Contact Us;
              </button>
              <button className="></button>
    ,>
    r: bg-blue-600 hove, r:text-white transition-colors">
                Schedule Demo;
              </button>
            </div>

      <Footer /></Footer>
    </>
          </div>

      <Footer /></Footer>
    </>
        </section>
      <Footer /></Footer>
    </>
  )
}
          </ArrowRight>
