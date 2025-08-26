import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle,
  Star,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  TrendingUp,
  Users,
  Zap,
  Shield,
  Brain,
  Cloud,
  Globe,
  Lock,
  Cpu,
  Sparkles
} from 'lucide-react';
import SEOHead from '../components/SEOHead';

const ComprehensivePricing2025: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const serviceCategories = [
    { id: 'all', name: 'All Services', icon: Sparkles, color: 'from-purple-600 to-pink-600' },
    { id: 'ai-ml', name: 'AI & Machine Learning', icon: Brain, color: 'from-blue-600 to-cyan-600' },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, color: 'from-red-600 to-pink-600' },
    { id: 'cloud-infrastructure', name: 'Cloud & Infrastructure', icon: Cloud, color: 'from-indigo-600 to-purple-600' },
    { id: 'quantum', name: 'Quantum Technology', icon: Globe, color: 'from-violet-600 to-purple-600' },
    { id: 'healthcare', name: 'Healthcare Tech', icon: TrendingUp, color: 'from-green-600 to-emerald-600' },
    { id: 'fintech', name: 'Financial Technology', icon: Zap, color: 'from-yellow-600 to-orange-600' },
    { id: 'legal-tech', name: 'Legal Technology', icon: Lock, color: 'from-purple-600 to-indigo-600' },
    { id: 'edge-computing', name: 'Edge Computing', icon: Cpu, color: 'from-cyan-600 to-blue-600' },
    { id: 'blockchain', name: 'Blockchain & Web3', icon: Globe, color: 'from-orange-600 to-red-600' }
  ];

  const pricingPlans = [
    // AI & Machine Learning Services
    {
      id: 'ai-legal-document-analyzer',
      name: 'AI Legal Document Analyzer',
      category: 'ai-ml',
      icon: '⚖️',
      color: 'from-purple-600 to-indigo-600',
      price: '$299',
      period: '/month',
      description: 'Intelligent legal document review and analysis with AI-powered insights',
      features: [
        'AI-powered contract analysis with 95% accuracy',
        'Risk assessment and compliance checking',
        'Automated legal document summarization',
        'Contract clause comparison and benchmarking',
        'Legal precedent research and citation',
        'Document version control and tracking',
        'Team collaboration with role-based access',
        'Integration with legal management systems',
        'Custom AI model training for specific practice areas',
        'Real-time legal research and updates'
      ],
      popular: true,
      link: 'https://ziontechgroup.com/ai-legal-analyzer',
      marketPosition: 'Competes with DocuSign ($25/user/month), ContractPodAi ($50/user/month)',
      targetAudience: 'Law firms, Legal departments, Contract managers, Compliance officers',
      roi: '500% ROI through reduced review time and improved accuracy',
      competitors: ['DocuSign', 'ContractPodAi', 'Kira Systems', 'eBrevia'],
      marketSize: '$2.8B legal tech market',
      growthRate: '28% annual growth',
      setupTime: '1 week',
      trialDays: 14,
      customers: 78,
      rating: 4.9,
      reviews: 45
    },
    {
      id: 'ai-healthcare-diagnostics',
      name: 'AI Healthcare Diagnostics Platform',
      category: 'healthcare',
      icon: '🏥',
      color: 'from-blue-600 to-cyan-600',
      price: '$899',
      period: '/month',
      description: 'Advanced medical imaging analysis and diagnostic support',
      features: [
        'AI-powered medical image analysis (95%+ accuracy)',
        'Support for X-ray, MRI, CT, ultrasound, and pathology images',
        'Automated abnormality detection and classification',
        'Diagnostic report generation and recommendations',
        'Patient history integration and trend analysis',
        'HIPAA-compliant data security and privacy',
        'Integration with PACS and EMR systems',
        'Real-time collaboration between radiologists',
        'Custom AI model training for specific specialties',
        'Performance analytics and quality metrics'
      ],
      popular: true,
      link: 'https://ziontechgroup.com/ai-healthcare-diagnostics',
      marketPosition: 'Competes with Aidoc ($500/study), Arterys ($200/study)',
      targetAudience: 'Hospitals, Imaging centers, Radiology practices, Healthcare systems',
      roi: '400% ROI through improved diagnostic accuracy and efficiency',
      competitors: ['Aidoc', 'Arterys', 'Zebra Medical Vision', 'Enlitic'],
      marketSize: '$45B medical imaging market',
      growthRate: '32% annual growth in AI segment',
      setupTime: '2-4 weeks',
      trialDays: 21,
      customers: 45,
      rating: 4.9,
      reviews: 32
    },
    {
      id: 'ai-content-creation-studio',
      name: 'AI Content Creation Studio',
      category: 'ai-ml',
      icon: '🎨',
      color: 'from-pink-600 to-rose-600',
      price: '$399',
      period: '/month',
      description: 'Professional content creation powered by artificial intelligence',
      features: [
        'AI-powered text, image, video, and audio generation',
        'Brand voice training and consistency',
        'Multi-format content creation (blog, social, video)',
        'Advanced editing and customization tools',
        'SEO optimization and keyword research',
        'Content calendar and scheduling',
        'Team collaboration and workflow management',
        'Integration with major platforms',
        'Performance analytics and optimization',
        'Custom AI model training'
      ],
      popular: true,
      link: 'https://ziontechgroup.com/ai-content-studio',
      marketPosition: 'Competes with Jasper ($39/month), Copy.ai ($36/month), Midjourney ($30/month)',
      targetAudience: 'Marketing agencies, Content creators, E-commerce businesses, Social media managers',
      roi: '300% ROI through improved content quality and reduced creation time',
      competitors: ['Jasper', 'Copy.ai', 'Midjourney', 'DALL-E', 'Canva'],
      marketSize: '$18B content creation market',
      growthRate: '35% annual growth',
      setupTime: '5 minutes',
      trialDays: 14,
      customers: 156,
      rating: 4.8,
      reviews: 89
    },

    // Cybersecurity Services
    {
      id: 'quantum-safe-cybersecurity',
      name: 'Quantum-Safe Cybersecurity Platform',
      category: 'cybersecurity',
      icon: '🔐',
      color: 'from-green-600 to-emerald-600',
      price: '$1,299',
      period: '/month',
      description: 'Post-quantum cryptography for future-proof security',
      features: [
        'Post-quantum cryptography algorithms (NIST standards)',
        'Quantum-resistant key management',
        'Real-time threat detection and response',
        'Zero-trust security architecture',
        'Advanced encryption standards (AES-256, ChaCha20)',
        'Quantum key distribution (QKD) support',
        'Compliance with NIST, ISO, and SOC2 standards',
        'Automated security testing and validation',
        'Integration with existing security infrastructure',
        '24/7 security monitoring and alerting'
      ],
      popular: false,
      link: 'https://ziontechgroup.com/quantum-safe-cybersecurity',
      marketPosition: 'Leading edge in quantum-safe security',
      targetAudience: 'Financial institutions, Government agencies, Healthcare organizations, Defense contractors',
      roi: '300% ROI through reduced security risks and compliance benefits',
      competitors: ['Traditional cybersecurity vendors', 'Quantum-safe startups'],
      marketSize: '$150B cybersecurity market',
      growthRate: '45% annual growth in quantum-safe segment',
      setupTime: '2-3 weeks',
      trialDays: 30,
      customers: 23,
      rating: 4.8,
      reviews: 18
    },
    {
      id: 'ai-cybersecurity-soc',
      name: 'AI Cybersecurity Operations Center',
      category: 'cybersecurity',
      icon: '🛡️',
      color: 'from-red-600 to-pink-600',
      price: '$1,899',
      period: '/month',
      description: 'Intelligent security operations with AI-powered threat detection',
      features: [
        'AI-powered threat detection and analysis',
        'Real-time security monitoring',
        'Automated incident response',
        'Threat intelligence and correlation',
        'Vulnerability assessment and management',
        'Security analytics and reporting',
        'Integration with security tools',
        '24/7 security operations',
        'Custom security playbooks',
        'Compliance and audit support'
      ],
      popular: true,
      link: 'https://ziontechgroup.com/ai-cybersecurity-soc',
      marketPosition: 'Competes with Splunk ($150/GB/month), IBM QRadar ($1,000/month)',
      targetAudience: 'Enterprises, Government agencies, Financial institutions, Healthcare organizations',
      roi: '400% ROI through improved security posture and reduced incident response time',
      competitors: ['Splunk', 'IBM QRadar', 'Exabeam', 'Rapid7'],
      marketSize: '$45B cybersecurity market',
      growthRate: '28% annual growth',
      setupTime: '3-4 weeks',
      trialDays: 21,
      customers: 89,
      rating: 4.8,
      reviews: 67
    },

    // Cloud & Infrastructure Services
    {
      id: 'multi-cloud-orchestration',
      name: 'Multi-Cloud Orchestration Platform',
      category: 'cloud-infrastructure',
      icon: '☁️',
      color: 'from-blue-600 to-cyan-600',
      price: '$1,299',
      period: '/month',
      description: 'Unified management across AWS, Azure, Google Cloud, and private clouds',
      features: [
        'Unified dashboard for multiple cloud providers',
        'Intelligent workload placement optimization',
        'Automated cost optimization and savings',
        'Seamless cloud migration and portability',
        'Multi-cloud security and compliance management',
        'Real-time performance monitoring and alerting',
        'Automated disaster recovery and backup',
        'Integration with existing DevOps tools',
        'Custom automation and orchestration',
        '24/7 cloud operations support'
      ],
      popular: true,
      link: 'https://ziontechgroup.com/multi-cloud-orchestration',
      marketPosition: 'Competes with HashiCorp ($0.50/hour), Terraform Cloud ($20/user/month)',
      targetAudience: 'Enterprises, Cloud architects, DevOps teams, IT operations',
      roi: '400% ROI through reduced cloud costs and improved efficiency',
      competitors: ['HashiCorp', 'Terraform Cloud', 'CloudBolt', 'RightScale'],
      marketSize: '$25B multi-cloud management market',
      growthRate: '35% annual growth',
      setupTime: '2-3 weeks',
      trialDays: 21,
      customers: 67,
      rating: 4.8,
      reviews: 45
    },
    {
      id: 'ai-devops-automation',
      name: 'AI-Powered DevOps Automation Platform',
      category: 'cloud-infrastructure',
      icon: '⚡',
      color: 'from-yellow-600 to-orange-600',
      price: '$899',
      period: '/month',
      description: 'Intelligent automation for development and operations',
      features: [
        'AI-powered CI/CD pipeline optimization',
        'Intelligent infrastructure as code',
        'Automated testing and quality assurance',
        'Performance monitoring and optimization',
        'Incident prediction and prevention',
        'Automated rollback and recovery',
        'Integration with development tools',
        'Custom automation workflows',
        'Advanced analytics and reporting',
        '24/7 DevOps operations support'
      ],
      popular: true,
      link: 'https://ziontechgroup.com/ai-devops-automation',
      marketPosition: 'Competes with GitLab ($99/user/month), GitHub Actions ($4/month), Jenkins (free)',
      targetAudience: 'Development teams, DevOps engineers, IT operations, Software companies',
      roi: '300% ROI through reduced deployment time and improved reliability',
      competitors: ['GitLab', 'GitHub Actions', 'Jenkins', 'CircleCI', 'Travis CI'],
      marketSize: '$8B DevOps market',
      growthRate: '28% annual growth',
      setupTime: '1-2 weeks',
      trialDays: 14,
      customers: 89,
      rating: 4.7,
      reviews: 67
    },

    // Quantum Technology Services
    {
      id: 'quantum-machine-learning',
      name: 'Quantum Machine Learning Platform',
      category: 'quantum',
      icon: '🔮',
      color: 'from-violet-600 to-purple-600',
      price: '$2,999',
      period: '/month',
      description: 'Revolutionary machine learning powered by quantum computing',
      features: [
        'Quantum machine learning algorithms',
        'Hybrid quantum-classical computing',
        'Quantum optimization and sampling',
        'Quantum neural networks',
        'Integration with classical ML frameworks',
        'Quantum error correction',
        'Custom quantum algorithm development',
        'Performance benchmarking and analysis',
        'Cloud-based quantum computing access',
        'Expert consultation and support'
      ],
      popular: false,
      link: 'https://ziontechgroup.com/quantum-ml',
      marketPosition: 'Leading edge in quantum machine learning',
      targetAudience: 'Research institutions, Pharmaceutical companies, Financial services, Aerospace',
      roi: '600% ROI through accelerated discoveries and breakthroughs',
      competitors: ['IBM Quantum', 'Google Quantum', 'AWS Braket', 'Azure Quantum'],
      marketSize: '$1.8B quantum computing market',
      growthRate: '55% annual growth',
      setupTime: '4-6 weeks',
      trialDays: 30,
      customers: 12,
      rating: 4.9,
      reviews: 8
    },
    {
      id: 'quantum-internet-infrastructure',
      name: 'Quantum Internet Infrastructure Platform',
      category: 'quantum',
      icon: '🌐🔮',
      color: 'from-violet-600 to-purple-600',
      price: '$3,999',
      period: '/month',
      description: 'Next-generation quantum networking for ultra-secure communications',
      features: [
        'Quantum key distribution (QKD)',
        'Quantum repeater networks',
        'Quantum network management',
        'Quantum-safe communications',
        'Integration with classical networks',
        'Custom quantum protocols',
        'Performance monitoring and optimization',
        'Expert consultation and support',
        'Research and development collaboration',
        '24/7 quantum network operations'
      ],
      popular: false,
      link: 'https://ziontechgroup.com/quantum-internet',
      marketPosition: 'Leading edge in quantum internet',
      targetAudience: 'Government agencies, Defense contractors, Financial institutions, Research institutions',
      roi: '800% ROI through enhanced security and capabilities',
      competitors: ['Traditional networking vendors', 'Quantum networking startups'],
      marketSize: '$1.2B quantum networking market',
      growthRate: '70% annual growth',
      setupTime: '6-8 weeks',
      trialDays: 45,
      customers: 6,
      rating: 4.9,
      reviews: 4
    },

    // Financial Technology Services
    {
      id: 'ai-financial-risk-management',
      name: 'AI Financial Risk Management Platform',
      category: 'fintech',
      icon: '💰',
      color: 'from-yellow-600 to-orange-600',
      price: '$1,499',
      period: '/month',
      description: 'Intelligent risk assessment and portfolio optimization',
      features: [
        'AI-powered risk assessment and modeling',
        'Real-time portfolio risk monitoring',
        'Stress testing and scenario analysis',
        'Regulatory compliance (Basel III, Solvency II)',
        'Multi-asset class support',
        'Machine learning-based predictions',
        'Integration with trading platforms',
        'Custom risk models and parameters',
        'Advanced reporting and analytics',
        '24/7 risk monitoring and alerting'
      ],
      popular: true,
      link: 'https://ziontechgroup.com/ai-financial-risk',
      marketPosition: 'Competes with RiskMetrics ($2,000/month), Bloomberg Risk ($1,500/month)',
      targetAudience: 'Banks, Investment firms, Insurance companies, Asset managers, Hedge funds',
      roi: '450% ROI through improved risk management and compliance',
      competitors: ['RiskMetrics', 'Bloomberg Risk', 'MSCI', 'FactSet'],
      marketSize: '$8.5B risk management market',
      growthRate: '25% annual growth',
      setupTime: '3-4 weeks',
      trialDays: 30,
      customers: 34,
      rating: 4.8,
      reviews: 28
    },

    // Blockchain & Web3 Services
    {
      id: 'blockchain-supply-chain',
      name: 'Blockchain Supply Chain Transparency Platform',
      category: 'blockchain',
      icon: '🔗',
      color: 'from-orange-600 to-red-600',
      price: '$599',
      period: '/month',
      description: 'End-to-end supply chain visibility with blockchain technology',
      features: [
        'Blockchain-based supply chain tracking',
        'Real-time product traceability',
        'Smart contract automation for compliance',
        'Supplier verification and certification',
        'Product authenticity verification',
        'Sustainability and ESG compliance tracking',
        'Integration with ERP and WMS systems',
        'Mobile app for field workers',
        'Advanced analytics and reporting',
        'Multi-stakeholder collaboration tools'
      ],
      popular: false,
      link: 'https://ziontechgroup.com/blockchain-supply-chain',
      marketPosition: 'Competes with IBM Food Trust ($100/month), VeChain ($50/month)',
      targetAudience: 'Manufacturers, Retailers, Logistics companies, Food producers, Pharmaceutical companies',
      roi: '350% ROI through improved transparency and reduced fraud',
      competitors: ['IBM Food Trust', 'VeChain', 'Provenance', 'Ambrosus'],
      marketSize: '$3.2B blockchain supply chain market',
      growthRate: '38% annual growth',
      setupTime: '2-3 weeks',
      trialDays: 14,
      customers: 67,
      rating: 4.7,
      reviews: 41
    },

    // Edge Computing Services
    {
      id: 'edge-ai-computing',
      name: 'Edge AI Computing Platform',
      category: 'edge-computing',
      icon: '🌐',
      color: 'from-indigo-600 to-purple-600',
      price: '$799',
      period: '/month',
      description: 'Distributed AI processing at the edge for real-time intelligence',
      features: [
        'Distributed AI processing at network edge',
        'Real-time inference and decision making',
        'Low-latency AI model deployment',
        'Edge device management and monitoring',
        'Federated learning capabilities',
        'Integration with IoT platforms',
        'Custom AI model optimization for edge',
        'Scalable edge computing infrastructure',
        'Advanced analytics and reporting',
        'Multi-cloud edge orchestration'
      ],
      popular: false,
      link: 'https://ziontechgroup.com/edge-ai-computing',
      marketPosition: 'Leading edge in distributed AI computing',
      targetAudience: 'IoT companies, Autonomous vehicle manufacturers, Smart city developers, Industrial automation',
      roi: '400% ROI through improved real-time capabilities and reduced latency',
      competitors: ['Traditional cloud AI platforms', 'Edge computing startups'],
      marketSize: '$12B edge AI market',
      growthRate: '42% annual growth',
      setupTime: '2-3 weeks',
      trialDays: 21,
      customers: 29,
      rating: 4.7,
      reviews: 22
    },

    // Advanced Computing Services
    {
      id: 'neuromorphic-computing',
      name: 'Neuromorphic Computing Platform',
      category: 'ai-ml',
      icon: '🧠',
      color: 'from-cyan-600 to-blue-600',
      price: '$3,999',
      period: '/month',
      description: 'Brain-inspired computing for ultra-efficient AI processing',
      features: [
        'Neuromorphic computing architecture',
        'Spiking neural networks',
        'Ultra-low power consumption',
        'Real-time learning and adaptation',
        'Custom neuromorphic chip design',
        'Integration with AI frameworks',
        'Performance optimization tools',
        'Energy efficiency analytics',
        'Custom algorithm development',
        'Expert consultation and training'
      ],
      popular: false,
      link: 'https://ziontechgroup.com/neuromorphic-computing',
      marketPosition: 'Leading edge in neuromorphic computing',
      targetAudience: 'Research institutions, AI companies, Semiconductor manufacturers, Government agencies',
      roi: '800% ROI through breakthrough discoveries and energy savings',
      competitors: ['Intel Loihi', 'IBM TrueNorth', 'BrainChip', 'SynSense'],
      marketSize: '$2.1B neuromorphic computing market',
      growthRate: '65% annual growth',
      setupTime: '6-8 weeks',
      trialDays: 45,
      customers: 8,
      rating: 4.9,
      reviews: 6
    }
  ];

  const filteredPlans = selectedCategory === 'all' 
    ? pricingPlans 
    : pricingPlans.filter(plan => plan.category === selectedCategory);

  const selectedPlanData = selectedPlan 
    ? pricingPlans.find(plan => plan.id === selectedPlan)
    : null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOHead 
        config={{
          title: "Comprehensive Pricing 2025 | Zion Tech Group",
          description: "Complete pricing for all our innovative micro SAAS services, IT solutions, and AI platforms. Transparent pricing with competitive market analysis.",
          keywords: "pricing, micro SAAS pricing, AI services pricing, IT solutions cost, competitive pricing, ROI analysis"
        }}
      />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Comprehensive Pricing
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                2025
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transparent pricing for all our innovative services. Compare features, understand ROI, and make informed decisions for your business transformation.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Transparent Pricing
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Competitive Analysis
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                ROI Guarantees
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Banner */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center text-white">
            <div className="flex flex-col items-center gap-2">
              <Phone className="w-6 h-6" />
              <span className="font-semibold">+1 302 464 0950</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Mail className="w-6 h-6" />
              <span className="font-semibold">kleber@ziontechgroup.com</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <MapPin className="w-6 h-6" />
              <span className="font-semibold">364 E Main St STE 1008 Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {serviceCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                <category.icon className="w-5 h-5" />
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPlans.map((plan) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer"
                onClick={() => setSelectedPlan(plan.id)}
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-4xl">{plan.icon}</span>
                  {plan.popular && (
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black text-xs px-2 py-1 rounded-full font-medium">
                      Popular
                    </span>
                  )}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-300 text-sm mb-4">{plan.description}</p>
                
                <div className="mb-4">
                  <span className="text-3xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400">{plan.period}</span>
                </div>
                
                <div className="space-y-2 mb-4">
                  {plan.features.slice(0, 4).map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs text-gray-400 bg-white/10 px-2 py-1 rounded">
                    {plan.category.replace('-', ' ').toUpperCase()}
                  </span>
                  <div className="flex items-center gap-1 text-yellow-400">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-sm">{plan.rating}</span>
                  </div>
                </div>
                
                <div className="text-center">
                  <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                    View Details
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Plan Detail Modal */}
      {selectedPlanData && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-slate-800 rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <span className="text-6xl">{selectedPlanData.icon}</span>
                  <div>
                    <h2 className="text-3xl font-bold text-white">{selectedPlanData.name}</h2>
                    <p className="text-xl text-gray-300">{selectedPlanData.description}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedPlan(null)}
                  className="text-gray-400 hover:text-white text-2xl"
                >
                  ×
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Service Overview */}
                <div className="lg:col-span-2">
                  <div className="bg-white/10 rounded-xl p-6 mb-6">
                    <h4 className="text-lg font-semibold text-white mb-4">Service Overview</h4>
                    <p className="text-gray-300 mb-4">{selectedPlanData.description}</p>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-400">Setup Time:</span>
                        <span className="text-white ml-2">{selectedPlanData.setupTime}</span>
                      </div>
                      <div>
                        <span className="text-gray-400">Trial Days:</span>
                        <span className="text-white ml-2">{selectedPlanData.trialDays} days</span>
                      </div>
                      <div>
                        <span className="text-gray-400">Customers:</span>
                        <span className="text-white ml-2">{selectedPlanData.customers}</span>
                      </div>
                      <div>
                        <span className="text-gray-400">Rating:</span>
                        <span className="text-yellow-400 ml-2">{selectedPlanData.rating}/5</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/10 rounded-xl p-6 mb-6">
                    <h4 className="text-lg font-semibold text-white mb-4">Key Features</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {selectedPlanData.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2 text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white/10 rounded-xl p-6">
                    <h4 className="text-lg font-semibold text-white mb-4">Target Audience</h4>
                    <p className="text-gray-300">{selectedPlanData.targetAudience}</p>
                  </div>
                </div>

                {/* Pricing & Market Info */}
                <div className="space-y-6">
                  <div className="bg-white/10 rounded-xl p-6">
                    <h4 className="text-lg font-semibold text-white mb-4">Pricing & ROI</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Price:</span>
                        <span className="text-white font-semibold text-lg">{selectedPlanData.price}{selectedPlanData.period}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">ROI:</span>
                        <span className="text-green-400 font-semibold">{selectedPlanData.roi}</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/10 rounded-xl p-6">
                    <h4 className="text-lg font-semibold text-white mb-4">Market Analysis</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Market Size:</span>
                        <span className="text-white font-semibold">{selectedPlanData.marketSize}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Growth Rate:</span>
                        <span className="text-blue-400 font-semibold">{selectedPlanData.growthRate}</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/10 rounded-xl p-6">
                    <h4 className="text-lg font-semibold text-white mb-4">Competitive Analysis</h4>
                    <p className="text-gray-300 mb-3 text-sm">{selectedPlanData.marketPosition}</p>
                    <div>
                      <span className="text-gray-400 text-sm">Competitors:</span>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {selectedPlanData.competitors.map((competitor, index) => (
                          <span key={index} className="bg-red-500/20 text-red-300 text-xs px-2 py-1 rounded">
                            {competitor}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={selectedPlanData.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold text-center hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Visit Service
                    </a>
                    <a
                      href="mailto:kleber@ziontechgroup.com?subject=Inquiry about service"
                      className="flex-1 bg-white/10 text-white py-3 px-6 rounded-xl font-semibold text-center hover:bg-white/20 transition-all duration-300"
                    >
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Call to Action */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us for a personalized consultation and discover how our services can transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Pricing consultation request"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-8 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Get Pricing Quote
              </a>
              <a
                href="tel:+13024640950"
                className="bg-white/10 text-white py-4 px-8 rounded-xl font-semibold text-lg hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call for Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ComprehensivePricing2025;