import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Zap, 
  Brain, 
  Shield, 
  Cloud, 
  Rocket, 
  Users, 
  Building2,
  Phone,
  Mail,
  Calendar,
  Clock,
  Award,
  Globe,
  TrendingUp,
  Lightbulb,
  Target,
  BarChart3,
  Heart,
  Briefcase,
  GraduationCap,
  MapPin,
  DollarSign,
  Clock3,
  Users2,
  Sparkles,
  Cpu,
  Atom,
  Settings,
  Wifi
} from 'lucide-react';
import { SEO } from '@/components/SEO';

const Careers = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');

  const departments = [
    { id: 'all', name: 'All Departments', icon: Building2 },
    { id: 'engineering', name: 'Engineering', icon: Cpu },
    { id: 'ai-ml', name: 'AI & Machine Learning', icon: Brain },
    { id: 'data', name: 'Data Science', icon: BarChart3 },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield },
    { id: 'cloud', name: 'Cloud & DevOps', icon: Cloud },
    { id: 'quantum', name: 'Quantum Computing', icon: Atom },
    { id: 'sales', name: 'Sales & Business Development', icon: TrendingUp },
    { id: 'marketing', name: 'Marketing', icon: Lightbulb },
    { id: 'operations', name: 'Operations', icon: Settings }
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

  const jobOpenings = [
    {
      id: 1,
      title: 'Senior AI Engineer',
      department: 'ai-ml',
      location: 'remote',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead the development of cutting-edge AI solutions for enterprise clients.',
      requirements: [
        'Advanced degree in Computer Science, AI, or related field',
        'Expertise in Python, TensorFlow, PyTorch',
        'Experience with large language models and NLP',
        'Strong background in machine learning algorithms',
        'Experience with cloud platforms (AWS, Azure, GCP)'
      ],
      benefits: [
        'Competitive salary with equity options',
        'Flexible remote work policy',
        'Professional development budget',
        'Health, dental, and vision insurance',
        '401(k) with company match'
      ],
      posted: '2 days ago'
    },
    {
      id: 2,
      title: 'Quantum Computing Researcher',
      department: 'quantum',
      location: 'remote',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Research and develop quantum algorithms for optimization and cryptography.',
      requirements: [
        'PhD in Physics, Computer Science, or Mathematics',
        'Experience with quantum computing frameworks',
        'Knowledge of quantum algorithms and complexity theory',
        'Programming experience in Python, C++, or Julia',
        'Published research in quantum computing'
      ],
      benefits: [
        'Competitive salary with equity options',
        'Flexible remote work policy',
        'Conference and research budget',
        'Health, dental, and vision insurance',
        '401(k) with company match'
      ],
      posted: '1 week ago'
    },
    {
      id: 3,
      title: 'Cybersecurity Engineer',
      department: 'cybersecurity',
      location: 'middletown',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Design and implement security solutions for enterprise clients.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        'Experience with security frameworks and compliance',
        'Knowledge of network security and penetration testing',
        'Experience with SIEM tools and incident response',
        'Relevant certifications (CISSP, CEH, etc.)'
      ],
      benefits: [
        'Competitive salary with equity options',
        'Hybrid work environment',
        'Professional certification support',
        'Health, dental, and vision insurance',
        '401(k) with company match'
      ],
      posted: '3 days ago'
    },
    {
      id: 4,
      title: 'Cloud Infrastructure Engineer',
      department: 'cloud',
      location: 'remote',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Build and maintain scalable cloud infrastructure for our platform.',
      requirements: [
        'Experience with AWS, Azure, or GCP',
        'Knowledge of containerization (Docker, Kubernetes)',
        'Experience with Infrastructure as Code (Terraform)',
        'Understanding of CI/CD pipelines',
        'Linux system administration skills'
      ],
      benefits: [
        'Competitive salary with equity options',
        'Flexible remote work policy',
        'Cloud certification support',
        'Health, dental, and vision insurance',
        '401(k) with company match'
      ],
      posted: '5 days ago'
    },
    {
      id: 5,
      title: 'Data Scientist',
      department: 'data',
      location: 'remote',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Extract insights from data to drive business decisions and product development.',
      requirements: [
        'Advanced degree in Statistics, Mathematics, or related field',
        'Experience with Python, R, or similar languages',
        'Knowledge of statistical analysis and machine learning',
        'Experience with big data technologies (Spark, Hadoop)',
        'Strong communication and visualization skills'
      ],
      benefits: [
        'Competitive salary with equity options',
        'Flexible remote work policy',
        'Professional development budget',
        'Health, dental, and vision insurance',
        '401(k) with company match'
      ],
      posted: '1 week ago'
    },
    {
      id: 6,
      title: 'Sales Development Representative',
      department: 'sales',
      location: 'middletown',
      type: 'Full-time',
      experience: '1+ years',
      description: 'Generate new business opportunities and build relationships with prospects.',
      requirements: [
        'Bachelor\'s degree in Business or related field',
        'Strong communication and interpersonal skills',
        'Experience with CRM systems (Salesforce preferred)',
        'Ability to work in a fast-paced environment',
        'Interest in technology and innovation'
      ],
      benefits: [
        'Competitive base salary with commission',
        'Hybrid work environment',
        'Sales training and development',
        'Health, dental, and vision insurance',
        '401(k) with company match'
      ],
      posted: '2 weeks ago'
    }
  ];

  const companyValues = [
    {
      icon: Sparkles,
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible with cutting-edge technology.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Great ideas come from working together and sharing knowledge.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from code to customer service.'
    },
    {
      icon: TrendingUp,
      title: 'Continuous Growth',
      description: 'We invest in our people and encourage lifelong learning.'
    },
    {
      icon: Target,
      title: 'Real Impact',
      description: 'Our work makes a difference in the world and transforms businesses.'
    },
    {
      icon: Shield,
      title: 'Integrity',
      description: 'We operate with honesty, transparency, and ethical principles.'
    }
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: 'Competitive Compensation',
      description: 'Above-market salaries with equity options and performance bonuses'
    },
    {
      icon: Clock3,
      title: 'Flexible Work',
      description: 'Remote work options and flexible hours to support work-life balance'
    },
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health, dental, and vision insurance coverage'
    },
    {
      icon: GraduationCap,
      title: 'Learning & Development',
      description: 'Budget for courses, conferences, and professional certifications'
    },
    {
      icon: Users2,
      title: 'Team Building',
      description: 'Regular team events, hackathons, and innovation challenges'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'Work on projects that transform industries worldwide'
    }
  ];

  const getFilteredJobs = () => {
    return jobOpenings.filter(job => {
      const matchesDepartment = selectedDepartment === 'all' || job.department === selectedDepartment;
      const matchesLocation = selectedLocation === 'all' || job.location === selectedLocation;
      return matchesDepartment && matchesLocation;
    });
  };

  const filteredJobs = getFilteredJobs();

  return (
    <>
      <SEO 
        title="Careers - Zion Tech Group"
        description="Join our team of innovators and help shape the future of technology. Explore exciting career opportunities at Zion Tech Group."
        keywords="careers, jobs, employment, Zion Tech Group, technology careers, AI jobs, quantum computing jobs"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_#3b82f6_1px,_transparent_1px)] bg-[length:50px_50px] opacity-10"></div>
          
          <div className="relative z-10 container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Join Our Team
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Help us shape the future of technology. Join a team of innovators, problem-solvers, 
                and visionaries who are transforming industries with cutting-edge solutions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#openings"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  View Open Positions
                  <ArrowRight className="inline ml-2 w-5 h-5" />
                </a>
                <Link
                  to="/contact"
                  className="bg-slate-800 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-slate-700 transition-all duration-300 border border-slate-600"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Company Values */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Our Values
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {companyValues.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6"
                >
                  <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Why Work With Us?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                We invest in our people because they're our greatest asset
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 rounded-xl p-6 border border-slate-600"
                >
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-300 text-sm">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Job Openings */}
        <section id="openings" className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Open Positions
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Find the perfect role for your skills and career goals
              </p>
            </motion.div>

            {/* Filters */}
            <div className="mb-12">
              <div className="flex flex-wrap gap-4 justify-center mb-8">
                <h3 className="text-lg font-semibold text-white mr-4">Filter by Department:</h3>
                {departments.map((dept) => (
                  <button
                    key={dept.id}
                    onClick={() => setSelectedDepartment(dept.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg border-2 transition-all duration-300 ${
                      selectedDepartment === dept.id
                        ? 'border-blue-500 bg-blue-500/10 text-blue-400'
                        : 'border-slate-600 bg-slate-700/50 text-gray-300 hover:border-blue-400 hover:bg-slate-700/70'
                    }`}
                  >
                    <dept.icon className="w-4 h-4" />
                    <span>{dept.name}</span>
                  </button>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 justify-center">
                <h3 className="text-lg font-semibold text-white mr-4">Filter by Location:</h3>
                {locations.map((loc) => (
                  <button
                    key={loc.id}
                    onClick={() => setSelectedLocation(loc.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg border-2 transition-all duration-300 ${
                      selectedLocation === loc.id
                        ? 'border-blue-500 bg-blue-500/10 text-blue-400'
                        : 'border-slate-600 bg-slate-700/50 text-gray-300 hover:border-blue-400 hover:bg-slate-700/70'
                    }`}
                  >
                    <loc.icon className="w-4 h-4" />
                    <span>{loc.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Job Listings */}
            <div className="space-y-6">
              {filteredJobs.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-700/50 rounded-xl p-6 border border-slate-600 hover:border-blue-500 transition-all duration-300"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{job.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-300">
                        <span className="flex items-center">
                          <Briefcase className="w-4 h-4 mr-1" />
                          {departments.find(d => d.id === job.department)?.name}
                        </span>
                        <span className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {locations.find(l => l.id === job.location)?.name}
                        </span>
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {job.type}
                        </span>
                        <span className="flex items-center">
                          <Star className="w-4 h-4 mr-1" />
                          {job.experience}
                        </span>
                      </div>
                    </div>
                    <div className="mt-4 lg:mt-0">
                      <span className="text-xs text-gray-400">{job.posted}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{job.description}</p>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="text-sm font-semibold text-blue-400 mb-2">Requirements:</h4>
                      <ul className="space-y-1">
                        {job.requirements.slice(0, 3).map((req, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-400">
                            <CheckCircle className="w-3 h-3 text-green-400 mr-2" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-blue-400 mb-2">Benefits:</h4>
                      <ul className="space-y-1">
                        {job.benefits.slice(0, 3).map((benefit, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-400">
                            <Star className="w-3 h-3 text-yellow-400 mr-2" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                      Apply Now
                    </button>
                    <button className="border border-blue-500 text-blue-400 px-6 py-3 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300">
                      Learn More
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            {filteredJobs.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <p className="text-gray-400 text-lg">No positions match your current filters.</p>
                <button
                  onClick={() => {
                    setSelectedDepartment('all');
                    setSelectedLocation('all');
                  }}
                  className="text-blue-400 hover:text-blue-300 mt-2"
                >
                  Clear all filters
                </button>
              </motion.div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Don't See the Right Role?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                We're always looking for talented individuals. Send us your resume and let's discuss 
                how you can contribute to our mission.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:careers@ziontechgroup.com"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Send Resume
                  <Mail className="inline ml-2 w-5 h-5" />
                </a>
                <Link
                  to="/contact"
                  className="bg-slate-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-slate-600 transition-all duration-300 border border-slate-600"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Careers;
