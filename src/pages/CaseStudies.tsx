import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Building, 
  TrendingUp, 
  Users, 
  Clock, 
  DollarSign, 
  Target, 
  CheckCircle, 
  ArrowRight,
  Star,
  Globe,
  Cpu,
  Brain,
  Cloud,
  Shield,
  Rocket,
  Heart,
  Zap,
  Award,
  BarChart3,
  PenTool,
  Eye,
  Server,
  Smartphone,
  Database,
  Network,
  ShoppingCart
} from 'lucide-react';
import { SEO } from '../components/SEO';

export default function CaseStudies() {
  const [selectedIndustry, setSelectedIndustry] = useState<string>('all');
  const [selectedService, setSelectedService] = useState<string>('all');

  const industries = [
    { id: 'all', name: 'All Industries', icon: Building },
    { id: 'healthcare', name: 'Healthcare', icon: Heart },
    { id: 'finance', name: 'Finance', icon: DollarSign },
    { id: 'manufacturing', name: 'Manufacturing', icon: Cpu },
    { id: 'retail', name: 'Retail', icon: ShoppingCart },
    { id: 'technology', name: 'Technology', icon: Brain }
  ];

  const services = [
    { id: 'all', name: 'All Services', icon: Zap },
    { id: 'ai', name: 'AI & ML', icon: Brain },
    { id: 'cloud', name: 'Cloud & DevOps', icon: Cloud },
    { id: 'security', name: 'Cybersecurity', icon: Shield },
    { id: 'data', name: 'Data Analytics', icon: BarChart3 },
    { id: 'digital', name: 'Digital Transformation', icon: Rocket }
  ];

  const caseStudies = [
    {
      id: 1,
      title: 'AI-Powered Customer Support Transformation',
      company: 'Global E-commerce Platform',
      industry: 'retail',
      service: 'ai',
      challenge: 'High customer support costs and long response times affecting customer satisfaction',
      solution: 'Implemented AI-powered chatbots and intelligent routing system',
      results: [
        'Reduced support costs by 65%',
        'Improved response time from 24 hours to 2 minutes',
        'Increased customer satisfaction score from 3.2 to 4.7',
        'Handled 10x more support requests with same team size'
      ],
      duration: '3 months',
      investment: '$150,000',
      roi: '340%',
      image: '/images/case-study-1.jpg',
      tags: ['AI Chatbots', 'Customer Support', 'Automation']
    },
    {
      id: 2,
      title: 'Cloud Infrastructure Modernization',
      company: 'Healthcare Technology Provider',
      industry: 'healthcare',
      service: 'cloud',
      challenge: 'Legacy on-premise infrastructure causing performance issues and high maintenance costs',
      solution: 'Migrated to cloud-native architecture with automated scaling and monitoring',
      results: [
        'Reduced infrastructure costs by 45%',
        'Improved application performance by 300%',
        'Achieved 99.9% uptime SLA',
        'Reduced deployment time from weeks to hours'
      ],
      duration: '6 months',
      investment: '$500,000',
      roi: '280%',
      image: '/images/case-study-2.jpg',
      tags: ['Cloud Migration', 'DevOps', 'Infrastructure']
    },
    {
      id: 3,
      title: 'Cybersecurity Threat Detection Platform',
      company: 'Financial Services Corporation',
      industry: 'finance',
      service: 'security',
      challenge: 'Increasing sophisticated cyber threats and compliance requirements',
      solution: 'Deployed AI-powered threat detection and response system',
      results: [
        'Detected 95% of threats before they could cause damage',
        'Reduced false positives by 80%',
        'Achieved SOC 2 Type II compliance',
        'Reduced incident response time by 75%'
      ],
      duration: '4 months',
      investment: '$300,000',
      roi: '420%',
      image: '/images/case-study-3.jpg',
      tags: ['Cybersecurity', 'AI Detection', 'Compliance']
    },
    {
      id: 4,
      title: 'Data Analytics & Business Intelligence',
      company: 'Manufacturing Conglomerate',
      industry: 'manufacturing',
      service: 'data',
      challenge: 'Lack of real-time insights leading to operational inefficiencies',
      solution: 'Built comprehensive data analytics platform with predictive maintenance',
      results: [
        'Reduced equipment downtime by 40%',
        'Improved production efficiency by 25%',
        'Saved $2.5M annually in maintenance costs',
        'Enabled data-driven decision making across operations'
      ],
      duration: '5 months',
      investment: '$400,000',
      roi: '325%',
      image: '/images/case-study-4.jpg',
      tags: ['Data Analytics', 'Predictive Maintenance', 'BI']
    },
    {
      id: 5,
      title: 'Digital Transformation & Process Automation',
      company: 'Technology Startup',
      industry: 'technology',
      service: 'digital',
      challenge: 'Manual processes slowing down growth and increasing operational costs',
      solution: 'Implemented end-to-end process automation and digital workflows',
      results: [
        'Increased operational efficiency by 60%',
        'Reduced manual errors by 90%',
        'Scaled operations 5x without proportional headcount increase',
        'Improved employee productivity by 45%'
      ],
      duration: '4 months',
      investment: '$250,000',
      roi: '380%',
      image: '/images/case-study-5.jpg',
      tags: ['Process Automation', 'Digital Workflows', 'Efficiency']
    },
    {
      id: 6,
      title: 'AI-Powered Marketing Optimization',
      company: 'Retail Chain',
      industry: 'retail',
      service: 'ai',
      challenge: 'Ineffective marketing campaigns and poor customer targeting',
      solution: 'Deployed AI-driven marketing automation and personalization platform',
      results: [
        'Increased marketing ROI by 180%',
        'Improved customer conversion rates by 65%',
        'Reduced customer acquisition costs by 40%',
        'Enhanced customer lifetime value by 35%'
      ],
      duration: '3 months',
      investment: '$200,000',
      roi: '450%',
      image: '/images/case-study-6.jpg',
      tags: ['Marketing Automation', 'AI Personalization', 'ROI']
    }
  ];

  const filteredCaseStudies = caseStudies.filter(study => {
    const industryMatch = selectedIndustry === 'all' || study.industry === selectedIndustry;
    const serviceMatch = selectedService === 'all' || study.service === selectedService;
    return industryMatch && serviceMatch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Case Studies - Zion Tech Group"
        description="Discover how Zion Tech Group has transformed businesses across industries with our AI, cloud, and technology solutions. Real results, measurable impact."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Real Results,
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"> Real Impact</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover how we've transformed businesses across industries with our cutting-edge 
              technology solutions. Each case study demonstrates measurable results and lasting impact.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-cyan-400/25"
              >
                View All Results
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-cyan-400/30 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300"
              >
                Download Report
              </motion.button>
            </div>
          </motion.div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-400/20 to-pink-500/20 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Users, value: '150+', label: 'Clients Served' },
              { icon: TrendingUp, value: '95%', label: 'Success Rate' },
              { icon: DollarSign, value: '$50M+', label: 'Value Delivered' },
              { icon: Clock, value: '24/7', label: 'Support Available' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex flex-wrap gap-2">
              {industries.map((industry) => (
                <button
                  key={industry.id}
                  onClick={() => setSelectedIndustry(industry.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
                    selectedIndustry === industry.id
                      ? 'bg-cyan-400 text-white'
                      : 'bg-slate-700/50 text-gray-300 hover:bg-slate-700 hover:text-white'
                  }`}
                >
                  <industry.icon className="w-4 h-4" />
                  {industry.name}
                </button>
              ))}
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setSelectedService(service.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
                  selectedService === service.id
                    ? 'bg-blue-500 text-white'
                    : 'bg-slate-700/50 text-gray-300 hover:bg-slate-700 hover:text-white'
                }`}
              >
                <service.icon className="w-4 h-4" />
                {service.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredCaseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-cyan-400/30 transition-all duration-300 hover:bg-slate-800/70"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{study.title}</h3>
                    <p className="text-cyan-400 font-medium">{study.company}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${i < 4 ? 'text-yellow-400 fill-current' : 'text-gray-400'}`} />
                    ))}
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-white mb-2">Challenge:</h4>
                    <p className="text-gray-400 text-sm">{study.challenge}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-white mb-2">Solution:</h4>
                    <p className="text-gray-400 text-sm">{study.solution}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-white mb-3">Results:</h4>
                  <ul className="space-y-2">
                    {study.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-lg font-bold text-cyan-400">{study.duration}</div>
                    <div className="text-xs text-gray-400">Duration</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-400">{study.investment}</div>
                    <div className="text-xs text-gray-400">Investment</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-yellow-400">{study.roi}</div>
                    <div className="text-xs text-gray-400">ROI</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {study.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-slate-700/50 text-cyan-400 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 px-4 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 border border-cyan-400/30 text-cyan-400 font-medium rounded-lg hover:from-cyan-400/30 hover:to-blue-500/30 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Read Full Case Study
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
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
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Achieve Similar Results?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our proven solutions can transform your business and deliver measurable results.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-cyan-400/25"
              >
                Start Your Transformation
              </motion.a>
              <motion.a
                href="/request-quote"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-cyan-400/30 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300"
              >
                Get Custom Quote
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
