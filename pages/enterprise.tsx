import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Shield, Zap, Users, Globe, CheckCircle, ArrowRight, Star, Award } from 'lucide-react';

export default function Enterprise() {
  const contact = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    site: 'https://ziontechgroup.com'
  };

  const enterpriseSolutions = [
    {
      icon: Shield,
      title: 'Enterprise Security Suite',
      description: 'Comprehensive cybersecurity solutions designed for large organizations.',
      features: [
        'Advanced Threat Detection & Response',
        'Compliance Management (SOC2, ISO27001)',
        '24/7 Security Operations Center',
        'Penetration Testing & Vulnerability Assessment',
        'Security Awareness Training',
        'Incident Response Planning'
      ],
      link: '/cybersecurity'
    },
    {
      icon: Zap,
      title: 'Cloud Infrastructure Platform',
      description: 'Scalable, secure cloud infrastructure with enterprise-grade reliability.',
      features: [
        'Multi-cloud Architecture Design',
        'Auto-scaling & Load Balancing',
        'Disaster Recovery & Backup Solutions',
        'Infrastructure as Code (IaC)',
        'Cost Optimization & Monitoring',
        'DevOps & CI/CD Implementation'
      ],
      link: '/cloud-devops'
    },
    {
      icon: Users,
      title: 'AI & Machine Learning Platform',
      description: 'Enterprise AI solutions to automate processes and drive insights.',
      features: [
        'Custom AI Model Development',
        'Natural Language Processing',
        'Computer Vision Solutions',
        'Predictive Analytics & Forecasting',
        'Process Automation & RPA',
        'AI Strategy & Implementation'
      ],
      link: '/ai-services'
    },
    {
      icon: Globe,
      title: 'Digital Transformation Services',
      description: 'Complete digital transformation for traditional enterprises.',
      features: [
        'Legacy System Modernization',
        'Digital Strategy & Roadmapping',
        'Change Management & Training',
        'API Development & Integration',
        'Data Migration & Management',
        'User Experience Design'
      ],
      link: '/it-services'
    }
  ];

  const enterpriseFeatures = [
    {
      icon: Star,
      title: 'Dedicated Account Management',
      description: 'Personal account manager and dedicated support team for your organization.'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with advanced encryption and compliance certifications.'
    },
    {
      icon: Zap,
      title: '99.9% Uptime SLA',
      description: 'Guaranteed service availability with comprehensive monitoring and redundancy.'
    },
    {
      icon: Users,
      title: '24/7 Technical Support',
      description: 'Round-the-clock support with priority response times for critical issues.'
    },
    {
      icon: Award,
      title: 'Custom Service Level Agreements',
      description: 'Tailored SLAs designed to meet your specific business requirements.'
    },
    {
      icon: Globe,
      title: 'Global Deployment',
      description: 'Worldwide infrastructure with local compliance and data residency options.'
    }
  ];

  const industries = [
    'Financial Services',
    'Healthcare & Life Sciences',
    'Manufacturing & Industrial',
    'Retail & E-commerce',
    'Government & Public Sector',
    'Education & Research',
    'Energy & Utilities',
    'Media & Entertainment'
  ];

  return (
    <>
      <Head>
        <title>Enterprise Solutions - Zion Tech Group</title>
        <meta name="description" content="Enterprise-grade technology solutions for large organizations. Comprehensive security, cloud infrastructure, AI automation, and digital transformation services." />
        <meta name="keywords" content="enterprise solutions, enterprise security, cloud infrastructure, AI automation, digital transformation, enterprise software" />
        <link rel="canonical" href={`${contact.site}/enterprise`} />
        <meta property="og:title" content="Enterprise Solutions - Zion Tech Group" />
        <meta property="og:description" content="Enterprise-grade technology solutions for large organizations. Comprehensive security, cloud infrastructure, AI automation, and digital transformation services." />
        <meta property="og:url" content={`${contact.site}/enterprise`} />
        <meta property="og:type" content="website" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              Enterprise Solutions
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-4xl mx-auto">
              Comprehensive technology solutions designed for large organizations. 
              From Fortune 500 companies to government agencies, we provide enterprise-grade 
              services that scale with your business and meet the highest security standards.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
              >
                Request Enterprise Demo
              </Link>
              <a 
                href={`tel:${contact.phone}`}
                className="px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white border border-white/20 rounded-lg font-semibold transition-colors"
              >
                Call {contact.phone}
              </a>
            </div>
          </div>

          {/* Enterprise Solutions Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {enterpriseSolutions.map((solution, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                <div className="flex items-center mb-6">
                  <solution.icon className="w-10 h-10 text-blue-400 mr-4" />
                  <h3 className="text-2xl font-bold text-white">{solution.title}</h3>
                </div>
                <p className="text-slate-300 mb-6">{solution.description}</p>
                <ul className="space-y-3 mb-6">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-slate-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  href={solution.link}
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold"
                >
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            ))}
          </div>

          {/* Enterprise Features */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Enterprise-Grade Features
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {enterpriseFeatures.map((feature, index) => (
                <div key={index} className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
                  <feature.icon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-slate-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Industries Served */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Industries We Serve
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {industries.map((industry, index) => (
                <div key={index} className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-4 border border-white/10 text-center">
                  <span className="text-slate-300 font-medium">{industry}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Enterprise CTA */}
          <div className="text-center bg-slate-800/30 backdrop-blur-sm rounded-xl p-12 border border-white/10">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Enterprise?
            </h2>
            <p className="text-slate-300 mb-8 max-w-3xl mx-auto">
              Our enterprise team is ready to discuss your specific requirements and create 
              a customized solution that meets your organization&apos;s unique needs. 
              Contact us today for a consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={`tel:${contact.phone}`}
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
              >
                Call {contact.phone}
              </a>
              <a 
                href={`mailto:${contact.email}?subject=Enterprise Solutions Inquiry`}
                className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold transition-colors"
              >
                Email Enterprise Team
              </a>
              <Link 
                href="/contact" 
                className="px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white border border-white/20 rounded-lg font-semibold transition-colors"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}