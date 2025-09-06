<<<<<<< HEAD
=======
import { useState, useEffect  } from 'react';
import { ContactInfo  } from '../types';
import ErrorBoundary from '../components/ErrorBoundary';
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Server, 
  Shield, 
  Cloud, 
  Database, 
  Smartphone, 
  Globe, 
  Lock, 
  CheckCircle, 
  ArrowRight, 
  Phone, 
  Mail, 
  MapPin, 
  DollarSign, 
  Clock, 
  Award,
  Users,
  Building,
  TrendingUp,
  Target,
  Star,
  Rocket,
  Brain,
  Cpu,
  FileText,
  Settings,
  Monitor,
  Wifi,
  HardDrive,
  Network
} from 'lucide-react';

const contactInfo = {
  phone: "+1 302 464 0950",
  email: "kleber@ziontechgroup.com",
  address: "364 E Main St STE 1008 Middletown DE 19709"
};

const itServices = [
  {
    id: 1,
    title: 'Cloud Infrastructure & Migration',
    description: 'Complete cloud transformation with AWS, Azure, and Google Cloud Platform. Secure, scalable, and cost-optimized infrastructure solutions.',
    icon: Cloud,
    category: 'Cloud Services',
    price: 'Starting at $2,500/month',
    marketPrice: '$5,000-10,000/month',
    setupTime: '4-8 weeks',
    features: [
      'Multi-cloud strategy & implementation',
      'Serverless architecture design',
      'Auto-scaling & load balancing',
      'Disaster recovery & backup',
      'Cost optimization & monitoring',
      'Security hardening & compliance',
      'Migration planning & execution',
      '24/7 monitoring & support'
    ],
    benefits: [
      'Reduce infrastructure costs by 40%',
      'Improve scalability & performance',
      'Enhance security & compliance',
      'Enable remote work capabilities'
    ],
    targetUsers: 'Enterprises, SMBs, Startups, Government',
    roi: '200-400%',
    popular: true
  },
  {
    id: 2,
    title: 'Cybersecurity & Compliance',
    description: 'Comprehensive security solutions including threat detection, vulnerability assessment, compliance management, and incident response.',
    icon: Shield,
    category: 'Security',
    price: 'Starting at $1,800/month',
    marketPrice: '$3,600-7,200/month',
    setupTime: '2-6 weeks',
    features: [
      'Security assessment & auditing',
      'Threat detection & response',
      'Vulnerability management',
      'Compliance monitoring (SOC2, GDPR, HIPAA)',
      'Security awareness training',
      'Penetration testing',
      'Incident response planning',
      'Security policy development'
    ],
    benefits: [
      'Prevent costly security breaches',
      'Meet regulatory compliance requirements',
      'Reduce security risks by 80%',
      'Protect sensitive data & assets'
    ],
    targetUsers: 'Healthcare, Finance, E-commerce, Government',
    roi: '300-600%',
    popular: true
  },
  {
    id: 3,
    title: 'Network Infrastructure & Management',
    description: 'Complete network design, implementation, and management including LAN, WAN, wireless, and security infrastructure.',
    icon: Network,
    category: 'Networking',
    price: 'Starting at $1,200/month',
    marketPrice: '$2,400-4,800/month',
    setupTime: '2-4 weeks',
    features: [
      'Network design & architecture',
      'Wireless network deployment',
      'VPN & remote access solutions',
      'Network monitoring & management',
      'Bandwidth optimization',
      'Quality of Service (QoS)',
      'Network security implementation',
      'Performance optimization'
    ],
    benefits: [
      'Improve network performance by 50%',
      'Reduce downtime by 70%',
      'Enhance security & reliability',
      'Support remote work requirements'
    ],
    targetUsers: 'Offices, Retail, Healthcare, Education',
    roi: '150-300%',
    popular: false
  },
  {
    id: 4,
    title: 'Database Management & Optimization',
    description: 'Database design, implementation, optimization, and maintenance for SQL and NoSQL databases with performance tuning.',
    icon: Database,
    category: 'Database',
    price: 'Starting at $1,500/month',
    marketPrice: '$3,000-6,000/month',
    setupTime: '3-6 weeks',
    features: [
      'Database design & architecture',
      'Performance tuning & optimization',
      'Backup & recovery solutions',
      'Data migration & integration',
      'Security & access control',
      'Monitoring & alerting',
      'Capacity planning',
      'Disaster recovery planning'
    ],
    benefits: [
      'Improve database performance by 60%',
      'Reduce data loss risks',
      'Optimize storage costs',
      'Ensure data integrity & security'
    ],
    targetUsers: 'E-commerce, SaaS, Healthcare, Finance',
    roi: '200-400%',
    popular: false
  },
  {
    id: 5,
    title: 'IT Support & Help Desk',
    description: 'Comprehensive IT support services including help desk, technical support, system administration, and user training.',
    icon: Users,
    category: 'Support',
    price: 'Starting at $800/month',
    marketPrice: '$1,600-3,200/month',
    setupTime: '1-2 weeks',
    features: [
      '24/7 help desk support',
      'Remote technical assistance',
      'System administration',
      'Software installation & updates',
      'Hardware troubleshooting',
      'User training & onboarding',
      'IT asset management',
      'Service level agreements'
    ],
    benefits: [
      'Reduce IT support costs by 50%',
      'Improve user productivity',
      'Minimize downtime',
      'Ensure consistent service quality'
    ],
    targetUsers: 'SMBs, Startups, Non-profits, Remote Teams',
    roi: '180-350%',
    popular: true
  },
  {
    id: 6,
    title: 'DevOps & CI/CD Implementation',
    description: 'Complete DevOps transformation with continuous integration, deployment automation, and infrastructure as code.',
    icon: Settings,
    category: 'DevOps',
    price: 'Starting at $2,000/month',
    marketPrice: '$4,000-8,000/month',
    setupTime: '4-8 weeks',
    features: [
      'CI/CD pipeline setup',
      'Infrastructure as Code (IaC)',
      'Container orchestration (Kubernetes)',
      'Monitoring & logging solutions',
      'Automated testing integration',
      'Deployment automation',
      'Environment management',
      'Performance optimization'
    ],
    benefits: [
      'Deploy 10x faster',
      'Reduce deployment errors by 90%',
      'Improve development efficiency',
      'Enable continuous delivery'
    ],
    targetUsers: 'Software Companies, Tech Startups, Enterprises',
    roi: '250-500%',
    popular: true
  },
  {
    id: 7,
    title: 'Data Backup & Disaster Recovery',
    description: 'Comprehensive backup solutions and disaster recovery planning to protect critical business data and ensure business continuity.',
    icon: HardDrive,
    category: 'Backup & Recovery',
    price: 'Starting at $600/month',
    marketPrice: '$1,200-2,400/month',
    setupTime: '1-3 weeks',
    features: [
      'Automated backup solutions',
      'Cloud & on-premise backup',
      'Disaster recovery planning',
      'Business continuity testing',
      'Data encryption & security',
      'Recovery time optimization',
      'Compliance requirements',
      '24/7 monitoring & alerts'
    ],
    benefits: [
      'Protect against data loss',
      'Minimize downtime during disasters',
      'Ensure business continuity',
      'Meet compliance requirements'
    ],
    targetUsers: 'All Industries, Healthcare, Finance, Legal',
    roi: '300-600%',
    popular: false
  },
  {
    id: 8,
    title: 'IT Consulting & Strategy',
    description: 'Strategic IT consulting including technology assessment, roadmap development, vendor selection, and digital transformation planning.',
    icon: Target,
    category: 'Consulting',
    price: 'Starting at $1,000/month',
    marketPrice: '$2,000-4,000/month',
    setupTime: '1-2 weeks',
    features: [
      'IT strategy development',
      'Technology assessment & audit',
      'Digital transformation planning',
      'Vendor evaluation & selection',
      'Budget planning & optimization',
      'Technology roadmap creation',
      'Change management support',
      'Ongoing advisory services'
    ],
    benefits: [
      'Make informed technology decisions',
      'Reduce IT costs by 30%',
      'Align IT with business goals',
      'Accelerate digital transformation'
    ],
    targetUsers: 'C-Level Executives, IT Directors, Business Owners',
    roi: '200-400%',
    popular: false
  }
];

