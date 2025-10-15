import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Eye, Lock, Database, Mail, Phone, CheckCircle, AlertTriangle } from 'lucide-react';

const GdprPage: React.FC = () => {
  const gdprPrinciples = [
    {
      icon: <Database className="w-6 h-6" />,
      title: "Lawfulness, Fairness, and Transparency",
      description: "We process personal data lawfully, fairly, and in a transparent manner in relation to the data subject.",
      details: [
        "Clear privacy notices explaining data processing",
        "Legal basis for each processing activity",
        "Transparent communication about data use"
      ]
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Purpose Limitation",
      description: "Personal data is collected for specified, explicit, and legitimate purposes and not further processed in a manner incompatible with those purposes.",
      details: [
        "Data collected only for specific business purposes",
        "No processing beyond stated purposes",
        "Regular review of processing activities"
      ]
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Data Minimization",
      description: "Personal data is adequate, relevant, and limited to what is necessary in relation to the purposes for which they are processed.",
      details: [
        "Only collect data that is necessary",
        "Regular data audits and cleanup",
        "Minimal data collection practices"
      ]
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Accuracy",
      description: "Personal data is accurate and, where necessary, kept up to date. We take reasonable steps to ensure inaccurate data is erased or rectified.",
      details: [
        "Regular data accuracy checks",
        "Easy data correction processes",
        "Data validation and verification"
      ]
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Storage Limitation",
      description: "Personal data is kept in a form which permits identification of data subjects for no longer than is necessary for the purposes for which the personal data are processed.",
      details: [
        "Clear data retention policies",
        "Automatic data deletion after retention period",
        "Regular data lifecycle reviews"
      ]
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Integrity and Confidentiality",
      description: "Personal data is processed in a manner that ensures appropriate security, including protection against unauthorized or unlawful processing.",
      details: [
        "Encryption of personal data",
        "Access controls and authentication",
        "Regular security assessments"
      ]
    }
  ];

  const dataRights = [
    {
      title: "Right to Information",
      description: "You have the right to be informed about the collection and use of your personal data.",
      icon: <Eye className="w-6 h-6" />
    },
    {
      title: "Right of Access",
      description: "You have the right to access your personal data and obtain a copy of it.",
      icon: <Database className="w-6 h-6" />
    },
    {
      title: "Right to Rectification",
      description: "You have the right to have inaccurate personal data corrected or completed.",
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      title: "Right to Erasure",
      description: "You have the right to have your personal data deleted in certain circumstances.",
      icon: <AlertTriangle className="w-6 h-6" />
    },
    {
      title: "Right to Restrict Processing",
      description: "You have the right to restrict the processing of your personal data in certain circumstances.",
      icon: <Lock className="w-6 h-6" />
    },
    {
      title: "Right to Data Portability",
      description: "You have the right to receive your personal data in a structured, commonly used format.",
      icon: <Database className="w-6 h-6" />
    },
    {
      title: "Right to Object",
      description: "You have the right to object to the processing of your personal data in certain circumstances.",
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "Rights Related to Automated Decision Making",
      description: "You have rights related to automated decision making and profiling.",
      icon: <CheckCircle className="w-6 h-6" />
    }
  ];

  const dataProcessingActivities = [
    {
      category: "Client Data",
      purpose: "Providing AI and IT services",
      legalBasis: "Contract performance",
      retentionPeriod: "7 years after contract termination",
      dataTypes: ["Contact information", "Project details", "Communication records"]
    },
    {
      category: "Website Analytics",
      purpose: "Improving website performance and user experience",
      legalBasis: "Legitimate interest",
      retentionPeriod: "26 months",
      dataTypes: ["IP addresses", "Browser information", "Usage patterns"]
    },
    {
      category: "Marketing Communications",
      purpose: "Sending newsletters and promotional materials",
      legalBasis: "Consent",
      retentionPeriod: "Until consent is withdrawn",
      dataTypes: ["Email addresses", "Name", "Communication preferences"]
    },
    {
      category: "Support Requests",
      purpose: "Providing customer support and technical assistance",
      legalBasis: "Contract performance",
      retentionPeriod: "3 years after resolution",
      dataTypes: ["Contact information", "Support tickets", "Technical details"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>GDPR Compliance - Zion Tech Group | Data Protection & Privacy Rights</title>
        <meta name="description" content="Learn about Zion Tech Group's GDPR compliance and your data protection rights. We are committed to protecting your personal data in accordance with EU regulations." />
        <meta name="keywords" content="GDPR, data protection, privacy rights, EU regulations, personal data, compliance" />
        <meta property="og:title" content="GDPR Compliance - Zion Tech Group" />
        <meta property="og:description" content="Our commitment to GDPR compliance and data protection" />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                GDPR <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Compliance</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                We are committed to protecting your personal data in accordance with the General Data Protection Regulation (GDPR) and other applicable data protection laws.
              </p>
              <div className="text-gray-400 text-lg">
                Last updated: January 15, 2024
              </div>
            </div>
          </div>
        </section>

        {/* GDPR Principles */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Our GDPR Principles</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We follow the six key principles of GDPR in all our data processing activities
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {gdprPrinciples.map((principle, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-cyan-500/40 transition-all duration-300">
                  <div className="text-cyan-400 mb-6 flex justify-center">
                    {principle.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{principle.title}</h3>
                  <p className="text-gray-300 mb-6">{principle.description}</p>
                  <ul className="space-y-2">
                    {principle.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-1 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Data Subject Rights */}
        <section className="py-16 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Your Data Protection Rights</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Under GDPR, you have specific rights regarding your personal data
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {dataRights.map((right, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-cyan-500/40 transition-all duration-300">
                  <div className="text-cyan-400 mb-4 flex justify-center">
                    {right.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{right.title}</h3>
                  <p className="text-gray-300 text-sm">{right.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Data Processing Activities */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Our Data Processing Activities</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transparent information about how we process your personal data
              </p>
            </div>
            
            <div className="max-w-6xl mx-auto space-y-8">
              {dataProcessingActivities.map((activity, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                  <h3 className="text-2xl font-bold text-white mb-6">{activity.category}</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg font-semibold text-cyan-400 mb-3">Purpose</h4>
                      <p className="text-gray-300 mb-4">{activity.purpose}</p>
                      
                      <h4 className="text-lg font-semibold text-cyan-400 mb-3">Legal Basis</h4>
                      <p className="text-gray-300 mb-4">{activity.legalBasis}</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-cyan-400 mb-3">Retention Period</h4>
                      <p className="text-gray-300 mb-4">{activity.retentionPeriod}</p>
                      
                      <h4 className="text-lg font-semibold text-cyan-400 mb-3">Data Types</h4>
                      <ul className="space-y-1">
                        {activity.dataTypes.map((type, typeIndex) => (
                          <li key={typeIndex} className="text-gray-300 text-sm">• {type}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Data Protection Officer */}
        <section className="py-16 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Data Protection Officer</h2>
              <p className="text-xl text-gray-300 mb-8">
                We have appointed a Data Protection Officer (DPO) to oversee our data protection compliance and to serve as a point of contact for data subjects and supervisory authorities.
              </p>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-4">Contact Our DPO</h3>
                <p className="text-gray-300 mb-6">
                  For any questions about our data processing activities or to exercise your data protection rights, please contact our Data Protection Officer.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="mailto:dpo@ziontechgroup.com" 
                    className="flex items-center justify-center bg-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-cyan-700 transition-all duration-300"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    dpo@ziontechgroup.com
                  </a>
                  <a 
                    href="tel:+13024640950" 
                    className="flex items-center justify-center border-2 border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    +1 302 464 0950
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Supervisory Authority */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Right to Lodge a Complaint</h2>
              <p className="text-xl text-gray-300 mb-8">
                You have the right to lodge a complaint with a supervisory authority if you believe that our processing of your personal data violates the GDPR.
              </p>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-4">Supervisory Authority</h3>
                <p className="text-gray-300 mb-6">
                  The supervisory authority in the EU member state where you live, work, or where the alleged infringement occurred has jurisdiction over your complaint.
                </p>
                <p className="text-gray-300">
                  You can find the contact details of your local supervisory authority on the European Data Protection Board website.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl p-12 text-center max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-white mb-6">Questions About GDPR?</h2>
              <p className="text-xl text-white/90 mb-8">
                If you have any questions about our GDPR compliance or want to exercise your data protection rights, please contact us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:privacy@ziontechgroup.com" 
                  className="flex items-center justify-center bg-white text-cyan-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  privacy@ziontechgroup.com
                </a>
                <a 
                  href="tel:+13024640950" 
                  className="flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  +1 302 464 0950
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default GdprPage;