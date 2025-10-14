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

function Page() {
  const features = [
    {
      icon: Shield,
      title: "AI-Powered Threat Detection",
      description: "Advanced machine learning algorithms detect and prevent cyber threats in real-time."
    },
    {
      icon: Brain,
      title: "Behavioral Analysis",
      description: "Monitor user and system behavior to identify anomalous activities and potential breaches."
    },
    {
      icon: Lock,
      title: "Zero Trust Security",
      description: "Implement comprehensive zero trust architecture with continuous verification."
    },
    {
      icon: AlertTriangle,
      title: "Threat Intelligence",
      description: "Stay ahead of emerging threats with real-time threat intelligence feeds."
    },
    {
      icon: Zap,
      title: "Automated Response",
      description: "Automatically respond to security incidents with predefined playbooks and actions."
    },
    {
      icon: CheckCircle,
      title: "Compliance Management",
      description: "Ensure compliance with industry standards and regulations through automated monitoring."
    },
    {
      icon: Star,
      title: "Security Scoring",
      description: "Get comprehensive security scores and recommendations for improvement."
    },
    {
      icon: Users,
      title: "User Access Management",
      description: "Control and monitor user access with intelligent privilege management."
    },
    {
      icon: Target,
      title: "Vulnerability Assessment",
      description: "Continuously scan and assess vulnerabilities across your entire infrastructure."
    },
    {
      icon: Database,
      title: "Data Protection",
      description: "Safeguard sensitive data with encryption, masking, and access controls."
    },
    {
      icon: Clock,
      title: "24/7 Monitoring",
      description: "Round-the-clock security monitoring and incident response capabilities."
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Cybersecurity Suite Pro - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered cybersecurity solutions for comprehensive digital protection" />
        <meta name="keywords" content="AI cybersecurity, threat detection, security suite, cyber protection" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">AI Cybersecurity Suite Pro</h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Protect your digital assets with our comprehensive AI-powered cybersecurity platform that adapts and evolves with emerging threats
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 flex items-center justify-center"
              >
                Get Protected <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to="/demo" 
                className="border border-red-400 text-red-300 hover:bg-red-600 hover:text-white font-bold py-3 px-8 rounded-lg transition-all duration-300"
              >
                Security Demo
              </Link>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="bg-gradient-to-r from-red-500 to-orange-500 p-3 rounded-lg mr-4">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              );
            })}
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Secure Your Digital Future Today</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Don't wait for a breach to happen. Our AI-powered cybersecurity suite provides proactive protection against current and future threats.
            </p>
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center"
            >
              Start Security Assessment <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}


const page = React.lazy(() => import('./page'));
export default page;