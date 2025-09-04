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

      <div className={`min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Join Our Team
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Be part of the future of technology. Work on cutting-edge solutions in AI, quantum computing, and enterprise technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`mailto:${contact.email}?subject=Career Inquiry`} className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors">
                Apply Now
              </a>
              <Link href="/about" className="px-8 py-4 bg-slate-800 hover:bg-slate-700 border border-white/10 rounded-lg font-semibold transition-colors">
                Learn About Us
              </Link>
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">Open Positions</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {openPositions.map((position, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-blue-400/50 transition-all duration-300">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-blue-400">{position.title}</h3>
                    <span className="px-3 py-1 bg-green-600/20 text-green-400 rounded-full text-sm">
                      {position.type}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-slate-400">
                    <span>📍 {position.location}</span>
                    <span>🏢 {position.department}</span>
                  </div>
                  <p className="text-slate-300 mb-6">{position.description}</p>
                  <div className="mb-6">
                    <h4 className="font-semibold mb-2 text-white">Requirements:</h4>
                    <ul className="space-y-1">
                      {position.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-center text-sm text-slate-400">
                          <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <a 
                    href={`mailto:${contact.email}?subject=Application for ${position.title}`}
                    className="inline-block w-full text-center px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors"
                  >
                    Apply for this Position
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">Why Work With Us?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">{benefit.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-slate-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Culture */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">Our Culture</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-blue-400">Innovation First</h3>
                <p className="text-slate-300 mb-6">
                  We believe in pushing the boundaries of what&apos;s possible. Our team works on cutting-edge technologies 
                  including AI, quantum computing, and next-generation enterprise solutions.
                </p>
                <h3 className="text-2xl font-bold mb-6 text-purple-400">Collaborative Environment</h3>
                <p className="text-slate-300 mb-6">
                  We foster a culture of collaboration and knowledge sharing. Every team member&apos;s voice is valued, 
                  and we encourage creative problem-solving and continuous learning.
                </p>
                <h3 className="text-2xl font-bold mb-6 text-green-400">Work-Life Balance</h3>
                <p className="text-slate-300">
                  We understand that great work comes from well-rested, happy people. Our remote-first approach 
                  and flexible schedules help you maintain a healthy work-life balance.
                </p>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold mb-6 text-center">Ready to Join Us?</h3>
                <p className="text-slate-300 mb-6 text-center">
                  Don&apos;t see a position that fits? We&apos;re always looking for talented individuals who share our passion for innovation.
                </p>
                <div className="space-y-4">
                  <a 
                    href={`mailto:${contact.email}?subject=General Career Inquiry`}
                    className="block w-full text-center px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors"
                  >
                    Send Us Your Resume
                  </a>
                  <a 
                    href={`tel:${contact.phone.replace(/[^\d+]/g,'')}`}
                    className="block w-full text-center px-6 py-3 bg-slate-800 hover:bg-slate-700 border border-white/10 rounded-lg font-semibold transition-colors"
                  >
                    Call {contact.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}