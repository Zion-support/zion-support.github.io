'use client'
import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Brain, Cloud, Shield, Code, BarChart, Zap, CheckCircle, ArrowRight, Users, Target, TrendingUp, Globe, Database, Cpu, Smartphone, Server, Lock, Settings, Monitor } from 'lucide-react'

const ServicesPage: React.FC = () => {
  const services = [
    {
      icon: Brain,
      title: 'AI Solutions',
      description: 'Advanced artificial intelligence solutions for business automation and optimization.',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
      price: 'Starting at $299/month',
      marketPrice: '$500-2000/month',
      benefits: ['Reduce operational costs by 40%', 'Improve decision making', 'Automate complex processes', 'Scale with AI']
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions for modern businesses.',
      features: ['AWS Integration', 'Azure Services', 'Google Cloud', 'Hybrid Solutions'],
      price: 'Starting at $199/month',
      marketPrice: '$400-1500/month',
      benefits: ['99.9% uptime guarantee', 'Automatic scaling', 'Enhanced security', 'Cost optimization']
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets.',
      features: ['Threat Detection', 'Data Protection', 'Compliance', 'Incident Response'],
      price: 'Starting at $399/month',
      marketPrice: '$800-2500/month',
      benefits: ['24/7 monitoring', 'Real-time threat detection', 'Compliance assurance', 'Expert security team']
    },
    {
      icon: Code,
      title: 'Custom Development',
      description: 'Tailored software solutions built to meet your specific requirements.',
      features: ['Web Applications', 'Mobile Apps', 'API Development', 'System Integration'],
      price: 'Starting at $149/month',
      marketPrice: '$300-1000/month',
      benefits: ['Custom solutions', 'Fast development', 'Modern technologies', 'Ongoing support']
    },
    {
      icon: BarChart,
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights and business intelligence.',
      features: ['Data Visualization', 'Business Intelligence', 'Real-time Analytics', 'Reporting'],
      price: 'Starting at $249/month',
      marketPrice: '$500-1800/month',
      benefits: ['Data-driven insights', 'Real-time dashboards', 'Predictive analytics', 'ROI optimization']
    },
    {
      icon: Zap,
      title: 'Automation',
      description: 'Streamline your operations with intelligent automation solutions.',
      features: ['Process Automation', 'Workflow Optimization', 'RPA Solutions', 'Integration'],
      price: 'Starting at $179/month',
      marketPrice: '$350-1200/month',
      benefits: ['Reduce manual work by 80%', 'Improve accuracy', 'Faster processes', 'Cost savings']
    },
    {
      icon: Users,
      title: 'Customer Experience',
      description: 'Enhance customer satisfaction with AI-powered support and engagement tools.',
      features: ['AI Chatbots', 'Sentiment Analysis', 'Personalization', 'Multi-channel Support'],
      price: 'Starting at $129/month',
      marketPrice: '$250-800/month',
      benefits: ['24/7 customer support', 'Improved satisfaction', 'Reduced response time', 'Better engagement']
    },
    {
      icon: Target,
      title: 'Digital Marketing',
      description: 'AI-powered marketing solutions to boost your online presence and conversions.',
      features: ['SEO Optimization', 'Content Generation', 'Social Media Management', 'Campaign Analytics'],
      price: 'Starting at $199/month',
      marketPrice: '$400-1500/month',
      benefits: ['Increase organic traffic', 'Better conversion rates', 'Automated campaigns', 'ROI tracking']
    },
    {
      icon: TrendingUp,
      title: 'Business Intelligence',
      description: 'Advanced analytics and reporting to drive strategic business decisions.',
      features: ['KPI Dashboards', 'Predictive Modeling', 'Market Analysis', 'Performance Tracking'],
      price: 'Starting at $349/month',
      marketPrice: '$700-2500/month',
      benefits: ['Strategic insights', 'Competitive advantage', 'Risk mitigation', 'Growth optimization']
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive solutions designed to accelerate your digital transformation and drive business growth.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 group">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{service.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{service.description}</p>
                
                {/* Pricing */}
                <div className="mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                    <span className="text-sm text-gray-400 line-through">{service.marketPrice}</span>
                  </div>
                  <p className="text-xs text-green-400 mt-1">Save up to 60% vs market rate</p>
                </div>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-2">Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.slice(0, 2).map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-green-300 text-sm">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our comprehensive services can help you achieve your business goals and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://ziontechgroup.com/contact" 
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
            >
              <ArrowRight className="w-5 h-5 mr-2" />
              Start Your Project
            </a>
            <a 
              href="tel:+13024640950" 
              className="border border-white text-white hover:bg-white hover:text-gray-900 font-bold py-4 px-8 rounded-lg transition-all duration-300"
            >
              Call +1 302 464 0950
            </a>
          </div>
          <div className="mt-8 text-center">
            <p className="text-gray-400 mb-2">Email: <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">kleber@ziontechgroup.com</a></p>
            <p className="text-gray-400">Address: 364 E Main St STE 1008, Middletown DE 19709</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default ServicesPage