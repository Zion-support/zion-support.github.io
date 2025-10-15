import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Users, ArrowRight, CheckCircle } from 'lucide-react';

const CareersPage: React.FC = () => {
  const openPositions = [
    {
      title: 'Senior AI Engineer',
      department: 'AI Research',
      location: 'Remote / Delaware',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead development of cutting-edge AI solutions and machine learning models.',
      requirements: [
        'PhD in Computer Science or related field',
        '5+ years experience in AI/ML',
        'Expertise in Python, TensorFlow, PyTorch',
        'Experience with cloud platforms (AWS, GCP, Azure)',
        'Strong problem-solving and communication skills'],
      benefits: [
        'Competitive salary and equity',
        'Health, dental, and vision insurance',
        'Flexible work arrangements',
        'Professional development budget',
        '401(k) with company matching']
    },
    {
      title: 'Full-Stack Developer',
      department: 'Engineering',
      location: 'Remote / Delaware',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Build scalable web applications and APIs for our AI platform.',
      requirements: [
        'Bachelor\'s degree in Computer Science',
        '3+ years full-stack development experience',
        'Proficiency in React, Node.js, TypeScript',
        'Experience with databases (PostgreSQL, MongoDB)',
        'Knowledge of cloud services and DevOps'],
      benefits: [
        'Competitive salary',
        'Comprehensive health benefits',
        'Remote work flexibility',
        'Learning and development opportunities',
        'Team building events']
    },
    {
      title: 'AI Product Manager',
      department: 'Product',
      location: 'Remote / Delaware',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Drive product strategy and roadmap for our AI solutions.',
      requirements: [
        'Bachelor\'s degree in Business or Technical field',
        '4+ years product management experience',
        'Experience with AI/ML products',
        'Strong analytical and communication skills',
        'MBA preferred'],
      benefits: [
        'Competitive salary and bonus',
        'Health and wellness benefits',
        'Flexible PTO policy',
        'Professional development opportunities',
        'Stock options']
    },
    {
      title: 'DevOps Engineer',
      department: 'Infrastructure',
      location: 'Remote / Delaware',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Manage cloud infrastructure and deployment pipelines.',
      requirements: [
        '3+ years DevOps experience',
        'Expertise in AWS, Docker, Kubernetes',
        'Experience with CI/CD pipelines',
        'Knowledge of monitoring and logging tools',
        'Scripting skills (Python, Bash)'],
      benefits: [
        'Competitive salary',
        'Health insurance',
        'Remote work options',
        'Certification reimbursement',
        'Performance bonuses']
    }
  ];

  const benefits = [
    {
      icon: '🚀',
      title: 'Innovation',
      description: 'We push the boundaries of what\'s possible with AI and technology.'
    },
    {
      icon: '🤝',
      title: 'Collaboration',
      description: 'We believe in the power of diverse teams working together.'
    },
    {
      icon: '📈',
      title: 'Growth',
      description: 'We invest in our people\'s professional and personal development.'
    },
    {
      icon: '⚡',
      title: 'Impact',
      description: 'We create solutions that make a real difference in the world.'
    }
  ];

  const stats = [
    { number: "50+", label: "Team Members" },
    { number: "15+", label: "Countries" },
    { number: "4.9/5", label: "Employee Satisfaction" },
    { number: "100%", label: "Remote Team" }
  ];

  return (
    <>
      <Helmet>
        <title>Careers - Zion Tech Group | Join Our Team</title>
        <meta name="description" content="Join Zion Tech Group and help us build the future of AI and technology. Explore open positions and career opportunities." />
        <meta name="keywords" content="careers, jobs, employment, AI engineer, developer, designer, remote work" />
        <meta property="og:title" content="Careers - Zion Tech Group" />
        <meta property="og:description" content="Join our team and help build the future of technology" />
        <meta property="og:type" content="website" />
      </Helmet>
      
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20">
          
        <div className="container mx-auto px-4">
            
        <div className="text-center max-w-4xl mx-auto">
              
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Join Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Team</span>
              </h1>
              
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Help us build the future of AI and technology. Join a team of passionate innovators who are transforming how businesses operate.
              </p>
              
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
    href="#open-positions"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  View Open Positions
                </a>
                <a
                  href="/contact"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* Stats Section */}
        <section className="py-16 bg-white/5 backdrop-blur-sm">
          
        <div className="container mx-auto px-4">
            
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  
        <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                  
        <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Benefits Section */}
        <section className="py-20">
          
        <div className="container mx-auto px-4">
            
        <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Why Work With Us?</h2>
              
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We offer competitive benefits and a culture that values innovation, collaboration, and personal growth.
              </p>
            </div>
            
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center group">
                  
        <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    
        <div className="text-white">{benefit.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                  
          <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Open Positions */}
        <section id="open-positions" className="py-20 bg-white/5 backdrop-blur-sm">
          
        <div className="container mx-auto px-4">
            
        <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Open Positions</h2>
              
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our current openings and find the perfect role for you.
              </p>
            </div>
            
        <div className="space-y-8 max-w-4xl mx-auto">
              {openPositions.map((position, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    
        <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2">{position.title}</h3>
                      
        <div className="flex flex-wrap gap-4 text-sm text-gray-300 mb-4">
                        
        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {position.location}
                        </div>
                        
        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {position.type}
                        </div>
                        
        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          {position.experience}
                        </div>
                        
        <div className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-xs">
                          {position.department}
                        </div>
                      </div>
                      
          <p className="text-gray-300 mb-4">{position.description}</p>
                    </div>
                    
        <div className="lg:ml-6">
                      <a
    const href = {`/contact?position=${encodeURIComponent(position.title)}`}
                        className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center group"
                      >
                        Apply Now
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                  
        <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg font-semibold text-cyan-400 mb-3">Requirements:</h4>
                      <ul className="space-y-2">
                        {position.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-1 flex-shrink-0" />
                            <span className="text-gray-300 text-sm">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-cyan-400 mb-3">Benefits:</h4>
                      <ul className="space-y-2">
                        {position.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-1 flex-shrink-0" />
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
        {/* CTA Section */}
        <section className="py-20">
          
        <div className="container mx-auto px-4">
            
        <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-white mb-6">Don't See Your Role?</h2>
              
          <p className="text-xl text-gray-300 mb-8">
                We're always looking for talented individuals. Send us your resume and let us know how you can contribute to our mission.
              </p>
              
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
    href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Send Your Resume
                </a>
                <a
    href="mailto:careers@ziontechgroup.com"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  Email Us
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Don't See the Right Role?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            We're always looking for talented individuals. Send us your resume and let's talk!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
    to="/contact"
              className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Send Your Resume
            </Link>
            <Link
    to="/about"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Learn About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
export default CareersPage;