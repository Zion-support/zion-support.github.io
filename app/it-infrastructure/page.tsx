"use client";
import React from "react";
import { Helmet } from "react-helmet-async";
// import { Phone, Mail } from 'lucide-react';
// import { CheckCircle } from 'lucide-react';

const ITInfrastructurePage: React.FC = () => {
  const _itServices = [
    {
      title: "Cloud Infrastructure Management",
      description:
        "Comprehensive cloud infrastructure setup, optimization, and management across AWS, Azure, and Google Cloud platforms.",
      icon: "☁️",
      price: "$2,999/month",
      features: [
        "Multi-cloud architecture design",
        "Infrastructure as Code (IaC)",
        "Auto-scaling and load balancing",
        "Cost optimization",
        "Security hardening",
        "24/7 monitoring and support",
      ],
      benefits: [
        "Reduce infrastructure costs by 40%",
        "Improve system reliability by 99.9%",
        "Scale automatically with demand",
        "Ensure enterprise-grade security",
      ],
      marketPrice: "$5000-10000/month",
      technologies: [
        "AWS",
        "Azure",
        "Google Cloud",
        "Terraform",
        "Kubernetes",
        "Docker",
      ],
      contactInfo: "Contact: kleber@ziontechgroup.com | +1 302 464 0950",
    },
    {
      title: "DevOps & CI/CD Pipeline",
      description:
        "Complete DevOps transformation with automated deployment pipelines, testing, and continuous integration.",
      icon: "🔄",
      price: "$1,999/month",
      features: [
        "CI/CD pipeline setup",
        "Automated testing integration",
        "Container orchestration",
        "Infrastructure monitoring",
        "Security scanning",
        "Deployment automation",
      ],
      benefits: [
        "Deploy 10x faster",
        "Reduce deployment errors by 90%",
        "Improve team productivity",
        "Ensure consistent deployments",
      ],
      marketPrice: "$3000-6000/month",
      technologies: [
        "Jenkins",
        "GitLab CI",
        "GitHub Actions",
        "Docker",
        "Kubernetes",
        "Ansible",
      ],
      contactInfo: "Contact: kleber@ziontechgroup.com | +1 302 464 0950",
    },
    {
      title: "Database Administration & Optimization",
      description:
        "Expert database management, optimization, and migration services for MySQL, PostgreSQL, MongoDB, and more.",
      icon: "🗄️",
      price: "$1,499/month",
      features: [
        "Database design and optimization",
        "Performance tuning",
        "Backup and recovery",
        "Security hardening",
        "Migration services",
        "Monitoring and alerting",
      ],
      benefits: [
        "Improve query performance by 300%",
        "Ensure data security and compliance",
        "Reduce downtime to near zero",
        "Optimize storage costs",
      ],
      marketPrice: "$2500-5000/month",
      technologies: [
        "MySQL",
        "PostgreSQL",
        "MongoDB",
        "Redis",
        "Elasticsearch",
        "AWS RDS",
      ],
      contactInfo: "Contact: kleber@ziontechgroup.com | +1 302 464 0950",
    },
    {
      title: "Network Security & Firewall Management",
      description:
        "Advanced network security solutions with firewall configuration, intrusion detection, and threat monitoring.",
      icon: "🛡️",
      price: "$2,499/month",
      features: [
        "Firewall configuration and management",
        "Intrusion detection systems",
        "VPN setup and management",
        "Network monitoring",
        "Security policy implementation",
        "Threat response and mitigation",
      ],
      benefits: [
        "Prevent 99% of security breaches",
        "Ensure compliance with regulations",
        "Reduce security incidents by 95%",
        "Protect sensitive data",
      ],
      marketPrice: "$4000-8000/month",
      technologies: [
        "Cisco",
        "Fortinet",
        "Palo Alto",
        "pfSense",
        "Snort",
        "Wireshark",
      ],
      contactInfo: "Contact: kleber@ziontechgroup.com | +1 302 464 0950",
    },
    {
      title: "Server Management & Maintenance",
      description:
        "Comprehensive server administration including Windows, Linux, and virtualized environments.",
      icon: "🖥️",
      price: "$1,799/month",
      features: [
        "Server setup and configuration",
        "OS updates and patching",
        "Performance monitoring",
        "Backup and disaster recovery",
        "User management",
        "Security hardening",
      ],
      benefits: [
        "Ensure 99.9% uptime",
        "Reduce maintenance costs by 50%",
        "Improve system performance",
        "Prevent security vulnerabilities",
      ],
      marketPrice: "$3000-6000/month",
      technologies: [
        "Windows Server",
        "Linux",
        "VMware",
        "Hyper-V",
        "Ansible",
        "Puppet",
      ],
      contactInfo: "Contact: kleber@ziontechgroup.com | +1 302 464 0950",
    },
    {
      title: "IT Support & Help Desk",
      description:
        "24/7 IT support services with remote assistance, ticketing system, and proactive monitoring.",
      icon: "🎧",
      price: "$1,299/month",
      features: [
        "24/7 technical support",
        "Remote desktop assistance",
        "Ticketing and issue tracking",
        "Proactive system monitoring",
        "User training and documentation",
        "Hardware and software support",
      ],
      benefits: [
        "Reduce IT downtime by 80%",
        "Improve user satisfaction",
        "Resolve issues faster",
        "Prevent problems proactively",
      ],
      marketPrice: "$2000-4000/month",
      technologies: [
        "ServiceNow",
        "Jira",
        "TeamViewer",
        "SCCM",
        "Active Directory",
        "Office 365",
      ],
      contactInfo: "Contact: kleber@ziontechgroup.com | +1 302 464 0950",
    },
    {
      title: "Data Backup & Disaster Recovery",
      description:
        "Comprehensive backup solutions and disaster recovery planning to protect your critical data.",
      icon: "💾",
      price: "$999/month",
      features: [
        "Automated backup systems",
        "Disaster recovery planning",
        "Data encryption",
        "Offsite storage",
        "Recovery testing",
        "Compliance monitoring",
      ],
      benefits: [
        "Protect against data loss",
        "Ensure business continuity",
        "Meet compliance requirements",
        "Reduce recovery time to minutes",
      ],
      marketPrice: "$1500-3000/month",
      technologies: [
        "Veeam",
        "Acronis",
        "AWS Backup",
        "Azure Backup",
        "Commvault",
        "Rubrik",
      ],
      contactInfo: "Contact: kleber@ziontechgroup.com | +1 302 464 0950",
    },
    {
      title: "Email & Communication Systems",
      description:
        "Enterprise email solutions with Microsoft 365, Google Workspace, and custom email server management.",
      icon: "📧",
      price: "$799/month",
      features: [
        "Email server setup and management",
        "Microsoft 365 administration",
        "Google Workspace management",
        "Email security and filtering",
        "Mobile device management",
        "User provisioning and deprovisioning",
      ],
      benefits: [
        "Improve email security",
        "Reduce spam and phishing",
        "Ensure email compliance",
        "Enhance productivity",
      ],
      marketPrice: "$1200-2500/month",
      technologies: [
        "Microsoft 365",
        "Google Workspace",
        "Exchange Server",
        "Postfix",
        "SpamAssassin",
        "MDM",
      ],
      contactInfo: "Contact: kleber@ziontechgroup.com | +1 302 464 0950",
    },
  ];

  const _infrastructureStats = [
    { metric: "99.9%", description: "Uptime Guarantee" },
    { metric: "500+", description: "Servers Managed" },
    { metric: "50+", description: "Enterprise Clients" },
    { metric: "24/7", description: "Support Available" },
    { metric: "< 1hr", description: "Response Time" },
    { metric: "100%", description: "Security Compliance" },
  ];

  return (
    <>
      
    </><Helmet>
        <title>IT Infrastructure Solutions - Zion Tech Group</title>

      </Helmet>
      <div className="min-h-screen bg-gray-50">
        
          </div><div className="container mx-auto px-4 py-16">
        
          </div><div className="text-center mb-16">
          <h$1 className="text-4xl font-bold text-gray-900 mb-6">
              IT Infrastructure Solutions
            </h1>
          
          </div><p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Build and maintain robust IT infrastructure with our comprehensive
              solutions for servers, networks, and cloud systems.
            </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        
          </div><div className="bg-white p-6 rounded-lg shadow-lg">
          <h$1 className="text-xl font-semibold mb-4">Server Management</h3>
          
          </div><p className="text-gray-600">
                Comprehensive server setup, configuration, and maintenance
                services.
              </p>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h$1 className="text-xl font-semibold mb-4">Network Design</h3>
          
          </div><p className="text-gray-600">
                Scalable network architecture design and implementation.
              </p>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h$1 className="text-xl font-semibold mb-4">Cloud Migration</h3>
          
          </div><p className="text-gray-600">
                Seamless migration to cloud infrastructure platforms.
              </p>
        </div>
      </div>
        </div>
      </div>
    </>
  );
};

export default ITInfrastructurePage;
