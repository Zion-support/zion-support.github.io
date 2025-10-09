'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const CareersPage: React.FC = () => {
  const openPositions = [
    {
      title: 'Senior AI Engineer',
      department: 'AI Research & Development',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead the development of cutting-edge AI solutions and machine learning models.',
      requirements: [
        'PhD or Master\'s in Computer Science, AI, or related field',
        '5+ years experience in machine learning and deep learning',
        'Expertise in Python, TensorFlow, PyTorch',
        'Experience with NLP, computer vision, or reinforcement learning',
        'Strong problem-solving and communication skills'
      ],
      benefits: ['Competitive salary', 'Equity options', 'Health insurance', 'Flexible work']
    },
    {
      title: 'Quantum Computing Researcher',
      department: 'Quantum Computing Lab',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Research and develop quantum algorithms and applications for business use cases.',
      requirements: [
        'PhD in Physics, Computer Science, or Quantum Computing',
        '3+ years experience in quantum computing research',
        'Knowledge of quantum algorithms and quantum machine learning',
        'Experience with Qiskit, Cirq, or similar frameworks',
        'Strong publication record in quantum computing'
      ],
      benefits: ['Research budget', 'Conference attendance', 'Publishing support', 'Cutting-edge lab access']
    },
    {
      title: 'Cybersecurity Specialist',
      department: 'Cybersecurity Division',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Protect our clients with advanced security solutions and threat detection systems.',
      requirements: [
        'Bachelor\'s in Cybersecurity, Computer Science, or related field',
        '4+ years experience in cybersecurity',
        'Certifications: CISSP, CISM, or similar',
        'Experience with SIEM, threat detection, and incident response',
        'Knowledge of zero-trust architecture and cloud security'
      ],
      benefits: ['Security training budget', 'Certification support', 'Latest security tools', 'Penetration testing lab']
    },
    {
      title: 'Product Manager - AI Solutions',
      department: 'Product & Design',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Drive product strategy and development for our AI-powered business solutions.',
      requirements: [
        'Bachelor\'s in Business, Computer Science, or related field',
        '3+ years product management experience',
        'Experience with AI/ML products and technologies',
        'Strong analytical and communication skills',
        'Experience with agile development methodologies'
      ],
      benefits: ['Product ownership', 'User research budget', 'Cross-functional collaboration', 'Career growth']
    },
    {
      title: 'DevOps Engineer',
      department: 'Cloud & Infrastructure',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Build and maintain scalable cloud infrastructure and CI/CD pipelines.',
      requirements: [
        'Bachelor\'s in Computer Science or related field',
        '3+ years DevOps experience',
        'Expertise in AWS, Azure, or GCP',
        'Experience with Docker, Kubernetes, and Terraform',
        'Knowledge of monitoring and logging tools'
      ],
      benefits: ['Cloud certification support', 'Latest tools and technologies', 'Infrastructure ownership', 'Automation focus']
    },
    {
      title: 'AI Solutions Architect',
      department: 'Business Development',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Design and implement AI solutions for enterprise clients across various industries.',
      requirements: [
        'Bachelor\'s in Computer Science, AI, or related field',
        '5+ years experience in AI solution architecture',
        'Experience with enterprise AI implementations',
        'Strong client-facing and presentation skills',
        'Knowledge of AI/ML platforms and tools'
      ],
      benefits: ['Client interaction', 'Solution design', 'Technical leadership', 'Industry exposure']
    }
  ];

  const benefits = [
    {
      category: 'Compensation & Growth',
      items: [
        'Competitive salary and equity options',
        'Performance-based bonuses',
        'Professional development budget',
        'Career advancement opportunities',
        'Conference and training attendance'
      ]
    },
    {
      category: 'Health & Wellness',
      items: [
        'Comprehensive health insurance',
        'Dental and vision coverage',
        'Mental health support',
        'Gym membership reimbursement',
        'Flexible work arrangements'
      ]
    },
    {
      category: 'Work Environment',
      items: [
        'Remote-first culture',
        'Cutting-edge technology access',
        'Collaborative team environment',
        'Innovation time and projects',
        'Modern office spaces'
      ]
    },
    {
      category: 'Learning & Development',
      items: [
        'AI and technology training programs',
        'Mentorship opportunities',
        'Internal knowledge sharing',
        'Research and development time',
        'Open source contributions'
      ]
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="Careers - Join Our AI & Technology Team | Zion Tech Group"
        description="Join our world-class team of AI researchers, quantum computing specialists, and technology experts. Explore open positions and become part of our mission to transform businesses."
        keywords={['careers', 'jobs', 'AI engineer jobs', 'quantum computing careers', 'cybersecurity jobs', 'tech careers']}
        canonicalUrl="https://ziontechgroup.com/careers"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="pt-16">
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-r from-purple-600/20 to-blue-600/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  Join Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Team</span>
                </h1>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                  Be part of a world-class team building the future of AI, quantum computing, and technology innovation. 
                  Help us transform businesses and make a real impact.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="#open-positions"
                    className="cyber-button text-lg px-8 py-4 inline-flex items-center justify-center"
                  >
                    View Open Positions
                  </a>
                  <a
                    href="/contact"
                    className="cyber-button-secondary text-lg px-8 py-4 inline-flex items-center justify-center"
                  >
                    Send Your Resume
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Why Work With Us */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Why Work With Us?</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Join a team that's passionate about innovation and making a real difference in the world.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="cyber-card p-8">
                    <h3 className="text-xl font-bold text-white mb-6">{benefit.category}</h3>
                    <ul className="space-y-3">
                      {benefit.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-300 text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Open Positions */}
          <section id="open-positions" className="py-20 bg-slate-800/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Open Positions</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Explore our current openings and find the perfect role for your skills and interests.
                </p>
              </div>
              
              <div className="space-y-8">
                {openPositions.map((position, index) => (
                  <div key={index} className="cyber-card p-8 group hover:scale-105 transition-transform duration-300">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                          {position.title}
                        </h3>
                        <div className="flex flex-wrap items-center space-x-4 text-sm text-gray-400 mb-4">
                          <span>{position.department}</span>
                          <span>•</span>
                          <span>{position.location}</span>
                          <span>•</span>
                          <span>{position.type}</span>
                          <span>•</span>
                          <span>{position.experience}</span>
                        </div>
                        <p className="text-gray-300">{position.description}</p>
                      </div>
                      <div className="mt-4 lg:mt-0 lg:ml-8">
                        <a
                          href="/contact"
                          className="cyber-button inline-flex items-center"
                        >
                          Apply Now
                          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </a>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-lg font-bold text-white mb-4">Requirements</h4>
                        <ul className="space-y-2">
                          {position.requirements.map((req, reqIndex) => (
                            <li key={reqIndex} className="flex items-start space-x-3">
                              <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-gray-300 text-sm">{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-bold text-white mb-4">Benefits</h4>
                        <ul className="space-y-2">
                          {position.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-start space-x-3">
                              <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-gray-300 text-sm">{benefit}</span>
                            </li>
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
          <section className="py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Application Process</h2>
                <p className="text-xl text-gray-300">
                  Our streamlined process ensures a smooth experience for all candidates.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-white">1</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Apply</h3>
                  <p className="text-gray-300">
                    Submit your application with resume and cover letter through our contact form.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-white">2</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Initial Review</h3>
                  <p className="text-gray-300">
                    Our team reviews your application and reaches out within 48 hours.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-white">3</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Interview</h3>
                  <p className="text-gray-300">
                    Technical and cultural fit interviews with our team members.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-white">4</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Decision</h3>
                  <p className="text-gray-300">
                    We make our decision and extend an offer to successful candidates.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Culture & Values */}
          <section className="py-20 bg-slate-800/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Culture & Values</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  We foster a culture of innovation, collaboration, and continuous learning.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="cyber-card p-8 text-center">
                  <div className="text-4xl mb-6">🚀</div>
                  <h3 className="text-xl font-bold text-white mb-4">Innovation First</h3>
                  <p className="text-gray-300">
                    We encourage experimentation and embrace cutting-edge technologies to stay ahead of the curve.
                  </p>
                </div>
                
                <div className="cyber-card p-8 text-center">
                  <div className="text-4xl mb-6">🤝</div>
                  <h3 className="text-xl font-bold text-white mb-4">Collaboration</h3>
                  <p className="text-gray-300">
                    We believe in the power of teamwork and cross-functional collaboration to achieve great results.
                  </p>
                </div>
                
                <div className="cyber-card p-8 text-center">
                  <div className="text-4xl mb-6">📚</div>
                  <h3 className="text-xl font-bold text-white mb-4">Continuous Learning</h3>
                  <p className="text-gray-300">
                    We invest in our team's growth with training, conferences, and opportunities to learn new skills.
                  </p>
                </div>
                
                <div className="cyber-card p-8 text-center">
                  <div className="text-4xl mb-6">🎯</div>
                  <h3 className="text-xl font-bold text-white mb-4">Impact Driven</h3>
                  <p className="text-gray-300">
                    We focus on delivering real value to our clients and making a positive impact on the world.
                  </p>
                </div>
                
                <div className="cyber-card p-8 text-center">
                  <div className="text-4xl mb-6">💡</div>
                  <h3 className="text-xl font-bold text-white mb-4">Creative Problem Solving</h3>
                  <p className="text-gray-300">
                    We approach challenges with creativity and find innovative solutions to complex problems.
                  </p>
                </div>
                
                <div className="cyber-card p-8 text-center">
                  <div className="text-4xl mb-6">🌍</div>
                  <h3 className="text-xl font-bold text-white mb-4">Global Impact</h3>
                  <p className="text-gray-300">
                    We're building technology that can transform businesses and improve lives around the world.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-gradient-to-r from-purple-600/20 to-blue-600/20">
            <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Join Our Team?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Don't see the perfect role? We're always looking for talented individuals. 
                Send us your resume and let us know how you'd like to contribute to our mission.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="cyber-button text-lg px-8 py-4 inline-flex items-center justify-center"
                >
                  Apply Now
                </a>
                <a
                  href="tel:+13024640950"
                  className="cyber-button-secondary text-lg px-8 py-4 inline-flex items-center justify-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call (302) 464-0950
                </a>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default CareersPage;