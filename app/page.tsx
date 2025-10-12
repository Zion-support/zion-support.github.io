import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Brain, Zap, Shield, Cloud, Smartphone, Cpu, Database, BarChart3, Users, Settings, Globe, Lock, Code2, MessageSquare, Target, TrendingUp, Star, Sparkles, Rocket } from 'lucide-react'

export default function HomePage() {
  const stats = [
    { number: '1,200+', label: 'Projects Completed', icon: <Rocket className="w-6 h-6" /> },
    { number: '99.8%', label: 'Client Satisfaction', icon: <Star className="w-6 h-6" /> },
    { number: '24/7', label: 'Support Available', icon: <Globe className="w-6 h-6" /> },
    { number: '150+', label: 'Expert Team Members', icon: <Users className="w-6 h-6" /> },
    { number: '50+', label: 'Countries Served', icon: <Globe className="w-6 h-6" /> },
    { number: '300%', label: 'Average ROI', icon: <TrendingUp className="w-6 h-6" /> },
    { number: '99.9%', label: 'Uptime Guarantee', icon: <Shield className="w-6 h-6" /> },
    { number: '48hr', label: 'Response Time', icon: <MessageSquare className="w-6 h-6" /> }
  ]

  const services = [
    {
      title: 'AI Smart Scheduler',
      description: 'Intelligent scheduling that learns from your patterns and optimizes meetings automatically.',
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      link: '/ai-smart-scheduler',
      features: ['AI-powered optimization', 'Team coordination', 'Auto-optimization']
    },
    {
      title: 'AI E-commerce Optimizer Pro',
      description: 'Boost sales by up to 40% with AI-powered e-commerce optimization and personalization.',
      icon: <MessageSquare className="w-8 h-8 text-orange-400" />,
      link: '/ai-ecommerce-optimizer-pro',
      features: ['Revenue growth', 'Customer insights', 'Cart optimization']
    },
    {
      title: 'Advanced Security Suite',
      description: 'Comprehensive cybersecurity with AI threat detection and 24/7 monitoring.',
      icon: <Shield className="w-8 h-8 text-red-400" />,
      link: '/advanced-security-suite',
      features: ['360° protection', 'AI threat detection', 'Compliance ready']
    },
    {
      title: '5G Smart City Solutions',
      description: 'Transform cities with 5G-powered smart infrastructure and AI-driven analytics.',
      icon: <Zap className="w-8 h-8 text-blue-400" />,
      link: '/5g-smart-city-solutions',
      features: ['Ultra-fast connectivity', 'Smart infrastructure', 'Citizen engagement']
    },
    {
      title: 'AI Content Moderation Pro',
      description: 'Automated content moderation with 99.9% accuracy using advanced AI algorithms.',
      icon: <Lock className="w-8 h-8 text-purple-400" />,
      link: '/ai-content-moderation-pro',
      features: ['Real-time monitoring', 'Multi-language support', 'Custom policies']
    },
    {
      title: 'Cloud Migration Pro',
      description: 'Seamless cloud migration with zero downtime and enhanced security protocols.',
      icon: <Cloud className="w-8 h-8 text-green-400" />,
      link: '/cloud-migration-pro',
      features: ['Zero downtime', 'Enhanced security', 'Cost optimization']
    }
  ]

  const features = [
    {
      icon: <Brain className="w-12 h-12 text-cyan-400" />,
      title: 'AI-Powered Solutions',
      description: 'Leverage cutting-edge artificial intelligence to automate processes, gain insights, and drive innovation across your organization.'
    },
    {
      icon: <Shield className="w-12 h-12 text-green-400" />,
      title: 'Enterprise Security',
      description: 'Protect your digital assets with our comprehensive security solutions, including threat detection, compliance management, and 24/7 monitoring.'
    },
    {
      icon: <Cloud className="w-12 h-12 text-blue-400" />,
      title: 'Cloud Infrastructure',
      description: 'Build scalable, secure, and cost-effective cloud solutions that grow with your business and adapt to changing demands.'
    },
    {
      icon: <Zap className="w-12 h-12 text-purple-400" />,
      title: '5G Technology',
      description: 'Harness the power of 5G networks to enable ultra-fast connectivity, IoT solutions, and next-generation applications.'
    }
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CTO, TechCorp',
      content: 'Zion Tech Group transformed our entire IT infrastructure. Their AI solutions increased our efficiency by 300% and reduced costs by 40%.',
      avatar: 'SJ'
    },
    {
      name: 'Michael Chen',
      role: 'CEO, InnovateLabs',
      content: 'The 5G implementation was flawless. We now have the fastest network in our industry and our smart city initiatives are thriving.',
      avatar: 'MC'
    },
    {
      name: 'Emily Rodriguez',
      role: 'VP Operations, GlobalTech',
      content: 'Their cybersecurity suite protected us from multiple threats. The AI threat detection is incredibly accurate and fast.',
      avatar: 'ER'
    }
  ]

  return (
    <>
      <Helmet>
        <title>Zion Tech Group - AI & IT Solutions | Transforming Businesses with Technology</title>
        <meta name="description" content="Leading provider of AI, cloud services, cybersecurity, and 5G solutions. Transform your business with cutting-edge technology and expert consulting." />
        <meta name="keywords" content="AI solutions, cloud services, cybersecurity, 5G technology, IT consulting, business transformation" />
        <meta property="og:title" content="Zion Tech Group - AI & IT Solutions" />
        <meta property="og:description" content="Transform your business with cutting-edge AI and IT solutions" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com" />
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-8">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Transform Your Business with
                <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  AI & IT Solutions
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Leading provider of cutting-edge AI, cloud services, cybersecurity, and 5G solutions. 
                We help businesses innovate, scale, and secure their digital future.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 shadow-[0_0_30px_rgba(6,182,212,0.3)] hover:shadow-[0_0_40px_rgba(6,182,212,0.5)] transform hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/about"
                className="group border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-white transition-all duration-300 backdrop-blur-sm"
              >
                Learn More
                <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 max-w-6xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="flex justify-center mb-2 text-cyan-400 group-hover:text-purple-400 transition-colors">
                    {stat.icon}
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-cyan-500/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-pink-500/20 rounded-full blur-xl animate-pulse delay-500"></div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Featured Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover our comprehensive suite of AI and IT solutions designed to transform your business operations and drive growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Link
                  key={index}
                  to={service.link}
                  className="group bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.2)] hover:scale-105"
                >
                  <div className="flex items-center mb-4">
                    {service.icon}
                    <h3 className="text-xl font-semibold text-white ml-3 group-hover:text-cyan-400 transition-colors">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 mb-4 group-hover:text-gray-200 transition-colors">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="px-3 py-1 bg-cyan-500/10 text-cyan-400 text-sm rounded-full border border-cyan-500/20"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center text-cyan-400 group-hover:text-purple-400 transition-colors">
                    <span className="text-sm font-medium">Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Zion Tech Group</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We combine cutting-edge technology with deep industry expertise to deliver solutions that drive real business value.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center group">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-slate-800/50 rounded-2xl border border-slate-700/50 group-hover:border-cyan-500/50 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.2)]">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 group-hover:text-gray-200 transition-colors">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                What Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Clients Say</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join hundreds of satisfied clients who have transformed their businesses with our solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.1)]">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                      {testimonial.avatar}
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold text-white">{testimonial.name}</h4>
                      <p className="text-cyan-400 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 italic">"{testimonial.content}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our AI and IT solutions can drive your success. Get a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 shadow-[0_0_30px_rgba(6,182,212,0.3)] hover:shadow-[0_0_40px_rgba(6,182,212,0.5)] transform hover:scale-105"
              >
                Get Free Consultation
                <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/pricing"
                className="group border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-white transition-all duration-300 backdrop-blur-sm"
              >
                View Pricing
                <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}