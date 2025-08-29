import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { 
  Award, 
  Star, 
  Zap, 
  Brain, 
  Shield, 
  Rocket, 
  Heart,
  Linkedin,
  Github,
  Mail,
  Globe,
  Cpu,
  Lock,
  Cloud,
  Atom,
  Crown,
  Sparkles,
  Flame,
  Thunder,
  Lightning,
  Sun,
  Moon,
  Planet,
  Galaxy,
  Universe,
  Infinity,
  Alpha,
  Beta,
  Gamma,
  Delta,
  Epsilon,
  Zeta,
  Eta,
  Theta,
  Iota,
  Kappa,
  Lambda,
  Mu,
  Nu,
  Xi,
  Omicron,
  Pi,
  Rho,
  Sigma,
  Tau,
  Upsilon,
  Phi,
  Chi,
  Psi,
  Omega,
  Clock,
  TrendingUp,
  CheckCircle,
  Building,
  BookOpen,
  MessageCircle,
  HelpCircle,
  DollarSign,
  Settings,
  Phone,
  MapPin,
  Download,
  ExternalLink,
  Calendar,
  User,
  Tag,
  BarChart3,
  Target,
  Users,
  DollarSign as DollarSignIcon,
  ArrowRight,
  Play,
  FileText,
  Image,
  Video,
  ShoppingCart,
  Truck
} from 'lucide-react';

