import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
<<<<<<< HEAD
import { Briefcase, 
=======
import { 
  Briefcase, 
>>>>>>> cursor/add-new-services-and-advertise-them-650b
  Users, 
  Globe, 
  Zap, 
  Heart, 
  Award,
  ArrowRight,
  MapPin,
  Clock,
  DollarSign,
  Brain,
  Shield,
  Cloud,
  Database,
  Target,
  CheckCircle,
  Mail,
  Phone,
<<<<<<< HEAD
  ExternalLink
} from 'lucide-react';

export default function Careers() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedJob, setExpandedJob] = useState<string | null>(null);
=======
  ExternalLink,
  ChevronDown,
  Building,
  Rocket,
  Cpu,
  Lock,
  Network,
  Smartphone,
  Code,
  BarChart3,
  PenTool,
  Eye,
  Server,
  TrendingUp,
  Star
} from 'lucide-react';

export default function Careers() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [expandedJob, setExpandedJob] = useState<any>(null);
>>>>>>> cursor/add-new-services-and-advertise-them-650b

  const departments = [
    { id: 'all', name: 'All Departments', count: 12 },
    { id: 'engineering', name: 'Engineering', count: 5 },
    { id: 'sales', name: 'Sales & Business Development', count: 3 },
    { id: 'marketing', name: 'Marketing', count: 2 },
    { id: 'operations', name: 'Operations', count: 2 }
  ];
<<<<<<< HEAD
=======

  const locations = [
    { id: 'all', name: 'All Locations', count: 12 },
    { id: 'remote', name: 'Remote', count: 8 },
    { id: 'san-francisco', name: 'San Francisco, CA', count: 3 },
    { id: 'new-york', name: 'New York, NY', count: 1 }
  ];
