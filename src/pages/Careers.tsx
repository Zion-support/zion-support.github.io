import React, { useState } from 'react';
import { 
  Users, 
  Brain, 
  Shield, 
  Cpu, 
  Cloud, 
  Code, 
  Globe, 
  Award,
  Heart,
  Zap,
  Star,
  ArrowRight,
  CheckCircle,
  Clock,
  MapPin,
  DollarSign,
  GraduationCap,
  Briefcase,
  Mail,
  Linkedin,
  ExternalLink
} from 'lucide-react';

export default function Careers() {
  const [activeDepartment, setActiveDepartment] = useState('all');

  const departments = [
    {
      id: 'all',
      name: 'All Departments',
      icon: Users,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'ai-research',
      name: 'AI & Research',
      icon: Brain,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'engineering',
      name: 'Engineering',
      icon: Code,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'cybersecurity',
      name: 'Cybersecurity',
      icon: Shield,
      color: 'from-red-500 to-pink-500'
    },
    {
      id: 'quantum',
      name: 'Quantum Technology',
      icon: Cpu,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      id: 'cloud',
      name: 'Cloud & Infrastructure',
      icon: Cloud,
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const jobOpenings = [
    {
      id: 'senior-ai-engineer',
      title: 'Senior AI Engineer',
      department: 'ai-research',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Join our AI research team to develop cutting-edge autonomous systems and machine learning solutions.',
      requirements: [
        'Advanced degree in Computer Science, AI, or related field',
        'Expertise in deep learning, neural networks, and AI frameworks',
        'Experience with autonomous systems and reinforcement learning',
        'Strong programming skills in Python, TensorFlow, PyTorch'
      ],
      benefits: [
        'Competitive salary with equity options',
        'Flexible remote work arrangements',
        'Professional development budget',
        'Health, dental, and vision insurance'
      ],
      urgent: true
    },
    {
      id: 'quantum-computing-researcher',
      title: 'Quantum Computing Researcher',
      department: 'quantum',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Research and develop quantum algorithms and quantum-safe security protocols.',
      requirements: [
        'PhD in Physics, Computer Science, or related field',
        'Experience with quantum computing frameworks (Qiskit, Cirq)',
        'Knowledge of quantum algorithms and quantum cryptography',
        'Strong mathematical and analytical skills'
      ],
      benefits: [
        'Competitive salary with equity options',
        'Access to quantum computing resources',
        'Conference and research publication support',
        'Comprehensive benefits package'
      ],
      urgent: false
    },
    {
      id: 'cybersecurity-architect',
      title: 'Cybersecurity Architect',
      department: 'cybersecurity',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '7+ years',
      description: 'Design and implement enterprise-grade security solutions for our clients.',
      requirements: [
        'Expertise in security architecture and design',
        'Experience with SOC2, ISO 27001, and other compliance frameworks',
        'Knowledge of threat modeling and risk assessment',
        'Strong understanding of cloud security and zero-trust architecture'
      ],
      benefits: [
        'Competitive salary with equity options',
        'Remote work flexibility',
        'Professional certifications support',
        'Health and wellness benefits'
      ],
      urgent: true
    },
    {
      id: 'cloud-devops-engineer',
      title: 'Cloud DevOps Engineer',
      department: 'cloud',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Build and maintain scalable cloud infrastructure and CI/CD pipelines.',
      requirements: [
        'Experience with AWS, Azure, or Google Cloud Platform',
        'Proficiency in Docker, Kubernetes, and infrastructure as code',
        'Knowledge of CI/CD tools and practices',
        'Strong scripting skills in Python, Bash, or PowerShell'
      ],
      benefits: [
        'Competitive salary with equity options',
        'Remote work options',
        'Cloud certification support',
        'Flexible work hours'
      ],
      urgent: false
    },
    {
      id: 'frontend-developer',
      title: 'Frontend Developer',
      department: 'engineering',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Create beautiful and responsive user interfaces for our AI-powered applications.',
      requirements: [
        'Expertise in React, TypeScript, and modern frontend frameworks',
        'Experience with responsive design and accessibility',
        'Knowledge of state management and API integration',
        'Strong UI/UX design principles'
      ],
      benefits: [
        'Competitive salary with equity options',
        'Remote work flexibility',
        'Professional development opportunities',
        'Health and dental insurance'
      ],
      urgent: false
    },
    {
      id: 'ai-product-manager',
      title: 'AI Product Manager',
      department: 'ai-research',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead product strategy and development for our AI-powered solutions.',
      requirements: [
        'Experience in AI/ML product management',
        'Strong technical background and understanding of AI technologies',
        'Excellent communication and stakeholder management skills',
        'Experience with agile development methodologies'
      ],
      benefits: [
        'Competitive salary with equity options',
        'Remote work options',
        'Professional development budget',
        'Comprehensive benefits package'
      ],
      urgent: true
    }
  ];

  const companyBenefits = [
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health, dental, and vision insurance for you and your family.',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: DollarSign,
      title: 'Competitive Compensation',
      description: 'Attractive salary packages with equity options and performance bonuses.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Clock,
      title: 'Flexible Work',
      description: 'Remote work options and flexible hours to support work-life balance.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: GraduationCap,
      title: 'Learning & Growth',
      description: 'Professional development budget and continuous learning opportunities.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'Work on cutting-edge technology that transforms businesses worldwide.',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Star,
      title: 'Innovation Culture',
      description: 'Be part of a team that pushes the boundaries of what\'s possible.',
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const cultureValues = [
    {
      icon: Brain,
      title: 'Innovation First',
      description: 'We encourage creative thinking and novel approaches to solving complex problems.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and diverse perspectives to achieve excellence.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Zap,
      title: 'Continuous Learning',
      description: 'We foster a culture of curiosity and continuous improvement.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Shield,
      title: 'Integrity',
      description: 'We maintain the highest ethical standards in all our work and relationships.',
      color: 'from-red-500 to-pink-500'
    }
  ];

  const filteredJobs = activeDepartment === 'all' 
    ? jobOpenings 
    : jobOpenings.filter(job => job.department === activeDepartment);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-blue-900 text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)]"></div>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Join Our Team
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Be part of a team that's revolutionizing technology and shaping the future of AI, 
            quantum computing, and digital transformation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#openings"
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
            >
              View Openings
            </a>
            <a
              href="/contact"
              className="px-8 py-3 border border-cyan-500 text-cyan-400 font-medium rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-200"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Our Culture
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We foster an environment of innovation, collaboration, and continuous learning 
              where every team member can thrive and make a meaningful impact.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cultureValues.map((value, index) => (
              <div key={index} className="text-center group">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-r ${value.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Why Work With Us?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We offer comprehensive benefits and opportunities that support your professional 
              growth and personal well-being.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companyBenefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 group"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${benefit.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section id="openings" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Open Positions
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Explore exciting opportunities to join our team and contribute to groundbreaking 
              technology solutions.
            </p>
          </div>

          {/* Department Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {departments.map((dept) => (
              <button
                key={dept.id}
                onClick={() => setActiveDepartment(dept.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeDepartment === dept.id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white'
                }`}
              >
                <dept.icon className="w-5 h-5" />
                <span>{dept.name}</span>
              </button>
            ))}
          </div>
          
          <div className="space-y-6">
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div className="mb-4 lg:mb-0">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-xl font-semibold text-white">{job.title}</h3>
                      {job.urgent && (
                        <span className="px-2 py-1 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-medium rounded-full">
                          Urgent
                        </span>
                      )}
                    </div>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                      <div className="flex items-center space-x-1">
                        <Briefcase className="w-4 h-4" />
                        <span>{job.type}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{job.experience}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-3">
                    <a
                      href={`mailto:careers@ziontechgroup.com?subject=Application for ${job.title}`}
                      className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-white font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Apply</span>
                    </a>
                    <a
                      href={`https://linkedin.com/company/zion-tech-group/jobs`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 px-4 py-2 border border-cyan-500 text-cyan-400 rounded-lg font-medium hover:bg-cyan-500 hover:text-white transition-all duration-200"
                    >
                      <Linkedin className="w-4 h-4" />
                      <span>LinkedIn</span>
                    </a>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4">{job.description}</p>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-white mb-2">Requirements:</h4>
                    <ul className="space-y-1">
                      {job.requirements.map((req, index) => (
                        <li key={index} className="flex items-start space-x-2 text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {job.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start space-x-2 text-sm text-gray-400">
                          <Star className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No positions available in this department at the moment.</p>
              <p className="text-gray-500 mt-2">Check back later or contact us for future opportunities.</p>
            </div>
          )}
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              How to Apply
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our simple and transparent application process designed to find the best talent.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Submit Application</h3>
              <p className="text-gray-400">Send your resume and cover letter to careers@ziontechgroup.com</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Initial Review</h3>
              <p className="text-gray-400">Our team reviews your application within 48 hours</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Technical Interview</h3>
              <p className="text-gray-400">Discuss your skills and experience with our team</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Join Our Team</h3>
              <p className="text-gray-400">Welcome aboard! Start your journey with us</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Join Our Mission?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Help us revolutionize technology and shape the future of AI and digital transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:careers@ziontechgroup.com"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-white font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
            >
              <Mail className="w-5 h-5" />
              <span>Send Application</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="/contact"
              className="inline-flex items-center space-x-2 px-8 py-4 border border-cyan-500 text-cyan-400 rounded-lg font-medium hover:bg-cyan-500 hover:text-white transition-all duration-200"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}