'use client';
import React from 'react';
import Link from 'next/link';
import { ArrowRight, Brain, Shield, Users, Award, Mail, Smartphone, Globe, CheckCircle, Network, Server, Wifi, Router, Database, Settings, Clock, Star, TrendingUp, Phone, MapPin } from 'lucide-react';

export default function NetworkInfrastructurePage() {
<<<<<<< HEAD
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">Network Infrastructure</h1>
        <p className="text-xl text-gray-300 mb-8">
          Discover our comprehensive network infrastructure solutions designed to meet your business needs.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-12">
          <div className="bg-gray-800 p-6 rounded-lg">
            <Brain className="h-12 w-12 text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">AI-Powered Solutions</h3>
            <p className="text-gray-300">
              Leverage artificial intelligence to automate and optimize your business processes.
            </p>
          </div>
          
          <div className="bg-gray-800 p-6 rounded-lg">
            <Shield className="h-12 w-12 text-green-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Enterprise Security</h3>
            <p className="text-gray-300">
              Robust security measures to protect your data and ensure compliance.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Coming Soon</h2>
            <p className="text-gray-300 mb-6">
              We're working on bringing you comprehensive network infrastructure solutions. 
              Contact us to learn more about our services.
            </p>
            <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300">
              Contact Us
            </button>
          </div>
        </div>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Key Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced network infrastructure technology that drives results
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300">
                <div className="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center mb-6">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Scalable Architecture</h3>
                <p className="text-gray-300 mb-6">
                  Build and deploy scalable network infrastructure that grows with your business needs.
                </p>
                <Link href="/contact" className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold">
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>

              <div className="bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-green-500 transition-all duration-300">
                <div className="w-16 h-16 bg-green-500 rounded-lg flex items-center justify-center mb-6">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Security First</h3>
                <p className="text-gray-300 mb-6">
                  Enterprise-grade security measures to protect your network infrastructure and data.
                </p>
                <Link href="/contact" className="inline-flex items-center text-green-400 hover:text-green-300 font-semibold">
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>

              <div className="bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-purple-500 transition-all duration-300">
                <div className="w-16 h-16 bg-purple-500 rounded-lg flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">24/7 Support</h3>
                <p className="text-gray-300 mb-6">
                  Round-the-clock technical support to ensure your network infrastructure runs smoothly.
                </p>
                <Link href="/contact" className="inline-flex items-center text-purple-400 hover:text-purple-300 font-semibold">
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Network Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get started with our comprehensive network infrastructure solutions today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300">
                Get Started
              </Link>
              <Link href="/solutions" className="border border-gray-300 text-gray-300 hover:text-white hover:border-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300">
                View Solutions
              </Link>
            </div>
          </div>
        </section>
      </div>
=======
  const features = [
    {
      icon: Network,
      title: 'Network Design & Implementation',
      description: 'Comprehensive network architecture designed for scalability and performance',
      benefits: ['Scalable architecture', 'High availability', 'Load balancing', 'Traffic optimization']
    },
    {
      icon: Server,
      title: 'Server Infrastructure',
      description: 'Robust server solutions with enterprise-grade reliability and security',
      benefits: ['High-performance servers', 'Redundancy', 'Monitoring', 'Backup systems']
    },
    {
      icon: Wifi,
      title: 'Wireless Solutions',
      description: 'Advanced wireless networking for seamless connectivity across your organization',
      benefits: ['Wi-Fi 6/6E', 'Mesh networking', 'Guest access', 'Security protocols']
    },
    {
      icon: Router,
      title: 'Routing & Switching',
      description: 'Intelligent routing and switching solutions for optimal data flow',
      benefits: ['VLAN configuration', 'QoS management', 'Traffic shaping', 'Network segmentation']
    },
    {
      icon: Shield,
      title: 'Network Security',
      description: 'Comprehensive security measures to protect your network infrastructure',
      benefits: ['Firewall configuration', 'Intrusion detection', 'VPN setup', 'Access controls']
    },
    {
      icon: Database,
      title: 'Data Center Solutions',
      description: 'Modern data center infrastructure for mission-critical applications',
      benefits: ['Rack management', 'Power distribution', 'Cooling systems', 'Environmental monitoring']
    }
  ];

  const benefits = [
    'Improved network performance and reliability',
    'Enhanced security and compliance',
    'Scalable infrastructure for growth',
    'Reduced downtime and maintenance costs',
    'Better user experience and productivity',
    'Future-proof technology solutions'
  ];

  const stats = [
    { label: 'Networks Deployed', value: '100+', icon: Network },
    { label: 'Uptime Guarantee', value: '99.9%', icon: Clock },
    { label: 'Client Satisfaction', value: '98%', icon: Star },
    { label: 'Performance Improvement', value: '300%', icon: TrendingUp }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-6">
            Network Infrastructure
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Build robust, scalable network infrastructure that supports your business growth. 
            Our solutions ensure reliable connectivity and optimal performance.
          </p>
<<<<<<< HEAD
          <Link href="/contact" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200">Contact Us<ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
      <Footer />
    </div>);
}
=======
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center gap-2 bg-slate-800/50 backdrop-blur-sm rounded-lg px-4 py-2 border border-slate-700">
                <stat.icon className="w-5 h-5 text-cyan-400" />
                <span className="text-white font-semibold">{stat.value}</span>
                <span className="text-gray-400 text-sm">{stat.label}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/demo"
              className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Our Network Infrastructure Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We provide comprehensive network infrastructure solutions designed to meet 
              your current needs and scale with your future growth.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-400/50 transition-all duration-300 group">
                <feature.icon className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center gap-2 text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Why Choose Our Network Solutions?
              </h2>
              <p className="text-gray-300 mb-8">
                Our experienced team combines deep networking expertise with business acumen 
                to deliver infrastructure solutions that drive real results.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-6">Our Process</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Assessment</h4>
                    <p className="text-gray-300 text-sm">Analyze your current network infrastructure and requirements</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Design</h4>
                    <p className="text-gray-300 text-sm">Create a comprehensive network architecture plan</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Implementation</h4>
                    <p className="text-gray-300 text-sm">Deploy and configure your network infrastructure</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    4
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Support</h4>
                    <p className="text-gray-300 text-sm">Provide ongoing monitoring and maintenance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Upgrade Your Network?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you build a robust, scalable network infrastructure 
            that supports your business goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group"
            >
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/demo"
              className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">Contact our experts to discuss your specific needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-cyan-400/20">
              <Phone className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
              <p className="text-gray-300 mb-4">Speak directly with our experts</p>
              <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 text-lg font-semibold">+1 302 464 0950</a>
            </div>

            <div className="text-center bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-purple-400/20">
              <Mail className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
              <p className="text-gray-300 mb-4">Send us your requirements</p>
              <a href="mailto:kleber@ziontechgroup.com" className="text-purple-400 hover:text-purple-300 text-lg font-semibold">kleber@ziontechgroup.com</a>
            </div>

            <div className="text-center bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-pink-400/20">
              <MapPin className="w-12 h-12 text-pink-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Visit Us</h3>
              <p className="text-gray-300 mb-4">Our headquarters location</p>
              <p className="text-pink-400 text-sm">
                364 E Main St STE 1008<br />
                Middletown DE 19709
              </p>
            </div>
          </div>
        </div>
      </section>
>>>>>>> cursor/fix-errors-and-merge-to-main-b43e
    </div>
  );
}
>>>>>>> origin/main
