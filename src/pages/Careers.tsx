import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  Users, 
  Heart, 
  Zap, 
  Globe, 
  Award, 
  ArrowRight,
  MapPin,
  Clock,
  DollarSign,
  CheckCircle,
  Star,
  Lightbulb,
  Shield,
  Rocket
} from 'lucide-react';

const Careers = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  const departments = [
    { id: 'all', name: 'All Departments', count: 12 },
    { id: 'engineering', name: 'Engineering', count: 5 },
    { id: 'ai-ml', name: 'AI & Machine Learning', count: 3 },
    { id: 'cybersecurity', name: 'Cybersecurity', count: 2 },
    { id: 'sales', name: 'Sales & Business Development', count: 2 }
  ];

  const jobOpenings = [
    {
      id: 1,
      title: 'Senior Full Stack Developer',
      department: 'engineering',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '5+ years',
      salary: '$120,000 - $150,000',
      description: 'Join our engineering team to build cutting-edge web applications and microservices.',
      requirements: [
        'Expert in React, Node.js, and TypeScript',
        'Experience with cloud platforms (AWS, Azure, GCP)',
        'Strong understanding of microservices architecture',
        'Experience with CI/CD pipelines and DevOps practices'
      ],
      benefits: [
        'Competitive salary and equity options',
        'Flexible remote work policy',
        'Professional development budget',
        'Health, dental, and vision insurance'
      ],
      tags: ['React', 'Node.js', 'TypeScript', 'AWS', 'Microservices']
    },
    {
      id: 2,
      title: 'AI Research Engineer',
      department: 'ai-ml',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '3+ years',
      salary: '$130,000 - $160,000',
      description: 'Drive innovation in artificial intelligence and machine learning solutions.',
      requirements: [
        'PhD or MS in Computer Science, AI, or related field',
        'Experience with PyTorch, TensorFlow, or similar frameworks',
        'Strong background in NLP, computer vision, or reinforcement learning',
        'Published research or open-source contributions preferred'
      ],
      benefits: [
        'Competitive salary and equity options',
        'Access to cutting-edge AI infrastructure',
        'Conference attendance and publication support',
        'Collaboration with leading AI researchers'
      ],
      tags: ['Python', 'PyTorch', 'TensorFlow', 'NLP', 'Computer Vision']
    },
    {
      id: 3,
      title: 'Cybersecurity Specialist',
      department: 'cybersecurity',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '4+ years',
      salary: '$110,000 - $140,000',
      description: 'Protect our clients and systems with advanced security solutions.',
      requirements: [
        'Certifications: CISSP, CEH, or similar',
        'Experience with penetration testing and vulnerability assessment',
        'Knowledge of compliance frameworks (SOC 2, ISO 27001)',
        'Experience with security tools and SIEM platforms'
      ],
      benefits: [
        'Competitive salary and equity options',
        'Continuous security training and certifications',
        'Latest security tools and technologies',
        'Work on high-profile security projects'
      ],
      tags: ['Penetration Testing', 'Compliance', 'SIEM', 'SOC 2', 'ISO 27001']
    },
    {
      id: 4,
      title: 'Business Development Manager',
      department: 'sales',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '3+ years',
      salary: '$90,000 - $120,000 + Commission',
      description: 'Drive business growth through strategic partnerships and client acquisition.',
      requirements: [
        'Proven track record in B2B technology sales',
        'Experience with enterprise software or IT services',
        'Strong relationship-building and negotiation skills',
        'Understanding of technology trends and market dynamics'
      ],
      benefits: [
        'Competitive base salary with uncapped commission',
        'Performance-based bonuses and incentives',
        'Professional development and training',
        'Flexible work arrangements'
      ],
      tags: ['B2B Sales', 'Enterprise', 'Partnerships', 'Technology', 'Consulting']
    },
    {
      id: 5,
      title: 'DevOps Engineer',
      department: 'engineering',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '4+ years',
      salary: '$110,000 - $140,000',
      description: 'Build and maintain our cloud infrastructure and deployment pipelines.',
      requirements: [
        'Expert in AWS, Kubernetes, and Docker',
        'Experience with Terraform and Infrastructure as Code',
        'Strong knowledge of CI/CD tools and practices',
        'Experience with monitoring and logging solutions'
      ],
      benefits: [
        'Competitive salary and equity options',
        'Latest cloud technologies and tools',
        'Professional certifications support',
        'Collaborative and innovative team environment'
      ],
      tags: ['AWS', 'Kubernetes', 'Docker', 'Terraform', 'CI/CD']
    }
  ];

  const companyValues = [
    {
      icon: Lightbulb,
      title: 'Innovation First',
      description: 'We constantly push boundaries and explore new technologies to deliver cutting-edge solutions.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and diverse perspectives to solve complex challenges.'
    },
    {
      icon: Shield,
      title: 'Integrity',
      description: 'We maintain the highest ethical standards and build trust with our clients and team.'
    },
    {
      icon: Rocket,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from code quality to client satisfaction.'
    }
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: 'Competitive Compensation',
      description: 'Above-market salaries, equity options, and performance bonuses'
    },
    {
      icon: Globe,
      title: 'Remote-First Culture',
      description: 'Work from anywhere with flexible hours and location independence'
    },
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health, dental, and vision insurance coverage'
    },
    {
      icon: Award,
      title: 'Professional Growth',
      description: 'Continuous learning, certifications, and career development support'
    },
    {
      icon: Zap,
      title: 'Innovation Time',
      description: 'Dedicated time for personal projects and innovation initiatives'
    },
    {
      icon: Users,
      title: 'Team Events',
      description: 'Regular team building, hackathons, and social activities'
    }
  ];

  const filteredJobs = selectedDepartment === 'all' 
    ? jobOpenings 
    : jobOpenings.filter(job => job.department === selectedDepartment);

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="px-4 mb-20">
        <div className="container mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent"
          >
            Join Our Team
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed"
          >
            Build the future of technology with a team that values innovation, collaboration, and excellence. 
            Join Zion Tech Group and help transform businesses through cutting-edge solutions.
          </motion.p>
        </div>
      </section>

      {/* Company Values */}
      <section className="px-4 mb-20">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">
              Our Values
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              The principles that guide everything we do and shape our company culture
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-zion-cyan/20 to-zion-blue/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-10 h-10 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-zion-cyan transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-zion-slate-light leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="px-4 mb-20 bg-zion-slate-dark py-20">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">
              Why Work With Us?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              We invest in our people because they're the foundation of our success
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-zion-slate-darker p-8 rounded-2xl border border-zion-slate-light/20 hover:border-zion-cyan/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan/20 to-zion-blue/20 rounded-2xl flex items-center justify-center mb-6">
                  <benefit.icon className="w-8 h-8 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">
                  {benefit.title}
                </h3>
                <p className="text-zion-slate-light leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="px-4 mb-20">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">
              Open Positions
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Explore exciting opportunities to join our growing team
            </p>
          </motion.div>

          {/* Department Filter */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {departments.map((dept) => (
              <button
                key={dept.id}
                onClick={() => setSelectedDepartment(dept.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedDepartment === dept.id
                    ? 'bg-zion-cyan text-white shadow-lg shadow-zion-cyan/30'
                    : 'bg-zion-slate-darker text-zion-slate-light hover:bg-zion-slate-light hover:text-white border border-zion-slate-light/20'
                }`}
              >
                {dept.name} ({dept.count})
              </button>
            ))}
          </motion.div>
          
          <div className="space-y-6">
            {filteredJobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-zion-slate-darker p-8 rounded-2xl border border-zion-slate-light/20 hover:border-zion-cyan/50 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <h3 className="text-2xl font-bold text-white">
                        {job.title}
                      </h3>
                      <span className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-sm font-medium rounded-full border border-zion-cyan/30">
                        {job.type}
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                      <div className="flex items-center gap-2 text-zion-slate-light">
                        <MapPin className="w-4 h-4 text-zion-cyan" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-zion-slate-light">
                        <Clock className="w-4 h-4 text-zion-cyan" />
                        <span>{job.experience}</span>
                      </div>
                      <div className="flex items-center gap-2 text-zion-slate-light">
                        <DollarSign className="w-4 h-4 text-zion-cyan" />
                        <span>{job.salary}</span>
                      </div>
                    </div>
                    
                    <p className="text-zion-slate-light mb-6 leading-relaxed">
                      {job.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {job.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-zion-slate-light/10 text-zion-slate-light text-sm rounded-full border border-zion-slate-light/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="lg:w-80 space-y-4">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Requirements</h4>
                      <ul className="space-y-2">
                        {job.requirements.slice(0, 3).map((req, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-zion-slate-light">
                            <CheckCircle className="w-4 h-4 text-zion-cyan flex-shrink-0 mt-0.5" />
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Benefits</h4>
                      <ul className="space-y-2">
                        {job.benefits.slice(0, 3).map((benefit, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-zion-slate-light">
                            <Star className="w-4 h-4 text-zion-cyan flex-shrink-0 mt-0.5" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <button className="w-full bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-bold py-3 px-6 rounded-xl hover:from-zion-cyan-dark hover:to-zion-blue-dark transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                      Apply Now
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {filteredJobs.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">No positions found</h3>
              <p className="text-zion-slate-light mb-6">
                No open positions match your selected department
              </p>
              <button
                onClick={() => setSelectedDepartment('all')}
                className="px-6 py-3 bg-zion-cyan text-white font-bold rounded-xl hover:bg-zion-cyan-dark transition-colors duration-300"
              >
                View All Positions
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4">
        <div className="container mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-zion-cyan-dark to-zion-blue-dark p-12 rounded-2xl"
          >
            <h2 className="text-4xl font-bold mb-6 text-white">
              Don't See the Right Fit?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              We're always looking for talented individuals to join our team. Send us your resume and let's discuss how you can contribute to our mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-white text-zion-blue-dark hover:bg-zion-slate-light font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                Send Resume
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-zion-blue-dark font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105">
                Contact HR
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
