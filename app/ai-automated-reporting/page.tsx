'use client'
import React from 'react'

import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const AiAutomatedReportingPage: React.FC = () => {
  const features = [
    {
      icon: FileText,
      title: 'Automated Report Generation',
      description: 'Generate comprehensive reports automatically with AI-powered data analysis.',
      benefits: ['Auto-generation', 'Data analysis', 'Report templates', 'Custom formatting']
    },
    {
      icon: 
      title: 'Data Visualization',
      description: 'Create stunning visualizations and charts from your data automatically.',
      benefits: ['Interactive charts', 'Real-time data', 'Custom dashboards', 'Export options']
    },
    {
      icon: 
      title: 'AI-Powered Insights',
      description: 'Get intelligent insights and recommendations from your data patterns.',
      benefits: ['Pattern recognition', 'Predictive analytics', 'Smart recommendations', 'Trend analysis']
    },
    {
      icon: Target,
      title: 'Customizable Templates',
      description: 'Use pre-built templates or create custom report formats for your needs.',
      benefits: ['Pre-built templates', 'Custom layouts', 'Brand consistency', 'Easy customization']
    },
    {
      icon: TrendingUp,
      title: 'Performance Metrics',
      description: 'Track and analyze key performance indicators with automated reporting.',
      benefits: ['KPI tracking', 'Performance monitoring', 'Trend analysis', 'Goal tracking']
    },
    {
      icon: 
      title: 'Data Security',
      description: 'Enterprise-grade security ensures your data remains protected and compliant.',
      benefits: ['Data encryption', 'Access controls', 'Compliance', 'Audit trails']
    }
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
      icon: BarChart
    },
    {
      title: 'Marketing Analytics',
      description: 'Campaign performance, ROI analysis, and customer behavior insights.',
      icon: TrendingUp
    },
    {
      title: 'Operations Dashboard',
      description: 'Real-time operational metrics and efficiency monitoring.',
      icon: Target
    },
    {
      title: 'Compliance Reports',
      description: 'Automated compliance reporting for regulatory requirements.',
      icon: Shield
    }
  ]

  return (
    <div>

    <>
      <Helmet>
  
        <title>AI Automated Reporting - Zion Tech Group</title>
        <meta>
  
        <meta>
  
      </Helmet>
      
      <Navigation>
  
      <main>
  
        {/* Hero Section */}
        <section>
  
  <div>
  
          <div>
  
            <div>
  
              <h1>
  
                AI-Powered
                <span>
  
                  Automated Reporting
                </span>
              </h1>
              <p>
  
                Transform your data into actionable insights with intelligent automated reporting. 
                Generate comprehensive reports, stunning visualizations, and AI-powered analytics automatically.
              </p>
              <div>
  
                <button>
  
                  Get Started
                  <ArrowRight>
  
                </button>
                <button>
  
                  View Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section>
  
  <div>
  
          <div>
  
            <div>
  
              <h2>
  
                Powerful AI Reporting Features
              </h2>
              <p>
  
                Our advanced AI technology automates every aspect of report generation, 
                from data analysis to visualization and insights.
              </p>
            </div>
            
            <div>
  
              {features.map((feature, index) => (
                <div>
  
                  <div>
  
                    <feature>
  
                    <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul>
  
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li>
  
                        <CheckCircle>
  
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section>
  
  <div>
  
          <div>
  
            <div>
  
              <h2>
  
                Why Choose AI Automated Reporting?
              </h2>
              <p>
  
                Experience the future of business intelligence with our cutting-edge AI technology.
              </p>
            </div>
            
            <div>
  
              {benefits.map((benefit, index) => (
                <div>
  
                  <CheckCircle>
  
                  <p className="text-gray-300">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section>
  
  <div>
  
          <div>
  
            <div>
  
              <h2>
  
                Industry Applications
              </h2>
              <p>
  
                Our AI reporting solutions work across industries and use cases.
              </p>
            </div>
            
            <div>
  
              {useCases.map((useCase, index) => (
                <div>
  
                  <div>
  
                    <useCase>
  
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{useCase.title}</h3>
                  <p className="text-gray-300">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section>
  
  <div>
  
          <div>
  
            <h2>
  
              Ready to Transform Your Reporting?
            </h2>
            <p>
  
              Join thousands of businesses already using AI to automate their reporting processes.
            </p>
            <div>
  
              <button>
  
                Start Free Trial
                <ArrowRight>
  
              </button>
              <button>
  
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer>
  
    </>
  )
}

export default AiAutomatedReportingPage