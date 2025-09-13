import { ProductListing } from "../src/types/listings";

export const innovativeMicroSaasV2Services: ProductListing[] = [
  {
    id: "ai-powered-customer-success-platform",
    title: "AI-Powered Customer Success Platform",
    description: "Intelligent customer success platform that predicts churn, automates onboarding, and provides personalized customer journey optimization.",
    category: "Micro SAAS",
    subcategory: "Customer Success",
    price: 349,
    currency: "$",
    tags: ["AI", "Customer Success", "Churn Prevention", "Automation"],
    author: {
      name: "Zion Tech Group",
      avatar: "/avatars/ziontech.jpg",
      verified: true
    },
    images: ["/images/services/ai-customer-success.jpg"],
    rating: 4.8,
    reviewCount: 267,
    location: "Middletown, DE",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    features: [
      "AI-powered churn prediction",
      "Automated customer onboarding",
      "Personalized success playbooks",
      "Real-time health scoring",
      "Integration with major CRM platforms"
    ],
    benefits: [
      "Reduce churn by 40%",
      "Increase customer lifetime value by 60%",
      "Automate 80% of success tasks",
      "Proactive customer intervention"
    ],
    pricing: {
      monthly: 349,
      yearly: 3490,
      custom: "Contact for enterprise pricing"
    }
  },
  {
    id: "quantum-encrypted-file-sharing",
    title: "Quantum-Encrypted File Sharing Platform",
    description: "Next-generation file sharing platform with quantum-resistant encryption, zero-knowledge architecture, and advanced access controls.",
    category: "Micro SAAS",
    subcategory: "File Security",
    price: 199,
    currency: "$",
    tags: ["Quantum Security", "File Sharing", "Encryption", "Zero Knowledge"],
    author: {
      name: "Zion Tech Group",
      avatar: "/avatars/ziontech.jpg",
      verified: true
    },
    images: ["/images/services/quantum-file-sharing.jpg"],
    rating: 4.9,
    reviewCount: 189,
    location: "Middletown, DE",
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    },
    features: [
      "Quantum-resistant encryption",
      "Zero-knowledge architecture",
      "Advanced access controls",
      "Real-time collaboration tools",
      "Compliance with global security standards"
    ],
    benefits: [
      "Future-proof security against quantum attacks",
      "Complete privacy with zero-knowledge architecture",
      "Secure collaboration for remote teams",
      "Regulatory compliance assurance"
    ],
    pricing: {
      monthly: 199,
      yearly: 1990,
      custom: "Contact for enterprise pricing"
    }
  }
];