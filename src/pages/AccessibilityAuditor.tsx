import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Eye, 
  CheckCircle, 
  AlertTriangle, 
  Zap, 
  Shield, 
  ArrowRight,
  Star,
  Users,
  Cpu,
  Globe,
  Target,
  BarChart3
} from 'lucide-react';

export default function AccessibilityAuditor() {
  const auditFeatures = [
    {
      icon: Eye,
      title: "Comprehensive Auditing",
      description: "Complete accessibility assessment across all digital touchpoints"
    },
    {
      icon: CheckCircle,
      title: "WCAG Compliance",
      description: "Full compliance with WCAG 2.1 AA and AAA standards"
    },
    {
      icon: AlertTriangle,
      title: "Issue Detection",
      description: "Automated detection of accessibility violations and barriers"
    },
    {
      icon: Zap,
      title: "Real-time Testing",
      description: "Live accessibility testing and validation tools"
    },
    {
      icon: Shield,
      title: "Legal Compliance",
      description: "Ensure compliance with ADA and other accessibility laws"
    },
    {
      icon: Cpu,
      title: "AI-Powered Analysis",
      description: "Advanced AI algorithms for comprehensive accessibility review"
    }
  ];

  const auditAreas = [
    "Web accessibility compliance",
    "Mobile app accessibility",
    "Document accessibility (PDFs, Word docs)",
    "Video and multimedia accessibility",
    "Form and input accessibility",
    "Navigation and keyboard accessibility",
    "Color contrast and visual accessibility",
    "Screen reader compatibility",
    "Voice recognition compatibility",
    "Cognitive accessibility features"
  ];

  const benefits = [
    "Ensure legal compliance and avoid lawsuits",
    "Improve user experience for all users",
    "Expand your audience reach",
    "Enhance brand reputation and trust",
    "Improve SEO and search rankings",
    "Reduce support requests and complaints"
  ];

  const auditProcess = [
    {
      title: "Initial Assessment",
      description: "Comprehensive review of current accessibility status",
      icon: Eye
    },
    {
      title: "Detailed Analysis",
      description: "In-depth examination of all accessibility issues",
      icon: BarChart3
    },
    {
      title: "Report Generation",
      description: "Detailed report with prioritized recommendations",
      icon: Target
    },
    {
      title: "Implementation Support",
      description: "Guidance and support for accessibility improvements",
      icon: Users
    }
  ];

  const complianceStandards = [
    {
      name: "WCAG 2.1 AA",
      description: "Web Content Accessibility Guidelines 2.1 Level AA",
      status: "Full Compliance"
    },
    {
      name: "WCAG 2.1 AAA",
      description: "Web Content Accessibility Guidelines 2.1 Level AAA",
      status: "Enhanced Compliance"
    },
    {
      name: "ADA Title III",
      description: "Americans with Disabilities Act Title III",
      status: "Legal Compliance"
    },
    {
      name: "Section 508",
      description: "Federal accessibility requirements for government websites",
      status: "Government Compliance"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <Eye className="w-20 h-20 text-cyan-400 mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Accessibility Auditor
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Comprehensive digital accessibility auditing and compliance solutions. 
              Ensure your digital products are accessible to all users and compliant with legal requirements.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
            >
              Schedule an Audit
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/pricing"
              className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Comprehensive Auditing Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our accessibility auditor provides everything you need to ensure 
              your digital products meet the highest accessibility standards.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {auditFeatures.map((feature, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-400 transition-all duration-300 hover:transform hover:scale-105">
                <feature.icon className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Audit Areas Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              What We Audit
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our accessibility audits cover all aspects of digital accessibility 
              to ensure comprehensive compliance and user experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {auditAreas.map((area, index) => (
              <div key={index} className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-lg">{area}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Benefits of Accessibility Auditing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Investing in accessibility auditing provides numerous benefits 
              for your business and users.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-4">
                <Star className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Audit Process Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Our Audit Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A systematic approach to accessibility auditing that ensures 
              thorough coverage and actionable results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {auditProcess.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-10 h-10 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Standards Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Compliance Standards We Cover
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our audits ensure compliance with all major accessibility standards 
              and legal requirements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {complianceStandards.map((standard, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-white">{standard.name}</h3>
                  <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                    {standard.status}
                  </span>
                </div>
                <p className="text-gray-300">{standard.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-12 border border-cyan-400/30">
            <Eye className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Make Your Digital Products Accessible?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Ensure compliance, improve user experience, and expand your audience 
              with our comprehensive accessibility auditing services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Start Your Audit
              </Link>
              <Link
                to="/case-studies"
                className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}