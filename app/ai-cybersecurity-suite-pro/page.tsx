import React from 'react';
import { Helmet } from "react-helmet-async";
import { Shield, Brain, Lock, AlertTriangle, Zap, CheckCircle, Star, ArrowRight, Users, Target, Database, Clock, Eye } from 'lucide-react';
import { Link } from "react-router-dom";

function AICybersecuritySuitePro() {
  const features = [
    {
      icon: Shield,
      title: "Advanced Threat Detection",
      description: "AI-powered threat detection and prevention"
    },
    {
      icon: Lock,
      title: "Zero Trust Security",
      description: "Implement zero trust architecture for maximum security"
    },
    {
      icon: Eye,
      title: "Real-time Monitoring",
      description: "24/7 security monitoring and alerting"
    },
    {
      icon: AlertTriangle,
      title: "Incident Response",
      description: "Automated incident response and recovery"
    },
    {
      icon: Users,
      title: "Access Management",
      description: "Comprehensive user access and identity management"
    },
    {
      icon: CheckCircle,
      title: "Compliance",
      description: "Ensure compliance with security standards"
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Cybersecurity Suite Pro - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered cybersecurity solutions" />
        <meta name="keywords" content="AI, cybersecurity, security, threat detection" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-white mb-8">AI Cybersecurity Suite Pro</h1>
            <p className="text-xl text-gray-300 mb-8">
              Advanced AI-powered cybersecurity solutions for enterprise protection
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <feature.icon className="w-8 h-8 text-red-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default AICybersecuritySuitePro;