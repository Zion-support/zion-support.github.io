'use client'
import React from 'react'

import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const PageFixedPage: React.FC = () => {
  const features = [
    {
      icon: 
      title: 'Compliance Management',
      description: 'Comprehensive compliance management with automated monitoring and reporting.',
      benefits: ['Automated monitoring', 'Compliance reporting', 'Risk assessment', 'Audit trails']
    },
    {
      icon: 
      title: 'Risk Analytics',
      description: 'Advanced risk analytics and assessment tools for compliance management.',
      benefits: ['Risk assessment', 'Analytics dashboard', 'Predictive modeling', 'Compliance metrics']
    },
    {
      icon: Target,
      title: 'Policy Management',
      description: 'Centralized policy management and enforcement across your organization.',
      benefits: ['Policy enforcement', 'Centralized management', 'Automated updates', 'Compliance tracking']
    },
    {
      icon: TrendingUp,
      title: 'Performance Monitoring',
      description: 'Real-time performance monitoring and compliance status tracking.',
      benefits: ['Real-time monitoring', 'Status tracking', 'Performance metrics', 'Alert system']
    }
  ]

  return (
    <div>

    <React>
  
      <Helmet>
  
        <title>Compliance Fixed - Zion Tech Group</title>
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
  
              Compliance Fixed
            </h1>
            <p>
  
              Advanced compliance management solutions powered by AI technology.
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
  
                Discover the powerful features that make our compliance solution stand out.
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
  
              Join thousands of satisfied customers who trust our compliance solutions.
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

export default PageFixedPage