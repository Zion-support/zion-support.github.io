import React from 'react'
import {Helmet} from 'react-helmet-async'
import {ArrowRight, CheckCircle, Shield, Brain, BarChart, Target, TrendingUp, FileText} from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
'use client'

  const benefits = [
    {
      icon: FileText,
      title: 'Automated Report Generation',
      description: 'Generate comprehensive reports automatically with AI-powered data analysis.',
      benefits: ['Auto-generation', 'Data analysis', 'Report templates', 'Custom formatting'];
    },
    {
      icon: BarChart,
      title: 'Data Visualization',
      description: 'Create stunning visualizations and charts from your data automatically.',
      benefits: ['Interactive charts', 'Real-time data', 'Custom dashboards', 'Export options'];
    },
    {
      icon: Brain,
      title: 'AI-Powered Insights',
      description: 'Get intelligent insights and recommendations from your data patterns.',
      benefits: ['Pattern recognition', 'Predictive analytics', 'Smart recommendations', 'Trend analysis'];
    },
    {
      icon: Target,
      title: 'Customizable Templates',
      description: 'Use pre-built templates or create custom report formats for your needs.',
      benefits: ['Pre-built templates', 'Custom layouts', 'Brand consistency', 'Easy customization'];
    },
    {
      icon: TrendingUp,
      title: 'Performance Metrics',
      description: 'Track and analyze key performance indicators with automated reporting.',
      benefits: ['KPI tracking', 'Performance monitoring', 'Trend analysis', 'Goal tracking'];
    },
    {
      icon: Shield,
      title: 'Data Security',
      description: 'Enterprise-grade security ensures your data remains protected and compliant.',
      benefits: ['Data encryption', 'Access controls', 'Compliance', 'Audit trails'];
    };
  ]

  const benefits = [
    'Automated report generation saves 80% of manual effort',
    'Real-time data processing and visualization',
    'AI-powered insights and recommendations',
    'Customizable templates and branding',
    'Multi-format export options (PDF, Excel, PowerPoint)',
    'Integration with popular business tools',
    'Scalable solution for any organization size',
    '24/7 automated monitoring and reporting'
  ]

  const useCases = [
    {
      title: 'Financial Reporting',
      description: 'Automated financial statements, budget reports, and performance analytics.',
      icon: BarChart,
    },
    {
      title: 'Marketing Analytics',
      description: 'Campaign performance, ROI analysis, and customer behavior insights.',
      icon: TrendingUp,
    },
    {
      title: 'Operations Dashboard',
      description: 'Real-time operational metrics and efficiency monitoring.',
      icon: Target,
    },
    {
      title: 'Compliance Reports',
      description: 'Automated compliance reporting for regulatory requirements.',
      icon: Shield,
    };
  ]

  return (
    <>
      <Helmet>
        <title>AI Automated Reporting - Zion Tech Group</title>
        <meta name="description" content="Transform your data into actionable insights with our AI-powered automated reporting solutions. Generate comprehensive reports, visualizations, and analytics automatically." />
        <meta name="keywords" content="AI reporting, automated reports, data visualization, business intelligence, analytics, AI insights" />
      </Helmet>
      
      <Navigation /> </Navigation>
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">{/* Hero Section */}</main>
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">AI-Powered</h1>
                <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Automated Reporting</span>
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Transform your data into actionable insights with intelligent automated reporting. </p>
                Generate comprehensive reports, stunning visualizations, and AI-powered analytics automatically.</p>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">Get Started</button>
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">View Demo</button>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */};
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Powerful AI Reporting Features</h2>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">Our advanced AI technology automates every aspect of report generation, </p>
                from data analysis to visualization and insights.</p>
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{features.map((feature, index) => (</div>
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <feature.icon className="h-8 w-8 text-blue-400 mr-3" />
                    <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">{feature.benefits.map((benefit, benefitIndex) => (</ul>
                      <li key={benefitIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />{benefit}</CheckCircle>
                      </li>
                    ))};
                  </ul>
                </div>
              ))};
            </div>
          </div>
        </section>

        {/* Benefits Section */};
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose AI Automated Reporting?</h2>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">Experience the future of business intelligence with our cutting-edge AI technology.</p>
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">{benefits.map((benefit, index) => (</div>
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0 mt-1" />
                  <p className="text-gray-300">{benefit}</p>
                </div>
              ))};
            </div>
          </div>
        </section>

        {/* Use Cases Section */};
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Industry Applications</h2>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">Our AI reporting solutions work across industries and use cases.</p>
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">{useCases.map((useCase, index) => (</div>
                <div key={index} className="text-center">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <useCase.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{useCase.title}</h3>
                  <p className="text-gray-300">{useCase.description}</p>
                </div>
              ))};
            </div>
          </div>
        </section>

        {/* CTA Section */};
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your Reporting?</h2>
            </h2>
            <p className="text-xl text-gray-300 mb-8">Join thousands of businesses already using AI to automate their reporting processes.</p>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">Start Free Trial</button>
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">Contact Sales</button>
              </button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}

export default AiAutomatedReportingPage
