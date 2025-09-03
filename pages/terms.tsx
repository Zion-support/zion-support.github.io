import React from 'react';
<<<<<<< HEAD
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { FileText, Scale, Shield, AlertTriangle, CheckCircle, Users } from 'lucide-react';

const Terms: NextPage = () => {
  const keyTerms = [
    {
      icon: FileText,
      title: 'Service Agreement',
      description: 'Terms governing the use of our technology services and solutions.'
    },
    {
      icon: Scale,
      title: 'Legal Compliance',
      description: 'Your responsibilities and obligations when using our services.'
    },
    {
      icon: Shield,
      title: 'Intellectual Property',
      description: 'Protection of our proprietary technology and your content rights.'
    },
    {
      icon: AlertTriangle,
      title: 'Limitation of Liability',
      description: 'Important limitations and disclaimers regarding our services.'
    },
    {
      icon: CheckCircle,
      title: 'Acceptable Use',
      description: 'Guidelines for appropriate use of our platform and services.'
    },
    {
      icon: Users,
      title: 'User Responsibilities',
      description: 'Your obligations as a user of our services and platform.'
    }
  ];

  return (
    <MainLayout
      title="Terms of Service - Zion Tech Group"
      description="Read our terms of service to understand your rights and responsibilities when using Zion Tech Group's technology solutions and services."
      keywords="terms of service, user agreement, legal terms, service conditions, user responsibilities"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Terms of Service
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
            Please read these terms carefully before using our services. By using our services, you agree to be bound by these terms.
          </p>
          <p className="text-sm text-gray-300">
            Last updated: January 27, 2025
          </p>
        </div>
      </section>

      {/* Key Terms Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Key Terms Overview</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Important aspects of our terms of service that you should understand.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyTerms.map((term, index) => (
              <div key={term.title} className="bg-white p-6 rounded-xl shadow-lg">
                <div className="bg-indigo-100 p-3 rounded-lg w-fit mb-4">
                  <term.icon className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{term.title}</h3>
                <p className="text-gray-600">{term.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">1. Acceptance of Terms</h2>
            <p className="text-gray-600 mb-6">
              By accessing and using Zion Tech Group's services, you accept and agree to be bound by the terms 
              and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">2. Use License</h2>
            <p className="text-gray-600 mb-4">
              Permission is granted to temporarily download one copy of Zion Tech Group's materials for personal, 
              non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-8 space-y-2">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to reverse engineer any software contained on the website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">3. Service Availability</h2>
            <p className="text-gray-600 mb-6">
              We strive to maintain high service availability, but we do not guarantee uninterrupted access to our services. 
              We reserve the right to modify, suspend, or discontinue any part of our services at any time without notice.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">4. User Accounts</h2>
            <p className="text-gray-600 mb-4">
              When you create an account with us, you must provide information that is accurate, complete, and current at all times. You are responsible for:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-8 space-y-2">
              <li>Safeguarding the password and all activities under your account</li>
              <li>Notifying us immediately of any unauthorized use of your account</li>
              <li>Ensuring your account information remains accurate and up-to-date</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">5. Acceptable Use</h2>
            <p className="text-gray-600 mb-4">
              You agree not to use our services for any unlawful purpose or any purpose prohibited under this clause. You may not use our services:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-8 space-y-2">
              <li>In any way that causes, or may cause, damage to the website or impairment of the availability or accessibility of the website</li>
              <li>In any way which is unlawful, illegal, fraudulent, or harmful</li>
              <li>To conduct any systematic or automated data collection activities</li>
              <li>To transmit or send unsolicited commercial communications</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">6. Intellectual Property Rights</h2>
            <p className="text-gray-600 mb-6">
              Other than the content you own, under these Terms, Zion Tech Group and/or its licensors own all the intellectual 
              property rights and materials contained in this website. You are granted limited license only for purposes of viewing the material contained on this website.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">7. Privacy Policy</h2>
            <p className="text-gray-600 mb-6">
              Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the services, 
              to understand our practices.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">8. Limitation of Liability</h2>
            <p className="text-gray-600 mb-6">
              In no event shall Zion Tech Group, nor its directors, employees, partners, agents, suppliers, or affiliates, 
              be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, 
              loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the service.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">9. Termination</h2>
            <p className="text-gray-600 mb-6">
              We may terminate or suspend your account and bar access to the service immediately, without prior notice or liability, 
              under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">10. Governing Law</h2>
            <p className="text-gray-600 mb-6">
              These Terms shall be interpreted and governed by the laws of the State of Delaware, United States, 
              without regard to its conflict of law provisions.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">11. Changes to Terms</h2>
            <p className="text-gray-600 mb-6">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. 
              If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">12. Contact Information</h2>
            <p className="text-gray-600 mb-6">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-600 mb-2"><strong>Email:</strong> legal@ziontechgroup.com</p>
              <p className="text-gray-600 mb-2"><strong>Phone:</strong> +1 302 464 0950</p>
              <p className="text-gray-600">
                <strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709
              </p>
=======
<<<<<<< HEAD
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { FileText, Scale, AlertCircle, Shield, Users, CreditCard } from 'lucide-react';

const Terms: NextPage = () => {
  return (
    <MainLayout
      title="Terms of Service - Zion Tech Group"
      description="Read the terms and conditions for using Zion Tech Group's services and website."
      keywords="terms of service, terms and conditions, user agreement, legal terms"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Terms of Service</h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto text-gray-200">
            Please read these terms carefully before using our services.
          </p>
          <p className="text-sm text-gray-300 mt-4">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            
            {/* Introduction */}
            <div className="bg-blue-50 p-8 rounded-lg mb-8">
              <div className="flex items-center mb-4">
                <FileText className="w-8 h-8 text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Agreement to Terms</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                These Terms of Service ("Terms") govern your use of Zion Tech Group's website and services. 
                By accessing or using our services, you agree to be bound by these Terms. If you do not agree 
                to these Terms, please do not use our services.
              </p>
            </div>

            {/* Service Description */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <Users className="w-8 h-8 text-blue-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
              </div>
              
              <p className="text-gray-700 mb-6">
                Zion Tech Group provides technology solutions including but not limited to:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">AI and machine learning solutions</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Cloud architecture and migration</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Software development services</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">IT consulting and support</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Micro SaaS applications</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Data analytics and insights</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Digital transformation</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Technical training and support</span>
                  </div>
                </div>
              </div>
            </div>

            {/* User Responsibilities */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <Shield className="w-8 h-8 text-blue-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">User Responsibilities</h2>
              </div>
              
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Lawful Use</h3>
                  <p className="text-gray-700">You agree to use our services only for lawful purposes and in accordance with these Terms.</p>
                </div>
                
                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Account Security</h3>
                  <p className="text-gray-700">You are responsible for maintaining the confidentiality of your account credentials.</p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Prohibited Activities</h3>
                  <p className="text-gray-700">You may not use our services to violate any laws, infringe on rights, or harm others.</p>
                </div>
                
                <div className="border-l-4 border-orange-500 pl-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Content Responsibility</h3>
                  <p className="text-gray-700">You are responsible for any content you provide and must have the right to use it.</p>
                </div>
              </div>
            </div>

            {/* Payment Terms */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <CreditCard className="w-8 h-8 text-blue-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Payment Terms</h2>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Billing and Payment</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Payment is due according to the terms specified in your service agreement</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>We accept major credit cards and other payment methods as specified</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Late payments may result in service suspension or termination</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>All fees are non-refundable unless otherwise specified</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Intellectual Property */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <Scale className="w-8 h-8 text-blue-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Intellectual Property</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Our Rights</h3>
                  <p className="text-gray-700 mb-4">
                    All content, trademarks, and intellectual property on our website and services 
                    are owned by Zion Tech Group or our licensors.
                  </p>
                </div>
                
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Your Rights</h3>
                  <p className="text-gray-700 mb-4">
                    You retain ownership of any content you provide to us, but grant us a license 
                    to use it for service delivery.
                  </p>
                </div>
              </div>
            </div>

            {/* Limitation of Liability */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <AlertCircle className="w-8 h-8 text-blue-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Limitation of Liability</h2>
              </div>
              
              <div className="bg-yellow-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  To the maximum extent permitted by law, Zion Tech Group shall not be liable for any 
                  indirect, incidental, special, consequential, or punitive damages, including but not 
                  limited to loss of profits, data, or business opportunities.
                </p>
                <p className="text-gray-700">
                  Our total liability for any claims arising from these Terms or our services shall not 
                  exceed the amount paid by you for the services in the 12 months preceding the claim.
                </p>
              </div>
            </div>

            {/* Termination */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Termination</h2>
              
              <div className="space-y-4 text-gray-700">
                <p>
                  Either party may terminate these Terms at any time with written notice. Upon termination:
                </p>
                <ul className="space-y-2 ml-6">
                  <li>• Your right to use our services will cease immediately</li>
                  <li>• We may delete your account and data after a reasonable period</li>
                  <li>• Provisions that by their nature should survive termination will remain in effect</li>
                </ul>
              </div>
            </div>

            {/* Changes to Terms */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Changes to Terms</h2>
              
              <p className="text-gray-700 mb-4">
                We reserve the right to modify these Terms at any time. We will notify you of any 
                material changes by posting the new Terms on our website and updating the "Last updated" date.
              </p>
              <p className="text-gray-700">
                Your continued use of our services after such modifications constitutes acceptance of the updated Terms.
              </p>
            </div>

            {/* Contact Information */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-700 mb-4">
=======
<<<<<<< HEAD
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { FileText, Scale, AlertTriangle, Shield, Users, Gavel } from 'lucide-react';

const Terms: NextPage = () => {
  const lastUpdated = "January 1, 2025";
=======
>>>>>>> main

export default function TermsPage() {
  return (
<<<<<<< HEAD
    <MainLayout
      title="Terms of Service - Zion Tech Group"
      description="Read Zion Tech Group's Terms of Service. Our comprehensive terms outline the rules and regulations for using our website and services."
      keywords="terms of service, terms and conditions, legal terms, Zion Tech Group"
    >
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-blue-100 rounded-full">
                <Scale className="w-12 h-12 text-blue-600" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
            <p className="text-xl text-gray-600 mb-2">
              Please read these terms carefully before using our services
            </p>
            <p className="text-sm text-gray-500">
              Last updated: {lastUpdated}
            </p>
          </div>

          {/* Content */}
          <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
            
            {/* Introduction */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                <FileText className="w-6 h-6 text-blue-600 mr-3" />
                Introduction
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Welcome to Zion Tech Group. These Terms of Service ("Terms") govern your use of our website 
                ziontechgroup.com and our services. By accessing or using our services, you agree to be bound 
                by these Terms.
              </p>
              <p className="text-gray-700 leading-relaxed">
                If you disagree with any part of these terms, then you may not access our services.
              </p>
            </section>

            {/* Acceptance of Terms */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                <Users className="w-6 h-6 text-blue-600 mr-3" />
                Acceptance of Terms
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                By accessing and using our website and services, you accept and agree to be bound by the terms 
                and provision of this agreement. Additionally, when using our services, you shall be subject to 
                any posted guidelines or rules applicable to such services.
              </p>
            </section>

            {/* Services Description */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Services Description</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Zion Tech Group provides technology solutions and services including but not limited to:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>AI and machine learning development services</li>
                <li>Cloud architecture and migration services</li>
                <li>Web and mobile application development</li>
                <li>Blockchain and cryptocurrency solutions</li>
                <li>Cybersecurity and data protection services</li>
                <li>IT consulting and digital transformation</li>
                <li>Micro SaaS development and deployment</li>
                <li>Quantum computing solutions</li>
              </ul>
            </section>

            {/* User Responsibilities */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                <Shield className="w-6 h-6 text-blue-600 mr-3" />
                User Responsibilities
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                As a user of our services, you agree to:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Provide accurate and complete information</li>
                <li>Maintain the confidentiality of your account credentials</li>
                <li>Use our services in compliance with applicable laws</li>
                <li>Not engage in any illegal or unauthorized activities</li>
                <li>Respect intellectual property rights</li>
                <li>Not attempt to gain unauthorized access to our systems</li>
                <li>Not interfere with the proper functioning of our services</li>
              </ul>
            </section>

            {/* Prohibited Uses */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                <AlertTriangle className="w-6 h-6 text-red-600 mr-3" />
                Prohibited Uses
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You may not use our services for any unlawful purpose or to solicit others to perform unlawful acts. 
                Prohibited activities include:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Violating any applicable laws or regulations</li>
                <li>Transmitting malicious code or viruses</li>
                <li>Attempting to hack or compromise our systems</li>
                <li>Spamming or sending unsolicited communications</li>
                <li>Infringing on intellectual property rights</li>
                <li>Harassing or threatening other users</li>
                <li>Collecting personal information without consent</li>
                <li>Engaging in fraudulent activities</li>
              </ul>
            </section>

            {/* Intellectual Property */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Intellectual Property Rights</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The service and its original content, features, and functionality are and will remain the exclusive 
                property of Zion Tech Group and its licensors. The service is protected by copyright, trademark, 
                and other laws.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our trademarks and trade dress may not be used in connection with any product or service without 
                our prior written consent.
              </p>
            </section>

            {/* Payment Terms */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Payment Terms</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                For paid services, the following terms apply:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Payment is due according to the agreed schedule</li>
                <li>Late payments may incur additional fees</li>
                <li>All prices are subject to applicable taxes</li>
                <li>Refunds are subject to our refund policy</li>
                <li>We reserve the right to suspend services for non-payment</li>
              </ul>
            </section>

            {/* Service Availability */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Service Availability</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We strive to maintain high service availability, but we do not guarantee uninterrupted access. 
                We may temporarily suspend services for maintenance, updates, or other operational reasons.
              </p>
            </section>

            {/* Limitation of Liability */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                <Gavel className="w-6 h-6 text-blue-600 mr-3" />
                Limitation of Liability
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                In no event shall Zion Tech Group, nor its directors, employees, partners, agents, suppliers, 
                or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, 
                including without limitation, loss of profits, data, use, goodwill, or other intangible losses, 
                resulting from your use of our services.
              </p>
            </section>

            {/* Disclaimer */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Disclaimer</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The information on this website is provided on an "as is" basis. To the fullest extent permitted 
                by law, Zion Tech Group excludes all representations, warranties, conditions and terms relating 
                to our website and the use of this website.
              </p>
            </section>

            {/* Termination */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Termination</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may terminate or suspend your access immediately, without prior notice or liability, for any 
                reason whatsoever, including without limitation if you breach the Terms.
              </p>
            </section>

            {/* Governing Law */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Governing Law</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                These Terms shall be interpreted and governed by the laws of the State of Delaware, United States, 
                without regard to its conflict of law provisions.
              </p>
            </section>

            {/* Changes to Terms */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Changes to Terms</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. 
                If a revision is material, we will try to provide at least 30 days notice prior to any new 
                terms taking effect.
              </p>
            </section>

            {/* Contact Information */}
            <section className="bg-blue-50 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
>>>>>>> main
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="space-y-2 text-gray-700">
                <p><strong>Email:</strong> legal@ziontechgroup.com</p>
                <p><strong>Phone:</strong> +1 302 464 0950</p>
                <p><strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709</p>
              </div>
<<<<<<< HEAD
>>>>>>> main
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};
=======
            </section>
          </div>
        </div>
      </div>
    </MainLayout>
=======
    <main className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
      <p className="text-gray-700">These are sample terms for demonstration.</p>
    </main>
>>>>>>> main
  );
}
>>>>>>> main

