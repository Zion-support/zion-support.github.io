import React, { useState } from 'react';
import { motion } from 'framer-motion';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  Users, 
  Zap, 
  Globe, 
  Shield, 
  Heart, 
  Brain, 
  Code, 
  Rocket, 
  Award, 
  ArrowRight, 
  Search, 
  Filter, 
  Building, 
  GraduationCap, 
  TrendingUp, 
  Lightbulb, 
  Target, 
  Star, 
  CheckCircle, 
  Play, 
  Pause, 
  Stop, 
  SkipBack, 
  SkipForward, 
  Rewind, 
  FastForward, 
  Shuffle, 
  Repeat, 
  Repeat1, 
  Shuffle2, 
  SkipBack2, 
  SkipForward2, 
  PlayTriangle, 
  PauseTriangle, 
  StopTriangle, 
  SkipBackTriangle, 
  SkipForwardTriangle, 
  RewindTriangle, 
  FastForwardTriangle, 
  ShuffleTriangle, 
  RepeatTriangle, 
  Repeat1Triangle, 
  Shuffle2Triangle, 
  SkipBack2Triangle, 
  SkipForward2Triangle, 
  PlayOctagon, 
  PauseOctagon, 
  StopOctagon, 
  SkipBackOctagon, 
  SkipForwardOctagon, 
  RewindOctagon, 
  FastForwardOctagon, 
  ShuffleOctagon, 
  RepeatOctagon, 
  Repeat1Triangle, 
  Shuffle2Triangle, 
  SkipBack2Triangle, 
  SkipForward2Triangle, 
  PlayDodecagon, 
  PauseDodecagon, 
  StopDodecagon, 
  SkipBackDodecagon, 
  SkipForwardDodecagon, 
  RewindDodecagon, 
  FastForwardDodecagon, 
  ShuffleDodecagon, 
  RepeatDodecagon, 
  Repeat1Triangle, 
  Shuffle2Triangle, 
  SkipBack2Triangle, 
  SkipForward2Triangle
} from 'lucide-react';

