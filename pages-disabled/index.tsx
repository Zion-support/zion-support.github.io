import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Star, Users, Award, Zap, Shield, Clock, Globe } from 'lucide-react';
import Head from 'next/head';

const services = [
  {
    title: 'AI Solutions',
    description: 'Cutting-edge artificial intelligence solutions for your business needs. From machine learning to natural language processing.',
    icon: '🤖',
    features: ['Machine Learning', 'NLP', 'Computer Vision', 'Predictive Analytics'],
    href: '/services/ai-services',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Micro SaaS Development',
    description: 'Build and scale micro SaaS applications with our specialized development services. Fast, efficient, and profitable.',
    icon: '⚡',
    features: ['Rapid Development', 'Scalable Architecture', 'API Integration', 'Performance Optimization'],
    href: '/services/micro-saas',
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and migration services. Modernize your infrastructure with our cloud expertise.',
    icon: '☁️',
    features: ['AWS/Azure/GCP', 'DevOps', 'Containerization', 'Auto-scaling'],
    href: '/services',
    color: 'from-green-500 to-teal-500'
  },
  {
    title: 'Cybersecurity',
    description: 'Advanced security solutions to protect your business from evolving threats and ensure compliance.',
    icon: '🔒',
    features: ['Threat Detection', 'Compliance', 'Penetration Testing', 'Security Audits'],
    href: '/services',
    color: 'from-red-500 to-orange-500'
  },
  {
    title: 'Blockchain Solutions',
    description: 'Revolutionary blockchain technology implementation for secure, transparent, and decentralized applications.',
    icon: '⛓️',
    features: ['Smart Contracts', 'DeFi Solutions', 'NFT Platforms', 'Web3 Integration'],
    href: '/services/blockchain',
    color: 'from-indigo-500 to-purple-500'
  },
  {
    title: 'Data Analytics',
    description: 'Transform your data into actionable insights with our advanced analytics and business intelligence solutions.',
    icon: '📊',
    features: ['Data Visualization', 'Business Intelligence', 'Real-time Analytics', 'Custom Dashboards'],
    href: '/services',
    color: 'from-yellow-500 to-orange-500'
  }
];

const stats = [
  { label: 'Projects Completed', value: '500+', icon: <CheckCircle className="h-6 w-6" /> },
  { label: 'Happy Clients', value: '200+', icon: <Users className="h-6 w-6" /> },
  { label: 'Years Experience', value: '10+', icon: <Clock className="h-6 w-6" /> },
  { label: 'Global Reach', value: '25+', icon: <Globe className="h-6 w-6" /> }
];

const features = [
  {
    icon: <Zap className="h-8 w-8 text-blue-600" />,
    title: 'Lightning Fast',
    description: 'Optimized performance and rapid deployment with cutting-edge technology'
  },
  {
    icon: <Award className="h-8 w-8 text-blue-600" />,
    title: 'Award Winning',
    description: 'Recognized for excellence in technology solutions and innovation'
  },
  {
    icon: <Users className="h-8 w-8 text-blue-600" />,
    title: 'Expert Team',
    description: 'Experienced professionals dedicated to your success and growth'
  },
  {
    icon: <Shield className="h-8 w-8 text-blue-600" />,
    title: 'Secure & Reliable',
    description: 'Enterprise-grade security and 99.9% uptime guarantee'
  }
];

export default function App() {
  return (
    <>
      <Head>
        <title>Zion Tech Group - Leading AI and Technology Solutions</title>
        <meta name="description" content="Leading technology company specializing in AI, blockchain, micro SaaS development, and innovative business solutions. Transform your business with cutting-edge technology." />
        <meta name="keywords" content="AI solutions, blockchain development, micro SaaS, cloud computing, cybersecurity, data analytics, digital transformation" />
        <meta property="og:title" content="Zion Tech Group - Leading AI and Technology Solutions" />
        <meta property="og:description" content="Leading technology company specializing in AI, blockchain, micro SaaS development, and innovative business solutions." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion Tech Group - Leading AI and Technology Solutions" />
        <meta name="twitter:description" content="Leading technology company specializing in AI, blockchain, micro SaaS development, and innovative business solutions." />
        <link rel="canonical" href="https://ziontechgroup.com" />
      </Head>
      
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden pt-20">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative container-custom py-20 lg:py-32">
            <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
              <h1 className="text-responsive-xl lg:text-7xl font-bold mb-6 gradient-text">
                Welcome to Zion Tech Group
              </h1>
              <p className="text-responsive-md text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                Leading the future of technology with AI, blockchain, micro SaaS development, and innovative solutions that transform businesses worldwide
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="btn btn-primary px-8 py-4 text-lg font-semibold flex items-center justify-center group">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/services" className="btn btn-outline px-8 py-4 text-lg font-semibold">
                  Explore Services
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4 group-hover:bg-blue-200 transition-colors">
                    <div className="text-blue-600">{stat.icon}</div>
                  </div>
                  <div className="text-4xl lg:text-5xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-responsive-lg font-bold text-gray-900 mb-4">
                Our Services
              </h2>
              <p className="text-responsive-md text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Comprehensive technology solutions designed to accelerate your business growth and digital transformation
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Link key={index} href={service.href} className="group animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="bg-white p-8 rounded-xl shadow-lg card-hover border border-gray-100 h-full">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <div className="text-3xl">{service.icon}</div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-500">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-responsive-lg font-bold text-gray-900 mb-4">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-responsive-md text-gray-600 max-w-3xl mx-auto leading-relaxed">
                We combine cutting-edge technology with deep industry expertise to deliver solutions that drive real business value
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {features.map((feature, index) => (
                <div key={index} className="text-center group animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6 group-hover:bg-blue-200 transition-colors">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 lg:p-12 text-white text-center animate-fade-in-up">
              <h3 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Transform Your Business?</h3>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
                Join hundreds of companies that trust Zion Tech Group for their technology needs
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="btn bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                  Start Your Project
                </Link>
                <Link href="/solutions" className="btn border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold">
                  View Solutions
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-responsive-lg font-bold text-gray-900 mb-4">
                What Our Clients Say
              </h2>
              <p className="text-responsive-md text-gray-600">
                Don't just take our word for it - hear from our satisfied clients
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Sarah Johnson",
                  company: "TechCorp Inc.",
                  role: "CEO",
                  content: "Zion Tech Group transformed our business with their innovative AI solutions. The results exceeded our expectations and our productivity has increased by 300%."
                },
                {
                  name: "Michael Chen",
                  company: "DataFlow Systems",
                  role: "CTO",
                  content: "Their blockchain implementation was flawless. We now have a secure, scalable platform that our customers love. Highly recommended!"
                },
                {
                  name: "Emily Rodriguez",
                  company: "CloudFirst Solutions",
                  role: "VP of Engineering",
                  content: "The micro SaaS development service was outstanding. We launched our product 50% faster than expected and it's already profitable."
                }
              ].map((testimonial, i) => (
                <div key={i} className="bg-white p-8 rounded-xl shadow-lg card-hover animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div className="ml-4">
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-gray-500">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}