import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowRight, Brain, Cloud, Shield, Zap, Users, Star, CheckCircle, TrendingUp, Award } from 'lucide-react';

export default function Home() {
  const featuredServices = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'AI & Machine Learning Services',
      description: 'Advanced AI solutions including computer vision, NLP, predictive analytics, and automated ML platforms.',
      features: ['Computer Vision Platform', 'NLP Suite', 'Predictive Analytics', 'AutoML Solutions'],
      pricing: 'Starting at $199/month',
      link: '/services/ai-services',
      color: 'blue'
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: 'Micro SaaS Solutions',
      description: 'Innovative micro SaaS applications for customer support, inventory management, and business automation.',
      features: ['AI Customer Support', 'Smart Inventory', 'Social Media Automation', 'Expense Tracking'],
      pricing: 'Starting at $19/month',
      link: '/services/micro-saas',
      color: 'green'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'IT Services & Solutions',
      description: 'Comprehensive IT services including cloud migration, cybersecurity, DevOps, and managed services.',
      features: ['Cloud Migration', 'Cybersecurity Audit', 'DevOps Automation', 'Managed IT Support'],
      pricing: 'Starting at $150/month',
      link: '/services/it-services',
      color: 'purple'
    }
  ];

  const stats = [
    { number: '500+', label: 'Successful Projects' },
    { number: '200+', label: 'Happy Clients' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Expert Support' }
  ];

  const benefits = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Lightning Fast Delivery',
      description: 'Get your solutions deployed in weeks, not months with our agile development approach.'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Expert Team',
      description: 'Work with certified professionals with 10+ years of experience in cutting-edge technologies.'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Enterprise Security',
      description: 'Bank-level security with SOC 2 compliance and advanced threat protection.'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Proven ROI',
      description: 'Our clients see average ROI of 300% within the first year of implementation.'
    }
  ];

  return (
    <>
      <Head>
        <title>Zion Tech Group - Leading AI, Micro SaaS & IT Solutions Provider</title>
        <meta name="description" content="Transform your business with our comprehensive AI services, innovative micro SaaS solutions, and enterprise IT services. Expert team, proven results, 24/7 support." />
        <meta name="keywords" content="AI services, micro SaaS, IT solutions, cloud migration, cybersecurity, machine learning, business automation" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://ziontechgroup.com" />
      </Head>
      
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex items-center justify-center mb-6">
                <Award className="h-8 w-8 text-blue-400 mr-3" />
                <span className="text-lg font-semibold text-blue-400">Trusted by 200+ Companies</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Transform Your Business with
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"> AI & Technology</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200 leading-relaxed">
                Leading provider of revolutionary AI services, innovative micro SaaS solutions, and comprehensive IT services. 
                Accelerate growth with cutting-edge technology and expert implementation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Services */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Comprehensive Service Portfolio</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From AI-powered automation to enterprise IT solutions, we deliver the technology your business needs to thrive in the digital age.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {featuredServices.map((service, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100">
                  <div className={`inline-flex p-3 rounded-lg mb-6 ${
                    service.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                    service.color === 'green' ? 'bg-green-100 text-green-600' :
                    'bg-purple-100 text-purple-600'
                  }`}>
                    {service.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-700 mb-3">Key Solutions:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-lg font-bold text-blue-600">{service.pricing}</span>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600">4.9/5 rating</span>
                    </div>
                  </div>
                  
                  <Link href={service.link}>
                    <span className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors cursor-pointer inline-flex items-center justify-center">
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Zion Tech Group?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We deliver exceptional results through proven methodologies, cutting-edge technology, and unwavering commitment to your success.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-blue-600 mb-4 flex justify-center">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Join 200+ companies that trust Zion Tech Group for their technology needs. Get started with a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <span className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors cursor-pointer inline-flex items-center">
                  Get Free Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </span>
              </Link>
              <Link href="tel:+13024640950">
                <span className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors cursor-pointer">
                  Call: +1 302 464 0950
                </span>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}