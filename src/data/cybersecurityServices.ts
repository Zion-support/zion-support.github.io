export interface CybersecurityService {
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
}
export const CYBERSECURITY_SERVICES: CybersecurityService[] = [
  // Zero Trust Security Platform
  {
    id: "zero-trust-security-platform",
    title: "Zero Trust Security & Access Management Platform",
    description: "Comprehensive zero trust security platform that provides continuous verification, least privilege access, and advanced threat detection for modern enterprise environments.",
    category: "Cybersecurity",
    subcategory: "Access Management",
    price: 2800,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Continuous identity verification",
      "Least privilege access control",
      "Multi-factor authentication",
      "Behavioral analytics",
      "Threat intelligence integration",
      "Compliance reporting"
    ],
    benefits: [
      "Reduce security breaches by 80%",
      "Simplify compliance management",
      "Improve user experience",
      "Reduce IT support tickets",
      "Enhanced audit capabilities"
    ],
    useCases: [
      "Enterprise organizations",
      "Healthcare providers",
      "Financial institutions",
      "Government agencies",
      "Educational institutions"
    ],
    targetAudience: [
      "CISOs",
      "IT security managers",
      "Compliance officers",
      "System administrators",
      "Security architects"
    ],
    tags: ["Cybersecurity", "Zero Trust", "Access Management", "Identity Verification", "Compliance"],
    estimatedDelivery: "4-6 weeks",
    supportLevel: "enterprise",
    marketPrice: "$2,800 - $15,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  // AI-Powered Threat Detection
  {
    id: "ai-threat-detection",
    title: "AI-Powered Threat Detection & Response Platform",
    description: "Advanced threat detection system that uses machine learning and behavioral analytics to identify and respond to cybersecurity threats in real-time.",
    category: "Cybersecurity",
    subcategory: "Threat Detection",
    price: 3200,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Real-time threat detection",
      "Behavioral anomaly detection",
      "Automated incident response",
      "Threat intelligence feeds",
      "Forensic analysis tools",
      "Security orchestration"
    ],
    benefits: [
      "Detect threats 10x faster",
      "Reduce false positives by 60%",
      "Automate incident response",
      "Improve security team efficiency",
      "Reduce breach impact"
    ],
    useCases: [
      "Security operations centers",
      "Large enterprises",
      "Financial services",
      "Healthcare organizations",
      "Government agencies"
    ],
    targetAudience: [
      "Security analysts",
      "SOC managers",
      "Incident responders",
      "Security engineers",
      "CISOs"
    ],
    tags: ["Cybersecurity", "AI", "Threat Detection", "Incident Response", "Security Analytics"],
    estimatedDelivery: "4-6 weeks",
    supportLevel: "enterprise",
    marketPrice: "$3,200 - $18,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  // Cloud Security Posture Management
  {
    id: "cloud-security-posture",
    title: "Cloud Security Posture Management Platform",
    description: "Comprehensive cloud security platform that continuously monitors, assesses, and improves the security posture of multi-cloud environments.",
    category: "Cybersecurity",
    subcategory: "Cloud Security",
    price: 2400,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Multi-cloud security monitoring",
      "Configuration drift detection",
      "Vulnerability assessment",
      "Compliance monitoring",
      "Security policy enforcement",
      "Risk scoring"
    ],
    benefits: [
      "Reduce cloud security risks by 70%",
      "Automate compliance checks",
      "Improve security visibility",
      "Reduce manual security tasks",
      "Enhance audit readiness"
    ],
    useCases: [
      "Multi-cloud environments",
      "DevOps teams",
      "Cloud architects",
      "Security teams",
      "Compliance officers"
    ],
    targetAudience: [
      "Cloud security architects",
      "DevOps engineers",
      "Security engineers",
      "Cloud administrators",
      "Compliance managers"
    ],
    tags: ["Cybersecurity", "Cloud Security", "DevSecOps", "Compliance", "Risk Management"],
    estimatedDelivery: "3-4 weeks",
    supportLevel: "premium",
    marketPrice: "$2,400 - $12,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  // Privacy Compliance Automation
  {
    id: "privacy-compliance-automation",
    title: "Privacy Compliance & Data Protection Automation Platform",
    description: "Automated privacy compliance platform that helps organizations manage GDPR, CCPA, and other privacy regulations while protecting sensitive data.",
    category: "Cybersecurity",
    subcategory: "Privacy & Compliance",
    price: 1900,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Data discovery and classification",
      "Privacy impact assessments",
      "Consent management",
      "Data subject rights automation",
      "Breach notification",
      "Compliance reporting"
    ],
    benefits: [
      "Automate compliance tasks by 80%",
      "Reduce compliance costs",
      "Improve data protection",
      "Enhance customer trust",
      "Reduce regulatory risks"
    ],
    useCases: [
      "Data protection officers",
      "Compliance teams",
      "Legal departments",
      "IT security teams",
      "Privacy officers"
    ],
    targetAudience: [
      "Privacy officers",
      "Compliance managers",
      "Legal counsel",
      "Data protection officers",
      "Risk managers"
    ],
    tags: ["Cybersecurity", "Privacy", "Compliance", "GDPR", "Data Protection"],
    estimatedDelivery: "3-4 weeks",
    supportLevel: "premium",
    marketPrice: "$1,900 - $8,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  // IoT Security Management
  {
    id: "iot-security-management",
    title: "IoT Security & Device Management Platform",
    description: "Comprehensive IoT security platform that protects connected devices, monitors network traffic, and manages device lifecycle security.",
    category: "Cybersecurity",
    subcategory: "IoT Security",
    price: 2100,
    currency: "$",
    pricingModel: "monthly",
    features: [
      "Device discovery and inventory",
      "Vulnerability scanning",
      "Network traffic monitoring",
      "Device authentication",
      "Firmware update management",
      "Security policy enforcement"
    ],
    benefits: [
      "Protect IoT devices from attacks",
      "Reduce security vulnerabilities",
      "Improve device visibility",
      "Automate security updates",
      "Comply with regulations"
    ],
    useCases: [
      "Smart buildings",
      "Industrial IoT",
      "Healthcare IoT",
      "Retail IoT",
      "Smart cities"
    ],
    targetAudience: [
      "IoT security managers",
      "Network administrators",
      "Security engineers",
      "Facility managers",
      "Operations directors"
    ],
    tags: ["Cybersecurity", "IoT Security", "Device Management", "Network Security", "Industrial IoT"],
    estimatedDelivery: "3-4 weeks",
    supportLevel: "premium",
    marketPrice: "$2,100 - $10,000/month",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  }
];