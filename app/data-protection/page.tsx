'use client';

import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import {
  Shield,
  Lock,
  Eye,
  FileText,
  CheckCircle,
  AlertTriangle,
  Users,
  Database,
  Globe,
  Key,
  Server,
  Clock,
  Mail,
  Phone
} from 'lucide-react';

const DataProtectionPage: React.FC = () => {
  const principles = [
    {
      icon: Shield,
      title: 'Data Minimization',
      description: 'We collect only the data necessary for providing our services and delete it when no longer needed.'
    },
    {
      icon: Lock,
      title: 'Encryption',
      description: 'All data is encrypted in transit and at rest using industry-standard encryption protocols.'
    },
    {
      icon: Eye,
      title: 'Transparency',
      description: 'We provide clear information about what data we collect and how it is used.'
    },
    {
      icon: Users,
      title: 'User Control',
      description: 'Users have full control over their data and can access, modify, or delete it at any time.'
    }
  ];

  const rights = [
    {
      title: 'Right to Access',
      description: 'You have the right to know what personal data we hold about you and how it is processed.'
    },
    {
      title: 'Right to Rectification',
      description: 'You can request correction of inaccurate or incomplete personal data.'
    },
    {
      title: 'Right to Erasure',
      description: 'You can request deletion of your personal data under certain circumstances.'
    },
    {
      title: 'Right to Portability',
      description: 'You can receive your personal data in a structured, machine-readable format.'
    },
    {
      title: 'Right to Object',
      description: 'You can object to processing of your personal data for certain purposes.'
    },
    {
      title: 'Right to Restrict Processing',
      description: 'You can request restriction of processing of your personal data.'
    }
  ];

  const securityMeasures = [
    {
      icon: Database,
      title: 'Secure Data Storage',
      description: 'Data is stored in secure, encrypted databases with access controls and monitoring.'
    },
    {
      icon: Server,
      title: 'Infrastructure Security',
      description: 'Our infrastructure is protected by multiple layers of security controls and monitoring.'
    },
    {
      icon: Key,
      title: 'Access Controls',
      description: 'Strict access controls ensure only authorized personnel can access personal data.'
    },
    {
      icon: Globe,
      title: 'International Standards',
      description: 'We comply with international data protection standards and regulations.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Navigation /></Navigatio>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden"></sectio>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3 Csvg%20 width%3 D%2260%22%20 height%3 D%2260%22%20 viewBox%3 D%220%200%2060%2060%22%20 xmlns%3 D%22 http%3 A//www.w3.org/2000/svg%22%3 E%3 Cg%20 fill%3 D%22 none%22%20 fill-rule%3 D%22 evenodd%22%3 E%3 Cg%20 fill%3 D%22%239 C92 AC%22%20 fill-opacity%3 D%220.1%22%3 E%3 Ccircle%20 cx%3 D%2230%22%20 cy%3 D%2230%22%20 r%3 D%222%22/%3 E%3 C/g%3 E%3 C/g%3 E%3 C/svg%3 E')] opacity-20"></div>

        <div className="relative z-10 max-w-7 xl mx-auto px-4 sm:px-6 lg:px-8 text-center"></div>
          <h1 className="text-5 xl md:text-7 xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"></h1></<<<h>Data</h></<<h>Protection</h>
          </h1>
          <p className="text-xl md:text-2 xl text-gray-300 mb-8 max-w-4 xl mx-auto">
            Your privacy and data security are our top priorities. Learn about our comprehensive data protection measures.
          </p>
        </div>
      </section>

      {/* Principles Section */}
      <section className="py-16 bg-white/5"></sectio>
        <div className="max-w-7 xl mx-auto px-4 sm:px-6 lg:px-8"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-3 xl md:text-4 xl font-bold text-white mb-4"></h2></<<<h>Data</h></<<h>Protection</h> Principles
            </h2>
            <p className="text-xl text-gray-300 max-w-3 xl mx-auto">
              We follow strict data protection principles to ensure your privacy and security
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
            {principles.map((principle, index) => (
              <div key={index} className="text-center"></div>
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6"></div>
                  <principle.icon className="w-8 h-8 text-white" /></principle>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{principle.title}</h>
                <p className="text-gray-300">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Your Rights Section */}
      <section className="py-16 bg-gradient-to-r from-purple-900/20 to-blue-900/20"></sectio>
        <div className="max-w-7 xl mx-auto px-4 sm:px-6 lg:px-8"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-3 xl md:text-4 xl font-bold text-white mb-4"></h2></<<<h>Your</h></<<h>Data</h> Rights
            </h2>
            <p className="text-xl text-gray-300 max-w-3 xl mx-auto">
              Under GDPR and other data protection laws, you have specific rights regarding your personal data
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
            {rights.map((right, index) => (
              <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300"></div>
                <div className="flex items-start space-x-4"></div>
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" /></CheckCircl>
                  <div></div>
                    <h3 className="text-lg font-bold text-white mb-2">{right.title}</h>
                    <p className="text-gray-300">{right.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Measures */}
      <section className="py-16 bg-white/5"></sectio>
        <div className="max-w-7 xl mx-auto px-4 sm:px-6 lg:px-8"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-3 xl md:text-4 xl font-bold text-white mb-4"></h2></<<<h>Security</h></<<h>Measures</h>
            </h2>
            <p className="text-xl text-gray-300 max-w-3 xl mx-auto">
              We implement comprehensive security measures to protect your data
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8"></div>
            {securityMeasures.map((measure, index) => (
              <div key={index} className="cyber-card p-8 hover:scale-105 transition-all duration-300"></div>
                <div className="flex items-start space-x-4"></div>
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0"></div>
                    <measure.icon className="w-6 h-6 text-white" /></measur>
                  </div>
                  <div></div>
                    <h3 className="text-xl font-bold text-white mb-3">{measure.title}</h>
                    <p className="text-gray-300">{measure.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-cyan-500/10 to-purple-500/10"></sectio>
        <div className="max-w-7 xl mx-auto px-4 sm:px-6 lg:px-8 text-center"></div>
          <h2 className="text-3 xl md:text-4 xl font-bold text-white mb-6"></h2></<<<h>Data</h></<<h>Protection</h> Officer
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3 xl mx-auto">
            Contact our Data Protection Officer for any questions about data protection or to exercise your rights
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4 xl mx-auto"></div>
            <div className="cyber-card p-6"></div>
              <div className="flex items-center space-x-4 mb-4"></div>
                <Mail className="w-6 h-6 text-cyan-400" /></Mai>
                <h3 className="text-lg font-bold text-white">Email</h>
              </div>
              <p className="text-gray-300">dpo@ziontechgroup.com</p>
            </div>

            <div className="cyber-card p-6"></div>
              <div className="flex items-center space-x-4 mb-4"></div>
                <Phone className="w-6 h-6 text-cyan-400" /></Phon>
                <h3 className="text-lg font-bold text-white">Phone</h>
              </div>
              <p className="text-gray-300">+1 (302) 464-0950</p>
            </div>
          </div>
        </div>
      </section>

      <Footer /></Foote>
    </div>
  );
};

export default DataProtectionPage;