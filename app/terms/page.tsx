'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FileText, Scale, Shield, AlertTriangle, CheckCircle, ArrowRight, Globe, User, Mail, Phone, Calendar, Lock, Database, Server, Key } from 'lucide-react';
<<<<<<< HEAD

const TermsPage: React.FC = () => {
  const lastUpdated = 'January 1, 2024';
  
=======
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function TermsPage() {
  const lastUpdated = 'January 1, 2024';

>>>>>>> cursor/website-audit-and-update-with-deployment-3540
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
<<<<<<< HEAD
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
=======
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
>>>>>>> cursor/website-audit-and-update-with-deployment-3540
    },
    {
      title: 'Governing Law',
      icon: Scale,
<<<<<<< HEAD
      content: 'These terms shall be governed by and construed in accordance with the laws of the State of Delaware, United States.'
    }
  ];

  const contactInfo = {
    email: 'legal@ziontechgroup.com',
    phone: '+1 (302) 464-0950',
    address: '364 E Main St STE 1008, Middletown, DE 19709'
  };

=======
      content: 'These terms shall be governed by and construed in accordance with the laws of the United States.'
    }
  ];

>>>>>>> cursor/website-audit-and-update-with-deployment-3540
  return (
    <>
      <Helmet>
        <title>Terms of Service - Zion Tech Group</title>
<<<<<<< HEAD
        <meta name="description" content="Terms of Service for Zion Tech Group. Learn about our terms, conditions, and policies for using our AI and IT services." />
        <meta name="keywords" content="terms of service, legal, terms and conditions, privacy policy, user agreement" />
        <link rel="canonical" href="https://ziontechgroup.com/terms" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16 pt-24">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white neon-text-enhanced">
                Terms of Service
              </h1>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Please read these terms carefully before using our services. By accessing or using our website and services, 
              you agree to be bound by these terms and conditions.
            </p>
            <div className="flex items-center justify-center space-x-4 text-sm text-gray-400">
              <Calendar className="w-4 h-4" />
              <span>Last updated: {lastUpdated}</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="cyber-card-enhanced p-6 mb-12">
            <h2 className="text-xl font-bold text-white mb-4">Quick Navigation</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {sections.map((section, index) => (
                <a
                  key={index}
                  href={`#${section.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="flex items-center space-x-2 p-3 rounded-lg hover:bg-cyan-500/10 transition-colors duration-300"
                >
                  <section.icon className="w-5 h-5 text-cyan-400" />
                  <span className="text-gray-300 text-sm">{section.title}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Terms Sections */}
          <div className="space-y-8 mb-16">
            {sections.map((section, index) => (
              <div key={index} id={section.title.toLowerCase().replace(/\s+/g, '-')} className="cyber-card-enhanced p-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                      <section.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-white mb-4">{section.title}</h2>
                    <p className="text-gray-300 leading-relaxed text-lg">{section.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Terms */}
          <div className="cyber-card-enhanced p-8 mb-16">
            <h2 className="text-2xl font-bold text-white mb-6">Additional Terms</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Service Modifications</h3>
                <p className="text-gray-300">
                  We reserve the right to modify or discontinue our services at any time without notice. 
                  We shall not be liable to you or any third party for any modification, suspension, or discontinuance of the service.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Termination</h3>
                <p className="text-gray-300">
                  We may terminate or suspend your account and access to our services immediately, without prior notice or liability, 
                  for any reason whatsoever, including without limitation if you breach the terms.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Changes to Terms</h3>
                <p className="text-gray-300">
                  We reserve the right to modify these terms at any time. We will notify users of any material changes by posting 
                  the new terms on this page and updating the "Last updated" date.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="cyber-card-enhanced p-8 mb-16">
            <h2 className="text-2xl font-bold text-white mb-6">Questions About These Terms?</h2>
            <p className="text-gray-300 mb-8">
              If you have any questions about these Terms of Service, please contact our legal team.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3">
                <Mail className="w-6 h-6 text-cyan-400" />
                <div>
                  <div className="text-white font-semibold">Email</div>
                  <a href={`mailto:${contactInfo.email}`} className="text-cyan-400 hover:text-cyan-300">
                    {contactInfo.email}
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-6 h-6 text-cyan-400" />
                <div>
                  <div className="text-white font-semibold">Phone</div>
                  <a href={`tel:${contactInfo.phone}`} className="text-cyan-400 hover:text-cyan-300">
                    {contactInfo.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Globe className="w-6 h-6 text-cyan-400" />
                <div>
                  <div className="text-white font-semibold">Address</div>
                  <div className="text-gray-300">{contactInfo.address}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Related Links */}
          <div className="cyber-card-enhanced p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Related Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <a
                href="/privacy"
                className="flex items-center space-x-3 p-4 rounded-lg hover:bg-cyan-500/10 transition-colors duration-300"
              >
                <Shield className="w-8 h-8 text-cyan-400" />
                <div>
                  <div className="text-white font-semibold">Privacy Policy</div>
                  <div className="text-gray-300 text-sm">How we collect and use your data</div>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 ml-auto" />
              </a>
              <a
                href="/cookies"
                className="flex items-center space-x-3 p-4 rounded-lg hover:bg-cyan-500/10 transition-colors duration-300"
              >
                <Database className="w-8 h-8 text-cyan-400" />
                <div>
                  <div className="text-white font-semibold">Cookie Policy</div>
                  <div className="text-gray-300 text-sm">Information about our use of cookies</div>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 ml-auto" />
              </a>
              <a
                href="/contact"
                className="flex items-center space-x-3 p-4 rounded-lg hover:bg-cyan-500/10 transition-colors duration-300"
              >
                <Mail className="w-8 h-8 text-cyan-400" />
                <div>
                  <div className="text-white font-semibold">Contact Us</div>
                  <div className="text-gray-300 text-sm">Get in touch with our team</div>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 ml-auto" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsPage;
=======
        <meta name="description" content="Terms of Service for Zion Tech Group. Please read these terms carefully before using our services." />
        <meta name="keywords" content="terms of service, legal terms, user agreement, Zion Tech Group" />
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
                    <span className="text-gray-700">legal@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">+1 (555) 123-4567</span>
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
        
        <Footer />
      </div>
    </>
  );
}
>>>>>>> cursor/website-audit-and-update-with-deployment-3540
