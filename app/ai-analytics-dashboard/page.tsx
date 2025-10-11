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
      <Helmet>
        <title>AI Analytics - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered analytics solutions for data-driven insights" />
        <meta name="keywords" content="AI analytics, data analysis, machine learning, business intelligence" />
      </Helmet>
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Analytics Dashboard - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered analytics dashboard for comprehensive business intelligence and data visualization." />
      </Helmet>
      <Navigation />
      
      <div $1>
            {/* Hero Section */}>
        <section className="pt-20 pb-16 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              AI Analytics <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Dashboard</span>
            </h1>
            <p Transform your data into actionable insights with our advanced AI-powered analytics dashboard.>
                  $2
                </p>
            </p>
          </div>
      
      <Footer />
    </>
        </section>
            {/* Features Section */}
          </div>
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Dashboard Features</h2>
              <p Comprehensive analytics tools for modern businesses>
                  $2
                </p>
              </p>
            </div>
      
      <Footer />
    </>
            <div $1>
            {features.map((feature, index) => {
                const Icon = feature.icon;
  return (
                  <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-purple-400/50 transition-all duration-300">
                    <div className="text-purple-400 mb-4">
                      <Icon className="w-8 h-8" />
                    </div>
      
      <Footer />
    </>
                    <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300 mb-4">{feature.description}</p>
                    <ul $1>
            {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
            {benefit}
          </div>
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
          </div>
        <section className="py-20 px-4 bg-slate-800/50">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Why Choose Our Dashboard</h2>
              <p Powerful analytics capabilities for better business decisions>
                  $2
                </p>
              </p>
            </div>
      
      <Footer />
    </>
            <div $1>
            {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
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
          </div>
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p Start analyzing your data with our AI-powered analytics dashboard today.>
                  $2
                </p>
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center"
              <button  >
                  <ArrowRight className="w-5 h-5 ml-2" />
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
  )
}
        </Navigation>
