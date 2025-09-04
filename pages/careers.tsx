import Link from 'next/link';
import Head from 'next/head';
import { useState, useEffect } from 'react';

export default function Careers() {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const contact = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    site: 'https://ziontechgroup.com'
  }

  const openPositions = [
    {
      title: "Senior Full Stack Developer",
      department: "Engineering",
      location: "Remote / Delaware",
      type: "Full-time",
      description: "Lead development of micro SaaS products and enterprise solutions",
      requirements: ["5+ years experience", "React/Next.js", "Node.js", "Cloud platforms"]
    },
    {
      title: "AI/ML Engineer",
      department: "AI Services",
      location: "Remote / Delaware",
      type: "Full-time",
      description: "Develop and implement AI solutions and machine learning models",
      requirements: ["3+ years ML experience", "Python", "TensorFlow/PyTorch", "Cloud AI services"]
    },
    {
      title: "DevOps Engineer",
      department: "Cloud & DevOps",
      location: "Remote / Delaware",
      type: "Full-time",
      description: "Manage cloud infrastructure and CI/CD pipelines",
      requirements: ["3+ years DevOps", "AWS/Azure/GCP", "Docker/Kubernetes", "Infrastructure as Code"]
    },
    {
      title: "Cybersecurity Specialist",
      department: "Security",
      location: "Remote / Delaware",
      type: "Full-time",
      description: "Protect systems and data with advanced security solutions",
      requirements: ["3+ years security", "Security certifications", "Threat analysis", "Compliance"]
    },
    {
      title: "Quantum Computing Researcher",
      department: "Research & Development",
      location: "Remote / Delaware",
      type: "Full-time",
      description: "Research and develop quantum computing solutions",
      requirements: ["PhD in Physics/CS", "Quantum algorithms", "Research experience", "Publication record"]
    },
    {
      title: "Business Development Manager",
      department: "Sales & Marketing",
      location: "Remote / Delaware",
      type: "Full-time",
      description: "Drive business growth and client relationships",
      requirements: ["3+ years B2B sales", "Tech industry", "Client management", "Growth mindset"]
    }
  ];

  const benefits = [
    {
      title: "Competitive Compensation",
      description: "Industry-leading salary and equity packages",
      icon: "💰"
    },
    {
      title: "Remote-First Culture",
      description: "Work from anywhere with flexible schedules",
      icon: "🏠"
    },
    {
      title: "Professional Development",
      description: "Learning budget and conference attendance",
      icon: "📚"
    },
    {
      title: "Health & Wellness",
      description: "Comprehensive health insurance and wellness programs",
      icon: "🏥"
    },
    {
      title: "Cutting-Edge Technology",
      description: "Work with the latest technologies and tools",
      icon: "⚡"
    },
    {
      title: "Innovation Time",
      description: "Dedicated time for personal projects and innovation",
      icon: "🚀"
    }
  ];

  return (
    <>
      <Head>
        <title>Careers - Zion Tech Group | Join Our Team</title>
        <meta name="description" content="Join Zion Tech Group and work on cutting-edge technology solutions. We're hiring developers, engineers, researchers, and business professionals." />
        <meta name="keywords" content="careers, jobs, employment, tech jobs, remote work, software development, AI engineering, DevOps, cybersecurity" />
        <link rel="canonical" href={`${contact.site}/careers`} />
        <meta property="og:title" content="Careers - Zion Tech Group" />
        <meta property="og:description" content="Join our team and work on cutting-edge technology solutions" />
        <meta property="og:url" content={`${contact.site}/careers`} />
        <meta property="og:type" content="website" />
      </Head>
      <main style={{ padding: '0 20px', maxWidth: 1200, margin: '0 auto' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1rem', textAlign: 'center' }}>Join Our Team</h1>
        <p style={{ fontSize: '1.1rem', lineHeight: 1.6, textAlign: 'center', color: '#ccc' }}>
          Be part of our mission to revolutionize technology and help businesses thrive in the digital age.
        </p>
        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
          <Link href="/" style={{
            background: 'white',
            color: '#333',
            padding: '12px 24px',
            textDecoration: 'none',
            borderRadius: 8,
            fontSize: '1rem',
            fontWeight: 600
          }}>
            Back to Home
          </Link>
        </div>
      </main>
    </>
  );
}