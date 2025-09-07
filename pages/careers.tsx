import React from 'react';
import Layout from '../components/Layout';

export default function Careers() {
  const openPositions = [
    {
      id: 1,
      title: 'Senior Full Stack Developer',
      department: 'Engineering',
      location: 'Remote / San Francisco',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Join our engineering team to build cutting-edge web applications and AI-powered solutions.',
      requirements: [
        '5+ years of experience with React, Node.js, and TypeScript',
        'Experience with cloud platforms (AWS, Azure, or GCP)',
        'Strong understanding of database design and optimization',
        'Experience with AI/ML integration preferred'
      ]
    },
    {
      id: 2,
      title: 'AI Solutions Architect',
      department: 'AI & Innovation',
      location: 'Remote / New York',
      type: 'Full-time',
      experience: '7+ years',
      description: 'Lead the design and implementation of AI solutions for our enterprise clients.',
      requirements: [
        '7+ years of experience in AI/ML and software architecture',
        'Deep knowledge of machine learning frameworks (TensorFlow, PyTorch)',
        'Experience with cloud AI services and MLOps',
        'Strong communication and client-facing skills'
      ]
    },
    {
      id: 3,
      title: 'DevOps Engineer',
      department: 'Infrastructure',
      location: 'Remote / Austin',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Build and maintain our cloud infrastructure and deployment pipelines.',
      requirements: [
        '4+ years of experience with cloud infrastructure (AWS, Azure, GCP)',
        'Proficiency in containerization (Docker, Kubernetes)',
        'Experience with CI/CD pipelines and automation',
        'Knowledge of monitoring and logging tools'
      ]
    },
    {
      id: 4,
      title: 'UX/UI Designer',
      department: 'Design',
      location: 'Remote / Los Angeles',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Create intuitive and beautiful user experiences for our digital products.',
      requirements: [
        '3+ years of experience in UX/UI design',
        'Proficiency in Figma, Sketch, or Adobe Creative Suite',
        'Experience with user research and testing',
        'Portfolio demonstrating strong design skills'
      ]
    }
  ];

  const benefits = [
    {
      icon: '🏠',
      title: 'Remote Work',
      description: 'Work from anywhere in the world with flexible hours'
    },
    {
      icon: '💰',
      title: 'Competitive Salary',
      description: 'Above-market compensation with performance bonuses'
    },
    {
      icon: '🏥',
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance and wellness programs'
    },
    {
      icon: '📚',
      title: 'Learning & Development',
      description: 'Annual learning budget and conference attendance'
    },
    {
      icon: '⚡',
      title: 'Cutting-Edge Tech',
      description: 'Work with the latest technologies and tools'
    },
    {
      icon: '🤝',
      title: 'Great Team',
      description: 'Collaborate with talented and passionate professionals'
    }
  ];

  return (
    <Layout 
      title="Careers - Zion Tech Group" 
      description="Join our team of innovative technologists and help shape the future of digital transformation. Explore open positions and career opportunities."
    >
      <div className="bg-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-6">Join Our Team</h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Be part of a team that's building the future of technology. 
                We're looking for passionate individuals who want to make a difference.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#open-positions" 
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  View Open Positions
                </a>
                <a 
                  href="#benefits" 
                  className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                >
                  Our Benefits
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Open Positions */}
        <div id="open-positions" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Open Positions</h2>
              <p className="text-lg text-gray-600">Find your next career opportunity with us</p>
            </div>

            <div className="space-y-8">
              {openPositions.map((position) => (
                <div key={position.id} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{position.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        <span>📍 {position.location}</span>
                        <span>💼 {position.type}</span>
                        <span>⏱️ {position.experience}</span>
                        <span>🏢 {position.department}</span>
                      </div>
                    </div>
                    <button className="mt-4 lg:mt-0 bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                      Apply Now
                    </button>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{position.description}</p>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      {position.requirements.map((req, index) => (
                        <li key={index}>{req}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div id="benefits" className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Work With Us</h2>
              <p className="text-lg text-gray-600">We offer competitive benefits and a great work environment</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Don't See Your Role?</h2>
            <p className="text-lg text-gray-600 mb-8">
              We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <a 
              href="mailto:careers@ziontechgroup.com"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Send Your Resume
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}