import React from 'react'

const ITInfrastructurePage: React.FC = () => {
  const itServices = [
=======
import {Server, Lock, Monitor, CheckCircle, Star, Zap, BarChart, Shield, Helmet} from 'lucide-react';;
constITInfrastructurePage: React.FC= () =>{constitServices= [
>>>>>>> cursor/fix-errors-and-merge-to-main-56a1
    {
      title: 'Cloud Infrastructure Management',
      description: 'Comprehensive cloud infrastructure setup, optimization, and management across AWS, Azure, and Google Cloud platforms.',
      icon: '☁️',
      price: '$2,99 9/month',
      features: [
        'Multi-cloud architecture design',
        'Infrastructure as Code (IaC)',
        'Auto-scaling and load balancing',
        'Cost optimization',
        'Security hardening',
        '2 4/7 monitoring and support'
      ],
      benefits: [
        'Reduce infrastructure costs by 4 0%',
        'Improve system reliability by 9 9.9%',
        'Scale automatically with demand',
        'Ensure enterprise-grade security'
      ],
      marketPrice: '$500 0-1000 0/month',
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Terraform', 'Kubernetes', 'Docker'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 30 2 46 40950'
   },
    {title: 'DevOps & CI/CD Pipeline',
      description: 'Complete DevOps transformation with automated deployment pipelines, testing, and continuous integration.',
      icon: '🔄',
      price: '$1,99 9/month',
      features: [
        'CI/CD pipeline setup',
        'Automated testing integration',
        'Container orchestration',
        'Infrastructure monitoring',
        'Security scanning',
        'Deployment automation'
      ],
      benefits: [
        'Deploy 10 x faster',
        'Reduce deployment errors by 9 0%',
        'Improve team productivity',
        'Ensure consistent deployments'
      ],
      marketPrice: '$300 0-600 0/month',
      technologies: ['Jenkins', 'GitLab CI', 'GitHub Actions', 'Docker', 'Kubernetes', 'Ansible'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 30 2 46 40950'
   },
    {title: 'Database Administration & Optimization',
      description: 'Expert database management, optimization, and migration services for MySQL, PostgreSQL, MongoDB, and more.',
      icon: '🗄️',
      price: '$1,49 9/month',
      features: [
        'Database design and optimization',
        'Performance tuning',
        'Backup and recovery',
        'Security hardening',
        'Migration services',
        'Monitoring and alerting'
      ],
      benefits: [
        'Improve query performance by 30 0%',
        'Ensure data security and compliance',
        'Reduce do wntime to near zero',
        'Optimize storage costs'
      ],
      marketPrice: '$250 0-500 0/month',
      technologies: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch', 'AWS RDS'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 30 2 46 40950'
   },
    {title: 'Network Security & Firewall Management',
      description: 'Advanced network security solutions with firewall configuration, intrusion detection, and threat monitoring.',
      icon: '🛡️',
      price: '$2,49 9/month',
      features: [
        'Firewall configuration and management',
        'Intrusion detection systems',
        'VPN setup and management',
        'Network monitoring',
        'Security policy implementation',
        'Threat response and mitigation'
      ],
      benefits: [
        'Prevent 9 9% of security breaches',
        'Ensure compliance with regulations',
        'Reduce security incidents by 9 5%',
        'Protect sensitive data'
      ],
      marketPrice: '$400 0-800 0/month',
      technologies: ['Cisco', 'Fortinet', 'Palo Alto', 'pfSense', 'Snort', 'Wireshark'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 30 2 46 40950'
   },
    {title: 'Server Management & Maintenance',
      description: 'Comprehensive server administration including Windo ws, Linux, and virtualized environments.',
      icon: '🖥️',
      price: '$1,79 9/month',
      features: [
        'Server setup and configuration',
        'OS updates and patching',
        'Performance monitoring',
        'Backup and disaster recovery',
        'User management',
        'Security hardening'
      ],
      benefits: [
        'Ensure 9 9.9% uptime',
        'Reduce maintenance costs by 5 0%',
        'Improve system performance',
        'Prevent security vulnerabilities'
      ],
      marketPrice: '$300 0-600 0/month',
      technologies: ['Windo ws Server', 'Linux', 'VMware', 'Hyper-V', 'Ansible', 'Puppet'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 30 2 46 40950'
   },
    {title: 'IT Support & Help Desk',
      description: '2 4/7 IT support services with remote assistance, ticketing system, and proactive monitoring.',
      icon: '🎧',
      price: '$1,29 9/month',
      features: [
        '2 4/7 technical support',
        'Remote desktop assistance',
        'Ticketing and issue tracking',
        'Proactive system monitoring',
        'User training and do cumentation',
        'Hardware and software support'
      ],
      benefits: [
        'Reduce IT do wntime by 8 0%',
        'Improve user satisfaction',
        'Resolve issues faster',
        'Prevent problems proactively'
      ],
      marketPrice: '$200 0-400 0/month',
      technologies: ['ServiceNow', 'Jira', 'TeamViewer', 'SCCM', 'Active Directory', 'Office 36 5'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 30 2 46 40950'
   },
    {title: 'Data Backup & Disaster Recovery',
      description: 'Comprehensive backup solutions and disaster recovery planning to protect your critical data.',
      icon: '💾',
      price: '$99 9/month',
      features: [
        'Automated backup systems',
        'Disaster recovery planning',
        'Data encryption',
        'Offsite storage',
        'Recovery testing',
        'Compliance monitoring'
      ],
      benefits: [
        'Protect against data loss',
        'Ensure business continuity',
        'Meet compliance requirements',
        'Reduce recovery time to minutes'
      ],
      marketPrice: '$150 0-300 0/month',
      technologies: ['Veeam', 'Acronis', 'AWS Backup', 'Azure Backup', 'Commvault', 'Rubrik'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 30 2 46 40950'
   },
    {title: 'Email & Communication Systems',
      description: 'Enterprise email solutions with Microsoft 36 5, Google Workspace, and custom email server management.',
      icon: '📧',
      price: '$79 9/month',
      features: [
        'Email server setup and management',
        'Microsoft 36 5 administration',
        'Google Workspace management',
        'Email security and filtering',
        'Mobile device management',
        'User provisioning and deprovisioning'
      ],
      benefits: [
        'Improve email security',
        'Reduce spam and phishing',
        'Ensure email compliance',
        'Enhance productivity'
      ],
