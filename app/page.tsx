import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Zap, Shield, Globe, Cloud, Database, Smartphone, Brain, Cpu } from 'lucide-react'
import { Link } from 'react-router-dom'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

export default function HomePage() {
  const features = [
    {
      icon: <Brain className="w-12 h-12 text-blue-500" />,
      title: 'AI Services',
      description: 'Advanced artificial intelligence solutions to automate and optimize your business processes.',
      benefits: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
      link: '/ai-services'
    },
    {
      icon: <Cpu className="w-12 h-12 text-green-500" />,
      title: 'IT Services',
      description: 'Comprehensive IT solutions including cloud migration, cybersecurity, and infrastructure management.',
      benefits: ['Cloud Migration', 'Cybersecurity', 'DevOps', 'Infrastructure Management'],
      link: '/it-services'
    },
    {
      icon: <Smartphone className="w-12 h-12 text-purple-500" />,
      title: 'Micro SaaS',
      description: 'Specialized micro software solutions designed for specific business needs and workflows.',
      benefits: ['Custom Solutions', 'Rapid Deployment', 'Scalable Architecture', 'Cost Effective'],
      link: '/micro-saas-services'
    },
    {
      icon: <Zap className="w-12 h-12 text-yellow-500" />,
      title: '5G Implementation',
      description: 'Next-generation 5G network implementation and optimization for enhanced connectivity.',
      benefits: ['Network Design', 'Infrastructure Setup', 'Performance Optimization', 'Security Implementation'],
      link: '/5g-implementation'
    },
    {
      icon: <Cloud className="w-12 h-12 text-cyan-500" />,
      title: 'Cloud Services',
      description: 'Scalable cloud solutions to modernize your infrastructure and improve operational efficiency.',
      benefits: ['Cloud Migration', 'Multi-Cloud Strategy', 'Cost Optimization', 'Security & Compliance'],
      link: '/cloud-services'
    },
    {
      icon: <Database className="w-12 h-12 text-orange-500" />,
      title: 'Digital Transformation',
      description: 'Complete digital transformation services to modernize your business operations.',
      benefits: ['Process Automation', 'Data Analytics', 'Workflow Optimization', 'Change Management'],
      link: '/digital-transformation'
    }
  ]

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '5+', label: 'Years Experience' },
    { number: '99%', label: 'Client Satisfaction' }
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp Inc.',
      role: 'CEO',
      content: 'Zion Tech Group transformed our business with their AI solutions. The results exceeded our expectations.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'DataFlow Systems',
      role: 'CTO',
      content: 'Their cloud migration service was flawless. We saved 40% on infrastructure costs.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'InnovateLab',
      role: 'Founder',
      content: 'The micro SaaS solution they built for us has revolutionized our workflow.',
      rating: 5
    }
  ]

  return (
    <>
      <Helmet>
        <title>Zion Tech Group - AI & IT Solutions | Transform Your Business</title>
        <meta name="description" content="Leading provider of AI and IT solutions. We help businesses transform with cutting-edge technology including AI services, cloud migration, 5G implementation, and digital transformation." />
        <meta name="keywords" content="AI services, IT solutions, cloud migration, 5G implementation, digital transformation, micro SaaS, business automation" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Transform Your Business with <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">AI & IT Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We deliver cutting-edge artificial intelligence and information technology solutions that drive innovation, efficiency, and growth for businesses of all sizes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                to="/about" 
                className="inline-flex items-center border border-purple-400 text-purple-400 px-8 py-3 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Our Services</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive AI and IT solutions designed to meet your unique business needs and drive digital transformation.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 rounded-xl p-8 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    {feature.icon}
                    <h3 className="text-2xl font-semibold text-white ml-4">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-6">{feature.description}</p>
                  <ul className="space-y-2 mb-6">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  <Link 
                    to={feature.link}
                    className="inline-flex items-center text-purple-400 hover:text-purple-300 font-semibold"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">What Our Clients Say</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Don't just take our word for it. Here's what our satisfied clients have to say about our services.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/5 rounded-xl p-8 backdrop-blur-sm">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400">★</span>
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-purple-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our AI and IT solutions can help you achieve your goals and drive digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
              >
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                to="/ai-services" 
                className="inline-flex items-center border border-purple-400 text-purple-400 px-8 py-3 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}