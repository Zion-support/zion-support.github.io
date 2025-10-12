import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Shield, Lock, Eye, AlertTriangle, Star, Zap, Globe, Database, Cpu, Network } from 'lucide-react'
import ServicePageTemplate from '../service-template'

export default function CybersecurityPage() {
  return (
    <ServicePageTemplate
      title="Cybersecurity Solutions"
      description="Protect your business with our comprehensive cybersecurity services. Advanced threat detection, data protection, and 24/7 monitoring to keep your systems secure."
      icon={<Shield className="w-10 h-10 text-red-400" />}
      benefits={[
        'Advanced threat detection and response',
        'Enterprise-grade data encryption',
        '24/7 security monitoring and support',
        'Compliance with industry standards',
        'Automated incident response',
        'Custom security solutions'
      ]}
      features={[
        'AI-powered threat detection',
        'Real-time security monitoring',
        'End-to-end data encryption',
        'Vulnerability assessments',
        'Security awareness training',
        'Incident response planning'
      ]}
      pricing="Starting at $299/month"
      seoTitle="Cybersecurity Solutions - Zion Tech Group"
      seoDescription="Comprehensive cybersecurity services including threat detection, data protection, and 24/7 monitoring. Protect your business with enterprise-grade security solutions."
      seoKeywords="cybersecurity, threat detection, data protection, security monitoring, compliance, incident response"
    />
  )
}