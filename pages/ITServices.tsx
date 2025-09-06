<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
import React from "react";
import Layout from "../components/Layout";
<<<<<<< HEAD
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
import React from 'react';
import Layout from '../components/Layout';
>>>>>>> origin/automation-improvements-final
=======
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
import Layout from '../components/Layout';
>>>>>>> cursor/integrate-build-improve-and-re-verify-8b20


class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}

>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
import React from "react";
import Layout from "../components/Layout";
import React from 'react';
import Layout from '../components/Layout';

export default function ITServices() {
  return (
    <Layout
      title="IT Services - Zion Tech Group"
      description="Comprehensive IT services including cloud solutions, cybersecurity, and digital transformation."
    >
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
<<<<<<< HEAD
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              IT Services
            </h1>
=======
<<<<<<< HEAD
<<<<<<< HEAD
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              IT Services
            </h1>
=======
            <h1 className="text-4xl font-bold text-gray-900 mb-4">IT Services</h1>
>>>>>>> origin/automation-improvements-final
=======
            <h1 className="text-4xl font-bold text-gray-900 mb-4">IT Services</h1>
>>>>>>> cursor/integrate-build-improve-and-re-verify-8b20
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete IT solutions to power your digital transformation.
            </p>
          </div>
          <div className="text-center">
<<<<<<< HEAD
            <p className="text-gray-600">
              IT Services page is under construction.
            </p>
=======
<<<<<<< HEAD
<<<<<<< HEAD
            <p className="text-gray-600">
              IT Services page is under construction.
            </p>
=======
            <p className="text-gray-600">IT Services page is under construction.</p>
>>>>>>> origin/automation-improvements-final
=======
            <p className="text-gray-600">IT Services page is under construction.</p>
>>>>>>> cursor/integrate-build-improve-and-re-verify-8b20
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
          </div>
        </div>
      </div>
    </Layout>
export default function ITServices() {;
  return (
    <Layout
      title="IT Services - Zion Tech Group"
      description="Comprehensive IT services including cloud solutions, cybersecurity, and digital transformation.">;
      <div className="min-h-screen bg-gray-50 py-20">;
        <div className="container mx-auto px-4">;
          <div className="text-center mb-12">;
            <h1 className="text-4xl font-bold text-gray-900 mb-4">;
              IT Services;
            </h1>;
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">;
              Complete IT solutions to power your digital transformation.;
            </p>;
          </div>;
          <div className="text-center">;
            <p className="text-gray-600">;
import React from './react';
import Layout from "../components / Layout";
;
export default /**
 * ITServices - Function description
 */
function ITServices() {
  return (
    <Layout;
      title="IT Services - Zion Tech Group";
      description="Comprehensive IT services including cloud solutions, cybersecurity, and digital transformation.";
    >;
      <div className="min - h-screen bg - gray - 50 py - 20">;
        <div className="container mx - auto px - 4">;
          <div className="text - center mb - 12">;
            <h1 className="text - 4xl font - bold text - gray - 900 mb - 4">;
              IT Services;
            </h1>;
            <p className="text - xl text - gray - 600 max - w-3xl mx - auto">;
              Complete IT solutions to power your digital transformation.;
            </p>;
          </div>;
          <div className="text - center">;
            <p className="text - gray - 600">;
              IT Services page is under construction.;
            </p>;
          </div>;
        </div>;
      </div>;
<<<<<<< HEAD
    </Layout>;
  );
}
}
    </Layout>);
}
=======

=======

=======

}
<<<<<<< HEAD
=======
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
}
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-8b20
=======
import { Star } from 'lucide-react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { 
  Server, 
  Shield, 
  Cloud, 
  Network, 
  Database, 
  Smartphone, 
  Monitor, 
  ArrowRight, 
  CheckCircle, 
  Clock,
  Users,
  Globe,
  Lock,
  Zap,
  Settings,
  BarChart3,
  Headphones,
  Wrench,
  HardDrive,
  Wifi,
  Phone,
  Mail,
  MapPin,
  FileText,
  Cpu;
} from 'lucide-react';

