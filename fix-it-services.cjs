#!/usr/bin/env node

const fs = require('fs');

// Read the it-services page
const filePath = '/workspace/src/it-services/page.tsx';
let content = fs.readFileSync(filePath, 'utf8');

// Fix the services array by properly structuring it
const servicesArray = `  const _itServices = [
    {
      title: 'Cloud Migration & Infrastructure',
      description: 'Seamless migration to cloud platforms with optimized infrastructure setup and management.',
      icon: 'Cloud',
      features: ['Cloud migration', 'Infrastructure setup', 'Cost optimization', 'Security configuration', 'Monitoring', '24/7 support'],
      price: 'Starting at $1,500/month',
      category: 'Infrastructure',
      benefits: ['Scalable infrastructure', 'Reduced costs', 'Improved performance', 'Enhanced security'],
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Terraform', 'Kubernetes', 'Docker'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Advanced Threat Protection',
      description: 'Comprehensive cybersecurity solutions with real-time threat detection and automated response.',
      icon: 'Shield',
      features: ['Threat detection', 'Vulnerability assessment', 'Incident response', 'Security monitoring', 'Compliance reporting', 'Penetration testing'],
      price: 'Starting at $2,000/month',
      category: 'Security',
      benefits: ['Enhanced security posture', 'Reduced risk', 'Compliance assurance', 'Peace of mind'],
      technologies: ['SIEM', 'EDR', 'XDR', 'SOAR', 'Firewalls', 'Intrusion Detection'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'IT Infrastructure',
      description: 'Enterprise-grade IT infrastructure with 99.9% uptime guarantee and comprehensive support.',
      icon: 'Server',
      features: ['Network setup', 'Server management', 'Backup solutions', 'Disaster recovery', 'Performance monitoring', '24/7 support'],
      price: 'Starting at $1,200/month',
      category: 'Infrastructure',
      benefits: ['Reliable infrastructure', 'Reduced downtime', 'Improved efficiency', 'Cost savings'],
      technologies: ['Windows Server', 'Linux', 'VMware', 'Hyper-V', 'Active Directory', 'Exchange'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Database Management',
      description: 'Expert database administration, optimization, and migration services for all major database platforms.',
      icon: 'Database',
      features: ['Database design', 'Performance tuning', 'Migration services', 'Backup & recovery', 'Security hardening', 'Monitoring'],
      price: 'Starting at $800/month',
      category: 'Data Management',
      benefits: ['Optimized performance', 'Data security', 'Reduced costs', 'Improved reliability'],
      technologies: ['SQL Server', 'MySQL', 'PostgreSQL', 'Oracle', 'MongoDB', 'Redis'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Business Intelligence',
      description: 'Transform your data into actionable insights with our comprehensive BI and analytics solutions.',
      icon: 'BarChart',
      features: ['Data visualization', 'Report generation', 'Dashboard creation', 'Data warehousing', 'ETL processes', 'KPI tracking'],
      price: 'Starting at $1,000/month',
      category: 'Analytics',
      benefits: ['Data-driven decisions', 'Improved efficiency', 'Competitive advantage', 'Cost optimization'],
      technologies: ['Power BI', 'Tableau', 'QlikView', 'SSRS', 'SSAS', 'SSIS'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'IT Consulting',
      description: 'Strategic IT consulting to help you make informed technology decisions and optimize your IT investments.',
      icon: 'Users',
      features: ['Technology assessment', 'Strategic planning', 'Vendor evaluation', 'Cost analysis', 'Implementation guidance', 'Best practices'],
      price: 'Starting at $150/hour',
      category: 'Consulting',
      benefits: ['Strategic guidance', 'Cost optimization', 'Risk mitigation', 'Technology alignment'],
      technologies: ['IT Strategy', 'Architecture Design', 'Vendor Management', 'Project Management'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    }
  ];`;

// Replace the malformed services array
const servicesStart = content.indexOf('const _itServices = [');
const servicesEnd = content.indexOf('];', servicesStart) + 2;

if (servicesStart !== -1 && servicesEnd !== -1) {
  content = content.substring(0, servicesStart) + servicesArray + content.substring(servicesEnd);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Fixed it-services page');
} else {
  console.log('Could not find services array to replace');
}