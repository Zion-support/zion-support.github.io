
<<<<<<< HEAD
export default function Home() {
  const features = [
    {
      title: 'AI-Powered Solutions',
      description: 'Cutting-edge artificial intelligence to transform your business operations with machine learning, natural language processing, and predictive analytics',
      icon: Brain,
      benefits: ['Machine Learning Implementation',
        "Natural Language Processing",
        "Predictive Analytics",
        "Automated Decision Making"
      ]
    },
    {
      title: 'IT Services',
      description: 'Comprehensive technology solutions including cloud infrastructure, cybersecurity, and digital transformation for modern businesses',
      icon: BarChart,
      benefits: ['Cloud Infrastructure Setup',
        "Cybersecurity Solutions",
        "Digital Transformation",
        "24/7 Technical Support"
      ]
    },
    {
      title: 'Micro SaaS',
      description: 'Scalable software-as-a-service solutions designed for rapid deployment and growth, perfect for startups and enterprises',
      icon: Target,
      benefits: ['Rapid Deployment',
        "Scalable Architecture",
        "Custom Development",
        "Ongoing Maintenance"
      ]
    },
    {
      title: 'Business Intelligence',
      description: 'Advanced analytics and reporting tools to help you make data-driven decisions and optimize your business performance',
      icon: TrendingUp,
      benefits: ['Data Visualization',
        "Performance Analytics",
        "Custom Dashboards",
        "Real-time Reporting"
      ]
    }
  ];

  const benefits = ['Increase efficiency by up to 50%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    'Gain competitive advantage with advanced technology'
  ]

  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-50 to-blue-50'>
      <Navigation />
      {/* Hero Section */}
      <section className='relative py-20 px-4 overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20'></div>
        <div className='relative max-w-7xl mx-auto text-center'>
          <h1 className='text-4xl md:text-6xl font-bold text-gray-900 mb-6'>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600'>Zion Tech Group</span>
          </h1>
          <p className='text-xl text-gray-600 mb-8 max-w-3xl mx-auto'>
            Advanced AI and IT solutions for modern businesses. We help you leverage cutting-edge technology to drive growth and innovation.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <button className='bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center'>
              Get Started
              <ArrowRight className="w-8 h-8" />
            </button>
            <button className='border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200'>
              Learn More
            </button>
=======
"use client";

import React from 'react';
import Link from 'next/link';
import { Brain, Shield, Zap, Star } from 'lucide-react';

const HomePage = () => {
  const features = [
    {
      title: "AI-Powered Solutions",
      description: "Cutting-edge artificial intelligence to transform your business operations with machine learning, natural language processing, and predictive analytics",
      icon: <Brain className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      stats: "40% efficiency boost",
      link: "/ai-services"
    },
    {
      title: "IT Services",
      description: "Comprehensive technology solutions including cloud infrastructure, cybersecurity, and digital transformation for modern businesses",
      icon: <Shield className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      stats: "99.9% uptime SLA",
      link: "/it-services"
    },
    {
      title: "Micro SaaS",
      description: "Scalable software-as-a-service solutions designed for rapid deployment and growth, perfect for startups and enterprises",
      icon: <Zap className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      stats: "50% faster deployment",
      link: "/micro-saas"
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "99.9%", label: "Client Satisfaction" },
    { number: "24/7", label: "Support Available" },
    { number: "5+", label: "Years Experience" }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechCorp",
      content: "Zion Tech Group transformed our business with their AI solutions. We have seen a 40% increase in efficiency.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "CTO, InnovateLabs",
      content: "Their IT services are exceptional. The team is professional, knowledgeable, and always available when we need them.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Founder, StartupXYZ",
      content: "The micro SaaS solutions they provided helped us scale faster than we ever imagined possible.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Skip to main content for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-indigo-600 text-white px-4 py-2 rounded-md z-50"
      >
        Skip to main content
      </a>

      <main id="main-content" className="container mx-auto px-4 py-16" role="main">
        {/* Hero Section */}
        <section
          className="text-center mb-16"
          aria-labelledby="hero-heading"
        >
          <h1 id="hero-heading" className="text-5xl font-bold text-gray-900 mb-6">Zion Tech Group</h1>
          <p className="text-xl text-gray-600 mb-8" role="doc-subtitle">Advanced AI and IT Solutions</p>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Leading provider of enterprise AI solutions, quantum computing, and autonomous systems.
            Transform your business with our cutting-edge technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Get Started Today
            </Link>
            <Link 
              href="/services" 
              className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
            >
              Explore Services
            </Link>
>>>>>>> cursor/fix-errors-and-merge-to-main-f6f2
          </div>
        </section>

<<<<<<< HEAD
      {/* Features Section */}
      <section className='py-20 px-4'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
              Our Solutions
            </h2>
            <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
              Comprehensive AI and IT solutions designed to transform your business.
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {features.map((feature, index) => (
              <div key={index} className='bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300'>
                <div className='flex items-center justify-center w-12 h-12 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-lg mb-4'>
                  <feature.icon className='h-6 w-6 text-white' />
                </div>
                <h3 className='text-xl font-semibold text-gray-900 mb-2'>{feature.title}</h3>
                <p className='text-gray-600 mb-4'>{feature.description}</p>
                <ul className='space-y-2'>
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 mr-2 text-emerald-500" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
=======
        {/* Services Section */}
        <section className="grid md:grid-cols-3 gap-8 mb-16" aria-labelledby="services-heading">
          <h2 id="services-heading" className="sr-only">Our Services</h2>
          {features.map((feature, index) => (
            <article key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mb-4`}>
                {feature.icon}
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <div className="text-sm font-medium text-gray-500 mb-4">{feature.stats}</div>
              <Link 
                href={feature.link}
                className="text-cyan-600 hover:text-cyan-700 font-medium"
              >
                Learn More →
              </Link>
            </article>
          ))}
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-f6f2
          </div>
        </section>

<<<<<<< HEAD
      {/* Benefits Section */}
      <section className='py-20 px-4 bg-white/5'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
              Why Choose Zion Tech Group?
            </h2>
            <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
              Our proven track record and innovative approach deliver measurable results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-emerald-500 mt-1" />
                <p className="text-gray-700 text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 px-4'>
        <div className='max-w-4xl mx-auto text-center'>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss how our AI and IT solutions can help you achieve your goals.
          </p>
          <button className='bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center mx-auto'>
            Start Your Journey
            <ArrowRight className="w-8 h-8" />
          </button>
        </div>
      </section>
      
      <Footer />
=======
        {/* Testimonials Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                What Our Clients Say
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Trusted by businesses worldwide for exceptional results
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic">&ldquo;{testimonial.content}&rdquo;</p>
                  <div>
                    <div className="text-gray-900 font-semibold">{testimonial.name}</div>
                    <div className="text-cyan-600 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="text-center" aria-labelledby="cta-heading">
          <h2 id="cta-heading" className="text-3xl font-bold text-gray-900 mb-6">Ready to Get Started?</h2>
          <a
            href="tel:+13026009898"
            className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-300"
            aria-label="Call us at (302) 600-9898"
          >
            Contact Us: (302) 600-9898
          </a>
        </section>
      </main>
>>>>>>> cursor/fix-errors-and-merge-to-main-f6f2
    </div>
  )
}

export default HomePage;
