import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, Users, MapPin, Clock, DollarSign, Heart,
  Brain, Shield, Cloud, Server, Atom, Rocket, ArrowRight,
  CheckCircle, Star, Award, GraduationCap, Globe, Zap
} from 'lucide-react';

export default function Careers() {
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  const departments = [
    { id: 'all', name: 'All Departments', count: 25 },
    { id: 'engineering', name: 'Engineering', count: 12 },
    { id: 'ai-research', name: 'AI & Research', count: 8 },
    { id: 'sales', name: 'Sales & Marketing', count: 5 },
    { id: 'operations', name: 'Operations', count: 3 },
    { id: 'design', name: 'Design', count: 2 }
  ];

  const jobListings = [
    {
      id: 1,
      title: 'Senior AI Engineer',
      department: 'engineering',
      location: 'Remote / San Francisco, CA',
      type: 'Full-time',
      salary: '$120,000 - $180,000',
      experience: '5+ years',
      description: 'Join our AI team to build cutting edge machine learning models and AI systems.',
      requirements: [
        'Strong background in machine learning and deep learning',
        'Experience with Python, TensorFlow, PyTorch',
        'Knowledge of cloud platforms (AWS, Azure, GCP)',
        'Experience with MLOps and model deployment',
        'Strong problem-solving skills'
      ],
      benefits: [
        'Competitive salary and equity',
        'Flexible work arrangements',
        'Professional development budget',
        'Health, dental, and vision insurance',
        '401(k) with company match'
      ]
    },
    {
      id: 2,
      title: 'Quantum Computing Researcher',
      department: 'ai-research',
      location: 'Boston, MA',
      type: 'Full-time',
      salary: '$100,000 - $150,000',
      experience: 'PhD required',
      description: 'Pioneer the future of quantum computing and quantum-AI hybrid systems.',
      requirements: [
        'PhD in Physics, Computer Science, or related field',
        'Experience with quantum algorithms and quantum computing',
        'Knowledge of quantum programming languages (Qiskit, Cirq)',
        'Strong mathematical and analytical skills',
        'Experience with classical AI/ML algorithms'
      ],
      benefits: [
        'Cutting-edge research opportunities',
        'Collaboration with leading universities',
        'Conference attendance and publication support',
        'Competitive benefits package',
        'Flexible research directions'
      ]
    },
    {
      id: 3,
      title: 'Senior Software Engineer',
      department: 'engineering',
      location: 'Remote / New York, NY',
      type: 'Full-time',
      salary: '$110,000 - $160,000',
      experience: '4+ years',
      description: 'Build scalable cloud-native applications and microservices.',
      requirements: [
        'Strong experience with Node.js, Python, or Go',
        'Experience with cloud platforms (AWS, Azure, GCP)',
        'Knowledge of microservices architecture',
        'Experience with Docker and Kubernetes',
        'Strong system design skills'
      ],
      benefits: [
        'Competitive salary and equity',
        'Remote work options',
        'Professional development opportunities',
        'Comprehensive health benefits',
        'Flexible PTO'
      ]
    },
    {
      id: 4,
      title: 'Cybersecurity Engineer',
      department: 'engineering',
      location: 'Remote / Austin, TX',
      type: 'Full-time',
      salary: '$90,000 - $140,000',
      experience: '3+ years',
      description: 'Protect our systems and clients with advanced security solutions.',
      requirements: [
        'Experience with security tools and frameworks',
        'Knowledge of penetration testing and vulnerability assessment',
        'Experience with SIEM and security monitoring',
        'Understanding of compliance frameworks',
        'Strong analytical and problem-solving skills'
      ],
      benefits: [
        'Competitive salary and benefits',
        'Professional certifications support',
        'Remote work flexibility',
        'Health and wellness benefits',
        'Continuous learning opportunities'
      ]
    },
    {
      id: 5,
      title: 'AI Sales Specialist',
      department: 'sales',
      location: 'Chicago, IL',
      type: 'Full-time',
      salary: '$80,000 - $120,000 + Commission',
      experience: '3+ years',
      description: 'Drive sales of our AI solutions to enterprise clients.',
      requirements: [
        'Experience in B2B technology sales',
        'Understanding of AI and machine learning concepts',
        'Strong presentation and negotiation skills',
        'Experience with CRM systems',
        'Ability to work with technical teams'
      ],
      benefits: [
        'Competitive base salary + commission',
        'Sales training and development',
        'Performance bonuses',
        'Health and dental insurance',
        'Travel opportunities'
      ]
    },
    {
      id: 6,
      title: 'UX/UI Designer',
      department: 'design',
      location: 'Remote / Los Angeles, CA',
      type: 'Full-time',
      salary: '$85,000 - $130,000',
      experience: '3+ years',
      description: 'Create intuitive and beautiful user experiences for our AI products.',
      requirements: [
        'Strong portfolio demonstrating UX/UI skills',
        'Experience with Figma, Sketch, or similar tools',
        'Understanding of user research and testing',
        'Experience with design systems',
        'Knowledge of accessibility standards'
      ],
      benefits: [
        'Competitive salary and benefits',
        'Remote work options',
        'Design conference attendance',
        'Professional development budget',
        'Flexible work hours'
      ]
    }
  ];

  const companyValues = [
    {
      icon: Brain,
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible with cutting-edge technology.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in the power of diverse teams working together to solve complex problems.'
    },
    {
      icon: Heart,
      title: 'Work-Life Balance',
      description: 'We support our team members in maintaining healthy work-life balance.'
    },
    {
      icon: Star,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from code quality to customer service.'
    }
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: 'Competitive Compensation',
      description: 'Competitive salaries, equity, and performance bonuses'
    },
    {
      icon: Globe,
      title: 'Flexible Work',
      description: 'Remote work options and flexible hours'
    },
    {
      icon: GraduationCap,
      title: 'Learning & Development',
      description: 'Professional development budget and training opportunities'
    },
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health, dental, and vision insurance'
    },
    {
      icon: Award,
      title: 'Recognition',
      description: 'Employee recognition programs and career advancement'
    },
    {
      icon: Users,
      title: 'Team Building',
      description: 'Regular team events and company gatherings'
    }
  ];

  const filteredJobs = jobListings.filter(job => 
    selectedDepartment === 'all' || job.department === selectedDepartment
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Join Our Mission
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Build the future of technology with a team that's passionate about innovation, 
              AI, and making a global impact.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center text-gray-300">
                <MapPin className="h-5 w-5 mr-2" />
                <span>Remote & Global Offices</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Users className="h-5 w-5 mr-2" />
                <span>50+ Team Members</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Globe className="h-5 w-5 mr-2" />
                <span>15+ Countries</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Company Values */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Our Values</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              These core values drive everything we do and shape our company culture.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <value.icon className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Benefits */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Benefits & Perks</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              We take care of our team with comprehensive benefits and perks.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
              >
                <benefit.icon className="h-10 w-10 text-blue-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Job Listings */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Open Positions</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Join our team and help shape the future of technology.
            </p>
          </motion.div>

          {/* Department Filter */}
          <div className="flex flex-wrap gap-3 mb-8">
            {departments.map((dept) => (
              <button
                key={dept.id}
                onClick={() => setSelectedDepartment(dept.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  selectedDepartment === dept.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-white/5 text-gray-300 hover:bg-white/10'
                }`}
              >
                {dept.name} ({dept.count})
              </button>
            ))}
          </div>

          {/* Job Cards */}
          <div className="space-y-6">
            {filteredJobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-4 mb-3">
                      <h3 className="text-xl font-semibold text-white">{job.title}</h3>
                      <span className="px-3 py-1 bg-blue-600/20 text-blue-400 text-sm rounded-full">
                        {job.type}
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-4 text-gray-300 mb-4">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2" />
                        {job.location}
                      </div>
                      <div className="flex items-center">
                        <DollarSign className="h-4 w-4 mr-2" />
                        {job.salary}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2" />
                        {job.experience}
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-4">{job.description}</p>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-white font-semibold mb-2">Requirements</h4>
                        <ul className="space-y-1">
                          {job.requirements.map((req, idx) => (
                            <li key={idx} className="flex items-start text-gray-300 text-sm">
                              <CheckCircle className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-white font-semibold mb-2">Benefits</h4>
                        <ul className="space-y-1">
                          {job.benefits.slice(0, 3).map((benefit, idx) => (
                            <li key={idx} className="flex items-start text-gray-300 text-sm">
                              <Star className="h-4 w-4 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 lg:mt-0 lg:ml-6">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center">
                      Apply Now
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Don't See the Right Role?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              We're always looking for talented individuals to join our team. 
              Send us your resume and let us know how you can contribute to our mission.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
              Send General Application
            </button>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
