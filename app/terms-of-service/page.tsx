import React from 'react';
import { FileText, Scale, AlertTriangle } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

  ];

    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Terms of Service - Zion Tech Group</title>
        <meta name="description" content="Read our terms of service and understand the rules and regulations for using Zion Tech Group's services and website." />
        <meta name="keywords" content="terms of service, terms and conditions, user agreement, service terms" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Terms of <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Service</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Please read these terms of service carefully before using our website and services.
            </p>
            <p className="text-sm text-gray-400">
              Last updated: January 15, 2024
            </p>
          </div>
        </section>

        {/* Terms Sections */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      {section.icon}
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-white mb-4">{section.title}</h2>
                      <p className="text-gray-300 leading-relaxed">{section.content}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Terms */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-6">Additional Terms</h2>
              <div className="space-y-6 text-gray-300">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Service Availability</h3>
                  <p>We strive to maintain high service availability, but we do not guarantee uninterrupted access to our services. We may temporarily suspend services for maintenance or updates.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">User Responsibilities</h3>
                  <p>Users are responsible for maintaining the confidentiality of their account information and for all activities that occur under their account.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Modifications</h3>
                  <p>We reserve the right to modify these terms at any time. Continued use of our services after such modifications constitutes acceptance of the updated terms.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Questions About These Terms?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                If you have any questions about these Terms of Service, please contact us for clarification.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                
                >
                  Contact Legal
                </a>
                
                >
                  General Contact
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default TermsOfServicePage;
