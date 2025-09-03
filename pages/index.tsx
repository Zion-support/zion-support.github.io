<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowRight, Brain, Zap, Shield, Cloud, Users, CheckCircle, Star } from 'lucide-react';
=======
import React from
  'react';
import Head from
  'next/head';
>>>>>>> origin/main

export default function Home() {
  const featuredServices = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Customer Sentiment Analyzer",
      description: "Monitor customer feedback across all channels in real-time with AI-powered sentiment analysis.",
      price: "From $199/month",
      link: "/services/ai-customer-sentiment-analyzer"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "AI Automated Email Follow-up",
      description: "Intelligent email automation with personalized sequences and optimal timing predictions.",
      price: "From $49/month",
      link: "/services/ai-automated-email-followup"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Zero Trust Security Platform",
      description: "Comprehensive security solution with identity verification and network segmentation.",
      price: "From $2,000/month",
      link: "/services/zero-trust-security-platform"
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Cost Optimization Suite",
      description: "AI-powered cloud cost management across AWS, Azure, and GCP with automated optimization.",
      price: "From $500/month",
      link: "/services/cloud-cost-optimization-suite"
    }
  ];

  const benefits = [
    "Reduce operational costs by 30-50%",
    "Improve efficiency with AI automation",
    "Scale your business with cloud solutions",
    "Enhance security with zero-trust architecture",
    "24/7 expert support and monitoring"
  ];

  return (
    <>
      <Head>
        <title>Zion Tech Group - Leading AI & Technology Solutions Provider</title>
        <meta name="description" content="Transform your business with our AI services, micro SaaS solutions, and IT infrastructure. Expert team delivering cutting-edge technology solutions." />
        <meta name="keywords" content="AI services, micro SaaS, IT solutions, cloud computing, cybersecurity, automation" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://ziontechgroup.com" />
      </Head>
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Transform Your Business with
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"> AI & Technology</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed max-w-4xl mx-auto">
              Leading provider of revolutionary AI services, micro SaaS solutions, and cutting-edge IT infrastructure. 
              We help businesses automate, optimize, and scale with intelligent technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/contact">
                <span className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors cursor-pointer inline-flex items-center">
                  Get Free Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </span>
              </Link>
              <Link href="/services">
                <span className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors cursor-pointer">
                  Explore Services
                </span>
              </Link>
            </div>
            
            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-gray-300">📞</span>
                <a href="tel:+13024640950" className="text-white hover:text-blue-300">+1 302 464 0950</a>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-300">✉️</span>
                <a href="mailto:kleber@ziontechgroup.com" className="text-white hover:text-blue-300">kleber@ziontechgroup.com</a>
              </div>
            </div>
=======
import React from "react"
import dynamic from "next/dynamic"
import { motion } from "framer-motion"
import { Zap, Shield, Globe, CheckCircle, Users, ArrowRight } from "lucide-react"
import SEO from "../components/SEO"

const Link = dynamic(() => import("next/link"), { ssr: false })

const Home: React.FC = () => {
  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "99.9%", label: "Uptime Guarantee" },
    { number: "24/7", label: "Support Available" },
  ]

  const services = [
    {
      icon: Zap,
      title: "Micro SaaS Solutions",
      description: "Innovative, focused software solutions that solve specific business problems with minimal overhead. From AI-powered tools to productivity platforms.",
      tags: ["AI Tools", "Productivity", "Automation"],
      link: "/services/micro-saas",
      color: "blue"
    },
    {
      icon: Shield,
      title: "IT Services",
      description: "Comprehensive IT infrastructure, cloud migration, cybersecurity, and digital transformation solutions for modern businesses.",
      tags: ["Cloud Migration", "Cybersecurity", "DevOps"],
      link: "/services/it-services",
      color: "green"
    },
    {
      icon: Globe,
      title: "AI Services",
      description: "Cutting-edge artificial intelligence solutions including machine learning, computer vision, and predictive analytics.",
      tags: ["Machine Learning", "Computer Vision", "NLP"],
      link: "/services/ai-services",
      color: "purple"
    }
  ]

  const features = [
    {
      icon: CheckCircle,
      title: "Proven Expertise",
      description: "500+ successful projects with industry-leading expertise and cutting-edge technology"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security with 99.9% uptime guarantee and SOC 2 compliance"
    },
    {
      icon: Users,
      title: "Dedicated Support",
      description: "24/7 expert support from our experienced team of technology professionals"
    },
    {
      icon: Zap,
      title: "Fast Delivery",
      description: "Agile development with rapid deployment capabilities and continuous integration"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Zion Tech Group - Leading AI & Technology Solutions" 
        description="Transform your business with cutting-edge AI solutions, cloud services, and technology consulting. Expert team delivering innovative results."
        keywords="AI solutions, cloud services, technology consulting, micro SaaS, IT services, cybersecurity, machine learning"
      />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Transform Your Business with
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Cutting-Edge Technology
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
              Zion Tech Group delivers innovative AI solutions, comprehensive IT services, and micro SaaS applications 
              to help businesses thrive in the digital age. Experience 24/7 support and enterprise-grade security.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 cursor-pointer inline-flex items-center justify-center text-lg hover:scale-105 hover:shadow-lg">
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link href="/about" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300 cursor-pointer inline-flex items-center justify-center text-lg hover:scale-105">
                Learn More About Us
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-6"
                >
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-blue-200">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Core Services</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We provide comprehensive technology solutions to help your business thrive in the digital age. 
              From innovative micro SaaS applications to cutting-edge AI services and enterprise IT solutions.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <motion.div
                  key={service.title}
                  className="bg-white p-6 md:p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="text-blue-600 mb-4 group-hover:text-purple-600 transition-colors">
                    <IconComponent className="w-10 h-10 md:w-12 md:h-12" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 text-sm md:text-base leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.tags.map((tag) => (
                      <span 
                        key={tag}
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          service.color === 'blue' ? 'bg-blue-50 text-blue-700' :
                          service.color === 'green' ? 'bg-green-50 text-green-700' :
                          'bg-purple-50 text-purple-700'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link 
                    href={service.link} 
                    className="text-blue-600 hover:text-blue-700 font-semibold group-hover:text-purple-600 transition-colors inline-flex items-center"
                  >
                    Explore Solutions <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              )
            })}
