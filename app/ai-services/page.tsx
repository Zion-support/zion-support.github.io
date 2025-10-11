import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Brain, Cloud, Shield, BarChart, Code, Smartphone, ArrowRight, CheckCircle, Star, Zap } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
const AiServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
const services = [
    {
      id: 1,
      title: 'AI Chatbots & NLP',
      description: 'Intelligent conversational AI that understands and responds to customer queries naturally.',
      category: 'conversational',
      icon: Brain,
      features: ['Natural language processing', 'Multi-language support', 'Context awareness', 'Integration ready']
    },
    {
      id: 2,
      title: 'AI Content Generation',
      description: 'Automated content creation for blogs, social media, and marketing materials.',
      category: 'content',
      icon: Zap,
      features: ['Blog post generation', 'Social media content', 'Email campaigns', 'SEO optimization']
    },
    {
      id: 3,
      title: 'AI Data Analytics',
      description: 'Advanced analytics and insights from your data using machine learning algorithms.',
      category: 'analytics',
      icon: BarChart,
      features: ['Predictive analytics', 'Real-time insights', 'Data visualization', 'Custom dashboards']
    },
    {
      id: 4,
      title: 'AI Automation',
      description: 'Streamline business processes with intelligent automation solutions.',
      category: 'automation',
      icon: Shield,
      features: ['Process automation', 'Workflow optimization', 'Error reduction', 'Cost savings']
    },
    {
      id: 5,
      title: 'AI Computer Vision',
      description: 'Image and video analysis for quality control, security, and insights.',
      category: 'vision',
      icon: Users,
      features: ['Image recognition', 'Object detection', 'Quality control', 'Security monitoring']
    }
  ]
  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'conversational', name: 'Conversational AI' },
    { id: 'content', name: 'Content Generation' },
    { id: 'analytics', name: 'Data Analytics' },
    { id: 'automation', name: 'Automation' },
    { id: 'vision', name: 'Computer Vision' }
  ]
  const filteredServices = services.filter(service => 
    selectedCategory === 'all' || service.category === selectedCategory
  )
  return (
    <>
      <Helmet>
<title>AI Services - Zion Tech Group | Artificial Intelligence Solutions</title>
        <meta name="description" content="Comprehensive AI services including chatbots, content generation, data analytics, automation, and computer vision. Transform your business with cutting-edge AI technology." />
        <meta name="keywords" content="AI services, artificial intelligence, chatbots, content generation, data analytics, automation, computer vision" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
AI <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our comprehensive AI solutions. From chatbots to computer vision, we help you harness the power of artificial intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
                Get Started
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                View Portfolio
              </button>
            </div>
          </div>
        </section>
        {/* Category Filter */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
{categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </section>
        {/* Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
{filteredServices.map((service) => (
                <div key={service.id} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 group-hover:scale-105">
                    Learn More
                    <ArrowRight className="w-4 h-4 inline ml-2" />
                  </button>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Proven Results</h3>
                <p className="text-gray-300">
                  Our AI solutions have helped clients achieve 300% average ROI and 50% reduction in operational costs.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Expert Team</h3>
                <p className="text-gray-300">
                  Our team includes PhD-level AI researchers and engineers with decades of combined experience.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Enterprise Security</h3>
                <p className="text-gray-300">
                  All our solutions are built with enterprise-grade security and compliance standards.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* CTA Section */}
<section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our AI services can help you achieve your business goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
                Start Your AI Journey
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Schedule Consultation
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