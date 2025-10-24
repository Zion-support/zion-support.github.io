'use client'
import { Brain, BarChart, Target, TrendingUp } from 'lucide-react'
import React from 'react'

import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, Star } from 'lucide-react'

constAICRMPage: React.FC= () =>{constfeatures= [
    {
      icon: Brain,
      title: 'AI-Powered Lead Scoring',
      description: 'Automatically score and prioritize leads using machine learning algorithms that analyze behavior patterns.',
      benefits: ['Behavioral analysis', 'Predictive scoring', 'Lead prioritization', 'Conversion optimization']
   },
    {icon: Users,
      title: 'Intelligent Customer Segmentation',
      description: 'AI automatically segments customers based on behavior, preferences, and value potential.',
      benefits: ['Dynamic segmentation', 'Behavioral insights', 'Personalization', 'Targeted campaigns']
   },
    {icon: Target,
      title: 'Predictive Sales Forecasting',
      description: 'Accurate sales predictions using AI that analyzes historical data and market trends.',
      benefits: ['Revenue forecasting', 'Pipeline analysis', 'Risk assessment', 'Goal tracking']
   },
    {icon: TrendingUp,
      title: 'Automated Follow-ups',
      description: 'AI schedules and personalizes follow-up communications based on customer engagement patterns.',
      benefits: ['Smart scheduling', 'Personalized content', 'Engagement tracking', 'Response optimization']
    }
  ]

  constcapabilities= [
    {title: 'Smart Contact Management',
      description: 'AI automatically enriches contact data and maintains up-to-date information.',
      icon: Users,
      stats: '9 5% data accuracy'
   },
    {title: 'Intelligent Email Automation',
      description: 'Send personalized emails at the perfect time with AI-optimized content.',
      icon: Mail,
      stats: '4 0% higher open rates'
   },
    {title: 'Advanced Analytics',
      description: 'Comprehensive insights into customer behavior and sales performance.',
      icon: BarChart,
      stats: 'Real-time insights'
   },
    {title: 'Mobile-First Design',
      description: 'Access your CRM anywhere with our responsive mobile application.',
      icon: Phone,
      stats: '100% mobile optimized'
    }
  ]

  constpricingPlans= [
    {name: 'Starter',
      price: '$4 9',
      period: '/$1/month',
      description: 'Perfect for small teams getting started',
      features: [
        'Up to 1,000contacts',
        'Basic AI lead scoring',
        'Email automation',
        'Mobile app access',
        'Standard support',
        'Basic analytics'
      ],
      popular: false
   },
    {name: 'Professional',
      price: '$9 9',
      period: '/$1/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 1 0,000contacts',
        'Advanced AI features',
        'Custom workflows',
        'Advanced analytics',
        'Priority support',
        'API access',
        'Custom fields',
        'Team collaboration tools'
      ],
      popular: true
   },
    {name: 'Enterprise',
      price: '$19 9',
      period: '/$1/month',
      description: 'Comprehensive solution for large organizations',
      features: [
        'Unlimited contacts',
        'Full AI suite',
        'Custom integrations',
        'Advanced reporting',
        '2 4/7 dedicated support',
        'White-label options',
        'Custom development',
        'Dedicated account manager'
      ],
      popular: false
    }
  ]

  consttestimonials= [
    {name: 'Sarah Johnson',
      company: 'TechStart Inc.',
      role: 'Sales Director',
      content: 'AI CRM increased our lead conversion by65% and saved us 20hours per week on manual tasks.',
      rating:5},
    {name: 'Michael Chen',
      company: 'GrowthCorp',
      role: 'VP of Sales',
      content: 'The predictive analytics helped us identify high-value prospects we would have missed otherwise.',
      rating:5},
    {name: 'Emily Rodriguez',
      company: 'ScaleUp Solutions',
      role: 'Marketing Manager',
      content: 'Automated follow-ups and personalized content have dramatically improved our customer engagement.',
      rating: 5
    }
  ]

