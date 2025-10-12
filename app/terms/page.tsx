import React from 'react';
import { FileText, Shield, AlertTriangle, DollarSign, Clock, Mail, Phone, MapPin } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const TermsOfServicePage: React.FC = () => {
  const sections = [
    {
      icon: <FileText className="w-6 h-6 text-blue-500" />,
      title: 'Acceptance of Terms',
      content: [
        'By accessing and using our services, you accept and agree to be bound by these terms',
        'If you do not agree to these terms, please do not use our services',
        'We reserve the right to modify these terms at any time',
        'Continued use of our services after changes constitutes acceptance of new terms',
        'These terms apply to all users of our AI and IT services'
      ]
    },
    {
      icon: <Shield className="w-6 h-6 text-green-500" />,
      title: 'Service Description',
      content: [
        'We provide AI-powered solutions, IT services, and digital transformation consulting',
        'Services include but are not limited to: AI content generation, cloud migration, cybersecurity',
        'We reserve the right to modify or discontinue services with reasonable notice',
        'Service availability may be subject to maintenance and updates',
        'We strive to provide reliable and high-quality services to our clients'
      ]
    },
    {
      icon: <DollarSign className="w-6 h-6 text-purple-500" />,
      title: 'Payment and Billing',
      content: [
        'Payment terms are specified in individual service agreements',
        'All fees are non-refundable unless otherwise specified',
        'We may suspend services for non-payment after reasonable notice',
        'Prices are subject to change with 30 days notice',
        'Late payment fees may apply as specified in service agreements'
      ]
    },
    {
      icon: <AlertTriangle className="w-6 h-6 text-red-500" />,
      title: 'Limitation of Liability',
      content: [
        'Our liability is limited to the amount paid for services in the 12 months prior to the claim',
        'We are not liable for indirect, incidental, or consequential damages',
        'We do not guarantee uninterrupted or error-free service',
        'Users are responsible for backing up their data',
        'Force majeure events may affect service availability'
      ]
    },
    {
      icon: <Clock className="w-6 h-6 text-orange-500" />,
      title: 'Termination',
      content: [
        'Either party may terminate services with 30 days written notice',
        'We may terminate services immediately for breach of terms',
        'Upon termination, all outstanding fees become immediately due',
        'We will provide reasonable assistance with data migration',
        'Termination does not affect accrued rights and obligations'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Terms of Service - Zion Tech Group</title>
        <meta name="description" content="Zion Tech Group Terms of Service - Read our terms and conditions for using our AI and IT services." />
        <meta name="keywords" content="terms of service, terms and conditions, service agreement, Zion Tech Group, AI services, IT services" />
      </Helmet>
      
      <main className="pt-20 px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Terms of <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Service</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              These terms and conditions govern your use of our AI and IT services. Please read them carefully.
            </p>
            <p className="text-sm text-gray-400 mt-4">
              Last updated: January 15, 2024
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center text-gray-300">
                <Mail className="w-5 h-5 mr-3 text-blue-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="w-5 h-5 mr-3 text-green-400" />
                <span>+1 (302) 464-0950</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="w-5 h-5 mr-3 text-purple-400" />
                <span>364 E Main St STE 1008, Middletown, DE 19709</span>
              </div>
            </div>
          </div>

          <div className="space-y-12">
            {sections.map((section, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <div className="flex items-center mb-6">
                  {section.icon}
                  <h2 className="text-2xl font-bold text-white ml-4">{section.title}</h2>
                </div>
                <ul className="space-y-3">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start text-gray-300">
                      <span className="text-purple-400 mr-3 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 mt-12">
            <h2 className="text-2xl font-bold text-white mb-4">Questions About These Terms?</h2>
            <p className="text-white/90 mb-6">
              If you have any questions about these Terms of Service, please contact us for clarification.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contact" 
                className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
              >
                Contact Us
              </Link>
              <Link 
                to="/privacy" 
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors text-center"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TermsOfServicePage;