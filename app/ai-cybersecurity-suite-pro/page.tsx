import React from 'react';
import { Helmet } from "react-helmet-async";
import { Shield } from 'lucide-react';
import { Brain } from 'lucide-react';
import { Lock } from 'lucide-react';
import { AlertTriangle } from 'lucide-react';
import { Zap } from 'lucide-react';
import { CheckCircle } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import { Link } from "react-router-dom";

function AICybersecuritySuitePro() {
  const features = [
    {
      icon: Brain,
      title: 'AI Threat Detection',
      description: 'Advanced machine learning algorithms to identify and prevent cyber threats in real-time.'
    },
    {
      icon: Shield,
      title: 'Advanced Protection',
      description: 'Multi-layered security architecture with AI-powered threat prevention.'
    },
    {
      icon: Lock,
      title: 'Data Encryption',
      description: 'End-to-end encryption with quantum-resistant algorithms for maximum security.'
    },
    {
      icon: AlertTriangle,
      title: 'Threat Intelligence',
      description: 'Real-time threat intelligence and automated response capabilities.'
    },
    {
      icon: Zap,
      title: 'Fast Response',
      description: 'Instant threat detection and automated incident response.'
    },
    {
      icon: CheckCircle,
      title: 'Compliance',
      description: 'Ensure compliance with industry standards and regulations.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Cybersecurity Suite Pro - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered cybersecurity solutions with real-time threat detection and automated response capabilities." />
        <meta name="keywords" content="AI cybersecurity, threat detection, data protection, security automation" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-white mb-6">
              AI Cybersecurity Suite <span className="text-cyan-400">Pro</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Advanced AI-powered cybersecurity solutions with real-time threat detection and automated response capabilities.
            </p>
            <Link
              to="/contact"
              className="bg-cyan-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-cyan-700 transition-colors inline-flex items-center"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Advanced Security Features
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <feature.icon className="w-12 h-12 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">
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
    </>
  );
}

const page = React.lazy(() => import('./page'));
export default page;

