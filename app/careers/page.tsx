import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { MapPin, Clock, Users, Briefcase, GraduationCap, Heart, Zap, Brain, Code, Shield } from 'lucide-react';

const CareersPage: React.FC = () => {
  const openPositions = [
    {
      title: 'Senior AI Engineer',
      department: 'AI Solutions',
      location: 'Middletown, DE / Remote',
      type: 'Full-time',
      icon: Brain,
      description: 'Lead development of cutting-edge AI solutions and machine learning models.',
      requirements: [
        '5+ years experience in AI/ML development',
        'Expertise in Python, TensorFlow, PyTorch',
        'Experience with cloud platforms (AWS, Azure, GCP)',
        'Strong problem-solving and communication skills'
      ]
    },
    {
      title: 'Full-Stack Developer',
      department: 'Engineering',
      location: 'Middletown, DE / Remote',
      type: 'Full-time',
      icon: Code,
      description: 'Build scalable web applications and microservices for our AI platform.',
      requirements: [
        '3+ years full-stack development experience',
        'Proficiency in React, Node.js, TypeScript',
        'Experience with databases (PostgreSQL, MongoDB)',
        'Knowledge of DevOps practices'
      ]
    },
    {
      title: 'Cybersecurity Specialist',
      department: 'Security',
      location: 'Middletown, DE / Remote',
      type: 'Full-time',
      icon: Shield,
      description: 'Protect our systems and client data with advanced security measures.',
      requirements: [
        '4+ years cybersecurity experience',
        'Certifications (CISSP, CISM, CEH) preferred',
        'Experience with security frameworks',
        'Knowledge of compliance requirements'
      ]
    },
    {
      title: 'AI Product Manager',
      department: 'Product',
      location: 'Middletown, DE / Remote',
      type: 'Full-time',
      icon: Zap,
      description: 'Drive product strategy and roadmap for our AI solutions.',
      requirements: [
        '3+ years product management experience',
        'Background in AI/ML or technology',
        'Strong analytical and communication skills',
        'Experience with agile methodologies'
      ]
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health, dental, and vision coverage for you and your family'
    },
    {
      icon: GraduationCap,
      title: 'Learning & Development',
      description: 'Annual learning budget, conference attendance, and professional development opportunities'
    },
    {
      icon: Zap,
      title: 'Cutting-Edge Technology',
      description: 'Work with the latest AI technologies and tools in a forward-thinking environment'
    },
    {
      icon: Users,
      title: 'Collaborative Culture',
      description: 'Join a diverse team of innovators who are passionate about AI and technology'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Join Our <span className="text-cyan-400">AI Revolution</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Be part of the team that's transforming businesses with cutting-edge AI technology. 
            We're looking for passionate innovators to help shape the future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#open-positions"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
            >
              View Open Positions
            </a>
            <a
              href="#culture"
              className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-200"
            >
              Learn About Our Culture
            </a>
          </div>
        </section>

        {/* Why Join Us */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Why Choose Zion Tech Group?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Open Positions */}
        <section id="open-positions" className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Open Positions
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {openPositions.map((position, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <position.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">{position.title}</h3>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">
                        {position.department}
                      </span>
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
                        {position.type}
                      </span>
                    </div>
                    <div className="flex items-center text-gray-300 text-sm mb-3">
                      <MapPin className="w-4 h-4 mr-2" />
                      {position.location}
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{position.description}</p>
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-2">Requirements:</h4>
                  <ul className="space-y-1">
                    {position.requirements.map((req, reqIndex) => (
                      <li key={reqIndex} className="text-gray-300 text-sm flex items-start">
                        <span className="text-cyan-400 mr-2">•</span>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
                <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Culture Section */}
        <section id="culture" className="mb-16">
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
            <h2 className="text-3xl font-bold text-white text-center mb-8">
              Our Culture & Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Innovation First</h3>
                <p className="text-gray-300">
                  We encourage creative thinking and embrace new ideas that push the boundaries of what's possible with AI.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Collaborative Spirit</h3>
                <p className="text-gray-300">
                  We believe in the power of teamwork and diverse perspectives to solve complex challenges.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Excellence Driven</h3>
                <p className="text-gray-300">
                  We strive for excellence in everything we do, from code quality to client satisfaction.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-xl p-8 border border-cyan-500/30">
            <h2 className="text-3xl font-bold text-white mb-4">
              Don't See Your Perfect Role?
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              We're always looking for talented individuals who share our passion for AI innovation. 
              Send us your resume and let us know how you'd like to contribute.
            </p>
            <a
              href="mailto:careers@ziontechgroup.com"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
            >
              Send Us Your Resume
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CareersPage;
