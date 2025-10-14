import React from 'react';
import { Helmet } from "react-helmet-async";
import { Shield } from 'lucide-react';
<<<<<<< HEAD
import { Brain } from 'lucide-react';
import { Lock } from 'lucide-react';
import { AlertTriangle } from 'lucide-react';
import { Zap } from 'lucide-react';
import { CheckCircle } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import { Link } from "react-router-dom";
=======
import { Lock } from 'lucide-react';
import { AlertTriangle } from 'lucide-react';
import { CheckCircle } from 'lucide-react';
import { Users } from 'lucide-react';
import { Eye } from 'lucide-react';
>>>>>>> cursor/fix-errors-and-merge-to-main-ea4b

function AICybersecuritySuitePro() {
  const features = [
    {
      icon: Shield,
      title: "AI-Powered Threat Detection",
      description: "Advanced machine learning algorithms detect and prevent cyber threats in real-time."
    },
    {
      icon: Brain,
      title: "Intelligent Security Analytics",
      description: "Comprehensive security analysis using AI to identify patterns and potential vulnerabilities."
    },
    {
      icon: Lock,
      title: "Zero Trust Architecture",
      description: "Implement zero trust security principles with continuous verification and monitoring."
    },
    {
      icon: AlertTriangle,
      title: "Threat Intelligence",
      description: "Stay ahead of emerging threats with real-time threat intelligence and proactive defense."
    },
    {
      icon: Zap,
      title: "Automated Response",
      description: "Instant automated responses to security incidents with customizable playbooks."
    },
    {
      icon: CheckCircle,
      title: "Compliance Management",
      description: "Ensure regulatory compliance with automated compliance monitoring and reporting."
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Cybersecurity Suite Pro - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered cybersecurity solutions for comprehensive digital protection" />
        <meta name="keywords" content="AI cybersecurity, threat detection, security analytics, cybersecurity suite pro" />
      </Helmet>
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              AI Cybersecurity Suite Pro
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Protect your digital assets with our comprehensive AI-powered cybersecurity platform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800 p-6 rounded-lg border border-slate-700 hover:border-red-500 transition-colors">
                <feature.icon className="w-12 h-12 text-red-400 mb-4" />
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300"
            >
              Secure Your Business
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default AICybersecuritySuitePro;
