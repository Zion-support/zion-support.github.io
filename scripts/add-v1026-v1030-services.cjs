const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'app', 'data', 'servicesData.json');
const servicesData = JSON.parse(fs.readFileSync(filePath, 'utf8'));

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709'
};

const newServices = [
  // V1026 - Email Auto-Categorizer Services
  {
    id: 'smart-email-classification',
    name: 'Smart Email Classification',
    category: 'AI Services',
    description: 'AI-powered email classification that automatically categorizes incoming emails by type, priority, and department with 95%+ accuracy.',
    price: 149,
    features: ['Automatic categorization', 'Priority detection', 'Department routing', 'Custom categories', 'Confidence scoring', 'Learning from feedback'],
    contactInfo
  },
  {
    id: 'intelligent-email-routing',
    name: 'Intelligent Email Routing',
    category: 'IT Services',
    description: 'Route emails to the right team or person automatically based on content analysis, sender history, and organizational rules.',
    price: 199,
    features: ['Smart routing rules', 'Multi-department support', 'Escalation paths', 'Load balancing', 'Response time tracking', 'Custom workflows'],
    contactInfo
  },
  {
    id: 'email-priority-detection',
    name: 'Email Priority Detection',
    category: 'AI Services',
    description: 'Automatically detect email priority levels (urgent, high, normal, low) using AI analysis of content, sender, and context.',
    price: 129,
    features: ['4-level priority system', 'Urgency detection', 'SLA tracking', 'Priority escalation', 'Custom priority rules', 'Real-time alerts'],
    contactInfo
  },
  {
    id: 'email-tag-automation',
    name: 'Email Tag Automation',
    category: 'AI Services',
    description: 'Automatically generate and apply relevant tags to emails based on content, attachments, and metadata analysis.',
    price: 99,
    features: ['Auto-tagging', 'Smart tag suggestions', 'Custom tag rules', 'Tag analytics', 'Bulk tag management', 'Tag-based search'],
    contactInfo
  },
  {
    id: 'email-department-sorting',
    name: 'Email Department Sorting',
    category: 'IT Services',
    description: 'Automatically sort emails into department-specific queues (sales, support, billing, HR, legal) with intelligent classification.',
    price: 179,
    features: ['8 department categories', 'Custom departments', 'Queue management', 'Department analytics', 'Cross-department routing', 'SLA monitoring'],
    contactInfo
  },

  // V1027 - Email Signature Manager Services
  {
    id: 'professional-email-signatures',
    name: 'Professional Email Signatures',
    category: 'IT Services',
    description: 'Create and manage professional email signatures with dynamic content, branding consistency, and compliance tracking.',
    price: 89,
    features: ['Signature templates', 'Dynamic content', 'Brand consistency', 'Mobile optimization', 'Legal compliance', 'Analytics tracking'],
    contactInfo
  },
  {
    id: 'signature-template-manager',
    name: 'Signature Template Manager',
    category: 'IT Services',
    description: 'Centralized management of email signature templates for organizations with role-based customization and version control.',
    price: 119,
    features: ['Template library', 'Role-based signatures', 'Version control', 'Bulk updates', 'Approval workflows', 'Template analytics'],
    contactInfo
  },
  {
    id: 'signature-compliance-tracker',
    name: 'Signature Compliance Tracker',
    category: 'Compliance Services',
    description: 'Track and enforce email signature compliance with legal requirements (GDPR, CAN-SPAM) and company policies.',
    price: 149,
    features: ['Legal compliance checks', 'Policy enforcement', 'Audit trails', 'Compliance reports', 'Automated alerts', 'Regulation updates'],
    contactInfo
  },
  {
    id: 'signature-analytics-platform',
    name: 'Signature Analytics Platform',
    category: 'Analytics Services',
    description: 'Track email signature performance with detailed analytics on clicks, impressions, and engagement metrics.',
    price: 129,
    features: ['Click tracking', 'Impression analytics', 'Engagement metrics', 'A/B testing', 'Performance reports', 'ROI tracking'],
    contactInfo
  },
  {
    id: 'dynamic-signature-content',
    name: 'Dynamic Signature Content',
    category: 'AI Services',
    description: 'AI-powered dynamic content in email signatures that personalizes based on recipient, time, and campaign data.',
    price: 159,
    features: ['Personalized content', 'Time-based offers', 'Campaign integration', 'Dynamic CTAs', 'Recipient targeting', 'Performance optimization'],
    contactInfo
  },

  // V1028 - Email Migration Assistant Services
  {
    id: 'email-platform-migration',
    name: 'Email Platform Migration',
    category: 'IT Services',
    description: 'Seamless migration between email platforms (Gmail, Outlook, Exchange, IMAP) with zero data loss and minimal downtime.',
    price: 499,
    features: ['Multi-platform support', 'Zero data loss', 'Folder mapping', 'Contact migration', 'Calendar sync', 'Progress tracking'],
    contactInfo
  },
  {
    id: 'email-migration-planner',
    name: 'Email Migration Planner',
    category: 'IT Services',
    description: 'Comprehensive migration planning tool that analyzes source data, estimates time, and creates detailed migration roadmaps.',
    price: 299,
    features: ['Data analysis', 'Time estimation', 'Risk assessment', 'Migration roadmap', 'Resource planning', 'Cost estimation'],
    contactInfo
  },
  {
    id: 'email-data-validation',
    name: 'Email Data Validation',
    category: 'IT Services',
    description: 'Validate email data integrity before and after migration with comprehensive checksums and data verification.',
    price: 199,
    features: ['Data integrity checks', 'Checksum validation', 'Duplicate detection', 'Corruption detection', 'Validation reports', 'Data recovery'],
    contactInfo
  },
  {
    id: 'migration-progress-monitor',
    name: 'Migration Progress Monitor',
    category: 'IT Services',
    description: 'Real-time monitoring of email migration progress with detailed statistics, error tracking, and completion estimates.',
    price: 179,
    features: ['Real-time progress', 'Error tracking', 'Speed monitoring', 'Completion estimates', 'Detailed logs', 'Alert notifications'],
    contactInfo
  },
  {
    id: 'post-migration-verification',
    name: 'Post-Migration Verification',
    category: 'IT Services',
    description: 'Comprehensive post-migration verification to ensure all emails, contacts, and settings transferred correctly.',
    price: 249,
    features: ['Complete verification', 'Data comparison', 'Missing item detection', 'Functionality testing', 'Verification reports', 'Issue resolution'],
    contactInfo
  },

  // V1029 - Mobile Email Optimizer Services
  {
    id: 'mobile-email-optimization',
    name: 'Mobile Email Optimization',
    category: 'AI Services',
    description: 'AI-powered optimization of emails for mobile devices with responsive design, touch-friendly CTAs, and mobile-first experience.',
    price: 169,
    features: ['Responsive design', 'Touch-friendly CTAs', 'Mobile scoring', 'Device testing', 'Performance optimization', 'Mobile analytics'],
    contactInfo
  },
  {
    id: 'email-responsive-design',
    name: 'Email Responsive Design',
    category: 'IT Services',
    description: 'Automatic conversion of emails to responsive designs that look perfect on all mobile devices and screen sizes.',
    price: 199,
    features: ['Auto-responsive conversion', 'Multi-device support', 'Breakpoint optimization', 'Image scaling', 'Font optimization', 'Layout preservation'],
    contactInfo
  },
  {
    id: 'mobile-email-testing',
    name: 'Mobile Email Testing',
    category: 'IT Services',
    description: 'Test how emails render across 50+ mobile devices and email clients with detailed screenshots and issue reports.',
    price: 149,
    features: ['50+ device testing', 'Screenshot comparison', 'Issue detection', 'Performance metrics', 'Compatibility reports', 'Fix recommendations'],
    contactInfo
  },
  {
    id: 'touch-target-optimization',
    name: 'Touch Target Optimization',
    category: 'AI Services',
    description: 'AI optimization of buttons, links, and interactive elements for perfect touch targets on mobile devices.',
    price: 129,
    features: ['Touch target analysis', 'Size optimization', 'Spacing adjustment', 'Accessibility compliance', 'Interaction testing', 'Conversion optimization'],
    contactInfo
  },
  {
    id: 'mobile-email-analytics',
    name: 'Mobile Email Analytics',
    category: 'Analytics Services',
    description: 'Detailed analytics on mobile email performance including open rates, engagement, and device-specific metrics.',
    price: 159,
    features: ['Mobile open rates', 'Device analytics', 'Engagement tracking', 'Performance metrics', 'User behavior', 'Optimization insights'],
    contactInfo
  },

  // V1030 - Email Training Platform Services
  {
    id: 'email-skills-training',
    name: 'Email Skills Training Platform',
    category: 'Training Services',
    description: 'Interactive training platform to improve team email skills with personalized learning paths and progress tracking.',
    price: 299,
    features: ['6 training modules', 'Skill assessments', 'Learning paths', 'Progress tracking', 'Certifications', 'Team analytics'],
    contactInfo
  },
  {
    id: 'email-etiquette-course',
    name: 'Email Etiquette Course',
    category: 'Training Services',
    description: 'Comprehensive course on professional email etiquette covering tone, formality, response times, and best practices.',
    price: 149,
    features: ['Professional tone', 'Formality levels', 'Response timing', 'Threading etiquette', 'Cultural sensitivity', 'Practical exercises'],
    contactInfo
  },
  {
    id: 'email-security-training',
    name: 'Email Security Awareness Training',
    category: 'Training Services',
    description: 'Security awareness training to help teams identify phishing, malware, and social engineering attacks via email.',
    price: 199,
    features: ['Phishing detection', 'Malware awareness', 'Password security', '2FA training', 'Incident reporting', 'Simulation exercises'],
    contactInfo
  },
  {
    id: 'email-productivity-training',
    name: 'Email Productivity Training',
    category: 'Training Services',
    description: 'Training on email productivity tools and techniques including Inbox Zero, batching, filters, and automation.',
    price: 179,
    features: ['Inbox Zero method', 'Email batching', 'Filter mastery', 'Automation skills', 'Time management', 'Tool integration'],
    contactInfo
  },
  {
    id: 'advanced-email-communication',
    name: 'Advanced Email Communication',
    category: 'Training Services',
    description: 'Advanced training on handling difficult conversations, negotiations, and sensitive topics via email.',
    price: 229,
    features: ['Conflict resolution', 'Negotiation skills', 'Sensitive topics', 'Cross-cultural communication', 'Legal considerations', 'Case studies'],
    contactInfo
  }
];

// Add new services
servicesData.push(...newServices);

// Write back to file
fs.writeFileSync(filePath, JSON.stringify(servicesData, null, 2));

console.log(`✅ Added ${newServices.length} new services. Total services: ${servicesData.length}`);
