import React from 'react'
import { Brain, Code, Shield, Cloud, Users, Zap, ArrowRight } from 'lucide-react'

export default function ServicesPage() {
  const services = [
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Harness the power of artificial intelligence with our cutting-edge ML solutions.',
      features: ['Natural Language Processing', 'Computer Vision', 'Predictive Analytics', 'Chatbots & Virtual Assistants']
    },
    {
      icon: Code,
      title: 'Software Development',
      description: 'Custom software solutions tailored to your business needs.',
      features: ['Web Applications', 'Mobile Apps', 'API Development', 'Legacy System Modernization']
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Protect your business with comprehensive security solutions.',
      features: ['Security Audits', 'Penetration Testing', 'Incident Response', 'Compliance Management']
    },
    {
      icon: Cloud,
      title: 'Cloud Services',
      description: 'Scalable cloud infrastructure and migration services.',
      features: ['Cloud Migration', 'Infrastructure as Code', 'DevOps & CI/CD', 'Cloud Security']
    },
    {
      icon: Users,
      title: 'Technology Consulting',
      description: 'Strategic guidance for your digital transformation journey.',
      features: ['Digital Strategy', 'Technology Assessment', 'Process Optimization', 'Change Management']
    },
    {
      icon: Zap,
      title: 'Process Automation',
      description: 'Streamline operations with intelligent automation solutions.',
      features: ['Workflow Automation', 'RPA Implementation', 'Business Process Optimization', 'Integration Services']
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to accelerate your business growth and digital transformation.
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <Icon className="h-12 w-12 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-gray-600">
                            <ArrowRight className="h-4 w-4 text-blue-600 mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how our services can help your business thrive.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-3 border border-white text-white font-medium rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  )
}