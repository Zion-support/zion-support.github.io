'use client'
import React from 'react'

import Navigation from './components/Navigation'
import Footer from './components/Footer'

export default function HomePage() {
  const features = [
    {
      icon: <Zap className="w-8 h-8 text-blue-500" />,
      title: 'AI-Powered Solutions',
      description: 'Transform your business with our comprehensive AI services including content generation, chatbots, and automation.'
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption, compliance standards, and advanced threat protection.'
    },
    {
      icon: <Globe className="w-8 h-8 text-purple-500" />,
      title: 'Global Reach',
      description: 'Worldwide deployment and support for international businesses with 24/7 technical assistance.'
    },
    {
      icon: <Database className="w-8 h-8 text-orange-500" />,
      title: 'Data Analytics',
      description: 'Advanced data processing and analytics to drive informed business decisions.'
    },
    {
      icon: <Code className="w-8 h-8 text-red-500" />,
      title: 'Custom Development',
      description: 'Tailored software solutions built to meet your specific business requirements.'
    },
    {
      icon: <Cloud className="w-8 h-8 text-cyan-500" />,
      title: 'Cloud Services',
      description: 'Scalable cloud infrastructure and migration services for modern businesses.'
    }
  ]

  return (
    <div>

    <div>
  
      <Helmet>
  
        <title>Zion Tech Group - Advanced AI and IT Solutions</title>
        <meta>
  
      </Helmet>
      
      <Navigation>
  
      <main>
  
        <section>
  
  <div>
  
          <div>
  
            <div>
  
              <h1>
  
                Advanced <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">AI & IT Solutions</span>
              </h1>
              <p>
  
                Transform your business with cutting-edge artificial intelligence, cloud computing, and digital transformation services.
              </p>
              <div>
  
                <a>
  
                  Get Started
                  <ArrowRight>
  
                </a>
                <a>
  
                  Our Services
                </a>
              </div>
            </div>
          </div>
        </section>

        <section>
  
  <div>
  
          <div>
  
            <div>
  
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Zion Tech Group?</h2>
              <p>
  
                We deliver innovative technology solutions that drive growth and efficiency for businesses worldwide.
              </p>
            </div>
            <div>
  
              {features.map((feature, index) => (
                <div>
  
                  <div>
  
                    {feature.icon}
                    <h3 className="text-xl font-semibold text-gray-900 ml-3">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer>
  
    </div>
  )
}
