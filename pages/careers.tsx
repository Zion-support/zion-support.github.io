import Head from 'next/head';
import Link from 'next/link';

export default function Careers() {
  const contact = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    site: 'https://ziontechgroup.com'
  };

  const jobOpenings = [
    {
      id: 1,
      title: "Senior AI Engineer",
      department: "AI & Machine Learning",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      experience: "5+ years",
      description: "Lead the development of cutting-edge AI solutions and machine learning models for our clients."
    },
    {
      id: 2,
      title: "Quantum Computing Specialist",
      department: "Quantum Computing",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      experience: "3+ years",
      description: "Work on groundbreaking quantum computing projects and help shape the future of computing."
    },
    {
      id: 3,
      title: "DevOps Engineer",
      department: "Cloud & Infrastructure",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      experience: "4+ years",
      description: "Design and implement scalable cloud infrastructure solutions using modern DevOps practices."
    },
    {
      id: 4,
      title: "Cybersecurity Analyst",
      department: "Security",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      experience: "3+ years",
      description: "Protect our clients' digital assets and develop comprehensive security strategies."
    },
    {
      id: 5,
      title: "Micro SaaS Product Manager",
      department: "Product Development",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      experience: "4+ years",
      description: "Lead the development and launch of innovative micro SaaS products."
    },
    {
      id: 6,
      title: "Full Stack Developer",
      department: "Software Development",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      experience: "3+ years",
      description: "Build scalable web applications using modern technologies and frameworks."
    }
  ];

  const benefits = [
    "Competitive salary and equity options",
    "Comprehensive health, dental, and vision insurance",
    "Flexible remote work options",
    "Professional development budget",
    "Cutting-edge technology and tools",
    "Collaborative and innovative work environment",
    "Unlimited PTO policy",
    "401(k) with company matching"
  ];

  return (
    <>
      <Head>
        <title>Careers - Zion Tech Group | Join Our Innovative Team</title>
        <meta name="description" content="Join Zion Tech Group and be part of the future of technology. Explore career opportunities in AI, quantum computing, cybersecurity, and more." />
        <meta name="keywords" content="careers, jobs, AI engineer, quantum computing, DevOps, cybersecurity, micro SaaS, technology careers" />
        <link rel="canonical" href={`${contact.site}/careers`} />
        <meta property="og:title" content="Careers - Zion Tech Group | Join Our Innovative Team" />
        <meta property="og:description" content="Join Zion Tech Group and be part of the future of technology. Explore career opportunities in AI, quantum computing, cybersecurity, and more." />
        <meta property="og:url" content={`${contact.site}/careers`} />
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
              Join Our Team
            </h1>
            <p style={{ 
              fontSize: '1.2rem', 
              opacity: 0.8, 
              maxWidth: 600, 
              margin: '0 auto',
              lineHeight: 1.6
            }}>
              Be part of the future of technology. We're building innovative solutions that will 
              transform industries and create new possibilities.
            </p>
          </div>

          {/* Why Work With Us */}
          <div style={{ marginBottom: 80 }}>
            <h2 style={{ 
              fontSize: '2.5rem', 
              fontWeight: 700, 
              textAlign: 'center',
              marginBottom: 40
            }}>
              Why Choose Zion Tech Group?
            </h2>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
              gap: 32
            }}>
              <div style={{
                background: 'rgba(255, 255, 255, 0.05)',
                borderRadius: 16,
                padding: 32,
                border: '1px solid rgba(255, 255, 255, 0.1)',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '3rem', marginBottom: 16 }}>🚀</div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: 16 }}>
                  Innovation First
                </h3>
                <p style={{ opacity: 0.8, lineHeight: 1.6 }}>
                  Work on cutting-edge projects in AI, quantum computing, and emerging technologies.
                </p>
              </div>
              
              <div style={{
                background: 'rgba(255, 255, 255, 0.05)',
                borderRadius: 16,
                padding: 32,
                border: '1px solid rgba(255, 255, 255, 0.1)',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '3rem', marginBottom: 16 }}>🌍</div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: 16 }}>
                  Global Impact
                </h3>
                <p style={{ opacity: 0.8, lineHeight: 1.6 }}>
                  Your work will impact businesses worldwide and shape the future of technology.
                </p>
              </div>
              
              <div style={{
                background: 'rgba(255, 255, 255, 0.05)',
                borderRadius: 16,
                padding: 32,
                border: '1px solid rgba(255, 255, 255, 0.1)',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '3rem', marginBottom: 16 }}>👥</div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: 16 }}>
                  Amazing Team
                </h3>
                <p style={{ opacity: 0.8, lineHeight: 1.6 }}>
                  Collaborate with brilliant minds and learn from industry experts.
                </p>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div style={{ marginBottom: 80 }}>
            <h2 style={{ 
              fontSize: '2.5rem', 
              fontWeight: 700, 
              textAlign: 'center',
              marginBottom: 40
            }}>
              Benefits & Perks
            </h2>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
              gap: 16
            }}>
              {benefits.map((benefit, index) => (
                <div key={index} style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: 12,
                  padding: 20,
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12
                }}>
                  <div style={{ color: '#10b981', fontSize: '1.2rem' }}>✓</div>
                  <span style={{ fontSize: '1rem' }}>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Job Openings */}
          <div style={{ marginBottom: 60 }}>
            <h2 style={{ 
              fontSize: '2.5rem', 
              fontWeight: 700, 
              textAlign: 'center',
              marginBottom: 40
            }}>
              Open Positions
            </h2>
            <div style={{ 
              display: 'grid', 
              gap: 24
            }}>
              {jobOpenings.map((job) => (
                <div key={job.id} style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: 16,
                  padding: 32,
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}>
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'flex-start',
                    marginBottom: 16,
                    flexWrap: 'wrap',
                    gap: 16
                  }}>
                    <div>
                      <h3 style={{ 
                        fontSize: '1.5rem', 
                        fontWeight: 700, 
                        marginBottom: 8 
                      }}>
                        {job.title}
                      </h3>
                      <p style={{ 
                        opacity: 0.8, 
                        fontSize: '1rem',
                        marginBottom: 8
                      }}>
                        {job.department}
                      </p>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ 
                        background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                        color: 'white',
                        padding: '6px 12px',
                        borderRadius: 20,
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        marginBottom: 8
                      }}>
                        {job.type}
                      </div>
                      <div style={{ opacity: 0.6, fontSize: '0.9rem' }}>
                        {job.location}
                      </div>
                    </div>
                  </div>
                  
                  <p style={{ 
                    opacity: 0.8, 
                    lineHeight: 1.6, 
                    marginBottom: 20,
                    fontSize: '1rem'
                  }}>
                    {job.description}
                  </p>
                  
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: 16
                  }}>
                    <span style={{ 
                      opacity: 0.6, 
                      fontSize: '0.9rem' 
                    }}>
                      Experience: {job.experience}
                    </span>
                    <Link href={`/careers/${job.id}`} style={{
                      background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                      color: 'white',
                      padding: '10px 20px',
                      borderRadius: 8,
                      textDecoration: 'none',
                      fontWeight: 600,
                      fontSize: '0.9rem'
                    }}>
                      Apply Now
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact CTA */}
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
              Don't See Your Role?
            </h3>
            <p style={{ 
              opacity: 0.8, 
              marginBottom: 24,
              fontSize: '1.1rem'
            }}>
              We're always looking for talented individuals. Send us your resume and let us know how you can contribute.
            </p>
            <Link href="/contact" style={{
              background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
              color: 'white',
              padding: '12px 24px',
              borderRadius: 8,
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '1rem'
            }}>
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}