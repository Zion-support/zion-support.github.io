import { Link } from 'react-router-dom';
import { ArrowRight, Home, Search, AlertTriangle } from 'lucide-react';

export default function ZionCloudVault() {
  const features = [
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Secure Cloud Storage",
      description: "Enterprise-grade cloud storage with 99.999999999% durability and 99.9% availability"
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "End-to-End Encryption",
      description: "Military-grade AES-256 encryption for data at rest and in transit"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Advanced Security",
      description: "Multi-factor authentication, zero-knowledge architecture, and SOC 2 compliance"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lightning Fast Sync",
      description: "Real-time file synchronization across all your devices with intelligent caching"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global CDN",
      description: "Worldwide content delivery network for fast access from anywhere"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Unlimited Storage",
      description: "Scale from GB to PB with no storage limits and automatic scaling"
    }
  ];

  const storageFeatures = [
    "File Versioning & History",
    "Collaborative Workspaces",
    "Advanced Search & Filtering",
    "Mobile & Desktop Apps",
    "API & SDK Access",
    "Custom Branding",
    "Audit Logs & Reporting",
    "Backup & Recovery",
    "Compliance Tools (GDPR, HIPAA)",
    "Team Management",
    "Share Links & Permissions",
    "Integration with 100+ Apps"
  ];

  const pricingPlans = [
    {
      name: "Personal",
      price: "$9",
      period: "/month",
      description: "Perfect for individuals",
      features: [
        "1TB storage",
        "5 devices",
        "Basic encryption",
        "Email support",
        "Mobile apps",
        "File sharing"
      ],
      popular: false;
    },
    {
      name: "Business",
      price: "$25",
      period: "/month",
      description: "Most popular for teams",
      features: [
        "5TB storage",
        "Unlimited devices",
        "Advanced encryption",
        "Priority support",
        "Team collaboration",
        "Admin dashboard",
        "API access"
      ],
      popular: true;
    },
    {
      name: "Enterprise",
      price: "$99",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited storage",
        "Advanced security",
        "Custom integrations",
        "24/7 phone support",
        "White-label solution",
        "Compliance tools",
        "Dedicated account manager"
      ],
      popular: false;
    }
  ];

}

}