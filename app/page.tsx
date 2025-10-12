import React from 'react'
import { ArrowRight, Shield, Globe, Database, Code, Cloud, Smartphone, Brain, CheckCircle, Star } from 'lucide-react'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import SEOHead from './components/SEOHead'
import { Link } from 'react-router-dom'

export default function HomePage() {
  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '99%', label: 'Success Rate' },
    { number: '24/7', label: 'Support' }
  ];

  const features = [
    {
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      title: 'AI-Powered Solutions',
      description: 'Transform your business with our comprehensive AI services including content generation, chatbots, and automation.',
      gradient: 'from-cyan-500/20 to-blue-500/20',
      borderColor: 'border-cyan-500/30'
    },
    {
      icon: <Shield className="w-8 h-8 text-green-400" />,
      title: 'Cybersecurity',
      description: 'Protect your digital assets with our advanced security solutions and compliance management.',
      gradient: 'from-green-500/20 to-emerald-500/20',
      borderColor: 'border-green-500/30'
    },
    {
      icon: <Cloud className="w-8 h-8 text-purple-400" />,
      title: 'Cloud Migration',
      description: 'Seamlessly migrate to the cloud with zero downtime and enhanced performance.',
      gradient: 'from-purple-500/20 to-pink-500/20',
      borderColor: 'border-purple-500/30'
    },
    {
      icon: <Database className="w-8 h-8 text-orange-400" />,
      title: 'Data Analytics',
      description: 'Unlock insights from your data with our advanced analytics and visualization tools.',
      gradient: 'from-orange-500/20 to-red-500/20',
      borderColor: 'border-orange-500/30'
    },
    {
      icon: <Code className="w-8 h-8 text-red-400" />,
      title: 'DevOps & CI/CD',
      description: 'Streamline your development process with automated deployment and continuous integration.',
      gradient: 'from-red-500/20 to-pink-500/20',
      borderColor: 'border-red-500/30'
    },
    {
      icon: <Globe className="w-8 h-8 text-cyan-400" />,
      title: 'Global Reach',
      description: 'Scale your business worldwide with our international deployment and support services.',
      gradient: 'from-cyan-500/20 to-teal-500/20',
      borderColor: 'border-cyan-500/30'
    }
  ]

  const microSaasServices = [
    {
      name: 'AI Content Generator Pro',
      description: 'Advanced AI-powered content creation with 50+ templates',
      price: '$29/month',
      features: ['50+ Templates', 'Multi-language Support', 'SEO Optimization', 'Brand Voice Training'],
      icon: <Brain className="w-6 h-6" />,
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10',
      borderColor: 'border-cyan-500/30'
    },
    {
      name: 'Smart Analytics Dashboard',
      description: 'Real-time business intelligence and data visualization',
      price: '$49/month',
      features: ['Real-time Data', 'Custom Reports', 'API Integration', 'Mobile App'],
      icon: <Database className="w-6 h-6" />,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/30'
    },
    {
      name: 'Cloud Security Monitor',
      description: 'Advanced threat detection and security monitoring',
      price: '$79/month',
      features: ['Threat Detection', 'Compliance Reports', 'Real-time Alerts', 'Incident Response'],
      icon: <Shield className="w-6 h-6" />,
      color: 'text-green-400',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/30'
    }
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp Inc.',
      content: 'Zion Tech Group transformed our entire IT infrastructure. The results exceeded our expectations.',
      rating: 5,
      avatar: 'SJ'
    },
    {
      name: 'Michael Chen',
      company: 'DataFlow Solutions',
      content: 'Their AI solutions helped us automate 80% of our processes. Incredible efficiency gains.',
      rating: 5,
      avatar: 'MC'
    },
    {
      name: 'Emily Rodriguez',
      company: 'InnovateTech',
      content: 'Professional, reliable, and innovative. Zion Tech Group is our go-to technology partner.',
      rating: 5,
      avatar: 'ER'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <SEOHead 
        title="Zion Tech Group - Advanced AI and IT Solutions"
        description="Leading provider of AI-powered solutions, IT services, and digital transformation for modern businesses. Transform your business with cutting-edge technology."
        keywords="AI solutions, IT services, digital transformation, cloud computing, 5G implementation, micro SAAS, artificial intelligence, business automation"
      />
      
      <div className="absolute inset-0 bg-cyber-grid opacity-10"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400"></div>
      
      <Navigation />
      
      <main className="relative z-10">
        <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <div className="mb-8">
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium mb-6 animate-pulse">
                🚀 Next-Generation Technology Solutions
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Transform Your Business with
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
                {' '}Advanced AI
              </span>
              <br />
              and IT Solutions
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              We deliver cutting-edge technology solutions that drive growth, enhance security, 
              and streamline operations for businesses worldwide. Experience the future of technology today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 flex items-center justify-center"
              >
                Get Started Today
                <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                to="/micro-saas-services"
                className="group border-2 border-purple-400 text-purple-400 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 flex items-center justify-center"
              >
                Explore Micro SaaS
                <Smartphone className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">500+</div>
                <div className="text-gray-400 text-sm">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">99.9%</div>
                <div className="text-gray-400 text-sm">Uptime Guarantee</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-pink-400 mb-2">24/7</div>
                <div className="text-gray-400 text-sm">Support Available</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">50+</div>
                <div className="text-gray-400 text-sm">Countries Served</div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Core Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Comprehensive technology solutions designed to meet your business needs and drive innovation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-br ${feature.gradient} backdrop-blur-lg rounded-2xl p-8 border ${feature.borderColor} hover:bg-white/20 transition-all duration-500 group hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20`}
                >
                  <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">{feature.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{feature.description}</p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-all duration-300 group-hover:translate-x-2 font-medium"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-900/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Micro SaaS</span> Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Powerful, affordable micro SaaS tools designed to streamline your business operations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasServices.map((service, index) => (
                <div
                  key={index}
                  className={`${service.bgColor} backdrop-blur-lg rounded-2xl p-8 border ${service.borderColor} hover:bg-white/10 transition-all duration-500 group hover:scale-105 hover:shadow-2xl`}
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className={`${service.color} group-hover:scale-110 transition-transform duration-300`}>
                      {service.icon}
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-white">{service.price}</div>
                      <div className="text-sm text-gray-400">per month</div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                    {service.name}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-sm text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link
                    to="/contact"
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center group"
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/30 to-purple-900/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                What Our <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Clients Say</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Don't just take our word for it - hear from businesses that have transformed with our solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-purple-500/30 transition-all duration-500 group hover:scale-105">
                  <div className="flex items-center mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-8 italic text-lg leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <p className="font-semibold text-white text-lg">{testimonial.name}</p>
                      <p className="text-gray-400">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 rounded-3xl p-16 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-cyber-grid opacity-10"></div>
              <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
              <div className="absolute bottom-10 left-10 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
              
              <div className="relative z-10">
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
                  Join hundreds of businesses already using our solutions to drive growth, efficiency, and innovation
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Link
                    to="/contact"
                    className="group bg-white text-purple-600 px-12 py-6 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center"
                  >
                    Start Your Journey
                    <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                  <Link
                    to="/micro-saas-services"
                    className="group border-2 border-white text-white px-12 py-6 rounded-2xl font-bold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                  >
                    Explore Solutions
                    <Smartphone className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}