const industries = [
  {
    title: "Healthcare & Medical",
    description: "HIPAA-compliant IT solutions for healthcare providers and medical facilities",
    icon: "🏥",
    useCases: ["Electronic Health Records", "Telemedicine platforms", "Medical imaging systems", "Patient data security"]
  },
  {
    title: "Financial Services",
    description: "Secure, compliant IT infrastructure for banks, credit unions, and financial institutions",
    icon: "🏦",
    useCases: ["Core banking systems", "Payment processing", "Risk management", "Regulatory compliance"]
  },
  {
    title: "E-commerce & Retail",
    description: "Scalable IT solutions for online retailers and brick-and-mortar stores",
    icon: "🛒",
    useCases: ["E-commerce platforms", "Inventory management", "Payment gateways", "Customer analytics"]
  },
  {
    title: "Manufacturing",
    description: "Industrial IT solutions for manufacturing and production facilities",
    icon: "🏭",
    useCases: ["ERP systems", "Production monitoring", "Supply chain management", "Quality control"]
  },
  {
    title: "Education & Training",
    description: "IT infrastructure for schools, universities, and training organizations",
    icon: "🎓",
    useCases: ["Learning management systems", "Student information systems", "Campus networks", "Online learning platforms"]
  },
  {
    title: "Government & Public Sector",
    description: "Secure, compliant IT solutions for government agencies and public organizations",
    icon: "🏛️",
    useCases: ["Citizen services", "Document management", "Security compliance", "Digital transformation"]
  }
];
<<<<<<< HEAD

