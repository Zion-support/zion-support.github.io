import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
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
  ExternalLink
} from 'lucide-react';

interface JobListing {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  salary: string;
  description: string;
  requirements: string[];
  benefits: string[];
  category: string;
}

const Careers: React.FC = (): JSX.Element => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const departments = [
    { id: 'all', name: 'All Departments', count: 12 },
    { id: 'engineering', name: 'Engineering', count: 5 },
    { id: 'sales', name: 'Sales & Business Development', count: 3 },
    { id: 'marketing', name: 'Marketing', count: 2 },
    { id: 'operations', name: 'Operations', count: 2 }
  ];

  const jobListings: JobListing[] = [
    {
      id: 1,
      title: "Senior AI Engineer",
      department: "Artificial Intelligence",
      location: "Remote / San Francisco",
      type: "Full-time",
      experience: "5+ years",
      salary: "$120,000 - $180,000",
      description: "Lead development of cutting-edge AI solutions for enterprise clients.",
      requirements: [
        "PhD in Computer Science or related field",
        "5+ years of machine learning experience",
        "Expertise in Python, TensorFlow, PyTorch",
        "Experience with large language models",
        "Strong background in NLP and computer vision"
      ],
      benefits: ["Competitive salary", "Health insurance", "Remote work", "AI research opportunities"],
      category: "ai"
    },
    {
      id: 2,
      title: "Cybersecurity Specialist",
      department: "Security",
      location: "Washington DC / Remote",
      type: "Full-time",
      experience: "3+ years",
      salary: "$90,000 - $140,000",
      description: "Protect our systems and clients from emerging cyber threats.",
      requirements: [
        "CISSP or equivalent certification",
        "3+ years of cybersecurity experience",
        "Knowledge of network security and penetration testing",
        "Familiarity with SIEM tools and incident response",
        "Security certifications (CISSP, CEH, etc.)"
      ],
      benefits: ["Competitive salary", "Health insurance", "Remote work", "Professional development"],
      category: "security"
    },
    {
      id: 3,
      title: "Cloud DevOps Engineer",
      department: "Engineering",
      location: "Remote / Seattle",
      type: "Full-time",
      experience: "4+ years",
      salary: "$100,000 - $150,000",
      description: "Build and maintain our cloud infrastructure and deployment pipelines.",
      requirements: [
        "Experience with AWS, Azure, or GCP",
        "Knowledge of Docker, Kubernetes, and CI/CD",
        "Experience with infrastructure as code (Terraform)",
        "Strong scripting skills (Python, Bash)",
        "Understanding of security best practices"
      ],
      benefits: ["Competitive salary", "Health insurance", "Remote work", "Cloud certification"],
      category: "cloud"
    },
    {
      id: 4,
      title: "Product Manager",
      department: "Product",
      location: "Remote / New York",
      type: "Full-time",
      experience: "5+ years",
      salary: "$110,000 - $160,000",
      description: "Drive product strategy and development for our AI-powered solutions.",
      requirements: [
        "Experience in B2B SaaS or enterprise software",
        "Strong analytical and strategic thinking",
        "Experience with agile methodologies",
        "Excellent communication and leadership skills"
      ],
      benefits: ["Competitive salary", "Health insurance", "Stock options", "Professional development"],
      category: "product"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Positions', count: jobListings.length },
    { id: 'ai', name: 'AI & ML', count: jobListings.filter(job => job.category === 'ai').length },
    { id: 'security', name: 'Security', count: jobListings.filter(job => job.category === 'security').length },
    { id: 'cloud', name: 'Cloud & DevOps', count: jobListings.filter(job => job.category === 'cloud').length },
    { id: 'engineering', name: 'Engineering', count: jobListings.filter(job => job.category === 'engineering').length },
    { id: 'data', name: 'Data & Analytics', count: jobListings.filter(job => job.category === 'data').length },
    { id: 'product', name: 'Product', count: jobListings.filter(job => job.category === 'product').length }
  ];

  const filteredJobs = selectedCategory === 'all'
    ? jobListings
    : jobListings.filter(job => job.category === selectedCategory);

  const companyValues = [
    {
      icon: Zap,
      title: "Innovation First",
      description: "We push boundaries and embrace cutting-edge technologies to solve complex problems."
    },
    {
      icon: Shield,
      title: "Security & Trust",
      description: "Building secure, reliable solutions that our clients can trust"
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Solving real-world problems for Fortune 500 companies worldwide"
    },
    {
      icon: Heart,
      title: "People First",
      description: "Our team's growth and well-being are our top priorities"
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: "Cutting-Edge Technology",
      description: "Work with the latest AI, quantum computing, and emerging technologies"
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Solve real-world problems for Fortune 500 companies worldwide"
    },
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health coverage, mental health support, and wellness programs"
    },
    {
      icon: Award,
      title: "Career Growth",
      description: "Continuous learning, mentorship, and clear career progression paths"
    }
  ];

  const getCategoryIcon = (categoryId: string) => {
    switch (categoryId) {
      case 'ai':
        return Brain;
      case 'security':
        return Shield;
      case 'cloud':
        return Cloud;
      case 'engineering':
        return Target;
      case 'data':
        return Database;
      case 'product':
        return Target;
      default:
        return Briefcase;
    }
  };

  const getCategoryName = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.name : 'General';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-purple/20 to-zion-blue/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-zion-purple/20 border border-zion-purple/30 mb-6">
              <Briefcase className="w-5 h-5 text-zion-purple mr-2" />
              <span className="text-zion-purple font-medium">Join Our Team</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Build the Future with Us
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Join our team of technology experts and help shape the future of AI-powered 
              business solutions. We're looking for passionate innovators who want to make a difference.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#open-positions"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-purple to-zion-blue text-white rounded-lg hover:from-zion-purple/80 hover:to-zion-blue/80 transition-all duration-300 font-semibold"
              >
                <Briefcase className="w-5 h-5 mr-2" />
                View Open Positions
              </a>
              
              <a
                href="mailto:careers@ziontechgroup.com"
                className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan text-zion-cyan rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300 font-semibold"
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact Recruiting
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => {
              const IconComponent = getCategoryIcon(category.id);
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-zion-purple text-white shadow-lg'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20'
                  }`}
                >
                  <IconComponent className="w-5 h-5" />
                  <span>{category.name}</span>
                  <span className="text-sm opacity-75">({category.count})</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {filteredJobs.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <Briefcase className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No positions found</h3>
              <p className="text-gray-400">
                Try adjusting your category filter or check back later for new opportunities.
              </p>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredJobs.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="h-full bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-zion-purple/50 transition-all duration-300 hover:scale-105">
                    <div className="flex items-start justify-between mb-4">
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-zion-purple/20 border border-zion-purple/30">
                        <span className="text-zion-purple text-sm font-medium">
                          {getCategoryName(job.category)}
                        </span>
                      </div>
                      <div className="text-zion-cyan font-medium">
                        {job.salary}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white group-hover:text-zion-purple transition-colors duration-300 mb-3">
                      {job.title}
                    </h3>
                    
                    <p className="text-gray-300 leading-relaxed mb-4">
                      {job.description}
                    </p>
                    
                    <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{job.type}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>{job.experience}</span>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3">Requirements:</h4>
                      <ul className="space-y-2">
                        {job.requirements.map((requirement, reqIndex) => (
                          <li key={reqIndex} className="flex items-start space-x-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-zion-cyan mt-0.5 flex-shrink-0" />
                            <span className="text-gray-300">{requirement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3">Benefits:</h4>
                      <div className="flex flex-wrap gap-2">
                        {job.benefits.map((benefit, benefitIndex) => (
                          <span
                            key={benefitIndex}
                            className="px-2 py-1 bg-white/10 rounded text-xs text-gray-300 border border-white/20"
                          >
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex space-x-2">
                      <a
                        href={`mailto:careers@ziontechgroup.com?subject=Application for ${job.title}`}
                        className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-zion-purple to-zion-blue text-white rounded-lg hover:from-zion-purple/80 hover:to-zion-blue/80 transition-all duration-300 font-medium"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Apply Now
                      </a>
                      
                      <a
                        href="mailto:careers@ziontechgroup.com"
                        className="inline-flex items-center justify-center px-4 py-2 border border-zion-cyan text-zion-cyan rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300"
                      >
                        <Mail className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Our Company Values
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              These core values guide everything we do and shape our company culture.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="h-full bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-zion-purple/50 transition-all duration-300 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-zion-purple/20 border border-zion-purple/30 mb-4">
                    <value.icon className="w-8 h-8 text-zion-purple" />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white mb-3">
                    {value.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Why Work at Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We offer competitive benefits and a supportive environment where you can thrive and grow.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="h-full bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-xl bg-zion-purple/20 border border-zion-purple/30">
                      <benefit.icon className="w-6 h-6 text-zion-purple" />
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">
                        {benefit.title}
                      </h3>
                      
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Join Our Team?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Don't see a position that fits? We're always looking for talented individuals 
              who share our passion for innovation and technology.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:careers@ziontechgroup.com?subject=General Application"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-purple to-zion-blue text-white rounded-lg hover:from-zion-purple/80 hover:to-zion-blue/80 transition-all duration-300 font-semibold"
              >
                <Mail className="w-5 h-5 mr-2" />
                Send Your Resume
              </a>
              
              <a
                href="mailto:careers@ziontechgroup.com"
                className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan text-zion-cyan rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300 font-semibold"
              >
                <Phone className="w-5 h-5 mr-2" />
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
