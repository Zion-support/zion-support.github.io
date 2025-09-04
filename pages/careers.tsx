import Link from 'next/link';
import Head from 'next/head';

export default function Careers() {
  const openPositions = [
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
        "5+ years of experience in machine learning and AI development",
        "Proficiency in Python, TensorFlow, PyTorch",
        "Experience with cloud platforms (AWS, Azure, GCP)",
        "Strong problem-solving and communication skills"
      ],
      benefits: ["Competitive salary", "Health insurance", "Remote work", "Professional development"]
    },
    {
      id: 2,
      title: "Full-Stack Developer",
      department: "Micro SaaS",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      experience: "3+ years",
      description: "Build and maintain innovative micro SaaS products that solve real business problems.",
      requirements: [
        "Bachelor's degree in Computer Science or related field",
        "3+ years of full-stack development experience",
        "Proficiency in React, Node.js, TypeScript",
        "Experience with databases (PostgreSQL, MongoDB)",
        "Knowledge of cloud deployment and DevOps practices"
      ],
      benefits: ["Competitive salary", "Health insurance", "Remote work", "Stock options"]
    },
    {
      id: 3,
      title: "Cloud Solutions Architect",
      department: "IT Services",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      experience: "7+ years",
      description: "Design and implement scalable cloud solutions for enterprise clients.",
      requirements: [
        "Bachelor's degree in Computer Science or related field",
        "7+ years of cloud architecture experience",
        "Certifications in AWS, Azure, or GCP",
        "Experience with containerization (Docker, Kubernetes)",
        "Strong understanding of security and compliance"
      ],
      benefits: ["Competitive salary", "Health insurance", "Remote work", "Certification support"]
    },
    {
      id: 4,
      title: "Cybersecurity Specialist",
      department: "Cybersecurity",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      experience: "4+ years",
      description: "Protect our clients' digital assets with advanced cybersecurity solutions.",
      requirements: [
        "Bachelor's degree in Cybersecurity or related field",
        "4+ years of cybersecurity experience",
        "Certifications (CISSP, CISM, CEH preferred)",
        "Experience with security tools and frameworks",
        "Knowledge of compliance standards (SOC 2, ISO 27001)"
      ],
      benefits: ["Competitive salary", "Health insurance", "Remote work", "Security training"]
    },
    {
      id: 5,
      title: "DevOps Engineer",
      department: "Cloud & DevOps",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      experience: "4+ years",
      description: "Streamline development workflows and ensure reliable deployments.",
      requirements: [
        "Bachelor's degree in Computer Science or related field",
        "4+ years of DevOps experience",
        "Proficiency in CI/CD pipelines and automation",
        "Experience with infrastructure as code (Terraform, CloudFormation)",
        "Knowledge of monitoring and logging tools"
      ],
      benefits: ["Competitive salary", "Health insurance", "Remote work", "Flexible hours"]
    },
    {
      id: 6,
      title: "Product Manager",
      department: "Product",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      experience: "5+ years",
      description: "Lead product strategy and development for our micro SaaS portfolio.",
      requirements: [
        "Bachelor's degree in Business, Engineering, or related field",
        "5+ years of product management experience",
        "Experience with SaaS products and B2B markets",
        "Strong analytical and communication skills",
        "Knowledge of agile development methodologies"
      ],
      benefits: ["Competitive salary", "Health insurance", "Remote work", "Performance bonuses"]
    }
  ];

  const benefits = [
    {
      icon: "💰",
      title: "Competitive Compensation",
      description: "We offer competitive salaries and performance-based bonuses"
    },
    {
      icon: "🏥",
      title: "Health & Wellness",
      description: "Comprehensive health insurance and wellness programs"
    },
    {
      icon: "🏠",
      title: "Remote Work",
      description: "Flexible remote work options with modern collaboration tools"
    },
    {
      icon: "📚",
      title: "Learning & Development",
      description: "Continuous learning opportunities and professional development budget"
    },
    {
      icon: "⚡",
      title: "Cutting-Edge Technology",
      description: "Work with the latest technologies and innovative solutions"
    },
    {
      icon: "🤝",
      title: "Collaborative Culture",
      description: "Join a team of passionate professionals in a supportive environment"
    }
  ];

  return (
    <>
      <Head>
        <title>Careers - Zion Tech Group | Join Our Team</title>
        <meta name="description" content="Join Zion Tech Group and be part of a team building the future of technology. Explore career opportunities in AI, cloud computing, cybersecurity, and more." />
        <meta name="keywords" content="careers, jobs, technology careers, AI engineer, cloud architect, cybersecurity specialist, remote work" />
        <link rel="canonical" href="https://ziontechgroup.com/careers" />
      </Head>

      <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
        {/* Hero Section */}
        <section className="py-20 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
              Join Our Team
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              Build the future of technology with Zion Tech Group
            </p>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto mb-12">
              We're looking for passionate individuals who want to make a difference in the world of technology. 
              Join us in creating innovative solutions that transform businesses and industries.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="#open-positions" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors">
                View Open Positions
              </Link>
              <Link href="/contact" className="px-8 py-3 bg-slate-800 hover:bg-slate-700 border border-white/10 rounded-lg font-semibold transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </section>

        {/* Why Work With Us */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Why Work With Us?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-slate-900/60 rounded-lg border border-white/10 p-6 text-center">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-slate-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section id="open-positions" className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Open Positions</h2>
            <div className="space-y-6">
              {openPositions.map((position) => (
                <div key={position.id} className="bg-slate-900/60 rounded-lg border border-white/10 p-6 hover:border-white/20 transition-all duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{position.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-slate-400">
                        <span>📍 {position.location}</span>
                        <span>🏢 {position.department}</span>
                        <span>⏰ {position.type}</span>
                        <span>👨‍💼 {position.experience}</span>
                      </div>
                    </div>
                    <Link 
                      href={`/careers/${position.id}`}
                      className="mt-4 lg:mt-0 px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg font-semibold transition-all duration-200 text-center"
                    >
                      Apply Now
                    </Link>
                  </div>
                  
                  <p className="text-slate-300 mb-4">{position.description}</p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">Requirements:</h4>
                      <ul className="text-sm text-slate-400 space-y-1">
                        {position.requirements.map((req, index) => (
                          <li key={index}>• {req}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Benefits:</h4>
                      <ul className="text-sm text-slate-400 space-y-1">
                        {position.benefits.map((benefit, index) => (
                          <li key={index}>• {benefit}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Application Process</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">1</div>
                <h3 className="font-semibold mb-2">Apply</h3>
                <p className="text-sm text-slate-400">Submit your application with resume and cover letter</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">2</div>
                <h3 className="font-semibold mb-2">Review</h3>
                <p className="text-sm text-slate-400">Our team reviews your application and qualifications</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">3</div>
                <h3 className="font-semibold mb-2">Interview</h3>
                <p className="text-sm text-slate-400">Technical and cultural fit interviews with the team</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">4</div>
                <h3 className="font-semibold mb-2">Welcome</h3>
                <p className="text-sm text-slate-400">Join our team and start your journey with us</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-slate-900/60 rounded-lg border border-white/10 p-8">
              <h2 className="text-3xl font-bold mb-4">Don't See Your Role?</h2>
              <p className="text-slate-300 mb-6">
                We're always looking for talented individuals. Send us your resume and let us know how you can contribute to our mission.
              </p>
              <Link 
                href="/contact"
                className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg font-semibold transition-all duration-200"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}