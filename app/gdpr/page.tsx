import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const GDPRPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        <section className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">GDPR Compliance</h1>
          
          <div className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-semibold text-white mb-4">Data Protection</h2>
            <p className="text-gray-300 mb-6">
              We are committed to protecting your personal data in accordance with the General Data Protection Regulation (GDPR). 
              This page explains how we collect, use, and protect your information.
            </p>

            <h2 className="text-2xl font-semibold text-white mb-4">Your Rights</h2>
            <p className="text-gray-300 mb-6">
              Under GDPR, you have the right to access, rectify, erase, restrict processing, data portability, and object to processing of your personal data.
            </p>

            <h2 className="text-2xl font-semibold text-white mb-4">Data Controller</h2>
            <p className="text-gray-300 mb-6">
              Zion Tech Group is the data controller for the personal data we process. You can contact us at kleber@ziontechgroup.com
            </p>
          </div>
        </section>
      </main>
      
      <Footer />
=======
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Download, Eye, Trash2, Edit, Lock } from 'lucide-react';

const GdprPage: React.FC = () => {
  const rights = [
    {
      icon: Eye,
      title: 'Right to Access',
      description: 'You have the right to request access to your personal data and receive a copy of the data we hold about you.'
    },
    {
      icon: Edit,
      title: 'Right to Rectification',
      description: 'You have the right to request correction of inaccurate or incomplete personal data.'
    },
    {
      icon: Trash2,
      title: 'Right to Erasure',
      description: 'You have the right to request deletion of your personal data under certain circumstances.'
    },
    {
      icon: Lock,
      title: 'Right to Restrict Processing',
      description: 'You have the right to request restriction of processing of your personal data.'
    },
    {
      icon: Download,
      title: 'Right to Data Portability',
      description: 'You have the right to receive your personal data in a structured, machine-readable format.'
    },
    {
      icon: Shield,
      title: 'Right to Object',
      description: 'You have the right to object to processing of your personal data for certain purposes.'
    }
  ];

  const dataTypes = [
    {
      category: 'Identity Information',
      data: ['Name', 'Email address', 'Phone number', 'Mailing address', 'Date of birth']
    },
    {
      category: 'Technical Information',
      data: ['IP address', 'Browser type', 'Device information', 'Operating system', 'Website usage data']
    },
    {
      category: 'Business Information',
      data: ['Company name', 'Job title', 'Industry', 'Project requirements', 'Communication history']
    },
    {
      category: 'Marketing Information',
      data: ['Marketing preferences', 'Newsletter subscriptions', 'Communication preferences', 'Survey responses']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <section className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center">
            <Link 
              to="/privacy" 
              className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200 mr-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Privacy Policy
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">GDPR Compliance</h1>
              <p className="text-gray-600 mt-1">
                Your rights under the General Data Protection Regulation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="prose max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">What is GDPR?</h2>
              <p className="text-gray-600 mb-6">
                The General Data Protection Regulation (GDPR) is a comprehensive data protection law that gives you 
                control over your personal data. At Zion Tech Group, we are committed to protecting your privacy and 
                ensuring full compliance with GDPR requirements.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Rights Under GDPR</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {rights.map((right, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-6">
                    <div className="flex items-center mb-4">
                      <right.icon className="w-6 h-6 text-blue-600 mr-3" />
                      <h3 className="text-lg font-semibold text-gray-900">{right.title}</h3>
                    </div>
                    <p className="text-gray-600 text-sm">{right.description}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">Personal Data We Collect</h2>
              <p className="text-gray-600 mb-6">
                We collect and process the following categories of personal data:
              </p>
              <div className="space-y-6">
                {dataTypes.map((type, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{type.category}</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      {type.data.map((item, itemIndex) => (
                        <li key={itemIndex}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12">Legal Basis for Processing</h2>
              <p className="text-gray-600 mb-4">
                We process your personal data based on the following legal grounds:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li><strong>Consent:</strong> When you have given clear consent for us to process your data</li>
                <li><strong>Contract:</strong> When processing is necessary for the performance of a contract</li>
                <li><strong>Legal Obligation:</strong> When we are required to process data to comply with legal obligations</li>
                <li><strong>Legitimate Interest:</strong> When we have a legitimate business interest that doesn't override your rights</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">Data Retention</h2>
              <p className="text-gray-600 mb-6">
                We retain your personal data only for as long as necessary to fulfill the purposes outlined in our 
                Privacy Policy or as required by law. Generally:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>Account data: Until you delete your account or request deletion</li>
                <li>Marketing data: Until you unsubscribe or withdraw consent</li>
                <li>Technical data: Up to 2 years for analytics purposes</li>
                <li>Legal compliance data: As required by applicable laws</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">Data Security</h2>
              <p className="text-gray-600 mb-6">
                We implement appropriate technical and organizational measures to protect your personal data against:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>Unauthorized access, alteration, or disclosure</li>
                <li>Accidental loss or destruction</li>
                <li>Malicious attacks and data breaches</li>
                <li>Unauthorized processing or use</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">Exercising Your Rights</h2>
              <p className="text-gray-600 mb-6">
                To exercise any of your GDPR rights, please contact us using the information below. We will respond 
                to your request within 30 days of receipt.
              </p>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">How to Submit a Request</h3>
                <p className="text-blue-800 mb-4">
                  You can submit a GDPR request by:
                </p>
                <ul className="list-disc list-inside text-blue-800 space-y-1">
                  <li>Emailing us at privacy@ziontechgroup.com</li>
                  <li>Calling us at +1 302 464 0950</li>
                  <li>Using our online contact form</li>
                  <li>Writing to us at our physical address</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">Data Protection Officer</h2>
              <p className="text-gray-600 mb-6">
                We have appointed a Data Protection Officer (DPO) to oversee our data protection practices and 
                ensure compliance with GDPR. You can contact our DPO at:
              </p>
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <p className="text-gray-700 mb-2">
                  <strong>Email:</strong> dpo@ziontechgroup.com
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Phone:</strong> +1 302 464 0950
                </p>
                <p className="text-gray-700">
                  <strong>Address:</strong> 364 E Main St STE 1008, Middletown, DE 19709
                </p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">Complaints</h2>
              <p className="text-gray-600 mb-6">
                If you believe we have not handled your personal data in accordance with GDPR, you have the right 
                to lodge a complaint with your local data protection authority or the relevant supervisory authority.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">Updates to This Notice</h2>
              <p className="text-gray-600 mb-6">
                We may update this GDPR compliance notice from time to time to reflect changes in our practices or 
                applicable laws. We will notify you of any significant changes by posting the updated notice on our website.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Us</h2>
              <p className="text-gray-600 mb-6">
                If you have any questions about our GDPR compliance or your data protection rights, please contact us:
              </p>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700 mb-2">
                  <strong>Email:</strong> privacy@ziontechgroup.com
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Phone:</strong> +1 302 464 0950
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Address:</strong> 364 E Main St STE 1008, Middletown, DE 19709
                </p>
                <p className="text-gray-700">
                  <strong>Data Protection Officer:</strong> dpo@ziontechgroup.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
>>>>>>> cursor/website-audit-and-update-with-deployment-99bb
    </div>
  );
};

<<<<<<< HEAD
export default GDPRPage;
=======
export default GdprPage;
>>>>>>> cursor/website-audit-and-update-with-deployment-99bb
