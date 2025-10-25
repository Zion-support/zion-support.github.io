'use client';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Briefcase,
  MapPin,
  Clock,
  Users,
  ArrowRight,
  CheckCircle,
  Star,
  Phone,
  Mail,
  MapPin as Location,
  Calendar,
  Award,
  TrendingUp,
  Shield,
  Brain,
  Cloud,
  Code,
  Target,
  BarChart,
  Database,
  Settings,
  Globe,
  Zap,
  Activity,
  PieChart,
  TrendingDown,
  Compass,
  Navigation
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const CareersPage: React.FC = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [selectedType, setSelectedType] = useState('all');

  const departments = [
    { id: 'all', name: 'All Departments', icon: Briefcase },
    { id: 'engineering', name: 'Engineering', icon: Code },
    { id: 'ai', name: 'AI Research', icon: Brain },
    { id: 'cloud', name: 'Cloud Solutions', icon: Cloud },
    { id: 'security', name: 'Cybersecurity', icon: Shield },
    { id: 'design', name: 'Design', icon: Target },
    { id: 'marketing', name: 'Marketing', icon: TrendingUp },
    { id: 'sales', name: 'Sales', icon: Users }
  ];

  const locations = [
    { id: 'all', name: 'All Locations', icon: Globe },
    { id: 'remote', name: 'Remote', icon: Home },
    { id: 'new-york', name: 'New York', icon: MapPin },
    { id: 'san-francisco', name: 'San Francisco', icon: MapPin },
    { id: 'london', name: 'London', icon: MapPin },
    { id: 'singapore', name: 'Singapore', icon: MapPin }
  ];

  const jobTypes = [
    { id: 'all', name: 'All Types', icon: Briefcase },
    { id: 'full-time', name: 'Full-time', icon: Clock },
    { id: 'part-time', name: 'Part-time', icon: Clock },
    { id: 'contract', name: 'Contract', icon: Calendar },
    { id: 'internship', name: 'Internship', icon: Users }
  ];

  const openPositions = [
    {
      id: 1,
      title: 'Senior AI Engineer',
      department: 'engineering',
      location: 'remote',
      type: 'full-time',
      description: 'Lead the development of cutting-edge AI solutions and machine learning models.',
      requirements: [
        '5+ years experience in AI/ML',
        'Expert in Python, TensorFlow, PyTorch',
        'Experience with production ML systems',
        'Strong problem-solving skills'
      ],
      benefits: [
        'Competitive salary',
        'Health insurance',
        'Remote work flexibility',
        'Professional development budget'
      ],
      salary: '$120,000 - $180,000',
      posted: '2024-01-15',
      applicants: 45
    },
    {
      id: 2,
      title: 'Cloud Solutions Architect',
      department: 'cloud',
      location: 'san-francisco',
      type: 'full-time',
      description: 'Design and implement scalable cloud infrastructure solutions for enterprise clients.',
      requirements: [
        '7+ years cloud architecture experience',
        'Expert in AWS, Azure, GCP',
        'Experience with microservices',
        'Strong communication skills'
      ],
      benefits: [
        'Competitive salary',
        'Stock options',
        'Health insurance',
        'Flexible PTO'
      ],
      salary: '$140,000 - $200,000',
      posted: '2024-01-12',
      applicants: 32
    },
    {
      id: 3,
      title: 'Cybersecurity Specialist',
      department: 'security',
      location: 'new-york',
      type: 'full-time',
      description: 'Protect our clients from cyber threats and ensure security compliance.',
      requirements: [
        '4+ years cybersecurity experience',
        'Certifications: CISSP, CISM preferred',
        'Experience with threat detection',
        'Knowledge of compliance frameworks'
      ],
      benefits: [
        'Competitive salary',
        'Health insurance',
        'Professional development',
        'Work-life balance'
      ],
      salary: '$100,000 - $150,000',
      posted: '2024-01-10',
      applicants: 28
    },
    {
      id: 4,
      title: 'UX Designer',
      department: 'design',
      location: 'remote',
      type: 'full-time',
      description: 'Create intuitive and accessible user experiences for AI-powered applications.',
      requirements: [
        '3+ years UX design experience',
        'Proficiency in Figma, Sketch',
        'Experience with AI/ML interfaces',
        'Strong portfolio'
      ],
      benefits: [
        'Competitive salary',
        'Health insurance',
        'Remote work',
        'Design tools budget'
      ],
      salary: '$80,000 - $120,000',
      posted: '2024-01-08',
      applicants: 67
    },
    {
      id: 5,
      title: 'AI Research Intern',
      department: 'ai',
      location: 'london',
      type: 'internship',
      description: 'Work on cutting-edge AI research projects and contribute to our innovation efforts.',
      requirements: [
        'Pursuing PhD in AI/ML',
        'Strong programming skills',
        'Research experience preferred',
        'Passion for AI innovation'
      ],
      benefits: [
        'Stipend provided',
        'Mentorship program',
        'Research resources',
        'Potential full-time offer'
      ],
      salary: '$3,000 - $4,000/month',
      posted: '2024-01-05',
      applicants: 89
    },
    {
      id: 6,
      title: 'Marketing Manager',
      department: 'marketing',
      location: 'singapore',
      type: 'full-time',
      description: 'Lead marketing initiatives for our AI and technology solutions in the APAC region.',
      requirements: [
        '5+ years B2B marketing experience',
        'Experience in tech industry',
        'Strong analytical skills',
        'APAC market knowledge'
      ],
      benefits: [
        'Competitive salary',
        'Health insurance',
        'Travel opportunities',
        'Performance bonuses'
      ],
      salary: '$90,000 - $130,000',
      posted: '2024-01-03',
      applicants: 23
    }
  ];

  const filteredPositions = openPositions.filter(position => {
    const matchesDepartment = selectedDepartment === 'all' || position.department === selectedDepartment;
    const matchesLocation = selectedLocation === 'all' || position.location === selectedLocation;
    const matchesType = selectedType === 'all' || position.type === selectedType;
    return matchesDepartment && matchesLocation && matchesType;
  });

  const stats = [
    { icon: Users, value: '50+', label: 'Team Members' },
    { icon: Award, value: '15+', label: 'Open Positions' },
    { icon: TrendingUp, value: '95%', label: 'Employee Satisfaction' },
    { icon: Globe, value: '6', label: 'Countries' }
  ];

  const benefits = [
    {
      icon: Shield,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance, mental health support, and wellness programs.'
    },
    {
      icon: Brain,
      title: 'Learning & Development',
      description: 'Professional development budget, conference attendance, and skill-building opportunities.'
    },
    {
      icon: Globe,
      title: 'Flexible Work',
      description: 'Remote work options, flexible hours, and work-life balance initiatives.'
    },
    {
      icon: Award,
      title: 'Growth Opportunities',
      description: 'Clear career paths, mentorship programs, and advancement opportunities.'
    }
  ];

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer
        title="Careers - Zion Tech Group"
        description="Join our team of AI experts, engineers, and innovators. Explore open positions and discover opportunities to grow your career with us."
        keywords={["careers","jobs","AI jobs","engineering jobs","remote work","technology careers"]}
        canonicalUrl="https://ziontechgroup.com/careers"
      />

      <Navigation />

      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Briefcase className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Join Our Team
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Be part of a team that's transforming businesses through cutting-edge AI, cloud, and cybersecurity solutions. Explore opportunities to grow your career with us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#positions"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
              >
                View Open Positions
              </a>
              <a
                href="mailto:careers@ziontechgroup.com"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                Contact HR
              </a>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Filters */}
        <section className="mb-12" id="positions">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Department</h3>
                  <div className="flex flex-wrap gap-2">
                    {departments.map((dept) => (
                      <button
                        key={dept.id}
                        onClick={() => setSelectedDepartment(dept.id)}
                        className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                          selectedDepartment === dept.id
                            ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white'
                            : 'bg-white/10 text-gray-300 hover:bg-white/20'
                        }`}
                      >
                        <dept.icon className="w-4 h-4" />
                        {dept.name}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Location</h3>
                  <div className="flex flex-wrap gap-2">
                    {locations.map((loc) => (
                      <button
                        key={loc.id}
                        onClick={() => setSelectedLocation(loc.id)}
                        className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                          selectedLocation === loc.id
                            ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white'
                            : 'bg-white/10 text-gray-300 hover:bg-white/20'
                        }`}
                      >
                        <loc.icon className="w-4 h-4" />
                        {loc.name}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Job Type</h3>
                  <div className="flex flex-wrap gap-2">
                    {jobTypes.map((type) => (
                      <button
                        key={type.id}
                        onClick={() => setSelectedType(type.id)}
                        className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                          selectedType === type.id
                            ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white'
                            : 'bg-white/10 text-gray-300 hover:bg-white/20'
                        }`}
                      >
                        <type.icon className="w-4 h-4" />
                        {type.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="mb-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-8">Open Positions</h2>
            <div className="space-y-6">
              {filteredPositions.map((position) => (
                <div key={position.id} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:scale-105 transition-all duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{position.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-3">
                        <div className="flex items-center gap-1">
                          <Briefcase className="w-4 h-4" />
                          {departments.find(d => d.id === position.department)?.name}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {locations.find(l => l.id === position.location)?.name}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {jobTypes.find(t => t.id === position.type)?.name}
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          {position.applicants} applicants
                        </div>
                      </div>
                      <p className="text-gray-300 mb-4">{position.description}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-cyan-400 mb-2">{position.salary}</div>
                      <div className="text-sm text-gray-400">Posted {new Date(position.posted).toLocaleDateString()}</div>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="text-sm font-semibold text-white mb-2">Requirements:</h4>
                      <ul className="space-y-1">
                        {position.requirements.map((req, index) => (
                          <li key={index} className="flex items-center gap-2 text-sm text-gray-300">
                            <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white mb-2">Benefits:</h4>
                      <ul className="space-y-1">
                        {position.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-center gap-2 text-sm text-gray-300">
                            <Star className="w-3 h-3 text-yellow-400 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center gap-2">
                    Apply Now
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Work With Us?
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                We offer competitive benefits and a supportive work environment that helps you grow both personally and professionally.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Don't See Your Perfect Role?
            </h2>
            <p className="text-gray-300 mb-8">
              We're always looking for talented individuals. Send us your resume and let us know how you can contribute to our mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="mailto:careers@ziontechgroup.com"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Send Your Resume
              </a>
              <a
                href="tel:+1-302-464-0950"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300 flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call Us
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CareersPage;