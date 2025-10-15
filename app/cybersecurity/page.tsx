import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const CybersecurityPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Cybersecurity Services - Zion Tech Group | Advanced Security Solutions</title>
        <meta name="description" content="Comprehensive cybersecurity services including security audits, penetration testing, and incident response. Protect your business with our expert security team." />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="bg-gradient-to-br from-red-50 to-orange-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">Cybersecurity Services</h1>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
                Protect your business with comprehensive cybersecurity solutions. Our expert team provides 
                advanced security services to safeguard your digital assets and ensure compliance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="bg-red-600 text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-colors text-lg font-semibold">
                  Get Security Assessment
                </Link>
                <a href="tel:+13024640950" className="border-2 border-red-600 text-red-600 px-8 py-4 rounded-lg hover:bg-red-50 transition-colors text-lg font-semibold">
                  Call +1 302 464 0950
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Security Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive cybersecurity solutions to protect your business from evolving threats
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Security Audits</h3>
                <p className="text-gray-600 mb-6">Comprehensive security assessments to identify vulnerabilities and risks</p>
                <div className="text-2xl font-bold text-red-600 mb-2">$3,000</div>
                <div className="text-sm text-gray-500">Starting price</div>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <div className="text-4xl mb-4">🛡️</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Penetration Testing</h3>
                <p className="text-gray-600 mb-6">Simulated cyber attacks to test your security defenses</p>
                <div className="text-2xl font-bold text-red-600 mb-2">$5,000</div>
                <div className="text-sm text-gray-500">Starting price</div>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <div className="text-4xl mb-4">🚨</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Incident Response</h3>
                <p className="text-gray-600 mb-6">24/7 incident response and recovery services</p>
                <div className="text-2xl font-bold text-red-600 mb-2">$10,000</div>
                <div className="text-sm text-gray-500">Starting price</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CybersecurityPage;