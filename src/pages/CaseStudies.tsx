import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  DollarSign, 
  Clock, 
  Users, 
  ArrowRight,
  Filter,
  Search,
  Star,
  Award,
  Zap,
  Brain,
  Shield,
  Cloud,
  Server,
  BarChart3,
  Code,
  Network,
  Atom,
  Globe,
  Cpu,
  Lock,
  Database,
  Rocket,
  CheckCircle,
  Calendar,
  Building,
  Target,
  Lightbulb,
  Sparkles,
  Flame,
  Crown,
  Infinity,
  MessageCircle,
  ExternalLink,
  Play,
  Download,
  Share2,
  Eye,
  Heart,
  Tag,
  Filter as FilterIcon,
  ChevronDown,
  ChevronUp,
  Settings
} from 'lucide-react';
import { SEO } from '../components/SEO';

export default function CaseStudies() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const [selectedService, setSelectedService] = useState('all');
  const [selectedOutcome, setSelectedOutcome] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  const industries = [
    { id: 'all', name: 'All Industries', count: 24 },
    { id: 'healthcare', name: 'Healthcare', count: 6 },
    { id: 'finance', name: 'Financial Services', count: 5 },
    { id: 'manufacturing', name: 'Manufacturing', count: 4 },
    { id: 'retail', name: 'Retail & E-commerce', count: 3 },
    { id: 'technology', name: 'Technology', count: 3 },
    { id: 'government', name: 'Government', count: 2 },
    { id: 'education', name: 'Education', count: 1 }
  ];

  const services = [
    { id: 'all', name: 'All Services', count: 24 },
    { id: 'ai-ml', name: 'AI & Machine Learning', count: 8 },
    { id: 'cybersecurity', name: 'Cybersecurity', count: 5 },
    { id: 'cloud', name: 'Cloud & DevOps', count: 4 },
    { id: 'data-analytics', name: 'Data Analytics', count: 3 },
    { id: 'digital-transformation', name: 'Digital Transformation', count: 2 },
    { id: 'iot', name: 'IoT Solutions', count: 2 }
  ];

  const outcomes = [
    { id: 'all', name: 'All Outcomes', count: 24 },
    { id: 'cost-reduction', name: 'Cost Reduction', count: 8 },
    { id: 'efficiency', name: 'Efficiency Improvement', count: 7 },
    { id: 'security', name: 'Security Enhancement', count: 5 },
    { id: 'revenue', name: 'Revenue Growth', count: 4 }
  ];

  const caseStudies = [
    {
      id: 1,
      title: "AI-Powered Healthcare Diagnosis Platform",
      subtitle: "Revolutionizing patient care with machine learning",
      description: "A leading healthcare provider transformed their diagnostic capabilities by implementing our AI-powered platform, resulting in faster, more accurate diagnoses and improved patient outcomes.",
      longDescription: "This healthcare organization was struggling with long diagnosis times and inconsistent accuracy rates. Our AI-powered diagnostic platform integrated seamlessly with their existing systems, providing real-time analysis of medical images and patient data. The solution included advanced machine learning algorithms, secure data handling, and comprehensive training for medical staff.",
      industry: "healthcare",
      service: "ai-ml",
      outcome: "efficiency",
      client: "MetroHealth Medical Center",
      clientSize: "Large Enterprise",
      clientLocation: "United States",
      duration: "8 months",
      teamSize: 12,
      challenge: "Long diagnosis times, inconsistent accuracy, overwhelmed medical staff",
      solution: "AI-powered diagnostic platform with real-time analysis capabilities",
      results: [
        "85% reduction in diagnosis time",
        "92% improvement in diagnostic accuracy",
        "40% reduction in medical staff workload",
        "Improved patient satisfaction scores by 78%"
      ],
      metrics: {
        costSavings: "$2.3M annually",
        efficiencyGain: "85%",
        accuracyImprovement: "92%",
        timeReduction: "85%"
      },
      technologies: ["Machine Learning", "Computer Vision", "Cloud Computing", "HIPAA Compliance"],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=800&h=400",
      images: [
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=800&h=400",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=400",
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&h=400"
      ],
      featured: true,
      tags: ["Healthcare", "AI", "Diagnostics", "Machine Learning", "Patient Care"],
      testimonial: {
        quote: "The AI platform has transformed how we approach patient care. We're now able to provide faster, more accurate diagnoses while reducing the burden on our medical staff.",
        author: "Dr. Sarah Johnson",
        role: "Chief Medical Officer",
        company: "MetroHealth Medical Center"
      },
      publishedDate: "2025-01-15",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Quantum-Secure Financial Trading System",
      subtitle: "Protecting billions in assets with next-gen security",
      description: "A major financial institution implemented our quantum-resistant cybersecurity solution, protecting their high-frequency trading systems from emerging quantum threats.",
      longDescription: "This financial institution needed to future-proof their trading infrastructure against quantum computing threats. Our solution included quantum-resistant encryption algorithms, real-time threat monitoring, and comprehensive security training. The implementation was completed with zero downtime and maintained full compliance with financial regulations.",
      industry: "finance",
      service: "cybersecurity",
      outcome: "security",
      client: "Global Capital Markets",
      clientSize: "Large Enterprise",
      clientLocation: "United Kingdom",
      duration: "6 months",
      teamSize: 8,
      challenge: "Vulnerability to quantum computing attacks, regulatory compliance requirements",
      solution: "Quantum-resistant cybersecurity platform with real-time monitoring",
      results: [
        "100% protection against quantum computing threats",
        "Zero security breaches during implementation",
        "Full regulatory compliance achieved",
        "Enhanced customer confidence and trust"
      ],
      metrics: {
        securityImprovement: "100%",
        complianceScore: "100%",
        breachPrevention: "100%",
        customerTrust: "95%"
      },
      technologies: ["Quantum Cryptography", "AI Threat Detection", "Blockchain", "Real-time Monitoring"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=400",
      images: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=400",
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&h=400"
      ],
      featured: false,
      tags: ["Finance", "Cybersecurity", "Quantum Computing", "Trading", "Compliance"],
      testimonial: {
        quote: "The quantum security solution has given us peace of mind and a competitive advantage. Our clients trust us more knowing their assets are protected by cutting-edge technology.",
        author: "Michael Chen",
        role: "CTO",
        company: "Global Capital Markets"
      },
      publishedDate: "2025-01-10",
      readTime: "4 min read"
    },
    {
      id: 3,
      title: "Smart Manufacturing IoT Platform",
      subtitle: "Transforming production with real-time monitoring",
      description: "A manufacturing company achieved significant cost savings and efficiency improvements by implementing our IoT edge computing solution across their production facilities.",
      longDescription: "This manufacturing company was experiencing high operational costs and frequent equipment failures. Our IoT platform provided real-time monitoring of production equipment, predictive maintenance capabilities, and automated quality control. The solution was deployed across multiple facilities with minimal disruption to operations.",
      industry: "manufacturing",
      service: "iot",
      outcome: "cost-reduction",
      client: "Precision Manufacturing Co.",
      clientSize: "Medium Enterprise",
      clientLocation: "Germany",
      duration: "10 months",
      teamSize: 15,
      challenge: "High operational costs, equipment failures, quality control issues",
      solution: "IoT edge computing platform with predictive maintenance",
      results: [
        "30% reduction in operational costs",
        "60% decrease in equipment downtime",
        "25% improvement in product quality",
        "15% increase in production capacity"
      ],
      metrics: {
        costReduction: "30%",
        downtimeReduction: "60%",
        qualityImprovement: "25%",
        capacityIncrease: "15%"
      },
      technologies: ["IoT Sensors", "Edge Computing", "Machine Learning", "Cloud Analytics"],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&h=400",
      images: [
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&h=400",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=400"
      ],
      featured: false,
      tags: ["Manufacturing", "IoT", "Edge Computing", "Predictive Maintenance", "Quality Control"],
      testimonial: {
        quote: "The IoT platform has revolutionized our manufacturing process. We're now more efficient, have fewer breakdowns, and can produce higher quality products at a lower cost.",
        author: "Hans Mueller",
        role: "Operations Director",
        company: "Precision Manufacturing Co."
      },
      publishedDate: "2025-01-05",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "Cloud-Native E-commerce Platform",
      subtitle: "Scaling to handle millions of customers",
      description: "A retail company transformed their online presence with our cloud-native platform, achieving unprecedented scalability and performance improvements.",
      longDescription: "This retail company was struggling with website performance issues during peak shopping periods. Our cloud-native solution included microservices architecture, auto-scaling capabilities, and advanced caching strategies. The platform was designed to handle traffic spikes and provide a seamless shopping experience.",
      industry: "retail",
      service: "cloud",
      outcome: "efficiency",
      client: "TechStyle Retail",
      clientSize: "Medium Enterprise",
      clientLocation: "United States",
      duration: "7 months",
      teamSize: 10,
      challenge: "Website crashes during peak periods, slow loading times, poor user experience",
      solution: "Cloud-native platform with microservices architecture",
      results: [
        "99.9% uptime during peak periods",
        "70% improvement in page load times",
        "300% increase in concurrent users",
        "45% improvement in conversion rates"
      ],
      metrics: {
        uptime: "99.9%",
        performanceImprovement: "70%",
        scalabilityIncrease: "300%",
        conversionImprovement: "45%"
      },
      technologies: ["Kubernetes", "Docker", "AWS", "Microservices", "Redis"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&h=400",
      images: [
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&h=400",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=400"
      ],
      featured: false,
      tags: ["Retail", "E-commerce", "Cloud Computing", "Microservices", "Scalability"],
      testimonial: {
        quote: "Our new platform handles Black Friday traffic like it's a regular day. The performance improvements have directly translated to increased sales and customer satisfaction.",
        author: "Jennifer Rodriguez",
        role: "VP of Technology",
        company: "TechStyle Retail"
      },
      publishedDate: "2024-12-20",
      readTime: "5 min read"
    },
    {
      id: 5,
      title: "AI-Powered Customer Service Automation",
      subtitle: "Reducing support costs while improving satisfaction",
      description: "A technology company implemented our AI customer service solution, dramatically reducing support costs while improving customer satisfaction scores.",
      longDescription: "This technology company was spending millions on customer support with long response times and inconsistent service quality. Our AI solution included natural language processing, automated ticket routing, and intelligent response generation. The system was trained on their specific product knowledge and customer interactions.",
      industry: "technology",
      service: "ai-ml",
      outcome: "cost-reduction",
      client: "InnovateTech Solutions",
      clientSize: "Large Enterprise",
      clientLocation: "Canada",
      duration: "5 months",
      teamSize: 6,
      challenge: "High support costs, long response times, inconsistent service quality",
      solution: "AI-powered customer service automation platform",
      results: [
        "65% reduction in support costs",
        "80% faster response times",
        "90% customer satisfaction rate",
        "24/7 automated support availability"
      ],
      metrics: {
        costReduction: "65%",
        responseTimeImprovement: "80%",
        satisfactionRate: "90%",
        availability: "24/7"
      },
      technologies: ["Natural Language Processing", "Machine Learning", "Chatbots", "Sentiment Analysis"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&h=400",
      images: [
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&h=400",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=400"
      ],
      featured: false,
      tags: ["Technology", "AI", "Customer Service", "Automation", "NLP"],
      testimonial: {
        quote: "The AI customer service platform has transformed our support operations. We're saving millions while providing better service to our customers.",
        author: "David Thompson",
        role: "VP of Customer Success",
        company: "InnovateTech Solutions"
      },
      publishedDate: "2024-12-15",
      readTime: "4 min read"
    }
  ];

  const filteredCaseStudies = caseStudies.filter(study => {
    const matchesSearch = study.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         study.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         study.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesIndustry = selectedIndustry === 'all' || study.industry === selectedIndustry;
    const matchesService = selectedService === 'all' || study.service === selectedService;
    const matchesOutcome = selectedOutcome === 'all' || study.outcome === selectedOutcome;
    
    return matchesSearch && matchesIndustry && matchesService && matchesOutcome;
  });

  const featuredCaseStudy = caseStudies.find(study => study.featured);
  const regularCaseStudies = filteredCaseStudies.filter(study => !study.featured);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen bg-futuristic">
      <SEO 
        title="Case Studies - Zion Tech Group"
        description="Discover real client success stories and measurable outcomes from our technology solutions. See how we've transformed businesses across industries."
      />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-zion-slate-dark via-zion-blue to-zion-slate-dark">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Client <span className="text-zion-cyan">Success Stories</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto"
          >
            Real results from real clients. Discover how our technology solutions 
            have transformed businesses across industries with measurable outcomes.
          </motion.p>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-zion-slate-dark border-b border-zion-slate-light/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zion-slate-light" />
              <input
                type="text"
                placeholder="Search case studies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-zion-slate-light/10 border border-zion-slate-light/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20 transition-all duration-200"
              />
            </div>

            {/* Filters Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-2 bg-zion-cyan/20 text-zion-cyan border border-zion-cyan/30 rounded-lg hover:bg-zion-cyan/30 transition-all duration-200"
            >
              <FilterIcon className="w-4 h-4" />
              Filters
              {showFilters ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>

          {/* Expanded Filters */}
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-6 pt-6 border-t border-zion-slate-light/20"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Industry Filter */}
                <div>
                  <label className="block text-white font-medium mb-2">Industry</label>
                  <select
                    value={selectedIndustry}
                    onChange={(e) => setSelectedIndustry(e.target.value)}
                    className="w-full bg-zion-slate-light/10 border border-zion-slate-light/20 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-zion-cyan"
                  >
                    {industries.map((industry) => (
                      <option key={industry.id} value={industry.id}>
                        {industry.name} ({industry.count})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Service Filter */}
                <div>
                  <label className="block text-white font-medium mb-2">Service</label>
                  <select
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full bg-zion-slate-light/10 border border-zion-slate-light/20 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-zion-cyan"
                  >
                    {services.map((service) => (
                      <option key={service.id} value={service.id}>
                        {service.name} ({service.count})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Outcome Filter */}
                <div>
                  <label className="block text-white font-medium mb-2">Outcome</label>
                  <select
                    value={selectedOutcome}
                    onChange={(e) => setSelectedOutcome(e.target.value)}
                    className="w-full bg-zion-slate-light/10 border border-zion-slate-light/20 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-zion-cyan"
                  >
                    {outcomes.map((outcome) => (
                      <option key={outcome.id} value={outcome.id}>
                        {outcome.name} ({outcome.count})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Clear Filters */}
              <div className="mt-6 pt-6 border-t border-zion-slate-light/20">
                <button
                  onClick={() => {
                    setSelectedIndustry('all');
                    setSelectedService('all');
                    setSelectedOutcome('all');
                    setSearchQuery('');
                  }}
                  className="px-6 py-2 bg-zion-slate-light/20 text-zion-slate-light border border-zion-slate-light/30 rounded-lg hover:bg-zion-slate-light/30 hover:text-white transition-all duration-200"
                >
                  Clear All Filters
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Featured Case Study */}
      {featuredCaseStudy && (
        <section className="py-16 bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-6xl mx-auto"
            >
              <div className="text-center mb-8">
                <span className="inline-flex items-center px-4 py-2 bg-zion-cyan text-white text-sm font-medium rounded-full mb-4">
                  <Star className="w-4 h-4 mr-2" />
                  Featured Case Study
                </span>
                <h2 className="text-3xl font-bold text-white mb-4">Success Story of the Month</h2>
              </div>
              
              <div className="bg-zion-slate-dark/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="relative">
                    <img 
                      src={featuredCaseStudy.image} 
                      alt={featuredCaseStudy.title}
                      className="w-full h-full object-cover min-h-[300px]"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center px-3 py-1 bg-zion-cyan text-white text-xs font-medium rounded-full">
                        {industries.find(ind => ind.id === featuredCaseStudy.industry)?.name}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-4 text-sm text-zion-slate-light mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {formatDate(featuredCaseStudy.publishedDate)}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {featuredCaseStudy.readTime}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                      {featuredCaseStudy.title}
                    </h3>
                    
                    <p className="text-zion-slate-light mb-6 leading-relaxed">
                      {featuredCaseStudy.description}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-zion-cyan">
                          {featuredCaseStudy.metrics.costSavings || featuredCaseStudy.metrics.efficiencyGain}%
                        </div>
                        <div className="text-zion-slate-light text-sm">
                          {featuredCaseStudy.metrics.costSavings ? 'Cost Savings' : 'Efficiency Gain'}
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-zion-cyan">
                          {featuredCaseStudy.metrics.accuracyImprovement || featuredCaseStudy.metrics.securityImprovement}%
                        </div>
                        <div className="text-zion-slate-light text-sm">
                          {featuredCaseStudy.metrics.accuracyImprovement ? 'Accuracy' : 'Security'} Improvement
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {featuredCaseStudy.tags.slice(0, 4).map((tag) => (
                        <span key={tag} className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:from-zion-cyan/80 hover:to-zion-purple/80 transition-all duration-300 hover:scale-105">
                      Read Full Case Study
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Case Studies Grid */}
      <section className="py-16 bg-zion-slate-dark">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-white text-center mb-12"
          >
            More Success Stories
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularCaseStudies.map((study, index) => (
              <motion.article
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-zion-slate-dark/50 to-zion-blue/10 backdrop-blur-sm rounded-xl overflow-hidden border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 hover:scale-105 group"
              >
                <div className="relative">
                  <img 
                    src={study.image} 
                    alt={study.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center px-3 py-1 bg-zion-cyan text-white text-xs font-medium rounded-full">
                      {industries.find(ind => ind.id === study.industry)?.name}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-zion-slate-light mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {formatDate(study.publishedDate)}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {study.readTime}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 leading-tight group-hover:text-zion-cyan transition-colors duration-200">
                    {study.title}
                  </h3>
                  
                  <p className="text-zion-slate-light mb-4 leading-relaxed">
                    {study.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-white font-semibold mb-2">Key Results</h4>
                    <div className="space-y-2">
                      {study.results.slice(0, 2).map((result, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-zion-cyan flex-shrink-0" />
                          <span className="text-zion-slate-light">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {study.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-zion-cyan/10 text-zion-cyan text-xs rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <button className="w-full inline-flex items-center justify-center px-4 py-2 border border-zion-cyan text-zion-cyan font-medium rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300 group-hover:scale-105">
                    Read Case Study
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
          
          {filteredCaseStudies.length === 0 && (
            <div className="text-center py-16">
              <Award className="w-16 h-16 text-zion-slate-light mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No case studies found</h3>
              <p className="text-zion-slate-light">Try adjusting your search or filter criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-zion-slate-light mb-8">
              Let's discuss how our technology solutions can transform your business 
              and deliver measurable results like the ones you've seen here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:from-zion-cyan/80 hover:to-zion-purple/80 transition-all duration-300 hover:scale-105"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Start Your Project
              </a>
              <a
                href="/services"
                className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                <Settings className="w-5 h-5 mr-2" />
                Explore Our Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
