import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import {

  ShieldCheckIcon,
  LockClosedIcon,
  EyeIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
  ArrowRightIcon,}
}
  PhoneIcon,}
}
  EnvelopeIcon,}
  MapPinIcon}
} from '@heroicons/react/24/outline'
export default function CybersecurityPage() {

  const services = [
    {
      icon: ShieldCheckIcon,}
}
      title: 'Advanced Threat Protection',}
}
      description: 'Comprehensive security solutions to protect against malware, ransomware, and advanced persistent threats.',}
      features: ['Real-time threat detection', 'Behavioral analysis', 'Automated response', '24/7 monitoring']}
    },
    {

      icon: LockClosedIcon,}
}
      title: 'Data Encryption & Privacy',}
}
      description: 'End-to-end encryption and privacy protection for sensitive data and communications.',}
      features: ['AES-256 encryption', 'Zero-knowledge architecture', 'Secure key management', 'Compliance support']}
    },
    {

      icon: EyeIcon,}
}
      title: 'Security Monitoring',}
}
      description: 'Continuous monitoring and analysis of your security posture with real-time alerts.',}
      features: ['SIEM implementation', 'Log analysis', 'Incident response', 'Security dashboards']}
    },
    {

      icon: ExclamationTriangleIcon,}
}
      title: 'Vulnerability Assessment',}
}
      description: 'Regular security assessments and penetration testing to identify and fix vulnerabilities.',}
      features: ['Penetration testing', 'Vulnerability scanning', 'Security audits', 'Compliance checks']}
    }
  ]
  const compliance = [
    { name: 'SOC 2 Type II', status: 'Certified' },
    { name: 'ISO 27001', status: 'Certified' },
    { name: 'GDPR', status: 'Compliant' },
    { name: 'HIPAA', status: 'Compliant' },
    { name: 'PCI DSS', status: 'Compliant' },
    { name: 'NIST', status: 'Compliant' }
  ]
  return (
    <>
      <SEO>
        title="Cybersecurity Solutions - Zion Tech Group"""
        description="Comprehensive cybersecurity solutions including threat protection, data encryption, security monitoring, and vulnerability assessment. Protect your business with our advanced security services."""
        keywords="cybersecurity, threat protection, data encryption, security monitoring, vulnerability assessment, compliance, SOC 2, ISO 27001, GDPR, HIPAA"""
        url="/cybersecurity"
      />
      "
      {/* Hero Section */}""
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900 flex items-center justify-center overflow-hidden">""
        <div className="absolute inset-0 opacity-20">""
          <div className="w-full h-full bg-gradient-to-br from-red-900/20 to-orange-900/20"></div>
        </div>"
        ""
        <div className="relative z-10 container mx-auto px-4 text-center">""
          <div className="max-w-4xl mx-auto">""
            <div className="flex justify-center mb-6">""
              <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center">""
                <ShieldCheckIcon className="w-10 h-10 text-white" />
              </div>"
            </div>""
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-red-200 to-orange-200 bg-clip-text text-transparent">
              Cybersecurity Solutions"
            </h1>""
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Protect Your Business with Advanced Security Solutions"
            </p>""
            <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
              Comprehensive cybersecurity services designed to protect your digital assets, 
              data, and infrastructure from evolving threats and ensure regulatory compliance.
            </p>"
            ""
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">"
              <Link ">"
                to="/contact" ""
                className="group bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-red-700 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
              >"
                Get Security Assessment""
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>"
              <Link ">"
                to="/demo" ""
                className="group border-2 border-red-400 text-red-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-400 hover:text-white transition-all duration-300 flex items-center gap-2"
              >"
                Schedule Demo""
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
"
      {/* Services Section */}""
      <section className="py-20 bg-slate-900">""
        <div className="container mx-auto px-4">""
          <div className="text-center mb-16">""
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Cybersecurity Services"
            </h2>""
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive security solutions tailored to your business needs
            </p>
          </div>"
          ""
          <div className="grid md:grid-cols-2 gap-8">"
            {services.map((service, index) => ("}"
              <div key={index} className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-red-500 transition-all duration-300 hover:transform hover:scale-105">""
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">""
                  <service.icon className="w-8 h-8 text-white" />"
                </div>""
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>""
                <p className="text-gray-300 mb-6">
                  {service.description}"
                </p>""
                <ul className="space-y-2">"
                  {service.features.map((feature, featureIndex) => ("}"
                    <li key={featureIndex} className="flex items-center text-gray-300">""
                      <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
"
      {/* Compliance Section */}""
      <section className="py-20 bg-gradient-to-r from-slate-900 to-red-900">""
        <div className="container mx-auto px-4">""
          <div className="max-w-4xl mx-auto text-center">""
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Compliance & Certifications"
            </h2>""
            <p className="text-xl text-gray-300 mb-12">
              We maintain the highest standards of security and compliance to protect your business
            </p>"
            ""
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">"
              {compliance.map((item, index) => ("}"
                <div key={index} className="bg-slate-800 p-4 rounded-lg border border-slate-600">""
                  <div className="text-white font-semibold mb-2">{item.name}</div>""
                  <div className="text-green-400 text-sm">{item.status}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
"
      {/* Why Choose Us Section */}""
      <section className="py-20 bg-slate-900">""
        <div className="container mx-auto px-4">""
          <div className="max-w-4xl mx-auto text-center">""
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Why Choose Our Cybersecurity Solutions?
            </h2>"
            ""
            <div className="grid md:grid-cols-3 gap-8 mb-12">""
              <div className="text-center">""
                <div className="text-4xl font-bold text-red-400 mb-2">24/7</div>""
                <div className="text-gray-300">Security Monitoring</div>"
              </div>""
              <div className="text-center">""
                <div className="text-4xl font-bold text-orange-400 mb-2">99.9%</div>""
                <div className="text-gray-300">Threat Detection Rate</div>"
              </div>""
              <div className="text-center">""
                <div className="text-4xl font-bold text-green-400 mb-2">15min</div>""
                <div className="text-gray-300">Average Response Time</div>
              </div>
            </div>
            "
            <Link ">"
              to="/contact" ""
              className="inline-flex items-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors""
            >""
              Get Your Security Assessment <ArrowRightIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
"
      {/* Contact Section */}""
      <section className="py-20 bg-gradient-to-r from-slate-900 to-red-900">""
        <div className="container mx-auto px-4">""
          <div className="max-w-4xl mx-auto text-center">""
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Secure Your Business?"
            </h2>""
            <p className="text-xl text-gray-300 mb-12">
              Let's discuss how our cybersecurity solutions can protect your digital assets
            </p>"
            ""
            <div className="grid md:grid-cols-3 gap-8 mb-12">""
              <div className="flex items-center justify-center gap-4 text-gray-300">""
                <PhoneIcon className="w-6 h-6 text-red-400" />
                <span>+1-302-464-0950</span>"
              </div>""
              <div className="flex items-center justify-center gap-4 text-gray-300">""
                <EnvelopeIcon className="w-6 h-6 text-red-400" />
                <span>kleber@ziontechgroup.com</span>"
              </div>""
              <div className="flex items-center justify-center gap-4 text-gray-300">""
                <MapPinIcon className="w-6 h-6 text-red-400" />
                <span>Middletown, DE</span>
              </div>
            </div>"
            ""
            <div className="flex flex-col sm:flex-row gap-4 justify-center">"
              <Link ">"
                to="/contact" ""
                className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-red-700 hover:to-orange-700 transition-all duration-300"
              >
                Get Security Consultation
              </Link>"
              <Link ">"
                to="/demo" ""
                className="border-2 border-red-400 text-red-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-400 hover:text-white transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>"
  )}""