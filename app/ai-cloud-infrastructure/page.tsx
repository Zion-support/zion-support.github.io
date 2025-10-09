import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  CheckCircle, 
  Star, 
  Zap, 
  Shield, 
  Clock, 
  Users, 
  TrendingUp, 
  Globe, 
  Brain, 
  Cpu, 
  Target, 
  BarChart, 
  MessageSquare, 
  Eye, 
  Sparkles, 
  ArrowRight, 
  Phone, 
  Mail, 
  MapPin,
  Cloud,
  Server,
  Database,
  Network,
  HardDrive,
  Monitor,
  Wifi,
  Settings,
  Lock,
  Activity,
  Layers,
  Workflow,
  Bot,
  Award,
  Rocket,
  DollarSign,
  Calendar,
  FileText,
  Image,
  Video,
  Music,
  Globe as Web,
  Mail as Email,
  MessageCircle,
  Mic,
  Phone as PhoneIcon,
  Headphones,
  Printer,
  Camera,
  Wrench,
  Cog
} from 'lucide-react';

const AICloudInfrastructurePage: React.FC = () => {
  const cloudServices = [
    {
      id: 'ai-cloud-migration',
      name: 'AI Cloud Migration',
      description: 'Intelligent cloud migration with automated assessment, planning, and execution.',
      icon: Cloud,
      price: 2999,
      period: 'month',
      features: [
        'Automated Assessment',
        'Migration Planning',
        'Data Transfer Optimization',
        'Application Modernization',
        'Security Compliance',
        'Performance Monitoring',
        'Rollback Capabilities',
        '24/7 Support'
      ],
      benefits: [
        'Reduce migration time by 70%',
        'Minimize downtime to 99.9%',
        'Save $50,000+ in costs',
        'Improve performance by 200%'
      ],
      category: 'Migration',
      popular: true,
      marketPrice: '$9,999/month',
      technologies: ['AWS', 'Azure', 'GCP', 'Kubernetes', 'Docker', 'Terraform'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      id: 'ai-cloud-optimization',
      name: 'AI Cloud Optimization',
      description: 'Intelligent cloud resource optimization with cost reduction and performance enhancement.',
      icon: Settings,
      price: 1999,
      period: 'month',
      features: [
        'Resource Right-sizing',
        'Cost Optimization',
        'Performance Tuning',
        'Auto-scaling',
        'Load Balancing',
        'Caching Strategies',
        'Database Optimization',
        'Real-time Monitoring'
      ],
      benefits: [
        'Reduce costs by 40%',
        'Improve performance by 150%',
        'Save $30,000+ annually',
        'Optimize resource utilization'
      ],
      category: 'Optimization',
      popular: true,
      marketPrice: '$6,999/month',
      technologies: ['AI/ML', 'Cloud APIs', 'Monitoring Tools', 'Cost Analytics'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      id: 'ai-cloud-security',
      name: 'AI Cloud Security',
      description: 'Advanced cloud security with AI-powered threat detection and prevention.',
      icon: Shield,
      price: 2499,
      period: 'month',
      features: [
        'Threat Detection',
        'Vulnerability Scanning',
        'Compliance Monitoring',
        'Access Management',
        'Data Encryption',
        'Security Auditing',
        'Incident Response',
        '24/7 Monitoring'
      ],
      benefits: [
        'Prevent 99.9% of threats',
        'Reduce security incidents by 90%',
        'Ensure compliance',
        'Protect sensitive data'
      ],
      category: 'Security',
      popular: false,
      marketPrice: '$7,999/month',
      technologies: ['AI/ML', 'Security APIs', 'Threat Intelligence', 'Compliance Tools'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      id: 'ai-cloud-monitoring',
      name: 'AI Cloud Monitoring',
      description: 'Intelligent cloud monitoring with predictive analytics and automated alerting.',
      icon: Activity,
      price: 1499,
      period: 'month',
      features: [
        'Real-time Monitoring',
        'Predictive Analytics',
        'Automated Alerting',
        'Performance Metrics',
        'Log Analysis',
        'Anomaly Detection',
        'Custom Dashboards',
        'Mobile Access'
      ],
      benefits: [
        'Prevent outages by 95%',
        'Reduce MTTR by 80%',
        'Improve uptime to 99.99%',
        'Proactive issue resolution'
      ],
      category: 'Monitoring',
      popular: false,
      marketPrice: '$4,999/month',
      technologies: ['AI/ML', 'Monitoring APIs', 'Data Analytics', 'Alerting Systems'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      id: 'ai-cloud-backup',
      name: 'AI Cloud Backup',
      description: 'Intelligent backup solutions with automated scheduling and disaster recovery.',
      icon: HardDrive,
      price: 899,
      period: 'month',
      features: [
        'Automated Backups',
        'Incremental Backups',
        'Disaster Recovery',
        'Data Deduplication',
        'Encryption',
        'Cross-region Replication',
        'Point-in-time Recovery',
        'Compliance Reporting'
      ],
      benefits: [
        'Ensure data protection',
        'Reduce backup time by 80%',
        'Minimize storage costs',
        'Quick disaster recovery'
      ],
      category: 'Backup',
      popular: false,
      marketPrice: '$2,999/month',
      technologies: ['Cloud Storage', 'Backup APIs', 'Encryption', 'Data Compression'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      id: 'ai-cloud-networking',
      name: 'AI Cloud Networking',
      description: 'Intelligent cloud networking with automated configuration and optimization.',
      icon: Network,
      price: 1799,
      period: 'month',
      features: [
        'Network Design',
        'Load Balancing',
        'CDN Configuration',
        'VPN Setup',
        'Firewall Management',
        'Traffic Optimization',
        'Bandwidth Management',
        'Performance Tuning'
      ],
      benefits: [
        'Improve network performance by 200%',
        'Reduce latency by 60%',
        'Optimize bandwidth usage',
        'Enhance user experience'
      ],
      category: 'Networking',
      popular: false,
      marketPrice: '$5,999/month',
      technologies: ['Cloud Networking', 'CDN', 'Load Balancers', 'VPN'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      id: 'ai-cloud-database',
      name: 'AI Cloud Database',
      description: 'Intelligent database management with optimization and scaling.',
      icon: Database,
      price: 2199,
      period: 'month',
      features: [
        'Database Migration',
        'Performance Optimization',
        'Auto-scaling',
        'Backup & Recovery',
        'Query Optimization',
        'Index Management',
        'Security Hardening',
        'Monitoring & Alerting'
      ],
      benefits: [
        'Improve query performance by 300%',
        'Reduce database costs by 50%',
        'Ensure high availability',
        'Optimize resource usage'
      ],
      category: 'Database',
      popular: false,
      marketPrice: '$6,999/month',
      technologies: ['Database APIs', 'Query Optimization', 'Scaling Tools', 'Monitoring'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      id: 'ai-cloud-containers',
      name: 'AI Cloud Containers',
      description: 'Intelligent container orchestration with Kubernetes and Docker management.',
      icon: Layers,
      price: 1599,
      period: 'month',
      features: [
        'Container Orchestration',
        'Auto-scaling',
        'Service Mesh',
        'CI/CD Integration',
        'Monitoring & Logging',
        'Security Scanning',
        'Resource Management',
        'Disaster Recovery'
      ],
      benefits: [
        'Improve deployment speed by 400%',
        'Reduce operational overhead by 70%',
        'Ensure high availability',
        'Simplify management'
      ],
      category: 'Containers',
      popular: false,
      marketPrice: '$4,999/month',
      technologies: ['Kubernetes', 'Docker', 'Helm', 'Istio', 'Prometheus'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      id: 'ai-cloud-serverless',
      name: 'AI Cloud Serverless',
      description: 'Intelligent serverless architecture with automated scaling and optimization.',
      icon: Zap,
      price: 1299,
      period: 'month',
      features: [
        'Serverless Architecture',
        'Function Optimization',
        'Auto-scaling',
        'Cost Optimization',
        'Performance Monitoring',
        'Security Hardening',
        'API Management',
        'Event-driven Architecture'
      ],
      benefits: [
        'Reduce costs by 60%',
        'Improve scalability',
        'Eliminate server management',
        'Pay only for usage'
      ],
      category: 'Serverless',
      popular: false,
      marketPrice: '$3,999/month',
      technologies: ['Lambda', 'Azure Functions', 'Cloud Functions', 'API Gateway'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      id: 'ai-cloud-ai-ml',
      name: 'AI Cloud AI/ML Platform',
      description: 'Intelligent AI/ML platform with automated model deployment and management.',
      icon: Brain,
      price: 3999,
      period: 'month',
      features: [
        'Model Deployment',
        'Auto-scaling',
        'A/B Testing',
        'Model Monitoring',
        'Data Pipeline',
        'Feature Store',
        'Model Versioning',
        'Real-time Inference'
      ],
      benefits: [
        'Deploy models 10x faster',
        'Reduce ML costs by 70%',
        'Improve model performance',
        'Scale AI workloads'
      ],
      category: 'AI/ML',
      popular: false,
      marketPrice: '$12,999/month',
      technologies: ['MLOps', 'Kubeflow', 'TensorFlow', 'PyTorch', 'MLflow'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      id: 'ai-cloud-iot',
      name: 'AI Cloud IoT Platform',
      description: 'Intelligent IoT platform with device management and data processing.',
      icon: Wifi,
      price: 1899,
      period: 'month',
      features: [
        'Device Management',
        'Data Ingestion',
        'Real-time Processing',
        'Analytics & Insights',
        'Security & Compliance',
        'Edge Computing',
        'API Management',
        'Dashboard & Visualization'
      ],
      benefits: [
        'Connect 100,000+ devices',
        'Process data in real-time',
        'Reduce operational costs',
        'Improve efficiency'
      ],
      category: 'IoT',
      popular: false,
      marketPrice: '$5,999/month',
      technologies: ['IoT APIs', 'Edge Computing', 'Data Streaming', 'Analytics'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      id: 'ai-cloud-compliance',
      name: 'AI Cloud Compliance',
      description: 'Intelligent compliance management with automated auditing and reporting.',
      icon: Lock,
      price: 2299,
      period: 'month',
      features: [
        'Compliance Monitoring',
        'Automated Auditing',
        'Risk Assessment',
        'Policy Management',
        'Reporting & Analytics',
        'Incident Management',
        'Training & Awareness',
        'Certification Support'
      ],
      benefits: [
        'Ensure compliance',
        'Reduce audit time by 80%',
        'Minimize compliance risks',
        'Automate reporting'
      ],
      category: 'Compliance',
      popular: false,
      marketPrice: '$6,999/month',
      technologies: ['Compliance APIs', 'Audit Tools', 'Risk Management', 'Reporting'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', count: cloudServices.length },
    { id: 'Migration', name: 'Migration', count: cloudServices.filter(s => s.category === 'Migration').length },
    { id: 'Optimization', name: 'Optimization', count: cloudServices.filter(s => s.category === 'Optimization').length },
    { id: 'Security', name: 'Security', count: cloudServices.filter(s => s.category === 'Security').length },
    { id: 'Monitoring', name: 'Monitoring', count: cloudServices.filter(s => s.category === 'Monitoring').length },
    { id: 'Backup', name: 'Backup', count: cloudServices.filter(s => s.category === 'Backup').length },
    { id: 'Networking', name: 'Networking', count: cloudServices.filter(s => s.category === 'Networking').length },
    { id: 'Database', name: 'Database', count: cloudServices.filter(s => s.category === 'Database').length },
    { id: 'Containers', name: 'Containers', count: cloudServices.filter(s => s.category === 'Containers').length },
    { id: 'Serverless', name: 'Serverless', count: cloudServices.filter(s => s.category === 'Serverless').length },
    { id: 'AI/ML', name: 'AI/ML', count: cloudServices.filter(s => s.category === 'AI/ML').length },
    { id: 'IoT', name: 'IoT', count: cloudServices.filter(s => s.category === 'IoT').length },
    { id: 'Compliance', name: 'Compliance', count: cloudServices.filter(s => s.category === 'Compliance').length }
  ];

  const pricingPlans = [
    {
      name: 'Cloud Starter',
      price: 1999,
      period: 'month',
      description: 'Essential cloud services for small businesses',
      features: [
        'Basic Cloud Migration',
        'Standard Monitoring',
        'Email Support',
        'Basic Security',
        'Standard Backup',
        'API Access'
      ],
      popular: false
    },
    {
      name: 'Cloud Professional',
      price: 4999,
      period: 'month',
      description: 'Advanced cloud solutions for growing businesses',
      features: [
        'Full Cloud Migration',
        'Advanced Monitoring',
        'Priority Support',
        'Advanced Security',
        'Automated Backup',
        'Full API Access',
        'Custom Integrations',
        'Training Sessions'
      ],
      popular: true
    },
    {
      name: 'Cloud Enterprise',
      price: 9999,
      period: 'month',
      description: 'Complete cloud solution for large organizations',
      features: [
        'All Professional Features',
        'Custom Cloud Architecture',
        '24/7 Dedicated Support',
        'Dedicated Account Manager',
        'Advanced Security',
        'White-label Solutions',
        'Custom Integrations',
        'SLA Guarantee',
        'On-site Training'
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <Helmet>
        <title>AI Cloud Infrastructure - Zion Tech Group</title>
        <meta name="description" content="Intelligent cloud infrastructure solutions with AI-powered optimization, security, and management. Starting at $899/month." />
        <meta name="keywords" content="ai cloud infrastructure, cloud migration, cloud optimization, cloud security, cloud management, aws, azure, gcp" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 neon-text cyber-text">
            AI Cloud Infrastructure
          </h1>
          <p className="text-xl text-cyan-400 mb-8 max-w-3xl mx-auto cyber-glow">
            Intelligent cloud infrastructure solutions with AI-powered optimization, security, and management for maximum performance and cost efficiency.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="cyber-card hologram-card p-4 sm:p-6 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-2">12+</div>
              <div className="text-gray-300 text-sm">Cloud Services</div>
            </div>
            <div className="cyber-card hologram-card p-4 sm:p-6 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-green-400 mb-2">$899</div>
              <div className="text-gray-300 text-sm">Starting Price</div>
            </div>
            <div className="cyber-card hologram-card p-4 sm:p-6 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-purple-400 mb-2">99.99%</div>
              <div className="text-gray-300 text-sm">Uptime SLA</div>
            </div>
            <div className="cyber-card hologram-card p-4 sm:p-6 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-orange-400 mb-2">40%</div>
              <div className="text-gray-300 text-sm">Cost Savings</div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-6 mb-12">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span className="text-white font-medium">+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <span className="text-white font-medium">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span className="text-white font-medium">Middletown, DE</span>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="cyber-button w-full sm:w-auto text-center"
            >
              📞 Call Now: (302) 464-0950
            </a>
            <a
              href="/contact"
              className="cyber-button w-full sm:w-auto text-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              Get Free Cloud Assessment
            </a>
          </div>
        </div>
      </section>

      {/* Cloud Services */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">
            AI Cloud Infrastructure Services
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cloudServices.map((service, index) => (
              <div key={index} className={`cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300 relative ${service.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="flex items-center mb-4">
                  <service.icon className="w-8 h-8 text-cyan-400 mr-3" />
                  <div>
                    <h3 className="text-xl font-bold text-white">{service.name}</h3>
                    <span className="text-sm text-gray-400">{service.category}</span>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>
                
                <div className="mb-4">
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold text-cyan-400">${service.price.toLocaleString()}</span>
                    <span className="text-gray-400 ml-1">/{service.period}</span>
                  </div>
                  <div className="text-sm text-gray-500 mt-1">
                    Market Price: <span className="line-through">{service.marketPrice}</span>
                  </div>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {service.features.slice(0, 4).map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                  {service.features.length > 4 && (
                    <li className="text-sm text-gray-500">
                      +{service.features.length - 4} more features
                    </li>
                  )}
                </ul>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Key Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-sm text-gray-300 flex items-center">
                        <TrendingUp className="w-3 h-3 text-blue-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-gray-800 text-gray-300 text-xs px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="text-center">
                  <a
                    href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${service.name}`}
                    className="w-full cyber-button text-center inline-block"
                  >
                    Get Started Now
                  </a>
                  <p className="text-xs text-gray-500 mt-2">
                    {service.contactInfo}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16 px-4 bg-gradient-to-r from-slate-800 to-purple-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Choose Your Cloud Plan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`cyber-card hologram-card p-8 text-center relative ${plan.popular ? 'ring-2 ring-cyan-400 scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-cyan-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-cyan-400">${plan.price.toLocaleString()}</span>
                    <span className="text-gray-400 ml-1">/{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all ${
                  plan.popular 
                    ? 'bg-cyan-600 hover:bg-cyan-700 text-white' 
                    : 'bg-gray-700 hover:bg-gray-600 text-white'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Why Choose Our AI Cloud Infrastructure?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="cyber-card hologram-card p-6 text-center">
              <Brain className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">AI-Powered Optimization</h3>
              <p className="text-gray-300">Intelligent cloud optimization that automatically adjusts resources and reduces costs by up to 40%.</p>
            </div>
            
            <div className="cyber-card hologram-card p-6 text-center">
              <Shield className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Enterprise Security</h3>
              <p className="text-gray-300">Bank-level security with AI-powered threat detection and 24/7 monitoring.</p>
            </div>
            
            <div className="cyber-card hologram-card p-6 text-center">
              <TrendingUp className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Proven Results</h3>
              <p className="text-gray-300">Average 40% cost reduction and 200% performance improvement for our clients.</p>
            </div>
            
            <div className="cyber-card hologram-card p-6 text-center">
              <Activity className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">24/7 Monitoring</h3>
              <p className="text-gray-300">Continuous monitoring with predictive analytics to prevent issues before they occur.</p>
            </div>
            
            <div className="cyber-card hologram-card p-6 text-center">
              <Settings className="w-12 h-12 text-orange-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Custom Solutions</h3>
              <p className="text-gray-300">Tailored cloud architecture designed specifically for your business needs.</p>
            </div>
            
            <div className="cyber-card hologram-card p-6 text-center">
              <Award className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Expert Team</h3>
              <p className="text-gray-300">Certified cloud architects and engineers with years of experience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-slate-800 to-purple-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
            Ready to Optimize Your Cloud Infrastructure?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let our AI cloud experts assess your current infrastructure and recommend the best solutions for maximum performance and cost efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="cyber-button w-full sm:w-auto text-center"
            >
              📞 Call Now: (302) 464-0950
            </a>
            <a
              href="/contact"
              className="cyber-button w-full sm:w-auto text-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              Get Free Cloud Assessment
            </a>
          </div>
          
          <div className="mt-8 text-sm text-gray-400 space-y-1">
            <p>✓ Free cloud assessment • ✓ Custom recommendations • ✓ No setup fees</p>
            <p>✓ 30-day money-back guarantee • ✓ 24/7 support • ✓ Enterprise security</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AICloudInfrastructurePage;