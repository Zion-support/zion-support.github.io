import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  Building, 
  Search,
  Filter,
  ArrowRight,
  Download,
  ExternalLink,
  Calendar,
  Clock,
  Star,
  Award,
  Rocket,
  Brain,
  Shield,
  Code,
  Zap,
  Lightbulb,
  Target,
  Globe,
  CheckCircle,
  Play,
  Pause,
  Stop,
  FileText,
  Video,
  BookOpen,
  ChevronDown,
  ChevronRight,
  Plus,
  Minus
} from 'lucide-react';

const CaseStudies: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const industries = [
    { id: 'all', name: 'All Industries', count: 25, icon: Building },
    { id: 'healthcare', name: 'Healthcare', count: 8, icon: Shield },
    { id: 'finance', name: 'Financial Services', count: 6, icon: TrendingUp },
    { id: 'manufacturing', name: 'Manufacturing', count: 5, icon: Code },
    { id: 'retail', name: 'Retail & E-commerce', count: 4, icon: Users },
    { id: 'government', name: 'Government', count: 2, icon: Building }
  ];

  const caseStudies = [
    {
      id: 1,
      title: 'AI-Powered Healthcare Diagnosis: 40% Improvement in Patient Outcomes',
      description: 'How we helped a major healthcare system implement AI-powered diagnostic tools that improved patient outcomes by 40% and reduced diagnostic time by 60%.',
      industry: 'healthcare',
      client: 'Major Healthcare System',
      duration: '6 months',
      teamSize: '15',
      results: [
        '40% improvement in patient outcomes',
        '60% reduction in diagnostic time',
        '30% cost savings in diagnostic procedures',
        '99.8% accuracy rate in AI predictions'
      ],
      technologies: ['AI/ML', 'Computer Vision', 'Healthcare APIs', 'Cloud Infrastructure'],
      image: '/case-studies/healthcare-ai-diagnosis.jpg',
      featured: true,
      readTime: '8 min read',
      downloads: 3240,
      rating: 4.9
    },
    {
      id: 2,
      title: 'Quantum Computing in Financial Trading: 1000x Performance Boost',
      description: 'Revolutionary quantum computing implementation for a leading financial institution, achieving unprecedented performance improvements in algorithmic trading.',
      industry: 'finance',
      client: 'Global Investment Bank',
      duration: '8 months',
      teamSize: '20',
      results: [
        '1000x performance improvement',
        '99.99% uptime in trading systems',
        '$50M+ additional revenue generated',
        'Real-time market analysis capabilities'
      ],
      technologies: ['Quantum Computing', 'AI Algorithms', 'High-Frequency Trading', 'Blockchain'],
      image: '/case-studies/quantum-financial-trading.jpg',
      featured: true,
      readTime: '10 min read',
      downloads: 2890,
      rating: 4.8
    },
    {
      id: 3,
      title: 'Smart Manufacturing: IoT-Driven Production Optimization',
      description: 'Complete IoT implementation for a manufacturing company, resulting in 25% increase in production efficiency and 35% reduction in operational costs.',
      industry: 'manufacturing',
      client: 'Fortune 500 Manufacturer',
      duration: '12 months',
      teamSize: '18',
      results: [
        '25% increase in production efficiency',
        '35% reduction in operational costs',
        'Predictive maintenance with 95% accuracy',
        'Real-time production monitoring'
      ],
      technologies: ['IoT', 'Edge Computing', 'AI Analytics', 'Cloud Platform'],
      image: '/case-studies/smart-manufacturing.jpg',
      featured: false,
      readTime: '7 min read',
      downloads: 2150,
      rating: 4.7
    },
    {
      id: 4,
      title: 'E-commerce AI Personalization: 300% Revenue Increase',
      description: 'AI-powered personalization engine that transformed customer experience and drove significant revenue growth for a major e-commerce platform.',
      industry: 'retail',
      client: 'Leading E-commerce Platform',
      duration: '4 months',
      teamSize: '12',
      results: [
        '300% increase in revenue',
        '45% improvement in customer engagement',
        'Personalized recommendations with 92% accuracy',
        'Real-time customer behavior analysis'
      ],
      technologies: ['Machine Learning', 'Recommendation Engine', 'Big Data', 'Real-time Analytics'],
      image: '/case-studies/ecommerce-ai-personalization.jpg',
      featured: false,
      readTime: '6 min read',
      downloads: 1980,
      rating: 4.8
    },
    {
      id: 5,
      title: 'Government Cybersecurity: Zero Trust Architecture Implementation',
      description: 'Comprehensive cybersecurity transformation for a government agency, implementing zero-trust architecture and advanced threat detection.',
      industry: 'government',
      client: 'Federal Government Agency',
      duration: '18 months',
      teamSize: '25',
      results: [
        '99.99% threat detection rate',
        'Zero security breaches post-implementation',
        'Compliance with all federal security standards',
        'Real-time threat intelligence and response'
      ],
      technologies: ['Zero Trust Security', 'AI Threat Detection', 'Blockchain', 'Advanced Encryption'],
      image: '/case-studies/government-cybersecurity.jpg',
      featured: false,
      readTime: '9 min read',
      downloads: 1670,
      rating: 4.9
    },
    {
      id: 6,
      title: 'Supply Chain Blockchain: End-to-End Transparency',
      description: 'Blockchain-based supply chain solution that provided complete transparency and traceability for a global logistics company.',
      industry: 'manufacturing',
      client: 'Global Logistics Company',
      duration: '10 months',
      teamSize: '16',
      results: [
        '100% supply chain transparency',
        '50% reduction in fraud incidents',
        'Real-time tracking and monitoring',
        'Automated compliance reporting'
      ],
      technologies: ['Blockchain', 'Smart Contracts', 'IoT Sensors', 'Cloud Platform'],
      image: '/case-studies/supply-chain-blockchain.jpg',
      featured: false,
      readTime: '7 min read',
      downloads: 1890,
      rating: 4.7
    },
    {
      id: 7,
      title: 'AI Content Generation: 500% Content Production Increase',
      description: 'AI-powered content generation platform that revolutionized content creation for a media company, dramatically increasing production capacity.',
      industry: 'retail',
      client: 'Digital Media Company',
      duration: '5 months',
      teamSize: '14',
      results: [
        '500% increase in content production',
        '80% reduction in content creation time',
        'AI-generated content with 95% quality score',
        'Multi-language content generation'
      ],
      technologies: ['Natural Language Processing', 'Content Generation AI', 'Multilingual Support', 'Quality Assurance'],
      image: '/case-studies/ai-content-generation.jpg',
      featured: false,
      readTime: '6 min read',
      downloads: 2340,
      rating: 4.8
    },
    {
      id: 8,
      title: 'Healthcare IoT: Remote Patient Monitoring System',
      description: 'Comprehensive IoT solution for remote patient monitoring, enabling healthcare providers to track patient health in real-time.',
      industry: 'healthcare',
      client: 'Healthcare Network',
      duration: '9 months',
      teamSize: '22',
      results: [
        'Real-time patient health monitoring',
        '40% reduction in hospital readmissions',
        '24/7 patient care capabilities',
        'Predictive health analytics'
      ],
      technologies: ['IoT Devices', 'Health Analytics', 'Cloud Platform', 'Mobile Applications'],
      image: '/case-studies/healthcare-iot-monitoring.jpg',
      featured: false,
      readTime: '8 min read',
      downloads: 2010,
      rating: 4.7
    }
  ];

  const filteredCaseStudies = caseStudies.filter(study => {
    const matchesIndustry = selectedIndustry === 'all' || study.industry === selectedIndustry;
    const matchesSearch = study.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         study.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         study.technologies.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesIndustry && matchesSearch;
  });

  const featuredCaseStudies = caseStudies.filter(study => study.featured);
  const regularCaseStudies = filteredCaseStudies.filter(study => !study.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-gradient mb-6">
              Success
              <span className="block text-zion-cyan">Stories</span>
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto mb-8">
              Discover how Zion Tech Group has transformed businesses across industries. 
              Real results, measurable impact, and proven success stories.
            </p>
            <div className="flex items-center justify-center space-x-8 text-zion-slate-light">
              <div className="flex items-center">
                <BarChart3 className="w-6 h-6 mr-2 text-zion-cyan" />
                <span>25+ Case Studies</span>
              </div>
              <div className="flex items-center">
                <TrendingUp className="w-6 h-6 mr-2 text-zion-cyan" />
                <span>Proven Results</span>
              </div>
              <div className="flex items-center">
                <Users className="w-6 h-6 mr-2 text-zion-cyan" />
                <span>Global Clients</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zion-slate-light" />
              <input
                type="text"
                placeholder="Search case studies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-xl text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan/40 focus:ring-2 focus:ring-zion-cyan/20"
              />
            </div>

            {/* Industry Filter */}
            <div className="flex flex-wrap gap-2">
              {industries.map((industry) => (
                <button
                  key={industry.id}
                  onClick={() => setSelectedIndustry(industry.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 ${
                    selectedIndustry === industry.id
                      ? 'bg-zion-cyan text-white shadow-lg shadow-zion-cyan/20'
                      : 'bg-zion-slate-dark/50 text-zion-slate-light hover:bg-zion-cyan/10 hover:text-zion-cyan border border-zion-cyan/20'
                  }`}
                >
                  <industry.icon className="w-4 h-4" />
                  <span>{industry.name}</span>
                  <span className="text-xs opacity-75">({industry.count})</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      {featuredCaseStudies.length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-4">Featured Success Stories</h2>
              <p className="text-zion-slate-light">Our most impactful and transformative implementations</p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredCaseStudies.map((study, index) => (
                <motion.article
                  key={study.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl overflow-hidden hover:border-zion-cyan/40 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20">
                    {/* Case Study Image Placeholder */}
                    <div className="h-48 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 flex items-center justify-center relative">
                      <BarChart3 className="w-16 h-16 text-zion-cyan" />
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 bg-zion-cyan text-white text-xs rounded-full font-semibold">
                          Featured
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center space-x-4 text-sm text-zion-slate-light mb-4">
                        <span className="flex items-center">
                          <Building className="w-4 h-4 mr-2" />
                          {study.industry}
                        </span>
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-2" />
                          {study.duration}
                        </span>
                        <span className="flex items-center">
                          <Users className="w-4 h-4 mr-2" />
                          {study.teamSize} team members
                        </span>
                      </div>

                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors duration-300">
                        {study.title}
                      </h3>
                      
                      <p className="text-zion-slate-light mb-4 leading-relaxed">
                        {study.description}
                      </p>

                      <div className="mb-4">
                        <h4 className="text-zion-cyan font-semibold mb-3">Key Results:</h4>
                        <ul className="space-y-2">
                          {study.results.map((result, idx) => (
                            <li key={idx} className="flex items-center text-zion-slate-light text-sm">
                              <CheckCircle className="w-4 h-4 text-zion-green mr-3 flex-shrink-0" />
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {study.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-zion-cyan/10 text-zion-cyan text-xs rounded-full border border-zion-cyan/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="text-sm">
                          <p className="text-zion-cyan font-semibold">{study.client}</p>
                          <p className="text-zion-slate-light">{study.readTime}</p>
                        </div>
                        <button className="flex items-center px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 group">
                          Read Full Case Study
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular Case Studies Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">All Case Studies</h2>
            <p className="text-zion-slate-light">Browse our complete portfolio of successful implementations</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularCaseStudies.map((study, index) => (
              <motion.article
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl overflow-hidden hover:border-zion-cyan/40 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20 h-full">
                  {/* Case Study Image Placeholder */}
                  <div className="h-40 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 flex items-center justify-center">
                    <BarChart3 className="w-12 h-12 text-zion-cyan" />
                  </div>
                  
                  <div className="p-6 flex-1">
                    <div className="flex items-center space-x-4 text-sm text-zion-slate-light mb-3">
                      <span className="flex items-center">
                        <Building className="w-4 h-4 mr-2" />
                        {study.industry}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {study.duration}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors duration-300 line-clamp-2">
                      {study.title}
                    </h3>
                    
                    <p className="text-zion-slate-light mb-4 leading-relaxed line-clamp-3">
                      {study.description}
                    </p>

                    <div className="mb-4">
                      <h4 className="text-zion-cyan font-semibold mb-2 text-sm">Key Results:</h4>
                      <ul className="space-y-1">
                        {study.results.slice(0, 2).map((result, idx) => (
                          <li key={idx} className="flex items-center text-zion-slate-light text-xs">
                            <CheckCircle className="w-3 h-3 text-zion-green mr-2 flex-shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {study.technologies.slice(0, 2).map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-zion-cyan/10 text-zion-cyan text-xs rounded-full border border-zion-cyan/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between mt-auto">
                      <div className="text-sm">
                        <p className="text-zion-cyan font-semibold">{study.client}</p>
                      </div>
                      <button className="flex items-center text-zion-cyan hover:text-zion-cyan/80 transition-colors duration-300 group">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Join the ranks of successful companies that have transformed their business with Zion Tech Group. 
              Let's discuss how we can help you achieve similar results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Start Your Project
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-semibold rounded-xl hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                Schedule a Consultation
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