>>>>>>> cursor/add-new-services-and-advertise-them-650b

  const jobListings = [
    {
      id: 'senior-ai-engineer',
      title: 'Senior AI Engineer',
      department: 'engineering',
      location: 'Remote / San Francisco, CA',
      type: 'Full-time',
      salary: '$120,000 - $180,000',
      experience: '5+ years',
      description: 'Join our AI team to develop cutting-edge machine learning solutions and autonomous systems.',
      requirements: [
        'Strong background in machine learning and deep learning',
        'Experience with Python, TensorFlow, and PyTorch',
        'Knowledge of cloud platforms (AWS, Azure, GCP)',
        'Experience with MLOps and model deployment',
        'Strong problem-solving and communication skills'
<<<<<<< HEAD
      ],
      responsibilities: [
        'Design and implement AI/ML solutions',
        'Optimize model performance and scalability',
        'Collaborate with cross-functional teams',
        'Mentor junior engineers',
        'Stay current with AI/ML trends and technologies'
=======
>>>>>>> cursor/add-new-services-and-advertise-them-650b
      ],
      benefits: [
        'Competitive salary and equity',
        'Comprehensive health, dental, and vision insurance',
        'Flexible work arrangements',
        'Professional development opportunities',
        'Cutting-edge technology exposure'
      ]
    },
    {
<<<<<<< HEAD
      id: 'ai-sales-engineer',
      title: 'AI Sales Engineer',
      department: 'sales',
      location: 'Remote / New York, NY',
      type: 'Full-time',
      salary: '$90,000 - $140,000',
      experience: '3+ years',
      description: 'Help clients understand and implement our AI solutions through technical expertise and sales acumen.',
      requirements: [
        'Technical background in AI/ML or software engineering',
        'Experience in B2B sales or sales engineering',
        'Strong presentation and communication skills',
        'Ability to understand client needs and propose solutions',
        'Experience with CRM systems'
      ],
      responsibilities: [
        'Conduct technical demonstrations and presentations',
        'Develop proof-of-concept solutions',
        'Collaborate with sales and engineering teams',
        'Provide technical support during sales process',
        'Build relationships with technical stakeholders'
      ],
      benefits: [
        'Base salary plus commission',
        'Performance bonuses',
        'Company car allowance',
        'Health and wellness benefits',
        'Professional development opportunities'
      ]
    },
    {
      id: 'product-marketing-manager',
      title: 'Product Marketing Manager',
      department: 'marketing',
      location: 'Remote / Austin, TX',
      type: 'Full-time',
      salary: '$80,000 - $120,000',
      experience: '4+ years',
      description: 'Drive product positioning, messaging, and go-to-market strategies for our AI solutions.',
      requirements: [
        'Experience in B2B SaaS product marketing',
        'Strong analytical and creative skills',
        'Experience with market research and competitive analysis',
        'Excellent written and verbal communication',
        'Understanding of AI/ML technologies'
      ],
      responsibilities: [
        'Develop product positioning and messaging',
        'Create marketing collateral and campaigns',
        'Conduct market research and competitive analysis',
        'Work with product and sales teams',
        'Track and analyze marketing metrics'
      ],
      benefits: [
        'Competitive salary and benefits',
        'Remote work flexibility',
        'Marketing budget for tools and resources',
        'Health and wellness benefits',
        'Professional development opportunities'
      ]
    },
    {
      id: 'devops-engineer',
      title: 'DevOps Engineer',
=======
      id: 'ai-research-scientist',
      title: 'AI Research Scientist',
>>>>>>> cursor/add-new-services-and-advertise-them-650b
      department: 'engineering',
      location: 'Remote / San Francisco, CA',
      type: 'Full-time',
      salary: '$140,000 - $200,000',
      experience: '7+ years',
      description: 'Lead groundbreaking research in artificial intelligence and machine learning.',
      requirements: [
        'PhD in Computer Science, AI, or related field',
        'Published research in top-tier AI conferences',
        'Experience with large language models',
        'Strong mathematical and statistical background',
        'Ability to translate research into practical solutions'
      ],
      benefits: [
        'Competitive salary and equity',
        'Research publication support',
        'Conference attendance opportunities',
        'Collaboration with leading AI researchers',
        'Flexible work arrangements'
      ]
    },
    {
      id: 'cybersecurity-engineer',
      title: 'Cybersecurity Engineer',
      department: 'engineering',
      location: 'Remote',
      type: 'Full-time',
      salary: '$100,000 - $150,000',
      experience: '3+ years',
      description: 'Protect our systems and data with advanced security solutions.',
      requirements: [
        'Experience with security frameworks and compliance',
        'Knowledge of network security and encryption',
        'Familiarity with security tools and technologies',
        'Understanding of threat modeling and risk assessment',
        'Security certifications (CISSP, CEH, etc.) preferred'
      ],
      benefits: [
        'Competitive salary and equity',
        'Security training and certification support',
        'Work with cutting-edge security technologies',
        'Remote work flexibility',
        'Professional development opportunities'
      ]
<<<<<<< HEAD
    }
  ];

  const companyValues = [
    {
      icon: Zap,
      title: 'Innovation First',
      description: 'We push boundaries and embrace cutting-edge technologies to solve complex problems.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in the power of diverse teams working together to achieve extraordinary results.'
    },
    {
      icon: Heart,
      title: 'Customer Focus',
      description: 'Our customers\' success is our success. We build solutions that truly make a difference.'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'We\'re committed to creating technology that benefits society and the environment.'
    }
  ];

  const filteredJobs = selectedCategory === 'all' 
    ? jobListings 
    : jobListings.filter(job => job.department === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Careers - Zion Tech Group"
        description="Join our team of technology experts and help shape the future of AI-powered business solutions. Explore exciting career opportunities in AI, engineering, sales, and more."
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Join Our Team
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto">
            Build the future of technology with a team that values innovation, excellence, and impact
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#open-positions"
              className="bg-cyan-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-cyan-600 transition-colors"
            >
              View Open Positions
            </a>
            <a
              href="mailto:careers@ziontechgroup.com"
              className="border-2 border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Contact Recruiting
            </a>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Our Values</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              These core principles guide everything we do and shape our company culture.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-lg bg-slate-800/50 border border-slate-700 hover:border-cyan-500/50 transition-colors"
              >
                <div className="flex justify-center mb-4">
                  <value.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-slate-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" id="open-positions">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Open Positions</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Find the perfect role that matches your skills and career goals.
            </p>
          </motion.div>

          {/* Department Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {departments.map((dept) => (
              <button
                key={dept.id}
                onClick={() => setSelectedCategory(dept.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === dept.id
                    ? 'bg-cyan-500 text-slate-900'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                {dept.name} ({dept.count})
              </button>
            ))}
=======
    },
    {
      id: 'cloud-architect',
      title: 'Cloud Solutions Architect',
      department: 'engineering',
      location: 'Remote / New York, NY',
      type: 'Full-time',
      salary: '$130,000 - $180,000',
      experience: '5+ years',
      description: 'Design and implement scalable cloud solutions for enterprise clients.',
      requirements: [
        'Expertise in AWS, Azure, and/or GCP',
        'Experience with containerization and orchestration',
        'Knowledge of infrastructure as code',
        'Understanding of microservices architecture',
        'Strong communication and client interaction skills'
      ],
      benefits: [
        'Competitive salary and equity',
        'Cloud certification support',
        'Exposure to diverse client environments',
        'Remote work flexibility',
        'Professional development opportunities'
      ]
    },
    {
      id: 'sales-director',
      title: 'Sales Director',
      department: 'sales',
      location: 'Remote / San Francisco, CA',
      type: 'Full-time',
      salary: '$120,000 - $180,000 + Commission',
      experience: '8+ years',
      description: 'Lead our sales team and drive revenue growth in the AI and technology space.',
      requirements: [
        'Proven track record in B2B technology sales',
        'Experience selling AI and enterprise software solutions',
        'Strong leadership and team management skills',
        'Understanding of enterprise sales cycles',
        'Excellent communication and presentation skills'
      ],
      benefits: [
        'Competitive base salary and commission structure',
        'Leadership development opportunities',
        'Exposure to cutting-edge AI technologies',
        'Remote work flexibility',
        'Performance-based bonuses'
      ]
    },
    {
      id: 'marketing-manager',
      title: 'Marketing Manager',
      department: 'marketing',
      location: 'Remote',
      type: 'Full-time',
      salary: '$80,000 - $120,000',
      experience: '4+ years',
      description: 'Develop and execute marketing strategies to promote our AI solutions.',
      requirements: [
        'Experience in B2B technology marketing',
        'Knowledge of digital marketing channels',
        'Experience with marketing automation tools',
        'Strong analytical and creative skills',
        'Understanding of AI and technology markets'
      ],
      benefits: [
        'Competitive salary and equity',
        'Creative freedom and innovation opportunities',
        'Exposure to cutting-edge AI technologies',
        'Remote work flexibility',
        'Professional development opportunities'
      ]
    }
  ];

  const filteredJobs = jobListings.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = selectedDepartment === 'all' || job.department === selectedDepartment;
    const matchesLocation = selectedLocation === 'all' || job.location.toLowerCase().includes(selectedLocation);
    
    return matchesSearch && matchesDepartment && matchesLocation;
  });

  const toggleJobExpansion = (jobId: string) => {
    setExpandedJob(expandedJob === jobId ? null : jobId);
  };

  return (
    <>
      <SEO 
        title="Careers - Zion Tech Group"
        description="Join our team of AI experts and technology innovators. Explore exciting career opportunities at Zion Tech Group."
        keywords="careers, jobs, AI engineer, cybersecurity, cloud architect, sales, marketing, Zion Tech Group"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        {/* Hero Section */}
        <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Join Our{' '}
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Innovation Team
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Help us shape the future of AI and technology. Work with cutting-edge solutions, 
                collaborate with brilliant minds, and make a real impact on the world.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#open-positions"
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  View Open Positions
                </a>
                <a
                  href="/about"
                  className="border-2 border-white text-white font-semibold py-4 px-8 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
                >
                  Learn About Us
                </a>
              </div>
            </motion.div>
>>>>>>> cursor/add-new-services-and-advertise-them-650b
          </div>
        </section>

<<<<<<< HEAD
          {/* Jobs Grid */}
          <div className="space-y-6">
            {filteredJobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:border-cyan-500/50 transition-colors"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-slate-400">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Briefcase className="w-4 h-4" />
                        <span>{job.type}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <DollarSign className="w-4 h-4" />
                        <span>{job.salary}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{job.experience}</span>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setExpandedJob(expandedJob === job.id ? null : job.id)}
                    className="mt-4 lg:mt-0 px-4 py-2 bg-cyan-500 text-slate-900 rounded-lg hover:bg-cyan-600 transition-colors flex items-center gap-2"
                  >
                    {expandedJob === job.id ? 'Show Less' : 'View Details'}
                    <ArrowRight 
                      className={`w-4 h-4 transition-transform ${
                        expandedJob === job.id ? 'rotate-90' : ''
                      }`} 
                    />
                  </button>
                </div>

                <p className="text-slate-300 mb-4">{job.description}</p>

                {expandedJob === job.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-slate-700 pt-4 space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Requirements</h4>
                        <ul className="space-y-2">
                          {job.requirements.map((req, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-slate-300">
                              <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Responsibilities</h4>
                        <ul className="space-y-2">
                          {job.responsibilities.map((resp, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-slate-300">
                              <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Benefits</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                        {job.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-slate-300">
                            <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                            <span>{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <button className="px-6 py-3 bg-cyan-500 text-slate-900 rounded-lg hover:bg-cyan-600 transition-colors font-medium">
                        Apply Now
                      </button>
                      <button className="px-6 py-3 border border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500/10 transition-colors font-medium">
                        Save Job
                      </button>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-slate-400 text-lg">No positions available in this department at the moment.</p>
              <p className="text-slate-500 mt-2">Check back later or explore other departments!</p>
            </div>
          )}
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Application Process</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Our streamlined process ensures a smooth experience from application to offer.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '1',
                title: 'Apply',
                description: 'Submit your resume and cover letter through our portal'
              },
              {
                step: '2',
                title: 'Review',
                description: 'Our team reviews your application within 48 hours'
              },
              {
                step: '3',
                title: 'Interview',
                description: 'Multiple rounds including technical and cultural fit'
              },
              {
                step: '4',
                title: 'Offer',
                description: 'Receive your offer and join the Zion Tech family'
              }
            ].map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-cyan-500 text-slate-900 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-slate-400">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-500 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Join Our Team?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's build the future of technology together. Start your journey with Zion Tech Group today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#open-positions"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              <Briefcase className="w-5 h-5 mr-2" />
              View Positions
            </a>
            <a
              href="mailto:careers@ziontechgroup.com"
              className="inline-flex items-center px-8 py-4 border-2 border-white/30 text-white rounded-lg font-semibold hover:bg-white/10 transition-colors duration-300"
            >
              <Users className="w-5 h-5 mr-2" />
              Contact Recruiting
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">Don't See the Right Fit?</h2>
            <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals to join our team. 
              Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-cyan-500 text-slate-900 rounded-lg hover:bg-cyan-600 transition-colors font-medium flex items-center justify-center gap-2">
                <Mail className="w-5 h-5" />
                Send Resume
              </button>
              <button className="px-8 py-4 border border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500/10 transition-colors font-medium flex items-center justify-center gap-2">
                <ExternalLink className="w-5 h-5" />
                Contact HR
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
=======
        {/* Why Work With Us */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Work With Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We're not just another tech company. We're a team of innovators, problem-solvers, 
                and visionaries working to transform industries through AI and technology.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Brain,
                  title: 'Cutting-Edge AI',
                  description: 'Work with the latest AI technologies and contribute to groundbreaking research and development.'
                },
                {
                  icon: Rocket,
                  title: 'Innovation Culture',
                  description: 'Be part of a culture that encourages creativity, experimentation, and pushing boundaries.'
                },
                {
                  icon: Users,
                  title: 'Brilliant Team',
                  description: 'Collaborate with experts in AI, cybersecurity, cloud computing, and emerging technologies.'
                },
                {
                  icon: Globe,
                  title: 'Global Impact',
                  description: 'Your work will help transform businesses and industries around the world.'
                },
                {
                  icon: Heart,
                  title: 'Work-Life Balance',
                  description: 'Flexible work arrangements and a supportive environment that values your well-being.'
                },
                {
                  icon: Award,
                  title: 'Growth Opportunities',
                  description: 'Continuous learning, skill development, and career advancement in a fast-growing company.'
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-6">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section id="open-positions" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Open Positions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover opportunities that match your skills and passion. Join us in building the future of technology.
              </p>
            </motion.div>

            {/* Search and Filters */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 mb-8"
            >
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-white font-medium mb-2">Search Jobs</label>
                  <input
                    type="text"
                    placeholder="Search by title, skills, or keywords..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-white font-medium mb-2">Department</label>
                  <select
                    value={selectedDepartment}
                    onChange={(e) => setSelectedDepartment(e.target.value)}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors"
                  >
                    {departments.map(dept => (
                      <option key={dept.id} value={dept.id} className="bg-slate-800 text-white">
                        {dept.name} ({dept.count})
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-white font-medium mb-2">Location</label>
                  <select
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors"
                  >
                    {locations.map(loc => (
                      <option key={loc.id} value={loc.id} className="bg-slate-800 text-white">
                        {loc.name} ({loc.count})
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </motion.div>

            {/* Job Listings */}
            <div className="space-y-6">
              {filteredJobs.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:border-cyan-400/50 transition-all duration-300"
                >
                  <div className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-4">
                          <h3 className="text-2xl font-bold text-white">{job.title}</h3>
                          <button
                            onClick={() => toggleJobExpansion(job.id)}
                            className="lg:hidden p-2 text-gray-400 hover:text-white transition-colors"
                          >
                            <ChevronDown className={`w-5 h-5 transition-transform ${expandedJob === job.id ? 'rotate-180' : ''}`} />
                          </button>
                        </div>
                        
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                          <div className="flex items-center gap-2 text-gray-300">
                            <Briefcase className="w-4 h-4" />
                            <span>{job.department}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-300">
                            <MapPin className="w-4 h-4" />
                            <span>{job.location}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-300">
                            <Clock className="w-4 h-4" />
                            <span>{job.type}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-300">
                            <DollarSign className="w-4 h-4" />
                            <span>{job.salary}</span>
                          </div>
                        </div>

                        <p className="text-gray-300 mb-4">{job.description}</p>

                        {expandedJob === job.id && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="space-y-6"
                          >
                            <div>
                              <h4 className="text-lg font-semibold text-white mb-3">Requirements</h4>
                              <ul className="space-y-2">
                                {job.requirements.map((req, idx) => (
                                  <li key={idx} className="flex items-start gap-2 text-gray-300">
                                    <CheckCircle className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                                    <span>{req}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div>
                              <h4 className="text-lg font-semibold text-white mb-3">Benefits</h4>
                              <ul className="space-y-2">
                                {job.benefits.map((benefit, idx) => (
                                  <li key={idx} className="flex items-start gap-2 text-gray-300">
                                    <Star className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                                    <span>{benefit}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div className="pt-4 border-t border-white/20">
                              <a
                                href={`mailto:careers@ziontechgroup.com?subject=Application for ${job.title}`}
                                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
                              >
                                Apply Now
                                <ArrowRight className="w-4 h-4" />
                              </a>
                            </div>
                          </motion.div>
                        )}
                      </div>

                      <div className="lg:flex lg:flex-col lg:items-end lg:gap-4">
                        <button
                          onClick={() => toggleJobExpansion(job.id)}
                          className="hidden lg:flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                        >
                          {expandedJob === job.id ? 'Show Less' : 'View Details'}
                          <ChevronDown className={`w-4 h-4 transition-transform ${expandedJob === job.id ? 'rotate-180' : ''}`} />
                        </button>
                        
                        <a
                          href={`mailto:careers@ziontechgroup.com?subject=Application for ${job.title}`}
                          className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {filteredJobs.length === 0 && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center py-16"
              >
                <div className="text-gray-400 text-xl mb-4">No positions found matching your criteria</div>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedDepartment('all');
                    setSelectedLocation('all');
                  }}
                  className="text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  Clear all filters
                </button>
              </motion.div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Don't See the Right Fit?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                We're always looking for talented individuals to join our team. Send us your resume 
                and let's discuss how you can contribute to our mission.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:careers@ziontechgroup.com?subject=General Application"
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Send Resume
                </a>
                <a
                  href="/contact"
                  className="border-2 border-white text-white font-semibold py-4 px-8 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
                >
                  Get in Touch
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
>>>>>>> cursor/add-new-services-and-advertise-them-650b
  );
}
