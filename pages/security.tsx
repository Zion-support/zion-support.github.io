import Link from 'next/link';
import Head from 'next/head';

export default function Security() {
  const contact = { 
    phone: '+1 302 464 0950', 
    email: 'kleber@ziontechgroup.com', 
    address: '364 E Main St STE 1008 Middletown DE 19709', 
    site: 'https://ziontechgroup.com' 
  };

  const securityMeasures = [
    {
      title: "Data Encryption",
      description: "All data is encrypted both in transit and at rest using industry-standard encryption protocols",
      icon: "🔐",
      details: [
        "AES-256 encryption for data at rest",
        "TLS 1.3 for data in transit",
        "End-to-end encryption for sensitive communications",
        "Regular encryption key rotation"
      ]
    },
    {
      title: "Access Control",
      description: "Multi-layered access control systems ensure only authorized personnel can access sensitive information",
      icon: "🔑",
      details: [
        "Multi-factor authentication (MFA)",
        "Role-based access control (RBAC)",
        "Principle of least privilege",
        "Regular access reviews and audits"
      ]
    },
    {
      title: "Network Security",
      description: "Advanced network security measures protect against external threats and unauthorized access",
      icon: "🛡️",
      details: [
        "Firewall protection and intrusion detection",
        "DDoS protection and mitigation",
        "Network segmentation and isolation",
        "Continuous network monitoring"
      ]
    },
    {
      title: "Compliance & Auditing",
      description: "Regular compliance audits and security assessments ensure adherence to industry standards",
      icon: "📋",
      details: [
        "SOC 2 Type II compliance",
        "ISO 27001 certification",
        "Regular penetration testing",
        "Third-party security audits"
      ]
    },
    {
      title: "Incident Response",
      description: "Comprehensive incident response procedures ensure rapid detection and mitigation of security threats",
      icon: "🚨",
      details: [
        "24/7 security monitoring",
        "Automated threat detection",
        "Rapid incident response team",
        "Post-incident analysis and improvement"
      ]
    },
    {
      title: "Employee Training",
      description: "Regular security awareness training ensures all team members understand and follow security best practices",
      icon: "👥",
      details: [
        "Security awareness training programs",
        "Phishing simulation exercises",
        "Regular security updates and briefings",
        "Security policy compliance monitoring"
      ]
    }
  ];

  return (
    <>
      <Head>
        <title>Security - Zion Tech Group | Enterprise-Grade Security Solutions</title>
        <meta name="description" content="Learn about Zion Tech Group's comprehensive security measures, compliance standards, and data protection practices. Your data security is our priority." />
        <meta name="keywords" content="security, data protection, encryption, compliance, SOC 2, ISO 27001, cybersecurity, privacy" />
        <link rel="canonical" href={`${contact.site}/security`} />
        <meta property="og:title" content="Security - Zion Tech Group | Enterprise-Grade Security Solutions" />
        <meta property="og:description" content="Learn about Zion Tech Group's comprehensive security measures and data protection practices." />
        <meta property="og:url" content={`${contact.site}/security`} />
        <meta property="og:type" content="website" />
      </Head>

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Security & Compliance
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Enterprise-grade security measures and compliance standards to protect your data and ensure regulatory adherence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Learn More
                </Link>
                <Link 
                  href="/services"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors"
                >
                  View Security Services
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Security Measures */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Security Measures
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We implement multiple layers of security to protect your data and ensure the highest standards of compliance.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {securityMeasures.map((measure, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                  <div className="text-center mb-6">
                    <div className="text-4xl mb-4">{measure.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{measure.title}</h3>
                    <p className="text-gray-600">{measure.description}</p>
                  </div>
                  
                  <div className="space-y-3">
                    {measure.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center text-sm text-gray-700">
                        <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                        {detail}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Section */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Compliance & Certifications
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We maintain the highest standards of compliance and hold industry-recognized certifications.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-3xl mb-4">🏆</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">SOC 2 Type II</h3>
                <p className="text-gray-600 text-sm">Audited security controls and processes</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-3xl mb-4">🔒</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">ISO 27001</h3>
                <p className="text-gray-600 text-sm">Information security management system</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-3xl mb-4">🛡️</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">GDPR Compliant</h3>
                <p className="text-gray-600 text-sm">European data protection standards</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-3xl mb-4">✅</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">CCPA Compliant</h3>
                <p className="text-gray-600 text-sm">California consumer privacy act</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-red-600 py-20">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Questions About Our Security?
            </h2>
            <p className="text-xl text-white mb-8 opacity-90">
              Contact our security team to learn more about our security measures and compliance standards.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Contact Security Team
              </Link>
              <a 
                href={`tel:${contact.phone}`}
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors"
              >
                Call {contact.phone}
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}