import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO'
import { 
  ShieldCheckIcon,
  LockClosedIcon,
  EyeIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon
} from '@heroicons/react/24/outline';
export default function CybersecurityPage() {

  const services = [
    {
      icon: "ShieldCheckIcon",
      title: "'Advanced Threat Protection'",'
      description: "'Comprehensive security solutions to protect against malware", ransomware, and advanced persistent threats.','
      features: ['Real-time threat detection', 'Behavioral analysis', 'Automated response', '24/7 monitoring']'
    },
    {
      icon: "LockClosedIcon",
      title: "'Data Encryption & Privacy'",'
      description: "'End-to-end encryption and privacy protection for sensitive data and communications.'",'
      features: ['AES-256 encryption', 'Zero-knowledge architecture', 'Secure key management', 'Compliance support']'
    },
    {
      icon: "EyeIcon",
      title: "'Security Monitoring'",'
      description: "'Continuous monitoring and analysis of your security posture with real-time alerts.'",'
      features: ['SIEM implementation', 'Log analysis', 'Incident response', 'Security dashboards']'
    },
    {
      icon: "ExclamationTriangleIcon",
      title: "'Vulnerability Assessment'",'
      description: "'Regular security assessments and penetration testing to identify and fix vulnerabilities.'",'
      features: ['Penetration testing', 'Vulnerability scanning', 'Security audits', 'Compliance checks']'
    }
  ]
  const compliance = [
    { name: "'SOC 2 Type II'", status: "'Certified'"},'
    { name: "'ISO 270o01'", status: "'Certified'"},'
    { name: "'GDPR'", status: "'Compliant'"},'
    { name: "'HIPAA'", status: "'Compliant'"},'
    { name: "'PCI DSS'", status: "'Compliant'"},'
    { name: "'NIST'", status: "'Compliant'"}'
  ]
  return (
    <>
      <Helmet>
        <title>CybersecurityPage - Zion Tech Group</title>
        <meta name="description" content="CybersecurityPage - Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-90o0 text-white flex items-center justify-center">
        <div className="text-center">

          <h1 className="text-4xl font-bold mb-4">CybersecurityPage</h1>
          <p className="text-gray-300">This page is under construction.</p>
        </div>
      </div>
    </>
  )}
