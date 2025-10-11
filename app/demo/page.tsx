'use client'
import React from 'react'

import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const DemoPage: React.FC = () => {
  const demos = [
    {
      id: '1',
      title: 'AI Analytics Dashboard',
      description: 'See how our AI-powered analytics can transform your data into actionable insights.',
      features: [
        'Real-time data visualization',
        'Predictive analytics',
        'Custom reporting',
        'Automated insights'
      ],
      duration: '5 min'
    },
    {
      id: '2',
      title: 'Cloud Migration Tool',
      description: 'Experience our seamless cloud migration process with live demonstrations.',
      features: [
        'Automated migration',
        'Zero downtime',
        'Data integrity checks',
        'Rollback capabilities'
      ],
      duration: '8 min'
    },
    {
      id: '3',
      title: 'Cybersecurity Scanner',
      description: 'Watch our AI-powered security scanner identify and resolve vulnerabilities.',
      features: [
        'Automated scanning',
        'Threat detection',
        'Vulnerability assessment',
        'Remediation suggestions'
      ],
      duration: '6 min'
    }
  ]

  return (
    <div>

    <div>
  
      <Navigation>
  
      {/* Hero Section */}
      <section>
  
  <div>
  
        <div>
  
          <h1>
  
            <span className="neon-text">See Our Solutions in Action</span>
          </h1>
          <p>
  
            Experience our AI and IT solutions through interactive demos. See how our technology can transform your business.
          </p>
        </div>
      </section>

      {/* Demo Cards */}
      <section>
  
  <div>
  
        <div>
  
          <div>
  
            {demos.map((demo) => (
              <div>
  
                <div>
  
                  <div>
  
                    <Play>
  
                  </div>
                </div>
                
                <h3>
  
                  {demo.title}
                </h3>
                
                <p>
  
                  {demo.description}
                </p>

                <div>
  
                  <h4 className="text-sm font-semibold text-cyan-400 mb-3">Key Features</h4>
                  <ul>
  
                    {demo.features.map((feature, index) => (
                      <li>
  
                        <CheckCircle>
  
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
  
                  <span className="text-sm text-gray-400">{demo.duration}</span>
                  <button>
  
                    <Play>
  
                    Watch Demo
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section>
  
  <div>
  
        <div>
  
          <div>
  
            <h2>
  
              Ready to See More?
            </h2>
            <p>
  
              Schedule a personalized demo with our experts to see how our solutions can work for your specific needs.
            </p>
            <div>
  
              <button>
  
                Schedule Demo
                <ArrowRight>
  
              </button>
              <button>
  
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer>
  
    </div>
  )
}

export default DemoPage
