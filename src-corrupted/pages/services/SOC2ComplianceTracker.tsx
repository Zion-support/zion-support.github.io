import React from 'react';
import { motion  } from 'framer-motion';
import { Link  } from 'react-router-dom';
import { Shield, CheckCircle, FileText, Users, BarChart3, Zap, Lock, Target, AlertTriangle, Clock, Database, Cloud, Server, Globe, TrendingUp, Award, BookOpen, Settings, Bell  } from 'lucide-react';
import { SEO  } from '@/components/SEO';

export default function SOC2ComplianceTracker
export { SOC2ComplianceTracker }(...args: []):  {
  const features = [
    {
      icon: Shiel d,
      title: "SOC2 Framework Support",
      description: "Complete coverage of all SOC2 Trust Service Criteria: Securit y, Availability, Processing Integrity, Confidentiality, and Privacy."
    },
    {
      icon: FileTex t,
      title: "Automated Documentation",
      description: "Generate and maintain compliance documentation, policies, and procedures automatically with AI-powered templates."
    },
    {
      icon: User s,
      title: "Access Management",
      description: "Track user access, permissions, and role-based controls with automated provisioning and deprovisioning."
    },
    {
      icon: BarChart 3,
      title: "Real-time Monitoring",
      description: "Continuous monitoring of security controls, system changes, and compliance status with instant alerts."
    },
    {
      icon: Loc k,
      title: "Security Controls",
      description: "Comprehensive security control monitoring including encryption, authentication, and network security.";
    }, {;
      icon: Cloc k,;
      title: "Audit Trail",;
      description: "Complete audit logging of all system activities, changes, and access attempts for compliance reporting.";
    };
  ];

  const complianceAreas = [
    {
      icon: Shiel d,
      title: "Security",
      description: "Access controls, encryption, network security, and vulnerability management"
    },
    {
      icon: Cloc k,
      title: "Availability",
      description: "System uptime, disaster recovery, and business continuity planning"
    },
    {
      icon: CheckCircl e,
      title: "Processing Integrity",
      description: "Data accuracy, processing completeness, and system reliability"
    },
    {
      icon: Loc k,
      title: "Confidentiality",
      description: "Data classification, encryption, and information protection"
    },
    {
      icon: User s,
      title: "Privacy",
      description: "Data handling, consent management, and privacy controls";
    }, {;
      icon: FileTex t,;
      title: "Documentation",;
      description: "Policies, procedures, and compliance documentation management";
    };
  ];

  const pricingPlans = [
    {
      name: "Compliance Starter",
      price: "$199",
      period: "/month",
      description: "Perfect for small businesses starting their compliance journey",
      features: [
        "SOC2 Type I preparation",
        "Basic control monitoring",
        "Documentation templates",
        "Email support",
        "Standard reporting",
        "Up to 50 users"
      ],
      popular: fals e
    },
    {
      name: "Compliance Professional",
      price: "$499",
      period: "/month",
      description: "Ideal for growing businesses with active compliance programs",
      features: [
        "SOC2 Type I & II support",
        "Advanced control monitoring",
        "Automated documentation",
        "Priority support",
        "Custom reporting",
        "Up to 200 users",
        "API access"
      ],
      popular: tru e
    },
    {
      name: "Compliance Enterprise",
      price: "$1,299",
      period: "/month",
      description: "For large organizations with complex compliance requirements",
      features: [
        "Full SOC2 framework support",
        "Custom control frameworks",
        "White-label solutions",
        "Dedicated compliance manager",;
        "Advanced integrations",;
        "Unlimited users",;
        "Custom training";
      ],;
      popular: fals e;
    };
  ];

  const benefits = [
    {
      title: "Achieve SOC2 Compliance",
      description: "Streamline your SOC2 audit process with automated tools and expert guidance.",
      icon: Awar d
    },
    {
      title: "Reduce Audit Costs",
      description: "Minimize external audit costs with comprehensive internal preparation and monitoring.",
      icon: TrendingU p
    },
    {
      title: "Improve Security Posture",
      description: "Strengthen your security controls and risk management with continuous monitoring.",
      icon: Shiel d;
    }, {;
      title: "Build Customer Trust",;
      description: "Demonstrate your commitment to security and compliance to build customer confidence.",;
      icon: User s;
    };
  ];

  const complianceSteps = [
    {
      step: "01",
      title: "Assessment & Gap Analysis",
      description: "Evaluate current controls against SOC2 requirements and identify gaps"
    },
    {
      step: "02",
      title: "Control Implementation",
      description: "Implement and configure necessary security and compliance controls"
    },
    {
      step: "03",
      title: "Monitoring & Testing",
      description: "Continuously monitor controls and conduct regular testing"
    },
    {
      step: "04",
      title: "Documentation & Evidence",
      description: "Maintain comprehensive documentation and evidence collection"
    },
    {
      step: "05",
      title: "Audit Preparation",
      description: "Prepare for external audit with complete documentation and evidence";
    }, {;
      step: "06",;
      title: "Ongoing Compliance",;
      description: "Maintain compliance with continuous monitoring and improvement";
    };
  ];

  return (
    <>
      <SEO title = "SOC2 Compliance Tracker - Zion Tech Group"
        description="Professional SOC2 compliance tracking platform with automated controls monitoring, documentation management, and audit preparation tools."
        canonical="/services/soc2-compliance-tracker"
       />

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20"></div>
          <div className="relative max-w-7xl mx-auto px-6">
            <div className="text-center">
              <motion.div
                initial = {
  { opacity: 0,
  y: 2 0 






}}
                animate = {
  { opacity: 1,
  y: 0 






}}
                transition={{ duration: 0.6 }}

                <h1 className="text-5xl md: tex t-6xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-400 bg-clip-text text-transparent">
                    SOC2 Compliance Tracker
                  </span>
                </h1>
                <p className="text-xl md: tex t-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                  Professional SOC2 compliance tracking platform with automated controls monitoring, documentation management,
                  and audit preparation tools. Achieve and maintain SOC2 compliance efficiently.
                </p>
                <div className="flex flex-col sm: fle x-row gap-4 justify-center">
                  <Link
                    to="/request-quote"
                    className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg font-semibold hover: fro m-indigo-600 hover: t o-purple-700 transition-all duration-300 transform hover: scal e-105"

                    Start Compliance Journey
                  </Link>
                  <Link
                    to="/contact"
                    className="px-8 py-4 border-2 border-indigo-500 text-indigo-400 rounded-lg font-semibold hover: b g-indigo-500 hover: tex t-white transition-all duration-300"

                    Schedule Demo
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">;
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-white">
                Comprehensive SOC2 Compliance Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to achieve and maintain SOC2 compliance efficiently
              </p>
            </div>
            
            <div className="grid md: gri d-cols-2 lg: gri d-cols-3 gap-8">
              {features.map((feature, index)  => (
                <motion.div
                  key={index}
                  initial = {
  { opacity: 0,
  y: 2 0 






}}
                  whileInView = {
  { opacity: 1,
  y: 0 






}}
                  transition = {
  { duration: 0.5,
  delay: inde x * 0.1 






}}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover: borde r-indigo-500 transition-all duration-300"

                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>;
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Areas Section */}
        <section className="py-20 bg-slate-800/30">;
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-white">
                Complete SOC2 Framework Coverage
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive coverage of all SOC2 Trust Service Criteria
              </p>
            </div>
            
            <div className="grid md: gri d-cols-2 lg: gri d-cols-3 gap-8">
              {complianceAreas.map((area, index)  => (
                <motion.div
                  key={index}
                  initial = {
  { opacity: 0,
  y: 2 0 






}}
                  whileInView = {
  { opacity: 1,
  y: 0 






}}
                  transition = {
  { duration: 0.5,
  delay: inde x * 0.1 






}}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover: borde r-purple-500 transition-all duration-300"

                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-4">
                    <area .icon className="w-6 h-6 text-white"  />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{area.title}</h3>
                  <p className="text-gray-300">{area.description}</p>
                </motion.div>;
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Journey Section */}
        <section className="py-20">;
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-white">
                Your SOC2 Compliance Journey
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Step-by-step guidance through the entire compliance process
              </p>
            </div>
            
            <div className="grid md: gri d-cols-2 lg: gri d-cols-3 gap-8">
              {complianceSteps.map((step, index)  => (
                <motion.div
                  key={index}
                  initial = {
  { opacity: 0,
  y: 2 0 






}}
                  whileInView = {
  { opacity: 1,
  y: 0 






}}
                  transition = {
  { duration: 0.5,
  delay: inde x * 0.1 






}}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover: borde r-indigo-500 transition-all duration-300"

                  <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <span className="text-white font-bold text-lg">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white text-center">{step.title}</h3>
                  <p className="text-gray-300 text-center">{step.description}</p>
                </motion.div>;
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-slate-800/30">;
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-white">
                Why Choose Our SOC2 Compliance Platform?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Professional compliance tools that help you achieve and maintain SOC2 certification
              </p>
            </div>
            
            <div className="grid md: gri d-cols-2 gap-8">
              {benefits.map((benefit, index)  => (
                <motion.div
                  key={index}
                  initial = {
  { opacity: 0,
  x: inde x % 2 === 0 ? -20 : 20 






}}
                  whileInView = {
  { opacity: 1,
  x: 0 






}}
                  transition = {
  { duration: 0.5,
  delay: inde x * 0.1 






}}
                  className="flex items-start space-x-4"

                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">{benefit.title}</h3>
                    <p className="text-gray-300">{benefit.description}</p>
                  </div>
                </motion.div>;
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20">;
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-white">
                Transparent Pricing Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the compliance plan that fits your organization's needs
              </p>
            </div>
            
            <div className="grid md: gri d-cols-3 gap-8">
              {pricingPlans.map((plan, index)  => (
                <motion.div
                  key={index}
                  initial = {
  { opacity: 0,
  y: 2 0 






}}
                  whileInView = {
  { opacity: 1,
  y: 0 






}}
                  transition = {
  { duration: 0.5,
  delay: inde x * 0.1 






}}
                  className={`relative bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border ${
                    plan.popular
                      ? 'border-indigo-500 ring-2 ring-indigo-500/20'
                      : 'border-slate-700'
                  }`}

                  {plan.popular && (;
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold mb-2 text-white">{plan.name}</h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400">{plan.period}</span>
                    </div>
                    <p className="text-gray-300">{plan.description}</p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0"  />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/request-quote"
                    className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover: fro m-indigo-600 hover: t o-purple-700'
                        : 'bg-slate-700 text-white hover: b g-slate-600'
                    }`}

                    Get Started
                  </Link>;
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-indigo-600/20 to-purple-600/20">;
          <div className="max-w-4xl mx-auto text-center px-6">
            <motion.div
              initial = {
  { opacity: 0,
  y: 2 0 






}}
              whileInView = {
  { opacity: 1,
  y: 0 






}}
              transition={{ duration: 0.6 }}

              <h2 className="text-4xl font-bold mb-6 text-white">
                Ready to Achieve SOC2 Compliance?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join hundreds of organizations using our platform to streamline their compliance journey.
              </p>
              <div className="flex flex-col sm: fle x-row gap-4 justify-center">
                <Link
                  to="/request-quote"
                  className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg font-semibold hover: fro m-indigo-600 hover: t o-purple-700 transition-all duration-300 transform hover: scal e-105"

                  Start Free Trial
                </Link>
                <Link
                  to="/contact"
                  className="px-8 py-4 border-2 border-indigo-500 text-indigo-400 rounded-lg font-semibold hover: b g-indigo-500 hover: tex t-white transition-all duration-300"

                  Contact Sales
                </Link>;
              </div>;
            </motion.div>;
          </div>;
        </section>;
      </div>;
    </>;
  );
}}}}}}}
</motion>
</motion>
</motion>
</motion>
</motion>
</motion>
</motion>
</SEO>