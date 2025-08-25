import React from 'react';
import { Link } from 'react-router-dom';
import { Eye, Shield, BarChart3, Globe, Users, Database, Settings, ArrowRight, CheckCircle, AlertTriangle, Info, Zap } from 'lucide-react';

const AccessibilityAuditor: React.FC = () => {
  const features = [
    {
      icon: Eye,
      title: "Comprehensive Auditing",
      description: "Complete accessibility assessment across all digital touchpoints and platforms."
    },
    {
      icon: Shield,
      title: "Compliance Standards",
      description: "WCAG 2.1 AA/AAA compliance verification and reporting."
    },
    {
      icon: BarChart3,
      title: "Detailed Analytics",
      description: "In-depth accessibility metrics and improvement recommendations."
    },
    {
      icon: Globe,
      title: "Multi-Platform Support",
      description: "Audit websites, mobile apps, and digital documents for accessibility."
    },
    {
      icon: Users,
      title: "User Experience Testing",
      description: "Real-world accessibility testing with assistive technologies."
    },
    {
      icon: Database,
      title: "Automated Scanning",
      description: "AI-powered automated accessibility scanning and issue detection."
    }
  ];

  const auditAreas = [
    {
      title: "Visual Accessibility",
      description: "Color contrast, text sizing, and visual element accessibility."
    },
    {
      title: "Navigation & Structure",
      description: "Keyboard navigation, screen reader compatibility, and semantic markup."
    },
    {
      title: "Content & Media",
      description: "Alt text, captions, transcripts, and multimedia accessibility."
    },
    {
      title: "Forms & Interactions",
      description: "Form labels, error handling, and interactive element accessibility."
    },
    {
      title: "Mobile Accessibility",
      description: "Touch targets, gesture support, and mobile-specific accessibility."
    },
    {
      title: "Performance & Loading",
      description: "Loading states, error handling, and performance accessibility."
    }
  ];

  const benefits = [
    {
      metric: "100%",
      label: "WCAG Compliance",
      description: "Full accessibility standards compliance"
    },
    {
      metric: "50%",
      label: "User Reach",
      description: "Expand your audience with accessible design"
    },
    {
      metric: "90%",
      label: "Issue Detection",
      description: "Comprehensive accessibility issue identification"
    },
    {
      metric: "24/7",
      label: "Monitoring",
      description: "Continuous accessibility monitoring and alerts"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 quantum-particles"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-cyan-500/20 border border-cyan-500/50 rounded-full text-cyan-400 text-sm font-medium mb-6">
              <Eye className="w-4 h-4 mr-2" />
              Accessibility Auditor
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
              Accessibility
              <br />
              <span className="text-white">Auditor</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Comprehensive digital accessibility auditing and compliance verification. 
              Ensure your digital products are accessible to all users with our advanced auditing tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Start Accessibility Audit
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 font-semibold rounded-lg transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Auditing Features
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Advanced tools and capabilities for comprehensive accessibility assessment
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Audit Areas Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Audit Coverage Areas
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive accessibility assessment across all critical areas
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {auditAreas.map((area, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-white mb-3">
                  {area.title}
                </h3>
                <p className="text-gray-400">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Audit Benefits
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Key advantages of our accessibility auditing services
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="text-4xl font-bold text-cyan-400 mb-2">
                  {benefit.metric}
                </div>
                <div className="text-lg font-semibold text-white mb-2">
                  {benefit.label}
                </div>
                <p className="text-gray-400 text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-500/10 to-blue-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Audit Your Accessibility?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Our accessibility experts can help you achieve full compliance and improve user experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Start Your Audit
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-4 border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 font-semibold rounded-lg transition-all duration-300"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AccessibilityAuditor;