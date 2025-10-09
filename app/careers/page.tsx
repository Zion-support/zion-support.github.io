import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const CareersPage: React.FC = () => {
  const positions = [
    {
      title: "Senior AI Engineer",
      department: "Engineering",
      location: "Remote / Delaware",
      type: "Full-time",
      description: "Lead the development of cutting-edge AI solutions and machine learning models for enterprise clients.",
      requirements: [
        "5+ years experience in AI/ML development",
        "Expertise in Python, TensorFlow, PyTorch",
        "Experience with cloud platforms (AWS, Azure, GCP)",
        "Strong problem-solving and communication skills"
      ]
    },
    {
      title: "Quantum Computing Specialist",
      department: "Research & Development",
      location: "Remote / Delaware",
      type: "Full-time",
      description: "Drive innovation in quantum computing applications and develop quantum algorithms for business optimization.",
      requirements: [
        "PhD in Physics, Computer Science, or related field",
        "3+ years quantum computing experience",
        "Knowledge of quantum programming languages",
        "Experience with quantum hardware platforms"
      ]
    },
    {
      title: "Cybersecurity Architect",
      department: "Security",
      location: "Remote / Delaware",
      type: "Full-time",
      description: "Design and implement comprehensive security solutions for enterprise AI systems and cloud infrastructure.",
      requirements: [
        "7+ years cybersecurity experience",
        "Certifications: CISSP, CISM, or equivalent",
        "Experience with AI security and privacy",
        "Knowledge of compliance frameworks (SOC 2, ISO 27001)"
      ]
    },
    {
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Remote / Delaware",
      type: "Full-time",
      description: "Build and maintain scalable cloud infrastructure for AI services and enterprise applications.",
      requirements: [
        "4+ years DevOps experience",
        "Expertise in Kubernetes, Docker, CI/CD",
        "Cloud platform experience (AWS, Azure, GCP)",
        "Infrastructure as Code (Terraform, CloudFormation)"
      ]
    },
    {
      title: "AI Solutions Consultant",
      department: "Sales & Consulting",
      location: "Remote / Delaware",
      type: "Full-time",
      description: "Work with enterprise clients to design and implement AI solutions that drive business value.",
      requirements: [
        "3+ years AI consulting experience",
        "Strong technical and business acumen",
        "Excellent presentation and communication skills",
        "Experience with enterprise AI implementations"
      ]
    }
  ];

  const benefits = [
    {
      icon: "💰",
      title: "Competitive Compensation",
      description: "Above-market salaries with performance bonuses and equity options"
    },
    {
      icon: "🏠",
      title: "Remote-First Culture",
      description: "Work from anywhere with flexible hours and home office stipend"
    },
    {
      icon: "📚",
      title: "Learning & Development",
      description: "Annual learning budget, conference attendance, and certification support"
    },
    {
      icon: "🏥",
      title: "Health & Wellness",
      description: "Comprehensive health insurance, mental health support, and wellness programs"
    },
    {
      icon: "⚡",
      title: "Cutting-Edge Technology",
      description: "Work with the latest AI, quantum computing, and cloud technologies"
    },
    {
      icon: "🌍",
      title: "Global Impact",
      description: "Make a difference by transforming businesses with innovative technology"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
              Join Our Team
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Be part of the future of AI and technology. Join Zion Tech Group and help transform businesses with cutting-edge solutions.
            </p>
          </div>

          {/* Benefits Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Why Work With Us</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="cyber-card hologram-card">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Open Positions */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Open Positions</h2>
            <div className="space-y-6">
              {positions.map((position, index) => (
                <div key={index} className="cyber-card">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{position.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                        <span>{position.department}</span>
                        <span>•</span>
                        <span>{position.location}</span>
                        <span>•</span>
                        <span>{position.type}</span>
                      </div>
                    </div>
                    <a
                      href={`/contact?subject=Application for ${position.title}`}
                      className="cyber-button mt-4 md:mt-0"
                    >
                      Apply Now
                    </a>
                  </div>
                  <p className="text-gray-300 mb-4">{position.description}</p>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Requirements:</h4>
                    <ul className="list-disc list-inside text-gray-300 space-y-1">
                      {position.requirements.map((req, reqIndex) => (
                        <li key={reqIndex}>{req}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Culture Section */}
          <section className="mb-16">
            <div className="cyber-card hologram-card text-center">
              <h2 className="text-3xl font-bold text-white mb-6">Our Culture</h2>
              <p className="text-lg text-gray-300 mb-8 max-w-4xl mx-auto">
                At Zion Tech Group, we foster a culture of innovation, collaboration, and continuous learning. 
                We believe in empowering our team members to push boundaries and create solutions that make a real impact.
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <div className="text-4xl mb-4">🚀</div>
                  <h3 className="text-xl font-semibold text-white mb-2">Innovation</h3>
                  <p className="text-gray-300">We encourage bold ideas and cutting-edge solutions</p>
                </div>
                <div>
                  <div className="text-4xl mb-4">🤝</div>
                  <h3 className="text-xl font-semibold text-white mb-2">Collaboration</h3>
                  <p className="text-gray-300">We work together to achieve extraordinary results</p>
                </div>
                <div>
                  <div className="text-4xl mb-4">📈</div>
                  <h3 className="text-xl font-semibold text-white mb-2">Growth</h3>
                  <p className="text-gray-300">We invest in your professional development and career growth</p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center cyber-card">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Join Us?</h2>
            <p className="text-lg text-gray-300 mb-8">
              Don't see a position that fits? We're always looking for talented individuals. 
              Send us your resume and let us know how you can contribute to our mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact?subject=General Application"
                className="cyber-button"
              >
                Send Your Resume
              </a>
              <a
                href="tel:+13024640950"
                className="cyber-button"
                style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
              >
                📞 Call (302) 464-0950
              </a>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CareersPage;