'use client'
import React from 'react'
import SEOHead from '../components/SEOHead'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight, Cpu, Shield, Cloud, Database, Users, Zap, Target, TrendingUp } from 'lucide-react'

const ITConsultingPage: React.FC = () => {
  const services = [
    {
      icon: <Cpu className="w-8 h-8 text-blue-500" />,
      title: 'IT Strategy & Planning',
      description: 'Comprehensive IT strategy development and technology roadmap planning.',
      features: ['Technology Assessment', 'Strategic Planning', 'Roadmap Development', 'Vendor Evaluation'],
      price: 'Starting at $299/hour'
    },
    {
      icon: <Cloud className="w-8 h-8 text-green-500" />,
      title: 'Cloud Migration',
      description: 'Seamless migration to cloud platforms with minimal downtime.',
      features: ['Cloud Assessment', 'Migration Planning', 'Data Migration', 'Post-Migration Support'],
      price: 'Starting at $199/hour'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'Cybersecurity Consulting',
      description: 'Comprehensive security assessment and implementation services.',
      features: ['Security Audit', 'Risk Assessment', 'Policy Development', 'Implementation Support'],
      price: 'Starting at $249/hour'
    },
    {
      icon: <Database className="w-8 h-8 text-purple-500" />,
      title: 'Data Management',
      description: 'Optimize your data infrastructure and implement best practices.',
      features: ['Data Architecture', 'Database Optimization', 'Data Governance', 'Backup Solutions'],
      price: 'Starting at $179/hour'
    },
    {
      icon: <Users className="w-8 h-8 text-orange-500" />,
      title: 'IT Team Training',
      description: 'Train your team on new technologies and best practices.',
      features: ['Technology Training', 'Best Practices', 'Certification Support', 'Ongoing Support'],
      price: 'Starting at $149/hour'
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: 'Digital Transformation',
      description: 'Transform your business with modern digital solutions.',
      features: ['Process Automation', 'Digital Workflows', 'Integration Services', 'Change Management'],
      price: 'Starting at $399/hour'
    }
  ]

  const benefits = [
    {
      icon: <Target className="w-6 h-6 text-green-500" />,
      title: 'Strategic Alignment',
      description: 'Align IT strategy with business goals for maximum impact'
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-blue-500" />,
      title: 'Cost Optimization',
      description: 'Reduce IT costs while improving performance and efficiency'
    },
    {
      icon: <Shield className="w-6 h-6 text-red-500" />,
      title: 'Enhanced Security',
      description: 'Strengthen your security posture with expert guidance'
    },
    {
      icon: <Zap className="w-6 h-6 text-purple-500" />,
      title: 'Faster Implementation',
      description: 'Accelerate project delivery with proven methodologies'
    }
  ]

  const process = [
    {
      step: '01',
      title: 'Discovery & Assessment',
      description: 'We analyze your current IT infrastructure and identify opportunities'
    },
    {
      step: '02',
      title: 'Strategy Development',
      description: 'We create a comprehensive IT strategy tailored to your needs'
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'We implement solutions with minimal disruption to your business'
    },
    {
      step: '04',
      title: 'Support & Optimization',
      description: 'We provide ongoing support and continuous optimization'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOHead 
        title="IT Consulting - Zion Tech Group"
        description="Expert IT consulting services to help you optimize your technology infrastructure, improve security, and drive digital transformation."
        keywords="IT consulting, technology consulting, IT strategy, digital transformation, cybersecurity consulting, Zion Tech Group"
      />
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            IT <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Consulting</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your IT infrastructure with expert consulting services. 
            We help you optimize technology, improve security, and drive digital transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#services" 
              className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center"
            >
              Explore Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a 
              href="/contact" 
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              Get Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our IT Consulting?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our experienced consultants deliver strategic IT solutions that drive business success.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center mb-4">
                  {benefit.icon}
                  <h3 className="text-lg font-semibold text-white ml-3">{benefit.title}</h3>
                </div>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our IT Consulting Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive IT consulting services designed to optimize your technology infrastructure.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center mb-4">
                  {service.icon}
                  <h3 className="text-xl font-semibold text-white ml-3">{service.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <span className="text-white font-semibold">{service.price}</span>
                  <a 
                    href="/contact" 
                    className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Consulting Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We follow a proven methodology to ensure successful IT transformation and optimization.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">{step.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your IT Infrastructure?
              </h2>
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Let's discuss how our IT consulting services can help optimize your technology and drive business growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
                >
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <a 
                  href="/pricing" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  View Pricing
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default ITConsultingPage
