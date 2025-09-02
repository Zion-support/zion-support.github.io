import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
export default function Home() {
  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Support Available' }
  ];
  
  const services = [
    {
      title: 'AI Services',
      description: 'Revolutionary AI solutions including autonomous systems, machine learning, and intelligent automation',
      icon: Brain,
      href: '/ai-services',
      features: ['AI-Powered Drug Discovery', 'Quantum Computing Interface', 'Climate Analytics', 'Space Analytics']
    },
    {
      title: 'IT Services',
      description: 'Comprehensive IT infrastructure, cybersecurity, cloud solutions, and digital transformation',
      icon: Network,
      href: '/it-services',
      features: ['Zero Trust Security', 'Edge Computing', 'Digital Twin Platforms', 'Hyperautomation']
    },
    {
      title: 'Micro SaaS',
      description: 'Innovative micro SaaS solutions for modern businesses with rapid deployment',
      icon: Cloud,
      href: '/micro-saas',
      features: ['Affiliate Marketing Tracker', 'Contract Management', 'Video Content Generator', 'Energy Management']
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
      
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Transform Your Business with
                <span className="text-blue-600"> Technology</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Leading provider of revolutionary AI services, IT solutions, and micro SaaS development. 
                We help businesses innovate, scale, and succeed in the digital age.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Get Started
                </Link>
                <Link href="/services" className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors">
                  View Services
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive technology solutions designed to drive your business forward
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
                  <div className="p-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 w-fit mx-auto mb-6">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{service.title}</h3>
                  <p className="text-gray-600 mb-6 text-center">{service.description}</p>
                  
                  {/* Featured Services */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 mb-3">Featured Solutions:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded">
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Link href={service.href} className="block">
                    <div className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center flex items-center justify-center">
                      Explore Services
                      <ArrowRight className="w-4 h-4 ml-2" />
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

        {/* Pricing & Contact Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Competitive Pricing & Expert Support</h2>
              <p className="text-lg text-gray-600">
                Transparent pricing with flexible solutions tailored to your business needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Pricing Highlights */}
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Service Pricing Ranges</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-gray-700">Micro SaaS Solutions</span>
                    <span className="font-semibold text-blue-600">$99 - $8,000/month</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-gray-700">AI Services</span>
                    <span className="font-semibold text-blue-600">$1,500 - $100,000/month</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-gray-700">IT Services</span>
                    <span className="font-semibold text-blue-600">$1,500 - $100,000/month</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-gray-700">Enterprise Solutions</span>
                    <span className="font-semibold text-blue-600">Custom Pricing</span>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>Free Consultation:</strong> All projects start with a complimentary strategy session to understand your needs and provide accurate pricing.
                  </p>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-blue-600 mr-3" />
                    <div>
                      <p className="font-semibold text-gray-900">Phone</p>
                      <a href="tel:+13024640950" className="text-blue-600 hover:text-blue-700">+1 302 464 0950</a>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-blue-600 mr-3" />
                    <div>
                      <p className="font-semibold text-gray-900">Email</p>
                      <a href="mailto:kleber@ziontechgroup.com" className="text-blue-600 hover:text-blue-700">kleber@ziontechgroup.com</a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-5 h-5 text-blue-600 mr-3 mt-1">
                      <svg fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Address</p>
                      <p className="text-gray-600">364 E Main St STE 1008<br />Middletown DE 19709</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <Link href="/contact" className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center block">
                    Schedule Free Consultation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how our technology solutions can drive your success. Get started with a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Get Free Consultation
              </Link>
              <Link href="/about" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Learn More About Us
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}