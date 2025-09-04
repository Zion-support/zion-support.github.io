import Head from 'next/head';
import Link from 'next/link';

export default function Solutions() {
  const contact = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    site: 'https://ziontechgroup.com'
  };

  const solutions = [
    {
      title: "AI-Powered Business Intelligence",
      description: "Transform your data into actionable insights with our advanced AI analytics platform.",
      features: ["Real-time analytics", "Predictive modeling", "Automated reporting", "Custom dashboards"],
      icon: "🧠"
    },
    {
      title: "Quantum Computing Solutions",
      description: "Leverage quantum computing power for complex optimization and simulation problems.",
      features: ["Quantum algorithms", "Optimization problems", "Cryptography", "Research collaboration"],
      icon: "⚛️"
    },
    {
      title: "Micro SaaS Platform",
      description: "Deploy specialized software solutions that scale with your business needs.",
      features: ["Rapid deployment", "Scalable architecture", "Custom integrations", "24/7 support"],
      icon: "🚀"
    },
    {
      title: "Cybersecurity Suite",
      description: "Comprehensive security solutions to protect your digital assets and infrastructure.",
      features: ["Threat detection", "Vulnerability assessment", "Incident response", "Compliance management"],
      icon: "🛡️"
    },
    {
      title: "Cloud DevOps Automation",
      description: "Streamline your development and deployment processes with automated cloud solutions.",
      features: ["CI/CD pipelines", "Infrastructure as code", "Monitoring & alerting", "Auto-scaling"],
      icon: "☁️"
    },
    {
      title: "Digital Transformation",
      description: "Modernize your business processes and systems for the digital age.",
      features: ["Process automation", "Legacy system migration", "Change management", "Training & support"],
      icon: "🔄"
    }
  ];

  const industries = [
    { name: "Healthcare", icon: "🏥" },
    { name: "Finance", icon: "💰" },
    { name: "Manufacturing", icon: "🏭" },
    { name: "Retail", icon: "🛒" },
    { name: "Education", icon: "🎓" },
    { name: "Government", icon: "🏛️" }
  ];

  return (
    <>
      <Head>
        <title>Solutions - Zion Tech Group | Comprehensive Technology Solutions</title>
        <meta name="description" content="Discover comprehensive technology solutions including AI, quantum computing, micro SaaS, cybersecurity, and digital transformation services." />
        <meta name="keywords" content="solutions, AI solutions, quantum computing, micro SaaS, cybersecurity, cloud DevOps, digital transformation" />
        <link rel="canonical" href={`${contact.site}/solutions`} />
        <meta property="og:title" content="Solutions - Zion Tech Group | Comprehensive Technology Solutions" />
        <meta property="og:description" content="Discover comprehensive technology solutions including AI, quantum computing, micro SaaS, cybersecurity, and digital transformation services." />
        <meta property="og:url" content={`${contact.site}/solutions`} />
        <meta property="og:type" content="website" />
      </Head>

      <div style={{ 
        minHeight: '100vh', 
        background: 'linear-gradient(135deg, #0b1220 0%, #1e293b 100%)',
        color: 'white',
        paddingTop: '80px'
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '40px 20px' }}>
          {/* Header */}
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
              Technology Solutions
            </h1>
            <p style={{ 
              fontSize: '1.2rem', 
              opacity: 0.8, 
              maxWidth: 600, 
              margin: '0 auto',
              lineHeight: 1.6
            }}>
              Comprehensive technology solutions designed to transform your business 
              and drive innovation across all industries.
            </p>
          </div>

          {/* Solutions Grid */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
            gap: 32,
            marginBottom: 80
          }}>
            {solutions.map((solution, index) => (
              <div key={index} style={{
                background: 'rgba(255, 255, 255, 0.05)',
                borderRadius: 16,
                padding: 32,
                border: '1px solid rgba(255, 255, 255, 0.1)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}>
                <div style={{ 
                  fontSize: '3rem', 
                  marginBottom: 20,
                  textAlign: 'center'
                }}>
                  {solution.icon}
                </div>
                
                <h3 style={{ 
                  fontSize: '1.5rem', 
                  fontWeight: 700, 
                  marginBottom: 16,
                  textAlign: 'center'
                }}>
                  {solution.title}
                </h3>
                
                <p style={{ 
                  opacity: 0.8, 
                  lineHeight: 1.6, 
                  marginBottom: 24,
                  fontSize: '1rem',
                  textAlign: 'center'
                }}>
                  {solution.description}
                </p>
                
                <ul style={{ listStyle: 'none', padding: 0, marginBottom: 24 }}>
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 12,
                      marginBottom: 8,
                      fontSize: '0.9rem'
                    }}>
                      <div style={{ color: '#10b981', fontSize: '1rem' }}>✓</div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div style={{ textAlign: 'center' }}>
                  <Link href="/contact" style={{
                    background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                    color: 'white',
                    padding: '10px 20px',
                    borderRadius: 8,
                    textDecoration: 'none',
                    fontWeight: 600,
                    fontSize: '0.9rem'
                  }}>
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Industries We Serve */}
          <div style={{ marginBottom: 80 }}>
            <h2 style={{ 
              fontSize: '2.5rem', 
              fontWeight: 700, 
              textAlign: 'center',
              marginBottom: 40
            }}>
              Industries We Serve
            </h2>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', 
              gap: 24
            }}>
              {industries.map((industry, index) => (
                <div key={index} style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: 12,
                  padding: 24,
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  textAlign: 'center',
                  transition: 'transform 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                }}>
                  <div style={{ 
                    fontSize: '2.5rem', 
                    marginBottom: 12 
                  }}>
                    {industry.icon}
                  </div>
                  <h4 style={{ 
                    fontSize: '1.1rem', 
                    fontWeight: 600 
                  }}>
                    {industry.name}
                  </h4>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.05)',
            borderRadius: 16,
            padding: 40,
            textAlign: 'center',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <h3 style={{ 
              fontSize: '1.8rem', 
              fontWeight: 700, 
              marginBottom: 16 
            }}>
              Ready to Transform Your Business?
            </h3>
            <p style={{ 
              opacity: 0.8, 
              marginBottom: 24,
              fontSize: '1.1rem',
              maxWidth: 600,
              margin: '0 auto 24px auto'
            }}>
              Let our experts help you choose the right solution for your business needs. 
              Get a free consultation and discover how we can drive your digital transformation.
            </p>
            <div style={{ 
              display: 'flex', 
              gap: 16, 
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              <Link href="/contact" style={{
                background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                color: 'white',
                padding: '12px 24px',
                borderRadius: 8,
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '1rem'
              }}>
                Get Free Consultation
              </Link>
              <Link href="/pricing" style={{
                background: 'rgba(255, 255, 255, 0.1)',
                color: 'white',
                padding: '12px 24px',
                borderRadius: 8,
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '1rem'
              }}>
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}