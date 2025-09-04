import Link from 'next/link';
import Head from 'next/head';

export default function Solutions() {
  const contact = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    site: 'https://ziontechgroup.com'
  };

  const solutionCategories = [
    {
      title: "AI & Machine Learning",
      description: "Transform your business with intelligent automation and data-driven insights",
      icon: "🤖",
      solutions: [
        "AI-Powered Business Intelligence",
        "Machine Learning Model Development",
        "Natural Language Processing",
        "Computer Vision Solutions",
        "Predictive Analytics",
        "Intelligent Automation"
      ]
    },
    {
      title: "Cloud & DevOps",
      description: "Accelerate development and scale your infrastructure with modern cloud practices",
      icon: "☁️",
      solutions: [
        "Cloud Migration & Strategy",
        "Container Orchestration",
        "CI/CD Pipeline Development",
        "Infrastructure as Code",
        "Cloud Security & Compliance",
        "Performance Optimization"
      ]
    },
    {
      title: "Cybersecurity",
      description: "Protect your organization with comprehensive security solutions and monitoring",
      icon: "🛡️",
      solutions: [
        "Security Assessment & Auditing",
        "Threat Detection & Response",
        "Identity & Access Management",
        "Data Protection & Encryption",
        "Compliance & Governance",
        "Security Training & Awareness"
      ]
    },
    {
      title: "Quantum Computing",
      description: "Explore the future of computing with quantum algorithms and applications",
      icon: "⚛️",
      solutions: [
        "Quantum Algorithm Development",
        "Quantum Machine Learning",
        "Cryptography & Security",
        "Optimization Problems",
        "Quantum Simulation",
        "Research & Development"
      ]
    },
    {
      title: "Micro SaaS",
      description: "Build and deploy specialized software solutions for specific business needs",
      icon: "📱",
      solutions: [
        "Custom SaaS Development",
        "API Integration & Management",
        "User Experience Design",
        "Scalable Architecture",
        "Multi-tenant Solutions",
        "Performance Monitoring"
      ]
    },
    {
      title: "Digital Transformation",
      description: "Modernize your business processes and technology infrastructure",
      icon: "🔄",
      solutions: [
        "Process Automation",
        "Legacy System Modernization",
        "Data Integration & Migration",
        "Workflow Optimization",
        "Change Management",
        "Technology Consulting"
      ]
    }
  ];

  const industries = [
    { name: "Healthcare", icon: "🏥", description: "HIPAA-compliant solutions for healthcare providers" },
    { name: "Finance", icon: "🏦", description: "Secure financial technology and compliance solutions" },
    { name: "Manufacturing", icon: "🏭", description: "IoT and automation for smart manufacturing" },
    { name: "Retail", icon: "🛒", description: "E-commerce and customer experience solutions" },
    { name: "Education", icon: "🎓", description: "Learning management and educational technology" },
    { name: "Government", icon: "🏛️", description: "Secure government and public sector solutions" }
  ];

  return (
    <>
      <Head>
        <title>Solutions - Zion Tech Group | Comprehensive Technology Solutions</title>
        <meta name="description" content="Explore Zion Tech Group's comprehensive technology solutions including AI, cloud computing, cybersecurity, quantum computing, and micro SaaS platforms." />
        <meta name="keywords" content="technology solutions, AI solutions, cloud solutions, cybersecurity solutions, quantum computing, micro SaaS, digital transformation" />
        <link rel="canonical" href={`${contact.site}/solutions`} />
        <meta property="og:title" content="Solutions - Zion Tech Group | Comprehensive Technology Solutions" />
        <meta property="og:description" content="Explore Zion Tech Group's comprehensive technology solutions including AI, cloud computing, cybersecurity, quantum computing, and micro SaaS platforms." />
        <meta property="og:url" content={`${contact.site}/solutions`} />
        <meta property="og:type" content="website" />
      </Head>

      <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0b1220 0%, #1a1f3a 100%)', color: 'white' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '40px 20px' }}>
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
            <p style={{ fontSize: '1.2rem', color: '#94a3b8', maxWidth: 600, margin: '0 auto' }}>
              Comprehensive technology solutions designed to accelerate your business growth and digital transformation journey.
            </p>
          </div>

          <div style={{ display: 'grid', gap: 40, marginBottom: 80 }}>
            {solutionCategories.map((category, index) => (
              <div key={index} style={{
                background: 'rgba(255, 255, 255, 0.05)',
                borderRadius: 12,
                padding: 40,
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 25 }}>
                  <div style={{ fontSize: '3rem' }}>{category.icon}</div>
                  <div>
                    <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: 10 }}>
                      {category.title}
                    </h2>
                    <p style={{ color: '#94a3b8', fontSize: '1.1rem' }}>
                      {category.description}
                    </p>
                  </div>
                </div>
                
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 15 }}>
                  {category.solutions.map((solution, solutionIndex) => (
                    <div key={solutionIndex} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 12,
                      padding: 15,
                      background: 'rgba(255, 255, 255, 0.03)',
                      borderRadius: 8,
                      border: '1px solid rgba(255, 255, 255, 0.05)'
                    }}>
                      <div style={{
                        width: 6,
                        height: 6,
                        background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                        borderRadius: '50%'
                      }} />
                      <span style={{ fontSize: '1rem' }}>{solution}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginBottom: 80 }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: 40, textAlign: 'center' }}>
              Industry Solutions
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 25 }}>
              {industries.map((industry, index) => (
                <div key={index} style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: 12,
                  padding: 30,
                  border: '1px solid rgba(255, 255, 255, 0.1)',
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
                  <div style={{ display: 'flex', alignItems: 'center', gap: 15, marginBottom: 15 }}>
                    <div style={{ fontSize: '2rem' }}>{industry.icon}</div>
                    <h3 style={{ fontSize: '1.4rem', fontWeight: 700 }}>
                      {industry.name}
                    </h3>
                  </div>
                  <p style={{ color: '#94a3b8', lineHeight: 1.5 }}>
                    {industry.description}
                  </p>
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
              Ready to Transform Your Business?
            </h2>
            <p style={{ fontSize: '1.1rem', color: '#94a3b8', marginBottom: 30, maxWidth: 600, margin: '0 auto 30px' }}>
              Let our experts help you identify the right technology solutions for your specific business needs and industry requirements.
            </p>
            <div style={{ display: 'flex', gap: 20, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact" style={{
                background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                color: 'white',
                padding: '15px 30px',
                textDecoration: 'none',
                borderRadius: 8,
                fontSize: '1.1rem',
                fontWeight: 600,
                display: 'inline-block'
              }}>
                Get Started
              </Link>
              <Link href="/request-quote" style={{
                background: 'transparent',
                color: 'white',
                padding: '15px 30px',
                textDecoration: 'none',
                borderRadius: 8,
                fontSize: '1.1rem',
                fontWeight: 600,
                display: 'inline-block',
                border: '2px solid rgba(255, 255, 255, 0.3)',
                transition: 'border-color 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#3b82f6';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
              }}>
                Request Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}