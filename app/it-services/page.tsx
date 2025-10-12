'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle, 
  Star,
  Users,
  Shield,
  Database,
  Brain,
  Cloud,
  Code,
  Smartphone,
  Cpu,
  Globe,
  Lock,
  TrendingUp,
  Phone,
  Mail,
  MapPin,
  Zap,
  Award,
  Target,
  Lightbulb,
  Server,
  BarChart3
} from 'lucide-react';

export default function ITServicesPage() {
  const services = [
    {
      name: 'Web Development',
      description: 'Custom web applications built with modern technologies and best practices',
      price: 'Starting at $3,000',
      features: ['Responsive design', 'SEO optimization', 'Performance optimization', 'Cross-browser compatibility'],
      icon: Code,
      path: '/web-development',
      category: 'Development',
      rating: 4.9,
      reviews: 156
    },
    {
      name: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android',
      price: 'Starting at $5,000',
      features: ['Native iOS/Android', 'Cross-platform solutions', 'App store optimization', 'Push notifications'],
      icon: Smartphone,
      path: '/mobile-development',
      category: 'Development',
      rating: 4.8,
      reviews: 142
    },
    {
      name: 'Cloud Services',
      description: 'Scalable cloud infrastructure solutions for your business needs',
      price: 'Starting at $1,500',
      features: ['Cloud migration', 'Auto-scaling', 'Backup solutions', '24/7 monitoring'],
      icon: Cloud,
      path: '/cloud-services',
      category: 'Infrastructure',
      rating: 4.9,
      reviews: 203
    },
    {
      name: 'Cybersecurity Services',
      description: 'Comprehensive security assessment, implementation, and ongoing monitoring for your business',
      price: 'Starting at $2,500',
      features: ['Security audit', 'Penetration testing', 'Compliance certification', 'Ongoing monitoring', 'Incident response', 'Staff training'],
      icon: Shield,
      path: '/cybersecurity',
      category: 'Security',
      rating: 4.9,
      reviews: 189
    },
    {
      name: 'Data Analytics',
      description: 'Transform your data into actionable insights with advanced analytics solutions',
      price: 'Starting at $2,000',
      features: ['Data visualization', 'Predictive analytics', 'Real-time dashboards', 'Custom reporting'],
      icon: BarChart3,
      path: '/data-analytics',
      category: 'Analytics',
      rating: 4.8,
      reviews: 167
    },
    {
      name: 'DevOps Solutions',
      description: 'Streamline your development and deployment processes with DevOps best practices',
      price: 'Starting at $2,500',
      features: ['CI/CD pipelines', 'Infrastructure as Code', 'Monitoring & logging', 'Automated testing'],
      icon: Server,
      path: '/devops',
      category: 'Operations',
      rating: 4.9,
      reviews: 134
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Delivered', icon: <Award className="w-6 h-6" /> },
    { number: '99.9%', label: 'Uptime Guarantee', icon: <Shield className="w-6 h-6" /> },
    { number: '24/7', label: 'Support Available', icon: <Phone className="w-6 h-6" /> },
    { number: '50+', label: 'Expert Developers', icon: <Users className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp Inc.',
      content: 'Zion Tech Group delivered an exceptional web application that exceeded our expectations. Their attention to detail and technical expertise is unmatched.',
      rating: 5,
      service: 'Web Development'
    },
    {
      name: 'Michael Chen',
      company: 'InnovateLabs',
      content: 'The cloud migration was seamless. We\'ve seen significant improvements in performance and cost savings since working with Zion Tech Group.',
      rating: 5,
      service: 'Cloud Services'
    },
    {
      name: 'Emily Rodriguez',
      company: 'DataFlow Systems',
      content: 'Their cybersecurity services gave us peace of mind. Our data has never been more secure, and their ongoing monitoring is excellent.',
      rating: 5,
      service: 'Cybersecurity'
    }
  ];

  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group | Professional Technology Solutions</title>
        <meta name="description" content="Comprehensive IT services including web development, mobile apps, cloud solutions, cybersecurity, and data analytics. Transform your business with Zion Tech Group." />
        <meta name="keywords" content="IT services, web development, mobile development, cloud services, cybersecurity, data analytics, DevOps, Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#8b5cf6" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="IT Services - Zion Tech Group" />
        <meta property="og:description" content="Comprehensive IT services including web development, mobile apps, cloud solutions, cybersecurity, and data analytics." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/it-services" />
        <meta property="og:image" content="https://ziontechgroup.com/og-image.jpg" />
        <meta property="og:site_name" content="Zion Tech Group" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="IT Services - Zion Tech Group" />
        <meta name="twitter:description" content="Comprehensive IT services including web development, mobile apps, cloud solutions, cybersecurity, and data analytics." />
        <meta name="twitter:image" content="https://ziontechgroup.com/twitter-image.jpg" />
        <meta name="twitter:site" content="@ziontechgroup" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        {/* Hero Section */}
        <section className="px-4 py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
                Professional IT Services
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
                Transform your business with our comprehensive IT solutions. From web development to cloud infrastructure, 
                we deliver cutting-edge technology that drives growth and efficiency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link 
                  to="/about" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20">
              {stats.map((stat, index) => (
                <div key={index} className="text-center px-2">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-xs sm:text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Our IT Services</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
                Comprehensive technology solutions designed to accelerate your digital transformation
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20">
              {services.map((service, index) => (
                <Link key={index} to={service.path} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-white group-hover:text-purple-300 transition-colors">{service.name}</h3>
                    <span className="text-xs bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded-full">{service.category}</span>
                  </div>
                  <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-white">{service.price}</span>
                  </div>
                  <div className="flex items-center mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < Math.floor(service.rating) ? 'text-yellow-400' : 'text-gray-600'}`} />
                      ))}
                    </div>
                    <span className="text-sm text-gray-400 ml-2">{service.rating} ({service.reviews} reviews)</span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">What Our Clients Say</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
                Don't just take our word for it - hear from businesses that have transformed with our solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 sm:p-8 border border-white/20">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400">★</span>
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-gray-400 text-sm">{testimonial.company}</p>
                    <p className="text-cyan-400 text-xs mt-1">{testimonial.service}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Ready to Transform Your Business?</h2>
                <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                  Let's discuss how our IT services can help accelerate your digital transformation and drive business growth.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact" 
                    className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Start Your Project
                  </Link>
                  <Link 
                    to="/about" 
                    className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                  >
                    Learn About Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
