'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Cpu, Zap, Users, Target, TrendingUp, Globe } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function DigitalTransformationPage() {
  const services = [
    {
      icon: <Cpu className="w-8 h-8 text-blue-500" />,
      title: 'Process Automation',
      description: 'Automate repetitive tasks and streamline business processes.',
      features: ['Workflow Automation', 'RPA Implementation', 'Process Optimization', 'Integration'],
      pricing: 'Starting at $2,000/month'
    },
    {
      icon: <Users className="w-8 h-8 text-green-500" />,
      title: 'Digital Workforce',
      description: 'Empower your team with digital tools and technologies.',
      features: ['Digital Training', 'Tool Implementation', 'Change Management', 'Support'],
      pricing: 'Starting at $1,500/month'
    },
    {
      icon: <Target className="w-8 h-8 text-purple-500" />,
      title: 'Customer Experience',
      description: 'Enhance customer interactions with digital solutions.',
      features: ['Omnichannel Strategy', 'Personalization', 'Analytics', 'Optimization'],
      pricing: 'Starting at $1,800/month'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-orange-500" />,
      title: 'Data Strategy',
      description: 'Leverage data to drive business decisions and growth.',
      features: ['Data Collection', 'Analytics Setup', 'Insights Generation', 'Reporting'],
      pricing: 'Starting at $2,500/month'
    },
    {
      icon: <Globe className="w-8 h-8 text-cyan-500" />,
      title: 'Cloud Migration',
      description: 'Move your business to the cloud for scalability and efficiency.',
      features: ['Cloud Strategy', 'Migration Planning', 'Implementation', 'Optimization'],
      pricing: 'Starting at $3,000/month'
    },
    {
      icon: <Zap className="w-8 h-8 text-pink-500" />,
      title: 'AI Integration',
      description: 'Integrate artificial intelligence into your business processes.',
      features: ['AI Assessment', 'Solution Design', 'Implementation', 'Training'],
      pricing: 'Starting at $2,200/month'
    }
  ]

  const benefits = [
    {
      title: 'Increased Efficiency',
      description: 'Streamline operations and reduce manual work.',
      icon: <Zap className="w-6 h-6 text-blue-500" />
    },
    {
      title: 'Better Customer Experience',
      description: 'Deliver personalized and seamless customer interactions.',
      icon: <Users className="w-6 h-6 text-green-500" />
    },
    {
      title: 'Data-Driven Decisions',
      description: 'Make informed decisions based on real-time data.',
      icon: <TrendingUp className="w-6 h-6 text-purple-500" />
    },
    {
      title: 'Competitive Advantage',
      description: 'Stay ahead of the competition with modern technology.',
      icon: <Target className="w-6 h-6 text-orange-500" />
    }
  ]

  const industries = [
    {
      title: 'Healthcare',
      description: 'Digital health records, telemedicine, and patient management.',
      icon: <Users className="w-8 h-8 text-blue-500" />
    },
    {
      title: 'Finance',
      description: 'Digital banking, fintech solutions, and risk management.',
      icon: <TrendingUp className="w-8 h-8 text-green-500" />
    },
    {
      title: 'Manufacturing',
      description: 'Smart factories, IoT integration, and supply chain optimization.',
      icon: <Cpu className="w-8 h-8 text-purple-500" />
    },
    {
      title: 'Retail',
      description: 'E-commerce platforms, inventory management, and customer analytics.',
      icon: <Globe className="w-8 h-8 text-orange-500" />
    }
  ]

  const process = [
    {
      step: '01',
      title: 'Assessment',
      description: 'Analyze current state and identify transformation opportunities.'
    },
    {
      step: '02',
      title: 'Strategy',
      description: 'Develop a comprehensive digital transformation roadmap.'
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Execute the transformation plan with minimal disruption.'
    },
    {
      step: '04',
      title: 'Optimization',
      description: 'Continuously improve and scale digital capabilities.'
    }
  ]

  const stats = [
    { number: '40%', label: 'Efficiency Gain' },
    { number: '60%', label: 'Cost Reduction' },
    { number: '85%', label: 'Customer Satisfaction' },
    { number: '200%', label: 'ROI Increase' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Digital Transformation - Zion Tech Group</title>
        <meta name="description" content="Complete digital transformation services to modernize your business operations." />
        <meta name="keywords" content="digital transformation, business modernization, process automation, digital strategy" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Digital Transformation
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your business for the digital age with comprehensive digital transformation services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact"
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a 
                href="/about"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Services Section */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Our Digital Transformation Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="text-purple-400 font-semibold mb-4">{service.pricing}</div>
                  <a
                    href="/contact"
                    className="text-blue-400 hover:text-blue-300 font-medium flex items-center group"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Why Transform Digitally?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Industries Section */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Industries We Serve
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {industries.map((industry, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center">
                  <div className="mb-4">
                    {industry.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{industry.title}</h3>
                  <p className="text-gray-300">{industry.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Process Section */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Our Transformation Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let's discuss how digital transformation can revolutionize your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Free Transformation Consultation
              </a>
              <a
                href="/about"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Learn More About Us
              </a>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}
