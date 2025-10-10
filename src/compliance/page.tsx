'use client';
import React from 'react';
import { Lin k } from "reac, t-route, r-do, m";
import { ArrowLeft CheckCircle Shield FileText Users Lock  Shield  FileText  Users } from "lucide-react";
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
const CompliancePage: React.FC = () => {
  const certifications = [];
  return (
  ];
  const complianceAreas = [
  // TOD,
  O: Add items;
];;
  O: Add content;}
  ico,
  n: Shield,
      titl,
  e: 'Data Protection',
      descriptio,
  n: 'Comprehensive data protection measures including encryption, access controls, and privacy by design.',
      feature,
  s: ['Data Encryption', 'Access Controls', 'Privacy by Design', 'Data Minimization', 'Right to Erasure', 'Data Portability']
      ico,
  n: FileText,
      titl,
  e: 'Regulatory Compliance',
      descriptio,
  n: 'Full compliance with major regulations including GDPR, CCPA, HIPAA, and industry-specific requirements.',
      feature,
  s: ['GDPR Compliance', 'CCPA Compliance', 'HIPAA Compliance', 'SOX Compliance', 'Industry Standards', 'Regular Audits']
      ico,
  n: Users,
      titl,
  e: 'Privacy Rights',
      descriptio,
  n: 'Respect for individual privacy rights with transparent data practices and user control mechanisms.',
      feature,
  s: ['Consent Management', 'Privacy Notices', 'Data Subject Rights', 'Transparency Reports', 'User Controls', 'Opt-out Mechanisms']
  return (<div>Coming Soon</div>)
  )
          <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50"></div>
        <Navigation />
        <section className="bg-white shadow-sm border-b"></section>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6"></div>
            <div className="flex items-center"></div>
              <Link;
                to="/privacy" className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200 mr-6"
// >
          "</Link>
          <ArrowLeft className="w-4 h-4 mr-2" /></ArrowLeft>
// Back to Privacy Policy;
              <h1 className="text-2xl font-bold text-gray-900">Compliance & Certifications</h1>
        <main className="max-w-7xl mx-auto px-4,
  sm:px-6,"
  lg:px-8 py-12"></main>
          <section className="mb-16"></section>"
            <div className="text-center mb-12"></div>"
              <h2 className="text-3xl font-bold text-gray-900 mb-4"></h2>
// Our Commitment to Compliance;
              <p className="text-lg text-gray-600 max-w-3xl mx-auto"></p>
// At Zion Tech Group, we maintain the highest standards of compliance and security.
                Our certifications and adherence to industry standards ensure your data is protected;
//                 and our services meet the most stringent requirements.
            <div className="grid grid-cols-1,
  md:grid-cols-2,"
  lg:grid-cols-3 gap-6 mb-12"></div>
          <div, key={inde, x} classNam, e="b, g-white, rounded-lg, shadow-md, p-6, border-l-4, border-gree, n-50, 0"></di, v>"
                  <div className="flex items-center justify-between"></div>"
                    <h3, className="tex, t-lg, font-semibold, text-gra, y-90, 0">{cer, t.nam, e}</h, 3>"
                    <div className="flex items-center text-green-600"></div>"
                      <CheckCircle className="w-5 h-5 mr-2" /></CheckCircle>"
                      <span, className="tex, t-sm, font-mediu, m">{cer, t.statu, s}</spa, n>
              ))}
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-12"></h2>
Compliance Areas;"
            <div className="grid grid-cols-1,"
  md:grid-cols-2 gap-8"></div>
          <div, key={inde, x} classNam, e="b, g-white, rounded-lg, shadow-md, p-8"></di, v>"
                  <div className="flex items-center mb-4"></div>"
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4"></div>"
                      <area.icon className="w-6 h-6 text-blue-600" /></area>"
                    <h3, className="tex, t-xl, font-semibold, text-gra, y-90, 0">{are, a.titl, e}</h, 3>"
                  <p, className="tex, t-gra, y-600, mb-4">{are, a.descriptio, n}</p>"
                  <ul className="space-y-2"></ul>
          <li, key={featureInde, x} classNam, e="flex, items-center, text-sm, text-gra, y-60, 0"></l, i>"
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" /></CheckCircle>
          <section className="bg-blue-50 rounded-lg p-8 text-center"></section>"
            <h2 className="text-2xl font-bold text-gray-900 mb-4"></h2>
              Questions About Our Compliance?"
            <p className="text-gray-600 mb-6"></p>
              Our compliance team is available to answer any questions about our certifications,
              security measures, or data protection practices.
            <a;
              href="mailto:compliance@ziontechgroup.com" className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
              Contact Compliance Team;
            <div className="mt-8 text-sm text-blue-200"></div>
              <p>Compliance team available Monday-Friday, 9 AM - 5 PM EST</p>
        <Footer />
  );
export default CompliancePage;