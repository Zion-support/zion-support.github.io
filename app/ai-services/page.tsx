import React from 'react'
import { CheckCircle, ArrowRight, Brain, Shield, DollarSign, Eye, MessageSquare, BarChart3, Users, Code, Clock } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const AIServicesPage: React.FC = () => {
  const services = [
    {
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      title: 'AI Content Generation',
      description: 'Create high-quality content at scale with our advanced AI writing tools and content management systems.',
      features: ['Blog posts and articles', 'Social media content', 'Marketing copy', 'Product descriptions'],
      pricing: 'Starting at $29/month',
      link: '/ai-content-generator',
      popular: true
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-green-500" />,
      title: 'AI Chatbot Builder',
      description: 'Create intelligent chatbots for customer support, lead generation, and automated assistance.',
      features: ['Natural language processing', 'Multi-channel support', 'Analytics dashboard', 'Custom training'],
      pricing: 'Starting at $49/month',
      link: '/ai-chatbot-builder',
      popular: true
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-purple-500" />,
      title: 'AI Analytics Dashboard',
      description: 'Transform your data into actionable insights with our AI-powered analytics platform.',
      features: ['Real-time analytics', 'Predictive modeling', 'Custom dashboards', 'Data visualization'],
      pricing: 'Starting at $39/month',
      link: '/ai-analytics-dashboard',
      popular: false
    },
    {
      icon: <Users className="w-8 h-8 text-orange-500" />,
      title: 'AI Customer Service',
      description: 'Enhance customer experience with AI-powered support solutions and automated responses.',
      features: ['24/7 support', 'Sentiment analysis', 'Ticket routing', 'Performance metrics'],
      pricing: 'Starting at $79/month',
      link: '/ai-customer-service',
      popular: false
    },
    {
      icon: <Code className="w-8 h-8 text-cyan-500" />,
      title: 'AI Code Generation',
      description: 'Accelerate development with AI-powered code generation and automated testing tools.',
      features: ['Code completion', 'Bug detection', 'Test generation', 'Documentation'],
      pricing: 'Starting at $99/month',
      link: '/ai-code-generation',
      popular: false
    },
    {
      icon: <Eye className="w-8 h-8 text-pink-500" />,
      title: 'AI Computer Vision',
      description: 'Implement computer vision solutions for image recognition, object detection, and analysis.',
      features: ['Image classification', 'Object detection', 'Facial recognition', 'Quality control'],
      pricing: 'Starting at $149/month',
      link: '/ai-computer-vision',
      popular: false
    }
  ]

  const stats = [
    { number: '1000+', label: 'AI Models' },
    { number: '99.9%', label: 'Accuracy' },
    { number: '24/7', label: 'Support' },
    { number: '50+', label: 'Languages' }
  ]

  const benefits = [
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Increased Efficiency',
      description: 'Automate repetitive tasks and streamline workflows to boost productivity by up to 300%.'
    },
    {
      icon: <DollarSign className="w-6 h-6 text-green-500" />,
      title: 'Cost Savings',
      description: 'Reduce operational costs by automating manual processes and improving resource utilization.'
    },
    {
      icon: <Clock className="w-6 h-6 text-blue-500" />,
      title: '24/7 Availability',
      description: 'AI systems work around the clock to ensure continuous service and support.'
    },
    {
      icon: <Shield className="w-6 h-6 text-purple-500" />,
      title: 'Enhanced Security',
      description: 'Advanced security measures protect your data and ensure compliance with industry standards.'
    }
  ]

  const process = [
    {
      step: '01',
      title: 'Discovery & Analysis',
      description: 'We analyze your business needs and identify the best AI solutions for your requirements.'
    },
    {
      step: '02',
      title: 'Solution Design',
      description: 'Create a comprehensive AI strategy tailored to your specific use cases and goals.'
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Deploy and integrate AI solutions with minimal disruption to your existing workflows.'
    },
    {
      step: '04',
      title: 'Optimization',
      description: 'Continuously monitor and optimize AI performance for maximum ROI.'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Transform your business with our comprehensive AI services including content generation, chatbots, analytics, and computer vision solutions." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, content generation, chatbots, analytics, Zion Tech Group" />
      </Helmet>

      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Transform Your Business with{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                AI Services
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Leverage the power of artificial intelligence to automate processes, gain insights, 
              and drive innovation across your organization.
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
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our AI Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive AI solutions designed to accelerate your business growth and digital transformation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {service.description}
                  </p>
                  <ul className="text-sm text-gray-400 space-y-1 mb-4">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-white">{service.pricing}</span>
                    {service.popular && (
                      <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                        Popular
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our AI Services?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the benefits of AI-powered solutions that deliver real business value.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our AI Implementation Process
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We follow a proven methodology to ensure successful AI implementation and maximum value.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Harness the Power of AI?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Let's discuss how our AI services can transform your business and drive innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
                >
                  Get Free Consultation
                </Link>
                <Link
                  to="/it-services"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
                >
                  Explore IT Services
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}

export default AIServicesPage