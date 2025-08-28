import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { 
  Target, 
  TrendingUp, 
  Users, 
  DollarSign, 
  Clock, 
  ArrowRight,
  Star,
  CheckCircle,
  Building,
  Heart,
  Scale,
  Rocket,
  Globe,
  Leaf,
  Shield,
  Brain,
  Cloud,
  Database,
  Network,
  Zap,
  Award,
  BarChart3,
  Eye,
  Lock,
  Cpu
} from 'lucide-react';

export default function CaseStudies() {
  const caseStudies = [
    {
      id: 'healthcare-ai',
      title: 'Healthcare AI Implementation',
      subtitle: '40% Improvement in Patient Outcomes',
      industry: 'Healthcare',
      company: 'Metro Health Systems',
      challenge: 'Manual diagnostic processes were time-consuming and error-prone, leading to delayed treatments and inconsistent patient care.',
      solution: 'Implemented AI-powered diagnostic tools with machine learning algorithms for early disease detection and treatment recommendations.',
      results: [
        '40% improvement in patient outcomes',
        '60% reduction in diagnostic time',
        '85% accuracy in early disease detection',
        '30% cost savings in diagnostic procedures'
      ],
      technologies: ['AI Diagnostics', 'Machine Learning', 'Computer Vision', 'Predictive Analytics'],
      icon: Heart,
      color: 'from-red-500 to-pink-500',
      featured: true,
      duration: '6 months',
      team: '8 developers',
      roi: '300%'
    },
    {
      id: 'financial-transformation',
      title: 'Financial Services Digital Transformation',
      subtitle: '1000x Performance Improvement',
      industry: 'Financial Services',
      company: 'Quantum Financial Group',
      challenge: 'Legacy systems were unable to handle increasing transaction volumes, causing delays and customer dissatisfaction.',
      solution: 'Complete digital transformation including cloud migration, AI-powered fraud detection, and real-time analytics.',
      results: [
        '1000x performance improvement',
        '99.99% uptime achieved',
        '50% reduction in fraud cases',
        '200% increase in customer satisfaction'
      ],
      technologies: ['Cloud Migration', 'AI Fraud Detection', 'Real-time Analytics', 'Blockchain'],
      icon: TrendingUp,
      color: 'from-emerald-500 to-green-500',
      featured: true,
      duration: '12 months',
      team: '15 developers',
      roi: '500%'
    },
    {
      id: 'manufacturing-iot',
      title: 'Manufacturing IoT Success',
      subtitle: 'Smart Factory Implementation',
      industry: 'Manufacturing',
      company: 'Global Manufacturing Corp',
      challenge: 'Traditional manufacturing processes lacked real-time monitoring and predictive maintenance capabilities.',
      solution: 'Implemented IoT sensors, edge computing, and AI-powered predictive maintenance systems.',
      results: [
        '25% reduction in downtime',
        '35% improvement in efficiency',
        '20% cost savings in maintenance',
        'Real-time production monitoring'
      ],
      technologies: ['IoT Sensors', 'Edge Computing', 'Predictive Maintenance', 'AI Analytics'],
      icon: Building,
      color: 'from-gray-500 to-slate-500',
      featured: false,
      duration: '8 months',
      team: '12 developers',
      roi: '250%'
    },
    {
      id: 'government-digital',
      title: 'Government Digital Services',
      subtitle: 'Citizen Service Automation',
      industry: 'Government',
      company: 'City of Innovation',
      challenge: 'Citizen services were paper-based and required in-person visits, causing long wait times and inefficiency.',
      solution: 'Digital transformation platform with AI-powered chatbots, automated workflows, and mobile applications.',
      results: [
        '80% reduction in wait times',
        '90% of services now online',
        '60% cost savings in operations',
        '95% citizen satisfaction rate'
      ],
      technologies: ['AI Chatbots', 'Workflow Automation', 'Mobile Apps', 'Cloud Platform'],
      icon: Shield,
      color: 'from-indigo-500 to-purple-500',
      featured: false,
      duration: '10 months',
      team: '20 developers',
      roi: '400%'
    },
    {
      id: 'retail-ecommerce',
      title: 'Retail E-commerce Optimization',
      subtitle: 'AI-Powered Customer Experience',
      industry: 'Retail & E-commerce',
      company: 'TechStyle Retail',
      challenge: 'Poor customer experience and low conversion rates due to lack of personalization and inefficient inventory management.',
      solution: 'AI-powered recommendation engine, dynamic pricing, and intelligent inventory management system.',
      results: [
        '45% increase in conversion rates',
        '30% improvement in customer retention',
        '25% reduction in inventory costs',
        'Personalized shopping experience'
      ],
      technologies: ['AI Recommendations', 'Dynamic Pricing', 'Inventory Management', 'Customer Analytics'],
      icon: Globe,
      color: 'from-purple-500 to-pink-500',
      featured: false,
      duration: '7 months',
      team: '10 developers',
      roi: '350%'
    },
    {
      id: 'energy-sustainability',
      title: 'Energy & Sustainability Solutions',
      subtitle: 'Green Technology Implementation',
      industry: 'Energy & Sustainability',
      company: 'EcoPower Solutions',
      challenge: 'Inefficient energy management and lack of renewable energy integration capabilities.',
      solution: 'Smart grid technology with AI-powered energy optimization and renewable energy management systems.',
      results: [
        '40% reduction in energy consumption',
        '60% increase in renewable energy usage',
        '35% cost savings in operations',
        'Real-time energy monitoring'
      ],
      technologies: ['Smart Grid', 'AI Optimization', 'Renewable Energy', 'IoT Monitoring'],
      icon: Leaf,
      color: 'from-green-500 to-teal-500',
      featured: false,
      duration: '9 months',
      team: '14 developers',
      roi: '280%'
    }
  ];

  const industries = [
    { name: 'Healthcare', icon: Heart, count: 12, color: 'from-red-500 to-pink-500' },
    { name: 'Financial Services', icon: TrendingUp, count: 8, color: 'from-emerald-500 to-green-500' },
    { name: 'Manufacturing', icon: Building, count: 15, color: 'from-gray-500 to-slate-500' },
    { name: 'Government', icon: Shield, count: 6, color: 'from-indigo-500 to-purple-500' },
    { name: 'Retail & E-commerce', icon: Globe, count: 10, color: 'from-purple-500 to-pink-500' },
    { name: 'Energy & Sustainability', icon: Leaf, count: 7, color: 'from-green-500 to-teal-500' }
  ];

  const metrics = [
    { label: 'Success Stories', value: '50+', icon: Star },
    { label: 'Industries Served', value: '15+', icon: Building },
    { label: 'Average ROI', value: '300%', icon: TrendingUp },
    { label: 'Client Satisfaction', value: '98%', icon: Users }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Case Studies - Zion Tech Group"
        description="Explore real-world success stories and case studies showcasing how our AI-powered technology solutions have transformed businesses across industries."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Success
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                {' '}Stories
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Discover how our AI-powered technology solutions have transformed businesses 
              across industries, delivering measurable results and driving innovation.
            </p>
            
            {/* Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {metrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <metric.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">{metric.value}</div>
                  <div className="text-sm text-gray-400">{metric.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
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
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Featured Case Studies
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our most impactful success stories showcasing the transformative power 
              of AI and technology solutions.
            </p>
          </motion.div>

          <div className="space-y-12">
            {caseStudies.filter(cs => cs.featured).map((caseStudy, index) => (
              <motion.div
                key={caseStudy.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/30 rounded-2xl border border-slate-700/50 overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Left Side - Content */}
                  <div className="p-8 lg:p-12">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`p-2 rounded-lg bg-gradient-to-br ${caseStudy.color}`}>
                        <caseStudy.icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-sm text-cyan-400 font-medium">{caseStudy.industry}</span>
                      {caseStudy.featured && <Star className="w-5 h-5 text-cyan-400" />}
                    </div>
                    
                    <h3 className="text-3xl font-bold text-white mb-2">{caseStudy.title}</h3>
                    <p className="text-xl text-cyan-400 font-semibold mb-4">{caseStudy.subtitle}</p>
                    <p className="text-gray-300 mb-6">{caseStudy.company}</p>
                    
                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="text-sm font-semibold text-cyan-400 mb-2">Challenge</h4>
                        <p className="text-gray-300 text-sm">{caseStudy.challenge}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-cyan-400 mb-2">Solution</h4>
                        <p className="text-gray-300 text-sm">{caseStudy.solution}</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="text-center p-3 bg-slate-700/30 rounded-lg">
                        <div className="text-2xl font-bold text-cyan-400">{caseStudy.duration}</div>
                        <div className="text-xs text-gray-400">Duration</div>
                      </div>
                      <div className="text-center p-3 bg-slate-700/30 rounded-lg">
                        <div className="text-2xl font-bold text-cyan-400">{caseStudy.roi}</div>
                        <div className="text-xs text-gray-400">ROI</div>
                      </div>
                    </div>
                    
                    <a
                      href={`/case-studies/${caseStudy.id}`}
                      className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                    >
                      Read Full Case Study
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                  
                  {/* Right Side - Results & Technologies */}
                  <div className="p-8 lg:p-12 bg-slate-700/20">
                    <h4 className="text-lg font-semibold text-white mb-4">Key Results</h4>
                    <ul className="space-y-3 mb-6">
                      {caseStudy.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-center gap-3 text-gray-300">
                          <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                          <span className="text-sm">{result}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <h4 className="text-lg font-semibold text-white mb-4">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {caseStudy.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-slate-700/50 text-cyan-400 text-xs rounded-full border border-cyan-400/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20 bg-slate-800/30">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Success Across Industries
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We've helped businesses in diverse industries achieve remarkable results 
              through technology transformation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl border border-slate-700/50 bg-slate-800/30 hover:border-slate-600/50 transition-all duration-300 hover:scale-105"
              >
                <div className={`p-3 rounded-lg bg-gradient-to-br ${industry.color} w-fit mb-4`}>
                  <industry.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{industry.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{industry.count} success stories</p>
                <a
                  href={`/case-studies?industry=${industry.name.toLowerCase()}`}
                  className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
                >
                  View Stories
                  <ArrowRight className="w-4 h-4" />
                </a>
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
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              All Case Studies
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Browse our complete collection of success stories and learn how we can 
              help transform your business.
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
                className="bg-slate-800/30 rounded-xl border border-slate-700/50 overflow-hidden hover:border-slate-600/50 transition-all duration-300 hover:scale-105"
              >
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2 rounded-lg bg-gradient-to-br ${caseStudy.color}`}>
                      <caseStudy.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-sm text-cyan-400 font-medium">{caseStudy.industry}</span>
                    {caseStudy.featured && <Star className="w-5 h-5 text-cyan-400" />}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2">{caseStudy.title}</h3>
                  <p className="text-cyan-400 font-semibold mb-3">{caseStudy.subtitle}</p>
                  <p className="text-gray-300 text-sm mb-4">{caseStudy.company}</p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Duration:</span>
                      <span className="text-white">{caseStudy.duration}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Team:</span>
                      <span className="text-white">{caseStudy.team}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">ROI:</span>
                      <span className="text-cyan-400 font-semibold">{caseStudy.roi}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {caseStudy.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-slate-700/50 text-cyan-400 text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <a
                    href={`/case-studies/${caseStudy.id}`}
                    className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-medium text-sm"
                  >
                    Read Full Story
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="container-responsive text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's discuss how our AI-powered technology solutions can transform your business 
              and deliver measurable results like the success stories you've seen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/request-quote"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-semibold rounded-lg transition-all duration-300"
              >
                Schedule Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
