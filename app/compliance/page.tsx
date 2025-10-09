import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, CheckCircle, FileText, Users } from 'lucide-react';

const CompliancePage: React.FC = () => {
  const complianceStandards = [
    {
      title: 'GDPR Compliance',
      description: 'Full compliance with the General Data Protection Regulation',
      icon: Shield,
      status: 'Compliant'
    },
    {
      title: 'SOC 2 Type II',
      description: 'Security, availability, and confidentiality controls',
      icon: CheckCircle,
      status: 'Certified'
    },
    {
      title: 'ISO 27001',
      description: 'Information security management system',
      icon: FileText,
      status: 'Certified'
    },
    {
      title: 'CCPA Compliance',
      description: 'California Consumer Privacy Act compliance',
      icon: Users,
      status: 'Compliant'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Compliance - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's compliance with various security and privacy standards including GDPR, SOC 2, and ISO 27001." />
        <meta name="keywords" content="compliance, GDPR, SOC 2, ISO 27001, CCPA, security standards" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Compliance
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
                Meeting the highest standards for security and privacy
              </p>
            </div>
          </div>
        </section>

        {/* Compliance Standards */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Compliance Standards</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {complianceStandards.map((standard, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-8 text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <standard.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{standard.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{standard.description}</p>
                  <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
                    {standard.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Compliance Questions?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Contact our compliance team for more information about our certifications
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:compliance@ziontechgroup.com"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Contact Compliance Team
              </a>
              <a
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                General Contact
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CompliancePage;