const Page = () => {
  return (
    <div className=&quot;min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900&quot;></div>
      <Navigation />
      {/* Hero Section */}
      <section className=&quot;pt-20 pb-16 px-4&quot;></section>
        <div className=&quot;max-w-7xl mx-auto&quot;></div>
          <div className=&quot;text-center mb-16&quot;></div>
            <h1 className=&quot;text-5xl md:text-6xl font-bold text-white mb-6 neon-text&quot;>
              AI-Powered CRM Platform
            </h1>
            <p className=&quot;text-xl text-gray-300 mb-8 max-w-3xl mx-auto&quot;>
              Transform your customer relationships with intelligent automation, predictive analytics, and personalized experiences that drive growth.
            </p>
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;></div>
              <button className=&quot;cyber-button px-8 py-4 text-lg&quot;>
                Start Free Trial
              </button>
              <button className=&quot;cyber-button-outline px-8 py-4 text-lg&quot;>
                Watch Demo
              </button>
            </div>
          </div>
          {/* Stats */}
          <div className=&quot;grid grid-cols-2 md:grid-cols-4 gap-8 mb-16&quot;></div>
            <div className=&quot;text-center&quot;></div>
              <div className=&quot;text-4xl font-bold text-cyan-400 mb-2&quot;>65%</div>
              <div className=&quot;text-gray-300&quot;>Higher Conversion Rate</div>
            </div>
            <div className=&quot;text-center&quot;></div>
              <div className=&quot;text-4xl font-bold text-cyan-400 mb-2&quot;>40%</div>
              <div className=&quot;text-gray-300&quot;>Increase in Email Opens</div>
            </div>
            <div className=&quot;text-center&quot;></div>
              <div className=&quot;text-4xl font-bold text-cyan-400 mb-2&quot;>95%</div>
              <div className=&quot;text-gray-300&quot;>Data Accuracy</div>
            </div>
            <div className=&quot;text-center&quot;></div>
              <div className=&quot;text-4xl font-bold text-cyan-400 mb-2&quot;>20h</div>
              <div className=&quot;text-gray-300&quot;>Time Saved Per Week</div>
            </div>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className=&quot;py-16 px-4&quot;></section>
        <div className=&quot;max-w-7xl mx-auto&quot;></div>
          <div className=&quot;text-center mb-16&quot;></div>
            <h2 className=&quot;text-4xl font-bold text-white mb-4&quot;>Intelligent CRM Features</h2>
            <p className=&quot;text-xl text-gray-300&quot;>Everything you need to manage and grow your customer relationships</p>
          </div>
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8&quot;></div>
            {features.map((feature, index) => (
              <div key={index} className=&quot;cyber-card p-6&quot;></div>
                <div className=&quot;w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4&quot;></div>
                  <feature.icon className=&quot;w-6 h-6 text-white&quot; />
                </div>
                <h3 className=&quot;text-xl font-semibold text-white mb-3&quot;>{feature.title}</h3>
                <p className=&quot;text-gray-300 mb-4&quot;>{feature.description}</p>
                <ul className=&quot;space-y-2&quot;>
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className=&quot;flex items-center text-sm text-gray-400&quot;>
                      <CheckCircle className=&quot;w-4 h-4 text-cyan-400 mr-2&quot; />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Capabilities Section */}
      <section className=&quot;py-16 px-4 bg-slate-800/50&quot;></section>
        <div className=&quot;max-w-7xl mx-auto&quot;></div>
          <div className=&quot;text-center mb-16&quot;></div>
            <h2 className=&quot;text-4xl font-bold text-white mb-4&quot;>Powerful Capabilities</h2>
            <p className=&quot;text-xl text-gray-300&quot;>Advanced features that set us apart from traditional CRM systems</p>
          </div>
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8&quot;></div>
            {capabilities.map((capability, index) => (
              <div key={index} className=&quot;cyber-card p-6&quot;></div>
                <div className=&quot;w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-4&quot;></div>
                  <capability.icon className=&quot;w-6 h-6 text-white&quot; />
                </div>
                <h3 className=&quot;text-xl font-semibold text-white mb-3&quot;>{capability.title}</h3>
                <p className=&quot;text-gray-300 mb-4&quot;>{capability.description}</p>
                <div className=&quot;text-cyan-400 font-semibold text-lg&quot;>{capability.stats}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className=&quot;py-16 px-4&quot;></section>
        <div className=&quot;max-w-7xl mx-auto&quot;></div>
          <div className=&quot;text-center mb-16&quot;></div>
            <h2 className=&quot;text-4xl font-bold text-white mb-4&quot;>What Our Customers Say</h2>
            <p className=&quot;text-xl text-gray-300&quot;>Real results from real businesses</p>
          </div>
          <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-8&quot;></div>
            {testimonials.map((testimonial, index) => (
              <div key={index} className=&quot;cyber-card p-6&quot;></div>
                <div className=&quot;flex items-center mb-4&quot;></div>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className=&quot;w-5 h-5 text-yellow-400 fill-current&quot; />
                  ))}
                </div>
                <p className=&quot;text-gray-300 mb-4 italic&quot;>&quot;{testimonial.content}&quot;</p>
                <div></div>
                  <div className=&quot;font-semibold text-white&quot;>{testimonial.name}</div>
                  <div className=&quot;text-sm text-gray-400&quot;>{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Pricing Section */}
      <section className=&quot;py-16 px-4 bg-slate-800/50&quot;></section>
        <div className=&quot;max-w-7xl mx-auto&quot;></div>
          <div className=&quot;text-center mb-16&quot;></div>
            <h2 className=&quot;text-4xl font-bold text-white mb-4&quot;>Simple, Transparent Pricing</h2>
            <p className=&quot;text-xl text-gray-300&quot;>Choose the plan that fits your business needs</p>
          </div>
          <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-8&quot;></div>
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'ring-2 ring-cyan-500' : ''}`}></div>
                {plan.popular && (
                  <div className=&quot;absolute -top-4 left-1/2 transform -translate-x-1/2&quot;></div>
                    <span className=&quot;bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold&quot;>
                      Most Popular
                    </span>
                  </div>
                )}
                <div className=&quot;text-center mb-6&quot;></div>
                  <h3 className=&quot;text-2xl font-bold text-white mb-2&quot;>{plan.name}</h3>
                  <div className=&quot;text-4xl font-bold text-cyan-400 mb-2&quot;></div>
                    {plan.price}
                    <span className=&quot;text-lg text-gray-400&quot;>{plan.period}</span>
                  </div>
                  <p className=&quot;text-gray-300&quot;>{plan.description}</p>
                </div>
                <ul className=&quot;space-y-3 mb-8&quot;>
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className=&quot;flex items-center text-gray-300&quot;>
                      <CheckCircle className=&quot;w-5 h-5 text-cyan-400 mr-3&quot; />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all ${
                  plan.popular
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700' 
                    : 'bg-slate-700 text-white hover:bg-slate-600'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className=&quot;py-16 px-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20&quot;></section>
        <div className=&quot;max-w-4xl mx-auto text-center&quot;></div>
          <h2 className=&quot;text-4xl font-bold text-white mb-6&quot;>Ready to Transform Your CRM?</h2>
          <p className=&quot;text-xl text-gray-300 mb-8&quot;>
            Join thousands of businesses using AI-powered CRM to boost sales, improve customer relationships, and drive growth.
          </p>
          <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;></div>
            <button className=&quot;cyber-button px-8 py-4 text-lg&quot;>
              Start Free Trial
            </button>
            <button className=&quot;cyber-button-outline px-8 py-4 text-lg&quot;>
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page;