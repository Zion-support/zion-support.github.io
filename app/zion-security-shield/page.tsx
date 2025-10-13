import { ArrowRight, Home, Search, AlertTriangle } from 'lucide-react';

export default function ZionSecurityShield() {
  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Advanced Threat Detection",
      description: "AI-powered threat detection with 99.9% accuracy using machine learning algorithms"
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Zero-Trust Architecture",
      description: "Implement zero-trust security model with continuous verification and monitoring"
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Real-time Monitoring",
      description: "24/7 security monitoring with instant alerts and automated response systems"
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "Vulnerability Assessment",
      description: "Comprehensive security audits and vulnerability scanning for all your assets"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Automated Incident Response",
      description: "AI-driven incident response with automated containment and recovery procedures"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Behavioral Analytics",
      description: "Advanced user behavior analysis to detect insider threats and anomalies"
    }
  ];

  const securityFeatures = [
    "Multi-factor Authentication (MFA)",
    "End-to-end Encryption",
    "DDoS Protection",
    "Web Application Firewall (WAF)",
    "Intrusion Detection System (IDS)",
    "Security Information and Event Management (SIEM)",
    "Penetration Testing",
    "Compliance Reporting (SOC 2, ISO 27001, GDPR)",
    "Data Loss Prevention (DLP)",
    "Mobile Device Management (MDM)",
    "Email Security Gateway",
    "Cloud Security Posture Management"
  ];

  const pricingPlans = [
    {
      name: "Essential",
      price: "$49",
      period: "/month",
      description: "Perfect for small businesses",
      features: [
        "Basic threat detection",
        "Email security",
        "Firewall protection",
        "Monthly security reports",
        "Email support",
        "Up to 10 users"
      ],
      popular: false;
    },
    {
      name: "Professional",
      price: "$149",
      period: "/month",
      description: "Most popular for growing businesses",
      features: [
        "Advanced threat detection",
        "Real-time monitoring",
        "Vulnerability scanning",
        "Incident response",
        "Priority support",
        "Up to 50 users",
        "Compliance reporting"
      ],
      popular: true;
    },
    {
      name: "Enterprise",
      price: "$399",
      period: "/month",
      description: "For large organizations",
      features: [
        "AI-powered security",
        "24/7 SOC monitoring",
        "Custom security policies",
        "Dedicated security team",
        "White-label reporting",
        "Unlimited users",
        "Advanced compliance",
        "Custom integrations"
      ],
      popular: false;
    }
  ];

}

}