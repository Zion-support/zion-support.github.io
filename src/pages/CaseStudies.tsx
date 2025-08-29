import React, { useState } from 'react';
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
import { Link } from 'react-router-dom';

export default function CaseStudies() {
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
        'Enhanced diagnostic accuracy to 96.5%'
      ],
      technologies: ['TensorFlow', 'OpenCV', 'Python', 'AWS', 'React'],
      image: '/images/case-studies/healthcare-diagnostics.jpg',
      rating: 5.0,
      reviewCount: 127
    },
    {
      id: 2,
      title: 'Financial Fraud Detection System',
      client: 'GlobalBank International',
      industry: 'Finance',
      service: 'AI & Analytics',
      duration: '6 months',
      teamSize: '8',
      challenge: 'GlobalBank faced increasing sophisticated fraud attempts and needed real-time detection capabilities.',
      solution: 'Implemented an AI-powered fraud detection system with real-time monitoring and machine learning algorithms.',
      results: [
        'Detected 94% of fraud attempts in real-time',
        'Reduced false positives by 67%',
        'Saved $15M in prevented fraud losses',
        'Improved customer trust and satisfaction'
      ],
      technologies: ['Python', 'Scikit-learn', 'Apache Kafka', 'MongoDB', 'Vue.js'],
      image: '/images/case-studies/fraud-detection.jpg',
      rating: 4.9,
      reviewCount: 89
    },
    {
      id: 3,
      title: 'Smart Manufacturing IoT Platform',
      client: 'TechManufacturing Corp',
      industry: 'Manufacturing',
      service: 'IoT & Edge',
      duration: '12 months',
      teamSize: '15',
      challenge: 'TechManufacturing needed to optimize production processes and reduce downtime through predictive maintenance.',
      solution: 'Built a comprehensive IoT platform with edge computing capabilities for real-time monitoring and analytics.',
      results: [
        'Reduced unplanned downtime by 73%',
        'Increased production efficiency by 28%',
        'Saved $8.7M in maintenance costs',
        'Improved product quality by 34%'
      ],
      technologies: ['Node.js', 'TensorFlow Lite', 'MQTT', 'InfluxDB', 'React Native'],
      image: '/images/case-studies/manufacturing-iot.jpg',
      rating: 4.8,
      reviewCount: 156
    }
  ];

  const filteredCaseStudies = caseStudies.filter(study => {
    const matchesIndustry = selectedIndustry === 'All' || study.industry === selectedIndustry;
    const matchesService = selectedService === 'All' || study.service === selectedService;
    const matchesSearch = study.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         study.client.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesIndustry && matchesService && matchesSearch;
  });

  return (
    <>
      <SEO
        title="Case Studies | Zion Tech Group"
        description="Explore real-world success stories and case studies from our AI, cloud, and technology solutions. See how we've transformed businesses across industries."
        keywords="case studies, success stories, AI solutions, cloud services, digital transformation, Zion Tech Group"
        canonical="https://ziontechgroup.com/case-studies"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Success Stories
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover how our cutting-edge technology solutions have transformed businesses 
              across industries and delivered measurable results.
            </p>
          </div>
        </section>

        {/* Filters Section */}
        <section className="px-4 sm:px-6 lg:px-8 mb-12">
          <div className="max-w-7xl mx-auto">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Industry Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Industry</label>
                  <select
                    value={selectedIndustry}
                    onChange={(e) => setSelectedIndustry(e.target.value)}
                    className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    {industries.map(industry => (
                      <option key={industry} value={industry}>{industry}</option>
                    ))}
                  </select>
                </div>

                {/* Service Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Service</label>
                  <select
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    {services.map(service => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                {/* Search */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Search</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search case studies..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full bg-slate-700/50 border border-slate-600 rounded-lg pl-10 pr-4 py-2 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="px-4 sm:px-6 lg:px-8 pb-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredCaseStudies.map((study) => (
                <div key={study.id} className="bg-slate-800/60 backdrop-blur border border-slate-700/50 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-300">
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                        <span className="text-sm text-gray-400">{study.industry}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-300">{study.rating}</span>
                        <span className="text-sm text-gray-500">({study.reviewCount})</span>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-3">{study.title}</h3>
                    <p className="text-lg text-purple-400 mb-4">{study.client}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-300">{study.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-300">{study.teamSize} team members</span>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-2">Challenge</h4>
                      <p className="text-gray-300 text-sm">{study.challenge}</p>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-2">Solution</h4>
                      <p className="text-gray-300 text-sm">{study.solution}</p>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-2">Results</h4>
                      <ul className="space-y-2">
                        {study.results.map((result, index) => (
                          <li key={index} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                            <span className="text-sm text-gray-300">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-2">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {study.technologies.map((tech, index) => (
                          <span key={index} className="px-3 py-1 bg-slate-700/50 text-gray-300 text-sm rounded-full border border-slate-600">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <Link
                        to={`/case-studies/${study.id}`}
                        className="inline-flex items-center text-purple-400 hover:text-purple-300 font-semibold group"
                      >
                        Read Full Case Study
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
                      
                      <div className="flex space-x-2">
                        <button className="p-2 text-gray-400 hover:text-white transition-colors">
                          <Download className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-white transition-colors">
                          <Share2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredCaseStudies.length === 0 && (
              <div className="text-center py-20">
                <BookOpen className="w-16 h-16 text-gray-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-300 mb-2">No case studies found</h3>
                <p className="text-gray-500">Try adjusting your filters or search terms.</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 sm:px-6 lg:px-8 pb-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Create Your Success Story?
              </h2>
              <p className="text-xl text-purple-100 mb-8">
                Let's discuss how our technology solutions can transform your business 
                and deliver measurable results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-white text-purple-600 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started
                </Link>
                <Link
                  to="/services"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300"
                >
                  Explore Services
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
