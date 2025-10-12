#!/usr/bin/env python3
import os
import glob

def create_clean_contact_page():
    """Create a clean contact page."""
    content = ''''use client'

import React from 'react'
import { Helmet } from 'react-helmet-async'
import ContactForm from '../components/ContactForm'
import SEOHead from '../components/SEOHead'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOHead 
        title="Contact Us - Zion Tech Group"
        description="Get in touch with Zion Tech Group for AI and IT solutions. We're here to help transform your business with cutting-edge technology."
        keywords="contact, AI services, IT solutions, business consultation, Zion Tech Group"
        canonical="/contact"
      />
      
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to transform your business? Let's discuss your project and see how we can help you achieve your goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <ContactForm />
            </div>
            
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Why Choose Zion Tech Group?</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-4 mt-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Expert Team</h3>
                      <p className="text-gray-300">Our experienced developers and AI specialists deliver cutting-edge solutions.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-4 mt-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Proven Results</h3>
                      <p className="text-gray-300">We've helped 500+ businesses transform their operations with our solutions.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center mr-4 mt-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">24/7 Support</h3>
                      <p className="text-gray-300">Round-the-clock support to ensure your success.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Contact Information</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-sm">📧</span>
                    </div>
                    <div>
                      <p className="text-white font-medium">Email</p>
                      <p className="text-gray-300">contact@ziontechgroup.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-sm">📞</span>
                    </div>
                    <div>
                      <p className="text-white font-medium">Phone</p>
                      <p className="text-gray-300">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-sm">📍</span>
                    </div>
                    <div>
                      <p className="text-white font-medium">Location</p>
                      <p className="text-gray-300">San Francisco, CA</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
'''
    
    with open('app/contact/page.tsx', 'w', encoding='utf-8') as f:
        f.write(content)
    print("Created clean contact page")

def create_clean_cybersecurity_page():
    """Create a clean cybersecurity page."""
    content = ''''use client'

import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Shield, Lock, Eye, AlertTriangle, CheckCircle, ArrowRight } from 'lucide-react'
import SEOHead from '../components/SEOHead'

export default function CybersecurityPage() {
  const services = [
    {
      icon: <Shield className="w-8 h-8 text-blue-500" />,
      title: 'Security Audits',
      description: 'Comprehensive security assessments to identify vulnerabilities and risks.',
      features: ['Penetration Testing', 'Vulnerability Assessment', 'Compliance Review', 'Risk Analysis']
    },
    {
      icon: <Lock className="w-8 h-8 text-green-500" />,
      title: 'Data Protection',
      description: 'Advanced encryption and data protection solutions for your sensitive information.',
      features: ['End-to-End Encryption', 'Data Loss Prevention', 'Backup Solutions', 'Access Controls']
    },
    {
      icon: <Eye className="w-8 h-8 text-purple-500" />,
      title: 'Threat Monitoring',
      description: '24/7 monitoring and detection of security threats and suspicious activities.',
      features: ['Real-time Monitoring', 'Threat Detection', 'Incident Response', 'Security Alerts']
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-red-500" />,
      title: 'Incident Response',
      description: 'Rapid response and recovery services when security incidents occur.',
      features: ['Emergency Response', 'Forensic Analysis', 'Recovery Planning', 'Post-Incident Review']
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOHead 
        title="Cybersecurity Services - Zion Tech Group"
        description="Protect your business with our comprehensive cybersecurity services. Advanced threat protection, data security, and compliance solutions."
        keywords="cybersecurity, data protection, threat monitoring, security audit, compliance, Zion Tech Group"
        canonical="/cybersecurity"
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Advanced
            <br />
            <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              Cybersecurity
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Protect your business with enterprise-grade cybersecurity solutions. 
            We provide comprehensive security services to keep your data safe and your operations secure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-gradient-to-r from-red-500 to-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-red-600 hover:to-orange-700 transition-all duration-300 flex items-center justify-center"
            >
              Get Security Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="/about"
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Cybersecurity Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive security solutions designed to protect your business from evolving threats
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-red-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-red-500 to-orange-600 rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Secure Your Business?
            </h2>
            <p className="text-xl text-red-100 mb-8">
              Don't wait for a security breach. Protect your business today with our comprehensive cybersecurity solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                Get Security Assessment
              </a>
              <a
                href="/about"
                className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-all duration-300"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
'''
    
    with open('app/cybersecurity/page.tsx', 'w', encoding='utf-8') as f:
        f.write(content)
    print("Created clean cybersecurity page")

def main():
    print("Creating clean pages...")
    create_clean_contact_page()
    create_clean_cybersecurity_page()
    print("Clean pages created!")

if __name__ == "__main__":
    main()