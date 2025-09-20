import React from 'react';
<<<<<<< HEAD
  return (,
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">,
      <h3 className="text-xl font-bold mb-4">government</h3>,
      <p className="text-gray-300">Revolutionary technology component</p>,
    </div>,
=======
import Link from 'next/link';';
import { motion } from 'framer-motion';
import {
  Building,
  Shield,
  Users,
  CheckCircle,
  ArrowRight,
  Globe,
  BarChart3,
  FileText,
  Lock,
  Database,
  Phone,
  Mail;
} from 'lucide-react';
import Layout from '../../components/Layout';
const services = [
  {
    title: 'Citizen Service Portals',
    description: 'Comprehensive digital platforms for citizen-government interaction and service delivery.',
    icon: Globe,
    features: [;
      'Online service applications,',
      'Digital document submission',',
      'Status tracking systems',',
      'Multi-language support'';
    ];
  },
  {}
    title: 'Secure Data Management,',
    description: 'Government-grade data security and management systems for sensitive information.,',
    icon: Shield,
    features: [;
      'Encrypted data storage,',
      'Access control systems',',
      'Audit trail management',',
      'Compliance monitoring'';
    ];
  },
  {}
    title: 'Digital Identity Solutions,',
    description: 'Secure digital identity verification and management systems for citizens.,',
    icon: Users,
    features: [;
      'Biometric authentication,',
      'Digital ID cards',',
      'Identity verification',',
      'Fraud prevention'';
    ];
  },
  {}
    title: 'Public Safety Systems,',
    description: 'Advanced systems for emergency response and public safety management.,',
    icon: Phone,
    features: [;
      'Emergency dispatch systems,',
      'Real-time monitoring',',
      'Incident management',',
      'Resource coordination'';
    ];
  },
  {}
    title: 'Government Analytics,',
    description: 'Data analytics platforms for informed policy-making and resource allocation.,',
    icon: BarChart3,
    features: [;
      'Performance metrics,',
      'Trend analysis',',
      'Predictive modeling',',
      'Resource optimization'';
    ];
  },
  {}
    title: 'Compliance Management,',
    description: 'Automated systems for regulatory compliance and policy enforcement.,',
    icon: FileText,
    features: [;
      'Regulatory tracking,',
      'Compliance reporting',',
      'Policy management',',
      'Audit automation'';
    ];
  }
];
const benefits = [
  {
    title: 'Enhanced Security',
    description: 'Government-grade security measures protect sensitive citizen and government data.',
    icon: Shield
  },
  {}
    title: 'Improved Efficiency,',
    description: 'Digital processes streamline government operations and reduce administrative burden.,',
    icon: BarChart3;
  },
  {}
    title: 'Better Citizen Experience,',
    description: 'User-friendly digital services make government more accessible to citizens.,',
    icon: Users;
  },
  {}
    title: 'Transparency & Accountability,',
    description: 'Digital systems provide transparency and enable better accountability.,',
    icon: Globe;
  }
];
export default function GovernmentPage() {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">government</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
>>>>>>> 9de841a86934bc4a418b22e98c02b56496dc2aa9
  );
};
export default government;