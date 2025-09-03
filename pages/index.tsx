import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowRight, Brain, Zap, Shield, Cloud, Users, CheckCircle, Star, PenTool, Calendar, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

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
      icon: <Mail className="w-8 h-8" />,
      title: "AI Automated Email Follow-up",
      description: "Intelligent email automation with personalized sequences and optimal timing predictions.",
      price: "From $49/month",
      link: "/services/ai-automated-email-followup"
    },
    {
      icon: <PenTool className="w-8 h-8" />,
      title: "AI Content Generator",
      description: "AI-powered content generation for blogs, social media, and marketing materials.",
      price: "From $29/month",
      link: "/services/ai-content-generator"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "AI-Powered CRM",
      description: "Intelligent CRM with AI-powered lead scoring and automated follow-ups.",
      price: "From $79/month",
      link: "/services/ai-powered-crm"
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "AI Project Management",
      description: "Smart project management with AI-powered scheduling and resource allocation.",
      price: "From $89/month",
      link: "/services/ai-project-management"
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

      {/* Featured Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Featured Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our most popular AI and technology solutions that are transforming businesses worldwide.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{service.title}</h3>
                    <p className="text-blue-600 font-semibold text-sm">{service.price}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link href={service.link}>
                  <span className="text-blue-600 hover:text-blue-800 font-semibold inline-flex items-center cursor-pointer">
                    Learn More
                    <ArrowRight className="ml-1 w-4 h-4" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver measurable results that drive your business forward.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 text-gray-200 max-w-3xl mx-auto">
              Join thousands of businesses that have already transformed their operations with our AI and technology solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/contact">
                <span className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors cursor-pointer inline-flex items-center">
                  Get Free Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </span>
              </Link>
              <a href="tel:+13024640950" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                Call +1 302 464 0950
              </a>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-gray-300">📞</span>
                <a href="tel:+13024640950" className="text-white hover:text-blue-300">+1 302 464 0950</a>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-300">✉️</span>
                <a href="mailto:kleber@ziontechgroup.com" className="text-white hover:text-blue-300">kleber@ziontechgroup.com</a>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-300">📍</span>
                <p className="text-blue-200 text-sm">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-2xl mx-auto">
              <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 cursor-pointer inline-flex items-center justify-center text-lg hover:scale-105 hover:shadow-lg">
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link href="/about" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300 cursor-pointer inline-flex items-center justify-center text-lg hover:scale-105">
                Learn More About Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};