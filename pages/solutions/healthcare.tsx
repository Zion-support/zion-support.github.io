import React from 'react';
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
=======
import Layout from '../../components/layout/Layout';

import { 
  Users, Shield, Brain, Database, Cpu, Cloud, 
  ArrowRight, Star, CheckCircle, TrendingUp, Heart, Globe,
  Zap, Lock, BarChart3, Rocket, Atom, Server, Activity
} from 'lucide-react';

const HealthcareSolutionsPage: React.FC = () => {
  const solutions = [
    {
      title: "AI-Powered Diagnostics",
      description: "Advanced AI systems for accurate and rapid medical diagnosis",
      features: ["Image Analysis", "Pattern Recognition", "Predictive Analytics", "Clinical Decision Support"],
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      href: "/services?category=ai-ml"
    },
    {
      title: "Healthcare Cybersecurity",
      description: "HIPAA-compliant security solutions protecting patient data",
      features: ["Data Encryption", "Access Control", "Audit Logging", "Compliance Management"],
      icon: Shield,
      color: "from-red-500 to-orange-500",
      href: "/services?category=cybersecurity"
    },
    {
      title: "Telemedicine Platforms",
      description: "Secure and scalable virtual healthcare delivery systems",
      features: ["Video Consultations", "Patient Portals", "E-prescribing", "Remote Monitoring"],
      icon: Users,
      color: "from-blue-500 to-cyan-500",
      href: "/services?category=telemedicine"
    },
    {
      title: "Health Data Analytics",
      description: "Comprehensive analytics for population health and clinical insights",
      features: ["Population Health", "Clinical Analytics", "Predictive Modeling", "Quality Metrics"],
      icon: Database,
      color: "from-emerald-500 to-teal-500",
      href: "/services?category=data"
    },
    {
      title: "IoT Medical Devices",
      description: "Connected medical devices for continuous patient monitoring",
      features: ["Wearable Sensors", "Remote Monitoring", "Data Integration", "Alert Systems"],
      icon: Activity,
      color: "from-indigo-500 to-purple-500",
      href: "/services?category=iot"
    },
    {
      title: "Blockchain Health Records",
      description: "Secure and immutable patient health record management",
      features: ["Data Integrity", "Interoperability", "Patient Control", "Audit Trail"],
      icon: Lock,
      color: "from-yellow-500 to-orange-500",
      href: "/services?category=blockchain"
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: "Patient Safety",
      description: "Enhanced patient care and safety through technology",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: Shield,
      title: "Compliance",
      description: "HIPAA and regulatory compliance built-in",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Zap,
      title: "Efficiency",
      description: "Streamlined workflows and improved productivity",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Users,
      title: "Accessibility",
      description: "Improved access to healthcare services",
      color: "from-green-500 to-emerald-500"
    }
  ];

  const specialties = [
    {
      name: "Radiology",
      description: "AI-powered imaging analysis and diagnosis",
      icon: Activity,
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Cardiology",
      description: "Cardiac monitoring and predictive analytics",
      icon: Heart,
      color: "from-red-500 to-pink-500"
    },
    {
      name: "Oncology",
      description: "Cancer detection and treatment planning",
      icon: Brain,
      color: "from-purple-500 to-indigo-500"
    },
    {
      name: "Emergency Medicine",
      description: "Rapid response and triage systems",
      icon: Zap,
      color: "from-yellow-500 to-orange-500"
    }
  ];
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d

const healthcare: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>healthcare | Zion Tech Group</title>
        <meta name="description" content="healthcare - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">healthcare</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};

export default healthcare;