import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Users, Briefcase, MapPin, Clock, ArrowRight, CheckCircle } from 'lucide-react';

const CareersPage: React.FC = () => {
  const openPositions = [
    {
      title: 'Senior AI Engineer',
      department: 'Engineering',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      description: 'Lead development of cutting-edge AI solutions and machine learning models for enterprise clients.',
      requirements: ['5+ years AI/ML experience', 'Python, TensorFlow, PyTorch', 'PhD in Computer Science preferred']
    },
    {
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      description: 'Manage cloud infrastructure and implement CI/CD pipelines for scalable AI applications.',
      requirements: ['3+ years DevOps experience', 'AWS/Azure/GCP', 'Kubernetes, Docker', 'Terraform']
    },
    {
      title: 'AI Solutions Architect',
      department: 'Solutions',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      description: 'Design and implement AI solutions for enterprise clients across various industries.',
      requirements: ['7+ years experience', 'AI/ML architecture', 'Enterprise solutions', 'Client-facing skills']
    },
    {
      title: 'Data Scientist',
      department: 'Data Science',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      description: 'Analyze complex datasets and develop predictive models for business intelligence.',
      requirements: ['4+ years data science', 'Python, R, SQL', 'Machine learning', 'Statistics background']
    },
    {
      title: 'Frontend Developer',
      department: 'Engineering',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      description: 'Build modern, responsive web applications using React and TypeScript.',
      requirements: ['3+ years frontend', 'React, TypeScript', 'CSS, Tailwind', 'UI/UX experience']
    },
    {
      title: 'Cybersecurity Specialist',
      department: 'Security',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      description: 'Protect our systems and client data with advanced security measures and monitoring.',
      requirements: ['4+ years security', 'CISSP/CISM certified', 'Penetration testing', 'Incident response']
    }
  ];

  const benefits = [
    'Competitive salary and equity',
    'Comprehensive health insurance',
    'Flexible remote work options',
    'Professional development budget',
    '401(k) with company matching',
    'Unlimited PTO policy',
    'Latest technology and equipment',
    'Team building events and retreats'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
              Join Our Team
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Build the future of AI technology with a team of passionate innovators and industry leaders
            </p>
          </div>

          {/* Company Culture */}
          <div className="cyber-card hologram-card p-8 mb-16">
            <h2 className="text-3xl font-bold text-cyan-400 mb-8 text-center">Why Work at Zion Tech Group?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <Users className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Innovation First</h3>
                <p className="text-gray-300">
                  Work on cutting-edge AI projects that shape the future of technology and business.
                </p>
              </div>
              <div className="text-center">
                <Briefcase className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Growth Opportunities</h3>
                <p className="text-gray-300">
                  Advance your career with mentorship, training, and challenging projects.
                </p>
              </div>
              <div className="text-center">
                <MapPin className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Flexible Work</h3>
                <p className="text-gray-300">
                  Work from anywhere with our remote-first culture and flexible schedules.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Our Mission</h3>
                <p className="text-gray-300 leading-relaxed">
                  We're on a mission to democratize AI technology and make it accessible to businesses of all sizes. 
                  Join us in building solutions that transform industries and create positive impact.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Our Values</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Innovation and continuous learning
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Collaboration and teamwork
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Integrity and transparency
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Customer success focus
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="cyber-card hologram-card p-8 mb-16">
            <h2 className="text-3xl font-bold text-cyan-400 mb-8 text-center">Benefits & Perks</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="cyber-card p-4 text-center">
                  <CheckCircle className="w-6 h-6 text-green-400 mx-auto mb-3" />
                  <p className="text-gray-300 text-sm">{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Open Positions */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-cyan-400 mb-8 text-center">Open Positions</h2>
            
            <div className="space-y-6">
              {openPositions.map((position, index) => (
                <div key={index} className="cyber-card hologram-card p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{position.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                        <span className="flex items-center">
                          <Briefcase className="w-4 h-4 mr-1" />
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
                    <button className="mt-4 lg:mt-0 bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors flex items-center">
                      Apply Now
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{position.description}</p>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Requirements:</h4>
                    <ul className="flex flex-wrap gap-2">
                      {position.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-xs">
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Application Process */}
          <div className="cyber-card hologram-card p-8 mb-16">
            <h2 className="text-3xl font-bold text-cyan-400 mb-8 text-center">Application Process</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">1</div>
                <h3 className="text-lg font-semibold text-white mb-2">Apply Online</h3>
                <p className="text-gray-300 text-sm">Submit your application with resume and cover letter</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">2</div>
                <h3 className="text-lg font-semibold text-white mb-2">Initial Review</h3>
                <p className="text-gray-300 text-sm">Our team reviews your application and qualifications</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">3</div>
                <h3 className="text-lg font-semibold text-white mb-2">Interviews</h3>
                <p className="text-gray-300 text-sm">Technical and cultural fit interviews with the team</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">4</div>
                <h3 className="text-lg font-semibold text-white mb-2">Offer</h3>
                <p className="text-gray-300 text-sm">Receive your offer and join our amazing team!</p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="cyber-card hologram-card p-8 text-center">
            <h2 className="text-3xl font-bold text-cyan-400 mb-6">Ready to Join Us?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Don't see a position that matches your skills? We're always looking for talented individuals. 
              Send us your resume and let us know how you can contribute to our mission.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:careers@ziontechgroup.com?subject=General%20Application"
                className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Send Your Resume
              </a>
              <a 
                href="mailto:careers@ziontechgroup.com?subject=Questions%20About%20Careers"
                className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Ask Questions
              </a>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CareersPage;
