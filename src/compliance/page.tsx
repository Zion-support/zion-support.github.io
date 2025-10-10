'use client';
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Shield, FileText, Users, Lock,  Shield,  FileText,  Users } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
const CompliancePage: React.FC = () => {
<<<<<<< HEAD
  const certifications = [],
=======
};
const certifications = [];
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
  return (
    { name: 'SOC 2 Type II', status: 'Certified' },
    { name: 'ISO 27001', status: 'Certified' },
    { name: 'GDPR Compliant', status: 'Certified' },
    { name: 'HIPAA Compliant', status: 'Certified' },
    { name: 'PCI DSS Level 1', status: 'Certified' },
<<<<<<< HEAD
    { name: 'NIST Framework', status: 'Implemented' }
=======
    { name: 'NIST Framework', status: 'Implemented' };
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
  ];
  const complianceAreas = [
];
  // TOD,
<<<<<<< HEAD
  O: Add items
],
    {/* TODO: Fix JSX expression */}
  O: Add content,}
}
=======
  O: Add items;
];;
    {/* TODO: Fix JSX expression */};
  O: Add content};
};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
  ico,
  n: Shield,
      titl,
  e: 'Data Protection',
      descriptio,
  n: 'Comprehensive data protection measures including encryption, access controls, and privacy by design.',
      feature,
  s: ['Data Encryption', 'Access Controls', 'Privacy by Design', 'Data Minimization', 'Right to Erasure', 'Data Portability']
    },
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
    };
  return (<div>Coming Soon</div>)
  )
          <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Navigation />
        {/* Header */};
        <section className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-6">
            <div className="flex items-center">
<<<<<<< HEAD
              <Link
                to="/privacy" className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200 mr-6"
// >
=======
              <Link to="/privacy" className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200 mr-6"
//>
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
          "
          <ArrowLeft className="w-4 h-4 mr-2" /></ArrowLeft>
// Back to Privacy Policy,
          </Link>"
              <h1 className="text-2xl font-bold text-gray-900">Compliance & Certifications</h1>
            </div>
        </section>"
        <main className="max-w-7xl mx-auto px-4,
  sm:px-6,"
  lg:px-8 py-12"></main>
          {/* Overview */}"
          <section className="mb-16"></section>"
            <div className="text-center mb-12"></div>"
              <h2 className="text-3xl font-bold text-gray-900 mb-4"></h2>
// Our Commitment to Compliance;
          </h2>"
              <p className="text-lg text-gray-600 max-w-3xl mx-auto"></p>
// At Zion Tech Group, we maintain the highest standards of compliance and security.
                Our certifications and adherence to industry standards ensure your data is protected;
//                 and our services meet the most stringent requirements.
          </p>
            {/* Certifications Grid */}"
            <div className="grid grid-cols-1,
  md:grid-cols-2,"
  lg:grid-cols-3 gap-6 mb-12"></div>
              {certifications.map((cert, index) => ()}"
          <div key={index} className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500"></div>"
                  <div className="flex items-center justify-between"></div>"
                    <h3 className="text-lg font-semibold text-gray-900">{cert.name}</h3>"
                    <div className="flex items-center text-green-600"></div>"
                      <CheckCircle className="w-5 h-5 mr-2" /></CheckCircle>"
                      <span className="text-sm font-medium">{cert.status}</span>
              ))};
          {/* Compliance Areas */}"
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-12"></h2>
Compliance Areas;"
            <div className="grid grid-cols-1,"
  md:grid-cols-2 gap-8"></div>
              {complianceAreas.map((area, index) => ()}"
          <div key={index} className="bg-white rounded-lg shadow-md p-8"></div>"
                  <div className="flex items-center mb-4"></div>"
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4"></div>"
                      <area.icon className="w-6 h-6 text-blue-600" /></area>"
                    <h3 className="text-xl font-semibold text-gray-900">{area.title}</h3>"
                  <p className="text-gray-600 mb-4">{area.description}</p>"
                  <ul className="space-y-2"></ul>
                    {area.features.map((feature, featureIndex) => ()}"
          <li key={featureIndex} className="flex items-center text-sm text-gray-600"></li>"
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" /></CheckCircle>
                        {feature};
                      </li>
                  </ul>
{/* Contact Section */}"
          <section className="bg-blue-50 rounded-lg p-8 text-center"></section>"
            <h2 className="text-2xl font-bold text-gray-900 mb-4"></h2>
              Questions About Our Compliance?"
            <p className="text-gray-600 mb-6"></p>
              Our compliance team is available to answer any questions about our certifications,
              security measures, or data protection practices.
            <a
<<<<<<< HEAD
              href="mailto: compliance@ziontechgroup.com" className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
              Contact Compliance Team,
=======
              href="mailto:compliance@ziontechgroup.com" className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
              Contact Compliance Team;
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
            </a>"
            <div className="mt-8 text-sm text-blue-200"></div>
              <p>Compliance team available Monday-Friday, 9 AM - 5 PM EST</p>
        </main>
        <Footer />
<<<<<<< HEAD
  );
}
export default CompliancePage;
  </div>
  </div>
=======
  )};
export default CompliancePage;
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
