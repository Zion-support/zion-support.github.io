import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Brain, Shield, Cloud, Code, Server, Zap, Users, Target, Star, CheckCircle, Phone, Mail, MapPin, ArrowRight, Rocket, Globe, Award } from 'lucide-react';

export default function Home() {
  const featuredServices = [
    {
      title: "AI Business Intelligence Platform",
      description: "Next-generation BI platform using AI to automatically analyze data and generate actionable insights.",
      icon: Brain,
      category: "AI & Analytics",
      price: "$2,999/month",
      features: ["AI-powered analysis", "Automated insights", "Real-time monitoring", "Predictive analytics"]
    },
    {
      title: "Quantum AI Optimization Platform",
      description: "Revolutionary platform combining quantum computing with AI for complex optimization problems.",
      icon: Zap,
      category: "Quantum Computing",
      price: "$4,999/month",
      features: ["Quantum algorithms", "AI optimization", "1000x faster processing", "Multi-objective solutions"]
    },
    {
      title: "Cloud-Native Infrastructure Platform",
      description: "Comprehensive platform for building, deploying, and managing cloud-native applications.",
      icon: Cloud,
      category: "Cloud & DevOps",
      price: "$2,499/month",
      features: ["Infrastructure as Code", "Auto-scaling", "Multi-cloud support", "CI/CD automation"]
    }
  ];

  const stats = [
    { number: "30+", label: "Innovative Services" },
    { number: "99.9%", label: "Uptime Guarantee" },
    { number: "24/7", label: "Expert Support" },
    { number: "500%", label: "Average ROI" }
  ];

  const technologies = [
    "Artificial Intelligence", "Machine Learning", "Quantum Computing", "Edge Computing",
    "Blockchain & Web3", "IoT Solutions", "Cloud Infrastructure", "Cybersecurity",
    "DevOps Automation", "Data Analytics", "Predictive Maintenance", "Smart Cities"
  ];

  return (
    <>
      <Head>
        <title>Zion Tech Group | Leading AI, IT & Technology Solutions Provider</title>
        <meta name="description" content="Zion Tech Group delivers cutting-edge AI services, IT infrastructure solutions, and innovative micro SAAS platforms. Transform your business with our revolutionary technology solutions." />
        <meta name="keywords" content="AI services, IT infrastructure, micro SAAS, cloud computing, cybersecurity, DevOps, edge computing, quantum computing, technology solutions" />
      </Head>

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-blue-600 via-purple-700 to-indigo-800 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
                <Rocket className="w-5 h-5" />
                <span className="text-sm font-medium">Revolutionary Technology Solutions</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Future-Ready
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-200">
                  Technology Solutions
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto mb-8 leading-relaxed">
                Transform your business with our cutting-edge AI services, IT infrastructure, and micro SAAS platforms. 
                Built for tomorrow, delivering results today.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link
                  href="/services"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 flex items-center justify-center gap-2 text-lg"
                >
                  Explore Services
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a
                  href="mailto:kleber@ziontechgroup.com?subject=Technology Solutions Consultation"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200 flex items-center justify-center gap-2 text-lg"
                >
                  <Mail className="w-5 h-5" />
                  Get Started
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                    <div className="text-blue-200 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Featured Services */}
        <div className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Featured Technology Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover our most innovative and transformative services designed to accelerate your digital transformation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredServices.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-xl mb-6">
                      <IconComponent className="w-8 h-8 text-blue-600" />
                    </div>
                    
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-sm font-medium rounded-full mb-3">
                        {service.category}
                      </span>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                    </div>

                    <div className="mb-6">
                      <div className="text-2xl font-bold text-blue-600 mb-3">{service.price}</div>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="text-sm text-gray-700 flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link
                      href="/services"
                      className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Technology Stack */}
        <div className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Cutting-Edge Technology Stack
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We leverage the latest technologies and frameworks to deliver innovative solutions that drive business growth
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {technologies.map((tech, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6 text-center hover:bg-blue-50 transition-colors">
                  <div className="text-lg font-semibold text-gray-900">{tech}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We combine innovation, expertise, and proven results to deliver technology solutions that transform businesses
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-6">
                  <Award className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Proven Excellence</h3>
                <p className="text-gray-600">
                  Decades of experience delivering cutting-edge technology solutions with measurable business impact
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-6">
                  <Globe className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Global Reach</h3>
                <p className="text-gray-600">
                  Serving clients worldwide with localized expertise and 24/7 support across all time zones
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-6">
                  <Rocket className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Innovation First</h3>
                <p className="text-gray-600">
                  Leading the way in emerging technologies like AI, quantum computing, and edge computing
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Let our team of technology experts help you implement the right solutions 
              to drive growth, efficiency, and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Technology Solutions Consultation"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Schedule Consultation
              </a>
              <a
                href="tel:+13024640950"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200 flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
              <p className="text-xl text-gray-600">Ready to discuss your technology needs? Contact us today.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  <Phone className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
                <p className="text-gray-600">+1 302 464 0950</p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  <Mail className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600">kleber@ziontechgroup.com</p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  <MapPin className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Address</h3>
                <p className="text-gray-600">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}