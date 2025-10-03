// import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Brain, Code, Cloud, Shield, Network, Server, BarChart3, Settings, 
  Zap, Monitor, Search, MessageSquare, CheckCircle, ArrowRight, 
  DollarSign, Clock, Users, Globe, Smartphone, Database, 
  Lock, TrendingUp, Target, Lightbulb, Rocket, Cpu, 
  Wifi, Eye, Headphones, FileText, Calendar, Mail,
  Phone, MapPin, ExternalLink
} from 'lucide-react';

export const metadata = {
  title: 'Innovative Solutions 2025 — Zion Tech Group',
  description: 'Cutting-edge micro SaaS, AI, and IT solutions for modern businesses. Real implementations with proven ROI and transparent pricing.',
  keywords: 'micro SaaS, AI solutions, IT services, business automation, innovative technology, 2025 solutions',
};

export default function InnovativeSolutions2025() {
  const phoneHref = "tel:+13024640950"
  const emailHref = "mailto:kleber@ziontechgroup.com"
  const websiteHref = "https://ziontechgroup.com"
  const microSaasServices = [
    {
      name: 'AI-Powered Meeting Intelligence Platform',
      description: 'Real-time meeting analysis with sentiment tracking, action item extraction, and automated follow-ups.',
      price: '$299 - $1,499/month',
      eta: '2-3 weeks',
      features: [
        'Real-time transcription with speaker identification',
        'Sentiment analysis and engagement scoring',
        'Automated action item extraction and assignment',
        'Integration with Slack, Teams, and CRM systems',
        'Custom meeting templates and workflows'
      ],
      icon: 'Headphones',
      category: 'Productivity',
      roi: '300% increase in meeting productivity'
    },
    {
      name: 'Smart Document Processing Suite',
      description: 'AI-powered document analysis, extraction, and workflow automation for any business process.',
      price: '$199 - $999/month',
      eta: '1-2 weeks',
      features: [
        'OCR with 99.8% accuracy across 50+ languages',
        'Intelligent data extraction and validation',
        'Automated workflow routing and approval',
        'Compliance monitoring and audit trails',
        'API integration with existing systems'
      ],
      icon: 'FileText',
      category: 'Document Management',
      roi: '80% reduction in manual processing time'
    },
    {
      name: 'Customer Experience Analytics Engine',
      description: 'Multi-channel customer journey tracking with predictive analytics and personalization.',
      price: '$399 - $2,499/month',
      eta: '3-4 weeks',
      features: [
        'Omnichannel customer journey mapping',
        'Predictive churn and lifetime value modeling',
        'Real-time personalization recommendations',
        'A/B testing and conversion optimization',
        'Advanced segmentation and targeting'
      ],
      icon: 'TrendingUp',
      category: 'Analytics',
      roi: '45% increase in customer retention'
    },
    {
      name: 'AI-Powered Content Marketing Suite',
      description: 'Automated content creation, optimization, and distribution across all marketing channels.',
      price: '$149 - $799/month',
      eta: '2-3 weeks',
      features: [
        'AI-generated blog posts, emails, and social content',
        'SEO optimization and keyword research',
        'Multi-platform content distribution',
        'Performance tracking and optimization',
        'Brand voice consistency enforcement'
      ],
      icon: 'MessageSquare',
      category: 'Marketing',
      roi: '200% increase in content production'
    },
    {
      name: 'Smart Inventory Optimization Platform',
      description: 'AI-driven inventory management with demand forecasting and automated reordering.',
      price: '$249 - $1,299/month',
      eta: '2-4 weeks',
      features: [
        'Predictive demand forecasting',
        'Automated reorder point calculations',
        'Supplier performance analytics',
        'Cost optimization recommendations',
        'Integration with ERP and POS systems'
      ],
      icon: 'BarChart3',
      category: 'Supply Chain',
      roi: '35% reduction in inventory costs'
    },
    {
      name: 'Healthcare Appointment Intelligence',
      description: 'Smart scheduling system with patient preferences, provider optimization, and telehealth integration.',
      price: '$399 - $1,999/month',
      eta: '3-5 weeks',
      features: [
        'AI-powered appointment scheduling optimization',
        'Patient preference learning and matching',
        'Telehealth integration and management',
        'Provider workload balancing',
        'HIPAA-compliant data handling'
      ],
      icon: 'Calendar',
      category: 'Healthcare',
      roi: '60% reduction in no-show rates'
    }
  ];

  const aiServices = [
    {
      name: 'Autonomous Business Process Orchestration',
      description: 'Self-managing workflows that adapt and optimize business processes in real-time.',
      price: '$2,999 - $12,999/month',
      eta: '6-10 weeks',
      features: [
        'Self-healing process automation',
        'Dynamic workflow optimization',
        'Cross-system integration and orchestration',
        'Predictive process failure prevention',
        'Real-time performance monitoring and adjustment'
      ],
      icon: 'Rocket',
      category: 'Process Automation',
      roi: '500% increase in operational efficiency'
    },
    {
      name: 'Advanced Fraud Detection & Prevention',
      description: 'Real-time fraud detection using deep learning and behavioral analytics.',
      price: '$1,999 - $8,999/month',
      eta: '4-8 weeks',
      features: [
        'Real-time transaction monitoring',
        'Behavioral pattern analysis',
        'Multi-factor risk scoring',
        'Automated response and blocking',
        'Compliance reporting and audit trails'
      ],
      icon: 'Shield',
      category: 'Security',
      roi: '95% reduction in fraudulent transactions'
    },
    {
      name: 'Predictive Maintenance Intelligence',
      description: 'AI-powered equipment monitoring and maintenance prediction for manufacturing and IoT.',
      price: '$3,499 - $15,999/month',
      eta: '6-12 weeks',
      features: [
        'IoT sensor data analysis',
        'Predictive failure modeling',
        'Maintenance scheduling optimization',
        'Parts inventory management',
        'Cost-benefit analysis and reporting'
      ],
      icon: 'Monitor',
      category: 'IoT & Manufacturing',
      roi: '70% reduction in unplanned downtime'
    },
    {
      name: 'Intelligent Customer Support Automation',
      description: 'Advanced AI customer service with natural language understanding and human handoff.',
      price: '$799 - $3,999/month',
      eta: '3-6 weeks',
      features: [
        'Multi-language natural language processing',
        'Context-aware conversation management',
        'Seamless human agent handoff',
        'Knowledge base learning and updates',
        'Performance analytics and optimization'
      ],
      icon: 'Users',
      category: 'Customer Service',
      roi: '85% reduction in support ticket volume'
    },
    {
      name: 'AI-Powered Legal Document Analysis',
      description: 'Automated contract review, risk assessment, and compliance monitoring.',
      price: '$2,499 - $9,999/month',
      eta: '4-8 weeks',
      features: [
        'Contract analysis and risk identification',
        'Compliance monitoring and reporting',
        'Automated clause extraction and comparison',
        'Legal precedent research and citation',
        'Workflow integration and approval processes'
      ],
      icon: 'FileText',
      category: 'Legal Tech',
      roi: '90% reduction in contract review time'
    },
    {
      name: 'Smart Energy Management System',
      description: 'AI-driven energy optimization for buildings, factories, and smart cities.',
      price: '$1,499 - $6,999/month',
      eta: '4-8 weeks',
      features: [
        'Real-time energy consumption monitoring',
        'Predictive energy demand modeling',
        'Automated optimization recommendations',
        'Integration with smart grid systems',
        'Sustainability reporting and analytics'
      ],
      icon: 'Zap',
      category: 'Sustainability',
      roi: '40% reduction in energy costs'
    }
  ];

  const itServices = [
    {
      name: 'Zero-Trust Security Architecture',
      description: 'Comprehensive security framework with continuous verification and micro-segmentation.',
      price: '$4,999 - $24,999/month',
      eta: '8-16 weeks',
      features: [
        'Identity and access management (IAM)',
        'Network micro-segmentation',
        'Continuous security monitoring',
        'Threat detection and response',
        'Compliance automation (SOC 2, HIPAA, GDPR)'
      ],
      icon: 'Lock',
      category: 'Cybersecurity',
      roi: '99.9% security incident reduction'
    },
    {
      name: 'Cloud-Native Application Platform',
      description: 'Full-stack development platform with automated CI/CD, scaling, and monitoring.',
      price: '$6,999 - $29,999/month',
      eta: '10-20 weeks',
      features: [
        'Kubernetes orchestration and management',
        'Automated CI/CD pipelines',
        'Auto-scaling and load balancing',
        'Service mesh and API gateway',
        'Comprehensive monitoring and alerting'
      ],
      icon: 'Cloud',
      category: 'Cloud Infrastructure',
      roi: '300% faster application deployment'
    },
    {
      name: 'Data Lake & Analytics Platform',
      description: 'Unified data platform with real-time processing, ML integration, and self-service analytics.',
      price: '$3,999 - $19,999/month',
      eta: '8-16 weeks',
      features: [
        'Multi-source data ingestion and processing',
        'Real-time streaming analytics',
        'Machine learning model deployment',
        'Self-service BI and visualization',
        'Data governance and lineage tracking'
      ],
      icon: 'Database',
      category: 'Data Analytics',
      roi: '500% improvement in data insights speed'
    },
    {
      name: 'Edge Computing Infrastructure',
      description: 'Distributed computing platform for low-latency applications and IoT deployments.',
      price: '$2,999 - $14,999/month',
      eta: '6-12 weeks',
      features: [
        'Edge node deployment and management',
        'Low-latency data processing',
        'IoT device integration and management',
        'Offline capability and sync',
        'Performance monitoring and optimization'
      ],
      icon: 'Cpu',
      category: 'Edge Computing',
      roi: '80% reduction in application latency'
    },
    {
      name: 'DevSecOps Automation Platform',
      description: 'Integrated development, security, and operations with automated compliance.',
      price: '$5,499 - $22,999/month',
      eta: '10-18 weeks',
      features: [
        'Automated security scanning and testing',
        'Compliance monitoring and reporting',
        'Infrastructure as code (IaC)',
        'Automated deployment and rollback',
        'Security policy enforcement'
      ],
      icon: 'Settings',
      category: 'DevOps',
      roi: '95% reduction in security vulnerabilities'
    },
    {
      name: 'Multi-Cloud Management Suite',
      description: 'Unified management platform for AWS, Azure, and GCP with cost optimization.',
      price: '$2,499 - $12,999/month',
      eta: '6-12 weeks',
      features: [
        'Multi-cloud resource management',
        'Automated cost optimization',
        'Unified monitoring and alerting',
        'Disaster recovery and backup',
        'Compliance and governance controls'
      ],
      icon: 'Globe',
      category: 'Cloud Management',
      roi: '60% reduction in cloud costs'
    }
  ];

  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <link rel="canonical" href={`${websiteHref}/services/innovative-solutions-2025`} />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 py-20">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
                <Rocket className="w-6 h-6 text-white" />
                <span className="text-white font-bold text-lg tracking-wider uppercase">
                  Innovative Solutions 2025
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-extrabold mb-8 text-white leading-tight">
                Next-Generation Business Solutions
              </h1>
              
              <p className="text-2xl md:text-3xl text-blue-100 mb-8 font-semibold max-w-3xl mx-auto">
                Real implementations, proven ROI, transparent pricing. Transform your business with cutting-edge technology.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <a 
                  href={phoneHref}
                  className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Call Now: +1 302 464 0950
                </a>
                <a 
                  href={emailHref}
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Mail className="w-5 h-5" />
                  Get Free Consultation
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Micro SaaS Services */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 mb-4">
                <Code className="w-8 h-8 text-orange-600" />
                <span className="text-orange-600 font-bold text-lg uppercase tracking-wider">Micro SaaS Solutions</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Specialized Business Applications
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Targeted solutions for specific business needs with rapid deployment and immediate ROI
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasServices.map((service, index) => {
                const IconComponent = service.icon as any;
                return (
                  <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-orange-200">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <span className="text-sm font-semibold text-orange-600 uppercase tracking-wider">{service.category}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                      {service.name}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="space-y-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <span className="text-2xl font-bold text-orange-600">{service.price}</span>
                        <p className="text-sm text-gray-500">{service.eta} delivery</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-semibold text-green-600">{service.roi}</p>
                      </div>
                    </div>
                    
                    <a
                      href={emailHref}
                      className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 hover:from-orange-600 hover:to-red-600 transform hover:-translate-y-1 flex items-center justify-center gap-2"
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* AI Services */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 mb-4">
                <Brain className="w-8 h-8 text-blue-600" />
                <span className="text-blue-600 font-bold text-lg uppercase tracking-wider">AI Services</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Advanced Artificial Intelligence
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Cutting-edge AI solutions that learn, adapt, and deliver measurable business value
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => {
                const IconComponent = service.icon as any;
                return (
                  <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">{service.category}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {service.name}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="space-y-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <span className="text-2xl font-bold text-blue-600">{service.price}</span>
                        <p className="text-sm text-gray-500">{service.eta} delivery</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-semibold text-green-600">{service.roi}</p>
                      </div>
                    </div>
                    
                    <a
                      href={emailHref}
                      className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 hover:from-blue-600 hover:to-indigo-600 transform hover:-translate-y-1 flex items-center justify-center gap-2"
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* IT Services */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 mb-4">
                <Cloud className="w-8 h-8 text-green-600" />
                <span className="text-green-600 font-bold text-lg uppercase tracking-wider">IT Services</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Enterprise Infrastructure Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Robust, scalable, and secure infrastructure that powers your digital transformation
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itServices.map((service, index) => {
                const IconComponent = service.icon as any;
                return (
                  <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-green-200">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-xl flex items-center justify-center">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <span className="text-sm font-semibold text-green-600 uppercase tracking-wider">{service.category}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                      {service.name}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="space-y-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <span className="text-2xl font-bold text-green-600">{service.price}</span>
                        <p className="text-sm text-gray-500">{service.eta} delivery</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-semibold text-green-600">{service.roi}</p>
                      </div>
                    </div>
                    
                    <a
                      href={emailHref}
                      className="w-full bg-gradient-to-r from-green-500 to-teal-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 hover:from-green-600 hover:to-teal-600 transform hover:-translate-y-1 flex items-center justify-center gap-2"
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-gradient-to-r from-gray-900 to-blue-900">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                All our services come with comprehensive support, training, and implementation assistance. 
                Contact us for custom pricing and enterprise solutions.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Information */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">Get Started Today</h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Call Us</h4>
                      <a href={phoneHref} className="text-blue-300 hover:text-blue-200 font-medium">
                        +1 302 464 0950
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Email Us</h4>
                      <a href={emailHref} className="text-blue-300 hover:text-blue-200 font-medium">
                        kleber@ziontechgroup.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Visit Us</h4>
                      <p className="text-gray-300">
                        364 E Main St STE 1008<br />
                        Middletown DE 19709
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                      <ExternalLink className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Website</h4>
                      <a href={websiteHref} className="text-blue-300 hover:text-blue-200 font-medium">
                        ziontechgroup.com
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <a
                    href={phoneHref}
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-blue-700 transition-colors"
                  >
                    Call Now
                  </a>
                  <a
                    href={emailHref}
                    className="border-2 border-blue-600 text-blue-300 px-6 py-3 rounded-lg font-semibold text-center hover:bg-blue-600 hover:text-white transition-colors"
                  >
                    Get Free Consultation
                  </a>
                </div>
              </div>

              {/* Pricing Information */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">Transparent Pricing</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-white/20">
                    <span className="font-semibold text-white">Micro SaaS Solutions</span>
                    <span className="text-orange-400 font-bold">$149 - $2,499/month</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-white/20">
                    <span className="font-semibold text-white">AI Services</span>
                    <span className="text-blue-400 font-bold">$799 - $15,999/month</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-white/20">
                    <span className="font-semibold text-white">IT Services</span>
                    <span className="text-green-400 font-bold">$2,499 - $29,999/month</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="font-semibold text-white">Custom Solutions</span>
                    <span className="text-white font-bold">Contact Us</span>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-green-500/20 rounded-lg border border-green-500/30">
                  <p className="text-sm text-green-200">
                    <strong>Special Offer:</strong> Get 30% off your first 3 months when you sign up for any annual plan. 
                    Includes free setup, training, and 24/7 support.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}