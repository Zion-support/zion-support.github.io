'use client'
import React from 'react'

import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const PageBackupPage: React.FC = () => {
  const features = [
    {
      icon: 
      title: 'AI-Powered Analysis',
      description: 'Advanced AI algorithms provide intelligent insights and recommendations.',
      benefits: ['Smart recommendations', 'Predictive analytics', 'Automated insights', 'Real-time analysis']
    },
    {
      icon: 
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics dashboard with real-time data visualization.',
      benefits: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics']
    },
    {
      icon: Target,
      title: 'Precision Targeting',
      description: 'Target specific goals and objectives with precision and accuracy.',
      benefits: ['Goal tracking', 'Performance optimization', 'Strategic planning', 'Success metrics']
    },
    {
      icon: TrendingUp,
      title: 'Growth Optimization',
      description: 'Optimize your business growth with data-driven strategies.',
      benefits: ['Growth strategies', 'Market analysis', 'Competitive insights', 'ROI optimization']
    }
  ]

  return (
    <div>

    <React>
  
      <Helmet>
  
        <title>Page Backup - Zion Tech Group</title>
        <meta>
  
      </Helmet>
      <Navigation>
  
      <div>
  
        {/* Hero Section */}
        <section>
  
  <div>
  
          <div>
  
          <div>
  
          <div>
  
            <h1>
  
              Page Backup
            </h1>
            <p>
  
              Advanced page backup solutions powered by AI technology.
            </p>
            <div>
  
              <button>
  
                Get Started
              </button>
              <button>
  
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section>
  
  <div>
  
          <div>
  
            <div>
  
              <h2 className="text-4xl font-bold text-white mb-4">Key Features</h2>
              <p>
  
                Discover the powerful features that make our solution stand out.
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

        {/* CTA Section */}
        <section>
  
  <div>
  
          <div>
  
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p>
  
              Join thousands of satisfied customers who trust our solutions.
            </p>
            <button>
  
              Get Started Now
              <ArrowRight>
  
            </button>
          </div>
        </section>
      </div>
      <Footer>
  
    </React.Fragment>
  )
}

export default PageBackupPage