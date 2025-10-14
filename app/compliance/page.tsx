import React from 'react'
import { Helmet } from 'react-helmet-async'
import { 
  ShieldCheckIcon,
  DocumentTextIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  PhoneIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline'

export default function CompliancePage() {
  const complianceStandards = [
    {
      name: "SOC 2 Type II",
      description: "Audited controls for security, availability, and confidentiality",
      status: "Certified",
      lastAudit: "2024-01-15",
      nextAudit: "2025-01-15",
      scope: "All services and infrastructure"
    },
    {
      name: "ISO 27001",
      description: "International standard for information security management",
      status: "Certified",
      lastAudit: "2023-12-01",
      nextAudit: "2024-12-01",
      scope: "Information security management system"
    },
    {
      name: "GDPR",
      description: "General Data Protection Regulation compliance",
      status: "Compliant",
      lastAudit: "2024-01-01",
      nextAudit: "Ongoing",
      scope: "Personal data processing"
    },
    {
      name: "HIPAA",
      description: "Health Insurance Portability and Accountability Act",
      status: "Compliant",
      lastAudit: "2023-11-15",
      nextAudit: "2024-11-15",
      scope: "Healthcare data processing"
    },
    {
      name: "PCI DSS",
      description: "Payment Card Industry Data Security Standard",
      status: "Compliant",
      lastAudit: "2023-10-30",
      nextAudit: "2024-10-30",
      scope: "Payment card data processing"
    },
    {
      name: "CCPA",
      description: "California Consumer Privacy Act",
      status: "Compliant",
      lastAudit: "2024-01-01",
      nextAudit: "Ongoing",
      scope: "California consumer data rights"
    }
  ];

  const complianceFeatures = [
    {
      title: "Regular Audits",
      description: "We conduct regular internal and external audits to ensure ongoing compliance",
      icon: CheckCircleIcon
    },
    {
      title: "Documentation",
      description: "Comprehensive documentation of all compliance processes and procedures",
      icon: DocumentTextIcon
    },
    {
      title: "Training",
      description: "Regular training for all staff on compliance requirements and best practices",
      icon: ShieldCheckIcon
    }
  ];

  return (
    <>
      <Helmet>
        <title>Compliance - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's compliance with industry standards including SOC 2, ISO 27001, GDPR, HIPAA, and more." />
        <meta name="keywords" content="compliance, SOC 2, ISO 27001, GDPR, HIPAA, PCI DSS, CCPA, security standards" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Compliance
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Meeting the highest industry standards
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Zion Tech Group maintains compliance with leading industry standards and regulations 
              to ensure the highest level of security and data protection for our clients.
            </p>
          </div>
        </div>
      </section>

      {/* Compliance Standards */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Compliance Standards
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We maintain compliance with industry-leading standards
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {complianceStandards.map((standard, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-white">{standard.name}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    standard.status === 'Certified' 
                      ? 'bg-green-500/20 text-green-400' 
                      : 'bg-blue-500/20 text-blue-400'
                  }`}>
                    {standard.status}
                  </span>
                </div>
                
                <p className="text-gray-300 mb-6">{standard.description}</p>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Scope</span>
                    <span className="text-white text-sm">{standard.scope}</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Last Audit</span>
                    <span className="text-white text-sm">{standard.lastAudit}</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Next Audit</span>
                    <span className="text-white text-sm">{standard.nextAudit}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Features */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Compliance Approach
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              How we maintain ongoing compliance
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {complianceFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Compliance Process */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Compliance Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our systematic approach to maintaining compliance
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600">
              <div className="grid md:grid-cols-4 gap-8">
                {[
                  { step: "1", title: "Assessment", description: "Regular assessment of compliance requirements and gaps" },
                  { step: "2", title: "Implementation", description: "Implementation of necessary controls and processes" },
                  { step: "3", title: "Monitoring", description: "Continuous monitoring and testing of controls" },
                  { step: "4", title: "Reporting", description: "Regular reporting and documentation of compliance status" }
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

      {/* Compliance Benefits */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Benefits of Our Compliance
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              How our compliance benefits your business
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Risk Mitigation",
                description: "Reduced risk of data breaches and regulatory penalties",
                benefits: ["Lower insurance costs", "Reduced legal exposure", "Better risk management", "Improved reputation"]
              },
              {
                title: "Trust & Confidence",
                description: "Increased trust from customers and partners",
                benefits: ["Enhanced credibility", "Better partnerships", "Customer confidence", "Competitive advantage"]
              },
              {
                title: "Operational Excellence",
                description: "Improved processes and operational efficiency",
                benefits: ["Standardized processes", "Better documentation", "Improved quality", "Reduced errors"]
              },
              {
                title: "Regulatory Readiness",
                description: "Ready for new regulations and requirements",
                benefits: ["Future-proof compliance", "Easier adaptation", "Reduced implementation costs", "Staying ahead"]
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-300 mb-6">{benefit.description}</p>
                
                <ul className="space-y-2">
                  {benefit.benefits.map((item, itemIndex) => (
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

      {/* Contact Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Compliance Questions?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Contact our compliance team for any questions about our compliance standards
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a 
                href="/contact" 
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Contact Compliance Team
                <ArrowRightIcon className="w-5 h-5" />
              </a>
              <a 
                href="/security" 
                className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                Security Information
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
                <span>compliance@ziontechgroup.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}