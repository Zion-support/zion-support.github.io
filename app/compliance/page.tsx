import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Shield, CheckCircle, Award } from 'lucide-react';

const CompliancePage: React.FC = () => {
  const certifications = [
    { name: 'SOC 2 Type II', status: 'Certified' },
    { name: 'ISO 27001', status: 'Certified' },
    { name: 'GDPR', status: 'Compliant' },
    { name: 'HIPAA', status: 'Compliant' },
    { name: 'PCI DSS', status: 'Compliant' }
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
              <h1 className="text-3xl font-bold text-gray-900">Compliance</h1>
              <p className="text-gray-600 mt-1">
                Our commitment to regulatory compliance and industry standards
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Compliance Excellence
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
              We maintain the highest standards of compliance with industry regulations and security frameworks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Request Compliance Report
              </Link>
              <Link 
                to="/security"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Security Information
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Frameworks */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Compliance Frameworks
            </h2>
            <p className="text-xl text-gray-600">
              Third-party verified compliance with industry standards
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {complianceFrameworks.map((framework, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-lg p-8">
                <div className="flex items-center mb-6">
                  <framework.icon className="w-8 h-8 text-blue-600 mr-4" />
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900">{framework.name}</h3>
                    <p className="text-gray-600">{framework.description}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between mb-6">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    framework.status === 'Certified' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {framework.status}
                  </span>
                  <span className="text-sm text-gray-500">Valid until: {framework.validUntil}</span>
                </div>
                <ul className="space-y-3">
                  {framework.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Areas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Compliance Areas
            </h2>
            <p className="text-xl text-gray-600">
              Key areas of compliance and regulatory adherence
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {complianceAreas.map((area, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <area.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{area.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{area.description}</p>
                  <div className="space-y-1">
                    {area.frameworks.map((framework, frameworkIndex) => (
                      <span key={frameworkIndex} className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded mr-1">
                        {framework}
                      </span>
                    ))}
                  </div>

 cursor/analyze-improve-and-deploy-application-cde4
                </div>
              </div>
            ))}
          </div>

 cursor/analyze-improve-and-deploy-application-cde4
        </div>
      </section>

      {/* Audit Schedule */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Audit Schedule
            </h2>
            <p className="text-xl text-gray-600">
              Regular audits and assessments to maintain compliance
            </p>
          </div>
          <div className="space-y-6">
            {auditSchedule.map((quarter, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">{quarter.quarter}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    quarter.status === 'Completed' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {quarter.status}
                  </span>
                </div>
                <ul className="space-y-2">
                  {quarter.audits.map((audit, auditIndex) => (
                    <li key={auditIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">{audit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Reports */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Compliance Reports
            </h2>
            <p className="text-xl text-gray-600">
              Access our latest compliance reports and certifications
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <Award className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">SOC 2 Report</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Our latest SOC 2 Type II audit report covering security, availability, and confidentiality controls.
              </p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Download Report
              </button>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <FileText className="w-8 h-8 text-green-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">ISO 27001 Certificate</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Our ISO 27001 certification demonstrating our information security management system.
              </p>
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                View Certificate
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Compliance Team */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Compliance Questions?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Our compliance team is available to answer your questions and provide additional documentation.
=======
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Compliance & Certifications</h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            We maintain the highest standards of security and compliance to protect your data and ensure regulatory adherence.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 text-center">
                <Award className="w-12 h-12 text-cyan-400 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold text-white mb-2">{cert.name}</h3>
                <div className="flex items-center justify-center text-green-400">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  {cert.status}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Security Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Security Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <Shield className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Data Encryption</h3>
              <p className="text-gray-300">All data is encrypted in transit and at rest using industry-standard encryption protocols.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <CheckCircle className="w-12 h-12 text-green-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Regular Audits</h3>
              <p className="text-gray-300">We conduct regular security audits and penetration testing to ensure our systems remain secure.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <Award className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Compliance Monitoring</h3>
              <p className="text-gray-300">Continuous monitoring and reporting to ensure ongoing compliance with all relevant regulations.</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Questions About Our Compliance?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Our compliance team is available to answer any questions about our security measures and certifications.
          </p>
          <a
            href="/contact"
            className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all"
          >
            Contact Compliance Team
          </a>
          <div className="mt-8 text-sm text-blue-200">
            <p>Compliance team available Monday-Friday, 9 AM - 5 PM EST</p>
          </div>
        </div>
      </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default CompliancePage;
