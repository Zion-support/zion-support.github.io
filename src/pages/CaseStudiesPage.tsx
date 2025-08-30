import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  Search, 
  Filter, 
  Building, 
  TrendingUp, 
  Users,
  ArrowRight,
  ExternalLink,
  Star,
  CheckCircle,
  Clock,
  DollarSign,
  Target,
  Lightbulb,
  Rocket,
  Brain,
  Shield,
  Cloud,
  Zap,
  Award,
  Globe,
  BarChart3,
  PieChart,
  LineChart,
  Activity,
  Bookmark,
  User,
  ShoppingBag,
  GraduationCap
} from 'lucide-react';

export function CaseStudiesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const [selectedService, setSelectedService] = useState('all');

  const industries = [
    { id: 'all', name: 'All Industries', icon: Building },
    { id: 'healthcare', name: 'Healthcare', icon: Users },
    { id: 'finance', name: 'Financial Services', icon: DollarSign },
    { id: 'manufacturing', name: 'Manufacturing', icon: Building },
    { id: 'retail', name: 'Retail & E-commerce', icon: ShoppingBag },
    { id: 'energy', name: 'Energy & Utilities', icon: Zap },
    { id: 'education', name: 'Education', icon: GraduationCap },
    { id: 'government', name: 'Government', icon: Shield }
  ];

  const services = [
    { id: 'all', name: 'All Services', icon: Rocket },
    { id: 'ai', name: 'AI & Machine Learning', icon: Brain },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield },
    { id: 'cloud', name: 'Cloud & Infrastructure', icon: Cloud },
    { id: 'data', name: 'Data Analytics', icon: BarChart3 },
    { id: 'digital', name: 'Digital Transformation', icon: TrendingUp }
  ];

  const caseStudies = [
    {
      id: 1,
      title: 'AI-Powered Drug Discovery Platform',
      client: 'PharmaTech Solutions',
      industry: 'healthcare',
      service: 'ai',
      duration: '18 months',
      teamSize: '25',
      budget: '$2.5M',
      challenge: 'PharmaTech needed to accelerate drug discovery by 10x while reducing costs by 60%. Traditional methods were too slow and expensive for competitive drug development.',
      solution: 'Developed a comprehensive AI platform combining machine learning, quantum computing simulations, and predictive analytics to identify promising drug candidates.',
      implementation: [
        'Built custom ML models for molecular property prediction',
        'Integrated quantum computing algorithms for complex simulations',
        'Created automated workflow for candidate screening',
        'Implemented real-time collaboration tools for research teams'
      ],
      results: [
        'Drug discovery speed increased by 12x',
        'Cost reduction of 65% in research and development',
        'Successfully identified 3 new drug candidates in 6 months',
        'ROI of 340% within the first year'
      ],
      technologies: ['TensorFlow', 'PyTorch', 'Quantum Computing', 'AWS', 'Docker'],
      metrics: {
        efficiency: '12x improvement',
        costReduction: '65%',
        timeToMarket: '6 months',
        accuracy: '94.7%'
      },
      testimonial: {
        quote: 'Zion Tech Group transformed our drug discovery process. We\'re now leading the industry in innovation and speed.',
        author: 'Dr. Sarah Johnson',
        position: 'Chief Scientific Officer',
        company: 'PharmaTech Solutions'
      },
      featured: true
    },
    {
      id: 2,
      title: 'Zero-Trust Cybersecurity Framework',
      client: 'GlobalBank International',
      industry: 'finance',
      service: 'cybersecurity',
      duration: '12 months',
      teamSize: '18',
      budget: '$1.8M',
      challenge: 'GlobalBank faced increasing cyber threats and needed a comprehensive security framework that could protect against sophisticated attacks while maintaining compliance.',
      solution: 'Implemented a zero-trust security architecture with AI-powered threat detection, continuous monitoring, and automated response systems.',
      implementation: [
        'Designed zero-trust network architecture',
        'Deployed AI-powered threat detection systems',
        'Implemented continuous compliance monitoring',
        'Created automated incident response workflows'
      ],
      results: [
        '99.9% threat detection accuracy',
        'Zero successful cyber attacks in 18 months',
        'Compliance score improved to 98.5%',
        'Security operations efficiency increased by 300%'
      ],
      technologies: ['Zero-Trust Architecture', 'AI Security', 'SIEM', 'EDR', 'Cloud Security'],
      metrics: {
        threatDetection: '99.9%',
        complianceScore: '98.5%',
        responseTime: '2 minutes',
        costSavings: '40%'
      },
      testimonial: {
        quote: 'The security transformation has given us confidence to expand our digital services while maintaining the highest security standards.',
        author: 'Michael Chen',
        position: 'Chief Information Security Officer',
        company: 'GlobalBank International'
      },
      featured: false
    },
    {
      id: 3,
      title: 'Cloud-Native Manufacturing Platform',
      client: 'SmartManufacturing Co.',
      industry: 'manufacturing',
      service: 'cloud',
      duration: '14 months',
      teamSize: '22',
      budget: '$2.1M',
      challenge: 'SmartManufacturing needed to modernize their legacy systems and create a scalable platform for Industry 4.0 operations.',
      solution: 'Built a cloud-native platform with IoT integration, real-time analytics, and predictive maintenance capabilities.',
      implementation: [
        'Migrated legacy systems to cloud infrastructure',
        'Integrated IoT sensors and devices',
        'Built real-time analytics dashboard',
        'Implemented predictive maintenance algorithms'
      ],
      results: [
        'Production efficiency increased by 35%',
        'Maintenance costs reduced by 45%',
        'System downtime decreased by 80%',
        'Energy consumption optimized by 25%'
      ],
      technologies: ['AWS', 'Kubernetes', 'IoT', 'Real-time Analytics', 'Machine Learning'],
      metrics: {
        efficiency: '35% improvement',
        costReduction: '45%',
        uptime: '99.8%',
        energySavings: '25%'
      },
      testimonial: {
        quote: 'Zion Tech Group helped us leap into the future of manufacturing. Our operations are now more efficient than ever.',
        author: 'Robert Martinez',
        position: 'Chief Technology Officer',
        company: 'SmartManufacturing Co.'
      },
      featured: false
    },
    {
      id: 4,
      title: 'Predictive Analytics for Retail',
      client: 'NextGen Retail',
      industry: 'retail',
      service: 'data',
      duration: '10 months',
      teamSize: '15',
      budget: '$1.2M',
      challenge: 'NextGen Retail needed to optimize inventory management and improve customer experience through data-driven insights.',
      solution: 'Developed a comprehensive analytics platform with predictive modeling for inventory, customer behavior analysis, and demand forecasting.',
      implementation: [
        'Built data warehouse and analytics pipeline',
        'Developed predictive inventory models',
        'Created customer segmentation algorithms',
        'Implemented real-time dashboard for store managers'
      ],
      results: [
        'Inventory turnover improved by 40%',
        'Customer satisfaction increased by 28%',
        'Revenue growth of 22%',
        'Operational costs reduced by 18%'
      ],
      technologies: ['Python', 'Apache Spark', 'Tableau', 'Machine Learning', 'Big Data'],
      metrics: {
        inventoryTurnover: '40% improvement',
        customerSatisfaction: '28% increase',
        revenueGrowth: '22%',
        costReduction: '18%'
      },
      testimonial: {
        quote: 'The analytics platform has revolutionized how we understand our customers and manage our business.',
        author: 'Lisa Thompson',
        position: 'Chief Data Officer',
        company: 'NextGen Retail'
      },
      featured: false
    },
    {
      id: 5,
      title: 'Digital Transformation for Energy Grid',
      client: 'PowerGrid Solutions',
      industry: 'energy',
      service: 'digital',
      duration: '24 months',
      teamSize: '30',
      budget: '$3.5M',
      challenge: 'PowerGrid needed to modernize their aging infrastructure and implement smart grid technologies for better energy distribution.',
      solution: 'Comprehensive digital transformation including smart grid implementation, IoT integration, and AI-powered energy optimization.',
      implementation: [
        'Deployed smart grid infrastructure',
        'Integrated renewable energy sources',
        'Built AI-powered load balancing system',
        'Created real-time monitoring and control center'
      ],
      results: [
        'Grid efficiency improved by 42%',
        'Renewable energy integration increased by 60%',
        'Outage response time reduced by 75%',
        'Energy losses decreased by 30%'
      ],
      technologies: ['Smart Grid', 'IoT', 'AI/ML', 'Cloud Computing', 'Real-time Systems'],
      metrics: {
        efficiency: '42% improvement',
        renewableIntegration: '60%',
        responseTime: '75% reduction',
        energyLosses: '30% reduction'
      },
      testimonial: {
        quote: 'This transformation has positioned us as a leader in smart grid technology and sustainable energy.',
        author: 'David Park',
        position: 'Chief Executive Officer',
        company: 'PowerGrid Solutions'
      },
      featured: false
    },
    {
      id: 6,
      title: 'AI-Powered Educational Platform',
      client: 'EduTech Innovations',
      industry: 'education',
      service: 'ai',
      duration: '16 months',
      teamSize: '20',
      budget: '$1.9M',
      challenge: 'EduTech needed to create a personalized learning platform that could adapt to individual student needs and improve learning outcomes.',
      solution: 'Developed an AI-powered adaptive learning platform with personalized curriculum, progress tracking, and intelligent tutoring systems.',
      implementation: [
        'Built adaptive learning algorithms',
        'Created personalized content delivery system',
        'Implemented progress tracking and analytics',
        'Developed intelligent tutoring capabilities'
      ],
      results: [
        'Student performance improved by 38%',
        'Learning engagement increased by 45%',
        'Teacher efficiency improved by 30%',
        'Platform adoption reached 95%'
      ],
      technologies: ['Machine Learning', 'Natural Language Processing', 'Cloud Computing', 'React', 'Python'],
      metrics: {
        performance: '38% improvement',
        engagement: '45% increase',
        efficiency: '30% improvement',
        adoption: '95%'
      },
      testimonial: {
        quote: 'The AI platform has transformed how we deliver education. Every student now gets a personalized learning experience.',
        author: 'Dr. Emily Watson',
        position: 'Chief Academic Officer',
        company: 'EduTech Innovations'
      },
      featured: false
    }
  ];

  const filteredCaseStudies = caseStudies.filter(study => {
    const matchesSearch = study.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         study.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         study.challenge.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesIndustry = selectedIndustry === 'all' || study.industry === selectedIndustry;
    const matchesService = selectedService === 'all' || study.service === selectedService;
    return matchesSearch && matchesIndustry && matchesService;
  });

  const featuredCaseStudy = caseStudies.find(study => study.featured);
  const regularCaseStudies = filteredCaseStudies.filter(study => !study.featured);

  return (
    <>
      <Helmet>
        <title>Case Studies - Zion Tech Group | Success Stories and Client Results</title>
        <meta name="description" content="Explore Zion Tech Group's successful case studies across industries. See how we've transformed businesses with AI, cybersecurity, and digital solutions." />
        <meta name="keywords" content="case studies, success stories, client results, AI implementation, cybersecurity projects, digital transformation" />
        <link rel="canonical" href="https://ziontechgroup.com/case-studies" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-futuristic-enhanced">
        <div className="container-responsive text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Success
              <span className="block bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Stories
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover how Zion Tech Group has transformed businesses across industries 
              with innovative AI, cybersecurity, and digital solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container-responsive">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-2xl border border-gray-700/50"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Building className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">150+</div>
              <div className="text-gray-300">Successful Projects</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-2xl border border-gray-700/50"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">98%</div>
              <div className="text-gray-300">Client Satisfaction</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-2xl border border-gray-700/50"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">$500M+</div>
              <div className="text-gray-300">Value Delivered</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-2xl border border-gray-700/50"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">25+</div>
              <div className="text-gray-300">Industries Served</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-16">
        <div className="container-responsive">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-6 mb-8">
              {/* Search */}
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search case studies..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-colors"
                />
              </div>

              {/* Industry Filter */}
              <div className="flex gap-2">
                {industries.map((industry) => (
                  <button
                    key={industry.id}
                    onClick={() => setSelectedIndustry(industry.id)}
                    className={`px-4 py-3 rounded-lg border transition-all duration-300 flex items-center gap-2 ${
                      selectedIndustry === industry.id
                        ? 'bg-cyan-500 border-cyan-500 text-white'
                        : 'bg-gray-900/50 border-gray-700 text-gray-300 hover:border-cyan-500'
                    }`}
                  >
                    <industry.icon className="w-4 h-4" />
                    {industry.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Service Filter */}
            <div className="flex gap-2 mb-8">
              {services.map((service) => (
                <button
                  key={service.id}
                  onClick={() => setSelectedService(service.id)}
                  className={`px-4 py-3 rounded-lg border transition-all duration-300 flex items-center gap-2 ${
                    selectedService === service.id
                      ? 'bg-purple-500 border-purple-500 text-white'
                      : 'bg-gray-900/50 border-gray-700 text-gray-300 hover:border-purple-500'
                  }`}
                >
                  <service.icon className="w-4 h-4" />
                  {service.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      {featuredCaseStudy && (
        <section className="py-16">
          <div className="container-responsive">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-4">Featured Success Story</h2>
              <p className="text-gray-300">Our most impactful project and transformation</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-6xl mx-auto"
            >
              <div className="p-8 bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-2xl border border-cyan-500/50">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full border border-cyan-500/30">
                        {industries.find(i => i.id === featuredCaseStudy.industry)?.name}
                      </span>
                      <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full border border-purple-500/30">
                        {services.find(s => s.id === featuredCaseStudy.service)?.name}
                      </span>
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4">{featuredCaseStudy.title}</h3>
                    <p className="text-gray-300 mb-6 text-lg">{featuredCaseStudy.challenge}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="text-center p-4 bg-gray-800/30 rounded-lg">
                        <div className="text-2xl font-bold text-cyan-400">{featuredCaseStudy.duration}</div>
                        <div className="text-gray-400 text-sm">Duration</div>
                      </div>
                      <div className="text-center p-4 bg-gray-800/30 rounded-lg">
                        <div className="text-2xl font-bold text-purple-400">{featuredCaseStudy.budget}</div>
                        <div className="text-gray-400 text-sm">Budget</div>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">Key Results:</h4>
                      <div className="space-y-2">
                        {featuredCaseStudy.results.slice(0, 3).map((result, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-300 text-sm">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300">
                      Read Full Case Study
                    </button>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-4">Client Testimonial</h4>
                      <div className="p-6 bg-gray-800/30 rounded-lg border border-gray-700/50">
                        <p className="text-gray-300 mb-4 italic">"{featuredCaseStudy.testimonial.quote}"</p>
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center">
                            <User className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <div className="font-semibold text-white">{featuredCaseStudy.testimonial.author}</div>
                            <div className="text-gray-400 text-sm">{featuredCaseStudy.testimonial.position}</div>
                            <div className="text-cyan-400 text-sm">{featuredCaseStudy.testimonial.company}</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold text-white mb-4">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {featuredCaseStudy.technologies.map((tech, idx) => (
                          <span key={idx} className="px-3 py-1 bg-gray-800/50 text-gray-300 text-sm rounded border border-gray-700">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Case Studies Grid */}
      <section className="py-16">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">All Case Studies</h2>
            <p className="text-gray-300">Explore our complete portfolio of successful projects</p>
          </motion.div>

          {regularCaseStudies.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {regularCaseStudies.map((study, index) => (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
                >
                  {/* Case Study Header */}
                  <div className="mb-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full border border-cyan-500/30 text-sm">
                        {industries.find(i => i.id === study.industry)?.name}
                      </span>
                      <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full border border-purple-500/30 text-sm">
                        {services.find(s => s.id === study.service)?.name}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">{study.title}</h3>
                    <p className="text-gray-300 text-sm mb-4">{study.client}</p>
                  </div>

                  {/* Challenge & Solution */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Challenge:</h4>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">{study.challenge}</p>
                    
                    <h4 className="text-lg font-semibold text-white mb-3">Solution:</h4>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">{study.solution}</p>
                  </div>

                  {/* Project Details */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center p-3 bg-gray-800/30 rounded-lg">
                      <div className="text-lg font-bold text-cyan-400">{study.duration}</div>
                      <div className="text-gray-400 text-xs">Duration</div>
                    </div>
                    <div className="text-center p-3 bg-gray-800/30 rounded-lg">
                      <div className="text-lg font-bold text-purple-400">{study.teamSize}</div>
                      <div className="text-gray-400 text-xs">Team Size</div>
                    </div>
                    <div className="text-center p-3 bg-gray-800/30 rounded-lg">
                      <div className="text-lg font-bold text-green-400">{study.budget}</div>
                      <div className="text-gray-400 text-xs">Budget</div>
                    </div>
                  </div>

                  {/* Key Results */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Results:</h4>
                    <div className="space-y-2">
                      {study.results.slice(0, 2).map((result, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-300 text-sm">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.slice(0, 4).map((tech, idx) => (
                        <span key={idx} className="px-2 py-1 bg-gray-800/50 text-gray-300 text-xs rounded border border-gray-700">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <button className="flex-1 px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg text-sm font-medium hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300">
                      View Details
                    </button>
                    <button className="px-4 py-2 border border-gray-600 text-gray-400 rounded-lg hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300">
                      <Bookmark className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-gray-400 text-lg mb-4">No case studies found matching your criteria</div>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedIndustry('all');
                  setSelectedService('all');
                }}
                className="px-6 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black/20 backdrop-blur-sm">
        <div className="container-responsive text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the ranks of successful companies that have transformed their business 
              with Zion Tech Group's innovative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-semibold text-lg flex items-center gap-2 hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold text-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Schedule Consultation
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}