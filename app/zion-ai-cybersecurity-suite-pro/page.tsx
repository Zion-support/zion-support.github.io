import React from 'react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import { Helmet } from 'react-helmet-async';
import { ArrowRight } from 'lucide-react';
import ResponsiveContainer from '../components/ResponsiveContainer';
import { AlertTriangle } from 'lucide-react';
import { Users } from 'lucide-react';
import { Award } from 'lucide-react';
import { Star } from 'lucide-react';
import { Shield } from 'lucide-react';
import { CheckCircle } from 'lucide-react';
import { Zap } from 'lucide-react';
import { Brain } from 'lucide-react';
import { Sparkles } from 'lucide-react';
import { Globe } from 'lucide-react';
import { Network } from 'lucide-react';
import { Lock } from 'lucide-react';
import { Monitor } from 'lucide-react';
import { BarChart3 } from 'lucide-react';
import { Smartphone } from 'lucide-react';
import { Cloud } from 'lucide-react';

const ZionAICybersecuritySuiteProPage = () => {
  const testimonials = [
    {
      name: "John Smith",
      role: "CEO, TechCorp",
      content: "Zion Tech Group transformed our business with their AI solutions.",
      avatar: "/images/testimonials/john-smith.jpg"
    },
    {
      name: "Sarah Johnson",
      role: "CTO, InnovateLabs",
      content: "The team's expertise in AI and automation is unmatched.",
      avatar: "/images/testimonials/sarah-johnson.jpg"
    },
    {
      name: "Mike Chen",
      role: "Founder, StartupXYZ",
      content: "We saw immediate results after implementing their solutions.",
      avatar: "/images/testimonials/mike-chen.jpg"
    }
  ];

  const features = [
    {
      title: "AI-Powered Threat Detection",
      description: "Advanced machine learning algorithms detect and prevent cyber threats in real-time with 99.9% accuracy",
      icon: <Brain className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Zero-Trust Security Architecture",
      description: "Implement comprehensive zero-trust security model with continuous verification and least-privilege access",
      icon: <Shield className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Automated Incident Response",
      description: "AI-driven incident response system that automatically contains, analyzes, and remediates security breaches",
      icon: <Zap className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Advanced Endpoint Protection",
      description: "Comprehensive endpoint security with behavioral analysis, ransomware protection, and device management",
      icon: <Smartphone className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Network Security Monitoring",
      description: "24/7 network monitoring with AI-powered anomaly detection and automated threat hunting",
      icon: <Network className="w-8 h-8" />,
      color: "from-red-500 to-pink-500"
    },
    {
      title: "Compliance Management",
      description: "Automated compliance monitoring for GDPR, HIPAA, SOX, and other regulatory requirements",
      icon: <FileShield className="w-8 h-8" />,
      color: "from-cyan-500 to-blue-500"
    }
  ];

  const pricingPlans = [
    {
      name: "Essential",
      price: "$199",
      period: "per month",
      description: "Perfect for small businesses",
      features: [
        "Up to 50 endpoints",
        "Basic AI threat detection",
        "Email security",
        "Firewall protection",
        "24/7 monitoring",
        "Email support",
        "Basic reporting",
        "Mobile app access"
      ],
      popular: false,
      color: "from-gray-500 to-gray-600"
    },
    {
      name: "Professional",
      price: "$499",
      period: "per month",
      description: "Most popular for growing companies",
      features: [
        "Up to 500 endpoints",
        "Advanced AI features",
        "Full security suite",
        "Priority support",
        "Advanced analytics",
        "API access",
        "Custom policies",
        "Integration tools",
        "Compliance reporting",
        "Dedicated security advisor"
      ],
      popular: true,
      color: "from-cyan-500 to-purple-600"
    },
    {
      name: "Enterprise",
      price: "$999",
      period: "per month",
      description: "For large organizations",
      features: [
        "Unlimited endpoints",
        "Custom AI models",
        "White-label options",
        "24/7 phone support",
        "Advanced security",
        "Custom integrations",
        "Dedicated account manager",
        "On-premise deployment",
        "SLA guarantees",
        "Penetration testing"
      ],
      popular: false,
      color: "from-purple-500 to-pink-500"
    }
  ];

  const securityModules = [
    {
      title: "Threat Intelligence",
      description: "Real-time threat intelligence feeds and AI-powered analysis of global security threats and attack patterns",
      icon: <Eye className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Vulnerability Management",
      description: "Automated vulnerability scanning, assessment, and remediation with AI-powered prioritization",
      icon: <Bug className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Identity & Access Management",
      description: "Advanced IAM with multi-factor authentication, single sign-on, and privileged access management",
      icon: <Key className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Data Loss Prevention",
      description: "AI-powered data classification, monitoring, and protection to prevent sensitive data breaches",
      icon: <FileShield className="w-6 h-6" />,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Security Analytics",
      description: "Advanced security analytics with machine learning for threat hunting and forensic analysis",
      icon: <BarChart3 className="w-6 h-6" />,
      color: "from-red-500 to-pink-500"
    },
    {
      title: "Cloud Security",
      description: "Comprehensive cloud security monitoring and protection for AWS, Azure, and Google Cloud",
      icon: <Cloud className="w-6 h-6" />,
      color: "from-cyan-500 to-blue-500"
    }
  ];

  const threatTypes = [
    {
      title: "Ransomware Protection",
      description: "Advanced behavioral analysis and AI-powered detection to prevent ransomware attacks before they encrypt your data",
      icon: <Lock className="w-8 h-8" />,
      color: "from-red-500 to-pink-500"
    },
    {
      title: "Phishing Detection",
      description: "AI-powered email security that identifies and blocks sophisticated phishing attempts with 99.8% accuracy",
      icon: <AlertTriangle className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Malware Prevention",
      description: "Next-generation antivirus with machine learning to detect and prevent zero-day malware and advanced persistent threats",
      icon: <Shield className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Insider Threat Detection",
      description: "Behavioral analytics and AI monitoring to detect and prevent insider threats and data exfiltration",
      icon: <Users className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "DDoS Mitigation",
      description: "AI-powered DDoS protection that automatically detects and mitigates distributed denial-of-service attacks",
      icon: <Network className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Supply Chain Security",
      description: "Comprehensive monitoring and analysis of third-party vendors and supply chain security risks",
      icon: <Globe className="w-8 h-8" />,
      color: "from-cyan-500 to-blue-500"
    }
  ];

export default function ZionAiCybersecuritySuiteProPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Zion Ai Cybersecurity Suite Pro - Zion Tech Group</title>
        <meta name="description" content="Zion Ai Cybersecurity Suite Pro solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">Zion Ai Cybersecurity Suite Pro</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Discover our comprehensive zion ai cybersecurity suite pro solutions designed to meet your business needs.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Expert Solutions</h3>
              <p className="text-gray-300">
                Our team of experts delivers tailored solutions for your specific requirements.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Cutting-Edge Technology</h3>
              <p className="text-gray-300">
                We use the latest technologies and best practices to ensure optimal performance.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">24/7 Support</h3>
              <p className="text-gray-300">
                Get round-the-clock support from our dedicated team of professionals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

}