'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Brain, Zap, Shield, Cloud, Code, BarChart, CheckCircle } from 'lucide-react'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

const HomePage: React.FC = () => {
  const aiServices = [
    {
      icon: Brain,
      title: 'AI-Powered Analytics',
      description: 'Advanced analytics and insights powered by machine learning algorithms.',
      price: 'Starting at $2,500/month',
      features: ['Real-time data processing', 'Predictive analytics', 'Custom dashboards', 'API integration']
    },
    {
      icon: Zap,
      title: 'AI Automation',
      description: 'Intelligent automation of business processes with decision-making capabilities.',
      price: 'Starting at $1,800/month',
      features: ['Workflow automation', 'Smart routing', 'Exception handling', 'Performance monitoring']
    },
    {
      icon: Shield,
      title: 'AI Security',
      description: 'Advanced threat detection and security solutions powered by AI.',
      price: 'Starting at $3,200/month',
      features: ['Threat detection', 'Anomaly detection', 'Automated response', 'Compliance monitoring']
    },
    {
      icon: Cloud,
      title: 'AI Cloud Solutions',
      description: 'Scalable AI solutions deployed on cloud infrastructure.',
      price: 'Starting at $2,000/month',
      features: ['Cloud deployment', 'Auto-scaling', 'High availability', 'Global CDN']
    },
    {
      icon: Code,
      title: 'AI Development',
      description: 'Custom AI solutions tailored to your business requirements.',
      price: 'Starting at $4,500/month',
      features: ['Custom development', 'Model training', 'Integration support', 'Ongoing maintenance']
    },
    {
      icon: BarChart,
      title: 'AI Data Analytics',
      description: 'Transform your data into actionable insights with AI-powered analytics.',
      price: 'Starting at $2,800/month',
      features: ['Data visualization', 'Machine learning models', 'Real-time insights', 'Custom reports']
    }
  ]

  return (
    <>
      <Helmet>
        <title>Zion Tech Group - AI & IT Solutions | Leading Technology Company</title>
        <meta name="description" content="Transform your business with cutting-edge AI solutions, quantum computing, and digital transformation services. Leading provider of enterprise AI and IT solutions." />
        <meta name="keywords" content="AI solutions, IT services, quantum computing, digital transformation, enterprise software, automation, machine learning" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main id="main-content" className="flex-1">
          {/* Hero Section */}
          <section className="relative py-20 px-4 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="relative max-w-7xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI & IT Solutions for the
                <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Future of Business
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your business with cutting-edge AI solutions, quantum computing, and digital transformation services. 
                We help enterprises harness the power of technology to drive innovation and growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
                  Get Started
                </button>
                <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </section>

          {/* AI Services Section */}
          <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Our AI Services
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Comprehensive AI solutions designed to accelerate your digital transformation and drive business growth.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {aiServices.map((service, index) => (
                  <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                    <p className="text-gray-300 leading-relaxed mb-4">{service.description}</p>
                    <div className="text-purple-400 font-semibold mb-4">{service.price}</div>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-gray-400 flex items-center">
                          <CheckCircle className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our experts to discuss your AI and IT needs and get started on your digital transformation journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
                  Contact Us
                </button>
                <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  )
}

export default HomePage
