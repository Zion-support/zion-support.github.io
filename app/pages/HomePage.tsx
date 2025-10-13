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
  StarIcon
} from '@heroicons/react/24/outline';

export default function HomePage() {
  const services = [
    {
      icon: CpuChipIcon,
      title: 'AI Solutions',
      description: 'Transform your business with cutting-edge artificial intelligence and machine learning solutions.',
      link: '/ai-services',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: CloudIcon,
      title: 'Cloud Infrastructure',
      description: 'Scalable, secure, and reliable cloud solutions for modern businesses.',
      link: '/it-solutions',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Cybersecurity',
      description: 'Protect your business with comprehensive security solutions and threat detection.',
      link: '/services',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: ChartBarIcon,
      title: 'Data Analytics',
      description: 'Unlock insights from your data with advanced analytics and business intelligence.',
      link: '/services',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const features = [
    {
      title: 'Expert Team',
      description: '50+ certified professionals with deep expertise in AI, cloud, and security technologies.',
      icon: '👥'
    },
    {
      title: 'Proven Track Record',
      description: '500+ successful projects delivered across various industries and use cases.',
      icon: '🏆'
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock support and monitoring to ensure your systems run smoothly.',
      icon: '🛡️'
    },
    {
      title: 'Cutting-Edge Technology',
      description: 'We use the latest technologies and best practices to deliver superior solutions.',
      icon: '⚡'
    }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Johnson",
      company: "MedTech Solutions",
      role: "CTO",
      content: "Zion's AI solutions have revolutionized our diagnostic capabilities. We've seen a 40% improvement in accuracy and efficiency.",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "E-commerce Plus",
      role: "CEO",
      content: "The cloud migration was seamless. We experienced zero downtime and our performance improved significantly.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      company: "FinanceFlow",
      role: "Head of Analytics",
      content: "Their data analytics platform has given us insights we never had before. Our decision-making is now truly data-driven.",
      rating: 5
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '150+', label: 'Happy Clients' },
    { number: '50+', label: 'Team Members' },
    { number: '99%', label: 'Client Satisfaction' }
  ];

  return (
    <>
      <Helmet>
        <title>Zion Tech Group - Advanced AI and IT Solutions</title>
        <meta name="description" content="Leading provider of advanced AI and IT solutions, cybersecurity, cloud infrastructure, and digital transformation services for businesses worldwide." />
        <meta name="keywords" content="AI solutions, cybersecurity, cloud computing, digital transformation, IT services, micro SaaS, 5G solutions" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-purple-900/20 to-cyan-900/20"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Transform Your Business with
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              AI & IT Solutions
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            We help businesses leverage cutting-edge artificial intelligence, cloud infrastructure, 
            and cybersecurity solutions to drive growth, efficiency, and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25"
            >
              Get Started Today
              <ArrowRightIcon className="w-5 h-5 ml-2 inline" />
            </Link>
            <Link
              to="/services"
              className="px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-500/10 transition-all duration-300"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                <div className="text-gray-300 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Our Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI and IT solutions designed to transform your business and drive innovation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Link
                  key={index}
                  to={service.link}
                  className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 text-sm">{service.description}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Why Choose Us?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine technical expertise with business acumen to deliver solutions that drive real results.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="text-6xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">What Our Clients Say</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">&ldquo;{testimonial.content}&rdquo;</p>
                <div>
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-cyan-400 text-sm">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-cyan-600/20 to-blue-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our AI and IT solutions can help you achieve your goals and drive innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25"
            >
              Start Your Journey
              <ArrowRightIcon className="w-5 h-5 ml-2 inline" />
            </Link>
            <Link
              to="/about"
              className="px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-500/10 transition-all duration-300"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}