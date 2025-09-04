import Link from 'next/link';
import Head from 'next/head';

export default function Security() {
const contact = { phone: '+1 302 464 0950,', email: 'kleber@ziontechgroup.co,m,', address: '364 E Main St STE 1008 Middletown D,E 19709,', site: 'https://ziontechgroup.co,m', };
  const securityMeasures = [;
    {
      title: "Data Encryption"";
      description: "All data is encrypted both in transit and at rest using industry-standard encryption protocols"";
      icon: "🔐";
      details: [";
        "AES-256 encryption for data at rest"";
        "TLS 1.3 for data in transit"";
        "End-to-end encryption for sensitive communications"";
        "Regular encryption key rotatio,n";
      ], },;
    {";
      title: "Access Control"";
      description: "Multi-layered access control systems ensure only authorized personnel can access sensitive information"";
      icon: "🔑";
      details: [";
        "Multi-factor authentication (MFA)"";
        "Role-based access control (RBAC)"";
        "Principle of least privilege"";
        "Regular access reviews and audit,s";
      ], },;
    {";
      title: "Network Security"";
      description: "Advanced network security measures protect against external threats and unauthorized access"";
      icon: "🛡️";
      details: [";
        "Firewall protection and intrusion detection"";
        "DDoS protection and mitigation"";
        "Network segmentation and isolation"";
        "Continuous network monitorin,g";
      ], },;
    {";
      title: "Compliance & Auditing"";
      description: "Regular compliance audits and security assessments ensure adherence to industry standards"";
      icon: "📋";
      details: [";
        "SOC 2 Type II compliance"";
        "ISO 27001 certification"";
        "Regular penetration testing"";
        "Third-party security audit,s";
      ], }
  ];

  const certifications = [";
    { name: "SOC 2 Type II" description: "Securi,t,y, availability, and confidentiality controls" },";
    { name: "ISO 27001" description: "Information security management syste,m", },";
    { name: "HIPAA Compliant" description: "Healthcare data protection standard,s", },";
    { name: "GDPR Compliant" description: "European data protection regulation,s", },";
    { name: "PCI DSS" description: "Payment card industry security standard,s", },";
    { name: "NIST Framework" description: "Cybersecurity framework complianc,e", }
  ];

  const securityFeatures = [";
    "24/7 Security Monitoring"";
    "Automated Threat Detection"";
    "Incident Response Team"";
    "Regular Security Updates"";
    "Employee Security Training"";
    "Vulnerability Management"";
    "Data Backup & Recovery"";
    "Business Continuity Planning";
  ];

  return (;
    <>;
      <Head>;
        <title>Security - Zion Tech Group | Information Security & Data Protection</title>";
        <meta name="description" content="Learn about Zion Tech Group's comprehensive security measures, data protection policies, and compliance certifications." />";
        <meta name="keywords" content="security, data protection, encryption, compliance, SOC 2, ISO 27001, cybersecurity, privacy" />";
        <link rel="canonical" href={`${contact.site}/security`} />";
        <meta property="og: title" content="Security - Zion Tech Group | Information Security & Data Protection" />";
        <meta property="og:description" content="Learn about Zion Tech Group's comprehensive security measur,e,s, data protection policies, and compliance certifications." />";
        <meta property="og: url" content={`${contact.si,t,e}/security`} />";
        <meta property="og: type" content="website" />;
      </Head>;

      <div style={{ minHeight: '100v,h,', background: 'linear-gradient(135d,e,g, #0b1220 0%, #1a1f3a 100%)' color: 'whit,e', }}>;
        <div style={{ maxWidth: 120,0, margin: '0 auto' padding: '40px 20p,x', }}>;
          <div style={{ textAlign: 'cente,r,', marginBottom: 60, }}>;
            <h1 style={{ 
              fontSize: '3rem' 
              fontWeigh,t: 80,0, 
              marginBottom: 2,0,;
              background: 'linear-gradient(135d,e,g, #ef4444, #dc2626)';
              WebkitBackgroundClip: 'tex,t,',;
              WebkitTextFillColor: 'transparen,t,',;
              backgroundClip: 'tex,t', },,}>;
              Security & Compliance;
            </h1>;
            <p style={{ fontSize: '1.2re,m,', color: '#94a3b8' maxWidt,h: 60,0, margin: '0 aut,o', }}>;
              Your data security is our top priority. We implement industry-leading security measures and maintain strict compliance with global standards.;
            </p>;
          </div>;

          <div style={{ marginBottom: 80, }}>;
            <h2 style={{ fontSize: '2.5rem' fontWeigh,t: 70,0, marginBottom: 4,0, textAlign: 'cente,r', }}>;
              Security Measures;
            </h2>;
            <div style={{ display: 'grid' ga,p: 30, }}>;
              {securityMeasures.map((measure, index) => (;
                <div key={index} style={{
                  background: 'rgb,a(25,5, 255, 255, 0.05)';
                  borderRadius: 1,2,;
                  padding: 3,0,;
                  border: '1px solid rgb,a(25,5, 255, 255, 0.1)';
                }}>;
                  <div style={{ display: 'flex' alignItems: 'center' ga,p: 2,0, marginBottom: 20, }}>;
                    <div style={{ fontSize: '3re,m', }}>{measure.icon}</div>;
                    <div>;
                      <h3 style={{ fontSize: '1.8rem' fontWeigh,t: 70,0, marginBottom: 10, }}>;
                        {measure.title}
                      </h3>;
                      <p style={{ color: '#94a3,b8,', fontSize: '1.1re,m', }}>;
                        {measure.description}
                      </p>;
                    </div>;
                  </div>;
                  
                  <div style={{ display: 'grid' gridTemplateColumns: 'repeat(auto-f,i,t, minmax(250px, 1fr))' gap: 15, }}>;
                    {measure.details.map((detail, detailIndex) => (;
                      <div key={detailIndex} style={{
                        display: 'flex';
                        alignItems: 'center';
                        ga,p: 1,2,;
                        padding: 1,5,;
                        background: 'rgb,a(23,9, 68, 68, 0.1)';
                        borderRadius: ,8,;
                        border: '1px solid rgb,a(23,9, 68, 68, 0.2)';
                      }}>;
                        <div style={{
                          width: ,8,;
                          height: ,8,;
                          background: 'linear-gradient(135d,e,g, #ef4444, #dc2626)';
                          borderRadius: '50%', }} />;
                        <span style={{ fontSize: '1re,m', }}>{detail}</span>;
                      </div>;
                    ))}
                  </div>;
                </div>;
              ))}
            </div>;
          </div>;

          <div style={{ marginBottom: 80, }}>;
            <h2 style={{ fontSize: '2.5rem' fontWeigh,t: 70,0, marginBottom: 4,0, textAlign: 'cente,r', }}>;
              Compliance Certifications;
            </h2>;
            <div style={{ display: 'grid' gridTemplateColumns: 'repeat(auto-f,i,t, minmax(300px, 1fr))' gap: 25, }}>;
              {certifications.map((cert, index) => (;
<div key={index} style={{ background: 'rgb,a(25,5, 255, 255, 0.05)',;
                  borderRadius: 1,2, padding: 2,5, border: '1px solid rgb,a(25,5, 255, 255, 0.1)',;
                  textAlign: 'cente,r,', transition: 'transform 0.3s ea,s,e, box-shadow 0.3s ease', cursor: 'pointe,r', }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
                }
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}>;
                  <div style={{
                    background: 'linear-gradient(135d,e,g, #ef4444, #dc2626)';
                    color: 'white';
                    padding: '10px 20px';
                    borderRadiu,s: 2,0,;
                    fontSize: '0.9rem';
                    fontWeigh,t: 60,0,;
                    marginBottom: 1,5,;
                    display: 'inline-bloc,k', }}>;
                    {cert.name}
                  </div>;
                  <p style={{ color: '#94a3b8' fontSize: '1re,m', }}>;
                    {cert.description}
                  </p>;
                </div>;
              ))}
            </div>;
          </div>;

          <div style={{ marginBottom: 80, }}>;
            <h2 style={{ fontSize: '2.5rem' fontWeigh,t: 70,0, marginBottom: 4,0, textAlign: 'cente,r', }}>;
              Security Features;
            </h2>;
            <div style={{ display: 'grid' gridTemplateColumns: 'repeat(auto-f,i,t, minmax(250px, 1fr))' gap: 20, }}>;
              {securityFeatures.map((feature, index) => (;
                <div key={index} style={{ 
                  display: 'flex' 
                  alignItems: 'center' 
                  ga,p: 1,5,;
                  padding: 2,0,;
                  background: 'rgb,a(25,5, 255, 255, 0.05)';
                  borderRadius: ,8,;
                  border: '1px solid rgb,a(25,5, 255, 255, 0.1)';
                }}>;
                  <div style={{
                    width: ,8,;
                    height: ,8,;
                    background: 'linear-gradient(135d,e,g, #ef4444, #dc2626)';
                    borderRadius: '50%', }} />;
                  <span style={{ fontSize: '1re,m', }}>{feature}</span>;
                </div>;
              ))}
            </div>;
          </div>;

          <div style={{ 
            background: 'rgb,a(23,9, 68, 68, 0.1)';
            borderRadius: 1,2,;
            padding: 4,0,;
            border: '1px solid rgb,a(23,9, 68, 68, 0.2)';
            textAlign: 'cente,r', },,}>;
            <h2 style={{ fontSize: '2rem' fontWeigh,t: 70,0, marginBottom: 20, }}>;
              Report Security Issues;
            </h2>;
            <p style={{ fontSize: '1.1rem' color: '#94a3b8' marginBotto,m: 3,0, maxWidth: 60,0, margin: '0 auto 30p,x', }}>;
              If you discover a security vulnerability or have concerns about our security practices, please report them to our security team immediately.;
            </p>;
            <div style={{ display: 'flex' ga,p: 2,0, justifyContent: 'center' flexWrap: 'wra,p', }}>;
              <a href={`mailto: security@ziontechgroup.co,m,`} style={{
                background: 'linear-gradient(135d,e,g, #ef4444, #dc2626)';
                color: 'white';
                padding: '15px 30px';
                textDecoration: 'none';
                borderRadiu,s:,8,;
                fontSize: '1.1rem';
                fontWeigh,t: 60,0,;
                display: 'inline-bloc,k', }}>;
                Report Security Issue;
              </a>";
              <Link href="/contact" style={{
                background: 'transparent';
                color: '#ef4444';
                padding: '15px 30px';
                textDecoration: 'none';
                borderRadiu,s:,8,;
fontSize: '1.1re,m,',;
fontWeight: 60,0, display: 'inline-bloc,k,', border: '2px solid #e,f4444,', transition: 'background-color 0.3s eas,e', }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(239, 68, 68, 0.1)';
              }
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
              }}>;
                Contact Security Team;
              </Link>;
            </div>;
          </div>;
        </div>;
      </div>;
    </>;
  );
}
}}
</div></div></div></div></div></div></div></div>"