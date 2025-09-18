import React from 'react';
<<<<<<< HEAD
import Head from 'next/head';
import { motion } from 'framer-motion';

import {
  Shield
  Lock
  Eye
  Zap
  Cpu
  Database
  ArrowRight
  CheckCircle
  Star
  Users
  Clock
  TrendingUp;

} from 'lucide-react';

import EnhancedNavigation from '../../components / EnhancedNavigation';
import EnhancedFooter from '../../components / EnhancedFooter';
export default /**
 * CybersecurityServicesPage - Function description
 */
function CybersecurityServicesPage() {
  const services = [;

    {
      title: 'Advanced Threat Detection'
      description: 'AI-powered threat detection and response systems'
      features: [
        'Real-time Monitoring'
        'Behavioral Analysis'
        'Automated Response'
        '24/7 Protection'
      ]
      price: 'From $8,000'
      icon: Eye
      color: 'from-red-500 to-orange-500'
    }
    {
      title: 'Quantum-Resistant Encryption'
      description: 'Future-proof security with quantum-resistant cryptography'
      features: [
        'Post-Quantum Algorithms'
        'Key Management'
        'Compliance Ready'
        'Future-Proof'
      ]
      price: 'From $12,000'
      icon: Lock
      color: 'from-purple-500 to-pink-500'
    }
    {
      title: 'Security Auditing & Compliance'
      description:
        'Comprehensive security assessments and compliance solutions'
      features: [
        'Penetration Testing'
        'Vulnerability Assessment'
        'SOC2 Compliance'
        'GDPR Ready'
      ]
      price: 'From $5,000'
      icon: Shield
      color: 'from-blue-500 to-cyan-500'
    }
    {
      title: 'Zero Trust Architecture'
      description: 'Modern security framework for distributed environments'
      features: [
        'Identity Verification'
        'Access Control'
        'Network Segmentation'
        'Continuous Monitoring'
      ]
      price: 'From $15,000'
      icon: Zap
      color: 'from-emerald-500 to-teal-500'
    }
  ];
  const stats = [
    { number: '99.99%', label: 'Threat Detection Rate', icon: Shield }
    { number: '24/7', label: 'Security Monitoring', icon: Eye }
    { number: '0', label: 'Security Breaches', icon: Lock }
    { number: '500+', label: 'Protected Systems', icon: CheckCircle }
  ];






export default function CybersecurityServicesPage() {
  const services = [


  Shield,
  Lock,
  Eye,
  Zap,
  Cpu,
  Database,
  ArrowRight,
  CheckCircle,
  Star,
  Users,

  Clock,
  TrendingUp,
} from 'lucide-react';

import EnhancedNavigation from '../../components/EnhancedNavigation';
import EnhancedFooter from '../../components/EnhancedFooter';
import React from 'react',
import Head from 'next/head',
import { motion } from 'framer-motion',
import {
  Shield, Lock, Eye, Zap, Cpu, Database,
  ArrowRight, CheckCircle, Star, Users, Clock, TrendingUp
} from 'lucide-react',
import EnhancedNavigation from '../../components/EnhancedNavigation',
import EnhancedFooter from '../../components/EnhancedFooter',
export default function CybersecurityServicesPage() {
  const services = [

    {
      title: "Advanced Threat Detection",
      description: "AI-powered threat detection and response systems",
      features: ["Real-time Monitoring", "Behavioral Analysis", "Automated Response", "24/7 Protection"],
      price: "From $8,000",


      icon: Eye,
      color: "from-red-500 to-orange-500"
    },
    {
      title: "Quantum-Resistant Encryption",
      description: "Future-proof security with quantum-resistant cryptography",
      features: ["Post-Quantum Algorithms", "Key Management", "Compliance Ready", "Future-Proof"],
      price: "From $12,000",
      icon: Lock,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Security Auditing & Compliance",
      description: "Comprehensive security assessments and compliance solutions",
      features: ["Penetration Testing", "Vulnerability Assessment", "SOC2 Compliance", "GDPR Ready"],
      price: "From $5,000",
      icon: Shield,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Zero Trust Architecture",
      description: "Modern security framework for distributed environments",
      features: ["Identity Verification", "Access Control", "Network Segmentation", "Continuous Monitoring"],
      price: "From $15,000",
      icon: Zap,

      color: 'from-emerald-500 to-teal-500',
    },;
  ];

      color: "from-emerald-500 to-teal-500"
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  ],

  const stats = [
    { number: "99.99%", label: "Threat Detection Rate", icon: Shield },
    { number: "24/7", label: "Security Monitoring", icon: Eye },
    { number: "0", label: "Security Breaches", icon: Lock },
    { number: "500+", label: "Protected Systems", icon: CheckCircle   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  ],

=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee

const cybersecurity: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>cybersecurity | Zion Tech Group</title>
        <meta name="description" content="cybersecurity - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">cybersecurity</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};

export default cybersecurity;