const itServices = [
  {
    category: "Managed IT Services",
    icon: Server,
    color: "from-blue-500 to-cyan-500",
    services: [
      {
        name: "24/7 IT Support & Monitoring",
        description: "Round-the-clock monitoring and support for your IT infrastructure",
        features: ["24/7 monitoring", "Remote support", "Proactive maintenance", "Help desk support"],
        pricing: "Starting at $150/user/month",
        delivery: "Immediate"
      },
      {
        name: "Network Infrastructure Management",
        description: "Complete management of your network infrastructure and connectivity",
        features: ["Network design", "Router configuration", "Switch management", "WiFi optimization"],
        pricing: "Starting at $200/month",
        delivery: "1-2 weeks"
      },
      {
        name: "Server Management & Maintenance",
        description: "Comprehensive server administration and maintenance services",
        features: ["Server monitoring", "Performance optimization", "Security updates", "Backup management"],
        pricing: "Starting at $300/server/month",
        delivery: "1-3 weeks"
      },
      {
        name: "AI-Powered IT Operations",
        description: "Intelligent IT operations using AI for predictive maintenance and automation",
        features: ["Predictive maintenance", "Automated troubleshooting", "Performance optimization", "Anomaly detection"],
        pricing: "Starting at $800/month",
        delivery: "4-8 weeks"
      },
      {
        name: "Zero-Trust Security Architecture",
        description: "Implement zero-trust security model for enhanced protection",
        features: ["Identity verification", "Micro-segmentation", "Continuous monitoring", "Risk assessment"],
        pricing: "Starting at $1,200/month",
        delivery: "6-12 weeks"
      }
    ]
  },
  {
    category: "Cloud Services & Migration",
    icon: Cloud,
    color: "from-purple-500 to-pink-500",
    services: [
      {
        name: "Cloud Migration Services",
        description: "Seamless migration of your infrastructure to cloud platforms",
        features: ["AWS/Azure/GCP migration", "Data migration", "Application migration", "Security configuration"],
        pricing: "Starting at $5,000/project",
        delivery: "4-8 weeks"
      },
      {
        name: "Cloud Infrastructure Management",
        description: "Ongoing management and optimization of cloud resources",
        features: ["Resource optimization", "Cost management", "Security monitoring", "Auto-scaling"],
        pricing: "Starting at $500/month",
        delivery: "2-4 weeks"
      },
      {
        name: "Hybrid Cloud Solutions",
        description: "Integration of on-premises and cloud infrastructure",
        features: ["Hybrid architecture", "Data synchronization", "Security integration", "Disaster recovery"],
        pricing: "Starting at $800/month",
        delivery: "6-10 weeks"
      }
    ]
  },
  {
    category: "Cybersecurity Services",
    icon: Shield,
    color: "from-red-500 to-orange-500",
    services: [
      {
        name: "Security Assessment & Auditing",
        description: "Comprehensive security evaluation and vulnerability assessment",
        features: ["Penetration testing", "Vulnerability scanning", "Compliance auditing", "Security reporting"],
        pricing: "Starting at $2,500/assessment",
        delivery: "2-4 weeks"
      },
      {
        name: "Managed Security Services",
        description: "Ongoing security monitoring and threat management",
        features: ["SIEM monitoring", "Threat detection", "Incident response", "Security updates"],
        pricing: "Starting at $400/month",
        delivery: "1-2 weeks"
      },
      {
        name: "Compliance & Governance",
        description: "Help with regulatory compliance and security governance",
        features: ["HIPAA compliance", "GDPR compliance", "SOX compliance", "Policy development"],
        pricing: "Starting at $1,500/month",
        delivery: "4-8 weeks"
      }
    ]
  },
  {
    category: "Data Management & Backup",
    icon: Database,
    color: "from-green-500 to-emerald-500",
    services: [
      {
        name: "Data Backup & Recovery",
        description: "Comprehensive data protection and disaster recovery solutions",
        features: ["Automated backups", "Offsite storage", "Disaster recovery", "Data restoration"],
        pricing: "Starting at $200/month",
        delivery: "1-2 weeks"
      },
      {
        name: "Database Administration",
        description: "Professional database management and optimization",
        features: ["Performance tuning", "Backup management", "Security hardening", "Monitoring"],
        pricing: "Starting at $350/month",
        delivery: "2-4 weeks"
      },
      {
        name: "Data Migration Services",
        description: "Safe and secure data migration between systems",
        features: ["Data mapping", "Migration planning", "Data validation", "Zero-downtime migration"],
        pricing: "Starting at $3,000/project",
        delivery: "3-6 weeks"
      }
    ]
  },
  {
    category: "Emerging IT Technologies",
    icon: Cpu,
    color: "from-indigo-500 to-purple-500",
    services: [
      {
        name: "Edge Computing Solutions",
        description: "Deploy computing power closer to data sources for faster processing",
        features: ["Edge deployment", "Real-time processing", "Reduced latency", "IoT integration"],
        pricing: "Starting at $2,500/month",
        delivery: "8-12 weeks"
      },
      {
        name: "5G Network Implementation",
        description: "Implement 5G networks for ultra-fast connectivity and IoT support",
        features: ["5G infrastructure", "Network optimization", "IoT connectivity", "Performance monitoring"],
        pricing: "Starting at $15,000/project",
        delivery: "12-20 weeks"
      },
      {
        name: "Quantum Computing Integration",
        description: "Integrate quantum computing capabilities for complex problem solving",
        features: ["Quantum algorithms", "Hybrid computing", "Optimization problems", "Cryptography"],
        pricing: "Starting at $25,000/month",
        delivery: "16-24 weeks"
      },
      {
        name: "Blockchain Infrastructure",
        description: "Build and maintain blockchain networks for secure transactions",
        features: ["Blockchain setup", "Smart contracts", "Consensus mechanisms", "Security auditing"],
        pricing: "Starting at $8,500/month",
        delivery: "10-16 weeks"
      }
    ]
  }
];

