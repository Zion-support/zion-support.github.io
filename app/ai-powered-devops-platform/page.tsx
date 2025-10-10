'use client';
import React, { useState, useEffect } from 'react';
import { 
  Settings, 
  Code, 
  Server, 
  Database, 
  Cloud, 
  Zap, 
  Shield, 
  BarChart, 
  Users, 
  Globe, 
  Lock, 
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  Award,
  Phone,
  Mail,
  MapPin,
  DollarSign,
  TrendingUp,
  Activity,
  Cpu,
  Wifi,
  Monitor,
  HardDrive,
  Brain,
  Target,
  FileText,
  AlertTriangle,
  Settings as SettingsIcon,
  Code as CodeIcon,
  Server as ServerIcon,
  Database as DatabaseIcon,
  Cloud as CloudIcon,
  Zap as Lightning,
  Shield as Security,
  BarChart as BarChartIcon,
  Users as People,
  Globe as GlobeIcon,
  Lock as LockIcon,
  CheckCircle as Check,
  ArrowRight as Arrow,
  Star as StarIcon,
  Phone as PhoneIcon,
  Mail as MailIcon,
  MapPin as Location,
  DollarSign as Dollar,
  TrendingUp as Trending,
  Activity as ActivityIcon,
  Cpu as CpuIcon,
  Wifi as WifiIcon,
  Monitor as MonitorIcon,
  HardDrive as HardDriveIcon,
  Brain as BrainIcon,
  Target as Crosshair,
  FileText as FileTextIcon,
  AlertTriangle as Alert
} from 'lucide-react';

const AIPoweredDevOpsPlatformPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    {
      icon: Code,
      title: 'AI Code Analysis',
      description: 'Intelligent code review and optimization with automated suggestions',
      capabilities: [
        'Automated code review',
        'Performance optimization',
        'Security vulnerability detection',
        'Code quality metrics'
      ]
    },
    {
      icon: Server,
      title: 'Intelligent Infrastructure',
      description: 'AI-powered infrastructure management and auto-scaling',
      capabilities: [
        'Auto-scaling based on demand',
        'Resource optimization',
        'Predictive maintenance',
        'Cost optimization'
      ]
    },
    {
      icon: Database,
      title: 'Smart Database Management',
      description: 'Automated database optimization and performance tuning',
      capabilities: [
        'Query optimization',
        'Index management',
        'Backup automation',
        'Performance monitoring'
      ]
    },
    {
      icon: Cloud,
      title: 'Multi-Cloud Orchestration',
      description: 'Seamless management across AWS, Azure, and GCP',
      capabilities: [
        'Multi-cloud deployment',
        'Cost optimization',
        'Disaster recovery',
        'Compliance management'
      ]
    },
    {
      icon: Zap,
      title: 'Automated CI/CD',
      description: 'Intelligent continuous integration and deployment pipelines',
      capabilities: [
        'Automated testing',
        'Deployment automation',
        'Rollback management',
        'Environment provisioning'
      ]
    },
    {
      icon: Shield,
      title: 'Security Automation',
      description: 'Automated security scanning and compliance monitoring',
      capabilities: [
        'Vulnerability scanning',
        'Compliance checking',
        'Security policy enforcement',
        'Threat detection'
      ]
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: '90% Faster Deployments',
      description: 'Dramatically reduce deployment time with AI automation',
      stat: '90%'
    },
    {
      icon: Clock,
      title: '24/7 Monitoring',
      description: 'Continuous monitoring and automated incident response',
      stat: '24/7'
    },
    {
      icon: DollarSign,
      title: '60% Cost Reduction',
      description: 'Significant cost savings through intelligent resource management',
      stat: '60%'
    },
    {
      icon: Shield,
      title: '99.9% Uptime',
      description: 'High availability with automated failover and recovery',
      stat: '99.9%'
    }
  ];

  const integrations = [
    {
      name: 'AWS',
      description: 'Amazon Web Services integration',
      icon: Cloud,
      features: ['EC2', 'S3', 'Lambda', 'RDS', 'CloudFormation']
    },
    {
      name: 'Azure',
      description: 'Microsoft Azure cloud platform',
      icon: Cloud,
      features: ['Virtual Machines', 'Blob Storage', 'Functions', 'SQL Database', 'ARM Templates']
    },
    {
      name: 'Google Cloud',
      description: 'Google Cloud Platform services',
      icon: Cloud,
      features: ['Compute Engine', 'Cloud Storage', 'Cloud Functions', 'Cloud SQL', 'Deployment Manager']
    },
    {
      name: 'Kubernetes',
      description: 'Container orchestration platform',
      icon: Settings,
      features: ['Pod Management', 'Service Mesh', 'Helm Charts', 'Operators', 'Monitoring']
    },
    {
      name: 'Docker',
      description: 'Containerization platform',
      icon: Server,
      features: ['Container Registry', 'Image Management', 'Compose', 'Swarm', 'Security Scanning']
    },
    {
      name: 'GitHub',
      description: 'Version control and collaboration',
      icon: Code,
      features: ['Repository Management', 'Actions', 'Packages', 'Security', 'Code Scanning']
    }
  ];

  const useCases = [
    {
      title: 'E-commerce Platform',
      description: 'Scalable e-commerce infrastructure with AI-powered optimization',
      icon: Globe,
      benefits: [
        'Auto-scaling during peak traffic',
        'Performance optimization',
        'Security monitoring',
        'Cost management'
      ]
    },
    {
      title: 'SaaS Application',
      description: 'Multi-tenant SaaS platform with intelligent resource management',
      icon: Cloud,
      benefits: [
        'Tenant isolation',
        'Resource allocation',
        'Performance monitoring',
        'Automated scaling'
      ]
    },
    {
      title: 'Financial Services',
      description: 'High-availability financial systems with compliance automation',
      icon: DollarSign,
      benefits: [
        'Regulatory compliance',
        'High availability',
        'Security monitoring',
        'Audit logging'
      ]
    },
    {
      title: 'Healthcare Platform',
      description: 'HIPAA-compliant healthcare infrastructure with AI monitoring',
      icon: Activity,
      benefits: [
        'HIPAA compliance',
        'Data security',
        'Performance monitoring',
        'Disaster recovery'
      ]
    }
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$1,999',
      period: '/month',
      description: 'Perfect for small teams and startups',
      features: [
        'Basic AI automation',
        'Up to 10 applications',
        'Standard support',
        'Basic monitoring',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$3,999',
      period: '/month',
      description: 'Advanced features for growing organizations',
      features: [
        'Full AI DevOps suite',
        'Up to 50 applications',
        'Priority support',
        'Advanced monitoring',
        'Phone & email support',
        'Custom integrations',
        'Performance analytics'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Complete DevOps solution for large enterprises',
      features: [
        'Custom AI automation',
        'Unlimited applications',
        '24/7 dedicated support',
        'On-premise deployment',
        'Custom development',
        'Compliance consulting',
        'Training & certification',
        'SLA guarantees'
      ],
      popular: false
    }
  ];

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 cyber-text neon-pulse">
              AI-Powered DevOps Platform
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              Revolutionize your development and operations with AI-powered automation, 
              intelligent monitoring, and seamless cloud orchestration.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 bg-cyan-500/20 px-4 py-2 rounded-lg">
                <Code className="w-5 h-5 text-cyan-400" />
                <span className="text-white font-medium">AI Automation</span>
              </div>
              <div className="flex items-center space-x-2 bg-purple-500/20 px-4 py-2 rounded-lg">
                <Cloud className="w-5 h-5 text-purple-400" />
                <span className="text-white font-medium">Multi-Cloud</span>
              </div>
              <div className="flex items-center space-x-2 bg-green-500/20 px-4 py-2 rounded-lg">
                <Zap className="w-5 h-5 text-green-400" />
                <span className="text-white font-medium">90% Faster</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Advanced DevOps Features
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI-powered DevOps capabilities that streamline your entire development lifecycle
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-700/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.capabilities.map((capability, capIndex) => (
                    <li key={capIndex} className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {capability}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Why Choose AI-Powered DevOps?
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Transform your development and operations with intelligent automation
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{benefit.stat}</div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Seamless Integrations
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Connect with your favorite tools and platforms
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {integrations.map((integration, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-700/50 transition-all duration-300">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <integration.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{integration.name}</h3>
                    <p className="text-gray-400 text-sm">{integration.description}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {integration.features.map((feature, featureIndex) => (
                    <span key={featureIndex} className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Industry Applications
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              AI-powered DevOps solutions for various industries and use cases
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-700/50 transition-all duration-300">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <useCase.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{useCase.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{useCase.description}</p>
                <ul className="space-y-2">
                  {useCase.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Pricing Plans
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Choose the perfect DevOps plan for your organization
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((plan, index) => (
              <div key={index} className={`bg-slate-800/50 rounded-lg p-6 relative ${plan.popular ? 'ring-2 ring-cyan-400 neon-glow-cyan' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-sm font-bold px-4 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300 mt-2">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700' 
                    : 'bg-slate-700 text-white hover:bg-slate-600'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-cyan-600 to-purple-700 rounded-2xl p-8 lg:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Transform Your DevOps Today
              </h2>
              <p className="text-xl text-cyan-100 mb-8">
                Contact our DevOps experts to discuss your automation needs
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
                <p className="text-cyan-100">+1 302 464 0950</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                <p className="text-cyan-100">kleber@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Address</h3>
                <p className="text-cyan-100">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
            <div className="text-center">
              <button className="bg-white text-cyan-600 py-4 px-8 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300">
                Schedule DevOps Consultation
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIPoweredDevOpsPlatformPage;