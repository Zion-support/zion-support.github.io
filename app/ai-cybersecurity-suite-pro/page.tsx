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
      title: "AI-Powered Threat Detection",
      description: "Advanced machine learning algorithms detect and prevent cyber threats in real-time."
    },
    {
      icon: Lock,
      title: "Zero Trust Security",
      description: "Implement comprehensive zero trust architecture with continuous verification and monitoring."
    },
    {
      icon: AlertTriangle,
      title: "Threat Intelligence",
      description: "Stay ahead of emerging threats with AI-driven threat intelligence and proactive security measures."
    },
    {
      icon: Zap,
      title: "Automated Response",
      description: "Instant automated responses to security incidents with minimal human intervention."
    },
    {
      icon: CheckCircle,
      title: "Compliance Management",
      description: "Ensure regulatory compliance with automated compliance monitoring and reporting tools."
    },
    {
      icon: Star,
      title: "Security Analytics",
      description: "Comprehensive security analytics and reporting for better visibility and decision making."
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Cybersecurity Suite Pro - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered cybersecurity solutions with threat detection, zero trust security, and automated incident response." />
        <meta name="keywords" content="AI, cybersecurity, threat detection, zero trust, security analytics, incident response" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              AI Cybersecurity Suite Pro
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Protect your organization with our advanced AI-powered cybersecurity platform. 
              Get real-time threat detection, automated response, and comprehensive security analytics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center"
              >
                Get Protected
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to="/ai-solutions" 
                className="border border-white text-white hover:bg-white hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                View All Solutions
              </Link>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="bg-red-600 p-3 rounded-lg mr-4">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-gray-300">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Secure Your Digital Assets Today
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Don't wait for a security breach. Our AI-powered cybersecurity suite provides 
              comprehensive protection against evolving threats.
            </p>
            <Link 
              to="/contact" 
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
            >
              Start Security Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default AICybersecuritySuitePro;    