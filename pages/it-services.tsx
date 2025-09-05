import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import {
  Server, Shield, Cloud, Database, Network, Monitor, Settings, CheckCircle, 
  ArrowRight, Clock, Award, Star, Zap, TrendingUp, Users, Lock, Globe, Cpu, 
  HardDrive, Wifi, Smartphone, Laptop, Building, BarChart3, Code, Search, 
  ShoppingCart, BookOpen, Brain, DollarSign, Rocket, Sprout, Eye, Bot, Target,
  Phone, MapPin, Gamepad2, Music, Palette, Camera, Car, Heart, Building2
} from 'lucide-react';

const itServices = [
  {
    title: 'Cloud Infrastructure Management',
    description: 'Comprehensive cloud solutions including AWS, Azure, and Google Cloud Platform management.',
    icon: Cloud,
    features: ['Multi-cloud Strategy', 'Cost Optimization', 'Auto-scaling', 'Disaster Recovery'],
    pricing: '$6,000 - $30,000/project',
    category: 'Cloud',
    popular: true,
    benefits: ['Cost Savings', 'Scalability', 'Reliability', 'Global Reach'],
    marketPrice: '$10,000 - $50,000/project',
    link: 'https://ziontechgroup.com/cloud-infrastructure-management'
  },
  {
    title: 'Cybersecurity Solutions',
    description: 'Enterprise-grade security services to protect your digital assets and data.',
    icon: Shield,
    features: ['Threat Detection', 'Vulnerability Assessment', 'Security Audits', 'Incident Response'],
    pricing: '$5,000 - $40,000/project',
    category: 'Security',
    popular: true,
    benefits: ['Enhanced Security', 'Compliance Ready', 'Risk Reduction', 'Peace of Mind'],
    marketPrice: '$7,500 - $60,000/project',
    link: 'https://ziontechgroup.com/cybersecurity-solutions'
  },
  {
    title: 'Network Infrastructure',
    description: 'Design, implementation, and management of robust network infrastructure.',
    icon: Network,
    features: ['Network Design', 'Performance Optimization', 'Monitoring', 'Troubleshooting'],
    pricing: '$120 - $220/hour',
    category: 'Networking',
    benefits: ['Reliable Connectivity', 'High Performance', 'Scalable Design', 'Expert Support'],
    marketPrice: '$150 - $300/hour',
    link: 'https://ziontechgroup.com/network-infrastructure'
  },
  {
    title: 'Database Management',
    description: 'Comprehensive database solutions including design, optimization, and maintenance.',
    icon: Database,
    features: ['Database Design', 'Performance Tuning', 'Backup & Recovery', 'Migration Services'],
    pricing: '$2,000 - $15,000/project',
    category: 'Database',
    benefits: ['Data Integrity', 'Performance Optimization', 'Reliable Backup', 'Seamless Migration'],
    marketPrice: '$3,000 - $22,500/project',
    link: 'https://ziontechgroup.com/database-management'
  },
  {
    title: 'System Administration',
    description: '24/7 system administration and maintenance services for your IT infrastructure.',
    icon: Settings,
    features: ['Server Management', 'User Administration', 'System Monitoring', 'Patch Management'],
    pricing: '$2,000 - $8,000/month',
    category: 'Administration',
    benefits: ['24/7 Support', 'Proactive Monitoring', 'Reduced Downtime', 'Expert Management'],
    marketPrice: '$3,000 - $12,000/month',
    link: 'https://ziontechgroup.com/system-administration'
  },
  {
    title: 'IT Consulting',
    description: 'Strategic IT consulting to align technology with business objectives.',
    icon: Users,
    features: ['Technology Assessment', 'Strategic Planning', 'Vendor Selection', 'Implementation Support'],
    pricing: '$150 - $300/hour',
    category: 'Consulting',
    benefits: ['Strategic Guidance', 'Cost Optimization', 'Technology Alignment', 'Expert Advice'],
    marketPrice: '$200 - $400/hour',
    link: 'https://ziontechgroup.com/it-consulting'
  },
  {
    title: 'DevOps & CI/CD Implementation',
    description: 'Complete DevOps transformation with continuous integration and deployment pipelines.',
    icon: Server,
    features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Container Orchestration', 'Monitoring & Logging'],
    pricing: '$10,000 - $50,000/project',
    category: 'DevOps',
    popular: true,
    benefits: ['Faster Deployment', 'Improved Quality', 'Automated Processes', 'Better Collaboration'],
    marketPrice: '$15,000 - $75,000/project',
    link: 'https://ziontechgroup.com/devops-cicd'
  },
  {
    title: 'Data Center Migration',
    description: 'Seamless migration of on-premises infrastructure to cloud or new data centers.',
    icon: HardDrive,
    features: ['Migration Planning', 'Zero-downtime Migration', 'Data Validation', 'Performance Optimization'],
    pricing: '$15,000 - $100,000/project',
    category: 'Migration',
    benefits: ['Seamless Transition', 'Zero Downtime', 'Data Integrity', 'Performance Optimization'],
    marketPrice: '$22,500 - $150,000/project',
    link: 'https://ziontechgroup.com/data-center-migration'
  },
  {
    title: 'IT Asset Management',
    description: 'Comprehensive IT asset lifecycle management and optimization.',
    icon: Monitor,
    features: ['Asset Discovery', 'License Management', 'Lifecycle Tracking', 'Cost Optimization'],
    pricing: '$3,000 - $15,000/setup',
    category: 'Asset Management',
    benefits: ['Cost Control', 'License Compliance', 'Asset Tracking', 'Optimization'],
    marketPrice: '$4,500 - $22,500/setup',
    link: 'https://ziontechgroup.com/it-asset-management'
  },
  {
    title: 'Backup & Disaster Recovery',
    description: 'Comprehensive backup solutions and disaster recovery planning.',
    icon: Shield,
    features: ['Automated Backups', 'Disaster Recovery Testing', 'RTO/RPO Optimization', 'Compliance'],
    pricing: '$2,000 - $20,000/setup',
    category: 'Backup & Recovery',
    benefits: ['Data Protection', 'Business Continuity', 'Compliance Ready', 'Peace of Mind'],
    marketPrice: '$3,000 - $30,000/setup',
    link: 'https://ziontechgroup.com/backup-disaster-recovery'
  }
];

