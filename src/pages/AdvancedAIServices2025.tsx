import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {

  Brain, Cpu, Database, ChartBar, Eye, MessageCircle, FileText,
  Zap, CheckCircle, ArrowRight, Phone, Mail, MapPin, Globe,
  Star, Award, Clock, Calendar, Sparkles, Users, Shield, Cloud
} from 'lucide-react';

// Advanced AI Services with Real Market Pricing
const aiServices = [
  {

    id: 'ai-business-intelligence',
    title: 'AI Business Intelligence',
    description: 'Enterprise AI-powered analytics platform with predictive insights and automated reporting.',
    icon: Brain,
    category: 'Analytics',
    features: [
      'Predictive Analytics',
      'Natural Language Queries',
      'Real-time Dashboards',
      'Automated Insights',
      'Multi-source Integration',
      'Custom ML Models',
      'API Access',
      'White-label Solutions'
    ],
    pricing: {

      starter: '$499/month',
      professional: '$1,299/month',
      enterprise: '$2,999/month'
    },
    benefits: [
      '60% faster decision making',
      '40% revenue increase',
      '24/7 automated monitoring',
      'ROI within 30 days'
    ],
    marketPrice: '$500-3,000/month',
    competitors: ['Tableau', 'Power BI', 'Looker']
  },
  {

    id: 'ai-content-generation',
    title: 'AI Content Generation',
    description: 'Professional content creation platform powered by advanced language models.',
    icon: FileText,
    category: 'Content',
    features: [
      'Multi-format Generation',
      'SEO Optimization',
      'Brand Voice Consistency',
      'Multi-language Support',
      'Content Calendar',
      'Performance Analytics',
      'Plagiarism Detection',
      'Social Media Integration'
    ],
    pricing: {

      starter: '$99/month',
      professional: '$299/month',
      enterprise: '$799/month'
    },
    benefits: [
      '10x faster content creation',
      'Improved SEO rankings',
      'Consistent brand messaging',
      'Multi-platform publishing'
    ],
    marketPrice: '$150-800/month',
    competitors: ['Jasper', 'Copy.ai', 'Writesonic']
  },
  {

    id: 'ai-customer-service',
    title: 'AI Customer Service',
    description: 'Intelligent customer support automation with natural language processing.',
    icon: MessageCircle,
    category: 'Support',
    features: [
      '24/7 AI Chatbots',
      'Multi-language Support',
      'Sentiment Analysis',
      'Smart Routing',
      'Knowledge Base',
      'CRM Integration',
      'Performance Analytics',
      'Human Handoff'
    ],
    pricing: {

      starter: '$199/month',
      professional: '$499/month',
      enterprise: '$1,299/month'
    },
    benefits: [
      '80% faster response time',
      '24/7 availability',
      'Improved satisfaction',
      'Reduced costs'
    ],
    marketPrice: '$300-1,500/month',
    competitors: ['Intercom', 'Zendesk', 'Freshdesk']
  },
  {

    id: 'ai-computer-vision',
    title: 'AI Computer Vision',
    description: 'Advanced image and video analysis for quality control and automation.',
    icon: Eye,
    category: 'Vision',
    features: [
      'Object Detection',
      'Quality Control',
      'Facial Recognition',
      'Document Processing',
      'Video Analytics',
      'Custom Models',
      'Real-time Processing',
      'API Integration'
    ],
    pricing: {

      starter: '$299/month',
      professional: '$799/month',
      enterprise: '$1,999/month'
    },
    benefits: [
      '99.9% accuracy rate',
      'Real-time processing',
      'Reduced manual work',
      'Improved quality'
    ],
    marketPrice: '$400-2,500/month',
    competitors: ['Google Vision', 'AWS Rekognition', 'Azure Computer Vision']
  },
  {

    id: 'ai-process-automation',
    title: 'AI Process Automation',
    description: 'Intelligent automation for business processes and workflows.',
    icon: Cpu,
    category: 'Automation',
    features: [
      'Workflow Automation',
      'Document Processing',
      'Data Extraction',
      'Decision Making',
      'Integration APIs',
      'Performance Analytics',
      'Custom Workflows',
      'Mobile Support'
    ],
    pricing: {

      starter: '$149/month',
      professional: '$399/month',
      enterprise: '$999/month'
    },
    benefits: [
      '70% efficiency gain',
      'Reduced errors',
      'Faster processing',
      'Improved compliance'
    ],
    marketPrice: '$200-1,200/month',
    competitors: ['UiPath', 'Automation Anywhere', 'Blue Prism']
  },
  {

    id: 'ai-data-science',
    title: 'AI Data Science Platform',
    description: 'End-to-end data science platform with automated ML and model deployment.',
    icon: ChartBar,
    category: 'Data Science',
    features: [
      'Automated ML',
      'Model Training',
      'Feature Engineering',
      'Model Deployment',
      'Performance Monitoring',
      'A/B Testing',
      'API Management',
      'Scalable Infrastructure'
    ],
    pricing: {

      starter: '$399/month',
      professional: '$999/month',
      enterprise: '$2,499/month'
    },
    benefits: [
      '90% faster model development',
      'Automated optimization',
      'Scalable deployment',
      'Continuous improvement'
    ],
    marketPrice: '$500-3,000/month',
    competitors: ['DataRobot', 'H2O.ai', 'Google AutoML']
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
    description: 'Get AI solutions running in weeks'
  },
  {

    icon: CheckCircle,
    title: 'Proven ROI',
    description: 'See results within 30-60 days'
  },
  {

    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-level security and compliance'
  },
  {

    icon: Users,
    title: 'Expert AI Team',
    description: 'PhD-level AI specialists'
  }
];

export default function AdvancedAIServices2025() {

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
              Next-Generation AI Solutions
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Advanced
              <span className="block bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                AI Services
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-zion-slate-light mb-8 leading-relaxed">
              Transform your business with cutting-edge AI solutions. 
              From analytics to automation, we deliver enterprise-grade AI that drives results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-dark hover:to-zion-purple-dark text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-zion-cyan/25"
              >
                Start AI Transformation
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href={`tel:${contactInfo.mobile}`}
                className="inline-flex items-center gap-2 border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark px-8 py-4 rounded-xl font-semibold transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                Call AI Experts
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
                AI Service Portfolio
              </span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Enterprise-grade AI solutions designed for modern businesses
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
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
                    Get AI Quote
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
                Embrace AI?
              </span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Let's discuss how our AI services can transform your business.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="bg-zion-blue-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-2xl p-8">
                <Phone className="w-16 h-16 text-zion-cyan mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Call AI Experts</h3>
                <a href={`tel:${contactInfo.mobile}`} className="text-zion-cyan hover:text-zion-cyan-light transition-colors">
                  {contactInfo.mobile}
                </a>
              </div>
              <div className="bg-zion-blue-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-2xl p-8">
                <Mail className="w-16 h-16 text-zion-cyan mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Email AI Team</h3>
                <a href={`mailto:${contactInfo.email}`} className="text-zion-cyan hover:text-zion-cyan-light transition-colors">
                  {contactInfo.email}
                </a>
              </div>
              <div className="bg-zion-blue-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-2xl p-8">
                <Globe className="w-16 h-16 text-zion-cyan mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Visit Website</h3>
                <a href={contactInfo.website} target="_blank" rel="noopener noreferrer" className="text-zion-cyan hover:text-zion-cyan-light transition-colors">
                  {contactInfo.website}
                </a>
              </div>
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-dark hover:to-zion-purple-dark text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Start Your AI Journey
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}