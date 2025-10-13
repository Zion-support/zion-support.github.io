import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Shield, Brain, Award, Zap, FileText, Eye, Fingerprint, Search } from 'lucide-react';

export default function Page() {
  const benefits = [
    "Benefit 1",
    "Benefit 2"
  ];
  const features = [
    {
      title: "AI-Powered Threat Detection",
      description: "Advanced machine learning algorithms continuously monitor your network for threats, detecting and preventing attacks before they can cause damage.",
      icon: <Brain className="w-8 h-8" />,
      benefits: ["Real-time threat analysis", "Behavioral anomaly detection", "Zero-day attack prevention", "Automated response"]
    },
    {
      title: "24/7 Security Monitoring",
      description: "Round-the-clock monitoring by our expert security team ensures your systems are protected at all times, with immediate response to any threats.",
      icon: <Eye className="w-8 h-8" />,
      benefits: ["Continuous monitoring", "Expert security team", "Immediate threat response", "Global threat intelligence"]
    },
    {
      title: "Automated Incident Response",
      description: "When threats are detected, our system automatically responds with predefined actions to contain and eliminate the threat before it spreads.",
      icon: <Zap className="w-8 h-8" />,
      benefits: ["Instant threat containment", "Automated remediation", "Custom response rules", "Minimal downtime"]
    },
    {
      title: "Compliance Reporting",
      description: "Generate comprehensive compliance reports for SOC2, GDPR, HIPAA, and other regulatory requirements with automated documentation.",
      icon: <FileText className="w-8 h-8" />,
      benefits: ["SOC2 compliance", "GDPR compliance", "HIPAA compliance", "Automated reporting"]
    },
    {
      title: "Vulnerability Assessment",
      description: "Regular security scans identify vulnerabilities in your systems and provide detailed remediation guidance to strengthen your security posture.",
      icon: <Search className="w-8 h-8" />,
      benefits: ["Regular security scans", "Vulnerability prioritization", "Remediation guidance", "Risk scoring"]
    },
    {
      title: "Multi-factor Authentication",
      description: "Secure access with advanced MFA options including biometric authentication, hardware tokens, and mobile app verification.",
      icon: <Fingerprint className="w-8 h-8" />,
      benefits: ["Biometric authentication", "Hardware tokens", "Mobile app verification", "SSO integration"]
    }
  ];

  const securityStats = [
    { number: "99.9%", label: "Threat Detection Accuracy", icon: <Shield className="w-6 h-6" /> },
    { number: "50%", label: "Faster Incident Response", icon: <Zap className="w-6 h-6" /> },
    { number: "24/7", label: "Security Monitoring", icon: <Eye className="w-6 h-6" /> },
    { number: "100%", label: "Compliance Coverage", icon: <Award className="w-6 h-6" /> }
  ];

  const pricingPlans = [
    {
      name: "Essential",
      price: "$499",
      period: "month",
      description: "Core security features for small to medium businesses",
      features: [
        "Basic threat detection",
        "Email security",
        "Firewall management",
        "Standard support",
        "Up to 50 users"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$799",
      period: "month",
      description: "Advanced security features for growing businesses",
      features: [
        "AI-powered threat detection",
        "24/7 monitoring",
        "Automated incident response",
        "Compliance reporting",
        "Priority support",
        "Up to 200 users",
        "Mobile app access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1299",
      period: "month",
      description: "Complete security solution for large organizations",
      features: [
        "Advanced AI threat detection",
        "Dedicated security team",
        "Custom security policies",
        "Advanced compliance",
        "24/7 dedicated support",
        "Unlimited users",
        "White-label options",
        "On-premise deployment"
      ],
      popular: false
    }
  ];

export default function ZionSecurityShieldProPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Zion Security Shield Pro - Zion Tech Group</title>
        <meta name="description" content="Zion Security Shield Pro solutions by Zion Tech Group" />
      </Helmet>

      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">Zion Security Shield Pro</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Discover our comprehensive zion security shield pro solutions designed to meet your business needs.
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