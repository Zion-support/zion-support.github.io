'use client'
import { ArrowRight, Brain, BarChart, Target } from 'lucide-react'
import React from 'react'

import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight } from 'lucide-react'

constAIServicesPage: React.FC= () =>{constservices= [
    {
      icon: Brain,
      title: 'Machine Learning Solutions',
      description: 'Custom ML models for predictive analytics, pattern recognition, and intelligent decision making.',
      features: ['Predictive Analytics', 'Pattern Recognition', 'Custom Model Training', 'Real-time Processing'],
      price: 'Starting at $2,50 0/month',
      color: 'text-purple-40 0'
   },
    {icon: Target,
      title: 'AI Marketing Automation',
      description: 'Intelligent marketing campaigns with AI-powered targeting, content generation, and optimization.',
      features: ['Smart Targeting', 'Content Generation', 'Campaign Optimization', 'ROI Tracking'],
      price: 'Starting at $1,20 0/month',
      color: 'text-pink-40 0'
   },
    {icon: Zap,
      title: 'Process Automation',
      description: 'Automate complex business processes with AI decision-making and exception handling.',
      features: ['Workflow Automation', 'Exception Handling', 'Smart Routing', 'Performance Monitoring'],
      price: 'Starting at $80 0/month',
      color: 'text-blue-40 0'
   },
    {icon: Shield,
      title: 'AI Cybersecurity',
      description: 'Advanced threat detection and response using AI-powered security monitoring.',
      features: ['Threat Detection', 'Automated Response', 'Behavioral Analysis', 'Compliance Reporting'],
      price: 'Starting at $1,50 0/month',
      color: 'text-red-40 0'
   },
    {icon: BarChart,
      title: 'Data Analytics & Insights',
      description: 'Transform raw data into actionable insights with AI-powered analytics and visualization.',
      features: ['Data Processing', 'Predictive Insights', 'Visualization', 'Automated Reports'],
      price: 'Starting at $90 0/month',
      color: 'text-teal-40 0'
   },
    {icon: Users,
      title: 'Customer Experience AI',
      description: 'Enhance customer interactions with AI chatbots, sentiment analysis, and personalized experiences.',
      features: ['AI Chatbots', 'Sentiment Analysis', 'Personalization', '24/7 Support'],
      price: 'Starting at $600/month',
      color: 'text-green-400'
    }
  ]

  constbenefits= [
    {icon: Star,
      title: 'Proven ROI',
      description: 'Average300% ROI within6months of implementation'
   },
    {icon: Zap,
      title: 'Rapid Deployment',
      description: 'Get your AI solutions up and running in 2-4 weeks'
   },
    {icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security and compliance for all AI solutions'
   },
    {icon: Globe,
      title: 'Global Support',
      description: '24/7 support across all time zones with dedicated success managers'
    }
  ]

const Page = () => {
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Page
        </h1>
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-gray-600">
            This page is under construction. Please check back later.
          </p>
        </div>
      </div>
=======
    <div className=&quot;min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900&quot;></div>
      <Navigation />
      <main className=&quot;container mx-auto px-4 py-16 pt-24&quot;>
        {/* Hero Section */}
        <section className=&quot;text-center mb-16&quot;></section>
          <h1 className=&quot;text-4xl md:text-6xl font-bold text-white mb-6&quot;></h1>
            <span className=&quot;bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent&quot;>
              AI Services & Solutions
            </span>
          </h1>
          <p className=&quot;text-xl text-gray-300 mb-8 max-w-4xl mx-auto&quot;>
            Transform your business with cutting-edge artificial intelligence solutions.
            From machine learning to automation, we deliver AI that drives real results.
          </p>
          <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;></div>
            <a
              href=&quot;/contact&quot;
              className=&quot;bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 hover:scale-105&quot;
            >
              Get Free Consultation
            </a>
            <a
              href=&quot;tel:+13024640950&quot;
              className=&quot;border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300&quot;
            >
              (302) 464-0950
            </a>
          </div>
        </section>
        {/* Services Grid */}
        <section className=&quot;mb-16&quot;></section>
          <h2 className=&quot;text-3xl font-bold text-white text-center mb-12&quot;>Our AI Services</h2>
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;></div>
            {services.map((service, index) => (
              <div key={index} className=&quot;bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105&quot;></div>
                <div className=&quot;flex items-center mb-4&quot;></div>
                  <service.icon className={`w-8 h-8 ${service.color} mr-3`} />
                  <h3 className=&quot;text-xl font-bold text-white&quot;>{service.title}</h3>
                </div>
                <p className=&quot;text-gray-300 mb-4&quot;>{service.description}</p>
                <ul className=&quot;space-y-2 mb-6&quot;>
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className=&quot;flex items-center text-sm text-gray-400&quot;>
                      <CheckCircle className=&quot;w-4 h-4 text-green-400 mr-2&quot; />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className=&quot;text-center&quot;></div>
                  <div className={`text-lg font-bold ${service.color} mb-2`}>{service.price}</div>
                  <a
                    href=&quot;/contact&quot;
                    className={`inline-flex items-center text-sm font-medium ${service.color} hover:opacity-80 transition-opacity`}
                  >
                    Learn More <ArrowRight className=&quot;w-4 h-4 ml-1&quot; />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* Benefits Section */}
        <section className=&quot;mb-16&quot;></section>
          <div className=&quot;bg-gradient-to-r from-indigo-900/50 to-purple-900/50 rounded-2xl p-8&quot;></div>
            <h2 className=&quot;text-3xl font-bold text-white text-center mb-12&quot;>Why Choose Our AI Services?</h2>
            <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8&quot;></div>
              {benefits.map((benefit, index) => (
                <div key={index} className=&quot;text-center&quot;></div>
                  <div className=&quot;w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4&quot;></div>
                    <benefit.icon className=&quot;w-8 h-8 text-cyan-400&quot; />
                  </div>
                  <h3 className=&quot;text-xl font-bold text-white mb-2&quot;>{benefit.title}</h3>
                  <p className=&quot;text-gray-300&quot;>{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className=&quot;text-center&quot;></section>
          <div className=&quot;bg-gradient-to-r from-cyan-900/50 to-purple-900/50 rounded-2xl p-8&quot;></div>
            <h2 className=&quot;text-3xl font-bold text-white mb-4&quot;>Ready to Transform Your Business with AI?</h2>
            <p className=&quot;text-gray-300 mb-8 max-w-2xl mx-auto&quot;>
              Get a free consultation and discover how our AI solutions can revolutionize your operations and drive growth.
            </p>
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;></div>
              <a
                href=&quot;/contact&quot;
                className=&quot;bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 hover:scale-105&quot;
              >
                Get Free Consultation
              </a>
              <a
                href=&quot;tel:+13024640950&quot;
                className=&quot;border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300&quot;
              >
                (302) 464-0950
              </a>
            </div>
            <div className=&quot;mt-8 text-sm text-gray-400&quot;></div>
              <p>📧 kleber@ziontechgroup.com | 📍 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
>>>>>>> 33a3472fdd6542a46cedfafebd3b6b0a7cc5e02d
    </div>
  )
}

export default Page;