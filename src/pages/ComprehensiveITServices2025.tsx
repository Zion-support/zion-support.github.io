import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {

  Server, Shield, Cloud, Code, Network, Database, Lock, Users,
  Zap, CheckCircle, ArrowRight, Phone, Mail, MapPin, Globe,
  Star, Award, Clock, Calendar, Sparkles, Cpu, HardDrive,
  Wifi, Bluetooth, Satellite, Telescope, Robot, Brain
} from 'lucide-react';

// Comprehensive IT Services with Real Market Pricing
const itServices = [
  {

    id: 'managed-it-services',
    title: 'Managed IT Services',
    description: 'Complete IT infrastructure management with 24/7 monitoring, support, and proactive maintenance.',
    icon: Server,
    category: 'Infrastructure',
    features: [
      '24/7 Network Monitoring',
      'Proactive Maintenance',
      'Help Desk Support',
      'Security Management',
      'Backup & Recovery',
      'Performance Optimization',
      'Compliance Management',
      'Vendor Management'
    ],
    pricing: {

      starter: '$2,999/month',
      professional: '$5,999/month',
      enterprise: '$12,999/month'
    },
    benefits: [
      '99.9% uptime guarantee',
      'Reduced IT costs by 30%',
      'Predictable monthly costs',
      'Expert IT team access'
    ],
    marketPrice: '$3,000-15,000/month',
    competitors: ['Datto', 'ConnectWise', 'Kaseya']
  },
  {

    id: 'cybersecurity-solutions',
    title: 'Enterprise Cybersecurity',
    description: 'Comprehensive security solutions including threat detection, incident response, and compliance.',
    icon: Shield,
    category: 'Security',
    features: [
      'Threat Detection & Response',
      'Vulnerability Assessment',
      'Security Awareness Training',
      'Compliance Management',
      'Penetration Testing',
      'Security Monitoring',
      'Incident Response',
      'Risk Assessment'
    ],
    pricing: {

      starter: '$1,999/month',
      professional: '$4,999/month',
      enterprise: '$9,999/month'
    },
    benefits: [
      '99.9% threat detection rate',
      'SOC2 compliance support',
      '24/7 security monitoring',
      'Reduced security incidents'
    ],
    marketPrice: '$2,000-12,000/month',
    competitors: ['CrowdStrike', 'SentinelOne', 'Carbon Black']
  },
  {

    id: 'cloud-migration',
    title: 'Cloud Migration Services',
    description: 'End-to-end cloud migration with strategy, implementation, and optimization.',
    icon: Cloud,
    category: 'Cloud',
    features: [
      'Cloud Strategy Planning',
      'Migration Assessment',
      'Data Migration',
      'Application Modernization',
      'Performance Optimization',
      'Cost Optimization',
      'Security Implementation',
      'Training & Support'
    ],
    pricing: {

      starter: '$15,000',
      professional: '$50,000',
      enterprise: '$150,000+'
    },
    benefits: [
      '30% cost reduction',
      'Improved scalability',
      'Enhanced security',
      'Better performance'
    ],
    marketPrice: '$20,000-200,000',
    competitors: ['Accenture', 'Deloitte', 'AWS Professional Services']
  },
  {

    id: 'data-analytics',
    title: 'Data Analytics & BI',
    description: 'Transform raw data into actionable insights with advanced analytics and visualization.',
    icon: Brain,
    category: 'Analytics',
    features: [
      'Data Warehouse Design',
      'ETL Pipeline Development',
      'Business Intelligence',
      'Predictive Analytics',
      'Real-time Dashboards',
      'Data Governance',
      'Performance Optimization',
      'User Training'
    ],
    pricing: {

      starter: '$3,999/month',
      professional: '$8,999/month',
      enterprise: '$19,999/month'
    },
    benefits: [
      'Improved decision making',
      'Real-time insights',
      'Data-driven culture',
      'Competitive advantage'
    ],
    marketPrice: '$4,000-25,000/month',
    competitors: ['Tableau', 'Power BI', 'Looker']
  }
];

// Contact Information
const contactInfo = {

  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

// Benefits
const benefits = [
  {

    icon: Zap,
    title: 'Rapid Implementation',
    description: 'Get up and running in weeks, not months'
  },
  {

    icon: CheckCircle,
    title: 'Proven ROI',
    description: 'See measurable results within 60 days'
  },
  {

    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-level security and compliance'
  },
  {

    icon: Users,
    title: 'Expert Team',
    description: 'Certified professionals with 15+ years experience'
  }
];

export default function ComprehensiveITServices2025() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-blue">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zion-cyan/20 border border-zion-cyan/30 text-zion-cyan text-sm font-medium mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Sparkles className="w-4 h-4" />
              Enterprise IT Solutions
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Comprehensive
              <span className="block bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                IT Services
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-zion-slate-light mb-8 leading-relaxed">
              Transform your IT infrastructure with our enterprise-grade solutions. 
              From managed services to cybersecurity, we've got you covered.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-dark hover:to-zion-purple-dark text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-zion-cyan/25"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href={`tel:${contactInfo.mobile}`}
                className="inline-flex items-center gap-2 border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark px-8 py-4 rounded-xl font-semibold transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our
              <span className="block bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                IT Service Portfolio
              </span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Enterprise-grade IT solutions designed for modern businesses
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {itServices.map((service, index) => (
              <motion.div
                key={service.id}
                className="bg-zion-blue-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-2xl p-8 hover:border-zion-cyan/40 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <span className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-xs font-medium rounded-full">
                    {service.category}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-zion-slate-light mb-6">{service.description}</p>

                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-zion-slate-light text-sm">
                        <CheckCircle className="w-4 h-4 text-zion-cyan" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6 p-4 bg-zion-blue-dark/30 rounded-xl">
                  <h4 className="text-white font-semibold mb-2">Pricing:</h4>
                  <div className="space-y-1 text-sm">
                    {Object.entries(service.pricing).map(([plan, price]) => (
                      <div key={plan} className="flex justify-between">
                        <span className="text-zion-slate-light capitalize">{plan}:</span>
                        <span className="text-zion-cyan font-semibold">{price}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-2 text-xs text-zion-slate-light">
                    Market average: {service.marketPrice}
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <Link
                    to="/contact"
                    className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-dark hover:to-zion-purple-dark text-white px-6 py-3 rounded-xl font-semibold text-center transition-all duration-300"
                  >
                    Get Quote
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-zion-blue-dark/30">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to
              <span className="block bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Transform Your IT?
              </span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Let's discuss how our IT services can drive your business forward.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="bg-zion-blue-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-2xl p-8">
                <Phone className="w-16 h-16 text-zion-cyan mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
                <a href={`tel:${contactInfo.mobile}`} className="text-zion-cyan hover:text-zion-cyan-light transition-colors">
                  {contactInfo.mobile}
                </a>
              </div>
              <div className="bg-zion-blue-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-2xl p-8">
                <Mail className="w-16 h-16 text-zion-cyan mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
                <a href={`mailto:${contactInfo.email}`} className="text-zion-cyan hover:text-zion-cyan-light transition-colors">
                  {contactInfo.email}
                </a>
              </div>
              <div className="bg-zion-blue-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-2xl p-8">
                <MapPin className="w-16 h-16 text-zion-cyan mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Visit Us</h3>
                <span className="text-zion-slate-light text-sm">{contactInfo.address}</span>
              </div>
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-dark hover:to-zion-purple-dark text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Start Your IT Transformation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}