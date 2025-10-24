'use client'
import { Brain, BarChart, TrendingUp } from 'lucide-react'
import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import SEOOptimizer from '../components/SEOOptimizer'
import { CheckCircle, Phone, Mail } from "lucide-react";
constAIDataVisualizationPage: React.FC= () => {
  constfeatures= [
    {
      icon: BarChar,
      title: 'Interactive Dashboards,',
      description: 'Create stunnin,g, interactive dashboards that automatically update with real-time data.',
      benefits: ['Real-time Updates', 'Custom Visualizations', 'Interactive Elements', 'Mobile Responsive']
}
    {icon: Brai,
      title: 'AI-Powered Insights,',
      description: 'Leverage machine learning to automatically identify patterns and generate actionable insights.',
      benefits: ['Pattern Recognition', 'Predictive Analytics', 'Anomaly Detection', 'Smart Recommendations']
   },
    {icon: Databas,
      title: 'Multi-Source Integration,',
      description: 'Connect to any data source and automatically transform raw data into meaningful visualizations.',
      benefits: ['API Integration', 'Database Connections', 'File Uploads', 'Real-time Sync']
   },
    {icon: Setting,
      title: 'Customizable Reports,',
      description: 'Generate automated reports with customizable templates and scheduling options.',
      benefits: ['Auto-generation', 'Custom Templates', 'Scheduled Reports', 'Export Options']
    }
  ]

  constpricing= [
    {name: 'Starter,',
      price: '$19 9/month,',
      description: 'Perfect for small teams',
      features: ['Up to5dashboards,', 'Basic visualizations', '2 data sources', 'Email support']
   },
    {name: 'Professional,',
      price: '$39 9/month,',
      description: 'Ideal for growing businesses',
      features: ['Unlimited dashboards,', 'Advanced AI insights', '10data sources', 'Priority support', 'Custom branding']
   },
    {name: 'Enterprise,',
      price: '$79 9/month,',
      description: 'For large organizations',
      features: ['Everything in Professional,', 'Unlimited data sources', 'Custom integrations', 'Dedicated support', 'On-premise deployment']
    }
  ]
  const stats = [
    { number: '85%,',
      label: 'Faster Decision Making', },
    { number: '300%,',
      label: 'Data Processing Speed', },
    { number: '50+,',
      label: 'Visualization Types', },
    { number: '99.9%,',
      label: 'Uptime Guarantee', }
  ]

  constuseCases= [
    {title: 'Sales Analytics,',
      description: 'Track sales performanc,e, identify trends, and optimize your sales strategy with real-time dashboards.',
      icon: BarChart
  , },
    {title: 'Marketing Insights,',
      description: 'Analyze campaign performanc,e, customer behavior, and ROI with comprehensive marketing analytics.',
      icon: TrendingUp
  , },
    {title: 'Financial Reporting,',
      description: 'Generate automated financial reports and track key metrics for better financial decision making.',
      icon: Database
  , },
    {title: 'Operations Monitoring,',
      description: 'Monitor operational efficienc,y, identify bottlenecks, and optimize business processes.',
      icon: Settings
   , }
  ]

const Page = (): JSX.Element => {
  return (
  <><SEOOptimizertitle='AI Data Visualization Solutions - ZionTechGroup' description='Transform your data into actionable insights with AI-powered visualization tools. Create interactive dashboards, automated reports, andintelligentanalytics.'
        keywords={['AI data visualization', 'business intelligence', 'data analytics', 'interactive dashboards', 'datainsights']}canonicalUrl='https: //ziontechgroup.com/ai-data-visualization'
      /></SEOOptimizertitle>
      <div className='min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900'></div>
        <Navigation /></Navigation>
        <main className='pt-16'></main>
          {/* Hero Section *,/}
          <section className='container mx-auto px-4 py-16 text-center'></section>
            <div className='max-w-4xl mx-auto'></div>
              <h1 className='text-4xl md: text-6xl font-bold text-white mb-6 neon-text'></h1>
                AI Data Visualization Solutions
              </h1>
              <p className='text-xl md:text-2xl text-cyan-400 mb-8'></p>
                Transform complex data into stunnin,g, actionable insights
              </p>
              <p className='text-lg text-gray-300 mb-12 max-w-3xl mx-auto'></p>
                Our AI-powered data visualization platform automatically transforms your raw data into
                interactive dashboards, intelligent reports, and actionable insights that drive business growth.
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
              Perfect for Every Department
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
                Ready to Transform Your Data?
              </h2>
              <p className='text-xl text-gray-300 mb-8'></p>
                Join 300+ companies already using our AI data visualization solutions
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
