import React from 'react';
import { Link } from 'react-router-dom';

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
      name: "Cloud Infrastructure as a Service (IaaS)",
      description: "Complete cloud infrastructure management with automated provisioning, scaling, and optimization across AWS, Azure, and Google Cloud platforms.",
      price: "$1,899/month",
      features: [
        "Multi-cloud infrastructure management",
        "Automated resource provisioning",
        "Auto-scaling and load balancing",
        "Cost optimization and monitoring",
        "Disaster recovery and backup",
        "Security and compliance management",
        "Performance monitoring and alerting",
        "24/7 infrastructure support"
      ],
      benefits: [
        "Reduce infrastructure costs by 50%",
        "Improve scalability and flexibility",
        "Ensure 99.9% uptime",
        "Simplify cloud management"
      ],
      marketPrice: "$3,000-5,000/month",
      savings: "Save up to $3,100/month"
    },
    {
      name: "Advanced DevOps & CI/CD Pipeline",
      description: "Comprehensive DevOps services with automated CI/CD pipelines, container orchestration, and infrastructure automation for modern software delivery.",
      price: "$2,199/month",
      features: [
        "Automated CI/CD pipeline setup",
        "Container orchestration with Kubernetes",
        "Infrastructure as Code (IaC)",
        "Automated testing and quality gates",
        "Deployment automation and rollback",
        "Monitoring and logging integration",
        "Security scanning and compliance",
        "Team training and best practices"
      ],
      benefits: [
        "Reduce deployment time by 80%",
        "Improve code quality and reliability",
        "Enable continuous delivery",
        "Minimize deployment risks"
      ],
      marketPrice: "$3,500-6,000/month",
      savings: "Save up to $3,800/month"
    },
    {
      name: "Enterprise Database Management",
      description: "Comprehensive database services including design, optimization, migration, and maintenance for SQL and NoSQL databases.",
      price: "$1,499/month",
      features: [
        "Database design and architecture",
        "Performance tuning and optimization",
        "Data migration and synchronization",
        "Backup and recovery strategies",
        "Security and access management",
        "Monitoring and alerting",
        "Capacity planning and scaling",
        "24/7 database support"
      ],
      benefits: [
        "Improve database performance by 60%",
        "Ensure data integrity and security",
        "Reduce downtime to near zero",
        "Optimize storage and costs"
      ],
      marketPrice: "$2,500-4,000/month",
      savings: "Save up to $2,500/month"
    },
    {
      name: "Network Security & Firewall Management",
      description: "Advanced network security services with firewall configuration, intrusion detection, and threat prevention for enterprise networks.",
      price: "$1,299/month",
      features: [
        "Firewall design and configuration",
        "Intrusion detection and prevention",
        "VPN setup and management",
        "Network segmentation and isolation",
        "Threat monitoring and analysis",
        "Security policy implementation",
        "Compliance and audit support",
        "Incident response and forensics"
      ],
      benefits: [
        "Protect against 99.9% of cyber threats",
        "Ensure network compliance",
        "Reduce security incidents by 90%",
        "Improve network performance"
      ],
      marketPrice: "$2,000-3,500/month",
      savings: "Save up to $2,200/month"
    },
    {
      name: "IT Service Desk & Support",
      description: "Comprehensive IT support services with helpdesk management, remote assistance, and proactive maintenance for all IT needs.",
      price: "$899/month",
      features: [
        "24/7 IT helpdesk support",
        "Remote desktop assistance",
        "Hardware and software support",
        "User account management",
        "Printer and peripheral support",
        "Mobile device management",
        "Software installation and updates",
        "IT asset management"
      ],
      benefits: [
        "Reduce IT support costs by 40%",
        "Improve user productivity",
        "Minimize downtime and disruptions",
        "Centralize IT support operations"
      ],
      marketPrice: "$1,500-2,500/month",
      savings: "Save up to $1,600/month"
    },
    {
      name: "Cloud Migration & Modernization",
      description: "Complete cloud migration services with application modernization, data migration, and optimization for legacy systems.",
      price: "$3,999/project",
      features: [
        "Application assessment and planning",
        "Legacy system modernization",
        "Data migration and synchronization",
        "Cloud-native architecture design",
        "Performance optimization",
        "Security and compliance migration",
        "Training and documentation",
        "Post-migration support"
      ],
      benefits: [
        "Reduce operational costs by 45%",
        "Improve system performance and reliability",
        "Enable modern cloud capabilities",
        "Future-proof your technology stack"
      ],
      marketPrice: "$8,000-15,000/project",
      savings: "Save up to $11,000/project"
    },
    {
      name: "IT Compliance & Audit Services",
      description: "Comprehensive compliance services for SOX, HIPAA, GDPR, and other regulatory requirements with audit preparation and ongoing monitoring.",
      price: "$1,799/month",
      features: [
        "Compliance gap analysis",
        "Policy and procedure development",
        "Risk assessment and mitigation",
        "Audit preparation and support",
        "Documentation and reporting",
        "Training and awareness programs",
        "Ongoing compliance monitoring",
        "Regulatory change management"
      ],
      benefits: [
        "Ensure regulatory compliance",
        "Reduce audit findings by 85%",
        "Minimize compliance risks",
        "Streamline audit processes"
      ],
      marketPrice: "$3,000-5,000/month",
      savings: "Save up to $3,200/month"
    },
    {
      name: "Advanced Backup & Disaster Recovery",
      description: "Comprehensive backup and disaster recovery solutions with automated backups, testing, and rapid recovery capabilities.",
      price: "$1,199/month",
      features: [
        "Automated backup scheduling",
        "Multi-tier backup strategies",
        "Disaster recovery planning",
        "Recovery time objective (RTO) optimization",
        "Backup testing and validation",
        "Off-site storage management",
        "Recovery point objective (RPO) monitoring",
        "Business continuity planning"
      ],
      benefits: [
        "Ensure data protection and recovery",
        "Minimize business disruption",
        "Meet compliance requirements",
        "Reduce recovery time to minutes"
      ],
      marketPrice: "$2,000-3,500/month",
      savings: "Save up to $2,300/month"
    },
    {
      name: "IT Asset Management & Lifecycle",
      description: "Complete IT asset management services including inventory, lifecycle management, and optimization for hardware and software assets.",
      price: "$699/month",
      features: [
        "IT asset inventory and tracking",
        "Software license management",
        "Hardware lifecycle planning",
        "Asset optimization and consolidation",
        "Vendor management and negotiations",
        "Compliance and audit support",
        "Cost analysis and reporting",
        "Asset disposal and recycling"
      ],
      benefits: [
        "Reduce IT costs by 30%",
        "Improve asset utilization",
        "Ensure license compliance",
        "Optimize IT investments"
      ],
      marketPrice: "$1,200-2,000/month",
      savings: "Save up to $1,300/month"
    },
    {
      name: "Advanced Monitoring & Analytics",
      description: "Comprehensive IT monitoring platform with real-time analytics, predictive insights, and automated alerting for all IT systems.",
      price: "$1,399/month",
      features: [
        "Real-time system monitoring",
        "Performance analytics and reporting",
        "Predictive failure analysis",
        "Custom dashboard creation",
        "Automated alerting and escalation",
        "Capacity planning and forecasting",
        "Trend analysis and insights",
        "Integration with existing tools"
      ],
      benefits: [
        "Prevent 95% of system failures",
        "Improve system performance",
        "Reduce downtime significantly",
        "Enable proactive maintenance"
      ],
      marketPrice: "$2,200-3,800/month",
      savings: "Save up to $2,400/month"
    },
    {
      name: "IT Consulting & Strategy",
      description: "Strategic IT consulting services including technology roadmaps, architecture design, and digital transformation planning.",
      price: "$2,499/month",
      features: [
        "IT strategy and roadmap development",
        "Technology architecture design",
        "Digital transformation planning",
        "Vendor evaluation and selection",
        "Technology assessment and recommendations",
        "ROI analysis and business case development",
        "Change management support",
        "Ongoing strategic guidance"
      ],
      benefits: [
        "Align IT with business objectives",
        "Optimize technology investments",
        "Accelerate digital transformation",
        "Improve competitive advantage"
      ],
      marketPrice: "$4,000-7,000/month",
      savings: "Save up to $4,500/month"
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