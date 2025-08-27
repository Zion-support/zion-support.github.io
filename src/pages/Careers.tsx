import React, { useState } from 'react';
import { motion } from 'framer-motion';
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
    }
  ];

  const filteredJobs = jobs[activeTab as keyof typeof jobs]?.filter(job =>
    job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    job.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    job.location.toLowerCase().includes(searchQuery.toLowerCase())
  ) || [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
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
              Join Our <span className="bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent">
                Mission
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-zion-slate-light mb-12 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Help us build the future of technology. Join a team of innovators, problem-solvers, 
              and visionaries who are transforming how businesses leverage AI and emerging technologies.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
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
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Values */}
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
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-xl flex items-center justify-center mb-4`}>
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-zion-slate-light text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Categories */}
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
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Find the perfect role that matches your skills, interests, and career goals
            </p>
          </motion.div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
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
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
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
                  
                  <div className="flex-shrink-0">
                    <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300">
                      Apply Now
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </button>
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
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
