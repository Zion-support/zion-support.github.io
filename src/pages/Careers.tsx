import React from 'react';
import { Link } from 'react-router-dom';

export default function Careers() {
  const openPositions = [
    {
      title: 'Senior AI Engineer',
      department: 'AI Solutions',
      location: 'Remote / Delaware, USA',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Join our AI team to develop cutting-edge machine learning models and autonomous systems.',
      requirements: [
        'Strong background in machine learning and deep learning',
        'Experience with Python, TensorFlow, PyTorch',
        'Knowledge of cloud platforms (AWS, Azure, GCP)',
        'Experience with large-scale data processing'
      ]
    },
    {
      title: 'Cybersecurity Specialist',
      department: 'Security',
      location: 'Remote / California, USA',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Help protect our clients and systems with advanced cybersecurity solutions.',
      requirements: [
        'Certifications: CISSP, CISM, or equivalent',
        'Experience with security tools and frameworks',
        'Knowledge of compliance standards (SOC2, ISO27001)',
        'Strong analytical and problem-solving skills'
      ]
    },
    {
      title: 'Cloud Solutions Architect',
      department: 'Cloud & DevOps',
      location: 'Remote / Texas, USA',
      type: 'Full-time',
      experience: '7+ years',
      description: 'Design and implement scalable cloud infrastructure solutions for enterprise clients.',
      requirements: [
        'Expertise in AWS, Azure, and GCP',
        'Experience with Kubernetes and containerization',
        'Strong understanding of DevOps practices',
        'Experience with infrastructure as code'
      ]
    }
  ];

  const benefits = [
    {
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance, mental health support, and wellness programs.'
    },
    {
      title: 'Learning & Development',
      description: 'Continuous learning opportunities, certifications, and professional development budgets.'
    },
    {
      title: 'Remote Work',
      description: 'Flexible remote work options with home office setup support.'
    },
    {
      title: 'Team Building',
      description: 'Regular team events, hackathons, and collaborative projects.'
    },
    {
      title: 'Innovation Time',
      description: 'Dedicated time for personal projects and innovation initiatives.'
    },
    {
      title: 'Competitive Compensation',
      description: 'Attractive salary packages with equity options and performance bonuses.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Hero Section */}
      <section className="py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Join Our <span className="text-cyan-400">Team</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8">
            Build the future of technology with us. Join a team of innovators, problem-solvers, and visionaries.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#open-positions"
              className="px-8 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors"
            >
              View Open Positions
            </a>
            <Link
              to="/contact"
              className="px-8 py-3 border border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500 hover:text-white transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Work With Zion Tech Group?</h2>
            <p className="text-xl text-slate-300">Join a company that values innovation, growth, and your success</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-cyan-500/30 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-cyan-500 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-2xl">⭐</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-slate-300 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="open-positions" className="py-20 bg-slate-800">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Open Positions</h2>
            <p className="text-xl text-slate-300">Join our team and help shape the future of technology</p>
          </div>
          
          <div className="space-y-8">
            {openPositions.map((position, index) => (
              <div
                key={position.title}
                className="bg-slate-700 rounded-2xl p-8 border border-slate-600 hover:border-cyan-500/30 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row justify-between items-start gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <h3 className="text-2xl font-bold text-white">{position.title}</h3>
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm border border-cyan-500/30">
                        {position.type}
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-6 mb-4 text-slate-300">
                      <span>{position.department}</span>
                      <span>•</span>
                      <span>{position.location}</span>
                      <span>•</span>
                      <span>{position.experience}</span>
                    </div>
                    
                    <p className="text-slate-300 leading-relaxed mb-6">{position.description}</p>
                    
                    <div>
                      <h4 className="text-white font-semibold mb-3">Requirements:</h4>
                      <ul className="space-y-2">
                        {position.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-slate-300">
                            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="lg:flex-shrink-0">
                    <Link
                      to="/contact"
                      className="px-6 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-all duration-300 whitespace-nowrap"
                    >
                      Apply Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Join Our Team?</h2>
          <p className="text-xl text-slate-300 mb-8">
            Take the first step towards an exciting career with Zion Tech Group. 
            We can't wait to see what we can accomplish together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-all duration-300"
            >
              Start Your Application
            </Link>
            <Link
              to="/about"
              className="px-8 py-4 border border-slate-600 text-white rounded-lg hover:bg-slate-800 transition-all duration-300"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
