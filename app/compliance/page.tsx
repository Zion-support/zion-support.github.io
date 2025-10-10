'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Shield, FileText, Lock, Users, AlertTriangle, CheckCircle2 } from 'lucide-react';

const CompliancePage: React.FC = () => {
  const complianceFrameworks = [
    {
      icon: Shield,
      title: 'GDPR Compliance',
      description: 'Full compliance with General Data Protection Regulation requirements',
      features: ['Data protection by design', 'Privacy impact assessments', 'Right to be forgotten', 'Data breach notification']
    },
    {
      icon: FileText,
      title: 'HIPAA Compliance',
      description: 'Healthcare data protection and privacy compliance',
      features: ['Patient data encryption', 'Access controls', 'Audit trails', 'Business associate agreements']
    },
    {
      icon: Lock,
      title: 'SOC 2 Type II',
      description: 'Security, availability, and confidentiality controls',
      features: ['Security monitoring', 'Access management', 'System availability', 'Data integrity']
    },
    {
      icon: Users,
      title: 'ISO 27001',
      description: 'Information security management system certification',
      features: ['Risk assessment', 'Security policies', 'Incident management', 'Continuous improvement']
    }
  ];

  const complianceSteps = [
    {
      step: '01',
      title: 'Assessment',
      description: 'Comprehensive evaluation of your current compliance posture'
    },
    {
      step: '02',
      title: 'Gap Analysis',
      description: 'Identify areas that need improvement to meet compliance requirements'
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Deploy necessary controls and processes to achieve compliance'
    },
    {
      step: '04',
      title: 'Monitoring',
      description: 'Ongoing monitoring and maintenance of compliance status'
    }
  ];

  const benefits = [
    'Reduced risk of regulatory penalties',
    'Enhanced data security and privacy',
    'Improved customer trust and confidence',
    'Streamlined audit processes',
    'Competitive advantage in regulated industries',
    'Reduced legal and compliance costs',
    'Better risk management',
    'Enhanced business reputation'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Compliance Services - Zion Tech Group | Regulatory Compliance Solutions</title>
        <meta name="description" content="Professional compliance services by Zion Tech Group. GDPR, HIPAA, SOC 2, ISO 27001 compliance solutions." />
        <meta name="keywords" content="compliance services, GDPR, HIPAA, SOC 2, ISO 27001, regulatory compliance, data protection" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Compliance Services
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Ensure your business meets all regulatory requirements with our comprehensive compliance solutions. 
            From GDPR to HIPAA, we help you navigate complex regulations with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Compliance Frameworks */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Compliance Frameworks We Support
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We help you achieve and maintain compliance with major regulatory frameworks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {complianceFrameworks.map((framework, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-purple-400/50 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-gradient-to-br from-purple-400/20 to-blue-400/20 rounded-full w-12 h-12 flex items-center justify-center">
                    <framework.icon className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{framework.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{framework.description}</p>
                <ul className="space-y-2">
                  {framework.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-purple-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Process */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Our Compliance Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A structured approach to achieving and maintaining compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {complianceSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-br from-purple-400/20 to-blue-400/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-400">{step.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Benefits of Compliance
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Achieve peace of mind and business advantages through proper compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Key Benefits</h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-400/10 to-blue-400/10 rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-6">Why Choose Us</h3>
              <p className="text-gray-300 mb-6">
                Our compliance experts have years of experience helping businesses navigate complex 
                regulatory requirements. We provide comprehensive support to ensure your organization 
                meets all necessary standards.
              </p>
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  <span>Expert Guidance</span>
                </div>
                <div className="flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4" />
                  <span>Risk Mitigation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Achieve Compliance?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Contact our compliance experts to discuss your regulatory requirements and get a customized solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                Get Compliance Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CompliancePage;