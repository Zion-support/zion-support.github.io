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

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              Join Our Team
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Help us build the future of technology. We&apos;re looking for passionate 
              individuals who want to make a difference in AI, cloud computing, 
              cybersecurity, and software development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={`mailto:${contact.email}?subject=Career Inquiry`}
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
              >
                Send Your Resume
              </a>
              <Link 
                href="/about" 
                className="px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white border border-white/20 rounded-lg font-semibold transition-colors"
              >
                Learn About Us
              </Link>
            </div>
          </div>

          {/* Company Values */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Our Values
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {companyValues.map((value, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
                  <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-slate-300">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Why Work With Us
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center text-slate-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  {benefit}
                </div>
              ))}
            </div>
          </div>

          {/* Open Positions */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Open Positions
            </h2>
            <div className="space-y-6">
              {openPositions.map((position, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{position.title}</h3>
                      <div className="flex flex-wrap gap-4 text-slate-300 mb-4">
                        <span className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          {position.department}
                        </span>
                        <span className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {position.location}
                        </span>
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {position.type}
                        </span>
                      </div>
                    </div>
                    <a 
                      href={`mailto:${contact.email}?subject=Application for ${position.title}`}
                      className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors inline-flex items-center"
                    >
                      Apply Now <ArrowRight className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                  <p className="text-slate-300 mb-4">{position.description}</p>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Requirements:</h4>
                    <ul className="space-y-1">
                      {position.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-center text-slate-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Don't See Your Role? */}
          <div className="text-center bg-slate-800/30 backdrop-blur-sm rounded-xl p-8 border border-white/10">
            <Heart className="w-12 h-12 text-red-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white mb-4">
              Don&apos;t See Your Perfect Role?
            </h2>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              We&apos;re always looking for talented individuals who share our passion for innovation. 
              Send us your resume and let us know how you&apos;d like to contribute to our mission.
            </p>
            <a 
              href={`mailto:${contact.email}?subject=General Career Inquiry`}
              className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold transition-colors inline-flex items-center"
            >
              Send Your Resume <ArrowRight className="w-4 h-4 ml-1" />
            </a>
          </div>
        </div>
      </main>
    </>
  );
}