import Link from 'next/link';
import Head from 'next/head';

export default function Team() {
  const contact = { phone: '+1 302 464 0950', email: 'kleber@ziontechgroup.com', address: '364 E Main St STE 1008 Middletown DE 19709', site: 'https://ziontechgroup.com'
  };

  const teamMembers = [
    { name: "Dr. Sarah Chen", position: "Chief Technology Officer", department: "AI & Machine Learning", bio: "Leading AI research and development with 15+ years of experience in machine learning and quantum computing.", expertise: ["AI Research", "Machine Learning", "Quantum Computing", "Data Science"], image: "👩‍💼"
    },
    { name: "Michael Rodriguez", position: "Head of Cloud Operations", department: "Cloud & DevOps", bio: "Expert in cloud architecture and DevOps practices, specializing in scalable infrastructure solutions.", expertise: ["Cloud Architecture", "DevOps", "Infrastructure", "Automation"], image: "👨‍💻"
    },
    { name: "Dr. Lisa Wang", position: "Cybersecurity Director", department: "Cybersecurity", bio: "Cybersecurity expert with extensive experience in threat detection and enterprise security solutions.", expertise: ["Cybersecurity", "Threat Detection", "Risk Assessment", "Compliance"], image: "👩‍🔬"
    },
    { name: "Alex Thompson", position: "Quantum Computing Lead", department: "Research & Development", bio: "Pioneering quantum computing research and developing practical applications for business use cases.", expertise: ["Quantum Computing", "Algorithm Development", "Research", "Innovation"], image: "👨‍🔬"
    },
    { name: "Maria Garcia", position: "Product Development Manager", department: "Micro SaaS", bio: "Leading the development of innovative micro SaaS products that solve real business problems.", expertise: ["Product Development", "SaaS Architecture", "User Experience", "Agile Development"], image: "👩‍💼"
    },
    { name: "James Wilson", position: "Digital Transformation Consultant", department: "IT Services", bio: "Helping organizations modernize their technology infrastructure and business processes.", expertise: ["Digital Transformation", "Process Optimization", "Change Management", "Technology Consulting"], image: "👨‍💼"
    }
  ];

  const departments = [
    { name: "AI & Machine Learning", count: 12, description: "AI researchers and ML engineers" },
    { name: "Cloud & DevOps", count: 8, description: "Cloud architects and DevOps specialists" },
    { name: "Cybersecurity", count: 10, description: "Security experts and analysts" },
    { name: "Quantum Computing", count: 6, description: "Quantum researchers and developers" },
    { name: "Product Development", count: 15, description: "Software engineers and designers" },
    { name: "IT Services", count: 9, description: "Consultants and support specialists" }
  ];

  return (
    <>
      <Head>
        <title>Team - Zion Tech Group | Meet Our Technology Experts</title>
        <meta name="description" content="Meet the talented team of technology experts at Zion Tech Group. AI researchers, cloud specialists, cybersecurity experts, and quantum computing pioneers." />
        <meta name="keywords" content="team, technology experts, AI researchers, cloud specialists, cybersecurity experts, quantum computing, software engineers" />
        <link rel="canonical" href={`${contact.site}/team`} />
        <meta property="og:title" content="Team - Zion Tech Group | Meet Our Technology Experts" />
        <meta property="og:description" content="Meet the talented team of technology experts at Zion Tech Group. AI researchers, cloud specialists, cybersecurity experts, and quantum computing pioneers." />
        <meta property="og:url" content={`${contact.site}/team`} />
        <meta property="og:type" content="website" />
      </Head>

      <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0b1220 0%, #1a1f3a 100%)', color: 'white' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '40px 20px' }}>
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <h1 style={{ 
              fontSize: '3rem', 
              fontWeight: 800, 
              marginBottom: 20, background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Our Team
            </h1>
            <p style={{ fontSize: '1.2rem', color: '#94a3b8', maxWidth: 600, margin: '0 auto' }}>
              Meet the talented technology experts who are driving innovation and delivering exceptional solutions for our clients.
            </p>
          </div>

          <div style={{ marginBottom: 80 }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: 40, textAlign: 'center' }}>
              Leadership Team
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: 30 }}>
              {teamMembers.map((member, index) => (
                <div key={index} style={{ background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: 12, padding: 30, border: '1px solid rgba(255, 255, 255, 0.1)', transition: 'transform 0.3s ease, box-shadow 0.3s ease', cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}>
                  <div style={{ textAlign: 'center', marginBottom: 20 }}>
                    <div style={{ fontSize: '4rem', marginBottom: 15 }}>{member.image}</div>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: 5 }}>
                      {member.name}
                    </h3>
                    <p style={{ color: '#3b82f6', 
                      fontSize: '1.1rem', 
                      fontWeight: 600, 
                      marginBottom: 5 
                    }}>
                      {member.position}
                    </p>
                    <p style={{ color: '#94a3b8', fontSize: '1rem' }}>
                      {member.department}
                    </p>
                  </div>
                  
                  <p style={{ color: '#94a3b8', 
                    marginBottom: 20, 
                    lineHeight: 1.6,
                    fontSize: '1rem'
                  }}>
                    {member.bio}
                  </p>
                  
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {member.expertise.map((skill, skillIndex) => (
                      <span key={skillIndex} style={{ background: 'rgba(59, 130, 246, 0.2)', color: '#3b82f6', padding: '4px 12px',
                        borderRadius: 20,
                        fontSize: '0.8rem',
                        fontWeight: 600
                      }}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginBottom: 80 }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: 40, textAlign: 'center' }}>
              Departments
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 25 }}>
              {departments.map((dept, index) => (
                <div key={index} style={{ background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: 12, padding: 25, border: '1px solid rgba(255, 255, 255, 0.1)', transition: 'transform 0.3s ease, box-shadow 0.3s ease', cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 15 }}>
                    <h3 style={{ fontSize: '1.3rem', fontWeight: 700 }}>
                      {dept.name}
                    </h3>
                    <div style={{ background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)', color: 'white', padding: '6px 12px',
                      borderRadius: 20,
                      fontSize: '0.9rem',
                      fontWeight: 600
                    }}>
                      {dept.count}
                    </div>
                  </div>
                  <p style={{ color: '#94a3b8', fontSize: '1rem' }}>
                    {dept.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div style={{ background: 'rgba(255, 255, 255, 0.05)',
            borderRadius: 12, padding: 40, border: '1px solid rgba(255, 255, 255, 0.1)',
            textAlign: 'center'
          }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: 20 }}>
              Join Our Team
            </h2>
            <p style={{ fontSize: '1.1rem', color: '#94a3b8', marginBottom: 30, maxWidth: 600, margin: '0 auto 30px' }}>
              We're always looking for talented individuals who share our passion for technology and innovation. 
              Join us in building the future of technology.
            </p>
            <div style={{ display: 'flex', gap: 20, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/careers" style={{ background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)', color: 'white', padding: '15px 30px',
                textDecoration: 'none',
                borderRadius: 8,
                fontSize: '1.1rem',
                fontWeight: 600, display: 'inline-block'
              }}>
                View Open Positions
              </Link>
              <Link href="/contact" style={{ background: 'transparent', color: 'white', padding: '15px 30px',
                textDecoration: 'none',
                borderRadius: 8,
                fontSize: '1.1rem',
                fontWeight: 600, display: 'inline-block', border: '2px solid rgba(255, 255, 255, 0.3)', transition: 'border-color 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#3b82f6';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
              }}>
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}