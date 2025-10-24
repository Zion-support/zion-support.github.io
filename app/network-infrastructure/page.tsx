'use client';
import React from 'react';
import Link from 'next/link';
import { ArrowRight, Brain, Shield, Users, Award, Mail, Smartphone, Globe } from 'lucide-react';

export default function NetworkInfrastructurePage() {
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
<<<<<<< HEAD

          <div className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 backdrop-blur-sm border border-purple-500/20 rounded-xlp-8text-center">
            <h2 className="text-2 xl font-bold text-white mb-4"  >Coming Soon</h2>
            <p className="text-gray-300 mb-6">
              We're working on bringing you comprehensive network infrastructure solutions. 
              Contact us to learn more about our services.
            </p>
            <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600transition-allduration-300">Contact Us
            </button>
          </div>
      </div>
        </div>
      </div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
          </div>
        </section>

        {/* Features Section */}
<<<<<<< HEAD
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Key Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced AI technology that drives results
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  {feature.benefits && (
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Our Solution?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Proven results that drive business growth and efficiency
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-lg text-white font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our experts to discuss your requirements and get started today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-amber-500 to-blue-600 hover:from-amber-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Contact Us
                </button>
                <button className="border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
<<<<<<< HEAD
      <Footer />
    </>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-02f6
=======

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
  );
}
=======
'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe, Network, Server, Wifi, Router, Database, Settings, Users, Clock, Star, TrendingUp } from 'lucide-react'

<<<<<<< HEAD
const NetworkInfrastructurePage: React.FC = () => {
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
  ]

  const benefits = [
    'Improved network performance and reliability',
    'Enhanced security and compliance',
    'Scalable infrastructure for growth',
    'Reduced downtime and maintenance costs',
    'Better user experience and productivity',
    'Future-proof technology solutions'
  ]

  const stats = [
    { label: 'Networks Deployed', value: '100+', icon: Network },
    { label: 'Uptime Guarantee', value: '99.9%', icon: Clock },
    { label: 'Client Satisfaction', value: '98%', icon: Star },
    { label: 'Performance Improvement', value: '300%', icon: TrendingUp }
  ]

  return (
    <>
      <Helmet>
        <title>Network Infrastructure | Zion Tech Group</title>
        <meta name="description" content="Professional network infrastructure solutions including design, implementation, and management services." />
        <meta name="keywords" content="network infrastructure, network design, server solutions, wireless networking, Zion Tech Group" />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
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
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
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
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300"
              >
                Schedule Consultation
              </Link>
=======
        <section className="mb-16"></section>
            <h2 className="text-3xl md: text-4xl font-bold text-white mb-4"></h2>
              Key Features;
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto"></p>
              Powerful capabilities designed to transform your business;
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"></div>
            <div className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-cyan-400/20 hover:border-cyan-400/60 transition-all duration-300"></div>
          <div className="text-center mb-12"></section>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Key Features</h2><p className="text-lg text-gray-300 max-w-2xl mx-auto">Powerful capabilities designed to transform your business</p>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"></div>

            <div className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-cyan-400/20 hover:border-cyan-400/60 transition-all duration-300"></div>
              <CheckCircle className="w-8 h-8 text-green-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Network Design</h3><p className="text-gray-300">Advanced network design capabilities powered by AI</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-cyan-400/20 hover:border-cyan-400/60 transition-all duration-300"></div>
              <CheckCircle className="w-8 h-8 text-green-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Security Implementation</h3><p className="text-gray-300">Advanced security implementation capabilities powered by AI</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-cyan-400/20 hover:border-cyan-400/60 transition-all duration-300"></div>
              <CheckCircle className="w-8 h-8 text-green-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Performance Optimization</h3><p className="text-gray-300">Advanced performance optimization capabilities powered by AI</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-cyan-400/20 hover:border-cyan-400/60 transition-all duration-300"></div>
              <CheckCircle className="w-8 h-8 text-green-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">24/7 Monitoring</h3><p className="text-gray-300">Advanced 24/7 monitoring capabilities powered by AI</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-cyan-400/20 hover:border-cyan-400/60 transition-all duration-300"></div>
              <CheckCircle className="w-8 h-8 text-green-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">SD-WAN Solutions</h3><p className="text-gray-300">Advanced sd-wan solutions capabilities powered by AI</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-cyan-400/20 hover:border-cyan-400/60 transition-all duration-300"></div>
              <CheckCircle className="w-8 h-8 text-green-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Network Automation</h3><p className="text-gray-300">Advanced network automation capabilities powered by AI</p>
            </div>
          </div>,
        </section>,
,
        {/* Benefits Section */}
        <section className="mb-16"></section>
            <h2 className="text-3xl md: text-4xl font-bold text-white mb-4"></h2>
              Why Choose Our Network Infrastructure?
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto"></p>
              Proven results and measurable impact for your business;
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"></div>
            <div className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-purple-400/20 hover:border-purple-400/60 transition-all duration-300"></div>
          <div className="text-center mb-12"></section>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Our Network Infrastructure?</h2><p className="text-lg text-gray-300 max-w-2xl mx-auto">Proven results and measurable impact for your business</p>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"></div>

            <div className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-purple-400/20 hover:border-purple-400/60 transition-all duration-300"></div>
              <TrendingUp className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Reliable Connectivity</h3><p className="text-gray-300">Measurable improvement in your business metrics</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-purple-400/20 hover:border-purple-400/60 transition-all duration-300"></div>
              <TrendingUp className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Enhanced Security</h3><p className="text-gray-300">Measurable improvement in your business metrics</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-purple-400/20 hover:border-purple-400/60 transition-all duration-300"></div>
              <TrendingUp className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Better Performance</h3><p className="text-gray-300">Measurable improvement in your business metrics</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-purple-400/20 hover:border-purple-400/60 transition-all duration-300"></div>
              <TrendingUp className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Reduced Downtime</h3><p className="text-gray-300">Measurable improvement in your business metrics</p>
            </div>
          </div>,
        </section>,
,
        {/* Pricing Section */}
        <section className="mb-16"></section>
          <div className="text-center mb-12"></section>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Pricing</h2><p className="text-lg text-gray-300 max-w-2xl mx-auto">Transparent pricing with no hidden fees</p>
            </p>
          </div>

          <div className="max-w-md mx-auto"></div>
            <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-cyan-400/20 text-center"></div>
              <h3 className="text-2xl font-bold text-white mb-4">Network Infrastructure</h3><div className="text-4xl font-bold text-cyan-400 mb-4">$1,400/month</div>
              <p className="text-gray-300 mb-6">per month</p><a
                href="/contact"
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 inline-block"
              >Get Started</a>
            <h2 className="text-3xl md: text-4xl font-bold text-white mb-4"></h2>
              Pricing;
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto"></p>
              Transparent pricing with no hidden fees;
            </p>
          </div>

          <div className="max-w-md mx-auto">,
            <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-cyan-400/20 text-center">,
              <h3 className="text-2xl font-bold text-white mb-4">Network Infrastructure</h3>,
              <div className="text-4xl font-bold text-cyan-400 mb-4">$1,400/month</div>
              <p className="text-gray-300 mb-6">per month</p>
              <a;
                href="/contact"
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white py-3 px-6 rounded-lg font-semibold hover: from-cyan-600 hover:to-purple-600 transition-all duration-300 inline-block"
              ></a>
                Get Started;
              </a>
            </div>)
          </div>)
        </section>)
),
        {/* Contact Section */}
        <section className="mb-16"></section>
            <h2 className="text-3xl md: text-4xl font-bold text-white mb-4"></h2>
              Ready to Get Started?
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto"></p>
              Contact our experts to discuss your specific needs;
          <div className="text-center mb-12"></section>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Get Started?</h2><p className="text-lg text-gray-300 max-w-2xl mx-auto">Contact our experts to discuss your specific needs</p>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"></div>
            <div className="text-center bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-cyan-400/20"></div>
              <Phone className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
              <p className="text-gray-300 mb-4">Speak directly with our experts</p>
              <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 text-lg font-semibold"></a>
                +1 302 464 0950;
              <h3 className="text-xl font-bold text-white mb-2">Call Us</h3><p className="text-gray-300 mb-4">Speak directly with our experts</p><a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 text-lg font-semibold">+1 302 464 0950</a>
              </a>
            </div>

            <div className="text-center bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-purple-400/20"></div>
              <Mail className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
              <p className="text-gray-300 mb-4">Send us your requirements</p>
              <a href="mailto:kleber@ziontechgroup.com" className="text-purple-400 hover:text-purple-300 text-lg font-semibold"></a>
                kleber@ziontechgroup.com;
              <h3 className="text-xl font-bold text-white mb-2">Email Us</h3><p className="text-gray-300 mb-4">Send us your requirements</p><a href="mailto:kleber@ziontechgroup.com" className="text-purple-400 hover:text-purple-300 text-lg font-semibold">kleber@ziontechgroup.com</a>
              </a>
            </div>

            <div className="text-center bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-pink-400/20"></div>
              <MapPin className="w-12 h-12 text-pink-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Visit Us</h3><p className="text-gray-300 mb-4">Our headquarters location</p>
              <p className="text-pink-400 text-sm"></p>
                364 E Main St STE 1008</p><br >Middletown DE 19709</br>
              </br>
                364 E Main St STE 1008<br />
                Middletown DE 19709;
              </p>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  )
}

