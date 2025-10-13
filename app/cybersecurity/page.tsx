import { Helmet } from 'react-helmet-async';
import { AlertTriangle } from 'lucide-react';
import { Users } from 'lucide-react';
import { Star } from 'lucide-react';
import { Shield } from 'lucide-react';
import { Database } from 'lucide-react';
import { Network } from 'lucide-react';
import { Lock } from 'lucide-react';
import { Monitor } from 'lucide-react';

export default function Cybersecurity() {
import { Helmet } from 'react-helmet-async';
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
const capabilities = [
    "Machine Learning Models",
    "Real-time Data Processing",
    "Risk Assessment Algorithms",
    "Predictive Analytics",
    "Automated Reporting",
    "API Integration"
  ];
const services = [
    {
      title: "Cloud Migration",
      description: "Seamless migration to cloud infrastructure",
      icon: "Cloud"
    },
    {
      title: "Security Solutions",
      description: "Advanced security and compliance",
      icon: "Shield"
    },
    {
      title: "Performance Optimization",
      description: "Optimize your cloud performance",
      icon: "Zap"
    }
  ];
export default function Page() {
  const features = [
    { title: "Feature 1", description: "Description 1" },
    { title: "Feature 2", description: "Description 2" }
  ];
  const services = [
    {
      title: "AI Cybersecurity Suite",
      description: "Advanced AI-powered threat detection and response system. Real-time monitoring, automated incident response, and compliance reporting.",
      icon: <Shield className="w-8 h-8" />,
      path: "/ai-cybersecurity-suite-pro",
      color: "from-red-500 to-orange-500",
      price: "Starting at $399/month",
      features: ["AI Threat Detection", "Automated Response", "Compliance Reports", "24/7 Monitoring"]
    },
    {
      title: "Cybersecurity Solutions",
      description: "Comprehensive security solutions including vulnerability assessments, penetration testing, and security architecture design.",
      icon: <Lock className="w-8 h-8" />,
      path: "/cybersecurity-solutions",
      color: "from-blue-500 to-cyan-500",
      price: "Starting at $299/month",
      features: ["Vulnerability Assessment", "Penetration Testing", "Security Architecture", "Risk Management"]
    },
    {
      title: "Advanced Security Suite",
      description: "Enterprise-grade security with advanced threat protection, identity management, and security automation capabilities.",
      icon: <AlertTriangle className="w-8 h-8" />,
      path: "/advanced-security-suite",
      color: "from-purple-500 to-pink-500",
      price: "Starting at $499/month",
      features: ["Threat Protection", "Identity Management", "Security Automation", "Incident Response"]
    },
    {
      title: "Security Monitoring",
      description: "Continuous security monitoring with real-time alerts, log analysis, and security event correlation across your entire infrastructure.",
      icon: <Eye className="w-8 h-8" />,
      path: "/security-monitoring-suite",
      color: "from-green-500 to-emerald-500",
      price: "Starting at $249/month",
      features: ["Real-time Monitoring", "Log Analysis", "Event Correlation", "Alert Management"]
    },
    {
      title: "Network Security",
      description: "Comprehensive network security solutions including firewall management, intrusion detection, and network segmentation.",
      icon: <Database className="w-8 h-8" />,
      path: "/network-security",
      color: "from-indigo-500 to-purple-500",
      price: "Starting at $199/month",
      features: ["Firewall Management", "Intrusion Detection", "Network Segmentation", "Traffic Analysis"]
    },
    {
      title: "Security Automation",
      description: "Automated security processes including vulnerability scanning, patch management, and security policy enforcement.",
      icon: <Users className="w-8 h-8" />,
      path: "/security-automation",
      color: "from-teal-500 to-cyan-500",
      price: "Starting at $179/month",
      features: ["Vulnerability Scanning", "Patch Management", "Policy Enforcement", "Compliance Automation"]
    }
  ];

export default function CybersecurityPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Cybersecurity - Zion Tech Group</title>
        <meta name="description" content="Cybersecurity solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">Cybersecurity</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Discover our comprehensive cybersecurity solutions designed to meet your business needs.
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