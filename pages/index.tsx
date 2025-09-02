<<<<<<< HEAD
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowRight, Brain, Zap, Shield, Cloud, Users, CheckCircle, Star } from 'lucide-react';
=======
import React from
  'react';
import Head from
  'next/head';
>>>>>>> origin/main

export default function Home() {
  const featuredServices = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Customer Sentiment Analyzer",
      description: "Monitor customer feedback across all channels in real-time with AI-powered sentiment analysis.",
      price: "From $199/month",
      link: "/services/ai-customer-sentiment-analyzer"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "AI Automated Email Follow-up",
      description: "Intelligent email automation with personalized sequences and optimal timing predictions.",
      price: "From $49/month",
      link: "/services/ai-automated-email-followup"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Zero Trust Security Platform",
      description: "Comprehensive security solution with identity verification and network segmentation.",
      price: "From $2,000/month",
      link: "/services/zero-trust-security-platform"
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Cost Optimization Suite",
      description: "AI-powered cloud cost management across AWS, Azure, and GCP with automated optimization.",
      price: "From $500/month",
      link: "/services/cloud-cost-optimization-suite"
    }
  ];

  const benefits = [
    "Reduce operational costs by 30-50%",
    "Improve efficiency with AI automation",
    "Scale your business with cloud solutions",
    "Enhance security with zero-trust architecture",
    "24/7 expert support and monitoring"
  ];

  return (
    <>
      <Head>
        <title>Zion Tech Group - Leading AI & Technology Solutions Provider</title>
        <meta name="description" content="Transform your business with our AI services, micro SaaS solutions, and IT infrastructure. Expert team delivering cutting-edge technology solutions." />
        <meta name="keywords" content="AI services, micro SaaS, IT solutions, cloud computing, cybersecurity, automation" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://ziontechgroup.com" />
      </Head>
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Transform Your Business with
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"> AI & Technology</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed max-w-4xl mx-auto">
              Leading provider of revolutionary AI services, micro SaaS solutions, and cutting-edge IT infrastructure. 
              We help businesses automate, optimize, and scale with intelligent technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
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
            
            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-gray-300">📞</span>
                <a href="tel:+13024640950" className="text-white hover:text-blue-300">+1 302 464 0950</a>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-300">✉️</span>
                <a href="mailto:kleber@ziontechgroup.com" className="text-white hover:text-blue-300">kleber@ziontechgroup.com</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our most popular AI and technology solutions designed to transform your business operations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="text-blue-600 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{service.description}</p>
                <div className="text-blue-600 font-semibold mb-4">{service.price}</div>
                <Link href={service.link}>
                  <span className="text-blue-600 hover:text-blue-700 font-medium text-sm cursor-pointer inline-flex items-center">
                    Learn More
                    <ArrowRight className="ml-1 w-4 h-4" />
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Zion Tech Group?</h2>
              <p className="text-xl text-gray-600 mb-8">
                We deliver measurable results through cutting-edge technology and expert implementation. 
                Our solutions are designed to scale with your business and provide long-term value.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-8">
              <div className="text-center">
                <Users className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Expert Team</h3>
                <p className="text-gray-600 mb-6">
                  Our team of AI specialists, cloud architects, and security experts brings decades of experience 
                  in delivering enterprise-grade solutions.
                </p>
                <div className="flex items-center justify-center gap-2 text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                  <span className="text-gray-600 ml-2">5.0/5.0 Client Rating</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get a free consultation with our experts and discover how our AI and technology solutions can drive your business forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <span className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors cursor-pointer inline-flex items-center">
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </span>
            </Link>
            <Link href="/services">
              <span className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors cursor-pointer">
                View All Services
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}