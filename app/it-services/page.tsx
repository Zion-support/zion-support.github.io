'use client';
import React from 'react';

import { CheckCircle, TrendingUp, Phone, Mail, MapPin, Shield, Cloud, Server, Database, Network, Code, Zap, Users, Globe, Lock, BarChart, Settings, Monitor, HardDrive, Wifi, Smartphone, Laptop, Headphones, Camera, Printer, Router, Cpu, Memory, HardDriveIcon } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ITServicesPage: React.FC = () => {
  const itServices = [
    {
      title: 'Cloud Infrastructure & Migration',
      description: 'Complete cloud transformation with AWS, Azure, and Google Cloud Platform migration, optimization, and management.',
      icon: Cloud,
      price: '$2,500/month',
      features: [
        'Cloud Strategy & Planning',
        'Multi-cloud Architecture',
        'Migration & Optimization',
        'Cost Optimization',
        'Security Implementation',
        '24/7 Monitoring & Support'
      ],
      benefits: [
        'Reduce infrastructure costs by 40%',
        'Improve scalability and flexibility',
        'Enhance security and compliance',
        'Enable remote work capabilities'
      ],
      marketPrice: '$4,000-8,000/month',
      category: 'Cloud Services',
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Cybersecurity & Compliance',
      description: 'Comprehensive security solutions including threat detection, vulnerability assessment, and compliance management.',
      icon: Shield,
      price: '$3,200/month',
      features: [
        'Security Assessment & Auditing',
        'Threat Detection & Response',
        'Vulnerability Management',
        'Compliance (SOC2, GDPR, HIPAA)',
        'Security Training & Awareness',
        'Incident Response Planning'
      ],
      benefits: [
        'Protect against 99.9% of threats',
        'Ensure regulatory compliance',
        'Reduce security incidents by 80%',
        'Minimize business risk'
      ],
      marketPrice: '$5,000-12,000/month',
      category: 'Security',
      technologies: ['SIEM', 'EDR', 'Firewall', 'VPN', 'MFA', 'Encryption'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'DevOps & CI/CD Automation',
      description: 'Streamlined development operations with automated deployment, testing, and infrastructure management.',
      icon: Code,
      price: '$2,800/month',
      features: [
        'CI/CD Pipeline Setup',
        'Infrastructure as Code',
        'Automated Testing',
        'Container Orchestration',
        'Monitoring & Logging',
        'Performance Optimization'
      ],
      benefits: [
        'Deploy 10x faster',
        'Reduce deployment errors by 90%',
        'Improve team productivity',
        'Enable continuous delivery'
      ],
      marketPrice: '$4,500-9,000/month',
      category: 'DevOps',
      technologies: ['Jenkins', 'GitLab CI', 'Docker', 'Kubernetes', 'Ansible', 'Prometheus'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Network Infrastructure & Management',
      description: 'Enterprise-grade network design, implementation, and management with 99.9% uptime guarantee.',
      icon: Network,
      price: '$1,800/month',
      features: [
        'Network Design & Implementation',
        'Wireless Network Setup',
        'Network Security',
        'Performance Monitoring',
        'Disaster Recovery',
        '24/7 Network Support'
      ],
      benefits: [
        'Ensure 99.9% network uptime',
        'Improve network performance',
        'Enhance security posture',
        'Reduce network downtime'
      ],
      marketPrice: '$3,000-6,000/month',
      category: 'Networking',
      technologies: ['Cisco', 'Juniper', 'Fortinet', 'Ubiquiti', 'SD-WAN', 'MPLS'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Database Management & Optimization',
      description: 'Comprehensive database services including design, optimization, backup, and performance tuning.',
      icon: Database,
      price: '$2,200/month',
      features: [
        'Database Design & Architecture',
        'Performance Tuning',
        'Backup & Recovery',
        'Data Migration',
        'Security & Compliance',
        'Monitoring & Maintenance'
      ],
      benefits: [
        'Improve query performance by 60%',
        'Ensure data integrity',
        'Reduce downtime to near zero',
        'Optimize storage costs'
      ],
      marketPrice: '$3,500-7,000/month',
      category: 'Database',
      technologies: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Elasticsearch', 'Oracle'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'IT Support & Help Desk',
      description: '24/7 IT support services with remote assistance, troubleshooting, and proactive maintenance.',
      icon: Headphones,
      price: '$1,200/month',
      features: [
        '24/7 Technical Support',
        'Remote Desktop Assistance',
        'Hardware & Software Support',
        'User Training & Onboarding',
        'Proactive Maintenance',
        'Incident Management'
      ],
      benefits: [
        'Resolve 95% of issues remotely',
        'Reduce downtime by 70%',
        'Improve user satisfaction',
        'Lower IT support costs'
      ],
      marketPrice: '$2,000-4,000/month',
      category: 'Support',
      technologies: ['Remote Desktop', 'Ticketing Systems', 'Monitoring Tools', 'Asset Management', 'Knowledge Base'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Server Management & Maintenance',
      description: 'Complete server lifecycle management including setup, monitoring, maintenance, and optimization.',
      icon: Server,
      price: '$1,500/month',
      features: [
        'Server Setup & Configuration',
        'Performance Monitoring',
        'Security Hardening',
        'Backup & Recovery',
        'Patch Management',
        'Capacity Planning'
      ],
      benefits: [
        'Ensure 99.9% server uptime',
        'Optimize server performance',
        'Reduce maintenance overhead',
        'Improve security posture'
      ],
      marketPrice: '$2,500-5,000/month',
      category: 'Infrastructure',
      technologies: ['Windows Server', 'Linux', 'VMware', 'Hyper-V', 'Docker', 'Monitoring Tools'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Business Intelligence & Analytics',
      description: 'Data-driven insights and reporting solutions to help businesses make informed decisions.',
      icon: BarChart,
      price: '$2,000/month',
      features: [
        'Data Warehouse Design',
        'ETL Pipeline Development',
        'Dashboard Creation',
        'Report Automation',
        'Data Visualization',
        'Predictive Analytics'
      ],
      benefits: [
        'Improve decision-making speed',
        'Identify business opportunities',
        'Reduce manual reporting by 80%',
        'Enable data-driven culture'
      ],
      marketPrice: '$3,500-7,000/month',
      category: 'Analytics',
      technologies: ['Power BI', 'Tableau', 'Python', 'SQL', 'Apache Spark', 'Machine Learning'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Mobile Device Management (MDM)',
      description: 'Comprehensive mobile device management with security, app distribution, and remote control capabilities.',
      icon: Smartphone,
      price: '$800/month',
      features: [
        'Device Enrollment & Provisioning',
        'App Management & Distribution',
        'Security Policy Enforcement',
        'Remote Wipe & Lock',
        'Compliance Monitoring',
        'User Self-Service Portal'
      ],
      benefits: [
        'Secure mobile devices',
        'Reduce IT support tickets',
        'Ensure compliance',
        'Improve productivity'
      ],
      marketPrice: '$1,500-3,000/month',
      category: 'Mobile',
      technologies: ['Microsoft Intune', 'VMware Workspace ONE', 'MobileIron', 'Jamf', 'Android Enterprise'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Backup & Disaster Recovery',
      description: 'Comprehensive backup solutions with disaster recovery planning and testing to ensure business continuity.',
      icon: HardDrive,
      price: '$1,600/month',
      features: [
        'Automated Backup Systems',
        'Disaster Recovery Planning',
        'Business Continuity Testing',
        'Data Encryption',
        'Off-site Storage',
        'Recovery Time Optimization'
      ],
      benefits: [
        'Minimize data loss risk',
        'Ensure quick recovery',
        'Meet compliance requirements',
        'Protect business operations'
      ],
      marketPrice: '$2,500-5,000/month',
      category: 'Backup',
      technologies: ['Veeam', 'Commvault', 'Acronis', 'AWS Backup', 'Azure Backup', 'Cloud Storage'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'IT Consulting & Strategy',
      description: 'Strategic IT consulting to align technology with business goals and optimize IT investments.',
      icon: Users,
      price: '$3,500/month',
      features: [
        'IT Strategy Development',
        'Technology Assessment',
        'Digital Transformation',
        'Vendor Management',
        'Budget Planning',
        'Change Management'
      ],
      benefits: [
        'Align IT with business goals',
        'Optimize technology investments',
        'Reduce IT costs by 25%',
        'Improve operational efficiency'
      ],
      marketPrice: '$5,000-12,000/month',
      category: 'Consulting',
      technologies: ['Strategic Planning', 'Technology Roadmaps', 'ROI Analysis', 'Best Practices', 'Industry Standards'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'IT Asset Management',
      description: 'Complete IT asset lifecycle management with tracking, optimization, and cost control.',
      icon: Settings,
      price: '$1,000/month',
      features: [
        'Asset Discovery & Inventory',
        'License Management',
        'Lifecycle Tracking',
        'Cost Optimization',
        'Compliance Monitoring',
        'Automated Reporting'
      ],
      benefits: [
        'Reduce IT costs by 20%',
        'Ensure license compliance',
        'Optimize asset utilization',
        'Improve planning accuracy'
      ],
      marketPrice: '$1,800-3,500/month',
      category: 'Asset Management',
      technologies: ['Asset Management Tools', 'License Tracking', 'Automation Scripts', 'Reporting Dashboards', 'Integration APIs'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    }
  ];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        <main className="relative z-10">
          {/* Hero Section */}
          <section className="pt-24 pb-16 px-4">
            <div className="max-w-7xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
                IT Services
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Comprehensive IT solutions designed to optimize your business operations, enhance security, and drive digital transformation.
              </p>
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">12+</div>
                  <div className="text-gray-300">IT Services</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <div className="text-3xl font-bold text-green-400 mb-2">$800</div>
                  <div className="text-gray-300">Starting Price</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <div className="text-3xl font-bold text-purple-400 mb-2">99.9%</div>
                  <div className="text-gray-300">Uptime SLA</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
                  <div className="text-gray-300">Support</div>
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
            </div>
          </section>

          {/* Services Grid */}
          <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold text-white text-center mb-12">
                Choose Your IT Solution
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {itServices.map((service, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                      <p className="text-gray-600 text-sm">{service.description}</p>
                    </div>
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-2xl font-bold text-green-600">{service.price}</span>
                        <span className="text-sm text-gray-500">Market: {service.marketPrice}</span>
                      </div>
                      <div className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full inline-block">
                        {service.category}
                      </div>
                    </div>
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {service.features.slice(0, 4).map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                        {service.features.length > 4 && (
                          <li className="text-sm text-gray-500">
                            +{service.features.length - 4} more features
                          </li>
                        )}
                      </ul>
                    </div>
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                      <ul className="space-y-1">
                        {service.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="text-sm text-gray-600 flex items-center">
                            <TrendingUp className="w-3 h-3 text-blue-500 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="text-center">
                      <a
                        href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${service.title}`}
                        className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all inline-block"
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

          {/* CTA Section */}
          <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Transform Your IT Infrastructure?
              </h2>
              <p className="text-xl text-purple-100 mb-8">
                Get started with our IT services today and optimize your business operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                >
                  Call (302) 464-0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors"
                >
                  Email Us
                </a>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default ITServicesPage;