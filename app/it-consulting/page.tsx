import React from 'react';
import { Helmet } from 'react-helmet-async';

const ItConsultingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>It Consulting - Zion Tech Group</title>
        <meta name="description" content="Advanced it consulting solutions and services" />
      </Helmet>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            It Consulting
 cursor/fix-errors-and-merge-to-main-6ce7
    // IT Infrastructure Services
    {
      id: 'it-infrastructure-design',
      name: 'IT Infrastructure Design & Implementation',
      description: 'Complete IT infrastructure design, deployment, and optimization for modern businesses',
      category: 'infrastructure',
      icon: Server,
      price: 'Starting at $5,000',;
      features: [,
        'Network architecture design',
        'Server deployment and configuration',
        'Storage solutions implementation',
        'Backup and disaster recovery setup',
'Security infrastructure deployment',
        'Monitoring and management tools',
        'Documentation and training', origin/cursor/analyze-improve-and-deploy-application-1247
        'Ongoing support and maintenance'
      ],
      benefits: [,
        'Scalable and reliable infrastructure',
'Improved system performance',
        'Enhanced security posture',
        'Reduced downtime and outages', origin/cursor/analyze-improve-and-deploy-application-1247
        'Future-proof technology stack'
      ],
      targetAudience: 'Small to large businesses, Startups, Enterprises',
      setupTime: '2-8 weeks',
      freeConsultation: 'Yes',
      support: '24/7 technical support',
      certifications: ['Cisco', 'Microsoft', 'VMware', 'AWS', 'Azure'],
      link: 'https://ziontechgroup.com/it-infrastructure-design',
      caseStudy: 'Manufacturing company reduced IT downtime by 95% with our infrastructure design',},
    {id: 'cloud-migration-services',
      name: 'Cloud Migration & Optimization',
      description: 'Seamless migration to cloud platforms with optimization for cost and performance',
      category: 'cloud',
      icon: Cloud,
      price: 'Starting at $3,000',;
      features: [,
        'Cloud readiness assessment',
        'Migration strategy development',
        'Data and application migration',
        'Cloud security implementation',
'Cost optimization analysis',
        'Performance tuning',
        'Disaster recovery setup', origin/cursor/analyze-improve-and-deploy-application-1247
        'Training and documentation'
      ],
      benefits: [,
        'Reduce IT costs by 30-50%',
'Improve scalability and flexibility',
        'Enhanced security and compliance',
        'Better disaster recovery capabilities', origin/cursor/analyze-improve-and-deploy-application-1247
        'Access to latest technologies'
      ],
      targetAudience: 'Businesses looking to modernize IT infrastructure',
      setupTime: '1-6 weeks',
      freeConsultation: 'Yes',
      support: 'Migration specialist and ongoing support',
      certifications: ['AWS', 'Azure', 'Google Cloud', 'VMware'],
      link: 'https://ziontechgroup.com/cloud-migration-services',
      caseStudy: 'Retail chain saved $2M annually by migrating to cloud infrastructure',},
    {id: 'cybersecurity-services',
      name: 'Cybersecurity Solutions',
      description: 'Comprehensive security assessment, implementation, and ongoing protection',
      category: 'security',
      icon: Shield,
      price: 'Starting at $2,500',;
      features: [,
        'Security risk assessment',
        'Penetration testing',
        'Security policy development',
        'Firewall and endpoint protection',
'Email security implementation',
        'Security awareness training',
        'Compliance auditing', origin/cursor/analyze-improve-and-deploy-application-1247
        'Incident response planning'
      ],
      benefits: [,
        'Protect against cyber threats',
'Ensure regulatory compliance',
        'Reduce security risks by 90%',
        'Improve incident response time', origin/cursor/analyze-improve-and-deploy-application-1247
        'Maintain customer trust'
      ],
      targetAudience: 'All businesses handling sensitive data',
      setupTime: '1-4 weeks',
      freeConsultation: 'Yes',
      support: 'Security specialist and 24/7 monitoring',
      certifications: ['CISSP', 'CISM', 'CEH', 'CompTIA Security+'],
      link: 'https://ziontechgroup.com/cybersecurity-services',
      caseStudy: 'Healthcare provider achieved 100% compliance with HIPAA regulations',},
    {id: 'network-design-optimization',
      name: 'Network Design & Optimization',
      description: 'High-performance network infrastructure design and optimization for reliability',
      category: 'networking',
      icon: Network,
      price: 'Starting at $2,000',;
      features: [,
        'Network architecture design',
        'Bandwidth optimization',
        'Quality of Service (QoS) setup',
        'Wireless network deployment',
'Network monitoring implementation',
        'Traffic analysis and optimization',
        'Redundancy and failover setup', origin/cursor/analyze-improve-and-deploy-application-1247
        'Performance tuning'
      ],
      benefits: [,
        'Improve network performance by 200%',
'Reduce network downtime',
        'Optimize bandwidth usage',
        'Enhance user experience', origin/cursor/analyze-improve-and-deploy-application-1247
        'Future-proof network design'
      ],
      targetAudience: 'Businesses with complex networking needs',
      setupTime: '1-3 weeks',
      freeConsultation: 'Yes',
      support: 'Network specialist and ongoing optimization',
      certifications: ['CCNA', 'CCNP', 'JNCIA', 'CompTIA Network+'],
      link: 'https://ziontechgroup.com/network-design-optimization',
      caseStudy: 'Law firm improved network speed by 300% and eliminated connectivity issues',},
    {id: 'database-management',
      name: 'Database Management & Optimization',
      description: 'Database design, implementation, optimization, and ongoing management',
      category: 'database',
      icon: Database,
      price: 'Starting at $1,500',;
      features: [,
        'Database design and architecture',
        'Performance optimization',
        'Backup and recovery setup',
        'Security implementation',
'Monitoring and alerting',
        'Query optimization',
        'Capacity planning', origin/cursor/analyze-improve-and-deploy-application-1247
        'Maintenance and updates'
      ],
      benefits: [,
        'Improve database performance by 150%',
'Ensure data integrity and security',
        'Reduce maintenance overhead',
        'Optimize storage usage', origin/cursor/analyze-improve-and-deploy-application-1247
        'Minimize downtime'
      ],
      targetAudience: 'Businesses with critical data requirements',
      setupTime: '1-2 weeks',
      freeConsultation: 'Yes',
      support: 'Database specialist and 24/7 monitoring',
      certifications: ['Oracle', 'Microsoft SQL Server', 'MySQL', 'PostgreSQL'],
      link: 'https://ziontechgroup.com/database-management',
      caseStudy: 'E-commerce platform improved query performance by 400% and reduced costs by 60%',},
    {id: 'it-support-services',
      name: 'Managed IT Support Services',
      description: 'Comprehensive IT support and management for ongoing operations',
      category: 'support',
      icon: Headphones,
      price: 'Starting at $99/user/month',
      features: [,
        '24/7 technical support',
        'Remote monitoring and management',
        'Proactive maintenance',
        'Software updates and patches',
'Hardware support and replacement',
        'User training and onboarding',
        'IT asset management', origin/cursor/analyze-improve-and-deploy-application-1247
        'Help desk services'
      ],
      benefits: [,
        'Reduce IT downtime by 80%',
'Lower IT support costs',
        'Improve user productivity',
        'Proactive issue resolution', origin/cursor/analyze-improve-and-deploy-application-1247
        'Focus on core business activities'
      ],
      targetAudience: 'Small to medium businesses without dedicated IT staff',
      setupTime: '1 week',
      freeConsultation: 'Yes',
      support: 'Dedicated support team',
      certifications: ['Microsoft', 'CompTIA', 'Cisco', 'VMware'],
      link: 'https://ziontechgroup.com/it-support-services',
      caseStudy: 'Marketing agency reduced IT issues by 90% and improved employee productivity',},
    {id: 'software-development',
      name: 'Custom Software Development',
      description: 'Tailored software solutions built to meet specific business requirements',
      category: 'development',
      icon: Code,
      price: 'Starting at $5,000',;
      features: [,
        'Requirements analysis',
        'Custom application development',
        'Web and mobile app development',
        'API development and integration',
'Database design and implementation',
        'Testing and quality assurance',
        'Deployment and maintenance', origin/cursor/analyze-improve-and-deploy-application-1247
        'User training and documentation'
      ],
      benefits: [,
        'Streamline business processes',
'Improve operational efficiency',
        'Gain competitive advantage',
        'Reduce manual work', origin/cursor/analyze-improve-and-deploy-application-1247
        'Scale with business growth'
      ],
      targetAudience: 'Businesses needing custom software solutions',
      setupTime: '4-16 weeks',
      freeConsultation: 'Yes',
      support: 'Development team and ongoing maintenance',
      technologies: ['React', 'Node.js', 'Python', 'Java', 'C#', 'PHP', 'Mobile'],
      link: 'https://ziontechgroup.com/software-development',
      caseStudy: 'Logistics company automated 80% of manual processes with custom software',},
    {id: 'it-consulting',
      name: 'Strategic IT Consulting',
      description: 'Technology strategy and roadmap development for digital transformation',
      category: 'consulting',
      icon: Briefcase,
      price: 'Starting at $200/hour',
      features: [,
        'IT strategy development',
        'Technology roadmap planning',
        'Digital transformation consulting',
        'Vendor evaluation and selection',
'Cost-benefit analysis',
        'Risk assessment and mitigation',
        'Change management planning', origin/cursor/analyze-improve-and-deploy-application-1247
        'Implementation guidance'
      ],
      benefits: [,
        'Align IT with business goals',
'Optimize technology investments',
        'Reduce implementation risks',
        'Accelerate digital transformation', origin/cursor/analyze-improve-and-deploy-application-1247
        'Improve ROI on technology'
      ],
      targetAudience: 'Businesses planning technology initiatives',
      setupTime: '1-4 weeks',
      freeConsultation: 'Yes',
      support: 'Senior consultant and ongoing guidance',
      certifications: ['PMP', 'ITIL', 'COBIT', 'TOGAF'],
      link: 'https://ziontechgroup.com/it-consulting',
      caseStudy: 'Manufacturing company achieved 40% cost reduction through strategic IT planning',},
    {id: 'disaster-recovery',
      name: 'Disaster Recovery & Business Continuity',
      description: 'Comprehensive disaster recovery planning and implementation',
      category: 'recovery',
      icon: RefreshCw,
      price: 'Starting at $3,500',;
      features: [,
        'Business impact analysis',
        'Recovery time objective planning',
        'Backup strategy implementation',
        'Disaster recovery testing',
'Business continuity planning',
        'Cloud-based recovery solutions',
        'Documentation and procedures', origin/cursor/analyze-improve-and-deploy-application-1247
        'Regular testing and updates'
      ],
      benefits: [,
        'Minimize business disruption',
'Ensure rapid recovery',
        'Protect critical data',
        'Maintain customer service', origin/cursor/analyze-improve-and-deploy-application-1247
        'Comply with regulations'
      ],
      targetAudience: 'Businesses requiring high availability',
      setupTime: '2-6 weeks',
      freeConsultation: 'Yes',
      support: 'Recovery specialist and ongoing testing',
      certifications: ['CBCP', 'DRII', 'ITIL', 'ISO 22301'],
      link: 'https://ziontechgroup.com/disaster-recovery',
      caseStudy: 'Financial services firm achieved 99.9% uptime with our disaster recovery solution',},
    {id: 'compliance-auditing',
      name: 'IT Compliance & Auditing',
      description: 'Compliance assessment and implementation for various industry standards',
      category: 'compliance',
      icon: CheckSquare,
      price: 'Starting at $2,000',;
      features: [,
        'Compliance gap analysis',
        'Policy and procedure development',
        'Security control implementation',
        'Audit preparation and support',
'Training and awareness programs',
        'Ongoing compliance monitoring',
        'Documentation and reporting', origin/cursor/analyze-improve-and-deploy-application-1247
        'Remediation planning'
      ],
      benefits: [,
        'Ensure regulatory compliance',
'Reduce audit findings',
        'Improve security posture',
        'Avoid penalties and fines', origin/cursor/analyze-improve-and-deploy-application-1247
        'Build customer trust'
      ],
      targetAudience: 'Healthcare, Finance, Government, Education sectors',
      setupTime: '2-8 weeks',
      freeConsultation: 'Yes',
      support: 'Compliance specialist and ongoing monitoring',
      standards: ['HIPAA', 'SOX', 'PCI-DSS', 'GDPR', 'ISO 27001', 'NIST'],
      link: 'https://ziontechgroup.com/compliance-auditing',
 origin/cursor/analyze-improve-and-deploy-application-1247
      {/* Hero Section */}</div>
      <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
              <p className="text-xl text-gray-300">Section description</p>
            </div>
          </div>
        </section>
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20" aria-hidden="true"></div>
        <div className="relative z-10 max-w-7xl mx-auto text-center"></div>
          <h1 className="text-5xl md: text-7xl font-bold text-white mb-6 leading-tight cyber-text neon-pulse"></h1>,
            Professional <span className="holographic-text">IT Services</span>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232
          </h1>
<p>
            Comprehensive IT solutions designed to optimize your technology infrastructure,
            enhance security, and drive business growth. Expert consulting and implementation. origin/cursor/analyze-improve-and-deploy-application-1247
          </p>
        </div>
</section>
      {/* Search and Filter Section */};
      <section className="py-12 px-4 sm:px-6 lg:px-8"></section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="flex flex-col lg:flex-row gap-6 mb-8"></div>
            {/* Search */}</div>
            <div className="flex-1"></div>
              <div className="relative"></div>
                <Search>
                <input
                  type="text"
                  placeholder="Search IT services..."
 origin/cursor/analyze-improve-and-deploy-application-1247
 origin/cursor/analyze-improve-and-deploy-application-1507
