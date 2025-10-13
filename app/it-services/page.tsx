<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
'use client;
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Server, Shield, Cloud, Database, Network, Code, Monitor, Settings } from 'lucide-react';
=======
import React from "react";
import { ArrowRight, Star, Zap, Target, Monitor } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import SEOOptimizer from "../components/SEOOptimizer";
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0ff3

import React from 'react;

import { Helmet } from 'react-helmet-async;

import { Link } from 'react-router-dom;

import { Cloud, Shield, Settings, Database, Smartphone, Globe, Zap, ArrowRight } from 'lucide-react;

;

const ItServicesPage: React.FC = () => {const itServices = [;
    {
      titl,
    e: 'Cloud Infrastructure Management,
      description: 'Complete cloud migration, optimization, and management services for AWS, Azure, and Google Cloud.,
      icon: '☁️,
      price: Starting at $2,500
      features: ['Cloud migration strategy', 'Cost optimization', 'Security hardening', 24
      benefits: ['Reduce cloud costs by 30%', 'Improve performance by 40%', 'Ensure 99.9% uptime],
      marketPrice: $4,000-8,000
      category: 'Cloud Services,
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Kubernetes', 'Docker]
    },
    {
      title: 'Cybersecurity Solutions,
      description: 'Comprehensive security services including threat detection, vulnerability assessment, and incident response.,
      icon: '🔒,
      price: Starting at $3,000
      features: ['Security audits', 'Penetration testing', 'Threat monitoring', 'Incident response', 'Compliance management],
      benefits: ['Prevent 99% of cyber attacks', 'Reduce security costs by 50%', 'Ensure compliance],
      marketPrice: $5,000-12,000
      category: 'Security,
      technologies: ['SIEM', 'EDR', 'Firewall', 'VPN', 'Zero Trust]
    },
    {
      title: DevOps & CI
      descriptio,
    n: 'Automated deployment pipelines, infrastructure as code, and continuous integration services.,
      icon: '🔄,
      price: Starting at $2,000
      features: [CI
    {
      title: 'Database Administration,
      description: 'Database design, optimization, backup, and maintenance for SQL and NoSQL databases.,
      icon: '🗄️,
      price: Starting at $1,500
      features: ['Database design', 'Performance tuning', 'Backup & recovery', 'Security hardening', 'Migration services],
      benefits: ['Improve query performance by 60%', 'Ensure data integrity', 'Reduce downtime],
      marketPrice: $2,500-5,000
      category: 'Database,
      technologies: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Elasticsearch]
    },
    {
      title: 'Network Infrastructure,
      description: 'Network design, implementation, and management for enterprise-grade connectivity.,
      icon: '🌐,
      price: Starting at $2,200
      features: ['Network design', 'Router & switch config', 'VPN setup', 'Load balancing', 'Network monitoring],
      benefits: ['Improve network performance', 'Reduce latency by 40%', 'Ensure reliability],
      marketPrice: $3,500-6,000
      category: 'Networking,
      technologies: ['Cisco', 'Juniper', 'Fortinet', 'SD-WAN', 'MPLS]
    },
    {
      title: 'IT Support & Helpdesk,
      description: 24
      ico,
    n: '🛠️,
      price: Starting at $1,200
      features: [24
    {
      title: 'Data Analytics & BI,
      description: 'Data warehouse design, ETL processes, and business intelligence dashboard development.,
      icon: '📊,
      price: Starting at $2,800
      features: ['Data warehouse design', 'ETL development', 'Dashboard creation', 'Report automation', 'Data governance],
      benefits: ['Make data-driven decisions', 'Improve business insights', 'Automate reporting],
      marketPrice: $4,500-9,000
      category: 'Analytics,
      technologies: ['Tableau', 'Power BI', 'Snowflake', 'Apache Airflow', 'Python]
    },
    {
      title: 'API Development & Integration,
      description: 'Custom API development, third-party integrations, and microservices architecture.,
      icon: '🔌,
      price: Starting at $2,000
      features: ['RESTful API design', 'GraphQL development', 'Third-party integrations', 'API documentation', 'Rate limiting],
      benefits: ['Improve system connectivity', 'Enable rapid development', 'Enhance scalability],
      marketPrice: $3,500-7,500
      category: 'Integration,
      technologies: ['Node.js', 'Python', 'GraphQL', 'Kong', 'Postman]
    },
    {
      title: 'Mobile App Development,
      description: 'Native and cross-platform mobile application development for iOS and Android.,
      icon: '📱,
      price: Starting at $3,500
      features: ['Native iOS/Android apps', 'Cross-platform development', UI
      benefits: ['Reach mobile users', 'Improve user engagement', 'Increase revenue],
      marketPrice: $6,000-15,000
      category: 'Mobile,
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Xamarin]
    },
    {
      title: 'Web Application Development,
      description: 'Custom web applications, e-commerce solutions, and enterprise web platforms.,
      icon: '💻,
      price: Starting at $2,500
      features: ['Custom web apps', 'E-commerce solutions', 'CMS development', 'Responsive design', 'SEO optimization],
      benefits: ['Improve online presence', 'Increase conversions', 'Enhance user experience],
      marketPrice: $4,000-10,000
      category: 'Web Development,
      technologies: ['React', 'Vue.js', 'Node.js', 'PHP', 'WordPress]
    },
    {
      title: 'IT Consulting & Strategy,
      description: 'Technology roadmap development, digital transformation planning, and IT strategy consulting.,
      icon: '💡,
      price: Starting at $200
    {
      title: 'Disaster Recovery & Backup,
      description: 'Comprehensive backup solutions, disaster recovery planning, and business continuity services.,
      icon: '🔄,
      price: Starting at $1,800
      features: ['Backup strategy', 'Disaster recovery planning', 'Data replication', 'Recovery testing', 'Business continuity],
      benefits: ['Minimize downtime', 'Protect critical data', 'Ensure business continuity],
      marketPrice: $3,000-6,000
      category: 'Backup & Recovery,
      technologies: ['Veeam', 'Commvault', 'AWS Backup', 'Azure Backup', 'VMware]
    },
    {
      title: 'Blockchain Infrastructure,
      description: 'Enterprise blockchain solutions, smart contract development, and decentralized application deployment.,
      icon: '⛓️,
      price: Starting at $4,500
      features: ['Blockchain deployment', 'Smart contract development', 'DApp development', 'Node management', 'Security auditing],
      benefits: ['Enable decentralized solutions', 'Improve transparency', 'Reduce intermediaries],
      marketPrice: $8,000-25,000
      category: 'Blockchain,
      technologies: ['Ethereum', 'Hyperledger', 'Solidity', 'Web3', 'IPFS]
    },
    {
      title: 'IoT Platform Management,
      description: 'Comprehensive IoT infrastructure management and device connectivity solutions.,
      icon: '🌐,
      price: Starting at $3,200
      features: ['Device management', 'Data collection', 'Real-time monitoring', 'Edge computing', 'Security management],
      benefits: ['Enable IoT deployments', 'Improve operational efficiency', 'Reduce manual monitoring],
      marketPrice: $5,500-18,000
      category: 'IoT,
      technologies: ['AWS IoT', 'Azure IoT', 'MQTT', 'CoAP', 'Edge Computing]
    },
    {
      title: 'Edge Computing Infrastructure,
      description: 'Distributed computing infrastructure for low-latency applications and edge data processing.,
      icon: '⚡,
      price: Starting at $3,800
      features: ['Edge node deployment', 'Data processing', 'Content delivery', 'Load balancing', 'Monitoring],
      benefits: ['Reduce latency', 'Improve performance', 'Enable real-time applications],
      marketPrice: $6,500-20,000
      category: 'Edge Computing,
      technologies: ['Kubernetes', 'Docker', 'CDN', 'Edge Servers', '5G Networks]
    },
    {
      title: 'Quantum Computing Infrastructure,
      description: 'Quantum computing platform setup and quantum algorithm development services.,
      icon: '⚛️,
      price: Starting at $8,000
      features: ['Quantum hardware setup', 'Algorithm development', 'Quantum simulation', 'Hybrid systems', 'Research support],
      benefits: ['Enable quantum computing', 'Solve complex problems', 'Gain competitive advantage],
      marketPrice: $15,000-50,000
      category: 'Quantum Computing,
      technologies: ['IBM Qiskit', 'Google Cirq', 'Rigetti', 'IonQ', 'Quantum Simulators]
    },
    {
      title: '5G Network Implementation,
      description: '5G network infrastructure deployment and optimization for enterprise applications.,
      icon: '📡,
      price: Starting at $5,500
      features: ['5G network design', 'Infrastructure deployment', 'Performance optimization', 'Security implementation', 'Integration services],
      benefits: ['Enable high-speed connectivity', 'Support IoT applications', 'Improve mobile experience],
      marketPrice: $10,000-40,000
      category: '5G Networks,
      technologies: ['5G Core', 'RAN', 'Network Slicing', 'MEC', 'NFV]
    },
    {
      title: 'Microservices Architecture,
      description: 'Modern microservices architecture design and implementation for scalable applications.,
      icon: '🔧,
      price: Starting at $3,500
      features: ['Architecture design', 'Service decomposition', 'API gateway setup', 'Service mesh', 'Monitoring],
      benefits: ['Improve scalability', 'Enable rapid development', 'Reduce deployment risks],
      marketPrice: $6,000-20,000
      category: 'Microservices,
      technologies: ['Kubernetes', 'Docker', 'Istio', 'API Gateway', 'Service Mesh]
    },
    {
      title: 'Serverless Computing Platform,
      description: 'Serverless architecture implementation and management for event-driven applications.,
      icon: '☁️,
      price: Starting at $2,800
      features: ['Function deployment', 'Event handling', 'Auto-scaling', 'Cost optimization', 'Monitoring],
      benefits: ['Reduce infrastructure costs', 'Improve scalability', 'Simplify deployment],
      marketPrice: $4,500-15,000
      category: 'Serverless,
      technologies: ['AWS Lambda', 'Azure Functions', 'Google Cloud Functions', 'Serverless Framework]
    },
    {
      title: 'Data Lake Architecture,
      description: 'Enterprise data lake design and implementation for big data analytics and storage.,
      icon: '🏞️,
      price: Starting at $4,200
      features: ['Data lake design', 'Data ingestion', 'Storage optimization', 'Security implementation', 'Analytics setup],
      benefits: ['Centralize data storage', 'Enable advanced analytics', 'Improve data governance],
      marketPrice: $7,000-25,000
      category: 'Data Architecture,
      technologies: ['AWS S3', 'Azure Data Lake', 'Hadoop', 'Spark', 'Delta Lake]
    },
    {
      title: 'AI Infrastructure Setup,
      description: AI
      ico,
    n: '🤖,
      price: Starting at $4,800
      features: ['GPU cluster setup', 'ML pipeline deployment', 'Model serving', 'Data preprocessing', 'Monitoring],
      benefits: [Enable AI
    {
      title: 'Hybrid Cloud Management,
      description: 'Multi-cloud and hybrid cloud infrastructure management and optimization.,
      icon: '☁️,
      price: Starting at $3,600
      features: ['Multi-cloud strategy', 'Cost optimization', 'Security management', 'Migration services', 'Monitoring],
      benefits: ['Optimize cloud costs', 'Improve reliability', 'Enable vendor flexibility],
      marketPrice: $6,500-22,000
      category: 'Cloud Management,
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Terraform', 'CloudFormation]
    },
    {
      title: 'Zero Trust Security Architecture,
      description: 'Zero trust security model implementation for enterprise network protection.,
      icon: '🔒,
      price: Starting at $4,000
      features: ['Identity verification', 'Network segmentation', 'Access control', 'Threat detection', 'Compliance],
      benefits: ['Improve security posture', 'Reduce attack surface', 'Ensure compliance],
      marketPrice: $7,500-25,000
      category: 'Security Architecture,
      technologies: ['Zero Trust', 'Identity Management', 'Network Security', 'SIEM', 'EDR]
    },
    {
      title: 'High-Performance Computing (HPC),
      description: 'High-performance computing cluster setup and management for scientific and engineering workloads.,
      icon: '💻,
      price: Starting at $6,000
      features: ['HPC cluster design', 'Job scheduling', 'Performance optimization', 'Storage management', 'Monitoring],
      benefits: ['Accelerate computations', 'Enable complex simulations', 'Improve research efficiency],
      marketPrice: $12,000-50,000
      category: 'HPC,
      technologies: ['Slurm', 'OpenMPI', 'CUDA', 'InfiniBand', 'Parallel File Systems]
    },
    {
      title: 'Content Delivery Network (CDN),
      description: 'Global CDN implementation and optimization for improved content delivery performance.,
      icon: '🌍,
      price: Starting at $1,500
      features: ['CDN setup', 'Content optimization', 'Caching strategy', 'Performance monitoring', 'Security],
      benefits: ['Improve load times', 'Reduce bandwidth costs', 'Enhance user experience],
      marketPrice: $2,500-10,000
      category: 'CDN,
      technologies: ['CloudFlare', 'AWS CloudFront', 'Azure CDN', 'Akamai', 'Fastly]
    },
    {
      title: 'Database Performance Optimization,
      description: 'Database performance tuning and optimization for improved application performance.,
      icon: '🗄️,
      price: Starting at $2,200
      features: ['Performance analysis', 'Query optimization', 'Index tuning', 'Capacity planning', 'Monitoring],
      benefits: ['Improve query performance', 'Reduce response times', 'Optimize resource usage],
      marketPrice: $4,000-15,000
      category: 'Database Optimization,
      technologies: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Elasticsearch]
    },
    {
      title: 'API Gateway Management,
      description: 'Enterprise API gateway setup and management for secure and scalable API operations.,
      icon: '🚪,
      price: Starting at $2,500
      features: ['API gateway setup', 'Rate limiting', 'Authentication', 'Monitoring', 'Documentation],
      benefits: ['Centralize API management', 'Improve security', 'Enable API monetization],
      marketPrice: $4,500-18,000
      category: 'API Management,
      technologies: ['Kong', 'AWS API Gateway', 'Azure API Management', 'Apigee', 'Zuul]
    },
    {
      title: 'Container Orchestration,
      description: 'Kubernetes and container orchestration platform setup and management.,
      icon: '🐳,
      price: Starting at $3,200
      features: ['Kubernetes setup', 'Container management', 'Auto-scaling', 'Service mesh', 'Monitoring],
      benefits: ['Improve scalability', 'Simplify deployment', 'Enable microservices],
      marketPrice: $5,500-20,000
      category: 'Containerization,
      technologies: ['Kubernetes', 'Docker', 'Helm', 'Istio', 'Prometheus]
    },
    {
      title: 'Real-time Data Streaming,
      description: 'Real-time data streaming platform setup and management for live data processing.,
      icon: '📊,
      price: Starting at $2,800
      features: ['Stream processing', 'Data pipelines', 'Real-time analytics', 'Event handling', 'Monitoring],
      benefits: ['Enable real-time insights', 'Improve decision making', 'Support live applications],
      marketPrice: $5,000-18,000
      category: 'Streaming,
      technologies: ['Apache Kafka', 'Apache Flink', 'Apache Storm', 'AWS Kinesis', 'Azure Stream Analytics]
        {/* Key Benefits *
        <section className="py-16 bg-white>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8><
            <div className="text-center mb-12><
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4>
        {/* Services by Category *
        {categories.map(category => (

          <section key={category} className="py-16 bg-gray-50>
            <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8><
              <div className="text-center mb-12><
                <h2 className=text-3xl m,
    d:text-4xl font-bold text-gray-900 mb-4>
              <div className=grid grid-cols-1 md: grid-cols-2 l,
    g:grid-cols-3 gap-8>
                {itServices
                      <div className="mb-4><
                        <h4 className="font-semibold text-gray-900 mb-2>Technologies: <
                        <div className="flex flex-wrap gap-2>
                          {service.technologies.map((tech), techIndex) => (<
                            <span key={techIndex} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded>
        {/* Contact Section *
        <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white>
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center><
            <h2 className="text-3xl md:text-4xl font-bold mb-4>
        <section className="py-16 px-4>
          <div className="max-w-7xl mx-auto>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8>
              {itServices.map((service, index) => (

    </React.Fragment>)
  );};
      category: 'cloud',
      pricing: { starting: 2999, period: 'project' },
      features: [
        'Assessment and planning',
        'Data migration',
        'Application migration',
        'Security configuration',
        'Performance optimization',
        'Training and support'
      ],
      benefits: [
        'Reduce infrastructure costs by 60%',
        'Improve scalability',
        'Enhance security',
        'Increase flexibility'
      ],
      popular: true,
      rating: 4.8,
      users: 1200,
      link: 'https://ziontechgroup.com/cloud-migration'
      category: 'security',
      pricing: { starting: 149, period: 'month' },
      features: [
        'Firewall management',
        'Endpoint protection',
        'Email security',
        'Network monitoring',
        'Vulnerability assessment',
        'Incident response'
      ],
      benefits: [
        'Prevent 99.9% of threats',
        'Reduce security incidents by 95%',
        'Comply with regulations',
        'Protect sensitive data'
      ],
      popular: true,
      rating: 4.9,
      users: 3200,
      link: 'https://ziontechgroup.com/cybersecurity-suite'
      category: 'data',
      pricing: { starting: 99, period: 'month' },
      features: [
        'Automated daily backups',
        'Cloud storage integration',
        'Point-in-time recovery',
        'Disaster recovery planning',
        'Data encryption',
        'Compliance reporting'
      ],
      benefits: [
        'Protect against data loss',
        'Recover data in minutes',
        'Meet compliance requirements',
        'Reduce downtime'
      ],
      popular: true,
      rating: 4.8,
      users: 4100,
      link: 'https://ziontechgroup.com/data-backup-recovery'
    },
    {
      id: 'help-desk-support',
      name: 'Help Desk Support',
      description: 'Professional IT support services to resolve technical issues quickly and efficiently.',
      icon: Headphones,
      category: 'support',
      pricing: { starting: 79, period: 'month', perUser: true },
      features: [
        '24/7 phone and email support',
        'Remote assistance',
        'Ticket management',
        'Knowledge base access',
        'Priority support levels',
        'SLA guarantees'
      ],
      benefits: [
        'Resolve issues 3x faster',
        'Improve user satisfaction',
        'Reduce IT workload',
        'Increase productivity'
      ],
      popular: true,
      rating: 4.6,
      users: 5600,
      link: 'https://ziontechgroup.com/help-desk-support'
    },
    {
      id: 'software-licensing',
      name: 'Software Licensing Management',
      description: 'Optimize software costs and ensure compliance with comprehensive licensing management.',
      icon: Key,
      category: 'software',
      pricing: { starting: 49, period: 'month' },
      features: [
        'License inventory',
        'Compliance monitoring',
        'Cost optimization',
        'Renewal management',
        'Usage tracking',
        'Audit support'
      ],
      benefits: [
        'Reduce software costs by 30%',
        'Ensure compliance',
        'Avoid penalties',
        'Optimize usage'
      ],
      popular: false,
      rating: 4.5,
      users: 2200,
      link: 'https://ziontechgroup.com/software-licensing'
    },
    {
      id: 'it-consulting',
      name: 'IT Consulting Services',
      description: 'Strategic IT consulting to align technology with business objectives and goals.',
      icon: Target,
      category: 'consulting',
      pricing: { starting: 199, period: 'hour' },
      features: [
        'IT strategy development',
        'Technology assessment',
        'Vendor evaluation',
        'Project planning',
        'Change management',
        'Training programs'
      ],
      benefits: [
        'Align IT with business goals',
        'Make informed decisions',
        'Reduce technology risks',
        'Improve ROI'
      ],
      popular: false,
      rating: 4.8,
      users: 800,
      link: 'https://ziontechgroup.com/it-consulting'
    },
    {
      id: 'mobile-device-management',
      name: 'Mobile Device Management',
      description: 'Secure and manage mobile devices across your organization with enterprise-grade solutions.',
      icon: Smartphone,
      category: 'mobile',
      pricing: { starting: 29, period: 'month', perDevice: true },
      features: [
        'Device enrollment',
        'Policy enforcement',
        'App management',
        'Security controls',
        'Remote wipe capability',
        'Compliance reporting'
      ],
      benefits: [
        'Secure mobile devices',
        'Enforce policies',
        'Reduce security risks',
        'Improve productivity'
      ],
      popular: true,
      rating: 4.7,
      users: 3400,
      link: 'https://ziontechgroup.com/mobile-device-management'
    },
    {
      id: 'voip-phone-systems',
      name: 'VoIP Phone Systems',
      description: 'Modern voice communication solutions with advanced features and cost savings.',
      icon: Phone,
      category: 'communication',
      pricing: { starting: 39, period: 'month', perUser: true },
      features: [
        'HD voice quality',
        'Video conferencing',
        'Mobile integration',
        'Call routing',
        'Voicemail to email',
        'Analytics and reporting'
      ],
      benefits: [
        'Reduce phone costs by 50%',
        'Improve communication',
        'Enhance collaboration',
        'Scale easily'
      ],
      popular: false,
      rating: 4.6,
      users: 1900,
      link: 'https://ziontechgroup.com/voip-phone-systems'
    },
    {
      id: 'server-maintenance',
      name: 'Server Maintenance',
      description: 'Proactive server maintenance to ensure optimal performance and prevent failures.',
      icon: Server,
      category: 'infrastructure',
      pricing: { starting: 299, period: 'month' },
      features: [
        'Hardware monitoring',
        'Software updates',
        'Performance optimization',
        'Security patches',
        'Backup verification',
        'Capacity planning'
      ],
      benefits: [
        'Prevent server failures',
        'Improve performance',
        'Extend hardware life',
        'Reduce downtime'
      ],
      popular: true,
      rating: 4.8,
      users: 2800,
      link: 'https://ziontechgroup.com/server-maintenance'
    },
    {
      id: 'it-audit-compliance',
      name: 'IT Audit & Compliance',
      description: 'Comprehensive IT audits and compliance assessments to meet regulatory requirements.',
      icon: FileText,
      category: 'compliance',
      pricing: { starting: 2499, period: 'audit' },
      features: [
        'Security assessment',
        'Compliance evaluation',
        'Risk analysis',
        'Policy review',
        'Remediation planning',
        'Documentation'
      ],
      benefits: [
        'Meet compliance requirements',
        'Identify security gaps',
        'Reduce audit risks',
        'Improve security posture'
      ],
      popular: false,
      rating: 4.9,
      users: 600,
      link: 'https://ziontechgroup.com/it-audit-compliance'
    }
  ], []);

  const categories = [
    { id: 'all', name: 'All Services', icon: Globe },
    { id: 'infrastructure', name: 'Infrastructure', icon: Server },
    { id: 'cloud', name: 'Cloud Services', icon: Cloud },
    { id: 'security', name: 'Security', icon: Shield },
    { id: 'data', name: 'Data Management', icon: Database },
    { id: 'support', name: 'Support', icon: Headphones },
    { id: 'software', name: 'Software', icon: Code },
    { id: 'consulting', name: 'Consulting', icon: Target },
    { id: 'mobile', name: 'Mobile', icon: Smartphone },
    { id: 'communication', name: 'Communication', icon: Phone },
    { id: 'compliance', name: 'Compliance', icon: FileText }
  ];

  const filteredServices = useMemo(() => {
    let filtered = itServices;

    if (searchTerm) {
      filtered = filtered.filter(service =>
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => service.category === selectedCategory);
    }

    switch (sortBy) {
      case 'popularity':
        filtered.sort((a, b) => b.users - a.users);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'price-low':
        filtered.sort((a, b) => a.pricing.starting - b.pricing.starting);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.pricing.starting - a.pricing.starting);
        break;
      default:
        break;
    }

    return filtered;
  }, [searchTerm, selectedCategory, sortBy, itServices]);
'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="IT services from Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">IT Services</h1>
          <p className="text-gray-300">Coming soon...</p>
        </div>
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Cloud, Shield, Server, Database, Code, Network, Settings, Users, Clock, DollarSign, Smartphone, Globe, MessageCircle, Cpu, Zap, BarChart, Wrench, Eye, Sparkles, Layers, Award, Lightbulb, CircuitBoard, Atom, Satellite, Target, Phone, Mail, MapPin, Calendar, Timer, TrendingUp, Star } from 'lucide-react';

const ITServicesPage: React.FC = () => {
  const services = [
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions with AWS, Azure, and Google Cloud expertise',
      features: ['Cloud Migration', 'Auto-scaling', 'Cost Optimization', 'Security'],
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: Shield,
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security solutions to protect your digital assets',
      features: ['Threat Detection', 'Vulnerability Assessment', 'Compliance', 'Incident Response'],
      color: 'from-red-500 to-orange-500'
    },
    {
      icon: Code,
      title: 'Web Development',
      description: 'Modern, responsive web applications built with cutting-edge technologies',
      features: ['React/Next.js', 'Node.js', 'API Development', 'Performance Optimization'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android',
      features: ['React Native', 'Flutter', 'Native iOS/Android', 'App Store Optimization'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Database,
      title: 'Database Management',
      description: 'Expert database design, optimization, and management services',
      features: ['SQL/NoSQL', 'Performance Tuning', 'Backup & Recovery', 'Data Migration'],
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Settings,
      title: 'DevOps & CI/CD',
      description: 'Streamlined development workflows with automated deployment pipelines',
      features: ['Docker/Kubernetes', 'Jenkins/GitLab CI', 'Infrastructure as Code', 'Monitoring'],
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Analysis',
      description: 'We analyze your current infrastructure and identify opportunities for improvement',
      icon: Eye
    },
    {
      step: '02',
      title: 'Strategy & Planning',
      description: 'Develop a comprehensive roadmap tailored to your business objectives',
      icon: Target
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Execute the solution with minimal disruption to your operations',
      icon: Settings
    },
    {
      step: '04',
      title: 'Support & Optimization',
      description: 'Ongoing maintenance and continuous optimization for peak performance',
      icon: TrendingUp
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed', icon: CheckCircle },
    { number: '99.9%', label: 'Uptime Guarantee', icon: Server },
    { number: '24/7', label: 'Support Available', icon: Clock },
    { number: '50+', label: 'Expert Engineers', icon: Users }
  ];
=======
import React from 'react'
import { Helmet } from 'react-helmet-async'
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0f1c

  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
<<<<<<< HEAD
        <meta name="description" content="Comprehensive IT services including cloud infrastructure, cybersecurity, web development, mobile apps, and DevOps solutions." />
        <meta name="keywords" content="IT services, cloud computing, cybersecurity, web development, mobile development, DevOps" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Comprehensive <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">IT Services</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Transform your business with our expert IT solutions. From cloud infrastructure to cybersecurity, 
                we provide end-to-end technology services that drive growth and innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                >
                  Get Free Consultation
                </Link>
                <Link 
                  to="/about"
                  className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300"
                >
                  Learn More About Us
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gradient-to-r from-slate-800/30 to-slate-900/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">IT Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive technology solutions designed to modernize your infrastructure and accelerate growth
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300 group hover:transform hover:scale-105"
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-400 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link 
                    to="/contact"
                    className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium group-hover:translate-x-1 inline-block"
                  >
                    Learn More →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-gradient-to-r from-slate-800/30 to-slate-900/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Process</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A proven methodology that ensures successful project delivery and maximum ROI
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="w-10 h-10 text-cyan-400" />
                  </div>
                  <div className="text-2xl font-bold text-cyan-400 mb-2">{step.step}</div>
                  <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-gray-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-cyan-900/50 to-purple-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5"></div>
              <div className="relative z-10">
                <h2 className="text-4xl font-bold text-white mb-6">
                  Ready to Transform Your IT Infrastructure?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Let's discuss how our IT services can modernize your technology stack and drive business growth.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact"
                    className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                  >
                    Start Your Project
                  </Link>
                  <Link 
                    to="/about"
                    className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105"
                  >
                    Learn More About Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0e37
      </div>
    </>
  );
};

<<<<<<< HEAD
export default ItServicesPage;
        <meta name="description" content="Comprehensive IT services including cloud migration, cybersecurity, infrastructure management, and digital transformation." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            IT <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive IT solutions to power your digital transformation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {itServices.map((service, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
              <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-300 mb-6">{service.description}</p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl font-bold text-white">{service.pricing}</span>
                {service.popular && (
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Popular
                  </span>
                )}
              </div>
              <div className="flex items-center justify-between text-sm text-gray-400 mb-6">
                <span>{service.duration}</span>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 text-blue-400 mr-1" />
                  Duration
                </div>
              </div>
              <Link
                to={service.link}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group-hover:scale-105"
          ))}
        </div>
      </div>
    </div>
  )
}
export default ItServicesPage;
=======
export default ITServicesPage;
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0e37
=======
        <meta name="description" content="IT Services services by Zion Tech Group. Advanced AI and IT solutions for your business." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              IT Services
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Coming soon - Advanced IT Services solutions by Zion Tech Group
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default ItServicesPage
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0f1c
