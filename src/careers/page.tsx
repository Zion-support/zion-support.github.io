'use client';
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { MapPin, Clock, Users, Briefcase, ArrowRight, CheckCircle, Star, Brain, Code, Shield, BarChart, Zap, Mail, Phone, ExternalLink, Filter, Search } from 'lucide-react';

const CareersPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');

  const jobCategories = [
    { id: 'all', name: 'All Positions', count: 12 },
    { id: 'engineering', name: 'Engineering', count: 6 },
    { id: 'ai-research', name: 'AI Research', count: 3 },
    { id: 'data-science', name: 'Data Science', count: 2 },
    { id: 'cybersecurity', name: 'Cybersecurity', count: 1 }
  ];

  const locations = [
    { id: 'all', name: 'All Locations' },
    { id: 'remote', name: 'Remote' },
    { id: 'middletown', name: 'Middletown, DE' },
    { id: 'new-york', name: 'New York, NY' },
    { id: 'san-francisco', name: 'San Francisco, CA' }
  ];

  const openPositions = [
    {
      id: 1,
      title: 'Senior AI Engineer',
      department: 'AI Research',
      location: 'Remote',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead the development of cutting-edge AI models and algorithms. Work with our research team to implement state-of-the-art machine learning solutions.',
      requirements: [
        'PhD in Computer Science or related field',
        '5+ years experience in machine learning',
        'Expertise in Python, TensorFlow, PyTorch',
        'Experience with large-scale AI systems',
        'Strong publication record preferred'
      ],
      benefits: [
        'Competitive salary ($150k-$200k)',
        'Equity participation',
        'Flexible work arrangements',
        'Learning and development budget'
      ],
      category: 'ai-research',
      locationId: 'remote',
      posted: '2 days ago',
      urgent: true
    },
    {
      id: 2,
      title: 'Full Stack Developer',
      department: 'Engineering',
      location: 'Middletown, DE',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Build scalable web applications and APIs. Work with modern technologies including React, Node.js, and cloud services.',
      requirements: [
        '3+ years full-stack development experience',
        'Proficiency in React, Node.js, TypeScript',
        'Experience with cloud platforms (AWS/Azure)',
        'Knowledge of database design and optimization',
        'Strong problem-solving skills'
      ],
      benefits: [
        'Competitive salary ($90k-$130k)',
        'Health insurance',
        '401k matching',
        'Professional development opportunities'
      ],
      category: 'engineering',
      locationId: 'middletown',
      posted: '1 week ago',
      urgent: false
    },
    {
      id: 3,
      title: 'Data Scientist',
      department: 'Data Science',
      location: 'New York, NY',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Analyze complex datasets and build predictive models. Work closely with business stakeholders to drive data-driven decisions.',
      requirements: [
        'Master\'s degree in Data Science or related field',
        '4+ years experience in data analysis',
        'Proficiency in Python, R, SQL',
        'Experience with machine learning libraries',
        'Strong statistical knowledge'
      ],
      benefits: [
        'Competitive salary ($120k-$160k)',
        'Stock options',
        'Flexible PTO',
        'Conference attendance budget'
      ],
      category: 'data-science',
      locationId: 'new-york',
      posted: '3 days ago',
      urgent: false
    },
    {
      id: 4,
      title: 'Cybersecurity Specialist',
      department: 'Cybersecurity',
      location: 'Remote',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Protect our systems and data from cyber threats. Implement security measures and conduct security audits.',
      requirements: [
        '5+ years cybersecurity experience',
        'Certifications (CISSP, CISM, etc.)',
        'Experience with security tools and frameworks',
        'Knowledge of compliance requirements',
        'Strong analytical skills'
      ],
      benefits: [
        'Competitive salary ($110k-$150k)',
        'Security training budget',
        'Remote work options',
        'Health and dental insurance'
      ],
      category: 'cybersecurity',
      locationId: 'remote',
      posted: '1 week ago',
      urgent: false
    },
    {
      id: 5,
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'San Francisco, CA',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Manage cloud infrastructure and deployment pipelines. Ensure high availability and scalability of our systems.',
      requirements: [
        '4+ years DevOps experience',
        'Expertise in AWS, Azure, or GCP',
        'Experience with Kubernetes, Docker',
        'Knowledge of CI/CD pipelines',
        'Scripting skills (Python, Bash)'
      ],
      benefits: [
        'Competitive salary ($130k-$170k)',
        'Equity participation',
        'Flexible work schedule',
        'Learning and development budget'
      ],
      category: 'engineering',
      locationId: 'san-francisco',
      posted: '5 days ago',
      urgent: false
    },
    {
      id: 6,
      title: 'AI Research Intern',
      department: 'AI Research',
      location: 'Remote',
      type: 'Internship',
      experience: 'Graduate student',
      description: 'Work on cutting-edge AI research projects. Collaborate with senior researchers on novel algorithms and models.',
      requirements: [
        'Graduate student in AI/ML field',
        'Strong programming skills (Python)',
        'Knowledge of deep learning frameworks',
        'Research experience preferred',
        'Passion for AI innovation'
      ],
      benefits: [
        'Stipend ($5k-$8k/month)',
        'Mentorship opportunities',
        'Research publication support',
        'Potential full-time conversion'
      ],
      category: 'ai-research',
      locationId: 'remote',
      posted: '2 weeks ago',
      urgent: false
    }
  ];

  const filteredPositions = openPositions.filter(position => {
    const categoryMatch = selectedCategory === 'all' || position.category === selectedCategory;
    const locationMatch = selectedLocation === 'all' || position.locationId === selectedLocation;
    return categoryMatch && locationMatch;
  });

  const benefits = [
    {
      icon: Brain,
      title: 'Cutting-Edge Technology',
      description: 'Work with the latest AI and cloud technologies'
    },
    {
      icon: Users,
      title: 'Collaborative Culture',
      description: 'Join a diverse team of passionate professionals'
    },
    {
      icon: Star,
      title: 'Growth Opportunities',
      description: 'Clear career paths and advancement opportunities'
    },
    {
      icon: Zap,
      title: 'Innovation Focus',
      description: '20% time for personal projects and research'
    }
  ];

  const stats = [
    { number: '100+', label: 'Team Members' },
    { number: '15+', label: 'Countries' },
    { number: '50+', label: 'Years Combined Experience' },
    { number: '25+', label: 'PhD Holders' }
  ];

  return (
    <>
      <SEOOptimizer
        title="Careers - Join Our Team | Zion Tech Group"
        description="Join our world-class team of AI researchers, engineers, and technology experts. Explore open positions and start your career with us."
        keywords={['careers', 'jobs', 'AI engineer', 'software developer', 'data scientist', 'cybersecurity', 'remote work']}
        canonicalUrl="https://ziontechgroup.com/careers"
      />
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
              Join Our <span className="text-cyan-400">Team</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Build the future of AI and technology with us. We're looking for passionate, 
              innovative individuals who want to make a real impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#open-positions"
                className="cyber-button inline-flex items-center justify-center"
              >
                <Briefcase className="w-5 h-5 mr-2" />
                View Open Positions
              </a>
              <a href="/contact"
                className="cyber-button-secondary inline-flex items-center justify-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact Recruiting
              </a>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2 neon-text">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Work With Us */}
        <section className="py-16 px-4 bg-slate-800/30">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Work With <span className="text-purple-400">Us</span>
              </h2>
              <p className="text-gray-300 text-lg">
                We offer more than just a job - we offer a career and a community
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section id="open-positions" className="py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Open <span className="text-cyan-400">Positions</span>
              </h2>
              <p className="text-gray-300 text-lg">
                Find your next career opportunity with us
              </p>
            </div>

            {/* Filters */}
            <div className="flex flex-col md:flex-row gap-4 mb-8 max-w-4xl mx-auto">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-2 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-cyan-400 focus:outline-none"
                >
                  {jobCategories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name} ({category.count})
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-300 mb-2">Location</label>
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full px-4 py-2 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-cyan-400 focus:outline-none"
                >
                  {locations.map((location) => (
                    <option key={location.id} value={location.id}>
                      {location.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Job Listings */}
            <div className="space-y-6 max-w-4xl mx-auto">
              {filteredPositions.map((position) => (
                <div key={position.id} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-600/50 hover:border-cyan-400/40 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-2xl font-bold text-white">{position.title}</h3>
                        {position.urgent && (
                          <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                            Urgent
                          </span>
                        )}
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-300 mb-4">
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
                        <span className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          {position.experience}
                        </span>
                        <span className="text-gray-400">Posted {position.posted}</span>
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0">
                      <a
                        href={`/contact?position=${encodeURIComponent(position.title)}`}
                        className="cyber-button inline-flex items-center"
                      >
                        Apply Now
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </a>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6">{position.description}</p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-white font-semibold mb-3">Requirements</h4>
                      <ul className="space-y-2">
                        {position.requirements.slice(0, 3).map((req, index) => (
                          <li key={index} className="flex items-start text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                            {req}
                          </li>
                        ))}
                        {position.requirements.length > 3 && (
                          <li className="text-sm text-cyan-400">
                            +{position.requirements.length - 3} more requirements
                          </li>
                        )}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-3">Benefits</h4>
                      <ul className="space-y-2">
                        {position.benefits.slice(0, 3).map((benefit, index) => (
                          <li key={index} className="flex items-start text-sm text-gray-300">
                            <Star className="w-4 h-4 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                        {position.benefits.length > 3 && (
                          <li className="text-sm text-cyan-400">
                            +{position.benefits.length - 3} more benefits
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredPositions.length === 0 && (
              <div className="text-center py-12">
                <Briefcase className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">No positions found</h3>
                <p className="text-gray-300">Try adjusting your filters or check back later for new openings.</p>
              </div>
            )}
          </div>
        </section>

        {/* Application Process */}
        <section className="py-16 px-4 bg-slate-800/30">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Application <span className="text-green-400">Process</span>
              </h2>
              <p className="text-gray-300 text-lg">
                Simple steps to join our team
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-cyan-400">1</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Apply</h3>
                <p className="text-gray-300">Submit your application with resume and cover letter</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-cyan-400">2</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Review</h3>
                <p className="text-gray-300">Our team reviews your application within 48 hours</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-cyan-400">3</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Interview</h3>
                <p className="text-gray-300">Technical and cultural fit interviews with the team</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-cyan-400">4</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Offer</h3>
                <p className="text-gray-300">Receive your offer and join our amazing team</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto text-center">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-12 max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Don't See the Right Role?
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                We're always looking for exceptional talent. Send us your resume and 
                we'll keep you in mind for future opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact"
                  className="cyber-button inline-flex items-center justify-center"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Send Resume
                </a>
                <a href="/team"
                  className="cyber-button-secondary inline-flex items-center justify-center"
                >
                  <Users className="w-5 h-5 mr-2" />
                  Meet Our Team
                </a>
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