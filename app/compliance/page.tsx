<<<<<<< HEAD
import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
<<<<<<< HEAD
import { ArrowRight } from 'lucide-react';
import { Users } from 'lucide-react';
import { Award } from 'lucide-react';
import { Star } from 'lucide-react';
import { Shield } from 'lucide-react';
import { CheckCircle } from 'lucide-react';
import { Globe } from 'lucide-react';
import { Lock } from 'lucide-react';
import { Monitor } from 'lucide-react';
import { FileText } from 'lucide-react';

export default function page() {
=======
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0659

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
  ];

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
  ];
export default function CompliancePage() {
<<<<<<< HEAD

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Compliance - Zion Tech Group</title>
        <meta name="description" content="Compliance solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">Compliance</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Discover our comprehensive compliance solutions designed to meet your business needs.
          </p>
<<<<<<< HEAD
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Expert Solutions</h3>
              <p className="text-gray-300">
                Our team of experts delivers tailored solutions for your specific requirements.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Cutting-Edge Technology</h3>
              <p className="text-gray-300">
                We use the latest technologies and best practices to ensure optimal performance.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">24/7 Support</h3>
              <p className="text-gray-300">
                Get round-the-clock support from our dedicated team of professionals.
              </p>
            </div>
          </div>
        </div>
      </div>
=======
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
      <Footer />
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0210
    </div>
  );
}
=======
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings } from 'lucide-react';

