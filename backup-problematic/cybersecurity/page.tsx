import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Shield, Lock, Eye, AlertTriangle, Target, BarChart, Brain, Settings, Globe, Database } from 'lucide-react';

const CybersecurityPage: React.FC = () => {
 const securityServices = [
 {
 title: 'Advanced Threat Detection',
 description: 'AI-powered threat detection and response systems that identify and neutralize cyber threats in real-time.',
 icon: '🛡️',
 price: 'Starting at $4,500/month',
 features: ['Real-time threat monitoring', 'AI-powered detection', 'Automated response', 'Threat intelligence', 'Incident investigation'],
 benefits: ['Prevent 99% of cyber attacks', 'Reduce response time by 90%', 'Minimize security incidents'],
 marketPrice: '$8,000-25,000/month',
 category: 'Threat Detection',
 technologies: ['SIEM', 'EDR', 'XDR', 'SOAR', 'AI/ML Security']
 },
 {
 title: 'Zero Trust Security Architecture',
 description: 'Comprehensive zero trust implementation with identity verification and micro-segmentation.',
 icon: '🔐',
 price: 'Starting at $6,500/month',
 features: ['Identity verification', 'Micro-segmentation', 'Least privilege access', 'Continuous monitoring', 'Policy enforcement'],
 benefits: ['Eliminate lateral movement', 'Reduce attack surface', 'Ensure compliance'],
 marketPrice: '$12,000-40,000/month',
 category: 'Zero Trust',
 technologies: ['Identity Management', 'Network Segmentation', 'Policy Engines', 'Access Controls']
 },
 {
 title: 'Penetration Testing & Vulnerability Assessment',
 description: 'Comprehensive security testing to identify vulnerabilities and assess security posture.',
 icon: '🔍',
 price: 'Starting at $3,500/assessment',
 features: ['Network penetration testing', 'Web application testing', 'Social engineering', 'Physical security testing', 'Compliance testing'],
 benefits: ['Identify security gaps', 'Prevent data breaches', 'Ensure compliance'],
 marketPrice: '$6,000-20,000/assessment',
 category: 'Security Testing',
 technologies: ['OWASP', 'NIST', 'OSSTMM', 'Custom Tools', 'Automated Scanners']
 },
 {
 title: 'Security Operations Center (SOC)',
 description: '24/7 security monitoring and incident response with dedicated security analysts.',
 icon: '🏢',
 price: 'Starting at $8,000/month',
 features: ['24/7 monitoring', 'Incident response', 'Threat hunting', 'Security analytics', 'Compliance reporting'],
 benefits: ['Round-the-clock protection', 'Faster incident response', 'Proactive threat hunting'],
 marketPrice: '$15,000-50,000/month',
 category: 'SOC Services',
 technologies: ['SIEM', 'SOAR', 'Threat Intelligence', 'Analytics', 'Incident Management']
 },
 {
 title: 'Cloud Security Solutions',
 description: 'Comprehensive cloud security for AWS, Azure, and Google Cloud with compliance monitoring.',
 icon: '☁️',
 price: 'Starting at $3,200/month',
 features: ['Cloud security posture', 'Identity & access management', 'Data encryption', 'Compliance monitoring', 'Threat detection'],
 benefits: ['Secure cloud environments', 'Ensure compliance', 'Prevent data breaches'],
 marketPrice: '$6,000-20,000/month',
 category: 'Cloud Security',
 technologies: ['CSPM', 'CWPP', 'CASB', 'Cloud IAM', 'Encryption']
 },
 {
 title: 'Data Protection & Privacy',
 description: 'Comprehensive data protection solutions including encryption, DLP, and privacy compliance.',
 icon: '🔒',
 price: 'Starting at $2,800/month',
 features: ['Data encryption', 'Data loss prevention', 'Privacy compliance', 'Data classification', 'Access controls'],
 benefits: ['Protect sensitive data', 'Ensure privacy compliance', 'Prevent data leaks'],
 marketPrice: '$5,000-18,000/month',
 category: 'Data Protection',
 technologies: ['DLP', 'Encryption', 'GDPR Tools', 'Data Classification', 'Privacy Management']
 },
 {
 title: 'Network Security & Firewall Management',
 description: 'Advanced network security with next-generation firewalls and intrusion prevention systems.',
 icon: '🌐',
 price: 'Starting at $2,500/month',
 features: ['Next-gen firewalls', 'Intrusion prevention', 'Network segmentation', 'VPN management', 'Traffic analysis'],
 benefits: ['Block malicious traffic', 'Prevent network attacks', 'Improve network performance'],
 marketPrice: '$4,500-15,000/month',
 category: 'Network Security',
 technologies: ['NGFW', 'IPS', 'VPN', 'SD-WAN', 'Network Monitoring']
 },
 {
 title: 'Email Security & Phishing Protection',
 description: 'Advanced email security solutions to prevent phishing, malware, and email-based attacks.',
 icon: '📧',
 price: 'Starting at $1,800/month',
 features: ['Phishing protection', 'Malware scanning', 'Email encryption', 'Spam filtering', 'User training'],
 benefits: ['Prevent email attacks', 'Reduce phishing success', 'Protect sensitive communications'],
 marketPrice: '$3,500-12,000/month',
 category: 'Email Security',
 technologies: ['Email Gateways', 'Sandboxing', 'AI Detection', 'User Training', 'Encryption']
 },
 {
 title: 'Mobile Security Solutions',
 description: 'Comprehensive mobile device security with MDM, app security, and threat protection.',
 icon: '📱',
 price: 'Starting at $2,200/month',
 features: ['Mobile device management', 'App security', 'Threat protection', 'Compliance monitoring', 'Remote wipe'],
 benefits: ['Secure mobile devices', 'Prevent mobile threats', 'Ensure compliance'],
 marketPrice: '$4,000-15,000/month',
 category: 'Mobile Security',
 technologies: ['MDM', 'EMM', 'App Security', 'Threat Detection', 'Compliance Tools']
 },
 {
 title: 'Compliance & Risk Management',
 description: 'Comprehensive compliance management for GDPR, HIPAA, SOX, and other regulatory requirements.',
 icon: '📋',
 price: 'Starting at $3,500/month',
 features: ['Compliance assessment', 'Risk management', 'Policy development', 'Audit support', 'Training programs'],
 benefits: ['Ensure compliance', 'Reduce regulatory risks', 'Avoid penalties'],
 marketPrice: '$6,500-25,000/month',
 category: 'Compliance',
 technologies: ['GRC Platforms', 'Risk Assessment', 'Compliance Tools', 'Audit Management']
 },
 {
 title: 'Security Awareness Training',
 description: 'Comprehensive security awareness training programs to educate employees about cyber threats.',
 icon: '🎓',
 price: 'Starting at $1,500/month',
 features: ['Interactive training modules', 'Phishing simulations', 'Security assessments', 'Progress tracking', 'Custom content'],
 benefits: ['Reduce human error', 'Improve security culture', 'Prevent social engineering'],
 marketPrice: '$2,500-8,000/month',
 category: 'Security Training',
 technologies: ['LMS', 'Phishing Simulators', 'Interactive Content', 'Assessment Tools']
 },
 {
 title: 'Incident Response & Forensics',
 description: 'Rapid incident response and digital forensics services for security breaches and investigations.',
 icon: '🚨',
 price: 'Starting at $5,000/incident',
 features: ['Rapid response', 'Digital forensics', 'Evidence collection', 'Incident analysis', 'Recovery planning'],
 benefits: ['Minimize breach impact', 'Preserve evidence', 'Accelerate recovery'],
 marketPrice: '$10,000-50,000/incident',
 category: 'Incident Response',
 technologies: ['Forensic Tools', 'Incident Management', 'Evidence Collection', 'Recovery Tools']
 }
 ];

 const _categories = [...new Set(securityServices.map(service => service.category))];
