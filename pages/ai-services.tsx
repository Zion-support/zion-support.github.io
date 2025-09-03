import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Brain, Zap, Shield, Eye, Mic, TrendingUp, Database, FileText, Mail, Code, Cog, Search } from 'lucide-react';

export default function AIServices() {
  const contact = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    site: 'https://ziontechgroup.com'
  };

  const aiServices = [
    {
      icon: Brain,
      name: 'AI Customer Support Automation',
      description: 'Intelligent chatbots and automated customer service solutions that reduce response times by 80% and improve customer satisfaction.',
      features: [
        'Natural language processing and understanding',
        'Multi-channel support (chat, email, phone)',
        'Human-in-the-loop escalation',
        'Knowledge base integration and mining',
        'Sentiment analysis and mood detection',
        '24/7 availability with instant responses'
      ],
      pricing: '$2,000 – $8,000 setup',
      perUnit: '$0.02 – $0.20 per session',
      timeline: '4–8 weeks',
      benefits: [
        '80% reduction in response time',
        '60% decrease in support costs',
        '24/7 customer availability',
        'Improved customer satisfaction scores'
      ]
    },
    {
      icon: TrendingUp,
      name: 'Predictive Analytics & Forecasting',
      description: 'Advanced machine learning models for demand forecasting, revenue prediction, and business intelligence.',
      features: [
        'Time-series forecasting and analysis',
        'Demand prediction and inventory optimization',
        'Revenue and churn prediction models',
        'Supply chain risk assessment',
        'Market trend analysis',
        'Real-time dashboard and alerts'
      ],
      pricing: '$4,000 – $20,000 project',
      perUnit: 'Custom pricing based on data volume',
      timeline: '6–12 weeks',
      benefits: [
        '95% accuracy in demand forecasting',
        '30% reduction in inventory costs',
        'Early warning system for risks',
        'Data-driven decision making'
      ]
    },
    {
      icon: FileText,
      name: 'GenAI Content & SEO Automation',
      description: 'AI-powered content generation, SEO optimization, and editorial workflow automation for digital marketing.',
      features: [
        'High-quality content generation',
        'SEO optimization and keyword research',
        'Content clustering and internal linking',
        'Editorial calendar automation',
        'Brand voice consistency',
        'Performance tracking and optimization'
      ],
      pricing: '$1,000 – $6,000/month',
      perUnit: '$0.10 – $1.00 per article',
      timeline: '2–4 weeks',
      benefits: [
        '10x faster content production',
        '40% improvement in SEO rankings',
        'Consistent brand messaging',
        'Reduced content creation costs'
      ]
    },
    {
      icon: Eye,
      name: 'Computer Vision & Image Recognition',
      description: 'Advanced computer vision solutions for object detection, facial recognition, and visual content analysis.',
      features: [
        'Custom object detection and classification',
        'Facial recognition and biometric authentication',
        'OCR and document text extraction',
        'Real-time image processing',
        'Quality control and defect detection',
        'Visual search and recommendation'
      ],
      pricing: '$5,000 – $25,000 setup',
      perUnit: '$0.01 – $0.10 per image',
      timeline: '6–12 weeks',
      benefits: [
        '99.5% accuracy in object detection',
        'Automated quality control',
        'Enhanced security with biometrics',
        'Reduced manual inspection costs'
      ]
    },
    {
      icon: Database,
      name: 'Natural Language Processing Engine',
      description: 'Comprehensive NLP solutions for text analysis, sentiment detection, and language understanding.',
      features: [
        'Text analysis and sentiment detection',
        'Entity extraction and classification',
        'Language translation and localization',
        'Document summarization',
        'Intent recognition and classification',
        'Custom model training and fine-tuning'
      ],
      pricing: '$3,000 – $15,000 setup',
      perUnit: '$0.001 – $0.01 per request',
      timeline: '4–8 weeks',
      benefits: [
        '90% accuracy in sentiment analysis',
        'Automated document processing',
        'Multi-language support',
        'Real-time text understanding'
      ]
    },
    {
      icon: Shield,
      name: 'AI-Powered Fraud Detection',
      description: 'Real-time fraud detection and risk assessment using advanced machine learning algorithms.',
      features: [
        'Real-time transaction fraud scoring',
        'Behavioral anomaly detection',
        'Machine learning model training',
        'Risk assessment and decision automation',
        'Pattern recognition and analysis',
        'Continuous learning and adaptation'
      ],
      pricing: '$8,000 – $40,000 setup',
      perUnit: '$0.05 – $0.50 per transaction',
      timeline: '8–16 weeks',
      benefits: [
        '99.9% fraud detection accuracy',
        'Real-time risk assessment',
        'Reduced false positives',
        'Compliance with regulations'
      ]
    },
    {
      icon: Mic,
      name: 'Voice AI & Speech Recognition',
      description: 'Advanced voice processing solutions including speech-to-text, voice synthesis, and conversational AI.',
      features: [
        'High-accuracy speech-to-text conversion',
        'Natural language understanding',
        'Voice biometric authentication',
        'Conversational AI and chatbots',
        'Multi-language voice support',
        'Real-time voice processing'
      ],
      pricing: '$6,000 – $30,000 setup',
      perUnit: '$0.02 – $0.20 per minute',
      timeline: '6–10 weeks',
      benefits: [
        '95% accuracy in speech recognition',
        'Hands-free operation',
        'Enhanced accessibility',
        'Improved user experience'
      ]
    },
    {
      icon: Zap,
      name: 'Recommendation Engine',
      description: 'Personalized recommendation systems that increase engagement and conversion rates.',
      features: [
        'Personalized product recommendations',
        'Content suggestion algorithms',
        'User behavior analysis',
        'A/B testing and optimization',
        'Real-time recommendation updates',
        'Multi-channel recommendation delivery'
      ],
      pricing: '$4,000 – $20,000 setup',
      perUnit: '$0.01 – $0.10 per recommendation',
      timeline: '4–8 weeks',
      benefits: [
        '35% increase in conversion rates',
        'Improved user engagement',
        'Higher average order value',
        'Reduced bounce rates'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <Head>
        <title>AI Services — Zion Tech Group</title>
        <meta name="description" content="Advanced AI services including machine learning, computer vision, NLP, and automation solutions. Transform your business with cutting-edge AI technology." />
        <link rel="canonical" href={`${contact.site}/ai-services`} />
      </Head>

      <header className="py-20 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
          AI Services & Solutions
        </h1>
        <p className="mt-4 text-slate-300 max-w-3xl mx-auto text-lg">
          Transform your business with cutting-edge AI technology. From machine learning to computer vision, 
          we deliver intelligent solutions that drive real results and measurable ROI.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a href={`tel:${contact.phone.replace(/[^\d+]/g,'')}`} className="px-5 py-2 rounded bg-blue-600 hover:bg-blue-700">Call {contact.phone}</a>
          <a href={`mailto:${contact.email}`} className="px-5 py-2 rounded bg-purple-600 hover:bg-purple-700">Email {contact.email}</a>
          <Link href="/contact" className="px-5 py-2 rounded bg-slate-800 hover:bg-slate-700 border border-white/10">Get Quote</Link>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 pb-24">
        <div className="grid gap-8">
          {aiServices.map((service, index) => (
            <div key={index} className="rounded-xl border border-white/10 bg-slate-900/60 p-8 hover:border-blue-500/40 transition-colors">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <service.icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-2">{service.name}</h2>
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
                    <span className="text-slate-400">Per Unit:</span>
                    <span className="font-semibold text-purple-400">{service.perUnit}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-slate-400">Timeline:</span>
                    <span className="font-semibold text-green-400">{service.timeline}</span>
                  </div>
                  <div className="ml-auto flex gap-3">
                    <Link href="/contact" className="px-4 py-2 rounded bg-blue-600 hover:bg-blue-700 text-sm font-semibold">
                      Request Quote
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

        <section className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business with AI?</h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Our AI experts are ready to help you implement cutting-edge solutions that drive real business value. 
            Contact us today for a free consultation and custom AI strategy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${contact.phone.replace(/[^\d+]/g,'')}`} className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold">
              Call {contact.phone}
            </a>
            <a href={`mailto:${contact.email}`} className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold">
              Email {contact.email}
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}