'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Link from 'next/link';
import { 
  Brain, 
  Cloud, 
  Shield, 
  BarChart3, 
  Smartphone, 
  Zap, 
  Database, 
  Globe,
  CheckCircle,
  ArrowRight,
  Star,
  Users,
  Award,
  Clock
} from 'lucide-react';

export default function HomePage() {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Advanced artificial intelligence services including machine learning, natural language processing, and computer vision.',
      price: 'Starting at $299/month'
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions with AWS, Azure, and Google Cloud integration for maximum performance.',
      price: 'Starting at $199/month'
    },
    {
      icon: Shield,
      title: 'Cybersecurity Suite',
      description: 'Comprehensive security solutions including threat detection, vulnerability assessment, and compliance management.',
      price: 'Starting at $399/month'
    },
    {
      icon: BarChart3,
      title: 'Data Analytics',
      description: 'Real-time analytics and business intelligence solutions to drive data-driven decisions.',
      price: 'Starting at $249/month'
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile app development for iOS and Android platforms.',
      price: 'Starting at $5,000/project'
    },
    {
      icon: Zap,
      title: '5G Solutions',
      description: 'Next-generation 5G network infrastructure and IoT solutions for smart cities and enterprises.',
      price: 'Starting at $1,999/month'
    }
  ];

  const microSaas = [
    {
      title: 'AI Content Studio',
      description: 'Create engaging content with AI-powered writing, image generation, and video editing tools.',
      price: '$99/month',
      features: ['AI Writing Assistant', 'Image Generation', 'Video Creation', 'SEO Optimization']
    },
    {
      title: 'AI Analytics Dashboard Pro',
      description: 'Advanced analytics platform with real-time insights and predictive modeling capabilities.',
      price: '$199/month',
      features: ['Real-time Analytics', 'Predictive Modeling', 'Custom Dashboards', 'API Integration']
    },
    {
      title: 'AI Voice Assistant',
      description: 'Intelligent voice assistant for customer service, sales, and internal operations.',
      price: '$149/month',
      features: ['Voice Recognition', 'Natural Language Processing', 'Multi-language Support', 'Custom Training']
    },
    {
      title: 'AI Project Manager',
      description: 'Smart project management tool with AI-powered task optimization and team collaboration.',
      price: '$79/month',
      features: ['Task Automation', 'Resource Optimization', 'Progress Tracking', 'Team Collaboration']
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '50+', label: 'AI Services' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Zion Tech Group - Advanced AI & IT Solutions | Leading Technology Provider</title>
        <meta name="description" content="Transform your business with Zion Tech Group's cutting-edge AI services, IT solutions, and micro SAAS platforms. Expert consulting, 24/7 support, competitive pricing starting at $99/month." />
        <meta name="keywords" content="AI services, IT solutions, micro SAAS, artificial intelligence, cloud computing, cybersecurity, data analytics, 5G solutions, mobile development" />
        <link rel="canonical" href="https://ziontechgroup.com" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Transform Your Business with
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> AI & IT Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
              Leading provider of innovative AI services, comprehensive IT solutions, and powerful micro SAAS platforms. 
              Accelerate your digital transformation with cutting-edge technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link
                href="/contact"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Get Started Today
                <ArrowRight className="inline ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/ai-services"
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300 font-semibold text-lg"
              >
                Explore AI Services
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Core Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to drive innovation and growth across all industries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{feature.description}</p>
                <div className="text-blue-600 font-semibold">{feature.price}</div>
                <Link
                  href="/contact"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium mt-4 group"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Micro SAAS Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Micro SAAS Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Powerful, focused software solutions that solve specific business challenges with AI-powered intelligence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {microSaas.map((saas, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-semibold text-gray-900">{saas.title}</h3>
                  <div className="text-2xl font-bold text-blue-600">{saas.price}</div>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">{saas.description}</p>
                <ul className="space-y-2 mb-6">
                  {saas.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-center block"
                >
                  Start Free Trial
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Zion Tech Group?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine cutting-edge technology with deep industry expertise to deliver exceptional results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Expert Team</h3>
              <p className="text-gray-600">Certified professionals with 10+ years of experience in AI and IT solutions.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock technical support and monitoring for all our services.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Enterprise Security</h3>
              <p className="text-gray-600">Bank-level security with SOC 2 compliance and advanced encryption.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Proven Track Record</h3>
              <p className="text-gray-600">500+ successful projects with 99.9% client satisfaction rate.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of companies that trust Zion Tech Group for their AI and IT solutions. 
            Get started with a free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg shadow-lg"
            >
              Schedule Free Consultation
            </Link>
            <a
              href="tel:+13024640950"
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold text-lg"
            >
              Call: +1 302 464 0950
            </a>
          </div>
          <div className="mt-8 text-blue-100">
            <p>📧 Email: kleber@ziontechgroup.com</p>
            <p>📍 Address: 364 E Main St STE 1008, Middletown DE 19709</p>
          </div>
        </div>
      </section>
    </div>
  );
}