<<<<<<< HEAD
import { Search } from 'lucide-react';
import { Award } from 'lucide-react';
import { Shield } from 'lucide-react';
import { Zap } from 'lucide-react';
import { Brain } from 'lucide-react';
import { Monitor } from 'lucide-react';
import { FileText } from 'lucide-react';

import { Helmet } from "react-helmet-async";
import { Helmet } from 'react-helmet-async';
=======
import { ArrowRight, Home, Search, AlertTriangle } from 'lucide-react';
>>>>>>> cursor/fix-errors-and-merge-to-main-b18f

export default function Page() {
  const benefits = [
    "Benefit 1",
    "Benefit 2"
  ];
  const features = [
    {
      title: "AI-Powered Threat Detection",
      description: "Advanced machine learning algorithms continuously monitor your network for threats, detecting and preventing attacks before they can cause damage.",
      icon: <Brain className="w-8 h-8" />,
      benefits: ["Real-time threat analysis", "Behavioral anomaly detection", "Zero-day attack prevention", "Automated response"]
    },
    {
      title: "24/7 Security Monitoring",
      description: "Round-the-clock monitoring by our expert security team ensures your systems are protected at all times, with immediate response to any threats.",
      icon: <Eye className="w-8 h-8" />,
      benefits: ["Continuous monitoring", "Expert security team", "Immediate threat response", "Global threat intelligence"]
    },
    {
      title: "Automated Incident Response",
      description: "When threats are detected, our system automatically responds with predefined actions to contain and eliminate the threat before it spreads.",
      icon: <Zap className="w-8 h-8" />,
      benefits: ["Instant threat containment", "Automated remediation", "Custom response rules", "Minimal downtime"]
    },
    {
      title: "Compliance Reporting",
      description: "Generate comprehensive compliance reports for SOC2, GDPR, HIPAA, and other regulatory requirements with automated documentation.",
      icon: <FileText className="w-8 h-8" />,
      benefits: ["SOC2 compliance", "GDPR compliance", "HIPAA compliance", "Automated reporting"]
    },
    {
      title: "Vulnerability Assessment",
      description: "Regular security scans identify vulnerabilities in your systems and provide detailed remediation guidance to strengthen your security posture.",
      icon: <Search className="w-8 h-8" />,
      benefits: ["Regular security scans", "Vulnerability prioritization", "Remediation guidance", "Risk scoring"]
    },
    {
      title: "Multi-factor Authentication",
      description: "Secure access with advanced MFA options including biometric authentication, hardware tokens, and mobile app verification.",
      icon: <Fingerprint className="w-8 h-8" />,
      benefits: ["Biometric authentication", "Hardware tokens", "Mobile app verification", "SSO integration"]
    }
  ];

  const securityStats = [
    { number: "99.9%", label: "Threat Detection Accuracy", icon: <Shield className="w-6 h-6" /> },
    { number: "50%", label: "Faster Incident Response", icon: <Zap className="w-6 h-6" /> },
    { number: "24/7", label: "Security Monitoring", icon: <Eye className="w-6 h-6" /> },
    { number: "100%", label: "Compliance Coverage", icon: <Award className="w-6 h-6" /> }
  ];

  const pricingPlans = [
    {
      name: "Essential",
      price: "$499",
      period: "month",
      description: "Core security features for small to medium businesses",
      features: [
        "Basic threat detection",
        "Email security",
        "Firewall management",
        "Standard support",
        "Up to 50 users"
      ],
      popular: false;
    },
    {
      name: "Professional",
      price: "$799",
      period: "month",
      description: "Advanced security features for growing businesses",
      features: [
        "AI-powered threat detection",
        "24/7 monitoring",
        "Automated incident response",
        "Compliance reporting",
        "Priority support",
        "Up to 200 users",
        "Mobile app access"
      ],
      popular: true;
    },
    {
      name: "Enterprise",
      price: "$1299",
      period: "month",
      description: "Complete security solution for large organizations",
      features: [
        "Advanced AI threat detection",
        "Dedicated security team",
        "Custom security policies",
        "Advanced compliance",
        "24/7 dedicated support",
        "Unlimited users",
        "White-label options",
        "On-premise deployment"
      ],
      popular: false;
    }
  ];

}

}