import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  Users, 
  Heart, 
  Zap, 
  Globe, 
  Award, 
  GraduationCap,
  Clock,
  MapPin,
  DollarSign,
  ArrowRight,
  Send,
  CheckCircle,
  Building2,
  Rocket,
  Lightbulb,
  Shield
} from 'lucide-react';

const Careers: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<string | null>(null);
  const [isApplying, setIsApplying] = useState(false);

  const companyValues = [
    {
      icon: Innovation,
      title: 'Innovation First',
      description: 'We push boundaries and embrace cutting-edge technologies to solve complex challenges.'
    },
    {
      icon: Collaboration,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and diverse perspectives to achieve extraordinary results.'
    },
    {
      icon: Excellence,
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do, from code quality to customer service.'
    },
    {
      icon: Growth,
      title: 'Continuous Growth',
      description: 'We invest in our people with ongoing learning opportunities and career development.'
    }
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: 'Competitive Salary',
      description: 'Above-market compensation with performance-based bonuses and equity options.'
    },
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance, dental, vision, and mental health support.'
    },
    {
      icon: Clock,
      title: 'Flexible Work',
      description: 'Remote work options, flexible hours, and unlimited PTO to maintain work-life balance.'
    },
    {
      icon: GraduationCap,
      title: 'Learning & Development',
      description: 'Professional development budget, conference attendance, and certification programs.'
    },
    {
      icon: Users,
      title: 'Team Events',
      description: 'Regular team building activities, hackathons, and social events.'
    },
    {
      icon: Award,
      title: 'Recognition',
      description: 'Performance recognition programs and career advancement opportunities.'
    }
  ];

  const openPositions = [
    {
      id: 'senior-ai-engineer',
      title: 'Senior AI Engineer',
      department: 'Artificial Intelligence',
      location: 'Remote / San Francisco, CA',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead the development of cutting-edge AI solutions and machine learning models.',
      requirements: [
        'Advanced degree in Computer Science, AI, or related field',
        'Expertise in Python, TensorFlow, PyTorch',
        'Experience with large language models and NLP',
        'Strong background in machine learning algorithms'
      ],
      responsibilities: [
        'Design and implement AI/ML solutions',
        'Lead technical architecture decisions',
        'Mentor junior engineers',
        'Collaborate with cross-functional teams'
      ]
    },
    {
      id: 'cybersecurity-specialist',
      title: 'Cybersecurity Specialist',
      department: 'Security',
      location: 'Remote / New York, NY',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Protect our clients and systems from evolving cyber threats.',
      requirements: [
        'Bachelor\'s degree in Cybersecurity or related field',
        'Certifications: CISSP, CEH, or equivalent',
        'Experience with security tools and frameworks',
        'Knowledge of compliance standards (SOC2, ISO27001)'
      ],
      responsibilities: [
        'Conduct security assessments and audits',
        'Implement security controls and monitoring',
        'Respond to security incidents',
        'Develop security policies and procedures'
      ]
    },
    {
      id: 'cloud-architect',
      title: 'Cloud Architect',
      department: 'Infrastructure',
      location: 'Remote / Austin, TX',
      type: 'Full-time',
      experience: '7+ years',
      description: 'Design and implement scalable cloud infrastructure solutions.',
      requirements: [
        'Expertise in AWS, Azure, and Google Cloud',
        'Experience with Kubernetes and containerization',
        'Strong knowledge of networking and security',
        'Infrastructure as Code (Terraform, CloudFormation)'
      ],
      responsibilities: [
        'Design cloud architecture solutions',
        'Optimize infrastructure for performance and cost',
        'Implement DevOps best practices',
        'Lead cloud migration projects'
      ]
    },
    {
      id: 'quantum-computing-researcher',
      title: 'Quantum Computing Researcher',
      department: 'Research & Development',
      location: 'San Francisco, CA',
      type: 'Full-time',
      experience: 'PhD + 2+ years',
      description: 'Pioneer next-generation quantum computing applications and algorithms.',
      requirements: [
        'PhD in Physics, Computer Science, or related field',
        'Research experience in quantum computing',
        'Programming skills in Python, Qiskit, or similar',
        'Published research in quantum algorithms'
      ],
      responsibilities: [
        'Research quantum computing applications',
        'Develop quantum algorithms and protocols',
        'Collaborate with academic partners',
        'Publish research findings and patents'
      ]
    }
  ];

  const handleApply = (jobId: string) => {
    setSelectedJob(jobId);
    setIsApplying(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Join Our Team
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-zion-cyan/80 max-w-4xl mx-auto leading-relaxed"
          >
            Build the future of technology with a team that values innovation, collaboration, and excellence. 
            Help us transform businesses and shape the digital landscape.
          </motion.p>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Culture</h2>
            <p className="text-xl text-zion-cyan/80 max-w-3xl mx-auto">
              At Zion Tech Group, we foster an environment where creativity thrives, innovation is celebrated, 
              and every team member has the opportunity to make a meaningful impact.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-slate/30 backdrop-blur-sm rounded-2xl p-6 border border-zion-cyan/20 text-center hover:border-zion-cyan/40 transition-all duration-300"
              >
                <value.icon className="w-16 h-16 text-zion-cyan mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-zion-cyan/80 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Benefits & Perks</h2>
            <p className="text-xl text-zion-cyan/80 max-w-3xl mx-auto">
              We believe in taking care of our team with comprehensive benefits that support your health, 
              growth, and work-life balance.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-slate/30 backdrop-blur-sm rounded-2xl p-6 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <benefit.icon className="w-12 h-12 text-zion-cyan mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-zion-cyan/80 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Open Positions</h2>
            <p className="text-xl text-zion-cyan/80 max-w-3xl mx-auto">
              Explore exciting opportunities to join our team and work on cutting-edge technology projects.
            </p>
          </motion.div>
          
          <div className="space-y-6">
            {openPositions.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-slate/30 backdrop-blur-sm rounded-2xl p-8 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="bg-zion-cyan/20 text-zion-cyan px-3 py-1 rounded-full text-sm font-medium">
                        {job.department}
                      </span>
                      <span className="bg-zion-slate/50 text-zion-cyan/80 px-3 py-1 rounded-full text-sm">
                        {job.type}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-3">{job.title}</h3>
                    <p className="text-zion-cyan/80 mb-4">{job.description}</p>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-zion-cyan/60">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {job.location}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {job.experience}
                      </div>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => handleApply(job.id)}
                    className="bg-zion-cyan hover:bg-zion-cyan/80 text-zion-slate-dark px-6 py-3 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
                  >
                    Apply Now
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Modal */}
      {isApplying && selectedJob && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="bg-zion-slate-dark rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-white">Apply for Position</h3>
              <button
                onClick={() => setIsApplying(false)}
                className="text-zion-cyan hover:text-zion-cyan/80"
              >
                ✕
              </button>
            </div>
            
            <div className="space-y-6">
              <div className="bg-zion-slate/30 rounded-lg p-4">
                <h4 className="text-lg font-bold text-white mb-2">
                  {openPositions.find(job => job.id === selectedJob)?.title}
                </h4>
                <p className="text-zion-cyan/80 text-sm">
                  {openPositions.find(job => job.id === selectedJob)?.department}
                </p>
              </div>
              
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white font-medium mb-2">First Name *</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 bg-zion-slate/50 border border-zion-cyan/30 rounded-lg text-white placeholder-zion-cyan/50 focus:outline-none focus:border-zion-cyan"
                      placeholder="Enter first name"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">Last Name *</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 bg-zion-slate/50 border border-zion-cyan/30 rounded-lg text-white placeholder-zion-cyan/50 focus:outline-none focus:border-zion-cyan"
                      placeholder="Enter last name"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-white font-medium mb-2">Email *</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 bg-zion-slate/50 border border-zion-cyan/30 rounded-lg text-white placeholder-zion-cyan/50 focus:outline-none focus:border-zion-cyan"
                    placeholder="Enter email address"
                  />
                </div>
                
                <div>
                  <label className="block text-white font-medium mb-2">Phone</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 bg-zion-slate/50 border border-zion-cyan/30 rounded-lg text-white placeholder-zion-cyan/50 focus:outline-none focus:border-zion-cyan"
                    placeholder="Enter phone number"
                  />
                </div>
                
                <div>
                  <label className="block text-white font-medium mb-2">LinkedIn Profile</label>
                  <input
                    type="url"
                    className="w-full px-4 py-3 bg-zion-slate/50 border border-zion-cyan/30 rounded-lg text-white placeholder-zion-cyan/50 focus:outline-none focus:border-zion-cyan"
                    placeholder="Enter LinkedIn URL"
                  />
                </div>
                
                <div>
                  <label className="block text-white font-medium mb-2">Cover Letter</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-zion-slate/50 border border-zion-cyan/30 rounded-lg text-white placeholder-zion-cyan/50 focus:outline-none focus:border-zion-cyan resize-none"
                    placeholder="Tell us why you're interested in this position and what you can bring to our team..."
                  />
                </div>
                
                <div>
                  <label className="block text-white font-medium mb-2">Resume/CV *</label>
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    required
                    className="w-full px-4 py-3 bg-zion-slate/50 border border-zion-cyan/30 rounded-lg text-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-zion-cyan file:text-zion-slate-dark hover:file:bg-zion-cyan/80"
                  />
                </div>
                
                <div className="flex gap-4 pt-4">
                  <button
                    type="submit"
                    className="flex-1 bg-zion-cyan hover:bg-zion-cyan/80 text-zion-slate-dark px-6 py-3 rounded-lg font-bold transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Submit Application
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsApplying(false)}
                    className="px-6 py-3 border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-slate-dark rounded-lg font-bold transition-all duration-300"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Don't See the Right Fit?
            </h2>
            <p className="text-xl text-zion-cyan/80 mb-8">
              We're always looking for talented individuals to join our team. Send us your resume 
              and we'll keep you in mind for future opportunities.
            </p>
            <button className="bg-zion-cyan hover:bg-zion-cyan/80 text-zion-slate-dark px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105">
              Send General Application
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

// Icon components for company values
const Innovation: React.FC<{ className?: string }> = ({ className }) => (
  <Lightbulb className={className} />
);

const Collaboration: React.FC<{ className?: string }> = ({ className }) => (
  <Users className={className} />
);

const Excellence: React.FC<{ className?: string }> = ({ className }) => (
  <Award className={className} />
);

const Growth: React.FC<{ className?: string }> = ({ className }) => (
  <Rocket className={className} />
);

export default Careers;