export default function ITServices() {
  return (
    <>
      <Head>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including cloud infrastructure, cybersecurity, network management, and system administration." />
        <meta name="keywords" content="IT services, cloud infrastructure, cybersecurity, network management, system administration" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.h1 
              className="text-5xl md:text-6xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              IT Services
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Comprehensive IT solutions to keep your business running smoothly and securely. 
              From cloud infrastructure to cybersecurity, we've got you covered.
            </motion.p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itServices.map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center mb-4">
                    <service.icon className="text-blue-400 mr-3" size={32} />
                    <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                    {service.popular && (
                      <span className="ml-auto bg-yellow-500 text-black px-2 py-1 rounded text-xs font-medium">
                        Popular
                      </span>
                    )}
                  </div>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <div className="text-2xl font-bold text-blue-400 mb-1">{service.pricing}</div>
                    <div className="text-sm text-gray-400">Market: {service.marketPrice}</div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-gray-300 flex items-center">
                          <CheckCircle className="text-green-400 mr-2" size={14} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="text-sm text-gray-300 flex items-center">
                          <ArrowRight className="text-blue-400 mr-2" size={14} />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-400 bg-gray-700 px-2 py-1 rounded">
                      {service.category}
                    </span>
                    <Link 
                      href={service.link}
                      className="text-blue-400 hover:text-blue-300 text-sm font-medium"
                    >
                      Learn More →
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 bg-white/5 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your IT Infrastructure?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Let's discuss how our IT services can optimize your technology stack and drive business growth.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link 
                  href="/contact"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg inline-flex items-center justify-center"
                >
                  Get Free Consultation
                  <ArrowRight className="ml-2" size={20} />
                </Link>
                <Link 
                  href="/ai-services"
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
                >
                  View AI Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}