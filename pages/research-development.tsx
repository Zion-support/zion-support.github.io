import Link from 'next/link';
import Head from 'next/head';

export default function ResearchDevelopment() {
  const contact = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    site: 'https://ziontechgroup.com'
  };

  const researchAreas = [
    {
      title: "Quantum Computing",
      description: "Advancing quantum algorithms and applications for real-world business problems",
      icon: "⚛️",
      projects: [
        "Quantum Machine Learning Algorithms",
        "Quantum Cryptography Systems",
        "Quantum Optimization Solutions",
        "Quantum Error Correction Methods"
      ],
      status: "Active"
    },
    {
      title: "Artificial Intelligence",
      description: "Developing next-generation AI systems and machine learning frameworks",
      icon: "🤖",
      projects: [
        "Advanced Neural Network Architectures",
        "Explainable AI Systems",
        "Federated Learning Platforms",
        "AI Ethics and Governance"
      ],
      status: "Active"
    },
    {
      title: "Edge Computing",
      description: "Optimizing computing resources at the network edge for improved performance",
      icon: "🌐",
      projects: [
        "Edge AI Processing",
        "Distributed Computing Frameworks",
        "IoT Integration Solutions",
        "Real-time Data Processing"
      ],
      status: "Active"
    },
    {
      title: "Cybersecurity",
      description: "Developing advanced security protocols and threat detection systems",
      icon: "🛡️",
      projects: [
        "Zero-Trust Security Models",
        "AI-Powered Threat Detection",
        "Blockchain Security Solutions",
        "Privacy-Preserving Technologies"
      ],
      status: "Active"
    },
    {
      title: "Green Technology",
      description: "Creating sustainable and energy-efficient computing solutions",
      icon: "🌱",
      projects: [
        "Energy-Efficient Algorithms",
        "Sustainable Data Centers",
        "Carbon-Neutral Computing",
        "Renewable Energy Integration"
      ],
      status: "Active"
    },
    {
      title: "Human-Computer Interaction",
      description: "Improving interfaces between humans and technology systems",
      icon: "👥",
      projects: [
        "Natural Language Interfaces",
        "Augmented Reality Systems",
        "Brain-Computer Interfaces",
        "Accessibility Technologies"
      ],
      status: "Research"
    }
  ];

  const publications = [
    {
      title: "Quantum Machine Learning for Business Optimization",
      authors: "Dr. Sarah Chen, Dr. Michael Rodriguez",
      journal: "Nature Quantum Information",
      year: "2024",
      type: "Journal Article"
    },
    {
      title: "Edge Computing Architecture for Real-Time AI Processing",
      authors: "Dr. Alex Thompson, Dr. Lisa Wang",
      journal: "IEEE Computer Society",
      year: "2024",
      type: "Conference Paper"
    },
    {
      title: "Zero-Trust Security Framework for Enterprise Networks",
      authors: "Dr. James Wilson, Dr. Maria Garcia",
      journal: "ACM Computing Surveys",
      year: "2024",
      type: "Journal Article"
    },
    {
      title: "Sustainable Computing: Energy-Efficient Algorithms for Data Centers",
      authors: "Dr. Robert Kim, Dr. Emily Davis",
      journal: "Green Computing Conference",
      year: "2024",
      type: "Conference Paper"
    }
  ];

  return (
    <>
      <Head>
        <title>Research & Development - Zion Tech Group | Innovation & Technology Research</title>
        <meta name="description" content="Explore Zion Tech Group's cutting-edge research and development initiatives in quantum computing, AI, cybersecurity, and emerging technologies." />
        <meta name="keywords" content="research and development, quantum computing research, AI research, cybersecurity research, technology innovation, R&D" />
        <link rel="canonical" href={`${contact.site}/research-development`} />
        <meta property="og:title" content="Research & Development - Zion Tech Group | Innovation & Technology Research" />
        <meta property="og:description" content="Explore Zion Tech Group's cutting-edge research and development initiatives in quantum computing, AI, cybersecurity, and emerging technologies." />
        <meta property="og:url" content={`${contact.site}/research-development`} />
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
              Research & Development
            </h1>
            <p style={{ fontSize: '1.2rem', color: '#94a3b8', maxWidth: 600, margin: '0 auto' }}>
              Pioneering the future of technology through cutting-edge research and innovative development initiatives.
            </p>
          </div>

          <div style={{ marginBottom: 80 }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: 40, textAlign: 'center' }}>
              Research Areas
            </h2>
            <div style={{ display: 'grid', gap: 30 }}>
              {researchAreas.map((area, index) => (
                <div key={index} style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: 12,
                  padding: 30,
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 20 }}>
                    <div style={{ fontSize: '2.5rem' }}>{area.icon}</div>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 15, marginBottom: 10 }}>
                        <h3 style={{ fontSize: '1.8rem', fontWeight: 700 }}>
                          {area.title}
                        </h3>
                        <span style={{
                          background: area.status === 'Active' ? 'linear-gradient(135deg, #10b981, #059669)' : 'linear-gradient(135deg, #f59e0b, #d97706)',
                          color: 'white',
                          padding: '4px 12px',
                          borderRadius: 20,
                          fontSize: '0.8rem',
                          fontWeight: 600
                        }}>
                          {area.status}
                        </span>
                      </div>
                      <p style={{ color: '#94a3b8', fontSize: '1.1rem' }}>
                        {area.description}
                      </p>
                    </div>
                  </div>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 15 }}>
                    {area.projects.map((project, projectIndex) => (
                      <div key={projectIndex} style={{
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
                        <span style={{ fontSize: '1rem' }}>{project}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginBottom: 80 }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: 40, textAlign: 'center' }}>
              Recent Publications
            </h2>
            <div style={{ display: 'grid', gap: 25 }}>
              {publications.map((pub, index) => (
                <div key={index} style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: 12,
                  padding: 25,
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 15 }}>
                    <h3 style={{ fontSize: '1.3rem', fontWeight: 700, flex: 1, marginRight: 20 }}>
                      {pub.title}
                    </h3>
                    <span style={{
                      background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                      color: 'white',
                      padding: '6px 12px',
                      borderRadius: 20,
                      fontSize: '0.8rem',
                      fontWeight: 600
                    }}>
                      {pub.type}
                    </span>
                  </div>
                  <p style={{ color: '#94a3b8', marginBottom: 10, fontSize: '1rem' }}>
                    {pub.authors}
                  </p>
                  <p style={{ color: '#64748b', fontSize: '0.9rem' }}>
                    {pub.journal} • {pub.year}
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
              Join Our Research Team
            </h2>
            <p style={{ fontSize: '1.1rem', color: '#94a3b8', marginBottom: 30, maxWidth: 600, margin: '0 auto 30px' }}>
              Be part of groundbreaking research that shapes the future of technology. We're looking for passionate researchers and innovators.
            </p>
            <div style={{ display: 'flex', gap: 20, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/careers" style={{
                background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                color: 'white',
                padding: '15px 30px',
                textDecoration: 'none',
                borderRadius: 8,
                fontSize: '1.1rem',
                fontWeight: 600,
                display: 'inline-block'
              }}>
                View Research Positions
              </Link>
              <Link href="/contact" style={{
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
                Collaborate With Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}