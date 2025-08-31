import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  Briefcase, 
  Users, 
  Heart, 
  Zap, 
  Brain,
  Shield,
  Cloud,
  Code,
  Rocket,
  ArrowRight,
  CheckCircle,
  Star,
  Globe,
  Award,
  Lightbulb
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { SEO } from '../components/SEO';

export default function Careers() {
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');

  const departments = [
    { id: 'all', name: 'All Departments', icon: Briefcase },
    { id: 'engineering', name: 'Engineering', icon: Code },
    { id: 'ai-ml', name: 'AI & Machine Learning', icon: Brain },
    { id: 'sales', name: 'Sales & Business Development', icon: Target },
    { id: 'marketing', name: 'Marketing', icon: Lightbulb },
    { id: 'operations', name: 'Operations', icon: Settings },
    { id: 'design', name: 'Design & UX', icon: Palette },
    { id: 'data', name: 'Data Science', icon: BarChart3 },
    { id: 'security', name: 'Cybersecurity', icon: Shield },
    { id: 'quantum', name: 'Quantum Computing', icon: Atom }
  ];

  const locations = [
    { id: 'all', name: 'All Locations', icon: Globe },
    { id: 'remote', name: 'Remote', icon: Wifi },
    { id: 'middletown', name: 'Middletown, DE', icon: MapPin },
    { id: 'new-york', name: 'New York, NY', icon: MapPin },
    { id: 'san-francisco', name: 'San Francisco, CA', icon: MapPin },
    { id: 'london', name: 'London, UK', icon: MapPin },
    { id: 'singapore', name: 'Singapore', icon: MapPin }
  ];

  const jobListings = [
    {
      id: 1,
      title: 'Senior AI Engineer',
      department: 'ai-ml',
      location: 'remote',
      type: 'Full-time',
      experience: '5+ years',
      salary: '$120k - $180k',
      description: 'Lead the development of cutting-edge AI solutions for enterprise clients.',
      requirements: [
        'Expert in Python, TensorFlow, PyTorch',
        'Experience with large language models',
        'Strong background in machine learning',
        'Experience with cloud platforms (AWS, Azure, GCP)'
      ],
      benefits: [
        'Competitive salary and equity',
        'Flexible remote work',
        'Professional development budget',
        'Health, dental, and vision insurance'
      ]
    },
    {
      id: 2,
      title: 'Quantum Computing Researcher',
      department: 'quantum',
      location: 'middletown',
      type: 'Full-time',
      experience: '3+ years',
      salary: '$100k - $150k',
      description: 'Research and develop quantum computing algorithms and applications.',
      requirements: [
        'PhD in Physics, Computer Science, or related field',
        'Experience with quantum algorithms',
        'Knowledge of quantum programming languages',
        'Strong mathematical background'
      ],
      benefits: [
        'Cutting-edge research environment',
        'Conference attendance support',
        'Collaboration with leading universities',
        'Competitive benefits package'
      ]
    },
    {
      id: 3,
      title: 'Cybersecurity Specialist',
      department: 'security',
      location: 'remote',
      type: 'Full-time',
      experience: '4+ years',
      salary: '$90k - $140k',
      description: 'Protect our systems and clients from cyber threats.',
      requirements: [
        'Certified Information Systems Security Professional (CISSP)',
        'Experience with penetration testing',
        'Knowledge of security frameworks',
        'Experience with incident response'
      ],
      benefits: [
        'Remote work flexibility',
        'Security certification support',
        'Professional development opportunities',
        'Comprehensive benefits package'
      ]
    },
    {
      id: 4,
      title: 'Full Stack Developer',
      department: 'engineering',
      location: 'remote',
      type: 'Full-time',
      experience: '3+ years',
      salary: '$80k - $130k',
      description: 'Build scalable web applications and microservices.',
      requirements: [
        'Proficient in React, Node.js, TypeScript',
        'Experience with cloud platforms',
        'Knowledge of database design',
        'Experience with CI/CD pipelines'
      ],
      benefits: [
        'Remote work culture',
        'Latest development tools',
        'Learning and development budget',
        'Flexible working hours'
      ]
    },
    {
      id: 5,
      title: 'Business Development Manager',
      department: 'sales',
      location: 'new-york',
      type: 'Full-time',
      experience: '5+ years',
      salary: '$90k - $150k + Commission',
      description: 'Drive business growth through strategic partnerships and client acquisition.',
      requirements: [
        'Proven track record in B2B sales',
        'Experience in technology sector',
        'Strong networking skills',
        'Understanding of AI/ML technologies'
      ],
      benefits: [
        'Competitive base salary + commission',
        'Travel opportunities',
        'Professional development support',
        'Performance-based bonuses'
      ]
    }
  ];

  const filteredJobs = jobListings.filter(job => {
    const deptMatch = selectedDepartment === 'all' || job.department === selectedDepartment;
    const locationMatch = selectedLocation === 'all' || job.location === selectedLocation;
    return deptMatch && locationMatch;
  });

  const companyValues = [
    {
      icon: Brain,
      title: "Innovation First",
      description: "We push the boundaries of what's possible in technology"
    },
    {
      icon: Collaboration,
      title: 'Collaborative Excellence',
      description: 'Great ideas come from diverse teams working together.'
    },
    {
      icon: Impact,
      title: 'Real-World Impact',
      description: 'We solve real problems that make a difference.'
    },
    {
      icon: Code,
      title: "Quality Code",
      description: "Writing clean, maintainable, and efficient code"
    }
  ];

  const benefits = [
    "Competitive salary and equity packages",
    "Comprehensive health, dental, and vision insurance",
    "Flexible work arrangements and remote options",
    "Professional development and learning opportunities",
    "Modern equipment and tools",
    "Regular team events and activities",
    "Generous vacation and time-off policies",
    "401(k) matching and financial planning"
  ];

  return (
    <>
      <Helmet>
        <title>Careers - Zion Tech Group | Join Our Innovation Team</title>
        <meta name="description" content="Join Zion Tech Group's talented team of innovators, engineers, and technology experts. Explore exciting career opportunities in AI, cybersecurity, cloud computing, and more." />
        <meta name="keywords" content="careers, jobs, employment, Zion Tech Group, technology jobs, AI engineer, cybersecurity specialist, cloud engineer" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent mb-6">
                Join Our Innovation Team
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
                Help us build the future of technology. Join a team of passionate innovators, engineers, and problem-solvers who are shaping the digital landscape.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
                  View Open Positions
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="px-8 py-4 border border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors">
                  Learn About Culture
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Company Values Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
                Our Values & Culture
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {companyValues.map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className="text-center"
                  >
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <value.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">{value.title}</h3>
                    <p className="text-slate-600">{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
                Why Work at Zion Tech?
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.05 * index }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-slate-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Job Listings Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
                Open Positions
              </h2>
              
              {/* Category Filter */}
              <div className="flex flex-wrap justify-center gap-3 mb-12">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      selectedCategory === category.id
                        ? 'bg-blue-600 text-white'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
              
              {/* Job Cards */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {filteredJobs.map((job, index) => (
                  <motion.div
                    key={job.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100 hover:border-blue-200 p-6"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">{job.title}</h3>
                        <p className="text-blue-600 font-medium">{job.department}</p>
                      </div>
                      <div className="text-right">
                        <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                          {job.type}
                        </span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-slate-600">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {job.location}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {job.experience}
                      </div>
                      <div className="flex items-center gap-2">
                        <DollarSign className="w-4 h-4" />
                        {job.salary}
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        {job.department}
                      </div>
                    </div>
                    
                    <p className="text-slate-600 mb-4">{job.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-slate-900 mb-2">Key Requirements:</h4>
                      <ul className="space-y-1">
                        {job.requirements.slice(0, 3).map((req, idx) => (
                          <li key={idx} className="text-sm text-slate-600 flex items-center gap-2">
                            <CheckCircle className="w-3 h-3 text-green-500" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <button className="w-full py-3 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                      Apply Now
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-indigo-700">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Join Our Team?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Don't see a position that fits? Send us your resume and we'll keep you in mind for future opportunities.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors">
                  Submit Resume
                </button>
                <button className="px-8 py-4 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors">
                  Contact Recruiting
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}

// Icon components
function Innovation({ className }: { className?: string }) {
  return <Lightbulb className={className} />;
}

function Collaboration({ className }: { className?: string }) {
  return <Users className={className} />;
}

function Impact({ className }: { className?: string }) {
  return <Target className={className} />;
}

function Growth({ className }: { className?: string }) {
  return <TrendingUp className={className} />;
}
