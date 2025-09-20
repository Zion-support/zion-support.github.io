import React from 'react';
import Link from 'next/link';

export default function CareersPage() {
  const openPositions = [
    {
      id: 1,
      title: "Senior Full Stack Developer",
      department: "Engineering",
      location: "Remote / San Francisco, CA",
      type: "Full-time",
      experience: "5+ years",
      description: "We're looking for a passionate full-stack developer to join our engineering team and help build cutting-edge web applications.",
      requirements: [
        "5+ years of experience with React, Node.js, and TypeScript",
        "Experience with cloud platforms (AWS, Azure, or GCP)",
        "Strong understanding of database design and optimization",
        "Experience with CI/CD pipelines and DevOps practices",
        "Excellent problem-solving and communication skills"
      ],
      benefits: [
        "Competitive salary and equity",
        "Health, dental, and vision insurance",
        "Flexible work arrangements",
        "Professional development budget",
        "Unlimited PTO"
      ]
    },
    {
      id: 2,
      title: "AI/ML Engineer",
      department: "AI Research",
      location: "Remote / New York, NY",
      type: "Full-time",
      experience: "3+ years",
      description: "Join our AI research team to develop innovative machine learning solutions that solve real-world business problems.",
      requirements: [
        "3+ years of experience in machine learning and AI",
        "Proficiency in Python, TensorFlow, and PyTorch",
        "Experience with data preprocessing and feature engineering",
        "Knowledge of cloud ML platforms (AWS SageMaker, Azure ML)",
        "Strong mathematical and statistical background"
      ],
      benefits: [
        "Competitive salary and equity",
        "Health, dental, and vision insurance",
        "Flexible work arrangements",
        "Conference and training budget",
        "Unlimited PTO"
      ]
    },
    {
      id: 3,
      title: "DevOps Engineer",
      department: "Infrastructure",
      location: "Remote / Austin, TX",
      type: "Full-time",
      experience: "4+ years",
      description: "Help us build and maintain scalable, reliable infrastructure that powers our applications and services.",
      requirements: [
        "4+ years of DevOps or infrastructure experience",
        "Expertise in Kubernetes, Docker, and containerization",
        "Experience with cloud platforms (AWS, Azure, or GCP)",
        "Knowledge of Infrastructure as Code (Terraform, CloudFormation)",
        "Strong scripting skills (Bash, Python, or PowerShell)"
      ],
      benefits: [
        "Competitive salary and equity",
        "Health, dental, and vision insurance",
        "Flexible work arrangements",
        "Professional development budget",
        "Unlimited PTO"
      ]
    },
    {
      id: 4,
      title: "UX/UI Designer",
      department: "Design",
      location: "Remote / Los Angeles, CA",
      type: "Full-time",
      experience: "3+ years",
      description: "Create beautiful, intuitive user experiences that delight our clients and their customers.",
      requirements: [
        "3+ years of UX/UI design experience",
        "Proficiency in Figma, Sketch, or Adobe Creative Suite",
        "Experience with user research and usability testing",
        "Strong portfolio demonstrating design thinking",
        "Knowledge of front-end development principles"
      ],
      benefits: [
        "Competitive salary and equity",
        "Health, dental, and vision insurance",
        "Flexible work arrangements",
        "Design tools and software budget",
        "Unlimited PTO"
      ]
    },
    {
      id: 5,
      title: "Cybersecurity Specialist",
      department: "Security",
      location: "Remote / Chicago, IL",
      type: "Full-time",
      experience: "4+ years",
      description: "Protect our clients' digital assets and help build secure, compliant systems.",
      requirements: [
        "4+ years of cybersecurity experience",
        "Knowledge of security frameworks (NIST, ISO 27001)",
        "Experience with penetration testing and vulnerability assessment",
        "Familiarity with security tools (SIEM, IDS/IPS, WAF)",
        "Relevant certifications (CISSP, CISM, CEH)"
      ],
      benefits: [
        "Competitive salary and equity",
        "Health, dental, and vision insurance",
        "Flexible work arrangements",
        "Certification and training budget",
        "Unlimited PTO"
      ]
    },
    {
      id: 6,
      title: "Technical Writer",
      department: "Documentation",
      location: "Remote",
      type: "Part-time",
      experience: "2+ years",
      description: "Create clear, comprehensive documentation that helps our clients and team members succeed.",
      requirements: [
        "2+ years of technical writing experience",
        "Strong writing and editing skills",
        "Experience with documentation tools (GitBook, Confluence, etc.)",
        "Ability to translate complex technical concepts into clear language",
        "Experience with API documentation"
      ],
      benefits: [
        "Competitive hourly rate",
        "Flexible schedule",
        "Remote work",
        "Professional development opportunities"
      ]
    }
  ];

  const companyValues = [
    {
      title: "Innovation",
      description: "We encourage creative thinking and embrace new technologies to solve complex problems.",
      icon: "💡"
    },
    {
      title: "Collaboration",
      description: "We believe in the power of teamwork and open communication across all departments.",
      icon: "🤝"
    },
    {
      title: "Growth",
      description: "We invest in our team's professional development and career advancement.",
      icon: "📈"
    },
    {
      title: "Diversity",
      description: "We celebrate diverse perspectives and create an inclusive environment for everyone.",
      icon: "🌈"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Join Our Team
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Be part of a dynamic team that's transforming businesses through 
            innovative technology solutions. We're always looking for talented 
            individuals who share our passion for excellence.
          </p>
        </div>

        {/* Company Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyValues.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-blue-600 text-white rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">Why Work With Us?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-2">💰</div>
              <h3 className="font-semibold mb-2">Competitive Compensation</h3>
              <p className="text-blue-100 text-sm">Competitive salary, equity, and performance bonuses</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🏥</div>
              <h3 className="font-semibold mb-2">Health & Wellness</h3>
              <p className="text-blue-100 text-sm">Comprehensive health, dental, and vision insurance</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🏠</div>
              <h3 className="font-semibold mb-2">Flexible Work</h3>
              <p className="text-blue-100 text-sm">Remote work options and flexible schedules</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">📚</div>
              <h3 className="font-semibold mb-2">Learning & Growth</h3>
              <p className="text-blue-100 text-sm">Professional development budget and training opportunities</p>
            </div>
          </div>
        </div>

        {/* Open Positions */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Open Positions</h2>
          <div className="space-y-6">
            {openPositions.map((position) => (
              <div key={position.id} className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {position.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <span>{position.department}</span>
                      <span>•</span>
                      <span>{position.location}</span>
                      <span>•</span>
                      <span>{position.type}</span>
                      <span>•</span>
                      <span>{position.experience}</span>
                    </div>
                  </div>
                  <button className="mt-4 md:mt-0 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    Apply Now
                  </button>
                </div>
                
                <p className="text-gray-600 mb-4">{position.description}</p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Requirements:</h4>
                    <ul className="space-y-1">
                      {position.requirements.map((req, index) => (
                        <li key={index} className="text-sm text-gray-600 flex items-start">
                          <span className="text-blue-600 mr-2 mt-1">•</span>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {position.benefits.map((benefit, index) => (
                        <li key={index} className="text-sm text-gray-600 flex items-start">
                          <span className="text-green-600 mr-2 mt-1">✓</span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Don't See the Right Role?</h2>
          <p className="text-gray-600 mb-6">
            We're always interested in meeting talented people. Send us your resume 
            and let us know how you'd like to contribute to our team.
          </p>
          <div className="space-x-4">
            <Link 
              href="/contact" 
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-block"
            >
              Contact Us
            </Link>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-colors">
              Submit Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}