const Careers: React.FC = () => {
  const [activeTab, setActiveTab] = useState('engineering');
  const [searchQuery, setSearchQuery] = useState('');

  const jobCategories = [
    {
      id: 'engineering',
      name: 'Engineering',
      icon: Code,
      description: 'Build the future with cutting-edge technology',
      color: 'from-zion-cyan to-zion-blue'
    },
    {
      id: 'ai-research',
      name: 'AI Research',
      icon: Brain,
      description: 'Pioneer breakthroughs in artificial intelligence',
      color: 'from-zion-purple to-zion-cyan'
    },
    {
      id: 'product',
      name: 'Product',
      icon: Target,
      description: 'Shape user experiences and product strategy',
      color: 'from-zion-blue to-zion-purple'
    },
    {
      id: 'design',
      name: 'Design',
      icon: Lightbulb,
      description: 'Create beautiful and intuitive interfaces',
      color: 'from-zion-cyan to-zion-purple'
    },
    {
      id: 'marketing',
      name: 'Marketing',
      icon: TrendingUp,
      description: 'Drive growth and brand awareness',
      color: 'from-zion-purple to-zion-cyan'
    },
    {
      id: 'operations',
      name: 'Operations',
      icon: Building,
      description: 'Optimize processes and drive efficiency',
      color: 'from-zion-blue to-zion-cyan'
    }
  ];

  const jobs = {
    engineering: [
      {
        id: 'eng-1',
        title: 'Senior Frontend Engineer',
        location: 'Remote',
        type: 'Full-time',
        department: 'Engineering',
        experience: '5+ years',
        description: 'Join our frontend team to build beautiful, responsive, and accessible user interfaces for our AI-powered solutions.',
        requirements: ['React/Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Testing'],
        benefits: ['Competitive salary', 'Equity package', 'Remote work', 'Flexible hours']
      },
      {
        id: 'eng-2',
        title: 'AI Research Engineer',
        location: 'San Francisco, CA',
        type: 'Full-time',
        department: 'Engineering',
        experience: '3+ years',
        description: 'Work on cutting-edge AI technologies to power our machine learning systems and recommendation engines.',
        requirements: ['Python', 'TensorFlow/PyTorch', 'ML/AI', 'Research experience', 'PhD preferred'],
        benefits: ['Competitive salary', 'Equity package', 'Research budget', 'Conference attendance']
      },
      {
        id: 'eng-3',
        title: 'Full Stack Developer',
        location: 'Remote',
        type: 'Full-time',
        department: 'Engineering',
        experience: '3+ years',
        description: 'Develop end-to-end features across our platform, working with modern technologies and cloud infrastructure.',
        requirements: ['Node.js', 'React', 'PostgreSQL', 'AWS/Azure', 'API design'],
        benefits: ['Competitive salary', 'Equity package', 'Remote work', 'Learning budget']
      }
    ],
    'ai-research': [
      {
        id: 'ai-1',
        title: 'AI Ethics Researcher',
        location: 'Remote',
        type: 'Full-time',
        department: 'AI Research',
        experience: 'PhD + 2 years',
        description: 'Lead research on AI ethics, bias detection, and responsible AI development practices.',
        requirements: ['AI Ethics', 'Research methodology', 'Policy knowledge', 'Technical background'],
        benefits: ['Competitive salary', 'Equity package', 'Research autonomy', 'Industry impact']
      },
      {
        id: 'ai-2',
        title: 'Quantum Computing Engineer',
        location: 'San Francisco, CA',
        type: 'Full-time',
        department: 'AI Research',
        experience: '5+ years',
        description: 'Develop quantum algorithms and quantum-classical hybrid systems for enterprise applications.',
        requirements: ['Quantum computing', 'Python', 'Linear algebra', 'Research experience'],
        benefits: ['Competitive salary', 'Equity package', 'Cutting-edge research', 'Industry collaboration']
      }
    ],
    product: [
      {
        id: 'prod-1',
        title: 'Senior Product Manager',
        location: 'New York, NY',
        type: 'Full-time',
        department: 'Product',
        experience: '5+ years',
        description: 'Lead product development initiatives to enhance our technology solutions and user experience.',
        requirements: ['Product strategy', 'User research', 'Data analysis', 'Cross-functional leadership'],
        benefits: ['Competitive salary', 'Equity package', 'Product ownership', 'Career growth']
      },
      {
        id: 'prod-2',
        title: 'UX/UI Designer',
        location: 'Remote',
        type: 'Full-time',
        department: 'Product',
        experience: '3+ years',
        description: 'Create intuitive and engaging user experiences that make complex technology accessible to all users.',
        requirements: ['UI/UX design', 'Figma', 'User research', 'Design systems', 'Prototyping'],
        benefits: ['Competitive salary', 'Equity package', 'Remote work', 'Design tools budget']
      }
    ],
    design: [
      {
        id: 'design-1',
        title: 'Visual Designer',
        location: 'Remote',
        type: 'Full-time',
        department: 'Design',
        experience: '3+ years',
        description: 'Create compelling visual designs and brand assets that communicate our innovative technology solutions.',
        requirements: ['Visual design', 'Brand identity', 'Adobe Creative Suite', 'Typography', 'Color theory'],
        benefits: ['Competitive salary', 'Equity package', 'Remote work', 'Creative freedom']
      }
    ],
    marketing: [
      {
        id: 'marketing-1',
        title: 'Growth Marketing Manager',
        location: 'Remote',
        type: 'Full-time',
        department: 'Marketing',
        experience: '4+ years',
        description: 'Drive user acquisition and engagement strategies across multiple channels to grow our platform.',
        requirements: ['Growth marketing', 'Digital advertising', 'Analytics', 'A/B testing', 'Funnel optimization'],
        benefits: ['Competitive salary', 'Equity package', 'Remote work', 'Performance bonuses']
      },
      {
        id: 'marketing-2',
        title: 'Content Strategist',
        location: 'London, UK',
        type: 'Full-time',
        department: 'Marketing',
        experience: '3+ years',
        description: 'Develop compelling content that educates and inspires our audience about the future of AI and technology.',
        requirements: ['Content strategy', 'Technical writing', 'SEO', 'Social media', 'Storytelling'],
        benefits: ['Competitive salary', 'Equity package', 'Hybrid work', 'Content creation budget']
      }
    ],
    operations: [
      {
        id: 'ops-1',
        title: 'Community Manager',
        location: 'Remote',
        type: 'Full-time',
        department: 'Operations',
        experience: '2+ years',
        description: 'Build and nurture our growing community of AI specialists, developers, and tech enthusiasts.',
        requirements: ['Community management', 'Social media', 'Event planning', 'Communication', 'Tech knowledge'],
        benefits: ['Competitive salary', 'Equity package', 'Remote work', 'Community building']
      },
      {
        id: 'ops-2',
        title: 'Talent Acquisition Specialist',
        location: 'Remote',
        type: 'Full-time',
        department: 'Operations',
        experience: '3+ years',
        description: 'Help connect the right talent with the right opportunities through personalized matching and support.',
        requirements: ['Recruitment', 'Talent sourcing', 'Interviewing', 'ATS systems', 'Tech industry knowledge'],
        benefits: ['Competitive salary', 'Equity package', 'Remote work', 'Recruitment tools']
      }
    ]
  };

  const benefits = [
    {
      icon: Zap,
      title: 'Flexible Work',
      description: 'Remote-first culture with flexible hours to support your productivity and work-life balance.',
      color: 'from-zion-cyan to-zion-blue'
    },
    {
      icon: Globe,
      title: 'Global Team',
      description: 'Work with talented people from around the world in a diverse and inclusive environment.',
      color: 'from-zion-purple to-zion-cyan'
    },
    {
      icon: Shield,
      title: 'Comprehensive Benefits',
      description: 'Competitive salary, equity package, health insurance, and retirement benefits.',
      color: 'from-zion-blue to-zion-purple'
    },
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Mental health support, wellness programs, and generous time off policies.',
      color: 'from-zion-cyan to-zion-purple'
    },
    {
      icon: Brain,
      title: 'Learning & Growth',
      description: 'Continuous learning opportunities, conference attendance, and career development support.',
      color: 'from-zion-purple to-zion-cyan'
    },
    {
      icon: Rocket,
      title: 'Innovation',
      description: 'Work on cutting-edge technology that shapes the future of AI and business.',
      color: 'from-zion-blue to-zion-cyan'
    }
  ];

  const companyValues = [
    {
      icon: Target,
      title: 'Mission-Driven',
      description: 'We\'re committed to democratizing access to advanced technology and driving positive change.',
      color: 'from-zion-cyan to-zion-blue'
    },
    {
      icon: Users,
      title: 'People-First',
      description: 'Our team is our greatest asset, and we invest in their growth, well-being, and success.',
      color: 'from-zion-purple to-zion-cyan'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We constantly push boundaries and explore new possibilities in technology and business.',
      color: 'from-zion-blue to-zion-purple'
    },
    {
      icon: Star,
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do, from code quality to customer service.',
      color: 'from-zion-cyan to-zion-purple'
=======
import { Search, MapPin, Briefcase, Clock, DollarSign, Award, ArrowRight, CheckCircle, Users, TrendingUp, Zap, Shield } from 'lucide-react';
import { SEO } from '../components/SEO';

const jobCategories = [
  { id: 'all', name: 'All Positions', count: 24 },
  { id: 'engineering', name: 'Engineering', count: 8 },
  { id: 'ai-ml', name: 'AI & Machine Learning', count: 6 },
  { id: 'cybersecurity', name: 'Cybersecurity', count: 4 },
  { id: 'cloud', name: 'Cloud & DevOps', count: 3 },
  { id: 'business', name: 'Business & Sales', count: 3 }
];

const jobs = {
  all: [
    {
      title: 'Senior AI Engineer',
      department: 'AI & Machine Learning',
      location: 'Remote / San Francisco',
      type: 'Full-time',
      experience: '5+ years',
      salary: '$150K - $200K',
      description: 'Lead the development of cutting-edge AI solutions for enterprise clients.',
      requirements: [
        'Expert in Python, TensorFlow, PyTorch',
        'Experience with large language models',
        'Strong background in machine learning',
        'PhD in Computer Science or related field'
      ],
      responsibilities: [
        'Design and implement AI algorithms',
        'Lead technical architecture decisions',
        'Mentor junior engineers',
        'Collaborate with product teams'
      ]
    },
    {
      title: 'Cybersecurity Specialist',
      department: 'Security',
      location: 'New York / Remote',
      type: 'Full-time',
      experience: '3+ years',
      salary: '$120K - $160K',
      description: 'Protect our clients from evolving cyber threats with advanced security solutions.',
      requirements: [
        'Certified Information Systems Security Professional (CISSP)',
        'Experience with SIEM tools and threat hunting',
        'Knowledge of compliance frameworks',
        'Strong analytical and problem-solving skills'
      ],
      responsibilities: [
        'Conduct security assessments',
        'Implement security controls',
        'Monitor and respond to security incidents',
        'Develop security policies and procedures'
      ]
    },
    {
      title: 'Cloud Solutions Architect',
      department: 'Cloud & DevOps',
      location: 'Austin / Remote',
      type: 'Full-time',
      experience: '7+ years',
      salary: '$160K - $220K',
      description: 'Design and implement scalable cloud infrastructure solutions.',
      requirements: [
        'AWS, Azure, or GCP certifications',
        'Experience with Kubernetes and Docker',
        'Strong understanding of microservices architecture',
        'Background in software development'
      ],
      responsibilities: [
        'Design cloud architecture solutions',
        'Lead migration projects',
        'Optimize cloud costs and performance',
        'Provide technical leadership'
      ]
    }
  ],
  engineering: [
    {
      title: 'Full Stack Developer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      experience: '3+ years',
      salary: '$100K - $140K',
      description: 'Build scalable web applications using modern technologies.',
      requirements: [
        'Proficient in React, Node.js, TypeScript',
        'Experience with cloud platforms',
        'Knowledge of database design',
        'Strong problem-solving skills'
      ],
      responsibilities: [
        'Develop new features and applications',
        'Write clean, maintainable code',
        'Participate in code reviews',
        'Collaborate with cross-functional teams'
      ]
    }
  ],
  'ai-ml': [
    {
      title: 'Machine Learning Engineer',
      department: 'AI & Machine Learning',
      location: 'San Francisco / Remote',
      type: 'Full-time',
      experience: '4+ years',
      salary: '$130K - $180K',
      description: 'Build and deploy machine learning models at scale.',
      requirements: [
        'Strong Python programming skills',
        'Experience with ML frameworks',
        'Knowledge of MLOps practices',
        'Background in statistics and mathematics'
      ],
      responsibilities: [
        'Develop ML models and pipelines',
        'Optimize model performance',
        'Deploy models to production',
        'Collaborate with data scientists'
      ]
    }
  ],
  cybersecurity: [
    {
      title: 'Security Engineer',
      department: 'Security',
      location: 'Remote',
      type: 'Full-time',
      experience: '2+ years',
      salary: '$90K - $130K',
      description: 'Implement and maintain security infrastructure.',
      requirements: [
        'Experience with security tools and technologies',
        'Knowledge of network security',
        'Understanding of security best practices',
        'Strong attention to detail'
      ],
      responsibilities: [
        'Configure security tools',
        'Monitor security systems',
        'Respond to security alerts',
        'Maintain security documentation'
      ]
>>>>>>> d55a36bd8e1888949033367a1b7620593463887f
    }
  ],
  cloud: [
    {
      title: 'DevOps Engineer',
      department: 'Cloud & DevOps',
      location: 'Remote',
      type: 'Full-time',
      experience: '3+ years',
      salary: '$110K - $150K',
      description: 'Automate and optimize our development and deployment processes.',
      requirements: [
        'Experience with CI/CD pipelines',
        'Knowledge of infrastructure as code',
        'Familiarity with monitoring tools',
        'Strong scripting skills'
      ],
      responsibilities: [
        'Build and maintain CI/CD pipelines',
        'Automate deployment processes',
        'Monitor system performance',
        'Collaborate with development teams'
      ]
    }
  ],
  business: [
    {
      title: 'Business Development Manager',
      department: 'Business & Sales',
      location: 'New York / Remote',
      type: 'Full-time',
      experience: '5+ years',
      salary: '$120K - $160K + Commission',
      description: 'Drive business growth through strategic partnerships and client relationships.',
      requirements: [
        'Proven track record in B2B sales',
        'Experience in technology industry',
        'Strong communication skills',
        'Ability to build relationships'
      ],
      responsibilities: [
        'Identify new business opportunities',
        'Build client relationships',
        'Develop sales strategies',
        'Meet revenue targets'
      ]
    }
  ]
};

export default function Careers() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredJobs = jobs[activeTab]?.filter(job =>
    job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    job.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
    job.description.toLowerCase().includes(searchQuery.toLowerCase())
  ) || [];

  const filteredJobs = jobs[activeTab as keyof typeof jobs]?.filter(job =>
    job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    job.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    job.location.toLowerCase().includes(searchQuery.toLowerCase())
  ) || [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      <SEO 
        title="Careers at Zion Tech Group - Join Our Team"
        description="Explore exciting career opportunities at Zion Tech Group. Join our team of innovators in AI, cybersecurity, cloud solutions, and emerging technologies."
        keywords="careers, jobs, employment, Zion Tech Group, AI, cybersecurity, cloud, technology jobs"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-6xl mx-auto">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Join the <span className="bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent">
                Future
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-zion-slate-light mb-12 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
<<<<<<< HEAD
              Help us build the future of technology. Join a team of innovators, problem-solvers, 
              and visionaries who are transforming how businesses leverage AI and emerging technologies.
=======
              Be part of a team that's shaping the future of technology. Work on cutting-edge projects 
              in AI, cybersecurity, and emerging technologies while building your career with purpose.
>>>>>>> d55a36bd8e1888949033367a1b7620593463887f
            </motion.p>

            {/* Search Bar */}
            <motion.div 
              className="max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
<<<<<<< HEAD
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-zion-cyan/25 transition-all duration-300 transform hover:scale-105"
              >
                View Open Positions
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <button className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-semibold rounded-xl hover:bg-zion-cyan hover:text-white transition-all duration-300">
                Learn About Our Culture
              </button>
=======
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zion-slate-light" />
                <input
                  type="text"
                  placeholder="Search positions, departments, or keywords..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-xl text-white placeholder-zion-slate-light focus:border-zion-cyan focus:outline-none focus:ring-2 focus:ring-zion-cyan/20 transition-all duration-300"
                />
              </div>
>>>>>>> d55a36bd8e1888949033367a1b7620593463887f
            </motion.div>
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Company Values */}
      <section className="py-20">
=======
      {/* Why Work With Us */}
      <section className="py-20 bg-zion-slate-dark/30">
>>>>>>> d55a36bd8e1888949033367a1b7620593463887f
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
<<<<<<< HEAD
              Our <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Values</span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              The principles that guide our culture and shape how we work together
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {companyValues.map((value, index) => (
              <motion.div
                key={value.title}
                className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-xl p-8 hover:border-zion-cyan/40 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center mb-6`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-zion-slate-light leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Zion Tech Group?</span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              We believe in taking care of our people so they can do their best work
            </p>
=======
              Why <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Zion Tech Group</span>?
            </h2>
>>>>>>> d55a36bd8e1888949033367a1b7620593463887f
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-12 h-12 text-zion-cyan" />,
                title: 'Cutting-Edge Technology',
                description: 'Work with the latest AI, quantum computing, and emerging technologies that define the future.'
              },
              {
                icon: <Users className="w-12 h-12 text-zion-cyan" />,
                title: 'Collaborative Culture',
                description: 'Join a diverse team of experts who value innovation, creativity, and mutual support.'
              },
              {
                icon: <TrendingUp className="w-12 h-12 text-zion-cyan" />,
                title: 'Career Growth',
                description: 'Continuous learning opportunities, mentorship programs, and clear career progression paths.'
              },
              {
                icon: <Shield className="w-12 h-12 text-zion-cyan" />,
                title: 'Work-Life Balance',
                description: 'Flexible remote work options, competitive benefits, and a healthy work environment.'
              }
            ].map((benefit, index) => (
              <motion.div
<<<<<<< HEAD
                key={benefit.title}
                className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300"
=======
                key={index}
                className="text-center p-8 bg-zion-slate-dark/50 rounded-xl border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300"
>>>>>>> d55a36bd8e1888949033367a1b7620593463887f
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
<<<<<<< HEAD
                <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-xl flex items-center justify-center mb-4`}>
                  <benefit.icon className="w-8 h-8 text-white" />
=======
                <div className="flex justify-center mb-6">
                  {benefit.icon}
>>>>>>> d55a36bd8e1888949033367a1b7620593463887f
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
                <p className="text-zion-slate-light">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Job Categories */}
=======
      {/* Job Listings */}
>>>>>>> d55a36bd8e1888949033367a1b7620593463887f
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Explore <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Opportunities</span>
            </h2>
<<<<<<< HEAD
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Find the perfect role that matches your skills, interests, and career goals
            </p>
=======
>>>>>>> d55a36bd8e1888949033367a1b7620593463887f
          </motion.div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
<<<<<<< HEAD
            {jobCategories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === category.id
                    ? 'bg-gradient-to-r from-zion-cyan to-zion-blue text-white shadow-lg shadow-zion-cyan/25'
                    : 'bg-zion-slate-dark/50 text-zion-slate-light hover:bg-zion-slate-dark/70 border border-zion-cyan/20'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex items-center gap-2">
                  <category.icon className="w-5 h-5" />
                  {category.name}
                </div>
              </motion.button>
            ))}
          </div>

          {/* Search Bar */}
          <motion.div 
            className="max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zion-slate-light" />
              <input
                type="text"
                placeholder="Search jobs by title, description, or location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-xl text-white placeholder-zion-slate-light focus:border-zion-cyan focus:outline-none focus:ring-2 focus:ring-zion-cyan/20 transition-all duration-300"
              />
            </div>
          </motion.div>

          {/* Active Category Description */}
          <motion.div 
            className="text-center mb-12"
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-2xl mb-6">
              {React.createElement(jobCategories.find(c => c.id === activeTab)?.icon || Code, { className: "w-10 h-10 text-white" })}
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              {jobCategories.find(c => c.id === activeTab)?.name}
            </h3>
            <p className="text-zion-slate-light max-w-2xl mx-auto">
              {jobCategories.find(c => c.id === activeTab)?.description}
            </p>
          </motion.div>

          {/* Job Listings */}
          <div className="space-y-6">
            {filteredJobs.map((job, index) => (
              <motion.div
                key={job.id}
                className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300"
=======
            {jobCategories.map((tab, index) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-zion-cyan to-zion-blue text-white shadow-lg shadow-zion-cyan/25'
                    : 'bg-zion-slate-dark/50 text-zion-slate-light hover:bg-zion-slate-dark/70 border border-zion-cyan/20'
                }`}
>>>>>>> d55a36bd8e1888949033367a1b7620593463887f
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
<<<<<<< HEAD
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-2xl font-bold text-white">{job.title}</h3>
                      <span className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-sm font-semibold rounded-full">
                        {job.type}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-6 text-zion-slate-light mb-4">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{job.experience}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Building className="w-4 h-4" />
                        <span>{job.department}</span>
=======
                              >
                  {tab.label} ({tab.count})
                </motion.button>
            ))}
          </div>

          {/* Job Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredJobs.map((job, index) => (
              <motion.div
                key={index}
                className="bg-zion-slate-dark/50 rounded-xl p-8 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">{job.title}</h3>
                    <p className="text-zion-slate-light mb-4">{job.description}</p>
                    
                    <div className="flex flex-wrap gap-4 mb-6">
                      <div className="flex items-center text-zion-slate-light text-sm">
                        <Briefcase className="w-4 h-4 text-zion-cyan mr-2" />
                        {job.department}
                      </div>
                      <div className="flex items-center text-zion-slate-light text-sm">
                        <MapPin className="w-4 h-4 text-zion-cyan mr-2" />
                        {job.location}
                      </div>
                      <div className="flex items-center text-zion-slate-light text-sm">
                        <Clock className="w-4 h-4 text-zion-cyan mr-2" />
                        {job.type}
                      </div>
                      <div className="flex items-center text-zion-slate-light text-sm">
                        <Award className="w-4 h-4 text-zion-cyan mr-2" />
                        {job.experience}
                      </div>
                      <div className="flex items-center text-zion-slate-light text-sm">
                        <DollarSign className="w-4 h-4 text-zion-cyan mr-2" />
                        {job.salary}
>>>>>>> d55a36bd8e1888949033367a1b7620593463887f
                      </div>
                    </div>
                    
                    <p className="text-zion-slate-light mb-4 leading-relaxed">{job.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {job.requirements?.map((req, reqIndex) => (
                        <span key={reqIndex} className="px-3 py-1 bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-full text-zion-cyan text-sm">
                          {req}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {job.benefits?.map((benefit, benefitIndex) => (
                        <span key={benefitIndex} className="px-3 py-1 bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-full text-zion-slate-light text-sm">
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                  
<<<<<<< HEAD
                  <div className="flex-shrink-0">
                    <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300">
                      Apply Now
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </button>
=======
                  <div className="lg:ml-6 lg:flex-shrink-0">
                    <a 
                      href="/contact"
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
                    >
                      Apply Now
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </a>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Requirements</h4>
                    <ul className="space-y-2">
                      {job.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-start text-zion-slate-light text-sm">
                          <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 mt-0.5 flex-shrink-0" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Responsibilities</h4>
                    <ul className="space-y-2">
                      {job.responsibilities.map((resp, respIndex) => (
                        <li key={respIndex} className="flex items-start text-zion-slate-light text-sm">
                          <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 mt-0.5 flex-shrink-0" />
                          {resp}
                        </li>
                      ))}
                    </ul>
>>>>>>> d55a36bd8e1888949033367a1b7620593463887f
                  </div>
                </div>
              </motion.div>
            ))}
            
            {filteredJobs.length === 0 && (
              <motion.div
                className="text-center py-20"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Briefcase className="w-16 h-16 text-zion-slate-light mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">No jobs found</h3>
                <p className="text-zion-slate-light">Try adjusting your search or browse other categories</p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
<<<<<<< HEAD
              Ready to Join <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Our Team?</span>
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Don't see the perfect role? We're always looking for talented individuals to join our mission. 
              Send us your resume and let's explore opportunities together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-zion-cyan/25 transition-all duration-300 transform hover:scale-105"
              >
                Send Your Resume
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <button className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-semibold rounded-xl hover:bg-zion-cyan hover:text-white transition-all duration-300">
                Schedule a Call
              </button>
            </div>
=======
              Don't See the Right <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Fit</span>?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              We're always looking for talented individuals to join our team. 
              Send us your resume and let's discuss how you can contribute to our mission.
            </p>
            <a 
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
            >
              Send Your Resume
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
>>>>>>> d55a36bd8e1888949033367a1b7620593463887f
          </motion.div>
        </div>
      </section>
    </div>
  );
}
