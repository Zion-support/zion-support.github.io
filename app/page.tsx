import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Star, Users, Award, Zap, Shield, Globe, TrendingUp } from 'lucide-react';

export default function HomePage() {
  const features = [
    {
      icon: Zap,
      title: 'AI-Powered Solutions',
      description: 'Cutting-edge artificial intelligence that transforms your business operations.',
      color: 'blue'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Military-grade security protocols to protect your data and infrastructure.',
      color: 'green'
    },
    {
      icon: Globe,
      title: 'Global Scale',
      description: 'Worldwide infrastructure designed to serve customers across all continents.',
      color: 'purple'
    },
    {
      icon: TrendingUp,
      title: 'Proven Results',
      description: 'Measurable improvements in efficiency, productivity, and ROI.',
      color: 'orange'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Support Available' },
    { number: '50+', label: 'Countries Served' }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CTO, TechCorp',
      content: 'Zion Tech Group transformed our entire infrastructure. The AI solutions they implemented increased our efficiency by 300%.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'CEO, InnovateLabs',
      content: 'Outstanding service and expertise. Their cloud migration strategy saved us millions in operational costs.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'VP Engineering, DataFlow',
      content: 'The cybersecurity solutions they provided gave us peace of mind. Highly recommend their services.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-purple-700 to-indigo-800 text-white py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Transform Your Business with
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                AI & Technology
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
              Leading provider of enterprise-grade AI solutions, micro SaaS development, and IT services that drive real business results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link 
                href="/services" 
                className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 inline-flex items-center shadow-lg hover:shadow-xl"
              >
                Explore Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                href="/contact" 
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get Started Today
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-blue-100 text-sm md:text-base">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We combine cutting-edge technology with deep industry expertise to deliver exceptional results that transform businesses.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                const colorClasses = {
                  blue: 'bg-blue-100 text-blue-600',
                  green: 'bg-green-100 text-green-600',
                  purple: 'bg-purple-100 text-purple-600',
                  orange: 'bg-orange-100 text-orange-600'
                };
                
                return (
                  <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className={`w-16 h-16 rounded-lg flex items-center justify-center mb-6 ${colorClasses[feature.color as keyof typeof colorClasses]}`}>
                      <IconComponent className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive technology solutions designed to accelerate your business growth and digital transformation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-blue-600 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Services</h3>
                <p className="text-gray-600 mb-6">
                  Machine learning, natural language processing, computer vision, and AI automation solutions.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-blue-600 mr-2" />
                    Machine Learning Models
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-blue-600 mr-2" />
                    Natural Language Processing
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-blue-600 mr-2" />
                    Computer Vision
                  </li>
                </ul>
                <Link href="/services/ai" className="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center">
                  Learn More
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-green-600 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Micro SaaS</h3>
                <p className="text-gray-600 mb-6">
                  Custom software development, web applications, and scalable SaaS solutions.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Web Applications
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Mobile Apps
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    API Development
                  </li>
                </ul>
                <Link href="/services/saas" className="text-green-600 font-semibold hover:text-green-700 inline-flex items-center">
                  Learn More
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-purple-600 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">IT Solutions</h3>
                <p className="text-gray-600 mb-6">
                  Cloud migration, cybersecurity, DevOps, and enterprise infrastructure solutions.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-purple-600 mr-2" />
                    Cloud Migration
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-purple-600 mr-2" />
                    Cybersecurity
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-purple-600 mr-2" />
                    DevOps Automation
                  </li>
                </ul>
                <Link href="/services/it" className="text-purple-600 font-semibold hover:text-purple-700 inline-flex items-center">
                  Learn More
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                What Our Clients Say
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Don't just take our word for it. Here's what our clients have to say about working with us.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-500 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Let's discuss how our innovative solutions can help you achieve your business goals and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get Started Today
            </Link>
            <Link 
              href="/about" 
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function Card({ title, href, description, icon }: {
  title: string;
  href: string;
  description: string;
  icon: string;
}) {
  return (
    <Link
      href={href}
      className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-blue-500 hover-lift block"
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-slate-400">{description}</p>
    </Link>
  );
}