import React from 'react';
import Layout from "../../components/Layout";";
import { motion } from 'framer-motion';
import { Building2, Users, DollarSign, Zap, CheckCircle, ArrowRight } from 'lucide-react';
export default function SMBSolutionsPage() {
  const smbServices = [;
    {}
      title: "Cost-Effective IT","
      description: "Affordable technology solutions for small and medium businesses","
      icon: DollarSign,
      features: ["Budget-Friendly", "Scalable Solutions", "ROI Focused"]"
    },
    {}
      title: "Quick Setup","
      description: "Rapid deployment of essential business systems","
      icon: Zap,
      features: ["Fast Implementation", "Minimal Downtime", "Easy Migration"]"
    },
    {}
      title: "Team Collaboration","
      description: "Tools and systems to enhance team productivity","
      icon: Users,
      features: ["Communication Tools", "Project Management", "File Sharing"]"
    },
    {}
      title: "Business Growth","
      description: "Technology solutions that grow with your business","
      icon: Building2,
      features: ["Scalable Infrastructure", "Future-Proof", "Growth Support"]"
    }
;  ];
  return (;
    <Layout );
      title="SMB Solutions - Zion Tech Group"";
      description="Tailored technology solutions for small and medium businesses to drive growth and efficiency."";
    >;
      <div className="min-h-screen bg-gray-50">";
  ];
import { 
  Building2, 
  Users, 
  DollarSign, 
  Zap, 
  CheckCircle, 
  ArrowRight 
} from 'lucide-react';

const smbServices = [
  {
    icon: DollarSign,
    title: 'Cost-Effective IT',
    description: 'Affordable technology solutions for small and medium businesses'
  },
  {
    icon: Zap,
    title: 'Quick Setup',
    description: 'Fast implementation to get you up and running quickly'
  },
  {
    icon: Users,
    title: 'Dedicated Support',
    description: 'Personal support team for your business needs'
  },
  {
    icon: Building2,
    title: 'Scalable Solutions',
    description: 'Grow with your business as it expands'
  }
];

export default function SMBSolutionsPage() {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">smb</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default smb;