<<<<<<< HEAD
const CompliancePage: React.FC = () => {
  const features = [
    {
<<<<<<< HEAD
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Advanced AI algorithms that provide intelligent insights and recommendations.',
      benefits: ['Smart recommendations', 'Predictive analytics', 'Automated insights', 'Real-time analysis']
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics dashboard with real-time data visualization.',
      benefits: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics']
    },
    {
      icon: Target,
      title: 'Precision Targeting',
      description: 'Target specific goals and objectives with precision and accuracy.',
      benefits: ['Goal tracking', 'Performance optimization', 'Strategic planning', 'Success metrics']
    },
    {
      icon: TrendingUp,
      title: 'Growth Optimization',
      description: 'Optimize your business growth with data-driven strategies.',
      benefits: ['Growth strategies', 'Market analysis', 'Competitive insights', 'ROI optimization']
    },
    {
      icon: Zap,
      title: 'Fast Processing',
      description: 'Process large datasets in seconds with our optimized AI analytics engine.',
      benefits: ['High-speed processing', 'Scalable infrastructure', 'Real-time analysis', 'Batch processing']
    },
    {
      icon: Shield,
      title: 'Secure Analytics',
      description: 'Enterprise-grade security for your sensitive data and analytics.',
      benefits: ['Data encryption', 'Access controls', 'Audit trails', 'Compliance ready']
=======
      icon: FileCheck,
      title: 'Compliance Management',
      description: 'Comprehensive compliance management solutions for various industry standards',
    },
    {
      icon: Lock,
      title: 'Security Compliance',
      description: 'Ensure your systems meet the highest security and compliance standards',
    },
    {
      icon: Award,
      title: 'Certification Support',
      description: 'Get support for achieving and maintaining industry certifications',
    },
    {
      icon: Shield,
      title: 'Audit Readiness',
      description: 'Stay audit-ready with continuous compliance monitoring and reporting',
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
    }
  ];

  const benefits = [
    'Increase efficiency by up to 50%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    'Gain competitive advantage with advanced technology'
  ];

  return (
    <>
=======
import React  from 'react';
const CompliancePage: React.FC = () => {
  return (
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
      <Helmet>
        <title>Compliance - Zion Tech Group</title>
        <meta name="description" content="Ensure compliance with industry standards and regulations." />
        <meta name="keywords" content="compliance, regulations, standards, audit" />
      </Helmet>
<<<<<<< HEAD

<<<<<<< HEAD
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-amber-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Compliance
=======

import {Helmet} from 'react-helmet-async';
import {Link} from 'react-router-dom';
import {ArrowRight} from 'lucide-react';

export default function Compliance() {return (
    <title>Compliance - Zion Tech Group</title>

            <h1 className="text-4xl font-bold text-white mb-6">Compliance</h1>
            <p className="text-lg text-gray-300 mb-8">Professional compliance services coming soon.</p>

              Contact Us

      <  />
  );}

    <><  />
      <Helmet></Helmet>
        <title>Compliance - Zion Tech Group</title>
        <meta name="description" content="Compliance services by Zion Tech Group. Professional AI and IT solutions."   /></meta>
        <meta name="keywords" content="compliance, AI solutions, IT services"   /></meta>
      </Helmet>
      <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
        <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            <h1 className="w-5h-5ml-2"   /></h1>
              <span className="w-5h-5ml-2"   />Compliance;
              </span>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Ensure compliance with industry standards and regulations.
=======

      <div className="min-h-screen bg-gradient-to-br from-slate-900via-purple-900to-slate-900">
        <div className="container mx-autopx-4py-16">
          <div className="text-centermb-16">
            <h1 className="text-4xl md:text-6 xl font-bold text-white mb-6" />
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent"  />Compliance
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xlmx-auto">
              Professional compliance services by Zion Tech Group.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 backdrop-blur-sm border border-purple-500/20 rounded-xlp-8text-center">
            <h2 className="text-2 xl font-bold text-white mb-4"  >Coming Soon</h2>
            <p className="text-gray-300 mb-6">
              We're working on bringing you comprehensive compliance solutions. 
              Contact us to learn more about our services.
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-amber-500 to-blue-600 hover:from-amber-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
<<<<<<< HEAD
<<<<<<< HEAD
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Key Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced AI technology that drives results
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  {feature.benefits && (
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Our Solution?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Proven results that drive business growth and efficiency
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-lg text-white font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our experts to discuss your requirements and get started today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-amber-500 to-blue-600 hover:from-amber-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Contact Us
                </button>
                <button className="border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>
=======
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Compliance
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Ensure your business meets all regulatory and compliance requirements. 
            Powered by advanced AI technology and industry expertise.
          </p>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our compliance solutions deliver unmatched performance, security, and scalability.
          </p>
        </div></div></div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300">
              <feature.icon className="h-12 w-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div></div>
          ))}
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Why Choose Our Compliance Solutions?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </div></div></div>
=======
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Navigation />
      <main className="container mx-auto px-4 py-16 pt-24"></main>
        {/* Header */}
        <section className="text-center mb-16"></section>
          <h1 className="text-4xl md: text-5xl lg:text-6xl font-bold text-white mb-6 neon-text"></h1>
            Compliance & Certifications;
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p>
            We maintain the highest standards of compliance and security to protect your data and ensure regulatory adherence across all industries.
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 neon-text">Compliance & Certifications</h1><p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">We maintain the highest standards of compliance and security to protect your data and ensure regulatory adherence across all industries.</p>
          </p>
          <div className="flex flex-wrap justify-center gap-4"></section>
            <div className="flex items-center space-x-2 bg-green-500/20 px-4 py-2 rounded-lg"></div>
              <Award className="w-5 h-5 text-green-400" />
              <span className="text-white font-medium">SOC 2 Type II</span>
            </div>
            <div className="flex items-center space-x-2 bg-blue-500/20 px-4 py-2 rounded-lg"></div>
              <Shield className="w-5 h-5 text-blue-400" />
              <span className="text-white font-medium">ISO 27001</span>
            </div>
            <div className="flex items-center space-x-2 bg-purple-500/20 px-4 py-2 rounded-lg"></div>
              <CheckCircle className="w-5 h-5 text-purple-400" />
              <span className="text-white font-medium">GDPR Compliant</span>
            </div>
          </div>,
        </section>,
,
        {/* Compliance Frameworks */})
        <section className="mb-16">)
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Compliance Frameworks</h2>)
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">),
            {complianceFrameworks.map((framework, index) => (
              <div key={index} className="cyber-card p-6"></div>
                <div className="flex items-center justify-between mb-4"></div>
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Compliance Frameworks</h2><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{complianceFrameworks.map((framework, index) => (</section>
              <div key={index} className="cyber-card p-6"></div>
                <div className="flex items-center justify-between mb-4"></div>
                  <framework.icon className="w-8 h-8 text-cyan-400" />
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-500/20 text-green-400">{framework.status}</span><h3 className="text-xl font-bold text-white mb-2">{framework.name}</h3>
                <p className="text-gray-300 mb-4 text-sm">{framework.description}</p><ul className="space-y-2">{framework.details.map((detail, detailIndex) => (</ul>
                    <li key={detailIndex} className="flex items-start text-sm text-gray-300"></li>
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" >{detail}</CheckCircle>
                    </CheckCircle>
                  ))}
                </ul>
              </div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
            ))}
=======
      </div>
        </div>
      </div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
          </div>
        </div>

<<<<<<< HEAD
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Contact our experts to discuss your compliance needs and get a customized solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
              <Phone className="mr-2 h-5 w-5" />
              Call Now
=======
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            <h2 className="text-2xl font-bold text-white mb-4"  >Coming Soon</h2>
            <p className="w-5h-5ml-2">We're working on bringing you comprehensive compliance solutions.
              Contact us to learn more about our services.
            </p>
            <button className="w-5h-5ml-2">Contact Us;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
              <Mail className="mr-2 h-5 w-5" />
              Email Us
            </button>
          </div></div>
        </div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
      </div>
<<<<<<< HEAD
<<<<<<< HEAD
      <Footer />
    </>
=======
          </div>
        </div>
      </div>
        </div>
      </div>
      </div>

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
  );
};

export default CompliancePage;
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-02f6
=======
        {/* Compliance Areas */}
        <section className="mb-16"></section>
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Compliance Areas</h2>
          <div className="grid grid-cols-1 md: grid-cols-2 gap-8">,
            {complianceAreas.map((area, index) => (
              <div key={index} className="cyber-card p-6"></div>
                <div className="flex items-center mb-4"></div>
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Compliance Areas</h2><div className="grid grid-cols-1 md:grid-cols-2 gap-8">{complianceAreas.map((area, index) => (</section>
              <div key={index} className="cyber-card p-6"></div>
                <div className="flex items-center mb-4"></div>
                  <area.icon className="w-8 h-8 text-cyan-400 mr-3" />
                  <h3 className="text-xl font-bold text-white">{area.title}</h3><p className="text-gray-300 mb-4">{area.description}</p><ul className="space-y-2">{area.measures.map((measure, measureIndex) => (</ul>
                    <li key={measureIndex} className="flex items-start text-sm text-gray-300"></li>
                      <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 mr-2 flex-shrink-0">{measure}</span>
                    </span>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Current Certifications */}
        <section className="mb-16"></section>
          <div className="cyber-card p-8"></section>
            <h2 className="text-2xl font-bold text-white mb-6 neon-text">Current Certifications</h2>
            <div className="overflow-x-auto"></div>
              <table className="w-full text-left"></table>
                <thead></thead>
                  <tr className="border-b border-gray-700"></tr>
                    <th className="pb-3 text-cyan-400 font-semibold">Certification<th className="pb-3 text-cyan-400 font-semibold">Issuer</th>
                    <th className="pb-3 text-cyan-400 font-semibold">Valid Until<th className="pb-3 text-cyan-400 font-semibold">Scope<th className="pb-3 text-cyan-400 font-semibold">Status<tbody>{certifications.map((cert, index) => (</tbody>
                    <tr key={index} className="border-b border-gray-800"></tr>
                      <td className="py-3 text-white font-semibold">{cert.name}<td className="py-3 text-gray-300">{cert.issuer}</td>
                      <td className="py-3 text-gray-300">{cert.validUntil}<td className="py-3 text-gray-300">{cert.scope}</td>
                      <td className="py-3"></td>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-500/20 text-green-400"></span>
                          <CheckCircle className="w-3 h-3 mr-1" >Active</CheckCircle>
                        </CheckCircle>
                          <CheckCircle className="w-3 h-3 mr-1" />
                          Active;
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Compliance Process */}
        <section className="mb-16"></section>
          <div className="cyber-card p-8"></section>
            <h2 className="text-2xl font-bold text-white mb-6 neon-text">Our Compliance Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8"></div>
              <div></div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Continuous Monitoring</h3>
                <ul className="space-y-2 text-gray-300"></ul>
                  <li className="flex items-start"></li>
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Real-time compliance monitoring and alerting</span>
                  </li>
                  <li className="flex items-start"></l>
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" /></CheckCircl>
                    <<<<span>Automated</span></<<span>compliance</span> checks and reporting</span>
                  </li>
                  <li className="flex items-start"></l>
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" /></CheckCircl>
                    <<<<span>Regular</span></<<span>risk</span> assessments and gap analysis</span>
                  </li>
                  <li className="flex items-start"></l>
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" /></CheckCircl>
                    <<<<span>Ongoing</span></<<span>training</span> and awareness programs</span>
                  </li>
                </ul>
              </div>
              <div></div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Audit & Assessment</h3>
                <ul className="space-y-2 text-gray-300"></ul>
                  <li className="flex items-start"></li>
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Annual third-party security audits</span>
                  </li>
                  <li className="flex items-start"></l>
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" /></CheckCircl>
                    <<<<span>Penetration</span></<<span>testing</span> and vulnerability assessments</span>
                  </li>
                  <li className="flex items-start"></l>
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" /></CheckCircl>
                    <<<<span>Compliance</span></<<span>gap</span> analysis and remediation</span>
                  </li>
                  <li className="flex items-start"></l>
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" /></CheckCircl>
                    <<<<span>Management</span></<<span>review</span> and attestation</span>
                  </li>
                </ul>
              </div>,
            </div>,
          </div>,
        </section>,
,
        {/* Industry-Specific Compliance */}
        <section className="mb-16"></section>
          <div className="cyber-card p-8"></section>
            <h2 className="text-2xl font-bold text-white mb-6 neon-text">Industry-Specific Compliance</h2><p className="text-gray-300 mb-8">We understand that different industries have unique compliance requirements. Our solutions are designed to meet the specific needs of various sectors.</p>
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"></div>
              <div className="bg-slate-800/50 rounded-lg p-6"></div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-3">Healthcare (HIPAA)</h3>
                <ul className="space-y-2 text-sm text-gray-300"></ul>
                  <li>• Protected Health Information (PHI) safeguards<li>• Administrative, physical, and technical safeguards</li>
                  <li>• Business Associate Agreements (BAAs)<li>• Workforce training and access controls</li>
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-6">,
              <div className="bg-slate-800/50 rounded-lg p-6">,
                <h3 className="text-lg font-semibold text-cyan-400 mb-3">Healthcare (HIPAA)</h3>,
                <ul className="space-y-2 text-sm text-gray-300">,
                  <li>• Protected Health Information (PHI) safeguards</li>,
                  <li>• Administrative, physical, and technical safeguards</li>
                  <li>• Business Associate Agreements (BAAs)</li>
                  <li>• Workforce training and access controls</li>
                </ul>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-6"></div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-3">Financial Services</h3>
                <ul className="space-y-2 text-sm text-gray-300"></ul>
                  <li>• PCI DSS compliance for payment processing<li>• SOX compliance for financial reporting</li>
                  <li>• GLBA compliance for financial privacy<li>• FFIEC guidelines for cybersecurity</li>
                </ul>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-6"></div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-3">Government</h3>
                <ul className="space-y-2 text-sm text-gray-300"></ul>
                  <li>• FedRAMP compliance for cloud services<li>• FISMA compliance for federal systems</li>
                  <li>• NIST Cybersecurity Framework<li>• Security clearance requirements</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Compliance Documentation */}
        <section className="mb-16"></section>
          <div className="cyber-card p-8"></section>
            <h2 className="text-2xl font-bold text-white mb-6 neon-text">Compliance Documentation</h2><p className="text-gray-300 mb-6">We maintain comprehensive documentation of our compliance efforts and are happy to provide relevant documentation to our clients and prospects.</p>
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div>
              <div></div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-4">Available Documents</h3>
                <ul className="space-y-2 text-gray-300"></ul>
                  <li className="flex items-center"></li>
                    <FileText className="w-4 h-4 text-cyan-400 mr-2" />
                    <span>SOC 2 Type II Report</span>
                  </li>
                  <li className="flex items-center"></l>
                    <FileText className="w-4 h-4 text-cyan-400 mr-2" /></FileTex>
                    <<<<span>ISO</span></span> 27001 Certificate</span>
                  </li>
                  <li className="flex items-center"></l>
                    <FileText className="w-4 h-4 text-cyan-400 mr-2" /></FileTex>
                    <<<<span>Privacy</span></<<span>Policy</span> and Data Processing Agreement</span>
                  </li>
                  <li className="flex items-center"></l>
                    <FileText className="w-4 h-4 text-cyan-400 mr-2" /></FileTex>
                    <<<<span>Security</span></<<span>and</span> Compliance Overview</span>
                  </li>
                </ul>,
              </div>,
              <div>,
                <h3 className="text-lg font-semibold text-cyan-400 mb-4">Request Documentation</h3>,
                <p className="text-gray-300 mb-4">,
                  To request compliance documentation or schedule a compliance review, please contact our compliance team.
              <div></div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-4">Request Documentation</h3><p className="text-gray-300 mb-4">To request compliance documentation or schedule a compliance review, please contact our compliance team.</p>
                </p>
                <a;
                  href="mailto: compliance@ziontechgroup.com"
                  className="inline-flex items-center px-4 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors"
                ></a>
                  <FileText className="w-4 h-4 mr-2" />
                  Request Documentation;
                </a>
              </div>
            </div>
          </div>,
        </section>,
,
        {/* Contact Information */}
        <section className="mb-16"></section>
          <div className="cyber-card p-8"></section>
            <h2 className="text-2xl font-bold text-white mb-6 neon-text">Compliance Questions?</h2><p className="text-gray-300 mb-6">If you have any questions about our compliance posture or need specific compliance documentation, please contact our compliance team:</p>
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div>
              <div></div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-3">Compliance Team</h3>
            <h2 className="text-2xl font-bold text-white mb-6 neon-text">Compliance Questions?</h2>
            <p className="text-gray-300 mb-6"></p>
              If you have any questions about our compliance posture or need specific compliance documentation, please contact our compliance team: </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div>
              <div></div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-3">Compliance Team</h3>,
                <div className="space-y-2 text-gray-300">,
                  <p>Chief Compliance Officer</p>,
                  <p>Zion Tech Group</p>,
                  <p>364 E Main St STE 1008</p>,
                  <p>Middletown, DE 19709</p>
                <div className="space-y-2 text-gray-300"></div>
                  <p>Chief Compliance Officer</p><p>Zion Tech Group</p>
                  <p>364 E Main St STE 1008</p><p>Middletown, DE 19709</p>
                </div>
              </div>
              <div></div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-3">Contact Information</h3>
                <div className="space-y-2 text-gray-300"></div>
                  <p>Email:</p> <a href="mailto:compliance@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">compliance@ziontechgroup.com</a>
                  <p>Phone:</p> <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">+1 302 464 0950<p>Response Time: Within 24 hours</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>,
,
      <Footer />,
    </div>);
};

export default CompliancePage;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
=======
    <  />
  );
};

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
=======
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Compliance - Zion Tech Group</title>
        <meta name="description" content="Professional compliance services by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Compliance</h1>
          <p className="text-lg text-gray-300 mb-8">Professional compliance services coming soon.</p>
          
          <Link
            to="/contact"
            className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
          >
            Contact Us
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0659
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
