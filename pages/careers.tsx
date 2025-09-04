import Link from 'next/link';
import Head from 'next/head';

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
      title: "Senior AI/ML Engineer",
      department: "AI Services",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      experience: "5+ years",
      description: "Lead development of AI and machine learning solutions for enterprise clients."
    },
    {
      id: 2,
      title: "Cloud DevOps Specialist",
      department: "Cloud & DevOps",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      experience: "3+ years",
      description: "Design and implement cloud infrastructure solutions using modern DevOps practices."
    },
    {
      id: 3,
      title: "Cybersecurity Analyst",
      department: "Cybersecurity",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      experience: "4+ years",
      description: "Protect client systems and data through advanced security monitoring and analysis."
    },
    {
      id: 4,
      title: "Micro SaaS Developer",
      department: "Product Development",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      experience: "3+ years",
      description: "Build innovative micro SaaS products that solve real business problems."
    },
    {
      id: 5,
      title: "Quantum Computing Researcher",
      department: "Research & Development",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      experience: "PhD or 5+ years",
      description: "Research and develop quantum computing applications for business use cases."
    }
  ];

  const benefits = [
    "Competitive salary and equity options",
    "Comprehensive health, dental, and vision insurance",
    "Flexible remote work arrangements",
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
        <meta name="description" content="Join Zion Tech Group's innovative team. Explore career opportunities in AI, cloud computing, cybersecurity, and quantum computing." />
        <meta name="keywords" content="careers, jobs, AI engineer, cloud developer, cybersecurity analyst, quantum computing, remote work" />
        <link rel="canonical" href={`${contact.site}/careers`} />
        <meta property="og:title" content="Careers - Zion Tech Group | Join Our Innovative Team" />
        <meta property="og:description" content="Join Zion Tech Group's innovative team. Explore career opportunities in AI, cloud computing, cybersecurity, and quantum computing." />
        <meta property="og:url" content={`${contact.site}/careers`} />
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
              Join Our Team
            </h1>
            <p style={{ fontSize: '1.2rem', color: '#94a3b8', maxWidth: 600, margin: '0 auto' }}>
              Be part of the future of technology. Join our innovative team and help shape the next generation of AI, cloud, and quantum computing solutions.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, marginBottom: 80 }}>
            <div>
              <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: 30 }}>
                Why Work With Us?
              </h2>
              <div style={{ display: 'grid', gap: 20 }}>
                {benefits.map((benefit, index) => (
                  <div key={index} style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: 15,
                    padding: 15,
                    background: 'rgba(255, 255, 255, 0.05)',
                    borderRadius: 8,
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                  }}>
                    <div style={{
                      width: 8,
                      height: 8,
                      background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                      borderRadius: '50%'
                    }} />
                    <span style={{ fontSize: '1rem' }}>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: 30 }}>
                Our Culture
              </h2>
              <div style={{ 
                background: 'rgba(255, 255, 255, 0.05)',
                padding: 30,
                borderRadius: 12,
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}>
                <p style={{ fontSize: '1.1rem', lineHeight: 1.6, marginBottom: 20 }}>
                  At Zion Tech Group, we foster a culture of innovation, collaboration, and continuous learning. 
                  Our team members are passionate about pushing the boundaries of technology and creating solutions 
                  that make a real difference in the world.
                </p>
                <p style={{ fontSize: '1.1rem', lineHeight: 1.6 }}>
                  We believe in empowering our employees to take ownership of their work, pursue their passions, 
                  and grow both personally and professionally. Join us in building the future of technology.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: 40, textAlign: 'center' }}>
              Open Positions
            </h2>
            <div style={{ display: 'grid', gap: 25 }}>
              {jobOpenings.map((job) => (
                <div key={job.id} style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: 12,
                  padding: 30,
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
                    <div>
                      <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: 8 }}>
                        {job.title}
                      </h3>
                      <p style={{ color: '#94a3b8', fontSize: '1rem' }}>
                        {job.department} • {job.location}
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
                      <p style={{ color: '#64748b', fontSize: '0.9rem' }}>
                        {job.experience}
                      </p>
                    </div>
                  </div>
                  <p style={{ color: '#94a3b8', lineHeight: 1.6, marginBottom: 20 }}>
                    {job.description}
                  </p>
                  <Link href="/contact" style={{
                    background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                    color: 'white',
                    padding: '10px 20px',
                    textDecoration: 'none',
                    borderRadius: 6,
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    display: 'inline-block'
                  }}>
                    Apply Now
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: 60 }}>
            <p style={{ fontSize: '1.1rem', color: '#94a3b8', marginBottom: 20 }}>
              Don't see a position that matches your skills? We're always looking for talented individuals.
            </p>
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
              Send Us Your Resume
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}