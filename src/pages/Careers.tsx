import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, Users, Globe, Heart, Zap, Target, Award, Clock, MapPin, DollarSign, GraduationCap, Rocket, Lightbulb, Shield, Database, Brain, Code, Palette } from 'lucide-react';

export default function Careers() {
  const openPositions = [
    {
      title: 'Senior AI Engineer',
      department: 'AI & Machine Learning',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '5+ years',
      salary: '$120K - $180K',
      description: 'Lead the development of cutting-edge AI solutions and autonomous systems for enterprise clients.',
      skills: ['Python', 'TensorFlow', 'PyTorch', 'MLOps', 'AWS'],
      icon: Brain
    },
    {
      title: 'Cybersecurity Specialist',
      department: 'Security & Compliance',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '3+ years',
      salary: '$90K - $140K',
      description: 'Design and implement robust security frameworks and compliance automation systems.',
      skills: ['SOC2', 'ISO 27001', 'Penetration Testing', 'Incident Response', 'Cloud Security'],
      icon: Shield
    },
    {
      title: 'Quantum Computing Researcher',
      department: 'Research & Development',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: 'PhD + 2 years',
      salary: '$150K - $220K',
      description: 'Pioneer quantum algorithms and develop quantum neural network platforms.',
      skills: ['Quantum Computing', 'Quantum Algorithms', 'Qiskit', 'Research', 'Mathematics'],
      icon: Rocket
    },
    {
      title: 'Full-Stack Developer',
      department: 'Engineering',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '3+ years',
      salary: '$80K - $130K',
      description: 'Build scalable web applications and microservices for our AI-powered platforms.',
      skills: ['React', 'Node.js', 'TypeScript', 'AWS', 'Docker'],
      icon: Code
    },
    {
      title: 'UX/UI Designer',
      department: 'Design',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '4+ years',
      salary: '$85K - $135K',
      description: 'Create intuitive and engaging user experiences for our AI and technology platforms.',
      skills: ['Figma', 'User Research', 'Prototyping', 'Design Systems', 'Accessibility'],
      icon: Palette
    },
    {
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '4+ years',
      salary: '$95K - $150K',
      description: 'Optimize our infrastructure and deployment pipelines for maximum performance and reliability.',
      skills: ['Kubernetes', 'Docker', 'AWS', 'CI/CD', 'Monitoring'],
      icon: Database
    }
  ];

  const benefits = [
    {
      icon: Globe,
      title: 'Remote-First Culture',
      description: 'Work from anywhere in the world with flexible hours and location independence.'
    },
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance, mental health support, and wellness programs.'
    },
    {
      icon: Zap,
      title: 'Professional Growth',
      description: 'Continuous learning opportunities, conferences, and career development programs.'
    },
    {
      icon: Award,
      title: 'Competitive Compensation',
      description: 'Above-market salaries, equity options, and performance-based bonuses.'
    },
    {
      icon: Clock,
      title: 'Flexible Time Off',
      description: 'Unlimited PTO, paid holidays, and sabbatical opportunities.'
    },
    {
      icon: Users,
      title: 'Team Events',
      description: 'Regular team building activities, hackathons, and social events.'
    }
  ];

  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation First',
      description: 'We push boundaries and embrace cutting-edge technologies to solve complex problems.'
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from code quality to customer service.'
    },
    {
      icon: Heart,
      title: 'People Matter',
      description: 'Our team is our greatest asset, and we invest in their growth and well-being.'
    },
    {
      icon: Shield,
      title: 'Integrity',
      description: 'We operate with honesty, transparency, and ethical business practices.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      <div className="container mx-auto px-4 py-20">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Join Our <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Team</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Help us shape the future of AI and technology. Join a team of innovators, problem-solvers, and visionaries who are building the next generation of intelligent systems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#open-positions" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25">
              View Open Positions
            </a>
            <Link
              to="/contact"
              className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Company Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Our Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Why Work With Us
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Open Positions */}
        <div id="open-positions" className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Open Positions
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {openPositions.map((position, index) => {
              const Icon = position.icon;
              return (
                <div key={index} className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2">{position.title}</h3>
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full">
                          {position.department}
                        </span>
                        <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">
                          {position.type}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-sm mb-4">{position.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div className="flex items-center gap-2 text-gray-300">
                      <MapPin className="w-4 h-4" />
                      <span>{position.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300">
                      <Clock className="w-4 h-4" />
                      <span>{position.experience}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300">
                      <DollarSign className="w-4 h-4" />
                      <span>{position.salary}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300">
                      <GraduationCap className="w-4 h-4" />
                      <span>{position.department}</span>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Required Skills:</h4>
                    <div className="flex flex-wrap gap-2">
                      {position.skills.map((skill, idx) => (
                        <span key={idx} className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-lg font-medium transition-all duration-300">
                    Apply Now
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Application Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Application Process
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Apply</h3>
                <p className="text-gray-300 text-sm">Submit your resume and cover letter through our application portal.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Review</h3>
                <p className="text-gray-300 text-sm">Our team reviews your application and reaches out within 48 hours.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Interview</h3>
                <p className="text-gray-300 text-sm">Complete technical assessments and meet with our team members.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">4</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Join</h3>
                <p className="text-gray-300 text-sm">Welcome to the team! Start your journey with Zion Tech Group.</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">
              Don't See the Right Role?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              We're always looking for talented individuals to join our team. Send us your resume and let's discuss how you can contribute to our mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
              >
                Send Your Resume
              </Link>
              <button className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                Learn More About Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}