import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  MessageSquare, 
  FileText, 
  Users, 
  CheckCircle, 
  Brain, 
  Zap, 
  Shield, 
  BarChart3, 
  ArrowRight,
  DollarSign,
  Clock,
  Star,
  TrendingUp,
  Smartphone,
  Network
} from 'lucide-react';

export default function AIServices() {
  const title = 'AI Services — Zion Tech Group';
  const description = 'Cutting-edge AI solutions including autonomous systems, machine learning, natural language processing, and intelligent automation with proven ROI. Enterprise-grade AI services with transparent pricing and fast delivery.';

  const aiServices = [
    {
      title: 'AI-Powered Email Responder',
      description: 'Automated email responses with sentiment analysis and intelligent categorization',
      icon: MessageSquare,
      features: [
        'Smart email categorization and prioritization',
        'Automated response generation with personalization',
        'Sentiment analysis and escalation triggers',
        'Integration with CRM and helpdesk systems',
        'Multi-language support and compliance',
        'Real-time performance analytics'
      ],
      pricing: '$2,500 - $8,000/month',
      delivery: '2-3 weeks',
      category: 'Communication AI',
      benefits: [
        '80% reduction in response time',
        '95% customer satisfaction improvement',
        '60% cost savings on support staff',
        '24/7 automated customer service'
      ],
      useCases: ['Customer support', 'Sales teams', 'Helpdesk operations', 'E-commerce platforms'],
      marketSize: '$8.6B conversational AI market'
    },
    {
      title: 'AI Content Creation Suite',
      description: 'Comprehensive AI-powered content generation for marketing, social media, and documentation',
      icon: FileText,
      features: [
        'Automated blog posts and articles',
        'Social media content generation',
        'Product descriptions and marketing copy',
        'Technical documentation creation',
        'SEO-optimized content with keyword integration',
        'Multi-brand voice consistency'
      ],
      pricing: '$1,500 - $5,000/month',
      delivery: '1-2 weeks',
      category: 'Content AI',
      benefits: [
        '10x faster content creation',
        '40% improvement in engagement rates',
        '50% reduction in content costs',
        'Consistent brand messaging'
      ],
      useCases: ['Marketing agencies', 'E-commerce brands', 'SaaS companies', 'Content creators'],
      marketSize: '$8.2B content marketing market'
    },
    {
      title: 'Intelligent Document Processing',
      description: 'AI-powered document analysis, extraction, and processing for business automation',
      icon: FileText,
      features: [
        'Automated data extraction from PDFs and forms',
        'Document classification and routing',
        'OCR with 99%+ accuracy',
        'Contract analysis and risk assessment',
        'Compliance monitoring and reporting',
        'Workflow automation and approval processes'
      ],
      pricing: '$3,000 - $12,000/month',
      delivery: '3-4 weeks',
      category: 'Document AI',
      benefits: [
        '90% reduction in manual processing',
        '99.5% accuracy in data extraction',
        '75% faster document processing',
        'Automated compliance reporting'
      ],
      useCases: ['Legal firms', 'Insurance companies', 'Healthcare providers', 'Financial services'],
      marketSize: '$12.4B document management market'
    },
    {
      title: 'AI-Powered Talent Matching',
      description: 'Advanced recruitment platform with AI-driven candidate screening and matching',
      icon: Users,
      features: [
        'Intelligent candidate screening and ranking',
        'Skills matching and gap analysis',
        'Automated interview scheduling',
        'Cultural fit assessment',
        'Predictive hiring analytics',
        'Diversity and inclusion metrics'
      ],
      pricing: '$4,000 - $15,000/month',
      delivery: '4-6 weeks',
      category: 'HR AI',
      benefits: [
        '50% reduction in time-to-hire',
        '85% improvement in candidate quality',
        '40% reduction in recruitment costs',
        'Data-driven hiring decisions'
      ],
      useCases: ['HR departments', 'Recruitment agencies', 'Tech companies', 'Enterprise organizations'],
      marketSize: '$15.8B talent acquisition market'
    },
    {
      title: 'AI Business Intelligence Platform',
      description: 'Advanced analytics and predictive insights for data-driven decision making',
      icon: BarChart3,
      features: [
        'Real-time data visualization and dashboards',
        'Predictive analytics and forecasting',
        'Natural language query interface',
        'Automated report generation',
        'Anomaly detection and alerts',
        'Multi-source data integration'
      ],
      pricing: '$5,000 - $20,000/month',
      delivery: '4-8 weeks',
      category: 'Business Intelligence',
      benefits: [
        '300% faster decision making',
        '25% increase in revenue through insights',
        '90% reduction in report generation time',
        'Proactive business optimization'
      ],
      useCases: ['C-level executives', 'Data analysts', 'Business managers', 'Operations teams'],
      marketSize: '$33.3B business intelligence market'
    },
    {
      title: 'AI Cybersecurity Monitor',
      description: 'Advanced threat detection and automated security response system',
      icon: Shield,
      features: [
        'Real-time threat detection and analysis',
        'Automated incident response workflows',
        'Behavioral analytics and anomaly detection',
        'Vulnerability assessment and patching',
        'Compliance monitoring and reporting',
        'Security orchestration and automation'
      ],
      pricing: '$6,000 - $25,000/month',
      delivery: '4-8 weeks',
      category: 'Cybersecurity AI',
      benefits: [
        '99.9% threat detection accuracy',
        '80% faster incident response',
        '60% reduction in security breaches',
        'Automated compliance management'
      ],
      useCases: ['Financial institutions', 'Healthcare organizations', 'Government agencies', 'Enterprise companies'],
      marketSize: '$366.1B cybersecurity market'
    },
    {
      title: 'AI-Powered Supply Chain Optimization',
      description: 'Intelligent supply chain management with demand forecasting and inventory optimization',
      icon: Network,
      features: [
        'Demand forecasting with 95% accuracy',
        'Automated inventory optimization',
        'Supplier risk assessment and monitoring',
        'Route optimization and logistics planning',
        'Real-time supply chain visibility',
        'Sustainability and carbon footprint tracking'
      ],
      pricing: '$3,500 - $15,000/month',
      delivery: '4-8 weeks',
      category: 'Supply Chain AI',
      benefits: [
        '25% reduction in inventory costs',
        '40% improvement in delivery times',
        '30% reduction in supply chain risks',
        'Automated supplier relationship management'
      ],
      useCases: ['Manufacturing companies', 'Retail chains', 'Logistics providers', 'E-commerce platforms'],
      marketSize: '$37.4B supply chain management market'
    },
    {
      title: 'AI-Powered Financial Risk Management',
      description: 'Advanced financial risk assessment and portfolio optimization with real-time monitoring',
      icon: BarChart3,
      features: [
        'Real-time credit risk assessment',
        'Portfolio optimization algorithms',
        'Market volatility prediction',
        'Regulatory compliance monitoring',
        'Fraud detection and prevention',
        'Automated risk reporting and alerts'
      ],
      pricing: '$5,000 - $25,000/month',
      delivery: '6-10 weeks',
      category: 'Financial AI',
      benefits: [
        '35% reduction in credit losses',
        '20% improvement in portfolio returns',
        '90% faster risk assessment',
        'Automated regulatory compliance'
      ],
      useCases: ['Banks', 'Investment firms', 'Insurance companies', 'Fintech startups'],
      marketSize: '$28.5B financial risk management market'
    },
    {
      title: 'AI-Powered Healthcare Diagnostics',
      description: 'Medical image analysis and diagnostic assistance with AI-powered insights',
      icon: Shield,
      features: [
        'Medical image analysis (X-ray, MRI, CT scans)',
        'Symptom analysis and preliminary diagnosis',
        'Drug interaction checking',
        'Patient risk stratification',
        'Treatment recommendation engine',
        'Clinical decision support system'
      ],
      pricing: '$8,000 - $35,000/month',
      delivery: '8-12 weeks',
      category: 'Healthcare AI',
      benefits: [
        '30% improvement in diagnostic accuracy',
        '50% reduction in diagnostic time',
        '25% reduction in medical errors',
        'Enhanced patient outcomes'
      ],
      useCases: ['Hospitals', 'Clinics', 'Diagnostic centers', 'Telemedicine platforms'],
      marketSize: '$45.2B healthcare AI market'
    },
    {
      title: 'AI-Powered Marketing Automation',
      description: 'Intelligent marketing campaign optimization with personalized customer journeys',
      icon: Zap,
      features: [
        'Customer segmentation and persona analysis',
        'Personalized content generation',
        'Campaign performance optimization',
        'Predictive customer lifetime value',
        'Multi-channel campaign orchestration',
        'Real-time marketing analytics'
      ],
      pricing: '$2,000 - $12,000/month',
      delivery: '3-6 weeks',
      category: 'Marketing AI',
      benefits: [
        '40% improvement in conversion rates',
        '60% reduction in customer acquisition costs',
        '35% increase in customer lifetime value',
        'Automated campaign optimization'
      ],
      useCases: ['E-commerce brands', 'SaaS companies', 'Marketing agencies', 'Enterprise organizations'],
      marketSize: '$6.4B marketing automation market'
    },
    {
      title: 'AI-Powered Quality Assurance',
      description: 'Automated software testing and quality assurance with intelligent test generation',
      icon: CheckCircle,
      features: [
        'Automated test case generation',
        'Intelligent bug detection and classification',
        'Performance testing automation',
        'Security vulnerability scanning',
        'Code quality analysis',
        'Continuous testing integration'
      ],
      pricing: '$1,500 - $8,000/month',
      delivery: '2-5 weeks',
      category: 'QA AI',
      benefits: [
        '70% reduction in testing time',
        '85% improvement in bug detection',
        '50% reduction in production defects',
        'Automated quality reporting'
      ],
      useCases: ['Software companies', 'DevOps teams', 'QA departments', 'Enterprise IT'],
      marketSize: '$4.1B software testing market'
    }
  ];

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, automation, business intelligence, cybersecurity AI" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-services" />
        <link rel="icon" href="/favicon.ico" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
        {/* Hero Section */}
        <section className="container mx-auto px-6 py-16">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Brain className="h-8 w-8 text-cyan-400 mr-3" />
              <span className="text-lg font-semibold text-cyan-400">Advanced AI Solutions</span>
            </div>
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              Revolutionary AI Services
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-4xl mx-auto">
              {description} Our AI solutions deliver measurable ROI with proven results across industries.
            </p>
            <div className="flex items-center justify-center gap-6 text-sm text-blue-200">
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                <span>Proven ROI</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                <span>Enterprise-Grade</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
        </section>

        {/* Main Services Grid */}
        <section className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {aiServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-semibold text-cyan-400 bg-cyan-400/20 px-2 py-1 rounded-full">
                          {service.category}
                        </span>
                        <span className="text-xs text-slate-400">•</span>
                        <span className="text-xs text-slate-400">{service.marketSize}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                      <p className="text-slate-300 mb-4">{service.description}</p>
                    </div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-slate-300">
                            <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                        {service.features.length > 3 && (
                          <li className="text-xs text-slate-400 ml-5">
                            +{service.features.length - 3} more features
                          </li>
                        )}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-fuchsia-400 mb-2">Proven Benefits:</h4>
                      <ul className="space-y-1">
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center text-sm text-slate-300">
                            <TrendingUp className="w-3 h-3 text-fuchsia-400 mr-2 flex-shrink-0" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-6">
                    <div className="text-left">
                      <div className="text-lg font-semibold text-cyan-400">{service.pricing}</div>
                      <div className="text-sm text-slate-400">{service.delivery} deployment</div>
                    </div>
                    <a 
                      href="/contact"
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>

                  <div className="pt-4 border-t border-slate-700/50">
                    <div className="flex flex-wrap gap-2">
                      {service.useCases.map((useCase, idx) => (
                        <span key={idx} className="text-xs bg-slate-700/50 text-slate-300 px-2 py-1 rounded">
                          {useCase}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Contact Section */}
        <section className="container mx-auto px-6 py-16">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-8 border border-cyan-500/20">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business with AI?</h2>
              <p className="text-blue-100 max-w-2xl mx-auto">
                Get a custom AI solution proposal tailored to your business needs. Most implementations start with a comprehensive AI readiness assessment.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Fast Implementation</h3>
                <p className="text-sm text-slate-300">Deploy AI solutions in 2-8 weeks with our proven methodology</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Proven ROI</h3>
                <p className="text-sm text-slate-300">Average 400% ROI within first year of implementation</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-fuchsia-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Star className="w-6 h-6 text-fuchsia-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Expert Support</h3>
                <p className="text-sm text-slate-300">24/7 support from AI specialists and data scientists</p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
                <a 
                  href="tel:+13024640950" 
                  className="inline-flex items-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-colors"
                >
                  <Smartphone className="w-4 h-4" />
                  +1 302 464 0950
                </a>
                <a 
                  href="mailto:kleber@ziontechgroup.com" 
                  className="inline-flex items-center gap-2 bg-slate-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-600 transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  kleber@ziontechgroup.com
                </a>
              </div>
              <p className="text-sm text-slate-400">
                364 E Main St STE 1008, Middletown DE 19709
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}