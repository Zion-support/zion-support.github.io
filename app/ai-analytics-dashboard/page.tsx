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
      description: 'Create stunning visualizations that make complex data easy to understand.',
      benefits: ['Interactive charts', 'Custom dashboards', 'Export capabilities', 'Mobile responsive']
    },
    {
      icon: Target,
      title: 'Goal Tracking',
      description: 'Set and track KPIs with automated reporting and progress monitoring.',
      benefits: ['KPI tracking', 'Goal setting', 'Progress reports', 'Performance metrics']
    },
    {
      icon: Brain,
      title: 'AI Insights',
      description: 'Get intelligent insights and recommendations powered by machine learning.',
      benefits: ['Smart recommendations', 'Automated insights', 'Predictive modeling', 'Data mining']
    },
    {
      icon: Shield,
      title: 'Data Security',
      description: 'Enterprise-grade security with encryption and compliance features.',
      benefits: ['Data encryption', 'Access controls', 'Audit logs', 'Compliance ready']
    }
  ]

  const services = [
    {
      title: 'Dashboard Development',
      description: 'Custom analytics dashboards tailored to your business needs.',
      icon: BarChart,
      benefits: ['Custom design', 'Real-time data', 'Interactive features', 'Mobile optimization']
    },
    {
      title: 'Data Integration',
      description: 'Seamlessly integrate data from multiple sources and platforms.',
      icon: Zap,
      benefits: ['API integration', 'Data connectors', 'ETL processes', 'Data validation']
    },
    {
      title: 'Report Automation',
      description: 'Automated report generation and distribution for stakeholders.',
      icon: FileText,
      benefits: ['Scheduled reports', 'Email delivery', 'PDF generation', 'Custom formats']
    },
    {
      title: 'Training & Support',
      description: 'Comprehensive training and ongoing support for your team.',
      icon: Target,
      benefits: ['User training', 'Documentation', 'Technical support', 'Best practices']
    }
  ]

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$49',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features: [
        'Basic dashboards',
        '5 data sources',
        'Email support',
        'Standard reports'
      ]
    },
    {
      name: 'Professional',
      price: '$149',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Advanced analytics',
        'Unlimited data sources',
        'Priority support',
        'Custom dashboards',
        'API access'
      ]
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for large organizations',
      features: [
        'Full customization',
        'White-label options',
        'Dedicated support',
        'On-premise deployment',
        'Custom integrations'
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50"></div>
      <Helmet></Helmet>
        <title>AI Analytics Dashboard - Zion Tech Group</title>

          <div className="container mx-auto text-center"></div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6"></h1>
              AI <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Analytics Dashboard</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"></p>
              Transform your data into actionable insights with our AI-powered analytics dashboard. Monitor, analyze, and optimize your business performance in real-time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center"></button>
                Start Free Trial;
                <ArrowRight className="ml-2 h-5 w-5" /></ArrowRight>
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300"></button>
                View Demo;
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6"></h2>
                Powerful Features;
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
                Everything you need to make data-driven decisions;
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
              {features.map((feature, index) => {
                const Icon = feature.icon;
  return (
                  <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-purple-400/50 transition-all duration-300"></div>
                    <div className="text-purple-400 mb-4"></div>
                      <Icon className="w-8 h-8" /></Icon>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300 mb-4">{feature.description}</p>
                    <ul className="space-y-2"></ul>
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300"></li>
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" /></CheckCircle>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 bg-slate-800/50"></section>
          <div className="container mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Services</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
                Comprehensive analytics solutions for your business;
              </p>
            </div>

      <Footer /></Footer>
    </>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"></div>
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3"></div>
                  <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" /></CheckCircle>
                  <span className="text-gray-300 text-lg">{benefit}</span>
                </div>

            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4"></section>
          <div className="container mx-auto text-center"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"></p>
              Start analyzing your data with our AI-powered analytics dashboard today.
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"></button>
Start Free Trial>

              <button className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"></button>
                Contact Sales;
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer /></Footer>
    </div>
  )
}

export default AnalyticsDashboardPage;