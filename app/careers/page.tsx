'use client';
import React, { useState } from 'react';
import { Brain, MapPin, Clock, Users, Award, Zap, ArrowRight, CheckCircle, Star, Briefcase, Code, Shield, Globe, Mail, Phone, ExternalLink } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import EnhancedSEO from '../components/EnhancedSEO';

const CareersPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const jobCategories = [
    { id: 'all', name: 'All Positions', count: 12 },
    { id: 'engineering', name: 'Engineering', count: 6 },
    { id: 'ai-research', name: 'AI Research', count: 3 },
    { id: 'product', name: 'Product', count: 2 },
    { id: 'business', name: 'Business', count: 1 }
  ];

  const jobOpenings = [
    {
      id: 1,
      title: 'Senior AI Engineer',
      department: 'Engineering',
      category: 'engineering',
      location: 'Remote / New York, NY',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead the development of cutting-edge AI solutions and machine learning models for enterprise clients.',
      requirements: [
        'Master\'s degree in Computer Science or related field',
        '5+ years of experience in AI/ML development',
        'Expertise in Python, TensorFlow, PyTorch',
        'Experience with cloud platforms (AWS, GCP, Azure)',
        'Strong problem-solving and communication skills'
      ],
      benefits: ['Competitive salary', 'Stock options', 'Health insurance', 'Flexible work hours', 'Learning budget'],
      posted: '2 days ago',
      featured: true
    },
    {
      id: 2,
      title: 'AI Research Scientist',
      department: 'AI Research',
      category: 'ai-research',
      location: 'San Francisco, CA',
      type: 'Full-time',
      experience: 'PhD + 3 years',
      description: 'Conduct groundbreaking research in artificial intelligence and publish findings in top-tier conferences.',
      requirements: [
        'PhD in Computer Science, AI, or related field',
        '3+ years of research experience',
        'Strong publication record in AI/ML conferences',
        'Experience with deep learning frameworks',
        'Excellent analytical and research skills'
      ],
      benefits: ['Research budget', 'Conference attendance', 'Collaboration opportunities', 'Competitive salary', 'Health insurance'],
      posted: '1 week ago',
      featured: true
    },
    {
      id: 3,
      title: 'Product Manager - AI Solutions',
      department: 'Product',
      category: 'product',
      location: 'Remote / Austin, TX',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Drive product strategy and roadmap for our AI-powered enterprise solutions.',
      requirements: [
        'Bachelor\'s degree in Business, Engineering, or related field',
        '4+ years of product management experience',
        'Experience with AI/ML products',
        'Strong analytical and communication skills',
        'Experience with agile development'
      ],
      benefits: ['Competitive salary', 'Stock options', 'Health insurance', 'Flexible work hours', 'Professional development'],
      posted: '3 days ago',
      featured: false
    },
    {
      id: 4,
      title: 'DevOps Engineer',
      department: 'Engineering',
      category: 'engineering',
      location: 'Remote',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Build and maintain scalable infrastructure for our AI and cloud services.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '3+ years of DevOps experience',
        'Expertise in Docker, Kubernetes, AWS',
        'Experience with CI/CD pipelines',
        'Knowledge of monitoring and logging tools'
      ],
      benefits: ['Competitive salary', 'Health insurance', 'Flexible work hours', 'Learning budget', 'Remote work'],
      posted: '5 days ago',
      featured: false
    },
    {
      id: 5,
      title: 'Cybersecurity Specialist',
      department: 'Engineering',
      category: 'engineering',
      location: 'Washington, DC',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Protect our AI systems and enterprise infrastructure from cyber threats.',
      requirements: [
        'Bachelor\'s degree in Cybersecurity or related field',
        '4+ years of cybersecurity experience',
        'Certifications (CISSP, CISM, etc.)',
        'Experience with AI security',
        'Knowledge of compliance frameworks'
      ],
      benefits: ['Competitive salary', 'Health insurance', 'Security clearance support', 'Professional development', 'Flexible work hours'],
      posted: '1 week ago',
      featured: false
    },
    {
      id: 6,
      title: 'Machine Learning Engineer',
      department: 'AI Research',
      category: 'ai-research',
      location: 'Remote / Seattle, WA',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Design and implement machine learning models for various AI applications.',
      requirements: [
        'Master\'s degree in Computer Science or related field',
        '3+ years of ML engineering experience',
        'Expertise in Python, scikit-learn, XGBoost',
        'Experience with MLOps',
        'Strong mathematical background'
      ],
      benefits: ['Competitive salary', 'Stock options', 'Health insurance', 'Learning budget', 'Flexible work hours'],
      posted: '4 days ago',
      featured: false
    }
  ];

  const benefits = [
    {
      icon: Award,
      title: 'Competitive Compensation',
      description: 'Industry-leading salaries and equity packages'
    },
    {
      icon: Users,
      title: 'Collaborative Culture',
      description: 'Work with brilliant minds in a supportive environment'
    },
    {
      icon: Globe,
      title: 'Remote-First',
      description: 'Work from anywhere with flexible schedules'
    },
    {
      icon: Zap,
      title: 'Cutting-Edge Technology',
      description: 'Work with the latest AI and technology tools'
    },
    {
      icon: Brain,
      title: 'Learning & Development',
      description: 'Continuous learning opportunities and conference attendance'
    },
    {
      icon: Shield,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance and wellness programs'
    }
  ];

  const filteredJobs = selectedCategory === 'all' 
    ? jobOpenings 
    : jobOpenings.filter(job => job.category === selectedCategory);

  return (
    <EnhancedSEO
      title="Careers - Join Our Team | Zion Tech Group"
      description="Join our team of AI experts and technology innovators. Explore career opportunities at Zion Tech Group and be part of the future of technology."
      keywords={['careers', 'jobs', 'AI careers', 'technology jobs', 'Zion Tech Group careers', 'remote jobs']}
      canonicalUrl="https://ziontechgroup.com/careers"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Join Our
                <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Mission
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Be part of a team that's shaping the future of AI and technology. 
                We're looking for passionate individuals who want to make a real impact.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="#open-positions"
                  className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-700 hover:to-purple-700 transition-all duration-300"
                >
                  View Open Positions
                </a>
                <a
                  href="/contact"
                  className="flex items-center space-x-2 text-cyan-400 hover:text-white transition-colors text-lg font-medium"
                >
                  <Mail className="w-5 h-5" />
                  <span>Contact Us</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Why Join Us Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Join Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We offer more than just a job - we offer a chance to be part of something revolutionary.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-slate-900/80 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Job Categories Filter */}
        <section className="py-16" id="open-positions">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Open Positions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Find the perfect role that matches your skills and interests.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {jobCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-cyan-600 to-purple-600 text-white'
                      : 'bg-slate-800 text-gray-300 hover:bg-slate-700 hover:text-white'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Job Listings */}
        <section className="pb-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredJobs.map((job) => (
                <div
                  key={job.id}
                  className={`bg-slate-800/80 backdrop-blur-sm border rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300 group ${
                    job.featured ? 'border-cyan-400/40' : 'border-cyan-400/20'
                  }`}
                >
                  {job.featured && (
                    <div className="flex items-center space-x-2 mb-4">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-yellow-400 text-sm font-medium">Featured</span>
                    </div>
                  )}
                  
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {job.title}
                    </h3>
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                  
                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-300">
                    <div className="flex items-center space-x-2">
                      <Briefcase className="w-4 h-4" />
                      <span>{job.department}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{job.type}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4" />
                      <span>{job.experience}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {job.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-white font-medium mb-2">Key Requirements:</h4>
                    <ul className="space-y-1">
                      {job.requirements.slice(0, 3).map((req, index) => (
                        <li key={index} className="flex items-center space-x-2 text-sm text-gray-300">
                          <CheckCircle className="w-3 h-3 text-cyan-400" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {job.benefits.slice(0, 3).map((benefit, index) => (
                      <span
                        key={index}
                        className="bg-cyan-400/20 text-cyan-300 px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {benefit}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">Posted {job.posted}</span>
                    <a
                      href={`/careers/apply/${job.id}`}
                      className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 flex items-center space-x-2"
                    >
                      <span>Apply Now</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
            
            {filteredJobs.length === 0 && (
              <div className="text-center py-12">
                <Briefcase className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">No positions found</h3>
                <p className="text-gray-300">Try selecting a different category or check back later for new openings.</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-600">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Don't See Your Perfect Role?
              </h2>
              <p className="text-xl text-cyan-100 mb-8">
                We're always looking for exceptional talent. Send us your resume and let us know how you'd like to contribute to our mission.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="/contact"
                  className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-50 transition-colors"
                >
                  Send Your Resume
                </a>
                <a
                  href="tel:+13024640950"
                  className="flex items-center space-x-2 text-white hover:text-cyan-100 transition-colors text-lg font-medium"
                >
                  <Phone className="w-5 h-5" />
                  <span>+1 302 464 0950</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </EnhancedSEO>
  );
};

export default CareersPage;