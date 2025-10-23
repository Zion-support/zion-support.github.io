'use client'
import React from 'react'
import { ArrowLeft, FileText, Lock } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, Shield, Users } from 'lucide-react'
import { Award } from 'lucide-react'

const CompliancePage: React.FC = () => {
  const certifications = [
    { name: 'SOC 2 Type II', status: 'Certified' },
    { name: 'ISO 27001', status: 'Certified' },
    { name: 'GDPR', status: 'Compliant' },
    { name: 'HIPAA', status: 'Compliant' },
    { name: 'PCI DSS', status: 'Compliant' }
  ]

const Page = () => {
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Page
        </h1>
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-gray-600">
            This page is under construction. Please check back later.
          </p>
        </div>
=======
    <>
      <div className=&quot;min-h-screen bg-gradient-to-br from-slate-50 to-blue-50&quot;></div>
        <Navigation />
        {/* Header */}
        <section className=&quot;bg-white shadow-sm border-b&quot;></section>
          <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6&quot;></div>
            <div className=&quot;flex items-center&quot;></div>
              <a href=&quot;/privacy&quot; 
                className=&quot;flex items-center text-blue-600 hover:text-blue-800 transition-colors&quot;
              >
                <ArrowLeft className=&quot;w-5 h-5 mr-2&quot; />
                Back to Privacy Policy
              </a>
            </div>
          </div>
        </section>
        {/* Hero Section */}
        <section className=&quot;py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white&quot;></section>
          <div className=&quot;max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center&quot;></div>
            <h1 className=&quot;text-4xl md:text-5xl font-bold mb-6&quot;>
              Compliance & Certifications
            </h1>
            <p className=&quot;text-xl text-blue-100 mb-8&quot;>
              We maintain the highest standards of security and compliance to protect your data and ensure regulatory adherence.
            </p>
          </div>
        </section>
        {/* Certifications Section */}
        <section className=&quot;py-16 bg-white&quot;></section>
          <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;></div>
            <h2 className=&quot;text-3xl font-bold text-gray-900 text-center mb-12&quot;>
              Our Certifications
            </h2>
            <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;></div>
              {certifications.map((cert, index) => (
                <div key={index} className=&quot;bg-gray-50 rounded-lg p-6 text-center border border-gray-200&quot;></div>
                  <Award className=&quot;w-12 h-12 text-blue-600 mb-4 mx-auto&quot; />
                  <h3 className=&quot;text-xl font-semibold text-gray-900 mb-2&quot;>{cert.name}</h3>
                  <div className=&quot;flex items-center justify-center text-green-600&quot;></div>
                    <CheckCircle className=&quot;w-5 h-5 mr-2&quot; />
                    {cert.status}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Security Features */}
        <section className=&quot;py-16 bg-gray-50&quot;></section>
          <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;></div>
            <h2 className=&quot;text-3xl font-bold text-gray-900 text-center mb-12&quot;>
              Security Features
            </h2>
            <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;></div>
              <div className=&quot;bg-white rounded-lg p-6 shadow-sm border border-gray-200&quot;></div>
                <Shield className=&quot;w-12 h-12 text-blue-600 mb-4&quot; />
                <h3 className=&quot;text-xl font-semibold text-gray-900 mb-3&quot;>Data Encryption</h3>
                <p className=&quot;text-gray-600&quot;>All data is encrypted in transit and at rest using industry-standard encryption protocols.</p>
              </div>
              <div className=&quot;bg-white rounded-lg p-6 shadow-sm border border-gray-200&quot;></div>
                <CheckCircle className=&quot;w-12 h-12 text-green-600 mb-4&quot; />
                <h3 className=&quot;text-xl font-semibold text-gray-900 mb-3&quot;>Regular Audits</h3>
                <p className=&quot;text-gray-600&quot;>We conduct regular security audits and penetration testing to ensure our systems remain secure.</p>
              </div>
              <div className=&quot;bg-white rounded-lg p-6 shadow-sm border border-gray-200&quot;></div>
                <Award className=&quot;w-12 h-12 text-purple-600 mb-4&quot; />
                <h3 className=&quot;text-xl font-semibold text-gray-900 mb-3&quot;>Compliance Monitoring</h3>
                <p className=&quot;text-gray-600&quot;>Continuous monitoring and reporting to ensure ongoing compliance with all relevant regulations.</p>
              </div>
              <div className=&quot;bg-white rounded-lg p-6 shadow-sm border border-gray-200&quot;></div>
                <FileText className=&quot;w-12 h-12 text-orange-600 mb-4&quot; />
                <h3 className=&quot;text-xl font-semibold text-gray-900 mb-3&quot;>Audit Trails</h3>
                <p className=&quot;text-gray-600&quot;>Comprehensive logging and monitoring for complete audit compliance.</p>
              </div>
              <div className=&quot;bg-white rounded-lg p-6 shadow-sm border border-gray-200&quot;></div>
                <Users className=&quot;w-12 h-12 text-indigo-600 mb-4&quot; />
                <h3 className=&quot;text-xl font-semibold text-gray-900 mb-3&quot;>Access Control</h3>
                <p className=&quot;text-gray-600&quot;>Role-based access controls and multi-factor authentication.</p>
              </div>
              <div className=&quot;bg-white rounded-lg p-6 shadow-sm border border-gray-200&quot;></div>
                <Lock className=&quot;w-12 h-12 text-red-600 mb-4&quot; />
                <h3 className=&quot;text-xl font-semibold text-gray-900 mb-3&quot;>Secure Infrastructure</h3>
                <p className=&quot;text-gray-600&quot;>End-to-end encryption for data in transit and at rest.</p>
              </div>
            </div>
          </div>
        </section>
        {/* Contact Section */}
        <section className=&quot;py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white&quot;></section>
          <div className=&quot;max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center&quot;></div>
            <h2 className=&quot;text-3xl md:text-4xl font-bold mb-4&quot;>
              Compliance Questions?
            </h2>
            <p className=&quot;text-xl mb-8 text-blue-100&quot;>
              Our compliance team is available to answer your questions and provide additional documentation.
            </p>
            <a
              href=&quot;mailto:compliance@ziontechgroup.com&quot;
              className=&quot;bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors inline-flex items-center&quot;
            >
              Contact Compliance Team
            </a>
            <div className=&quot;mt-8 text-sm text-blue-200&quot;></div>
              <p>Compliance team available Monday-Friday, 9 AM - 5 PM EST</p>
            </div>
          </div>
        </section>
>>>>>>> 33a3472fdd6542a46cedfafebd3b6b0a7cc5e02d
      </div>
      <Footer />
    </>
  )
}

export default Page;