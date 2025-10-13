<<<<<<< HEAD
=======
import { 
  ArrowRight, 
  Home, 
  Search, 
  AlertTriangle, 
  Users, 
  Star, 
  Shield, 
  Database, 
  CheckCircle, 
  Brain, 
  Lock, 
  Activity, 
  FileText, 
  Eye 
} from 'lucide-react';
>>>>>>> cursor/fix-errors-and-merge-to-main-1dc1
import React from 'react';
import { Helmet } from 'react-helmet-async';

<<<<<<< HEAD
export default function Page() {
=======
const CybersecuritySolutions = () => {
  const testimonials: { name: string; role: string; company: string; content: string; rating: number; avatar: string }[] = [];

  const stats: { label: string; value: string; number: string; icon: React.ReactNode }[] = [];

  const capabilities: { title: string; description: string; icon: React.ReactNode; color: string }[] = [];

  const features: { title: string; description: string; icon: React.ReactNode; color: string }[] = [];

  const services = [
    {
      title: "Security Assessment",
      description: "Comprehensive security audits to identify vulnerabilities and assess your current security posture",
      icon: <Eye className="w-8 h-8" />,
      features: ["Vulnerability scanning", "Penetration testing", "Risk assessment", "Compliance audit"],
      price: "From $2,499/assessment",
    },
    {
      title: "Threat Detection",
      description: "Advanced threat detection and response systems to identify and neutralize security threats in real-time",
      icon: <AlertTriangle className="w-8 h-8" />,
      features: ["AI-powered detection", "Real-time monitoring", "Automated response", "Threat intelligence"],
      price: "From $1,999/month",
    },
    {
      title: "Identity Management",
      description: "Secure identity and access management solutions to control user access and prevent unauthorized access",
      icon: <Users className="w-8 h-8" />,
      features: ["Multi-factor authentication", "Single sign-on", "Access governance", "Privileged access"],
      price: "From $1,299/month",
    },
    {
      title: "Data Protection",
      description: "Comprehensive data protection solutions to secure sensitive information and ensure compliance",
      icon: <Database className="w-8 h-8" />,
      features: ["Data encryption", "Backup security", "Data loss prevention", "Compliance monitoring"],
      price: "From $1,799/month",
    }
  ];

  const pricingPlans = [
    {
      name: "Essential",
      price: "$2,999",
      period: "/month",
      description: "Basic security protection for small to medium businesses",
      features: [
        "Security assessment",
        "Basic threat monitoring",
        "Email security",
        "Firewall management",
        "Standard support",
        "Monthly reports"
      ],
      popular: false,
      cta: "Get Started",
    },
    {
      name: "Professional",
      price: "$5,999",
      period: "/month",
      description: "Advanced security solutions for growing businesses",
      features: [
        "Comprehensive security assessment",
        "Advanced threat detection",
        "Identity management",
        "Data protection",
        "Priority support",
        "Weekly reports",
        "Incident response",
        "Security training"
      ],
      popular: true,
      cta: "Get Started",
    },
    {
      name: "Enterprise",
      price: "$12,999",
      period: "/month",
      description: "Complete security suite for large organizations",
      features: [
        "Full security audit",
        "AI-powered threat detection",
        "Advanced identity management",
        "Comprehensive data protection",
        "24/7 dedicated support",
        "Real-time reporting",
        "Custom security policies",
        "Dedicated security team",
        "Compliance management"
      ],
      popular: false,
      cta: "Contact Sales",
    }
  ];

export default function CybersecuritySolutionsPage() {
  const capabilities = [
    {
      title: "AI-Powered Security",
      description: "Advanced threat detection and prevention using artificial intelligence",
      icon: <Shield className="w-8 h-8" />
    },
    {
      title: "Real-time Monitoring",
      description: "24/7 security monitoring and incident response",
      icon: <CheckCircle className="w-8 h-8" />
    },
    {
      title: "Zero Trust Architecture",
      description: "Implement zero trust security model with continuous verification and least privilege access",
      icon: <Lock className="w-6 h-6" />
    },
    {
      title: "24/7 Monitoring",
      description: "Round-the-clock security monitoring and incident response to protect your business",
      icon: <Activity className="w-6 h-6" />
    },
    {
      title: "Compliance Ready",
      description: "Meet industry compliance requirements including GDPR, HIPAA, SOX, and PCI DSS",
      icon: <FileText className="w-6 h-6" />
    }
  ];
>>>>>>> cursor/fix-errors-and-merge-to-main-1dc1
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Page - Zion Tech Group</title>
        <meta name="description" content="Page solutions by Zion Tech Group" />
      </Helmet>

      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-8">Page</h1>
          <p className="text-xl text-gray-300 mb-8">
            This page is under development. Please check back later.
          </p>
          <div className="mt-8">
            <a 
              href="/" 
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
            >
              Go Home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}