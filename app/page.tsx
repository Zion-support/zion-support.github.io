import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Brain, Zap, Shield, Cloud, Smartphone, Cpu, Database, BarChart3, Users, Settings, Globe, Lock, Code2, MessageSquare, Target, TrendingUp, Star } from 'lucide-react'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

export default function HomePage() {
  const features = [
    {
      icon: <Brain className="w-12 h-12 text-neon-cyan" />,
      title: 'AI Services',
      description: 'Advanced artificial intelligence solutions to automate and optimize your business processes.',
      benefits: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
      link: '/ai-services',
      pricing: 'Starting at $99/month',
      popular: true
    },
    {
      icon: <Cpu className="w-12 h-12 text-neon-green" />,
      title: 'IT Services',
      description: 'Comprehensive IT solutions including cloud migration, cybersecurity, and infrastructure management.',
      benefits: ['Cloud Migration', 'Cybersecurity', 'DevOps', 'Infrastructure Management'],
      link: '/it-services',
      pricing: 'Starting at $1,500/month',
      popular: true
    },
    {
      icon: <Smartphone className="w-12 h-12 text-neon-pink" />,
      title: 'Micro SaaS',
      description: 'Specialized micro software solutions designed for specific business needs and workflows.',
      benefits: ['Custom Solutions', 'Rapid Deployment', 'Scalable Architecture', 'Cost Effective'],
      link: '/micro-saas-services',
      pricing: 'Starting at $29/month',
      popular: false
    },
    {
      icon: <Zap className="w-12 h-12 text-neon-yellow" />,
      title: '5G Implementation',
      description: 'Next-generation 5G network implementation and optimization for enhanced connectivity.',
      benefits: ['Network Design', 'Infrastructure Setup', 'Performance Optimization', 'Security Implementation'],
      link: '/5g-implementation',
      pricing: 'Starting at $5,000/month',
      popular: false
    },
    {
      icon: <Cloud className="w-12 h-12 text-neon-orange" />,
      title: 'Cloud Services',
      description: 'Professional cloud services including migration, infrastructure setup, security, and optimization.',
      benefits: ['Cloud Migration', 'Infrastructure Setup', 'Security Solutions', 'Cost Optimization'],
      link: '/cloud-services',
      pricing: 'Starting at $2,500/month',
      popular: true
    },
    {
      icon: <Database className="w-12 h-12 text-neon-purple" />,
      title: 'Digital Transformation',
      description: 'Transform your business for the digital age with comprehensive digital transformation services.',
      benefits: ['Process Automation', 'Digital Workforce', 'Customer Experience', 'Data Strategy'],
      link: '/digital-transformation',
      pricing: 'Starting at $3,000/month',
      popular: false
    }
  ]

  const additionalServices = [
    {
      icon: <BarChart3 className="w-8 h-8 text-cyan-400" />,
      title: 'Data Analytics Pro',
      description: 'Advanced business intelligence and data visualization',
      pricing: '$199/month',
      link: '/data-analytics'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-400" />,
      title: 'Cybersecurity Suite',
      description: 'Comprehensive security solutions and monitoring',
      pricing: '$299/month',
      link: '/cybersecurity'
    },
    {
      icon: <Users className="w-8 h-8 text-indigo-400" />,
      title: 'AI Consulting',
      description: 'Expert guidance on AI implementation',
      pricing: '$150/hour',
      link: '/consulting'
    },
    {
      icon: <Globe className="w-8 h-8 text-green-400" />,
      title: 'Web Development',
      description: 'Modern, responsive web applications',
      pricing: '$2,000/project',
      link: '/web-development'
    },
    {
      icon: <Lock className="w-8 h-8 text-yellow-400" />,
      title: 'Blockchain Solutions',
      description: 'Secure blockchain implementation',
      pricing: '$5,000/project',
      link: '/blockchain'
    },
    {
      icon: <Code2 className="w-8 h-8 text-purple-400" />,
      title: 'API Development',
      description: 'RESTful and GraphQL APIs',
      pricing: '$1,500/project',
      link: '/api-development'
    }
  ]

  const stats = [
    { number: '1,200+', label: 'Projects Completed' },
    { number: '99.8%', label: 'Client Satisfaction' },
    { number: '24/7', label: 'Support Available' },
    { number: '150+', label: 'Expert Team Members' },
    { number: '50+', label: 'Countries Served' },
    { number: '300%', label: 'Average ROI' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '48hr', label: 'Response Time' }
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp Inc.',
      role: 'CTO',
      content: 'Zion Tech Group transformed our entire IT infrastructure. The AI solutions they implemented increased our efficiency by 300%.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'DataFlow Systems',
      role: 'CEO',
      content: 'Outstanding service and expertise. Their cloud migration saved us $50,000 annually while improving performance.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'InnovateLab',
      role: 'Founder',
      content: 'The micro SaaS solutions they developed for us are game-changers. Highly recommend their services.',
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen bg-futuristic-dark relative">
      <Helmet>
        <title>Zion Tech Group - Advanced AI and IT Solutions | 300% ROI Guaranteed</title>
        <meta name="description" content="Leading provider of AI-powered solutions, 5G implementation, and enterprise IT services. Transform your business with cutting-edge technology. Contact: +1 302 464 0950" />
        <meta name="keywords" content="AI solutions, IT services, 5G implementation, cloud services, digital transformation, Zion Tech Group, micro SaaS, cybersecurity, data analytics" />
      </Helmet>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="bg-gradient-to-r from-neon-cyan to-neon-pink text-transparent bg-clip-text text-sm font-semibold uppercase tracking-wider animate-neon-pulse">
                ✨ Trusted by 1,200+ Companies Worldwide
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in">
              <span className="bg-gradient-to-r from-neon-cyan via-neon-pink to-neon-green text-transparent bg-clip-text">
                Advanced AI & IT Solutions
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8 px-4 animate-slide-up">
              Transform your business with cutting-edge artificial intelligence and information technology solutions designed to accelerate growth and efficiency. 
              <span className="text-neon-cyan font-semibold"> 300% ROI guaranteed or your money back.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-neon-cyan to-neon-pink text-futuristic-dark px-8 py-4 rounded-lg font-bold hover:from-neon-pink hover:to-neon-cyan transition-all duration-300 flex items-center justify-center shadow-neon-cyan/50 hover:shadow-neon-pink/50 hover:scale-105 transform animate-neon-pulse"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/about"
                className="border-2 border-neon-cyan text-neon-cyan px-8 py-4 rounded-lg font-semibold hover:bg-neon-cyan hover:text-futuristic-dark transition-all duration-300 shadow-neon-cyan/30 hover:shadow-neon-cyan/50"
              >
                Learn More
              </Link>
            </div>
            <div className="mt-8 text-sm text-gray-400">
              <p>📞 Call us: <a href="tel:+13024640950" className="text-neon-cyan hover:text-neon-pink transition-colors">+1 302 464 0950</a></p>
              <p>📧 Email: <a href="mailto:kleber@ziontechgroup.com" className="text-neon-cyan hover:text-neon-pink transition-colors">kleber@ziontechgroup.com</a></p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-futuristic-light/20 backdrop-blur-sm rounded-xl p-4 border border-neon-cyan/20 hover:border-neon-cyan/50 transition-all duration-300 hover:shadow-neon-cyan/20 hover:scale-105">
                  <div className="text-2xl md:text-3xl font-bold text-neon-cyan mb-2 animate-neon-pulse">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-xs md:text-sm group-hover:text-neon-cyan/80 transition-colors duration-300">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-neon-cyan to-neon-pink text-transparent bg-clip-text">
                Our Core Services
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive solutions tailored to your business needs with guaranteed ROI.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <Link key={index} to={feature.link} className="bg-futuristic-light/10 backdrop-blur-lg rounded-2xl p-8 border border-neon-cyan/20 hover:border-neon-cyan/50 transition-all duration-300 group hover:shadow-hologram animate-fade-in">
                <div className="flex items-center justify-between mb-4">
                  <div className="group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                  {feature.popular && (
                    <span className="bg-gradient-to-r from-neon-cyan to-neon-pink text-futuristic-dark px-3 py-1 rounded-full text-xs font-bold animate-neon-pulse">
                      POPULAR
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-neon-cyan transition-colors">{feature.title}</h3>
                <p className="text-gray-300 mb-6 group-hover:text-gray-200 transition-colors">{feature.description}</p>
                <ul className="space-y-2 mb-6">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300 group-hover:text-neon-cyan/80 transition-colors">
                      <CheckCircle className="w-4 h-4 text-neon-green mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg font-bold text-neon-cyan">{feature.pricing}</span>
                  <div className="flex items-center text-yellow-400">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="ml-1 text-sm">4.9</span>
                  </div>
                </div>
                <div className="mt-6 flex items-center text-neon-cyan group-hover:text-neon-pink transition-colors">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-neon-pink to-neon-green text-transparent bg-clip-text">
                Additional Services
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Specialized solutions for specific business needs and requirements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <Link key={index} to={service.link} className="bg-futuristic-light/5 backdrop-blur-sm rounded-xl p-6 border border-neon-pink/20 hover:border-neon-pink/50 transition-all duration-300 group hover:shadow-neon-pink/20">
                <div className="flex items-center justify-between mb-4">
                  <div className="group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                  <span className="text-sm font-semibold text-neon-pink">{service.pricing}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-neon-pink transition-colors">{service.title}</h3>
                <p className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors">{service.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-neon-green to-neon-cyan text-transparent bg-clip-text">
                What Our Clients Say
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it - hear from our satisfied clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-futuristic-light/10 backdrop-blur-lg rounded-2xl p-6 border border-neon-green/20 hover:border-neon-green/50 transition-all duration-300 group">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 group-hover:text-white transition-colors">"{testimonial.content}"</p>
                <div className="border-t border-neon-green/20 pt-4">
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-neon-green">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-neon-cyan via-neon-pink to-neon-green rounded-3xl p-6 sm:p-8 lg:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-hologram-overlay animate-hologram"></div>
            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-futuristic-dark mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-lg sm:text-xl text-futuristic-dark/80 mb-8 max-w-2xl mx-auto">
                Join 1,200+ companies that trust Zion Tech Group for their AI and IT solutions. 
                <span className="font-bold"> 300% ROI guaranteed or your money back.</span>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-futuristic-dark text-neon-cyan px-8 py-4 rounded-lg font-bold hover:bg-futuristic-darker transition-all duration-300 shadow-neon-cyan/50 hover:shadow-neon-cyan/70 hover:scale-105 transform"
                >
                  Get Started Today
                </Link>
                <Link
                  to="/about"
                  className="border-2 border-futuristic-dark text-futuristic-dark px-8 py-4 rounded-lg font-semibold hover:bg-futuristic-dark hover:text-neon-cyan transition-all duration-300"
                >
                  Learn More
                </Link>
              </div>
              <div className="mt-8 text-futuristic-dark/70">
                <p>📞 Call: <a href="tel:+13024640950" className="font-semibold hover:text-futuristic-dark transition-colors">+1 302 464 0950</a></p>
                <p>📧 Email: <a href="mailto:kleber@ziontechgroup.com" className="font-semibold hover:text-futuristic-dark transition-colors">kleber@ziontechgroup.com</a></p>
                <p>📍 Address: 364 E Main St STE 1008, Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}