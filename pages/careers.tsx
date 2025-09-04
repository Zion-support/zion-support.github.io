import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Careers() {
  const contact = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    site: 'https://ziontechgroup.com'
  };

  const openPositions = [
    {
      id: 1,
      title: "Senior AI Engineer",
      department: "AI Services",
      location: "Remote / Delaware",
      type: "Full-time",
      experience: "5+ years",
      description: "Lead development of AI-powered solutions and machine learning models for our micro SaaS products.",
      requirements: [
        "Master's degree in Computer Science, AI, or related field",
        "5+ years experience with Python, TensorFlow, PyTorch",
        "Experience with cloud platforms (AWS, Azure, GCP)",
        "Strong understanding of NLP and computer vision",
        "Experience with MLOps and model deployment"
      ]
    },
    {
      id: 2,
      title: "Full Stack Developer",
      department: "Micro SaaS",
      location: "Remote / Delaware",
      type: "Full-time",
      experience: "3+ years",
      description: "Build and maintain innovative micro SaaS applications using modern web technologies.",
      requirements: [
        "Bachelor's degree in Computer Science or related field",
        "3+ years experience with React, Node.js, TypeScript",
        "Experience with databases (PostgreSQL, MongoDB)",
        "Knowledge of cloud services and DevOps practices",
        "Experience with microservices architecture"
      ]
    },
    {
      id: 3,
      title: "Quantum Computing Consultant",
      department: "IT Services",
      location: "Remote / Delaware",
      type: "Contract",
      experience: "7+ years",
      description: "Provide expert consulting on quantum computing solutions and implementation strategies.",
      requirements: [
        "PhD in Physics, Computer Science, or Quantum Computing",
        "7+ years experience in quantum computing research",
        "Experience with quantum algorithms and programming",
        "Strong communication and consulting skills",
        "Experience with quantum hardware platforms"
      ]
    },
    {
      id: 4,
      title: "Cybersecurity Specialist",
      department: "Cybersecurity",
      location: "Remote / Delaware",
      type: "Full-time",
      experience: "4+ years",
      description: "Protect our systems and help clients implement robust cybersecurity solutions.",
      requirements: [
        "Bachelor's degree in Cybersecurity or related field",
        "4+ years experience in cybersecurity",
        "Certifications: CISSP, CISM, or equivalent",
        "Experience with security tools and frameworks",
        "Knowledge of compliance standards (SOC 2, ISO 27001)"
      ]
    },
    {
      id: 5,
      title: "DevOps Engineer",
      department: "Cloud & DevOps",
      location: "Remote / Delaware",
      type: "Full-time",
      experience: "3+ years",
      description: "Design and maintain cloud infrastructure and CI/CD pipelines for our services.",
      requirements: [
        "Bachelor's degree in Computer Science or related field",
        "3+ years experience with AWS, Azure, or GCP",
        "Experience with Docker, Kubernetes, Terraform",
        "Knowledge of CI/CD tools (GitHub Actions, Jenkins)",
        "Experience with monitoring and logging tools"
      ]
    },
    {
      id: 6,
      title: "Product Manager",
      department: "Product",
      location: "Remote / Delaware",
      type: "Full-time",
      experience: "4+ years",
      description: "Lead product strategy and development for our micro SaaS portfolio.",
      requirements: [
        "Bachelor's degree in Business, Engineering, or related field",
        "4+ years experience in product management",
        "Experience with SaaS products and B2B markets",
        "Strong analytical and communication skills",
        "Experience with agile development methodologies"
      ]
    }
  ];

  const benefits = [
    {
      icon: "🏠",
      title: "Remote Work",
      description: "Work from anywhere with flexible hours and a supportive remote culture"
    },
    {
      icon: "💰",
      title: "Competitive Salary",
      description: "Competitive compensation packages with performance-based bonuses"
    },
    {
      icon: "🏥",
      title: "Health Benefits",
      description: "Comprehensive health, dental, and vision insurance coverage"
    },
    {
      icon: "📚",
      title: "Learning & Development",
      description: "Budget for courses, conferences, and professional development"
    },
    {
      icon: "⚡",
      title: "Cutting-Edge Technology",
      description: "Work with the latest technologies in AI, quantum computing, and cloud"
    },
    {
      icon: "🎯",
      title: "Growth Opportunities",
      description: "Clear career progression paths and opportunities for advancement"
    }
  ];

  return (
    <>
      <Head>
        <title>Careers - Zion Tech Group</title>
        <meta name="description" content="Join Zion Tech Group and help shape the future of technology. Explore career opportunities in AI, quantum computing, cybersecurity, and more." />
        <link rel="canonical" href={`${contact.site}/careers`} />
        <meta name="robots" content="index, follow" />
      </Head>

      <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Join Our Team</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Help us build the future of technology. Join a team of innovators, creators, 
              and problem-solvers working on cutting-edge solutions.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="#open-positions" 
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors"
              >
                View Open Positions
              </Link>
              <Link 
                href="/contact" 
                className="px-8 py-3 bg-slate-800 hover:bg-slate-700 border border-white/10 rounded-lg font-semibold transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Why Work With Us */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Why Work With Us?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-slate-900/60 rounded-xl p-6 border border-white/10 hover:border-blue-500/40 transition-all duration-300">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-slate-400">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Open Positions */}
          <div id="open-positions" className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Open Positions</h2>
            <div className="space-y-6">
              {openPositions.map((position) => (
                <div key={position.id} className="bg-slate-900/60 rounded-xl p-6 border border-white/10 hover:border-blue-500/40 transition-all duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{position.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-slate-400">
                        <span>📍 {position.location}</span>
                        <span>⏰ {position.type}</span>
                        <span>🎯 {position.experience}</span>
                        <span>🏢 {position.department}</span>
                      </div>
                    </div>
                    <Link 
                      href={`/contact?position=${encodeURIComponent(position.title)}`}
                      className="mt-4 lg:mt-0 px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors text-center"
                    >
                      Apply Now
                    </Link>
                  </div>
                  
                  <p className="text-slate-300 mb-4">{position.description}</p>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Requirements:</h4>
                    <ul className="list-disc list-inside space-y-1 text-slate-400">
                      {position.requirements.map((req, index) => (
                        <li key={index}>{req}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Culture & Values */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Our Culture & Values</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-slate-900/60 rounded-xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold mb-4 text-blue-400">Innovation First</h3>
                <p className="text-slate-300 mb-4">
                  We encourage creative thinking and experimentation. Our team is always exploring 
                  new technologies and approaches to solve complex problems.
                </p>
                <ul className="text-slate-400 space-y-2">
                  <li>• 20% time for personal projects</li>
                  <li>• Innovation labs and hackathons</li>
                  <li>• Cutting-edge technology access</li>
                </ul>
              </div>
              
              <div className="bg-slate-900/60 rounded-xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold mb-4 text-purple-400">Collaboration & Growth</h3>
                <p className="text-slate-300 mb-4">
                  We believe in the power of teamwork and continuous learning. Every team member 
                  has opportunities to grow and contribute to our collective success.
                </p>
                <ul className="text-slate-400 space-y-2">
                  <li>• Mentorship programs</li>
                  <li>• Cross-functional teams</li>
                  <li>• Regular knowledge sharing sessions</li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold mb-4">Don't See Your Perfect Role?</h2>
              <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
                We're always looking for talented individuals who share our passion for innovation. 
                Send us your resume and let us know how you'd like to contribute.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link 
                  href="/contact" 
                  className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors"
                >
                  Send Your Resume
                </Link>
                <a 
                  href={`mailto:${contact.email}?subject=General Career Inquiry`}
                  className="px-8 py-3 bg-slate-800 hover:bg-slate-700 border border-white/10 rounded-lg font-semibold transition-colors"
                >
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}