import React from 'react';
import { Helmet } from 'react-helmet-async';
import { MapPin, Clock, Users, Heart, Zap, Target } from 'lucide-react';

const CareersPage: React.FC = () => {
  const benefits = [
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance, mental health support, and wellness programs.'
    },
    {
      icon: Zap,
      title: 'Learning & Development',
      description: 'Continuous learning opportunities, conference attendance, and skill development programs.'
    },
    {
      icon: Users,
      title: 'Flexible Work',
      description: 'Remote work options, flexible hours, and work-life balance initiatives.'
    },
    {
      icon: Target,
      title: 'Career Growth',
      description: 'Clear career paths, mentorship programs, and advancement opportunities.'
    }
  ];

  const openPositions = [
    {
      title: 'Senior AI Engineer',
      department: 'Engineering',
      location: 'Remote / Delaware',
      type: 'Full-time',
      description: 'Lead the development of cutting-edge AI solutions and machine learning models.',
      requirements: [
        '5+ years of experience in AI/ML development',
        'Strong background in Python, TensorFlow, PyTorch',
        'Experience with cloud platforms (AWS, Azure, GCP)',
        'PhD or Master\'s degree in Computer Science or related field'
      ]
    },
    {
      title: 'Full-Stack Developer',
      department: 'Engineering',
      location: 'Remote / Delaware',
      type: 'Full-time',
      description: 'Build scalable web applications and APIs using modern technologies.',
      requirements: [
        '3+ years of full-stack development experience',
        'Proficiency in React, Node.js, TypeScript',
        'Experience with databases (PostgreSQL, MongoDB)',
        'Knowledge of cloud deployment and DevOps practices'
      ]
    },
    {
      title: 'Cybersecurity Specialist',
      department: 'Security',
      location: 'Remote / Delaware',
      type: 'Full-time',
      description: 'Protect our systems and clients from cyber threats and vulnerabilities.',
      requirements: [
        '4+ years of cybersecurity experience',
        'Certifications: CISSP, CISM, or equivalent',
        'Experience with security tools and frameworks',
        'Strong understanding of compliance requirements'
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Careers - Zion Tech Group</title>
        <meta name="description" content="Join our team of innovative professionals building the future of AI and IT solutions. Explore career opportunities at Zion Tech Group." />
        <meta name="keywords" content="careers, jobs, employment, AI engineer, developer, cybersecurity, remote work" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-purple-900/20 to-cyan-900/20"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
              Join Our Team
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Build the future of technology with passionate innovators
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              We're looking for talented individuals who share our vision of transforming 
              businesses through innovative AI and IT solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Work With Us?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We offer more than just a job - we provide an environment where you can grow, 
              innovate, and make a real impact.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Open Positions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our current job openings and find the perfect role for you.
            </p>
          </div>
          
          <div className="space-y-8">
            {openPositions.map((position, index) => (
              <div key={index} className="bg-slate-800 rounded-2xl p-8 shadow-xl">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{position.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {position.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {position.type}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        {position.department}
                      </span>
                    </div>
                  </div>
                  <button className="mt-4 lg:mt-0 bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300">
                    Apply Now
                  </button>
                </div>
                
                <p className="text-gray-300 mb-6">{position.description}</p>
                
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Requirements:</h4>
                  <ul className="space-y-2">
                    {position.requirements.map((requirement, reqIndex) => (
                      <li key={reqIndex} className="flex items-start gap-2 text-gray-300">
                        <span className="text-purple-400 mt-1">•</span>
                        {requirement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Our Culture
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-12">
              At Zion Tech Group, we believe that great technology comes from great people. 
              We foster a culture of innovation, collaboration, and continuous learning where 
              every team member can thrive and make a meaningful impact.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div className="bg-slate-900 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-white mb-4">Innovation First</h3>
                <p className="text-gray-300">
                  We encourage creative thinking and experimentation. Every team member has 
                  the freedom to explore new ideas and technologies.
                </p>
              </div>
              
              <div className="bg-slate-900 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-white mb-4">Collaborative Spirit</h3>
                <p className="text-gray-300">
                  We work together as one team, sharing knowledge and supporting each other 
                  to achieve common goals.
                </p>
              </div>
              
              <div className="bg-slate-900 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-white mb-4">Growth Mindset</h3>
                <p className="text-gray-300">
                  We invest in our people's development and provide opportunities for 
                  continuous learning and career advancement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-cyan-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Don't See Your Perfect Role?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            We're always looking for talented individuals. Send us your resume and let us know 
            how you'd like to contribute to our mission.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 inline-flex items-center justify-center"
            >
              Send Your Resume
            </a>
            <a 
              href="/about" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors duration-300 inline-flex items-center justify-center"
            >
              Learn More About Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default CareersPage;