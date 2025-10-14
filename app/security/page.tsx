import React from 'react'
import { Helmet } from 'react-helmet-async'
import { 
  ShieldCheckIcon,
  LockClosedIcon,
  EyeIcon,
  KeyIcon,
  ArrowRightIcon,
  PhoneIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline'

export default function SecurityPage() {
  const securityMeasures = [
    {
      title: "Data Encryption",
      description: "All data is encrypted using AES-256 encryption both in transit and at rest.",
      icon: LockClosedIcon,
      features: ["TLS 1.3 for data in transit", "AES-256 for data at rest", "End-to-end encryption", "Key management"]
    },
    {
      title: "Access Controls",
      description: "Multi-factor authentication and role-based access controls protect your data.",
      icon: KeyIcon,
      features: ["Multi-factor authentication", "Role-based access", "Regular access reviews", "Privileged access management"]
    },
    {
      title: "Network Security",
      description: "Advanced network security measures protect against external threats.",
      icon: ShieldCheckIcon,
      features: ["Firewall protection", "DDoS mitigation", "Intrusion detection", "Network monitoring"]
    },
    {
      title: "Monitoring & Auditing",
      description: "Continuous monitoring and regular audits ensure security compliance.",
      icon: EyeIcon,
      features: ["24/7 security monitoring", "Real-time threat detection", "Regular security audits", "Incident response"]
    }
  ];

  const complianceStandards = [
    {
      standard: "SOC 2 Type II",
      description: "Audited controls for security, availability, and confidentiality",
      status: "Certified"
    },
    {
      standard: "ISO 27001",
      description: "International standard for information security management",
      status: "Certified"
    },
    {
      standard: "GDPR",
      description: "General Data Protection Regulation compliance",
      status: "Compliant"
    },
    {
      standard: "HIPAA",
      description: "Health Insurance Portability and Accountability Act",
      status: "Compliant"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Security - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's comprehensive security measures, compliance standards, and data protection practices." />
        <meta name="keywords" content="security, data protection, encryption, compliance, SOC 2, ISO 27001, GDPR, HIPAA" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Security
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Protecting your data with enterprise-grade security
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              At Zion Tech Group, security is our top priority. We implement comprehensive 
              security measures and maintain strict compliance with industry standards to protect your data.
            </p>
          </div>
        </div>
      </section>

      {/* Security Measures */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Security Measures
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Multi-layered security approach to protect your data
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {securityMeasures.map((measure, index) => {
              const Icon = measure.icon;
              return (
                <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{measure.title}</h3>
                      <p className="text-gray-300">{measure.description}</p>
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    {measure.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-gray-400 flex items-center">
                        <ArrowRightIcon className="w-4 h-4 text-purple-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Compliance Standards */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Compliance Standards
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We maintain compliance with industry-leading security standards
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {complianceStandards.map((standard, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white">{standard.standard}</h3>
                  <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-semibold">
                    {standard.status}
                  </span>
                </div>
                <p className="text-gray-300">{standard.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Security Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced security technologies and practices
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Threat Detection",
                description: "AI-powered threat detection and response systems",
                features: ["Real-time monitoring", "Behavioral analysis", "Automated response", "Threat intelligence"]
              },
              {
                title: "Data Loss Prevention",
                description: "Comprehensive data loss prevention and backup systems",
                features: ["Automated backups", "Data classification", "Access logging", "Recovery procedures"]
              },
              {
                title: "Security Training",
                description: "Regular security training and awareness programs",
                features: ["Staff training", "Security awareness", "Phishing simulations", "Best practices"]
              }
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <ShieldCheckIcon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-2 text-left">
                  {feature.features.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-gray-400 flex items-center">
                      <ArrowRightIcon className="w-4 h-4 text-purple-400 mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Incident Response */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Incident Response
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Rapid response to security incidents
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600">
              <h3 className="text-2xl font-bold text-white mb-6">Our Response Process</h3>
              <div className="grid md:grid-cols-4 gap-8">
                {[
                  { step: "1", title: "Detection", description: "Automated monitoring detects potential threats" },
                  { step: "2", title: "Assessment", description: "Security team assesses the severity and impact" },
                  { step: "3", title: "Response", description: "Immediate response to contain and mitigate threats" },
                  { step: "4", title: "Recovery", description: "Restore services and implement improvements" }
                ].map((step, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-xl">{step.step}</span>
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">{step.title}</h4>
                    <p className="text-gray-300 text-sm">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Security Questions?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Contact our security team for any security-related questions or concerns
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a 
                href="/contact" 
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Contact Security Team
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
                <span>security@ziontechgroup.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}