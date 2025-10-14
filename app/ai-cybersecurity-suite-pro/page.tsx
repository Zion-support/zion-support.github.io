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
      description: "Advanced AI algorithms to detect and prevent cyber threats in real-time"
    },
    {
      icon: Lock,
      title: "Zero Trust Security",
      description: "Implement zero trust architecture with AI-powered access controls"
    },
    {
      icon: AlertTriangle,
      title: "Threat Intelligence",
      description: "Comprehensive threat intelligence and vulnerability assessment"
    },
    {
      icon: Brain,
      title: "Behavioral Analytics",
      description: "AI-driven behavioral analysis to identify anomalous activities"
    },
    {
      icon: Zap,
      title: "Automated Response",
      description: "Instant automated response to security incidents and breaches"
    },
    {
      icon: Database,
      title: "Security Monitoring",
      description: "24/7 continuous monitoring of your entire infrastructure"
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Cybersecurity Suite Pro - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered cybersecurity solutions for comprehensive threat protection and security management" />
        <meta name="keywords" content="AI, cybersecurity, threat detection, security, zero trust, threat intelligence" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              AI Cybersecurity Suite Pro
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Protect your business with our advanced AI-powered cybersecurity platform that provides comprehensive threat detection and prevention
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
              >
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to="/demo" 
                className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                View Demo
              </Link>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
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

          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-8">
              Why Choose Our AI Cybersecurity Suite?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-red-900 mb-2">
                  Expert Security
                </h3>
                <p className="text-red-700">
                  Our cybersecurity experts deliver cutting-edge AI-powered security solutions.
                </p>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-900 mb-2">
                  Custom Implementation
                </h3>
                <p className="text-green-700">
                  Tailored security implementations for your specific business needs.
                </p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-purple-900 mb-2">
                  24/7 Monitoring
                </h3>
                <p className="text-purple-700">
                  Round-the-clock security monitoring and threat response.
                </p>
              </div>
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-orange-900 mb-2">
                  Compliance Ready
                </h3>
                <p className="text-orange-700">
                  Meet industry standards and compliance requirements with ease.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AICybersecuritySuitePro;
    