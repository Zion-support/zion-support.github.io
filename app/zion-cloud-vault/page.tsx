<<<<<<< HEAD
<<<<<<< HEAD
import { ArrowRight, Cloud, Lock, Shield, Zap, Globe, CheckCircle, Star, Database } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
=======
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Search } from 'lucide-react';
import { Star } from 'lucide-react';
import { Shield } from 'lucide-react';
import { Database } from 'lucide-react';
import { CheckCircle } from 'lucide-react';
import { Zap } from 'lucide-react';
import { Globe } from 'lucide-react';
import { Lock } from 'lucide-react';
import { Filter } from 'lucide-react';
import { Cloud } from 'lucide-react';

>>>>>>> 2fda46b8c81d66ef34322b3dc826b41bdfbc86e8

=======
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
const features = [
    {
      title: "Predictive Analytics",
      description: "Advanced machine learning models for accurate financial forecasting",
      icon: "Brain"
    },
    {
      title: "Risk Assessment",
      description: "Comprehensive risk analysis and mitigation strategies",
      icon: "Shield"
    },
    {
      title: "Real-time Monitoring",
      description: "Continuous monitoring of financial metrics and KPIs",
      icon: "Activity"
    },
    {
      title: "Automated Reporting",
      description: "Generate detailed reports automatically",
      icon: "FileText"
    }
  ];
const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CFO",
      company: "TechCorp",
      content: "The AI financial analysis platform has revolutionized our decision-making process.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Investment Manager",
      company: "FinancePro",
      content: "Incredible accuracy and insights that have improved our portfolio performance.",
      rating: 5
    }
  ];
>>>>>>> 1768cb0a99d39a994ad89c8211ed1a93ecd366f9
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
      popular: false
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
      popular: true
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
      popular: false
    }
  ];

export default function ZionCloudVaultPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Zion Cloud Vault - Zion Tech Group</title>
        <meta name="description" content="Zion Cloud Vault solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">Zion Cloud Vault</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Discover our comprehensive zion cloud vault solutions designed to meet your business needs.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Expert Solutions</h3>
              <p className="text-gray-300">
                Our team of experts delivers tailored solutions for your specific requirements.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Cutting-Edge Technology</h3>
              <p className="text-gray-300">
                We use the latest technologies and best practices to ensure optimal performance.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">24/7 Support</h3>
              <p className="text-gray-300">
                Get round-the-clock support from our dedicated team of professionals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

}