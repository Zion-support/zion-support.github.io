import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, Server, Cloud, Shield, Database, Network, Code, Smartphone, Monitor, Cpu, Globe, BarChart3, CheckCircle, Star, Users, Clock, Target, Zap, FileText, Mail, MessageSquare, Calendar, DollarSign, Wrench, Settings, Lock, Eye, EyeOff, Key, Fingerprint, Smartphone as Phone, Laptop, Database as DB, Network as Net, AlertTriangle } from 'lucide-react'

const ITServicesPage: React.FC = () => {
  const services = [
    {
      icon: <Cloud className="w-8 h-8 text-cyan-400" />,
      title: 'Cloud Migration',
      description: 'Seamless migration to AWS, Azure, or Google Cloud with zero downtime and enhanced security.',
      price: 'Starting at $2,999',
      features: ['Zero downtime migration', 'Security hardening', 'Performance optimization', '24/7 support'],
      link: '/cloud-migration'
    },
    {
      icon: <Shield className="w-8 h-8 text-emerald-400" />,
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security services including threat detection, vulnerability assessment, and incident response.',
      price: 'Starting at $1,999',
      features: ['Threat detection', 'Vulnerability scanning', 'Incident response', 'Security training'],
      link: '/cybersecurity'
    },
    {
      icon: <Database className="w-8 h-8 text-purple-400" />,
      title: 'Database Management',
      description: 'Expert database administration, optimization, and migration services for all major database systems.',
      price: 'Starting at $1,499',
      features: ['Performance tuning', 'Backup & recovery', 'Security hardening', 'Monitoring'],
      link: '/database-management'
    },
    {
      icon: <Network className="w-8 h-8 text-orange-400" />,
      title: 'Network Infrastructure',
      description: 'Design, implement, and maintain robust network infrastructure for optimal performance and security.',
      price: 'Starting at $2,499',
      features: ['Network design', 'Security implementation', 'Performance monitoring', 'Disaster recovery'],
      link: '/network-infrastructure'
    },
    {
      icon: <Code className="w-8 h-8 text-pink-400" />,
      title: 'API Development',
      description: 'Custom API development and integration services for seamless data exchange and system connectivity.',
      price: 'Starting at $1,999',
      features: ['RESTful APIs', 'GraphQL', 'Microservices', 'Documentation'],
      link: '/api-development'
    },
    {
      icon: <Smartphone className="w-8 h-8 text-blue-400" />,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile app development for iOS and Android with modern frameworks.',
      price: 'Starting at $3,999',
      features: ['Native apps', 'Cross-platform', 'UI/UX design', 'App store deployment'],
      link: '/mobile-development'
    }
  ]

  const itSolutions = [
    {
      icon: <Server className="w-6 h-6 text-cyan-400" />,
      title: 'Server Management',
      description: 'Complete server administration including setup, monitoring, maintenance, and optimization.'
    },
    {
      icon: <Globe className="w-6 h-6 text-emerald-400" />,
      title: 'Web Development',
      description: 'Custom web applications and websites built with modern technologies and best practices.'
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-purple-400" />,
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with advanced analytics and visualization tools.'
    },
    {
      icon: <Settings className="w-6 h-6 text-orange-400" />,
      title: 'DevOps Solutions',
      description: 'Implement DevOps practices with CI/CD pipelines, automation, and infrastructure as code.'
    },
    {
      icon: <Wrench className="w-6 h-6 text-pink-400" />,
      title: 'System Integration',
      description: 'Connect disparate systems and applications for seamless data flow and process automation.'
    },
    {
      icon: <Lock className="w-6 h-6 text-blue-400" />,
      title: 'IT Security Audit',
      description: 'Comprehensive security assessments to identify vulnerabilities and strengthen your IT infrastructure.'
    }
  ]

  const pricingPlans = [
    {
      name: 'Basic Support',
      price: '$299',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        '8x5 support',
        'Basic monitoring',
        'Email support',
        'Monthly reports',
        'Remote assistance'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$799',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        '24/7 support',
        'Advanced monitoring',
        'Phone & email support',
        'Weekly reports',
        'On-site visits',
        'Priority response'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,999',
      period: '/month',
      description: 'For large organizations',
      features: [
        '24/7 dedicated support',
        'Full monitoring suite',
        'Dedicated team',
        'Daily reports',
        'Unlimited on-site',
        'Custom solutions'
      ],
      popular: false
    }
  ]

  const stats = [
    { number: '99.9%', label: 'Uptime Guarantee', icon: <Server className="w-6 h-6 text-cyan-400" /> },
    { number: '24/7', label: 'Support Available', icon: <Clock className="w-6 h-6 text-emerald-400" /> },
    { number: '500+', label: 'Projects Completed', icon: <Target className="w-6 h-6 text-purple-400" /> },
    { number: '50+', label: 'Expert Engineers', icon: <Users className="w-6 h-6 text-orange-400" /> }
  ]

  const testimonials = [
    {
      name: 'John Smith',
      company: 'TechCorp Inc.',
      content: 'Zion Tech Group\'s IT services have been exceptional. Their cloud migration was seamless and our systems have never been more secure and efficient.',
      rating: 5
    },
    {
      name: 'Maria Garcia',
      company: 'Financial Services',
      content: 'The cybersecurity solutions they implemented have given us complete peace of mind. Our data is protected and our compliance requirements are fully met.',
      rating: 5
    },
    {
      name: 'David Chen',
      company: 'E-commerce Platform',
      content: 'Their API development and integration services helped us connect all our systems seamlessly. The performance improvements have been remarkable.',
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>IT Services - Comprehensive Technology Solutions | Zion Tech Group</title>
        <meta name="description" content="Expert IT services including cloud migration, cybersecurity, database management, and network infrastructure. 99.9% uptime guarantee with 24/7 support." />
        <meta name="keywords" content="IT services, cloud migration, cybersecurity, database management, network infrastructure, API development, mobile development" />
        <link rel="canonical" href="https://ziontechgroup.com/it-services" />
      </Helmet>

      <div className="min-h-screen bg-gray-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10" />
          <div className="relative max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 px-6 py-3 rounded-full text-sm font-medium mb-8 border border-cyan-400/30">
              <Server className="w-4 h-4" />
              <span>Comprehensive IT Solutions</span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Expert <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">IT Services</span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Transform your business with our comprehensive IT services. From cloud migration to cybersecurity, 
              we provide expert solutions to keep your technology infrastructure secure, efficient, and scalable.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Link 
                to="/contact" 
                className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transform hover:scale-105"
              >
                <span>Get IT Assessment</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/demo" 
                className="group border-2 border-cyan-400 text-cyan-400 px-10 py-4 rounded-xl font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm"
              >
                <span>View Our Work</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5" />
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Why Choose <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Our IT Services?</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the power of expert IT services with our proven track record.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="group text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                  <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-sm group-hover:text-white transition-colors">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-cyan-500/5 to-pink-500/5" />
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">IT Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Comprehensive IT solutions designed to meet your business needs and drive growth.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="space-y-3">
                    <div className="text-2xl font-bold text-cyan-400 mb-2">
                      {service.price}
                    </div>
                    <div className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2 text-gray-400 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Link 
                      to={service.link}
                      className="block w-full mt-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-center py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-500/25"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* IT Solutions Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-slate-800/50 to-purple-900/50 relative">
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Additional <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">IT Solutions</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Complete IT solutions to support your business operations and growth.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itSolutions.map((solution, index) => (
                <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      {solution.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {solution.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    {solution.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5" />
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                IT Support <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Pricing</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the support plan that fits your business needs. All plans include our expert IT services.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border transition-all duration-300 hover:scale-105 ${
                  plan.popular 
                    ? 'border-cyan-400/50 shadow-2xl shadow-cyan-500/20' 
                    : 'border-white/20 hover:border-cyan-400/30'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-2">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    to="/contact" 
                    className={`block w-full text-center py-3 rounded-xl font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                        : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-purple-900/50 to-pink-900/50 relative">
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                What Our <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Clients Say</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Join hundreds of satisfied clients who trust our IT services for their business needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <div className="text-white font-semibold">{testimonial.name}</div>
                      <div className="text-gray-400 text-sm">{testimonial.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10" />
          <div className="relative max-w-7xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 rounded-3xl p-8 sm:p-12 lg:p-16">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Ready to Transform Your <span className="bg-gradient-to-r from-cyan-300 to-pink-300 bg-clip-text text-transparent">IT Infrastructure?</span>
              </h2>
              
              <p className="text-xl sm:text-2xl text-white/90 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed">
                Let our expert IT team help you build a secure, efficient, and scalable technology infrastructure. 
                Get a free IT assessment and discover how we can optimize your systems.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link 
                  to="/contact" 
                  className="group bg-white text-cyan-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <span>Get Free Assessment</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  to="/pricing" 
                  className="group border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm"
                >
                  <span>View All Services</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default ITServicesPage
