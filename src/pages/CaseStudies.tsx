import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { 
  TrendingUp, 
  Users, 
  DollarSign, 
  Clock, 
  Target, 
  Award,
  Star,
  CheckCircle,
  ArrowRight,
  Building,
  Globe,
  Zap,
  Brain,
  Shield,
  Cloud,
  Rocket
} from 'lucide-react';

export default function CaseStudies() {
  const caseStudies = [
    {
      id: 'healthcare-ai-diagnostics',
      title: 'AI-Powered Healthcare Diagnostics Platform',
      client: 'Major Regional Hospital Network',
      industry: 'Healthcare',
      challenge: 'Reduce diagnostic errors and improve patient outcomes through faster, more accurate medical imaging analysis.',
      solution: 'Implemented custom AI diagnostic platform using deep learning algorithms trained on millions of medical images.',
      results: [
        '95% reduction in diagnostic errors',
        '60% faster diagnosis turnaround time',
        'Improved patient satisfaction scores by 40%',
        'Annual cost savings of $2.5M'
      ],
      metrics: {
        accuracy: '98.5%',
        timeReduction: '60%',
        costSavings: '$2.5M',
        roi: '450%'
      },
      technologies: ['AI/ML', 'Computer Vision', 'Cloud Computing', 'HIPAA Compliance'],
      icon: Brain,
      color: 'from-purple-600 to-pink-600',
      featured: true
    },
    {
      id: 'financial-ai-compliance',
      title: 'AI Compliance Automation for Financial Services',
      client: 'Fortune 500 Bank',
      industry: 'Financial Services',
      challenge: 'Automate regulatory compliance processes while reducing manual errors and ensuring audit readiness.',
      solution: 'Developed AI-powered compliance platform that automatically monitors transactions, generates reports, and flags potential issues.',
      results: [
        '90% reduction in compliance processing time',
        '99.9% accuracy in regulatory reporting',
        'Eliminated $500K in annual compliance fines',
        'Reduced compliance team workload by 70%'
      ],
      metrics: {
        timeReduction: '90%',
        accuracy: '99.9%',
        costSavings: '$500K',
        roi: '320%'
      },
      technologies: ['AI/ML', 'Natural Language Processing', 'Blockchain', 'RegTech'],
      icon: Shield,
      color: 'from-green-600 to-emerald-600',
      featured: true
    },
    {
      id: 'manufacturing-iot',
      title: 'Smart Manufacturing IoT Platform',
      client: 'Global Manufacturing Corporation',
      industry: 'Manufacturing',
      challenge: 'Optimize production efficiency and reduce downtime through real-time monitoring and predictive maintenance.',
      solution: 'Deployed comprehensive IoT solution with edge computing, real-time analytics, and AI-powered predictive maintenance.',
      results: [
        '25% increase in production efficiency',
        '40% reduction in unplanned downtime',
        '15% reduction in energy consumption',
        'ROI achieved in 18 months'
      ],
      metrics: {
        efficiency: '25%',
        downtime: '40%',
        energy: '15%',
        roi: '280%'
      },
      technologies: ['IoT', 'Edge Computing', 'AI Analytics', 'Predictive Maintenance'],
      icon: Zap,
      color: 'from-blue-600 to-cyan-600',
      featured: false
    },
    {
      id: 'retail-ai-analytics',
      title: 'AI-Powered Retail Analytics Platform',
      client: 'National Retail Chain',
      industry: 'Retail',
      challenge: 'Improve customer experience and increase sales through personalized recommendations and inventory optimization.',
      solution: 'Built AI analytics platform that analyzes customer behavior, optimizes inventory, and provides personalized recommendations.',
      results: [
        '35% increase in average order value',
        '20% improvement in inventory turnover',
        '45% increase in customer retention',
        '$3.2M additional annual revenue'
      ],
      metrics: {
        orderValue: '35%',
        inventory: '20%',
        retention: '45%',
        revenue: '$3.2M'
      },
      technologies: ['AI/ML', 'Big Data Analytics', 'Recommendation Engine', 'Cloud Platform'],
      icon: TrendingUp,
      color: 'from-orange-600 to-red-600',
      featured: false
    },
    {
      id: 'logistics-automation',
      title: 'Logistics Automation with AI',
      client: 'International Logistics Company',
      industry: 'Logistics',
      challenge: 'Optimize route planning, reduce delivery times, and improve customer satisfaction through intelligent automation.',
      solution: 'Implemented AI-powered logistics platform with route optimization, demand forecasting, and real-time tracking.',
      results: [
        '30% reduction in delivery times',
        '25% decrease in fuel costs',
        'Improved customer satisfaction by 50%',
        'Annual savings of $1.8M'
      ],
      metrics: {
        delivery: '30%',
        fuel: '25%',
        satisfaction: '50%',
        savings: '$1.8M'
      },
      technologies: ['AI/ML', 'Route Optimization', 'Predictive Analytics', 'Real-time Tracking'],
      icon: Rocket,
      color: 'from-indigo-600 to-purple-600',
      featured: false
    },
    {
      id: 'energy-optimization',
      title: 'Energy Grid Optimization Platform',
      client: 'Regional Energy Provider',
      industry: 'Energy',
      challenge: 'Optimize energy distribution, reduce waste, and integrate renewable energy sources efficiently.',
      solution: 'Developed smart grid platform using AI to predict energy demand, optimize distribution, and manage renewable integration.',
      results: [
        '20% reduction in energy waste',
        '15% improvement in renewable energy utilization',
        'Reduced operational costs by 25%',
        'Enhanced grid reliability by 99.9%'
      ],
      metrics: {
        waste: '20%',
        renewable: '15%',
        costs: '25%',
        reliability: '99.9%'
      },
      technologies: ['AI/ML', 'Smart Grid', 'IoT Sensors', 'Predictive Analytics'],
      icon: Cloud,
      color: 'from-teal-600 to-green-600',
      featured: false
    }
  ];

  const industries = [
    'Healthcare', 'Financial Services', 'Manufacturing', 'Retail', 'Logistics', 'Energy', 'Technology', 'Education'
  ];

  const technologies = [
    'AI/ML', 'IoT', 'Cloud Computing', 'Blockchain', 'Edge Computing', 'Big Data', 'Cybersecurity', 'DevOps'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Case Studies - Zion Tech Group"
        description="Explore real-world success stories and business outcomes from our AI and technology implementations across various industries."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Success <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Stories</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Discover how we've transformed businesses across industries with cutting-edge AI and technology solutions. 
              Real results, measurable outcomes, and lasting impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                View All Case Studies
              </button>
              <button className="px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Request Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Featured Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our most impactful implementations that demonstrate the transformative power of AI and technology.
            </p>
          </motion.div>

          <div className="space-y-12">
            {caseStudies.filter(study => study.featured).map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-r from-slate-800/80 to-slate-700/80 rounded-2xl p-8 border border-cyan-400/30"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Left Column - Content */}
                  <div className="lg:col-span-2">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${study.color} flex items-center justify-center`}>
                        <study.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <span className="text-sm text-gray-400">{study.industry}</span>
                        <h3 className="text-2xl font-bold text-white">{study.title}</h3>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-2">The Challenge</h4>
                      <p className="text-gray-300">{study.challenge}</p>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-2">Our Solution</h4>
                      <p className="text-gray-300">{study.solution}</p>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-2">Key Results</h4>
                      <ul className="space-y-2">
                        {study.results.map((result, idx) => (
                          <li key={idx} className="flex items-center space-x-2 text-gray-300">
                            <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                            <span>{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-slate-700/50 text-cyan-400 text-sm rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Right Column - Metrics */}
                  <div className="lg:col-span-1">
                    <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
                      <h4 className="text-lg font-semibold text-white mb-4 text-center">Impact Metrics</h4>
                      <div className="space-y-4">
                        {Object.entries(study.metrics).map(([key, value]) => (
                          <div key={key} className="text-center">
                            <div className="text-2xl font-bold text-cyan-400">{value}</div>
                            <div className="text-sm text-gray-400 capitalize">
                              {key.replace(/([A-Z])/g, ' $1').trim()}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Case Studies Grid */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              All Case Studies
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Browse our complete collection of success stories across different industries and technologies.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.filter(study => !study.featured).map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-400/20"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${study.color} flex items-center justify-center`}>
                    <study.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-400">{study.industry}</span>
                    <h3 className="text-lg font-bold text-white">{study.title}</h3>
                  </div>
                </div>
                
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">{study.challenge}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Key Results</h4>
                  <ul className="space-y-1">
                    {study.results.slice(0, 2).map((result, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-gray-300 text-sm">
                        <CheckCircle className="w-3 h-3 text-cyan-400 flex-shrink-0" />
                        <span className="line-clamp-1">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {study.technologies.slice(0, 2).map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-slate-700/50 text-cyan-400 text-xs rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <button className="text-cyan-400 hover:text-cyan-300 transition-colors">
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Focus */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our solutions have delivered measurable results across diverse industries and business challenges.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={industry}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center">
                  <Building className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white">{industry}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Used */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Technologies We Master
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Cutting-edge technologies that power our innovative solutions and drive business transformation.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white">{tech}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Let's discuss how our AI and technology solutions can transform your business 
              and deliver measurable results like the ones you've seen here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                Schedule Consultation
              </button>
              <button className="px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Download Case Study PDF
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
