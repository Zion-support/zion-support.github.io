import React from 'react'
import { Shield } from 'lucide-react'
import ServicePageTemplate from '../service-template'

export default function CybersecurityPage() {
  return (
    <ServicePageTemplate
      title="Cybersecurity Solutions"
      description="Protect your business with enterprise-grade cybersecurity solutions. Comprehensive security measures to safeguard your data and systems."
      icon={<Shield className="w-10 h-10 text-red-400" />}
      benefits={[
        'Protect against cyber threats',
        'Ensure compliance with regulations',
        'Minimize security risks',
        '24/7 security monitoring',
        'Rapid incident response'
      ]}
      features={[
        'Threat detection and prevention',
        'Security audits and assessments',
        'Compliance management',
        'Incident response planning',
        'Security training programs',
        'Vulnerability management'
      ]}
      pricing="Starting at $299/month"
      seoTitle="Cybersecurity Solutions - Zion Tech Group"
      seoDescription="Enterprise-grade cybersecurity solutions to protect your business. Comprehensive security measures and compliance management."
      seoKeywords="cybersecurity, security solutions, threat protection, compliance, data security"
    />
  )
}
