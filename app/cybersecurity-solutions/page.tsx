
import { Helmet } from 'react-helmet-async';
<<<<<<< HEAD
import { Shield, Lock, Eye, AlertTriangle, CheckCircle, ArrowRight, Brain, Users, Clock, Award, Star, Activity, Database, FileText } from "lucide-react";
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const CybersecuritySolutions = () => {
  const services = [
    {
      title: "Security Assessment",
      description: "Comprehensive security audits to identify vulnerabilities and assess your current security posture",
      icon: <Eye className="w-8 h-8" />,
      features: ["Vulnerability scanning", "Penetration testing", "Risk assessment", "Compliance audit"],
      price: "From $2,499/assessment"
    },
    {
      title: "Threat Detection",
      description: "Advanced threat detection and response systems to identify and neutralize security threats in real-time",
      icon: <AlertTriangle className="w-8 h-8" />,
      features: ["AI-powered detection", "Real-time monitoring", "Automated response", "Threat intelligence"],
      price: "From $1,999/month"
    },
    {
      title: "Identity Management",
      description: "Secure identity and access management solutions to control user access and prevent unauthorized access",
      icon: <Users className="w-8 h-8" />,
      features: ["Multi-factor authentication", "Single sign-on", "Access governance", "Privileged access"],
      price: "From $1,299/month"
    },
    {
      title: "Data Protection",
      description: "Comprehensive data protection solutions to secure sensitive information and ensure compliance",
      icon: <Database className="w-8 h-8" />,
      features: ["Data encryption", "Backup security", "Data loss prevention", "Compliance monitoring"],
      price: "From $1,799/month"
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
      cta: "Get Started"
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
      cta: "Get Started"
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
      cta: "Contact Sales"
    }
  ];

  const capabilities = [
    {
      title: "AI-Powered Security",
      description: "Advanced AI algorithms detect and prevent sophisticated cyber threats before they cause damage",
      icon: <Brain className="w-6 h-6" />,
      stats: "99.9% threat detection"
    },
    {
      title: "Zero Trust Architecture",
      description: "Implement zero trust security model with continuous verification and least privilege access",
      icon: <Lock className="w-6 h-6" />,
      stats: "100% coverage"
    },
    {
      title: "24/7 Monitoring",
      description: "Round-the-clock security monitoring and incident response to protect your business",
      icon: <Activity className="w-6 h-6" />,
      stats: "Sub-minute response"
    },
    {
      title: "Compliance Ready",
      description: "Meet industry compliance requirements including GDPR, HIPAA, SOX, and PCI DSS",
      icon: <FileText className="w-6 h-6" />,
      stats: "50+ frameworks"
    }
  ];

  const testimonials = [
    {
      name: "Jennifer Martinez",
      company: "Financial Services Inc",
      role: "CISO",
      content: "Zion's cybersecurity solutions have significantly improved our security posture. We've achieved zero security incidents in the past year.",
      rating: 5,
      avatar: "JM"
    },
    {
      name: "Robert Chen",
      company: "Healthcare Systems",
      role: "IT Director",
      content: "The AI-powered threat detection caught several advanced persistent threats that other solutions missed. Excellent service and support.",
      rating: 5,
      avatar: "RC"
    },
    {
      name: "Lisa Thompson",
      company: "E-commerce Solutions",
      role: "Security Manager",
      content: "Comprehensive security solutions that scale with our business. The compliance features helped us pass our audit with flying colors.",
      rating: 5,
      avatar: "LT"
    }
  ];

  const stats = [
    { number: "1000+", label: "Security Incidents Prevented", icon: <Shield className="w-6 h-6" /> },
    { number: "99.9%", label: "Threat Detection Accuracy", icon: <Award className="w-6 h-6" /> },
    { number: "24/7", label: "Security Monitoring", icon: <Clock className="w-6 h-6" /> },
    { number: "50+", label: "Compliance Frameworks", icon: <FileText className="w-6 h-6" /> }
  ];

=======
>>>>>>> origin/main
const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>

      <Helmet></Helmet>
"
        <meta name="description" content="Professional services by Zion Tech Group." />
")
}
