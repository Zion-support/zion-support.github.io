import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRightIcon, 
  ShieldCheckIcon, 
  CloudIcon, 
  CpuChipIcon,
  ChartBarIcon,
  GlobeAltIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  CheckCircleIcon,
  StarIcon
} from '@heroicons/react/24/outline';

export default function HomePage() {
  const services = [
    {
      icon: CpuChipIcon,
      title: 'AI Solutions',
      description: 'Transform your business with cutting-edge artificial intelligence and machine learning solutions.',
      link: '/ai-solutions',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Cybersecurity',
      description: 'Protect your business with advanced security solutions and threat monitoring.',
      link: '/cybersecurity',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: CloudIcon,
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions for modern business needs.',
      link: '/cloud-infrastructure',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: ChartBarIcon,
      title: 'Digital Transformation',
      description: 'Modernize your business processes with digital transformation strategies.',
      link: '/digital-transformation',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: GlobeAltIcon,
      title: '5G Solutions',
      description: 'Leverage 5G technology for enhanced connectivity and performance.',
      link: '/5g-solutions',
      color: 'from-cyan-500 to-cyan-600'
    },
    {
      icon: CpuChipIcon,
      title: 'Micro SaaS',
      description: 'Custom micro SaaS solutions tailored to your specific business needs.',
      link: '/micro-saas-solutions',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const features = [
    '24/7 Expert Support',
    '99.9% Uptime Guarantee',
    'Advanced Security',
    'Scalable Solutions',
    'Custom Development',
    'Real-time Monitoring'
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp Inc.',
      content: 'Zion Tech Group transformed our business with their AI solutions. The results exceeded our expectations.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'InnovateLabs',
      content: 'Outstanding cybersecurity services. We feel completely secure with their protection.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'FutureTech',
      content: 'Their cloud infrastructure solutions are top-notch. Highly recommended!',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      <Helmet>
        <title>Zion Tech Group - Advanced AI & IT Solutions</title>
        <meta name="description" content="Leading provider of AI-powered solutions, cybersecurity, cloud infrastructure, and digital transformation services. Transform your business today." />
        <meta name="keywords" content="AI solutions, cybersecurity, cloud computing, digital transformation, IT services, Zion Tech Group" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-cyan-900/20 to-slate-900"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Advanced <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">AI & IT Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with cutting-edge artificial intelligence, cybersecurity, and cloud infrastructure solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 inline-flex items-center justify-center"
              >
                Get Started Today
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/solutions"
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
              >
                Explore Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Comprehensive technology solutions designed to drive your business forward
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-slate-800 rounded-lg p-6 hover:bg-slate-700 transition-colors duration-300 group">
                <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <Link
                  to={service.link}
                  className="text-purple-400 hover:text-purple-300 font-medium inline-flex items-center"
                >
                  Learn More
                  <ArrowRightIcon className="w-4 h-4 ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Us</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              We deliver exceptional results with our proven expertise and commitment to excellence
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircleIcon className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="text-gray-300">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
            <p className="text-gray-300 text-lg">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-800 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-purple-600 to-cyan-600 rounded-2xl p-8 md:p-12">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let's discuss how our solutions can help you achieve your business goals
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
                >
                  Contact Us Today
                  <ArrowRightIcon className="w-5 h-5 ml-2" />
                </Link>
                <div className="flex items-center justify-center space-x-6 text-white">
                  <div className="flex items-center space-x-2">
                    <PhoneIcon className="w-5 h-5" />
                    <span>+1-302-464-0950</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <EnvelopeIcon className="w-5 h-5" />
                    <span>kleber@ziontechgroup.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}