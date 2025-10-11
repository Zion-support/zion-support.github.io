import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Brain, BarChart, Shield, Zap, Users, Globe, CheckCircle, ArrowRight } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const AiServicesPage: React.FC = () => {
  const services = [
    {
      icon: Brain,
      title: 'AI Analytics',
      description: 'Advanced analytics powered by artificial intelligence to transform your data into actionable insights.',
      features: ['Predictive Analytics', 'Real-time Processing', 'Custom Dashboards', 'Machine Learning Models']
    },
    {
      icon: BarChart,
      title: 'Business Intelligence',
      description: 'Comprehensive business intelligence solutions to drive data-driven decision making.',
      features: ['Data Visualization', 'KPI Tracking', 'Report Generation', 'Trend Analysis']
    },
    {
      icon: Shield,
      title: 'AI Cybersecurity',
      description: 'Next-generation cybersecurity solutions powered by AI to protect your digital assets.',
      features: ['Threat Detection', 'Automated Response', 'Risk Assessment', 'Compliance Monitoring']
    },
    {
      icon: Zap,
      title: 'Process Automation',
      description: 'Intelligent automation solutions to streamline your business processes and increase efficiency.',
      features: ['Workflow Automation', 'Task Optimization', 'Error Reduction', 'Cost Savings']
    },
    {
      icon: Users,
      title: 'Customer Experience',
      description: 'AI-powered customer experience solutions to enhance engagement and satisfaction.',
      features: ['Chatbots', 'Personalization', 'Sentiment Analysis', 'Customer Insights']
    },
    {
      icon: Globe,
      title: 'Content Generation',
      description: 'AI-driven content creation tools to produce high-quality content at scale.',
      features: ['Text Generation', 'Image Creation', 'Video Production', 'Multi-language Support']
    }
  ]

  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'analytics', name: 'Analytics' },
    { id: 'automation', name: 'Automation' },
    { id: 'security', name: 'Security' },
    { id: 'content', name: 'Content' }
  ]

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Comprehensive AI services including analytics, automation, cybersecurity, and content generation. Transform your business with cutting-edge artificial intelligence solutions." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, automation, analytics, cybersecurity" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your business with our comprehensive suite of AI services. From analytics to automation, we provide cutting-edge artificial intelligence solutions tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
                Explore Services
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our AI Services
              </h2>
              <p className="text-xl text-gray-300">
                Comprehensive artificial intelligence solutions for every business need
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 leading-relaxed mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-gray-400 flex items-center">
                        <CheckCircle className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-purple-900 to-blue-900">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our AI services can help you achieve your business goals and drive innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center">
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-purple-400 text-purple-400 px-8 py-3 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300">
                Contact Our Experts
              </button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}

export default AiServicesPage