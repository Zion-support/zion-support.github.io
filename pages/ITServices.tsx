import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function ITServices() {
  const itServices = [
    {
      name: "Cloud Migration Services",
      description: "Complete cloud infrastructure migration with zero downtime, enhanced security, and optimized performance for your business.",
      price: "$2,999/project",
      features: [
        "Zero-downtime migration strategy",
        "Security assessment and hardening",
        "Performance optimization",
        "24/7 migration support",
        "Data backup and recovery",
        "Cost optimization analysis",
        "Training and documentation",
        "Post-migration monitoring"
      ],
      benefits: [
        "Reduce infrastructure costs by 40%",
        "Improve system reliability by 99.9%",
        "Enhance security posture",
        "Enable remote work capabilities"
      ],
      marketPrice: "$5,000-10,000/project",
      savings: "Save up to $7,000/project"
    },
    {
      name: "Cybersecurity Solutions",
      description: "Comprehensive cybersecurity platform with advanced threat detection, prevention, and response capabilities to protect your business.",
      price: "$799/month",
      features: [
        "24/7 threat monitoring",
        "Vulnerability scanning and patching",
        "Incident response team",
        "Security awareness training",
        "Compliance management",
        "Penetration testing",
        "Security policy development",
        "Regular security audits"
      ],
      benefits: [
        "Protect against 99.9% of cyber threats",
        "Reduce security incidents by 85%",
        "Ensure compliance with regulations",
        "Minimize business disruption"
      ],
      marketPrice: "$1,500-2,500/month",
      savings: "Save up to $1,700/month"
    },
    {
      name: "Digital Transformation",
      description: "End-to-end digital transformation services to modernize your business processes, technology stack, and customer experience.",
      price: "$5,999/project",
      features: [
        "Process automation and optimization",
        "Legacy system modernization",
        "Technology integration",
        "Change management support",
        "Staff training programs",
        "Performance monitoring",
        "ROI tracking and analysis",
        "Ongoing support and maintenance"
      ],
      benefits: [
        "Increase operational efficiency by 60%",
        "Improve customer satisfaction by 45%",
        "Reduce manual processes by 80%",
        "Enable data-driven decision making"
      ],
      marketPrice: "$10,000-20,000/project",
      savings: "Save up to $14,000/project"
    },
    {
      name: "IT Infrastructure Management",
      description: "Complete IT infrastructure management including network setup, server maintenance, and system optimization for optimal performance.",
      price: "$1,299/month",
      features: [
        "Network design and implementation",
        "Server setup and maintenance",
        "Backup and disaster recovery",
        "Performance monitoring",
        "Security updates and patches",
        "Hardware lifecycle management",
        "Remote support and maintenance",
        "Documentation and reporting"
      ],
      benefits: [
        "Reduce IT downtime by 90%",
        "Improve system performance by 50%",
        "Lower IT operational costs",
        "Ensure business continuity"
      ],
      marketPrice: "$2,000-3,500/month",
      savings: "Save up to $2,200/month"
    },
    {
      name: "DevOps and Automation",
      description: "Comprehensive DevOps services including CI/CD pipeline setup, infrastructure automation, and deployment optimization.",
      price: "$1,599/month",
      features: [
        "CI/CD pipeline implementation",
        "Infrastructure as Code (IaC)",
        "Automated testing and deployment",
        "Container orchestration",
        "Monitoring and logging setup",
        "Performance optimization",
        "Security integration",
        "Team training and support"
      ],
      benefits: [
        "Reduce deployment time by 75%",
        "Improve code quality and reliability",
        "Enable faster feature delivery",
        "Reduce manual errors by 95%"
      ],
      marketPrice: "$2,500-4,000/month",
      savings: "Save up to $2,400/month"
    },
    {
      name: "Data Analytics and Business Intelligence",
      description: "Advanced data analytics platform with real-time insights, predictive analytics, and automated reporting for informed decision making.",
      price: "$1,999/month",
      features: [
        "Data warehouse design and implementation",
        "ETL/ELT pipeline development",
        "Real-time dashboards and reports",
        "Predictive analytics models",
        "Data visualization tools",
        "Machine learning integration",
        "Data governance and security",
        "User training and support"
      ],
      benefits: [
        "Improve decision making speed by 70%",
        "Identify new business opportunities",
        "Reduce reporting time by 85%",
        "Enable data-driven culture"
      ],
      marketPrice: "$3,000-5,000/month",
      savings: "Save up to $3,000/month"
    },
    {
      name: "API Development and Integration",
      description: "Comprehensive API development services including RESTful APIs, microservices architecture, and third-party integrations for seamless data flow.",
      price: "$1,199/month",
      features: [
        "RESTful API design and development",
        "GraphQL API implementation",
        "Microservices architecture",
        "API gateway setup",
        "Third-party integrations",
        "API documentation and testing",
        "Rate limiting and security",
        "Performance monitoring"
      ],
      benefits: [
        "Improve system integration by 80%",
        "Reduce development time by 60%",
        "Enable faster third-party connections",
        "Enhance system scalability"
      ],
      marketPrice: "$2,000-3,500/month",
      savings: "Save up to $2,300/month"
    },
    {
      name: "Mobile App Development",
      description: "Full-stack mobile application development for iOS and Android with modern frameworks, cloud integration, and enterprise features.",
      price: "$2,499/month",
      features: [
        "Cross-platform development",
        "Native iOS and Android apps",
        "Cloud backend integration",
        "Push notifications",
        "Offline functionality",
        "App store optimization",
        "User analytics and tracking",
        "Maintenance and updates"
      ],
      benefits: [
        "Reach customers on all devices",
        "Improve user engagement by 70%",
        "Enable mobile commerce",
        "Enhance brand presence"
      ],
      marketPrice: "$4,000-7,000/month",
      savings: "Save up to $4,500/month"
    },
    {
      name: "E-commerce Platform Development",
      description: "Complete e-commerce solution with modern design, payment processing, inventory management, and marketing automation.",
      price: "$1,899/month",
      features: [
        "Custom e-commerce platform",
        "Payment gateway integration",
        "Inventory management system",
        "Order processing automation",
        "Customer management",
        "Marketing tools integration",
        "Analytics and reporting",
        "Mobile-responsive design"
      ],
      benefits: [
        "Increase online sales by 150%",
        "Reduce operational costs by 40%",
        "Improve customer experience",
        "Enable 24/7 sales operations"
      ],
      marketPrice: "$3,000-5,000/month",
      savings: "Save up to $3,100/month"
    },
    {
      name: "Database Design and Optimization",
      description: "Advanced database services including design, optimization, migration, and performance tuning for maximum efficiency and reliability.",
      price: "$999/month",
      features: [
        "Database design and architecture",
        "Performance optimization",
        "Data migration services",
        "Backup and recovery solutions",
        "Security hardening",
        "Query optimization",
        "Indexing strategies",
        "Monitoring and maintenance"
      ],
      benefits: [
        "Improve database performance by 90%",
        "Reduce query response time by 80%",
        "Ensure data integrity and security",
        "Lower database operational costs"
      ],
      marketPrice: "$1,500-2,500/month",
      savings: "Save up to $1,500/month"
    },
    {
      name: "Network Security and Monitoring",
      description: "Comprehensive network security services with advanced threat detection, firewall management, and 24/7 network monitoring.",
      price: "$1,399/month",
      features: [
        "Firewall configuration and management",
        "Intrusion detection systems",
        "Network segmentation",
        "VPN setup and management",
        "Traffic analysis and monitoring",
        "Security policy implementation",
        "Incident response",
        "Regular security assessments"
      ],
      benefits: [
        "Protect against network attacks",
        "Improve network performance by 50%",
        "Ensure compliance requirements",
        "Reduce security vulnerabilities"
      ],
      marketPrice: "$2,200-3,500/month",
      savings: "Save up to $2,100/month"
    },
    {
      name: "Cloud Infrastructure Management",
      description: "Complete cloud infrastructure management including AWS, Azure, and Google Cloud with optimization, monitoring, and cost management.",
      price: "$1,699/month",
      features: [
        "Multi-cloud management",
        "Cost optimization and monitoring",
        "Auto-scaling configuration",
        "Security and compliance",
        "Backup and disaster recovery",
        "Performance monitoring",
        "Resource optimization",
        "24/7 cloud support"
      ],
      benefits: [
        "Reduce cloud costs by 35%",
        "Improve system reliability by 99.9%",
        "Enable automatic scaling",
        "Ensure cloud security compliance"
      ],
      marketPrice: "$2,500-4,000/month",
      savings: "Save up to $2,300/month"
    },
    {
      name: "Software Testing and Quality Assurance",
      description: "Comprehensive software testing services including automated testing, performance testing, and quality assurance for reliable applications.",
      price: "$1,099/month",
      features: [
        "Automated testing implementation",
        "Performance and load testing",
        "Security testing",
        "User acceptance testing",
        "Regression testing",
        "Test case development",
        "Bug tracking and reporting",
        "Quality metrics and reporting"
      ],
      benefits: [
        "Reduce bugs by 85%",
        "Improve application performance",
        "Ensure user satisfaction",
        "Lower maintenance costs"
      ],
      marketPrice: "$1,800-2,800/month",
      savings: "Save up to $1,700/month"
    },
    {
      name: "IT Consulting and Strategy",
      description: "Strategic IT consulting services to help businesses plan, implement, and optimize their technology infrastructure and digital transformation initiatives.",
      price: "$299/hour",
      features: [
        "IT strategy development",
        "Technology assessment",
        "Digital transformation planning",
        "Vendor evaluation and selection",
        "ROI analysis and planning",
        "Change management consulting",
        "Training and development",
        "Ongoing advisory services"
      ],
      benefits: [
        "Align IT with business goals",
        "Reduce technology risks",
        "Optimize IT investments",
        "Improve decision making"
      ],
      marketPrice: "$500-800/hour",
      savings: "Save up to $500/hour"
    },
    {
      name: "Backup and Disaster Recovery",
      description: "Comprehensive backup and disaster recovery solutions ensuring business continuity and data protection with automated backup systems.",
      price: "$799/month",
      features: [
        "Automated backup systems",
        "Disaster recovery planning",
        "Data replication and sync",
        "Recovery time optimization",
        "Testing and validation",
        "Compliance monitoring",
        "24/7 monitoring and alerts",
        "Recovery documentation"
      ],
      benefits: [
        "Minimize data loss risks",
        "Reduce recovery time by 90%",
        "Ensure business continuity",
        "Meet compliance requirements"
      ],
      marketPrice: "$1,200-2,000/month",
      savings: "Save up to $1,200/month"
    },
    {
      name: "IT Support and Helpdesk",
      description: "Comprehensive IT support services with 24/7 helpdesk, remote assistance, and proactive monitoring for optimal system performance.",
      price: "$599/month",
      features: [
        "24/7 technical support",
        "Remote assistance and troubleshooting",
        "Proactive system monitoring",
        "User training and support",
        "Hardware and software support",
        "Incident management",
        "Knowledge base maintenance",
        "Performance reporting"
      ],
      benefits: [
        "Reduce IT downtime by 95%",
        "Improve user productivity",
        "Lower IT support costs",
        "Ensure system reliability"
      ],
      marketPrice: "$1,000-1,500/month",
      savings: "Save up to $900/month"
    },
    {
      name: "AI-Powered IT Operations",
      description: "Intelligent IT operations management with AI-driven automation, predictive maintenance, and self-healing infrastructure capabilities.",
      price: "$1,999/month",
      features: [
        "AI-driven automation",
        "Predictive maintenance",
        "Self-healing infrastructure",
        "Intelligent incident response",
        "Automated root cause analysis",
        "Performance optimization",
        "Capacity planning",
        "Cost optimization"
      ],
      benefits: [
        "Reduce operational costs by 50%",
        "Improve system reliability by 99.9%",
        "Minimize manual interventions",
        "Accelerate problem resolution"
      ],
      marketPrice: "$3,500-5,000/month",
      savings: "Save up to $3,000/month"
    },
    {
      name: "Blockchain Integration Services",
      description: "Complete blockchain integration and development services including smart contracts, DeFi solutions, and enterprise blockchain implementation.",
      price: "$2,999/month",
      features: [
        "Smart contract development",
        "DeFi solution implementation",
        "Enterprise blockchain setup",
        "Cryptocurrency integration",
        "NFT marketplace development",
        "Security auditing",
        "Compliance consulting",
        "Training and support"
      ],
      benefits: [
        "Enable secure transactions",
        "Reduce transaction costs by 80%",
        "Improve transparency",
        "Future-proof technology stack"
      ],
      marketPrice: "$5,000-8,000/month",
      savings: "Save up to $5,000/month"
    },
    {
      name: "IoT Infrastructure Management",
      description: "Comprehensive Internet of Things infrastructure management with device monitoring, data analytics, and automated maintenance.",
      price: "$1,799/month",
      features: [
        "IoT device management",
        "Real-time monitoring",
        "Data analytics and insights",
        "Automated maintenance",
        "Security management",
        "Integration with existing systems",
        "Scalability planning",
        "Performance optimization"
      ],
      benefits: [
        "Improve operational efficiency by 70%",
        "Reduce maintenance costs by 60%",
        "Enable predictive maintenance",
        "Enhance data-driven decisions"
      ],
      marketPrice: "$3,000-4,500/month",
      savings: "Save up to $2,700/month"
    },
    {
      name: "Quantum Computing Readiness",
      description: "Quantum computing preparation and integration services including algorithm development, security enhancement, and future-proofing strategies.",
      price: "$4,999/month",
      features: [
        "Quantum algorithm development",
        "Security enhancement",
        "Future-proofing strategies",
        "Quantum simulation",
        "Hybrid classical-quantum systems",
        "Research and development",
        "Training and education",
        "Strategic consulting"
      ],
      benefits: [
        "Prepare for quantum future",
        "Enhance security posture",
        "Gain competitive advantage",
        "Future-proof investments"
      ],
      marketPrice: "$8,000-12,000/month",
      savings: "Save up to $7,000/month"
    },
    {
      name: "Edge Computing Solutions",
      description: "Edge computing infrastructure and management services for low-latency applications, real-time processing, and distributed computing needs.",
      price: "$1,499/month",
      features: [
        "Edge infrastructure setup",
        "Low-latency optimization",
        "Real-time processing",
        "Distributed computing",
        "Data synchronization",
        "Security management",
        "Performance monitoring",
        "Scalability planning"
      ],
      benefits: [
        "Reduce latency by 90%",
        "Improve application performance",
        "Enable real-time processing",
        "Reduce bandwidth costs"
      ],
      marketPrice: "$2,500-4,000/month",
      savings: "Save up to $2,500/month"
    },
    {
      name: "5G Network Implementation",
      description: "5G network design, implementation, and optimization services for high-speed connectivity, IoT integration, and advanced applications.",
      price: "$3,499/month",
      features: [
        "5G network design",
        "Infrastructure implementation",
        "Performance optimization",
        "IoT integration",
        "Security implementation",
        "Testing and validation",
        "Training and support",
        "Ongoing maintenance"
      ],
      benefits: [
        "Enable ultra-fast connectivity",
        "Support massive IoT deployments",
        "Reduce latency significantly",
        "Future-proof network infrastructure"
      ],
      marketPrice: "$6,000-10,000/month",
      savings: "Save up to $6,500/month"
    },
    {
      name: "Zero Trust Security Architecture",
      description: "Comprehensive zero trust security implementation with identity verification, micro-segmentation, and continuous monitoring.",
      price: "$2,199/month",
      features: [
        "Zero trust architecture design",
        "Identity and access management",
        "Micro-segmentation",
        "Continuous monitoring",
        "Threat detection",
        "Compliance implementation",
        "Security training",
        "Incident response"
      ],
      benefits: [
        "Enhance security posture by 95%",
        "Reduce breach risk by 90%",
        "Ensure compliance requirements",
        "Protect sensitive data"
      ],
      marketPrice: "$4,000-6,000/month",
      savings: "Save up to $3,800/month"
    },
    {
      name: "Green IT Solutions",
      description: "Sustainable IT infrastructure and practices including energy optimization, carbon footprint reduction, and eco-friendly technology implementation.",
      price: "$1,299/month",
      features: [
        "Energy optimization",
        "Carbon footprint analysis",
        "Eco-friendly hardware",
        "Sustainable practices",
        "Waste reduction",
        "Renewable energy integration",
        "Compliance reporting",
        "Sustainability metrics"
      ],
      benefits: [
        "Reduce energy costs by 40%",
        "Improve sustainability metrics",
        "Meet environmental regulations",
        "Enhance brand reputation"
      ],
      marketPrice: "$2,200-3,500/month",
      savings: "Save up to $2,200/month"
    },
    {
      name: "AI Infrastructure Management",
      description: "Specialized AI infrastructure management including GPU clusters, machine learning pipelines, and AI model deployment and monitoring.",
      price: "$2,799/month",
      features: [
        "GPU cluster management",
        "ML pipeline automation",
        "Model deployment",
        "Performance monitoring",
        "Resource optimization",
        "Security management",
        "Scaling and load balancing",
        "Cost optimization"
      ],
      benefits: [
        "Optimize AI performance by 80%",
        "Reduce AI infrastructure costs by 50%",
        "Accelerate model deployment",
        "Ensure AI system reliability"
      ],
      marketPrice: "$4,500-7,000/month",
      savings: "Save up to $4,200/month"
    },
    {
      name: "Enterprise Blockchain Solutions",
      description: "Comprehensive blockchain implementation for enterprise applications including smart contracts, supply chain tracking, and digital identity management.",
      price: "$3,999/project",
      features: [
        "Custom blockchain development",
        "Smart contract implementation",
        "Supply chain tracking",
        "Digital identity management",
        "Tokenization services",
        "Consensus mechanism design",
        "Security auditing",
        "Integration with existing systems"
      ],
      benefits: [
        "Increase transparency and trust",
        "Reduce transaction costs by 60%",
        "Improve supply chain visibility",
        "Enable new business models"
      ],
      marketPrice: "$8,000-15,000/project",
      savings: "Save up to $11,000/project"
    },
    {
      name: "Advanced IoT Infrastructure",
      description: "Complete IoT infrastructure setup with sensor networks, data processing, and real-time analytics for smart buildings and industrial applications.",
      price: "$2,499/month",
      features: [
        "IoT sensor deployment",
        "Edge computing setup",
        "Real-time data processing",
        "Predictive analytics",
        "Device management platform",
        "Security implementation",
        "Integration with cloud services",
        "Custom dashboard development"
      ],
      benefits: [
        "Improve operational efficiency by 45%",
        "Reduce maintenance costs by 50%",
        "Enable predictive maintenance",
        "Optimize resource utilization"
      ],
      marketPrice: "$5,000-10,000/month",
      savings: "Save up to $7,500/month"
    },
    {
      name: "Quantum-Safe Security Implementation",
      description: "Future-proof security solutions with quantum-resistant cryptography, post-quantum algorithms, and advanced threat protection.",
      price: "$1,999/month",
      features: [
        "Quantum-resistant cryptography",
        "Post-quantum algorithm implementation",
        "Advanced threat protection",
        "Security assessment and testing",
        "Compliance with quantum standards",
        "Migration planning",
        "Staff training programs",
        "Ongoing security monitoring"
      ],
      benefits: [
        "Future-proof security infrastructure",
        "Protect against quantum threats",
        "Ensure long-term data security",
        "Maintain regulatory compliance"
      ],
      marketPrice: "$4,000-8,000/month",
      savings: "Save up to $6,000/month"
    },
    {
      name: "Edge Computing Platform",
      description: "Distributed edge computing infrastructure with low-latency processing, real-time analytics, and intelligent data distribution.",
      price: "$1,799/month",
      features: [
        "Edge server deployment",
        "Low-latency processing",
        "Real-time analytics",
        "Intelligent data routing",
        "Load balancing",
        "Security implementation",
        "Monitoring and management",
        "Integration with cloud services"
      ],
      benefits: [
        "Reduce latency by 80%",
        "Improve application performance",
        "Lower bandwidth costs",
        "Enable real-time processing"
      ],
      marketPrice: "$3,500-7,000/month",
      savings: "Save up to $5,200/month"
    },
    {
      name: "Advanced Data Lake Architecture",
      description: "Comprehensive data lake implementation with advanced analytics, machine learning integration, and real-time data processing capabilities.",
      price: "$2,299/month",
      features: [
        "Data lake architecture design",
        "ETL/ELT pipeline development",
        "Real-time data processing",
        "Machine learning integration",
        "Data governance framework",
        "Security and compliance",
        "Analytics dashboard development",
        "Data quality management"
      ],
      benefits: [
        "Centralize data management",
        "Enable advanced analytics",
        "Improve data accessibility",
        "Reduce data silos"
      ],
      marketPrice: "$5,000-10,000/month",
      savings: "Save up to $7,700/month"
    },
    {
      name: "Microservices Architecture Migration",
      description: "Complete migration to microservices architecture with containerization, service mesh, and API gateway implementation.",
      price: "$4,999/project",
      features: [
        "Legacy system analysis",
        "Microservices design",
        "Containerization with Docker/Kubernetes",
        "Service mesh implementation",
        "API gateway setup",
        "Monitoring and logging",
        "Security implementation",
        "Performance optimization"
      ],
      benefits: [
        "Improve scalability and flexibility",
        "Reduce deployment time by 70%",
        "Enable independent service updates",
        "Improve system resilience"
      ],
      marketPrice: "$10,000-20,000/project",
      savings: "Save up to $15,000/project"
    },
    {
      name: "Advanced API Management Platform",
      description: "Comprehensive API management with security, monitoring, analytics, and developer portal for enterprise API ecosystems.",
      price: "$1,299/month",
      features: [
        "API gateway implementation",
        "Security and authentication",
        "Rate limiting and throttling",
        "API analytics and monitoring",
        "Developer portal",
        "API versioning",
        "Documentation generation",
        "Integration with existing systems"
      ],
      benefits: [
        "Centralize API management",
        "Improve API security",
        "Enable API monetization",
        "Accelerate development cycles"
      ],
      marketPrice: "$3,000-6,000/month",
      savings: "Save up to $4,700/month"
    },
    {
      name: "Zero-Trust Security Architecture",
      description: "Complete zero-trust security implementation with identity verification, network segmentation, and continuous monitoring.",
      price: "$2,799/month",
      features: [
        "Identity and access management",
        "Network segmentation",
        "Continuous monitoring",
        "Multi-factor authentication",
        "Privileged access management",
        "Security analytics",
        "Compliance reporting",
        "Incident response automation"
      ],
      benefits: [
        "Enhance security posture",
        "Reduce attack surface",
        "Improve compliance",
        "Enable secure remote work"
      ],
      marketPrice: "$6,000-12,000/month",
      savings: "Save up to $9,200/month"
    },
    {
      name: "Advanced Backup and Disaster Recovery",
      description: "Comprehensive backup and disaster recovery solution with automated failover, data replication, and business continuity planning.",
      price: "$1,599/month",
      features: [
        "Automated backup systems",
        "Real-time data replication",
        "Automated failover",
        "Disaster recovery testing",
        "Business continuity planning",
        "Ransomware protection",
        "Cloud backup integration",
        "Recovery time optimization"
      ],
      benefits: [
        "Minimize downtime to minutes",
        "Protect against data loss",
        "Ensure business continuity",
        "Meet compliance requirements"
      ],
      marketPrice: "$3,500-7,000/month",
      savings: "Save up to $5,400/month"
    },
    {
      name: "Advanced Network Security",
      description: "Comprehensive network security solution with next-generation firewalls, intrusion detection, and threat intelligence integration.",
      price: "$1,899/month",
      features: [
        "Next-generation firewalls",
        "Intrusion detection systems",
        "Threat intelligence integration",
        "Network segmentation",
        "VPN implementation",
        "DDoS protection",
        "Security monitoring",
        "Incident response"
      ],
      benefits: [
        "Protect against advanced threats",
        "Improve network visibility",
        "Reduce security incidents",
        "Ensure regulatory compliance"
      ],
      marketPrice: "$4,000-8,000/month",
      savings: "Save up to $6,100/month"
    },
    {
      name: "Cloud-Native Application Development",
      description: "Complete cloud-native application development with serverless architecture, containerization, and DevOps integration.",
      price: "$3,499/project",
      features: [
        "Cloud-native architecture design",
        "Serverless application development",
        "Container orchestration",
        "CI/CD pipeline setup",
        "Monitoring and logging",
        "Security implementation",
        "Performance optimization",
        "Scalability planning"
      ],
      benefits: [
        "Improve application scalability",
        "Reduce operational costs",
        "Accelerate development cycles",
        "Enable rapid deployment"
      ],
      marketPrice: "$8,000-15,000/project",
      savings: "Save up to $11,500/project"
    },
    {
      name: "Advanced Database Optimization",
      description: "Comprehensive database optimization with performance tuning, query optimization, and advanced indexing strategies.",
      price: "$1,499/month",
      features: [
        "Database performance analysis",
        "Query optimization",
        "Index optimization",
        "Database tuning",
        "Capacity planning",
        "Backup optimization",
        "Security hardening",
        "Monitoring and alerting"
      ],
      benefits: [
        "Improve database performance by 60%",
        "Reduce query response time",
        "Optimize resource utilization",
        "Ensure data integrity"
      ],
      marketPrice: "$3,000-6,000/month",
      savings: "Save up to $4,500/month"
    },
    {
      name: "Enterprise Integration Platform",
      description: "Comprehensive integration platform connecting disparate systems with real-time data synchronization and workflow automation.",
      price: "$2,199/month",
      features: [
        "System integration design",
        "Real-time data synchronization",
        "Workflow automation",
        "API integration",
        "Data transformation",
        "Error handling and monitoring",
        "Security implementation",
        "Performance optimization"
      ],
      benefits: [
        "Eliminate data silos",
        "Improve operational efficiency",
        "Enable real-time insights",
        "Reduce manual processes"
      ],
      marketPrice: "$5,000-10,000/month",
      savings: "Save up to $7,800/month"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Header */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            IT Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive IT solutions designed to modernize your infrastructure, enhance security, and drive digital transformation
          </p>
          <div className="bg-cyan-500/20 border border-cyan-500/30 rounded-lg p-6 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">Why Choose Our IT Services?</h2>
            <div className="grid md:grid-cols-4 gap-6 text-left">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Expert Team</h3>
                <p className="text-gray-300">Certified professionals with 10+ years experience</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Cost Effective</h3>
                <p className="text-gray-300">Save up to 60% compared to market rates</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">24/7 Support</h3>
                <p className="text-gray-300">Round-the-clock technical assistance</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Proven Results</h3>
                <p className="text-gray-300">99.9% uptime guarantee</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {itServices.map((service, index) => (
              <div key={index} className="bg-gray-800 p-8 rounded-lg hover:bg-gray-700 transition-colors">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-semibold text-cyan-400">
                    {service.name}
                  </h3>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-green-400">{service.price}</div>
                    <div className="text-sm text-gray-400">Market: {service.marketPrice}</div>
                    <div className="text-sm text-green-400 font-semibold">{service.savings}</div>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6">
                  {service.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                  <ul className="text-gray-300 space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <span className="text-cyan-400 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Benefits:</h4>
                  <ul className="text-gray-300 space-y-2">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center">
                        <span className="text-green-400 mr-2">→</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-4">
                  <Link
                    href="/contact"
                    className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors flex-1 text-center"
                  >
                    Get Started
                  </Link>
                  <Link
                    href="/request-quote"
                    className="bg-transparent border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white px-6 py-2 rounded-lg font-semibold transition-colors flex-1 text-center"
                  >
                    Request Quote
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Ready to Modernize Your IT Infrastructure?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact us today to discuss your IT needs and get a customized solution
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-gray-300 mb-8">
            <div>
              <h3 className="text-xl font-semibold text-cyan-400 mb-2">Phone</h3>
              <p>+1 302 464 0950</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-cyan-400 mb-2">Email</h3>
              <p>kleber@ziontechgroup.com</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-cyan-400 mb-2">Address</h3>
              <p>364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Contact Us Now
            </Link>
            <Link
              href="/request-quote"
              className="bg-transparent border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Get Free IT Assessment
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}