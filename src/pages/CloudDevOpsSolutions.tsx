import React from 'react';
import { motion } from 'framer-motion';
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { Link } from 'react-router-dom';
import { 
  Cloud, 
  Cpu, 
  Shield, 
  Zap, 
  Database, 
  Server,
  ArrowRight,
  CheckCircle,
  Star,
  Target,
  Users,
  TrendingUp
} from 'lucide-react';
=======
import { Cloud, Cpu, Shield, Zap, Database, Server, GitBranch, Monitor, Rocket, Target, Users, Globe } from 'lucide-react';
>>>>>>> origin/cursor/website-audit-and-enhancement-876b
=======
import { Link } from 'react-router-dom';
import { 
  Cloud, 
  Zap, 
  Shield, 
  Users, 
  Cpu, 
  Database,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Target,
  Rocket,
  Globe,
  Server,
  GitBranch,
  Monitor,
  Settings
} from 'lucide-react';
>>>>>>> origin/cursor/website-audit-and-enhancement-796c

const CloudDevOpsSolutions = () => {
  const cloudServices = [
    {
<<<<<<< HEAD
<<<<<<< HEAD
      icon: Cloud,
      title: 'Cloud Migration & Strategy',
      description: 'Seamless migration to cloud platforms with strategic planning and execution',
      features: [
        'Cloud readiness assessment',
        'Migration planning & strategy',
        'Data migration services',
        'Application modernization',
        'Cost optimization',
        'Performance monitoring'
      ],
      pricing: 'Starting from $5,000',
      link: '/cloud-migration'
    },
    {
      icon: Cpu,
      title: 'DevOps Automation',
      description: 'Streamline development and operations with automated CI/CD pipelines',
      features: [
        'CI/CD pipeline setup',
        'Infrastructure as Code',
        'Automated testing',
        'Deployment automation',
        'Monitoring & alerting',
        'Performance optimization'
      ],
      pricing: 'Starting from $3,500/month',
      link: '/devops-automation'
    },
    {
      icon: Database,
      title: 'Container Orchestration',
      description: 'Manage and scale containerized applications with Kubernetes and Docker',
      features: [
        'Kubernetes cluster setup',
        'Container orchestration',
        'Service mesh implementation',
        'Auto-scaling configuration',
        'Load balancing',
        'Health monitoring'
      ],
      pricing: 'Starting from $4,000/month',
      link: '/container-orchestration'
    },
    {
      icon: Server,
      title: 'Serverless Architecture',
      description: 'Build scalable applications with serverless computing platforms',
      features: [
        'Serverless function development',
        'API gateway setup',
        'Event-driven architecture',
        'Auto-scaling configuration',
        'Cost optimization',
        'Performance monitoring'
      ],
      pricing: 'Starting from $2,500/month',
      link: '/serverless-architecture'
    },
    {
      icon: Shield,
      title: 'Cloud Security & Compliance',
      description: 'Ensure your cloud infrastructure meets security and compliance requirements',
      features: [
        'Security assessment',
        'Compliance auditing',
        'Identity & access management',
        'Data encryption',
        'Threat detection',
        'Security monitoring'
      ],
      pricing: 'Starting from $4,500/month',
      link: '/cloud-security'
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Optimize cloud infrastructure for maximum performance and cost efficiency',
      features: [
        'Performance analysis',
        'Resource optimization',
        'Cost optimization',
        'Capacity planning',
        'Monitoring setup',
        'Performance tuning'
      ],
      pricing: 'Starting from $3,000/month',
      link: '/performance-optimization'
    }
  ];

  const cloudCapabilities = [
    {
      icon: Target,
      title: 'Multi-Cloud Strategy',
      description: 'Optimize costs and performance across multiple cloud providers'
    },
    {
      icon: Users,
      title: '24/7 Support',
      description: 'Round-the-clock monitoring and support for your cloud infrastructure'
    },
    {
      icon: TrendingUp,
      title: 'Scalable Solutions',
      description: 'Infrastructure that grows with your business needs'
    },
    {
      icon: Star,
      title: 'Best Practices',
      description: 'Industry-leading cloud architecture and security practices'
    }
  ];

  const platforms = [
    {
      name: 'AWS',
      services: ['EC2', 'S3', 'Lambda', 'RDS', 'ECS', 'CloudFormation']
    },
    {
      name: 'Azure',
      services: ['Virtual Machines', 'Blob Storage', 'Functions', 'SQL Database', 'AKS', 'ARM Templates']
    },
    {
      name: 'Google Cloud',
      services: ['Compute Engine', 'Cloud Storage', 'Cloud Functions', 'Cloud SQL', 'GKE', 'Terraform']
    },
    {
      name: 'Kubernetes',
      services: ['Cluster Management', 'Service Mesh', 'Monitoring', 'Security', 'Networking', 'Storage']
=======
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud infrastructure solutions for modern businesses.',
      services: [
        'AWS, Azure, and Google Cloud expertise',
        'Multi-cloud architecture design',
        'Cloud migration and optimization',
        'Cost optimization and management'
      ],
      icon: Cloud,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'DevOps Automation',
      description: 'Streamline development and operations with intelligent automation.',
      services: [
        'CI/CD pipeline automation',
        'Infrastructure as Code (IaC)',
        'Container orchestration',
        'Monitoring and alerting'
      ],
      icon: GitBranch,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Security & Compliance',
      description: 'Enterprise-grade security and compliance solutions.',
      services: [
        'Identity and access management',
        'Security monitoring and threat detection',
        'Compliance automation (SOC2, HIPAA)',
        'Vulnerability assessment and remediation'
      ],
      icon: Shield,
      color: 'from-red-500 to-pink-500'
    }
  ];

  const benefits = [
    {
      title: 'Faster Deployment',
      description: 'Reduce time-to-market with automated CI/CD pipelines and cloud-native solutions.',
      icon: Zap,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Cost Optimization',
      description: 'Optimize cloud spending and infrastructure costs through intelligent automation.',
      icon: Target,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Scalability',
      description: 'Scale your infrastructure automatically based on demand and business growth.',
      icon: Rocket,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Security & Reliability',
      description: 'Enterprise-grade security and 99.9% uptime guarantees for your applications.',
      icon: Shield,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const technologies = [
    {
      category: 'Cloud Platforms',
      tools: ['AWS', 'Azure', 'Google Cloud', 'DigitalOcean', 'Linode'],
      icon: Cloud
    },
    {
      category: 'Container & Orchestration',
      tools: ['Docker', 'Kubernetes', 'Helm', 'OpenShift', 'Rancher'],
      icon: Cpu
    },
    {
      category: 'Infrastructure as Code',
      tools: ['Terraform', 'CloudFormation', 'Ansible', 'Puppet', 'Chef'],
      icon: GitBranch
    },
    {
      category: 'Monitoring & Observability',
      tools: ['Prometheus', 'Grafana', 'ELK Stack', 'Datadog', 'New Relic'],
      icon: Monitor
    }
  ];

  const useCases = [
    {
      industry: 'E-commerce',
      challenges: ['High traffic spikes', 'Inventory management', 'Payment processing'],
      solutions: ['Auto-scaling infrastructure', 'Microservices architecture', 'CDN optimization']
    },
    {
      industry: 'Healthcare',
      challenges: ['Data compliance', 'High availability', 'Security requirements'],
      solutions: ['HIPAA-compliant infrastructure', 'Multi-region deployment', 'Advanced security monitoring']
    },
    {
      industry: 'Financial Services',
      challenges: ['Regulatory compliance', 'Real-time processing', 'Data security'],
      solutions: ['SOC2 compliance automation', 'High-performance computing', 'End-to-end encryption']
>>>>>>> origin/cursor/website-audit-and-enhancement-876b
    }
=======
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Design, deploy, and manage scalable cloud infrastructure across multiple platforms.',
      features: ['Multi-cloud Strategy', 'Auto-scaling', 'Load Balancing', 'High Availability'],
      link: '/cloud-infrastructure'
    },
    {
      icon: Server,
      title: 'Server Management',
      description: 'Comprehensive server administration, monitoring, and optimization services.',
      features: ['Server Provisioning', 'Performance Tuning', 'Security Hardening', 'Backup & Recovery'],
      link: '/server-management'
    },
    {
      icon: Database,
      title: 'Database Solutions',
      description: 'Database design, optimization, and management for optimal performance and reliability.',
      features: ['Database Design', 'Performance Optimization', 'Backup Strategies', 'Disaster Recovery'],
      link: '/database-solutions'
    },
    {
      icon: GitBranch,
      title: 'DevOps Automation',
      description: 'Streamline development workflows with CI/CD pipelines and automation tools.',
      features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Automated Testing', 'Deployment Automation'],
      link: '/devops-automation'
    },
    {
      icon: Monitor,
      title: 'Monitoring & Observability',
      description: 'Comprehensive monitoring solutions for infrastructure, applications, and business metrics.',
      features: ['Real-time Monitoring', 'Alerting Systems', 'Performance Analytics', 'Log Management'],
      link: '/monitoring-observability'
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security measures and compliance frameworks for cloud environments.',
      features: ['Security Audits', 'Compliance Frameworks', 'Threat Detection', 'Access Control'],
      link: '/security-compliance'
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Scalability',
      description: 'Easily scale your infrastructure up or down based on demand and business growth.'
    },
    {
      icon: Target,
      title: 'Reliability',
      description: 'High availability and disaster recovery solutions ensure business continuity.'
    },
    {
      icon: Shield,
      title: 'Security',
      description: 'Enterprise-grade security measures protect your data and applications.'
    },
    {
      icon: Users,
      title: 'Cost Optimization',
      description: 'Optimize cloud costs through efficient resource management and automation.'
    }
  ];

  const technologies = [
    'AWS', 'Azure', 'Google Cloud', 'Kubernetes', 'Docker', 'Terraform',
    'Ansible', 'Jenkins', 'GitLab CI', 'Prometheus', 'Grafana', 'ELK Stack'
>>>>>>> origin/cursor/website-audit-and-enhancement-796c
  ];
=======
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
import { Link } from 'react-router-dom';
import { Cloud, Zap, Shield, Cpu, Database, Server, GitBranch, ArrowRight, CheckCircle, Star, Globe, Lock, Rocket } from 'lucide-react';
import { SEO } from '@/components/SEO';

const cloudServices = [
  {
    title: "Cloud Infrastructure Design",
    description: "Design and implement scalable, secure cloud architectures using AWS, Azure, and Google Cloud.",
    icon: Cloud,
    features: ["Multi-cloud Strategy", "High Availability", "Auto-scaling", "Cost Optimization"],
    price: "From $3,500/month",
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "DevOps Automation",
    description: "Streamline development workflows with CI/CD pipelines and infrastructure as code.",
    icon: GitBranch,
    features: ["CI/CD Pipelines", "Infrastructure as Code", "Automated Testing", "Deployment Automation"],
    price: "From $2,800/month",
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "Container Orchestration",
    description: "Deploy and manage containerized applications with Kubernetes and Docker.",
    icon: Server,
    features: ["Kubernetes Clusters", "Docker Containers", "Service Mesh", "Load Balancing"],
    price: "From $4,200/month",
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Database Management",
    description: "Optimize database performance and ensure high availability across cloud environments.",
    icon: Database,
    features: ["Performance Tuning", "Backup & Recovery", "Replication", "Monitoring"],
    price: "From $2,500/month",
    color: "from-orange-500 to-red-500"
  }
];

const benefits = [
  {
    title: "Faster Deployment",
    description: "Automate deployments and reduce time-to-market significantly",
    icon: Zap,
    color: "text-zion-cyan"
  },
  {
    title: "Improved Reliability",
    description: "Build resilient systems with automated failover and monitoring",
    icon: Shield,
    color: "text-zion-purple"
  },
  {
    title: "Cost Optimization",
    description: "Optimize cloud resources and reduce infrastructure costs",
    icon: Cpu,
    color: "text-green-400"
  },
  {
    title: "Scalability",
    description: "Scale applications automatically based on demand",
    icon: Globe,
    color: "text-blue-400"
  }
];

const testimonials = [
  {
    content: "Zion Tech Group's DevOps implementation reduced our deployment time from days to minutes and improved system reliability by 99.9%.",
    name: "David Thompson",
    role: "DevOps Engineer, CloudTech Solutions",
    rating: 5
  },
  {
    content: "Their cloud infrastructure design saved us 40% on AWS costs while improving performance and scalability.",
    name: "Lisa Chen",
    role: "CTO, StartupXYZ",
    rating: 5
  },
  {
    content: "The Kubernetes implementation they built for us handles 10x more traffic with zero downtime.",
    name: "Robert Martinez",
    role: "Platform Lead, ScaleUp Inc",
    rating: 5
  }
];
<<<<<<< HEAD

export default function CloudDevOpsSolutions() {
  return (
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-89a0

export default function CloudDevOpsSolutions() {
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-zion-blue-dark text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
<<<<<<< HEAD
<<<<<<< HEAD
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-cyan-500/20 to-zion-cyan/20"></div>
=======
        <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/20 via-zion-purple/20 to-zion-blue-light/20"></div>
>>>>>>> origin/cursor/website-audit-and-enhancement-876b
=======
        <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/10 via-zion-purple/10 to-zion-blue-light/10"></div>
>>>>>>> origin/cursor/website-audit-and-enhancement-796c
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
<<<<<<< HEAD
<<<<<<< HEAD
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-zion-cyan bg-clip-text text-transparent">
              Cloud & DevOps Solutions
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
              Build, deploy, and scale applications with enterprise-grade cloud infrastructure 
              and automated DevOps practices that accelerate your development cycle.
=======
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Cloud &{' '}
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                DevOps Solutions
              </span>
            </h1>
            <p className="text-xl text-zion-slate-light leading-relaxed mb-8">
              Build, deploy, and scale your applications with modern cloud infrastructure and DevOps practices 
              that drive innovation and operational excellence.
>>>>>>> origin/cursor/website-audit-and-enhancement-796c
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
<<<<<<< HEAD
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
              >
                Get Cloud Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center px-6 py-3 border border-blue-500/30 text-blue-400 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300"
              >
                View Cloud Pricing
              </Link>
=======
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Cloud &{' '}
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                DevOps
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light leading-relaxed mb-8">
              Accelerate your digital transformation with enterprise-grade cloud infrastructure 
              and DevOps automation solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-2xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300">
                Get Started
              </button>
              <button className="px-8 py-4 border border-zion-cyan/30 text-zion-cyan font-semibold rounded-2xl hover:bg-zion-cyan hover:text-white transition-all duration-300">
                Schedule a Demo
              </button>
>>>>>>> origin/cursor/website-audit-and-enhancement-876b
=======
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl font-semibold hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
              >
                Get Started
              </Link>
              <Link
                to="/request-quote"
                className="px-8 py-4 border border-zion-cyan/30 text-zion-cyan rounded-xl font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                Request Quote
              </Link>
>>>>>>> origin/cursor/website-audit-and-enhancement-796c
=======
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
    <div className="min-h-screen bg-background relative overflow-hidden">
      <SEO 
        title="Cloud & DevOps Solutions - Zion Tech Group" 
        description="Transform your infrastructure with scalable cloud solutions, automated DevOps pipelines, and container orchestration."
        keywords="cloud computing, DevOps, AWS, Azure, Kubernetes, Docker, CI/CD, infrastructure as code"
        canonical="https://ziontechgroup.com/cloud-devops"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Cloud & DevOps
              <span className="block bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
              Build scalable, resilient cloud infrastructure with automated DevOps pipelines. 
              From AWS to Kubernetes, we deliver enterprise-grade cloud solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg text-lg font-semibold hover:shadow-xl hover:shadow-zion-cyan/25 transition-all duration-300 flex items-center gap-2 justify-center"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/request-quote"
                className="px-8 py-4 border border-zion-cyan text-zion-cyan rounded-lg text-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300 flex items-center gap-2 justify-center"
              >
                Request Quote
                <CheckCircle className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Our Cloud & DevOps Services
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Comprehensive cloud infrastructure and DevOps automation solutions designed for modern businesses.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cloudServices.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-blue-light/10 backdrop-blur-md border border-zion-purple/20 rounded-2xl p-8 hover:border-zion-cyan/50 hover:bg-zion-blue-light/20 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl mb-6 flex items-center justify-center text-white`}>
                  <IconComponent className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-zion-slate-light mb-6 leading-relaxed">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-zion-slate-light">
                        <CheckCircle className="w-4 h-4 text-zion-cyan" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-zion-cyan font-semibold">{service.price}</span>
                  <Link
                    to="/contact"
                    className="px-6 py-2 bg-zion-cyan text-white rounded-lg hover:bg-zion-cyan/80 transition-colors duration-300"
                  >
                    Learn More
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Why Choose Our Cloud & DevOps Solutions?
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            We combine cutting-edge cloud technology with proven DevOps practices to deliver solutions that drive real business value.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-blue-light/10 backdrop-blur-md border border-zion-purple/20 rounded-2xl p-8 hover:border-zion-cyan/50 hover:bg-zion-blue-light/20 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 bg-zion-purple/20 rounded-lg ${benefit.color}`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                    <p className="text-zion-slate-light leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            What Our Clients Say
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Don't just take our word for it. Here's what industry leaders have to say about our cloud and DevOps solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-zion-blue-light/10 backdrop-blur-md border border-zion-purple/20 rounded-2xl p-8 hover:border-zion-cyan/50 hover:bg-zion-blue-light/20 transition-all duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-zion-cyan fill-current" />
                ))}
              </div>
              <p className="text-zion-slate-light mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>
              <div>
                <div className="font-semibold text-white">{testimonial.name}</div>
                <div className="text-zion-cyan text-sm">{testimonial.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-zion-cyan/20 via-zion-purple/20 to-zion-cyan/20 border border-zion-cyan/30 rounded-2xl p-12 backdrop-blur-md">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
              Ready to Transform Your Infrastructure?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Join hundreds of companies that have already revolutionized their operations with our cutting-edge cloud and DevOps solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg text-lg font-semibold hover:shadow-xl hover:shadow-zion-cyan/25 transition-all duration-300 flex items-center gap-2 justify-center"
              >
                Start Your Cloud Journey
                <Rocket className="w-5 h-5" />
              </Link>
              <Link
                to="/request-quote"
                className="px-8 py-4 border border-zion-cyan text-zion-cyan rounded-lg text-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300 flex items-center gap-2 justify-center"
              >
                <CheckCircle className="w-5 h-5" />
                Get Free Consultation
              </Link>
<<<<<<< HEAD
            </div>
          </div>
        </motion.div>
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-89a0
            </div>
          </motion.div>
        </div>
      </section>

<<<<<<< HEAD
<<<<<<< HEAD
      {/* Cloud Services Grid */}
=======
      {/* Benefits Section */}
>>>>>>> origin/cursor/website-audit-and-enhancement-876b
=======
      {/* Cloud Services Grid */}
>>>>>>> origin/cursor/website-audit-and-enhancement-796c
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
<<<<<<< HEAD
<<<<<<< HEAD
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Our Cloud Services
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Comprehensive cloud solutions designed to modernize your infrastructure
=======
            <h2 className="text-4xl font-bold mb-6">
              Our{' '}
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Cloud Services
              </span>
            </h2>
            <p className="text-lg text-zion-slate-light max-w-2xl mx-auto">
              Comprehensive cloud and DevOps solutions designed to modernize your infrastructure and accelerate development.
>>>>>>> origin/cursor/website-audit-and-enhancement-796c
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cloudServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
<<<<<<< HEAD
                  className="group"
                >
                  <Link
                    to={service.link}
                    className="block p-8 bg-zion-blue-dark/50 border border-blue-500/20 rounded-2xl hover:border-blue-500/50 hover:bg-zion-blue-light/10 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-blue-500/20"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-blue-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-zion-slate-light mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {service.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-zion-slate-light">
                          <CheckCircle className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
=======
                  className="group p-6 rounded-2xl border border-zion-cyan/20 hover:border-zion-cyan/40 hover:bg-zion-blue-light/10 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-zion-slate-light mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-zion-cyan mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-zion-slate-light flex items-center">
                          <CheckCircle className="w-3 h-3 text-zion-cyan mr-2 flex-shrink-0" />
>>>>>>> origin/cursor/website-audit-and-enhancement-796c
                          {feature}
                        </li>
                      ))}
                    </ul>
<<<<<<< HEAD
                    <div className="text-blue-400 font-semibold mb-4">
                      {service.pricing}
                    </div>
                    <div className="flex items-center text-blue-400 font-medium group-hover:translate-x-2 transition-transform duration-300">
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </div>
                  </Link>
=======
            <h2 className="text-4xl font-bold mb-6">
              Why Choose Our{' '}
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Cloud & DevOps
              </span>
            </h2>
            <p className="text-lg text-zion-slate-light max-w-2xl mx-auto">
              Experience the benefits of modern cloud infrastructure and DevOps practices.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-6 rounded-2xl bg-zion-blue-dark/50 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-zion-slate-light">{benefit.description}</p>
>>>>>>> origin/cursor/website-audit-and-enhancement-876b
=======
                  </div>
                  
                  <Link
                    to={service.link}
                    className="inline-flex items-center text-zion-cyan hover:text-zion-purple transition-colors duration-300 group/link"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform duration-300" />
                  </Link>
>>>>>>> origin/cursor/website-audit-and-enhancement-796c
                </motion.div>
              );
            })}
          </div>
