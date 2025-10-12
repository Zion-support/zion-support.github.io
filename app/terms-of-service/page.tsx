'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  Shield, 
  AlertTriangle, 
  CheckCircle, 
  Users, 
  Globe, 
  Settings,
  Mail, 
  Phone, 
  MapPin,
  ArrowRight,
  Lock,
  Database,
  Eye,
  Zap
} from 'lucide-react';

export default function TermsOfServicePage() {
  const sections = [
    {
      id: 'acceptance',
      title: 'Acceptance of Terms',
      icon: <CheckCircle className="w-6 h-6 text-green-400" />,
      content: [
        'By accessing and using our services, you accept and agree to be bound by these terms',
        'If you do not agree to these terms, you may not use our services',
        'These terms apply to all users of our website and services',
        'We reserve the right to modify these terms at any time',
        'Continued use of our services constitutes acceptance of any changes'
      ]
    },
    {
      id: 'service-description',
      title: 'Service Description',
      icon: <Zap className="w-6 h-6 text-cyan-400" />,
      content: [
        'We provide AI-powered solutions, cloud services, and micro SAAS applications',
        'Our services include but are not limited to: AI content generation, cloud infrastructure, data analytics',
        'We reserve the right to modify, suspend, or discontinue any service at any time',
        'We do not guarantee uninterrupted access to our services',
        'Some services may require additional terms and conditions'
      ]
    },
    {
      id: 'user-responsibilities',
      title: 'User Responsibilities',
      icon: <Users className="w-6 h-6 text-blue-400" />,
      content: [
        'You must provide accurate and complete information when using our services',
        'You are responsible for maintaining the confidentiality of your account credentials',
        'You must not use our services for any illegal or unauthorized purposes',
        'You must not attempt to gain unauthorized access to our systems',
        'You must comply with all applicable laws and regulations'
      ]
    },
    {
      id: 'prohibited-uses',
      title: 'Prohibited Uses',
      icon: <AlertTriangle className="w-6 h-6 text-red-400" />,
      content: [
        'Using our services for any unlawful purpose or to solicit others to perform unlawful acts',
        'Violating any international, federal, provincial, or state regulations, rules, laws, or local ordinances',
        'Transmitting or procuring the sending of any advertising or promotional material without our prior written consent',
        'Impersonating or attempting to impersonate another person or entity',
        'Engaging in any other conduct that restricts or inhibits anyone\'s use or enjoyment of our services'
      ]
    },
    {
      id: 'intellectual-property',
      title: 'Intellectual Property',
      icon: <Shield className="w-6 h-6 text-purple-400" />,
      content: [
        'All content, features, and functionality of our services are owned by Zion Tech Group',
        'Our services are protected by copyright, trademark, and other intellectual property laws',
        'You may not reproduce, distribute, modify, or create derivative works without our permission',
        'Any feedback or suggestions you provide may be used by us without compensation',
        'You retain ownership of any content you create using our services'
      ]
    },
    {
      id: 'privacy-policy',
      title: 'Privacy and Data Protection',
      icon: <Lock className="w-6 h-6 text-orange-400" />,
      content: [
        'Your privacy is important to us. Please review our Privacy Policy',
        'We collect and use your information in accordance with our Privacy Policy',
        'We implement appropriate security measures to protect your data',
        'We may share your information with third parties as described in our Privacy Policy',
        'You have certain rights regarding your personal information as outlined in our Privacy Policy'
      ]
    },
    {
      id: 'limitation-liability',
      title: 'Limitation of Liability',
      icon: <AlertTriangle className="w-6 h-6 text-yellow-400" />,
      content: [
        'Our services are provided "as is" without warranties of any kind',
        'We do not guarantee that our services will be error-free or uninterrupted',
        'We are not liable for any indirect, incidental, special, or consequential damages',
        'Our total liability shall not exceed the amount you paid for our services',
        'Some jurisdictions do not allow the limitation of liability, so these limitations may not apply to you'
      ]
    },
    {
      id: 'termination',
      title: 'Termination',
      icon: <Settings className="w-6 h-6 text-gray-400" />,
      content: [
        'We may terminate or suspend your access to our services at any time',
        'We may terminate your account if you violate these terms',
        'Upon termination, your right to use our services will cease immediately',
        'We may delete your account and data upon termination',
        'You may terminate your account at any time by contacting us'
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Terms of Service - Zion Tech Group | Legal Terms & Conditions</title>
        <meta name="description" content="Read Zion Tech Group's terms of service and legal conditions for using our AI, cloud, and micro SAAS services. Understand your rights and responsibilities." />
        <meta name="keywords" content="terms of service, legal terms, conditions, user agreement, zion tech group" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#8b5cf6" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Terms of Service - Zion Tech Group" />
        <meta property="og:description" content="Read Zion Tech Group's terms of service and legal conditions for using our services." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/terms-of-service" />
        <meta property="og:image" content="https://ziontechgroup.com/og-terms-of-service.jpg" />
        <meta property="og:site_name" content="Zion Tech Group" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Terms of Service - Zion Tech Group" />
        <meta name="twitter:description" content="Read Zion Tech Group's terms of service and legal conditions for using our services." />
        <meta name="twitter:image" content="https://ziontechgroup.com/twitter-terms-of-service.jpg" />
        <meta name="twitter:site" content="@ziontechgroup" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
                Terms of Service
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
                Please read these terms carefully before using our services. By using our services, you agree to be bound by these terms.
              </p>
              <div className="flex items-center justify-center space-x-4 text-sm text-gray-400">
                <div className="flex items-center space-x-1">
                  <FileText className="w-4 h-4" />
                  <span>Last updated: January 15, 2024</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Globe className="w-4 h-4" />
                  <span>Effective immediately</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-8 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <FileText className="w-6 h-6 mr-3 text-cyan-400" />
                Contact Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-cyan-400" />
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="text-white">legal@ziontechgroup.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-cyan-400" />
                  <div>
                    <p className="text-sm text-gray-400">Phone</p>
                    <p className="text-white">+1 (302) 464-0950</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                  <div>
                    <p className="text-sm text-gray-400">Address</p>
                    <p className="text-white">364 E Main St STE 1008, Middletown, DE 19709</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Terms Sections */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="space-y-8">
              {sections.map((section, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                    {section.icon}
                    <span className="ml-3">{section.title}</span>
                  </h2>
                  <ul className="space-y-3">
                    {section.content.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Governing Law */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Globe className="w-6 h-6 mr-3 text-blue-400" />
                Governing Law
              </h2>
              <div className="text-gray-300 space-y-4">
                <p>
                  These terms shall be governed by and construed in accordance with the laws of the State of Delaware, 
                  without regard to its conflict of law provisions. Any legal action or proceeding arising under these 
                  terms will be brought exclusively in the courts located in Delaware.
                </p>
                <p>
                  If any provision of these terms is held to be invalid or unenforceable, the remaining provisions 
                  will remain in full force and effect. Our failure to enforce any right or provision of these terms 
                  will not be considered a waiver of those rights.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Important Notice */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-2xl p-8">
              <div className="flex items-start space-x-4">
                <AlertTriangle className="w-8 h-8 text-yellow-400 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">Important Notice</h2>
                  <p className="text-gray-300 mb-4">
                    These terms of service may be updated from time to time. We will notify you of any material changes 
                    by posting the new terms on this page and updating the "Last updated" date.
                  </p>
                  <p className="text-gray-300">
                    By using our services, you acknowledge that you have read and understood these terms and agree to be 
                    bound by them. If you do not agree to these terms, please do not use our services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Questions About These Terms?</h2>
                <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                  If you have any questions about these terms of service, please contact our legal team for clarification.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact" 
                    className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Contact Legal Team
                  </Link>
                  <Link 
                    to="/privacy-policy" 
                    className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                  >
                    View Privacy Policy
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}