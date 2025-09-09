import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  ArrowRight, 
  Building, 
  Users, 
  TrendingUp,
  Award,
  Clock,
  MapPin,
  Target,
  CheckCircle,
  Star
} from 'lucide-react';

export default function CaseStudies() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const [selectedService, setSelectedService] = useState('all');

  const industries = [
    { id: 'all', name: 'All Industries', count: 12 },
    { id: 'healthcare', name: 'Healthcare', count: 3 },
    { id: 'finance', name: 'Financial Services', count: 3 },
    { id: 'manufacturing', name: 'Manufacturing', count: 2 },
    { id: 'retail', name: 'Retail & E-commerce', count: 2 },
    { id: 'technology', name: 'Technology', count: 2 }
  ];

  const services = [
    { id: 'all', name: 'All Services', count: 12 },
    { id: 'ai', name: 'AI Solutions', count: 5 },
    { id: 'cybersecurity', name: 'Cybersecurity', count: 3 },
    { id: 'cloud', name: 'Cloud & DevOps', count: 2 },
    { id: 'transformation', name: 'Digital Transformation', count: 2 }
  ];

  const caseStudies = [
    {
      id: 1,
      title: "AI-Powered Patient Care Optimization",
      client: "MedTech Solutions Inc.",
      industry: "healthcare",
      service: "ai",
      description: "Implemented an AI-driven patient care system that reduced wait times by 40% and improved patient outcomes by 25%.",
      challenge: "Long patient wait times and inefficient resource allocation in emergency departments.",
      solution: "Developed a machine learning algorithm that predicts patient flow and optimizes staff scheduling and resource allocation.",
      results: [
        "40% reduction in patient wait times",
        "25% improvement in patient outcomes",
        "30% increase in staff efficiency",
        "$2.5M annual cost savings"
      ],
      duration: "6 months",
      teamSize: "8 engineers",
      technologies: ["Python", "TensorFlow", "AWS", "React"],
      featured: true
    },
    {
      id: 2,
      title: "Zero-Trust Security Implementation",
      client: "Global Financial Corp",
      industry: "finance",
      service: "cybersecurity",
      description: "Implemented comprehensive zero-trust security architecture protecting $50B in assets across 15 countries.",
      challenge: "Legacy security systems vulnerable to modern cyber threats and compliance requirements.",
      solution: "Designed and deployed zero-trust architecture with multi-factor authentication, micro-segmentation, and continuous monitoring.",
      results: [
        "99.9% threat detection rate",
        "Zero security breaches in 18 months",
        "100% compliance with regulatory requirements",
        "50% reduction in security incidents"
      ],
      duration: "12 months",
      teamSize: "12 security specialists",
      technologies: ["Cisco", "Palo Alto", "Okta", "Splunk"],
      featured: true
    },
    {
      id: 3,
      title: "Cloud Migration & DevOps Transformation",
      client: "TechStart Industries",
      industry: "technology",
      service: "cloud",
      description: "Migrated legacy systems to cloud-native architecture, reducing infrastructure costs by 60% and deployment time by 80%.",
      challenge: "Monolithic legacy systems causing slow deployments and high infrastructure costs.",
      solution: "Implemented containerized microservices architecture with automated CI/CD pipelines and cloud-native infrastructure.",
      results: [
        "60% reduction in infrastructure costs",
        "80% faster deployment times",
        "99.9% system uptime",
        "50% improvement in development velocity"
      ],
      duration: "8 months",
      teamSize: "10 engineers",
      technologies: ["Kubernetes", "Docker", "AWS", "Jenkins"],
      featured: false
    },
    {
      id: 4,
      title: "Digital Supply Chain Optimization",
      client: "Manufacturing Plus",
      industry: "manufacturing",
      service: "transformation",
      description: "Digitized supply chain operations resulting in 35% faster delivery times and 20% cost reduction.",
      challenge: "Manual supply chain processes causing delays and inefficiencies.",
      solution: "Implemented IoT sensors, blockchain tracking, and AI-powered demand forecasting across the supply chain.",
      results: [
        "35% faster delivery times",
        "20% reduction in supply chain costs",
        "Real-time visibility across all operations",
        "Improved supplier relationships"
      ],
      duration: "10 months",
      teamSize: "15 specialists",
      technologies: ["IoT", "Blockchain", "AI/ML", "Cloud"],
      featured: false
    },
    {
      id: 5,
      title: "AI-Powered Fraud Detection",
      client: "SecureBank Ltd",
      industry: "finance",
      service: "ai",
      description: "Deployed machine learning models that detect fraudulent transactions with 95% accuracy, saving millions annually.",
      challenge: "Traditional rule-based fraud detection missing sophisticated fraud patterns.",
      solution: "Developed deep learning models trained on historical transaction data with real-time processing capabilities.",
      results: [
        "95% fraud detection accuracy",
        "80% reduction in false positives",
        "$15M annual fraud prevention savings",
        "Real-time transaction monitoring"
      ],
      duration: "7 months",
      teamSize: "6 data scientists",
      technologies: ["Python", "TensorFlow", "Apache Kafka", "Redis"],
      featured: false
    },
    {
      id: 6,
      title: "E-commerce Platform Modernization",
      client: "RetailTech Solutions",
      industry: "retail",
      service: "transformation",
      description: "Modernized legacy e-commerce platform, increasing conversion rates by 45% and reducing cart abandonment by 30%.",
      challenge: "Outdated e-commerce platform with poor user experience and low conversion rates.",
      solution: "Built modern, responsive e-commerce platform with AI-powered recommendations and seamless checkout experience.",
      results: [
        "45% increase in conversion rates",
        "30% reduction in cart abandonment",
        "60% faster page load times",
        "Improved mobile experience"
      ],
      duration: "9 months",
      teamSize: "12 developers",
      technologies: ["React", "Node.js", "MongoDB", "AWS"],
      featured: false
    }
  ];

  const filteredCaseStudies = caseStudies.filter(study => {
    const matchesSearch = study.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         study.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         study.client.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesIndustry = selectedIndustry === 'all' || study.industry === selectedIndustry;
    const matchesService = selectedService === 'all' || study.service === selectedService;
    return matchesSearch && matchesIndustry && matchesService;
  });

  const getIndustryIcon = (industry: string) => {
    const icons: { [key: string]: string } = {
      healthcare: '🏥',
      finance: '💰',
      manufacturing: '🏭',
      retail: '🛍️',
      technology: '💻'
    };
    return icons[industry] || '🏢';
  };

  const getServiceIcon = (service: string) => {
    const icons: { [key: string]: string } = {
      ai: '🤖',
      cybersecurity: '🔒',
      cloud: '☁️',
      transformation: '🚀'
    };
    return icons[service] || '⚙️';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="pt-32 pb-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Case Studies
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Real results from real clients
          </p>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Discover how we've helped organizations across industries transform their operations, 
            improve efficiency, and achieve measurable business outcomes through innovative technology solutions.
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-black/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search case studies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>

            {/* Filters */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Filter className="h-5 w-5 text-gray-400" />
                <select
                  value={selectedIndustry}
                  onChange={(e) => setSelectedIndustry(e.target.value)}
                  className="px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  {industries.map((industry) => (
                    <option key={industry.id} value={industry.id}>
                      {industry.name} ({industry.count})
                    </option>
                  ))}
                </select>
              </div>
              
              <select
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              >
                {services.map((service) => (
                  <option key={service.id} value={service.id}>
                    {service.name} ({service.count})
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      {filteredCaseStudies.filter(study => study.featured).length > 0 && (
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-2xl font-bold text-white mb-8">Featured Success Stories</h2>
            {filteredCaseStudies.filter(study => study.featured).map((study) => (
              <div key={study.id} className="bg-slate-800/50 border border-slate-700/50 rounded-xl overflow-hidden mb-8">
                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="p-8">
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm font-medium rounded-full">
                        Featured
                      </span>
                      <span className="text-gray-400 text-sm">{study.industry.toUpperCase()}</span>
                      <span className="text-gray-400 text-sm">{study.service.toUpperCase()}</span>
                    </div>
                    
                    <h3 className="text-3xl font-bold text-white mb-4">{study.title}</h3>
                    <p className="text-gray-300 text-lg mb-6">{study.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center space-x-2 text-sm text-gray-400">
                        <Building className="h-4 w-4" />
                        <span>{study.client}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-400">
                        <Clock className="h-4 w-4" />
                        <span>{study.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-400">
                        <Users className="h-4 w-4" />
                        <span>{study.teamSize}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-400">
                        <Target className="h-4 w-4" />
                        <span>{study.technologies.length} technologies</span>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-medium text-cyan-400 mb-2">Key Results:</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {study.results.slice(0, 4).map((result, index) => (
                          <div key={index} className="flex items-center space-x-2 text-sm text-gray-300">
                            <CheckCircle className="h-4 w-4 text-green-400" />
                            <span>{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <Link
                      to={`/case-studies/${study.id}`}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-200 font-medium"
                    >
                      Read Full Case Study
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                  
                  <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center p-8">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-3xl">{getIndustryIcon(study.industry)}</span>
                      </div>
                      <p className="text-gray-300 font-medium">{study.client}</p>
                      <p className="text-gray-400 text-sm">{study.industry} Industry</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* All Case Studies Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-white mb-8">All Case Studies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCaseStudies.filter(study => !study.featured).map((study) => (
              <article
                key={study.id}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl">{getIndustryIcon(study.industry)}</span>
                      <span className="text-2xl">{getServiceIcon(study.service)}</span>
                    </div>
                    <span className="px-3 py-1 bg-slate-700/50 text-gray-300 text-xs rounded-full">
                      {study.duration}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">{study.title}</h3>
                  <p className="text-gray-300 mb-4 line-clamp-3">{study.description}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center space-x-2">
                      <Building className="h-4 w-4" />
                      <span>{study.client}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4" />
                      <span>{study.teamSize}</span>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-cyan-400 mb-2">Key Results:</h4>
                    <ul className="space-y-1">
                      {study.results.slice(0, 2).map((result, index) => (
                        <li key={index} className="text-sm text-gray-400 flex items-center">
                          <CheckCircle className="h-3 w-3 text-green-400 mr-2" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link
                    to={`/case-studies/${study.id}`}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-200 text-sm font-medium"
                  >
                    Read More
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black/30">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our solutions can transform your business and deliver measurable results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
            >
              Get Started
            </Link>
            <Link
              to="/services"
              className="px-8 py-3 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-200"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