>>>>>>> main
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Featured Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our most popular AI and technology solutions designed to transform your business operations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="text-blue-600 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{service.description}</p>
                <div className="text-blue-600 font-semibold mb-4">{service.price}</div>
                <Link href={service.link}>
                  <span className="text-blue-600 hover:text-blue-700 font-medium text-sm cursor-pointer inline-flex items-center">
                    Learn More
                    <ArrowRight className="ml-1 w-4 h-4" />
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Zion Tech Group?</h2>
              <p className="text-xl text-gray-600 mb-8">
                We deliver measurable results through cutting-edge technology and expert implementation. 
                Our solutions are designed to scale with your business and provide long-term value.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-8">
              <div className="text-center">
                <Users className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Expert Team</h3>
                <p className="text-gray-600 mb-6">
                  Our team of AI specialists, cloud architects, and security experts brings decades of experience 
                  in delivering enterprise-grade solutions.
                </p>
                <div className="flex items-center justify-center gap-2 text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                  <span className="text-gray-600 ml-2">5.0/5.0 Client Rating</span>
                </div>
              </div>
            </div>
=======
      {/* Features Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">Why Choose Zion Tech Group?</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We deliver exceptional results through innovative technology solutions, cutting-edge AI, and dedicated 24/7 support.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  className="text-center group p-6 bg-gray-50 rounded-lg hover:bg-white hover:shadow-lg transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-blue-100 rounded-full group-hover:bg-purple-100 transition-colors">
                      <IconComponent className="w-8 h-8 text-blue-600 group-hover:text-purple-600 transition-colors" />
                    </div>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">{feature.description}</p>
                </motion.div>
              )
            })}
>>>>>>> main
          </div>
        </div>
      </section>

      {/* CTA Section */}
<<<<<<< HEAD
      <section className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get a free consultation with our experts and discover how our AI and technology solutions can drive your business forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <span className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors cursor-pointer inline-flex items-center">
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </span>
            </Link>
            <Link href="/services">
              <span className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors cursor-pointer">
                View All Services
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
=======
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg sm:text-xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
              Let's discuss how we can help transform your business with cutting-edge technology solutions,
              innovative AI services, and comprehensive IT solutions.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-2xl mb-2">📞</div>
                <h3 className="font-semibold mb-2 text-white">Call Us</h3>
                <a href="tel:+13024640950" className="text-blue-200 hover:text-white transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-2xl mb-2">✉️</div>
                <h3 className="font-semibold mb-2 text-white">Email Us</h3>
                <a href="mailto:kleber@ziontechgroup.com" className="text-blue-200 hover:text-white transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-2xl mb-2">📍</div>
                <h3 className="font-semibold mb-2 text-white">Visit Us</h3>
                <p className="text-blue-200 text-sm">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-2xl mx-auto">
              <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 cursor-pointer inline-flex items-center justify-center text-lg hover:scale-105 hover:shadow-lg">
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link href="/about" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300 cursor-pointer inline-flex items-center justify-center text-lg hover:scale-105">
                Learn More About Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home
>>>>>>> main
