import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { CheckCircle, ArrowRight, Shield, Zap, Users, Globe } from 'lucide-react';

export default function Solutions() {
  const contact = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    site: 'https://ziontechgroup.com'
  };

  const solutions = [
    {
      icon: Shield,
      title: 'Enterprise Security Solutions',
      description: 'Comprehensive cybersecurity and data protection for large organizations.',
      features: ['Advanced Threat Detection', 'Compliance Management', '24/7 Monitoring', 'Incident Response'],
      link: '/cybersecurity'
    },
    {
      icon: Zap,
      title: 'Cloud Infrastructure Solutions',
      description: 'Scalable cloud platforms and DevOps automation for modern businesses.',
      features: ['Auto-scaling Infrastructure', 'CI/CD Pipelines', 'Monitoring & Analytics', 'Cost Optimization'],
      link: '/cloud-devops'
    },
    {
      icon: Users,
      title: 'AI-Powered Business Solutions',
      description: 'Intelligent automation and machine learning solutions for business growth.',
      features: ['Process Automation', 'Predictive Analytics', 'Natural Language Processing', 'Custom AI Models'],
      link: '/ai-services'
    },
    {
      icon: Globe,
      title: 'Digital Transformation Solutions',
      description: 'Complete digital transformation services for traditional businesses.',
      features: ['Legacy System Modernization', 'Digital Strategy', 'Change Management', 'Training & Support'],
      link: '/it-services'
    }
  ];

  const enterpriseFeatures = [
    'Dedicated Account Management',
    'Custom Service Level Agreements',
    'Priority Support & Response',
    'Advanced Security & Compliance',
    'Scalable Infrastructure',
    '24/7 Technical Support'
  ];

  return (
    <>
      <Head>
        <title>Enterprise Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive enterprise solutions including cybersecurity, cloud infrastructure, AI automation, and digital transformation services for large organizations." />
        <meta name="keywords" content="enterprise solutions, cybersecurity, cloud infrastructure, AI automation, digital transformation, business solutions" />
        <link rel="canonical" href={`${contact.site}/solutions`} />
        <meta property="og:title" content="Enterprise Solutions - Zion Tech Group" />
        <meta property="og:description" content="Comprehensive enterprise solutions including cybersecurity, cloud infrastructure, AI automation, and digital transformation services for large organizations." />
        <meta property="og:url" content={`${contact.site}/solutions`} />
        <meta property="og:type" content="website" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              Enterprise Solutions
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Comprehensive technology solutions designed for large organizations. 
              From cybersecurity to AI automation, we provide enterprise-grade services 
              that scale with your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
              >
                Get Enterprise Quote
              </Link>
              <Link 
                href="/services" 
                className="px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white border border-white/20 rounded-lg font-semibold transition-colors"
              >
                View All Services
              </Link>
            </div>
          </div>

          {/* Solutions Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                <div className="flex items-center mb-4">
                  <solution.icon className="w-8 h-8 text-blue-400 mr-3" />
                  <h3 className="text-2xl font-bold text-white">{solution.title}</h3>
                </div>
                <p className="text-slate-300 mb-6">{solution.description}</p>
                <ul className="space-y-2 mb-6">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-slate-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-2 flex-shrink-0" />
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
          <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-8 border border-white/10">
            <h2 className="text-3xl font-bold text-white text-center mb-8">
              Enterprise-Grade Features
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {enterpriseFeatures.map((feature, index) => (
                <div key={index} className="flex items-center text-slate-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  {feature}
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Enterprise?
            </h2>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              Contact our enterprise team to discuss your specific requirements 
              and get a customized solution proposal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={`tel:${contact.phone}`}
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
              >
                Call {contact.phone}
              </a>
              <a 
                href={`mailto:${contact.email}`}
                className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold transition-colors"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}