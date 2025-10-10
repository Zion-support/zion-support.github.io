'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Link from 'next/link';
import { 
  MapPin, 
  Clock, 
  Users, 
  Briefcase, 
  GraduationCap, 
  Heart, 
  Zap, 
  Shield, 
  Globe, 
  CheckCircle, 
  ArrowRight,
  Search,
  Filter
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const CareersPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  const openPositions = [
    {
      id: 1,
      title: 'Senior AI Engineer',
      department: 'AI Solutions',
      location: 'Remote',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead the development of cutting-edge AI solutions and machine learning models.',
      requirements: ['PhD in Computer Science or related field', '5+ years ML experience', 'Python, TensorFlow, PyTorch'],
      benefits: ['Competitive salary', 'Health insurance', 'Remote work', 'Learning budget']
    },
    {
      id: 2,
      title: 'Cloud Architect',
      department: 'Cloud Services',
      location: 'New York, NY',
      type: 'Full-time',
      experience: '7+ years',
      description: 'Design and implement scalable cloud infrastructure solutions for enterprise clients.',
      requirements: ['AWS/Azure/GCP certifications', '7+ years cloud experience', 'Kubernetes, Docker'],
      benefits: ['Competitive salary', 'Health insurance', '401k matching', 'Flexible hours']
    },
    {
      id: 3,
      title: 'Cybersecurity Specialist',
      department: 'Security',
      location: 'San Francisco, CA',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Protect our clients\' digital assets with advanced security solutions and threat detection.',
      requirements: ['CISSP or similar certification', '4+ years security experience', 'Penetration testing skills'],
      benefits: ['Competitive salary', 'Health insurance', 'Stock options', 'Professional development']
    },
    {
      id: 4,
      title: 'Data Scientist',
      department: 'Analytics',
      location: 'Remote',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Transform complex data into actionable insights using advanced analytics and machine learning.',
      requirements: ['MS in Data Science or related field', '3+ years analytics experience', 'SQL, Python, R'],
      benefits: ['Competitive salary', 'Health insurance', 'Remote work', 'Conference attendance']
    },
    {
      id: 5,
      title: 'Full Stack Developer',
      department: 'Development',
      location: 'Austin, TX',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Build scalable web applications using modern technologies and best practices.',
      requirements: ['3+ years full-stack experience', 'React, Node.js, TypeScript', 'Database design skills'],
      benefits: ['Competitive salary', 'Health insurance', 'Flexible hours', 'Learning budget']
    },
    {
      id: 6,
      title: 'DevOps Engineer',
      department: 'Infrastructure',
      location: 'Seattle, WA',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Streamline development workflows and maintain reliable infrastructure systems.',
      requirements: ['4+ years DevOps experience', 'CI/CD pipelines', 'Infrastructure as Code'],
      benefits: ['Competitive salary', 'Health insurance', 'Stock options', 'Home office setup']
    }
  ];

  const departments = ['all', 'AI Solutions', 'Cloud Services', 'Security', 'Analytics', 'Development', 'Infrastructure'];

  const filteredPositions = openPositions.filter(position => {
    const matchesSearch = position.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         position.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = selectedDepartment === 'all' || position.department === selectedDepartment;
    return matchesSearch && matchesDepartment;
  });

  const benefits = [
    'Competitive salary and equity',
    'Comprehensive health insurance',
    'Flexible work arrangements',
    'Professional development budget',
    '401k matching program',
    'Unlimited PTO policy',
    'Home office setup allowance',
    'Learning and conference budget'
  ];

  const values = [
    {
      icon: Heart,
      title: 'Work-Life Balance',
      description: 'We believe in maintaining a healthy balance between work and personal life.'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We encourage creative thinking and innovative solutions to complex problems.'
    },
    {
      icon: Shield,
      title: 'Security',
      description: 'We prioritize the security and privacy of our team and clients.'
    },
    {
      icon: Globe,
      title: 'Diversity',
      description: 'We celebrate diversity and create an inclusive environment for everyone.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Careers - Zion Tech Group</title>
        <meta name="description" content="Join our team of experts in AI, cloud computing, cybersecurity, and technology. Explore open positions and career opportunities." />
        <meta name="keywords" content="careers, jobs, AI engineer, cloud architect, cybersecurity, data scientist, full stack developer" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Join Our Team
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Be part of a team that's shaping the future of AI and IT solutions. 
              Explore exciting career opportunities with us.
            </p>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search positions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <select
                  value={selectedDepartment}
                  onChange={(e) => setSelectedDepartment(e.target.value)}
                  className="pl-10 pr-8 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
                >
                  {departments.map(department => (
                    <option key={department} value={department} className="bg-slate-800">
                      {department === 'all' ? 'All Departments' : department}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8">Open Positions</h2>
            <div className="space-y-6">
              {filteredPositions.map((position) => (
                <div key={position.id} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/10 transition-all duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{position.title}</h3>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                        <div className="flex items-center">
                          <Briefcase className="w-4 h-4 mr-1" />
                          {position.department}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {position.location}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {position.type}
                        </div>
                        <div className="flex items-center">
                          <GraduationCap className="w-4 h-4 mr-1" />
                          {position.experience}
                        </div>
                      </div>
                    </div>
                    <button className="mt-4 lg:mt-0 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300">
                      Apply Now
                    </button>
                  </div>
                  <p className="text-gray-300 mb-4">{position.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Requirements</h4>
                      <ul className="space-y-1">
                        {position.requirements.map((req, index) => (
                          <li key={index} className="flex items-center text-sm text-gray-400">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Benefits</h4>
                      <ul className="space-y-1">
                        {position.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-center text-sm text-gray-400">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                            {benefit}
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

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Work With Us?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We offer competitive benefits and a supportive work environment
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Don't See the Right Position?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Submit Resume
                </button>
                <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default CareersPage;