import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { 
  TrendingUp, 
  Users, 
  DollarSign, 
  Clock, 
  Award, 
  Star,
  ArrowRight,
  CheckCircle,
  Brain,
  Shield,
  Cloud,
  Rocket,
  Heart,
  Globe
} from 'lucide-react';

export default function CaseStudies() {
  const caseStudies = [
    {
      id: 1,
      title: 'AI-Powered Compliance Automation for Fortune 500 Bank',
      client: 'Global Financial Services Corp',
      industry: 'Financial Services',
      challenge: 'Manual compliance processes were taking 40+ hours per week and had 15% error rate',
      solution: 'Implemented AI-powered compliance assistant with automated document review and risk assessment',
      results: [
        'Reduced compliance processing time by 85%',
        'Achieved 99.9% accuracy rate',
        'Saved $2.4M annually in operational costs',
        'Improved audit readiness from 2 weeks to 2 days'
      ],
      technologies: ['AI Compliance Assistant', 'Natural Language Processing', 'Machine Learning'],
      duration: '6 months',
      teamSize: '8 AI specialists',
      icon: Shield,
      color: 'from-green-600 to-emerald-600',
      featured: true
    },
    {
      id: 2,
      title: 'Digital Twin Implementation for Manufacturing Plant',
      client: 'Advanced Manufacturing Inc',
      industry: 'Manufacturing',
      challenge: 'Equipment downtime was costing $500K monthly with unpredictable maintenance schedules',
      solution: 'Deployed IoT sensors and AI-powered digital twin for predictive maintenance and optimization',
      results: [
        'Reduced equipment downtime by 73%',
        'Increased production efficiency by 28%',
        'Saved $3.2M in annual maintenance costs',
        'Extended equipment lifespan by 40%'
      ],
      technologies: ['Digital Twin', 'IoT Edge Computing', 'Predictive Analytics'],
      duration: '8 months',
      teamSize: '12 engineers',
      icon: Rocket,
      color: 'from-blue-600 to-cyan-600',
      featured: true
    },
    {
      id: 3,
      title: 'AI Sales Copilot for Enterprise Software Company',
      client: 'TechSolutions Pro',
      industry: 'Technology',
      challenge: 'Sales team was spending 60% of time on administrative tasks with declining conversion rates',
      solution: 'Integrated AI sales copilot for automated lead qualification, follow-ups, and CRM management',
      results: [
        'Increased sales productivity by 45%',
        'Improved lead conversion rate by 32%',
        'Reduced sales cycle time by 28%',
        'Generated $8.7M in additional revenue'
      ],
      technologies: ['AI Sales Copilot', 'CRM Integration', 'Natural Language Processing'],
      duration: '4 months',
      teamSize: '6 AI developers',
      icon: Brain,
      color: 'from-purple-600 to-pink-600',
      featured: false
    },
    {
      id: 4,
      title: 'Cloud FinOps Optimization for Healthcare Provider',
      client: 'Regional Health Network',
      industry: 'Healthcare',
      challenge: 'Cloud costs were spiraling out of control with 40% waste and no visibility',
      solution: 'Implemented Cloud FinOps optimizer with AI-driven cost analysis and optimization recommendations',
      results: [
        'Reduced cloud costs by 35%',
        'Eliminated $1.8M in annual waste',
        'Improved resource utilization by 45%',
        'Achieved 99.5% cost predictability'
      ],
      technologies: ['Cloud FinOps Optimizer', 'Cost Analytics', 'Resource Optimization'],
      duration: '5 months',
      teamSize: '10 cloud specialists',
      icon: Cloud,
      color: 'from-orange-600 to-red-600',
      featured: false
    },
    {
      id: 5,
      title: 'AI-Powered Healthcare Analytics Platform',
      client: 'Metropolitan Medical Center',
      industry: 'Healthcare',
      challenge: 'Patient data was siloed across 15 systems with no unified insights for care optimization',
      solution: 'Built comprehensive AI healthcare analytics platform integrating all patient data sources',
      results: [
        'Improved patient outcomes by 25%',
        'Reduced readmission rates by 18%',
        'Saved $4.2M in operational costs',
        'Enhanced diagnostic accuracy by 31%'
      ],
      technologies: ['AI Healthcare Analytics', 'Data Integration', 'Predictive Modeling'],
      duration: '10 months',
      teamSize: '15 data scientists',
      icon: Heart,
      color: 'from-pink-600 to-rose-600',
      featured: false
    },
    {
      id: 6,
      title: 'Blockchain Supply Chain Solution for Retail Chain',
      client: 'Global Retail Group',
      industry: 'Retail',
      challenge: 'Supply chain transparency was limited with counterfeit products and tracking inefficiencies',
      solution: 'Developed blockchain-based supply chain platform with AI-powered verification and tracking',
      results: [
        'Eliminated 99.9% of counterfeit products',
        'Improved supply chain visibility by 95%',
        'Reduced logistics costs by 22%',
        'Enhanced customer trust scores by 40%'
      ],
      technologies: ['Blockchain', 'Supply Chain AI', 'IoT Tracking'],
      duration: '7 months',
      teamSize: '11 blockchain developers',
      icon: Globe,
      color: 'from-indigo-600 to-purple-600',
      featured: false
    }
  ];

  const industries = [
    { name: 'Financial Services', count: 12, icon: DollarSign },
    { name: 'Healthcare', count: 8, icon: Heart },
    { name: 'Manufacturing', count: 15, icon: Rocket },
    { name: 'Technology', count: 20, icon: Brain },
    { name: 'Retail', count: 6, icon: Users },
    { name: 'Energy', count: 4, icon: TrendingUp }
  ];

  const stats = [
    { number: '75+', label: 'Case Studies', icon: Award },
    { number: '95%', label: 'Client Satisfaction', icon: Star },
    { number: '$50M+', label: 'Client Savings', icon: DollarSign },
    { number: '12+', label: 'Industries Served', icon: Globe }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <SEO 
        title="Case Studies - Zion Tech Group"
        description="Explore real-world success stories and case studies showcasing how Zion Tech Group's AI solutions have transformed businesses across industries."
      />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-blue-500/10 to-purple-600/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-2xl mb-8">
              <TrendingUp className="w-10 h-10 text-cyan-400" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Success Stories
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Discover how Zion Tech Group's AI solutions have transformed businesses, 
              solved complex challenges, and delivered measurable results across industries.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                <span>75+ Success Stories</span>
              </div>
              <div className="flex items-center gap-2">
                <DollarSign className="w-4 h-4" />
                <span>$50M+ in Client Savings</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4" />
                <span>95% Client Satisfaction</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-xl flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-slate-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Featured Case Studies</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Explore our most impactful client success stories and learn how AI solutions 
              have delivered transformative results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.filter(cs => cs.featured).map((caseStudy, index) => (
              <motion.div
                key={caseStudy.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-400/30 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${caseStudy.color} flex items-center justify-center`}>
                    <caseStudy.icon className="w-8 h-8 text-white" />
                  </div>
                  <span className="px-3 py-1 bg-cyan-400/20 text-cyan-400 text-xs rounded-full border border-cyan-400/30">
                    Featured
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">{caseStudy.title}</h3>
                <div className="flex items-center gap-2 text-slate-400 mb-4">
                  <Users className="w-4 h-4" />
                  <span className="text-sm">{caseStudy.client}</span>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-white mb-2">Challenge</h4>
                    <p className="text-slate-300 text-sm">{caseStudy.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Solution</h4>
                    <p className="text-slate-300 text-sm">{caseStudy.solution}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-white mb-3">Results</h4>
                  <div className="space-y-2">
                    {caseStudy.results.map((result, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-slate-300 text-sm">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm text-slate-400 mb-4">
                  <span>Duration: {caseStudy.duration}</span>
                  <span>Team: {caseStudy.teamSize}</span>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {caseStudy.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-full border border-slate-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <button className="w-full px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 flex items-center justify-center gap-2">
                  Read Full Case Study
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Case Studies Grid */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">All Case Studies</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Browse our complete collection of client success stories across all industries and technologies.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((caseStudy, index) => (
              <motion.div
                key={caseStudy.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-cyan-400/30 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${caseStudy.color} flex items-center justify-center`}>
                    <caseStudy.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{caseStudy.title}</h3>
                    <p className="text-slate-400 text-sm">{caseStudy.client}</p>
                  </div>
                </div>

                <div className="space-y-3 mb-4">
                  <div>
                    <h4 className="font-medium text-white text-sm mb-1">Challenge</h4>
                    <p className="text-slate-300 text-xs leading-relaxed">{caseStudy.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-white text-sm mb-1">Solution</h4>
                    <p className="text-slate-300 text-xs leading-relaxed">{caseStudy.solution}</p>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-medium text-white text-sm mb-2">Key Results</h4>
                  <div className="space-y-1">
                    {caseStudy.results.slice(0, 2).map((result, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                        <span className="text-slate-300 text-xs">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-slate-400 mb-4">
                  <span>{caseStudy.duration}</span>
                  <span>{caseStudy.teamSize}</span>
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {caseStudy.technologies.slice(0, 2).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded border border-slate-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <button className="w-full px-4 py-2 border border-cyan-400 text-cyan-400 text-sm rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300 flex items-center justify-center gap-2">
                  View Details
                  <ArrowRight className="w-3 h-3" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Industries We Serve</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our AI solutions have delivered results across diverse industries, 
              from healthcare to manufacturing to financial services.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-slate-800/30 rounded-xl border border-slate-700/50 hover:border-cyan-400/30 transition-all duration-300"
              >
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-lg flex items-center justify-center">
                  <industry.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="font-semibold text-white mb-2">{industry.name}</h3>
                <p className="text-slate-400 text-sm">{industry.count} case studies</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Write Your Success Story?</h2>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Join the growing list of companies that have transformed their operations 
              with Zion Tech Group's AI solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                Start Your Project
              </a>
              <a
                href="/services-overview"
                className="px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                Explore Our Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