export default function ITServicesPage() {
=======
export default function ITServices() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  useEffect(() => {
    const timer = null;
      features: [
        'Quantum Algorithm Design'
        'Hardware Selection'
        'Performance Optimization'
        'Security Implementation'
      ]
      price: 'Custom Pricing'
      popular: true
      benefits: [
        'Exponential Speedup'
        'Advanced Cryptography'
        'Optimization Solutions'
        'Future-Proof Technology'
      ]
    }
    {
      id: 2
      name: 'Blockchain & Web3 Solutions'
      description:
        'Comprehensive blockchain development and Web3 integration services for modern businesses.'
      category: 'blockchain'
      features: [
        'Smart Contract Development'
        'DApp Creation'
        'DeFi Integration'
        'NFT Platforms'
      ]
      price: 'Custom Pricing'
      popular: true
      benefits: [
        'Decentralized Solutions'
        'Enhanced Security'
        'Transparency'
        'Innovation'
      ]
    }
    {
      id: 3
      name: 'DevSecOps & Security Automation'
      description:
        'Integrated development, security, and operations with automated security testing and deployment.'
      category: 'devops'
      features: [
        'CI/CD Pipelines'
        'Security Scanning'
        'Automated Testing'
        'Infrastructure as Code'
      ]
      price: '$199/month'
      popular: false
      benefits: [
        'Faster Deployment'
        'Enhanced Security'
        'Reduced Risk'
        'Automated Compliance'
      ]
    }
    {
      id: 4
      name: 'Enterprise Data Platform'
      description:
        'Comprehensive data management and analytics platform for enterprise-scale operations.'
      category: 'enterprise'
      features: [
        'Data Warehousing'
        'Real-time Analytics'
        'Data Governance'
        'Machine Learning Integration'
      ]
      price: '$299/month'
      popular: true
      benefits: [
        'Data-Driven Insights'
        'Scalable Architecture'
        'Compliance Ready'
        'Advanced Analytics'
      ]
    }
    {
      id: 5
      name: 'High-Performance Computing Solutions'
      description:
        'Optimized computing infrastructure for demanding computational workloads and research.'
      category: 'cloud'
      features: [
        'GPU Computing'
        'Parallel Processing'
        'Distributed Computing'
        'Performance Monitoring'
      ]
      price: '$399/month'
      popular: false
      benefits: [
        'Massive Processing Power'
        'Scalable Resources'
        'Cost Optimization'
        'Advanced Capabilities'
      ]
    }
    {
      id: 6
      name: 'Cloud Migration Services'
      description:
        'Seamless migration of applications and infrastructure to cloud platforms with zero downtime.'
      category: 'cloud'
      features: [
        'Assessment & Planning'
        'Data Migration'
        'Application Modernization'
        'Performance Optimization'
      ]
      price: 'Custom Pricing'
      popular: true
      benefits: [
        'Reduced Costs'
        'Enhanced Scalability'
        'Improved Security'
        'Better Performance'
      ]
    }
    {
      id: 7
      name: 'Infrastructure as Code'
      description:
        'Automated infrastructure provisioning and management using modern DevOps practices.'
      category: 'devops'
      features: [
        'Terraform Automation'
        'Configuration Management'
        'Version Control'
        'Environment Provisioning'
      ]
      price: '$149/month'
      popular: false
      benefits: [
        'Consistent Environments'
        'Faster Provisioning'
        'Version Control'
        'Reduced Errors'
      ]
    }
    {
      id: 8
      name: 'Disaster Recovery Solutions'
      description:
        'Comprehensive backup and disaster recovery strategies to ensure business continuity.'
      category: 'security'
      features: [
        'Automated Backups'
        'Multi-site Replication'
        'Recovery Testing'
        'RTO/RPO Optimization'
      ]
      price: '$179/month'
      popular: true
      benefits: [
        'Business Continuity'
        'Data Protection'
        'Minimal Downtime'
        'Compliance Ready'
      ]
    }
    {
      id: 9
      name: 'Cybersecurity Assessment'
      description:
        'Comprehensive security evaluation and penetration testing for enterprise systems.'
      category: 'security'
      features: [
        'Vulnerability Assessment'
        'Penetration Testing'
        'Compliance Auditing'
        'Security Recommendations'
      ]
      price: '$249/month'
      popular: false
      benefits: [
        'Risk Identification'
        'Compliance Assurance'
        'Security Hardening'
        'Threat Mitigation'
      ]
    }
    {
      id: 10
      name: 'API Development & Integration'
      description:
        'Custom API development and third-party integration services for seamless connectivity.'
      category: 'enterprise'
      features: [
        'RESTful APIs'
        'GraphQL Services'
        'Third-party Integration'
        'API Documentation'
      ]
      price: '$129/month'
      popular: true
      benefits: [
        'System Integration'
        'Improved Efficiency'
        'Scalable Architecture'
        'Developer Experience'
      ]
    }
    {
      id: 11
      name: 'Microservices Architecture'
      description:
        'Design and implementation of microservices-based applications for scalable systems.'
      category: 'enterprise'
      features: [
        'Service Design'
        'Container Orchestration'
        'Service Mesh'
        'Monitoring & Logging'
      ]
      price: '$199/month'
      popular: false
      benefits: [
        'Scalable Architecture'
        'Independent Deployment'
        'Technology Diversity'
        'Fault Isolation'
      ]
    }
    {
      id: 12
      name: 'Edge Computing Solutions'
      description:
        'Distributed computing infrastructure for low-latency applications and IoT systems.'
      category: 'cloud'
      features: [
        'Edge Deployment'
        'IoT Integration'
        'Real-time Processing'
        'Bandwidth Optimization'
      ]
      price: '$159/month'
      popular: true
      benefits: [
        'Reduced Latency'
        'Bandwidth Savings'
        'Offline Capability'
        'Enhanced Performance'
      ]
    }
  ];
  const filteredServices =
    selectedCategory === 'all'
      ? services
      : services.filter(service => service.category === selectedCategory);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
  return (
    <>
      <Head>
        <title>IT Services & Solutions - Zion Tech Group | Cloud, Security, DevOps</title>
        <meta name="description" content="Comprehensive IT services including cloud migration, cybersecurity, network management, DevOps, and IT consulting. Transform your technology infrastructure." />
        <meta name="keywords" content="IT services, cloud migration, cybersecurity, network management, DevOps, IT consulting, infrastructure, managed services" />
        <link rel="canonical" href="https://ziontechgroup.com/it-services" />
      </Head>
<<<<<<< HEAD
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                IT Services & Solutions
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Comprehensive IT services to modernize your infrastructure, enhance security, and drive digital transformation. 
                From cloud migration to cybersecurity, we deliver enterprise-grade solutions at competitive prices.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
=======
      <ErrorBoundary level='page'>
        <main className='min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white'>
          {/* Hero Section */}
          <section className='py-20 px-4 text-center' role='banner'>
            <div className='max-w-4xl mx-auto'>
              <h1
                className={`text-5xl md:text-6xl font-extrabold tracking-tight mb-6 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              >
                IT Services
              </h1>
<p
                className={`text-xl md:text-2xl text-slate-300 mb-8 transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              >
                100+ Comprehensive IT Solutions
              </p>
              <p
                className={`text-lg text-slate-400 mb-12 max-w-3xl mx-auto transition-all duration-1000 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              >
                Transform your business with our enterprise-grade IT services.
                From cloud infrastructure to quantum computing, we provide
                cutting-edge technology solutions that scale with your business
                and drive innovation.
              </p>
            </div>
          </section>
          {/* Category Filter */}
<section className='py-8 px-4'>
            <div className='max-w-6xl mx-auto'>
              <div className='flex flex-wrap justify-center gap-4 mb-8'>
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-green-600 text-white'
                        : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
            </div>
          </section>
          {/* Services Grid */}
<section className='py-16 px-4' role='main'>
            <div className='max-w-7xl mx-auto'>
              <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {filteredServices.map((service, index) => (
                  <div
                    key={service.id}
                    className={`p-6 bg-slate-900/60 rounded-xl border border-white/10 hover:border-green-500/40 transition-all duration-300 hover:scale-105 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    {service.popular && (
<div className='absolute -top-2 -right-2 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded-full'>
                        Popular
                      </div>
                    )}
                    <h3 className='text-xl font-bold mb-3'>{service.name}</h3>
                    <p className='text-slate-300 mb-4 text-sm'>
                      {service.description}
                    </p>
                    <div className='mb-4'>
                      <h4 className='text-sm font-semibold text-green-400 mb-2'>
                        Key Features:
                      </h4>
                      <ul className='text-slate-400 text-sm space-y-1'>
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className='flex items-center'>
                            <span className='w-1.5 h-1.5 bg-green-400 rounded-full mr-2 flex-shrink-0'></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

<div className='mb-4'>
                      <h4 className='text-sm font-semibold text-blue-400 mb-2'>
                        Benefits:
                      </h4>
                      <div className='flex flex-wrap gap-1'>
                        {service.benefits.map((benefit, benefitIndex) => (
                          <span
                            key={benefitIndex}
                            className='text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded'
                          >
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>
<div className='flex items-center justify-between mb-4'>
                      <span className='text-2xl font-bold text-green-400'>
                        {service.price}
                      </span>
                      <span className='text-xs text-slate-500 capitalize'>
                        {service.category.replace('-', ' ')}
                      </span>
                    </div>

                    <button className='w-full py-2 bg-green-600 hover:bg-green-700 rounded-lg font-semibold transition-colors'>
                      Learn More
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>
          {/* Technology Stack Section */}
<section className='py-16 px-4 bg-slate-900/40'>
            <div className='max-w-6xl mx-auto'>
              <h2 className='text-3xl md:text-4xl font-bold text-center mb-12'>
                Our Technology Stack
              </h2>
              <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
                <div className='text-center'>
                  <div className='w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4'>
                    <svg
                      className='w-8 h-8 text-white'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M3 15a4 4 0 004 4M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                      />
                    </svg>
                  </div>
                  <h3 className='text-xl font-bold mb-2'>Cloud Platforms</h3>
                  <p className='text-slate-400'>
                    AWS, Azure, GCP, and hybrid cloud solutions
                  </p>
                </div>
                <div className='text-center'>
                  <div className='w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4'>
                    <svg
                      className='w-8 h-8 text-white'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
                      />
                    </svg>
                  </div>
                  <h3 className='text-xl font-bold mb-2'>Security</h3>
                  <p className='text-slate-400'>
                    Zero-trust architecture and advanced threat protection
                  </p>
                </div>
                <div className='text-center'>
                  <div className='w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4'>
                    <svg
                      className='w-8 h-8 text-white'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z'
                      />
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                      />
                    </svg>
                  </div>
                  <h3 className='text-xl font-bold mb-2'>DevOps</h3>
                  <p className='text-slate-400'>
                    CI/CD pipelines and infrastructure automation
                  </p>
                </div>
                <div className='text-center'>
                  <div className='w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4'>
                    <svg
                      className='w-8 h-8 text-white'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1'
                      />
                    </svg>
                  </div>
                  <h3 className='text-xl font-bold mb-2'>Blockchain</h3>
                  <p className='text-slate-400'>
                    Smart contracts and decentralized applications
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* CTA Section */}
<section className='py-16 px-4'>
            <div className='max-w-4xl mx-auto text-center'>
              <h2 className='text-3xl md:text-4xl font-bold mb-8'>
                Ready to Transform Your IT Infrastructure?
              </h2>
              <p className='text-lg text-slate-300 mb-8'>
                Contact our IT experts to discuss how our comprehensive
                technology solutions can modernize your infrastructure and
                accelerate your digital transformation.
              </p>
              <div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
                <Link
                  href='/contact'
                  className='px-8 py-3 bg-green-600 hover:bg-green-700 rounded-lg font-semibold transition-colors'
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
                >
                  Get IT Consultation
                </Link>
                <a 
                  href={`tel:${contactInfo.phone}`}
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-lg"
                >
<<<<<<< HEAD
                  Call {contactInfo.phone}
=======
                  Call {contact.phone}
                </a>
                <a
                  href={`mailto:${contact.email}`}
                  className='px-8 py-3 bg-slate-800 hover:bg-slate-700 border border-white/10 rounded-lg font-semibold transition-colors'
                >
                  Email Us
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
                </a>
              </div>
</motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our IT Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                End-to-end IT solutions designed to modernize your infrastructure, enhance security, and drive business growth.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  {service.popular && (
                    <div className="absolute -top-3 -right-3 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                      <Star className="w-4 h-4 fill-current" />
                      Popular
                    </div>
                  )}
                  
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <service.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Clock className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-500">{service.setupTime}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl font-bold text-blue-600">{service.price}</span>
                      <span className="text-sm text-gray-500 line-through">{service.marketPrice}</span>
                    </div>
                    <div className="text-sm text-green-600 font-medium">
                      Save up to 50% vs market rate
                    </div>
                  </div>

                  {/* ROI and Popularity */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-sm">
                      <span className="text-gray-500">Expected ROI:</span>
                      <span className="text-green-600 font-semibold ml-1">
                        {service.roi.split(' ')[0]} ROI
                      </span>
                    </div>
                    {service.popular && (
                      <div className="flex items-center gap-1 text-yellow-600">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="text-sm font-medium">Popular</span>
                      </div>
                    )}
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 4).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-700">
                          <ArrowRight className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <div className="text-sm text-gray-600">
                      <strong>Target Users:</strong> {service.targetUsers}
                    </div>
<<<<<<< HEAD
                  </div>
=======
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
        'Micro-segmentation and network isolation',
        'Continuous security monitoring and analytics',
        'Privileged access management (PAM)',
        'Security orchestration and automation'
      ],
      pricing: '$100,000 – $1,000,000 project',
      projectPricing: '$10,000 – $100,000/month managed',
      timeline: '12–24 weeks',
      benefits: [
        'Enhanced security posture',
        'Reduced attack surface',
        'Improved compliance and governance',
        'Automated threat response'
      ],
      category: 'Security'
    },
    {
      icon: Database,
      name: 'Blockchain & Distributed Ledger Solutions',
      description: 'Blockchain infrastructure, smart contract development, and decentralized application deployment.',
      features: [
        'Blockchain infrastructure setup and management',
        'Smart contract development and auditing',
        'DeFi and NFT platform development',
        'Cryptocurrency wallet and exchange integration',
        'Blockchain analytics and monitoring',
        'Regulatory compliance and governance'
      ],
      pricing: '$75,000 – $750,000 project',
      projectPricing: '$5,000 – $50,000/month managed',
      timeline: '16–32 weeks',
      benefits: [
        'Enhanced transparency and trust',
        'Reduced transaction costs',
        'Improved data integrity',
        'Decentralized system architecture'
      ],
      category: 'Blockchain'
    },
    {
      icon: Cloud,
      name: 'Multi-Cloud & Hybrid Cloud Management',
      description: 'Comprehensive multi-cloud and hybrid cloud strategy with unified management and optimization.',
      features: [
        'Multi-cloud architecture design and implementation',
        'Hybrid cloud integration and management',
        'Cloud cost optimization and FinOps',
        'Cross-cloud data migration and synchronization',
        'Unified monitoring and management platform',
        'Disaster recovery and business continuity'
      ],
      pricing: '$150,000 – $1,500,000 project',
      projectPricing: '$15,000 – $150,000/month managed',
      timeline: '16–32 weeks',
      benefits: [
        'Reduced vendor lock-in',
        'Optimized cloud costs',
        'Enhanced flexibility and scalability',
        'Improved disaster recovery capabilities'
      ],
      category: 'Cloud & Infrastructure'
    },
    {
      icon: Smartphone,
      name: '5G Network Infrastructure & Optimization',
      description: '5G network deployment, optimization, and application development for next-generation connectivity.',
      features: [
        '5G network infrastructure deployment',
        'Network slicing and optimization',
        '5G application development and testing',
        'Edge computing integration with 5G',
        'Network performance monitoring and analytics',
        'IoT and smart city connectivity solutions'
      ],
      pricing: '$200,000 – $2,000,000 project',
      projectPricing: '$20,000 – $200,000/month managed',
      timeline: '20–40 weeks',
      benefits: [
        'Ultra-low latency connectivity',
        'Massive IoT device support',
        'Enhanced mobile broadband',
        'Next-generation application capabilities'
      ],
      category: 'Network Infrastructure'
    },
    {
      icon: Brain,
      name: 'AI/ML Infrastructure & MLOps',
      description: 'Complete AI/ML infrastructure setup with MLOps pipelines, model deployment, and monitoring.',
      features: [
        'AI/ML infrastructure design and deployment',
        'MLOps pipeline development and automation',
        'Model training and deployment platforms',
        'AI model monitoring and governance',
        'Data pipeline and feature store setup',
        'AI ethics and bias monitoring'
      ],
      pricing: '$100,000 – $1,000,000 project',
      projectPricing: '$10,000 – $100,000/month managed',
      timeline: '12–24 weeks',
      benefits: [
        'Accelerated AI model development',
        'Automated ML operations',
        'Scalable AI infrastructure',
        'Enhanced model performance and reliability'
      ],
      category: 'AI Infrastructure'
    },
    {
      icon: Server,
      name: 'Serverless & Microservices Architecture',
      description: 'Serverless architecture implementation with microservices design and API management.',
      features: [
        'Serverless architecture design and implementation',
        'Microservices development and deployment',
        'API gateway and management platform',
        'Container orchestration and management',
        'Event-driven architecture implementation',
        'Performance monitoring and optimization'
      ],
      pricing: '$75,000 – $750,000 project',
      projectPricing: '$5,000 – $50,000/month managed',
      timeline: '12–24 weeks',
      benefits: [
        'Reduced infrastructure costs',
        'Improved scalability and performance',
        'Faster development and deployment',
        'Enhanced system reliability'
      ],
      category: 'Architecture'
    },
    {
      icon: Database,
      name: 'Data Mesh & Data Fabric Architecture',
      description: 'Modern data architecture with data mesh and data fabric implementation for enterprise data management.',
      features: [
        'Data mesh architecture design and implementation',
        'Data fabric platform development',
        'Data governance and cataloging',
        'Real-time data streaming and processing',
        'Data quality and lineage management',
        'Self-service analytics platform'
      ],
      pricing: '$200,000 – $2,000,000 project',
      projectPricing: '$20,000 – $200,000/month managed',
      timeline: '20–40 weeks',
      benefits: [
        'Improved data accessibility and democratization',
        'Enhanced data quality and governance',
        'Faster time-to-insight',
        'Scalable data architecture'
      ],
      category: 'Data Architecture'
    },
    {
      icon: Shield,
      name: 'DevSecOps & Security Automation',
      description: 'Integrated security into DevOps pipelines with automated security testing and compliance.',
      features: [
        'DevSecOps pipeline integration',
        'Automated security testing and scanning',
        'Infrastructure as Code security',
        'Compliance automation and reporting',
        'Security monitoring and alerting',
        'Vulnerability management and remediation'
      ],
      pricing: '$50,000 – $500,000 project',
      projectPricing: '$5,000 – $50,000/month managed',
      timeline: '8–16 weeks',
      benefits: [
        'Enhanced security throughout SDLC',
        'Automated compliance and reporting',
        'Reduced security vulnerabilities',
        'Faster and more secure deployments'
      ],
      category: 'Security'
    },
    {
      icon: Globe,
      name: 'Green IT & Sustainable Technology',
      description: 'Sustainable IT infrastructure with energy optimization, carbon footprint reduction, and green computing.',
      features: [
        'Energy-efficient infrastructure design',
        'Carbon footprint monitoring and reduction',
        'Green data center optimization',
        'Sustainable software development practices',
        'Renewable energy integration',
        'Environmental impact assessment and reporting'
      ],
      pricing: '$100,000 – $1,000,000 project',
      projectPricing: '$10,000 – $100,000/month managed',
      timeline: '12–24 weeks',
      benefits: [
        'Reduced environmental impact',
        'Lower energy costs',
        'Enhanced corporate sustainability',
        'Compliance with environmental regulations'
      ],
      category: 'Sustainability'
    },
    {
      icon: Cpu,
      name: 'High-Performance Computing (HPC)',
      description: 'High-performance computing infrastructure for scientific research, simulations, and data-intensive applications.',
      features: [
        'HPC cluster design and deployment',
        'Parallel computing optimization',
        'GPU computing and acceleration',
        'Scientific computing software stack',
        'High-speed networking and storage',
        'Performance monitoring and optimization'
      ],
      pricing: '$500,000 – $5,000,000 project',
      projectPricing: '$50,000 – $500,000/month managed',
      timeline: '24–48 weeks',
      benefits: [
        'Massive computational power',
        'Accelerated research and development',
        'Complex simulation capabilities',
        'Advanced data processing and analysis'
      ],
      category: 'High-Performance Computing'
    }
  ];
>>>>>>> origin/cursor/add-new-services-and-deploy-updates-f122

                  <div className="flex flex-col sm:flex-row gap-2">
                    <Link
                      href="/contact"
                      className="flex-1 bg-blue-600 text-white px-4 py-2 rounded text-center hover:bg-blue-700 transition-colors font-semibold"
                    >
                      Get Quote
                    </Link>
                    <Link
                      href={`/contact?service=${encodeURIComponent(service.title)}`}
                      className="flex-1 border border-blue-600 text-blue-600 px-4 py-2 rounded text-center hover:bg-blue-50 transition-colors font-semibold"
                    >
                      Learn More
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Industries We Serve
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our IT services are tailored to meet the unique requirements and compliance needs of various industries.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 p-8 rounded-xl hover:bg-gray-100 transition-colors"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-4xl mb-4">{industry.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{industry.title}</h3>
                  <p className="text-gray-600 mb-4">{industry.description}</p>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Use Cases:</h4>
                    <ul className="space-y-1">
                      {industry.useCases.map((useCase, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-center">
                          <ArrowRight className="w-3 h-3 text-blue-500 mr-2 flex-shrink-0" />
                          {useCase}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our IT Services?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We combine deep technical expertise with business acumen to deliver IT solutions that drive real business value.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Award,
                  title: "Certified Experts",
                  description: "Certified professionals with 10+ years of experience"
                },
                {
                  icon: Shield,
                  title: "Security First",
                  description: "Enterprise-grade security and compliance standards"
                },
                {
                  icon: DollarSign,
                  title: "Cost Effective",
                  description: "50% lower costs than traditional IT providers"
                },
                {
                  icon: Clock,
                  title: "24/7 Support",
                  description: "Round-the-clock monitoring and support services"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-8 h-8 text-blue-600" />
                  </div>
<<<<<<< HEAD
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Modernize Your IT Infrastructure?
              </h2>
              <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
                Transform your technology infrastructure with our comprehensive IT services. From cloud migration to cybersecurity, 
                we'll help you build a robust, secure, and scalable IT environment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link 
                  href="/contact"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
                >
                  Get IT Assessment
                </Link>
                <a 
                  href={`tel:${contactInfo.phone}`}
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-lg"
                >
                  Call {contactInfo.phone}
                </a>
              </div>
              
              {/* Contact Information */}
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="flex items-center justify-center">
                  <Phone className="w-6 h-6 mr-2" />
                  <span>{contactInfo.phone}</span>
                </div>
                <div className="flex items-center justify-center">
                  <Mail className="w-6 h-6 mr-2" />
                  <span>{contactInfo.email}</span>
                </div>
                <div className="flex items-center justify-center">
                  <MapPin className="w-6 h-6 mr-2" />
                  <span>{contactInfo.address}</span>
                </div>
              </div>
=======
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    {benefit.stat}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                  </motion.div>
              );
            })}
          </div>
                  </div>
                  </section>
      {/* Support Levels Section */}
      <section className="py-20 bg-white">
                  <div className="container mx-auto px-4">
                  <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
<h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Support Levels</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the support level that best fits your business needs.
            </p>
                  </motion.div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportLevels.map((level, index) => (
              <motion.div
                key={index}
                className={`p-8 rounded-xl shadow-lg ${
                  index === 1 ? 'bg-green-50 border-2 border-green-200' : 'bg-white'
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {level.name}
                </h3>
                  <p className="text-gray-600 mb-6">
                  {level.description}
                </p>
                  <div className="text-3xl font-bold text-green-600 mb-6">
                  {level.pricing}
                </div>
                  <ul className="space-y-3 mb-8">
                  {level.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                  <Link
                  href="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors inline-flex items-center justify-center ${
                    index === 1
? 'bg-green-600 hover: bg-green-700 text-white'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                  }`}
                >
                  <span>Choose Plan</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                  </motion.div>
            ))}
          </div>
                  </div>
                  </section>
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
<div className="container mx-auto px-4 text-center">
                  <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
<h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Optimize Your IT Infrastructure?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let our expert team help you build a robust, secure, and scalable IT environment.
            </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact" className="px-8 py-4 bg-white text-green-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                Get IT Assessment
              </Link>
                  <Link href="/services" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-green-600 transition-all duration-300 font-semibold">
                View All Services
              </Link>
                  </div>
                  </motion.div>
                  </div>
                  </section>
      {/* Contact Information Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get Started with IT Services Today
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Ready to transform your IT infrastructure? Our expert team is here to help you build, secure, and optimize your technology environment. Contact us for a free consultation and discover how we can accelerate your digital transformation.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <motion.div
              className="text-center p-6 bg-white rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Free IT Consultation</h3>
              <p className="text-gray-600 mb-4">Get expert advice on your IT project with our complimentary 30-minute consultation.</p>
              <a href="tel:+13024640950" className="text-green-600 font-semibold hover:text-green-700">
                Call Now: +1 302 464 0950
              </a>
            </motion.div>
            <motion.div
              className="text-center p-6 bg-white rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600 mb-4">Send us your IT project details and we'll respond within 24 hours with a detailed proposal.</p>
              <a href="mailto:kleber@ziontechgroup.com" className="text-green-600 font-semibold hover:text-green-700">
                kleber@ziontechgroup.com
              </a>
            </motion.div>
            <motion.div
              className="text-center p-6 bg-white rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Visit Our Office</h3>
              <p className="text-gray-600 mb-4">Schedule an in-person meeting at our headquarters in Middletown, Delaware.</p>
              <address className="text-green-600 font-semibold not-italic">
                364 E Main St STE 1008<br />
                Middletown, DE 19709
              </address>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
            </motion.div>
          </div>
        </section>
      </div>
<<<<<<< HEAD
    </>
  );
}
=======
    </Layout>
  );
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
