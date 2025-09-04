import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Mail, Linkedin, Twitter } from 'lucide-react';

export default function Team() {
  const contact = { 
    phone: '+1 302 464 0950', 
    email: 'kleber@ziontechgroup.com', 
    address: '364 E Main St STE 1008 Middletown DE 19709', 
    site: 'https://ziontechgroup.com' 
  };

  const teamMembers = [
    { 
      name: "Dr. Sarah Chen", 
      position: "Chief Technology Officer", 
      department: "AI & Machine Learning", 
      bio: "Leading AI research and development with 15+ years of experience in machine learning and quantum computing.", 
      expertise: ["AI Research", "Machine Learning", "Quantum Computing", "Data Science"], 
      image: "👩‍💼" 
    },
    { 
      name: "Michael Rodriguez", 
      position: "Head of Cloud Operations", 
      department: "Cloud & DevOps", 
      bio: "Expert in cloud architecture and DevOps practices specializing in scalable infrastructure solutions.", 
      expertise: ["Cloud Architecture", "DevOps", "Infrastructure", "Automation"], 
      image: "👨‍💻" 
    },
    { 
      name: "Dr. Lisa Wang", 
      position: "Cybersecurity Director", 
      department: "Cybersecurity", 
      bio: "Cybersecurity expert with extensive experience in threat detection and enterprise security solutions.", 
      expertise: ["Cybersecurity", "Threat Detection", "Risk Assessment", "Compliance"], 
      image: "👩‍🔬" 
    },
    { 
      name: "Alex Thompson", 
      position: "Quantum Computing Lead", 
      department: "Research & Development", 
      bio: "Pioneering quantum computing research and developing practical applications for business use cases.", 
      expertise: ["Quantum Computing", "Algorithm Development", "Research", "Innovation"], 
      image: "👨‍🔬" 
    },
    { 
      name: "Maria Garcia", 
      position: "Product Development Manager", 
      department: "Micro SaaS", 
      bio: "Leading the development of innovative micro SaaS products that solve real business problems.", 
      expertise: ["Product Development", "SaaS Architecture", "User Experience", "Agile Development"], 
      image: "👩‍💼" 
    },
    { 
      name: "James Wilson", 
      position: "Digital Transformation Consultant", 
      department: "IT Services", 
      bio: "Helping organizations modernize their technology infrastructure and business processes.", 
      expertise: ["Digital Transformation", "Process Optimization", "Change Management", "Technology Consulting"], 
      image: "👨‍💼" 
    }
  ];

  return (
    <>
      <Head>
        <title>Team - Zion Tech Group | Meet Our Expert Team</title>
        <meta name="description" content="Meet the talented team of experts at Zion Tech Group, leading innovation in AI, quantum computing, micro SaaS, and cutting-edge technology solutions." />
        <meta name="keywords" content="team, leadership, experts, AI researchers, engineers, cybersecurity specialists, cloud experts, Zion Tech Group team" />
        <link rel="canonical" href="https://ziontechgroup.com/team" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Team - Zion Tech Group | Meet Our Expert Team" />
        <meta property="og:description" content="Meet the talented team of experts at Zion Tech Group leading innovation in technology." />
        <meta property="og:url" content="https://ziontechgroup.com/team" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://ziontechgroup.com/og-image.svg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Team - Zion Tech Group | Meet Our Expert Team" />
        <meta name="twitter:description" content="Meet the talented team of experts at Zion Tech Group." />
        <meta name="twitter:image" content="https://ziontechgroup.com/og-image.svg" />
      </Head>

      <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0b1220 0%, #1a1f3a 100%)', color: 'white' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '40px 20px' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem', background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Meet Our Expert Team
            </h1>
            <p style={{ fontSize: '1.25rem', color: '#94a3b8', maxWidth: '600px', margin: '0 auto' }}>
              The brilliant minds behind Zion Tech Group's innovative solutions
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
            {teamMembers.map((member, index) => (
              <div key={index} style={{ background: 'rgba(30, 41, 59, 0.8)', borderRadius: '1rem', padding: '2rem', border: '1px solid rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)' }}>
                <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                  <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>{member.image}</div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#3b82f6' }}>{member.name}</h3>
                  <p style={{ color: '#8b5cf6', fontWeight: '600', marginBottom: '0.25rem' }}>{member.position}</p>
                  <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>{member.department}</p>
                </div>
                
                <p style={{ color: '#cbd5e1', lineHeight: '1.6', marginBottom: '1.5rem' }}>{member.bio}</p>
                
                <div>
                  <h4 style={{ color: '#f1f5f9', fontWeight: '600', marginBottom: '0.75rem' }}>Expertise:</h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {member.expertise.map((skill, skillIndex) => (
                      <span key={skillIndex} style={{ background: 'rgba(59, 130, 246, 0.2)', color: '#60a5fa', padding: '0.25rem 0.75rem', borderRadius: '1rem', fontSize: '0.875rem', border: '1px solid rgba(59, 130, 246, 0.3)' }}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', background: 'rgba(30, 41, 59, 0.8)', borderRadius: '1rem', padding: '3rem', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem', background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Join Our Team
            </h2>
            <p style={{ fontSize: '1.125rem', color: '#94a3b8', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
              We're always looking for talented individuals to join our mission of advancing technology and innovation.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/careers" style={{ background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)', color: 'white', padding: '0.75rem 2rem', borderRadius: '0.5rem', textDecoration: 'none', fontWeight: '600', transition: 'transform 0.2s' }}>
                View Open Positions
              </Link>
              <Link href="/contact" style={{ background: 'transparent', color: '#3b82f6', padding: '0.75rem 2rem', borderRadius: '0.5rem', textDecoration: 'none', fontWeight: '600', border: '2px solid #3b82f6', transition: 'all 0.2s' }}>
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}