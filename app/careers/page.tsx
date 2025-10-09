'use client';
import React, { useState } from 'react';
import { Brain, Mail, MapPin, Clock, Users, Award, CheckCircle, ArrowRight, Zap, Shield, Code, BarChart, Cloud, Database, Settings, Phone, Target, MessageSquare, Eye, Cpu, Lock, Truck, Factory, GraduationCap, Stethoscope, CreditCard, Home, Briefcase, Wrench, FileText, Search, Bot, Music, Video, Gamepad2, ShoppingCart, Building, Car, Plane, Ship, Train, Heart, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Navigation as NavIcon, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location, TrendingUp, Plus, Minus } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const CareersPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedJob, setExpandedJob] = useState<number | null>(null);

  const jobCategories = [
    { id: 'all', name: 'All Positions', icon: Users },
    { id: 'engineering', name: 'Engineering', icon: Code },
    { id: 'ai-research', name: 'AI Research', icon: Brain },
    { id: 'product', name: 'Product', icon: Target },
    { id: 'design', name: 'Design', icon: Eye },
    { id: 'marketing', name: 'Marketing', icon: MessageSquare },
    { id: 'sales', name: 'Sales', icon: TrendingUp },
    { id: 'operations', name: 'Operations', icon: Settings }
  ];

  const openPositions = [
    {
      id: 1,
      title: 'Senior AI Engineer',
      department: 'Engineering',
      category: 'engineering',
      location: 'Remote / San Francisco, CA',
      type: 'Full-time',
      experience: '5+ years',
      description: 'We are looking for a Senior AI Engineer to join our team and help build cutting-edge AI solutions for enterprise clients.',
      responsibilities: [
        'Design and implement machine learning models for enterprise applications',
        'Work with cross-functional teams to deliver AI-powered solutions',
        'Optimize model performance and scalability',
        'Mentor junior engineers and contribute to technical architecture decisions',
        'Stay up-to-date with latest AI/ML research and technologies'
      ],
      requirements: [
        '5+ years of experience in AI/ML engineering',
        'Strong background in Python, TensorFlow, PyTorch',
        'Experience with cloud platforms (AWS, GCP, Azure)',
        'Knowledge of MLOps and model deployment',
        'Excellent problem-solving and communication skills'
      ],
      benefits: [
        'Competitive salary and equity',
        'Comprehensive health, dental, and vision insurance',
        'Flexible work arrangements',
        'Professional development budget',
        'Top-tier equipment and tools'
      ]
    },
    {
      id: 2,
      title: 'AI Research Scientist',
      department: 'AI Research',
      category: 'ai-research',
      location: 'Remote / New York, NY',
      type: 'Full-time',
      experience: 'PhD + 3 years',
      description: 'Join our research team to push the boundaries of artificial intelligence and develop breakthrough technologies.',
      responsibilities: [
        'Conduct cutting-edge research in AI/ML',
        'Publish research papers in top-tier conferences',
        'Collaborate with product teams to translate research into applications',
        'Lead research projects and mentor junior researchers',
        'Contribute to open-source AI projects'
      ],
      requirements: [
        'PhD in Computer Science, AI, or related field',
        'Strong publication record in AI/ML conferences',
        'Experience with deep learning frameworks',
        'Knowledge of quantum computing (preferred)',
        'Excellent written and verbal communication skills'
      ],
      benefits: [
        'Research-focused environment',
        'Conference attendance and publication support',
        'Access to cutting-edge computing resources',
        'Collaboration with top universities',
        'Competitive research salary'
      ]
    },
    {
      id: 3,
      title: 'Product Manager - AI Solutions',
      department: 'Product',
      category: 'product',
      location: 'Remote / Austin, TX',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Lead product strategy and development for our AI-powered enterprise solutions.',
      responsibilities: [
        'Define product roadmap and strategy for AI solutions',
        'Work with engineering and design teams to deliver products',
        'Conduct market research and competitive analysis',
        'Manage product launches and go-to-market strategies',
        'Gather and prioritize customer requirements'
      ],
      requirements: [
        '4+ years of product management experience',
        'Experience with AI/ML products (preferred)',
        'Strong analytical and problem-solving skills',
        'Excellent communication and leadership abilities',
        'Technical background or understanding of AI concepts'
      ],
      benefits: [
        'Product ownership and impact',
        'Cross-functional collaboration',
        'Customer interaction and feedback',
        'Career growth opportunities',
        'Competitive compensation package'
      ]
    },
    {
      id: 4,
      title: 'UX Designer - AI Interfaces',
      department: 'Design',
      category: 'design',
      location: 'Remote / Seattle, WA',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Design intuitive and accessible user interfaces for AI-powered applications.',
      responsibilities: [
        'Design user interfaces for AI applications',
        'Conduct user research and usability testing',
        'Create wireframes, prototypes, and design systems',
        'Collaborate with product and engineering teams',
        'Ensure accessibility and inclusive design principles'
      ],
      requirements: [
        '3+ years of UX/UI design experience',
        'Portfolio demonstrating AI/ML interface design',
        'Proficiency in Figma, Sketch, or similar tools',
        'Understanding of AI/ML concepts and limitations',
        'Strong user research and testing skills'
      ],
      benefits: [
        'Creative and innovative environment',
        'User-centered design approach',
        'Access to latest design tools and resources',
        'Professional development opportunities',
        'Competitive salary and benefits'
      ]
    },
    {
      id: 5,
      title: 'DevOps Engineer',
      department: 'Engineering',
      category: 'engineering',
      location: 'Remote / Denver, CO',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Build and maintain scalable infrastructure for our AI and cloud services.',
      responsibilities: [
        'Design and implement CI/CD pipelines',
        'Manage cloud infrastructure and services',
        'Automate deployment and monitoring processes',
        'Ensure system reliability and performance',
        'Collaborate with development teams on infrastructure needs'
      ],
      requirements: [
        '4+ years of DevOps/Infrastructure experience',
        'Experience with Kubernetes, Docker, and cloud platforms',
        'Knowledge of monitoring and logging tools',
        'Scripting skills (Python, Bash, etc.)',
        'Strong problem-solving and troubleshooting abilities'
      ],
      benefits: [
        'Cutting-edge infrastructure challenges',
        'Cloud and containerization expertise',
        'Automation and efficiency focus',
        'Technical growth opportunities',
        'Competitive compensation and benefits'
      ]
    },
    {
      id: 6,
      title: 'AI Ethics Specialist',
      department: 'AI Research',
      category: 'ai-research',
      location: 'Remote / Washington, DC',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Ensure our AI solutions are developed and deployed responsibly and ethically.',
      responsibilities: [
        'Develop AI ethics guidelines and policies',
        'Conduct bias audits and fairness assessments',
        'Work with product teams on ethical AI implementation',
        'Engage with external stakeholders on AI ethics',
        'Stay current with AI ethics research and regulations'
      ],
      requirements: [
        '3+ years of experience in AI ethics or related field',
        'Understanding of AI bias, fairness, and transparency',
        'Knowledge of AI regulations and compliance',
        'Strong analytical and communication skills',
        'Background in ethics, law, or social sciences (preferred)'
      ],
      benefits: [
        'Meaningful impact on AI development',
        'Interdisciplinary collaboration',
        'Policy and regulation engagement',
        'Research and thought leadership',
        'Competitive salary and benefits'
      ]
    }
  ];

  const benefits = [
    {
      title: 'Health & Wellness',
      icon: Heart,
      items: ['Comprehensive health insurance', 'Mental health support', 'Gym membership', 'Wellness programs']
    },
    {
      title: 'Work-Life Balance',
      icon: Clock,
      items: ['Flexible work arrangements', 'Unlimited PTO', 'Remote work options', 'Family-friendly policies']
    },
    {
      title: 'Professional Growth',
      icon: TrendingUp,
      items: ['Learning budget', 'Conference attendance', 'Mentorship programs', 'Career development plans']
    },
    {
      title: 'Technology',
      icon: Cpu,
      items: ['Latest equipment', 'Software licenses', 'Cloud credits', 'Research resources']
    },
    {
      title: 'Financial',
      icon: Award,
      items: ['Competitive salary', 'Equity participation', '401k matching', 'Performance bonuses']
    },
    {
      title: 'Culture',
      icon: Users,
      items: ['Inclusive environment', 'Team events', 'Diversity initiatives', 'Open communication']
    }
  ];

  const filteredJobs = selectedCategory === 'all' 
    ? openPositions 
    : openPositions.filter(job => job.category === selectedCategory);

  const toggleJobExpansion = (jobId: number) => {
    setExpandedJob(expandedJob === jobId ? null : jobId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer
        title="Careers - Join Our Team | Zion Tech Group"
        description="Join our team of AI experts and innovators. Explore open positions and be part of the future of technology at Zion Tech Group."
        keywords={['careers', 'jobs', 'AI jobs', 'tech careers', 'Zion Tech Group', 'engineering jobs', 'AI research']}
        canonicalUrl="https://ziontechgroup.com/careers"
      />
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 neon-text">
            Join Our Team
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Be part of the future of AI and technology. We're building the next generation of intelligent solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#open-positions"
              className="cyber-button px-8 py-3 text-lg font-semibold"
            >
              View Open Positions
            </a>
            <a
              href="/contact"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              Get In Touch
            </a>
          </div>
        </section>

        {/* Why Work With Us */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Why Work With Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="cyber-card p-6">
                <benefit.icon className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <ul className="space-y-2">
                  {benefit.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Open Positions */}
        <section id="open-positions" className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Open Positions
          </h2>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {jobCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-cyan-400 text-slate-900'
                    : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                }`}
              >
                <category.icon className="w-4 h-4" />
                <span>{category.name}</span>
              </button>
            ))}
          </div>

          {/* Job Listings */}
          <div className="space-y-6">
            {filteredJobs.map((job) => (
              <div key={job.id} className="cyber-card p-6">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{job.title}</h3>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-300 mb-3">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {job.location}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {job.type}
                      </div>
                      <div className="flex items-center">
                        <Award className="w-4 h-4 mr-1" />
                        {job.experience}
                      </div>
                    </div>
                    <p className="text-gray-300">{job.description}</p>
                  </div>
                  <button
                    onClick={() => toggleJobExpansion(job.id)}
                    className="mt-4 lg:mt-0 lg:ml-4 flex items-center space-x-2 text-cyan-400 hover:text-white transition-colors"
                  >
                    <span>{expandedJob === job.id ? 'Show Less' : 'View Details'}</span>
                    {expandedJob === job.id ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </button>
                </div>

                {expandedJob === job.id && (
                  <div className="border-t border-gray-700 pt-6 mt-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-lg font-semibold text-cyan-400 mb-3">Responsibilities</h4>
                        <ul className="space-y-2">
                          {job.responsibilities.map((responsibility, index) => (
                            <li key={index} className="flex items-start text-gray-300">
                              <ArrowRight className="w-4 h-4 text-cyan-400 mr-2 mt-1 flex-shrink-0" />
                              {responsibility}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-pink-400 mb-3">Requirements</h4>
                        <ul className="space-y-2">
                          {job.requirements.map((requirement, index) => (
                            <li key={index} className="flex items-start text-gray-300">
                              <CheckCircle className="w-4 h-4 text-pink-400 mr-2 mt-1 flex-shrink-0" />
                              {requirement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <h4 className="text-lg font-semibold text-green-400 mb-3">Benefits</h4>
                      <ul className="space-y-2">
                        {job.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start text-gray-300">
                            <Star className="w-4 h-4 text-green-400 mr-2 mt-1 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-6 flex flex-col sm:flex-row gap-4">
                      <a
                        href={`mailto:careers@ziontechgroup.com?subject=Application for ${job.title}`}
                        className="cyber-button px-6 py-3 text-center"
                      >
                        Apply Now
                      </a>
                      <a
                        href="/contact"
                        className="border-2 border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg text-center hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="cyber-card p-8 text-center">
              <h3 className="text-xl font-bold text-white mb-4">No positions found</h3>
              <p className="text-gray-300 mb-6">
                We don't have any open positions in this category right now, but we're always looking for great talent.
              </p>
              <a
                href="/contact"
                className="cyber-button px-6 py-3"
              >
                Get In Touch
              </a>
            </div>
          )}
        </section>

        {/* Culture Section */}
        <section className="cyber-card p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4 neon-text">
            Our Culture
          </h2>
          <p className="text-gray-300 mb-6 max-w-3xl mx-auto">
            At Zion Tech Group, we foster an inclusive, innovative, and collaborative culture where every team member 
            can thrive and make a meaningful impact. We believe in continuous learning, open communication, and 
            pushing the boundaries of what's possible with AI and technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/team"
              className="cyber-button px-8 py-3 text-lg font-semibold"
            >
              Meet Our Team
            </a>
            <a
              href="/contact"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              Contact Us
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CareersPage;