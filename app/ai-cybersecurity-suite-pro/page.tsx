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
      title: "AI Threat Detection",
      description: "Advanced AI algorithms that continuously monitor and detect sophisticated cyber threats in real-time."
    },
    {
      icon: Brain,
      title: "Machine Learning Security",
      description: "Self-learning security systems that adapt and improve their protection capabilities over time."
    },
    {
      icon: Lock,
      title: "Zero Trust Architecture",
      description: "Implement zero trust security principles with AI-powered continuous verification and authentication."
    },
    {
      icon: AlertTriangle,
      title: "Threat Intelligence",
      description: "Comprehensive threat intelligence platform that provides insights into emerging security risks."
    },
    {
      icon: Zap,
      title: "Automated Response",
      description: "AI-driven automated incident response that can contain and mitigate threats within seconds."
    },
    {
      icon: CheckCircle,
      title: "Compliance Management",
      description: "Automated compliance monitoring and reporting to ensure adherence to security standards and regulations."
    },
    {
      icon: Star,
      title: "Advanced Analytics",
      description: "Deep security analytics that provide insights into your organization's security posture and risks."
    },
    {
      icon: Users,
      title: "Security Training",
      description: "AI-powered security awareness training that adapts to your team's learning needs and threat landscape."
    },
    {
      icon: Target,
      title: "Vulnerability Management",
      description: "Intelligent vulnerability scanning and prioritization based on risk assessment and business impact."
    },
    {
      icon: Database,
      title: "Data Protection",
      description: "Advanced data loss prevention and encryption solutions powered by machine learning algorithms."
    },
    {
      icon: Clock,
      title: "24/7 Monitoring",
      description: "Round-the-clock AI-powered security monitoring and incident response capabilities."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
      <Helmet>
        <title>AI Cybersecurity Suite Pro - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered cybersecurity solutions for comprehensive threat protection and security management." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-orange-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Cybersecurity Suite Pro
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Protect your organization with next-generation AI-powered cybersecurity solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors duration-200"
              >
                Get Protected
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Security Features
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Advanced AI-driven security solutions that protect against the most sophisticated threats
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
