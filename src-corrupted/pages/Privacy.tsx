<<<<<<< HEAD
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Lock, 
  Eye, 
  Database, 
  Users, 
  Globe, 
  CheckCircle,
  AlertTriangle,
  FileText,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Clock,
  Settings,
  Download,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Search,
  Filter,
  BookOpen,
  MessageSquare,
  ArrowRight,
  Sparkles,
  Cpu,
  Wifi,
  Bot,
  Workflow,
  Heart,
  Leaf,
  Award,
  Star,
  TrendingUp,
  Zap,
  Brain,
  Cloud,
  BarChart3,
  Code,
  Server,
  Chip,
  ShieldCheck,
  Bot as BotIcon,
  Workflow as WorkflowIcon,
  Eye as EyeIcon,
  Sparkles as SparklesIcon,
  Trash2,
  Pause
} from 'lucide-react';
import { SEO } from '../components/SEO';

export default function Privacy() {
  const [openSections, setOpenSections] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleSection = (sectionId: string) => {
    setOpenSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const privacyPrinciples = [
    {
      icon: Shield,
      title: 'Data Protection',
      description: 'We implement industry-standard security measures to protect your personal information.',
      details: 'Our security protocols include encryption, access controls, and regular security audits to ensure your data remains protected at all times.'
    },
    {
      icon: Lock,
      title: 'Privacy by Design',
      description: 'Privacy considerations are built into every aspect of our services and systems.',
      details: 'From the initial design phase to ongoing development, we prioritize privacy and data protection in all our solutions.'
    },
    {
      icon: Eye,
      title: 'Transparency',
      description: 'We are clear about what data we collect, how we use it, and your rights.',
      details: 'We provide clear, understandable information about our data practices and maintain open communication about privacy matters.'
    },
    {
      icon: Users,
      title: 'User Control',
      description: 'You have full control over your personal data and can manage it at any time.',
      details: 'Our user portal provides easy access to view, modify, or delete your personal information as needed.'
    }
  ];

  const dataCategories = [
    {
      title: 'Personal Information',
      description: 'Name, email address, phone number, and company information',
      examples: ['Contact details', 'Account information', 'Business details', 'Professional credentials'],
      retention: '7 years',
      purpose: 'Service delivery and account management'
    },
    {
      title: 'Usage Data',
      description: 'Information about how you use our services and website',
      examples: ['Login times', 'Feature usage', 'Performance metrics', 'User preferences'],
      retention: '3 years',
      purpose: 'Service improvement and user experience optimization'
    },
    {
      title: 'Technical Data',
      description: 'Device information and technical specifications',
      examples: ['IP address', 'Browser type', 'Device information', 'System performance'],
      retention: '1 year',
      purpose: 'Security monitoring and technical support'
    },
    {
      title: 'Communication Data',
      description: 'Records of our interactions and communications',
      examples: ['Support tickets', 'Email correspondence', 'Chat logs', 'Meeting notes'],
      retention: '5 years',
      purpose: 'Customer support and relationship management'
    },
    {
      title: 'Financial Data',
      description: 'Payment information and billing details',
      examples: ['Payment methods', 'Billing history', 'Transaction records', 'Invoice data'],
      retention: '10 years',
      purpose: 'Financial compliance and record keeping'
    },
    {
      title: 'Analytics Data',
      description: 'Aggregated usage statistics and performance metrics',
      examples: ['Service performance', 'User behavior patterns', 'System health metrics', 'Business intelligence'],
      retention: '2 years',
      purpose: 'Business analytics and service optimization'
    }
  ];

  const dataUses = [
    {
      purpose: 'Service Delivery',
      description: 'To provide and maintain our services, process transactions, and deliver support.',
      examples: ['Account creation', 'Service provisioning', 'Payment processing', 'Technical support'],
      legalBasis: 'Contract performance'
    },
    {
      purpose: 'Communication',
      description: 'To send important updates, respond to inquiries, and provide customer support.',
      examples: ['Service notifications', 'Support responses', 'Product updates', 'Marketing communications'],
      legalBasis: 'Legitimate interest'
    },
    {
      purpose: 'Improvement',
      description: 'To analyze usage patterns and improve our services and user experience.',
      examples: ['Feature development', 'Performance optimization', 'User experience enhancement', 'Service innovation'],
      legalBasis: 'Legitimate interest'
    },
    {
      purpose: 'Security',
      description: 'To protect against fraud, abuse, and ensure the security of our services.',
      examples: ['Threat detection', 'Fraud prevention', 'Access control', 'Incident response'],
      legalBasis: 'Legal obligation'
    },
    {
      purpose: 'Compliance',
      description: 'To meet legal and regulatory requirements and industry standards.',
      examples: ['Audit trails', 'Regulatory reporting', 'Compliance monitoring', 'Legal obligations'],
      legalBasis: 'Legal obligation'
    },
    {
      purpose: 'Business Operations',
      description: 'To manage our business operations and strategic planning.',
      examples: ['Financial planning', 'Business analytics', 'Strategic decision making', 'Performance measurement'],
      legalBasis: 'Legitimate interest'
    }
  ];

  const userRights = [
    {
      right: 'Access',
      description: 'Request a copy of your personal data that we hold.',
      process: 'Submit a request through our privacy portal or contact our privacy team directly.',
      timeframe: '30 days',
      icon: Eye
    },
    {
      right: 'Rectification',
      description: 'Request correction of inaccurate or incomplete personal data.',
      process: 'Update your information through your account settings or contact us for assistance.',
      timeframe: '15 days',
      icon: Settings
    },
    {
      right: 'Erasure',
      description: 'Request deletion of your personal data under certain circumstances.',
      process: 'Submit a deletion request through our privacy portal with verification of your identity.',
      timeframe: '30 days',
      icon: Trash2
    },
    {
      right: 'Portability',
      description: 'Request transfer of your data to another service provider.',
      process: 'Request data export in a machine-readable format through our privacy portal.',
      timeframe: '30 days',
      icon: Download
    },
    {
      right: 'Restriction',
      description: 'Request limitation of how we process your personal data.',
      process: 'Contact our privacy team to discuss and implement processing restrictions.',
      timeframe: '15 days',
      icon: Pause
    },
    {
      right: 'Objection',
      description: 'Object to processing of your personal data for specific purposes.',
      process: 'Submit an objection through our privacy portal or contact our privacy team.',
      timeframe: '15 days',
      icon: AlertTriangle
    }
  ];

  const securityMeasures = [
    {
      category: 'Technical Security',
      measures: [
        {
          title: 'Encryption',
          description: 'All data is encrypted in transit and at rest using AES-256 encryption',
          status: 'Active',
          icon: Lock
        },
        {
          title: 'Access Controls',
          description: 'Multi-factor authentication and role-based access controls',
          status: 'Active',
          icon: Shield
        },
        {
          title: 'Network Security',
          description: 'Firewalls, intrusion detection, and DDoS protection',
          status: 'Active',
          icon: Wifi
        }
      ]
    },
    {
      category: 'Operational Security',
      measures: [
        {
          title: 'Regular Audits',
          description: 'Quarterly security assessments and compliance monitoring',
          status: 'Active',
          icon: CheckCircle
        },
        {
          title: 'Employee Training',
          description: 'Regular privacy and security awareness training',
          status: 'Active',
          icon: Users
        },
        {
          title: 'Incident Response',
          description: '24/7 security monitoring and incident response procedures',
          status: 'Active',
          icon: AlertTriangle
        }
      ]
    },
    {
      category: 'Compliance & Standards',
      measures: [
        {
          title: 'SOC 2 Type II',
          description: 'Annual third-party security and availability audits',
          status: 'Certified',
          icon: Award
        },
        {
          title: 'GDPR Compliance',
          description: 'Full compliance with European data protection regulations',
          status: 'Compliant',
          icon: Globe
        },
        {
          title: 'ISO 27001',
          description: 'Information security management system certification',
          status: 'Certified',
          icon: ShieldCheck
        }
      ]
    }
  ];

  const complianceFrameworks = [
    {
      name: 'GDPR (General Data Protection Regulation)',
      region: 'European Union',
      status: 'Fully Compliant',
      lastAudit: '2024-06-15',
      nextAudit: '2025-06-15',
      description: 'Comprehensive data protection and privacy regulation for EU citizens'
    },
    {
      name: 'CCPA (California Consumer Privacy Act)',
      region: 'California, USA',
      status: 'Fully Compliant',
      lastAudit: '2024-05-20',
      nextAudit: '2025-05-20',
      description: 'Consumer privacy protection law for California residents'
    },
    {
      name: 'SOC 2 Type II',
      region: 'Global',
      status: 'Certified',
      lastAudit: '2024-03-10',
      nextAudit: '2025-03-10',
      description: 'Security, availability, and confidentiality controls certification'
    },
    {
      name: 'ISO 27001',
      region: 'Global',
      status: 'Certified',
      lastAudit: '2024-02-28',
      nextAudit: '2025-02-28',
      description: 'Information security management system standard'
    },
    {
      name: 'HIPAA',
      region: 'United States',
      status: 'Compliant',
      lastAudit: '2024-04-12',
      nextAudit: '2025-04-12',
      description: 'Health Insurance Portability and Accountability Act compliance'
    }
  ];

  const dataRetentionPolicies = [
    {
      category: 'Account Data',
      retention: '7 years',
      reason: 'Legal and business record keeping requirements',
      exceptions: 'May be retained longer for active accounts or legal proceedings'
    },
    {
      category: 'Transaction Data',
      retention: '10 years',
      reason: 'Financial and tax compliance requirements',
      exceptions: 'Required for audit and regulatory purposes'
    },
    {
      category: 'Communication Data',
      retention: '5 years',
      reason: 'Customer relationship and support history',
      exceptions: 'May be retained for legal or compliance purposes'
    },
    {
      category: 'Analytics Data',
      retention: '2 years',
      reason: 'Business intelligence and service improvement',
      exceptions: 'Aggregated data may be retained longer for trend analysis'
    },
    {
      category: 'Security Logs',
      retention: '3 years',
      reason: 'Security monitoring and incident investigation',
      exceptions: 'May be retained longer for ongoing security investigations'
    }
  ];

  const contactMethods = [
    {
      method: 'Privacy Team Email',
      contact: 'privacy@ziontechgroup.com',
      response: 'Within 24 hours',
      description: 'Direct communication with our privacy team',
      icon: Mail
    },
    {
      method: 'Privacy Hotline',
      contact: '+1 (302) 464-0950',
      response: 'Immediate',
      description: '24/7 privacy and security incident reporting',
      icon: Phone
    },
    {
      method: 'Privacy Portal',
      contact: 'privacy.ziontechgroup.com',
      response: 'Self-service',
      description: 'Online privacy rights management and requests',
      icon: Globe
    },
    {
      method: 'Data Protection Officer',
      contact: 'dpo@ziontechgroup.com',
      response: 'Within 48 hours',
      description: 'Direct contact with our Data Protection Officer',
      icon: Shield
    }
  ];

  // Filter content based on search query
  const filteredContent = {
    principles: privacyPrinciples.filter(item => 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
    ),
    categories: dataCategories.filter(item => 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
    ),
    uses: dataUses.filter(item => 
      item.purpose.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
    ),
    rights: userRights.filter(item => 
      item.right.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  };
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee

const Privacy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>Privacy | Zion Tech Group</title>
        <meta name="description" content="Privacy - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">Privacy</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
