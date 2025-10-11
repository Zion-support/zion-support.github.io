'use client'
import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { ArrowRight, CheckCircle, Star, Users, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Settings, Smartphone, Calendar, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Package, Mic, Workflow, Eye, Wifi, MessageSquare, ShoppingCart } from 'lucide-react';
const PagePage: React.FC = () => {

  const features = [
    {
      icon: Wifi,
      title: 'Feature 1',
      description: 'Description for feature 1.',
      benefits: ['Benefit 1', 'Benefit 2', 'Benefit 3']
    },
    {
      icon: BarChart,
      title: 'Feature 2', 
      description: 'Description for feature 2.',
      benefits: ['Benefit 1', 'Benefit 2', 'Benefit 3']
    },
    {
      icon: CheckCircle,
      title: 'Feature 3',
      description: 'Description for feature 3.',
      benefits: ['Benefit 1', 'Benefit 2', 'Benefit 3']
    }
  ];

  const benefits = [
    'Increase efficiency by up to 80%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    'Real-time processing and analysis',
    'Seamless integration with existing systems'
  ];

  return (
    <>
      <Helmet>
        <title>AI Analytics - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered analytics solutions for data-driven insights" />
        <meta name="keywords" content="AI analytics, data analysis, machine learning, business intelligence" />
      </Helmet>
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
            {/* Hero Section */}
          </div>
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 1>
                  Page Page
                </h1>
              </h1>
              <p Transform your business with our cutting-edge AI and IT solutions designed for the modern enterprise.>
                  $2
                </p>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button $2>
                  $2
                </button>
                </button>
                </button>
                <button $2>
                  $2
                </button>
                </button>
                </button>
              </div>
            </div>
      
      <Footer />
    </>
          </div>
      
      <Footer />
    </>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 2>
                  Key Features
                </h2>
              </h2>
              <p Discover the powerful features that make our solutions stand out.>
                  $2
                </p>
              </p>
            </div>
            
            <div $1>
            {features.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-4">
                    <feature.icon className="h-8 w-8 text-blue-600 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <ul $1>
            {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
            {benefit}
          </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 2>
                  Why Choose Us
                </h2>
              </h2>
              <p Experience the benefits of working with industry leaders.>
                  $2
                </p>
              </p>
            </div>
            
            <div $1>
            {benefits.map((benefit, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-center">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                    <span className="text-lg font-medium text-gray-900">{benefit}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 2>
                  Ready to Get Started?
                </h2>
            </h2>
            <p Contact us today to learn how our solutions can transform your business.>
                  $2
                </p>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button $2>
                  $2
                </button>
                </button>
              </button>
              <button $2>
                  $2
                </button>
                </button>
              </button>
            </div>
      
      <Footer />
    </>
          </div>
      
      <Footer />
    </>
        </section>
      </main>
      
      <Footer />
    </>
      <Footer />
    </>
  );
export default PagePage
      </Footer>
    </ArrowRight>
  </Navigation>