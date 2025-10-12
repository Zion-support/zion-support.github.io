import React from 'react'
import { Shield, Zap, Globe, Target, TrendingUp, Users, Clock, DollarSign, Star, CheckCircle, ArrowRight } from 'lucide-react'
import AIServicePage from '../components/AIServicePage'

const AICybersecurityPage: React.FC = () => {
  const features = [
    'Real-time threat detection',
    'Automated incident response',
    'Behavioral analysis',
    'Vulnerability assessment',
    'Compliance monitoring',
    'Security analytics',
    'Threat intelligence integration',
    '24/7 monitoring and alerting'
  ]

  const benefits = [
    {
      title: 'Proactive Protection',
      description: 'Detect and prevent threats before they cause damage',
      icon: <Shield className="w-6 h-6 text-blue-500" />
    },
    {
      title: 'Rapid Response',
      description: 'Automatically respond to security incidents in seconds',
      icon: <Zap className="w-6 h-6 text-green-500" />
    },
    {
      title: 'Cost Efficiency',
      description: 'Reduce security costs by 40% while improving protection',
      icon: <DollarSign className="w-6 h-6 text-purple-500" />
    },
    {
      title: 'Compliance Assurance',
      description: 'Maintain compliance with industry regulations automatically',
      icon: <CheckCircle className="w-6 h-6 text-yellow-500" />
    }
  ]

  const useCases = [
    {
      title: 'Threat Detection',
      description: 'Identify and analyze potential security threats in real-time',
      icon: '🔍'
    },
    {
      title: 'Incident Response',
      description: 'Automatically respond to security incidents and breaches',
      icon: '🚨'
    },
    {
      title: 'Vulnerability Scanning',
      description: 'Continuously scan for vulnerabilities in your systems',
      icon: '🔎'
    },
    {
      title: 'Compliance Monitoring',
      description: 'Ensure compliance with GDPR, HIPAA, and other regulations',
      icon: '📋'
    },
    {
      title: 'User Behavior Analysis',
      description: 'Monitor and analyze user behavior for suspicious activities',
      icon: '👤'
    },
    {
      title: 'Security Analytics',
      description: 'Generate comprehensive security reports and insights',
      icon: '📊'
    }
  ]

  const stats = [
    { number: '99.9%', label: 'Threat Detection Rate' },
    { number: '40%', label: 'Cost Reduction' },
    { number: '95%', label: 'False Positive Reduction' },
    { number: '24/7', label: 'Monitoring' }
  ]

  const testimonials = [
    {
      name: 'David Chen',
      company: 'CISO, TechCorp',
      content: 'The AI has prevented several potential breaches. Our security posture has never been stronger.',
      rating: 5
    },
    {
      name: 'Maria Rodriguez',
      company: 'Security Director',
      content: 'Automated incident response has reduced our mean time to resolution by 75%.',
      rating: 5
    },
    {
      name: 'John Smith',
      company: 'IT Manager',
      content: 'Compliance monitoring is now effortless. The AI handles all the complex requirements.',
      rating: 5
    }
  ]

  return (
    <AIServicePage
      title="AI Cybersecurity"
      description="Protect your digital assets with advanced AI-powered cybersecurity solutions. Detect threats, prevent breaches, and ensure compliance with intelligent security automation and monitoring."
      icon={<Shield className="w-10 h-10 text-white" />}
      features={features}
      pricing="Starting at $299/month"
      benefits={benefits}
      useCases={useCases}
      stats={stats}
      testimonials={testimonials}
      category="Security"
      popular={true}
    />
  )
}

export default AICybersecurityPage