import Head from 'next/head';
import Link from 'next/link';

export default function Careers() {
  const contact = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    site: 'https://ziontechgroup.com'
  }
  const jobOpenings = [
    {
      id: 1,
      title: "Senior AI/ML Engineer",
      department: "AI Services",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      experience: "5+ years",
      description: "Lead the development of cutting-edge AI solutions and machine learning models for our clients.",
      requirements: [
        "Master's degree in Computer Science, AI, or related field",
        "5+ years of experience in AI/ML development",
        "Proficiency in Python, TensorFlow, PyTorch",
        "Experience with cloud platforms (AWS, Azure, GCP)",
        "Strong problem-solving and communication skills"
      ]
    },
    {
      id: 2,
      title: "Full-Stack Developer",
      department: "Micro SaaS",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      experience: "3+ years",
      description: "Build and maintain innovative micro SaaS applications using modern web technologies.",
      requirements: [
        "Bachelor's degree in Computer Science or related field",
        "3+ years of full-stack development experience",
        "Proficiency in React, Node.js, TypeScript",
        "Experience with databases (PostgreSQL, MongoDB)",
        "Knowledge of cloud deployment and DevOps practices"
      ]
    },
    {
      id: 3,
      title: "Cybersecurity Specialist",
      department: "IT Services",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      experience: "4+ years",
      description: "Protect our clients' digital assets with advanced cybersecurity solutions and threat analysis.",
      requirements: [
        "Bachelor's degree in Cybersecurity, IT, or related field",
        "4+ years of cybersecurity experience",
        "Certifications: CISSP, CISM, or equivalent",
        "Experience with security tools and frameworks",
        "Knowledge of compliance standards (SOC 2, ISO 27001)"
      ]
    },
    {
      id: 4,
      title: "DevOps Engineer",
      department: "Cloud & DevOps",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      experience: "4+ years",
      description: "Optimize cloud infrastructure and implement CI/CD pipelines for scalable applications.",
      requirements: [
        "Bachelor's degree in Computer Science or related field",
        "4+ years of DevOps experience",
        "Proficiency in AWS, Azure, or GCP",
        "Experience with Docker, Kubernetes, Terraform",
        "Knowledge of monitoring and logging tools"
      ]
    },
    {
      id: 5,
      title: "Quantum Computing Researcher",
      department: "Research & Development",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      experience: "PhD + 2+ years",
      description: "Research and develop quantum computing algorithms and applications for real-world problems.",
      requirements: [
        "PhD in Physics, Computer Science, or related field",
        "2+ years of quantum computing research experience",
        "Proficiency in quantum programming languages (Qiskit, Cirq)",
        "Strong mathematical and analytical skills",
        "Experience with quantum hardware platforms"
      ]
    },
    {
      id: 6,
      title: "Business Development Manager",
      department: "Sales & Marketing",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      experience: "5+ years",
      description: "Drive business growth by identifying new opportunities and building strategic partnerships.",
      requirements: [
        "Bachelor's degree in Business, Marketing, or related field",
        "5+ years of B2B sales experience in technology",
        "Strong communication and negotiation skills",
        "Experience with CRM systems",
        "Knowledge of technology trends and market dynamics"
      ]
    }
  ];

  const benefits = [
    {
      icon: "🏠",
      title: "Remote Work",
      description: "Work from anywhere with flexible schedules"
    },
    {
      icon: "💰",
      title: "Competitive Salary",
      description: "Above-market compensation with performance bonuses"
    },
    {
      icon: "🏥",
      title: "Health Benefits",
      description: "Comprehensive health, dental, and vision coverage"
    },
    {
      icon: "📚",
      title: "Learning & Development",
      description: "Continuous learning opportunities and conference attendance"
    },
    {
      icon: "⚡",
      title: "Cutting-Edge Technology",
      description: "Work with the latest technologies and tools"
    },
    {
      icon: "🤝",
      title: "Team Collaboration",
      description: "Collaborate with talented professionals worldwide"
    }
  ];

  return (
    <>
      <Head>
        <title>Careers - Zion Tech Group | Join Our Innovative Team</title>
        <meta name="description" content="Join Zion Tech Group's innovative team. Explore career opportunities in AI, micro SaaS, cybersecurity, and cutting-edge technology solutions." />
        <meta name="keywords" content="careers, jobs, AI engineer, full-stack developer, cybersecurity specialist, DevOps engineer, quantum computing, remote work" />
        <link rel="canonical" href={`${contact.site}/careers`} />
        <meta property="og: title" content="Careers - Zion Tech Group | Join Our Innovative Team" />
        <meta property="og:description" content="Join Zion Tech Group's innovative team. Explore career opportunities in AI, micro SaaS, cybersecurity, and cutting-edge technology solutions." />
        <meta property="og: url" content={`${contact.site}/careers`} />
        <meta property="og: type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Careers - Zion Tech Group | Join Our Innovative Team" />
        <meta name="twitter:description" content="Join Zion Tech Group's innovative team. Explore career opportunities in AI, micro SaaS, cybersecurity, and cutting-edge technology solutions." />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md: text-6xl font-bold text-white mb-6">
              Join Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Innovative Team</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Be part of a forward-thinking company that&aposs shaping the future of technology. Work on cutting-edge projects and make a real impact.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href={`tel:${contact.phone.replace(/[^\d+]/g,'')}`} className="px-6 py-3 bg-blue-600 hover: bg-blue-700 rounded-lg font-semibold transition-colors">
                Call {contact.phone}
              </a>
              <a href={`mailto: ${contact.email}`} className="px-6 py-3 bg-purple-600 hover: bg-purple-700 rounded-lg font-semibold transition-colors">
                Email {contact.email}
              </a>
              <Link href="/contact" className="px-6 py-3 bg-slate-800 hover: bg-slate-700 border border-white/10 rounded-lg font-semibold transition-colors">
                Get in Touch
              </Link>
            </div>
          </div>
        </section>

        {/* Why Work With Us */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Why Work With Us?</h2>
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-slate-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Open Positions</h2>
            <div className="space-y-6">
              {jobOpenings.map((job) => (
                <div key={job.id} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover: bg-white/10 transition-all duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{job.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-slate-400">
                        <span className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full">{job.department}</span>
                        <span>📍 {job.location}</span>
                        <span>⏰ {job.type}</span>
                        <span>🎯 {job.experience}</span>
                      </div>
                    </div>
                    <div className="mt-4 lg: mt-0">
                      <Link href={`/careers/${job.id}`} className="px-6 py-2 bg-blue-600 hover: bg-blue-700 rounded-lg font-semibold transition-colors">
                        Apply Now
                      </Link>
                    </div>
                  </div>
                  <p className="text-slate-300 mb-4">{job.description}</p>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Key Requirements: </h4>
                    <ul className="list-disc list-inside text-slate-300 space-y-1">
                      {job.requirements.slice(0, 3).map((req, index) => (
                        <li key={index}>{req}</li>
                      ))}
                    </ul>
                    {job.requirements.length > 3 && (
                      <Link href={`/careers/${job.id}`} className="text-blue-400 hover:text-blue-300 text-sm font-semibold">
                        View all requirements →
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Culture */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg: grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Our Culture</h2>
                <p className="text-slate-300 mb-6">
                  At Zion Tech Group, we foster an environment of innovation, collaboration, and continuous learning. 
                  Our team is passionate about pushing the boundaries of technology and delivering exceptional results for our clients.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                    <p className="text-slate-300">Remote-first culture with flexible working hours</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                    <p className="text-slate-300">Regular team building and professional development events</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                    <p className="text-slate-300">Open communication and transparent decision-making</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                    <p className="text-slate-300">Opportunities to work on cutting-edge projects</p>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4">Ready to Join Us ? </h3>
                <p className="text-slate-300 mb-6">
                  Don&apos : t see a position that matches your skills? We&aposre always looking for talented individuals 
                  who share our passion for innovation.
                </p>
                <div className="space-y-3">
                  <Link href="/contact" className="block w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold text-white text-center transition-colors">
                    Join Our Team
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Ready to Build the Future?</h2>
            <p className="text-xl text-slate-300 mb-8">
              Join our team of passionate innovators who are building the future of technology. Apply today and be part of something extraordinary.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg font-semibold transition-all">
                Apply Now
              </Link>
              <Link href="/about" className="px-8 py-3 border border-white/20 text-white hover:bg-white/10 rounded-lg font-semibold transition-colors">
                Learn About Us
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )}