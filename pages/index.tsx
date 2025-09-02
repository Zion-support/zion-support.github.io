import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Navigation from '../src/components/Navigation';
import Footer from '../src/components/Footer';
import Sidebar from '../components/Sidebar';
import { ArrowRight, CheckCircle, Star, Users, Zap, Shield, Globe, TrendingUp, Award, Clock, Brain, Cloud, Database, Network, Target, Phone, Mail, Menu, MapPin } from 'lucide-react';

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Support Available' }
  ];
  
  const services = [
    {
      title: 'AI Services',
      description: 'Cutting-edge artificial intelligence solutions including machine learning, computer vision, and natural language processing',
      icon: Brain,
      href: '/ai-services',
      features: ['Machine Learning', 'Computer Vision', 'NLP', 'Predictive Analytics', 'AI Automation']
    },
    {
      title: 'IT Services',
      description: 'Comprehensive information technology services including cloud infrastructure, cybersecurity, and digital transformation',
      icon: Network,
      href: '/it-services',
      features: ['Cloud Migration', 'Cybersecurity', 'DevOps', 'Network Management', 'IT Consulting']
    },
    {
      title: 'Micro SaaS',
      description: 'Scalable software as a service solutions tailored to specific business needs and industry requirements',
      icon: Cloud,
      href: '/micro-saas',
      features: ['Custom SaaS', 'API Integration', 'Scalable Architecture', 'Multi-tenant', 'White-label']
    },
    {
      title: 'Blockchain Solutions',
      description: 'Advanced blockchain development, smart contracts, and decentralized applications for modern businesses',
      icon: Shield,
      href: '/blockchain-solutions',
      features: ['Smart Contracts', 'DeFi', 'NFT Platforms', 'Web3', 'Cryptocurrency']
    },
    {
      title: 'IoT Solutions',
      description: 'Internet of Things solutions and edge computing infrastructure for connected devices and smart systems',
      icon: Brain,
      href: '/iot-solutions',
      features: ['IoT Development', 'Edge Computing', 'Sensor Networks', 'Real-time Analytics', 'Device Management']
    }
  ];

  const features = [
    {
      icon: Zap,
      title: 'Fast Delivery',
      description: 'Quick turnaround times without compromising quality'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security and compliance standards'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Dedicated professionals with years of experience'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Serving clients worldwide with local expertise'
    }
  ];

  return (
    <>
      <Head>
        <title>Zion Tech Group - Leading Technology Solutions Provider</title>
        <meta name="description" content="Transform your business with cutting-edge AI services, IT solutions, and micro SaaS development. Expert technology consulting and implementation." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://ziontechgroup.com" />
      </Head>
      
      <Navigation />
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16 sm:py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                Transform Your Business with
                <span className="text-blue-600 block sm:inline"> Technology</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
                Leading provider of revolutionary AI services, IT solutions, and micro SaaS development. 
                We help businesses innovate, scale, and succeed in the digital age.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
                <Link href="/contact" className="bg-blue-600 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center">
                  Get Started
                </Link>
                <Link href="/services" className="border-2 border-blue-600 text-blue-600 px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors text-center">
                  View Services
                </Link>
                <button 
                  onClick={() => setSidebarOpen(true)}
                  className="border-2 border-gray-300 text-gray-700 px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center"
                >
                  <Menu className="w-4 h-4 mr-2" />
                  Explore Menu
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-sm sm:text-base text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 sm:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
                Comprehensive technology solutions designed to drive your business forward
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-lg p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow">
                  <div className="p-3 sm:p-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 w-fit mx-auto mb-4 sm:mb-6">
                    <service.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 text-center">{service.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 text-center">{service.description}</p>
                  
                  {/* Service Features */}
                  <div className="mb-4 sm:mb-6">
                    <div className="flex flex-wrap gap-1 sm:gap-2 justify-center">
                      {service.features.map((feature, featureIndex) => (
                        <span key={featureIndex} className="px-2 sm:px-3 py-1 bg-blue-50 text-blue-700 text-xs sm:text-sm rounded-full">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Link href={service.href} className="block">
                    <div className="w-full bg-blue-600 text-white py-2 sm:py-3 px-4 sm:px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center flex items-center justify-center text-sm sm:text-base">
                      Learn More
                      <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-2" />
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Zion Tech Group?</h2>
              <p className="text-lg text-gray-600">
                We deliver exceptional results through innovation, expertise, and dedication
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <feature.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Competitive Advantages Section */}
        <section className="py-16 sm:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Why Choose Zion Tech Group?</h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
                We deliver cutting-edge technology solutions with unmatched expertise, innovation, and customer focus
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              <div className="text-center">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-full p-3 sm:p-4 w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                  <Award className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Industry Expertise</h3>
                <p className="text-sm sm:text-base text-gray-600">15+ years of experience in AI, IT, and SaaS development across multiple industries</p>
              </div>
              
              <div className="text-center">
                <div className="bg-gradient-to-r from-green-500 to-blue-600 rounded-full p-3 sm:p-4 w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Proven Results</h3>
                <p className="text-sm sm:text-base text-gray-600">500+ successful projects with 99.9% client satisfaction and measurable ROI</p>
              </div>
              
              <div className="text-center">
                <div className="bg-gradient-to-r from-purple-500 to-pink-600 rounded-full p-3 sm:p-4 w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                  <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Innovation First</h3>
                <p className="text-sm sm:text-base text-gray-600">Cutting-edge technologies including AI, blockchain, IoT, and cloud-native solutions</p>
              </div>
              
              <div className="text-center">
                <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-full p-3 sm:p-4 w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                  <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">24/7 Support</h3>
                <p className="text-sm sm:text-base text-gray-600">Round-the-clock technical support and maintenance with guaranteed response times</p>
              </div>
            </div>
          </div>
        </section>

        {/* Market Pricing Section */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Competitive Market Pricing</h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
                Transparent, competitive pricing that delivers exceptional value for your technology investments
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              <div className="bg-gray-50 rounded-lg p-6 sm:p-8 text-center">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">AI Services</h3>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-3 sm:mb-4">$2,500 - $200,000</div>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">per month</p>
                <ul className="text-left space-y-1 sm:space-y-2 text-sm sm:text-base text-gray-600">
                  <li>• Machine Learning Models</li>
                  <li>• Computer Vision Solutions</li>
                  <li>• Natural Language Processing</li>
                  <li>• Predictive Analytics</li>
                  <li>• AI Automation</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6 sm:p-8 text-center">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">IT Services</h3>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-3 sm:mb-4">$1,500 - $100,000</div>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">per month</p>
                <ul className="text-left space-y-1 sm:space-y-2 text-sm sm:text-base text-gray-600">
                  <li>• Cloud Infrastructure</li>
                  <li>• Cybersecurity Solutions</li>
                  <li>• DevOps & CI/CD</li>
                  <li>• Network Management</li>
                  <li>• Digital Transformation</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6 sm:p-8 text-center">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Micro SaaS</h3>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-3 sm:mb-4">$99 - $20,000</div>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">per month</p>
                <ul className="text-left space-y-1 sm:space-y-2 text-sm sm:text-base text-gray-600">
                  <li>• Custom SaaS Development</li>
                  <li>• API Integration</li>
                  <li>• Multi-tenant Architecture</li>
                  <li>• White-label Solutions</li>
                  <li>• Scalable Infrastructure</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg sm:text-xl text-blue-100 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              Let's discuss how our technology solutions can drive your success. Get started with a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <Link href="/contact" className="bg-white text-blue-600 px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center">
                Get Free Consultation
              </Link>
              <Link href="/about" className="border-2 border-white text-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-center">
                Learn More About Us
              </Link>
            </div>
            
            {/* Contact Information */}
            <div className="mt-8 sm:mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8 text-blue-100">
              <div className="flex items-center justify-center space-x-2 sm:space-x-3">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                <a href="tel:+13024640950" className="hover:text-white transition-colors text-sm sm:text-base">+1 302 464 0950</a>
              </div>
              <div className="flex items-center justify-center space-x-2 sm:space-x-3">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-white transition-colors text-sm sm:text-base">kleber@ziontechgroup.com</a>
              </div>
              <div className="flex items-center justify-center space-x-2 sm:space-x-3">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-sm sm:text-base text-center">364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}