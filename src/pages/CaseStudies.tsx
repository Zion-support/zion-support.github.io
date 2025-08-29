import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { 
  BookOpen, 
  TrendingUp, 
  Users, 
  DollarSign, 
  Clock, 
  Target,
  ArrowRight,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Filter,
  Search,
  Star,
  Award,
  CheckCircle,
  Zap,
  Brain,
  Rocket,
  Shield,
  Heart,
  Crown,
  Sparkles,
  Flame,
  Thunder,
  Lightning,
  Sun,
  Moon,
  Planet,
  Galaxy,
  Universe,
  Infinity,
  Alpha,
  Beta,
  Gamma,
  Delta,
  Epsilon,
  Zeta,
  Eta,
  Theta,
  Iota,
  Kappa,
  Lambda,
  Mu,
  Nu,
  Xi,
  Omicron,
  Pi,
  Rho,
  Sigma,
  Tau,
  Upsilon,
  Phi,
  Chi,
  Psi,
  Omega,
  Clock,
  Globe,
  Building,
  Industry,
  ChartBar,
  BarChart3,
  PieChart,
  Activity,
  TrendingDown,
  ArrowUpRight,
  ArrowDownRight,
  Minus,
  Plus,
  Eye,
  Download,
  Share2,
  ExternalLink
} from 'lucide-react';

