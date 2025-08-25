import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Eye, CheckCircle, AlertTriangle, Zap, Users, Globe, BarChart3, ArrowRight } from 'lucide-react';

export default function AccessibilityAuditor() {
  const features = [
    {
      icon: Eye,
      title: 'WCAG 2.1 Compliance',
      description: 'Full compliance with WCAG 2.1 AA standards for accessibility',
      benefits: ['Screen reader compatibility', 'Keyboard navigation support', 'Color contrast optimization']
    },
    {
      icon: Shield,
      title: 'Automated Testing',
      description: 'AI-powered automated accessibility testing and validation',
      benefits: ['Real-time scanning', 'Comprehensive reports', 'Issue prioritization']
    },
    {
      icon: CheckCircle,
      title: 'Manual Auditing',
      description: 'Expert manual accessibility audits by certified professionals',
      benefits: ['Human expertise', 'Context-aware analysis', 'Custom recommendations']
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Accessibility improvements that also enhance performance',
      benefits: ['Faster loading times', 'Better SEO', 'Improved user experience']
    }
  ];

  const auditProcess = [
    {
      step: '01',
      title: 'Initial Assessment',
      description: 'Comprehensive evaluation of current accessibility status'
    },
    {
      step: '02',
      title: 'Automated Testing',
      description: 'AI-powered scanning for common accessibility issues'
    },
    {
      step: '03',
      title: 'Manual Review',
      description: 'Expert manual testing and validation'
    },
    {
      step: '04',
      title: 'Report & Recommendations',
      description: 'Detailed report with actionable improvement suggestions'
    },
    {
      step: '05',
      title: 'Implementation Support',
      description: 'Ongoing support for implementing accessibility improvements'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium">
              <Eye className="w-4 h-4 mr-2" />
              Accessibility Excellence
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Accessibility Auditor
          </h1>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Ensure your digital products are accessible to everyone with our comprehensive 
            accessibility auditing services. From automated testing to expert manual reviews.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors duration-200"
            >
              Get Accessibility Audit
              <Zap className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/services/accessibility"
              className="inline-flex items-center px-8 py-4 rounded-lg border border-slate-600 hover:border-slate-500 text-slate-300 hover:text-white font-semibold transition-colors duration-200"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Comprehensive Accessibility Solutions
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Our accessibility auditor provides everything you need to make your digital products 
              inclusive and compliant with international standards.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-400 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Audit Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Our Accessibility Audit Process
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              A systematic approach to identifying and resolving accessibility issues
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {auditProcess.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-blue-500/30">
                  <span className="text-2xl font-bold text-blue-400">{step.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-slate-400 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Make Your Products Accessible?
          </h2>
          <p className="text-xl text-slate-400 mb-8">
            Join thousands of organizations that trust us to ensure their digital products 
            are accessible to everyone, regardless of ability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors duration-200"
            >
              Start Accessibility Audit
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/case-studies"
              className="inline-flex items-center px-8 py-4 rounded-lg border border-slate-600 hover:border-slate-500 text-slate-300 hover:text-white font-semibold transition-colors duration-200"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}