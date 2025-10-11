'use client'
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BarChart, TrendingUp, PieChart, Target, CheckCircle, ArrowRight } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AnalyticsDashboardPage: React.FC = () => {
  
  const features = [
    {
      icon: BarChart,
      title: 'Real-time Analytics',
      description: 'Monitor your data in real-time with interactive dashboards and visualizations.',
      benefits: ['Live data updates', 'Interactive charts', 'Custom metrics', 'Alert systems']

    },
    {
      icon: TrendingUp,
      title: 'Trend Analysis',
      description: 'Identify patterns and trends in your data with advanced AI algorithms.',
      benefits: ['Pattern recognition', 'Predictive analytics', 'Trend forecasting', 'Anomaly detection']

    },
    {
      icon: PieChart,
      title: 'Data Visualization',
      description: 'Transform complex data into clear, actionable insights with beautiful visualizations.',
      benefits: ['Multiple chart types', 'Custom dashboards', 'Export capabilities', 'Mobile responsive']

    },
    {
      icon: Target,
      title: 'Goal Tracking',
      description: 'Set and track KPIs with automated reporting and performance monitoring.',
      benefits: ['KPI tracking', 'Goal setting', 'Progress monitoring', 'Performance reports']

    }

  ]

  const benefits = [
    'Make data-driven decisions',
    'Identify business opportunities',
    'Improve operational efficiency',
    'Reduce manual reporting time',
    'Enhance team collaboration',
    'Increase revenue insights',
    'Optimize resource allocation',
    'Predict future trends'
  ]

  return (
    <>
      <Helmet />
        <title>AI Analytics - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered analytics solutions for data-driven insights" />
        <meta name="keywords" content="AI analytics, data analysis, machine learning, business intelligence" />
      </Helmet>
      <Navigation />
      <div>
      <Helmet />
        <title>AI Analytics Dashboard - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered analytics dashboard for comprehensive business intelligence and data visualization." />
      </Helmet>
      <Navigation />
      <div>
          <div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              AI Analytics <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Dashboard</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your data into actionable insights with our advanced AI-powered analytics dashboard.
            </p>
          </div>
      
      <Footer />
    </>
        </section>

        {/* Features Section */}

        <section className="py-20 px-4">
          <div>
          <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Dashboard Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive analytics tools for modern businesses
              </p>
            </div>
      
      <Footer />
    </>
            <div>
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
    <div>
          <div>
                      <Icon />
                    </div>
      
      <Footer />
    </>
                    <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300 mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle />
                          {benefit}

                        </li>
                      ))}

                    </ul>
                  </div>
      
      <Footer />
    </>
                );
              })}

            </div>
      
      <Footer />
    </>
          </div>
      
      <Footer />
    </>
        </section>

        {/* Benefits Section */}

        <section className="py-20 px-4 bg-slate-800/50">
          <div>
          <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Why Choose Our Dashboard</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Powerful analytics capabilities for better business decisions
              </p>
            </div>
      
      <Footer />
    </>
            <div>
              {benefits.map((benefit, index) => (
                <div>
                  <CheckCircle />
                  <span className="text-gray-300 text-lg">{benefit}</span>
                </div>
      
      <Footer />
    </>
              ))}

            </div>
      
      <Footer />
    </>
          </div>
      
      <Footer />
    </>
        </section>

        {/* CTA Section */}

        <section className="py-20 px-4">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Start analyzing your data with our AI-powered analytics dashboard today.
            </p>
            <div>
              <button className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300">
                View Demo
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
  )
}

        </Navigation>
