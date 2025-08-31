import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { Link } from 'react-router-dom';
import { 
  Building, 
  Heart, 
  ShoppingCart, 
  Factory, 
  GraduationCap, 
  Car,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Users,
  DollarSign,
  Clock,
  Target,
  Lightbulb,
  Shield,
  Zap,
  Globe,
  Star
} from 'lucide-react';

export default function CaseStudies() {
  const [activeIndustry, setActiveIndustry] = useState('all');

  const industries = [
    { id: 'all', name: 'All Industries', icon: Globe },
    { id: 'finance', name: 'Financial Services', icon: Building },
    { id: 'healthcare', name: 'Healthcare', icon: Heart },
    { id: 'retail', name: 'Retail & E-commerce', icon: ShoppingCart },
    { id: 'manufacturing', name: 'Manufacturing', icon: Factory },
    { id: 'education', name: 'Education', icon: GraduationCap },
    { id: 'transportation', name: 'Transportation', icon: Car }
  ];

  const caseStudies = [
    {
      id: 'financial-ai-platform',
      industry: 'finance',
      title: 'AI-Powered Financial Trading Platform',
      client: 'Global Investment Bank',
      description: 'Developed a sophisticated AI trading platform that analyzes market data in real-time to make intelligent trading decisions.',
      challenge: 'The client needed to process massive amounts of market data and make split-second trading decisions while managing risk.',
      solution: 'Built a custom AI platform using machine learning algorithms, real-time data processing, and advanced risk management systems.',
      results: [
        '40% increase in trading efficiency',
        '25% reduction in risk exposure',
        '3.2x ROI within 12 months',
        '99.9% system uptime'
      ],
      technologies: ['Python', 'TensorFlow', 'Apache Kafka', 'Redis', 'AWS'],
      duration: '6 months',
      team: '8 developers',
      icon: Building,
      color: 'from-purple-500 to-pink-600'
    },
    {
      id: 'healthcare-analytics',
      industry: 'healthcare',
      title: 'Healthcare Predictive Analytics Platform',
      client: 'Regional Hospital Network',
      description: 'Implemented an AI-driven analytics platform that predicts patient outcomes and optimizes treatment plans.',
      challenge: 'The hospital needed to improve patient outcomes while reducing costs and optimizing resource allocation.',
      solution: 'Developed a comprehensive analytics platform that processes patient data to predict outcomes and recommend treatments.',
      results: [
        '30% improvement in patient outcomes',
        '20% reduction in readmission rates',
        '15% decrease in operational costs',
        'Improved resource utilization'
      ],
      technologies: ['Python', 'Scikit-learn', 'PostgreSQL', 'React', 'Docker'],
      duration: '8 months',
      team: '6 developers',
      icon: Heart,
      color: 'from-red-500 to-pink-600'
    },
    {
      id: 'retail-automation',
      industry: 'retail',
      title: 'Retail Automation & Customer Analytics',
      client: 'National Retail Chain',
      description: 'Created an intelligent retail platform that automates inventory management and provides personalized customer experiences.',
      challenge: 'The retail chain struggled with inventory management, customer personalization, and omnichannel integration.',
      solution: 'Built an integrated platform combining AI-powered demand forecasting, customer analytics, and automated inventory management.',
      results: [
        '35% reduction in inventory costs',
        '45% increase in customer satisfaction',
        '28% improvement in sales conversion',
        'Streamlined omnichannel operations'
      ],
      technologies: ['Node.js', 'React', 'MongoDB', 'TensorFlow', 'AWS'],
      duration: '7 months',
      team: '7 developers',
      icon: ShoppingCart,
      color: 'from-blue-500 to-cyan-600'
    },
    {
      id: 'smart-manufacturing',
      industry: 'manufacturing',
      title: 'Smart Manufacturing & IoT Platform',
      client: 'Automotive Manufacturer',
      description: 'Implemented a comprehensive IoT and AI platform for predictive maintenance and production optimization.',
      challenge: 'The manufacturer faced high downtime costs, quality issues, and inefficient production processes.',
      solution: 'Deployed IoT sensors throughout the production line and built an AI platform for predictive maintenance and quality control.',
      results: [
        '50% reduction in unplanned downtime',
        '25% improvement in product quality',
        '30% increase in production efficiency',
        'Significant cost savings'
      ],
      technologies: ['Python', 'TensorFlow', 'IoT Sensors', 'Kubernetes', 'Azure'],
      duration: '10 months',
      team: '10 developers',
      icon: Factory,
      color: 'from-green-500 to-emerald-600'
    },
    {
      id: 'educational-platform',
      industry: 'education',
      title: 'AI-Powered Learning Platform',
      client: 'University System',
      description: 'Developed an intelligent learning platform that personalizes education for each student.',
      challenge: 'The university needed to improve student engagement and learning outcomes while managing large class sizes.',
      solution: 'Built an adaptive learning platform that tracks student progress and adjusts content accordingly.',
      results: [
        '40% improvement in student engagement',
        '25% increase in learning outcomes',
        'Better student retention rates',
        'Enhanced teacher productivity'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'TensorFlow', 'Docker'],
      duration: '9 months',
      team: '6 developers',
      icon: GraduationCap,
      color: 'from-indigo-500 to-purple-600'
    },
    {
      id: 'logistics-optimization',
      industry: 'transportation',
      title: 'Logistics & Supply Chain Optimization',
      client: 'International Shipping Company',
      description: 'Created an AI-powered logistics platform that optimizes routes and improves delivery efficiency.',
      challenge: 'The shipping company needed to reduce delivery times, optimize routes, and improve customer satisfaction.',
      solution: 'Developed a comprehensive logistics platform with route optimization, real-time tracking, and predictive analytics.',
      results: [
        '30% reduction in delivery times',
        '25% decrease in fuel costs',
        'Improved customer satisfaction',
        'Better resource utilization'
      ],
      technologies: ['Python', 'PostgreSQL', 'React', 'Docker', 'AWS'],
      duration: '8 months',
      team: '8 developers',
      icon: Car,
      color: 'from-orange-500 to-red-600'
    }
  ];

  const filteredCaseStudies = activeIndustry === 'all' 
    ? caseStudies 
    : caseStudies.filter(study => study.industry === activeIndustry);

  const stats = [
    { number: '500+', label: 'Projects Completed', description: 'Successfully delivered across industries' },
    { number: '99%', label: 'Client Satisfaction', description: 'Based on post-project surveys' },
    { number: '3.2x', label: 'Average ROI', description: 'Return on investment for our clients' },
    { number: '24/7', label: 'Support Available', description: 'Ongoing support and maintenance' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Case Studies - Zion Tech Group"
        description="Explore real-world success stories and case studies from Zion Tech Group. See how we've transformed businesses across industries with innovative technology solutions."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Success <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Stories</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Real-world examples of how we've transformed businesses across industries. 
              Discover the measurable impact of our innovative technology solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl font-bold text-cyan-400 mb-3">{stat.number}</div>
                <div className="text-lg font-semibold text-white mb-2">{stat.label}</div>
                <div className="text-gray-300 text-sm">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Filter */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((industry) => (
              <button
                key={industry.id}
                onClick={() => setActiveIndustry(industry.id)}
                className={`flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeIndustry === industry.id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg'
                    : 'bg-slate-700/30 text-gray-300 hover:bg-slate-600/50 hover:text-white border border-slate-600/50'
                }`}
              >
                <industry.icon className="w-5 h-5 mr-2" />
                {industry.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredCaseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-700/30 rounded-2xl border border-slate-600/30 p-8 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${study.color} rounded-2xl flex items-center justify-center mr-4`}>
                    <study.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{study.title}</h3>
                    <p className="text-cyan-400 font-medium">{study.client}</p>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">{study.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                    <Target className="w-5 h-5 mr-2 text-cyan-400" />
                    The Challenge
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed">{study.challenge}</p>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                    <Lightbulb className="w-5 h-5 mr-2 text-yellow-400" />
                    Our Solution
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed">{study.solution}</p>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                    <TrendingUp className="w-5 h-5 mr-2 text-green-400" />
                    Results
                  </h4>
                  <ul className="space-y-2">
                    {study.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-3 bg-slate-600/30 rounded-lg">
                    <div className="text-sm text-gray-400 mb-1">Duration</div>
                    <div className="text-white font-semibold">{study.duration}</div>
                  </div>
                  <div className="text-center p-3 bg-slate-600/30 rounded-lg">
                    <div className="text-sm text-gray-400 mb-1">Team Size</div>
                    <div className="text-white font-semibold">{study.team}</div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-400 mb-2">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {study.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-cyan-500/20 border border-cyan-500/50 rounded-full text-xs text-cyan-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  to="/contact"
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                >
                  Discuss Similar Project
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Hear directly from the businesses we've transformed.
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  quote: "Zion Tech Group transformed our operations with their AI platform. The results exceeded our expectations.",
                  author: "Sarah Johnson",
                  role: "CTO, Global Investment Bank",
                  rating: 5
                },
                {
                  quote: "Their healthcare analytics platform has significantly improved our patient outcomes and operational efficiency.",
                  author: "Dr. Michael Chen",
                  role: "Chief Medical Officer, Regional Hospital",
                  rating: 5
                },
                {
                  quote: "The retail automation solution has revolutionized our inventory management and customer experience.",
                  author: "Lisa Rodriguez",
                  role: "VP of Operations, National Retail Chain",
                  rating: 5
                }
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-slate-700/30 rounded-lg border border-slate-600/30 p-6"
                >
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-gray-300 mb-4 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div>
                    <div className="text-white font-semibold">{testimonial.author}</div>
                    <div className="text-gray-400 text-sm">{testimonial.role}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Our Success Process</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              A proven methodology that ensures successful project delivery and maximum value.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: '01',
                  title: 'Discovery',
                  description: 'Deep understanding of your business needs and objectives.'
                },
                {
                  step: '02',
                  title: 'Strategy',
                  description: 'Comprehensive planning and solution architecture.'
                },
                {
                  step: '03',
                  title: 'Execution',
                  description: 'Agile development with continuous feedback and iteration.'
                },
                {
                  step: '04',
                  title: 'Success',
                  description: 'Ongoing support and optimization for continued growth.'
                }
              ].map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-2xl">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-cyan-600/20 to-blue-600/20">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Create Your Success Story?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can transform your business and deliver similar results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 inline-flex items-center"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/services"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
