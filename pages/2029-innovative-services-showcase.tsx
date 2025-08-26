import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { 
  Brain, Atom, Target, ArrowRight, CheckCircle, Star, 
  Phone, Mail, MapPin
} from 'lucide-react';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

export default function InnovativeServicesShowcase2029() {
  const services = [
    {
      id: 1,
      name: 'AI Autonomous Ecosystem',
      description: 'Next-generation AI systems that operate independently',
      category: 'AI & Automation',
      price: '$15,000',
      features: ['Autonomous Decision Making', 'Self-Learning Algorithms', 'Predictive Analytics']
    },
    {
      id: 2,
      name: 'Quantum Computing Solutions',
      description: 'Revolutionary quantum computing applications',
      category: 'Quantum Technology',
      price: '$25,000',
      features: ['Quantum Encryption', 'Superior Processing Power', 'Future-Proof Technology']
    },
    {
      id: 3,
      name: 'Business Intelligence Platform',
      description: 'Advanced analytics and business insights',
      category: 'Business Solutions',
      price: '$8,500',
      features: ['Real-time Analytics', 'Custom Dashboards', 'Predictive Modeling']
    }
  ];

  const serviceCategories = [
    {
      title: '🚀 AI Autonomous Ecosystem',
      icon: Brain,
      color: 'from-violet-600 via-purple-600 to-indigo-600',
      description: 'Next-generation AI systems'
    },
    {
      title: '⚛️ Emerging Tech Breakthroughs',
      icon: Atom,
      color: 'from-indigo-600 via-blue-600 to-cyan-600',
      description: 'Cutting-edge technology solutions'
    },
    {
      title: '🎯 Practical Business Solutions',
      icon: Target,
      color: 'from-cyan-600 via-teal-600 to-emerald-600',
      description: 'Real-world business applications'
    }
  ];

  return (
    <>
      <Head>
        <title>2029 Innovative Services Showcase - Zion Tech Group</title>
        <meta name="description" content="Discover our cutting-edge 2029 innovative services including AI autonomous ecosystems, emerging tech breakthroughs, and practical business solutions. Transform your business with next-generation technology." />
        <meta name="keywords" content="2029 services, AI autonomous, emerging technology, business solutions, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/2029-innovative-services-showcase" />
      </Head>
      
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="py-32 bg-gradient-to-br from-black via-purple-900/20 to-black">
          <div className="container mx-auto px-4 text-center">
            <div>
              <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-8">
                2029 Innovative Services
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto">
                Experience the future of technology with our revolutionary AI autonomous ecosystems, 
                emerging tech breakthroughs, and practical business solutions that will transform your business.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="#services" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
                  Explore Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link href="/contact" className="inline-flex items-center px-8 py-4 border-2 border-purple-500 text-purple-400 font-semibold rounded-full hover:bg-purple-500 hover:text-white transition-all duration-300">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section id="services" className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-6">
                Revolutionary Service Categories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover our comprehensive range of cutting-edge services designed to transform your business
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
              {serviceCategories.map((category, index) => {
                const IconComponent = category.icon;
                return (
                  <div key={category.title} className={`bg-gradient-to-br ${category.color} p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 group`}>
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-6 group-hover:bg-white/20 transition-all duration-300">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">{category.title}</h3>
                      <p className="text-white/80 mb-6">
                        {category.description}
                      </p>
                      <Link 
                        href="/services"
                        className="inline-flex items-center gap-2 text-white hover:text-white/80 transition-colors duration-300"
                      >
                        Explore Services
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Featured Services */}
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold text-white mb-8">Featured Services</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service) => (
                  <div key={service.id} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105">
                    <h4 className="text-xl font-semibold text-white mb-3">{service.name}</h4>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    <div className="mb-4">
                      <span className="inline-block bg-purple-600 text-white px-3 py-1 rounded-full text-sm">
                        {service.category}
                      </span>
                    </div>
                    <div className="mb-4">
                      <span className="text-2xl font-bold text-green-400">{service.price}</span>
                    </div>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link href="/contact" className="inline-flex items-center justify-center w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-8">Ready to Transform Your Business?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center gap-3 text-gray-300">
                <Phone className="w-5 h-5 text-blue-400" />
                <span>{contactInfo.mobile}</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-gray-300">
                <Mail className="w-5 h-5 text-green-400" />
                <span>{contactInfo.email}</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-gray-300">
                <MapPin className="w-5 h-5 text-purple-400" />
                <span>{contactInfo.address}</span>
              </div>
            </div>
            <Link href="/contact" className="inline-flex items-center justify-center bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold py-4 px-8 rounded-lg text-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
              Contact Us Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}