<<<<<<< HEAD
export default NetworkInfrastructurePage
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-02d3
=======
export default NetworkInfrastructurePage;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-02f6
=======
      <Footer />,
    </div>);
};

export default NetworkInfrastructurePage;
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
=======
import React from 'react';

const NetworkInfrastructurePage: React.FC = () => {return (
    <>
      <title>NetworkInfrastructure - Zion Tech Group</title>

      <  />
  );}

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
=======
        <meta name="description" content="Professional network infrastructure services by Zion Tech Group" />
      </Helmet>

      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Network Infrastructure</h1>
          <p className="text-lg text-gray-300 mb-8">Professional network infrastructure services coming soon.</p>
=======
>>>>>>> 82054c731fbc948872384dc44fdbea9548fb9326
          
          <div className="bg-gray-800 p-6 rounded-lg">
            <Users className="h-12 w-12 text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Expert Support</h3>
            <p className="text-gray-300">
              Dedicated support team to help you succeed with our solutions.
            </p>
          </div>
        </div>
        
        <div className="mt-12">
          <h2 className="text-3xl font-bold mb-6">Why Choose Our Network Infrastructure Solutions?</h2>
          <ul className="space-y-4 text-lg text-gray-300 mb-8">
            <li className="flex items-center">
              <ArrowRight className="h-5 w-5 text-blue-400 mr-3" />
              Scalable and flexible architecture
            </li>
            <li className="flex items-center">
              <ArrowRight className="h-5 w-5 text-blue-400 mr-3" />
              Industry-leading performance
            </li>
            <li className="flex items-center">
              <ArrowRight className="h-5 w-5 text-blue-400 mr-3" />
              Easy integration with existing systems
            </li>
            <li className="flex items-center">
              <ArrowRight className="h-5 w-5 text-blue-400 mr-3" />
              24/7 monitoring and support
            </li>
          </ul>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/contact" 
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link 
              href="/services" 
              className="inline-flex items-center px-6 py-3 border border-gray-600 text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}