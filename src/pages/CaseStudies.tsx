import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  TrendingUp, 
  Users, 
  Clock, 
  Target, 
  CheckCircle,
  ArrowRight,
  Globe,
  Brain,
  Shield,
  Cloud,
  Server,
  Zap,
  Award,
  BarChart3,
  Lightbulb
} from 'lucide-react';

const CaseStudies: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Industries', icon: Globe },
    { id: 'finance', label: 'Financial Services', icon: Building2 },
    { id: 'healthcare', label: 'Healthcare', icon: Users },
    { id: 'manufacturing', label: 'Manufacturing', icon: Server },
    { id: 'retail', label: 'Retail & E-commerce', icon: ShoppingBag },
    { id: 'technology', label: 'Technology', icon: Brain }
  ];

  const caseStudies = [
    {
      id: 'fintech-transformation',
      industry: 'finance',
      title: 'Digital Banking Transformation',
      client: 'Global Bank Inc.',
      challenge: 'Legacy banking systems causing slow transaction processing and poor customer experience.',
      solution: 'Implemented cloud-native banking platform with AI-powered fraud detection and real-time analytics.',
      results: [
        '40% reduction in transaction processing time',
        '99.9% system uptime achieved',
        '25% increase in customer satisfaction',
        '$2.5M annual cost savings'
      ],
      technologies: ['Cloud Migration', 'AI/ML', 'Real-time Analytics', 'Microservices'],
      duration: '18 months',
      team: '12 engineers'
    },
    {
      id: 'healthcare-ai',
      industry: 'healthcare',
      title: 'AI-Powered Diagnostic Platform',
      client: 'MedTech Solutions',
      challenge: 'Manual medical image analysis leading to delayed diagnoses and inconsistent results.',
      solution: 'Developed AI-powered diagnostic platform using computer vision and machine learning.',
      results: [
        '85% accuracy in early disease detection',
        '60% reduction in diagnosis time',
        'Improved patient outcomes',
        'FDA approval achieved'
      ],
      technologies: ['Computer Vision', 'Machine Learning', 'Cloud Computing', 'HIPAA Compliance'],
      duration: '24 months',
      team: '15 researchers'
    },
    {
      id: 'manufacturing-iot',
      industry: 'manufacturing',
      title: 'Smart Factory Implementation',
      client: 'Industrial Manufacturing Co.',
      challenge: 'Inefficient production processes and lack of real-time monitoring capabilities.',
      solution: 'Implemented IoT-based smart factory solution with predictive maintenance and analytics.',
      results: [
        '30% increase in production efficiency',
        '50% reduction in downtime',
        'Predictive maintenance savings',
        'Real-time production monitoring'
      ],
      technologies: ['IoT', 'Edge Computing', 'Predictive Analytics', 'Cloud Platform'],
      duration: '12 months',
      team: '8 engineers'
    },
    {
      id: 'retail-optimization',
      industry: 'retail',
      title: 'E-commerce Optimization Platform',
      client: 'Retail Giant Corp.',
      challenge: 'Poor conversion rates and inefficient inventory management affecting profitability.',
      solution: 'Built AI-powered recommendation engine and inventory optimization system.',
      results: [
        '35% increase in conversion rates',
        '20% reduction in inventory costs',
        'Personalized customer experience',
        'Real-time inventory tracking'
      ],
      technologies: ['AI/ML', 'Big Data', 'Real-time Analytics', 'Cloud Infrastructure'],
      duration: '16 months',
      team: '10 engineers'
    },
    {
      id: 'cybersecurity-framework',
      industry: 'technology',
      title: 'Zero-Trust Security Framework',
      client: 'Tech Startup Inc.',
      challenge: 'Increasing cyber threats and need for comprehensive security compliance.',
      solution: 'Implemented zero-trust security architecture with advanced threat detection.',
      results: [
        '99.9% threat detection rate',
        'SOC2 compliance achieved',
        'Zero security breaches',
        'Reduced security overhead'
      ],
      technologies: ['Zero-Trust Architecture', 'Threat Detection', 'Compliance', 'AI Security'],
      duration: '10 months',
      team: '6 security experts'
    },
    {
      id: 'quantum-computing',
      industry: 'technology',
      title: 'Quantum Computing Research Platform',
      client: 'Research Institute',
      challenge: 'Need for quantum computing capabilities for complex scientific simulations.',
      solution: 'Developed hybrid quantum-classical computing platform for research applications.',
      results: [
        '1000x faster computation for specific problems',
        'New research breakthroughs',
        'Published scientific papers',
        'Industry partnerships formed'
      ],
      technologies: ['Quantum Computing', 'Hybrid Systems', 'Research Tools', 'Cloud Platform'],
      duration: '36 months',
      team: '20 researchers'
    }
  ];

  const filteredCaseStudies = activeFilter === 'all' 
    ? caseStudies 
    : caseStudies.filter(study => study.industry === activeFilter);

  const stats = [
    { icon: Users, value: '500+', label: 'Happy Clients' },
    { icon: TrendingUp, value: '95%', label: 'Success Rate' },
    { icon: Award, value: '200+', label: 'Projects Completed' },
    { icon: Clock, value: '15+', label: 'Years Experience' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Case Studies
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-zion-cyan/80 max-w-4xl mx-auto leading-relaxed"
          >
            Real-world examples of how we've helped organizations transform their business 
            through innovative technology solutions and achieve measurable results.
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-zion-slate/50 backdrop-blur-sm rounded-2xl p-6 border border-zion-cyan/20">
                  <stat.icon className="w-12 h-12 text-zion-cyan mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-zion-cyan/80">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Filter by Industry</h2>
            <p className="text-xl text-zion-cyan/80 max-w-3xl mx-auto">
              Explore case studies from different industries and see how we've delivered value across various sectors.
            </p>
          </motion.div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-zion-cyan text-zion-slate-dark'
                    : 'bg-zion-slate/30 text-zion-cyan hover:bg-zion-slate/50 border border-zion-cyan/20'
                }`}
              >
                <filter.icon className="w-5 h-5" />
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {filteredCaseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-slate/30 backdrop-blur-sm rounded-2xl p-8 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-zion-cyan/20 text-zion-cyan px-3 py-1 rounded-full text-sm font-medium">
                      {study.industry.charAt(0).toUpperCase() + study.industry.slice(1)}
                    </span>
                    <span className="text-zion-cyan/60 text-sm">{study.duration}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2">{study.title}</h3>
                  <p className="text-zion-cyan font-medium mb-4">{study.client}</p>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                      <Target className="w-5 h-5 text-zion-cyan" />
                      Challenge
                    </h4>
                    <p className="text-zion-cyan/80 text-sm leading-relaxed">{study.challenge}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                      <Lightbulb className="w-5 h-5 text-zion-cyan" />
                      Solution
                    </h4>
                    <p className="text-zion-cyan/80 text-sm leading-relaxed">{study.solution}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-zion-cyan" />
                      Results
                    </h4>
                    <ul className="space-y-2">
                      {study.results.map((result, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-zion-cyan/80 text-sm">
                          <CheckCircle className="w-4 h-4 text-zion-cyan flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                      <Zap className="w-5 h-5 text-zion-cyan" />
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech, idx) => (
                        <span key={idx} className="bg-zion-slate/50 text-zion-cyan/80 px-3 py-1 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-zion-cyan/20">
                    <div className="text-sm text-zion-cyan/60">
                      <span className="font-medium">{study.team}</span> • {study.duration}
                    </div>
                    <button className="text-zion-cyan hover:text-zion-cyan/80 font-medium flex items-center gap-2 transition-colors duration-300">
                      Read Full Case Study
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-zion-cyan/80 mb-8">
              Let's discuss how we can help you achieve similar results and transform your business 
              with innovative technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-zion-cyan hover:bg-zion-cyan/80 text-zion-slate-dark px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105">
                Schedule a Consultation
              </button>
              <button className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-slate-dark px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300">
                Download Case Studies
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

// Icon component for retail filter
const ShoppingBag: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
  </svg>
);

export default CaseStudies;
