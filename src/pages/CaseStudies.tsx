import React from 'react';
import { motion } from 'framer-motion';
import { 
  Target, 
  TrendingUp, 
  Users, 
  DollarSign, 
  Clock, 
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Building,
  Heart,
  Scale,
  Factory,
  ShoppingCart,
  Shield,
  Leaf,
  Rocket,
  GraduationCap,
  Globe,
  Zap,
  BarChart3,
  Lightbulb
} from 'lucide-react';
import { SEO } from '../components/SEO';

export default function CaseStudies() {
  const caseStudies = [
    {
      id: 1,
      title: 'Healthcare Provider Transformation',
      subtitle: 'AI-Powered Diagnostic System Implementation',
      industry: 'Healthcare',
      icon: Heart,
      color: 'from-red-500 to-pink-500',
      client: 'Major Hospital System',
      challenge: 'Long diagnostic wait times and inconsistent accuracy in medical imaging analysis',
      solution: 'Implemented AI-powered diagnostic system with machine learning algorithms for medical imaging',
      results: [
        '40% faster diagnosis times',
        '25% reduction in diagnostic costs',
        '95% accuracy improvement in image analysis',
        '30% increase in patient satisfaction'
      ],
      metrics: {
        timeframe: '6 months',
        investment: '$2.5M',
        roi: '340%',
        teamSize: '15 people'
      },
      featured: true,
      tags: ['AI Diagnostics', 'Healthcare', 'Machine Learning', 'Medical Imaging']
    },
    {
      id: 2,
      title: 'Financial Services Innovation',
      subtitle: 'AI-Driven Risk Management System',
      industry: 'Financial Services',
      icon: TrendingUp,
      color: 'from-emerald-500 to-green-500',
      client: 'Fortune 500 Bank',
      challenge: 'Manual risk assessment processes causing delays and inconsistent risk evaluation',
      solution: 'Developed comprehensive AI-driven risk management platform with real-time monitoring',
      results: [
        '60% faster risk assessment',
        '30% improved accuracy in risk prediction',
        '45% reduction in compliance violations',
        '$15M annual cost savings'
      ],
      metrics: {
        timeframe: '8 months',
        investment: '$4.2M',
        roi: '280%',
        teamSize: '22 people'
      },
      featured: true,
      tags: ['AI Risk Management', 'Financial Services', 'Compliance', 'Real-time Analytics']
    },
    {
      id: 3,
      title: 'Manufacturing Efficiency Revolution',
      subtitle: 'IoT and AI Optimization Platform',
      industry: 'Manufacturing',
      icon: Factory,
      color: 'from-orange-500 to-red-500',
      client: 'Global Manufacturing Company',
      challenge: 'Unplanned downtime and inefficient production processes affecting output and costs',
      solution: 'Deployed IoT sensors and AI-powered predictive maintenance system',
      results: [
        '35% reduction in unplanned downtime',
        '20% increase in overall productivity',
        '25% decrease in maintenance costs',
        '15% improvement in energy efficiency'
      ],
      metrics: {
        timeframe: '12 months',
        investment: '$3.8M',
        roi: '420%',
        teamSize: '18 people'
      },
      featured: true,
      tags: ['IoT', 'Predictive Maintenance', 'Manufacturing', 'Energy Efficiency']
    },
    {
      id: 4,
      title: 'Legal Services Automation',
      subtitle: 'AI-Powered Document Review System',
      industry: 'Legal Services',
      icon: Scale,
      color: 'from-blue-500 to-indigo-500',
      client: 'International Law Firm',
      challenge: 'Time-consuming manual document review processes and high operational costs',
      solution: 'Implemented AI-powered document review and contract analysis platform',
      results: [
        '70% faster document processing',
        '50% reduction in review costs',
        '90% accuracy in contract analysis',
        '40% increase in lawyer productivity'
      ],
      metrics: {
        timeframe: '5 months',
        investment: '$1.8M',
        roi: '380%',
        teamSize: '12 people'
      },
      featured: false,
      tags: ['AI Document Review', 'Legal Tech', 'Contract Analysis', 'Automation']
    },
    {
      id: 5,
      title: 'Retail Customer Experience',
      subtitle: 'AI-Powered Personalization Engine',
      industry: 'Retail & E-commerce',
      icon: ShoppingCart,
      color: 'from-pink-500 to-rose-500',
      client: 'National Retail Chain',
      challenge: 'Generic customer experiences and low conversion rates in online sales',
      solution: 'Built AI-powered personalization engine with customer behavior analysis',
      results: [
        '45% increase in conversion rates',
        '35% improvement in customer retention',
        '25% increase in average order value',
        '30% reduction in cart abandonment'
      ],
      metrics: {
        timeframe: '7 months',
        investment: '$2.1M',
        roi: '320%',
        teamSize: '16 people'
      },
      featured: false,
      tags: ['AI Personalization', 'E-commerce', 'Customer Analytics', 'Conversion Optimization']
    },
    {
      id: 6,
      title: 'Government Digital Transformation',
      subtitle: 'Smart City Infrastructure Platform',
      industry: 'Government & Public Sector',
      icon: Shield,
      color: 'from-slate-500 to-gray-500',
      client: 'Major City Government',
      challenge: 'Inefficient public services and lack of data-driven decision making',
      solution: 'Developed comprehensive smart city platform with IoT sensors and AI analytics',
      results: [
        '40% improvement in public service efficiency',
        '30% reduction in operational costs',
        '50% faster emergency response times',
        '25% increase in citizen satisfaction'
      ],
      metrics: {
        timeframe: '18 months',
        investment: '$8.5M',
        roi: '280%',
        teamSize: '35 people'
      },
      featured: false,
      tags: ['Smart City', 'IoT', 'Public Services', 'Data Analytics']
    },
    {
      id: 7,
      title: 'Energy Sustainability Platform',
      subtitle: 'AI-Powered Renewable Energy Management',
      industry: 'Energy & Sustainability',
      icon: Leaf,
      color: 'from-green-500 to-teal-500',
      client: 'Renewable Energy Company',
      challenge: 'Inefficient energy distribution and lack of predictive maintenance capabilities',
      solution: 'Implemented AI-powered energy management system with predictive analytics',
      results: [
        '30% improvement in energy distribution efficiency',
        '25% reduction in energy waste',
        '40% decrease in maintenance costs',
        '20% increase in renewable energy utilization'
      ],
      metrics: {
        timeframe: '10 months',
        investment: '$3.2M',
        roi: '360%',
        teamSize: '20 people'
      },
      featured: false,
      tags: ['Renewable Energy', 'AI Management', 'Predictive Analytics', 'Sustainability']
    },
    {
      id: 8,
      title: 'Space Technology Innovation',
      subtitle: 'AI-Powered Satellite Operations',
      industry: 'Space & Aerospace',
      icon: Rocket,
      color: 'from-indigo-500 to-purple-500',
      client: 'Space Technology Company',
      challenge: 'Complex satellite operations and mission planning requiring significant manual intervention',
      solution: 'Developed AI-powered satellite operations platform with autonomous decision making',
      results: [
        '50% reduction in mission planning time',
        '40% improvement in satellite performance',
        '35% decrease in operational costs',
        '60% increase in mission success rate'
      ],
      metrics: {
        timeframe: '14 months',
        investment: '$6.8M',
        roi: '310%',
        teamSize: '28 people'
      },
      featured: false,
      tags: ['Space Technology', 'AI Operations', 'Satellite Management', 'Autonomous Systems']
    }
  ];

  const industryStats = [
    { industry: 'Healthcare', projects: 24, avgROI: '320%', avgTimeframe: '7 months' },
    { industry: 'Financial Services', projects: 31, avgROI: '290%', avgTimeframe: '8 months' },
    { industry: 'Manufacturing', projects: 28, avgROI: '380%', avgTimeframe: '11 months' },
    { industry: 'Legal Services', projects: 18, avgROI: '350%', avgTimeframe: '6 months' },
    { industry: 'Retail & E-commerce', projects: 22, avgROI: '310%', avgTimeframe: '7 months' },
    { industry: 'Government', projects: 15, avgROI: '270%', avgTimeframe: '16 months' },
    { industry: 'Energy', projects: 19, avgROI: '340%', avgTimeframe: '10 months' },
    { industry: 'Space Technology', projects: 12, avgROI: '300%', avgTimeframe: '14 months' }
  ];

  const testimonials = [
    {
      quote: "Zion Tech Group transformed our diagnostic capabilities with their AI solution. The results exceeded our expectations.",
      author: "Dr. Sarah Chen",
      title: "Chief Medical Officer",
      company: "Major Hospital System",
      rating: 5
    },
    {
      quote: "The AI risk management system has revolutionized how we assess and manage financial risks. Incredible ROI and performance.",
      author: "Michael Rodriguez",
      title: "Chief Risk Officer",
      company: "Fortune 500 Bank",
      rating: 5
    },
    {
      quote: "Their IoT and AI solution has made our manufacturing operations more efficient than ever. The predictive maintenance is game-changing.",
      author: "Jennifer Kim",
      title: "Operations Director",
      company: "Global Manufacturing Company",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Case Studies - Zion Tech Group"
        description="Explore real-world success stories and implementation results from our clients across healthcare, finance, manufacturing, and other industries. See the transformative impact of our AI and technology solutions."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 via-emerald-500/20 to-teal-500/20"></div>
        <div className="container-responsive relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Success Stories
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Real-world results from organizations that have transformed their operations 
              with our cutting-edge AI and technology solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25"
              >
                Start Your Success Story
              </a>
              <a
                href="/request-quote"
                className="px-8 py-4 border border-green-400/50 text-green-400 font-semibold rounded-lg hover:bg-green-400/10 transition-all duration-300"
              >
                Request Quote
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Featured Case Studies
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our most impactful implementations that demonstrate the transformative power 
              of AI and innovative technology solutions.
            </p>
          </motion.div>

          <div className="space-y-12">
            {caseStudies.filter(cs => cs.featured).map((caseStudy, index) => (
              <motion.div
                key={caseStudy.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-xl rounded-3xl border border-green-400/30 p-8 hover:border-green-400/50 transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Left Column - Overview */}
                  <div className="lg:col-span-1">
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${caseStudy.color} rounded-xl flex items-center justify-center`}>
                        <caseStudy.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <span className="px-3 py-1 bg-green-500/20 text-green-400 text-sm font-medium rounded-full">
                          {caseStudy.industry}
                        </span>
                        <h3 className="text-2xl font-bold text-white mt-2">{caseStudy.title}</h3>
                        <p className="text-gray-400 text-sm">{caseStudy.subtitle}</p>
                      </div>
                    </div>

                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="text-lg font-semibold text-green-400 mb-2">Client</h4>
                        <p className="text-white">{caseStudy.client}</p>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-green-400 mb-2">Challenge</h4>
                        <p className="text-gray-300 text-sm">{caseStudy.challenge}</p>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-green-400 mb-2">Solution</h4>
                        <p className="text-gray-300 text-sm">{caseStudy.solution}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {caseStudy.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-slate-700/50 text-gray-300 text-xs rounded-full border border-slate-600"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Middle Column - Results */}
                  <div className="lg:col-span-1">
                    <h4 className="text-xl font-bold text-white mb-4">Key Results</h4>
                    <div className="space-y-3">
                      {caseStudy.results.map((result, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                          <span className="text-gray-300">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Column - Metrics */}
                  <div className="lg:col-span-1">
                    <h4 className="text-xl font-bold text-white mb-4">Project Metrics</h4>
                    <div className="space-y-4">
                      <div className="bg-slate-700/30 rounded-lg p-4">
                        <div className="text-3xl font-bold text-green-400">{caseStudy.metrics.roi}</div>
                        <div className="text-sm text-gray-400">Return on Investment</div>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-slate-700/30 rounded-lg p-3">
                          <div className="text-lg font-bold text-white">{caseStudy.metrics.timeframe}</div>
                          <div className="text-xs text-gray-400">Timeline</div>
                        </div>
                        <div className="bg-slate-700/30 rounded-lg p-3">
                          <div className="text-lg font-bold text-white">{caseStudy.metrics.investment}</div>
                          <div className="text-xs text-gray-400">Investment</div>
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

      {/* Industry Statistics */}
      <section className="py-20 bg-slate-800/30">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Industry Impact
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our solutions have delivered measurable results across diverse industries, 
              with consistent ROI and performance improvements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industryStats.map((stat, index) => (
              <motion.div
                key={stat.industry}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 p-6 text-center hover:border-green-400/50 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-white mb-4">{stat.industry}</h3>
                <div className="space-y-3">
                  <div>
                    <div className="text-2xl font-bold text-green-400">{stat.projects}</div>
                    <div className="text-sm text-gray-400">Projects</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-white">{stat.avgROI}</div>
                    <div className="text-sm text-gray-400">Avg ROI</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-gray-300">{stat.avgTimeframe}</div>
                    <div className="text-sm text-gray-400">Avg Timeline</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Case Studies Grid */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              All Case Studies
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Browse our complete collection of success stories and implementation results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((caseStudy, index) => (
              <motion.div
                key={caseStudy.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 p-6 hover:border-green-400/50 transition-all duration-300 hover:transform hover:scale-105 group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${caseStudy.color} rounded-lg flex items-center justify-center`}>
                    <caseStudy.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs font-medium rounded-full">
                      {caseStudy.industry}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors">
                  {caseStudy.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">{caseStudy.subtitle}</p>

                <div className="space-y-3 mb-6">
                  <div className="text-sm">
                    <span className="text-gray-500">Client: </span>
                    <span className="text-white">{caseStudy.client}</span>
                  </div>
                  <div className="text-sm">
                    <span className="text-gray-500">ROI: </span>
                    <span className="text-green-400 font-semibold">{caseStudy.metrics.roi}</span>
                  </div>
                  <div className="text-sm">
                    <span className="text-gray-500">Timeline: </span>
                    <span className="text-white">{caseStudy.metrics.timeframe}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {caseStudy.tags.slice(0, 3).map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href="#"
                  className="inline-flex items-center text-green-400 hover:text-green-300 font-medium group-hover:translate-x-1 transition-all duration-300"
                >
                  Read Full Case Study
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-800/30">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Client Testimonials
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Hear directly from our clients about their experience and the results they've achieved.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 p-8 text-center hover:border-green-400/50 transition-all duration-300"
              >
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-gray-300 mb-6 italic">
                  "{testimonial.quote}"
                </blockquote>
                
                <div>
                  <div className="font-semibold text-white">{testimonial.author}</div>
                  <div className="text-gray-400 text-sm">{testimonial.title}</div>
                  <div className="text-green-400 text-sm">{testimonial.company}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-3xl border border-green-400/30 p-12 text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join the hundreds of organizations that have transformed their operations 
              and achieved remarkable results with our solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25"
              >
                Start Your Project
              </a>
              <a
                href="/request-quote"
                className="px-8 py-4 border border-green-400 text-green-400 font-semibold rounded-lg hover:bg-green-400/10 transition-all duration-300"
              >
                Get Custom Quote
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
