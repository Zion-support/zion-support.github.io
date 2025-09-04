import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Layers, Cloud, FileText, Users, BarChart3, Mail, Clock, Shield, Zap, TrendingUp, Settings, Globe, Code, Brain, Calendar, Headphones, RefreshCw, Video, Stethoscope, Cpu } from 'lucide-react';

export default function MicroSaaS() {
  const contact = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    site: 'https://ziontechgroup.com'
  };

  const microSaaSServices = [
    {
      icon: Cloud,
      name: 'Cloud Cost Guard (FinOps Assistant)',
      description: 'Automated cloud cost optimization and financial operations management across AWS, Azure, and GCP.',
      features: [
        'Real-time anomaly detection on cloud spending',
        'Automated rightsizing recommendations',
        'Budget forecasting and alerting',
        'Resource utilization optimization',
        'Multi-cloud cost comparison',
        'Executive dashboards and reporting'
      ],
      pricing: '$299 – $1499/month',
      timeline: '1–2 weeks',
      benefits: [
        'Average 30% reduction in cloud costs',
        'Automated cost optimization',
        'Real-time budget monitoring',
        'Proactive cost anomaly detection'
      ],
      category: 'Cloud Management'
    },
    {
      icon: FileText,
      name: 'Smart Document Processor',
      description: 'AI-powered document extraction, classification, and workflow automation for businesses.',
      features: [
        'OCR and intelligent data extraction',
        'Document classification and routing',
        'Workflow automation and approval processes',
        'Integration with existing business systems',
        'Compliance and audit trail',
        'Multi-format document support'
      ],
      pricing: '$399 – $2499/month',
      timeline: '2–3 weeks',
      benefits: [
        '90% reduction in manual data entry',
        'Automated document processing',
        'Improved accuracy and compliance',
        'Streamlined workflows'
      ],
      category: 'Document Management'
    },
    {
      icon: Users,
      name: 'Customer Feedback & NPS Micro-App',
      description: 'Embed surveys, analyze sentiment and route issues to the right team automatically.',
      features: [
        'Embeddable survey widgets',
        'Sentiment analysis and NPS scoring',
        'Automated issue routing and escalation',
        'Real-time feedback dashboards',
        'Integration with CRM and support systems',
        'Customizable survey templates'
      ],
      pricing: '$149 – $799/month',
      timeline: '1–2 weeks',
      benefits: [
        '40% increase in response rates',
        'Automated sentiment analysis',
        'Proactive issue resolution',
        'Improved customer satisfaction'
      ],
      category: 'Customer Experience'
    },
    {
      icon: BarChart3,
      name: 'API Rate Limiter & Analytics',
      description: 'Intelligent rate limiting, usage analytics, and API monetization for SaaS platforms.',
      features: [
        'Dynamic rate limiting and throttling',
        'Usage analytics and reporting',
        'API monetization and billing',
        'Developer portal and documentation',
        'Security and abuse prevention',
        'Real-time monitoring and alerts'
      ],
      pricing: '$199 – $999/month',
      timeline: '1–3 weeks',
      benefits: [
        '99.9% API uptime guarantee',
        'Automated rate limiting',
        'Revenue optimization',
        'Enhanced security'
      ],
      category: 'API Management'
    },
    {
      icon: Brain,
      name: 'LLM Evaluation & Safety Suite',
      description: 'Prompt evaluation, bias/toxicity checks, jailbreak tests and guardrail policies.',
      features: [
        'Automated prompt testing and evaluation',
        'Bias and toxicity detection',
        'Jailbreak attempt prevention',
        'Custom guardrail policies',
        'Performance benchmarking',
        'Compliance monitoring'
      ],
      pricing: '$799 – $3500/month',
      timeline: '2–4 weeks',
      benefits: [
        '95% reduction in harmful outputs',
        'Automated safety testing',
        'Compliance assurance',
        'Improved model reliability'
      ],
      category: 'AI Safety'
    },
    {
      icon: Shield,
      name: 'Security Compliance Monitor',
      description: 'Automated security compliance monitoring and reporting for SOC 2, GDPR, and other standards.',
      features: [
        'Automated compliance scanning',
        'Real-time security monitoring',
        'Audit trail and reporting',
        'Policy enforcement and alerts',
        'Integration with security tools',
        'Compliance dashboard'
      ],
      pricing: '$599 – $2999/month',
      timeline: '2–4 weeks',
      benefits: [
        '100% compliance coverage',
        'Automated monitoring',
        'Reduced audit preparation time',
        'Proactive security management'
      ],
      category: 'Security'
    }
  ];

  return (
    <>
      <Head>
        <title>Micro SaaS Products - Zion Tech Group | 150+ Ready-to-Use Solutions</title>
        <meta name="description" content="Discover our collection of 150+ micro SaaS products designed to solve specific business problems. From cloud management to AI safety, find the perfect solution for your needs." />
        <meta name="keywords" content="micro SaaS, SaaS products, business solutions, cloud management, AI safety, document processing, API management" />
        <link rel="canonical" href={`${contact.site}/micro-saas`} />
        <meta property="og:title" content="Micro SaaS Products - Zion Tech Group | 150+ Ready-to-Use Solutions" />
        <meta property="og:description" content="Discover our collection of 150+ micro SaaS products designed to solve specific business problems." />
        <meta property="og:url" content={`${contact.site}/micro-saas`} />
        <meta property="og:type" content="website" />
      </Head>

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Micro SaaS Products
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Discover our collection of 150+ micro SaaS products designed to solve specific business problems. 
                Each solution is ready to deploy and can be customized to your exact needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Browse All Products
                </Link>
                <Link 
                  href="/services"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                >
                  View All Services
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Micro SaaS Services Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Featured Micro SaaS Products
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Each product is designed to solve a specific business problem and can be deployed in weeks, not months.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaaSServices.map((service, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                  <div className="flex items-center mb-4">
                    <service.icon className="w-8 h-8 text-blue-600 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900">{service.name}</h3>
                  </div>
                  
                  <div className="mb-4">
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                      {service.category}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                          <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-700">
                          <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center mb-4">
                      <div>
                        <p className="text-sm text-gray-600">Pricing</p>
                        <p className="font-semibold text-gray-900">{service.pricing}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Deployment</p>
                        <p className="font-semibold text-gray-900">{service.timeline}</p>
                      </div>
                    </div>
                    <Link
                      href="/contact"
                      className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors text-center block"
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Product Categories
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our micro SaaS products are organized into categories to help you find exactly what you need.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  <Cloud className="w-8 h-8 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Cloud Management</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Tools for cloud cost optimization, resource management, and infrastructure monitoring.
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Cost optimization and FinOps</li>
                  <li>• Resource monitoring and alerts</li>
                  <li>• Multi-cloud management</li>
                  <li>• Security and compliance</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  <Brain className="w-8 h-8 text-purple-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">AI & Machine Learning</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  AI-powered solutions for automation, analysis, and intelligent decision making.
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Document processing and OCR</li>
                  <li>• Predictive analytics</li>
                  <li>• AI safety and evaluation</li>
                  <li>• Natural language processing</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  <Shield className="w-8 h-8 text-green-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Security & Compliance</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Security tools and compliance monitoring for enterprise-grade protection.
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Compliance monitoring</li>
                  <li>• Security scanning and alerts</li>
                  <li>• Access management</li>
                  <li>• Audit and reporting</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Deploy Your First Micro SaaS?
            </h2>
            <p className="text-xl mb-8">
              Browse our complete catalog of 150+ micro SaaS products and find the perfect solution for your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Browse All Products
              </Link>
              <a 
                href={`tel:${contact.phone}`}
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Call {contact.phone}
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}