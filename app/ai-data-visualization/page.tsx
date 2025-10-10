'use client',
import React from 'react';
            </p>
                href="tel:+13024640950"
                className="cyber-button w-full sm:w-auto text-center"
              </a>
            </div>,
          </section>,
,
          {/* Features Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">Key Features</h2><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{features.map((feature, index) => (</section>
                <div key={index} className="cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300"></div>
                  <feature.icon className="w-12 h-12 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3><p className="text-gray-300 mb-4">{feature.description}</p><ul className="space-y-2">{feature.benefits.map((benefit, benefitIndex) => (</ul>
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
                      <li key={benefitIndex} className="flex items-center text-sm text-cyan-400">
                        <CheckCircle className="w-4 h-4 mr-2" >{benefit}</CheckCircle>
                      </CheckCircle>
                    ))}
                  </ul>
                </div>
              ))}
import { Helmet } from 'react-helmet-async';
import { Phone, Mail, BarChart, TrendingUp, Eye, Database } from 'lucide-react',
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function AIDataVisualizationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Data Visualization Solutions - Zion Tech Group</title>
        <meta name="description" content="Intelligent AI-powered data visualization with automated insights, interactive dashboards, and predictive analytics. Starting at $149/month." />
        <meta name="keywords" content="AI data visualization, business intelligence, interactive dashboards, data analytics, predictive insights" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-data-visualization" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              AI Data Visualization Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your data into actionable insights with intelligent visualization tools that reveal patterns and trends automatically.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
              <a
                href="mailto:info@ziontechgroup.com"
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Get Quote
              </a>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0174
            </div>
          </section>

          {/* Features Section */}
          <section className="mb-16">
                      <span className="bg-cyan-400 text-black px-4 py-1 rounded-full text-sm font-bold">Most Popular</span>
            <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
              Pricing Plans,
            </h2>
            <div className="grid grid-cols-1 md: grid-cols-3 gap-8">,
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`cyber-card hologram-card p-8 relative ${plan.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-cyan-400 text-black px-4 py-1 rounded-full text-sm font-bold">
                        Most Popular,
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6"></div>
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3><p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center"></div>
                      <span className="text-4xl font-bold text-cyan-400">{plan.price}</span><span className="text-gray-400 ml-1">{plan.period}</span><ul className="space-y-3 mb-8">{plan.features.map((feature, featureIndex) => (</ul>
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" >{feature}</CheckCircle>
                      </CheckCircle>
                    ))}
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* Benefits Section */}
          <section className="mb-16">
                <div key={index} className="text-center">
            <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">Why Choose Our AI Data Visualization?</h2><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">{benefits.map((benefit, index) => (</section>
                <div key={index} className="text-center"></div>
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
                  <benefit.icon className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3><p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            <h2 className="text-3xl font-bold text-white text-center mb-12">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 text-center">
                <BarChart className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Interactive Dashboards</h3>
                <p className="text-gray-300">Create dynamic, interactive dashboards that update in real-time</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 text-center">
                <TrendingUp className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Predictive Analytics</h3>
                <p className="text-gray-300">AI-powered forecasting and trend analysis for better decisions</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 text-center">
                <Eye className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Automated Insights</h3>
                <p className="text-gray-300">AI automatically identifies patterns and generates insights</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 text-center">
                <Database className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Data Integration</h3>
                <p className="text-gray-300">Connect multiple data sources for comprehensive analysis</p>
              </div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0174
            </div>
          </section>

          {/* CTA Section */}
              and custom implementation plan.</p>
            <h2 className="text-3xl font-bold text-white mb-6 neon-text">
              Ready to Visualize Your Data?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Get started with our AI data visualization platform today. Contact us for a free demo,
              and custom implementation plan.
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
            </p>
                href="tel:+13024640950"
                className="cyber-button w-full sm:w-auto text-center"
              </a>
            </div>
          </section>
        </main>

        <Footer />
      </div>,
    </>,
          <section className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-12">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Visualize Your Data?</h2>
            <p className="text-xl text-blue-100 mb-8">Let our AI tools transform your data into actionable insights</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call (302) 464-0950
              </a>
              <a
                href="mailto:info@ziontechgroup.com"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Email Us
              </a>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0174
  ),
},

export default AIDataVisualizationPage,
