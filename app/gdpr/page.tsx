import React from 'react'
import { Helmet } from 'react-helmet-async'
import { 
  ShieldCheckIcon,
  DocumentTextIcon,
  UserIcon,
  LockClosedIcon,
  ArrowRightIcon,
  PhoneIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline'

export default function GdprPage() {
  const rights = [
    {
      title: "Right to Access",
      description: "You have the right to request access to your personal data and information about how it's being processed.",
      icon: DocumentTextIcon
    },
    {
      title: "Right to Rectification",
      description: "You have the right to request correction of inaccurate or incomplete personal data.",
      icon: UserIcon
    },
    {
      title: "Right to Erasure",
      description: "You have the right to request deletion of your personal data under certain circumstances.",
      icon: LockClosedIcon
    },
    {
      title: "Right to Portability",
      description: "You have the right to receive your personal data in a structured, machine-readable format.",
      icon: ArrowRightIcon
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
      basis: "Legal Obligation",
      description: "Processing is necessary for compliance with a legal obligation.",
      examples: ["Tax reporting", "Regulatory compliance", "Audit requirements"]
    },
    {
      basis: "Legitimate Interest",
      description: "Processing is necessary for our legitimate interests or those of a third party.",
      examples: ["Website analytics", "Security monitoring", "Service improvement"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>GDPR Compliance - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's GDPR compliance and your data protection rights under the General Data Protection Regulation." />
        <meta name="keywords" content="GDPR, data protection, privacy rights, compliance, personal data, EU regulation" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              GDPR Compliance
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Your data protection rights and our commitment
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Zion Tech Group is committed to protecting your personal data and ensuring compliance 
              with the General Data Protection Regulation (GDPR) and other applicable data protection laws.
            </p>
          </div>
        </div>
      </section>

      {/* What is GDPR */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                What is GDPR?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Understanding the General Data Protection Regulation
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 mb-12">
              <div className="flex items-start gap-4 mb-6">
                <ShieldCheckIcon className="w-8 h-8 text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Overview</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    The General Data Protection Regulation (GDPR) is a comprehensive data protection law 
                    that came into effect on May 25, 2018. It applies to all organizations that process 
                    personal data of individuals in the European Union, regardless of where the organization is located.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    GDPR gives individuals greater control over their personal data and requires organizations 
                    to be more transparent about how they collect, use, and protect personal information.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600">
                <h3 className="text-xl font-bold text-white mb-4">Key Principles</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Lawfulness, fairness, and transparency</li>
                  <li>• Purpose limitation</li>
                  <li>• Data minimization</li>
                  <li>• Accuracy</li>
                  <li>• Storage limitation</li>
                  <li>• Integrity and confidentiality</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600">
                <h3 className="text-xl font-bold text-white mb-4">Our Commitment</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Transparent data processing</li>
                  <li>• Strong security measures</li>
                  <li>• Regular compliance audits</li>
                  <li>• Staff training and awareness</li>
                  <li>• Data breach notification</li>
                  <li>• Privacy by design</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Your Rights */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Your Data Protection Rights
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Under GDPR, you have specific rights regarding your personal data
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {rights.map((right, index) => {
              const Icon = right.icon;
              return (
                <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{right.title}</h3>
                  </div>
                  
                  <p className="text-gray-300">{right.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Data Processing */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Legal Basis for Processing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We process your personal data based on specific legal grounds
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {dataProcessingBases.map((basis, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-4">{basis.basis}</h3>
                <p className="text-gray-300 mb-6">{basis.description}</p>
                
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Examples:</h4>
                  <ul className="space-y-1">
                    {basis.examples.map((example, exampleIndex) => (
                      <li key={exampleIndex} className="text-gray-400 flex items-center">
                        <ArrowRightIcon className="w-4 h-4 text-purple-400 mr-2" />
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Security */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Data Security Measures
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              How we protect your personal data
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Encryption",
                description: "All data is encrypted in transit and at rest using industry-standard encryption protocols."
              },
              {
                title: "Access Controls",
                description: "Strict access controls ensure only authorized personnel can access personal data."
              },
              {
                title: "Regular Audits",
                description: "We conduct regular security audits and assessments to maintain compliance."
              }
            ].map((measure, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <ShieldCheckIcon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{measure.title}</h3>
                <p className="text-gray-300">{measure.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Exercise Your Rights
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Contact us to exercise any of your data protection rights
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a 
                href="/contact" 
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Contact Data Protection Officer
                <ArrowRightIcon className="w-5 h-5" />
              </a>
              <a 
                href="/privacy" 
                className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                Privacy Policy
                <ArrowRightIcon className="w-5 h-5" />
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-gray-300">
              <div className="flex items-center gap-3">
                <PhoneIcon className="w-6 h-6 text-purple-400" />
                <span>+1-302-464-0950</span>
              </div>
              <div className="flex items-center gap-3">
                <EnvelopeIcon className="w-6 h-6 text-purple-400" />
                <span>privacy@ziontechgroup.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}