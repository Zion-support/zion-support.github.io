'use client'
import { ArrowRight, X, Target } from 'lucide-react'
import React from 'react'
import { Smartphone, Server, Monitor, Printer, Router, Laptop, Tablet, Watch, Headset, Keyboard, Mouse, Webcam, Speaker, Battery, Power, Cog, Settings2, ShieldCheck, FileText, Rocket, Lock } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, Star, ArrowRight } from 'lucide-react'

interface ITService {}
  title: string
  description: string
  ico,
  n: React.ComponentType<{ className?: string }>
  features: string[]
  price: string
  category: string
  benefits: string[]
  technologies: string[]
  contactInf,
  o: string
  color?: string
}

constITServicesPage: React.FC= () => {constitService,
  s: ITService[] = []
    // Infrastructure & Cloud Services
    {}
      title: 'Data Center Services',
      description: 'Complete data center solutions including colocation, managed hosting, and disaster recovery services.',
      icon: HardDrive,
      features: ['Colocation services', 'Managed hosting', 'Disaster recovery', 'Backup solutions', 'Monitoring', '2 4/7 support'],
      price: 'Starting at $80 0/month',
      category: 'Infrastructure',
      benefits: ['Reliable infrastructure', 'Reduced capital costs', 'Expert management', 'Compliance support'],
      technologies: ['VMware', 'Hyper-V', 'SAN Storage', 'Backup Software', 'Monitoring Tools'],
      contactInfo: 'Contac,
  t: kleber@ziontechgroup.com | +1 30 2 46 40950',
      color: 'text-cyan-40 0'
   },
    {title: 'Cloud Infrastructure & Migration',
      description: 'Complete cloud migration and infrastructure setup with AWS, Azure, and Google Cloud platforms.',
      icon: Cloud,
      features: ['Cloud migration', 'Infrastructure setup', 'Cost optimization', 'Security configuration', 'Monitoring', '2 4/7 support'],
      price: 'Starting at $1,50 0/month',
      category: 'Infrastructure',
      benefits: ['Scalable infrastructure', 'Reduced costs', 'Improved performance', 'Enhanced security'],
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Terraform', 'Kubernetes', 'Docker'],
      contactInfo: 'Contac,
  t: kleber@ziontechgroup.com | +1 30 2 46 40950',
      color: 'text-cyan-40 0'
   },
    // Cybersecurity Services
    {title: 'Advanced Threat Protection',
      description: 'Comprehensive cybersecurity solutions with AI-powered threat detection, prevention, and response capabilities.',
      icon: Shield,
      features: ['AI threat detection', 'Behavioral analysis', 'Incident response', 'Security monitoring', 'Vulnerability scanning', 'Penetration testing'],
      price: 'Starting at $2,50 0/month',
      category: 'Security',
      benefits: ['Prevent 9 9.9% of threats', 'Reduce response time by 8 0%', 'Compliance assurance', '2 4/7 monitoring'],
      technologies: ['SIEM', 'EDR', 'XDR', 'SOAR', 'AI/ML', 'Threat Intelligence'],
      contactInfo: 'Contac,
  t: kleber@ziontechgroup.com | +1 30 2 46 40950',
      color: 'text-cyan-40 0'
   },
    {title: 'Identity & Access Management',
      description: 'Secure identity management with multi-factor authentication, single sign-on, and privileged access management.',
      icon: ShieldCheck,
      features: ['SSO implementation', 'MFA setup', 'Privileged access management', 'Identity governance', 'Access reviews', 'Compliance reporting'],
      price: 'Starting at $1,80 0/month',
      category: 'Security',
      benefits: ['Enhanced security', 'Improved user experience', 'Compliance support', 'Reduced IT overhead'],
      technologies: ['Azure AD', 'Okta', 'Ping Identity', 'CyberArk', 'SailPoint', 'ForgeRock'],
      contactInfo: 'Contac,
  t: kleber@ziontechgroup.com | +1 30 2 46 40950',
      color: 'text-cyan-40 0'
   },
    {title: 'Security Compliance & Audit',
      description: 'Comprehensive security compliance services for SOC 2, ISO 2700 1, HIPAA, and other regulatory requirements.',
      icon: FileText,
      features: ['Compliance assessment', 'Policy development', 'Audit preparation', 'Risk assessment', 'Training programs', 'Ongoing monitoring'],
      price: 'Starting at $3,00 0/month',
      category: 'Security',
      benefits: ['Achieve compliance', 'Reduce audit time', 'Minimize risks', 'Build trust'],
      technologies: ['GRC Tools', 'Risk Management', 'Compliance Frameworks', 'Audit Tools'],
      contactInfo: 'Contac,
  t: kleber@ziontechgroup.com | +1 30 2 46 40950',
      color: 'text-cyan-40 0'
   },
    {title: 'Security Operations Center (SOC)',
      description: '2 4/7 security monitoring and incident response with dedicated security analysts and advanced threat hunting.',
      icon: Activity,
      features: ['2 4/7 monitoring', 'Threat hunting', 'Incident response', 'Security analytics', 'Threat intelligence', 'Forensic analysis'],
      price: 'Starting at $5,00 0/month',
      category: 'Security',
      benefits: ['Continuous protection', 'Rapid response', 'Expert analysis', 'Proactive defense'],
      technologies: ['SIEM', 'SOAR', 'EDR', 'Threat Intelligence', 'Forensic Tools'],
      contactInfo: 'Contac,
  t: kleber@ziontechgroup.com | +1 30 2 46 40950',
      color: 'text-cyan-40 0'
   },
    // Database & Data Management
    {title: 'Database Administration & Optimization',
      description: 'Expert database management with performance tuning, backup strategies, and high availability solutions.',
      icon: Database,
      features: ['Performance tuning', 'Backup & recovery', 'High availability', 'Data migration', 'Monitoring', 'Capacity planning'],
      price: 'Starting at $1,50 0/month',
      category: 'Data',
      benefits: ['Improved performance', 'Reduced do wntime', 'Cost optimization', 'Data protection'],
      technologies: ['SQL Server', 'Oracle', 'MySQL', 'PostgreSQL', 'MongoDB', 'Redis'],
      contactInfo: 'Contac,
  t: kleber@ziontechgroup.com | +1 30 2 46 40950',
      color: 'text-cyan-40 0'
   },
    {title: 'Data Backup & Disaster Recovery',
      description: 'Comprehensive backup and disaster recovery solutions with automated testing and rapid recovery capabilities.',
      icon: HardDrive,
      features: ['Automated backups', 'Disaster recovery planning', 'RTO/RPO optimization', 'Testing & validation', 'Cloud backup', 'Recovery automation'],
      price: 'Starting at $1,20 0/month',
      category: 'Data',
      benefits: ['Minimize data loss', 'Rapid recovery', 'Business continuity', 'Compliance support'],
      technologies: ['Veeam', 'Commvault', 'Rubrik', 'AWS Backup', 'Azure Backup', 'Google Cloud Backup'],
      contactInfo: 'Contac,
  t: kleber@ziontechgroup.com | +1 30 2 46 40950',
      color: 'text-cyan-40 0'
   },
    {title: 'Data Migration Services',
      description: 'Seamless data migration with zero do wntime, data validation, and comprehensive testing for all platforms.',
      icon: ArrowRight,
      features: ['Zero-do wntime migration', 'Data validation', 'Schema conversion', 'Performance testing', 'Rollback planning', 'Post-migration support'],
      price: 'Starting at $2,50 0/project',
      category: 'Data',
      benefits: ['Risk-free migration', 'Minimal do wntime', 'Data integrity', 'Cost savings'],
      technologies: ['AWS DMS', 'Azure Data Factory', 'Google Cloud Data Transfer', 'Custom Tools'],
      contactInfo: 'Contac,
  t: kleber@ziontechgroup.com | +1 30 2 46 40950',
      color: 'text-cyan-40 0'
   },
    // DevOps & Development
    {title: 'DevOps & CI/CD Implementation',
      description: 'Complete DevOps transformation with automated pipelines, infrastructure as code, and continuous monitoring.',
      icon: Code,
      features: ['CI/CD pipelines', 'Infrastructure as code', 'Container orchestration', 'Monitoring & logging', 'Security scanning', 'Automated testing'],
      price: 'Starting at $2,00 0/month',
      category: 'Development',
      benefits: ['Faster deployments', 'Improved quality', 'Reduced errors', 'Better collaboration'],
      technologies: ['Jenkins', 'GitLab CI', 'GitHub Actions', 'Kubernetes', 'Docker', 'Terraform'],
      contactInfo: 'Contac,
  t: kleber@ziontechgroup.com | +1 30 2 46 40950',
      color: 'text-cyan-40 0'
   },
    {title: 'Microservices Architecture',
      description: 'Modern microservices architecture design and implementation with containerization and service mesh.',
      icon: Cog,
      features: ['Architecture design', 'Service decomposition', 'API gateway', 'Service mesh', 'Monitoring', 'Scaling strategies'],
      price: 'Starting at $3,50 0/month',
      category: 'Development',
      benefits: ['Improved scalability', 'Better maintainability', 'Faster development', 'Technology flexibility'],
      technologies: ['Kubernetes', 'Istio', 'Docker', 'API Gateway', 'Service Mesh', 'Monitoring Tools'],
      contactInfo: 'Contac,
  t: kleber@ziontechgroup.com | +1 30 2 46 40950',
      color: 'text-cyan-40 0'
   },
    {title: 'API Development & Management',
      description: 'Comprehensive API development with design, implementation, security, and lifecycle management.',
      icon: Globe,
      features: ['API design', 'RESTful APIs', 'GraphQL', 'API security', 'Rate limiting', 'Documentation'],
      price: 'Starting at $1,80 0/month',
      category: 'Development',
      benefits: ['Better integration', 'Improved security', 'Enhanced performance', 'Developer experience'],
      technologies: ['Node.js', 'Python', 'Java', 'Kong', 'Apigee', 'AWS API Gateway'],
      contactInfo: 'Contac,
  t: kleber@ziontechgroup.com | +1 30 2 46 40950',
      color: 'text-cyan-40 0'
   },
    // IT Support & Management
    {title: 'Managed IT Services',
      description: 'Comprehensive IT management including help desk, system administration, and proactive maintenance.',
      icon: Users,
      features: ['2 4/7 help desk', 'Remote support', 'System administration', 'Patch management', 'User training', 'Asset management'],
      price: 'Starting at $1,00 0/month',
      category: 'Support',
      benefits: ['Reduced IT costs', 'Improved uptime', 'Expert support', 'Proactive maintenance'],
      technologies: ['RMM Tools', 'PSA Software', 'Remote Access', 'Monitoring Tools'],
      contactInfo: 'Contac,
  t: kleber@ziontechgroup.com | +1 30 2 46 40950',
      color: 'text-cyan-40 0'
   },
    {title: 'IT Strategy & Consulting',
      description: 'Strategic IT planning and consulting to align technology with business objectives and drive digital transformation.',
      icon: Target,
      features: ['IT strategy development', 'Technology assessment', 'Digital transformation', 'Vendo r evaluation', 'Budget planning', 'Roadmap creation'],
      price: 'Starting at $2,50 0/month',
      category: 'Consulting',
      benefits: ['Strategic alignment', 'Cost optimization', 'Risk reduction', 'Competitive advantage'],
      technologies: ['Strategy Frameworks', 'Assessment Tools', 'Planning Software'],
      contactInfo: 'Contac,
  t: kleber@ziontechgroup.com | +1 30 2 46 40950',
      color: 'text-cyan-40 0'
   },
    {title: 'IT Asset Management',
      description: 'Complete IT asset lifecycle management with tracking, optimization, and compliance reporting.',
      icon: Settings,
      features: ['Asset tracking', 'License management', 'Lifecycle planning', 'Cost optimization', 'Compliance reporting', 'Vendo r management'],
      price: 'Starting at $80 0/month',
      category: 'Management',
      benefits: ['Cost savings', 'Compliance assurance', 'Better planning', 'Reduced risks'],
      technologies: ['Asset Management Tools', 'License Management', 'CMDB', 'Reporting Tools'],
      contactInfo: 'Contac,
  t: kleber@ziontechgroup.com | +1 30 2 46 40950',
      color: 'text-cyan-40 0'
   },
    // Specialized Services
    {title: 'Microsoft 36 5 Migration & Management',
      description: 'Complete Microsoft 36 5 migration with security configuration, user training, and ongoing management.',
      icon: Mail,
      features: ['Migration planning', 'Data migration', 'Security configuration', 'User training', 'Ongoing management', 'Compliance setup'],
      price: 'Starting at $1,50 0/month',
      category: 'Cloud Services',
      benefits: ['Improved collaboration', 'Enhanced security', 'Cost savings', 'Better productivity'],
      technologies: ['Microsoft 36 5', 'Azure AD', 'PowerShell', 'Migration Tools'],
      contactInfo: 'Contac,
  t: kleber@ziontechgroup.com | +1 30 2 46 40950',
      color: 'text-cyan-40 0'
   },
    {title: 'VoIP & Unified Communications',
      description: 'Modern communication solutions with VoIP, video conferencing, and unified communications platforms.',
      icon: Phone,
      features: ['VoIP implementation', 'Video conferencing', 'Unified communications', 'Call center solutions', 'Integration services', 'Training'],
      price: 'Starting at $1,20 0/month',
      category: 'Communications',
      benefits: ['Cost savings', 'Improved collaboration', 'Better mobility', 'Enhanced features'],
      technologies: ['Cisco', 'Microsoft Teams', 'Zoom', '8 x8', 'RingCentral', 'Avaya'],
      contactInfo: 'Contac,
  t: kleber@ziontechgroup.com | +1 30 2 46 40950',
      color: 'text-cyan-40 0'
   },
    {title: 'IT Training & Certification',
      description: 'Comprehensive IT training programs for staff development and certification preparation.',
      icon: Award,
      features: ['Technical training', 'Certification prep', 'Security awareness', 'Software training', 'Custom programs', 'Online learning'],
      price: 'Starting at $50 0/month',
      category: 'Training',
      benefits: ['Improved skills', 'Better productivity', 'Reduced support needs', 'Career development'],
      technologies: ['Learning Management Systems', 'Virtual Labs', 'Certification Programs'],
      contactInfo: 'Contac,
  t: kleber@ziontechgroup.com | +1 30 2 46 40950',
      color: 'text-cyan-40 0'
   },
    {title: 'IT Project Management',
      description: 'Expert IT project management with planning, execution, and delivery of complex technology initiatives.',
      icon: Rocket,
      features: ['Project planning', 'Resource management', 'Risk assessment', 'Timeline management', 'Quality assurance', 'Stakeholder communication'],
      price: 'Starting at $2,00 0/month',
      category: 'Project Management',
      benefits: ['On-time delivery', 'Cost control', 'Quality assurance', 'Risk mitigation'],
      technologies: ['Project Management Tools', 'Agile Methodologies', 'Risk Management Tools'],
      contactInfo: 'Contac,
  t: kleber@ziontechgroup.com | +1 302 464 0950'
    }
  ]

  const categories = $2;
export default Page;
