import React from 'react';
<<<<<<< HEAD
import Layout from "../../components/Layout";";
import { motion } from 'framer-motion';
import { Cloud, Server, Database, Shield, Zap, CheckCircle, ArrowRight } from 'lucide-react';
export default function CloudServicesPage() {
  const cloudServices = [;
    {}
      title: "Cloud Migration","
      description: "Seamless migration of your infrastructure to the cloud","
      icon: Cloud,
      features: ["Zero Downtime", "Data Integrity", "Cost Optimization"]"
    },
    {}
      title: "Cloud Infrastructure","
      description: "Scalable and secure cloud infrastructure setup","
      icon: Server,
      features: ["Auto Scaling", "High Availability", "Disaster Recovery"]"
    },
    {}
      title: "Cloud Security","
      description: "Comprehensive security solutions for cloud environments","
      icon: Shield,
      features: ["Identity Management", "Data Encryption", "Compliance"]"
    },
    {}
      title: "Cloud Optimization","
      description: "Performance and cost optimization for cloud resources","
      icon: Zap,
      features: ["Cost Analysis", "Performance Tuning", "Resource Management"]"
    }
;  ];
  return (;
    <Layout );
      title="Cloud Solutions - Zion Tech Group"";
      description="Comprehensive cloud solutions including migration, infrastructure, security, and optimization services.""
    >;
      <div className="min-h-screen bg-gray-50">";
  ];

const cloudServices = [
  {
    title: "Cloud Migration",
    description: "Seamless migration of your infrastructure to the cloud",
    icon: Cloud,
    features: ["Zero-downtime migration", "Cost optimization", "Performance improvement", "Scalability"],
    pricing: "$5,000 - $25,000/project"
  },
  {
    title: "Cloud Infrastructure",
    description: "Design and implement scalable cloud infrastructure",
    icon: Server,
    features: ["Auto-scaling", "Load balancing", "High availability", "Disaster recovery"],
    pricing: "$2,000 - $10,000/month"
  },
  {
    title: "Database Services",
    description: "Managed database services with high availability",
    icon: Database,
    features: ["Managed databases", "Backup & recovery", "Performance tuning", "Security"],
    pricing: "$1,000 - $5,000/month"
  },
  {
    title: "Cloud Security",
    description: "Comprehensive security solutions for cloud environments",
    icon: Shield,
    features: ["Security audits", "Compliance", "Access control", "Monitoring"],
    pricing: "$1,500 - $8,000/month"
  },
  {
    title: "DevOps Automation",
    description: "Automated deployment and infrastructure management",
    icon: Zap,
    features: ["CI/CD pipelines", "Infrastructure as code", "Monitoring", "Alerting"],
    pricing: "$2,500 - $12,000/month"
  }
];

export default function CloudServicesPage() {
=======

const cloud: React.FC = () => {
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">cloud</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default cloud;
