'use client'
import React from 'react'
import { ArrowLeft, FileText, Lock } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, Shield, Users } from 'lucide-react'
import { Award } from 'lucide-react';
'use client';
import React from 'react';
import { ArrowLeft, FileText, Lock, CheckCircle, Shield, Users, Check, Award } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const CompliancePage: React.FC = () => {
  const certifications = [
    { name: 'SOC 2 Type II', status: 'Certified' },
    { name: 'ISO 27001', status: 'Certified' },
    { name: 'GDPR', status: 'Compliant' },
    { name: 'HIPAA', status: 'Compliant' },
    { name: 'PCI DSS', status: 'Compliant' }
  ]

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Navigation />
        {/* Header */}
        <section className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex items-center">
              <a href="/privacy" 
                className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Privacy Policy</a>
            </div>
          </div>
        </section>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Compliance & Certifications</h1>
            <p className="text-xl text-blue-100 mb-8">
              We maintain the highest standards of security and compliance to protect your data and ensure regulatory adherence.
            </p>
          </div>
        </section>
        {/* Certifications Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Our Certifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6 text-center border border-gray-200">
                  <Award className="w-12 h-12 text-blue-600 mb-4 mx-auto" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{cert.name}</h3>
                  <div className="flex items-center justify-center text-green-600">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    {cert.status}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Security Features */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Security Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <Shield className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Data Encryption</h3>
                <p className="text-gray-600">All data is encrypted in transit and at rest using industry-standard encryption protocols.</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <CheckCircle className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Regular Audits</h3>
                <p className="text-gray-600">We conduct regular security audits and penetration testing to ensure our systems remain secure.</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <Award className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Compliance Monitoring</h3>
                <p className="text-gray-600">Continuous monitoring and reporting to ensure ongoing compliance with all relevant regulations.</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <FileText className="w-12 h-12 text-orange-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Audit Trails</h3>
                <p className="text-gray-600">Comprehensive logging and monitoring for complete audit compliance.</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <Users className="w-12 h-12 text-indigo-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Access Control</h3>
                <p className="text-gray-600">Role-based access controls and multi-factor authentication.</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <Lock className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Secure Infrastructure</h3>
                <p className="text-gray-600">End-to-end encryption for data in transit and at rest.</p>
              </div>
            </div>
          </div>
        </section>
        {/* Contact Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Compliance Questions?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Our compliance team is available to answer your questions and provide additional documentation.
            </p>
            <a;
              href="mailto:compliance@ziontechgroup.com"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors inline-flex items-center"
            >
              Contact Compliance Team</a>
            <div className="mt-8 text-sm text-blue-200">
              <p>Compliance team available Monday-Friday, 9 AM - 5 PM EST</p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}
import {ArrowLeft, FileText, Lock, CheckCircle, Users, Shield, Award, Award} from 'lucide-react';;;
import Navigation from '../$1/Navigation';
import Footer from '../$1/Footer';

constCompliancePage: React.FC= () =>{constcertifications= [
    { name: 'SOC2Type II', status: 'Certified'},
    {name: 'ISO27001', status: 'Certified'},
    {name: 'GDPR', status: 'Compliant'},
    {name: 'HIPAA', status: 'Compliant'},
    {name: 'PCI DSS', status: 'Compliant'}
  ];

  return (
  <><divclassName="min-h-screenbg-gradient-to-brfrom-slate-50to-blue-50"><Navigation />{/* Header */}
      <sectionclassName="bg-whiteshadow-smborder-b"><divclassName="max-w-7 xl mx-auto px-4sm:px-6lg:px-8py-6"><divclassName="flexitems-center"><ahref="/privacy" 
               className="flex items-center text-blue-600 hover:text-blue-800transition-colors"
              ><ArrowLeftclassName="w-5h-5mr-2" />Back to Privacy Policy</a></di></di></sectio>{/* HeroSection */}
      <sectionclassName="py-16bg-gradient-to-r from-blue-600to-purple-600text-white"><divclassName="max-w-4 xl mx-auto px-4 sm:px-6lg:px-8text-center"><spanclassName="text-4 xlmd:text-5 xlfont-boldmb-6"></spa></className="text-4 xlmd:text-5 xlfont-boldmb-6">Compliance & Certifications</h><spanclassName="text-xl text-blue-100mb-8"></spa></className="text-xl text-blue-100mb-8">We maintain the highest standards of security and compliance to protect your data and ensure regulatory adherence.
          </p></di></sectio>{/* CertificationsSection */}
      <sectionclassName="py-16bg-white"><divclassName="max-w-7 xl mx-auto px-4sm:px-6lg:px-8"><spanclassName="text-3 xl font-bold text-gray-900text-centermb-12"></spa></className="text-3 xl font-bold text-gray-900text-centermb-12">Our Certifications</h><divclassName="grid grid-cols-1 md:grid-cols-2lg:grid-cols-3gap-8">{certifications.map((certindex) => (
             <divkey={index}className="bg-gray-50rounded-lg p-6 text-center borderborder-gray-200"><AwardclassName="w-12h-1 2text-blue-600mb-4mx-auto" /><h3className="text-xl font-semibold text-gray-900mb-2">{cert.name}</h><divclassName="flex items-center justify-centertext-green-600"><CheckCircleclassName="w-5h-5mr-2" />{cert.status}
                </di></di>))}
          </di></di></sectio>{/* SecurityFeatures */}
      <sectionclassName="py-16bg-gray-50"><divclassName="max-w-7 xl mx-auto px-4sm:px-6lg:px-8"><spanclassName="text-3 xl font-bold text-gray-900text-centermb-12"></spa></className="text-3 xl font-bold text-gray-900text-centermb-12">Security Features</h><divclassName="grid grid-cols-1 md:grid-cols-2lg:grid-cols-3gap-8"><divclassName="bg-white rounded-lg p-6 shado w-sm borderborder-gray-200"><ShieldclassName="w-12h-12text-blue-600mb-4" /><h3className="text-xl font-semibold text-gray-900mb-3">DataEncryption</h><pclassName="text-gray-600">All data is encrypted in transit and at rest using industry-standardencryptionprotocols.</p></di><divclassName="bg-white rounded-lg p-6 shado w-sm borderborder-gray-200"><CheckCircleclassName="w-12h-12text-green-600mb-4" /><h3className="text-xl font-semibold text-gray-900mb-3">RegularAudits</h><pclassName="text-gray-600">We conduct regular security audits and penetration testing to ensure our systemsremainsecure.</p></di><divclassName="bg-white rounded-lg p-6 shado w-sm borderborder-gray-200"><AwardclassName="w-12h-12text-purple-600mb-4" /><h3className="text-xl font-semibold text-gray-900mb-3">ComplianceMonitoring</h><pclassName="text-gray-600">Continuous monitoring and reporting to ensure ongoing compliance with allrelevantregulations.</p></di><divclassName="bg-white rounded-lg p-6 shado w-sm borderborder-gray-200"><FileTextclassName="w-12h-12text-orange-600mb-4" /><h3className="text-xl font-semibold text-gray-900mb-3">AuditTrails</h><pclassName="text-gray-600">Comprehensive logging and monitoring for completeauditcompliance.</p></di><divclassName="bg-white rounded-lg p-6 shado w-sm borderborder-gray-200"><UsersclassName="w-12h-12text-indigo-600mb-4" /><h3className="text-xl font-semibold text-gray-900mb-3">AccessControl</h><pclassName="text-gray-600">Role-based access controls andmulti-factorauthentication.</p></di><divclassName="bg-white rounded-lg p-6 shado w-sm borderborder-gray-200"><LockclassName="w-12h-12text-red-600mb-4" /><h3className="text-xl font-semibold text-gray-900mb-3">SecureInfrastructure</h><pclassName="text-gray-600">End-to-end encryption for data in transit andatrest.</p></di></di></di></sectio>{/* ContactSection */}
      <sectionclassName="py-16bg-gradient-to-r from-blue-600to-purple-600text-white"><divclassName="max-w-4 xl mx-auto px-4 sm:px-6lg:px-8text-center"><spanclassName="text-3 xlmd:text-4 xlfont-boldmb-4"></spa></className="text-3 xlmd:text-4 xlfont-boldmb-4">Compliance Questions?
          </h><spanclassName="text-xl mb-8text-blue-100"></spa></className="text-xl mb-8text-blue-100">Our compliance team is available to answer your questions and provide additional do cumentation.
          </p><ahref="mailto:compliance@ziontechgroup.com"
             className="bg-white text-blue-600px-8 py-3 rounded-lghover:bg-blue-50transition-colorsinline-flexitems-center"
            >Contact Compliance Team</a><divclassName="mt-8 text-smtext-blue-200"><p>Compliance team available Monday-Friday,9AM-5PMEST</p></di></di></sectio></di><Footer /></>
  );
};

export default CompliancePage;