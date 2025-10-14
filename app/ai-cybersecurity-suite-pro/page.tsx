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
      description: "AI-powered threat detection with real-time monitoring and automated response capabilities."
    },
    {
      icon: Brain,
      title: "Machine Learning Security",
      description: "Continuous learning algorithms that adapt to new threats and security patterns."
    },
    {
      icon: Lock,
      title: "Zero Trust Architecture",
      description: "Implement zero trust security model with comprehensive access controls."
    },
    {
      icon: AlertTriangle,
      title: "Real-time Alerts",
      description: "Instant notifications for security incidents with detailed analysis and recommendations."
    },
    {
      icon: Zap,
      title: "Automated Response",
      description: "Automated incident response with predefined security protocols and escalation procedures."
    },
    {
      icon: CheckCircle,
      title: "Compliance Management",
      description: "Ensure compliance with industry standards and regulatory requirements."
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Cybersecurity Suite Pro - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered cybersecurity solutions for enterprise protection" />
        <meta name="keywords" content="AI cybersecurity, threat detection, security automation, enterprise security" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              AI Cybersecurity Suite Pro
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Advanced AI-powered cybersecurity solutions designed to protect your enterprise 
              from evolving threats with intelligent automation and real-time monitoring.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 flex items-center justify-center"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/demo"
                className="border border-purple-400 text-purple-300 hover:bg-purple-400 hover:text-white font-bold py-3 px-8 rounded-lg transition-all duration-300"
              >
                View Demo
              </Link>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
                <feature.icon className="h-12 w-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Secure Your Enterprise?</h2>
            <p className="text-gray-300 mb-6">
              Contact our cybersecurity experts to learn how AI Cybersecurity Suite Pro can protect your organization.
            </p>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 inline-flex items-center"
            >
              Contact Us Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

const page = React.lazy(() => import('./page'));
export default page;