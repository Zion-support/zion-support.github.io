'use client'
import React from 'react'
import { FileText, Scale, Shield, AlertTriangle, CheckCircle, ArrowRight, Globe, User, Mail, Phone, Calendar, Lock, Database, Server, Key } from 'lucide-react'

export default function TermsPage() {
  const lastUpdated = 'January 1, 2024'
  
  const sections = [
    {
      title: 'Acceptance of Terms',
      icon: CheckCircle,
      content: 'By accessing and using our website and services, you accept and agree to be bound by the terms and provision of this agreement.'
    },
    {
      title: 'Use License',
      icon: Key,
      content: 'Permission is granted to temporarily download one copy of the materials on our website for personal, non-commercial transitory viewing only.'
    },
    {
      title: 'Service Availability',
      icon: Server,
      content: 'We strive to maintain high service availability but cannot guarantee uninterrupted access to our services.'
    },
    {
      title: 'Limitation of Liability',
      icon: Shield,
      content: 'In no event shall Zion Tech Group or its suppliers be liable for any damages arising out of the use or inability to use our services.'
    },
    {
      title: 'Privacy Policy',
      icon: Lock,
      content: 'Your privacy is important to us. Please review our Privacy Policy, which also governs your use of our services.'
    },
    {
      title: 'Intellectual Property',
      icon: Database,
      content: 'All content, trademarks, and other intellectual property on this website are the property of Zion Tech Group.'
    },
    {
      title: 'Termination',
      icon: AlertTriangle,
      content: 'We may terminate or suspend your access to our services immediately, without prior notice, for any reason whatsoever.'
    },
    {
      title: 'Governing Law',
      icon: Scale,
      content: 'These terms shall be governed by and construed in accordance with the laws of the United States.'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Terms of Service
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Please read these terms carefully before using our services
          </p>
          <div className="flex items-center justify-center text-sm text-blue-200">
            <Calendar className="h-4 w-4 mr-2" />
            Last updated: {lastUpdated}
          </div>
        </div>
      </div>

      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Introduction</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                These Terms of Service ("Terms") govern your use of our website and services operated by Zion Tech Group ("us", "we", or "our"). By accessing or using our services, you agree to be bound by these Terms.
              </p>
              <p className="text-gray-600 leading-relaxed">
                If you disagree with any part of these terms, then you may not access our services.
              </p>
            </section>

            {/* Terms Sections */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Terms and Conditions</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {sections.map((section, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-lg">
                    <div className="flex items-center mb-4">
                      <section.icon className="h-8 w-8 text-blue-600 mr-3" />
                      <h3 className="text-xl font-semibold text-gray-900">{section.title}</h3>
                    </div>
                    <p className="text-gray-600">{section.content}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Contact Information */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-600 mb-4">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">legal@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">+1 (302) 464-0950</span>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}