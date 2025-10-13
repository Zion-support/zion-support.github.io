
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Users } from 'lucide-react';
import { Award } from 'lucide-react';
import { Shield } from 'lucide-react';
import { Globe } from 'lucide-react';
import { Lock } from 'lucide-react';
import { Monitor } from 'lucide-react';
import { FileText } from 'lucide-react';

export default function page() {
  const features = [
    { title: "Feature 1", description: "Description 1" },
    { title: "Feature 2", description: "Description 2" }
  ];
  const complianceFrameworks = [
    {
      name: "SOC 2 Type II",
      description: "Security, availability, and confidentiality controls for service organizations",
      status: "Certified",
      icon: <Shield className="w-8 h-8" />
    },
    {
      name: "ISO 27001",
      description: "Information security management system certification",
      status: "Certified",
      icon: <Lock className="w-8 h-8" />
    },
    {
      name: "GDPR",
      description: "General Data Protection Regulation compliance for EU data",
      status: "Compliant",
      icon: <Globe className="w-8 h-8" />
    },
    {
      name: "HIPAA",
      description: "Health Insurance Portability and Accountability Act compliance",
      status: "Compliant",
      icon: <FileText className="w-8 h-8" />
    },
    {
      name: "PCI DSS",
      description: "Payment Card Industry Data Security Standard compliance",
      status: "Compliant",
      icon: <Award className="w-8 h-8" />
    },
    {
      name: "CCPA",
      description: "California Consumer Privacy Act compliance",
      status: "Compliant",
      icon: <Users className="w-8 h-8" />
    }
  ];

export default function compliance() {
  const services = [
    {
      title: "Compliance Assessment",
      description: "Comprehensive evaluation of your current compliance posture and gap analysis",
      features: ["Risk Assessment", "Gap Analysis", "Remediation Planning", "Documentation Review"]
    },
    {
      title: "Policy Development",
      description: "Custom policies and procedures tailored to your industry and regulatory requirements",
      features: ["Policy Creation", "Procedure Documentation", "Training Materials", "Implementation Support"]
    },
    {
      title: "Audit Support",
      description: "Expert guidance and support throughout the audit process",
      features: ["Pre-Audit Preparation", "Audit Management", "Evidence Collection", "Remediation Support"]
    },
    {
      title: "Ongoing Monitoring",
      description: "Continuous monitoring and maintenance of compliance programs",
      features: ["Regular Assessments", "Policy Updates", "Training Programs", "Incident Response"]
    }
  ];

export default function CompliancePage() {
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function PagePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Page - Zion Tech Group</title>
        <meta name="description" content="Professional page services by Zion Tech Group." />
      </Helmet>

      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-8">Compliance</h1>
          <p className="text-xl text-gray-300 mb-8">
export default function CompliancePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Helmet>
        <title>Compliance - Zion Tech Group</title>
        <meta name="description" content="Advanced compliance solutions by Zion Tech Group" />
      </Helmet>

      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Compliance
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            This page is under development. Please check back later.

export default function CompliancePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Compliance</h1>
          <p className="text-xl text-gray-600 mb-8">
            Advanced AI and IT solutions for your business needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Feature 1</h3>
            <p className="text-gray-600">
              Comprehensive solution for your business requirements.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Feature 2</h3>
            <p className="text-gray-600">
              Advanced technology integration and optimization.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Feature 3</h3>
            <p className="text-gray-600">
              Scalable and secure implementation.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Get Started
          </button>
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">
            Page
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Professional page services coming soon.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticBackgroundEnhanced from '../components/FuturisticBackgroundEnhanced';
import FuturisticCardEnhanced from '../components/FuturisticCardEnhanced';
import FuturisticButtonEnhanced from '../components/FuturisticButtonEnhanced';
import FuturisticTextEnhanced from '../components/FuturisticTextEnhanced';
import ResponsiveContainer from '../components/ResponsiveContainer';
import EnhancedAccessibility from '../components/EnhancedAccessibility';
import PerformanceOptimizer from '../components/PerformanceOptimizer';
import { Shield, ArrowRight, CheckCircle, Star, FileText, Users, AlertTriangle } from 'lucide-react';

const CompliancePage = () => {
  const complianceStandards = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "GDPR Compliance",
      description: "Ensure your data processing activities comply with General Data Protection Regulation",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "SOC 2 Type II",
      description: "Achieve SOC 2 Type II certification for security, availability, and confidentiality",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "HIPAA Compliance",
      description: "Meet Health Insurance Portability and Accountability Act requirements",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      title: "ISO 27001",
      description: "Implement Information Security Management System standards",
      color: "from-orange-500 to-red-500"
    }
  ];

  const complianceServices = [
    {
      title: "Compliance Assessment",
      description: "Comprehensive evaluation of your current compliance posture and gaps",
      features: [
        "Current state analysis",
        "Gap identification",
        "Risk assessment",
        "Remediation roadmap"
      ]
    },
    {
      title: "Policy Development",
      description: "Create and implement comprehensive compliance policies and procedures",
      features: [
        "Policy creation",
        "Procedure documentation",
        "Training materials",
        "Implementation support"
      ]
    },
    {
      title: "Audit Support",
      description: "Prepare for and support compliance audits and certifications",
      features: [
        "Audit preparation",
        "Documentation support",
        "Remediation assistance",
        "Certification guidance"
      ]
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$299",
      period: "month",
      description: "Perfect for small businesses",
      features: [
        "Basic compliance assessment",
        "Policy templates",
        "Email support",
        "Standard reporting"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$599",
      period: "month",
      description: "Ideal for growing companies",
      features: [
        "Comprehensive assessment",
        "Custom policy development",
        "Priority support",
        "Audit preparation",
        "Training materials",
        "Ongoing monitoring"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$999",
      period: "month",
      description: "For large organizations",
      features: [
        "Full compliance program",
        "Dedicated compliance officer",
        "White-label solution",
        "SLA guarantee",
        "Advanced reporting",
        "24/7 support"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Compliance Officer",
      company: "TechCorp",
      content: "Zion Compliance services helped us achieve SOC 2 certification in record time. Excellent support throughout the process.",
      rating: 5,
      avatar: "SC"
    },
    {
      name: "Michael Rodriguez",
      role: "Data Protection Officer",
      company: "DataFlow Inc",
      content: "The GDPR compliance assessment was thorough and comprehensive. We're now fully compliant and confident in our data practices.",
      rating: 5,
      avatar: "MR"
    },
    {
      name: "Emily Johnson",
      role: "Security Manager",
      company: "SecureCorp",
      content: "The policy development service was outstanding. Our compliance documentation is now comprehensive and up-to-date.",
      rating: 5,
      avatar: "EJ"
    }
  ];

  return (
    <PerformanceOptimizer>
      <EnhancedAccessibility>
        <FuturisticBackgroundEnhanced>
          <EnhancedSEO
            title="Compliance Services - Zion Tech Group | Regulatory Compliance Solutions"
            description="Comprehensive compliance services including GDPR, SOC 2, HIPAA, and ISO 27001 compliance. Ensure your business meets all regulatory requirements."
            keywords="compliance services, GDPR compliance, SOC 2, HIPAA compliance, ISO 27001, regulatory compliance, data protection"
            canonical="https://ziontechgroup.com/compliance"
          />

          <main className="min-h-screen">
            {/* Hero Section */}
            <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
              </div>

              <ResponsiveContainer className="text-center relative z-10">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 mb-6">
                  <Shield className="w-4 h-4 text-blue-400 mr-2" />
                  <span className="text-blue-400 text-sm font-medium">Compliance Services</span>
                </div>

                <FuturisticTextEnhanced
                  variant="display"
                  size="5xl"
                  gradient={true}
                  glow={true}
                  className="mb-6 leading-tight">
                  Compliance Services
                </FuturisticTextEnhanced>

                <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed text-center">
                  Ensure your business meets all regulatory requirements with our comprehensive compliance services.
                  From GDPR to SOC 2, we've got you covered.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                  <FuturisticButtonEnhanced
                    href="#pricing"
                    variant="primary"
                    size="lg"
                    icon={Shield}
                    iconPosition="left">
                    Get Started
                  </FuturisticButtonEnhanced>
                  <FuturisticButtonEnhanced
                    href="#services"
                    variant="outline"
                    size="lg"
                    icon={ArrowRight}
                    iconPosition="left">
                    Learn More
                  </FuturisticButtonEnhanced>
                </div>
              </ResponsiveContainer>
            </section>

            {/* Compliance Standards Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
              <ResponsiveContainer>
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                    Compliance Standards We Support
                  </h2>
                  <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                    We help you achieve compliance with major regulatory standards and frameworks
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {complianceStandards.map((standard, index) => (
                    <FuturisticCardEnhanced
                      key={index}
                      className="text-center">
                      <div
                        className={`w-12 h-12 md:w-16 md:h-16 rounded-lg bg-gradient-to-r ${standard.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                        aria-hidden="true">
                        {standard.icon}
                      </div>
                      <h3 className="text-lg md:text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                        {standard.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                        {standard.description}
                      </p>
                    </FuturisticCardEnhanced>
                  ))}
                </div>
              </ResponsiveContainer>
            </section>

            {/* Compliance Services Section */}
            <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-blue-800/50">
              <ResponsiveContainer>
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Our Compliance Services
                  </h2>
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    Comprehensive compliance solutions tailored to your business needs
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {complianceServices.map((service, index) => (
                    <FuturisticCardEnhanced
                      key={index}
                      className="group hover:scale-105 transition-transform duration-300">
                      <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-300 mb-6">{service.description}</p>
                      <ul className="space-y-3">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-gray-300">
                            <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </FuturisticCardEnhanced>
                  ))}
                </div>
              </ResponsiveContainer>
            </section>

            {/* Pricing Section */}
            <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Choose Your Plan
                  </h2>
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    Flexible pricing options to fit your compliance needs
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {pricingPlans.map((plan, index) => (
                    <FuturisticCardEnhanced
                      key={index}
                      className={`relative ${plan.popular ? 'ring-2 ring-blue-500' : ''}`}>
                      {plan.popular && (
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                          <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                            Most Popular
                          </span>
                        </div>
                      )}
                      <div className="text-center mb-6">
                        <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                        <div className="text-4xl font-bold text-blue-400 mb-2">
                          {plan.price}<span className="text-lg text-gray-400">/{plan.period}</span>
                        </div>
                        <p className="text-gray-300">{plan.description}</p>
                      </div>
                      <ul className="space-y-3 mb-8">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-gray-300">
                            <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <FuturisticButtonEnhanced
                        variant={plan.popular ? "primary" : "outline"}
                        size="lg"
                        icon={<ArrowRight className="w-5 h-5" />}
                        iconPosition="right"
                        className="w-full">
                        Get Started
                      </FuturisticButtonEnhanced>
                    </FuturisticCardEnhanced>
                  ))}
                </div>
              </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Trusted by Compliance Teams
                  </h2>
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    See what compliance professionals are saying about our services
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {testimonials.map((testimonial, index) => (
                    <div
                      key={index}
                      className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10 relative overflow-hidden">
                      <div className="flex items-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                      <div>
                        <div className="font-semibold text-white">{testimonial.name}</div>
                        <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900/30 to-purple-900/30">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                  Ready to Achieve Compliance?
                </h2>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Join thousands of organizations using our compliance services
                  to meet regulatory requirements. Start your compliance journey today.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <FuturisticButtonEnhanced
                    href="/contact"
                    variant="primary"
                    size="lg"
                    icon={ArrowRight}
                    iconPosition="right">
                    Get Started
                  </FuturisticButtonEnhanced>
                  <FuturisticButtonEnhanced
                    href="/consultation"
                    variant="outline"
                    size="lg"
                    icon={Shield}
                    iconPosition="right">
                    Free Consultation
                  </FuturisticButtonEnhanced>
                </div>
              </div>
            </section>
          </main>
        </FuturisticBackgroundEnhanced>
      </EnhancedAccessibility>
    </PerformanceOptimizer>
  );
};

export default CompliancePage;

}
}
import React from "react";
import { Helmet } from 'react-helmet-async';

const Compliance = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <Helmet>
        <title>Compliance - Zion Tech Group</title>
        <meta name="description" content="Advanced compliance service coming soon." />
      </Helmet>
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Compliance</h1>
        <p className="text-xl text-gray-300">Coming Soon</p>
      </div>
    </div>
  );
};

export default Compliance;
}
