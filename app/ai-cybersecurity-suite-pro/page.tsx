import React from 'react';
import { Helmet } from "react-helmet-async";
import { Shield } from 'lucide-react';
import { Brain } from 'lucide-react';
import { Lock } from 'lucide-react';
import { AlertTriangle } from 'lucide-react';
import { Zap } from 'lucide-react';
import { CheckCircle } from 'lucide-react';
import { Star } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import { Users } from 'lucide-react';
import { Target } from 'lucide-react';
import { Database } from 'lucide-react';
import { Clock } from 'lucide-react';
import { Link } from "react-router-dom";

function AICybersecuritySuitePro() {
  const features = [
    {
      icon: Shield,
      title: "Advanced Threat Detection",
      description: "AI-powered real-time threat detection and response capabilities"
    },
    {
      icon: Brain,
      title: "Machine Learning Security",
      description: "Intelligent security algorithms that adapt to new threats"
    },
    {
      icon: Lock,
      title: "Data Encryption",
      description: "End-to-end encryption for all data transmission and storage"
    },
    {
      icon: AlertTriangle,
      title: "Risk Assessment",
      description: "Comprehensive security risk analysis and vulnerability scanning"
    },
    {
      icon: Zap,
      title: "Automated Response",
      description: "Instant automated responses to security incidents and breaches"
    },
    {
      icon: CheckCircle,
      title: "Compliance Management",
      description: "Built-in compliance monitoring for GDPR, HIPAA, and other regulations"
    },
    {
      icon: Star,
      title: "Security Analytics",
      description: "Advanced analytics and reporting for security posture assessment"
    },
    {
      icon: Users,
      title: "Access Control",
      description: "Multi-factor authentication and role-based access management"
    },
    {
      icon: Target,
      title: "Penetration Testing",
      description: "Automated penetration testing and security validation"
    },
    {
      icon: Database,
      title: "Data Protection",
      description: "Comprehensive data loss prevention and backup solutions"
    },
    {
      icon: Clock,
      title: "24/7 Monitoring",
      description: "Round-the-clock security monitoring and incident response"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
      <Helmet>
        <title>AI Cybersecurity Suite Pro - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered cybersecurity solutions with threat detection, automated response, and comprehensive security management." />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Cybersecurity Suite Pro
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Protect your business with our advanced AI-powered cybersecurity platform featuring real-time threat detection and automated response.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors"
              >
                Get Protected
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/ai-solutions"
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold rounded-lg transition-colors"
              >
                View All AI Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Security Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced AI-powered cybersecurity tools to protect your business from evolving threats.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                <feature.icon className="h-12 w-12 text-red-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const page = React.lazy(() => import('./page'));
export default page;
