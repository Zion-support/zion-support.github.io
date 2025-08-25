import React from 'react';
import Head from 'next/head';
<<<<<<< HEAD
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  TrendingUp, Users, Building, Globe, ArrowRight, 
  Brain, Atom, Shield, Rocket, Star,
  CheckCircle, Award, Sparkles, ExternalLink,
  BarChart3, Clock, Target
} from 'lucide-react';

export default function CaseStudies() {
  const caseStudies = [
    {
      title: 'Global Bank Transforms Operations with AI Consciousness Platform',
      company: 'Fortune 500 Financial Institution',
      industry: 'Banking & Finance',
      challenge: 'Complex customer service operations with high volume and complex queries requiring human-like understanding and emotional intelligence.',
      solution: 'Implemented our AI Consciousness Evolution Pro platform to handle customer inquiries with genuine emotional intelligence and context awareness.',
      results: [
        '85% reduction in customer service response time',
        '92% improvement in customer satisfaction scores',
        '60% reduction in operational costs',
        '24/7 autonomous customer service operation'
      ],
      metrics: {
        customers: '2M+',
        improvement: '85%',
        timeframe: '6 months'
      },
      featured: true,
      slug: 'global-bank-ai-consciousness-transformation'
    },
    {
      title: 'Healthcare Provider Achieves Breakthrough with Quantum AI Fusion',
      company: 'Leading Medical Research Center',
      industry: 'Healthcare & Research',
      challenge: 'Complex drug discovery processes requiring massive computational power and advanced pattern recognition for molecular interactions.',
      solution: 'Deployed our Quantum AI Fusion Platform to accelerate drug discovery through quantum-enhanced AI algorithms.',
      results: [
        '10x faster drug discovery process',
        '95% accuracy in molecular interaction prediction',
        'Discovery of 3 new potential drug candidates',
        'Significant cost savings in research operations'
      ],
      metrics: {
        customers: '500K+',
        improvement: '10x',
        timeframe: '12 months'
      },
      featured: false,
      slug: 'healthcare-quantum-ai-drug-discovery'
    },
    {
      title: 'Manufacturing Giant Optimizes Operations with Autonomous Platform',
      company: 'International Manufacturing Corporation',
      industry: 'Manufacturing',
      challenge: 'Complex supply chain management and production optimization requiring real-time decision making across multiple facilities.',
      solution: 'Implemented our Autonomous Business Operations Platform to automate and optimize all aspects of manufacturing operations.',
      results: [
        '40% increase in production efficiency',
        '30% reduction in supply chain costs',
        '99.9% uptime across all facilities',
        'Real-time autonomous decision making'
      ],
      metrics: {
        customers: '1M+',
        improvement: '40%',
        timeframe: '8 months'
      },
      featured: false,
      slug: 'manufacturing-autonomous-operations-optimization'
    },
    {
      title: 'Tech Startup Scales with Quantum Neural Networks',
      company: 'AI-Powered SaaS Startup',
      industry: 'Technology',
      challenge: 'Limited computational resources for training advanced AI models and processing large datasets for machine learning applications.',
      solution: 'Integrated our Quantum Neural Network Platform to provide quantum-enhanced AI capabilities and scalable processing power.',
      results: [
        '100x increase in AI model training speed',
        'Unlimited scalability for AI workloads',
        'Competitive advantage in AI capabilities',
        'Successful Series B funding round'
      ],
      metrics: {
        customers: '100K+',
        improvement: '100x',
        timeframe: '4 months'
      },
      featured: false,
      slug: 'tech-startup-quantum-neural-scaling'
    },
    {
      title: 'Government Agency Secures Infrastructure with AI Asset Management',
      company: 'Federal Cybersecurity Agency',
      industry: 'Government & Security',
      challenge: 'Managing and securing thousands of IT assets across multiple locations with real-time threat detection and compliance monitoring.',
      solution: 'Deployed our AI-Powered IT Asset Management platform with advanced security features and compliance automation.',
      results: [
        '100% asset visibility and tracking',
        'Real-time threat detection and response',
        'Automated compliance reporting',
        'Zero security breaches in 18 months'
      ],
      metrics: {
        customers: '50K+',
        improvement: '100%',
        timeframe: '10 months'
      },
      featured: false,
      slug: 'government-ai-asset-management-security'
    },
    {
      title: 'Retail Chain Revolutionizes Customer Experience with AI',
      company: 'National Retail Corporation',
      industry: 'Retail & E-commerce',
      challenge: 'Personalizing customer experiences across multiple channels while optimizing inventory and supply chain operations.',
      solution: 'Integrated multiple AI platforms including AI Consciousness, Quantum AI Fusion, and Autonomous Operations for comprehensive retail transformation.',
      results: [
        '150% increase in customer engagement',
        '45% improvement in inventory turnover',
        'Personalized shopping experiences',
        'Omnichannel customer service excellence'
      ],
      metrics: {
        customers: '5M+',
        improvement: '150%',
        timeframe: '14 months'
      },
      featured: false,
      slug: 'retail-chain-ai-customer-experience-revolution'
    }
  ];

  const industries = [
    { name: 'All Industries', count: caseStudies.length, active: true },
    { name: 'Banking & Finance', count: 1, active: false },
    { name: 'Healthcare & Research', count: 1, active: false },
    { name: 'Manufacturing', count: 1, active: false },
    { name: 'Technology', count: 1, active: false },
    { name: 'Government & Security', count: 1, active: false },
    { name: 'Retail & E-commerce', count: 1, active: false }
  ];

  return (
    <>
      <Head>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Discover how Zion Tech Group's revolutionary AI and quantum computing solutions have transformed businesses across industries. Real success stories with measurable results." />
        <meta name="keywords" content="case studies, success stories, client results, AI transformation, quantum computing success, business transformation" />
        <link rel="canonical" href="https://ziontechgroup.com/case-studies" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 text-green-300 text-sm font-medium mb-6">
                <Star className="w-4 h-4 mr-2" />
                Success Stories
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent mb-6">
                Case Studies
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
                Discover how our revolutionary AI and quantum computing solutions have transformed 
                businesses across industries. Real success stories with measurable results.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Featured Case Study */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-white mb-8">Featured Success Story</h2>
              
              {caseStudies.filter(study => study.featured).map((study, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-8 hover:border-green-500/50 transition-all duration-300">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <div className="flex items-center space-x-4 mb-4">
                        <span className="px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-sm font-medium rounded-full">
                          {study.industry}
                        </span>
                        <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium rounded-full">
                          Featured
                        </span>
                      </div>
                      
                      <h3 className="text-3xl font-bold text-white mb-4">{study.title}</h3>
                      <p className="text-gray-400 text-lg mb-4">{study.company}</p>
                      
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-2">Challenge:</h4>
                        <p className="text-gray-300">{study.challenge}</p>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-2">Solution:</h4>
                        <p className="text-gray-300">{study.solution}</p>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-2">Results:</h4>
                        <ul className="space-y-2">
                          {study.results.map((result, resultIndex) => (
                            <li key={resultIndex} className="flex items-start space-x-3">
                              <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-300">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <Link 
                        href={`/case-studies/${study.slug}`}
                        className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-lg hover:scale-105 transition-all duration-200"
                      >
                        Read Full Case Study
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                    
                    <div className="space-y-6">
                      <div className="bg-gradient-to-br from-gray-700/50 to-gray-800/50 rounded-xl p-6">
                        <h4 className="text-lg font-semibold text-white mb-4">Key Metrics</h4>
                        <div className="grid grid-cols-1 gap-4">
                          <div className="text-center">
                            <div className="text-3xl font-bold text-green-400">{study.metrics.customers}</div>
                            <div className="text-gray-400 text-sm">Customers Served</div>
                          </div>
                          <div className="text-center">
                            <div className="text-3xl font-bold text-blue-400">{study.metrics.improvement}</div>
                            <div className="text-gray-400 text-sm">Performance Improvement</div>
                          </div>
                          <div className="text-center">
                            <div className="text-3xl font-bold text-purple-400">{study.metrics.timeframe}</div>
                            <div className="text-gray-400 text-sm">Implementation Time</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Industry Filter */}
        <section className="py-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {industries.map((industry, index) => (
                <button
                  key={index}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                    industry.active
                      ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white'
                      : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-700/50'
                  }`}
                >
                  {industry.name} ({industry.count})
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-white mb-8">More Success Stories</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {caseStudies.filter(study => !study.featured).map((study, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-xl p-6 hover:border-green-500/50 transition-all duration-300"
                  >
                    <div className="mb-4">
                      <span className="px-3 py-1 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 text-green-300 text-xs font-medium rounded-full">
                        {study.industry}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">{study.title}</h3>
                    <p className="text-gray-400 text-sm mb-4">{study.company}</p>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-white mb-2">Challenge:</h4>
                      <p className="text-gray-300 text-sm line-clamp-3">{study.challenge}</p>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-white mb-2">Key Results:</h4>
                      <ul className="space-y-1">
                        {study.results.slice(0, 2).map((result, resultIndex) => (
                          <li key={resultIndex} className="flex items-start space-x-2">
                            <CheckCircle className="w-3 h-3 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-300 text-xs">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-center">
                        <div className="text-lg font-bold text-green-400">{study.metrics.improvement}</div>
                        <div className="text-gray-400 text-xs">Improvement</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-blue-400">{study.metrics.timeframe}</div>
                        <div className="text-gray-400 text-xs">Timeframe</div>
                      </div>
                    </div>
                    
                    <Link 
                      href={`/case-studies/${study.slug}`}
                      className="inline-flex items-center text-green-400 hover:text-green-300 text-sm font-medium transition-colors duration-200"
                    >
                      Read Full Case Study
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Write Your Success Story?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join the companies that have already transformed their business with our 
                revolutionary AI and quantum computing technology.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-lg hover:scale-105 transition-all duration-200 transform hover:scale-105">
                  Start Your Transformation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link href="/contact" className="inline-flex items-center px-8 py-4 border border-green-500/30 text-green-300 font-semibold rounded-lg hover:bg-green-500/10 transition-all duration-200">
                  Schedule Consultation
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
=======
import Layout from '../components/layout/Layout';

export default function CaseStudiesPage() {
	return (
		<Layout>
			<Head>
				<title>Case Studies | Zion Tech Group</title>
				<link rel="canonical" href="https://ziontechgroup.com/case-studies" />
				<meta name="description" content="Proven outcomes across AI, IT, and micro SaaS deployments." />
			</Head>
			<section className="container mx-auto px-4 py-24">
				<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">Case Studies</h1>
				<p className="text-gray-300">Proven outcomes and detailed success stories. Coming soon.</p>
			</section>
		</Layout>
	);
}
>>>>>>> autobot/2025-08-24T03-49-38-332Z
