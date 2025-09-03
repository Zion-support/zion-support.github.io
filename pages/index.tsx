import React from 'react';
import Head from 'next/head';
// import Link from 'next/link';
import { ArrowRight, Brain, Zap, Shield, Cloud, Users, CheckCircle, Star } from 'lucide-react';

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
        <title>Zion Tech Group - Leading AI & Technology Solutions</title>
        <meta name="description" content="Transform your business with cutting-edge AI solutions, cloud services, and technology consulting. Expert team delivering innovative results." />
        <meta name="keywords" content="AI solutions, cloud services, technology consulting, micro SaaS, IT services, digital transformation" />
        <link rel="canonical" href="https://ziontechgroup.com" />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Transform Your Business with
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"> AI & Technology</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
              Leading provider of cutting-edge AI solutions, cloud services, and technology consulting. 
              We help businesses scale, automate, and innovate with proven results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 cursor-pointer inline-block text-lg hover:scale-105 hover:shadow-lg">
                Get Started Today
              </a>
              <a href="/services" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 cursor-pointer inline-block text-lg hover:scale-105">
                View Our Services
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">500+</div>
                <div className="text-gray-300">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">50+</div>
                <div className="text-gray-300">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">99.9%</div>
                <div className="text-gray-300">Uptime Guarantee</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">24/7</div>
                <div className="text-gray-300">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Featured Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our most popular solutions that are transforming businesses across industries.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredServices.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="text-blue-600 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="text-lg font-semibold text-green-600 mb-4">{service.price}</div>
                <a href={service.link} className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center">
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Zion Tech Group?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver results-driven solutions with proven methodologies and cutting-edge technology.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <p className="text-gray-700 text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 text-blue-200">
            Contact us today for a free consultation and discover how our solutions can drive your success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 cursor-pointer inline-block text-lg hover:scale-105">
              Get Free Consultation
            </a>
            <a href="tel:+13024640950" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 cursor-pointer inline-block text-lg hover:scale-105">
              Call: +1 302 464 0950
            </a>
          </div>
          <div className="mt-8 text-blue-200">
            <p>Email: <a href="mailto:kleber@ziontechgroup.com" className="text-white hover:underline">kleber@ziontechgroup.com</a></p>
            <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
          </div>
        </div>
      </section>
    </>
  );
}