import { ArrowRight, Home, Search, AlertTriangle } from 'lucide-react';

export default function Cybersecurity() {
  const services = [
    {
      title: "AI Cybersecurity Suite",
      description: "Advanced AI-powered threat detection and response system. Real-time monitoring, automated incident response, and compliance reporting.",
      icon: <Shield className="w-8 h-8" />,
      path: "/ai-cybersecurity-suite-pro",
      color: "from-red-500 to-orange-500",
      price: "Starting at $399/month",
      features: ["AI Threat Detection", "Automated Response", "Compliance Reports", "24/7 Monitoring"]
    },
    {
      title: "Cybersecurity Solutions",
      description: "Comprehensive security solutions including vulnerability assessments, penetration testing, and security architecture design.",
      icon: <Lock className="w-8 h-8" />,
      path: "/cybersecurity-solutions",
      color: "from-blue-500 to-cyan-500",
      price: "Starting at $299/month",
      features: ["Vulnerability Assessment", "Penetration Testing", "Security Architecture", "Risk Management"]
    },
    {
      title: "Advanced Security Suite",
      description: "Enterprise-grade security with advanced threat protection, identity management, and security automation capabilities.",
      icon: <AlertTriangle className="w-8 h-8" />,
      path: "/advanced-security-suite",
      color: "from-purple-500 to-pink-500",
      price: "Starting at $499/month",
      features: ["Threat Protection", "Identity Management", "Security Automation", "Incident Response"]
    },
    {
      title: "Security Monitoring",
      description: "Continuous security monitoring with real-time alerts, log analysis, and security event correlation across your entire infrastructure.",
      icon: <Eye className="w-8 h-8" />,
      path: "/security-monitoring-suite",
      color: "from-green-500 to-emerald-500",
      price: "Starting at $249/month",
      features: ["Real-time Monitoring", "Log Analysis", "Event Correlation", "Alert Management"]
    },
    {
      title: "Network Security",
      description: "Comprehensive network security solutions including firewall management, intrusion detection, and network segmentation.",
      icon: <Database className="w-8 h-8" />,
      path: "/network-security",
      color: "from-indigo-500 to-purple-500",
      price: "Starting at $199/month",
      features: ["Firewall Management", "Intrusion Detection", "Network Segmentation", "Traffic Analysis"]
    },
    {
      title: "Security Automation",
      description: "Automated security processes including vulnerability scanning, patch management, and security policy enforcement.",
      icon: <Users className="w-8 h-8" />,
      path: "/security-automation",
      color: "from-teal-500 to-cyan-500",
      price: "Starting at $179/month",
      features: ["Vulnerability Scanning", "Patch Management", "Policy Enforcement", "Compliance Automation"]
    }
  ];

}

}