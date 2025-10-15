import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Eye, Database, Lock, User, Mail, Phone, Download } from 'lucide-react';

const GdprPage: React.FC = () => {
  const rights = [
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Right to Access",
      description: "You have the right to request access to your personal data and information about how we process it."
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Right to Rectification",
      description: "You can request correction of inaccurate or incomplete personal data we hold about you."
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Right to Erasure",
      description: "You can request deletion of your personal data in certain circumstances (right to be forgotten)."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Right to Restrict Processing",
      description: "You can request that we limit how we process your personal data in certain situations."
    },
    {
      icon: <Download className="w-6 h-6" />,
      title: "Right to Data Portability",
      description: "You can request a copy of your data in a structured, machine-readable format."
    },
    {
      icon: <User className="w-6 h-6" />,
      title: "Right to Object",
      description: "You can object to processing of your personal data for direct marketing or legitimate interests."
    }
  ];

  const dataProcessingBases = [
    {
      basis: "Consent",
      description: "You have given clear consent for us to process your personal data for specific purposes.",
      examples: ["Newsletter subscriptions", "Marketing communications", "Cookie preferences"]
    },
    {
      basis: "Contract",
      description: "Processing is necessary for the performance of a contract with you.",
      examples: ["Service delivery", "Account management", "Billing and payments"]
    },
    {
      basis: "Legitimate Interest",
      description: "Processing is necessary for our legitimate interests or those of a third party.",
      examples: ["Website analytics", "Security monitoring", "Service improvement"]
    },
    {
      basis: "Legal Obligation",
      description: "Processing is necessary to comply with a legal obligation.",
      examples: ["Tax records", "Audit requirements", "Regulatory compliance"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>GDPR Compliance - Zion Tech Group | Data Protection & Privacy Rights</title>
        <meta name="description" content="Zion Tech Group's GDPR compliance information. Learn about your data protection rights and how we handle your personal data in accordance with EU regulations." />
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
                We are committed to protecting your privacy and ensuring full compliance with the General Data Protection Regulation (GDPR).
              </p>
              <div className="text-gray-400 text-lg">
                Last updated: January 15, 2024
              </div>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 mb-8">
                <h2 className="text-3xl font-bold text-white mb-6">Our GDPR Commitment</h2>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Zion Tech Group is fully committed to compliance with the General Data Protection Regulation (GDPR), 
                  which came into effect on May 25, 2018. This regulation strengthens and unifies data protection for 
                  individuals within the European Union.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  We have implemented comprehensive measures to ensure that your personal data is processed lawfully, 
                  fairly, and transparently, with appropriate security measures in place.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Your Rights */}
        <section className="py-16 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Your Data Protection Rights</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Under GDPR, you have specific rights regarding your personal data
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {rights.map((right, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                  <div className="text-cyan-400 mb-6 flex justify-center">
                    {right.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 text-center">{right.title}</h3>
                  <p className="text-gray-300 text-center">{right.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Data Processing */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Legal Basis for Processing</h2>
              <div className="space-y-6">
                {dataProcessingBases.map((basis, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                    <h3 className="text-2xl font-bold text-white mb-4">{basis.basis}</h3>
                    <p className="text-gray-300 mb-4">{basis.description}</p>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Examples:</h4>
                      <ul className="space-y-2">
                        {basis.examples.map((example, exampleIndex) => (
                          <li key={exampleIndex} className="flex items-center text-gray-300">
                            <span className="text-cyan-400 mr-3">•</span>
                            {example}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Data Security */}
        <section className="py-16 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <h2 className="text-3xl font-bold text-white mb-6 text-center">Data Security Measures</h2>
                <div className="space-y-6 text-gray-300">
                  <p>
                    We implement appropriate technical and organizational measures to protect your personal data:
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="text-cyan-400 mr-3 mt-1">•</span>
                      <div>
                        <strong className="text-white">Encryption:</strong> All data is encrypted in transit and at rest using industry-standard encryption protocols.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan-400 mr-3 mt-1">•</span>
                      <div>
                        <strong className="text-white">Access Controls:</strong> Strict access controls ensure only authorized personnel can access your data.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan-400 mr-3 mt-1">•</span>
                      <div>
                        <strong className="text-white">Regular Audits:</strong> We conduct regular security audits and assessments to maintain compliance.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan-400 mr-3 mt-1">•</span>
                      <div>
                        <strong className="text-white">Data Minimization:</strong> We only collect and process data that is necessary for our legitimate purposes.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan-400 mr-3 mt-1">•</span>
                      <div>
                        <strong className="text-white">Breach Notification:</strong> We have procedures in place to detect, report, and investigate data breaches.
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How to Exercise Your Rights */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <h2 className="text-3xl font-bold text-white mb-6 text-center">How to Exercise Your Rights</h2>
                <div className="space-y-6 text-gray-300">
                  <p>
                    To exercise any of your data protection rights, please contact us using the information below:
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-lg p-6">
                      <h3 className="text-xl font-bold text-white mb-4">Email Us</h3>
                      <p className="mb-4">Send your request to our Data Protection Officer:</p>
                      <a 
                        href="mailto:privacy@ziontechgroup.com" 
                        className="text-cyan-400 hover:text-cyan-300 font-semibold"
                      >
                        privacy@ziontechgroup.com
                      </a>
                    </div>
                    <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-lg p-6">
                      <h3 className="text-xl font-bold text-white mb-4">Call Us</h3>
                      <p className="mb-4">Speak directly with our team:</p>
                      <a 
                        href="tel:+13024640950" 
                        className="text-cyan-400 hover:text-cyan-300 font-semibold"
                      >
                        +1 302 464 0950
                      </a>
                    </div>
                  </div>
                  <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4 mt-6">
                    <p className="text-yellow-300">
                      <strong>Response Time:</strong> We will respond to your request within 30 days of receipt. 
                      In some cases, we may need to verify your identity before processing your request.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-xl p-12 text-center max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-6">Data Protection Officer</h2>
              <p className="text-xl text-white/90 mb-8">
                For any questions about our GDPR compliance or to exercise your data protection rights, 
                contact our Data Protection Officer.
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