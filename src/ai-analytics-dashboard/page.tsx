import { Star, Phone } from 'lucide-react';
'use client'
import { Brain, TrendingUp } from 'lucide-react'
import React, { useState, useEffect } from 'react'

import { BarChart3 } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import SEOOptimizer from '../components/SEOOptimizer'
import { CheckCircle, Star, Phone } from 'lucide-react'

const AIAnalyticsDashboardPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

const Page = () => {
  return (
  <SEOOptimizertitle=&quot;AI Analytics Dashboard - Intelligent Business Intelligence | ZionTechGroup&quot;
        description=&quot;Transform your data into actionable insights with AI-powered analytics dashboard. Get predictive insights, real-time monitoring, andintelligentrecommendations.&quot;
        keywords={['AI analytics', 'business intelligence', 'data visualization', 'predictive analytics', 'dashboard', 'datainsights']}
        canonicalUrl=&quot;https://ziontechgroup.com/ai-analytics-dashboard&quot;
      />
      <div className=&quot;min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg&quot;></div>
        <Navigation />
        {/* Hero Section */}
        <section className=&quot;relative py-20 px-4&quot;></section>
          <div className=&quot;container mx-auto max-w-7xl&quot;></div>
            <div className=&quot;text-center mb-16&quot;></div>
              <div className=&quot;inline-flex items-center gap-2 bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6&quot;></div>
                <BarChart3 className=&quot;w-4 h-4&quot; />
                AI-Powered Business Intelligence
              </div>
              <h1 className=&quot;text-5xl md:text-7xl font-bold text-white mb-6 cyber-text-3d neon-pulse&quot;>
                AI Analytics Dashboard
              </h1>
              <p className=&quot;text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed&quot;>
                Transform your data into actionable insights with AI-powered analytics. Get predictive insights,
                real-time monitoring, and intelligent recommendations that drive business growth.
              </p>
              <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center items-center&quot;></div>
                <a,
href=&quot;#pricing&quot;
                  className=&quot;cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300&quot;
                >
                  Start Free Trial
                </a>
                <a,
href=&quot;#demo&quot;
                  className=&quot;border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-slate-900 transition-all duration-300&quot;
                >
                  Watch Demo
                </a>
              </div>
            </div>
            {/* Key Stats */}
            <div className=&quot;grid grid-cols-1 md:grid-cols-4 gap-6 mb-16&quot;></div>
              <div className=&quot;quantum-card p-6 text-center energy-pulse&quot;></div>
                <div className=&quot;text-3xl font-bold text-blue-400 mb-2&quot;>45%</div>
                <div className=&quot;text-gray-300&quot;>Revenue Increase</div>
              </div>
              <div className=&quot;quantum-card p-6 text-center energy-pulse&quot;></div>
                <div className=&quot;text-3xl font-bold text-purple-400 mb-2&quot;>60%</div>
                <div className=&quot;text-gray-300&quot;>Productivity Boost</div>
              </div>
              <div className=&quot;quantum-card p-6 text-center energy-pulse&quot;></div>
                <div className=&quot;text-3xl font-bold text-cyan-400 mb-2&quot;>30%</div>
                <div className=&quot;text-gray-300&quot;>Conversion Lift</div>
              </div>
              <div className=&quot;quantum-card p-6 text-center energy-pulse&quot;></div>
                <div className=&quot;text-3xl font-bold text-green-400 mb-2&quot;>85%</div>
                <div className=&quot;text-gray-300&quot;>Accuracy Rate</div>
              </div>
            </div>
          </div>
        </section>
        {/* Features Section */}
        <section className=&quot;py-20 px-4&quot; id=&quot;features&quot;></section>
          <div className=&quot;container mx-auto max-w-7xl&quot;></div>
            <div className=&quot;text-center mb-16&quot;></div>
              <h2 className=&quot;text-4xl md:text-5xl font-bold text-white mb-6 neon-text&quot;>
                Powerful AI Features
              </h2>
              <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
                Leverage cutting-edge AI technology to unlock insights from your data
              </p>
            </div>
            <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8&quot;></div>
              {features.map((feature, index) => (
                <div key={index} className=&quot;cyber-card p-6 hover:scale-105 transition-all duration-300&quot;></div>
                  <div className=&quot;w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6&quot;></div>
                    <feature.icon className=&quot;w-8 h-8 text-white&quot; />
                  </div>
                  <h3 className=&quot;text-xl font-bold text-white mb-4&quot;>{feature.title}</h3>
                  <p className=&quot;text-gray-300 mb-4&quot;>{feature.description}</p>
                  <ul className=&quot;space-y-2&quot;>
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className=&quot;flex items-center text-sm text-blue-400&quot;>
                        <CheckCircle className=&quot;w-4 h-4 mr-2 flex-shrink-0&quot; />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Integrations Section */}
        <section className=&quot;py-20 px-4 bg-slate-800/50&quot;></section>
          <div className=&quot;container mx-auto max-w-7xl&quot;></div>
            <div className=&quot;text-center mb-16&quot;></div>
              <h2 className=&quot;text-4xl md:text-5xl font-bold text-white mb-6 neon-text&quot;>
                Seamless Integrations
              </h2>
              <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
                Connect all your data sources in one powerful dashboard
              </p>
            </div>
            <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8&quot;></div>
              {integrations.map((integration, index) => (
                <div key={index} className=&quot;cyber-card p-6 text-center hover:scale-105 transition-all duration-300&quot;></div>
                  <div className=&quot;text-6xl mb-4&quot;>{integration.icon}</div>
                  <h3 className=&quot;text-xl font-bold text-white mb-2&quot;>{integration.name}</h3>
                  <p className=&quot;text-gray-300 text-sm&quot;>{integration.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Pricing Section */}
        <section className=&quot;py-20 px-4&quot; id=&quot;pricing&quot;></section>
          <div className=&quot;container mx-auto max-w-7xl&quot;></div>
            <div className=&quot;text-center mb-16&quot;></div>
              <h2 className=&quot;text-4xl md:text-5xl font-bold text-white mb-6 neon-text&quot;>
                Simple, Transparent Pricing
              </h2>
              <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
                Choose the plan that fits your analytics needs
              </p>
            </div>
            <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-8&quot;></div>
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'ring-2 ring-blue-400 scale-105' : ''}`}></div>
                  {plan.popular && (
                    <div className=&quot;absolute -top-4 left-1/2 transform -translate-x-1/2&quot;></div>
                      <div className=&quot;bg-blue-400 text-slate-900 px-4 py-2 rounded-full text-sm font-semibold&quot;></div>
                        Most Popular
                      </div>
                    </div>
                  )}
                  <div className=&quot;text-center mb-8&quot;></div>
                    <h3 className=&quot;text-2xl font-bold text-white mb-2&quot;>{plan.name}</h3>
                    <p className=&quot;text-gray-300 mb-4&quot;>{plan.description}</p>
                    <div className=&quot;text-4xl font-bold text-blue-400 mb-2&quot;>{plan.price}</div>
                    <div className=&quot;text-gray-400&quot;>per month</div>
                  </div>
                  <ul className=&quot;space-y-4 mb-8&quot;>
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className=&quot;flex items-center text-gray-300&quot;>
                        <CheckCircle className=&quot;w-5 h-5 text-green-400 mr-3 flex-shrink-0&quot; />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a,
href={`mailto:kleber@ziontechgroup.com?subject=Interest in AI Analytics Dashboard ${plan.name} Plan`}
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                      plan.popular
                        ? 'bg-blue-400 text-slate-900 hover:bg-blue-300'
                        : 'bg-slate-700 text-white hover:bg-slate-600'
                    }`}
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Testimonials Section */}
        <section className=&quot;py-20 px-4 bg-slate-800/50&quot;></section>
          <div className=&quot;container mx-auto max-w-7xl&quot;></div>
            <div className=&quot;text-center mb-16&quot;></div>
              <h2 className=&quot;text-4xl md:text-5xl font-bold text-white mb-6 neon-text&quot;>
                What Our Customers Say
              </h2>
              <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
                Join thousands of businesses already using AI Analytics Dashboard
              </p>
            </div>
            <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-8&quot;></div>
              {testimonials.map((testimonial, index) => (
                <div key={index} className=&quot;cyber-card p-6&quot;></div>
                  <div className=&quot;flex items-center mb-4&quot;></div>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className=&quot;w-5 h-5 text-yellow-400 fill-current&quot; />
                    ))}
                  </div>
                  <p className=&quot;text-gray-300 mb-6 italic&quot;>&quot;{testimonial.content}&quot;</p>
                  <div></div>
                    <div className=&quot;font-semibold text-white&quot;>{testimonial.name}</div>
                    <div className=&quot;text-blue-400 text-sm&quot;>{testimonial.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className=&quot;py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600&quot;></section>
          <div className=&quot;container mx-auto max-w-4xl text-center&quot;></div>
            <h2 className=&quot;text-4xl md:text-5xl font-bold text-white mb-6&quot;>
              Ready to Transform Your Data?
            </h2>
            <p className=&quot;text-xl text-blue-100 mb-8&quot;>
              Start your free trial today and experience the power of AI-driven analytics
            </p>
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center items-center&quot;></div>
              <a,
href=&quot;mailto:kleber@ziontechgroup.com?subject=AI Analytics Dashboard Free Trial Request&quot;
                className=&quot;bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors&quot;
              >
                Start Free Trial
              </a>
              <a,
href=&quot;tel:+13024640950&quot;
                className=&quot;flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all&quot;
              >
                <Phone className=&quot;w-5 h-5&quot; />
                +1 302 464 0950
              </a>
            </div>
            <div className=&quot;mt-8 text-blue-100&quot;></div>
              <p>Contact: kleber@ziontechgroup.com | Address: 364 E Main St STE 1008, Middletown, DE 19709</p>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  )
}

export default AIAnalyticsDashboardPage
