import React from 'react'
import { ArrowRight, Zap, Brain, Database, Code, Shield, Users, CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function AIServicesPage() {
  const services = [
    {
      icon: <Brain className="w-6 h-6 text-blue-500" />,
      title: 'AI Content Generation',
      description: 'Create high-quality content at scale with our advanced AI content generation tools.',
      features: ['Blog posts', 'Social media content', 'Product descriptions', 'Email campaigns']
    },
    {
      icon: <Users className="w-6 h-6 text-green-500" />,
      title: 'AI Chatbot Solutions',
      description: 'Deploy intelligent chatbots that provide 24/7 customer support and engagement.',
      features: ['Customer support', 'Lead generation', 'FAQ automation', 'Multi-language support']
    },
    {
      icon: <Database className="w-6 h-6 text-purple-500" />,
      title: 'AI Analytics & Insights',
      description: 'Transform your data into actionable insights with our AI-powered analytics platform.',
      features: ['Predictive analytics', 'Data visualization', 'Trend analysis', 'Custom dashboards']
    },
    {
      icon: <Code className="w-6 h-6 text-orange-500" />,
      title: 'AI Automation',
      description: 'Streamline your business processes with intelligent automation solutions.',
      features: ['Workflow automation', 'Document processing', 'Email automation', 'Task scheduling']
    },
    {
      icon: <Shield className="w-6 h-6 text-red-500" />,
      title: 'AI Security Solutions',
      description: 'Protect your business with AI-powered security monitoring and threat detection.',
      features: ['Threat detection', 'Anomaly detection', 'Security monitoring', 'Incident response']
    },
    {
      icon: <Zap className="w-6 h-6 text-cyan-500" />,
      title: 'AI Voice & Speech',
      description: 'Integrate voice recognition and speech synthesis into your applications.',
      features: ['Voice commands', 'Speech-to-text', 'Text-to-speech', 'Voice analytics']
    }
  ]

  const benefits = [
    'Increased productivity and efficiency',
    'Reduced operational costs',
    'Enhanced customer experience',
    'Data-driven decision making',
    '24/7 automated support',
    'Scalable solutions'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI-Powered Solutions for
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {' '}Modern Businesses
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your business with our comprehensive AI services. From content generation to automation, 
            we provide cutting-edge solutions that drive growth and efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
            >
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/about"
              className="border border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our AI Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI solutions designed to meet your specific business needs and objectives.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
              >
                <div className="mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center text-blue-400 font-medium group-hover:text-blue-300 transition-colors">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our AI Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI services deliver measurable results and provide a competitive advantage for your business.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-green-600/20 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                </div>
                <p className="text-gray-300 text-lg">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Harness the Power of AI?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our AI solutions can transform your business and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
            >
              Start Your AI Journey
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/it-services"
              className="border border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Explore IT Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
