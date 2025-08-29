import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import {
  Brain,
  Cloud,
  Shield,
  Zap,
  Rocket,
  Users,
  Globe,
  CheckCircle,
  Star,
  ArrowRight,
  TrendingUp,
  Award,
  Clock,
  DollarSign,
  Target,
  Lightbulb,
  BarChart3,
  Database,
  Network,
  Server,
  Eye,
  BrainCircuit,
  GitBranch,
  RefreshCw,
  Briefcase,
  BarChart,
  ShieldCheck,
  Atom,
  BrainCircuit2
} from 'lucide-react';

export default function CaseStudies() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedIndustry, setSelectedIndustry] = useState('all');

  const categories = [
    { id: 'all', name: 'All Cases', icon: Globe, count: 0 },
    { id: 'ai-ml', name: 'AI & Machine Learning', icon: Brain, count: 0 },
    { id: 'cloud', name: 'Cloud Infrastructure', icon: Cloud, count: 0 },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, count: 0 },
    { id: 'digital-transformation', name: 'Digital Transformation', icon: Zap, count: 0 },
    { id: 'micro-saas', name: 'Micro SAAS', icon: Rocket, count: 0 }
  ];

  const industries = [
    { id: 'all', name: 'All Industries', count: 0 },
    { id: 'healthcare', name: 'Healthcare', count: 0 },
    { id: 'finance', name: 'Finance', count: 0 },
    { id: 'manufacturing', name: 'Manufacturing', count: 0 },
    { id: 'retail', name: 'Retail', count: 0 },
    { id: 'technology', name: 'Technology', count: 0 }
  ];

  const caseStudies = [
    {
      id: 'ai-consciousness-breakthrough',
      title: 'AI Consciousness Research Breakthrough',
      category: 'ai-ml',
      industry: 'technology',
      company: 'QuantumLabs Inc.',
      description: 'Revolutionary research in artificial consciousness that achieved self-aware AI systems',
      challenge: 'Developing truly self-aware AI systems that could understand and reason about their own existence',
      solution: 'Implemented advanced neural architecture with consciousness modeling frameworks and ethical AI guidelines',
      results: [
        'Achieved breakthrough in AI consciousness research',
        'Published 15 peer-reviewed papers in top journals',
        'Secured $50M in additional research funding',
        'Established industry-leading AI ethics framework'
      ],
      metrics: {
        researchOutput: '15 peer-reviewed papers',
        fundingSecured: '$50M',
        timeline: '18 months',
        teamSize: '25 researchers'
      },
      technologies: ['Advanced Neural Networks', 'Consciousness Modeling', 'Ethical AI Frameworks', 'Quantum Computing'],
      image: '/images/case-studies/ai-consciousness.jpg'
    },
    {
      id: 'quantum-financial-modeling',
      title: 'Quantum Financial Modeling Platform',
      category: 'ai-ml',
      industry: 'finance',
      company: 'Global Finance Corp',
      description: 'Next-generation financial modeling using quantum computing and AI for unprecedented accuracy',
      challenge: 'Traditional financial models couldn\'t handle market complexity and real-time risk assessment',
      solution: 'Developed hybrid quantum-classical AI system with real-time market analysis and predictive modeling',
      results: [
        '300% improvement in prediction accuracy',
        'Real-time risk assessment capabilities',
        'Reduced trading losses by 85%',
        'Increased portfolio returns by 40%'
      ],
      metrics: {
        accuracyImprovement: '300%',
        riskReduction: '85%',
        returnIncrease: '40%',
        timeline: '24 months'
      },
      technologies: ['Quantum Computing', 'Machine Learning', 'Real-time Analytics', 'Financial APIs'],
      image: '/images/case-studies/quantum-finance.jpg'
    },
    {
      id: 'autonomous-manufacturing',
      title: 'Autonomous Manufacturing Revolution',
      category: 'digital-transformation',
      industry: 'manufacturing',
      company: 'FutureTech Manufacturing',
      description: 'Complete transformation of manufacturing processes using autonomous robots and AI systems',
      challenge: 'High production costs, quality inconsistencies, and safety concerns in hazardous environments',
      solution: 'Implemented fully autonomous manufacturing with AI-powered quality control and predictive maintenance',
      results: [
        '95% reduction in production errors',
        '60% increase in production efficiency',
        '100% improvement in workplace safety',
        '40% reduction in operational costs'
      ],
      metrics: {
        errorReduction: '95%',
        efficiencyIncrease: '60%',
        safetyImprovement: '100%',
        costReduction: '40%'
      },
      technologies: ['Autonomous Robotics', 'Computer Vision', 'Predictive Analytics', 'IoT Sensors'],
      image: '/images/case-studies/autonomous-manufacturing.jpg'
    },
    {
      id: 'cyber-threat-intelligence',
      title: 'Advanced Cyber Threat Intelligence',
      category: 'cybersecurity',
      industry: 'technology',
      company: 'SecureNet Solutions',
      description: 'AI-powered threat detection and response system for enterprise cybersecurity',
      challenge: 'Increasingly sophisticated cyber threats requiring real-time detection and automated response',
      solution: 'Developed comprehensive threat intelligence platform with machine learning and behavioral analysis',
      results: [
        '99.9% threat detection accuracy',
        '90% reduction in response time',
        'Zero successful breaches in 2 years',
        'Automated response to 95% of threats'
      ],
      metrics: {
        detectionAccuracy: '99.9%',
        responseTimeReduction: '90%',
        breachPrevention: '100%',
        automationRate: '95%'
      },
      technologies: ['Machine Learning', 'Behavioral Analysis', 'Threat Intelligence', 'Automated Response'],
      image: '/images/case-studies/cyber-threat.jpg'
    },
    {
      id: 'cloud-migration-transformation',
      title: 'Enterprise Cloud Migration Success',
      category: 'cloud',
      industry: 'retail',
      company: 'MegaRetail Inc.',
      description: 'Seamless migration of legacy systems to cloud infrastructure with zero downtime',
      challenge: 'Complex legacy systems, strict compliance requirements, and need for zero downtime migration',
      solution: 'Implemented hybrid cloud strategy with automated migration tools and comprehensive testing',
      results: [
        'Zero downtime during migration',
        '50% reduction in infrastructure costs',
        '99.9% uptime achieved',
        'Improved scalability by 300%'
      ],
      metrics: {
        downtime: '0 minutes',
        costReduction: '50%',
        uptime: '99.9%',
        scalabilityImprovement: '300%'
      },
      technologies: ['Cloud Infrastructure', 'Migration Automation', 'Load Balancing', 'Monitoring Tools'],
      image: '/images/case-studies/cloud-migration.jpg'
    },
    {
      id: 'micro-saas-platform',
      title: 'Micro SAAS Platform Launch',
      category: 'micro-saas',
      industry: 'technology',
      company: 'StartupHub',
      description: 'Rapid development and launch of micro SAAS platform with automated scaling',
      challenge: 'Need for rapid MVP development, automated scaling, and cost-effective infrastructure',
      solution: 'Built micro SAAS platform using modern cloud-native technologies and automated DevOps',
      results: [
        'MVP launched in 6 weeks',
        'Automated scaling from 0 to 10K users',
        '99.9% uptime maintained',
        'Profitable within 3 months'
      ],
      metrics: {
        developmentTime: '6 weeks',
        userScaling: '0 to 10K',
        uptime: '99.9%',
        profitability: '3 months'
      },
      technologies: ['Microservices', 'Cloud-Native', 'DevOps Automation', 'Auto-scaling'],
      image: '/images/case-studies/micro-saas.jpg'
    }
  ];

  // Calculate counts for categories and industries
  React.useEffect(() => {
    const categoryCounts = categories.map(cat => ({
      ...cat,
      count: cat.id === 'all' ? caseStudies.length : caseStudies.filter(cs => cs.category === cat.id).length
    }));
    
    const industryCounts = industries.map(ind => ({
      ...ind,
      count: ind.id === 'all' ? caseStudies.length : caseStudies.filter(cs => cs.industry === ind.id).length
    }));
  }, []);

  const filteredCaseStudies = caseStudies.filter(cs => {
    const categoryMatch = selectedCategory === 'all' || cs.category === selectedCategory;
    const industryMatch = selectedIndustry === 'all' || cs.industry === selectedIndustry;
    return categoryMatch && industryMatch;
  });

  const getCategoryIcon = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category?.icon || Globe;
  };

  const getIndustryColor = (industry: string) => {
    const colors = {
      healthcare: 'from-green-500 to-emerald-600',
      finance: 'from-blue-500 to-indigo-600',
      manufacturing: 'from-orange-500 to-red-600',
      retail: 'from-purple-500 to-pink-600',
      technology: 'from-cyan-500 to-blue-600',
      government: 'from-gray-500 to-slate-600'
    };
    return colors[industry as keyof typeof colors] || 'from-gray-500 to-slate-600';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Case Studies - Zion Tech Group" 
        description="Explore real-world success stories and transformative solutions delivered by Zion Tech Group across various industries."
        keywords="case studies, success stories, AI solutions, digital transformation, cybersecurity, cloud migration"
      />
      
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-blue overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20" />
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Success Stories
            </h1>
            <p className="text-xl md:text-2xl text-zion-cyan max-w-4xl mx-auto leading-relaxed">
              Real-world transformations powered by cutting-edge technology and innovative thinking
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-16 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8 items-center justify-between">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                    selectedCategory === category.id
                      ? 'bg-zion-cyan text-slate-900 shadow-lg shadow-zion-cyan/30'
                      : 'bg-slate-700 text-zion-cyan hover:bg-slate-600'
                  }`}
                >
                  <category.icon className="w-5 h-5" />
                  {category.name}
                  <span className="ml-2 px-2 py-1 bg-slate-600 rounded-full text-sm">
                    {category.count}
                  </span>
                </motion.button>
              ))}
            </div>

            {/* Industry Filter */}
            <div className="flex flex-wrap gap-3">
              {industries.map((industry) => (
                <motion.button
                  key={industry.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedIndustry(industry.id)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    selectedIndustry === industry.id
                      ? 'bg-zion-blue text-white shadow-lg shadow-zion-blue/30'
                      : 'bg-slate-700 text-zion-blue hover:bg-slate-600'
                  }`}
                >
                  {industry.name}
                  <span className="ml-2 px-2 py-1 bg-slate-600 rounded-full text-sm">
                    {industry.count}
                  </span>
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredCaseStudies.map((caseStudy, index) => (
              <motion.div
                key={caseStudy.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800 rounded-2xl overflow-hidden shadow-2xl hover:shadow-zion-cyan/20 transition-all duration-300 group"
              >
                {/* Case Study Header */}
                <div className={`p-6 bg-gradient-to-r ${getIndustryColor(caseStudy.industry)}`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-white/20 rounded-lg">
                        <getCategoryIcon category={caseStudy.category} className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-sm font-medium text-white/80 uppercase tracking-wide">
                        {caseStudy.industry}
                      </span>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-white">{caseStudy.metrics.roi || 'N/A'}</div>
                      <div className="text-sm text-white/80">ROI</div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white leading-tight">
                    {caseStudy.title}
                  </h3>
                  <p className="text-white/90 mt-2 text-sm">
                    {caseStudy.company}
                  </p>
                </div>

                {/* Case Study Content */}
                <div className="p-6">
                  <p className="text-slate-300 mb-4 leading-relaxed">
                    {caseStudy.description}
                  </p>

                  {/* Challenge & Solution */}
                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="text-sm font-semibold text-zion-cyan mb-2 flex items-center gap-2">
                        <Target className="w-4 h-4" />
                        Challenge
                      </h4>
                      <p className="text-sm text-slate-400 leading-relaxed">
                        {caseStudy.challenge}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-zion-green mb-2 flex items-center gap-2">
                        <Lightbulb className="w-4 h-4" />
                        Solution
                      </h4>
                      <p className="text-sm text-slate-400 leading-relaxed">
                        {caseStudy.solution}
                      </p>
                    </div>
                  </div>

                  {/* Key Results */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-zion-orange mb-3 flex items-center gap-2">
                      <BarChart3 className="w-4 h-4" />
                      Key Results
                    </h4>
                    <ul className="space-y-2">
                      {caseStudy.results.slice(0, 3).map((result, idx) => (
                        <li key={idx} className="text-sm text-slate-400 flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-zion-green mt-0.5 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-zion-purple mb-3 flex items-center gap-2">
                      <Brain className="w-4 h-4" />
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {caseStudy.technologies.slice(0, 4).map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-slate-700 text-slate-300 text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {Object.entries(caseStudy.metrics).slice(0, 4).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-lg font-bold text-zion-cyan">{value}</div>
                        <div className="text-xs text-slate-500 capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-zion-cyan to-zion-blue text-slate-900 font-semibold py-3 px-6 rounded-xl hover:shadow-lg hover:shadow-zion-cyan/30 transition-all duration-300 group-hover:from-zion-blue group-hover:to-zion-cyan"
                  >
                    <span className="flex items-center justify-center gap-2">
                      View Full Case Study
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* No Results Message */}
          {filteredCaseStudies.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="text-6xl mb-6">🔍</div>
              <h3 className="text-2xl font-bold text-slate-300 mb-4">
                No case studies found
              </h3>
              <p className="text-slate-500 max-w-md mx-auto">
                Try adjusting your filters to see more case studies, or contact us to discuss your specific needs.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-blue to-zion-purple">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-zion-cyan max-w-3xl mx-auto mb-8 leading-relaxed">
              Let's discuss how Zion Tech Group can transform your business with cutting-edge technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-zion-blue font-semibold py-4 px-8 rounded-xl hover:shadow-lg transition-all duration-300"
              >
                Schedule a Consultation
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white font-semibold py-4 px-8 rounded-xl hover:bg-white hover:text-zion-blue transition-all duration-300"
              >
                View Our Services
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
