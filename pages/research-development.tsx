import Head from 'next/head';
import Link from 'next/link';

export default function ResearchDevelopment() {
  const contact = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    site: 'https://ziontechgroup.com'
  };

  const researchAreas = [
    {
      title: "Artificial Intelligence & Machine Learning",
      description: "Advancing AI capabilities through cutting-edge research in neural networks, deep learning, and cognitive computing.",
      focus: ["Neural Architecture Search", "Federated Learning", "Explainable AI", "Quantum Machine Learning"],
      icon: "🧠"
    },
    {
      title: "Quantum Computing",
      description: "Pioneering research in quantum algorithms, quantum error correction, and quantum-classical hybrid systems.",
      focus: ["Quantum Algorithms", "Error Correction", "Quantum Cryptography", "Quantum Simulation"],
      icon: "⚛️"
    },
    {
      title: "Edge Computing & IoT",
      description: "Developing next-generation edge computing solutions for real-time processing and IoT applications.",
      focus: ["Edge AI", "5G Integration", "IoT Security", "Distributed Computing"],
      icon: "🌐"
    },
    {
      title: "Cybersecurity & Privacy",
      description: "Researching advanced security protocols, privacy-preserving technologies, and threat detection systems.",
      focus: ["Zero Trust Architecture", "Homomorphic Encryption", "AI Security", "Blockchain Security"],
      icon: "🛡️"
    },
    {
      title: "Sustainable Technology",
      description: "Developing green computing solutions and sustainable technology practices for environmental responsibility.",
      focus: ["Green AI", "Energy-Efficient Computing", "Carbon Footprint Reduction", "Sustainable Data Centers"],
      icon: "🌱"
    },
    {
      title: "Human-Computer Interaction",
      description: "Exploring innovative interfaces and interaction paradigms for enhanced user experiences.",
      focus: ["AR/VR Interfaces", "Voice Computing", "Gesture Recognition", "Brain-Computer Interfaces"],
      icon: "👥"
    }
  ];

  const publications = [
    {
      title: "Quantum-Enhanced Machine Learning for Financial Modeling",
      authors: "Dr. Sarah Chen, Dr. Michael Rodriguez",
      journal: "Nature Quantum Information",
      year: "2024",
      impact: "High"
    },
    {
      title: "Federated Learning in Edge Computing Environments",
      authors: "Dr. Alex Kim, Dr. Lisa Wang",
      journal: "IEEE Transactions on Mobile Computing",
      year: "2024",
      impact: "High"
    },
    {
      title: "Sustainable AI: Reducing Carbon Footprint in Deep Learning",
      authors: "Dr. James Thompson, Dr. Maria Garcia",
      journal: "ACM Computing Surveys",
      year: "2024",
      impact: "Medium"
    }
  ];

  return (
    <>
      <Head>
        <title>Research & Development - Zion Tech Group | Innovation & Technology Research</title>
        <meta name="description" content="Explore Zion Tech Group's cutting-edge research and development in AI, quantum computing, cybersecurity, and sustainable technology solutions." />
        <meta name="keywords" content="research, development, R&D, AI research, quantum computing research, cybersecurity research, innovation, technology research" />
        <link rel="canonical" href={`${contact.site}/research-development`} />
        <meta property="og:title" content="Research & Development - Zion Tech Group | Innovation & Technology Research" />
        <meta property="og:description" content="Explore Zion Tech Group's cutting-edge research and development in AI, quantum computing, cybersecurity, and sustainable technology solutions." />
        <meta property="og:url" content={`${contact.site}/research-development`} />
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
              Research & Development
            </h1>
            <p style={{ 
              fontSize: '1.2rem', 
              opacity: 0.8, 
              maxWidth: 600, 
              margin: '0 auto',
              lineHeight: 1.6
            }}>
              Pioneering the future of technology through cutting-edge research and innovation. 
              Our R&D team is at the forefront of breakthrough discoveries.
            </p>
          </div>

          {/* Research Areas */}
          <div style={{ marginBottom: 80 }}>
            <h2 style={{ 
              fontSize: '2.5rem', 
              fontWeight: 700, 
              textAlign: 'center',
              marginBottom: 40
            }}>
              Research Areas
            </h2>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
              gap: 32
            }}>
              {researchAreas.map((area, index) => (
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
                    {area.icon}
                  </div>
                  
                  <h3 style={{ 
                    fontSize: '1.5rem', 
                    fontWeight: 700, 
                    marginBottom: 16,
                    textAlign: 'center'
                  }}>
                    {area.title}
                  </h3>
                  
                  <p style={{ 
                    opacity: 0.8, 
                    lineHeight: 1.6, 
                    marginBottom: 24,
                    fontSize: '1rem',
                    textAlign: 'center'
                  }}>
                    {area.description}
                  </p>
                  
                  <div style={{ marginBottom: 24 }}>
                    <h4 style={{ 
                      fontSize: '1.1rem', 
                      fontWeight: 600, 
                      marginBottom: 12,
                      color: '#93c5fd'
                    }}>
                      Research Focus:
                    </h4>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                      {area.focus.map((focus, focusIndex) => (
                        <li key={focusIndex} style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 8,
                          marginBottom: 6,
                          fontSize: '0.9rem'
                        }}>
                          <div style={{ color: '#10b981', fontSize: '0.8rem' }}>•</div>
                          <span>{focus}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
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
                      Collaborate
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Publications */}
          <div style={{ marginBottom: 80 }}>
            <h2 style={{ 
              fontSize: '2.5rem', 
              fontWeight: 700, 
              textAlign: 'center',
              marginBottom: 40
            }}>
              Recent Publications
            </h2>
            <div style={{ 
              display: 'grid', 
              gap: 24
            }}>
              {publications.map((pub, index) => (
                <div key={index} style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: 12,
                  padding: 24,
                  border: '1px solid rgba(255, 255, 255, 0.1)',
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
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'flex-start',
                    flexWrap: 'wrap',
                    gap: 16
                  }}>
                    <div style={{ flex: 1, minWidth: 300 }}>
                      <h3 style={{ 
                        fontSize: '1.3rem', 
                        fontWeight: 700, 
                        marginBottom: 8,
                        lineHeight: 1.3
                      }}>
                        {pub.title}
                      </h3>
                      <p style={{ 
                        opacity: 0.8, 
                        fontSize: '1rem',
                        marginBottom: 8
                      }}>
                        {pub.authors}
                      </p>
                      <p style={{ 
                        opacity: 0.6, 
                        fontSize: '0.9rem'
                      }}>
                        {pub.journal} • {pub.year}
                      </p>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{
                        background: pub.impact === 'High' ? 'linear-gradient(135deg, #10b981, #059669)' : 'rgba(255, 255, 255, 0.2)',
                        color: 'white',
                        padding: '4px 12px',
                        borderRadius: 20,
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        marginBottom: 8
                      }}>
                        {pub.impact} Impact
                      </div>
                      <a href="#" style={{
                        color: '#3b82f6',
                        textDecoration: 'none',
                        fontSize: '0.9rem',
                        fontWeight: 600
                      }}>
                        Read Paper →
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Research Collaboration */}
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
              Collaborate With Us
            </h3>
            <p style={{ 
              opacity: 0.8, 
              marginBottom: 24,
              fontSize: '1.1rem',
              maxWidth: 600,
              margin: '0 auto 24px auto'
            }}>
              We welcome collaboration with academic institutions, research organizations, 
              and industry partners to advance technology and drive innovation.
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
                Start Collaboration
              </Link>
              <a href="mailto:research@ziontechgroup.com" style={{
                background: 'rgba(255, 255, 255, 0.1)',
                color: 'white',
                padding: '12px 24px',
                borderRadius: 8,
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '1rem'
              }}>
                Email Research Team
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}