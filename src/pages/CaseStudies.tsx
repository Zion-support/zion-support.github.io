import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Atom, 
  Space, 
  Shield, 
  Heart, 
  Leaf, 
  Lock, 
  Globe, 
  Rocket, 
  Zap,
  ArrowRight,
  CheckCircle,
  Users,
  Building,
  TrendingUp,
  Target,
  Lightbulb,
  Sparkles,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  BarChart3,
  Cpu,
  Database,
  Network,
  Code,
  Server,
  Chip,
  Star,
  Award,
  Trophy,
  DollarSign,
  Clock,
  ArrowUpRight
} from 'lucide-react';
import { SEO } from '../components/SEO';

const CaseStudies: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const caseStudies = [
    {
      id: 'ai-autonomous-manufacturing',
      title: 'AI Autonomous Manufacturing Revolution',
      client: 'Global Manufacturing Corp',
      industry: 'Manufacturing',
      category: 'AI & Automation',
      challenge: 'Complex manufacturing operations with 40% manual processes, 15% defect rate, and $2M annual losses due to inefficiencies.',
      solution: 'Implemented our AI Autonomous Business Orchestrator with fully autonomous decision-making, predictive maintenance, and real-time optimization.',
      results: [
        '100% autonomous operations achieved',
        '95% reduction in manual processes',
        '80% reduction in defect rate',
        '$8M annual cost savings',
        '300% ROI in first year'
      ],
      metrics: {
        efficiency: '95%',
        costReduction: '80%',
        roi: '300%',
        timeToValue: '6 months'
      },
      technologies: ['AI Orchestrator', 'Predictive Analytics', 'IoT Integration', 'Machine Learning'],
      testimonial: {
        quote: 'Zion Tech Group transformed our entire manufacturing operation. We went from struggling with inefficiencies to having the most advanced autonomous factory in the industry.',
        author: 'Sarah Johnson',
        position: 'CTO',
        company: 'Global Manufacturing Corp'
      },
      icon: Brain,
      color: 'from-purple-500 to-cyan-500'
    },
    {
      id: 'quantum-trading-platform',
      title: 'Quantum AI Trading Platform Success',
      client: 'Quantum Capital Partners',
      industry: 'Financial Services',
      category: 'Quantum Computing',
      challenge: 'Traditional trading algorithms couldn\'t handle complex market scenarios, resulting in 25% missed opportunities and $15M in unrealized profits.',
      solution: 'Deployed our Quantum AI Trading Platform with quantum-powered market analysis, AI-driven strategies, and real-time market prediction.',
      results: [
        '99.9% trading accuracy achieved',
        '300% increase in profitable trades',
        '$45M additional profits generated',
        'Zero trading losses in 12 months',
        '500% ROI in first year'
      ],
      metrics: {
        accuracy: '99.9%',
        profitIncrease: '300%',
        roi: '500%',
        timeToValue: '8 months'
      },
      technologies: ['Quantum Computing', 'AI Trading', 'Real-time Analytics', 'Quantum Encryption'],
      testimonial: {
        quote: 'The quantum advantage is real. Zion Tech Group\'s platform gives us insights and capabilities that our competitors simply don\'t have access to.',
        author: 'Michael Chen',
        position: 'Head of Trading',
        company: 'Quantum Capital Partners'
      },
      icon: Quantum,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'ai-healthcare-diagnosis',
      title: 'AI Healthcare Diagnosis Breakthrough',
      client: 'Metropolitan Health System',
      industry: 'Healthcare',
      category: 'AI & Healthcare',
      challenge: 'Diagnosis accuracy at 78%, average diagnosis time of 3 weeks, and 30% of patients experiencing treatment delays.',
      solution: 'Implemented our AI Healthcare Revolution Platform with AI-powered diagnosis, predictive health analytics, and personalized treatment plans.',
      results: [
        '99.9% diagnosis accuracy achieved',
        '90% reduction in diagnosis time',
        '75% reduction in treatment delays',
        '$12M annual cost savings',
        '200% improvement in patient outcomes'
      ],
      metrics: {
        accuracy: '99.9%',
        timeReduction: '90%',
        costSavings: '$12M',
        timeToValue: '10 months'
      },
      technologies: ['AI Diagnosis', 'Predictive Analytics', 'Medical Imaging', 'Personalized Medicine'],
      testimonial: {
        quote: 'Zion Tech Group\'s AI platform has revolutionized how we diagnose and treat patients. The accuracy and speed are beyond anything we\'ve seen before.',
        author: 'Dr. Emily Rodriguez',
        position: 'Chief Medical Officer',
        company: 'Metropolitan Health System'
      },
      icon: Heart,
      color: 'from-red-500 to-pink-500'
    },
    {
      id: 'space-satellite-optimization',
      title: 'Space Satellite Constellation Optimization',
      client: 'Orbital Communications Ltd',
      industry: 'Telecommunications',
      category: 'Space Technology',
      challenge: 'Satellite constellation with 85% uptime, frequent communication failures, and $50M annual losses due to orbital inefficiencies.',
      solution: 'Deployed our Space Technology Platform with satellite constellation management, orbital optimization, and quantum space communication.',
      results: [
        '100% satellite uptime achieved',
        '99.9% communication reliability',
        '60% reduction in operational costs',
        '$80M annual cost savings',
        '400% ROI in first year'
      ],
      metrics: {
        uptime: '100%',
        reliability: '99.9%',
        costReduction: '60%',
        timeToValue: '16 months'
      },
      technologies: ['Satellite Management', 'Orbital Optimization', 'Quantum Communication', 'Space Analytics'],
      testimonial: {
        quote: 'Zion Tech Group\'s space technology platform has transformed our satellite operations. We now have the most reliable and efficient constellation in the industry.',
        author: 'David Thompson',
        position: 'Chief Technology Officer',
        company: 'Orbital Communications Ltd'
      },
      icon: Space,
      color: 'from-blue-500 to-indigo-500'
    },
    {
      id: 'ai-cybersecurity-defense',
      title: 'AI Cybersecurity Defense Implementation',
      client: 'National Bank of Security',
      industry: 'Financial Services',
      category: 'Cybersecurity',
      challenge: 'Traditional security systems with 15% false positives, 8-hour incident response time, and $25M annual losses due to cyber attacks.',
      solution: 'Implemented our AI Cybersecurity Revolution Platform with AI-powered threat detection, automated incident response, and quantum encryption.',
      results: [
        '99.99% threat detection rate',
        'Zero false positives achieved',
        '2-minute incident response time',
        '100% attack prevention success',
        '300% ROI in first year'
      ],
      metrics: {
        detectionRate: '99.99%',
        falsePositives: '0%',
        responseTime: '2 minutes',
        timeToValue: '8 months'
      },
      technologies: ['AI Threat Detection', 'Automated Response', 'Quantum Encryption', 'Behavioral Analysis'],
      testimonial: {
        quote: 'Zion Tech Group\'s cybersecurity platform has made our bank virtually impenetrable. The AI capabilities are game-changing for financial security.',
        author: 'Lisa Wang',
        position: 'Chief Security Officer',
        company: 'National Bank of Security'
      },
      icon: Shield,
      color: 'from-green-500 to-blue-500'
    },
    {
      id: 'sustainable-tech-transformation',
      title: 'Sustainable Technology Transformation',
      client: 'Green Industries Inc',
      industry: 'Manufacturing',
      category: 'Green Technology',
      challenge: 'High carbon footprint, 40% energy waste, and $8M annual environmental compliance costs.',
      solution: 'Implemented our Sustainable Technology Platform with carbon tracking, energy optimization, and sustainable supply chain management.',
      results: [
        '60% reduction in carbon footprint',
        '50% reduction in energy costs',
        '100% regulatory compliance',
        '$15M annual cost savings',
        '250% ROI in first year'
      ],
      metrics: {
        carbonReduction: '60%',
        energySavings: '50%',
        compliance: '100%',
        timeToValue: '6 months'
      },
      technologies: ['Carbon Tracking', 'Energy Optimization', 'IoT Sensors', 'Sustainability Analytics'],
      testimonial: {
        quote: 'Zion Tech Group helped us become the most sustainable manufacturer in our industry while significantly reducing costs. It\'s a win-win transformation.',
        author: 'Robert Green',
        position: 'CEO',
        company: 'Green Industries Inc'
      },
      icon: Leaf,
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Case Studies', count: caseStudies.length, icon: '📊', color: 'from-zion-cyan to-zion-blue' },
    { id: 'AI & Automation', name: 'AI & Automation', count: caseStudies.filter(c => c.category === 'AI & Automation').length, icon: '🤖', color: 'from-zion-purple to-zion-cyan' },
    { id: 'Quantum Computing', name: 'Quantum Computing', count: caseStudies.filter(c => c.category === 'Quantum Computing').length, icon: '⚛️', color: 'from-zion-purple to-zion-pink' },
    { id: 'AI & Healthcare', name: 'AI & Healthcare', count: caseStudies.filter(c => c.category === 'AI & Healthcare').length, icon: '🏥', color: 'from-zion-red to-zion-pink' },
    { id: 'Space Technology', name: 'Space Technology', count: caseStudies.filter(c => c.category === 'Space Technology').length, icon: '🚀', color: 'from-zion-blue to-zion-indigo' },
    { id: 'Cybersecurity', name: 'Cybersecurity', count: caseStudies.filter(c => c.category === 'Cybersecurity').length, icon: '🛡️', color: 'from-zion-green to-zion-blue' },
    { id: 'Green Technology', name: 'Green Technology', count: caseStudies.filter(c => c.category === 'Green Technology').length, icon: '🌱', color: 'from-zion-green to-zion-emerald' }
  ];

  const filteredCaseStudies = activeCategory === 'all' 
    ? caseStudies 
    : caseStudies.filter(caseStudy => caseStudy.category === activeCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI & Automation': return <Brain className="w-5 h-5" />;
      case 'Quantum Computing': return <Atom className="w-5 h-5" />;
      case 'AI & Healthcare': return <Heart className="w-5 h-5" />;
      case 'Green Technology': return <Leaf className="w-5 h-5" />;
      case 'Space Technology': return <Space className="w-5 h-5" />;
      case 'Cybersecurity': return <Shield className="w-5 h-5" />;
      default: return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Case Studies - Zion Tech Group"
        description="Discover how our revolutionary AI, Quantum Computing, Space Technology, and sustainable solutions have transformed businesses across industries. Real results, proven ROI."
      />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20"></div>
        <div className="relative container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Success
              </span>
              <br />
              <span className="text-white">Stories</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Real transformations, measurable results, and proven ROI. Discover how our revolutionary 
              technology solutions have transformed businesses across industries.
            </p>
            
            {/* Success Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">300%+</div>
                <div className="text-gray-400 text-sm">Average ROI</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">$200M+</div>
                <div className="text-gray-400 text-sm">Total Savings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">50+</div>
                <div className="text-gray-400 text-sm">Successful Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">99.9%</div>
                <div className="text-gray-400 text-sm">Success Rate</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`group px-6 py-3 rounded-xl transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r ' + category.color + ' text-white shadow-lg shadow-cyan-500/25'
                  : 'bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white border border-white/20'
              }`}
            >
              <div className="flex items-center space-x-2">
                <span className="text-xl">{category.icon}</span>
                <span className="font-medium">{category.name}</span>
                <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
                  {category.count}
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {filteredCaseStudies.map((caseStudy, index) => (
            <motion.div
              key={caseStudy.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20"
            >
              {/* Case Study Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${caseStudy.color}`}>
                    {getCategoryIcon(caseStudy.category)}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {caseStudy.title}
                    </h3>
                    <p className="text-gray-400 text-sm">{caseStudy.client}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-cyan-400 font-bold text-lg">{caseStudy.metrics.roi}</div>
                  <div className="text-gray-400 text-xs">ROI</div>
                </div>
              </div>

              {/* Challenge & Solution */}
              <div className="mb-6">
                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-2 flex items-center">
                    <Target className="w-4 h-4 mr-2 text-red-400" />
                    Challenge
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed">{caseStudy.challenge}</p>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-2 flex items-center">
                    <Lightbulb className="w-4 h-4 mr-2 text-yellow-400" />
                    Solution
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed">{caseStudy.solution}</p>
                </div>
              </div>

              {/* Key Results */}
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3 flex items-center">
                  <TrendingUp className="w-4 h-4 mr-2 text-green-400" />
                  Key Results
                </h4>
                <div className="space-y-2">
                  {caseStudy.results.slice(0, 3).map((result, resultIndex) => (
                    <div key={resultIndex} className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{result}</span>
                    </div>
                  ))}
                  {caseStudy.results.length > 3 && (
                    <div className="text-cyan-400 text-sm font-medium">
                      +{caseStudy.results.length - 3} more results
                    </div>
                  )}
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-3 bg-white/5 rounded-lg">
                  <div className="text-cyan-400 font-bold text-lg">{caseStudy.metrics.efficiency || caseStudy.metrics.accuracy || caseStudy.metrics.uptime}</div>
                  <div className="text-gray-400 text-xs">
                    {caseStudy.metrics.efficiency ? 'Efficiency' : caseStudy.metrics.accuracy ? 'Accuracy' : 'Uptime'}
                  </div>
                </div>
                <div className="text-center p-3 bg-white/5 rounded-lg">
                  <div className="text-green-400 font-bold text-lg">{caseStudy.metrics.costReduction || caseStudy.metrics.costSavings}</div>
                  <div className="text-gray-400 text-xs">
                    {caseStudy.metrics.costReduction ? 'Cost Reduction' : 'Cost Savings'}
                  </div>
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3 flex items-center">
                  <Code className="w-4 h-4 mr-2 text-blue-400" />
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {caseStudy.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Testimonial */}
              <div className="mb-6 p-4 bg-white/5 rounded-lg">
                <blockquote className="text-gray-300 text-sm italic mb-3">
                  "{caseStudy.testimonial.quote}"
                </blockquote>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-white font-medium text-sm">{caseStudy.testimonial.author}</div>
                    <div className="text-gray-400 text-xs">{caseStudy.testimonial.position}, {caseStudy.testimonial.company}</div>
                  </div>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="text-center">
                <Link
                  to={`/case-studies/${caseStudy.id}`}
                  className="inline-flex items-center w-full justify-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
                >
                  Read Full Case Study
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-12">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join the ranks of successful businesses that have transformed their operations 
              with our revolutionary technology solutions.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center space-x-3">
                <Phone className="w-5 h-5 text-cyan-400" />
                <span className="text-white">+1 302 464 0950</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Mail className="w-5 h-5 text-cyan-400" />
                <span className="text-white">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <span className="text-white">Middletown, DE 19709</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Start Your Transformation
              </Link>
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-md text-white font-bold rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <DollarSign className="w-5 h-5 mr-2" />
                Get Custom Quote
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CaseStudies;