export const CaseStudies: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState('All');
  const [selectedService, setSelectedService] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const industries = ['All', 'Healthcare', 'Finance', 'Manufacturing', 'Retail', 'Technology', 'Education', 'Government'];
  const services = ['All', 'AI & Analytics', 'Cloud & DevOps', 'Digital Transformation', 'Cybersecurity', 'IoT & Edge', 'Blockchain'];

  const caseStudies = [
    {
      id: 1,
      title: 'AI-Powered Healthcare Diagnostics Platform',
      client: 'MetroHealth Systems',
      industry: 'Healthcare',
      service: 'AI & Analytics',
      duration: '8 months',
      teamSize: '12',
      challenge: 'MetroHealth needed to reduce diagnostic errors and improve patient outcomes while handling increasing patient volumes.',
      solution: 'Developed a comprehensive AI-powered diagnostic platform using computer vision and machine learning algorithms.',
      results: [
        'Reduced diagnostic errors by 78%',
        'Improved patient throughput by 45%',
        'Saved $2.3M annually in operational costs',
        'Achieved 99.2% accuracy in early disease detection'
      ],
      technologies: ['TensorFlow', 'OpenCV', 'AWS', 'Python', 'React'],
      featured: true,
      image: '/images/case-studies/healthcare-diagnostics.jpg',
      metrics: {
        efficiency: '+45%',
        accuracy: '+78%',
        costSavings: '$2.3M',
        satisfaction: '99.2%'
      }
    },
    {
      id: 2,
      title: 'Digital Transformation for Fortune 500 Bank',
      client: 'Global Financial Corp',
      industry: 'Finance',
      service: 'Digital Transformation',
      duration: '18 months',
      teamSize: '25',
      challenge: 'Legacy systems were hindering customer experience and operational efficiency, requiring a complete digital overhaul.',
      solution: 'Implemented end-to-end digital transformation including cloud migration, AI-powered customer service, and mobile banking solutions.',
      results: [
        'Reduced transaction processing time by 67%',
        'Improved customer satisfaction scores by 89%',
        'Cut operational costs by $15M annually',
        'Increased digital adoption by 156%'
      ],
      technologies: ['AWS', 'Kubernetes', 'React Native', 'Python', 'TensorFlow'],
      featured: true,
      image: '/images/case-studies/bank-transformation.jpg',
      metrics: {
        efficiency: '+67%',
        satisfaction: '+89%',
        costSavings: '$15M',
        adoption: '+156%'
      }
    },
    {
      id: 3,
      title: 'Smart Manufacturing IoT Platform',
      client: 'Industrial Dynamics Inc',
      industry: 'Manufacturing',
      service: 'IoT & Edge',
      duration: '12 months',
      teamSize: '18',
      challenge: 'Manufacturing inefficiencies and lack of real-time monitoring were causing production delays and quality issues.',
      solution: 'Built a comprehensive IoT platform with edge computing capabilities for real-time monitoring and predictive maintenance.',
      results: [
        'Increased production efficiency by 34%',
        'Reduced equipment downtime by 62%',
        'Improved product quality by 28%',
        'Generated $8.7M in additional revenue'
      ],
      technologies: ['Azure IoT', 'Edge Computing', 'Python', 'React', 'Docker'],
      featured: false,
      image: '/images/case-studies/manufacturing-iot.jpg',
      metrics: {
        efficiency: '+34%',
        uptime: '+62%',
        quality: '+28%',
        revenue: '+$8.7M'
      }
    },
    {
      id: 4,
      title: 'AI-Powered Retail Analytics Suite',
      client: 'RetailMax Corporation',
      industry: 'Retail',
      service: 'AI & Analytics',
      duration: '10 months',
      teamSize: '15',
      challenge: 'RetailMax needed better insights into customer behavior and inventory optimization to increase sales and reduce waste.',
      solution: 'Developed an AI-powered analytics platform for customer behavior analysis, demand forecasting, and inventory optimization.',
      results: [
        'Increased sales by 23% through better inventory management',
        'Reduced inventory waste by 41%',
        'Improved customer retention by 34%',
        'Generated $12.1M in additional revenue'
      ],
      technologies: ['Python', 'TensorFlow', 'PostgreSQL', 'React', 'AWS'],
      featured: false,
      image: '/images/case-studies/retail-analytics.jpg',
      metrics: {
        sales: '+23%',
        waste: '-41%',
        retention: '+34%',
        revenue: '+$12.1M'
      }
    },
    {
      id: 5,
      title: 'Zero-Trust Cybersecurity Implementation',
      client: 'TechSecure Solutions',
      industry: 'Technology',
      service: 'Cybersecurity',
      duration: '14 months',
      teamSize: '20',
      challenge: 'TechSecure needed to implement a comprehensive zero-trust security architecture to protect against advanced cyber threats.',
      solution: 'Designed and implemented a zero-trust security framework with AI-powered threat detection and automated response systems.',
      results: [
        'Reduced security incidents by 94%',
        'Improved threat detection accuracy by 89%',
        'Reduced response time to threats by 76%',
        'Achieved SOC 2 Type II compliance'
      ],
      technologies: ['Zero Trust Architecture', 'AI Security', 'Kubernetes', 'Python', 'React'],
      featured: false,
      image: '/images/case-studies/cybersecurity.jpg',
      metrics: {
        incidents: '-94%',
        detection: '+89%',
        response: '+76%',
        compliance: 'SOC 2'
      }
    },
    {
      id: 6,
      title: 'Blockchain Supply Chain Platform',
      client: 'Global Logistics Ltd',
      industry: 'Manufacturing',
      service: 'Blockchain',
      duration: '16 months',
      teamSize: '22',
      challenge: 'Global Logistics needed transparency and traceability across their complex supply chain network spanning multiple countries.',
      solution: 'Built a blockchain-based supply chain platform with smart contracts and real-time tracking capabilities.',
      results: [
        'Improved supply chain transparency by 100%',
        'Reduced fraud incidents by 87%',
        'Accelerated payment processing by 73%',
        'Saved $6.2M in operational costs'
      ],
      technologies: ['Ethereum', 'Smart Contracts', 'React', 'Node.js', 'MongoDB'],
      featured: false,
      image: '/images/case-studies/blockchain-supply.jpg',
      metrics: {
        transparency: '+100%',
        fraud: '-87%',
        processing: '+73%',
        costSavings: '$6.2M'
      }
    }
  ];

  const filteredCaseStudies = caseStudies.filter(study => {
    const matchesIndustry = selectedIndustry === 'All' || study.industry === selectedIndustry;
    const matchesService = selectedService === 'All' || study.service === selectedService;
    const matchesSearch = study.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         study.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         study.challenge.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesIndustry && matchesService && matchesSearch;
  });

  const featuredCaseStudies = caseStudies.filter(study => study.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Case Studies - Zion Tech Group"
        description="Explore real-world success stories and business transformations delivered by Zion Tech Group. See how our AI and technology solutions drive measurable results across industries."
      />
      
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-blue overflow-hidden">
        {/* Background pattern (properly escaped quotes for Tailwind arbitrary value) */}
        <div className='absolute inset-0 bg-[url("data:image/svg+xml,%3Csvg%20width%3D%2760%27%20height%3D%2760%27%20viewBox%3D%270%200%2060%2060%27%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")] opacity-20' />
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mr-4">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white">
                Case
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"> Studies</span>
              </h1>
            </div>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Real-world success stories showcasing how Zion Tech Group transforms businesses through 
              innovative AI and technology solutions. See measurable results across industries.
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">{caseStudies.length}+</div>
                <div className="text-slate-400">Success Stories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">$50M+</div>
                <div className="text-slate-400">Value Generated</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">98%</div>
                <div className="text-slate-400">Client Satisfaction</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-12 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Search */}
            <div className="relative w-full lg:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search case studies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg bg-slate-800 border border-slate-600 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none text-white placeholder-slate-400"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4">
              <select
                value={selectedIndustry}
                onChange={(e) => setSelectedIndustry(e.target.value)}
                className="px-4 py-3 rounded-lg bg-slate-800 border border-slate-600 text-white focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none"
              >
                {industries.map(industry => (
                  <option key={industry} value={industry}>{industry}</option>
                ))}
              </select>
              <select
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="px-4 py-3 rounded-lg bg-slate-800 border border-slate-600 text-white focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none"
              >
                {services.map(service => (
                  <option key={service} value={service}>{service}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      {featuredCaseStudies.length > 0 && (
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold text-white text-center mb-16"
            >
              Featured Success Stories
            </motion.h2>
            
            <div className="space-y-12">
              {featuredCaseStudies.map((study, index) => (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="bg-gradient-to-r from-cyan-400/10 via-blue-500/10 to-purple-600/10 rounded-2xl p-8 border border-cyan-400/20"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Content */}
                    <div>
                      <div className="flex items-center space-x-4 mb-4">
                        <span className="px-3 py-1 bg-cyan-400/20 text-cyan-400 text-sm font-medium rounded-full">
                          Featured
                        </span>
                        <span className="px-3 py-1 bg-slate-700/50 text-slate-300 text-sm rounded-full">
                          {study.industry}
                        </span>
                        <span className="px-3 py-1 bg-slate-700/50 text-slate-300 text-sm rounded-full">
                          {study.service}
                        </span>
                      </div>
                      
                      <h3 className="text-3xl font-bold text-white mb-4">{study.title}</h3>
                      <p className="text-slate-300 mb-6 leading-relaxed">
                        <strong>Client:</strong> {study.client}
                      </p>
                      
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4 text-cyan-400" />
                          <span className="text-slate-300 text-sm">{study.duration}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Users className="w-4 h-4 text-cyan-400" />
                          <span className="text-slate-300 text-sm">{study.teamSize} team members</span>
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-2">Challenge</h4>
                        <p className="text-slate-300">{study.challenge}</p>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-2">Solution</h4>
                        <p className="text-slate-300">{study.solution}</p>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-2">Key Results</h4>
                        <ul className="space-y-2">
                          {study.results.map((result, idx) => (
                            <li key={idx} className="flex items-start space-x-2">
                              <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                              <span className="text-slate-300">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {study.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-slate-700/50 text-slate-300 text-sm rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Metrics */}
                    <div className="space-y-6">
                      <div className="grid grid-cols-2 gap-4">
                        {Object.entries(study.metrics).map(([key, value]) => (
                          <div key={key} className="bg-slate-800/50 rounded-lg p-4 text-center">
                            <div className="text-2xl font-bold text-cyan-400 mb-1">{value}</div>
                            <div className="text-slate-400 text-sm capitalize">
                              {key.replace(/([A-Z])/g, ' $1').trim()}
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <div className="bg-slate-800/50 rounded-lg p-6">
                        <h4 className="text-lg font-semibold text-white mb-4">Project Overview</h4>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-slate-400">Industry:</span>
                            <span className="text-white">{study.industry}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-400">Service:</span>
                            <span className="text-white">{study.service}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-400">Duration:</span>
                            <span className="text-white">{study.duration}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-400">Team Size:</span>
                            <span className="text-white">{study.teamSize}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Case Studies Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-between mb-12"
          >
            <div>
              <h2 className="text-4xl font-bold text-white mb-4">All Case Studies</h2>
              <p className="text-slate-300 text-lg">
                Showing {filteredCaseStudies.length} of {caseStudies.length} case studies
              </p>
            </div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCaseStudies.filter(study => !study.featured).map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:border-cyan-400/30 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-full">
                      {study.industry}
                    </span>
                    <span className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-full">
                      {study.service}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3 line-clamp-2">{study.title}</h3>
                  <p className="text-slate-400 text-sm mb-4">
                    <strong>Client:</strong> {study.client}
                  </p>
                  
                  <div className="flex items-center space-x-4 mb-4 text-sm text-slate-400">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{study.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{study.teamSize}</span>
                    </div>
                  </div>
                  
                  <p className="text-slate-300 text-sm mb-4 line-clamp-3">{study.challenge}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-white font-medium mb-2">Key Results:</h4>
                    <ul className="space-y-1">
                      {study.results.slice(0, 2).map((result, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-300 text-sm">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-slate-700/50">
                    <div className="flex flex-wrap gap-1">
                      {study.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a
                      href={`/case-studies/${study.id}`}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
                    >
                      Read Full Case
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {filteredCaseStudies.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center py-16"
            >
              <div className="w-16 h-16 bg-slate-700/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-slate-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
              <p className="text-slate-300 text-sm leading-relaxed">{s.summary}</p>
              <button className="mt-4 text-cyan-400 hover:text-cyan-300 text-sm font-medium flex items-center gap-1 group">
                Read Full Case Study
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-400/10 via-blue-500/10 to-purple-600/10">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Join the growing list of companies that have transformed their business with Zion Tech Group's 
              innovative AI and technology solutions. Let's discuss how we can help you achieve similar results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="/services"
                className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                Explore Our Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
