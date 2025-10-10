'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { MapPin, Clock, Users, ArrowRight, CheckCircle, Star, Briefcase, GraduationCap } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

interface JobPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  posted: string;
  description: string;
  requirements: string[];
  benefits: string[];
  featured: boolean;
}

const CareersPage: React.FC = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('All');

  const jobPositions: JobPosition[] = [
    {
      id: '1',
      title: 'Senior AI Engineer',
      department: 'Engineering',
      location: 'Remote / New York',
      type: 'Full-time',
      experience: '5+ years',
      posted: '2 days ago',
      description: 'Lead the development of cutting-edge AI solutions and machine learning models.',
      requirements: [
        'Master\'s degree in Computer Science or related field',
        '5+ years of experience in AI/ML development',
        'Proficiency in Python, TensorFlow, PyTorch',
        'Experience with cloud platforms (AWS, Azure, GCP)',
        'Strong problem-solving and communication skills'
      ],
      benefits: [
        'Competitive salary and equity',
        'Health, dental, and vision insurance',
        'Flexible work arrangements',
        'Professional development budget',
        'Unlimited PTO'
      ],
      featured: true
    },
    {
      id: '2',
      title: 'Frontend Developer',
      department: 'Engineering',
      location: 'San Francisco, CA',
      type: 'Full-time',
      experience: '3+ years',
      posted: '1 week ago',
      description: 'Build beautiful, responsive user interfaces for our AI-powered applications.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '3+ years of React/Next.js experience',
        'Strong TypeScript skills',
        'Experience with modern CSS frameworks',
        'Portfolio demonstrating UI/UX skills'
      ],
      benefits: [
        'Competitive salary',
        'Health insurance',
        '401(k) matching',
        'Learning and development opportunities',
        'Team building events'
      ],
      featured: true
    },
    {
      id: '3',
      title: 'AI Product Manager',
      department: 'Product',
      location: 'Remote / Austin',
      type: 'Full-time',
      experience: '4+ years',
      posted: '3 days ago',
      description: 'Drive product strategy and roadmap for our AI-powered solutions.',
      requirements: [
        'Bachelor\'s degree in Business or Technical field',
        '4+ years of product management experience',
        'Experience with AI/ML products',
        'Strong analytical and communication skills',
        'MBA preferred'
      ],
      benefits: [
        'Competitive salary and equity',
        'Comprehensive health benefits',
        'Flexible work schedule',
        'Professional development',
        'Stock options'
      ],
      featured: false
    },
    {
      id: '4',
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      experience: '4+ years',
      posted: '1 week ago',
      description: 'Manage and scale our cloud infrastructure and deployment pipelines.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '4+ years of DevOps experience',
        'Experience with AWS, Docker, Kubernetes',
        'CI/CD pipeline expertise',
        'Infrastructure as Code (Terraform)'
      ],
      benefits: [
        'Competitive salary',
        'Health and dental insurance',
        'Remote work flexibility',
        'Professional development budget',
        'Generous PTO'
      ],
      featured: false
    },
    {
      id: '5',
      title: 'Sales Engineer',
      department: 'Sales',
      location: 'New York, NY',
      type: 'Full-time',
      experience: '3+ years',
      posted: '5 days ago',
      description: 'Help clients understand and implement our AI solutions.',
      requirements: [
        'Bachelor\'s degree in Engineering or Business',
        '3+ years of technical sales experience',
        'Strong presentation and communication skills',
        'Experience with enterprise software',
        'AI/ML knowledge preferred'
      ],
      benefits: [
        'Base salary + commission',
        'Health insurance',
        'Sales training and development',
        'Travel opportunities',
        'Performance bonuses'
      ],
      featured: false
    },
    {
      id: '6',
      title: 'UX Designer',
      department: 'Design',
      location: 'Remote / Seattle',
      type: 'Full-time',
      experience: '3+ years',
      posted: '2 weeks ago',
      description: 'Design intuitive user experiences for our AI-powered applications.',
      requirements: [
        'Bachelor\'s degree in Design or related field',
        '3+ years of UX/UI design experience',
        'Proficiency in Figma, Sketch, Adobe Creative Suite',
        'Experience with user research and testing',
        'Portfolio demonstrating design skills'
      ],
      benefits: [
        'Competitive salary',
        'Health and vision insurance',
        'Design tools and software',
        'Creative freedom',
        'Team collaboration'
      ],
      featured: false
    }
  ];

  const departments = ['All', 'Engineering', 'Product', 'Sales', 'Design', 'Marketing', 'Operations'];

  const filteredPositions = jobPositions.filter(position => 
    selectedDepartment === 'All' || position.department === selectedDepartment
  );

  const featuredPositions = jobPositions.filter(position => position.featured);
  const regularPositions = filteredPositions.filter(position => !position.featured);

  return (
    <>
      <Helmet>
        <title>Careers - Zion Tech Group | Join Our AI Innovation Team</title>
        <meta name="description" content="Join Zion Tech Group and help shape the future of AI. We're hiring talented engineers, designers, and innovators to build cutting-edge solutions." />
        <meta name="keywords" content="AI careers, tech jobs, software engineering, product management, remote jobs, startup careers" />
      </Helmet>

      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(0,255,255,0.1)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.1)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Join Our Team
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Help us build the future of AI. We're looking for passionate innovators to join our mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                View Open Positions
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Learn About Us
              </button>
            </div>
          </div>
        </section>

        {/* Why Work With Us */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Why Work With Us?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Star className="w-8 h-8 text-slate-900" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Innovation</h3>
                <p className="text-gray-300">Work on cutting-edge AI projects that shape the future</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-8 h-8 text-slate-900" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Great Team</h3>
                <p className="text-gray-300">Collaborate with talented, passionate professionals</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Briefcase className="w-8 h-8 text-slate-900" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Growth</h3>
                <p className="text-gray-300">Advance your career with learning opportunities</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <GraduationCap className="w-8 h-8 text-slate-900" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Learning</h3>
                <p className="text-gray-300">Continuous learning and skill development</p>
              </div>
            </div>
          </div>
        </section>

        {/* Department Filter */}
        <section className="py-8 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="flex flex-wrap gap-2 justify-center">
                {departments.map((department) => (
                  <button
                    key={department}
                    onClick={() => setSelectedDepartment(department)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedDepartment === department
                        ? 'bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    {department}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Positions */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Featured Positions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredPositions.map((position) => (
                <div key={position.id} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                        {position.title}
                      </h3>
                      <p className="text-gray-300 mb-2">{position.department}</p>
                    </div>
                    <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full">
                      Featured
                    </span>
                  </div>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {position.description}
                  </p>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{position.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{position.type}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>Posted {position.posted}</span>
                    </div>
                  </div>
                  
                  <button className="w-full py-3 px-4 rounded-lg font-semibold transition-all duration-300 bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 hover:from-cyan-300 hover:to-purple-300 transform hover:scale-105 flex items-center justify-center gap-2">
                    Apply Now
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* All Positions */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              All Open Positions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularPositions.map((position) => (
                <div key={position.id} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {position.title}
                  </h3>
                  <p className="text-gray-300 mb-3">{position.department}</p>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {position.description}
                  </p>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{position.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{position.type}</span>
                    </div>
                  </div>
                  
                  <button className="w-full py-2 px-4 rounded-lg font-semibold transition-all duration-300 bg-slate-700/50 text-white border border-cyan-500/30 hover:bg-cyan-500/20 hover:border-cyan-400/50 flex items-center justify-center gap-2">
                    View Details
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
            
            {regularPositions.length === 0 && (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-white mb-2">No positions found</h3>
                <p className="text-gray-400">Try selecting a different department or check back later.</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-4">
                Don't See Your Dream Job?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Send Resume
                </button>
                <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default CareersPage;