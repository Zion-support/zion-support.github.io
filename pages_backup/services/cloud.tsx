import React from 'react';
<<<<<<< HEAD
=======
import Layout from "../../components/Layout";";

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
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d

const cloud: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">cloud</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default cloud;