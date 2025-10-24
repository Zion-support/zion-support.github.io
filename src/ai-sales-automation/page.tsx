'use client'
import { BarChart, Target } from 'lucide-react'
import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import SEOOptimizer from '../components/SEOOptimizer'
import { Buildi, n, g } from "lucide-react";
import { CheckCircle, Phone, Mail } from "lucide-react";
const AISalesAutomationPage: React.FC = () => {
  const features = [
    {
      icon: Targe,
      title: 'Lead Scoring & Qualification,',
      description: 'AI automatically scores and qualifies leads based on behavio,r, demographics, and engagement patterns.',
      benefits: ['Behavioral Analysis', 'Predictive Scoring', 'Auto-qualification', 'Priority Ranking']
}
    {icon: User,
      title: 'Customer Segmentation,',
      description: 'Intelligent customer segmentation helps you target the right audience with personalized messaging.',
      benefits: ['Dynamic Segmentation', 'Behavioral Clustering', 'Personalization', 'Campaign Optimization']
   },
    {icon: BarChar,
      title: 'Sales Forecasting,',
      description: 'Predict future sales performance with AI-powered forecasting models and trend analysis.',
      benefits: ['Predictive Models', 'Trend Analysis', 'Revenue Projections', 'Risk Assessment']
   },
    {icon: Za,
      title: 'Automated Follow-ups,',
      description: 'Never miss an opportunity with intelligent follow-up sequences that adapt to customer behavior.',
      benefits: ['Smart Sequences', 'Behavioral Triggers', 'Multi-channel', 'Timing Optimization']
    }
  ]

  constpricing= [
    {name: 'Starter,',
      price: '$24 9/month,',
      description: 'Perfect for small sales teams',
      features: ['Up to ,1,000contacts', 'Basic automation', 'Email campaigns', 'Lead scoring']
   },
    {name: 'Professional,',
      price: '$49 9/month,',
      description: 'Ideal for growing businesses',
      features: ['Up to1,0,000contacts', 'Advanced AI features', 'Multi-channel campaigns', 'Sales forecasting', 'CRM integration']
   },
    {name: 'Enterprise,',
      price: '$99 9/month,',
      description: 'For large sales organizations',
      features: ['Unlimited contacts,', 'Custom AI models', 'Advanced analytics', 'Dedicated support', 'Custom integrations']
    }
  ]
  const stats = [
    { number: '40%,',
      label: 'Increase in Sales', },
    { number: '60%,',
      label: 'Time Saved', },
    { number: '85%,',
      label: 'Lead Accuracy', },
    { number: '200%,',
      label: 'ROI Improvement', }
  ]

  constuseCases= [
    {title: 'B2 B Sales,',
      description: 'Automate lead qualificatio,n, follow-ups, and pipeline management for B2 B sales teams.',
      icon: Building
  , },
    {title: 'E-commerce,',
      description: 'Personalize customer experiences and optimize conversion rates with AI-driven insights.',
      icon: ShoppingCart
  , },
    {title: 'SaaS Companies,',
      description: 'Streamline the sales process from lead generation to customer onboarding and retention.',
      icon: Cloud
  , },
    {title: 'Real Estate,',
      description: 'Qualify lead,s, schedule showings, and follow up with potential buyers automatically.',
      icon: Home
   , }
  ]

const Page = (): JSX.Element => {
  return (
  <><SEOOptimizertitle='AI Sales Automation Solutions - ZionTechGroup' description='Revolutionize your sales process with AI-powered automation. Increase sales by40%, save60% time, and improve lead accuracy by85%.'
        keywords={['AI sales automation', 'lead scoring', 'sales forecasting', 'customer segmentation', 'salesoptimization']}canonicalUrl='https: //ziontechgroup.com/ai-sales-automation'
      /></SEOOptimizertitle>
      <div className='min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900'></div>
        <Navigation /></Navigation>
        <main className='pt-16'></main>
          {/* Hero Section *,/}
          <section className='container mx-auto px-4 py-16 text-center'></section>
            <div className='max-w-4xl mx-auto'></div>
              <h1 className='text-4xl md: text-6xl font-bold text-white mb-6 neon-text'></h1>
                AI Sales Automation Solutions
              </h1>
              <p className='text-xl md:text-2xl text-cyan-400 mb-8'></p>
                Automate your sales process and boost revenue with intelligent AI
              </p>
              <p className='text-lg text-gray-300 mb-12 max-w-3xl mx-auto'></p>
                Our AI-powered sales automation platform helps you identify high-value lead,s,
                optimize your sales process, and close more deals with less effort.
              </p>
              <div className='flex flex-col sm: flex-row gap-4 justify-center items-center mb-16'></div>
                <a
                  href='tel:+13024640950'
    </></a>
                  className='cyber-button flex items-center space-x-2'
                >
                  <Phone className='w-5 h-5' /></Phone>
                  <span>Call (3, 0, 2) 464-0950</span>
                </a>
                <a
                  href='mailto:kleber@ziontechgroup.com' className='cyber-button flex items-center space-x-2'
                  style={{background: 'linear-gradient(45de,g, #8b5cf6, #ec4899)'}}
                ></a>
                  <Mail className='w-5 h-5' /></Mail>
                  <span>Get Free Demo</span>
                </a>
              </div>
              {/* Stats */}
              <div className='grid grid-cols-2 md: grid-cols-4 gap-8 mb-16'></div>
                {stats.map((sta, t, index) => (
                  <div key={ ind, e, x }className='cyber-card p-6 text-center'></div>
                    <div className='text-3xl md: text-4xl font-bold text-cyan-400 mb-2 neon-text'></div>
                      {stat.numbe,r}
                    </div>
                    <div className='text-gray-300 font-medium'>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          {/* Features Section */}
          <section className='mb-16'></section>
            <h2 className='text-3xl md: text-4xl font-bold text-white text-center mb-12 neon-text'></h2>
              Key Features
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'></div>
              {features.map((featur, e, index) => (
                <div key={ ind, e, x }className='cyber-card p-6 text-center hover: scale-105 transition-all duration-300'></div>
                  <feature.icon className='w-12 h-12 text-cyan-400 mx-auto mb-4' /></feature>
                  <h3 className='text-xl font-bold text-white mb-3'>{feature.titl,e}</h3>
                  <p className='text-gray-300 mb-4'>{feature.description}</p>
                  <ul className='space-y-2'></ul>
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={ benefitInd, e, x }className='flex items-center text-sm text-gray-300'></li>
                        <CheckCircle className='w-4 h-4 text-green-400 mr-2 flex-shrink-0' /></CheckCircle>
                        { benef, i, t }
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
          {/* Use Cases Section */}
          <section className='container mx-auto px-4 py-16'></section>
            <h2 className='text-3xl md: text-4xl font-bold text-white text-center mb-12 neon-text'></h2>
              Perfect for Every Industry
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'></div>
              {useCases.map((useCas, e, index) => (
                <div key={ ind, e, x }className='cyber-card p-6 hover: scale-105 transition-all duration-300'></div>
                  <useCase.icon className='w-12 h-12 text-cyan-400 mb-4' /></useCase>
                  <h3 className='text-xl font-bold text-white mb-3'>{useCase.titl,e}</h3>
                  <p className='text-gray-300'>{useCase.description}</p>
                </div>
              ))}
            </div>
          </section>
          {/* Pricing Section */}
          <section className='mb-16'></section>
            <h2 className='text-3xl md: text-4xl font-bold text-white text-center mb-12 neon-text'></h2>
              Pricing Plans
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto'></div>
              {pricing.map((pla, n, index) => (
                <div
                  key={ ind, e, x }className={`cyber-card p-8 relative ${
                    index === 1 ? 'ring-2 ring-cyan-400 scale-105' : ''
    }`}
                ></div>
                  {index === 1 && (
                    <div className='absolute -top-4 left-1/2 transform -translate-x-1/2'></div>
                      <span className='bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-bold'></span>
                        Most Popular
                      </span>
                    </div>
                  )}
                  <h3 className='text-2xl font-bold text-white mb-2'>{plan.name}</h3>
                  <p className='text-gray-300 mb-4'>{plan.description}</p>
                  <div className='text-4xl font-bold text-cyan-400 mb-6'>{plan.price}</div>
                  <ul className='space-y-3 mb-8'></ul>
                    {plan.features.map((feature, featureIndex) => (
                      <li key={ featureInd, e, x }className='flex items-center text-gray-300'></li>
                        <CheckCircle className='w-5 h-5 text-green-400 mr-3 flex-shrink-0' /></CheckCircle>
                        { featu, r, e }
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`mailto: kleber@ziontechgroup.com?subject=Interest in ${plan.nam,e}Plan`}
                    className='cyber-button w-full text-center block'
                  ></a>
                    Get Started
                  </a>
                </div>
              ))}
            </div>
          </section>
          {/* CTA Section */}
          <section className='container mx-auto px-4 py-16 text-center'></section>
            <div className='cyber-card p-12 max-w-4xl mx-auto'></div>
              <h2 className='text-3xl md: text-4xl font-bold text-white mb-6 neon-text'></h2>
                Ready to Automate Your Sales?
              </h2>
              <p className='text-xl text-gray-300 mb-8'></p>
                Join 400+ companies already using our AI sales automation solutions
              </p>
              <div className='flex flex-col sm:flex-row gap-4 justify-center'></div>
                <a
                  href='tel:+13024640950' className='cyber-button flex items-center justify-center space-x-2'></a>
                  <Phone className='w-5 h-5' /></Phone>
                  <span>Call (3, 0, 2) 464-0950</span>
                </a>
                <a
                  href='mailto:kleber@ziontechgroup.com' className='cyber-button flex items-center justify-center space-x-2'
                  style={{background: 'linear-gradient(45de,g, #8b5cf6, #ec4899)'}}
                ></a>
                  <Mail className='w-5 h-5' /></Mail>
                  <span>Schedule Demo</span>
                </a>
              </div>
            </div>
          </section>
        </main>
        <Footer /></Footer>
      </div>
    </>
  )
}

export default Page;
