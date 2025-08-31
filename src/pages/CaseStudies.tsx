import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Building, 
  TrendingUp, 
  Users, 
  Clock, 
  Target, 
  Filter,
  Search,
  ArrowRight,
  CheckCircle,
  Star,
  Globe,
  Shield,
  Cloud,
  Brain,
  Zap
} from 'lucide-react';

const CaseStudies: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState('All');
  const [selectedService, setSelectedService] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const industries = [
    'All',
    'Healthcare',
    'Finance',
    'Manufacturing',
    'Retail',
    'Technology',
    'Education',
    'Government',
    'Energy'
  ];

  const services = [
    'All',
    'AI & Machine Learning',
    'Cybersecurity',
    'Cloud & DevOps',
    'Digital Transformation',
    'Data Analytics',
    'IoT Solutions',
    'Blockchain',
    'Quantum Computing'
  ];

  const caseStudies = [
    {
      id: 1,
      title: "AI-Powered Patient Care Optimization",
      client: "MetroHealth Systems",
      industry: "Healthcare",
      service: "AI & Machine Learning",
      duration: "6 months",
      teamSize: "8 engineers",
      challenge: "MetroHealth needed to optimize patient care workflows and reduce wait times while maintaining quality standards.",
      solution: "Implemented an AI-powered patient flow management system using machine learning algorithms to predict patient needs and optimize resource allocation.",
      results: [
        "40% reduction in patient wait times",
        "25% improvement in resource utilization",
        "30% increase in patient satisfaction scores",
        "$2.5M annual cost savings"
      ],
      technologies: ["Python", "TensorFlow", "AWS", "React", "PostgreSQL"],
      image: "/api/placeholder/400/300"
    },
    {
      id: 2,
      title: "Zero-Trust Security Architecture Implementation",
      client: "Global Financial Corp",
      industry: "Finance",
      service: "Cybersecurity",
      duration: "8 months",
      teamSize: "12 security specialists",
      challenge: "Global Financial Corp required a comprehensive security overhaul to protect against sophisticated cyber threats and meet regulatory compliance.",
      solution: "Designed and implemented a zero-trust security architecture with advanced threat detection, identity management, and continuous monitoring systems.",
      results: [
        "99.9% threat detection accuracy",
        "Zero security breaches in 18 months",
        "100% compliance with regulatory requirements",
        "60% reduction in security incident response time"
      ],
      technologies: ["CrowdStrike", "Okta", "Splunk", "AWS Security", "Terraform"],
      image: "/api/placeholder/400/300"
    },
    {
      id: 3,
      title: "Cloud-Native Digital Transformation",
      client: "TechManufacture Inc",
      industry: "Manufacturing",
      service: "Cloud & DevOps",
      duration: "12 months",
      teamSize: "15 engineers",
      challenge: "TechManufacture needed to modernize their legacy systems and implement cloud-native solutions for better scalability and efficiency.",
      solution: "Migrated legacy applications to AWS cloud infrastructure, implemented microservices architecture, and established CI/CD pipelines for continuous deployment.",
      results: [
        "300% improvement in system scalability",
        "80% reduction in deployment time",
        "50% decrease in infrastructure costs",
        "99.9% uptime achieved"
      ],
      technologies: ["AWS", "Kubernetes", "Docker", "Jenkins", "Node.js"],
      image: "/api/placeholder/400/300"
    },
    {
      id: 4,
      title: "Predictive Analytics for Supply Chain",
      client: "RetailChain Solutions",
      industry: "Retail",
      service: "Data Analytics",
      duration: "4 months",
      teamSize: "6 data scientists",
      challenge: "RetailChain needed to optimize inventory management and predict demand patterns to reduce waste and improve profitability.",
      solution: "Developed a predictive analytics platform using machine learning to forecast demand, optimize inventory levels, and identify supply chain inefficiencies.",
      results: [
        "35% reduction in inventory waste",
        "20% improvement in stock availability",
        "15% increase in profit margins",
        "90% accuracy in demand forecasting"
      ],
      technologies: ["Python", "Scikit-learn", "Apache Spark", "Tableau", "Snowflake"],
      image: "/api/placeholder/400/300"
    },
    {
      id: 5,
      title: "IoT-Enabled Smart City Infrastructure",
      client: "City of Innovation",
      industry: "Government",
      service: "IoT Solutions",
      duration: "18 months",
      teamSize: "20 engineers",
      challenge: "The city needed to implement smart infrastructure solutions to improve public services, reduce energy consumption, and enhance citizen experience.",
      solution: "Deployed IoT sensors and smart devices across city infrastructure, implemented real-time monitoring systems, and created citizen engagement platforms.",
      results: [
        "25% reduction in energy consumption",
        "40% improvement in traffic flow",
        "60% faster emergency response times",
        "85% citizen satisfaction increase"
      ],
      technologies: ["IoT Sensors", "AWS IoT", "React Native", "Python", "MongoDB"],
      image: "/api/placeholder/400/300"
    },
    {
      id: 6,
      title: "Blockchain-Based Supply Chain Transparency",
      client: "EcoSupply Chain",
      industry: "Manufacturing",
      service: "Blockchain",
      duration: "10 months",
      teamSize: "10 developers",
      challenge: "EcoSupply needed to implement blockchain technology to ensure supply chain transparency and traceability for sustainable products.",
      solution: "Built a blockchain platform for end-to-end supply chain tracking, smart contracts for automated compliance, and transparent product lifecycle management.",
      results: [
        "100% supply chain traceability",
        "50% reduction in compliance costs",
        "30% improvement in supplier relationships",
        "Enhanced brand trust and customer loyalty"
      ],
      technologies: ["Ethereum", "Solidity", "Web3.js", "React", "IPFS"],
      image: "/api/placeholder/400/300"
    }
  ];

  const filteredCaseStudies = caseStudies.filter(study => {
    const matchesIndustry = selectedIndustry === 'All' || study.industry === selectedIndustry;
    const matchesService = selectedService === 'All' || study.service === selectedService;
    const matchesSearch = searchTerm === '' || 
      study.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      study.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
      study.challenge.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesIndustry && matchesService && matchesSearch;
  });

  const getServiceIcon = (service: string) => {
    switch (service) {
      case 'AI & Machine Learning': return Brain;
      case 'Cybersecurity': return Shield;
      case 'Cloud & DevOps': return Cloud;
      case 'Digital Transformation': return TrendingUp;
      case 'Data Analytics': return Target;
      case 'IoT Solutions': return Zap;
      case 'Blockchain': return Globe;
      case 'Quantum Computing': return Star;
      default: return Building;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Success
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {" "}Stories
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
          >
            Real-world results from our technology solutions. See how we've helped organizations transform their operations and achieve measurable success.
          </motion.p>
          
          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto relative"
          >
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search case studies..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-cyan-500/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
            />
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Filters */}
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-cyan-400" />
              <span className="text-gray-300">Filter by:</span>
            </div>
            
            {/* Industry Filter */}
            <div className="flex flex-wrap gap-2">
              <span className="text-gray-400 text-sm">Industry:</span>
              {industries.map((industry) => (
                <button
                  key={industry}
                  onClick={() => setSelectedIndustry(industry)}
                  className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                    selectedIndustry === industry
                      ? "bg-cyan-500 text-white"
                      : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white"
                  }`}
                >
                  {industry}
                </button>
              ))}
            </div>

            {/* Service Filter */}
            <div className="flex flex-wrap gap-2">
              <span className="text-gray-400 text-sm">Service:</span>
              {services.map((service) => (
                <button
                  key={service}
                  onClick={() => setSelectedService(service)}
                  className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                    selectedService === service
                      ? "bg-cyan-500 text-white"
                      : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white"
                  }`}
                >
                  {service}
                </button>
              ))}
            </div>
          </div>

          {/* Case Studies Grid */}
          <div className="grid gap-8">
            {filteredCaseStudies.map((study, index) => {
              const ServiceIcon = getServiceIcon(study.service);
              return (
                <motion.article
                  key={study.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden hover:border-cyan-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="flex flex-col lg:flex-row">
                    <div className="lg:w-1/3">
                      <div className="h-48 lg:h-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
                        <div className="text-center">
                          <ServiceIcon className="w-16 h-16 text-cyan-400 mx-auto mb-2" />
                          <span className="text-cyan-400 text-sm font-medium">{study.service}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="lg:w-2/3 p-6">
                      <div className="flex items-center space-x-4 mb-3">
                        <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-medium rounded-full">
                          {study.industry}
                        </span>
                        <span className="px-3 py-1 bg-gray-700/50 text-gray-300 text-xs font-medium rounded-full">
                          {study.service}
                        </span>
                      </div>
                      
                      <h2 className="text-2xl font-bold text-white mb-2 hover:text-cyan-400 transition-colors cursor-pointer">
                        {study.title}
                      </h2>
                      
                      <p className="text-gray-400 text-sm mb-4">
                        <strong className="text-white">{study.client}</strong> • {study.duration} • {study.teamSize}
                      </p>
                      
                      <div className="space-y-4 mb-6">
                        <div>
                          <h4 className="text-white font-semibold mb-2">Challenge</h4>
                          <p className="text-gray-300 text-sm">{study.challenge}</p>
                        </div>
                        
                        <div>
                          <h4 className="text-white font-semibold mb-2">Solution</h4>
                          <p className="text-gray-300 text-sm">{study.solution}</p>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-white font-semibold mb-3 flex items-center">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                            Results
                          </h4>
                          <ul className="space-y-2">
                            {study.results.map((result, idx) => (
                              <li key={idx} className="flex items-start space-x-2 text-gray-300 text-sm">
                                <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                                <span>{result}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="text-white font-semibold mb-3 flex items-center">
                            <Zap className="w-4 h-4 text-yellow-400 mr-2" />
                            Technologies
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {study.technologies.map((tech, idx) => (
                              <span
                                key={idx}
                                className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-6 pt-4 border-t border-gray-700">
                        <button className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors">
                          <span>Read Full Case Study</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>

          {filteredCaseStudies.length === 0 && (
            <div className="text-center py-12">
              <Building className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-400 text-lg">No case studies found matching your criteria.</p>
              <p className="text-gray-500 mt-2">Try adjusting your filters or search terms.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-cyan-500/10 to-blue-500/10">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Let's discuss how our technology solutions can help your organization achieve similar results and drive innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                Start Your Project
              </button>
              <button className="px-8 py-4 bg-gray-800/50 text-white rounded-lg font-medium hover:bg-gray-700/50 transition-all duration-300 border border-gray-600">
                Schedule Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
