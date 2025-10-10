'use client';
import React, { useState } from 'react';
import { 
  Star, 
  Users, 
  Heart, 
  Award, 
  MapPin, 
  Clock, 
  Briefcase, 
  CheckCircle, 
  ArrowRight, 
  Zap,
  Brain,
  Code,
  Shield,
  Globe,
  Phone,
  Mail,
  Calendar,
  DollarSign,
  TrendingUp
} from 'lucide-react';

const CareersPage: React.FC = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  const departments = [
    { id: 'all', name: 'All Positions', count: 12 },
    { id: 'engineering', name: 'Engineering', count: 5 },
    { id: 'ai-research', name: 'AI Research', count: 3 },
    { id: 'sales', name: 'Sales & Marketing', count: 2 },
    { id: 'support', name: 'Customer Support', count: 2 }
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: 'Competitive Salary',
      description: 'Above-market compensation with performance bonuses'
    },
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance and wellness programs'
    },
    {
      icon: Calendar,
      title: 'Flexible Schedule',
      description: 'Work-life balance with flexible hours and remote options'
    },
    {
      icon: TrendingUp,
      title: 'Career Growth',
      description: 'Professional development and advancement opportunities'
    },
    {
      icon: Globe,
      title: 'Remote Work',
      description: 'Work from anywhere with our global remote policy'
    },
    {
      icon: Award,
      title: 'Recognition',
      description: 'Regular recognition and rewards for outstanding work'
    }
  ];

  const openPositions = [
    {
      id: 1,
      title: 'Senior AI Engineer',
      department: 'engineering',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead the development of cutting-edge AI solutions and machine learning models.',
      requirements: [
        'Master\'s degree in Computer Science or related field',
        '5+ years of experience in AI/ML development',
        'Proficiency in Python, TensorFlow, PyTorch',
        'Experience with cloud platforms (AWS, Azure, GCP)',
        'Strong problem-solving and communication skills'
      ],
      salary: '$120,000 - $180,000'
    },
    {
      id: 2,
      title: 'AI Research Scientist',
      department: 'ai-research',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Conduct groundbreaking research in artificial intelligence and publish findings.',
      requirements: [
        'PhD in Computer Science, AI, or related field',
        '3+ years of research experience',
        'Published papers in top-tier conferences',
        'Experience with deep learning frameworks',
        'Strong mathematical and analytical skills'
      ],
      salary: '$100,000 - $150,000'
    },
    {
      id: 3,
      title: 'Full Stack Developer',
      department: 'engineering',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Build scalable web applications and microservices for our platform.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '3+ years of full-stack development experience',
        'Proficiency in React, Node.js, TypeScript',
        'Experience with cloud platforms and databases',
        'Strong understanding of software architecture'
      ],
      salary: '$80,000 - $120,000'
    },
    {
      id: 4,
      title: 'AI Solutions Architect',
      department: 'engineering',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '7+ years',
      description: 'Design and implement AI solutions for enterprise clients.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '7+ years of experience in AI/ML and enterprise solutions',
        'Experience with cloud AI services',
        'Strong client-facing and presentation skills',
        'Knowledge of enterprise architecture patterns'
      ],
      salary: '$130,000 - $200,000'
    },
    {
      id: 5,
      title: 'Sales Engineer',
      department: 'sales',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Help clients understand and implement our AI and IT solutions.',
      requirements: [
        'Bachelor\'s degree in Engineering or related field',
        '3+ years of technical sales experience',
        'Understanding of AI and cloud technologies',
        'Excellent communication and presentation skills',
        'Experience with enterprise sales cycles'
      ],
      salary: '$70,000 - $110,000 + Commission'
    },
    {
      id: 6,
      title: 'Customer Success Manager',
      department: 'support',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '2+ years',
      description: 'Ensure client success and satisfaction with our solutions.',
      requirements: [
        'Bachelor\'s degree in Business or related field',
        '2+ years of customer success experience',
        'Understanding of SaaS and AI technologies',
        'Strong relationship-building skills',
        'Experience with CRM systems'
      ],
      salary: '$60,000 - $90,000'
    }
  ];

  const filteredPositions = selectedDepartment === 'all' 
    ? openPositions 
    : openPositions.filter(position => position.department === selectedDepartment);

  const companyValues = [
    {
      icon: Brain,
      title: 'Innovation',
      description: 'We push the boundaries of what\'s possible with technology'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work together to achieve extraordinary results'
    },
    {
      icon: Shield,
      title: 'Integrity',
      description: 'We maintain the highest ethical standards in everything we do'
    },
    {
      icon: Globe,
      title: 'Impact',
      description: 'We create solutions that make a positive difference in the world'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Join Our <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Team</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Be part of a team that's shaping the future of AI and technology. 
            Work on cutting-edge projects and make a real impact on businesses worldwide.
          </p>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide our work and shape our company culture
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => (
              <div
                key={value.title}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Work With Us?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We offer competitive benefits and a supportive work environment
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Department Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {departments.map((department) => (
              <button
                key={department.id}
                onClick={() => setSelectedDepartment(department.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedDepartment === department.id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                <span>{department.name}</span>
                <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
                  {department.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Open Positions
            </h2>
            <p className="text-xl text-gray-300">
              Find your next career opportunity with us
            </p>
          </div>
          
          <div className="space-y-8">
            {filteredPositions.map((position) => (
              <div
                key={position.id}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{position.title}</h3>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-4">
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{position.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Briefcase className="w-4 h-4" />
                        <span>{position.type}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{position.experience}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <DollarSign className="w-4 h-4" />
                        <span>{position.salary}</span>
                      </div>
                    </div>
                    <p className="text-gray-300 mb-4">{position.description}</p>
                  </div>
                  <a
                    href={`/careers/apply/${position.id}`}
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-2"
                  >
                    <span>Apply Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Requirements:</h4>
                  <ul className="space-y-2">
                    {position.requirements.map((requirement, idx) => (
                      <li key={idx} className="flex items-start text-gray-300">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
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

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Don't See the Right Role?
          </h2>
          <p className="text-xl text-cyan-100 mb-8">
            We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/contact"
              className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center space-x-2"
            >
              <span>Send Resume</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="tel:+13024640950"
              className="border-2 border-white text-white hover:bg-white hover:text-cyan-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Call (302) 464-0950</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;