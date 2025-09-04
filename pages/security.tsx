import Head from 'next/head';

export default function Security() {
  const contact = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    site: 'https://ziontechgroup.com'
  }
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
    }
  ];

  const certifications = [
    { name: "SOC 2 Type II", description: "Security, availability, and confidentiality controls" },
    { name: "ISO 27001", description: "Information security management system" },
    { name: "HIPAA Compliant", description: "Healthcare data protection standards" },
    { name: "GDPR Compliant", description: "European data protection regulations" },
    { name: "PCI DSS", description: "Payment card industry security standards" },
    { name: "NIST Framework", description: "Cybersecurity framework compliance" }
  ];

  const securityFeatures = [
    "24/7 Security Monitoring",
    "Automated Threat Detection",
    "Incident Response Team",
    "Regular Security Updates",
    "Employee Security Training",
    "Vulnerability Management",
    "Data Backup & Recovery",
    "Business Continuity Planning"
  ];

  return (
    <main style={{ padding: 24 }}>
      <Head>
        <title>Security - Zion Tech Group</title>
      </Head>

      <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0b1220 0%, #1a1f3a 100%)', color: 'white' }}>
        <div style={{ maxWidth: 1200, margin: '40px 20px', padding: '0 20px' }}>
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <h1 style={{ 
              fontSize: '3rem', 
              fontWeight: 800, 
              marginBottom: 20,
              background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Security & Compliance
            </h1>
            <p style={{ fontSize: '1.2rem', color: '#94a3b8', maxWidth: 600, margin: '0 auto' }}>
              Your data security is our top priority. We implement industry-leading security measures and maintain strict compliance with global standards.
            </p>
          </div>
        </div>

          <div style={{ marginBottom: 80 }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: 40, textAlign: 'center' }}>
              Security Measures
            </h2>
            <div style={{ display: 'grid', gap: 30 }}>
              {securityMeasures.map((measure, index) => (
                <div key={index} style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: 12,
                  padding: 30,
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 20 }}>
                    <div style={{ fontSize: '3rem' }}>{measure.icon}</div>
                    <div>
                      <h3 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: 10 }}>
                        {measure.title}
                      </h3>
                      <p style={{ color: '#94a3b8', fontSize: '1.1rem' }}>
                        {measure.description}
                      </p>
                    </div>
                  </div>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 15 }}>
                    {measure.details.map((detail, detailIndex) => (
                      <div key={detailIndex} style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 12,
                        padding: 15,
                        background: 'rgba(239, 68, 68, 0.1)',
                        borderRadius: 8,
                        border: '1px solid rgba(239, 68, 68, 0.2)'
                      }}>
                        <div style={{
                          width: 8,
                          height: 8,
                          background: '#ef4444',
                          borderRadius: '50%'
                        }} />
                        <span style={{ fontSize: '1rem' }}>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

          <div style={{ marginBottom: 80 }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: 40, textAlign: 'center' }}>
              Compliance Certifications
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 25 }}>
              {certifications.map((cert, index) => (
                <div key={index} style={{ 
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: 12,
                  padding: 25,
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  textAlign: 'center',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}>
                  <div style={{
                    background: 'rgba(34, 197, 94, 0.2)',
                    color: '#22c55e',
                    padding: '8px 16px',
                    borderRadius: 20,
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    marginBottom: 15,
                    display: 'inline-block'
                  }}>
                    {cert.name}
                  </div>
                  <p style={{ color: '#94a3b8', fontSize: '1rem' }}>
                    {cert.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

          <div style={{ marginBottom: 80 }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: 40, textAlign: 'center' }}>
              Security Features
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 20 }}>
              {securityFeatures.map((feature, index) => (
                <div key={index} style={{ 
                  display: 'flex',
                  alignItems: 'center', 
                  gap: 15,
                  padding: 20,
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: 8,
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}>
                  <div style={{
                    width: 8,
                    height: 8,
                    background: '#22c55e',
                    borderRadius: '50%'
                  }} />
                  <span style={{ fontSize: '1rem' }}>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ 
            background: 'rgba(255, 255, 255, 0.05)',
            borderRadius: 12,
            padding: 40,
            border: '1px solid rgba(255, 255, 255, 0.1)',
            textAlign: 'center'
          }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: 20 }}>
              Report Security Issues
            </h2>
            <p style={{ 
              fontSize: '1.1rem', 
              color: '#94a3b8', 
              marginBottom: 30, 
              maxWidth: 600, 
              margin: '0 auto 30px' 
            }}>
              If you discover a security vulnerability or have concerns about our security practices, please report them to our security team immediately.
            </p>
            <div style={{ display: 'flex', gap: 20, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href={`mailto:security@ziontechgroup.com`} style={{
                background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                color: 'white',
                padding: '15px 30px',
                textDecoration: 'none',
                borderRadius: 8,
                fontSize: '1.1rem',
                fontWeight: 600,
                display: 'inline-block'
              }}>
                Report Security Issue
              </a>
              <Link href="/contact" style={{
                background: 'transparent',
                color: '#ef4444',
                padding: '15px 30px',
                textDecoration: 'none',
                borderRadius: 8,
                fontSize: '1.1rem',
                fontWeight: 600, 
                display: 'inline-block', 
                border: '2px solid #ef4444', 
                transition: 'background-color 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(239, 68, 68, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
              }}>
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
        </div>
      </div>
    </>
  );
}