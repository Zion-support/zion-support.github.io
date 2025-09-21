import React from 'react'
import Head from 'next/head'
import { Analytics, PerformanceMonitor } from '../components/analytics/Analytics'

export default function Home() {
  return (
    <>
      <Analytics />
      <PerformanceMonitor />
      <Head>
        <title>Zion Tech Group - Advanced IT Solutions & AI Services</title>
        <meta name="description" content="Leading provider of cutting-edge IT solutions, AI services, and innovative technology solutions for enterprises worldwide. Transform your business with our expert guidance." />
        <meta name="keywords" content="IT services, AI solutions, technology consulting, enterprise software, cloud solutions, digital transformation, cybersecurity, machine learning" />
        <meta property="og:title" content="Zion Tech Group - Advanced IT Solutions & AI Services" />
        <meta property="og:description" content="Leading provider of cutting-edge IT solutions, AI services, and innovative technology solutions for enterprises worldwide." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion Tech Group - Advanced IT Solutions & AI Services" />
        <meta name="twitter:description" content="Leading provider of cutting-edge IT solutions, AI services, and innovative technology solutions for enterprises worldwide." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://ziontechgroup.com" />
        <meta name="robots" content="index, follow" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800">
        {/* Hero Section */}
        <div className="min-h-screen flex items-center justify-center px-4">
          <div className="text-center max-w-6xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              Zion Tech Group
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-4xl mx-auto leading-relaxed">
              Pioneering the future of technology with advanced IT solutions, AI services, 
              and innovative digital transformation that drives enterprise success.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl">
                Explore Our Services
              </button>
              <button className="border-2 border-white/30 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 transition-all duration-200">
                Get Started Today
              </button>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">500+</div>
                <div className="text-white/70">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">50+</div>
                <div className="text-white/70">Countries Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">99.9%</div>
                <div className="text-white/70">Uptime Guarantee</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">24/7</div>
                <div className="text-white/70">Support Available</div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Core Services
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Comprehensive technology solutions designed to accelerate your business growth 
                and drive digital innovation across all industries.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'AI & Machine Learning',
                  description: 'Advanced AI solutions and machine learning models to transform your business operations and drive intelligent automation.',
                  icon: '🤖',
                  features: ['Predictive Analytics', 'Natural Language Processing', 'Computer Vision', 'Automated Decision Making']
                },
                {
                  title: 'Cloud Infrastructure',
                  description: 'Scalable cloud solutions and infrastructure management for modern enterprises with 99.9% uptime guarantee.',
                  icon: '☁️',
                  features: ['Multi-Cloud Strategy', 'DevOps Automation', 'Container Orchestration', 'Disaster Recovery']
                },
                {
                  title: 'Cybersecurity',
                  description: 'Comprehensive security solutions to protect your digital assets, data, and ensure regulatory compliance.',
                  icon: '🔒',
                  features: ['Threat Detection', 'Identity Management', 'Data Encryption', 'Security Auditing']
                },
                {
                  title: 'Digital Transformation',
                  description: 'End-to-end digital transformation services to modernize your business processes and enhance customer experience.',
                  icon: '🚀',
                  features: ['Process Automation', 'Legacy Modernization', 'API Integration', 'Change Management']
                },
                {
                  title: 'Data Analytics',
                  description: 'Transform raw data into actionable insights with our advanced analytics and business intelligence solutions.',
                  icon: '📊',
                  features: ['Real-time Dashboards', 'Predictive Modeling', 'Data Visualization', 'Performance Metrics']
                },
                {
                  title: 'IoT Solutions',
                  description: 'Connect and manage your devices with our comprehensive Internet of Things solutions and platforms.',
                  icon: '🌐',
                  features: ['Device Management', 'Edge Computing', 'Data Processing', 'Remote Monitoring']
                }
              ].map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6 hover:bg-white/20 hover:scale-105 transition-all duration-300 cursor-pointer group">
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {service.title}
                  </h3>
                  <p className="text-white/80 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-white/70 flex items-center">
                        <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-400/30 rounded-xl p-8 bg-white/10 backdrop-blur-lg">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Join hundreds of successful companies that have accelerated their growth 
                with our cutting-edge technology solutions and expert guidance.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <button className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl">
                  Start Your Project
                </button>
                <button className="w-full sm:w-auto border-2 border-white/30 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 transition-all duration-200">
                  Schedule Consultation
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-white mb-2">Free Consultation</div>
                  <div className="text-white/70">Expert analysis of your needs</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white mb-2">Custom Solutions</div>
                  <div className="text-white/70">Tailored to your business</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white mb-2">24/7 Support</div>
                  <div className="text-white/70">Always here to help</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="border-t border-white/20 py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Zion Tech Group</h3>
                <p className="text-white/70 mb-4">
                  Leading provider of cutting-edge IT solutions and AI services 
                  for enterprises worldwide.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-white/70 hover:text-white transition-colors">
                    LinkedIn
                  </a>
                  <a href="#" className="text-white/70 hover:text-white transition-colors">
                    Twitter
                  </a>
                  <a href="#" className="text-white/70 hover:text-white transition-colors">
                    GitHub
                  </a>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-white/70 hover:text-white transition-colors">AI & ML Solutions</a></li>
                  <li><a href="#" className="text-white/70 hover:text-white transition-colors">Cloud Infrastructure</a></li>
                  <li><a href="#" className="text-white/70 hover:text-white transition-colors">Cybersecurity</a></li>
                  <li><a href="#" className="text-white/70 hover:text-white transition-colors">Digital Transformation</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-white/70 hover:text-white transition-colors">About Us</a></li>
                  <li><a href="#" className="text-white/70 hover:text-white transition-colors">Careers</a></li>
                  <li><a href="#" className="text-white/70 hover:text-white transition-colors">Case Studies</a></li>
                  <li><a href="#" className="text-white/70 hover:text-white transition-colors">Blog</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
                <ul className="space-y-2">
                  <li className="text-white/70">info@ziontechgroup.com</li>
                  <li className="text-white/70">+1 (555) 123-4567</li>
                  <li className="text-white/70">New York, NY</li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-white/20 pt-8 text-center">
              <p className="text-white/70">
                © 2025 Zion Tech Group. All rights reserved. | 
                <a href="#" className="hover:text-white transition-colors ml-2">Privacy Policy</a> | 
                <a href="#" className="hover:text-white transition-colors ml-2">Terms of Service</a>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}