<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
import { Helmet } from 'react-helmet-async';
=======
import React from 'react'
import { Helmet } from 'react-helmet-async'
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0f1c

export default function Terms() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Helmet>
        <title>Terms of Service - Zion Tech Group</title>
<<<<<<< HEAD
        <meta name="description" content="Terms of service of Zion Tech Group" />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Terms of Service
          </h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              These terms of service govern your use of Zion Tech Group's services and website.
            </p>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Acceptance of Terms</h2>
            <p className="text-gray-600 mb-6">
              By accessing and using our services, you accept and agree to be bound by the terms
              and provision of this agreement.
            </p>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Use License</h2>
            <p className="text-gray-600 mb-6">
              Permission is granted to temporarily download one copy of the materials on our website
              for personal, non-commercial transitory viewing only.
            </p>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h2>
            <p className="text-gray-600 mb-6">
              If you have any questions about these terms, please contact us at legal@ziontechgroup.com.
            </p>
          </div>

=======
        <meta name="description" content="Terms of Service services by Zion Tech Group. Advanced AI and IT solutions for your business." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Coming soon - Advanced Terms of Service solutions by Zion Tech Group
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default TermsPage
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0f1c
=======
'use client';
import React from 'react';
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const TermsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Terms - Zion Tech Group</title>
        <meta name="description" content="Zion Tech Group - Terms page" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        <div className="pt-24 pb-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 cyber-text neon-pulse">
              Terms
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              This page is under construction. Please check back soon.
            </p>
          </div>
        </div>
=======
<<<<<<< HEAD
import {Helmet}}from 'react-helmet-async';
import {FileText, Scale, Shield, AlertTriangle, CheckCircle, ArrowRight, Globe, User, Mail, Phone, Calendar, Lock, Database, Server, Key}}from 'lucide-react';
=======
import { Helmet } from 'react-helmet-async';
import { FileText, Scale, Shield, AlertTriangle, CheckCircle, ArrowRight, Globe, User, Mail, Phone, Calendar, Lock, Database, Server, Key } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function TermsPage() {
  const lastUpdated = 'January 1, 2024';

>>>>>>> cursor/website-audit-and-update-with-deployment-a217
  const sections = [
    {title: 'Acceptance of Terms',
      icon: CheckCircle,
      content: 'By accessing and using our website and services, you accept and agree to be bound by the terms and provision of this agreement.'},
    {title: 'Use License',
      icon: Key,
<<<<<<< HEAD
      content: 'Permission is granted to temporarily download one copy of the materials on our website for personal, non-commercial transitory viewing only.'},
    {title: 'Service Availability',
      icon: Server,},
    {title: 'Governing Law',
      icon: Scale,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      content: 'These terms shall be governed by and construed in accordance with the laws of the State of Delaware, United States.'}]
=======
=======
>>>>>>> cursor/website-audit-and-update-with-deployment-c0e8
      content: 'These terms shall be governed by and construed in accordance with the laws of the State of Delaware, United States.'
    }
  ]
>>>>>>> cursor/fix-errors-and-merge-to-main-e1a2
=======
=======
      content: 'Permission is granted to temporarily download one copy of the materials on our website for personal, non-commercial transitory viewing only.'
    },
    {
      title: 'Service Availability',
      icon: Server,
      content: 'We strive to maintain 99.9% uptime for our services, but we do not guarantee uninterrupted access and reserve the right to perform maintenance.'
    },
    {
      title: 'User Accounts',
      icon: User,
      content: 'You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.'
    },
    {
      title: 'Data Protection',
      icon: Shield,
      content: 'We implement industry-standard security measures to protect your data and comply with applicable data protection regulations.'
    },
    {
      title: 'Intellectual Property',
      icon: Lock,
      content: 'All content, trademarks, and intellectual property on our website and services are owned by Zion Tech Group or our licensors.'
    },
    {
      title: 'Limitation of Liability',
      icon: AlertTriangle,
      content: 'In no event shall Zion Tech Group be liable for any indirect, incidental, special, consequential, or punitive damages.'
    },
    {
      title: 'Governing Law',
      icon: Scale,
>>>>>>> cursor/website-audit-and-update-with-deployment-a217
      content: 'These terms shall be governed by and construed in accordance with the laws of the State of Delaware, United States.'
    }
  ];
>>>>>>> cursor/fix-errors-and-merge-to-main-cd7c

  const contactInfo = {email: 'legal@ziontechgroup.com',
    phone: '+1 (302) 464-0950',
<<<<<<< HEAD
    address: '364 E Main St STE 1008, Middletown, DE 19709'}return(<>)
      <Helmet />
        <title>Terms of Service - Zion Tech Group</title>
=======
    address: '364 E Main St STE 1008, Middletown, DE 19709'
<<<<<<< HEAD
  }

<<<<<<< HEAD

<<<<<<< HEAD
=======
  };
>>>>>>> cursor/fix-errors-and-merge-to-main-cd7c
=======
>>>>>>> cursor/website-audit-and-update-with-deployment-c0e8
  return (
    <>
      <Helmet></Helmet>
        <title></titl>Terms of Service - Zion Tech Group</title>
>>>>>>> cursor/fix-errors-and-merge-to-main-e1a2
=======
  return (
    <>
      <Helmet>
        <title>Terms of Service - Zion Tech Group</title>
        <meta name="description" content="Terms of Service for Zion Tech Group. Learn about our terms, conditions, and policies for using our AI and IT services." />
        <meta name="keywords" content="terms of service, legal, terms and conditions, privacy policy, user agreement" />
        <link rel="canonical" href="https://ziontechgroup.com/terms" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <Navigation />
        
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
              <div className="space-y-8">
                {sections.map((section, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mr-4">
                        <section.icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-3">
                          {index + 1}. {section.title}
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                          {section.content}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-16 bg-gray-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h3>
                <p className="text-gray-700 mb-6">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">{contactInfo.email}</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">{contactInfo.phone}</span>
                  </div>
                  <div className="flex items-center">
                    <Globe className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">ziontechgroup.com</span>
                  </div>
                  <div className="flex items-center">
                    <User className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">Zion Tech Group Legal Team</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-sm text-gray-500">
                  By using our services, you acknowledge that you have read and understood these terms.
                </p>
              </div>
            </div>
          </div>
        </div>
        
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232
        <Footer />
      </div>
    </>
  );
<<<<<<< HEAD
};

export default TermsPage;
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1009
=======
}
>>>>>>> cursor/website-audit-and-update-with-deployment-a217
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232