export default function CaseStudies() {
  const caseStudies = [
    {
      id: 'healthcare-ai-diagnostics',
      title: 'AI-Powered Medical Diagnostics Platform',
      client: 'Global Healthcare Consortium',
      industry: 'Healthcare',
      challenge: 'Manual diagnosis processes were time-consuming and prone to human error, leading to delayed treatment and increased healthcare costs.',
      solution: 'Developed an AI-powered diagnostic platform using computer vision and machine learning to analyze medical images with 99.2% accuracy.',
      results: [
        '95% reduction in diagnosis time',
        '99.2% diagnostic accuracy rate',
        '$2.3M annual cost savings',
        'Improved patient outcomes by 40%'
      ],
      technologies: ['Computer Vision', 'Machine Learning', 'Cloud Computing', 'Healthcare APIs'],
      duration: '8 months',
      team: '12 developers',
      featured: true,
      image: '/case-studies/healthcare-ai-diagnostics.jpg',
      video: '/case-studies/healthcare-ai-diagnostics.mp4',
      pdf: '/case-studies/healthcare-ai-diagnostics.pdf'
    },
    {
      id: 'financial-ai-compliance',
      title: 'AI Compliance Automation for Financial Services',
      client: 'Fortune 500 Bank',
      industry: 'Financial Services',
      challenge: 'Manual compliance processes were expensive, slow, and couldn\'t keep up with rapidly changing regulations.',
      solution: 'Implemented AI-powered compliance automation platform that continuously monitors transactions and flags potential violations in real-time.',
      results: [
        '80% reduction in compliance processing time',
        '99.8% accuracy in violation detection',
        '$5.1M annual cost savings',
        'Zero regulatory fines in 2 years'
      ],
      technologies: ['Natural Language Processing', 'Machine Learning', 'Blockchain', 'Regulatory APIs'],
      duration: '6 months',
      team: '8 developers',
      featured: false,
      image: '/case-studies/financial-ai-compliance.jpg',
      video: '/case-studies/financial-ai-compliance.mp4',
      pdf: '/case-studies/financial-ai-compliance.pdf'
    },
    {
      id: 'manufacturing-iot-automation',
      title: 'IoT-Driven Manufacturing Automation',
      client: 'Global Manufacturing Corp',
      industry: 'Manufacturing',
      challenge: 'Production inefficiencies and equipment downtime were causing significant revenue losses and quality issues.',
      solution: 'Deployed IoT sensors and AI analytics to create a predictive maintenance system and optimize production workflows.',
      results: [
        '45% reduction in equipment downtime',
        '30% increase in production efficiency',
        '$8.7M annual cost savings',
        'Improved product quality by 25%'
      ],
      technologies: ['IoT Sensors', 'Edge Computing', 'Predictive Analytics', 'Machine Learning'],
      duration: '10 months',
      team: '15 developers',
      featured: false,
      image: '/case-studies/manufacturing-iot-automation.jpg',
      video: '/case-studies/manufacturing-iot-automation.mp4',
      pdf: '/case-studies/manufacturing-iot-automation.pdf'
    },
    {
      id: 'retail-ai-customer-experience',
      title: 'AI-Enhanced Customer Experience Platform',
      client: 'E-commerce Retailer',
      industry: 'Retail',
      challenge: 'Poor customer experience was leading to high cart abandonment rates and declining customer satisfaction.',
      solution: 'Built an AI-powered customer experience platform with personalized recommendations, chatbots, and predictive analytics.',
      results: [
        '35% increase in conversion rates',
        '60% reduction in cart abandonment',
        '45% improvement in customer satisfaction',
        '$12.3M additional annual revenue'
      ],
      technologies: ['Recommendation Engines', 'Natural Language Processing', 'Predictive Analytics', 'Cloud Computing'],
      duration: '7 months',
      team: '10 developers',
      featured: false,
      image: '/case-studies/retail-ai-customer-experience.jpg',
      video: '/case-studies/retail-ai-customer-experience.mp4',
      pdf: '/case-studies/retail-ai-customer-experience.pdf'
    },
    {
      id: 'energy-quantum-optimization',
      title: 'Quantum Computing for Energy Grid Optimization',
      client: 'National Energy Provider',
      industry: 'Energy',
      challenge: 'Complex energy grid optimization problems were computationally impossible to solve with classical computers.',
      solution: 'Developed quantum algorithms to optimize energy distribution, reducing waste and improving grid stability.',
      results: [
        '25% reduction in energy waste',
        '40% improvement in grid stability',
        '$15.2M annual cost savings',
        'Reduced carbon emissions by 30%'
      ],
      technologies: ['Quantum Computing', 'Quantum Algorithms', 'Energy Analytics', 'Grid Management Systems'],
      duration: '18 months',
      team: '20 developers',
      featured: false,
      image: '/case-studies/energy-quantum-optimization.jpg',
      video: '/case-studies/energy-quantum-optimization.mp4',
      pdf: '/case-studies/energy-quantum-optimization.pdf'
    },
    {
      id: 'logistics-supply-chain-ai',
      title: 'AI-Powered Supply Chain Optimization',
      client: 'Global Logistics Company',
      industry: 'Logistics',
      challenge: 'Inefficient supply chain operations were causing delays, increased costs, and poor customer satisfaction.',
      solution: 'Implemented AI-driven supply chain optimization platform with real-time tracking, predictive analytics, and automated routing.',
      results: [
        '50% reduction in delivery times',
        '35% decrease in logistics costs',
        '90% improvement in on-time delivery',
        '$18.5M annual cost savings'
      ],
      technologies: ['Machine Learning', 'Predictive Analytics', 'IoT Tracking', 'Route Optimization'],
      duration: '9 months',
      team: '14 developers',
      featured: false,
      image: '/case-studies/logistics-supply-chain-ai.jpg',
      video: '/case-studies/logistics-supply-chain-ai.mp4',
      pdf: '/case-studies/logistics-supply-chain-ai.pdf'
    }
  ];

  const industries = [
    { name: 'Healthcare', icon: Heart, count: 15, color: 'from-red-500 to-pink-500' },
    { name: 'Financial Services', icon: DollarSignIcon, count: 12, color: 'from-green-500 to-emerald-500' },
    { name: 'Manufacturing', icon: Cpu, count: 18, color: 'from-blue-500 to-cyan-500' },
    { name: 'Retail', icon: ShoppingCart, count: 10, color: 'from-purple-500 to-pink-500' },
    { name: 'Energy', icon: Zap, count: 8, color: 'from-yellow-500 to-orange-500' },
    { name: 'Logistics', icon: Truck, count: 14, color: 'from-indigo-500 to-purple-500' }
  ];

  const stats = [
    { number: '150+', label: 'Projects Completed', icon: CheckCircle },
    { number: '$500M+', label: 'Client ROI Generated', icon: DollarSignIcon },
    { number: '99.2%', label: 'Average Success Rate', icon: Star },
    { number: '25+', label: 'Industries Served', icon: Building },
    { number: '12 months', label: 'Average Project Duration', icon: Clock },
    { number: '500+', label: 'Team Members', icon: Users }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Case Studies - Zion Tech Group"
        description="Explore real-world success stories and business outcomes from our AI-powered solutions. See how we've transformed businesses across industries."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"></div>
        <div className="relative container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Success Stories
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-slate-300 max-w-3xl mx-auto mb-8"
          >
            Real-world transformations powered by AI. Discover how our solutions have delivered measurable business outcomes across industries.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center space-x-4"
          >
            <a 
              href="#case-studies" 
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
            >
              View Case Studies
            </a>
            <a 
              href="/contact" 
              className="border border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              Start Your Project
            </a>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center mb-3">
                  <stat.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-slate-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-white text-center mb-12"
          >
            Featured Case Study
          </motion.h2>
          
          {caseStudies.filter(cs => cs.featured).map((caseStudy, index) => (
            <motion.div
              key={caseStudy.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl p-8 border border-cyan-500/30"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <span className="px-4 py-2 bg-cyan-500 text-white text-sm font-semibold rounded-full">
                      {caseStudy.industry}
                    </span>
                    <span className="text-slate-400 text-sm">{caseStudy.duration}</span>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">{caseStudy.title}</h3>
                  <p className="text-slate-300 text-lg mb-6 leading-relaxed">
                    <strong>Client:</strong> {caseStudy.client}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Challenge:</h4>
                    <p className="text-slate-300 leading-relaxed">{caseStudy.challenge}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Solution:</h4>
                    <p className="text-slate-300 leading-relaxed">{caseStudy.solution}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Key Results:</h4>
                    <ul className="space-y-2">
                      {caseStudy.results.map((result, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                          <span className="text-slate-300">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <a 
                      href={caseStudy.pdf}
                      className="flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
                    >
                      <FileText className="w-4 h-4" />
                      <span>Download PDF</span>
                    </a>
                    <a 
                      href={caseStudy.video}
                      className="flex items-center space-x-2 border border-cyan-500 text-cyan-400 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
                    >
                      <Play className="w-4 h-4" />
                      <span>Watch Video</span>
                    </a>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                    <h4 className="text-white font-semibold mb-4">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {caseStudy.technologies.map((tech) => (
                        <span 
                          key={tech}
                          className="px-3 py-1 bg-slate-700 text-cyan-400 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                    <h4 className="text-white font-semibold mb-4">Project Details</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-slate-400">Duration:</span>
                        <span className="text-white">{caseStudy.duration}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Team Size:</span>
                        <span className="text-white">{caseStudy.team}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Industry:</span>
                        <span className="text-white">{caseStudy.industry}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-white text-center mb-12"
          >
            Industries We Serve
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${industry.color} rounded-xl mx-auto mb-4 flex items-center justify-center`}>
                  <industry.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white text-center mb-2">{industry.name}</h3>
                <p className="text-slate-400 text-center">{industry.count} case studies</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Case Studies */}
      <section id="case-studies" className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-white text-center mb-12"
          >
            All Case Studies
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.filter(cs => !cs.featured).map((caseStudy, index) => (
              <motion.div
                key={caseStudy.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-slate-700 text-cyan-400 text-xs font-semibold rounded-full">
                    {caseStudy.industry}
                  </span>
                  <span className="text-slate-400 text-sm">{caseStudy.duration}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3">{caseStudy.title}</h3>
                <p className="text-slate-300 text-sm mb-4">
                  <strong>Client:</strong> {caseStudy.client}
                </p>
                
                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-2">Challenge:</h4>
                  <p className="text-slate-300 text-sm leading-relaxed">{caseStudy.challenge}</p>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-2">Solution:</h4>
                  <p className="text-slate-300 text-sm leading-relaxed">{caseStudy.solution}</p>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-2">Key Results:</h4>
                  <ul className="space-y-1">
                    {caseStudy.results.slice(0, 2).map((result, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mt-1 flex-shrink-0" />
                        <span className="text-slate-300 text-sm">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    <a 
                      href={caseStudy.pdf}
                      className="text-cyan-400 hover:text-cyan-300 text-sm transition-colors"
                    >
                      <FileText className="w-4 h-4" />
                    </a>
                    <a 
                      href={caseStudy.video}
                      className="text-cyan-400 hover:text-cyan-300 text-sm transition-colors"
                    >
                      <Video className="w-4 h-4" />
                    </a>
                  </div>
                  <a 
                    href={`/case-studies/${caseStudy.id}`}
                    className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 text-sm transition-colors"
                  >
                    <span>Read Full Case Study</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-500/10 to-blue-500/10">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-white mb-6"
          >
            Ready to Create Your Success Story?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-slate-300 max-w-2xl mx-auto mb-8"
          >
            Let's discuss how our AI-powered solutions can transform your business and deliver measurable results.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <a 
              href="/contact" 
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
            >
              Start Your Project
            </a>
            <a 
              href="/services" 
              className="border border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              Explore Our Services
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
