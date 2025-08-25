export interface SpecializedCybersecurityService {
  id: string;
  title: string;
  description: string;
  category: string;
  subcategory: string;
  price: number;
  currency: string;
  pricingModel: string;
  features: string[];
  benefits: string[];
  useCases: string[];
  targetAudience: string[];
  tags: string[];
  estimatedDelivery: string;
  supportLevel: string;
  marketPrice: string;
  contactInfo: {
    phone: string;
    email: string;
    website: string;
  };
  technicalSpecs: {
    technology: string[];
    integrations: string[];
    deployment: string;
    scalability: string;
    securityFeatures: string[];
  };
  compliance: string[];
  roi: string;
  securityLevel: string;
}

export const SPECIALIZED_CYBERSECURITY_SERVICES: SpecializedCybersecurityService[] = [
  // Zero Trust Security Architecture
  {
    id: "zero-trust-security-architecture",
    title: "Zero Trust Security Architecture Platform",
    description: "Comprehensive zero trust security platform that implements continuous verification, least privilege access, and micro-segmentation to protect enterprise networks and applications from advanced cyber threats.",
    category: "Cybersecurity",
    subcategory: "Zero Trust",
    price: 3500,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Continuous identity verification and authentication",
      "Micro-segmentation and network isolation",
      "Least privilege access control",
      "Real-time threat detection and response",
      "Multi-factor authentication (MFA)",
      "Privileged access management (PAM)",
      "Network traffic analysis and monitoring",
      "Automated policy enforcement",
      "Compliance reporting and auditing",
      "Integration with existing security tools"
    ],
    benefits: [
      "Reduce security breaches by 95%",
      "Improve compliance posture",
      "Enhanced visibility and control",
      "Simplified security management",
      "Reduced attack surface",
      "Automated security responses"
    ],
    useCases: [
      "Enterprise network security",
      "Cloud infrastructure protection",
      "Remote workforce security",
      "Critical infrastructure protection",
      "Financial services security",
      "Healthcare data protection"
    ],
    targetAudience: [
      "CISOs",
      "Security architects",
      "IT managers",
      "Compliance officers",
      "Network administrators",
      "Security engineers"
    ],
    tags: ["Cybersecurity", "Zero Trust", "Network Security", "Identity Management", "Compliance", "Enterprise"],
    estimatedDelivery: "6-8 weeks",
    supportLevel: "enterprise",
    marketPrice: "$3,500 - $15,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    technicalSpecs: {
      technology: ["Identity providers", "Network segmentation", "SIEM systems", "EDR solutions", "API gateways"],
      integrations: ["Active Directory", "LDAP", "SAML", "OAuth", "Security tools"],
      deployment: "Hybrid cloud with on-premise components",
      scalability: "Protects 100K+ endpoints and users",
      securityFeatures: ["Continuous monitoring", "Behavioral analytics", "Threat intelligence", "Automated response"]
    },
    compliance: ["SOC 2 Type II", "ISO 27001", "NIST", "FedRAMP", "Industry regulations"],
    roi: "400% ROI through breach prevention and compliance automation",
    securityLevel: "Enterprise-grade with military-level security"
  },

  // Advanced Threat Detection & Response
  {
    id: "advanced-threat-detection-response",
    title: "Advanced Threat Detection & Response Platform",
    description: "Next-generation threat detection platform that combines AI, machine learning, and behavioral analytics to identify, analyze, and respond to sophisticated cyber threats in real-time with automated incident response.",
    category: "Cybersecurity",
    subcategory: "Threat Detection",
    price: 2800,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "AI-powered threat detection and analysis",
      "Behavioral analytics and anomaly detection",
      "Real-time threat hunting capabilities",
      "Automated incident response workflows",
      "Threat intelligence integration",
      "Advanced malware analysis",
      "Sandboxing and isolation",
      "Forensic analysis tools",
      "Threat correlation and attribution",
      "Custom detection rules and signatures"
    ],
    benefits: [
      "Detect threats 10x faster than traditional methods",
      "Reduce false positives by 80%",
      "Automate 70% of incident response",
      "Improve threat visibility",
      "Faster incident resolution",
      "Enhanced security posture"
    ],
    useCases: [
      "Security operations centers (SOC)",
      "Threat hunting teams",
      "Incident response",
      "Malware analysis",
      "Security research",
      "Compliance monitoring"
    ],
    targetAudience: [
      "Security analysts",
      "SOC managers",
      "Threat hunters",
      "Incident responders",
      "Security researchers",
      "Compliance teams"
    ],
    tags: ["Cybersecurity", "Threat Detection", "AI", "Machine Learning", "Incident Response", "SOC"],
    estimatedDelivery: "4-6 weeks",
    supportLevel: "premium",
    marketPrice: "$2,800 - $10,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    technicalSpecs: {
      technology: ["AI/ML engines", "Behavioral analytics", "Threat intelligence feeds", "SIEM integration", "EDR platforms"],
      integrations: ["SIEM systems", "EDR solutions", "Firewalls", "Email security", "Cloud platforms"],
      deployment: "Cloud-native with on-premise options",
      scalability: "Analyzes 1M+ events per second",
      securityFeatures: ["Real-time detection", "Behavioral analysis", "Threat correlation", "Automated response"]
    },
    compliance: ["SOC 2", "ISO 27001", "NIST", "Industry standards", "Regulatory requirements"],
    roi: "350% ROI through improved threat detection and response automation",
    securityLevel: "Advanced with AI-powered intelligence"
  },

  // Cloud Security & Compliance
  {
    id: "cloud-security-compliance-platform",
    title: "Cloud Security & Compliance Platform",
    description: "Comprehensive cloud security platform that provides automated security monitoring, compliance management, and threat protection across multi-cloud environments with real-time visibility and control.",
    category: "Cybersecurity",
    subcategory: "Cloud Security",
    price: 2200,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Multi-cloud security monitoring",
      "Automated compliance scanning",
      "Cloud access security broker (CASB)",
      "Data loss prevention (DLP)",
      "Identity and access management",
      "Security posture management",
      "Vulnerability assessment",
      "Compliance reporting",
      "Security automation",
      "Integration with cloud providers"
    ],
    benefits: [
      "Reduce cloud security risks by 85%",
      "Automate compliance monitoring",
      "Improve security visibility",
      "Centralized security management",
      "Cost-effective cloud security",
      "Enhanced compliance posture"
    ],
    useCases: [
      "Multi-cloud security",
      "Cloud compliance management",
      "Data protection",
      "Identity management",
      "Security automation",
      "Compliance reporting"
    ],
    targetAudience: [
      "Cloud architects",
      "Security engineers",
      "DevOps teams",
      "Compliance officers",
      "IT managers",
      "Cloud administrators"
    ],
    tags: ["Cybersecurity", "Cloud Security", "Compliance", "Multi-cloud", "Automation", "CASB"],
    estimatedDelivery: "3-5 weeks",
    supportLevel: "premium",
    marketPrice: "$2,200 - $8,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    technicalSpecs: {
      technology: ["Cloud security tools", "Compliance engines", "Automation platforms", "API integrations", "Security analytics"],
      integrations: ["AWS", "Azure", "GCP", "Kubernetes", "Docker", "Terraform"],
      deployment: "Cloud-native with hybrid options",
      scalability: "Monitors 1000+ cloud resources",
      securityFeatures: ["Real-time monitoring", "Automated compliance", "Threat protection", "Policy enforcement"]
    },
    compliance: ["SOC 2", "ISO 27001", "FedRAMP", "Cloud security standards", "Industry regulations"],
    roi: "300% ROI through automated security and compliance management",
    securityLevel: "Enterprise-grade cloud security"
  },

  // IoT Security & Device Management
  {
    id: "iot-security-device-management",
    title: "IoT Security & Device Management Platform",
    description: "Comprehensive IoT security platform that protects connected devices, networks, and data from cyber threats while providing centralized device management and security monitoring capabilities.",
    category: "Cybersecurity",
    subcategory: "IoT Security",
    price: 1800,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "IoT device discovery and inventory",
      "Vulnerability assessment and management",
      "Device authentication and authorization",
      "Network segmentation and isolation",
      "Real-time threat detection",
      "Firmware update management",
      "Security policy enforcement",
      "Device monitoring and alerting",
      "Compliance reporting",
      "Integration with security tools"
    ],
    benefits: [
      "Protect 100% of IoT devices",
      "Reduce IoT security risks by 90%",
      "Automated device management",
      "Enhanced security visibility",
      "Compliance automation",
      "Cost-effective IoT security"
    ],
    useCases: [
      "Smart manufacturing security",
      "Connected healthcare",
      "Smart city security",
      "Industrial IoT protection",
      "Consumer IoT security",
      "Critical infrastructure"
    ],
    targetAudience: [
      "IoT security managers",
      "Manufacturing companies",
      "Healthcare providers",
      "City governments",
      "Industrial facilities",
      "Security engineers"
    ],
    tags: ["Cybersecurity", "IoT Security", "Device Management", "Network Security", "Automation", "Industrial"],
    estimatedDelivery: "4-6 weeks",
    supportLevel: "premium",
    marketPrice: "$1,800 - $6,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    technicalSpecs: {
      technology: ["IoT security protocols", "Device management", "Network security", "Threat detection", "Automation tools"],
      integrations: ["IoT platforms", "Security tools", "Network equipment", "Cloud services"],
      deployment: "Edge-cloud hybrid architecture",
      scalability: "Manages 100K+ IoT devices",
      securityFeatures: ["Device protection", "Network security", "Threat detection", "Automated management"]
    },
    compliance: ["ISO 27001", "Industry standards", "IoT security frameworks", "Regulatory requirements"],
    roi: "350% ROI through IoT security automation and risk reduction",
    securityLevel: "Industrial-grade IoT security"
  },

  // Application Security & DevSecOps
  {
    id: "application-security-devsecops",
    title: "Application Security & DevSecOps Platform",
    description: "Comprehensive application security platform that integrates security into the development lifecycle with automated testing, vulnerability scanning, and security monitoring for modern applications and APIs.",
    category: "Cybersecurity",
    subcategory: "Application Security",
    price: 2500,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Static application security testing (SAST)",
      "Dynamic application security testing (DAST)",
      "Interactive application security testing (IAST)",
      "Software composition analysis (SCA)",
      "API security testing",
      "Container security scanning",
      "Infrastructure as code security",
      "Security automation and CI/CD integration",
      "Vulnerability management",
      "Security training and awareness"
    ],
    benefits: [
      "Reduce application vulnerabilities by 80%",
      "Integrate security into development",
      "Automate security testing",
      "Improve code quality",
      "Faster security reviews",
      "Enhanced compliance"
    ],
    useCases: [
      "Application development",
      "DevOps and CI/CD",
      "API security",
      "Container security",
      "Cloud-native applications",
      "Legacy application security"
    ],
    targetAudience: [
      "Application developers",
      "DevOps engineers",
      "Security engineers",
      "QA teams",
      "Product managers",
      "Security architects"
    ],
    tags: ["Cybersecurity", "Application Security", "DevSecOps", "Testing", "Automation", "CI/CD"],
    estimatedDelivery: "4-6 weeks",
    supportLevel: "premium",
    marketPrice: "$2,500 - $10,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    technicalSpecs: {
      technology: ["Security testing tools", "CI/CD platforms", "Container security", "API security", "Automation engines"],
      integrations: ["GitHub", "GitLab", "Jenkins", "Docker", "Kubernetes", "Cloud platforms"],
      deployment: "Cloud-native with CI/CD integration",
      scalability: "Scans 1000+ applications and APIs",
      securityFeatures: ["Automated testing", "Vulnerability scanning", "Security monitoring", "Policy enforcement"]
    },
    compliance: ["OWASP", "Security standards", "Industry regulations", "Development best practices"],
    roi: "300% ROI through automated security testing and vulnerability reduction",
    securityLevel: "Enterprise-grade application security"
  }
];