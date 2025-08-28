import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
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
  Building2,
  Heart,
  Shield,
  Cloud,
  Brain,
  Rocket,
  Leaf,
  Scale,
  Factory,
  ShoppingCart,
  GraduationCap,
  BarChart3,
  Zap,
  Globe,
  Cpu,
  Lock,
  Database
} from 'lucide-react';

export default function CaseStudies() {
  const featuredCaseStudies = [
    {
      title: 'Enterprise Digital Transformation',
      company: 'Fortune 500 Manufacturing',
      industry: 'Manufacturing',
      duration: '18 months',
      results: [
        '40% reduction in operational costs',
        '60% improvement in process efficiency',
        '$50M annual savings achieved',
        'Complete legacy system modernization'
      ],
      icon: Building2,
      color: 'from-blue-500 to-cyan-500',
      featured: true,
      href: '/case-studies/enterprise-digital-transformation'
    },
    {
      title: 'AI Implementation Success',
      company: 'Global Healthcare Network',
      industry: 'Healthcare',
      duration: '12 months',
      results: [
        '35% improvement in diagnostic accuracy',
        '50% reduction in patient wait times',
        'Enhanced patient care outcomes',
        'Streamlined administrative processes'
      ],
      icon: Heart,
      color: 'from-red-500 to-pink-500',
      featured: true,
      href: '/case-studies/ai-healthcare-implementation'
    },
    {
      title: 'Cybersecurity Incident Response',
      company: 'Financial Services Institution',
      industry: 'Financial Services',
      duration: '6 months',
      results: [
        'Zero data breaches in 12 months',
        '99.9% threat detection accuracy',
        'Compliance with all regulations',
        'Enhanced customer trust and security'
      ],
      icon: Shield,
      color: 'from-orange-500 to-red-500',
      featured: true,
      href: '/case-studies/cybersecurity-incident-response'
    },
    {
      title: 'Cloud Migration Results',
      company: 'E-commerce Platform',
      industry: 'Retail & E-commerce',
      duration: '9 months',
      results: [
        '80% reduction in infrastructure costs',
        '99.9% uptime achieved',
        '5x faster deployment cycles',
        'Global scalability enabled'
      ],
      icon: Cloud,
      color: 'from-cyan-500 to-blue-500',
      featured: true,
      href: '/case-studies/cloud-migration-results'
    }
  ];

  const industryCaseStudies = [
    {
      industry: 'Healthcare',
      icon: Heart,
      color: 'from-red-500 to-pink-500',
      caseStudies: [
        'AI-Powered Diagnostic Platform',
        'Electronic Health Records System',
        'Telemedicine Implementation',
        'Patient Data Security Enhancement'
      ]
    },
    {
      industry: 'Financial Services',
      icon: DollarSign,
      color: 'from-emerald-500 to-green-500',
      caseStudies: [
        'AI Trading Platform Development',
        'Risk Management System',
        'Regulatory Compliance Automation',
        'Digital Banking Transformation'
      ]
    },
    {
      industry: 'Manufacturing',
      icon: Factory,
      color: 'from-orange-500 to-red-500',
      caseStudies: [
        'Industry 4.0 Implementation',
        'Supply Chain Optimization',
        'Predictive Maintenance System',
        'Quality Control Automation'
      ]
    },
    {
      industry: 'Retail & E-commerce',
      icon: ShoppingCart,
      color: 'from-purple-500 to-indigo-500',
      caseStudies: [
        'Customer Experience Platform',
        'Inventory Management System',
        'Personalization Engine',
        'Omnichannel Integration'
      ]
    },
    {
      industry: 'Government & Public Sector',
      icon: Shield,
      color: 'from-indigo-500 to-purple-500',
      caseStudies: [
        'Digital Government Services',
        'Citizen Experience Platform',
        'Cybersecurity Infrastructure',
        'Data Analytics & Reporting'
      ]
    },
    {
      industry: 'Education & Training',
      icon: GraduationCap,
      color: 'from-blue-500 to-cyan-500',
      caseStudies: [
        'Digital Learning Platform',
        'Student Management System',
        'Virtual Reality Training',
        'Assessment & Analytics'
      ]
    }
  ];

  const metrics = [
    {
      number: '150+',
      label: 'Successful Projects',
      icon: CheckCircle,
      color: 'from-green-500 to-emerald-500'
    },
    {
      number: '$2.5B+',
      label: 'Value Delivered',
      icon: DollarSign,
      color: 'from-emerald-500 to-green-500'
    },
    {
      number: '98%',
      label: 'Client Satisfaction',
      icon: Star,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      number: '24/7',
      label: 'Support Available',
      icon: Clock,
      color: 'from-blue-500 to-cyan-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Case Studies - Zion Tech Group"
        description="Explore real-world success stories and implementation results from our clients across various industries. See how our technology solutions drive measurable business outcomes."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="container-responsive relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Real-World
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Success Stories
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              Discover how our technology solutions have transformed businesses across industries, delivering measurable results and driving growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                Start Your Success Story
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 font-semibold rounded-xl transition-all duration-300"
              >
                Explore Our Services
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-16 relative">
        <div className="container-responsive">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${metric.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <metric.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{metric.number}</div>
                <div className="text-gray-400">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-20 relative">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Featured Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our most impactful case studies that demonstrate the transformative power of our technology solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredCaseStudies.map((caseStudy, index) => (
              <motion.div
                key={caseStudy.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Link
                  to={caseStudy.href}
                  className="block p-8 bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105 hover:bg-slate-700/50"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${caseStudy.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <caseStudy.icon className="w-8 h-8 text-white" />
                    </div>
                    {caseStudy.featured && (
                      <Star className="w-6 h-6 text-cyan-400" />
                    )}
                  </div>
                  
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-slate-700/50 text-sm text-cyan-400 rounded-md mb-2">
                      {caseStudy.industry}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {caseStudy.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-4 text-sm">
                    <strong>{caseStudy.company}</strong> • {caseStudy.duration}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {caseStudy.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                        {result}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                    <span className="text-sm font-medium">Read Full Case Study</span>
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Case Studies */}
      <section className="py-20 bg-slate-800/30 relative">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Industry Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore case studies organized by industry to find relevant examples for your business sector.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industryCaseStudies.map((industry, index) => (
              <motion.div
                key={industry.industry}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="p-6 bg-slate-800/50 backdrop-blur-xl rounded-xl border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300">
                  <div className={`w-12 h-12 bg-gradient-to-br ${industry.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <industry.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {industry.industry}
                  </h3>
                  
                  <ul className="space-y-2 mb-4">
                    {industry.caseStudies.map((caseStudy, caseIndex) => (
                      <li key={caseIndex} className="text-sm text-gray-400 hover:text-cyan-400 transition-colors cursor-pointer">
                        • {caseStudy}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors text-sm font-medium">
                    View All {industry.industry} Cases
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join the ranks of successful companies that have transformed their business with our technology solutions. Let's discuss how we can help you achieve similar results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 font-semibold rounded-xl transition-all duration-300"
              >
                Get Free Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
