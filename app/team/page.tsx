'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const TeamPage: React.FC = () => {
  const teamMembers = [
    {
      name: 'Kleber J. Santos',
      position: 'Founder & CEO',
      bio: 'Visionary leader with 15+ years in AI and enterprise technology. Passionate about democratizing advanced technology for businesses.',
      expertise: ['AI Strategy', 'Enterprise Architecture', 'Business Development'],
      image: '👨‍💼',
      linkedin: 'https://linkedin.com/in/kleber-santos'
    },
    {
      name: 'Dr. Sarah Chen',
      position: 'Chief AI Officer',
      bio: 'Leading AI researcher with expertise in machine learning, natural language processing, and computer vision applications.',
      expertise: ['Machine Learning', 'Deep Learning', 'Computer Vision'],
      image: '👩‍🔬',
      linkedin: 'https://linkedin.com/in/sarah-chen-ai'
    },
    {
      name: 'Michael Rodriguez',
      position: 'CTO',
      bio: 'Technology architect with extensive experience in cloud infrastructure, DevOps, and scalable system design.',
      expertise: ['Cloud Architecture', 'DevOps', 'System Design'],
      image: '👨‍💻',
      linkedin: 'https://linkedin.com/in/michael-rodriguez-cto'
    },
    {
      name: 'Dr. Emily Watson',
      position: 'Head of Quantum Computing',
      bio: 'Quantum computing specialist with a PhD in Physics and expertise in quantum algorithms and applications.',
      expertise: ['Quantum Computing', 'Quantum Algorithms', 'Physics'],
      image: '👩‍🔬',
      linkedin: 'https://linkedin.com/in/emily-watson-quantum'
    },
    {
      name: 'David Kim',
      position: 'Head of Cybersecurity',
      bio: 'Cybersecurity expert with 12+ years protecting enterprise systems and implementing zero-trust security architectures.',
      expertise: ['Cybersecurity', 'Zero Trust', 'Threat Detection'],
      image: '👨‍🔒',
      linkedin: 'https://linkedin.com/in/david-kim-security'
    },
    {
      name: 'Lisa Thompson',
      position: 'Head of Product',
      bio: 'Product strategist with a focus on user experience and AI-powered applications that drive business value.',
      expertise: ['Product Strategy', 'UX Design', 'AI Applications'],
      image: '👩‍💼',
      linkedin: 'https://linkedin.com/in/lisa-thompson-product'
    }
  ];

  const departments = [
    {
      name: 'AI Research & Development',
      description: 'Our AI team develops cutting-edge algorithms and models that power our solutions.',
      members: 15,
      focus: 'Machine Learning, Deep Learning, NLP, Computer Vision'
    },
    {
      name: 'Quantum Computing Lab',
      description: 'Pioneering the future of computing with quantum algorithms and applications.',
      members: 8,
      focus: 'Quantum Algorithms, Quantum Hardware, Quantum Applications'
    },
    {
      name: 'Cybersecurity Division',
      description: 'Protecting businesses with advanced security solutions and threat detection.',
      members: 12,
      focus: 'Threat Detection, Zero Trust, Security Architecture'
    },
    {
      name: 'Cloud & Infrastructure',
      description: 'Building scalable, secure, and reliable cloud infrastructure solutions.',
      members: 10,
      focus: 'Cloud Architecture, DevOps, System Administration'
    },
    {
      name: 'Product & Design',
      description: 'Creating intuitive, powerful user experiences for our AI and IT solutions.',
      members: 8,
      focus: 'Product Strategy, UX Design, User Research'
    },
    {
      name: 'Business Development',
      description: 'Connecting businesses with the right technology solutions for their needs.',
      members: 6,
      focus: 'Client Relations, Solution Architecture, Growth Strategy'
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="Our Team - AI & Technology Experts | Zion Tech Group"
        description="Meet our world-class team of AI researchers, quantum computing specialists, cybersecurity experts, and technology leaders driving innovation."
        keywords={['team', 'AI experts', 'quantum computing team', 'cybersecurity specialists', 'technology leaders']}
        canonicalUrl="https://ziontechgroup.com/team"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="pt-16">
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-r from-purple-600/20 to-blue-600/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  Meet Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Team</span>
                </h1>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                  World-class experts in AI, quantum computing, cybersecurity, and technology innovation 
                  working together to transform businesses and drive the future.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/careers"
                    className="cyber-button text-lg px-8 py-4 inline-flex items-center justify-center"
                  >
                    Join Our Team
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
            </div>
          </section>

          {/* Leadership Team */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Leadership Team</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Our leadership team brings together decades of experience in AI, technology, and business innovation.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {teamMembers.map((member, index) => (
                  <div key={index} className="cyber-card p-8 text-center group hover:scale-105 transition-transform duration-300">
                    <div className="text-6xl mb-6">{member.image}</div>
                    <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                    <p className="text-cyan-400 font-medium mb-4">{member.position}</p>
                    <p className="text-gray-300 mb-6">{member.bio}</p>
                    
                    <div className="space-y-2 mb-6">
                      {member.expertise.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm mr-2 mb-2"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                    
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-transform inline-flex items-center"
                    >
                      LinkedIn
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Departments */}
          <section className="py-20 bg-slate-800/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Departments</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Specialized teams working together to deliver comprehensive technology solutions.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {departments.map((dept, index) => (
                  <div key={index} className="cyber-card p-8 group hover:scale-105 transition-transform duration-300">
                    <h3 className="text-xl font-bold text-white mb-4">{dept.name}</h3>
                    <p className="text-gray-300 mb-6">{dept.description}</p>
                    
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400">Team Size</span>
                        <span className="text-cyan-400 font-bold">{dept.members} members</span>
                      </div>
                      <div>
                        <span className="text-gray-400 text-sm">Focus Areas</span>
                        <p className="text-gray-300 text-sm mt-1">{dept.focus}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Company Culture */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Culture</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  We foster a culture of innovation, collaboration, and continuous learning.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="cyber-card p-8 text-center">
                  <div className="text-4xl mb-4">🚀</div>
                  <h3 className="text-xl font-bold text-white mb-4">Innovation First</h3>
                  <p className="text-gray-300">
                    We encourage experimentation and embrace cutting-edge technologies to stay ahead of the curve.
                  </p>
                </div>
                
                <div className="cyber-card p-8 text-center">
                  <div className="text-4xl mb-4">🤝</div>
                  <h3 className="text-xl font-bold text-white mb-4">Collaboration</h3>
                  <p className="text-gray-300">
                    We believe in the power of teamwork and cross-functional collaboration to achieve great results.
                  </p>
                </div>
                
                <div className="cyber-card p-8 text-center">
                  <div className="text-4xl mb-4">📚</div>
                  <h3 className="text-xl font-bold text-white mb-4">Continuous Learning</h3>
                  <p className="text-gray-300">
                    We invest in our team's growth with training, conferences, and opportunities to learn new skills.
                  </p>
                </div>
                
                <div className="cyber-card p-8 text-center">
                  <div className="text-4xl mb-4">🎯</div>
                  <h3 className="text-xl font-bold text-white mb-4">Impact Driven</h3>
                  <p className="text-gray-300">
                    We focus on delivering real value to our clients and making a positive impact on the world.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Join Our Team */}
          <section className="py-20 bg-slate-800/50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Join Our Team
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                We're always looking for talented individuals who share our passion for innovation and technology. 
                Explore our open positions and become part of our mission to transform businesses with AI and technology.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="cyber-card p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Open Positions</h3>
                  <ul className="space-y-3 text-left">
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span className="text-gray-300">Senior AI Engineer</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span className="text-gray-300">Quantum Computing Researcher</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span className="text-gray-300">Cybersecurity Specialist</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span className="text-gray-300">Product Manager</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span className="text-gray-300">DevOps Engineer</span>
                    </li>
                  </ul>
                </div>
                
                <div className="cyber-card p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Benefits</h3>
                  <ul className="space-y-3 text-left">
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span className="text-gray-300">Competitive salary & equity</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span className="text-gray-300">Health & dental insurance</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span className="text-gray-300">Flexible work arrangements</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span className="text-gray-300">Professional development budget</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span className="text-gray-300">Cutting-edge technology access</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/careers"
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
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default TeamPage;