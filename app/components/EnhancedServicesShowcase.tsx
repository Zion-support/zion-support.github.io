'use client'
import React from 'react'

const EnhancedServicesShowcase: React.FC = () => {
  const services = [
    {
      icon: 
      title: 'AI Solutions',
      description: 'Harness the power of artificial intelligence to automate processes, gain insights, and drive innovation.',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics']
    },
    {
      icon: 
      title: 'Cloud Services',
      description: 'Scalable and secure cloud infrastructure solutions to support your business growth and digital transformation.',
      features: ['Cloud Migration', 'Infrastructure Setup', 'Auto-scaling', 'Cost Optimization']
    },
    {
      icon: 
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your business from evolving threats and ensure compliance.',
      features: ['Threat Detection', 'Security Auditing', 'Incident Response', 'Compliance Management']
    },
    {
      icon: 
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with advanced analytics and visualization tools.',
      features: ['Real-time Analytics', 'Custom Dashboards', 'Data Visualization', 'Business Intelligence']
    },
    {
      icon: 
      title: 'Process Automation',
      description: 'Streamline your operations with intelligent automation solutions that reduce manual work and errors.',
      features: ['Workflow Automation', 'RPA Implementation', 'API Integration', 'Process Optimization']
    },
    {
      icon: 
      title: 'Digital Transformation',
      description: 'Complete digital transformation services to modernize your business and stay competitive.',
      features: ['Strategy Development', 'Technology Integration', 'Change Management', 'Training & Support']
    }
  ]

  return (
    <div>

    <div>
  
      <div>
  
        <div>
  
          <h2>
  
            Our Core Services
          </h2>
          <p>
  
            Comprehensive AI and IT solutions designed to transform your business and drive innovation
          </p>
        </div>

        <div>
  
          {services.map((service, index) => (
            <div>
  
              <div>
  
                <service>
  
                <h3>
  
                  {service.title}
                </h3>
              </div>
              
              <p>
  
                {service.description}
              </p>

              <div>
  
                <h4 className="text-sm font-semibold text-cyan-400 mb-3">Key Features</h4>
                <ul>
  
                  {service.features.map((feature, featureIndex) => (
                    <li>
  
                      <CheckCircle>
  
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <button>
  
                Learn More
                <ArrowRight>
  
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default EnhancedServicesShowcase
