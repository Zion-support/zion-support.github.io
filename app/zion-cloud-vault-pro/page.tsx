import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
<<<<<<< HEAD
=======
import { Clock } from 'lucide-react';
import { Users } from 'lucide-react';
import { Award } from 'lucide-react';
import { Star } from 'lucide-react';
import { Shield } from 'lucide-react';
import { Database } from 'lucide-react';
import { CheckCircle } from 'lucide-react';
import { Sparkles } from 'lucide-react';
import { Globe } from 'lucide-react';
import { Lock } from 'lucide-react';
import { Activity } from 'lucide-react';
import { Mail } from 'lucide-react';
import { Headphones } from 'lucide-react';
import { Phone } from 'lucide-react';
import { Smartphone } from 'lucide-react';
import { Cloud } from 'lucide-react';


export default function ZionCloudVaultPro() {
  const features = [
    {
      title: "End-to-End Encryption",
      description: "Military-grade encryption protects your data at rest and in transit, ensuring only you can access your files.",
      icon: <Shield className="w-8 h-8" />,
      benefits: ["AES-256 encryption", "Zero-knowledge architecture", "Client-side encryption", "Secure key management"]
    },
    {
      title: "Unlimited Storage Capacity",
      description: "Store unlimited files and data without worrying about storage limits or additional costs.",
      icon: <Database className="w-8 h-8" />,
      benefits: ["Unlimited storage", "No file size limits", "Automatic scaling", "Cost-effective pricing"]
    },
    {
      title: "Cross-Platform Sync",
      description: "Access your files from any device with seamless synchronization across desktop, mobile, and web platforms.",
      icon: <Smartphone className="w-8 h-8" />,
      benefits: ["Real-time sync", "Multi-device access", "Offline capabilities", "Conflict resolution"]
    },
    {
      title: "Automated Backup Scheduling",
      description: "Set up automated backups for your critical data with customizable schedules and retention policies.",
      icon: <Clock className="w-8 h-8" />,
      benefits: ["Custom schedules", "Retention policies", "Incremental backups", "Backup verification"]
    },
    {
      title: "Version Control & Recovery",
      description: "Track file versions and recover previous versions with our advanced version control system.",
      icon: <Archive className="w-8 h-8" />,
      benefits: ["Version history", "Point-in-time recovery", "Change tracking", "Rollback capabilities"]
    },
    {
      title: "Team Collaboration Tools",
      description: "Share files securely with team members and collaborate in real-time with advanced permission controls.",
      icon: <Users className="w-8 h-8" />,
      benefits: ["Secure sharing", "Permission controls", "Real-time collaboration", "Activity tracking"]
    }
  ];

  const storageStats = [
    { number: "99.99%", label: "Uptime Guarantee", icon: <Award className="w-6 h-6" /> },
    { number: "256-bit", label: "AES Encryption", icon: <Lock className="w-6 h-6" /> },
    { number: "Unlimited", label: "Storage Capacity", icon: <Database className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Headphones className="w-6 h-6" /> }
  ];

  const pricingPlans = [
    {
      name: "Personal",
      price: "$99",
      period: "month",
      description: "Perfect for individuals and small teams",
      features: [
        "Unlimited storage",
        "End-to-end encryption",
        "Cross-platform sync",
        "Basic sharing",
        "Email support",
        "Up to 5 users"
      ],
      popular: false
    },
    {
      name: "Business",
      price: "$199",
      period: "month",
      description: "Ideal for growing businesses",
      features: [
        "Unlimited storage",
        "Advanced encryption",
        "Team collaboration",
        "Advanced sharing",
        "Priority support",
        "Up to 25 users",
        "Admin controls",
        "Audit logs"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$399",
      period: "month",
      description: "Complete solution for large organizations",
      features: [
        "Unlimited storage",
        "Military-grade encryption",
        "Advanced collaboration",
        "Custom integrations",
        "24/7 dedicated support",
        "Unlimited users",
        "SSO integration",
        "On-premise deployment"
      ],
      popular: false
    }
  ];

export default function ZionCloudVaultProPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Zion Cloud Vault Pro - Zion Tech Group</title>
        <meta name="description" content="Zion Cloud Vault Pro solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">Zion Cloud Vault Pro</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Discover our comprehensive zion cloud vault pro solutions designed to meet your business needs.
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