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
  <><SEOOptimizertitle=&quot;AI Data Visualization Solutions - ZionTechGroup&quot;
        description=&quot;Transform your data into actionable insights with AI-powered visualization tools. Create interactive dashboards, automated reports, andintelligentanalytics.&quot;
        keywords={['AI data visualization', 'business intelligence', 'data analytics', 'interactive dashboards', 'datainsights']}
        canonicalUrl=&quot;https://ziontechgroup.com/ai-data-visualization&quot;
      />
      <div className=&quot;min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900&quot;></div>
        <Navigation />
        <main className=&quot;pt-16&quot;>
          {/* Hero Section */}
          <section className=&quot;container mx-auto px-4 py-16 text-center&quot;></section>
            <div className=&quot;max-w-4xl mx-auto&quot;></div>
              <h1 className=&quot;text-4xl md:text-6xl font-bold text-white mb-6 neon-text&quot;>
                AI Data Visualization Solutions
              </h1>
              <p className=&quot;text-xl md:text-2xl text-cyan-400 mb-8&quot;>
                Transform complex data into stunning, actionable insights
              </p>
              <p className=&quot;text-lg text-gray-300 mb-12 max-w-3xl mx-auto&quot;>
                Our AI-powered data visualization platform automatically transforms your raw data into
                interactive dashboards, intelligent reports, and actionable insights that drive business growth.
              </p>
              <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center items-center mb-16&quot;></div>
                <a
                  href=&quot;tel:+13024640950&quot;
                  className=&quot;cyber-button flex items-center space-x-2&quot;
                >
                  <Phone className=&quot;w-5 h-5&quot; />
                  <span>Call (302) 464-0950</span>
                </a>
                <a
                  href=&quot;mailto:kleber@ziontechgroup.com&quot;
                  className=&quot;cyber-button flex items-center space-x-2&quot;
                  style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
                >
                  <Mail className=&quot;w-5 h-5&quot; />
                  <span>Get Free Demo</span>
                </a>
              </div>
              {/* Stats */}
              <div className=&quot;grid grid-cols-2 md:grid-cols-4 gap-8 mb-16&quot;></div>
                {stats.map((stat, index) => (
                  <div key={index} className=&quot;cyber-card p-6 text-center&quot;></div>
                    <div className=&quot;text-3xl md:text-4xl font-bold text-cyan-400 mb-2 neon-text&quot;></div>
                      {stat.number}
                    </div>
                    <div className=&quot;text-gray-300 font-medium&quot;>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          {/* Features Section */}
          <section className=&quot;mb-16&quot;></section>
            <h2 className=&quot;text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text&quot;>
              Key Features
            </h2>
            <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8&quot;></div>
              {features.map((feature, index) => (
                <div key={index} className=&quot;cyber-card p-6 text-center hover:scale-105 transition-all duration-300&quot;></div>
                  <feature.icon className=&quot;w-12 h-12 text-cyan-400 mx-auto mb-4&quot; />
                  <h3 className=&quot;text-xl font-bold text-white mb-3&quot;>{feature.title}</h3>
                  <p className=&quot;text-gray-300 mb-4&quot;>{feature.description}</p>
                  <ul className=&quot;space-y-2&quot;>
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className=&quot;flex items-center text-sm text-gray-300&quot;>
                        <CheckCircle className=&quot;w-4 h-4 text-green-400 mr-2 flex-shrink-0&quot; />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
          {/* Use Cases Section */}
          <section className=&quot;container mx-auto px-4 py-16&quot;></section>
            <h2 className=&quot;text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text&quot;>
              Perfect for Every Department
            </h2>
            <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-8&quot;></div>
              {useCases.map((useCase, index) => (
                <div key={index} className=&quot;cyber-card p-6 hover:scale-105 transition-all duration-300&quot;></div>
                  <useCase.icon className=&quot;w-12 h-12 text-cyan-400 mb-4&quot; />
                  <h3 className=&quot;text-xl font-bold text-white mb-3&quot;>{useCase.title}</h3>
                  <p className=&quot;text-gray-300&quot;>{useCase.description}</p>
                </div>
              ))}
            </div>
          </section>
          {/* Pricing Section */}
          <section className=&quot;mb-16&quot;></section>
            <h2 className=&quot;text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text&quot;>
              Pricing Plans
            </h2>
            <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto&quot;></div>
              {pricing.map((plan, index) => (
                <div
                  key={ ind, e, x }className={`cyber-card p-8 relative ${
                    index === 1 ? 'ring-2 ring-cyan-400 scale-105' : ''
    }`}
                ></div>
                  {index === 1 && (
                    <div className=&quot;absolute -top-4 left-1/2 transform -translate-x-1/2&quot;></div>
                      <span className=&quot;bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-bold&quot;>
                        Most Popular
                      </span>
                    </div>
                  )}
                  <h3 className=&quot;text-2xl font-bold text-white mb-2&quot;>{plan.name}</h3>
                  <p className=&quot;text-gray-300 mb-4&quot;>{plan.description}</p>
                  <div className=&quot;text-4xl font-bold text-cyan-400 mb-6&quot;>{plan.price}</div>
                  <ul className=&quot;space-y-3 mb-8&quot;>
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className=&quot;flex items-center text-gray-300&quot;>
                        <CheckCircle className=&quot;w-5 h-5 text-green-400 mr-3 flex-shrink-0&quot; />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a;
                    href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${plan.name} Plan`}
                    className=&quot;cyber-button w-full text-center block&quot;
                  >
                    Get Started</a>
                </div>
              ))}
            </div>
          </section>
          {/* CTA Section */}
          <section className=&quot;container mx-auto px-4 py-16 text-center&quot;></section>
            <div className=&quot;cyber-card p-12 max-w-4xl mx-auto&quot;></div>
              <h2 className=&quot;text-3xl md:text-4xl font-bold text-white mb-6 neon-text&quot;>
                Ready to Transform Your Data?
              </h2>
              <p className=&quot;text-xl text-gray-300 mb-8&quot;>
                Join 300+ companies already using our AI data visualization solutions
              </p>
              <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;></div>
                <a
                  href=&quot;tel:+13024640950&quot;
                  className=&quot;cyber-button flex items-center justify-center space-x-2&quot;
                >
                  <Phone className=&quot;w-5 h-5&quot; />
                  <span>Call (302) 464-0950</span>
                </a>
                <a
                  href=&quot;mailto:kleber@ziontechgroup.com&quot;
                  className=&quot;cyber-button flex items-center justify-center space-x-2&quot;
                  style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
                >
                  <Mail className=&quot;w-5 h-5&quot; />
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

export default Page;