<<<<<<< HEAD
        </div>
      </section>

<<<<<<< HEAD
<<<<<<< HEAD
      {/* Cloud Capabilities */}
=======
      {/* Cloud Services */}
>>>>>>> origin/cursor/website-audit-and-enhancement-876b
=======
      {/* Benefits Section */}
>>>>>>> origin/cursor/website-audit-and-enhancement-796c
      <section className="py-20 bg-zion-blue-light/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
<<<<<<< HEAD
<<<<<<< HEAD
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Cloud Capabilities
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              We provide end-to-end cloud solutions from strategy to implementation
=======
            <h2 className="text-4xl font-bold mb-6">
              Why Choose{' '}
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Cloud & DevOps?
              </span>
            </h2>
            <p className="text-lg text-zion-slate-light max-w-2xl mx-auto">
              Discover the transformative benefits that modern cloud infrastructure and DevOps practices can bring to your business.
>>>>>>> origin/cursor/website-audit-and-enhancement-796c
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
<<<<<<< HEAD
            {cloudCapabilities.map((capability, index) => {
              const IconComponent = capability.icon;
=======
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
>>>>>>> origin/cursor/website-audit-and-enhancement-796c
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center p-6 rounded-2xl hover:bg-zion-blue-light/10 transition-all duration-300"
                >
<<<<<<< HEAD
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white">{capability.title}</h3>
                  <p className="text-zion-slate-light leading-relaxed">{capability.description}</p>
=======
            <h2 className="text-4xl font-bold mb-6">
              Our{' '}
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <p className="text-lg text-zion-slate-light max-w-2xl mx-auto">
              Comprehensive cloud and DevOps solutions designed for modern enterprises.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {cloudServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-8 rounded-2xl bg-zion-blue-dark/50 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300"
                >
                  <div className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6`}>
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-zion-slate-light mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.services.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center gap-3 text-zion-slate-light">
                        <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
>>>>>>> origin/cursor/website-audit-and-enhancement-876b
=======
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-zion-slate-light">{benefit.description}</p>
>>>>>>> origin/cursor/website-audit-and-enhancement-796c
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

<<<<<<< HEAD
<<<<<<< HEAD
      {/* Cloud Platforms */}
=======
      {/* Technologies */}
>>>>>>> origin/cursor/website-audit-and-enhancement-876b
=======
      {/* Technologies Section */}
>>>>>>> origin/cursor/website-audit-and-enhancement-796c
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
<<<<<<< HEAD
<<<<<<< HEAD
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Cloud Platforms We Support
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Expertise across all major cloud providers and container platforms
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {platforms.map((platform, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="p-6 bg-zion-blue-dark/50 border border-blue-500/20 rounded-2xl hover:border-blue-500/50 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-4 text-blue-400">{platform.name}</h3>
                <ul className="space-y-2">
                  {platform.services.map((service, serviceIndex) => (
                    <li key={serviceIndex} className="flex items-center text-sm text-zion-slate-light">
                      <CheckCircle className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                      {service}
                    </li>
                  ))}
                </ul>
=======
            <h2 className="text-4xl font-bold mb-6">
              Technologies &{' '}
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Tools
              </span>
            </h2>
            <p className="text-lg text-zion-slate-light max-w-2xl mx-auto">
              We work with the latest and most reliable technologies in the industry.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => {
              const IconComponent = tech.icon;
              return (
                <motion.div
                  key={tech.category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6 rounded-2xl bg-zion-blue-dark/50 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{tech.category}</h3>
                  <div className="space-y-2">
                    {tech.tools.map((tool, toolIndex) => (
                      <div key={toolIndex} className="text-zion-slate-light text-sm bg-zion-blue-light/20 px-3 py-2 rounded-lg">
                        {tool}
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-zion-blue-light/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">
              Industry{' '}
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Solutions
              </span>
            </h2>
            <p className="text-lg text-zion-slate-light max-w-2xl mx-auto">
              Tailored solutions for specific industry challenges and requirements.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.industry}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-zion-blue-dark/50 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <h3 className="text-2xl font-semibold mb-6 text-zion-cyan">{useCase.industry}</h3>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3 text-white">Challenges:</h4>
                  <ul className="space-y-2">
                    {useCase.challenges.map((challenge, challengeIndex) => (
                      <li key={challengeIndex} className="flex items-center gap-2 text-zion-slate-light">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-white">Our Solutions:</h4>
                  <ul className="space-y-2">
                    {useCase.solutions.map((solution, solutionIndex) => (
                      <li key={solutionIndex} className="flex items-center gap-2 text-zion-slate-light">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        {solution}
                      </li>
                    ))}
                  </ul>
                </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-876b
=======
            <h2 className="text-4xl font-bold mb-6">
              Technologies We{' '}
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Master
              </span>
            </h2>
            <p className="text-lg text-zion-slate-light max-w-2xl mx-auto">
              We work with the latest cloud platforms, DevOps tools, and infrastructure technologies to deliver cutting-edge solutions.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="p-4 rounded-xl border border-zion-cyan/20 hover:border-zion-cyan/40 hover:bg-zion-blue-light/10 transition-all duration-300 text-center"
              >
                <span className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-300">
                  {tech}
                </span>
>>>>>>> origin/cursor/website-audit-and-enhancement-796c
              </motion.div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
<<<<<<< HEAD
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-500/10 to-cyan-500/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
=======
      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
>>>>>>> origin/cursor/website-audit-and-enhancement-876b
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
<<<<<<< HEAD
          >
            <h2 className="text-4xl font-bold mb-6 text-white">
              Ready to Scale Your Infrastructure?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Let's discuss how cloud and DevOps can accelerate your development and reduce costs
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
              >
                Start Cloud Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 border border-blue-500/30 text-blue-400 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300"
              >
                Get Cloud Quote
              </Link>
=======
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">
              Our{' '}
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Process
              </span>
            </h2>
            <p className="text-lg text-zion-slate-light max-w-2xl mx-auto">
              A proven methodology for successful cloud and DevOps implementation.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Assessment',
                description: 'Evaluate current infrastructure and identify optimization opportunities.',
                icon: Monitor
              },
              {
                step: '02',
                title: 'Strategy',
                description: 'Develop comprehensive cloud and DevOps strategy aligned with business goals.',
                icon: Target
              },
              {
                step: '03',
                title: 'Implementation',
                description: 'Execute the strategy with best practices and proven methodologies.',
                icon: Rocket
              },
              {
                step: '04',
                title: 'Optimization',
                description: 'Continuously monitor, optimize, and improve your infrastructure.',
                icon: Zap
              }
            ].map((step, index) => {
              const IconComponent = step.icon;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-6 rounded-2xl bg-zion-blue-dark/50 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    {step.step}
                  </div>
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-zion-slate-light">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
=======
      {/* DevOps Process */}
>>>>>>> origin/cursor/website-audit-and-enhancement-796c
      <section className="py-20 bg-zion-blue-light/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
<<<<<<< HEAD
            className="text-center max-w-4xl mx-auto"
=======
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">
              Our{' '}
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                DevOps Process
              </span>
            </h2>
            <p className="text-lg text-zion-slate-light max-w-2xl mx-auto">
              A proven methodology for implementing DevOps practices that accelerate development and improve operational efficiency.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Assessment & Planning',
                description: 'Evaluate current infrastructure and plan the DevOps transformation roadmap.'
              },
              {
                step: '02',
                title: 'Infrastructure Setup',
                description: 'Design and implement cloud infrastructure with infrastructure as code.'
              },
              {
                step: '03',
                title: 'CI/CD Implementation',
                description: 'Build automated pipelines for continuous integration and deployment.'
              },
              {
                step: '04',
                title: 'Monitoring & Optimization',
                description: 'Implement monitoring solutions and continuously optimize performance.'
              }
            ].map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {phase.step}
                </div>
                <h3 className="text-xl font-semibold mb-3">{phase.title}</h3>
                <p className="text-zion-slate-light">{phase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
>>>>>>> origin/cursor/website-audit-and-enhancement-796c
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your Infrastructure?
            </h2>
<<<<<<< HEAD
            <p className="text-lg text-zion-slate-light mb-8">
              Let us help you build a scalable, secure, and efficient cloud infrastructure 
              that drives your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-2xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300">
                Start Your Journey
              </button>
              <button className="px-8 py-4 border border-zion-cyan/30 text-zion-cyan font-semibold rounded-2xl hover:bg-zion-cyan hover:text-white transition-all duration-300">
                Get a Free Assessment
              </button>
>>>>>>> origin/cursor/website-audit-and-enhancement-876b
=======
            <p className="text-lg text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Let's discuss how our cloud and DevOps solutions can modernize your infrastructure, 
              accelerate development, and improve operational efficiency.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl font-semibold hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
              >
                Start Your Transformation
              </Link>
              <Link
                to="/request-quote"
                className="px-8 py-4 border border-zion-cyan/30 text-zion-cyan rounded-xl font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                Get a Custom Quote
              </Link>
>>>>>>> origin/cursor/website-audit-and-enhancement-796c
            </div>
          </motion.div>
        </div>
=======
        </motion.div>
>>>>>>> origin/cursor/website-audit-and-enhancement-89a0
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
      </section>
    </div>
  );
}