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
      description: "AI-powered threat detection that identifies and neutralizes security risks in real-time"
    },
    {
      icon: Brain,
      title: "Machine Learning Security",
      description: "Leverage machine learning algorithms to predict and prevent cyber attacks"
    },
    {
      icon: Lock,
      title: "Zero Trust Architecture",
      description: "Implement zero trust security model with continuous verification and monitoring"
    },
    {
      icon: AlertTriangle,
      title: "Real-time Monitoring",
      description: "24/7 security monitoring with instant alerts and automated response systems"
    },
    {
      icon: Zap,
      title: "Automated Response",
      description: "Automatically respond to security incidents with AI-driven countermeasures"
    },
    {
      icon: CheckCircle,
      title: "Compliance Management",
      description: "Ensure compliance with industry standards and regulations automatically"
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Cybersecurity Suite Pro - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered cybersecurity solutions for comprehensive digital protection" />
        <meta name="keywords" content="AI, cybersecurity, security, threat detection, machine learning, zero trust" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              AI Cybersecurity Suite Pro
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Protect your digital assets with our advanced AI-powered cybersecurity platform that adapts and evolves with emerging threats
            </p>
            <div className="flex justify-center space-x-4">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 flex items-center"
              >
                Get Protected
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to="/demo" 
                className="border border-red-400 text-red-300 hover:bg-red-400 hover:text-white font-bold py-3 px-8 rounded-lg transition-all duration-300"
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

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Secure Your Digital Future Today
            </h2>
            <p className="text-gray-300 mb-6">
              Join thousands of organizations protected by our AI-powered security platform
            </p>
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 inline-flex items-center"
            >
              Start Your Security Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default AICybersecuritySuitePro;
    