import React from 'react';
import { FileText, Shield, Lock, Database, Users, Globe, CheckCircle, AlertTriangle, Download, Mail, Target, Clock, Eye, Edit, Trash2, Pause } from 'lucide-react';

export default function DPA() {
  const dataProcessingPrinciples = [
    {
      principle: 'Lawfulness, Fairness, and Transparency',
      description: 'We process personal data lawfully, fairly, and in a transparent manner',
      icon: Shield,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      principle: 'Purpose Limitation',
      description: 'Personal data is collected for specified, explicit, and legitimate purposes',
      icon: Target,
      color: 'from-green-500 to-emerald-500'
    },
    {
      principle: 'Data Minimization',
      description: 'We collect only the personal data that is adequate, relevant, and necessary',
      icon: Database,
      color: 'from-purple-500 to-indigo-500'
    },
    {
      principle: 'Accuracy',
      description: 'Personal data is kept accurate and up-to-date, with rectification procedures',
      icon: CheckCircle,
      color: 'from-orange-500 to-red-500'
    },
    {
      principle: 'Storage Limitation',
      description: 'Personal data is retained only for as long as necessary',
      icon: Clock,
      color: 'from-pink-500 to-rose-500'
    },
    {
      principle: 'Integrity and Confidentiality',
      description: 'Personal data is processed securely with appropriate technical measures',
      icon: Lock,
      color: 'from-indigo-500 to-blue-500'
    }
  ];

  const dataProcessingActivities = [
    {
      category: 'Service Provision',
      activities: [
        'User account management and authentication',
        'Service delivery and support',
        'Communication and notifications',
        'Analytics and performance monitoring',
        'Customer relationship management'
      ],
      legalBasis: 'Contract performance and legitimate interests',
      retention: 'Duration of service + 7 years for legal compliance'
    },
    {
      category: 'Marketing and Communication',
      activities: [
        'Newsletter distribution',
        'Product updates and announcements',
        'Event invitations and registrations',
        'Customer feedback and surveys',
        'Social media engagement'
      ],
      legalBasis: 'Consent and legitimate interests',
      retention: 'Until consent withdrawal or 2 years of inactivity'
    },
    {
      category: 'Security and Compliance',
      activities: [
        'Fraud detection and prevention',
        'Security monitoring and incident response',
        'Compliance audits and reporting',
        'Legal obligation fulfillment',
        'Dispute resolution'
      ],
      legalBasis: 'Legal obligations and legitimate interests',
      retention: 'As required by law or 7 years minimum'
    }
  ];

  const dataSubjectRights = [
    {
      right: 'Right of Access',
      description: 'Request information about what personal data we process about you',
      icon: Eye,
      color: 'text-blue-600'
    },
    {
      right: 'Right to Rectification',
      description: 'Request correction of inaccurate or incomplete personal data',
      icon: Edit,
      color: 'text-green-600'
    },
    {
      right: 'Right to Erasure',
      description: 'Request deletion of your personal data under certain conditions',
      icon: Trash2,
      color: 'text-red-600'
    },
    {
      right: 'Right to Restriction',
      description: 'Request limitation of processing under certain conditions',
      icon: Pause,
      color: 'text-yellow-600'
    },
    {
      right: 'Right to Portability',
      description: 'Request transfer of your personal data to another controller',
      icon: Download,
      color: 'text-purple-600'
    },
    {
      right: 'Right to Object',
      description: 'Object to processing based on legitimate interests',
      icon: AlertTriangle,
      color: 'text-orange-600'
    }
  ];

  const securityMeasures = [
    {
      category: 'Technical Measures',
      measures: [
        'Encryption of data in transit and at rest',
        'Multi-factor authentication',
        'Regular security updates and patches',
        'Intrusion detection and prevention',
        'Secure API endpoints and access controls'
      ]
    },
    {
      category: 'Organizational Measures',
      measures: [
        'Employee training and awareness programs',
        'Access control and authorization policies',
        'Incident response procedures',
        'Regular security audits and assessments',
        'Vendor security requirements'
      ]
    },
    {
      category: 'Physical Measures',
      measures: [
        'Secure data center facilities',
        'Environmental controls and monitoring',
        'Access control systems',
        'Surveillance and monitoring',
        'Disaster recovery planning'
      ]
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 mb-6">
              <FileText className="h-8 w-8 text-blue-600" />
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Data Processing Agreement
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              This agreement outlines how Zion Tech Group processes personal data in accordance with applicable data protection laws and regulations.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
              About This Agreement
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              This Data Processing Agreement (DPA) is designed to ensure compliance with data protection regulations including GDPR, CCPA, and other applicable privacy laws. It defines our roles, responsibilities, and commitments regarding personal data processing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-50 rounded-xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Shield className="h-6 w-6 text-blue-600" />
                <h3 className="text-lg font-semibold text-gray-900">Our Commitment</h3>
              </div>
              <p className="text-gray-700">
                We are committed to protecting your privacy and ensuring that all personal data processing activities are conducted in compliance with applicable data protection laws.
              </p>
            </div>

            <div className="bg-green-50 rounded-xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Lock className="h-6 w-6 text-green-600" />
                <h3 className="text-lg font-semibold text-gray-900">Your Rights</h3>
              </div>
              <p className="text-gray-700">
                You have specific rights regarding your personal data, including access, rectification, erasure, and portability. We respect and facilitate these rights.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Data Processing Principles Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
              Data Processing Principles
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We adhere to fundamental data protection principles that ensure personal data is processed lawfully, fairly, and securely.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dataProcessingPrinciples.map((principle, index) => (
              <div key={index} className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
                <div className={`mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br ${principle.color} mb-6`}>
                  <principle.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">{principle.principle}</h3>
                <p className="text-gray-600 text-center text-sm">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Processing Activities Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
              Data Processing Activities
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We process personal data for specific purposes with clear legal bases and retention periods. Here's a detailed breakdown of our processing activities.
            </p>
          </div>

          <div className="space-y-8">
            {dataProcessingActivities.map((category, index) => (
              <div key={index} className="border border-gray-200 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{category.category}</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">Processing Activities:</h4>
                    <ul className="space-y-2">
                      {category.activities.map((activity, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                          <span>{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">Legal Basis:</h4>
                    <p className="text-sm text-gray-600">{category.legalBasis}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">Retention Period:</h4>
                    <p className="text-sm text-gray-600">{category.retention}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Subject Rights Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
              Your Data Rights
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Under applicable data protection laws, you have specific rights regarding your personal data. We are committed to facilitating the exercise of these rights.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dataSubjectRights.map((right, index) => (
              <div key={index} className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
                <div className={`mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 mb-6`}>
                  <right.icon className={`h-8 w-8 ${right.color}`} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">{right.right}</h3>
                <p className="text-gray-600 text-center text-sm">{right.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 max-w-2xl mx-auto">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Exercise Your Rights</h3>
              <p className="text-blue-800 mb-4">
                To exercise any of these rights, please contact us using the information provided below. We will respond to your request within 30 days.
              </p>
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Data%20Subject%20Rights%20Request"
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                Submit Request
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Security Measures Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
              Security Measures
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We implement comprehensive technical, organizational, and physical security measures to protect personal data against unauthorized access, alteration, disclosure, or destruction.
            </p>
          </div>

          <div className="space-y-8">
            {securityMeasures.map((category, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{category.category}</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {category.measures.map((measure, idx) => (
                    <li key={idx} className="text-gray-700 flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                      <span className="text-sm">{measure}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact and Download Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
            Get the Full Agreement
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Download the complete Data Processing Agreement or contact us for questions about our data processing practices.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center space-x-3 mb-4 justify-center">
                <Download className="h-6 w-6 text-blue-600" />
                <h3 className="text-lg font-semibold text-gray-900">Download DPA</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Get the complete Data Processing Agreement in PDF format for your records.
              </p>
              <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                Download PDF
              </button>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center space-x-3 mb-4 justify-center">
                <Mail className="h-6 w-6 text-green-600" />
                <h3 className="text-lg font-semibold text-gray-900">Contact Us</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Have questions about our data processing practices? Our team is here to help.
              </p>
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Data%20Processing%20Agreement%20Question"
                className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors inline-block"
              >
                Send Email
              </a>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-xl font-semibold mb-4">Data Protection Officer</h3>
            <p className="mb-6 text-blue-100">
              For questions about data protection, privacy, or to exercise your data rights, contact our Data Protection Officer.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Data%20Protection%20Officer%20Inquiry"
                className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
              >
                Contact DPO
              </a>
              <a
                href="/contact"
                className="px-6 py-3 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
              >
                General Contact
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Updates and Version Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
            Agreement Updates
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            This Data Processing Agreement may be updated periodically to reflect changes in our practices, legal requirements, or technological developments.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Current Version</h3>
              <p className="text-gray-600">2.1</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Last Updated</h3>
              <p className="text-gray-600">January 2025</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Next Review</h3>
              <p className="text-gray-600">July 2025</p>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-yellow-900 mb-2">Important Notice</h3>
            <p className="text-yellow-800">
              We will notify you of any material changes to this agreement at least 30 days before they take effect. Continued use of our services after changes constitutes acceptance of the updated agreement.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}