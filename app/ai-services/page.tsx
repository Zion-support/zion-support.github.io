'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { 
  Brain, 
  Database, 
  Shield, 
  Zap, 
  Users, 
  CheckCircle, 
  ArrowRight,
  Phone,
  Mail,
  Star
} from 'lucide-react'

const AiServicesPage: React.FC = () => {
  const aiServices = [
    {
      icon: Brain,
      title: 'AI Customer Support',
      description: 'Intelligent chatbots and automated support systems that provide 24/7 customer assistance.',
      features: [
        'Natural Language Processing',
        'Multi-language Support',
        'Sentiment Analysis',
        'Integration APIs',
        'Real-time Responses',
        'Learning Capabilities'
      ],
      price: 'Starting at $299/month',
      popular: true
    },
    {
      icon: Database,
      title: 'AI Data Analytics',
      description: 'Advanced analytics and business intelligence powered by machine learning algorithms.',
      features: [
        'Predictive Analytics',
        'Real-time Dashboards',
        'Custom Reports',
        'Data Visualization',
        'Pattern Recognition',
        'Automated Insights'
      ],
      price: 'Starting at $499/month',
      popular: false
    },
    {
      icon: Shield,
      title: 'AI Cybersecurity',
      description: 'AI-powered security solutions that detect and prevent cyber threats in real-time.',
      features: [
        'Threat Detection',
        'Automated Response',
        'Behavioral Analysis',
        'Compliance Monitoring',
        'Risk Assessment',
        'Incident Response'
      ],
      price: 'Starting at $799/month',
      popular: false
    },
    {
      icon: Zap,
      title: 'AI Workflow Automation',
      description: 'Automate complex business processes with intelligent workflow management systems.',
      features: [
        'Process Automation',
        'Smart Routing',
        'Exception Handling',
        'Performance Monitoring',
        'Custom Workflows',
        'Integration Capabilities'
      ],
      price: 'Starting at $399/month',
      popular: false
    },
    {
      icon: Users,
      title: 'AI HR Solutions',
      description: 'Transform your human resources with AI-powered recruitment and employee management.',
      features: [
        'Resume Screening',
        'Candidate Matching',
        'Performance Analysis',
        'Employee Engagement',
        'Predictive Hiring',
        'Skills Assessment'
      ],
      price: 'Starting at $599/month',
      popular: false
    },
    {
      icon: Brain,
      title: 'AI Content Generation',
      description: 'Create high-quality content at scale with AI-powered writing and content tools.',
      features: [
        'Content Writing',
        'SEO Optimization',
        'Multi-language Support',
        'Brand Voice Consistency',
        'Content Planning',
        'Quality Assurance'
      ],
      price: 'Starting at $199/month',
      popular: false
    }
  ]

  const benefits = [
    'Increase efficiency by up to 300%',
    'Reduce operational costs by 40%',
    'Improve customer satisfaction by 50%',
    '24/7 automated support',
    'Scalable solutions for any business size',
    'Easy integration with existing systems'
  ]

  const stats = [
    { value: '500+', label: 'AI Models Deployed' },
    { value: '99.9%', label: 'Uptime Guarantee' },
    { value: '24/7', label: 'Support Available' },
    { value: '300%', label: 'Average ROI' }
  ]

  return (
    <>
      <Helmet>
        <title>AI Services | Zion Tech Group - Artificial Intelligence Solutions</title>
        <meta 
          name="description" 
          content="Transform your business with our comprehensive AI services including customer support, data analytics, cybersecurity, and workflow automation." 
        />
        <meta 
          name="keywords" 
          content="AI services, artificial intelligence, machine learning, automation, AI solutions, business intelligence" 
        />
        <link rel="canonical" href="https://ziontechgroup.com/ai-services" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">AI Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Advanced artificial intelligence solutions to transform your business and drive growth.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our AI Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive AI services designed to solve real business challenges
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <div 
                  key={index} 
                  className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-6 border ${
                    service.popular 
                      ? 'border-cyan-400 ring-2 ring-cyan-400/20' 
                      : 'border-white/20'
                  } hover:bg-white/20 transition-all duration-300`}
                >
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="flex items-center mb-4">
                    <service.icon className="h-8 w-8 text-cyan-400 mr-3" />
                    <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="text-cyan-400 font-semibold text-sm mb-4">{service.price}</div>
                  
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                    Learn More
                  </button>
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
                Proven results and benefits that drive real business value
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-400 mr-3 flex-shrink-0 mt-1" />
                    <p className="text-white font-medium">{benefit}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500/20 to-purple-600/20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get started with our AI solutions today and see the difference artificial intelligence can make.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a 
                href="tel:+1-555-0123" 
                className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300 flex items-center justify-center"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Us
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default AiServicesPage