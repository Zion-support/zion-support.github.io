'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const CompliancePageFixed: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Compliance - Zion Tech Group</title>
        <meta name="description" content="Learn about our compliance standards and certifications." />
      </Helmet>
      
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold text-white mb-4">
                Compliance & Certifications
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We maintain the highest standards of compliance and security to ensure 
                your data is protected and our services meet industry requirements.
              </p>
            </div>
          </div>
        </section>

        {/* Compliance Standards */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-4">
                  SOC 2 Type II
                </h3>
                <p className="text-gray-300 mb-4">
                  Certified for security, availability, and confidentiality controls.
                </p>
                <div className="text-green-400 font-medium">
                  ✓ Certified
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-4">
                  ISO 27001
                </h3>
                <p className="text-gray-300 mb-4">
                  Information security management system certification.
                </p>
                <div className="text-green-400 font-medium">
                  ✓ Certified
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-4">
                  GDPR Compliant
                </h3>
                <p className="text-gray-300 mb-4">
                  Full compliance with European data protection regulations.
                </p>
                <div className="text-green-400 font-medium">
                  ✓ Compliant
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Security Measures */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Security Measures
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Data Encryption
                    </h3>
                    <p className="text-gray-300">
                      All data is encrypted in transit and at rest using industry-standard encryption.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Access Controls
                    </h3>
                    <p className="text-gray-300">
                      Multi-factor authentication and role-based access controls.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Regular Audits
                    </h3>
                    <p className="text-gray-300">
                      Regular security audits and penetration testing.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Incident Response
                    </h3>
                    <p className="text-gray-300">
                      Comprehensive incident response plan and 24/7 monitoring.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">5</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Data Backup
                    </h3>
                    <p className="text-gray-300">
                      Regular automated backups with off-site storage.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">6</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Compliance Training
                    </h3>
                    <p className="text-gray-300">
                      Regular training for all staff on compliance requirements.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  );
};

export default CompliancePageFixed;