import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Layers, Cloud, FileText, Users, BarChart3, Mail, Clock, Shield, Zap, TrendingUp, Settings, Globe } from 'lucide-react';

export default function MicroSaaS() {
  const contact = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    site: 'https://ziontechgroup.com'
  }
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
      pricing: '$299 – $1,499/month',
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
      pricing: '$399 – $2,499/month',
      timeline: '2–3 weeks',
      benefits: [
        '90% reduction in manual data entry',
        'Automated document processing',
        'Improved accuracy and compliance',
        'Faster document turnaround times'
      ],
      category: 'Document Management'
    },
    {
      icon: Zap,
      name: 'API Rate Limiter & Analytics',
      description: 'Intelligent rate limiting, usage analytics, and API monetization for SaaS platforms.',
      features: [
        'Dynamic rate limiting based on user tiers',
        'Real-time usage analytics and reporting',
        'API monetization and billing integration',
        'DDoS protection and abuse prevention',
        'Custom rate limiting rules',
        'Performance monitoring and optimization'
      ],
      pricing: '$199 – $1,299/month',
      timeline: '1–2 weeks',
      benefits: [
        '99.9% API uptime guarantee',
        'Automated abuse prevention',
        'Revenue optimization through usage analytics',
        'Scalable rate limiting solutions'
      ],
      category: 'API Management'
    },
    {
      icon: Users,
      name: 'Lead Scoring & Qualification Engine',
      description: 'AI-powered lead scoring, qualification workflows, and CRM integration.',
      features: [
        'Machine learning-based lead scoring',
        'Automated qualification workflows',
        'CRM integration and data synchronization',
        'Predictive analytics and conversion optimization',
        'Behavioral tracking and analysis',
        'Custom scoring models and rules'
      ],
      pricing: '$299 – $1,999/month',
      timeline: '2–4 weeks',
      benefits: [
        '40% increase in lead conversion rates',
        'Automated lead qualification',
        'Improved sales team efficiency',
        'Data-driven lead prioritization'
      ],
      category: 'Sales Automation'
    },
    {
      icon: Mail,
      name: 'Email Deliverability Monitor',
      description: 'Real-time email reputation tracking, spam score analysis, and deliverability optimization.',
      features: [
        'Real-time email reputation monitoring',
        'Spam score analysis and optimization',
        'Deliverability testing and reporting',
        'ISP feedback loop management',
        'Blacklist monitoring and removal',
        'Email authentication setup'
      ],
      pricing: '$149 – $899/month',
      timeline: '1–2 weeks',
      benefits: [
        '95% email deliverability rate',
        'Reduced spam folder placement',
        'Improved email campaign performance',
        'Proactive reputation management'
      ],
      category: 'Email Marketing'
    },
    {
      icon: Globe,
      name: 'Website Uptime & Performance Tracker',
      description: 'Global monitoring, performance insights, and instant alerts for web applications.',
      features: [
        'Global uptime monitoring from 50+ locations',
        'Performance metrics and insights',
        'Instant alerts via email, SMS, and Slack',
        'Historical reporting and analytics',
        'SSL certificate monitoring',
        'API endpoint monitoring'
      ],
      pricing: '$79 – $499/month',
      timeline: '1 week',
      benefits: [
        '99.9% uptime monitoring',
        'Instant outage notifications',
        'Performance optimization insights',
        'Reduced downtime and revenue loss'
      ],
      category: 'Monitoring'
    },
    {
      icon: BarChart3,
      name: 'Team Productivity Analytics',
      description: 'Workflow optimization, time tracking, and productivity insights for remote teams.',
      features: [
        'Time tracking and productivity analysis',
        'Workflow optimization recommendations',
        'Team performance dashboards',
        'Goal setting and progress tracking',
        'Integration with popular tools',
        'Privacy-focused analytics'
      ],
      pricing: '$149 – $999/month',
      timeline: '2–3 weeks',
      benefits: [
        '25% improvement in team productivity',
        'Data-driven workflow optimization',
        'Better resource allocation',
        'Enhanced team collaboration'
      ],
      category: 'Productivity'
    },
    {
      icon: TrendingUp,
      name: 'SEO Content Optimizer',
      description: 'AI-driven content optimization, keyword research, and SERP tracking.',
      features: [
        'AI-powered content optimization',
        'Keyword research and analysis',
        'SERP tracking and monitoring',
        'Content performance analytics',
        'Competitor analysis and insights',
        'Automated content suggestions'
      ],
      pricing: '$199 – $1,499/month',
      timeline: '2–3 weeks',
      benefits: [
        '40% improvement in search rankings',
        'Automated content optimization',
        'Data-driven SEO strategies',
        'Competitive advantage insights'
      ],
      category: 'SEO & Marketing'
    },
    {
      icon: Settings,
      name: 'Customer Support Ticket Router',
      description: 'Intelligent ticket classification, routing, and escalation management.',
      features: [
        'AI-powered ticket classification',
        'Automated routing to appropriate agents',
        'Escalation management and workflows',
        'Performance analytics and reporting',
        'Integration with support tools',
        'Customer satisfaction tracking'
      ],
      pricing: '$249 – $1,599/month',
      timeline: '2–4 weeks',
      benefits: [
        '60% faster ticket resolution',
        'Improved customer satisfaction',
        'Automated workflow management',
        'Better resource utilization'
      ],
      category: 'Customer Support'
    },
    {
      icon: Shield,
      name: 'Invoice & Payment Automation',
      description: 'Automated invoicing, payment processing, and financial reporting for SMBs.',
      features: [
        'Automated invoice generation and sending',
        'Payment processing and tracking',
        'Financial reporting and analytics',
        'Tax calculation and compliance',
        'Customer portal and self-service',
        'Integration with accounting systems'
      ],
      pricing: '$199 – $1,299/month',
      timeline: '2–3 weeks',
      benefits: [
        '50% reduction in payment processing time',
        'Automated financial workflows',
        'Improved cash flow management',
        'Reduced accounting errors'
      ],
      category: 'Financial Management'
    }
  ];

  const categories = [...new Set(microSaaSServices.map(service => service.category))];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <Head>
        <title>Micro SaaS Products — Zion Tech Group</title>
        <meta name="description" content="Ready-to-deploy micro SaaS products including cloud cost optimization, document processing, API management, and more. Transform your business with innovative solutions." />
        <link rel="canonical" href={`${contact.site}/micro-saas`} />
      </Head>

      <header className="py-20 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
          Micro SaaS Products
        </h1>
        <p className="mt-4 text-slate-300 max-w-3xl mx-auto text-lg">
          Ready-to-deploy SaaS solutions that solve real business problems. From cloud cost optimization 
          to document processing, our micro SaaS products deliver immediate value with minimal setup time.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a href={`tel:${contact.phone.replace(/[^\d+]/g,'')}`} className="px-5 py-2 rounded bg-blue-600 hover:bg-blue-700">Call {contact.phone}</a>
          <a href={`mailto:${contact.email}`} className="px-5 py-2 rounded bg-purple-600 hover:bg-purple-700">Email {contact.email}</a>
          <Link href="/contact" className="px-5 py-2 rounded bg-slate-800 hover:bg-slate-700 border border-white/10">Get Started</Link>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 pb-24">
        {/* Category Filter */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Browse by Category</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 border border-white/10 text-sm font-medium transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8">
          {microSaaSServices.map((service, index) => (
            <div key={index} className="rounded-xl border border-white/10 bg-slate-900/60 p-8 hover:border-blue-500/40 transition-colors">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <service.icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h2 className="text-2xl font-bold">{service.name}</h2>
                    <span className="px-2 py-1 rounded bg-slate-800/70 border border-white/10 text-xs font-medium">
                      {service.category}
                    </span>
                  </div>
                  <p className="text-slate-300 text-lg">{service.description}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-blue-400">Key Features</h3>
                  <ul className="space-y-2 text-slate-300">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-blue-400 mt-1">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-green-400">Business Benefits</h3>
                  <ul className="space-y-2 text-slate-300">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-green-400 mt-1">✓</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-white/10">
                <div className="flex flex-wrap items-center gap-6">
                  <div className="flex items-center gap-2">
                    <span className="text-slate-400">Pricing:</span>
                    <span className="font-semibold text-blue-400">{service.pricing}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-slate-400">Setup Time:</span>
                    <span className="font-semibold text-green-400">{service.timeline}</span>
                  </div>
                  <div className="ml-auto flex gap-3">
                    <Link href="/contact" className="px-4 py-2 rounded bg-blue-600 hover:bg-blue-700 text-sm font-semibold">
                      Get Started
                    </Link>
                    <Link href="/contact" className="px-4 py-2 rounded bg-slate-800 hover:bg-slate-700 border border-white/10 text-sm font-semibold">
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <section className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8">
            <h2 className="text-3xl font-bold mb-4">Ready to Deploy Your Micro SaaS Solution?</h2>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              Our micro SaaS products are designed for quick deployment and immediate value. 
              Most solutions can be up and running within 1-4 weeks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`tel:${contact.phone.replace(/[^\d+]/g,'')}`} className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Call {contact.phone}
              </a>
              <a href={`mailto:${contact.email}`} className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Email {contact.email}
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}