const microSaaS = [
  {
    name: "IT Asset Management",
    description: "Track and manage all your IT assets from a single dashboard",
    features: ["Asset tracking", "License management", "Maintenance scheduling", "Cost analysis"],
    pricing: "$99/month per 100 assets",
    icon: Monitor
  },
  {
    name: "Network Monitoring Dashboard",
    description: "Real-time network performance monitoring and alerting",
    features: ["Real-time monitoring", "Performance alerts", "Traffic analysis", "Uptime reporting"],
    pricing: "$149/month per location",
    icon: Network
  },
  {
    name: "Password Management System",
    description: "Secure password management and team collaboration",
    features: ["Secure storage", "Team sharing", "Password generation", "Access control"],
    pricing: "$79/month per 50 users",
    icon: Lock
  },
  {
    name: "IT Help Desk Ticketing",
    description: "Streamlined IT support ticket management system",
    features: ["Ticket creation", "Priority management", "SLA tracking", "Knowledge base"],
    pricing: "$199/month per 25 agents",
    icon: Headphones
  },
  {
    name: "Backup Monitoring Service",
    description: "Automated backup verification and monitoring",
    features: ["Backup verification", "Failure alerts", "Recovery testing", "Compliance reporting"],
    pricing: "$129/month per 10TB",
    icon: HardDrive
  },
  {
    name: "IT Documentation Platform",
    description: "Centralized IT documentation and knowledge management",
    features: ["Document storage", "Version control", "Team collaboration", "Search functionality"],
    pricing: "$89/month per team",
    icon: FileText
  },
  {
    name: "AI-Powered IT Analytics",
    description: "Intelligent analytics for IT operations and performance optimization",
    features: ["Performance insights", "Predictive analytics", "Cost optimization", "Trend analysis"],
    pricing: "$299/month per 100 devices",
    icon: BarChart3
  },
  {
    name: "Cloud Cost Optimizer",
    description: "Automated cloud cost optimization and resource management",
    features: ["Cost analysis", "Resource optimization", "Waste detection", "Budget alerts"],
    pricing: "$199/month per $10k spend",
    icon: Cloud
  },
  {
    name: "Security Compliance Tracker",
    description: "Automated security compliance monitoring and reporting",
    features: ["Compliance tracking", "Audit reports", "Risk assessment", "Policy management"],
    pricing: "$399/month per 500 users",
    icon: Shield
  },
  {
    name: "IT Automation Workflows",
    description: "Automate repetitive IT tasks with intelligent workflows",
    features: ["Task automation", "Workflow builder", "Integration APIs", "Custom triggers"],
    pricing: "$149/month per 50 workflows",
    icon: Settings
  },
  {
    name: "Remote Work IT Suite",
    description: "Complete IT solution for remote and hybrid work environments",
    features: ["VPN management", "Device security", "Collaboration tools", "Performance monitoring"],
    pricing: "$79/month per user",
    icon: Wifi
  }
];

const processSteps = [
  {
    step: "01",
    title: "IT Assessment",
    description: "We evaluate your current IT infrastructure and identify areas for improvement."
  },
  {
    step: "02",
    title: "Strategy Development",
    description: "Our experts create a comprehensive IT strategy aligned with your business goals."
  },
  {
    step: "03",
    title: "Implementation",
    description: "We implement solutions with minimal disruption to your business operations."
  },
  {
    step: "04",
    title: "Monitoring & Support",
    description: "Continuous monitoring and proactive support to ensure optimal performance."
  },
  {
    step: "05",
    title: "Optimization",
    description: "Ongoing optimization and updates to keep your IT infrastructure current."
  }
];

const stats = [
  { number: "99.9%", label: "Uptime Guarantee" },
  { number: "15min", label: "Response Time" },
  { number: "500+", label: "IT Projects Completed" },
  { number: "24/7", label: "Support Available" }
];
=======
import React from "react";
import Layout from "../components/Layout";
>>>>>>> origin/main

export default function ITServices() {
  return (
    <Layout
      title="IT Services - Zion Tech Group"
      description="Comprehensive IT services including cloud solutions, cybersecurity, and digital transformation."
    >
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              IT Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete IT solutions to power your digital transformation.
            </p>
          </div>
          <div className="text-center">
            <p className="text-gray-600">
              IT Services page is under construction.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> origin/automation-improvements-final
=======
}
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
=======
}
>>>>>>> origin/main
>>>>>>> cursor/integrate-build-improve-and-re-verify-8b20
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
