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
  ExternalLink,
  Lightbulb
} from 'lucide-react';

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
      technologies: ['TensorFlow', 'OpenCV', 'React', 'Node.js', 'PostgreSQL'],
      metrics: {
        roi: '340%',
        timeToMarket: '8 months',
        userAdoption: '94%'
      }
    },
    {
      id: 2,
      title: 'Quantum AI Cybersecurity Platform',
      client: 'Global Financial Corp',
      industry: 'Finance',
      service: 'Cybersecurity',
      duration: '12 months',
      teamSize: '18',
      challenge: 'Global Financial Corp faced sophisticated cyber threats requiring next-generation security solutions.',
      solution: 'Implemented a quantum AI cybersecurity platform with advanced threat detection and automated response.',
      results: [
        'Prevented 99.9% of cyber attacks',
        'Reduced incident response time by 85%',
        'Achieved SOC2 Type II compliance',
        'Protected $50B+ in assets'
      ],
      technologies: ['Quantum Computing', 'AI/ML', 'Zero Trust Architecture', 'Blockchain'],
      metrics: {
        roi: '420%',
        timeToMarket: '12 months',
        userAdoption: '98%'
      }
    },
    {
      id: 3,
      title: 'Edge Computing IoT Platform',
      client: 'Smart Manufacturing Inc',
      industry: 'Manufacturing',
      service: 'IoT & Edge',
      duration: '10 months',
      teamSize: '15',
      challenge: 'Smart Manufacturing Inc needed real-time monitoring and predictive maintenance for their production lines.',
      solution: 'Built an edge computing IoT platform with real-time analytics and predictive maintenance capabilities.',
      results: [
        'Reduced downtime by 67%',
        'Improved production efficiency by 34%',
        'Saved $1.8M in maintenance costs',
        'Enhanced equipment lifespan by 40%'
      ],
      technologies: ['Edge Computing', 'IoT Sensors', 'Machine Learning', 'Real-time Analytics'],
      metrics: {
        roi: '280%',
        timeToMarket: '10 months',
        userAdoption: '91%'
      }
    },
    {
      id: 4,
      title: 'Blockchain Supply Chain Solution',
      client: 'Global Logistics Ltd',
      industry: 'Retail',
      service: 'Blockchain',
      duration: '9 months',
      teamSize: '14',
      challenge: 'Global Logistics Ltd needed transparent and secure supply chain tracking across multiple countries.',
      solution: 'Developed a blockchain-based supply chain solution with smart contracts and real-time tracking.',
      results: [
        'Improved supply chain transparency by 95%',
        'Reduced fraud incidents by 89%',
        'Accelerated customs clearance by 60%',
        'Enhanced customer trust by 78%'
      ],
      technologies: ['Hyperledger Fabric', 'Smart Contracts', 'IoT Integration', 'Cloud Platform'],
      metrics: {
        roi: '310%',
        timeToMarket: '9 months',
        userAdoption: '87%'
      }
    },
    {
      id: 5,
      title: 'AI-Powered Customer Success Platform',
      client: 'TechStart Solutions',
      industry: 'Technology',
      service: 'AI & Analytics',
      duration: '6 months',
      teamSize: '10',
      challenge: 'TechStart Solutions needed to improve customer retention and reduce churn rates.',
      solution: 'Created an AI-powered customer success platform with predictive analytics and automated engagement.',
      results: [
        'Reduced customer churn by 45%',
        'Increased customer lifetime value by 67%',
        'Improved customer satisfaction scores by 34%',
        'Automated 80% of customer interactions'
      ],
      technologies: ['Machine Learning', 'Natural Language Processing', 'Predictive Analytics', 'Automation'],
      metrics: {
        roi: '380%',
        timeToMarket: '6 months',
        userAdoption: '96%'
      }
    },
    {
      id: 6,
      title: 'Cloud-Native DevOps Platform',
      client: 'Enterprise Software Corp',
      industry: 'Technology',
      service: 'Cloud & DevOps',
      duration: '11 months',
      teamSize: '16',
      challenge: 'Enterprise Software Corp needed to modernize their development and deployment processes.',
      solution: 'Built a cloud-native DevOps platform with automated CI/CD pipelines and infrastructure as code.',
      results: [
        'Reduced deployment time by 85%',
        'Improved code quality by 42%',
        'Eliminated 95% of deployment failures',
        'Increased developer productivity by 38%'
      ],
      technologies: ['Kubernetes', 'Docker', 'Terraform', 'Jenkins', 'AWS'],
      metrics: {
        roi: '290%',
        timeToMarket: '11 months',
        userAdoption: '93%'
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

  return (
    <>
      <SEO
        title="Case Studies | Zion Tech Group"
        description="Explore real-world success stories and transformative technology solutions that have delivered measurable results for our clients across industries."
        keywords="case studies, success stories, technology solutions, AI projects, digital transformation, Zion Tech Group"
        canonical="https://ziontechgroup.com/case-studies"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Success Stories
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover how our innovative technology solutions have transformed businesses and delivered measurable results across industries.
            </p>
            
            {/* Search and Filter Controls */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Search */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search case studies..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>
                
                {/* Industry Filter */}
                <div>
                  <select
                    value={selectedIndustry}
                    onChange={(e) => setSelectedIndustry(e.target.value)}
                    className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  >
                    {industries.map(industry => (
                      <option key={industry} value={industry}>{industry}</option>
                    ))}
                  </select>
                </div>
                
                {/* Service Filter */}
                <div>
                  <select
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  >
                    {services.map(service => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredCaseStudies.map((study) => (
                <div
                  key={study.id}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105"
                >
                  {/* Header */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full border border-cyan-500/30">
                          {study.industry}
                        </span>
                        <span className="px-3 py-1 bg-purple-500/20 text-purple-400 text-sm rounded-full border border-purple-500/30">
                          {study.service}
                        </span>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-green-400">{study.metrics.roi}</div>
                        <div className="text-sm text-gray-400">ROI</div>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-2">{study.title}</h3>
                    <p className="text-gray-300 mb-4">{study.client}</p>
                  </div>

                  {/* Challenge & Solution */}
                  <div className="mb-6">
                    <div className="mb-4">
                      <h4 className="text-lg font-semibold text-white mb-2 flex items-center">
                        <Target className="w-5 h-5 text-red-400 mr-2" />
                        Challenge
                      </h4>
                      <p className="text-gray-300 text-sm">{study.challenge}</p>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-lg font-semibold text-white mb-2 flex items-center">
                        <Lightbulb className="w-5 h-5 text-yellow-400 mr-2" />
                        Solution
                      </h4>
                      <p className="text-gray-300 text-sm">{study.solution}</p>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                      <TrendingUp className="w-5 h-5 text-green-400 mr-2" />
                      Results
                    </h4>
                    <ul className="space-y-2">
                      {study.results.map((result, index) => (
                        <li key={index} className="flex items-center text-gray-300 text-sm">
                          <CheckCircle className="text-green-400 w-4 h-4 mr-2 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies & Metrics */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h5 className="text-sm font-semibold text-gray-400 mb-2">Technologies</h5>
                      <div className="flex flex-wrap gap-1">
                        {study.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded border border-slate-600"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h5 className="text-sm font-semibold text-gray-400 mb-2">Metrics</h5>
                      <div className="space-y-1">
                        <div className="text-sm text-gray-300">
                          <span className="text-cyan-400">Time to Market:</span> {study.metrics.timeToMarket}
                        </div>
                        <div className="text-sm text-gray-300">
                          <span className="text-cyan-400">Adoption:</span> {study.metrics.userAdoption}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="flex items-center justify-between text-sm text-gray-400 border-t border-slate-700 pt-4">
                    <div className="flex items-center space-x-4">
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {study.duration}
                      </span>
                      <span className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {study.teamSize} team members
                      </span>
                    </div>
                    
                    <button className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center">
                      View Details <ArrowRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {filteredCaseStudies.length === 0 && (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-2">No case studies found</h3>
                <p className="text-gray-300">Try adjusting your search criteria or filters.</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our technology solutions can transform your business and deliver measurable results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
              </a>
              <a 
                href="/services"
                className="border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Explore Our Services
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
