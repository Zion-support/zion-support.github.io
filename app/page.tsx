'use client'
import React, { useState, useEffect } from 'react'
import SEOHead from './components/SEOHead'
import { ArrowRight, Zap, Shield, Globe, Database, Code, Cloud, Star, CheckCircle, Users, Award, TrendingUp } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false)
  const [stats, setStats] = useState({
    clients: 0,
    projects: 0,
    years: 0,
    satisfaction: 0
  })

  useEffect(() => {
    setIsVisible(true)
    
    // Animate stats on load
    const animateStats = () => {
      const targets = { clients: 500, projects: 1000, years: 10, satisfaction: 99 }
      const duration = 2000
      const steps = 60
      const stepDuration = duration / steps
      
      let current = { clients: 0, projects: 0, years: 0, satisfaction: 0 }
      
      const timer = setInterval(() => {
        Object.keys(targets).forEach(key => {
          const target = targets[key as keyof typeof targets]
          const increment = target / steps
          current[key as keyof typeof current] = Math.min(
            current[key as keyof typeof current] + increment,
            target
          )
        })
        
        setStats({ ...current })
        
        if (current.clients >= targets.clients) {
          clearInterval(timer)
        }
      }, stepDuration)
    }
    
    const timer = setTimeout(animateStats, 500)
    return () => clearTimeout(timer)
  }, [])

  const features = [
    {
      icon: <Zap className="w-8 h-8 text-blue-500" />,
      title: 'AI-Powered Solutions',
      description: 'Transform your business with our comprehensive AI services including content generation, chatbots, and automation.'
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: 'Cybersecurity',
      description: 'Protect your digital assets with our advanced security solutions and compliance management.'
    },
    {
      icon: <Cloud className="w-8 h-8 text-purple-500" />,
      title: 'Cloud Migration',
      description: 'Seamlessly migrate to the cloud with zero downtime and enhanced performance.'
    },
    {
      icon: <Database className="w-8 h-8 text-orange-500" />,
      title: 'Data Analytics',
      description: 'Unlock insights from your data with our advanced analytics and visualization tools.'
    },
    {
      icon: <Code className="w-8 h-8 text-red-500" />,
      title: 'DevOps & CI/CD',
      description: 'Streamline your development process with automated deployment and continuous integration.'
    },
    {
      icon: <Globe className="w-8 h-8 text-cyan-500" />,
      title: 'Global Reach',
      description: 'Scale your business worldwide with our international deployment and support services.'
    }
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp Inc.',
      content: 'Zion Tech Group transformed our entire IT infrastructure. The results exceeded our expectations.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'DataFlow Solutions',
      content: 'Their AI solutions helped us automate 80% of our processes. Incredible efficiency gains.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'InnovateTech',
      content: 'Professional, reliable, and innovative. Zion Tech Group is our go-to technology partner.',
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Transform Your Business with
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Advanced AI</span>
              <br />
              and IT Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We deliver cutting-edge technology solutions that drive growth, enhance security, 
              and streamline operations for businesses worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-500/50"
                aria-label="Get started with our services"
              >
                Get Started Today
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/about"
                className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-white/50"
                aria-label="Learn more about our company"
              >
                Learn More
              </Link>
            </div>
          </div>
          
          {/* Stats Section */}
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                {Math.floor(stats.clients)}+
              </div>
              <div className="text-gray-400 text-sm">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                {Math.floor(stats.projects)}+
              </div>
              <div className="text-gray-400 text-sm">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                {Math.floor(stats.years)}+
              </div>
              <div className="text-gray-400 text-sm">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                {Math.floor(stats.satisfaction)}%
              </div>
              <div className="text-gray-400 text-sm">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" aria-labelledby="features-heading">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 id="features-heading" className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to meet your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-500 group transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                role="article"
                aria-labelledby={`feature-${index}-title`}
              >
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 id={`feature-${index}-title`} className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <Link
                  to="/contact"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors group-hover:translate-x-1 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900 rounded"
                  aria-label={`Learn more about ${feature.title}`}
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5" aria-labelledby="trust-heading">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 id="trust-heading" className="text-2xl md:text-3xl font-bold text-white mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              We're proud to work with companies across various industries
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-2">Fortune 500</div>
              <div className="text-gray-400 text-sm">Companies</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-2">ISO 27001</div>
              <div className="text-gray-400 text-sm">Certified</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-2">24/7</div>
              <div className="text-gray-400 text-sm">Support</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-2">99.9%</div>
              <div className="text-gray-400 text-sm">Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" aria-labelledby="testimonials-heading">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 id="testimonials-heading" className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it - hear from businesses that have transformed with our solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className={`bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
                role="article"
                aria-labelledby={`testimonial-${index}-name`}
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-300 mb-6 italic text-lg">
                  "{testimonial.content}"
                </blockquote>
                <div>
                  <p id={`testimonial-${index}-name`} className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" aria-labelledby="cta-heading">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-12 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
            
            <div className="relative z-10">
              <h2 id="cta-heading" className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Join hundreds of businesses already using our solutions to drive growth and efficiency
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white/50"
                  aria-label="Start your business transformation journey"
                >
                  Start Your Journey
                  <ArrowRight className="inline-block ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/about"
                  className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-white/50"
                  aria-label="Learn more about our company and services"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}