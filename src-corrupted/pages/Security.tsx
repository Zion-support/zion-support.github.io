import React from 'react';
import { motion  } from 'framer-motion';
import { Shield, 
  Lock, 
  Eye, 
  CheckCircle, 
  AlertTriangle, 
  Server, 
  Network, 
  Database, 
  Key, 
  Fingerprint,
  Globe,
  Users,
  Clock,
  Award,
  FileText,
  Security,
  Encryption,
  Shield,
  AlertTriangle,
  AlertCircle,
  Code,
  Monitor,
  Smartphone,
  Cloud,
  Zap,
  Search,
  Phone,
  Mail
 } from 'lucide-react';
import { SEO  } from '../components/SEO';

export default function Security() {
  const securityFeatures = [
    {
      category: 'Data Protection',
      icon: Lock,
      color: 'from-blue-500 to-cyan-600',
      features: [
        'End-to-end encryption for all data',
        'AES-256 encryption at rest and in transit',
        'Secure key management with HSM',
        'Data loss prevention (DLP) systems',
        'Automatic data backup and recovery',
        'Comprehensive audit logging'
      ]
    },
    {
      category: 'Network Security',
      icon: Network,
      color: 'from-green-500 to-emerald-600',
      features: [
        'Zero-trust network architecture',
        'Advanced firewall protection',
        'DDoS mitigation and protection',
        'Intrusion detection and prevention',
        'Secure VPN access for employees',
        'Real-time threat monitoring'
      ]
    },
    {
      category: 'Application Security',
      icon: Code,
      color: 'from-purple-500 to-pink-600',
      features: [
        'Secure software development lifecycle',
        'Regular security code reviews',
        'Automated vulnerability scanning',
        'Penetration testing and assessments',
        'API security and rate limiting',
        'Input validation and sanitization'
      ]
    },
    {
      category: 'Access Control',
      icon: Key,
      color: 'from-orange-500 to-red-600',
      features: [
        'Multi-factor authentication (MFA)',
        'Role-based access control (RBAC)',
        'Single sign-on (SSO) integration',
        'Privileged access management',
        'Session management and timeout',
        'Biometric authentication support'
      ]
    }
  ];

  const certifications = [
    {
      name: 'ISO 27001',
      description: 'Information Security Management System',
      status: 'Certified',
      icon: FileText,
      color: 'from-green-500 to-emerald-600',
      details: 'International standard for information security management'
    },
    {
      name: 'SOC 2 Type II',
      description: 'Service Organization Control 2',
      status: 'Compliant',
      icon: Award,
      color: 'from-blue-500 to-cyan-600',
      details: 'AICPA trust services criteria compliance'
    },
    {
      name: 'GDPR',
      description: 'General Data Protection Regulation',
      status: 'Compliant',
      icon: Shield,
      color: 'from-purple-500 to-pink-600',
      details: 'EU data protection and privacy regulation'
    },
    {
      name: 'HIPAA',
      description: 'Health Insurance Portability and Accountability Act',
      status: 'Compliant',
      icon: Users,
      color: 'from-orange-500 to-red-600',
      details: 'Healthcare data protection standards'
    }
  ];

  const securityPractices = [
    {
      title: 'Regular Security Audits',
      description: 'Comprehensive security assessments conducted quarterly',
      icon: Monitor,
      color: 'from-blue-500 to-cyan-600',
      frequency: 'Quarterly',
      scope: 'Full infrastructure and applications'
    },
    {
      title: 'Penetration Testing',
      description: 'Ethical hacking to identify vulnerabilities',
      icon: Bug,
      color: 'from-green-500 to-emerald-600',
      frequency: 'Bi-annually',
      scope: 'External and internal systems'
    },
    {
      title: 'Vulnerability Management',
      description: 'Continuous monitoring and patching of security issues',
      icon: Virus,
      color: 'from-purple-500 to-pink-600',
      frequency: 'Continuous',
      scope: 'All systems and dependencies'
    },
    {
      title: 'Security Training',
      description: 'Regular security awareness training for all employees',
      icon: Users,
      color: 'from-orange-500 to-red-600',
      frequency: 'Monthly',
      scope: 'All staff and contractors'
    }
  ];

  const incidentResponse = [
    {
      phase: 'Detection',
      description: 'Automated monitoring and alerting systems',
      icon: Eye,
      color: 'from-blue-500 to-cyan-600',
      timeframe: 'Real-time',
      tools: ['SIEM', 'EDR', 'Network monitoring']
    },
    {
      phase: 'Analysis',
      description: 'Rapid threat assessment and classification',
      icon: MagnifyingGlass,
      color: 'from-green-500 to-emerald-600',
      timeframe: '< 15 minutes',
      tools: ['Threat intelligence', 'Forensic analysis', 'Expert team']
    },
    {
      phase: 'Containment',
      description: 'Immediate isolation and threat neutralization',
      icon: Lock,
      color: 'from-purple-500 to-pink-600',
      timeframe: '< 30 minutes',
      tools: ['Network segmentation', 'Access control', 'System isolation']
    },
    {
      phase: 'Recovery',
      description: 'System restoration and service recovery',
      icon: Zap,
      color: 'from-orange-500 to-red-600',
      timeframe: '< 2 hours',
      tools: ['Backup systems', 'Redundancy', 'Failover procedures']
    }
  ];

  const securityTechnologies = [
    {
      name: 'Next-Gen Firewalls',
      description: 'Advanced threat protection and deep packet inspection',
      icon: Firewall,
      color: 'from-blue-500 to-cyan-600',
      vendor: 'Palo Alto Networks, Fortinet'
    },
    {
      name: 'Endpoint Detection & Response',
      description: 'Real-time endpoint monitoring and threat response',
      icon: Monitor,
      color: 'from-green-500 to-emerald-600',
      vendor: 'CrowdStrike, SentinelOne'
    },
    {
      name: 'Security Information & Event Management',
      description: 'Centralized security monitoring and correlation',
      icon: Server,
      color: 'from-purple-500 to-pink-600',
      vendor: 'Splunk, IBM QRadar'
    },
    {
      name: 'Identity & Access Management',
      description: 'Comprehensive identity governance and administration',
      icon: Fingerprint,
      color: 'from-orange-500 to-red-600',
      vendor: 'Okta, Microsoft Azure AD'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>Security | Zion Tech Group</title>
        <meta name="description" content="Security - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">Security</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};

export default Security;
