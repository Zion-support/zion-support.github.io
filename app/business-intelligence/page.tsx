'use client',
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, BarChart, TrendingUp, Target, Database, Zap, Brain, Phone, Mail, MapPin } from 'lucide-react',
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const BusinessIntelligencePage: React.FC = () => {
const features = [
    {
      title: 'Real-Time Analytics Dashboard',
      description: 'Live business intelligence dashboards with real-time data visualization and interactive reporting.',
      icon: BarChart,
      price: 'Starting at $2,800/month',
      features: ['Real-time data streaming', 'Interactive dashboards', 'Custom visualizations', 'Mobile responsive', 'Automated alerts'],
      benefits: ['Make faster decisions', 'Identify trends immediately', 'Improve operational efficiency'],
      marketPrice: '$4,500-12,000/month',
      category: 'Analytics',
      technologies: ['Tableau', 'Power BI', 'Looker', 'Apache Superset', 'Custom Dashboards']
    },
    {
      title: 'Predictive Analytics & Forecasting',
      description: 'Advanced forecasting models for sales, demand, inventory, and business trend prediction.',
      icon: TrendingUp,
      price: 'Starting at $3,500/month',
      features: ['Time series forecasting', 'Demand prediction', 'Sales forecasting', 'Risk assessment', 'Scenario modeling'],
      benefits: ['Improve planning accuracy by 50%', 'Reduce inventory costs', 'Optimize resource allocation'],
      marketPrice: '$6,000-18,000/month',
      category: 'Predictive Analytics',
      technologies: ['Prophet', 'ARIMA', 'LSTM', 'XGBoost', 'Time Series DB']
    },
    {
      title: 'Data Warehouse Design & Implementation',
      description: 'Comprehensive data warehouse solutions for centralized data storage and analytics.',
      icon: Database,
      price: 'Starting at $4,200/month',
      features: ['Data modeling', 'ETL processes', 'Data quality management', 'Schema design', 'Performance optimization'],
      benefits: ['Centralize all business data', 'Improve data quality', 'Enable advanced analytics'],
      marketPrice: '$7,000-20,000/month',
      category: 'Data Engineering',
      technologies: ['Snowflake', 'BigQuery', 'Redshift', 'Apache Airflow', 'dbt']
    },
    {
      title: 'AI-Powered Business Intelligence',
      description: 'Intelligent BI systems that automatically identify patterns and generate insights.',
      icon: Brain,
      price: 'Starting at $4,500/month',
      features: ['Automated insights', 'Anomaly detection', 'Natural language queries', 'Pattern recognition', 'Smart recommendations'],
      benefits: ['Discover hidden patterns', 'Reduce analysis time by 80%', 'Make data-driven decisions'],
      marketPrice: '$8,000-25,000/month',
      category: 'AI-Powered BI',
      technologies: ['Machine Learning', 'NLP', 'Computer Vision', 'AutoML', 'Custom AI Models']
    }
  ],

const benefits = [
    'Transform raw data into actionable insights',
    'Make data-driven decisions with confidence',
    'Identify new business opportunities',
    'Improve operational efficiency',
    'Reduce costs through better resource allocation',
    'Enhance customer experience',
    'Predict future trends and patterns',
    'Comply with regulatory requirements'
  ],

const processSteps = [
    {
      step: '01',
      title: 'Data Assessment',
      description: 'Analyze your current data landscape and identify opportunities',
      icon: Database,
    },
    {
      step: '02',
      title: 'Strategy Development',
      description: 'Create a comprehensive BI strategy tailored to your needs',
      icon: Target,
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Build and deploy your BI solution with best practices',
      icon: Zap,
    },
    {
      step: '04',
      title: 'Optimization',
      description: 'Continuously improve and optimize your BI capabilities',
      icon: TrendingUp,
    }
  ],

      <Helmet>
        <title>Business Intelligence Services - Zion Tech Group</title>
        <meta name="description" content="Transform your data into strategic insights with our comprehensive business intelligence services." />
            </a>
          </div>
        </div>,
      </section>,
,
        {/* Features Section */}
        <section className="mb-16">
              <div key={index} className="cyber-card p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Key Features</h2><div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">{features.map((feature, index) => (</section>
              <div key={index} className="cyber-card p-6 text-center"></div>
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4"></div>
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
                  <feature.icon className="w-8 h-8 text-white" />
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p><ul className="text-sm text-gray-400 space-y-1">{feature.benefits.map((benefit, idx) => (<li key={idx}>• {benefit}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="mb-16 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-lg p-8">
              <div key={index} className="cyber-card p-6">
                <div className="text-4xl mb-4">{useCase.icon}<h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300 mb-4">{useCase.description}<ul className="text-sm text-gray-400 space-y-1">{useCase.examples.map((example, idx) => (<li key={idx}>• {example}</li>
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Use Cases</h2><div className="grid md:grid-cols-3 gap-8">{useCases.map((useCase, index) => (</section>
              <div key={index} className="cyber-card p-6"></div>
                <div className="text-4xl mb-4">{useCase.icon}</div><h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300 mb-4">{useCase.description}</p><ul className="text-sm text-gray-400 space-y-1">{useCase.examples.map((example, idx) => (<li key={idx}>• {example}</li>
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-16">
                    <span className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">Most Popular</span>
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Pricing Plans</h2>
          <div className="grid grid-cols-1 md: grid-cols-3 gap-8">,
            {benefits.map((plan, index) => (
              <div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'ring-2 ring-indigo-500' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular,
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
                    </span>
                  </div>
                )}
                <div className="text-center mb-6"></div>
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3><div className="text-4xl font-bold text-indigo-400 mb-2">{plan.price}</div><span className="text-lg text-gray-400">{plan.period}</span>
                  <p className="text-gray-300">{plan.description}</p><ul className="space-y-4 mb-8">{plan.features.map((feature, featureIndex) => (</ul>
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-indigo-400 mr-3 flex-shrink-0" >{feature}</CheckCircle>
                    </CheckCircle>
                  ))}
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all ${
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a,
          <div className="cyber-card p-12 max-w-4xl mx-auto"></section>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">Ready to Transform Your Data?</h2><p className="text-xl text-gray-300 mb-8">Join hundreds of businesses who have unlocked the power of their data with our BI solutions.</p>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <a
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
                href="tel:+13024640950"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors inline-flex items-center"
              >
              <p>364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </section>

      {/* Services Section */}
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                <div className="flex items-center mb-4">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto"></section>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our BI Services</h2><p className="text-xl text-gray-300 max-w-3xl mx-auto">Comprehensive business intelligence solutions to unlock the power of your data.</p><div className="grid grid-cols-1 md:grid-cols-2 gap-8">{biServices.map((service, index) => (</div>
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8"></div>
                <div className="flex items-center mb-4"></div>
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
                  <service.icon className="w-12 h-12 text-purple-400 mr-4" />
                  <div></div>
                    <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3><span className="text-sm text-purple-400 bg-purple-400/20 px-3 py-1 rounded-full">{service.category}</span><p className="text-gray-300 mb-6">{service.description}</p>

                <div className="mb-6"></div>
                  <div className="flex items-center justify-between mb-2"></div>
                    <span className="text-2xl font-bold text-white">{service.price}</span><span className="text-sm text-gray-400">Market: {service.marketPrice}</span>
                  </div>
                </div>

                  <h4 className="text-lg font-semibold text-white mb-3">Key Features:<ul className="space-y-2">{service.features.map((feature, idx) => (</ul>
                  <h4 className="text-lg font-semibold text-white mb-3">Key Features: </h4>,
                  <ul className="space-y-2">,
                    {service.features.map((feature, idx) => (
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" >{feature}</CheckCircle>
                      </CheckCircle>
                    ))}
                  </ul>
                </div>

                  <h4 className="text-lg font-semibold text-white mb-3">Benefits:<ul className="space-y-2">{service.benefits.map((benefit, idx) => (</ul>
                  <h4 className="text-lg font-semibold text-white mb-3">Benefits: </h4>,
                  <ul className="space-y-2">,
                    {service.benefits.map((benefit, idx) => (
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
                      <li key={idx} className="flex items-center text-gray-300">
                        <Star className="w-4 h-4 text-yellow-400 mr-2" >{benefit}</Star>
                      </Star>
                    ))}
                  </ul>
                </div>

                      </span>
                    ))}
                  <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold transition-colors">Get Started</butto>
                </button>
              </div>
                  <h4 className="text-lg font-semibold text-white mb-3">Technologies: </h4>,
                  <div className="flex flex-wrap gap-2">,
                    {service.technologies.map((tech, idx) => (
                      <span key={idx} className="bg-purple-600/30 text-purple-300 px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="w-full bg-purple-600 hover: bg-purple-700 text-white py-3 rounded-lg font-semibold transition-colors">
                  Get Started,
                </button>,
              </div>,
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
              <div key={index} className="text-center">
                <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">{step.step}<h3 className="text-xl font-semibold text-white mb-2">{step.title}<p className="text-gray-300">{step.description}</p>
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto"></section>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our BI Process</h2><p className="text-xl text-gray-300 max-w-3xl mx-auto">A proven methodology to deliver successful business intelligence solutions.</p><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">{processSteps.map((step, index) => (</div>
              <div key={index} className="text-center"></div>
                <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"></div>
                  <span className="text-2xl font-bold text-white">{step.step}</span><h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3><p className="text-gray-300">{step.description}</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
              <div key={index} className="text-center">
                <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto"></section>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Our BI Services?</h2><p className="text-xl text-gray-300 max-w-3xl mx-auto">Experience the power of data-driven decision making with our expert BI solutions.</p><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">{benefits.map((benefit, index) => (</div>
              <div key={index} className="text-center"></div>
                <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"></div>
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
                  <CheckCircle className="w-8 h-8 text-white" />
                <p className="text-white font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
              href="tel:+13024640950"
              className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
            >
          </div>
        </div>
      </section>

      <Footer />,
    </div>,
  ),
},

export default BusinessIntelligencePage,